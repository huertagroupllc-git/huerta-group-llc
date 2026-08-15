#!/usr/bin/env node
/**
 * Deterministic, dependency-free validator for the venture registry
 * (Corporate Venture Governance blueprint; FD-V1/FD-V9/FD-V10 recorded
 * in fd-0007; FD-V2 register topology recorded in fd-0008).
 *
 * Verifies: schema conformance; identifier uniqueness; **exactly the
 * approved admitted-venture set** (Founder Office admission creates
 * ventures — repositories, codebases, domains, ideas, and websites do
 * not, so an unadmitted venture record is rejected until the approved
 * set is updated with its authorizing determination); charter and
 * blueprint file existence; admission-determination resolution against
 * the determinations register; corpus-manifest inclusion of the
 * venture governance documents; the FD-V1 reserved-parent-authority
 * set; the FD-V9/FD-V10 invariants (non-automatic graduation;
 * success as fulfillment of chartered purpose) that the schema
 * constants additionally enforce (separate legal entity, independent
 * sovereignty, unapproved grants, and overloaded single-status fields
 * are schema-invalid by construction); and the FD-V2 register-topology
 * invariants (the parent determinations register is the single
 * institutional-plane register; venture operational records are
 * authoritative only within delegated authority; the topology
 * determination must resolve in the parent register — schema constants
 * make parallel institutional registers and location-derived authority
 * invalid by construction).
 *
 * Registry entries record admitted governance facts; they never create
 * venture status, authority, grants, readiness, or history.
 *
 * Exits non-zero with one line per defect. Offline; no dependencies.
 */
import { readFileSync, existsSync } from "node:fs";
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

const schema = loadJson("institution/metadata/schemas/venture-schema.json");
const registry = loadJson("institution/metadata/registries/venture-registry.json");
const determinations = loadJson("institution/metadata/registries/determinations-registry.json");
const manifest = loadJson("institution/metadata/manifest.json");
if (!schema || !registry || !determinations || !manifest) report();

/* Approved admitted-venture set — changes only with a Founder Office
 * venture determination recorded in the determinations register. */
const APPROVED_VENTURES = ["huerta-group-publishing"];

/* FD-V1 reserved parent authority — required, verbatim in substance. */
const REQUIRED_RESERVED = [
  "constitutional authority",
  "institutional governance",
  "legal ownership",
  "strategic direction",
  "capital allocation",
  "portfolio governance",
  "public corporate representation",
];

/* Governance documents that must exist and be manifested. */
const GOVERNANCE_DOCS = [
  "institution/governance/ventures/corporate-venture-governance-phase1-blueprint.md",
  "institution/governance/ventures/fd-v1-huerta-group-publishing-venture-determination-and-charter.md",
  "institution/governance/ventures/fd-v2-venture-register-topology-determination.md",
  "institution/governance/ventures/fd-v4-parent-platform-representation.md",
];

/* Minimal JSON Schema subset checker (same subset as the sibling
 * validators: type, enum, const, pattern, required, properties,
 * additionalProperties:false, items, minItems, minimum, minLength,
 * $ref -> #/$defs). */
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

const ventures = registry.ventures ?? [];
const ids = new Set();
for (const v of ventures) {
  if (ids.has(v.id)) fail(`${v.id}: duplicate identifier`);
  ids.add(v.id);

  if (!APPROVED_VENTURES.includes(v.id))
    fail(
      `${v.id}: not in the approved admitted-venture set — Founder Office admission creates ventures; update the approved set only with the authorizing determination`,
    );

  if (v.charter && !existsSync(resolve(root, v.charter.path)))
    fail(`${v.id}: charter file does not exist: ${v.charter.path}`);

  const det = v.admission?.determination;
  if (det && !(determinations.records ?? []).some((r) => r.id === det))
    fail(`${v.id}: admission determination "${det}" does not resolve in the determinations register`);

  const topo = v.registerTopology?.determination;
  if (topo && !(determinations.records ?? []).some((r) => r.id === topo))
    fail(`${v.id}: register-topology determination "${topo}" does not resolve in the determinations register`);

  for (const req of REQUIRED_RESERVED)
    if (!(v.reservedParentAuthority ?? []).includes(req))
      fail(`${v.id}: reservedParentAuthority missing required FD-V1 item "${req}"`);

  if (v.graduation && v.graduation.automatic !== false)
    fail(`${v.id}: graduation must be non-automatic (FD-V9)`);

  const grants = (v.capabilityGrants ?? []).map((g) => g.grant);
  if (new Set(grants).size !== grants.length)
    fail(`${v.id}: duplicate capability grant — each grant is recorded once with its instrument`);
}
for (const id of APPROVED_VENTURES)
  if (!ids.has(id)) fail(`approved venture "${id}" has no registry record`);

const manifestPaths = new Set((manifest.documents ?? []).map((d) => d.path));
for (const p of GOVERNANCE_DOCS) {
  if (!existsSync(resolve(root, p))) fail(`governance document does not exist: ${p}`);
  if (!manifestPaths.has(p))
    fail(`knowledge-manifest: venture governance document missing from the corpus manifest: ${p}`);
}

report();

function report() {
  if (errors.length) {
    for (const e of errors) console.error(`✗ ${e}`);
    console.error(`venture validation failed — ${errors.length} defect(s).`);
    process.exit(1);
  }
  const names = registry.ventures.map((v) => v.name).join(", ");
  console.log(
    `venture validation passed — ${registry.ventures.length} admitted venture(s) (${names}), references resolve, governance guards hold.`,
  );
  process.exit(0);
}
