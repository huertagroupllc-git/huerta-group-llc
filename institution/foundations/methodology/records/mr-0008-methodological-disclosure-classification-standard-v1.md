# mr-0008 — Methodological Disclosure Classification Standard v1

**Classification: Approved Methodology, Governance, and Policy**

- **Record:** `mr-0008` · v1.0 · `standard`
- **Authority basis:** Methodology Foundation v1, §7
- **Source:** [`methodology-foundation-v1.md`](../methodology-foundation-v1.md)
- **Disclosure:** internal_methodology
- **Status:** approved internal standard · substantive

## Purpose and scope

Defines the current disclosure and adaptation distinctions for all
Method Library records and derived adaptations — without making
unsupported legal ownership or protection claims.

## Approved content

**Disclosure levels (§§7.1–7.8; authoritative definitions in the
source):** `public_methodology_principle` (high-level approved
principles suitable for public communication, without internal methods,
decision logic, instruments, or proprietary implementation detail) ·
`internal_methodology` (authorized internal use; internal does not
automatically mean legally confidential or proprietary) ·
`confidential_methodological_material` (restricted access; the basis
for confidentiality should be recorded) · `proprietary_methodology`
(formally governed as a proprietary institutional asset through
coordination with Intellectual Property) · `client_specific_material` ·
`educational_adaptation` (must preserve source accuracy and authority
boundaries) · `publishing_adaptation` (public representation
distinguished from underlying internal methodology) ·
`software_ready_methodology` (requires approved source, defined scope,
defined logic or requirements, known limitations, version
identification, technical implementation approval, and traceability) ·
`unresolved`.

**Rules.**
- Disclosure level is independent of development status, authority, and
  readiness (mr-0006); public disclosure additionally requires the
  separate `approved_for_public_disclosure` readiness approval.
- `proprietary_methodology` is a disclosure handling class, **not** a
  legal claim: no trade-secret, copyright, patent, trademark, or
  licensing status may be inferred from it or declared through this
  standard — those belong to later Intellectual Property governance.
- `client_specific_material` never enters the Institutional Method
  Library; client-derived learning enters only after review,
  abstraction, confidentiality protection, contractual compliance, and
  approval.
- Adaptations (`educational_adaptation`, `publishing_adaptation`,
  `software_ready_methodology`) must retain traceability to their
  source records and versions.
- All eight initial records are `internal_methodology`; the public
  Methodology page presents previously approved public principles only
  and discloses nothing further.

## Limitations and open questions

- The mapping between existing public-page principles and
  `public_methodology_principle` records awaits a future Methodology
  review; no record currently carries that level.

## Technical implementation

Approved now; the validator rejects `approved` public-disclosure
readiness on any record absent explicit authorization, and rejects any
legal-protection claim fields (none exist in the schema).
