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

**Source of authority (§6.1).** A methodological asset becomes
authoritative when: (1) it falls within the legitimate authority of the
Methodology room; (2) its content and scope are sufficiently defined;
(3) its status, version, authority basis, and limitations are recorded;
(4) it receives explicit approval through the then-valid institutional
approval process; and (5) any required constitutional,
intellectual-property, educational, technical, operational, legal, or
client-specific dependencies are resolved or expressly bounded.
**Presence in the Method Library records authority. It does not create
authority.**

**Present approval basis (§6.2).** Methodological assets may be
approved through an explicit decision recorded in the Methodology room
under the Founder's existing institutional authority — an **interim,
configurable rule**, subordinate to the Constitution, later-approved
institutional decision-rights architecture, and any valid superseding
governance decision. The authority basis is stored as data
(`approvingAuthority`, `authorityBasis`, `approvalContext`); no
technical role, permission, or repository access constitutes or confers
approval, and no technical artifact may encode the approving authority
as immutable.

**Provisional material (§6.3).** Provisional material must be clearly
identified as non-authoritative; record its author or originating
source where appropriate, its purpose, its current status, and its
unresolved questions; avoid language implying institutional approval;
and remain segregable from current approved methodology.

**Corrections vs refinements.** Non-substantive corrections (spelling,
formatting, broken references, metadata errors, clerical
inconsistencies) may be made without a new substantive version.
Substantive changes — to meaning, scope, requirements, methodological
logic, decision criteria, required evidence, approved application,
limitations, or disclosure boundaries — require a new version and
Methodology approval, with the rationale recorded. Validation must
never silently treat a substantive change as a metadata correction.

**Versioning and supersession (§6.5).** Versions are explicit (`vN.N`),
with git history as the underlying record. A superseding record must
identify the asset superseded, the effective version, the reason for
supersession, whether prior applications remain valid, any transition
requirements, and any continuing historical or limited use; it links
both directions (`supersedes` / `supersededBy`), and the superseded
record is retained with status `superseded` and archival state
`superseded_retained`. Superseded assets must not be deleted from
institutional history.

**Disagreement and uncertainty (§6.6).** Recorded through: open issue ·
competing interpretation · evidence limitation · known exception ·
unresolved dependency · validation concern · minority or alternative
position where institutionally relevant · decision rationale when the
matter is resolved (`uncertaintyRecords`, `openQuestions`). Uncertainty
must not be concealed through premature approval or false precision.

## Limitations and open questions

- Final constitutional allocation and delegation of methodological
  approval authority remain unresolved; this standard must be revised
  when that architecture is approved.

## Technical implementation

Approved, provided approval roles remain configurable — enforced by the
validator (`approvingAuthority.configurable` must be `true`).
