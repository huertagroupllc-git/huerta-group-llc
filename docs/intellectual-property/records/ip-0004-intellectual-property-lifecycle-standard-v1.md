# ip-0004 — Intellectual Property Lifecycle Standard v1

**Classification: Approved Methodology, Governance, and Policy**

- **Record:** `ip-0004` · v1.0 · `standard`
- **Authority basis:** Intellectual Property Foundation v1, §4
- **Source:** [`intellectual-property-foundation-v1.md`](../intellectual-property-foundation-v1.md)
- **Disclosure:** internal
- **Status:** approved internal standard · governance record

## Purpose and scope

Defines lifecycle states, institutional IP governance statuses,
readiness dimensions, maturity levels, supersession, and archival
principles for all institutional IP repository records. The Foundation
source (§4) is authoritative; this record summarizes it and is
corrected by it wherever they differ.

## Approved content

**Lifecycle states (§4.1):** `working_concept` (an identifiable early
concept with possible future value, not sufficiently developed for
formal review and not approved institutional IP) · `draft` (under
active development, sufficiently defined to record and version; not
approved for institutional reliance unless separately authorized for
limited use) · `under_review` (undergoing substantive, governance,
authority, disclosure, provenance, or admission review — review may
require revisions without rejecting the asset) · `approved` (accepted
by the appropriate substantive authority for its stated purpose and
approved version — approval does not necessarily mean the asset is
validated in practice, admitted into proprietary governance, legally
owned by Huerta Group, publicly releasable, or commercially ready) ·
`validated` (an approved asset supported by documented evidence of
effective use, testing, operational performance, client application,
technical verification, research support, or another authorized
validation method — validation must identify its scope, and validation
in one context does not establish universal validity) · `superseded`
(replaced by a later approved asset or version for active use;
preserved and traceable) · `archived` (removed from active development
or use but retained for historical, evidentiary, legal, research, or
institutional-memory purposes — archival status erases no prior
approval, validation, authorship, ownership evidence, or
relationships).

**Institutional IP governance statuses (§4.2):** `not_evaluated` ·
`candidate` · `under_ip_review` · `admitted` · `admission_declined` ·
`governance_withdrawn` · `pending_external_determination` — tracked
separately from lifecycle state. `admitted` means the asset is formally
governed as Huerta Group institutional IP; admission is not a legal
ownership determination, and governance status is distinct from asset
maturity.

**Readiness dimensions (§4.3)** — readiness identifies what an asset is
authorized to support; nine independent approvals, each recorded with
one of the schema's values `approved` / `not_approved` /
`not_applicable` / `unresolved`:
`internal_reference_ready`, `internal_operational_use_ready`,
`method_use_ready`, `educational_adaptation_ready`,
`publication_review_ready`, `public_release_ready`,
`software_implementation_ready`, `client_use_ready`,
`licensing_review_ready`. A readiness designation must not be inferred
from maturity, approval, validation, disclosure, or IP admission.

**Maturity levels (§4.4):** `emerging` · `defined` · `tested` ·
`established` · `mature` — the degree of development, evidence,
stability, and institutional adoption, separate from lifecycle state,
governance status, disclosure, and readiness. The source's own example:
an asset may simultaneously be approved, admitted as institutional IP,
internally confidential, software-implementation ready, and tested in
maturity — distinct attributes.

**Separation rule:** lifecycle, governance status, maturity, readiness,
disclosure, origin, adaptation, ownership status, rights status, legal
confirmation, commercial status, and archival status must never be
collapsed into one field.

**Supersession and archival:** superseded records link both directions
and are retained; declined, withdrawn, and archived records are
preserved with accurate statuses — nothing is deleted from
institutional history.

## Limitations and open questions

- Detailed evidence standards for `validated` and criteria for maturity
  advancement await IP-authority definition beyond the §4 scope rules.

## Technical implementation

Approved now; the schema separates every dimension and the validator
rejects collapsed representations.
