# ed-0006 — Educational Asset Classification Standard v1

**Classification: Approved Methodology, Governance, and Policy**

- **Record:** `ed-0006` · v1.0 · `classification_standard`
- **Authority basis:** Education & Workforce Development Foundation v1,
  §7 (per §18.6)
- **Source:** [`education-workforce-development-foundation-v1.md`](../education-workforce-development-foundation-v1.md)
- **Disclosure:** internal
- **Status:** approved internal standard · governance record

## Purpose and scope

Establishes approved and provisional educational asset types without
approving specific offerings — programs, pathways, courses, modules,
lessons, workshops, cohorts, training, objectives, competencies,
assessments, projects, capstones, resources, guidance, credentials,
continuing education, and adaptations. The Foundation source (§7) is
authoritative; this record summarizes it and is corrected by it
wherever they differ.

## Approved content

**Approved conceptual types (§7):** `program` (a governed collection
of learning experiences around a defined purpose, audience,
capability, or outcome), `learning_pathway` (organized progression
relationships, not necessarily linear), `course` (a defined
instructional unit with approved scope, objectives, experiences, and
completion conditions), `module` (a bounded unit within a larger
course, program, or pathway), `lesson` (a focused instructional
experience), `workshop` (time-bounded, participatory, emphasizing
practice and production), `cohort` (a defined learner group in a
shared context or period — an approved conceptual *record* type),
`organizational_training` (education for or within an organizational
context), `learning_objective` (a prospective statement of intended
learning), `competency` (a defined, assessable combination of
knowledge, skill, judgment, practice, and performance), `assessment`
(a governed method for collecting and evaluating evidence),
`exercise`, `practical_project`, `capstone` (approved with no
universal requirement), `case_study`, `learning_resource`,
`instructor_guidance`, `continuing_education_activity` (no credit
system approved), and `educational_adaptation` (a traceable
transformation of approved methodology, IP, or institutional knowledge
for teaching, learning, practice, assessment, or capability
development). Executive education (§7.9) is an approved audience and
delivery context, not yet a formal program classification.

**Provisional types** (visibly provisional; never approved operational
records): `seminar` (§7.7 — not yet a required controlled
classification), `executive_education_as_program_class` (§7.9),
`credential` (§7.20 — none authorized for issuance), `certification`
(§7.21 — no system approved), the §10 provisional recognitions
(`certificate_of_completion` §10.4, `continuing_education_recognition`
§10.7, `organizational_certification` §10.8), and `digital_badge`
(implementing vocabulary — digital badges appear in the source only as
prohibited implementation §19.3 and unresolved matter §21).

**Classification constraint (§7.24).** Defining an asset type does not
approve an offering, establish a public product, approve enrollment or
a curriculum, authorize a credential, or establish commercial
availability, delivery readiness, or public-disclosure readiness.

**Governance-record types** (implementing vocabulary, per §18 and
§22.2): the schema additionally carries eleven governance-record types
(`institutional_education_foundation`, `education_governance_standard`,
`educational_doctrine`, `educational_architecture_standard`,
`competency_architecture_standard`, `classification_standard`,
`lifecycle_and_governance_standard`, `assessment_governance_standard`,
`quality_standard`, `technology_boundary_standard`,
`source_traceability_standard`) used only by the twelve initial
records; they are distinguished from offering and learning-asset types,
and the validator rejects any offering-typed record in this phase.

## Limitations and open questions

- Summary record: Foundation §7 is authoritative and corrects this
  record wherever they differ.
- Promotion of any provisional type is a reserved Education-authority
  decision; no offering-typed record may exist without separate
  educational approval.

## Technical implementation

Approved now; enforced by `knowledge/education-schema.json` (approved
enum, provisional list) and `npm run validate:education` (provisional
values rejected as record types; offering types rejected in this
phase).
