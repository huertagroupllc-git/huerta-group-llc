# Institutional Method Library — Technical Architecture

**Classification: Development Standards and Architecture Decisions**

Defines the repository-based technical architecture of the
Institutional Method Library. Subordinate to
[Methodology Foundation v1](methodology-foundation-v1.md) (the
authoritative substantive source), the Constitution, the Vision
Foundation, and the Development Standards. **Presence in the library
never creates methodological authority** — authority comes only from
Methodology approval recorded on each record — and **this architecture
authorizes no runtime application**: no database, authentication,
admin interface, search/retrieval service, AI, automation, or public
publication. A future runtime remains possible but requires its own
authorization under ADR-0003's criteria.

## Record architecture

- **Authoritative source vs derived records.** Methodology Foundation
  v1 (`docs/methodology/methodology-foundation-v1.md`) is the
  authoritative source. Library records (`docs/methodology/records/`)
  extract and govern their approved subject, always linking back via
  `sourceRecords` and `authorityBasis`; where source and record ever
  disagree, the source is correct and the record is defective.
- **Identity.** Record identifiers are `mr-NNNN` (sequential, stable,
  never reused). Record files are
  `docs/methodology/records/mr-NNNN-<slug>.md`; `mr-0001`'s canonical
  content is the source document itself. Canonical paths are unique;
  records are never duplicated to simplify indexing.
- **Metadata home.** The registry (`knowledge/method-registry.json`,
  schema `knowledge/method-schema.json`) is the authoritative metadata
  store; record files carry the substantive content plus a minimal
  human-readable header. Metadata is not repeated wholesale in both
  places.
- **Validation.** `npm run validate:methods` — deterministic,
  dependency-free; schema conformance, exact eight-record coverage,
  required titles, path/id uniqueness, reference resolution,
  readiness-dimension integrity, disclosure and approval-authority
  guards, knowledge-manifest inclusion.

## Status dimensions (kept separate, never collapsed)

1. **Development status** — the MFv1 §5 lifecycle vocabulary.
2. **Authority status** — whether Methodology approval exists
   (`approved` / `provisional` / `unresolved`), with `authorityBasis`
   citing the approving source section and `approvalContext` recording
   how approval was granted.
3. **Disclosure level** — the MFv1 §7 vocabulary. Disclosure is not
   legal protection; IP claims are out of scope.
4. **Readiness designations** — five independent approvals
   (client application, educational adaptation, software
   implementation, public disclosure, proprietary-asset governance),
   each `approved` / `not_approved` / `not_applicable` / `unresolved`.
5. **Intellectual-property referral status** — `not_referred` /
   `proposed_for_review` / `under_ip_review` / `classified_by_ip` /
   `unresolved`. Methodology governs substance; IP governance (later)
   governs classification, protection, packaging, licensing, and
   ownership.
6. **Archival status** — `active` / `superseded_retained` / `archived`.

## Authority and approval (configurable by construction)

The interim rule (MFv1 §6) rests approval on the Founder's existing
institutional authority. Technically this is represented as **data**
(`approvingAuthority.basis`, with `configurable: true` required by the
validator) — never as code, role, or permission. No immutable approval
mechanism exists or may be added; the representation must be updated
when constitutional decision-rights architecture is approved. Technical
access to edit these files is not, and never becomes, institutional
approval.

## Versioning, supersession, history, uncertainty

Git history is the version record. Non-substantive corrections
(spelling, formatting, references, metadata, clerical) do not change a
record's version; substantive changes (meaning, scope, requirements,
logic, criteria, evidence, application, limitations, disclosure)
require a new version and Methodology approval, recorded in
`changeRationale`. Superseded records are retained (`superseded` +
`supersedes`/`supersededBy` links + `superseded_retained` archival
state) — never deleted. Known limitations, open questions, and
disagreement/uncertainty are recorded per record and remain visible
until resolved by the appropriate authority.

## Boundaries the library preserves

Methodology is distinct from: **institutional vision** (Vision
Foundation governs direction, not method content) · **constitutional
authority** (nothing here interprets or presumes constitutional text) ·
**intellectual-property classification** (referral status only) ·
**education** (adaptation readiness only; no curriculum, courses,
assessments, or credentials) · **software implementation** (readiness
only; software may later enforce or record approved methodology but
never establishes it through code) · **public website copy** (public
positioning is never internal methodological authority, and no public
route renders this library) · **client-specific material** (never
imported; client-derived learning enters only through later review,
abstraction, confidentiality protection, and approval — the
architecture reserves abstract evidence references for that future
process). Provisional material (MFv1 §4 candidate asset types) is
segregated in the schema and cannot be assigned as approved. Future
educational, publishing, and software adaptations must retain
traceability to their source records and versions.

## Record approval history

Each record's `approvalContext`, `authorityBasis`, and git history
constitute its approval record. New records require prior Methodology
approval of their substance — the library never receives drafts as if
approved, and placeholder records implying unapproved methodology are
prohibited (and mechanically blocked by the validator's exact-coverage
rule).
