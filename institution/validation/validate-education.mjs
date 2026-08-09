#!/usr/bin/env node
/**
 * Deterministic, dependency-free validator for the Education Platform
 * Foundation (institution/metadata/registries/education-registry.json against
 * institution/metadata/schemas/education-schema.json and the Education & Workforce
 * Development Foundation v1 governance guards).
 *
 * Verifies: schema conformance; exactly the twelve approved initial
 * governance records (each required title exactly once, no thirteenth
 * substantive record); identifier and path uniqueness; path, source,
 * and governing-reference existence; relationship resolution
 * (education, methodology, IP, knowledge manifest); controlled-value
 * enforcement; provisional types never used as record types; offering
 * and learning-asset types rejected in this phase; content lifecycle
 * and program maturity never collapsed; every readiness dimension
 * separate with no cross-dimension inference (no delivery, enrollment,
 * assessment, credential, public-disclosure, or commercial approval
 * exists); configurable approval authority; internal disclosure; the
 * public website never used as internal educational authority; no
 * learner, instructor, offering, or commercial data structures;
 * knowledge-manifest coverage of all governed education artifacts; the
 * education capability present in the capability registry; and
 * unresolved matters never silently represented as approved.
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

const schema = loadJson("institution/metadata/schemas/education-schema.json");
const registry = loadJson("institution/metadata/registries/education-registry.json");
const methodRegistry = loadJson("institution/metadata/registries/method-registry.json");
const ipRegistry = loadJson("institution/metadata/registries/ip-registry.json");
const manifest = loadJson("institution/metadata/manifest.json");
const capabilityRegistry = loadJson("institution/metadata/registries/capability-registry.json");

if (!schema || !registry || !methodRegistry || !ipRegistry || !manifest || !capabilityRegistry) {
  report();
}

/* ------------------------------------------------------------------ */
/* Minimal JSON Schema subset validator (2020-12 subset: type, enum,   */
/* const, pattern, required, properties, additionalProperties:false,  */
/* items, minItems, uniqueItems, anyOf, $ref -> #/$defs, minimum,     */
/* minLength).                                                        */
/* ------------------------------------------------------------------ */
function deref(node) {
  if (node && typeof node === "object" && node.$ref) {
    const m = /^#\/\$defs\/(.+)$/.exec(node.$ref);
    if (!m) throw new Error(`unsupported $ref ${node.$ref}`);
    return deref(schema.$defs[m[1]]);
  }
  return node;
}

function typeOf(v) {
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  return typeof v;
}

function check(value, rawNode, path) {
  const node = deref(rawNode);
  if (node.const !== undefined && value !== node.const) {
    fail(`${path}: must equal ${JSON.stringify(node.const)}`);
    return;
  }
  if (node.enum && !node.enum.includes(value)) {
    fail(`${path}: value ${JSON.stringify(value)} not in approved controlled vocabulary`);
    return;
  }
  if (node.anyOf) {
    const before = errors.length;
    const ok = node.anyOf.some((sub) => {
      const mark = errors.length;
      check(value, sub, path);
      const passed = errors.length === mark;
      errors.length = mark;
      return passed;
    });
    errors.length = before;
    if (!ok) fail(`${path}: matches no permitted alternative`);
    return;
  }
  if (node.type) {
    const types = Array.isArray(node.type) ? node.type : [node.type];
    const actual = typeOf(value);
    const okType = types.some((t) =>
      t === "integer" ? Number.isInteger(value) : actual === t
    );
    if (!okType) {
      fail(`${path}: expected ${types.join("|")}, got ${actual}`);
      return;
    }
  }
  if (typeOf(value) === "string") {
    if (node.pattern && !new RegExp(node.pattern).test(value))
      fail(`${path}: does not match pattern ${node.pattern}`);
    if (node.minLength !== undefined && value.length < node.minLength)
      fail(`${path}: shorter than minLength ${node.minLength}`);
  }
  if (typeOf(value) === "number" || Number.isInteger(value)) {
    if (node.minimum !== undefined && value < node.minimum)
      fail(`${path}: below minimum ${node.minimum}`);
  }
  if (typeOf(value) === "array") {
    if (node.minItems !== undefined && value.length < node.minItems)
      fail(`${path}: fewer than minItems ${node.minItems}`);
    if (node.uniqueItems) {
      const seen = new Set(value.map((v) => JSON.stringify(v)));
      if (seen.size !== value.length) fail(`${path}: items are not unique`);
    }
    if (node.items) value.forEach((v, i) => check(v, node.items, `${path}[${i}]`));
  }
  if (typeOf(value) === "object") {
    for (const req of node.required ?? [])
      if (!(req in value)) fail(`${path}: missing required property "${req}"`);
    for (const [k, v] of Object.entries(value)) {
      if (node.properties && k in node.properties) {
        check(v, node.properties[k], `${path}.${k}`);
      } else if (node.additionalProperties === false) {
        fail(`${path}: unknown property "${k}" (collapsed or invented fields are rejected)`);
      }
    }
  }
}

check(registry, schema, "registry");

/* ------------------------------------------------------------------ */
/* Approved vocabularies pinned exactly.                              */
/* ------------------------------------------------------------------ */
const PROVISIONAL = [
  "seminar",
  "executive_education_as_program_class",
  "credential",
  "certification",
  "certificate_of_completion",
  "continuing_education_recognition",
  "organizational_certification",
  "digital_badge",
];
const ASSESSMENT_CATEGORIES = [
  "knowledge_check",
  "practice_activity",
  "formative_assessment",
  "summative_assessment",
  "competency_assessment",
  "practical_project_review",
  "capstone_evaluation",
  "organizational_outcome_verification",
  "credential_evaluation",
];
const GOVERNANCE_TYPES = new Set([
  "institutional_education_foundation",
  "education_governance_standard",
  "educational_doctrine",
  "educational_architecture_standard",
  "competency_architecture_standard",
  "classification_standard",
  "lifecycle_and_governance_standard",
  "assessment_governance_standard",
  "quality_standard",
  "technology_boundary_standard",
  "source_traceability_standard",
]);

function samePinned(name, actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected))
    fail(`registry.${name}: must exactly equal the approved list (${expected.length} values)`);
}
samePinned("provisionalAssetTypes", registry.provisionalAssetTypes, PROVISIONAL);
samePinned("assessmentCategories", registry.assessmentCategories, ASSESSMENT_CATEGORIES);
if ((registry.conceptualLearnerRecordTypes ?? []).length !== 15)
  fail("registry.conceptualLearnerRecordTypes: must list exactly the fifteen EWDFv1 §14.1 conceptual types");

/* ------------------------------------------------------------------ */
/* Exactly the twelve approved initial records (EWDFv1 §18, §22.2).   */
/* ------------------------------------------------------------------ */
const APPROVED_RECORDS = new Map([
  ["ed-0001", "Education & Workforce Development Foundation v1"],
  ["ed-0002", "Education Definition and Scope Standard v1"],
  ["ed-0003", "Educational Doctrine and Philosophy Standard v1"],
  ["ed-0004", "Educational Architecture Standard v1"],
  ["ed-0005", "Capability and Competency Architecture Standard v1"],
  ["ed-0006", "Educational Asset Classification Standard v1"],
  ["ed-0007", "Educational Lifecycle and Readiness Standard v1"],
  ["ed-0008", "Educational Authority and Approval Standard v1"],
  ["ed-0009", "Assessment and Competency Verification Standard v1"],
  ["ed-0010", "Educational Quality and Evidence Standard v1"],
  ["ed-0011", "Educational Technology and AI Boundary Standard v1"],
  ["ed-0012", "Educational Source Traceability Standard v1"],
]);

const records = registry.records ?? [];
if (records.length !== 12)
  fail(`registry.records: exactly 12 approved initial records required, found ${records.length} — adding or removing a record requires new Education-authority approval and a validator update`);

const ids = new Set();
const paths = new Set();
const titles = new Map();
for (const r of records) {
  if (ids.has(r.id)) fail(`${r.id}: duplicate identifier`);
  ids.add(r.id);
  if (paths.has(r.path)) fail(`${r.id}: duplicate canonical path ${r.path}`);
  paths.add(r.path);
  titles.set(r.title, (titles.get(r.title) ?? 0) + 1);
  if (!APPROVED_RECORDS.has(r.id))
    fail(`${r.id}: not an approved initial record identifier`);
  else if (APPROVED_RECORDS.get(r.id) !== r.title)
    fail(`${r.id}: title must be exactly "${APPROVED_RECORDS.get(r.id)}"`);
}
for (const [id, title] of APPROVED_RECORDS)
  if (!ids.has(id)) fail(`missing approved initial record ${id} ("${title}")`);
for (const [title, count] of titles)
  if (count !== 1) fail(`title "${title}" appears ${count} times; each required title must appear exactly once`);

/* ------------------------------------------------------------------ */
/* Per-record governance guards.                                      */
/* ------------------------------------------------------------------ */
const FOUNDATION_PATH = "institution/foundations/education/education-workforce-development-foundation-v1.md";
const methodIds = new Set((methodRegistry.records ?? []).map((r) => r.id));
const ipIds = new Set((ipRegistry.records ?? []).map((r) => r.id));
const manifestIds = new Set((manifest.documents ?? []).map((r) => r.id));
const manifestPaths = new Set((manifest.documents ?? []).map((r) => r.path));

for (const r of records) {
  const p = r.id;

  for (const file of [r.path, r.authoritativeSource, ...(r.governingReferences ?? [])])
    if (typeof file === "string" && !existsSync(resolve(root, file)))
      fail(`${p}: referenced file does not exist: ${file}`);

  if (r.authoritativeSource !== FOUNDATION_PATH)
    fail(`${p}: authoritativeSource must be the Foundation source (${FOUNDATION_PATH})`);
  if (r.id === "ed-0001" && r.path !== FOUNDATION_PATH)
    fail(`${p}: ed-0001's canonical path must be the Foundation source itself`);
  if (r.id === "ed-0001" && r.recordType !== "governance_foundation")
    fail(`${p}: ed-0001 must be recordType governance_foundation`);
  if (r.id !== "ed-0001" && r.recordType !== "governance_record")
    fail(`${p}: initial records other than ed-0001 must be recordType governance_record`);

  // Provisional and offering types are never record types in this phase.
  if (PROVISIONAL.includes(r.educationalAssetType))
    fail(`${p}: provisional type "${r.educationalAssetType}" may never be an approved operational record type`);
  if (!GOVERNANCE_TYPES.has(r.educationalAssetType))
    fail(`${p}: educationalAssetType "${r.educationalAssetType}" is an offering or learning-asset type — no program, pathway, course, module, lesson, workshop, cohort, training, objective, competency, assessment, exercise, project, capstone, case study, resource, guidance, continuing-education, or adaptation record is authorized (EWDFv1 §18, §22.2)`);
  for (const d of r.provisionalDescriptors ?? [])
    if (!PROVISIONAL.includes(d))
      fail(`${p}: provisionalDescriptors contains non-provisional value "${d}"`);

  // Lifecycle vs program maturity: never collapsed; governance records are not programs.
  if (r.programMaturity !== "not_applicable")
    fail(`${p}: programMaturity must be not_applicable for governance records — a program-maturity value on a non-program record collapses content lifecycle and program maturity (EWDFv1 §11.4) or implies an unauthorized program`);

  // Readiness guards: no cross-dimension inference, nothing operational approved.
  const rd = r.readiness ?? {};
  if (rd.programApproval === "approved")
    fail(`${p}: programApproval approved — no program exists or is approved in this phase (EWDFv1 §22.2), and program approval is never inferred from substance or technology readiness (§11.5)`);
  if (rd.deliveryReadiness === "approved")
    fail(`${p}: deliveryReadiness approved — no delivery is authorized, and delivery readiness is never inferred from program approval (EWDFv1 §12.2)`);
  if (rd.enrollmentAvailability === "approved")
    fail(`${p}: enrollmentAvailability approved — no enrollment exists, and enrollment availability is never inferred from delivery readiness (EWDFv1 §11.4)`);
  if (rd.assessmentReadiness === "approved")
    fail(`${p}: assessmentReadiness approved — no assessment instrument exists, and assessment readiness never implies assessment validity (EWDFv1 §9.14, §13.1)`);
  if (rd.credentialReadiness === "approved")
    fail(`${p}: credentialReadiness approved — no credential is authorized, and credential readiness never implies credential issuance (EWDFv1 §10, §16.8)`);
  if (rd.publicDisclosureReadiness === "approved")
    fail(`${p}: publicDisclosureReadiness approved — every initial record is internal; public disclosure requires separate authorization and never implies enrollment or commercial availability (EWDFv1 §17.6, §11.4)`);
  if (rd.commercialReadiness === "approved")
    fail(`${p}: commercialReadiness approved — no commercial model exists, and commercial readiness never implies public availability (EWDFv1 §21)`);

  if (r.disclosure !== "internal")
    fail(`${p}: disclosure must be internal — public or other disclosure of education records requires separate Education-authority approval`);

  // Configurable authority (EWDFv1 §12.3).
  if (r.authority?.approvingAuthority?.configurable !== true)
    fail(`${p}: approvingAuthority.configurable must be true — immutable or hard-coded approval authority is prohibited (EWDFv1 §12.3)`);
  if ((r.approvalHistory ?? []).length < 1)
    fail(`${p}: approvalHistory must record at least the initial approval`);

  // Public website copy is never internal educational authority (EWDFv1 §17.7, §22.1).
  const authorityFields = [
    r.authoritativeSource,
    ...(r.governingReferences ?? []),
    ...(r.sourceVersionDependencies ?? []).map((x) => x.target),
  ];
  for (const ref of authorityFields)
    if (typeof ref === "string" && /^(app|components|public)\//.test(ref))
      fail(`${p}: "${ref}" is public website material and may never serve as internal educational authority (EWDFv1 §17.7, §22.1)`);

  // No educational adaptation exists in this phase (EWDFv1 §17.3).
  if ((r.educationalAdaptations ?? []).length > 0)
    fail(`${p}: educationalAdaptations must be empty — every adaptation requires the EWDFv1 §17.3 authority chain and separate approval`);

  // Relationship resolution.
  for (const rel of r.methodologyRelationships ?? [])
    if (!methodIds.has(rel.target))
      fail(`${p}: methodology relationship target "${rel.target}" does not resolve in institution/metadata/registries/method-registry.json`);
  for (const rel of r.ipRelationships ?? [])
    if (!ipIds.has(rel.target))
      fail(`${p}: IP relationship target "${rel.target}" does not resolve in institution/metadata/registries/ip-registry.json`);
  for (const rel of r.knowledgeRelationships ?? [])
    if (!manifestIds.has(rel.target))
      fail(`${p}: knowledge relationship target "${rel.target}" does not resolve in institution/metadata/manifest.json`);
  for (const rel of r.relatedRecords ?? [])
    if (!APPROVED_RECORDS.has(rel))
      fail(`${p}: related record "${rel}" does not resolve to an approved education record`);
  for (const link of [r.supersedes, r.supersededBy])
    if (link !== null && !ids.has(link))
      fail(`${p}: supersession link "${link}" does not resolve`);

  // Supersession consistency and preservation.
  if (r.supersededBy === null && r.contentLifecycleState === "superseded")
    fail(`${p}: superseded lifecycle state requires a supersededBy link (records are preserved, never silently replaced)`);

  // Unresolved matters are never silently approved.
  if (r.id === "ed-0001" && (r.unresolvedMatters ?? []).length === 0)
    fail(`${p}: the Foundation record must carry the EWDFv1 §21 unresolved-matters acknowledgement — unresolved matters are never silently represented as approved`);
}

/* ------------------------------------------------------------------ */
/* No learner, offering, or commercial data structures anywhere.      */
/* ------------------------------------------------------------------ */
const FORBIDDEN_KEYS = [
  "learnerId",
  "studentId",
  "instructorId",
  "enrollmentId",
  "tuition",
  "priceUsd",
  "paymentReference",
  "completionEstablishesCompetency",
  "completionImpliesCompetency",
  "credentialIssued",
  "certificateIssued",
  "badgeIssued",
  "gradebook",
  "examAnswers",
];
const registryText = JSON.stringify(registry);
for (const key of FORBIDDEN_KEYS)
  if (registryText.includes(`"${key}"`))
    fail(`registry: forbidden operational/learner/commercial field "${key}" — production learner data, credential issuance, completion-as-competency inference, and commercial records are not authorized (EWDFv1 §14.2, §19.3)`);

/* ------------------------------------------------------------------ */
/* Institutional integration.                                          */
/* ------------------------------------------------------------------ */
const governedDocs = [
  ...records.map((r) => r.path),
  "institution/technical/education-platform-architecture.md",
];
for (const doc of governedDocs)
  if (!manifestPaths.has(doc))
    fail(`institution/metadata/manifest.json: governed education artifact missing from the knowledge manifest: ${doc}`);

const capIds = new Set((capabilityRegistry.capabilities ?? []).map((c) => c.id));
if (!capIds.has("education-platform"))
  fail("institution/metadata/registries/capability-registry.json: the education-platform capability must exist");

report();

function report() {
  if (errors.length) {
    for (const e of errors) console.error(`✗ ${e}`);
    console.error(`education validation failed — ${errors.length} defect(s).`);
    process.exit(1);
  }
  console.log(
    "education validation passed — 12 records (the twelve approved initial governance records), references resolve, governance guards hold."
  );
  process.exit(0);
}
