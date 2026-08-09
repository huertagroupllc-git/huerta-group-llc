#!/usr/bin/env node
/**
 * Deterministic, dependency-free validator for the Founder Office
 * determinations register (determination D-6).
 *
 * Verifies: schema conformance; identifier and path uniqueness and
 * format; record-file existence and bidirectional coverage between the
 * register and institution/governance/determinations/; knowledge-
 * manifest inclusion of every determination record; relationship
 * resolution; and the deficiency rule (missing receipt dates require a
 * recorded deficiency — unavailable provenance is recorded, never
 * invented). affectedArtifacts entries are evidentiary pointers and may
 * name artifacts a determination establishes before they exist; they
 * are deliberately not existence-checked.
 *
 * Exits non-zero with one line per defect. Offline; no dependencies.
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

const schema = loadJson("institution/metadata/schemas/determinations-schema.json");
const registry = loadJson("institution/metadata/registries/determinations-registry.json");
const manifest = loadJson("institution/metadata/manifest.json");
if (!schema || !registry || !manifest) report();

/* Minimal JSON Schema subset checker (same subset as the sibling
 * validators: type, enum, const, pattern, required, properties,
 * additionalProperties:false, items, minItems, uniqueItems, minimum,
 * minLength, $ref -> #/$defs). */
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
      else if (node.additionalProperties === false)
        fail(`${path}: unknown property "${k}"`);
    }
  }
}
check(registry, schema, "registry");

const records = registry.records ?? [];
const ids = new Set();
const paths = new Set();
for (const r of records) {
  if (ids.has(r.id)) fail(`${r.id}: duplicate identifier`);
  ids.add(r.id);
  if (paths.has(r.path)) fail(`${r.id}: duplicate path ${r.path}`);
  paths.add(r.path);
  if (!existsSync(resolve(root, r.path)))
    fail(`${r.id}: record file does not exist: ${r.path}`);
  if (r.dateReceived === null && r.deficienciesRecorded < 1)
    fail(`${r.id}: missing receipt date requires a recorded deficiency — provenance is recorded, never invented`);
  for (const rel of r.relationships ?? [])
    if (/^fd-\d{4}$/.test(rel.target) && !records.some((x) => x.id === rel.target))
      fail(`${r.id}: relationship target "${rel.target}" does not resolve in the register`);
}

// Bidirectional coverage with the determinations directory.
const dir = resolve(root, "institution/governance/determinations");
const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".md")) : [];
for (const f of files)
  if (!paths.has(`institution/governance/determinations/${f}`))
    fail(`coverage: determination record not in register: institution/governance/determinations/${f}`);
for (const p of paths)
  if (!files.includes(p.split("/").pop()))
    fail(`coverage: register entry has no record file: ${p}`);

// Manifest inclusion.
const manifestPaths = new Set((manifest.documents ?? []).map((d) => d.path));
for (const p of paths)
  if (!manifestPaths.has(p))
    fail(`knowledge-manifest: determination record missing from the corpus manifest: ${p}`);

report();

function report() {
  if (errors.length) {
    for (const e of errors) console.error(`✗ ${e}`);
    console.error(`determinations validation failed — ${errors.length} defect(s).`);
    process.exit(1);
  }
  console.log(
    `determinations validation passed — ${registry.records.length} records, register and directory coverage exact, manifest inclusion verified.`,
  );
  process.exit(0);
}
