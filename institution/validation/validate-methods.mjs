#!/usr/bin/env node
/**
 * Institutional Method Library validation.
 *
 * Deterministic, dependency-free verification of
 * institution/metadata/registries/method-registry.json against institution/metadata/schemas/method-schema.json
 * plus the Method Library's referential and governance guards.
 * Exits non-zero with one actionable line per defect. No network, no
 * randomness, no time-dependent behavior.
 *
 * Beyond schema conformance, this validator enforces:
 *   - exactly the eight approved initial records (ids and titles),
 *     no unauthorized substantive additions;
 *   - unique identifiers and canonical paths; paths exist;
 *   - dependency / related / source / supersession references resolve;
 *     no prohibited self-references;
 *   - provisional asset types are never assigned;
 *   - public-disclosure readiness is never "approved" absent explicit
 *     authorization (none granted);
 *   - approving authority remains configurable (never immutable);
 *   - no public application source is used as an authority basis;
 *   - every Method Library governed document appears in the
 *     institutional knowledge manifest.
 *
 * Run: npm run validate:methods
 */

import { readFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const SCHEMA_PATH = join(ROOT, "institution", "metadata", "schemas", "method-schema.json");
const REGISTRY_PATH = join(ROOT, "institution", "metadata", "registries", "method-registry.json");
const KNOWLEDGE_MANIFEST_PATH = join(ROOT, "institution", "metadata", "manifest.json");

/** The eight approved initial records — exactly these, exactly once. */
const REQUIRED_RECORDS = new Map([
  ["mr-0001", "Methodology Foundation v1"],
  ["mr-0002", "Institutional Methodology Definition and Scope"],
  ["mr-0003", "Methodological Architecture v1"],
  ["mr-0004", "Organizational Improvement Work Progression v1"],
  ["mr-0005", "Methodological Asset Classification Standard v1"],
  ["mr-0006", "Methodological Lifecycle and Maturity Standard v1"],
  [
    "mr-0007",
    "Methodological Authority, Versioning, and Supersession Standard v1",
  ],
  ["mr-0008", "Methodological Disclosure Classification Standard v1"],
]);

const errors = [];
const fail = (msg) => errors.push(msg);

function loadJson(path, label) {
  let raw;
  try {
    raw = readFileSync(path, "utf8");
  } catch {
    fail(`${label}: cannot read ${relative(ROOT, path)}`);
    return null;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    fail(`${label}: invalid JSON — ${e.message}`);
    return null;
  }
}

const schema = loadJson(SCHEMA_PATH, "schema");
const registry = loadJson(REGISTRY_PATH, "registry");
const knowledgeManifest = loadJson(KNOWLEDGE_MANIFEST_PATH, "knowledge-manifest");
if (!schema || !registry || !knowledgeManifest) report();

// ---------- minimal JSON Schema subset validator (same subset as the
// knowledge and architecture validators) ---------------------------------------

function resolveRef(ref) {
  if (!ref.startsWith("#/")) throw new Error(`unsupported $ref: ${ref}`);
  let node = schema;
  for (const part of ref.slice(2).split("/")) node = node?.[part];
  if (!node) throw new Error(`unresolvable $ref: ${ref}`);
  return node;
}

function typeOf(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (Number.isInteger(value)) return "integer";
  return typeof value;
}

function validate(value, node, path) {
  if (node.$ref) node = resolveRef(node.$ref);

  if (node.type) {
    const allowed = Array.isArray(node.type) ? node.type : [node.type];
    const actual = typeOf(value);
    const ok = allowed.some(
      (t) => t === actual || (t === "number" && actual === "integer"),
    );
    if (!ok) {
      fail(`schema: ${path} — expected ${allowed.join("|")}, got ${actual}`);
      return;
    }
  }
  if ("const" in node && value !== node.const)
    fail(`schema: ${path} — must equal ${JSON.stringify(node.const)}`);
  if (node.enum && !node.enum.some((v) => v === value))
    fail(`schema: ${path} — value ${JSON.stringify(value)} not in enum`);
  if (typeOf(value) === "string") {
    if (node.minLength !== undefined && value.length < node.minLength)
      fail(`schema: ${path} — shorter than minLength ${node.minLength}`);
    if (node.maxLength !== undefined && value.length > node.maxLength)
      fail(`schema: ${path} — exceeds maxLength ${node.maxLength}`);
    if (node.pattern && !new RegExp(node.pattern).test(value))
      fail(`schema: ${path} — does not match pattern ${node.pattern}`);
  }
  if (typeOf(value) === "array") {
    if (node.minItems !== undefined && value.length < node.minItems)
      fail(`schema: ${path} — fewer than minItems ${node.minItems}`);
    if (node.items)
      value.forEach((item, i) => validate(item, node.items, `${path}[${i}]`));
  }
  if (typeOf(value) === "object") {
    for (const key of node.required ?? [])
      if (!(key in value)) fail(`schema: ${path} — missing required "${key}"`);
    for (const [key, child] of Object.entries(value)) {
      const propSchema = node.properties?.[key];
      if (propSchema) validate(child, propSchema, `${path}.${key}`);
      else if (node.additionalProperties === false)
        fail(`schema: ${path} — unexpected property "${key}"`);
    }
  }
}

validate(registry, schema, "registry");

// ---------- record set: exactly the eight approved records -----------------

const records = Array.isArray(registry.records) ? registry.records : [];
const byId = new Map();
const byPath = new Map();

for (const rec of records) {
  if (typeof rec?.id === "string") {
    if (byId.has(rec.id)) fail(`uniqueness: duplicate record id "${rec.id}"`);
    byId.set(rec.id, rec);
  }
  if (typeof rec?.path === "string") {
    if (byPath.has(rec.path))
      fail(`uniqueness: duplicate canonical path "${rec.path}"`);
    byPath.set(rec.path, rec);
    if (!existsSync(join(ROOT, rec.path)))
      fail(`paths: ${rec.id ?? "?"} — path does not exist: ${rec.path}`);
  }
}

for (const [id, title] of REQUIRED_RECORDS) {
  const rec = byId.get(id);
  if (!rec) {
    fail(`coverage: required initial record missing: ${id} ("${title}")`);
    continue;
  }
  if (rec.title !== title)
    fail(
      `coverage: ${id} — title mismatch: expected "${title}", found "${rec.title}"`,
    );
}
for (const rec of records) {
  if (rec?.id && !REQUIRED_RECORDS.has(rec.id))
    fail(
      `coverage: unauthorized record beyond the eight approved initial records: ${rec.id} ("${rec.title ?? "?"}") — new substantive records require prior Methodology approval`,
    );
}

// ---------- provisional asset types are never assigned ---------------------

const provisional = new Set(registry.provisionalAssetTypes ?? []);
for (const rec of records) {
  if (provisional.has(rec?.assetType))
    fail(
      `asset-types: ${rec.id} — provisional asset type "${rec.assetType}" cannot be assigned as an approved record type`,
    );
}

// ---------- references resolve; prohibited self-references -----------------

const refFields = ["dependencies", "relatedRecords", "sourceRecords"];
for (const rec of records) {
  for (const field of refFields) {
    for (const target of rec?.[field] ?? []) {
      if (!byId.has(target))
        fail(`references: ${rec.id} — ${field} target "${target}" not found`);
      if (target === rec.id)
        fail(`references: ${rec.id} — ${field} refers to itself`);
    }
  }
  for (const field of ["supersedes", "supersededBy"]) {
    const target = rec?.[field];
    if (target != null) {
      if (!byId.has(target))
        fail(`references: ${rec.id} — ${field} target "${target}" not found`);
      if (target === rec.id)
        fail(`references: ${rec.id} — ${field} refers to itself`);
    }
  }
}

// ---------- governance guards ----------------------------------------------

for (const rec of records) {
  // Public disclosure is never approved absent explicit authorization.
  if (rec?.readiness?.publicDisclosure === "approved")
    fail(
      `disclosure: ${rec.id} — publicDisclosure readiness "approved" requires explicit authorization; none has been granted`,
    );
  // Approval authority must remain configurable (never immutable).
  if (rec?.approvingAuthority && rec.approvingAuthority.configurable !== true)
    fail(
      `authority: ${rec.id} — approvingAuthority.configurable must be true; immutable approval mechanisms are prohibited`,
    );
  // No public application source may serve as internal authority.
  const publicPrefixes = ["app/", "components/", "lib/", "public/"];
  const basisTargets = [
    ...(rec?.governingReferences ?? []),
  ];
  for (const ref of basisTargets) {
    if (publicPrefixes.some((p) => ref.startsWith(p)))
      fail(
        `authority: ${rec.id} — public application source "${ref}" cannot govern internal methodology`,
      );
    if (!existsSync(join(ROOT, ref)))
      fail(`references: ${rec.id} — governing reference missing: ${ref}`);
  }
  if (
    typeof rec?.authorityBasis === "string" &&
    /public (website|methodology page)|app\/methodology/i.test(rec.authorityBasis)
  )
    fail(
      `authority: ${rec.id} — public website content cannot be the authority basis for internal methodology`,
    );
}

// ---------- knowledge-manifest inclusion -----------------------------------

const manifestPaths = new Set(
  (knowledgeManifest.documents ?? []).map((d) => d.path),
);
for (const rec of records) {
  if (typeof rec?.path === "string" && !manifestPaths.has(rec.path))
    fail(
      `knowledge-manifest: ${rec.id} — governed document missing from institution/metadata/manifest.json: ${rec.path}`,
    );
}
const ARCHITECTURE_DOC = "institution/technical/method-library-architecture.md";
if (!manifestPaths.has(ARCHITECTURE_DOC))
  fail(
    `knowledge-manifest: method library architecture missing from institution/metadata/manifest.json: ${ARCHITECTURE_DOC}`,
  );

// ---------- report ---------------------------------------------------------

function report() {
  if (errors.length) {
    console.error(`method validation FAILED — ${errors.length} defect(s):`);
    for (const e of errors) console.error(`  ✗ ${e}`);
    process.exit(1);
  }
  console.log(
    `method validation passed — ${records.length} records (the eight approved initial records), references resolve, governance guards hold.`,
  );
  process.exit(0);
}

report();
