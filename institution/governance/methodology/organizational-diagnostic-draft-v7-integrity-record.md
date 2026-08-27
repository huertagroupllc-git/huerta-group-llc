# Organizational Diagnostic — Generation One Draft v7: Integrity and Version Record

**Classification: Institutional Record** — integrity record (evidentiary,
non-governing). Produced under `fd-0036`. It records Draft v7's digest, its
relationship to Draft v6, and its maturity classification. **It records no
validation, because none was performed.**

## 1. Draft v7

| Field | Value |
| --- | --- |
| **Name** | Huerta Group Organizational Diagnostic — Generation One, Draft v7 |
| **Path** | `institution/governance/methodology/organizational-diagnostic-generation-one-draft-v7.md` |
| **SHA-256** | `85213ad3928502ae64a19f2aca5a7c3f2b349384184e9c1d3ded66b7cc765adc` |
| **Size** | 131,142 bytes · 1,931 lines |
| **Frozen at** | the commit recorded in `draft-v7-construction-report.md` §2 |
| **Status** | **PROVISIONAL DRAFT — UNTESTED AS A VERSION** |
| **MF v1 status** | §5.1 *draft*, produced under §6.4 as a new version |
| **Authorization** | `fd-0036`; implementing the MD-1 … MD-5 determinations and RQ-G |
| **Baseline** | Draft v6 |
| **Reason for the version** | MD-1 … MD-5 and RQ-G, plus strictly necessary consistency, and nothing else |
| **Applications** | **none** |

**Verification.** `shasum -a 256` of the file at the path above. The text is not
altered in place, and this record is kept separately from it so that neither
changes the other.

## 2. Version chain

| Version | Commit | SHA-256 | Applications | Status |
| --- | --- | --- | --- | --- |
| Draft v1 | `076440c` | `6fb2fb84…c2c4a9a73` | 1 — self-application dry run | frozen historical |
| Draft v2 | `9659fbb` | `9e2976e1…cda5d4b` | 1 + a clarification round | frozen historical |
| Draft v3 | `d738d7e` | `04fd02c7…d379f89f` | **2, by two authors** | frozen historical |
| Draft v4 | `240ccf9` | `3137da8c…3c9c994` | 0 | frozen historical |
| Draft v5 | `d8a86d0` | `d178024b…f75635c` | 1, by a non-authoring context | frozen historical |
| Draft v6 | `578d358` | `d2f64ee2…4600a238b10` | **1, with participant evidence across two sessions** | frozen historical |
| **Draft v7** | *this construction* | `85213ad3…cc765adc` | **0** | **PROVISIONAL DRAFT — UNTESTED AS A VERSION** |

**Draft v3 remains the version with the most applications behind it. Draft v6 is
the only version ever applied with authentic participant evidence.** No version
is superseded as a historical record; each supersedes its predecessor only as
the current draft.

## 3. Draft v6 → Draft v7 lineage

- **Direct textual baseline:** Draft v6, unchanged and re-verified at this
  construction's start and close.
- **Diff:** 13 hunks across **7 locations** — A15 (four), Instrument 9 (two),
  A17 rule 7, A18, A20, the header, Part C's version-count line — plus the new
  Part D §D8.
- **Byte-identical in Draft v7**, verified programmatically rather than
  asserted: **A2** (all three classes and all six rules), **A10**, **A16**,
  **A19**, **Instrument 1**, **Instrument 5**, **Instrument 6**, **Instrument
  10**, and **A18's five advancement outcomes**.
- **Authorities:** MD-1, MD-2, MD-3, MD-4, MD-5, RQ-G — six, all used, none
  exceeded. Traced item by item at `draft-v7-traceability.md` and at §D8.

## 4. What this record does not establish

**It is a digest and a lineage, not a validation.** Draft v7 has been applied to
nothing. Repository checks, digest verification and structural review establish
that the text is what it says it is and that nothing outside the authorized
boundary changed. **They establish nothing about whether the method works** —
`fd-0030` §2.9's rule that repository checks never make a draft tested governs
here as it did for every predecessor.

**Item-level readiness** — what is checkable now, what is retrospective, and
what needs behaviour this institution cannot produce — is at
`draft-v7-validation-readiness.md`.

**Related records:** `organizational-diagnostic-generation-one-draft-v7.md`;
`draft-v7-traceability.md`; `draft-v7-validation-readiness.md`;
`draft-v7-construction-report.md`; `organizational-diagnostic-draft-v6-integrity-record.md`;
`fd-0036`.
