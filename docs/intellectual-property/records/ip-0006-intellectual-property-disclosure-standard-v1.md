# ip-0006 — Intellectual Property Disclosure Standard v1

**Classification: Approved Methodology, Governance, and Policy**

- **Record:** `ip-0006` · v1.0 · `standard`
- **Authority basis:** Intellectual Property Foundation v1, §6
- **Source:** [`intellectual-property-foundation-v1.md`](../intellectual-property-foundation-v1.md)
- **Disclosure:** internal
- **Status:** approved internal standard · governance record

## Purpose and scope

Defines approved disclosure classifications and preserves separate
treatment of ownership, rights, origin, client derivation, educational
adaptation, publishing adaptation, and software implementation — for
all institutional IP records and authorized representations.

## Approved content

**Disclosure classifications:** `public` · `internal` · `confidential`
· `proprietary` · `restricted` · `unresolved`. Disclosure governs
handling, never ownership: `proprietary` is an institutional handling
class and is never legally enforceable protection; `public` never
implies ownership, relicensing, or waiver of any interest.

**Origin designations** (separate from disclosure; never imply
ownership): `original_institutional` · `client_derived` ·
`third_party_derived` · `jointly_developed` · `acquired` · `unknown` ·
`not_applicable`. Client-derived assets require explicit review-state
metadata; client and third-party interests are recorded through the
schema's interest flags.

Per the transmitted implementing-authorization boundary (recorded here
for traceability; not §6 prose): client-derived or third-party-derived
assets require later authorized review concerning confidentiality,
contracts, ownership, rights, personal or regulated data, preexisting
materials, de-identification, and permitted reuse.

**Adaptation designations** (separate from disclosure and origin):
`educational_adaptation` · `publishing_adaptation` ·
`software_implementation` · `brand_implementation` ·
`method_adaptation` · `none` · `unresolved`. Adaptations retain
traceability to their source asset and never redefine it; software
implementation is distinct from the underlying asset, and publication
is distinct from ownership.

**Ownership and rights recording** (conservative; factual states and
evidence only): ownership statuses from `not_evaluated` through
`legally_confirmed_*` (legally confirmed values require authoritative
Corporate Headquarters or legal evidence references); rights statuses
record evidence condition (`agreement_reference_recorded`,
`registration_reference_recorded`, `restrictions_known`,
`legally_reviewed`, …), never rights conclusions. This standard makes
no determination of copyright, patentability, trademark rights,
trade-secret status, inventorship, authorship, work-for-hire,
assignment validity, or chain of title.

## Limitations and open questions

- Full §6 prose pending verbatim insertion.
- Formal criteria for public disclosure of any IP record await IP
  authority; no record carries `public` disclosure.

## Technical implementation

Approved now; the validator rejects unauthorized public disclosure,
evidence-free legal confirmation, and missing client-derived review
states.
