# mr-0006 — Methodological Lifecycle and Maturity Standard v1

**Classification: Approved Methodology, Governance, and Policy**

- **Record:** `mr-0006` · v1.0 · `standard`
- **Authority basis:** Methodology Foundation v1, §5
- **Source:** [`methodology-foundation-v1.md`](../methodology-foundation-v1.md)
- **Disclosure:** internal_methodology
- **Status:** approved internal standard · substantive

## Purpose and scope

Governs development status, maturity, supersession, archival treatment,
and the separate readiness approvals of every Method Library record.

## Approved content

**Development statuses:** `working_concept` → `draft` → `under_review`
→ `validated_through_use` → `approved_internal_method`, plus
`superseded` and `archived`; the foundation-specific approved statuses
(`approved_internal_foundation`, `approved_internal_doctrine`,
`approved_internal_framework`, `approved_internal_standard`) represent
the initial governance records truthfully. Progression toward approval
requires Methodology approval at each consequential step; nothing
advances by default or by technical action.

**Separate readiness designations** — each independent of development
status and of one another, each `approved` / `not_approved` /
`not_applicable` / `unresolved`:

- approved_for_client_application
- approved_for_educational_adaptation
- approved_for_software_implementation
- approved_for_public_disclosure
- proposed_for_proprietary_asset_governance

An approved internal method is **not** thereby client-ready,
teachable, software-ready, publishable, or proprietary: each such use
requires its own approval, recorded separately. Collapsing these
dimensions into any single lifecycle field is prohibited.

**Archival treatment:** superseded and archived records are preserved,
never deleted; `superseded` records link to their replacement.

**Required lifecycle rule (§5.3):** no methodological asset may be
represented as an approved internal method solely because it appears on
the public website, exists in software, has been taught, was used by a
consultant, was delivered to a client, was published, was created by
Huerta Group personnel, has been classified as intellectual property,
has been validated through one or more uses, or exists in the
Institutional Method Library.

## Limitations and open questions

- Formal evidence thresholds for `validated_through_use` remain a
  reserved later decision (§10.2).

## Technical implementation

Approved now; the schema separates every dimension and the validator
rejects collapsed or malformed status representations.
