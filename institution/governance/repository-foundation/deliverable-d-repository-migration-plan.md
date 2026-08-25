# Deliverable D — Repository Migration Plan

**Huerta Group — Repository Foundation Project, Phase 1 · Planned against baseline `4dc354e` (= origin/main) and the current working state · Planning only — no file was created, modified, moved, renamed, deleted, or committed**

## 1. Executive Summary

This plan migrates the repository into the approved Deliverable C architecture in **two stages built from nine phases**. Stage 1 is **topology-independent**: it restructures the existing repository in place into the canonical layered tree under an `institution/` root, establishes the workbench, relocates the untracked OSPA material out of the governed corpus, rescopes the canonical corpus, introduces the Determinations & Approvals Register, brings the AI entry files under governance, and composes the validation gate — every step reversible, validated at every commit, executed on a dedicated migration branch so `main` (and therefore the live website) is touched exactly once, at final merge. Stage 2 is **topology-dependent** and executes the approved dual-repository split only after the Founder Office confirms topology and name (Deliverable C §18): the `institution/` tree is extracted with full history into the institutional repository, and the website repository keeps its root layout — meaning **Vercel requires no reconfiguration at any point in this plan**.

Every planned action is classified Group A (authorized in principle by accepted Deliverables A–C and Determinations D-1…D-8) or Group B (requires further Founder Office determination). Nothing is inferred: standard-amendment *wording*, determination-record *texts*, topology, repository name, CI activation, OSPA admission, and Design System preservation all sit in Group B or in explicitly gated blocking conditions. The plan performs no OSPA admission and no Design System preservation — it only prepares their lawful landing places.

## 2. Migration Philosophy

Migration is **custody work, not authorship**. The migration may move, index, and re-reference approved text; it may never rewrite, reinterpret, summarize, or improve it (P-2, P-5 of Deliverable C). Every canonical byte at `4dc354e` exists, byte-identical, at a mapped path afterward; every historical commit remains reachable; every step is validated before the next begins; every phase can be abandoned to a tagged checkpoint. The migration itself becomes institutional history: it is recorded through Decision History (a migration ADR) and the Determinations Register, so that the migration's own authority is repository-native — the project's founding requirement applied to the project itself.

## 3. Migration Assumptions

A-1 Execution begins only after Founder Office acceptance of this plan, and each Group B item only after its named determination.
A-2 Baseline for execution is `4dc354e` = origin/main, plus the untracked `docs/operating systems & architecture foundation/` directory (7 files) — if HEAD has advanced by execution time, Phase 0 re-runs the Deliverable A baseline verification and this plan is re-validated against the delta.
A-3 Tooling available: git ≥ 2.40 (with `git mv`; Stage 2 additionally requires `git filter-repo` or, as fallback, `git subtree split`), Node ≥ 20, npm. No new runtime dependencies are introduced.
A-4 Vercel continues to build the website repository from `main`; branch pushes produce previews only. GitHub access exists under the `huertagroupllc-git` account for Stage 2 repository creation (a Founder-side platform action).
A-5 History is never rewritten on any existing branch; no force-push, ever.
A-6 Determination texts for the register are supplied or confirmed verbatim by the Founder Office at Phase 5 (never transcribed from AI memory without confirmation).
A-7 The bounded-autonomous execution method governs execution, with per-task instruments authorizing each phase's protected actions.

## 4. Migration Principles

M-1 **Green at every commit**: the applicable full gate (five validators + lint + `tsc` + build + link check once implemented) passes at every logical commit on the migration branch — no "broken intermediate" states.
M-2 **Move and re-reference atomically**: a file move, its manifest/registry path updates, and its inbound-link rewrites land in the same commit.
M-3 **`git mv` only** for tracked moves — content hashes unchanged, history follows.
M-4 **One change class per commit** (§22).
M-5 **Nothing deleted, nothing archived**: zero deletions; supersession, where it occurs (ADR corpus rule), is status-plus-successor, in place.
M-6 **Untracked material never becomes tracked accidentally**: OSPA files move as plain file operations, verified untracked before and after.
M-7 **Main is sacred**: all work on branch `repository-foundation-migration`; `main` receives one merge after final verification.
M-8 **Point-of-no-return awareness**: no external system, credential, or platform configuration is altered in Stage 1; Stage 2's only external act (new repository creation) is additive and reversible until first external reference.

## 5. Migration Dependency Graph

| Phase | Activity | Prerequisites | Downstream dependents | Blocking conditions | Rollback implication | Validation before continuing |
|---|---|---|---|---|---|---|
| P0 | Preflight, inputs, identity, baseline record | Plan acceptance | All | Founder inputs incomplete (topology/name may remain open — blocks only P8) | None (no changes) | V-0 |
| P1 | Safety net: baseline tag + migration branch | P0 | All | — | Delete branch/tag | V-0 re-run on branch |
| P2 | Workbench establishment + OSPA relocation | P1 | P4 (corpus purity), P7 | D-3 (held) | Revert charter commit; move dir back (untracked op) | V-1 |
| P3 | Institution tree construction (layer-by-layer `git mv` + re-reference) | P2 | P4–P9 | — | Reset branch to `ckpt-P2` | V-2 at each commit |
| P4 | Canonical corpus rescoping + entry-file governance (D-8) + index reclassification (D-1) | P3 | P5–P9 | Taxonomy extension wording (B-6) | Reset to `ckpt-P3` | V-3 |
| P5 | Determinations Register introduction (D-6) | P4 | P6 (amendments cite records), OSPA admission (future) | A-6 texts confirmed (B-3) | Reset to `ckpt-P4` | V-4 |
| P6 | Standards & decisions: naming standard, gate definition (D-7), migration ADR(s), scheduled standard amendments (D-2) | P5 | P7, P9 | Amendment wording approval (B-2); ADR ratification | Reset to `ckpt-P5` | V-5 |
| P7 | Final Stage-1 verification + independent inspection + merge to `main` | P2–P6 | P8, P9 | Any unresolved FAIL | Pre-merge: abandon branch; post-merge: revert merge commit | V-6 |
| P8 | Topology split (dual-repo extraction) | P7 + topology/name determinations (B-1) | P9 (per-repo CI) | **Group B gate** | Delete new repo before first external reference; website repo untouched by extraction | V-7 |
| P9 | CI introduction (workflows, branch protection, deploy gating) | P7 (mono) or P8 (dual) + platform confirmation + implementation authorization (B-4) | — | **Group B gate** (D-4: architecture approved, implementation separately authorized) | Disable workflow / remove protection | V-8 |

No cycles; P2→P4 ordering is load-bearing (corpus purity must exist before rescoping is meaningful); P5 precedes P6 so amendments and ADRs can cite determination records.

## 6. Current → Target Repository Mapping

Actions: **MOVE** (`git mv`, history-preserving) · **RENAME** (path/name change under naming policy) · **RETAIN** (unchanged) · **CREATE** (new file, planned) · **RELOCATE-U** (untracked file operation) · **META** (metadata-only change). Stage-1 targets shown; Stage 2 extracts `institution/` to the institutional repository root unchanged.

| Current path | Target path (Stage 1) | Action | Rationale |
|---|---|---|---|
| docs/governance/huerta-group-constitution.md | institution/governance/constitution/huerta-group-constitution.md | MOVE | L0 layer (C §3); text-pending markers untouched |
| docs/governance/vision-foundation-for-development.md | institution/governance/strategic/vision-foundation-for-development.md | MOVE | L1 layer |
| docs/README.md | institution/standards/repository/documentation-index.md | **RENAME+MOVE** | D-1 placement; id `documentation-index` retained; `README` stem was always the documented exception |
| docs/development/development-standards.md | institution/standards/development/development-standards.md | MOVE | L3 |
| docs/development/bounded-autonomous-completion-standard.md | institution/standards/development/bounded-autonomous-completion-standard.md | MOVE | L3; D-2 amendments scheduled P6 (wording Group B) |
| docs/development/decisions/* (adr-practice, ADR-0001…0006) | institution/decisions/* | MOVE | L4 decision history, numbering/status unchanged |
| docs/development/internal-software-architecture.md | institution/technical/internal-software-architecture.md | MOVE | Technical layer |
| docs/methodology/methodology-foundation-v1.md | institution/foundations/methodology/methodology-foundation-v1.md | MOVE | L2 canonical source |
| docs/methodology/records/mr-0002-institutional-methodology-definition-and-scope.md | institution/foundations/methodology/records/mr-0002-…-definition-and-scope-standard-v1.md | RENAME+MOVE | Naming normalization (C §11) — filename only, content byte-identical |
| docs/methodology/records/mr-0003…mr-0008 | institution/foundations/methodology/records/ | MOVE | — |
| docs/methodology/method-library-architecture.md | institution/technical/method-library-architecture.md | MOVE | Technical layer consolidation (C §16) |
| docs/intellectual-property/intellectual-property-foundation-v1.md | institution/foundations/intellectual-property/… | MOVE | L2 |
| docs/intellectual-property/records/ip-0002-… | institution/foundations/intellectual-property/records/ip-0002-…-standard-v1.md | RENAME+MOVE | Naming normalization |
| docs/intellectual-property/records/ip-0003…0006 · ip-repository-architecture.md | …/records/ · institution/technical/ | MOVE | — |
| docs/education/education-workforce-development-foundation-v1.md · records/ed-0002…0012 | institution/foundations/education/ (+records/) | MOVE | L2 |
| docs/education/education-platform-architecture.md | institution/technical/ | MOVE | — |
| docs/launch/ (4 docs) | docs/launch/ (website side; Stage 2: stays in WEB) | RETAIN | Website-scoped operational documentation (C §13) |
| knowledge/schema.json + capability/method/ip/education schemas | institution/metadata/schemas/ | MOVE | L5 |
| knowledge/manifest.json | institution/metadata/manifest.json | MOVE+META | Corpus rescope P4; all `path` fields updated |
| knowledge/{capability,method,ip,education}-registry.json | institution/metadata/registries/ | MOVE+META | `governingReferences`/`path` fields updated |
| scripts/validate-*.mjs (5) | institution/validation/ | MOVE+META | Internal path constants updated |
| CLAUDE.md · AGENTS.md | / (unchanged location) | META+edit (P4) | D-8: governed, manifested, path references updated; remain root entry points |
| README.md (root) | / (website README) | RETAIN+edit | Implementation doc; migration section updated P7; institution/README.md CREATE |
| app/ · components/ · lib/ · supabase/ · config files · package.json | unchanged | RETAIN (package.json META for script paths) | ADR-0002/0004 boundaries intact |
| "docs/operating systems & architecture foundation/" (7 untracked files) | workbench/ospa-reconstruction/ (untracked) | RELOCATE-U | D-3; corpus purity; never committed |
| — | workbench/README.md (charter) · .gitignore rules | CREATE | §15 |
| — | institution/governance/determinations/fd-0001…-…md + metadata/{schemas,registries}/determinations | CREATE | D-6, §14 |
| — | institution/standards/repository/{naming-and-identifiers,staging-and-admission,execution-gate}.md + gate orchestrator | CREATE | C §7/§12; canonical-source-preservation **placement reserved, not drafted** (D-5) |
| — | institution/decisions/adr-0007-… (migration/corpus ADR; adr-0008 topology if dual) | CREATE | §14 |
| Design System Foundation v1 (absent) | institution/foundations/design-system/ (empty slot) | none | Preservation deferred (prohibited here) |

**Files archived: none** — historical preservation is in-place and status-based; this migration archives nothing and deletes nothing. **Files renamed: exactly three** (documentation index; mr-0002; ip-0002). **Files retained unchanged (content): every canonical governance text** — moves and metadata only.

## 7. Migration Sequence (phase detail)

- **P0**: verify baseline identity (Deliverable A §2 procedure); record validator/lint/tsc/build results; configure git identity (§18); collect Founder inputs; confirm working tree contains only the known untracked directory.
- **P1**: tag `pre-migration-baseline` at HEAD; create `repository-foundation-migration` branch; re-run V-0.
- **P2**: commit `.gitignore` workbench rules + `workbench/README.md` charter; relocate OSPA directory (plain `mv`, untracked→untracked); verify `validate:knowledge` passes on the working tree for the first time since Aug 3; tag `ckpt-P2`.
- **P3**: layer-by-layer `git mv` with atomic re-referencing (M-2), one commit per layer: governance → foundations (methodology, IP, education incl. record renames) → standards → decisions → technical → metadata → validation; package.json script paths updated with the validation move; V-2 after each commit; tag `ckpt-P3`.
- **P4**: corpus rescope (manifest `corpus` block → explicit canonical roots + the two root entry files + docs/launch pending B-5); documentation-index rename/move + D-1 reclassification (taxonomy extension per B-6); CLAUDE.md/AGENTS.md path-reference edits + manifest records (D-8); `validate-knowledge` corpus logic updated in the same commit; V-3; tag `ckpt-P4`.
- **P5**: determinations schema + registry + `validate:determinations` + fd-records for the confirmed determination set; approval-reference wiring in manifest/registries where a determination record genuinely covers the event (no backfill of the null dates without records); V-4; tag `ckpt-P5`.
- **P6**: naming standard + staging standard committed; gate definition + `validate:all` orchestrator (D-7 consolidation point); migration ADR-0007 (Accepted upon Founder ratification — institution-adjacent per adr-practice); apply Founder-approved standard amendment wordings (D-2/D-7) **if delivered**, else record as pending in the ADR; V-5; tag `ckpt-P6`.
- **P7**: full-gate sweep + corpus-wide link check + route-inventory comparison (must equal baseline: 14 static pages) + independent inspection (bounded standard) + repair loop; merge to `main` (single deploy event); post-deploy live verification of the website per Development Standards; tag `migration-stage1-complete`.
- **P8** (Group B): extract `institution/` with history (`git filter-repo` path filter) into the new institutional repository; push to new GitHub repository; remove `institution/` from the website repo via a normal commit (history retained); thin WEB manifest per B-5; thin WEB AGENTS/CLAUDE edits; V-7 both repos.
- **P9** (Group B): CI workflows per C §12 V4, branch protection, deploy gating; V-8.

## 8. Repository Actions / 9. Metadata Actions / 10. Registry Actions / 11. Validator Actions / 12. AI Instruction Actions

**Repository:** 3 renames, ~44 tracked moves (all `git mv`), ~12 creations (charter, institution README, determinations set, 3 repository standards, gate assets, 1–2 ADRs), 0 deletions, 0 archived, 1 untracked relocation.
**Metadata:** every manifest `path` updated in its move commit; corpus block rescoped (P4); 3+ new manifest records (entry files ×2, each created standard/ADR, institution README); documentation-index record reclassified per D-1 (classification value added to taxonomy + schema enum per B-6); all existing `null` provenance preserved (no invention); `machineConsumptionEligible` untouched.
**Registries:** path-bearing fields (`governingReferences`, `sourceMaterials`, `path`, evidence paths in capability registry) rewritten to institution paths in the same commits as their moves; capability registry: no maturity/disposition changes (migration changes location, not capability state); new determinations registry (P5).
**Validators:** path constants updated at move; `validate-knowledge` corpus logic rescoped (P4); `validate:determinations` created (P5); V2 link-checker + gate orchestrator created (P6); all validators re-verified by negative tests (uncommitted fixtures, per convention) at P7.
**AI instructions:** CLAUDE.md/AGENTS.md — path updates to moved references, addition to governed corpus, pointer to determinations register and repository standards; Stage 2 thin website variants. No model or authority wording lives in these files; those changes are standard amendments (P6, Group B wording).

## 13. OSPA Migration Strategy

**Recovered canonical sources (S01–S04, S09, S10):** remain uncommitted; relocate to `workbench/ospa-reconstruction/` in P2; institutionally recognized (D-3) but repository-inert until admission. **RS05 evidence packet:** same location; it is evidence, not doctrine — never enters the canonical corpus as-is. **Reconstruction material:** whatever future Founder-authorized reconstruction planning produces stays in the workbench. **Workbench treatment:** §15. **Admission sequence (designed now, executed only under future authorization — expressly *not* part of this migration):** (1) Canonical Source Preservation Standard ratified (drafting separately authorized per D-5); (2) Founder Office determination recording each section's verified-canonical status → fd-record; (3) per-section canonical documents admitted to `institution/foundations/operations/` verbatim, foreign `OSPA-FND-V1-SNN` identifiers preserved in headers, renamed per naming standard; (4) explicit gap records for the nine absent sections (S05–S08, S11–S15) — never reconstructed; (5) manifest/registry entries + validator-set amendment in the same change; (6) gate green.

## 14. Decision History Introduction & Repository-Native Determination History

Decision history gains **ADR-0007** (repository foundation migration: corpus rescope superseding ADR-0001's corpus clause via proper both-direction supersession language — the first live exercise of the supersession machinery — plus branch-based migration workflow deviation, layer tree, entry-file governance) and, upon B-1, **ADR-0008** (topology split under ADR-0003 criteria; Founder-ratified as institution-adjacent). The **Determinations Register** (P5) introduces repository-native approval history: schema-validated `fd-NNNN` records carrying verbatim Founder text, date, instrument, affected artifacts, and relationships; initial population covers the Phase-1 project determinations (A/B acceptances, B's six context determinations, D-1…D-8, C approval, and the B-1…B-6 determinations as they issue). From P5 forward, every new canonical admission or standard amendment must cite an fd-record — conversation ceases to be the system of record.

## 15. Workbench Establishment

`workbench/` at repository root (Stage 2: institutional repository root): gitignored except its charter. Charter states (per D-3 and C §14): contents carry no status; canonical-source claims are inert until admitted through the preservation process with an fd-record citation; contents are uncommitted by policy; disposal only by sponsoring authority; validators verify only its *exclusion* (nothing canonical references workbench; nothing under canonical roots is unmanifested). First occupant: `ospa-reconstruction/`.

## 16. Canonical Corpus Rescoping

Corpus rule changes from `docs/**/*.md` to an enumerated canonical-root list: `institution/governance/**`, `institution/foundations/**`, `institution/standards/**`, `institution/decisions/**`, `institution/technical/**`, `institution/operational/**`, `institution/evolution/**`, plus `/CLAUDE.md`, `/AGENTS.md` (D-8), plus `docs/launch/**` pending B-5. Exclusions become structural (workbench, website implementation) rather than exceptional. Executed atomically in P4 (manifest corpus block + validator logic + entry-file records in one commit), recorded in ADR-0007 as a supersession of the ADR-0001 corpus clause.

## 17. CI Introduction Strategy (planning only)

Phase 9, separately authorized: (1) commit workflow definitions running `gate:institution` / `gate:website` on push and PR; (2) observe in report-only mode across several routine commits; (3) enable branch protection requiring the gate on `main` in both repositories; (4) since Vercel deploys from `main`, website deploy gating is inherited — no Vercel configuration change; (5) rollback = disable workflow/protection, both platform-reversible. Nothing in P0–P8 depends on CI existing.

## 18. Git Identity Strategy (prospective only)

Before the first migration commit (P0): set repository-local `user.name`/`user.email` to the Founder-approved identity; adopt it in both repositories thereafter; optionally record the historical hostname-derived identity mapping in a `.mailmap` (display-level only). **No history rewrite** — the 26 existing commits keep their recorded identity permanently; correction is prospective exclusively.

## 19. Reference Update Strategy

All inbound references travel with each move commit (M-2): manifest paths, registry path fields, validator constants, package.json scripts, relative Markdown links in moved documents and their referrers, CLAUDE/AGENTS pointers. Mechanics: scripted rewrite per layer, then mechanical verification — the Deliverable A link-check procedure runs at every V-2 checkpoint until the permanent V2 link validator lands in P6. Special case: renames (documentation-index, mr-0002, ip-0002) update manifest `path` while **retaining existing `id` values** — identifiers are stable even when filenames normalize.

## 20. Rollback Checkpoints / 21. Validation Checkpoints

Tags at every phase boundary (`pre-migration-baseline`, `ckpt-P2`…`ckpt-P6`, `migration-stage1-complete`). Rollback: pre-merge = branch reset/abandon (main untouched); post-merge = single merge-commit revert; P8 = delete unreferenced new repository + revert removal commit; P9 = platform toggles. Point of no return: none in Stage 1; in Stage 2, only once external references to the new repository exist.
Validation: **V-0** baseline suite green (known at `4dc354e`); **V-1** knowledge validator green on *working tree* (proves ESC-B3 resolved); **V-2** full existing gate green at every P3 commit + link sweep; **V-3** rescoped corpus exact-coverage incl. entry files; **V-4** determinations validator + cross-references green; **V-5** gate orchestrator green + ADR/manifest integrity; **V-6** full gate + negative tests + independent inspection + unchanged public route inventory + clean tree + live-site verification post-merge; **V-7** both repositories' gates green, history spot-verified (`git log --follow` on constitution, MFv1, ADR-0001), website deploy verified; **V-8** CI runs green and blocks a deliberately failing test branch.

## 22. Commit Strategy (logical boundaries; no messages drafted)

Stage 1, ~15 commits on the migration branch: (1) workbench + ignore rules; (2–8) one per layer move [governance · foundations-methodology · foundations-IP · foundations-education · standards+decisions · technical · metadata+validation]; (9) corpus rescope + index reclassification; (10) entry-file governance; (11) determinations register + initial fd-records; (12) repository standards + gate; (13) ADR-0007 (+0008 when determined); (14) approved standard amendments; (15) final verification adjustments. Then one merge commit to `main`. Stage 2: extraction is history-preserving repository surgery (no new content commits) plus one website-repo removal commit and one thin-governance commit.

## 23. Actions Already Authorized in Principle (Group A)

Workbench establishment + charter + ignore rules (D-3) · OSPA untracked relocation (D-3 + prior determination) · the entire institution-tree restructuring and all moves/re-referencing (approved C hierarchy & mapping) · the three naming-normalization renames (C §11 at migration) · corpus rescoping architecture (C §10; recorded via ADR-0007) · documentation-index placement + reclassification (D-1) · entry-file governance (D-8) · Determinations Register creation (D-6) · gate definition + orchestrator (D-4 architecture, D-7 consolidation) · naming + staging standards drafting (C §7 components of the approved architecture) · migration ADR authorship (adr-practice) · prospective git identity correction · Stage-1 merge upon V-6.

## 24. Actions Requiring Founder Office Determination (Group B)

**B-1** Topology + institutional repository name → gates P8 entirely (C §18.1–.2). **B-2** Exact amendment wordings for the bounded standard and Development Standards (D-2/D-7 authorized the amendments in principle; the *text* requires approval — P6 schedules, does not draft). **B-3** Verbatim determination texts + dates for initial fd-records (A-6). **B-4** CI platform confirmation + implementation authorization → gates P9 (D-4). **B-5** Website governance depth (thin manifest incl. docs/launch vs reference-only) → affects P4 corpus list and Stage-2 WEB governance (C §18.4). **B-6** Taxonomy wording for the "Repository Standard" classification value (D-1 names the class; adding an enum value to the ratified taxonomy needs the approved label text). **B-7** (standing, outside this migration) OSPA admission and Design System preservation — expressly excluded from execution here.

## 25. Overall Migration Determination

The plan is deterministic (every action enumerated, ordered, and mapped), dependency-aware (§5), fully reversible (tagged checkpoints; single-merge exposure; no history rewrites; no external mutations in Stage 1), validation-driven (eight checkpoint classes, green-at-every-commit), and compatible with the accepted audit findings, the governance-mechanism findings, the approved architecture, and all Founder Office determinations. Its Group A scope can execute immediately upon acceptance; its Group B gates are few, precise, and non-blocking for Stage 1 except B-2/B-3/B-6 wordings, which P6/P5 can receive mid-execution without resequencing. Upon completion of Stage 1 the repository is architecture-conformant in place; upon B-1 and Stage 2 it reaches the approved dual-repository target with unbroken history on both sides.

DELIVERABLE D COMPLETE — AWAITING FOUNDER OFFICE REVIEW