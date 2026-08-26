# Organizational Diagnostic — Generation One Draft v4: Integrity and Version Record

**Classification: Institutional Record** — integrity record (evidentiary,
non-governing). Produced at Stage 9 under `fd-0027` §2.4 and §2.8. It records
Draft v4's digest, its relationship to the versions before it, and its maturity
classification. **It records no validation, because none was performed.**

## 1. Draft v4

| Field | Value |
| --- | --- |
| **Name** | Huerta Group Organizational Diagnostic — Generation One, Draft v4 |
| **Path** | `institution/governance/methodology/organizational-diagnostic-generation-one-draft-v4.md` |
| **SHA-256** | `3137da8c1f37bde26abb3c5d034bcd3858f6bb610d49c9047697136673c9c994` |
| **Size** | 95,951 bytes · 1,488 lines |
| **Frozen at** | the Stage 9 commit recorded in `generation-one-stage-9-draft-v4-consolidation-report.md` §2 |
| **Status** | **PROVISIONAL DRAFT — UNTESTED AS A VERSION** |
| **Methodology Foundation v1 status** | §5.1 *draft*, produced under §6.4 as a new version |
| **Authorization** | `fd-0027` |
| **Substantive baseline** | Draft v3 |
| **Applications** | **none** |

**Verification.** `shasum -a 256` of the file at the path above. The digest is
of the file as committed; the text is not altered in place under any
circumstance, and this record is kept separately from it so that neither
changes the other.

## 2. Version chain

| Version | Path | Commit | SHA-256 | Applications | Status |
| --- | --- | --- | --- | --- | --- |
| **Draft v1** | `organizational-diagnostic-generation-one-draft.md` | `076440c` | `6fb2fb8448ca19577f1d0c53830ed52597ddf72e7a9b98a5ab2a10c02c4a9a73` | 1 — self-application dry run | frozen; immutable historical version |
| **Draft v2** | `organizational-diagnostic-generation-one-draft-v2.md` | `9659fbb` | `9e2976e1d98f00771f2d57dbcc70d25727c309b21a7870b718b715448cda5d4b` | 1 — structured stakeholder-evidence application, plus one clarification round | frozen; immutable historical version |
| **Draft v3** | `organizational-diagnostic-generation-one-draft-v3.md` | `d738d7e` | `04fd02c7ec80b457877f2de0363ce90e961bc370e019e945634d4720d379f89f` | 2 — internal application to a subordinate unit; second-author replication of it | frozen; immutable; **the last version applied to a subject** |
| **Draft v4** | `organizational-diagnostic-generation-one-draft-v4.md` | Stage 9 commit | `3137da8c1f37bde26abb3c5d034bcd3858f6bb610d49c9047697136673c9c994` | **0** | provisional draft — untested as a version |

**Relationship.** Draft v4 supersedes Draft v3 **as the current draft** and
supersedes **no version as a record**: v1, v2 and v3 remain the evidentiary
record of what was actually applied and what those applications produced. A
later reader comparing a claim about the method against a tested text must read
**Draft v3**, not this one.

**Difference from the baseline.** Twenty-eight hunks, every one traced in Draft
v4 Part D §D1 and in `stage-9-draft-v4-traceability-matrix.md` to one of the
seventeen authorized items, plus the consequential edits those forced (A2's
former rule 5 renumbered to rule 6; header, Part C and Part D rewritten for the
new version; A20 extended with the limitations this version introduced).
**No eighteenth substantive change.**

## 3. Historical verification performed at Stage 9

| Draft | Pre-draft check | Post-draft check |
| --- | --- | --- |
| **Draft v1** | **PASS** — byte-identical to `6fb2fb84…c2c4a9a73` | **PASS** — unchanged |
| **Draft v2** | **PASS** — byte-identical to `9e2976e1…cda5d4b` | **PASS** — unchanged |
| **Draft v3** | **PASS** — byte-identical to `04fd02c7…d379f89f` | **PASS** — unchanged |

Each of the three has exactly **one commit on its path**, which is the
condition that makes the digest meaningful: a frozen text with a single commit
cannot have been quietly amended. Verified before construction began and again
after Draft v4 was complete, as `fd-0027` §2.4 requires.

## 4. Maturity classification, and what it forbids

**PROVISIONAL DRAFT — UNTESTED AS A VERSION.**

- Draft v4 **carries no institutional authority.** It is not an approved
  method, not a Method Library record, not a standard, and not an instrument
  set of any established status.
- It is **not designated "validated through use"** (`fd-0022` §2.1 withheld
  that designation, and nothing since has supplied it).
- **Materially unchanged elements** keep the internal evidence their
  predecessors earned — enumerated at Draft v4 Part D §D5.
- **Changed elements inherit rationale and provenance only.** They do not
  inherit behavioural validation, and Stage 9 makes no claim that they behave
  as intended.
- **Repository checks are not validation.** Every gate in this repository
  could pass on a method that fails on contact with an organization; the gates
  establish that the corpus is internally consistent and nothing more.
- Method-level ceiling (`fd-0027` §2.8): the Organizational Diagnostic is not
  elevated beyond its current internally tested provisional posture by Stage 9.

## 5. Post-Stage 9 verification, and one pending change

**Verified again 2026-08-26** under `fd-0028`, before and after the A10
determination was recorded:

| Draft | Result |
| --- | --- |
| v1 | **PASS** — `6fb2fb84…c2c4a9a73`, 1 commit on path |
| v2 | **PASS** — `9e2976e1…cda5d4b`, 1 commit on path |
| v3 | **PASS** — `04fd02c7…d379f89f`, 1 commit on path |
| **v4** | **PASS — `3137da8c…3c9c994`, unchanged, 1 commit on path** |

**One change is authorized and pending, and has not been made.** `fd-0028`
adopts Reading A of A10's trail-first procedure and authorizes a bounded
reconciliation of Draft v4's wording. The reconciliation is **prepared and not
applied**: Methodology Foundation v1 §6.4 requires a new version for a
substantive refinement, the authorizing instrument forbids Draft v5, and the
instrument's own stop rule directs that the versioning question be returned
rather than chosen. See `a10-determination-reconciliation-record.md`.

**Consequently this record still describes Draft v4 accurately**, and the
digest above is still the digest of the file at its path. When the versioning
determination is made, the Stage 9 digest is preserved here beside whatever
succeeds it — **it is not overwritten**, because the fact that Draft v4 was
constructed as `3137da8c…` carrying one unresolved limitation is part of the
record of how this method developed.

## 6. What would change this record

The pending A10 reconciliation, once its representation is determined — and,
separately, a Founder Office-authorized validation stage that actually applies
Draft v4 to a subject, and its result. Until that second thing happens this
record's *Applications: 0* is the whole of what can be said about this version's
behaviour. **A determination is not an application**, and `fd-0028` says so:
resolving A10 "does not constitute behavioral application evidence."

## 7. Maturity, restated because a determination is easy to mistake for progress

**PROVISIONAL DRAFT — UNTESTED AS A VERSION**, unchanged. Not a tested
baseline, not validated through use, not externally validated, not
independently validated, not standardized, not Method Library ready.
