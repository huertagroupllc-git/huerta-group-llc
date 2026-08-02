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
principles for all institutional IP repository records.

## Approved content

**Lifecycle states:** `working_concept` · `draft` · `under_review` ·
`approved` · `validated` · `superseded` · `archived`.

**Institutional IP governance statuses:** `not_evaluated` · `candidate`
· `under_ip_review` · `admitted` · `admission_declined` ·
`governance_withdrawn` · `pending_external_determination`. Governance
status records where an asset stands with IP governance; it is not the
asset's development lifecycle, and `admitted` never implies legal
ownership.

**Maturity levels:** `emerging` · `defined` · `tested` · `established`
· `mature` — distinct from lifecycle and from validation.

**Readiness dimensions** — nine independent approvals, each `approved`
/ `not_approved` / `not_applicable` / `unresolved`:
`internal_reference_ready`, `internal_operational_use_ready`,
`method_use_ready`, `educational_adaptation_ready`,
`publication_review_ready`, `public_release_ready`,
`software_implementation_ready`, `client_use_ready`,
`licensing_review_ready`. No readiness value is a maturity stage, a
disclosure change, or a release.

**Separation rule:** lifecycle, governance status, maturity, readiness,
disclosure, origin, adaptation, ownership status, rights status, legal
confirmation, commercial status, and archival status must never be
collapsed into one field.

**Supersession and archival:** superseded records link both directions
and are retained; declined, withdrawn, and archived records are
preserved with accurate statuses — nothing is deleted from
institutional history.

## Limitations and open questions

- Full §4 prose pending verbatim insertion.
- Criteria for `validated` and maturity advancement await IP-authority
  definition.

## Technical implementation

Approved now; the schema separates every dimension and the validator
rejects collapsed representations.
