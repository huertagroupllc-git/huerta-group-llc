# ADR-0007 — Repository Foundation Migration and Canonical Corpus Rescoping

**Classification: Development Standards and Architecture Decisions**

**Status:** Accepted (Founder Office-ratified: the migration was
authorized by the Repository Foundation execution instrument, recorded
in fd-0003; institution-adjacent elements carry that ratification).

## Context

The Repository Foundation Project (Deliverables A–D, accepted as
modified by the Founder Office — fd-0001…fd-0004) audited the
repository, audited its governance mechanisms, approved a layered
target architecture, and approved a migration plan. Founder Office
determination FO-1 fixed the topology: one repository. Governing
references consulted: the documentation index and hierarchy of
authority, ADR-0001, ADR-0002/0003 (placement doctrine), the
Development Standards, the Bounded Autonomous Completion and
Verification Standard, and the accepted deliverables.

## Options considered

A dual-repository split (extraction of the institutional corpus) was
proposed as the Deliverable C recommendation and **withdrawn by FO-1**.
Leaving the flat `docs/` structure was rejected by the accepted audit
findings (authority classes physically mixed; no staging semantics;
corpus rule conflated website and institutional documentation).

## Decision

1. **Single repository, layered canonical tree.** Canonical
   institutional governance assets live under `institution/`
   (governance, foundations, standards, decisions, technical,
   operational, evolution, metadata, validation), moved with
   history-preserving renames. The repository is one institutional
   asset; the institution is not the repository (FO-2).
2. **Canonical corpus rescoped.** This ADR supersedes **the corpus
   provision** of ADR-0001 (previously `docs/**/*.md`): the governed
   corpus is now every Markdown document under the canonical roots
   `institution/` and `docs/` plus the explicitly governed root files
   `CLAUDE.md` and `AGENTS.md`. ADR-0001's remaining decisions
   (manifest, schema, validator, metadata-never-authority, identifier
   and preservation rules) stand unchanged; its historical text is
   preserved verbatim as decision history.
3. **Workbench outside the corpus.** `workbench/` stages non-admitted
   working material, uncommitted by policy except its charter
   (fd-0001 determination 1, D-3).
4. **Website documentation remains website-scoped.** `docs/` retains
   only implementation-scoped website documentation (`docs/launch/`);
   the public application trees are unchanged and protected (FO-5).
5. **Migration workflow deviation.** The migration executed on a
   dedicated branch merged to `main` after full verification — a
   deliberate, one-time deviation from direct-to-main commits to keep
   production deploys to a single verified event; direct-to-main
   resumes after the merge.
6. **Naming.** Existing filenames were preserved (FO-3). One rename:
   `docs/README.md` → `institution/standards/repository/documentation-index.md`
   (the `README` stem was a filesystem convention recorded as the
   documented identifier exception; the file is the documentation
   index, and in its standards placement the README name would
   misrepresent it). The `mr-0002`/`ip-0002` filename-suffix
   normalization contemplated in planning was **not performed**:
   inspection showed those filenames faithfully match their approved
   titles, so renaming would have created title–filename divergence —
   churn without durable value under FO-3.

## Consequences and limitations

Every internal reference was rewritten in the same commits as its
move; historical quotes inside accepted decision records were
preserved verbatim even where they cite pre-migration paths. The
knowledge validator, schema, and manifest corpus block enforce the
rescoped corpus. The classification taxonomy gained two
repository-scoped values (Repository Standard; Institutional Record)
to implement D-1 and the register/evolution records. Git history was
not rewritten; contributor identity was corrected prospectively only.

## Unresolved institutional dependencies

Branch-protection and any deploy-gating platform configuration
(separate Founder Office authorization); OSPA canonical admission
(blocked pending verified recovery and Founder Office determination);
Design System Foundation preservation (deferred, fd-0001); the
pre-register approval-provenance deficiencies recorded in fd-0004.
