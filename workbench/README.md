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

   **Narrow exception — OSPA recovered-source custody.** The surviving
   recovered OSPA source set and its custody records
   (`ospa-reconstruction/`) are tracked, authorized by the Corporate
   Operations & Command Platform — Governance & Methodology Readiness
   Phase 1 instrument (`fd-0010`) to remove a compounding permanent-loss
   risk. This exception is **custody preservation only**: it changes
   version-control tracking and nothing else. It does not move the
   material into the canonical corpus, does not confer institutional
   status (rule 1 continues to apply in full), and does not effect or
   anticipate canonical admission, which remains reserved to **FD-V7**
   through the admission process in rule 3. The exception is scoped to
   `ospa-reconstruction/` alone; all other workbench material remains
   uncommitted under the general policy above. See
   `ospa-reconstruction/CUSTODY.md`. This exception stands against
   `fd-0001` determination 1 ("OSPA reconstruction working documents
   remain untracked working material and shall not be committed"), whose
   formal disposition is recorded as an open deficiency in `fd-0010` and
   is reserved to the Founder Office.
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
  reconstructed. This material is **tracked for custody preservation
  only** under the rule-2 exception (`fd-0010`) and remains
  **not admitted** to the canonical corpus pending FD-V7; custody
  records are `ospa-reconstruction/CUSTODY.md` and
  `ospa-reconstruction/SHA256SUMS`.
