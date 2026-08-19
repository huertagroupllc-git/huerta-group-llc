# fd-0013 — Founder Office Determinations: Generation One Source Preservation, Readiness Reconciliation, and Architecture Resumption

**Classification: Institutional Record** — determination record
(evidentiary, non-governing). The record evidences the determinations;
authority resides with the Founder Office and the artifacts the
determinations govern.

- **Instrument:** Generation One Source Preservation, Readiness
  Reconciliation & Phase 1 Technical Blueprint, execution package,
  Founder Office → Institutional Platform Development.
- **Received:** 2026-08-18, as transmitted to the implementing office.
- **Recorded:** 2026-08-18.
- **Starting baseline:** `a2aedc9`.
- **Technical architecture status:** **Authorized to resume** —
  architecture and design only.
- **Software implementation authorization:** **None.**

## 1. What this record disposes of

Both complete authoritative sources reached the implementing office as
files and are preserved repository-native. This discharges, prospectively:

- `fd-0010` Deficiency 2 and `fd-0011` Deficiency 1 — the Requirements
  Report source;
- `fd-0012` Deficiency 1 — the Semantics Foundation source;
- `fd-0012` Deficiency 2 — the Requirements Report source, third record;
- `fd-0011` reserved items 1 and 2 — transmission of the report, and
  adoption of the Foundation (adoption itself was recorded at `fd-0012`);
- `fd-0011` reserved item 4 and `fd-0012` reserved item 4 — the
  `operations-systems` `implementationReadiness` reclassification, which
  the instrument directs be reconciled prospectively.

**Discharged, not erased.** Each deficiency remains an accurate record of
its own period. Nothing is rewritten to imply the sources were available
sooner.

## 2. Sources preserved

| Source | Canonical path | Extent | SHA-256 |
| --- | --- | --- | --- |
| Generation One Requirements Report | `institution/governance/operations/GEN1-REQ-V1.md` | Executive Determination, §1–§21, Final Recommendation — complete | `c75f3c3e439090acff6abab4e73f019c4c6b815ab8ca106517288427fe6e44c6` |
| Corporate Operations Semantics Foundation — Version 1 | `institution/foundations/operations/CORP-OPS-SEM-FND-V1.md` | §1–§34 — complete | `900ff850d63ecb72f0356534977e3af22b3d4216e56f0da6b491286081b2bcfb` |

Each digest was computed on the incoming file at `workbench/incoming/`
**before** any repository copy existed, then re-verified against the
preserved file. Both are equal and `cmp` reports the pairs byte-identical.

**No header was added, no normalization performed, no editorial alteration
made.** The repository standard permits a minimal header; the instrument
requires digest equality. Preserving without a header satisfies both, and
follows the precedent already set in `institution/foundations/operations/`,
where provenance lives in a separate admission record rather than in the
preserved text.

## 3. Verification performed before preservation

For each source: the file existed at the exact authorized path; was
non-empty; its title and stated source identity matched the expected
artifact; its section numbering ran contiguously from the first section to
the last with no gap; it ended at a final recommendation rather than
mid-sentence; and its digest was computed before copying. Both passed. The
blocking rule was not triggered.

## 4. Proposal-versus-adoption states preserved

Both sources carry proposal/review-era status language, preserved exactly:

- The Requirements Report reads "Status: Requirements Discovery — Founder
  Office Review Required" and closes "Implementation status: NOT
  AUTHORIZED."
- The Foundation reads "Status: Prospective Operational Doctrine Proposal
  — Founder Office Review Required" and closes "Proposal authority:
  PENDING FOUNDER OFFICE ADOPTION."

Neither was rewritten. Subsequent Founder Office acceptance and adoption
are represented through the determinations register (`fd-0011`, `fd-0012`)
and the status and provenance records — never by editing the sources.
Reading a source alone understates its current authority; reading it with
its status record states it correctly.

## 5. OSPA relationship — unchanged

Surviving OSPA S01–S04, S09 and S10 remain recovered canonical authority
limited strictly to surviving text. S05–S08 and S11–S15 remain permanently
unavailable and must never be reconstructed, inferred, interpolated, or
represented as recovered authority.

The Foundation **supplements** surviving OSPA prospectively where
Generation One requires concepts surviving OSPA does not establish
(Foundation §2). **Unavailable OSPA must not be inferred from the
Foundation.** The Foundation's digest is deliberately excluded from the
OSPA `SHA256SUMS` integrity manifest so that recovered authority and
prospective doctrine remain separately verifiable.

Foundation §24 is the prospective transition doctrine `fd-0011` required:
it establishes limited transition semantics for Founder Attention, blocked
state, handoff disposition, deadlines, renewals and follow-ups, and
forbids a universal lifecycle. The `fd-0011` prohibition on inferring a
transition model from S09 §9.28 stands undisturbed.

## 6. Readiness reconciled

| Dimension | Reconciled state |
| --- | --- |
| Requirements | **Complete / Accepted** |
| Methodology | **Complete / Adopted** |
| Technical architecture | **Authorized to Resume** — architecture and design only |
| Technical implementation | **Not Authorized** |

`operations-systems.implementationReadiness` moved from
`requirements_incomplete` to **`governance_blocked`**. The requirements
deficiency that justified the former is discharged; what now stands
between the capability and implementation is a Founder Office
authorization and the required ADR sequence, not missing requirements.
Prior paused and blocked postures are preserved in the record's
`unresolvedDecisions` under explicit HISTORICAL POSTURE labels rather than
deleted.

## 7. Semantic-definition package reconciled and closed

The package that asked Corporate Operations to define the missing
operational concepts is **answered and closed**. Its concept-by-concept
reconciliation against the Foundation is recorded in the package itself.

Of fifteen concepts: twelve are resolved outright by Foundation §5–§24 and
§27; one (operational-instance identity) is resolved as to institutional
authority, with technical identity assigned to Development under
Foundation §25 and constrained to identifier neutrality by OSPA S04 §4.50
and S09 §9.32; one (minimal relationship context) is resolved in bounded
form by Foundation §27 with Requirements Report §9–§10; and one — "Since
Last Review" semantics — is **partially resolved**.

The package is retained unaltered as history and states no current
doctrine.

## 8. Open Founder Office policy questions — recorded, not blocking

The Requirements Report §19 leaves eight questions to the Founder Office,
and states its own rule: "None of these questions prevents acceptance of
the Generation One concept. They affect operational policy surrounding its
use."

Resolved by prior determination: operational state ownership (Foundation
§21–§22); Founder Attention authority (`fd-0012`); attention prioritization
(`fd-0012`); relationship ownership (`fd-0011`).

**Open:**

1. **Change horizon** (§19 Q4) — `fd-0011` fixes "Since Last Review" as the
   primary view, but not whether a matter that *occurred* before the last
   review and was *recorded* after it must surface. This is the failure
   mode a reader cannot detect by inspection, because absence is invisible.
2. **Venture snapshot responsibility** (§19 Q5) — whether each venture
   function supplies its Headquarters snapshot or Corporate Operations
   derives it.
3. **Financial visibility boundary** (§19 Q6) — which Accounting outputs
   are exposed at Headquarters, "determined with Accounting rather than
   inferred by Development."
4. **Administrative visibility boundary** (§19 Q7) — which Administration &
   Compliance statuses qualify for Headquarters visibility automatically.

These bear on **what Headquarters shows**, not on **what the architecture
must be**. The architecture must accommodate each answer without
presupposing it. They are carried to the determinations required before
implementation.

## 9. Chronology preserved

1. The complete sources existed institutionally.
2. Development could not access them as complete files.
3. `fd-0012` truthfully recorded the failed transmission and the resulting
   custody state.
4. The complete files were supplied under `workbench/incoming/`.
5. They were verified.
6. They were preserved repository-native.

Stages 1–3 are historical and are not rewritten. `fd-0012` is not amended.

## 10. Architecture-resumption gate — PASSED

| Condition | Result |
| --- | --- |
| Source 1 complete and verified | Pass |
| Source 2 complete and verified | Pass |
| Both preserved repository-native | Pass |
| Source fidelity verified by checksum | Pass — digests equal, `cmp` byte-identical |
| Founder Office adoption/status correctly represented | Pass — `fd-0012`, adoption record, status records |
| Historical custody/readiness chronology preserved | Pass — `fd-0012` unamended; historical postures labelled |
| Requirements state reconciled as complete | Pass |
| Methodology state reconciled as complete | Pass |
| Canonical repository validation passes | Pass — `npm run verify` green |
| No genuine unresolved methodology or authority prerequisite remains | Pass — the four open questions are operational policy by the Requirements Report's own rule, and do not determine architecture |

**Determination: the gate passes.** Technical architecture is authorized to
resume, bounded to architecture and design. Implementation is not
authorized and requires a separate Founder Office act.

## 11. Affected artifacts

`institution/governance/operations/GEN1-REQ-V1.md`;
`institution/foundations/operations/CORP-OPS-SEM-FND-V1.md`;
`institution/foundations/operations/corporate-operations-semantics-foundation-v1-adoption-and-provenance.md`;
`institution/foundations/operations/README.md`;
`institution/governance/operations/generation-one-requirements-report.md`;
`institution/governance/operations/corporate-operations-semantics-definition-package.md`;
`institution/standards/repository/documentation-index.md`;
`institution/metadata/registries/capability-registry.json`;
`institution/metadata/registries/determinations-registry.json`;
`institution/metadata/manifest.json`;
`institution/governance/determinations/fd-0013-generation-one-source-preservation-and-architecture-resumption.md`.

`fd-0012` is **not** among them. It is not amended.

## 12. Reserved to the Founder Office

1. **Authorization to implement Generation One.** Architecture resumption
   is not implementation authorization.
2. **The four open operational-policy questions** in §8.
3. **Adoption of the ADR sequence** the blueprint identifies as required
   before implementation.
4. **Any expansion of operational scope** beyond the concepts the
   Requirements Report §20 enumerates — which that section requires return
   to the Founder Office rather than being treated as extensibility.
