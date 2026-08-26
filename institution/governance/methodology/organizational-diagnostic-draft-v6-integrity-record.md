# Organizational Diagnostic — Generation One Draft v6: Integrity and Version Record

**Classification: Institutional Record** — integrity record (evidentiary,
non-governing). Produced under `fd-0032`. It records Draft v6's digest, its
relationship to Draft v5, and its maturity classification. **It records no
validation, because none was performed.**

## 1. Draft v6

| Field | Value |
| --- | --- |
| **Name** | Huerta Group Organizational Diagnostic — Generation One, Draft v6 |
| **Path** | `institution/governance/methodology/organizational-diagnostic-generation-one-draft-v6.md` |
| **SHA-256** | `d2f64ee25f678bf14b6715eab945ecc9bb2f9b6f94bdc03f3633c4600a238b10` |
| **Size** | 116,747 bytes · 1,754 lines |
| **Frozen at** | the commit recorded in `draft-v6-construction-report.md` §2 |
| **Status** | **PROVISIONAL DRAFT — UNTESTED AS A VERSION** |
| **MF v1 status** | §5.1 *draft*, produced under §6.4 as a new version |
| **Authorization** | `fd-0032`; implementing `fd-0031`'s dispositions and the RQ-1 determination |
| **Baseline** | Draft v5 |
| **Reason for the version** | V6-01 … V6-07 plus the RQ-1 determination, and nothing else |
| **Applications** | **none** |

**Verification.** `shasum -a 256` of the file at the path above. The text is not
altered in place, and this record is kept separately from it so that neither
changes the other.

## 2. Version chain

| Version | Commit | SHA-256 | Applications | Status |
| --- | --- | --- | --- | --- |
| **Draft v1** | `076440c` | `6fb2fb8448ca19577f1d0c53830ed52597ddf72e7a9b98a5ab2a10c02c4a9a73` | 1 | frozen; immutable |
| **Draft v2** | `9659fbb` | `9e2976e1d98f00771f2d57dbcc70d25727c309b21a7870b718b715448cda5d4b` | 1 (+ one clarification round) | frozen; immutable |
| **Draft v3** | `d738d7e` | `04fd02c7ec80b457877f2de0363ce90e961bc370e019e945634d4720d379f89f` | **2** — the most of any version | frozen; immutable |
| **Draft v4** | `240ccf9` | `3137da8c1f37bde26abb3c5d034bcd3858f6bb610d49c9047697136673c9c994` | **0** | frozen; the Stage 9 consolidation carrying the A10 ambiguity `fd-0028` later resolved |
| **Draft v5** | `d8a86d0` | `d178024b3585bb6273106bfe39daf574794d99ebc14d9ad750da5c8d2f75635c` | **1** | frozen; **the only version a non-authoring applier has used**, and the text whose application produced every correction in v6 |
| **Draft v6** | this execution's commit | `d2f64ee25f678bf14b6715eab945ecc9bb2f9b6f94bdc03f3633c4600a238b10` | **0** | provisional draft — untested as a version |

**Relationship.** Draft v6 supersedes Draft v5 **as the current draft** and
supersedes **no version as a record** (MF v1 §6.5). Each earlier version remains
the evidentiary record of what was applied to it:

- **To read what a non-authoring applier actually worked with, read Draft v5.**
- **To read the text with the most applications behind it, read Draft v3.**
- **Draft v6 has none.**

**Difference from the baseline.** Sixteen diff hunks across nine locations — A0,
A3 step 10, A10, A15, A18, A20, Part B, Instrument 1, Instrument 9 — plus the
header, two Part C version references and Part D. Every one traced at
`draft-v6-traceability.md` §3 and at Draft v6 Part D §D7 to a Stage 11
disposition or to the RQ-1 determination.

## 3. Verification performed at this construction

| Draft | Pre-construction | Post-construction |
| --- | --- | --- |
| **v1** | **PASS** | **PASS** — unchanged |
| **v2** | **PASS** | **PASS** — unchanged |
| **v3** | **PASS** | **PASS** — unchanged |
| **v4** | **PASS** | **PASS** — unchanged |
| **v5** | **PASS** | **PASS** — unchanged |

Each has exactly **one commit on its path**. **Draft v5 was not opened for
writing at any point**; Draft v6 was created by copy and every edit applied to
the copy.

## 4. Maturity classification, and what it forbids

**PROVISIONAL DRAFT — UNTESTED AS A VERSION.**

- **No institutional authority.** Not an approved method, not a Method Library
  record, not a standard, not an instrument set of any established status.
- **Not designated "validated through use."** Not externally validated. Not
  independently validated. Not standardized. Not an established method.
- **Draft v6 does not inherit Draft v5's validation.** Materially unchanged
  elements keep the qualification they carried in Draft v5 and no more. **Every
  changed element carries rationale and authority and no behavioural
  validation** — including the RQ-1 change, which carries Founder Office
  semantic authority and has never been applied.
- **Repository checks are not validation.** Every gate here could pass on a
  method that fails on contact with an organization.
- **The construction consistency review is not validation either** — it confirms
  the text says what the authorities said, and nothing about whether it works.

## 5. What this version does not close

**The participant-facing validation gap**, entire. A10's observation limb, A7's
habit test, A6's role compression, A9's first three source roles and A3 step 8's
clarification-only follow-up remain unexercised **in every version of this
method**. CS-14's conservative-default branch remains not exercisable
internally. **Eight participant questions stand unanswered and PQ-6's closure
condition stands unresolved.** RQ-2 remains unresolved and non-blocking.

## 6. What would change this record

A Founder Office-authorized validation stage that actually applies Draft v6 to a
subject, and its result. Until then *Applications: 0* is the whole of what can be
said about this version's behaviour.
