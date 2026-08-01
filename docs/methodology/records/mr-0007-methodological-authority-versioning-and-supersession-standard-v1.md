# mr-0007 — Methodological Authority, Versioning, and Supersession Standard v1

**Classification: Approved Methodology, Governance, and Policy**

- **Record:** `mr-0007` · v1.0 · `standard`
- **Authority basis:** Methodology Foundation v1, §6
- **Source:** [`methodology-foundation-v1.md`](../methodology-foundation-v1.md)
- **Disclosure:** internal_methodology
- **Status:** approved internal standard · subject to future
  constitutional refinement · substantive

## Purpose and scope

Defines how methodological authority is established, recorded,
corrected, refined, disputed, versioned, superseded, and historically
preserved, for all Method Library records.

## Approved content

**Authority.** Methodological approval currently rests on the
Founder's existing institutional authority — an **interim, configurable
rule**, subordinate to the Constitution and to any later-approved
institutional decision-rights architecture. Approval is an
institutional act recorded as data (`approvingAuthority`,
`authorityBasis`, `approvalContext`); no technical role, permission, or
repository access constitutes or confers it, and no technical artifact
may encode the approving authority as immutable.

**Corrections vs refinements.** Non-substantive corrections (spelling,
formatting, broken references, metadata errors, clerical
inconsistencies) may be made without a new substantive version.
Substantive changes — to meaning, scope, requirements, methodological
logic, decision criteria, required evidence, approved application,
limitations, or disclosure boundaries — require a new version and
Methodology approval, with the rationale recorded. Validation must
never silently treat a substantive change as a metadata correction.

**Versioning and supersession.** Versions are explicit (`vN.N`), with
git history as the underlying record. A superseding record links both
directions (`supersedes` / `supersededBy`); the superseded record is
retained with status `superseded` and archival state
`superseded_retained`.

**Disagreement and uncertainty.** Disputes and uncertainty about a
record are recorded on the record (`uncertaintyRecords`,
`openQuestions`) and remain visible until resolved by the appropriate
authority — never silently removed.

## Limitations and open questions

- Final constitutional allocation and delegation of methodological
  approval authority remain unresolved; this standard must be revised
  when that architecture is approved.

## Technical implementation

Approved, provided approval roles remain configurable — enforced by the
validator (`approvingAuthority.configurable` must be `true`).
