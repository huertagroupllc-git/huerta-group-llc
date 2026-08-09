#!/usr/bin/env node
/**
 * Institutional Intellectual Property Repository validation.
 *
 * Deterministic, dependency-free verification of
 * institution/metadata/registries/ip-registry.json against institution/metadata/schemas/ip-schema.json plus the
 * repository's governance guards. Exits non-zero with one actionable
 * line per defect. No network, no randomness, no time dependence.
 *
 * Beyond schema conformance, enforces:
 *   - exactly the six approved initial records (ids and titles);
 *   - unique identifiers and canonical paths; paths exist;
 *   - provisional classes never used as primary asset classes; record
 *     provisionalDescriptors must come from the registry-level list;
 *   - the governance-foundation class restricted to governance records;
 *   - admission ≠ legal ownership (admitted status never yields
 *     legally-confirmed ownership without evidence);
 *   - legally-confirmed ownership / confirmed legal status require
 *     evidence references;
 *   - client_derived origin requires a real review state;
 *   - public disclosure and approved public-release readiness require
 *     explicit authorization (none granted);
 *   - approval authority remains configurable;
 *   - no public application source as authority;
 *   - substantive admission requires a recorded separate decision —
 *     Method Library records can never appear as admitted assets;
 *   - unresolved legal/commercial matters never marked approved
 *     (commercialStatus vocabulary is unresolved/not_applicable only,
 *     schema-enforced);
 *   - references resolve (relationships, supersession, sources);
 *   - every governed IP document appears in the knowledge manifest;
 *   - the ip-repository capability exists in the architecture registry.
 *
 * Run: npm run validate:ip
 */

import { readFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const SCHEMA_PATH = join(ROOT, "institution", "metadata", "schemas", "ip-schema.json");
const REGISTRY_PATH = join(ROOT, "institution", "metadata", "registries", "ip-registry.json");
const KNOWLEDGE_MANIFEST_PATH = join(ROOT, "institution", "metadata", "manifest.json");
const CAPABILITY_REGISTRY_PATH = join(ROOT, "institution", "metadata", "registries", "capability-registry.json");

/** The six approved initial records — exactly these, exactly once. */
const REQUIRED_RECORDS = new Map([
  ["ip-0001", "Intellectual Property Foundation v1"],
  ["ip-0002", "Institutional Intellectual Property Definition and Scope"],
  ["ip-0003", "Intellectual Property Asset Classification Standard v1"],
  ["ip-0004", "Intellectual Property Lifecycle Standard v1"],
  ["ip-0005", "Intellectual Property Authority Standard v1"],
  ["ip-0006", "Intellectual Property Disclosure Standard v1"],
]);

const GOVERNANCE_RECORD_TYPES = new Set([
  "governance_foundation",
  "governing_doctrine",
  "standard",
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
const capabilityRegistry = loadJson(CAPABILITY_REGISTRY_PATH, "capability-registry");
if (!schema || !registry || !knowledgeManifest || !capabilityRegistry) report();

// ---------- minimal JSON Schema subset validator (same subset as the
// knowledge, architecture, and method validators) --------------------------------

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

// ---------- record set -----------------------------------------------------

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
    fail(`coverage: ${id} — title mismatch: expected "${title}"`);
}
for (const rec of records) {
  if (rec?.id && !REQUIRED_RECORDS.has(rec.id))
    fail(
      `coverage: unauthorized record beyond the six approved initial records: ${rec.id} ("${rec.title ?? "?"}") — substantive records require an approved source and a separate admission decision`,
    );
}

// ---------- class guards ---------------------------------------------------

const provisional = new Set(registry.provisionalAssetClasses ?? []);
for (const rec of records) {
  if (provisional.has(rec?.assetClass))
    fail(
      `classes: ${rec.id} — provisional class "${rec.assetClass}" cannot be a primary approved asset class`,
    );
  for (const desc of rec?.provisionalDescriptors ?? []) {
    if (!provisional.has(desc))
      fail(
        `classes: ${rec.id} — provisionalDescriptors value "${desc}" is not in the registry-level provisional list`,
      );
  }
  if (
    rec?.assetClass === "intellectual_property_governance_foundation" &&
    !GOVERNANCE_RECORD_TYPES.has(rec?.recordType)
  )
    fail(
      `classes: ${rec.id} — the governance-foundation class is restricted to governance records`,
    );
}

// ---------- admission / ownership / disclosure guards ----------------------

for (const rec of records) {
  const own = rec?.ownershipAndRights ?? {};
  const evidence =
    (own.agreementReferences?.length ?? 0) +
    (own.registrationReferences?.length ?? 0) +
    (rec?.stewardship?.corporateRecordReferences?.length ?? 0);

  if (
    ["legally_confirmed_institutional_ownership", "legally_confirmed_third_party_ownership"].includes(
      own.ownershipStatus,
    ) && evidence === 0
  )
    fail(
      `ownership: ${rec.id} — legally-confirmed ownership requires authoritative evidence references (agreements, registrations, or corporate records)`,
    );
  if (own.legalConfirmation === "confirmed" && evidence === 0)
    fail(
      `ownership: ${rec.id} — legalConfirmation "confirmed" requires authoritative evidence references`,
    );
  if (
    rec?.governanceStatus === "admitted" &&
    ["legally_confirmed_institutional_ownership"].includes(own.ownershipStatus) &&
    evidence === 0
  )
    fail(
      `ownership: ${rec.id} — admission never implies legal ownership; confirmed ownership requires evidence`,
    );
  if (rec?.origin === "client_derived" && own.clientDerivedReviewStatus === "not_applicable")
    fail(
      `origin: ${rec.id} — client_derived origin requires an explicit review state (review_required/under_review/review_complete)`,
    );
  if (rec?.disclosure === "public")
    fail(
      `disclosure: ${rec.id} — public disclosure requires explicit IP authority; none has been granted`,
    );
  if (rec?.readiness?.publicRelease === "approved")
    fail(
      `disclosure: ${rec.id} — publicRelease readiness "approved" requires explicit authorization; none has been granted`,
    );
  if (rec?.authority?.approvingAuthority && rec.authority.approvingAuthority.configurable !== true)
    fail(
      `authority: ${rec.id} — approvingAuthority.configurable must be true; immutable authority is prohibited`,
    );
  if (
    rec?.admission?.decision === "substantive_admission"
  )
    fail(
      `admission: ${rec.id} — substantive_admission requires a separately approved source asset and admission decision; none is authorized in this phase`,
    );
  // Method Library records can never appear as admitted assets.
  for (const relArr of ["methodologyRelationships"]) {
    for (const rel of rec?.[relArr] ?? []) {
      if (/^mr-[0-9]{4}$/.test(rel.target) && rel.nature !== "candidate_source" && rel.nature !== "related" && rel.nature !== "traceability")
        fail(
          `methodology: ${rec.id} — Method Library reference "${rel.target}" may only be candidate_source/related/traceability, never an admission`,
        );
    }
  }
  if (/^mr-[0-9]{4}/.test(rec?.id ?? "") || /methodology\/records/.test(rec?.path ?? ""))
    fail(
      `methodology: ${rec.id} — a Method Library record cannot be an IP repository record without a separate admission decision`,
    );
  // Public application sources never govern internal IP.
  const publicPrefixes = ["app/", "components/", "lib/", "public/"];
  for (const ref of rec?.governingReferences ?? []) {
    if (publicPrefixes.some((p) => ref.startsWith(p)))
      fail(`authority: ${rec.id} — public application source "${ref}" cannot govern internal IP`);
    if (!existsSync(join(ROOT, ref)))
      fail(`references: ${rec.id} — governing reference missing: ${ref}`);
  }
  if (
    typeof rec?.authority?.authorityBasis === "string" &&
    /public (website|intellectual property page)|app\/intellectual-property/i.test(rec.authority.authorityBasis)
  )
    fail(
      `authority: ${rec.id} — public website content cannot be the authority basis for internal IP governance`,
    );
  // Evidence-reference paths that look like repository paths must exist.
  for (const ref of [...(own.agreementReferences ?? []), ...(own.registrationReferences ?? [])]) {
    if (ref.startsWith("docs/") && !existsSync(join(ROOT, ref)))
      fail(`evidence: ${rec.id} — evidence reference missing: ${ref}`);
  }
}

// ---------- reference resolution -------------------------------------------

const relFields = [
  "relationships", "methodologyRelationships", "educationRelationships",
  "publicationRelationships", "brandRelationships", "softwareRelationships",
];
for (const rec of records) {
  for (const field of relFields) {
    for (const rel of rec?.[field] ?? []) {
      const t = rel.target;
      if (/^ip-[0-9]{4}$/.test(t)) {
        if (!byId.has(t)) fail(`references: ${rec.id} — ${field} target "${t}" not found`);
        if (t === rec.id) fail(`references: ${rec.id} — ${field} refers to itself`);
      }
      // mr-* targets validated against the method registry.
      if (/^mr-[0-9]{4}$/.test(t)) {
        const methodReg = loadJson(join(ROOT, "institution", "metadata", "registries", "method-registry.json"), "method-registry");
        if (methodReg && !methodReg.records?.some((m) => m.id === t))
          fail(`references: ${rec.id} — ${field} method target "${t}" not found in method registry`);
      }
    }
  }
  for (const field of ["supersedes", "supersededBy"]) {
    const t = rec?.[field];
    if (t != null) {
      if (!byId.has(t)) fail(`references: ${rec.id} — ${field} target "${t}" not found`);
      if (t === rec.id) fail(`references: ${rec.id} — ${field} refers to itself`);
    }
  }
  for (const s of rec?.sourceRecords ?? []) {
    if (!byId.has(s)) fail(`references: ${rec.id} — sourceRecords target "${s}" not found`);
    if (s === rec.id) fail(`references: ${rec.id} — sourceRecords refers to itself`);
  }
}

// ---------- knowledge-manifest and capability integration ------------------

const manifestPaths = new Set((knowledgeManifest.documents ?? []).map((d) => d.path));
for (const rec of records) {
  if (typeof rec?.path === "string" && !manifestPaths.has(rec.path))
    fail(
      `knowledge-manifest: ${rec.id} — governed document missing from institution/metadata/manifest.json: ${rec.path}`,
    );
}
const ARCHITECTURE_DOC = "institution/technical/ip-repository-architecture.md";
if (!manifestPaths.has(ARCHITECTURE_DOC))
  fail(`knowledge-manifest: IP repository architecture missing: ${ARCHITECTURE_DOC}`);

if (!capabilityRegistry.capabilities?.some((c) => c.id === "ip-repository"))
  fail(`capability: ip-repository capability missing from institution/metadata/registries/capability-registry.json`);

// ---------- report ---------------------------------------------------------

function report() {
  if (errors.length) {
    console.error(`ip validation FAILED — ${errors.length} defect(s):`);
    for (const e of errors) console.error(`  ✗ ${e}`);
    process.exit(1);
  }
  console.log(
    `ip validation passed — ${records.length} records (the six approved initial governance records), references resolve, governance guards hold.`,
  );
  process.exit(0);
}

report();
