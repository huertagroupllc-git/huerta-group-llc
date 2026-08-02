# Institutional Intellectual Property Repository — Technical Architecture

**Classification: Development Standards and Architecture Decisions**

Defines the repository-based technical architecture of the
Institutional Intellectual Property Repository. Subordinate to
[Intellectual Property Foundation v1](intellectual-property-foundation-v1.md)
(the authoritative substantive source), the Constitution, the Vision
Foundation, and the Development Standards. Two governing sentences
frame everything here: **repository presence does not create IP
admission, and IP admission does not create legal ownership.** This
architecture authorizes **no runtime application** (no database,
authentication, API, search interface, portal, dashboard, or IP
management system — search/retrieval exist only as future capability
metadata) and **no legal or commercial determination of any kind**.

## Record architecture

- **Source vs repository records.** The Foundation source is
  authoritative; repository records (`docs/intellectual-property/records/`)
  extract and govern their approved subject, linking back via
  `sourceRecords` and `authorityBasis`. Where they disagree, the source
  is correct. Repository records are **metadata and governance about
  assets** — never the asset itself: a future admitted asset's
  substance stays under its substantive room's authority at its own
  canonical location.
- **Identity.** Identifiers are `ip-NNNN` (sequential, stable, never
  reused); record files are
  `docs/intellectual-property/records/ip-NNNN-<slug>.md`; `ip-0001`'s
  canonical content is the Foundation source itself. Canonical paths
  are unique.
- **Metadata home.** `knowledge/ip-registry.json` (schema
  `knowledge/ip-schema.json`) is the authoritative metadata store;
  record files carry substantive content plus a minimal header.
- **Validation.** `npm run validate:ip` — deterministic,
  dependency-free; schema conformance, exact six-record coverage,
  uniqueness, reference resolution, and the governance guards below.

## Status dimensions (kept separate, never collapsed)

1. **Lifecycle state** (§4) — document/asset development lifecycle.
2. **Institutional IP governance status** (§4) — where the asset
   stands with IP governance (`not_evaluated` → … → `admitted` /
   `admission_declined` / `governance_withdrawn` /
   `pending_external_determination`). The six initial records carry
   governance-record admission only — expressly not substantive-asset
   admission.
3. **Maturity** (§4) — distinct from lifecycle and from validation.
4. **Readiness** (§4) — nine independent dimensions; readiness is not
   disclosure, and no readiness value implies release.
5. **Disclosure** (§6) — never implies ownership; `proprietary` is an
   institutional handling class, never legally enforceable protection.
6. **Origin** (§6) — never implies ownership; `client_derived` requires
   an explicit review state.
7. **Adaptation** (§6) — separate from disclosure; adaptations retain
   traceability to their source asset and never redefine it.
8. **Ownership status / rights status / legal confirmation** —
   conservative factual and evidence states only; `legally_confirmed_*`
   values require recorded Corporate Headquarters or legal evidence
   references (validator-enforced). The repository records known facts;
   it never concludes copyright, patentability, trademark rights,
   trade-secret status, inventorship, authorship, work-for-hire,
   assignment validity, or chain of title.
9. **Commercial status** — intentionally `unresolved`/`not_applicable`
   only; licensing, valuation, and commercialization vocabulary does
   not exist in this phase.
10. **Archival status** — `active` / `superseded_retained` / `archived`
    / `declined_retained`; declined, withdrawn, superseded, and
    archived records are preserved, never deleted.

## Authority, stewardship, custody (distinct roles)

- **Substantive authority**: the source room that owns the asset's
  substance (e.g., Methodology for method assets).
- **IP authority**: admission, classification, stewardship, disclosure
  governance — recorded as configurable data
  (`approvingAuthority.configurable` must be `true`; no immutable
  office, no named individual as permanent authority).
- **Institutional IP steward**: the governance caretaker recorded per
  record.
- **Technical custodian**: Platform & Systems Development — custody of
  files and validation, which is **not** institutional stewardship and
  confers no authority.
- **Corporate Headquarters / legal administration**: all legally,
  financially, and commercially operative matters; referenced by
  evidence pointers (`agreementReferences`, `registrationReferences`,
  `corporateRecordReferences`), never performed by this repository.

## Distinctions this architecture preserves

Institutional knowledge ≠ institutional IP (the knowledge corpus is
governed documentation; IP status arises only through admission) ·
substantive approval ≠ IP admission ≠ legal ownership · maturity ≠
lifecycle · validation ≠ maturity · readiness ≠ disclosure · disclosure
≠ ownership · institutional proprietary status ≠ legal protection ·
technical custody ≠ institutional stewardship · source assets ≠
repository metadata · client-derived origin ≠ ownership · software
implementation ≠ underlying asset · publication/public release ≠
ownership · brand substance (Branding authority) ≠ IP governance ·
methodology substance (Methodology authority) ≠ IP governance.

## Relationships and traceability

Typed relationship arrays connect records to parents, derivatives,
related assets, and cross-domain sources (methodology, education,
publication, brand, software). Method Library records may appear only
as traceable references (`candidate_source` / `related` /
`traceability`) — **never as admitted assets absent a separate,
recorded admission decision** (validator-enforced). All eight method
records currently remain `not_referred`, and no relationship to them is
recorded in this phase.

## Provenance, evidence, versioning, preservation

Records carry creators/contributors where known (never legal
authorship or inventorship conclusions), source materials, development
history, and evidence references. Versions are explicit (`vN.N`) with
git history as the record; supersession links both directions; nothing
is deleted — declined, withdrawn, superseded, and archived records are
retained with accurate statuses. Known limitations, open questions,
and unresolved legal/institutional matters remain visible until
resolved by the appropriate authority. Non-substantive corrections
never change a version; substantive changes require a new version and
appropriate approval.

## Admission process (future assets)

Any future substantive asset requires: identifiable source · approved
substantive authority · provenance · institutional-value rationale ·
admission review · recorded admission decision (authority,
basis, date) · governance status · conservative ownership/rights
status · disclosure · stewardship. No placeholder records; no
automatic admission of any repository file, method record, ADR, brand
expression, publication, educational concept, dataset, or software
component. Nothing beyond the six governance records is admitted in
this phase.

## Future extensibility — explicitly uncommitted

Future runtime capabilities (search, access control, database,
administrative tooling) are recorded as capability metadata only; any
of them requires its own authorization under ADR-0003's criteria.
Publishing and AI authority remain intentionally unresolved.
