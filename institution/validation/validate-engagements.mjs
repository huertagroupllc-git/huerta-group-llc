#!/usr/bin/env node
/**
 * Deterministic, dependency-free validator for the client engagement registry
 * (Client Engagement Operating Standard — Generation One P0, fd-0037).
 *
 * Registry entries record governed operating facts. They never create client
 * authority, authorization, scope, confidentiality obligations, or permission
 * to act for a client.
 *
 * Enforces, mechanically rather than by convention:
 *   - the five collections, their identifier patterns, and disjoint namespaces
 *     (Organization / Person / Opportunity / Engagement are different kinds of
 *     thing and cannot be confused for one another);
 *   - referential integrity across every cross-reference;
 *   - THE ACTIVATION GATE: no engagement is "active" unless all eight
 *     prerequisites are established, and a Founder disposition of "accept"
 *     never suffices;
 *   - blockedBy exactly matches the unestablished prerequisite set, so a record
 *     that cannot activate says truthfully what is missing;
 *   - every client-authority capacity carries a basis, with "unresolved" valid
 *     and authority never inferred from participation;
 *   - Huerta Group responsibilities recorded as current assignment;
 *   - custody provenance completeness, and that CLIENT_SOURCE, INTERNAL_WORKING
 *     and DELIVERABLE material is never held repository-native;
 *   - evidence registrations carry no finding, conclusion, or interpretation;
 *   - learning candidates remain candidates (no self-admission path);
 *   - Headquarters representation stays bounded executive representation;
 *   - THE CORPUS GUARD: no file in the governed corpus is marked as carrying
 *     client-confidential material.
 *
 * Usage: node validate-engagements.mjs [registryPath] [--quiet]
 * Exits non-zero with one line per defect. Offline; no dependencies.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const args = process.argv.slice(2).filter((a) => a !== "--quiet");
const quiet = process.argv.includes("--quiet");
const registryRel = args[0] ?? "institution/metadata/registries/engagement-registry.json";

const errors = [];
const fail = (m) => errors.push(m);

const PREREQS = [
  "parties", "authorized_work_or_scope", "material_exclusions", "client_authority_person",
  "commercial_basis", "authorization_to_perform", "confidentiality_obligations", "acceptance_evidence",
];
const CAPACITIES = [
  "authorize_engagement", "provide_access", "organizational_decisions",
  "approve_changes", "receive_deliverables", "authorize_implementation",
];
const CONFIDENTIAL_CLASSES = ["CLIENT_SOURCE", "INTERNAL_WORKING", "DELIVERABLE"];
/** Words that would make an evidence registration into a finding. */
const FINDING_WORDS = [
  "finding", "concludes", "conclusion", "we conclude", "this shows", "this proves",
  "demonstrates that", "recommendation", "recommend", "therefore the",
];

function loadJson(rel) {
  try {
    return JSON.parse(readFileSync(resolve(root, rel), "utf8"));
  } catch (e) {
    fail(`${rel}: unreadable or invalid JSON (${e.message})`);
    return null;
  }
}

const reg = loadJson(registryRel);
if (!reg) {
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

for (const k of ["organizations", "persons", "relationships", "opportunities", "engagements"]) {
  if (!Array.isArray(reg[k])) fail(`registry: missing or non-array collection "${k}"`);
}
if (errors.length) {
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

const orgIds = new Set(), perIds = new Set(), relIds = new Set(), oppIds = new Set(), engIds = new Set();

function uniq(list, set, pattern, label) {
  for (const item of list) {
    if (typeof item?.id !== "string" || !pattern.test(item.id)) {
      fail(`${label}: identifier "${item?.id}" does not match ${pattern}`); continue;
    }
    if (set.has(item.id)) fail(`${label}: duplicate identifier ${item.id}`);
    set.add(item.id);
  }
}
uniq(reg.organizations, orgIds, /^org-\d{4}$/, "organizations");
uniq(reg.persons, perIds, /^per-\d{4}$/, "persons");
uniq(reg.relationships, relIds, /^rel-\d{4}$/, "relationships");
uniq(reg.opportunities, oppIds, /^opp-\d{4}$/, "opportunities");
uniq(reg.engagements, engIds, /^eng-\d{4}$/, "engagements");

// Person is not Organization: namespaces must not collide.
for (const id of perIds) if (orgIds.has(id)) fail(`distinction: identifier ${id} used as both person and organization`);
for (const id of oppIds) if (engIds.has(id)) fail(`distinction: identifier ${id} used as both opportunity and engagement`);

for (const r of reg.relationships) {
  if (!perIds.has(r.personId)) fail(`${r.id}: personId ${r.personId} does not resolve`);
  if (!orgIds.has(r.organizationId)) fail(`${r.id}: organizationId ${r.organizationId} does not resolve`);
}
for (const o of reg.opportunities) {
  if (!orgIds.has(o.organizationId)) fail(`${o.id}: organizationId ${o.organizationId} does not resolve`);
  if (!o.disposition || typeof o.disposition.value !== "string") fail(`${o.id}: missing Founder disposition`);
  if (o.primaryContactRelationshipId && !relIds.has(o.primaryContactRelationshipId))
    fail(`${o.id}: primaryContactRelationshipId does not resolve`);
}

for (const e of reg.engagements) {
  const id = e.id ?? "engagement";
  if (!orgIds.has(e.organizationId)) fail(`${id}: organizationId ${e.organizationId} does not resolve`);
  if (!oppIds.has(e.originatingOpportunityId))
    fail(`${id}: originatingOpportunityId ${e.originatingOpportunityId} does not resolve`);

  const prereq = e.activation?.prerequisites ?? {};
  const missing = [];
  for (const p of PREREQS) {
    if (!prereq[p] || typeof prereq[p].established !== "boolean")
      fail(`${id}: activation prerequisite "${p}" is not recorded`);
    else if (prereq[p].established !== true) missing.push(p);
    else if (!prereq[p].evidence)
      fail(`${id}: prerequisite "${p}" is marked established with no evidence recorded`);
  }

  // THE GATE.
  if (e.status === "active" && missing.length)
    fail(`${id}: status "active" with unestablished activation prerequisite(s): ${missing.join(", ")}`);

  // Truthful stopping: blockedBy must be exactly the unestablished set.
  const blocked = Array.isArray(e.activation?.blockedBy) ? [...e.activation.blockedBy].sort() : null;
  if (blocked === null) fail(`${id}: activation.blockedBy is not recorded`);
  else {
    const expect = [...missing].sort();
    if (blocked.join("|") !== expect.join("|"))
      fail(`${id}: blockedBy [${blocked.join(", ")}] does not match the unestablished set [${expect.join(", ")}]`);
  }
  if (missing.length && e.status === "proposed" && blocked && blocked.length)
    fail(`${id}: prerequisites are missing but status is "proposed" rather than "blocked"`);

  // A Founder disposition of accept never activates anything on its own.
  const opp = reg.opportunities.find((o) => o.id === e.originatingOpportunityId);
  if (opp?.disposition?.value === "accept" && e.status === "active" && missing.length)
    fail(`${id}: Founder disposition "accept" treated as activation authority`);

  for (const c of CAPACITIES) {
    const cap = e.clientAuthority?.[c];
    if (!cap || typeof cap.basis !== "string") { fail(`${id}: client authority capacity "${c}" is not recorded`); continue; }
    if (cap.basis === "established" && !cap.holder)
      fail(`${id}: capacity "${c}" is "established" with no holder`);
    if (cap.holder && !perIds.has(cap.holder))
      fail(`${id}: capacity "${c}" holder ${cap.holder} does not resolve to a person`);
  }

  if (!Array.isArray(e.huertaGroupAssignment) || !e.huertaGroupAssignment.length)
    fail(`${id}: no Huerta Group responsibility assignment recorded`);

  const custodyIds = new Set();
  for (const c of e.custodyReferences ?? []) {
    if (custodyIds.has(c.id)) fail(`${id}: duplicate custody reference ${c.id}`);
    custodyIds.add(c.id);
    for (const f of ["sourceIdentity", "location", "accessBoundary", "confidentialityCondition"])
      if (!c[f]) fail(`${id}/${c.id}: custody reference missing required provenance field "${f}"`);
    // ISOLATION: confidential material is never repository-native.
    if (CONFIDENTIAL_CLASSES.includes(c.class)) {
      if (c.repositoryNative === true)
        fail(`${id}/${c.id}: class ${c.class} marked repositoryNative — confidential material may not be held in the corpus`);
      const loc = String(c.location ?? "");
      if (/^institution\/|^\.\/institution\/|^docs\/|^app\/|^components\/|^lib\//.test(loc))
        fail(`${id}/${c.id}: class ${c.class} location "${loc}" resolves inside the repository`);
    }
  }
  for (const ev of e.evidenceRegistrations ?? []) {
    if (!custodyIds.has(ev.custodyReferenceId))
      fail(`${id}/${ev.id}: custodyReferenceId ${ev.custodyReferenceId} does not resolve within this engagement`);
    // EVIDENCE IS NOT FINDING.
    const blob = `${ev.sourceIdentity ?? ""} ${ev.authorityContext ?? ""} ${ev.accessCondition ?? ""}`.toLowerCase();
    for (const w of FINDING_WORDS)
      if (blob.includes(w)) { fail(`${id}/${ev.id}: evidence registration contains finding language ("${w}")`); break; }
  }

  for (const l of e.learningCandidates ?? [])
    if (l.status !== "candidate")
      fail(`${id}/${l.id}: learning candidate status "${l.status}" — client material never admits itself`);

  // ---- P1 chain: authorization must flow, and the distinctions must hold ----
  const P1 = ["diagnosticInstances","participantEvidence","findings","contradictions","limitations",
              "reservedQuestions","recommendations","clientDecisions","authorizedWork","workProducts",
              "deliverables","validationRecords","followUps"];
  const p1Present = P1.some((k) => Array.isArray(e[k]) && e[k].length) || !!e.closure;
  // Engagement work presupposes an authorized engagement.
  if (p1Present && e.status !== "active" && e.status !== "closed")
    fail(`${id}: engagement work is recorded while status is "${e.status}" — work presupposes an activated engagement`);

  const evdIds = new Set((e.evidenceRegistrations ?? []).map((x) => x.id));
  const fndIds = new Set((e.findings ?? []).map((x) => x.id));
  const recIds = new Set((e.recommendations ?? []).map((x) => x.id));
  const decIds = new Set((e.clientDecisions ?? []).map((x) => x.id));
  const awkIds = new Set((e.authorizedWork ?? []).map((x) => x.id));
  const wkpIds = new Set((e.workProducts ?? []).map((x) => x.id));

  for (const pe of e.participantEvidence ?? []) {
    if (!custodyIds.has(pe.custodyReferenceId))
      fail(`${id}/${pe.id}: participant evidence custodyReferenceId does not resolve within this engagement`);
    for (const k of Object.keys(pe))
      if (/content|text|body|transcript|quote/i.test(k))
        fail(`${id}/${pe.id}: participant evidence carries a content field "${k}" — metadata is not raw evidence`);
  }
  // EVIDENCE IS NOT FINDING: a finding must cite registered evidence.
  for (const f of e.findings ?? [])
    for (const ref of f.supportingEvidenceIds ?? [])
      if (!evdIds.has(ref))
        fail(`${id}/${f.id}: finding cites evidence ${ref} that is not registered in this engagement`);
  // RECOMMENDATION IS NOT AUTHORIZATION.
  for (const r of e.recommendations ?? []) {
    if (r.authorizes !== false) fail(`${id}/${r.id}: recommendation claims to authorize`);
    for (const ref of r.basisFindingIds ?? [])
      if (!fndIds.has(ref)) fail(`${id}/${r.id}: recommendation cites finding ${ref} that does not exist`);
  }
  // A CLIENT DECISION CAN AUTHORIZE ONLY WHAT ITS AUTHORITY SUPPORTS.
  for (const d of e.clientDecisions ?? []) {
    if (!perIds.has(d.decidedBy)) fail(`${id}/${d.id}: decidedBy ${d.decidedBy} does not resolve to a person`);
    const cap = e.clientAuthority?.[d.capacityRelied];
    if (!cap || cap.basis !== "established")
      fail(`${id}/${d.id}: decision relies on capacity "${d.capacityRelied}" whose basis is not established`);
    else if (cap.holder !== d.decidedBy)
      fail(`${id}/${d.id}: ${d.decidedBy} decided under a capacity held by ${cap.holder}`);
    if (d.respondsToRecommendationId && !recIds.has(d.respondsToRecommendationId))
      fail(`${id}/${d.id}: responds to a recommendation that does not exist`);
  }
  // AUTHORIZED WORK IS NOT RECOMMENDATION.
  for (const w of e.authorizedWork ?? []) {
    if (recIds.has(w.authorizingDecisionId))
      fail(`${id}/${w.id}: work authorized by a recommendation — a recommendation authorizes nothing`);
    if (!decIds.has(w.authorizingDecisionId))
      fail(`${id}/${w.id}: authorizingDecisionId does not resolve to a client decision`);
  }
  // WORK PRODUCT IS NOT DELIVERABLE.
  for (const w of e.workProducts ?? []) {
    if (w.isDeliverable !== false) fail(`${id}/${w.id}: work product marked as a deliverable`);
    if (!awkIds.has(w.authorizedWorkId))
      fail(`${id}/${w.id}: work product does not trace to authorized work`);
  }
  for (const d of e.deliverables ?? []) {
    if (!wkpIds.has(d.fromWorkProductId))
      fail(`${id}/${d.id}: deliverable does not derive from a work product`);
    if (d.acceptedBy && !perIds.has(d.acceptedBy))
      fail(`${id}/${d.id}: acceptedBy does not resolve to a person`);
  }
  // CLIENT QUESTION IS NOT CLIENT DECISION.
  for (const q of e.reservedQuestions ?? [])
    if (q.answeredBy && !perIds.has(q.answeredBy))
      fail(`${id}/${q.id}: reserved question answered by ${q.answeredBy}, which is not a recorded person`);
  for (const c of e.contradictions ?? [])
    if (c.preserved !== true) fail(`${id}/${c.id}: contradiction not preserved`);
  // CLOSURE.
  if (e.closure && e.closure.status === "complete" && (e.closure.unresolvedConditions ?? []).length)
    fail(`${id}: closure "complete" while ${e.closure.unresolvedConditions.length} condition(s) remain unresolved`);

  const hq = e.seams?.headquartersRepresentation;
  if (hq) {
    for (const forbidden of ["rawEvidence", "testimony", "findings", "clientDecisions", "confidentialContent", "workHistory"])
      if (forbidden in hq) fail(`${id}: Headquarters representation carries forbidden field "${forbidden}"`);
    if (!hq.provenanceToEngagementRecord)
      fail(`${id}: Headquarters representation lacks provenance to the authoritative engagement record`);
  }

  if (!Array.isArray(e.chronology) || !e.chronology.length)
    fail(`${id}: no engagement chronology recorded`);
}

// THE CORPUS GUARD — no client-confidential material inside the governed corpus.
const MARKER = ["CLIENT-CONFIDENTIAL", "CLIENT CONFIDENTIAL SOURCE", "custodyClass: CLIENT_SOURCE"];
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) { if (entry !== "fixtures") walk(p); continue; }
    if (!/\.(md|json)$/.test(entry)) continue;
    const text = readFileSync(p, "utf8");
    for (const m of MARKER)
      if (text.includes(m))
        fail(`corpus guard: ${p.slice(root.length + 1)} carries client-confidential marker "${m}" — raw client material may not enter the institutional corpus`);
  }
}
if (existsSync(resolve(root, "institution"))) walk(resolve(root, "institution"));

if (errors.length) {
  console.error(`engagement validation FAILED — ${errors.length} defect(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
if (!quiet) {
  const n = (a) => (Array.isArray(a) ? a.length : 0);
  const active = reg.engagements.filter((e) => e.status === "active").length;
  console.log(
    `engagement validation passed — ${n(reg.organizations)} organization(s), ${n(reg.persons)} person(s), ` +
    `${n(reg.relationships)} relationship(s), ${n(reg.opportunities)} opportunity/ies, ` +
    `${n(reg.engagements)} engagement(s) (${active} active), activation gate and custody boundary enforced.`
  );
}
