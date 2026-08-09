# Education Platform Foundation — Technical Architecture

**Classification: Development Standards and Architecture Decisions**

Defines the repository-based technical architecture of the Education
Platform Foundation. Subordinate to
[Education & Workforce Development Foundation v1](../foundations/education/education-workforce-development-foundation-v1.md)
(the authoritative substantive source, "EWDFv1"), the Constitution, the
Vision Foundation, and the Development Standards. Two governing
sentences frame everything here: **repository presence does not create
educational approval, and educational approval does not authorize
delivery, enrollment, publication, sale, data collection, credential
issuance, or deployment** (EWDFv1 §12.2). This architecture authorizes
**no LMS and no runtime education platform** — no database,
authentication, accounts, enrollment, scheduling, payments, portals,
dashboards, APIs, AI tutoring, automated grading, or production
learner data (EWDFv1 §19.3) — and **selects no vendor, LMS, AI
provider, or hosting model** (EWDFv1 §16.9).

## Record architecture

- **Source vs derived records.** The Foundation source is
  authoritative; derived records (`institution/foundations/education/records/`) extract
  and govern their approved subject, linking back via `sourceSections`
  and `authorityBasis`. Where they disagree, the source is correct.
  Education records are **governance metadata about educational
  architecture** — never programs, courses, or offerings themselves.
- **Identity.** Identifiers are `ed-NNNN` (sequential, stable, never
  reused); record files are `institution/foundations/education/records/ed-NNNN-<slug>.md`;
  `ed-0001`'s canonical content is the Foundation source itself.
  Canonical paths are unique.
- **Metadata home.** `institution/metadata/registries/education-registry.json` (schema
  `institution/metadata/schemas/education-schema.json`) is the authoritative metadata
  store; record files carry substantive content plus a minimal header.
- **Validation.** `npm run validate:education` — deterministic,
  dependency-free, offline; schema conformance, exact twelve-record
  coverage, uniqueness, reference resolution, and the governance
  guards below.

## Educational architecture layers (EWDFv1 §4)

The twelve governance records realize the Foundation's layers:
doctrine (§3, `ed-0003`), definition and scope (§2, `ed-0002`),
architecture layers (§4, `ed-0004`), capability and competency (§6,
`ed-0005`), asset classification (§7, `ed-0006`), lifecycle and
readiness (§11, `ed-0007`), authority and approval (§12, `ed-0008`),
assessment and competency verification (§9, `ed-0009`), quality and
evidence (§13, `ed-0010`), technology and AI boundaries (§16,
`ed-0011`), and source traceability (§17, `ed-0012`). Progression
concepts (§8), credential boundaries (§10), audiences (§5), learner
data (§14), and delivery models (§15) are represented as controlled
vocabulary and conceptual boundaries only.

## Classification model

- **Approved conceptual asset types** — eleven governance-record types
  (used by the twelve initial records) plus the approved conceptual
  offering and learning-asset types from §7 (`program`,
  `learning_pathway`, `course`, `module`, `lesson`, `workshop`,
  `cohort`, `organizational_training`, `learning_objective`,
  `competency`, `assessment`, `exercise`, `practical_project`,
  `capstone`, `case_study`, `learning_resource`, `instructor_guidance`,
  `continuing_education_activity`, `educational_adaptation`). The
  schema **distinguishes governance-record types from offering and
  learning-asset types**, and the validator rejects any offering-typed
  record in this phase (EWDFv1 §18: no offering records).
- **Provisional types** (visibly provisional, never approved
  operational records): `seminar`,
  `executive_education_as_program_class`, `credential`,
  `certification`, `certificate_of_completion`,
  `continuing_education_recognition`, `organizational_certification`,
  `digital_badge`. Recording a provisional descriptor never creates
  the corresponding operational or legal status (§7.7, §7.20–7.21,
  §10.4–10.8; `digital_badge` is implementing vocabulary — digital
  badges appear in the source only as prohibited implementation §19.3
  and unresolved matter §21).
- **Assessment categories** (§9) are conceptual vocabulary only —
  `knowledge_check` through `credential_evaluation`; their presence in
  the schema creates no assessment instrument (§9.14).

## Status dimensions (kept separate, never collapsed)

1. **Content lifecycle** (§11.1) — `working_concept` → … → `approved` /
   `superseded` / `retired` / `archived`.
2. **Program maturity** (§11.2) — twelve conceptual states including
   `pilot_ready`, `pilot`, `validated`, `active`, `paused`, plus the
   implementing `not_applicable` for governance records. Content
   lifecycle and program maturity are distinct fields and never
   collapse.
3. **Ten readiness dimensions** (§11.4; content maturity, the
   first-listed §11.4 dimension, is tracked as the separate
   content-lifecycle field per §11.1) — educational-substance
   approval, program approval, delivery readiness, enrollment
   availability, assessment readiness, credential readiness,
   public-disclosure readiness, technology-implementation readiness,
   legal-and-operational readiness, commercial readiness — each
   independently `approved` / `not_approved` / `not_applicable` /
   `unresolved`. **No state implies another** (§11.5): program approval
   ≠ delivery readiness ≠ enrollment availability; public-disclosure
   readiness ≠ commercial availability; technology readiness ≠ program
   approval; credential readiness ≠ credential issuance
   (validator-enforced).
4. **Educational authority status** (§12.1) — whether the record is
   authoritative, provisional, under review, superseded, retired, or
   archived; distinct from lifecycle and readiness.
5. **Disclosure** — internal for every initial record; public
   disclosure requires separate authorization (§17.6).
6. **Retirement and archival status** — retired and archived records
   are preserved, never deleted (§11.1, §12.10).

## Distinctions this architecture preserves

Education ≠ public educational copy (the public page is positioning,
never internal specification, §22.1) · capability ≠ competency (§6.1
vs §6.2) · knowledge ≠ competency (§6.3) · objective ≠ achieved
outcome (§6.8–6.9) · learner outcome ≠ organizational outcome (§6.10,
§2.14) · completion ≠ competency (§8.6, §9.11) · competency
recognition ≠ credential (§10.3 vs §10.5) · credential ≠ certification
(§10.5 vs §10.6) · content lifecycle ≠ program maturity (§11) ·
program approval ≠ delivery readiness (§12.2) · delivery readiness ≠
enrollment availability (§11.4) · public disclosure ≠ commercial
availability (§11.4) · education approval ≠ Methodology authority
(§2.8, §12.4) · education approval ≠ IP authority (§2.9, §12.5) ·
educational governance ≠ Corporate Headquarters operations (§12.8) ·
conceptual learner records ≠ production learner data (§14.2) ·
technical accommodation ≠ authorization (§15.3) · technical custody ≠
educational authority (§12.7).

## Authority and approval (configurable)

Approval authority is recorded as configurable data
(`approvingAuthority.configurable` must be `true`,
validator-enforced): no immutable office, no named individual as
permanent authority, no technical role treated as educational
authority (§12.3). Substantive authority stays with the responsible
room: Education & Workforce Development for educational substance,
Methodology for methodological meaning, Intellectual Property for IP
status, Branding for public representation, Platform & Systems
Development for technical implementation only (§12.4–12.8). Corporate
Headquarters governs legally, financially, contractually, and
commercially operative matters; the repository records evidence
references, never performs them (§12.8). Approval history is recorded
per record; revisions preserve prior versions, decision history, and
supersession links — approved records are never silently overwritten
(§12.10).

## Traceability and adaptations

Typed relationship arrays connect education records to methodology
records (`mr-NNNN`), IP records (`ip-NNNN`), institutional-knowledge
manifest records, capabilities, competencies, and each other. Every
relationship must resolve (validator-enforced). Educational
adaptations, when later authorized, must record governing source,
source version, adaptation purpose and scope, responsible authority,
disclosure, material transformation, known omissions, review status,
and supersession effect (§17.2); a source update or supersession
triggers governed review, never automatic modification (§17.4–17.5).
**No educational adaptation and no IP admission is created by this
foundation** — all methodology/IP relationship arrays are empty in
this phase, and the public website is never a reconstruction source
(§17.7).

## Quality and evidence metadata

Records carry quality metadata per §13.2 (review status, review type,
reviewer authority, accuracy, methodological fidelity, coherence,
accessibility review, evidence basis, corrective actions, next review
condition) and evidence metadata proportionate to claims (§13.3): no
effectiveness, competency-improvement, employment, organizational
improvement, or ROI claim may be represented without appropriate
evidence and approval.

## Conceptual learner-data boundaries (no production storage)

The fifteen conceptual record types of §14.1 (learner, organization,
team, cohort, participation, assignment, progress, assessment attempt,
evidence submission, feedback, completion, competency verification,
credential decision, continuing-education history) are documented as
future architecture only. **None is implemented.** No database,
account, authentication, identity store, personal data, analytics, or
production record of any kind exists or is authorized; production use
is blocked pending privacy, legal, security, access-control,
retention, and program governance (§14.2, §14.5). Future record
separation (§14.4) and data minimization (§14.3) are binding design
constraints on any later authorized system.

## Technology and AI boundaries

The foundation is vendor-neutral and model-provider-independent
(§16.6, §16.9): no LMS, AI provider, assessment vendor, credential
vendor, video or collaboration platform, data architecture, or hosting
model is selected. Technology never independently determines doctrine,
quality, fidelity, assessment validity, competency, credentials,
certification, or public claims (§16.2). No automated
high-consequence decision — credential, certification, competency,
disciplinary, admission, eligibility, or organizational certification
— is authorized (§16.8); human review remains proportionate to
consequence (§16.3, §9.12).

## Versioning, supersession, retirement, preservation

Versions are explicit (`vN.N`) with git history as the record;
supersession links both directions; retirement withdraws from current
use without deletion; archival preserves history, evidence, and
relationships (§11.1, §12.10). Working-concept, draft, approved,
superseded, retired, and archived educational development is
historically preserved. Non-substantive corrections never change a
version; substantive changes require a new version and appropriate
educational approval.

## Unresolved institutional dependencies

Constitutional approval architecture (§20.1), Operating Systems &
Process Architecture workflows (§20.8), Corporate Headquarters
operations (§20.9), privacy and legal governance (§20.10), program
development (§20.11), instructor standards (§20.12), learner-support
policy (§20.13), and credentialing policy (§20.14) remain unresolved,
along with every §21 matter. Their absence is never interpreted as
approval, delegation, or permission (§21).

## Future extensibility — explicitly uncommitted

Future programs, curricula, assessments, credentials, delivery
systems, learner systems, and reporting are extension points only;
each requires its own educational approval and, for any runtime
system, separate authorization under ADR-0003's criteria and ADR-0005's
environment-isolation threshold. Nothing in this architecture commits
to a vendor, an LMS, or a production data architecture.
