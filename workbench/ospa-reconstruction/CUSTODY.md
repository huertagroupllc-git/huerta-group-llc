# OSPA Recovered-Source Custody Record

**Classification: custody metadata — not OSPA source, not canonical
corpus, not institutional authority.** This file and `SHA256SUMS` are
repository custody records created under the Corporate Operations &
Command Platform — Governance & Methodology Readiness Phase 1
instrument (recorded at `institution/governance/determinations/`,
`fd-0010`). They describe the preserved material; they never speak for
it. Where this record and the preserved source could be read
differently, the source governs.

## 1. What this custody preservation is — and is not

**It is:** byte-level preservation of the surviving recovered Operating
Systems & Process Architecture Foundation v1 (OSPA) source material
under repository version control, so that the material is no longer
held in exactly one uncommitted location.

**It is not:**

- **Not canonical admission.** These files are not part of the governed
  canonical corpus. Admission occurs only through the admission path in
  `institution/standards/repository/canonical-source-preservation.md`
  (verified provenance → Founder Office admission determination →
  verbatim preservation at a canonical path with its header → manifest
  and registry entries → passing verification gate, all in one change),
  upon the reserved **FD-V7** determination. FD-V7 has not been made.
- **Not institutional authority.** Per `workbench/README.md` rule 1,
  nothing in the workbench carries institutional status, and a document
  here may claim any status in its own text — including "Canonical
  Source" — and that claim remains inert until formal admission. The
  section files below do carry `**Status:** Canonical Source` in their
  own headers. That is the transmitted source text, preserved verbatim;
  it is not a repository status claim and does not effect admission.
- **Not a change of location.** No file was moved, renamed, copied,
  normalized, or rewritten. The material remains exactly where the
  Founder Office staged it (fd-0002 D-3), outside the governed canonical
  corpus. Only its version-control tracking changed.

These five concepts are deliberately kept separate and must remain so:
**custody/preservation status** · **source provenance** · **integrity
verification** · **canonical-admission status** · **institutional-authority
status.**

## 2. Custody status of each artifact

| Artifact | Kind | Custody | Canonical admission | Institutional authority |
| --- | --- | --- | --- | --- |
| `OSPA-FND-V1-S01.md` | Recovered canonical source | Preserved, tracked | Not admitted — reserved to FD-V7 | Recognized as recovered canonical source (fd-0003); not corpus-admitted |
| `OSPA-FND-V1-S02.md` | Recovered canonical source | Preserved, tracked | Not admitted — reserved to FD-V7 | As above |
| `OSPA-FND-V1-S03.md` | Recovered canonical source | Preserved, tracked | Not admitted — reserved to FD-V7 | As above |
| `OSPA-FND-V1-S04.md` | Recovered canonical source | Preserved, tracked | Not admitted — reserved to FD-V7 | As above |
| `OSPA-FND-V1-S09.md` | Recovered canonical source | Preserved, tracked | Not admitted — reserved to FD-V7 | As above |
| `OSPA-FND-V1-S10.md` | Recovered canonical source | Preserved, tracked | Not admitted — reserved to FD-V7 | As above |
| `OSPA-FND-V1-RS05-EV01-verified-canonical-evidence-packet.md` | **Derived** verified evidence packet | Preserved, tracked | Not admitted; **never** admissible as canonical source | Derived evidence only (fd-0003); must remain distinguishable from canonical source and is corrected by its sources wherever they disagree |

## 3. Surviving section inventory

Surviving recovered sections of Operating Systems & Process Architecture
Foundation v1, recognized as recovered canonical sources by the Founder
Office in **fd-0003**:

- Section 1 — Definition, Scope, and Institutional Authority (`S01`)
- Section 2 — Operational Doctrine (`S02`)
- Section 3 — Operating Architecture (`S03`)
- Section 4 — Operational Domains and Hierarchy (`S04`)
- Section 9 — Operational Lifecycle and Status (`S09`)
- Section 10 — Controls, Evidence, and Auditability (`S10`)

## 4. Permanently unavailable section inventory

**Sections S05–S08 and S11–S15 are permanently unavailable.** This is
the inventory already recorded in `fd-0003` and in
`institution/standards/repository/canonical-source-preservation.md` §6.
It is restated here, not newly determined.

Governing rule, restated from the canonical-source-preservation standard
§7 and fd-0003: unavailable canonical text is **never reconstructed,
inferred, paraphrased, or assembled** from summaries, public content,
downstream implementation, professional convention, memory, prior AI
output, or derived evidence — including from `RS05-EV01`. Unavailable
material is recorded as unavailable. Loss is recorded as loss.

No unavailable section has been reconstructed, drafted, inferred, or
substituted in this custody action.

## 5. Provenance

- **Recovery set recognition:** `fd-0003` — the Repository Migration and
  Institutional Evolution Log Activation instrument recognized
  `OSPA-FND-V1-S01, S02, S03, S04, S09, S10` as recovered canonical
  sources, identified `RS05-EV01` as a derived verified evidence packet
  that "must remain distinguishable from canonical source," and
  prohibited inferring Sections 5–8 and 11–15.
- **Staging architecture:** `fd-0002` D-3 — "Establish a repository
  staging/workbench architecture outside the governed canonical corpus.
  Working reconstruction material shall not reside inside the canonical
  documentation corpus. OSPA recovered canonical documents remain
  institutionally recognized. Missing sections shall not be
  reconstructed."
- **Foundation approval provenance:** `fd-0004` records the Operating
  Systems & Process Architecture Foundation v1 approval among the
  deliverable acceptance history, and records approval-provenance
  deficiencies that remain open.
- **Custody authorization:** the Governance & Methodology Readiness
  Phase 1 instrument, recorded as `fd-0010`.
- **Provenance beyond the above is not evidenced in this repository** and
  is recorded as a deficiency rather than completed by inference
  (canonical-source-preservation §3; fd-0004 precedent). Specifically:
  the original transmission channel, transmission date, and recovery
  method for the recovered set are not evidenced here.

## 6. Integrity verification

`SHA256SUMS` records a SHA-256 digest for every preserved artifact.
Verify at any time from this directory:

```
shasum -a 256 -c SHA256SUMS
```

Baseline digests were computed from the working-machine bytes before any
tracking change was made, and re-verified after. The files are LF-only;
the repository sets no `.gitattributes` line-ending normalization, so
committed bytes are identical to working-machine bytes.

## 7. Open determination

**FD-V7 — canonical admission / status of the surviving recovered OSPA
sections — is reserved to the Founder Office and has not been made.**
Until it is, no canonical artifact may cite these paths as authority
(`workbench/README.md` rule 6), and this material may be relied on only
as an approved semantic input, in the manner the accepted Corporate
Venture Governance Phase 1 Blueprint established.
