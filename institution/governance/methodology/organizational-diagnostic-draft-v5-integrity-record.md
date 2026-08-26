# Organizational Diagnostic — Generation One Draft v5: Integrity and Version Record

**Classification: Institutional Record** — integrity record (evidentiary,
non-governing). Produced under `fd-0029`. It records Draft v5's digest, its
relationship to Draft v4, and its maturity classification. **It records no
validation, because none was performed.**

## 1. Draft v5

| Field | Value |
| --- | --- |
| **Name** | Huerta Group Organizational Diagnostic — Generation One, Draft v5 |
| **Path** | `institution/governance/methodology/organizational-diagnostic-generation-one-draft-v5.md` |
| **SHA-256** | `d178024b3585bb6273106bfe39daf574794d99ebc14d9ad750da5c8d2f75635c` |
| **Size** | 104,402 bytes · 1,594 lines |
| **Frozen at** | the commit recorded in `draft-v5-reconciliation-and-versioning-report.md` §2 |
| **Status** | **PROVISIONAL DRAFT — UNTESTED AS A VERSION** |
| **MF v1 status** | §5.1 *draft*, produced under §6.4 as a new version |
| **Authorization** | `fd-0029`; sole substantive authority `fd-0028` |
| **Baseline** | Draft v4 |
| **Reason for the version** | the bounded A10 reconciliation, and nothing else |
| **Applications** | **none** |

**Verification.** `shasum -a 256` of the file at the path above. The digest is
of the file as committed; the text is not altered in place, and this record is
kept separately from it so that neither changes the other.

## 2. Version chain

| Version | Path | Commit | SHA-256 | Applications | Status |
| --- | --- | --- | --- | --- | --- |
| **Draft v1** | `…-draft.md` | `076440c` | `6fb2fb8448ca19577f1d0c53830ed52597ddf72e7a9b98a5ab2a10c02c4a9a73` | 1 — self-application dry run | frozen; immutable historical version |
| **Draft v2** | `…-draft-v2.md` | `9659fbb` | `9e2976e1d98f00771f2d57dbcc70d25727c309b21a7870b718b715448cda5d4b` | 1 — stakeholder-evidence application, plus one clarification round | frozen; immutable historical version |
| **Draft v3** | `…-draft-v3.md` | `d738d7e` | `04fd02c7ec80b457877f2de0363ce90e961bc370e019e945634d4720d379f89f` | 2 — internal application to a subordinate unit; second-author replication of it | frozen; immutable; **the last version applied to a subject** |
| **Draft v4** | `…-draft-v4.md` | `240ccf9` | `3137da8c1f37bde26abb3c5d034bcd3858f6bb610d49c9047697136673c9c994` | **0** | frozen; **the historical Stage 9 consolidation, whose text carries the A10 ambiguity `fd-0028` later resolved** |
| **Draft v5** | `…-draft-v5.md` | this execution's commit | `d178024b3585bb6273106bfe39daf574794d99ebc14d9ad750da5c8d2f75635c` | **0** | provisional draft — untested as a version |

**Relationship.** Draft v5 supersedes Draft v4 **as the current draft** and
supersedes **no version as a record**. Under MF v1 §6.5, each superseded asset
remains preserved: v1, v2 and v3 remain the evidentiary record of what was
applied, and **Draft v4 remains the record of what the method said before the
A10 determination** — which is what makes the determination's effect legible.

**To check a claim against tested text, read Draft v3.** It is still the only
version any application has used.

**Difference from the baseline.** Twelve diff hunks across six locations — A10,
Instrument 5, A20, Part C (two version references), Part D, and the header —
every one traced at `draft-v5-a10-reconciliation-traceability.md` §3 and at
Draft v5 Part D §D6 to `fd-0028`. **No Stage 7 item, disposition or `fd-0026`
determination was reopened.**

## 3. Verification performed at this execution

| Draft | Pre-construction | Post-construction |
| --- | --- | --- |
| **Draft v1** | **PASS** — byte-identical | **PASS** — unchanged |
| **Draft v2** | **PASS** — byte-identical | **PASS** — unchanged |
| **Draft v3** | **PASS** — byte-identical | **PASS** — unchanged |
| **Draft v4** | **PASS** — byte-identical to its Stage 9 digest | **PASS** — unchanged |

Each of the four has exactly **one commit on its path**, which is what makes a
digest meaningful: a frozen text with a single commit cannot have been quietly
amended. **Draft v4 was not opened for writing at any point.**

**Stage 5 and Stage 6 also verified unchanged** — `hgp-internal-application-stage-5.md`
at one commit on its path, and all seven Stage 6 result files matching the
per-file digests recorded at `stage-6-second-author-sealed-result.md` §1.

## 4. Maturity classification, and what it forbids

**PROVISIONAL DRAFT — UNTESTED AS A VERSION.**

- Draft v5 **carries no institutional authority.** Not an approved method, not
  a Method Library record, not a standard, not an instrument set of any
  established status.
- It is **not designated "validated through use"** (`fd-0022` §2.1 withheld
  that designation; nothing since has supplied it).
- It is **not a new discovery generation, not a reopening of Stage 7, not a
  validation result, not an established method, and not externally validated.**
- **Unchanged elements** keep whatever qualification they carried in Draft v4 —
  which for the seventeen Stage 7 items means eight new structural treatments
  with **no** validation and eight modified elements requiring revalidation.
- **The reconciled A10 treatment carries Founder Office semantic authority, its
  historical rationale, and the Stage 5 and Stage 6 development evidence — and
  no behavioural validation.** A determination settles what a rule means; it
  does not establish that the rule works.
- **Repository checks are not validation.** Every gate in this repository could
  pass on a method that fails on contact with an organization.

## 5. What would change this record

A Founder Office-authorized validation stage that actually applies Draft v5 to
a subject, and its result. Until then this record's *Applications: 0* is the
whole of what can be said about this version's behaviour.
