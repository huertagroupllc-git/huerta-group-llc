#!/usr/bin/env node
/**
 * Deterministic, dependency-free validator for the Institutional
 * Evolution Log (Phase Zero, fd-0003 FO-6).
 *
 * Verifies: registry schema conformance; identifier/path uniqueness,
 * format, and existence; three-way coverage among the registry, the
 * records directory, and INDEX.md; decision references resolving
 * against the determinations register and Decision History;
 * canonical-artifact references existing; the retrospective rule
 * (retrospective records require an authorizing fd-record reference);
 * refinement references resolving; and manifest inclusion of every
 * log document. Exits non-zero with one line per defect. Offline.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const errors = [];
const fail = (msg) => errors.push(msg);

function loadJson(rel) {
  try {
    return JSON.parse(readFileSync(resolve(root, rel), "utf8"));
  } catch (e) {
    fail(`${rel}: unreadable or invalid JSON (${e.message})`);
    return null;
  }
}

const schema = loadJson("institution/metadata/schemas/evolution-schema.json");
const registry = loadJson("institution/metadata/registries/evolution-registry.json");
const determinations = loadJson("institution/metadata/registries/determinations-registry.json");
const manifest = loadJson("institution/metadata/manifest.json");
if (!schema || !registry || !determinations || !manifest) report();

/* Shared minimal JSON Schema subset checker. */
function deref(node) {
  if (node && typeof node === "object" && node.$ref) {
    const m = /^#\/\$defs\/(.+)$/.exec(node.$ref);
    if (!m) throw new Error(`unsupported $ref ${node.$ref}`);
    return deref(schema.$defs[m[1]]);
  }
  return node;
}
const typeOf = (v) => (v === null ? "null" : Array.isArray(v) ? "array" : typeof v);
function check(value, rawNode, path) {
  const node = deref(rawNode);
  if (node.const !== undefined && value !== node.const)
    return fail(`${path}: must equal ${JSON.stringify(node.const)}`);
  if (node.enum && !node.enum.includes(value))
    return fail(`${path}: value ${JSON.stringify(value)} not in approved vocabulary`);
  if (node.type) {
    const types = Array.isArray(node.type) ? node.type : [node.type];
    const ok = types.some((t) => (t === "integer" ? Number.isInteger(value) : typeOf(value) === t));
    if (!ok) return fail(`${path}: expected ${types.join("|")}, got ${typeOf(value)}`);
  }
  if (typeOf(value) === "string") {
    if (node.pattern && !new RegExp(node.pattern).test(value))
      fail(`${path}: does not match pattern ${node.pattern}`);
    if (node.minLength !== undefined && value.length < node.minLength)
      fail(`${path}: shorter than minLength ${node.minLength}`);
  }
  if (Number.isInteger(value) && node.minimum !== undefined && value < node.minimum)
    fail(`${path}: below minimum ${node.minimum}`);
  if (typeOf(value) === "array") {
    if (node.minItems !== undefined && value.length < node.minItems)
      fail(`${path}: fewer than minItems ${node.minItems}`);
    if (node.items) value.forEach((v, i) => check(v, node.items, `${path}[${i}]`));
  }
  if (typeOf(value) === "object") {
    for (const req of node.required ?? [])
      if (!(req in value)) fail(`${path}: missing required property "${req}"`);
    for (const [k, v] of Object.entries(value)) {
      if (node.properties && k in node.properties) check(v, node.properties[k], `${path}.${k}`);
      else if (node.additionalProperties === false) fail(`${path}: unknown property "${k}"`);
    }
  }
}
check(registry, schema, "registry");

const records = registry.records ?? [];
const fdIds = new Set((determinations.records ?? []).map((r) => r.id));
const ids = new Set();
const paths = new Set();

for (const r of records) {
  if (ids.has(r.id)) fail(`${r.id}: duplicate identifier`);
  ids.add(r.id);
  if (paths.has(r.path)) fail(`${r.id}: duplicate path ${r.path}`);
  paths.add(r.path);
  if (!existsSync(resolve(root, r.path)))
    fail(`${r.id}: record file does not exist: ${r.path}`);
  for (const ref of r.decisionReferences ?? []) {
    if (/^fd-\d{4}$/.test(ref) && !fdIds.has(ref))
      fail(`${r.id}: decision reference "${ref}" does not resolve in the determinations register`);
    if (/^adr-\d{4}$/i.test(ref)) {
      const adrDir = resolve(root, "institution/decisions");
      const found = readdirSync(adrDir).some((f) => f.toLowerCase().startsWith(ref.toLowerCase()));
      if (!found) fail(`${r.id}: decision reference "${ref}" has no record in institution/decisions/`);
    }
  }
  for (const a of r.canonicalArtifactReferences ?? [])
    if (!existsSync(resolve(root, a)))
      fail(`${r.id}: canonical artifact reference does not exist: ${a}`);
  if (r.retrospective === true && !r.retrospectiveAuthorization)
    fail(`${r.id}: retrospective record requires retrospectiveAuthorization citing the authorizing fd-record — fabricated history is prohibited`);
  for (const ref of r.refinementReferences ?? [])
    if (!records.some((x) => x.id === ref))
      fail(`${r.id}: refinement reference "${ref}" does not resolve`);
}

// Three-way coverage: registry <-> records directory <-> INDEX.md.
const recDir = resolve(root, "institution/evolution/records");
const files = existsSync(recDir) ? readdirSync(recDir).filter((f) => f.endsWith(".md")) : [];
for (const f of files)
  if (!paths.has(`institution/evolution/records/${f}`))
    fail(`coverage: evolution record not in registry: institution/evolution/records/${f}`);
for (const p of paths)
  if (!files.includes(p.split("/").pop()))
    fail(`coverage: registry entry has no record file: ${p}`);
const index = readFileSync(resolve(root, "institution/evolution/INDEX.md"), "utf8");
for (const r of records)
  if (!index.includes(r.id))
    fail(`index: ${r.id} missing from institution/evolution/INDEX.md`);

// Manifest inclusion of every log document.
const manifestPaths = new Set((manifest.documents ?? []).map((d) => d.path));
for (const p of [
  "institution/evolution/README.md",
  "institution/evolution/INDEX.md",
  "institution/evolution/TEMPLATE.md",
  ...paths,
])
  if (!manifestPaths.has(p))
    fail(`knowledge-manifest: evolution document missing from the corpus manifest: ${p}`);

report();

function report() {
  if (errors.length) {
    for (const e of errors) console.error(`✗ ${e}`);
    console.error(`evolution validation failed — ${errors.length} defect(s).`);
    process.exit(1);
  }
  console.log(
    `evolution validation passed — ${registry.records.length} record(s), registry/directory/index coverage exact, references resolve.`,
  );
  process.exit(0);
}
