# ed-0007 — Educational Lifecycle and Readiness Standard v1

**Classification: Approved Methodology, Governance, and Policy**

- **Record:** `ed-0007` · v1.0 · `lifecycle_and_governance_standard`
- **Authority basis:** Education & Workforce Development Foundation v1,
  §11 (per §18.7)
- **Source:** [`education-workforce-development-foundation-v1.md`](../education-workforce-development-foundation-v1.md)
- **Disclosure:** internal
- **Status:** approved internal standard · governance record

## Purpose and scope

Defines content maturity, program maturity, readiness dimensions,
supersession, retirement, and archival treatment for educational
assets, programs, assessments, credentials, disclosure, delivery,
enrollment, legal, commercial, and technical readiness. The Foundation
source (§11) is authoritative; this record summarizes it and is
corrected by it wherever they differ.

## Approved content

**Content lifecycle (§11.1)** — seven approved states:
`working_concept` (early exploratory work without institutional
approval) · `draft` (structured, prepared for review, not
authoritative) · `under_review` (undergoing designated substantive,
methodological, instructional, legal, brand, technical, or other
required review) · `approved` (approved by the appropriate authority
for its defined scope) · `superseded` (replaced by a later
authoritative version) · `retired` (intentionally withdrawn from
current use without deletion) · `archived` (preserved primarily for
historical, evidentiary, or traceability purposes).

**Program maturity (§11.2–11.3)** — twelve conceptual states
(`working_concept`, `draft`, `under_review`, `approved`,
`pilot_ready`, `pilot`, `validated`, `active`, `paused`, `superseded`,
`retired`, `archived`, plus the implementing `not_applicable` for
non-program records). Pilot-Ready means pilot prerequisites satisfied
but delivery not begun; Pilot means bounded testing under approved
limitations; Validated means evidence supports the approved validation
conclusion for the defined scope (never universal effectiveness);
Active means authorized current delivery within approved scope; Paused
means temporary suspension without retirement. **Use of these states
authorizes no program**, and program maturity is a separate field from
content lifecycle — never collapsed.

**Ten separate readiness dimensions (§11.4)** — §11.4 lists eleven
distinct dimensions; the first, content maturity, is tracked as the
separate content-lifecycle field per §11.1, leaving these ten:
`educational_substance_approval`, `program_approval`,
`delivery_readiness`, `enrollment_availability`,
`assessment_readiness`, `credential_readiness`,
`public_disclosure_readiness`,
`technology_implementation_readiness`,
`legal_and_operational_readiness`, `commercial_readiness` — each
recorded independently with the conservative values `approved` /
`not_approved` / `not_applicable` / `unresolved`. The source's own
examples: a program may be approved educationally but unavailable for
enrollment; a record may be approved internally but not approved for
public disclosure; an assessment may be designed but not ready for
operational use; a technical schema may be implemented without
authorizing the represented program.

**No state inference (§11.5).** No lifecycle state automatically
implies another readiness state — program approval never implies
delivery readiness, delivery readiness never implies enrollment
availability, public-disclosure readiness never implies commercial
availability, technology readiness never implies program approval, and
credential readiness never implies issuance (validator-enforced).

**Supersession, retirement, archival (§11.1, §12.10):** superseded
records link both directions and are retained; retired and archived
records are preserved with accurate statuses — nothing is deleted from
institutional history.

## Limitations and open questions

- Summary record: Foundation §11 is authoritative and corrects this
  record wherever they differ.
- Criteria for `validated` program maturity and evidence standards for
  state transitions await Education-authority definition.

## Technical implementation

Approved now; the schema separates every dimension and the validator
rejects collapsed or inferred readiness representations.
