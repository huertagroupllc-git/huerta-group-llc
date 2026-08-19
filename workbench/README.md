# Workbench — Staging for Non-Admitted Working Material

**Repository Standard scope: this charter governs the workbench area of
this repository only.** It creates no institutional authority and is
not part of the governed canonical corpus.

The workbench is the sanctioned staging area for pre-approval,
reconstruction, recovery, experimental, and other **non-admitted**
working material, established by the accepted Repository Foundation
architecture (Deliverables C/D) and Founder Office determination D-3.

## Rules

1. **Nothing in the workbench carries institutional status.** A
   document here may *claim* any status in its own text — including
   "Canonical Source" — and that claim is inert until the material is
   formally admitted to the canonical corpus.
2. **Workbench contents are uncommitted by policy.** Everything under
   `workbench/` except this charter is gitignored. Working material is
   preserved on the working machine and through its sponsoring
   authority's own custody, never through repository history.

   **Narrow, closed exception — OSPA custody residue.** Three enumerated
   paths under `ospa-reconstruction/` are tracked: the **derived**
   RS05-EV01 evidence packet and two custody records. This began as
   custody preservation of seven artifacts under `fd-0010`, to remove a
   compounding permanent-loss risk. Six of those seven — the surviving
   sections S01–S04, S09 and S10 — have since **left the workbench**
   through the rule-3 admission path: FD-V7 (`fd-0011`) admitted them to
   the canonical corpus, where they now live at
   `institution/foundations/operations/`. What remains here is not
   admitted and, in the derived packet's case, never admissible as
   canonical source. See `ospa-reconstruction/CUSTODY.md`.

   **This exception is closed, not a precedent.** `fd-0011` determines
   that the exception to `fd-0001` determination 1 ("OSPA reconstruction
   working documents remain untracked working material and shall not be
   committed") covers **only the exact seven Phase 1 preserved
   artifacts**. `fd-0001` remains governing for every other workbench or
   reconstruction artifact. There is no blanket supersession, no general
   workbench admission, and no general OSPA-working-material exception.
   New material placed anywhere under `workbench/` — including inside
   `ospa-reconstruction/` — is ignored by default and stays uncommitted
   absent its own Founder Office determination.
3. **Admission is deliberate.** Material leaves the workbench only
   through the canonical-source preservation process
   (`institution/standards/repository/canonical-source-preservation.md`):
   verified provenance, a Founder Office determination recorded in the
   determinations register, verbatim preservation, manifest and
   registry entries, and a passing verification gate — in one change.
4. **No reconstruction.** Missing canonical text is never
   reconstructed, inferred, or paraphrased in the workbench or
   anywhere else. Unavailable material is recorded as unavailable.
5. **Disposal is reserved.** Workbench contents are removed only by
   their sponsoring authority's direction.
6. **Validation boundary.** Canonical-corpus validators ignore the
   workbench entirely; nothing under canonical roots may reference
   workbench paths as authority.

## Current contents

- `ospa-reconstruction/` — the Operating Systems & Process Architecture
  Foundation v1 recovery set: six recovered canonical section files
  (`OSPA-FND-V1-S01`, `S02`, `S03`, `S04`, `S09`, `S10`), recognized by
  the Founder Office as recovered canonical sources, and
  `OSPA-FND-V1-RS05-EV01`, a **derived verified evidence packet** for
  Section 5 reconstruction planning — evidence, not canonical source.
  Recognition and provenance are recorded in the determinations
  register (`institution/governance/determinations/`). Sections
  S05–S08 and S11–S15 are **unavailable** and must not be
  reconstructed. **The six recovered sections were admitted to the
  canonical corpus by FD-V7 (`fd-0011`) and now live at
  `institution/foundations/operations/`.** This directory retains only
  the derived `RS05-EV01` evidence packet — not canonical authority and
  never admissible as canonical source — plus the custody records
  `ospa-reconstruction/CUSTODY.md` and `ospa-reconstruction/SHA256SUMS`.
