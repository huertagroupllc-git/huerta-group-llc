# Deliverable C — Proposed Repository Architecture

**Huerta Group — Repository Foundation Project, Phase 1 · Designed against accepted Deliverables A, A.1, and B (baseline commit `4dc354e`) · Design only — no file was created, moved, renamed, or modified**

## 1. Executive Summary

This architecture converts the findings of Deliverables A and B into a target structure built around one organizing idea: **the institutional repository is itself an institutional system**, and it should be shaped by the same doctrine the institution already ratified — source supremacy, metadata-without-authority, separated dimensions, configurable authority, historical preservation, and honest unknowns.

The proposal has five structural moves:

1. **A layered canonical hierarchy** that separates authority classes physically — governance, foundations, standards, records, decisions, technical architecture, operational assets, metadata, validation — so that repository placement *reflects* authority instead of obscuring it (Deliverable A §17).
2. **A dual-repository target topology** (recommended, subject to Founder confirmation): a dedicated institutional repository holding the canonical corpus and its machinery, and the existing website repository reduced to what ADR-0002 always said it was — a bounded public interface. The internal hierarchy is topology-independent: if the Founder Office prefers a single repository, the identical tree nests under one root with no design change.
3. **Repository-native institutional memory** (D-6): a Determinations & Approvals Register that gives every approval event a dated, citable repository record — ending conversation-dependent provenance — plus operational records that absorb the institutionally material facts currently living only in AI session memory.
4. **A workbench outside the canonical corpus** (D-3) with a defined admission path through a Canonical Source Preservation standard (D-5), resolving the staging conflict (ESC-B3) and giving recovered OSPA material a recognized, non-reconstructive home.
5. **A composable validation architecture culminating in CI enforcement** (D-4): one canonical gate definition that both execution standards will reference (D-7), layered validators, and mechanical enforcement at push time — designed here, implemented in later approved work.

All eight Founder Office determinations are incorporated (§17). Four narrow decisions remain open (§18).

## 2. Architectural Principles

P-1 **Placement expresses authority.** A reader who knows only the path should know the artifact's authority class. No directory mixes governance with implementation or canonical text with working material.
P-2 **The source is supreme; the structure is subordinate.** Nothing in this architecture reinterprets any approved text. Directories, metadata, and validators organize authority; they never create it (ADR-0001 doctrine, preserved verbatim).
P-3 **Canonical means singular and stationary.** One canonical path per artifact; supersession changes status, never location; nothing historical is deleted or exiled to an attic.
P-4 **Everything institutional is repository-native** (D-6). If a rule, approval, or determination governs behavior, it has a committed, validated home. Conversation and agent memory are never load-bearing.
P-5 **Unknowns stay visible.** Missing canonical text (Constitution articles, absent OSPA sections) is marked, never reconstructed (D-3), exactly as the Constitution record already models.
P-6 **Validation is composable and ultimately mechanical** (D-4). Every governed area ships with its validator; validators compose into one gate; the gate ultimately runs without anyone remembering to run it.
P-7 **Proportionality survives.** The architecture adds no layer without a current occupant or a determined future one; future foundations slot in without restructuring (ADR-0003's proportionate-flexibility inheritance).
P-8 **Reversibility bounds ambition.** Every proposed move is a `git mv`-class change with metadata updates — no content rewrites, no history loss.

## 3. Proposed Repository Hierarchy

Target tree of the **institutional repository** (recommended name subject to Founder choice, e.g. `huerta-group-institution`). In a mono-repository outcome this identical tree nests under `institution/` beside the website tree.

```
huerta-group-institution/
├── CLAUDE.md                        ← governed operational entry point (D-8; pointer-style)
├── AGENTS.md                        ← governed operational entry point (D-8)
├── README.md                        ← repository implementation documentation
├── governance/                      L0–L1 · INSTITUTIONAL GOVERNANCE
│   ├── constitution/                Constitutional Authorities (canonical record; text pending, marked)
│   ├── strategic/                   Vision Foundation for Development
│   └── determinations/              Determinations & Approvals Register (D-6; approval provenance)
├── foundations/                     L2 · FOUNDATIONS (canonical sources + domain records)
│   ├── methodology/                 MFv1 source · records/ (mr-…)
│   ├── intellectual-property/       IPFv1 source · records/ (ip-…)
│   ├── education/                   EWDFv1 source · records/ (ed-…)
│   ├── operations/                  OSPA recovered canonical sections (recognized; gaps marked, D-3)
│   └── …future…                     design-system/ · branding/ · publishing/ (slots, not placeholders)
├── standards/                       L3 · STANDARDS
│   ├── repository/                  Repository Standards: documentation-index (D-1) ·
│   │                                canonical-source-preservation (D-5, placement) ·
│   │                                naming-and-identifiers · staging-and-admission ·
│   │                                execution-gate definition (D-7 consolidation point)
│   ├── development/                 Development Standards · Bounded Autonomous Standard (amended per D-2 later)
│   └── institutional/               future Company-wide standards (empty slot)
├── decisions/                       L4 · DECISION HISTORY (adr-practice · ADR-0001…0006 · future DDRs)
├── technical/                       L4 · TECHNICAL ARCHITECTURE (internal-software-architecture ·
│                                    domain repository-architecture docs)
├── operational/                     L4 · OPERATIONAL ASSETS (repository-operations records replacing
│                                    AI-memory facts, D-6; future runbooks under OSPA authority)
├── evolution/                       E · INSTITUTIONAL EVOLUTION LOG (placement per §15; architecture = Deliverable E)
├── metadata/                        L5 · REPOSITORY METADATA (non-authoritative)
│   ├── manifest.json                corpus manifest (corpus rule rescoped to canonical roots)
│   ├── schemas/                     knowledge · capability · method · ip · education · determinations · evolution
│   └── registries/                  capability · method · ip · education · determinations
├── validation/                      L5 · VALIDATION (validators · gate composition · future ci/ definitions)
└── workbench/                       W · STAGING (outside canonical corpus, D-3; uncommitted by policy —
                                     tracked charter only; e.g. workbench/ospa-reconstruction/)

huerta-group-llc/  (website repository, unchanged role per ADR-0002)
├── CLAUDE.md · AGENTS.md            thin, governed; defer to institutional repository governance
├── README.md                        website implementation documentation
├── app/ · components/ · lib/        public website implementation
├── supabase/migrations/             inquiry schema (ADR-0004 boundary unchanged)
├── docs/launch/                     website launch/operations documentation (website-scoped)
├── scripts/                         website-scoped checks
└── config files                     next/eslint/postcss/tsconfig/.env.example
```

## 4. Authority Organization

| Repository area | Authority class | Who governs content | What placement may never imply |
|---|---|---|---|
| `governance/constitution/` | Ratified Constitutional Authority (tier 1) | Constitutional process only | Presence of the record ≠ presence of ratified text |
| `governance/strategic/` | Approved Strategic Authority (tier 2) | Founder Office | — |
| `governance/determinations/` | Approval-event record (evidentiary) | Founder Office issues; P&SD records verbatim | A record proves the event, never enlarges the authority |
| `foundations/*` | Approved Methodology/Governance/Policy (tier 3) | Each room, configurable | Repository admission ≠ institutional approval |
| `standards/repository/` | Repository Standards (per D-1, Standards layer under Institutional Repository Governance) | Founder Office ratifies; P&SD maintains technically | Repository standards govern the repository, never institutional substance |
| `standards/development/` | Development Standards (tier 4) | Development authority under hierarchy | Technical convenience never overrides higher tiers |
| `decisions/` | Accepted technical decisions (tier 4) | Development; owner ratification where institutional-adjacent | ADRs never create institutional authority |
| `technical/` | Technical architecture (tier 4) | P&SD, subordinate to domain foundations | Custody ≠ stewardship ≠ authority |
| `operational/` | Operational records | Future OSPA authority; interim P&SD for repository-operations facts | Recording an operation ≠ authorizing it |
| `metadata/` + `validation/` | **Non-authoritative** technical representation | P&SD | Metadata and validators describe and enforce shape; where they disagree with a source, the source is correct |
| `workbench/` | **Ungoverned working space** | Whoever the sponsoring instrument names | Nothing in workbench carries any status; "Canonical Source" claims are inert until admitted |
| `evolution/` | Append-only institutional record | Defined by Deliverable E | The log records change; it never effects change |
| Website repository | Implementation + public positioning | Website Development under standards | Public copy is never internal authority (validator-enforced today, preserved) |

## 5. Repository Layer Model

**L0 Constitutional → L1 Strategic → L2 Foundations → L3 Standards → L4 Records, Decisions, Technical, Operational → L5 Metadata & Validation → L6 Implementation (website repo)**, plus two orthogonal spaces: **W Workbench** (pre-authority material, outside the corpus) and **E Evolution** (post-hoc record of institutional change). Authority flows strictly downward L0→L6; W has no authority and E asserts none. The five-level hierarchy of authority from the documentation index maps onto L0–L4 unchanged; L5/L6/W/E are expressly non-authoritative, which the layer model now makes physically legible (Deliverable A finding: "structures that obscure authority" — resolved by construction).

## 6. Canonical Source Architecture

- **Locations:** every canonical source lives at exactly one path inside its layer (`foundations/<domain>/<source>.md`, `governance/constitution/…`, `standards/…`). Derived records live beside their source (`foundations/<domain>/records/`), preserving the source-supremacy adjacency that exists today.
- **Preservation function (D-5):** a **Canonical Source Preservation Standard** is architecturally placed at `standards/repository/canonical-source-preservation-standard.md` (to be drafted only under later authorization). Its minimum repository function, which this architecture reserves space and metadata for: (1) verbatim-transmission and preservation rules (Markdown normalization only; never reconstruct, summarize, or infer); (2) the pending/missing-text marking convention (Constitution record pattern, generalized); (3) the **admission path** — how material moves from `workbench/` into the canonical corpus (verification of provenance, Founder determination reference, manifest/registry entry, validator pass — in one change); (4) evidence-packet handling for recovered sources; (5) the rule that every canonical admission cites a Determinations Register record.
- **OSPA treatment (D-3):** recovered canonical sections are admitted to `foundations/operations/` as individual canonical section documents under the repository's naming standard (foreign `OSPA-FND-V1-SNN` identifiers preserved *inside* each document header as source identifiers), with missing sections represented by explicit gap records — **never reconstructed**. Reconstruction *working* material (including the evidence packet) remains in `workbench/ospa-reconstruction/`, uncommitted.
- **Approval provenance:** manifests and registries gain (in migration) an approval-reference field pointing at Determinations Register entries, replacing "transmitted with the implementing authorization" as the terminal citation. Existing null dates remain null until a determination record supplies verified dates — nothing is backfilled by inference (P-5).

## 7. Repository Standards Architecture

`standards/repository/` becomes the home of the standards that govern the repository itself (D-1): the **documentation index** (relocated in authority terms, not function — it remains the classification taxonomy + hierarchy + maintenance rules, now formally a Repository Standard under Institutional Repository Governance, with manifest metadata updated to match during migration); the **canonical-source-preservation standard** (placement, §6); a **naming-and-identifiers standard** (codifying the currently implicit conventions and resolving Deliverable A's `-v1` suffix and foreign-identifier findings); a **staging-and-admission standard** (workbench rules, D-3); and the **execution gate definition** (§13, D-7). Required amendments identified per **D-2** (identified only, not performed): bounded standard — replace "Builder model: Claude Opus 5" with model-neutral language referencing Founder-approved configuration, replace personal escalation naming with "Founder Office," point its verification/reporting sections at the consolidated gate and report definitions; Development Standards — point its commit/push gate at the same consolidated definition; adr-practice — align its tier wording with ADR-0001's "recorded where governing references state it."

## 8. AI Contributor Governance Architecture

Per **D-8**, `CLAUDE.md` and `AGENTS.md` become governed repository operational assets in *both* repositories: they remain at repository root (a tooling requirement, recorded as such), stay pointer-style (content minimal; canonical substance lives in the governed corpus they cite), receive manifest records (the ADR-0001 root-exclusion rule is amended during migration — the "future decision" it reserved is now made by D-8), and carry classification as operational/implementation instruction subordinate to the hierarchy. The AI governance chain becomes fully repository-native (D-6): entry files → repository standards (incl. canonical-source preservation and the gate) → bounded standard (amended per D-2) → per-task instruments, with the Determinations Register supplying what conversation history supplied before. Institutionally material facts presently held in agent session memory (deployment workflow, environment/account topology, protected-data rules such as the marked production TEST inquiry row) are absorbed into `operational/repository-operations` records — **facts and rules only, never secret values**. Session memory thereafter is a convenience cache, never an authority (P-4).

## 9. Decision History Architecture

`decisions/` holds adr-practice and ADR-0001–0006 unchanged in content, status, and numbering; Design Decision Records, if ever adopted, join as a parallel series under the same practice. Decision history is **unified and institution-wide** — it does not split with the website repository, because the accepted ADRs govern boundaries larger than the website; the website repository references decisions by stable identifier. The migration itself will require a new ADR (placement decision under ADR-0003 criteria — authored in Deliverable D, ratified by the Founder Office per adr-practice, since repository topology is institution-adjacent). Supersession machinery (both-direction links, retained files, manifest relationships) is preserved exactly and will be exercised for the first time by whatever migration supersedes.

## 10. Metadata Architecture

`metadata/` consolidates today's `knowledge/` with two structural changes: (1) **corpus rescoping** — the manifest's corpus rule changes from `docs/**/*.md` to an explicit list of canonical roots (`governance/`, `foundations/`, `standards/`, `decisions/`, `technical/`, `operational/`, `evolution/` + the two root entry files), with `workbench/` expressly outside it — dissolving the ESC-B3 conflict by architecture rather than exception; (2) **two new metadata domains** — a determinations registry (`metadata/registries/determinations-registry.json` + schema) and, when Deliverable E defines it, an evolution-log registry. All existing doctrine carries forward verbatim: metadata never creates authority, provenance is never fabricated, unknowns remain explicit, `machineConsumptionEligible` stays `unresolved` until an authorized decision, one canonical path per document, statuses change in place.

## 11. Schema and Registry Architecture

Schemas move to `metadata/schemas/`, registries to `metadata/registries/`, preserving every existing contract: JSON Schema 2020-12, strict `additionalProperties: false`, controlled vocabularies with separated provisional lists, `configurable: const true` authority representation, separated status dimensions with no-inference guards, pinned record sets requiring deliberate admission. The new determinations schema follows the established pattern (stable IDs `fd-NNNN`, verbatim determination text, date, issuing instrument, affected artifacts, relationships) — its design detail belongs to Deliverable D/E implementation, its *place* is fixed here. Identifier and suffix conventions across series are normalized by the naming standard (§7) — as metadata/filename policy applied at migration, never as retroactive content edits to approved texts.

## 12. Validation Architecture

Four composed layers (D-4 — architecture only):

- **V1 Domain validators** — the existing five, relocated to `validation/`, plus `validate:determinations` and (post-E) `validate:evolution`; each remains deterministic, offline, zero-dependency, one-line-per-defect.
- **V2 Cross-corpus integrity** — a corpus-wide link/reference checker (mechanizing Deliverable A's ad-hoc check), canonical-marker checks (pending-text and gap-record conventions), and workbench-exclusion verification (nothing under canonical roots is unmanifested; nothing canonical cites workbench).
- **V3 The Gate (D-7)** — one canonical, machine-readable gate definition in `standards/repository/` composing V1+V2+lint+`tsc`+build (per repository) into named gates (`gate:institution`, `gate:website`). This is the **single consolidation point** for the duplicated and divergent completion/verification texts found in Deliverable B (C-4/C-5): both standards are later amended (D-2/D-7 identified amendments) to *reference* the gate rather than restate it. Consolidation is thereby achieved architecturally without editing a standard today.
- **V4 CI enforcement** — GitHub Actions (platform assumption noted in §18) running the applicable gate on every push/PR in both repositories, plus branch protection so `main` cannot advance on a failed gate; the website repository's deploy inherits gating because Vercel builds from `main`. Negative-test fixtures remain uncommitted scratch by convention (unchanged). **No CI is implemented by this deliverable.**

## 13. Implementation Documentation Architecture

Each repository keeps its own `README.md` as its primary current-implementation document (Development Standards rule, unchanged), documenting only its own repository. Website-scoped operational documentation (`docs/launch/`) remains in the website repository as implementation documentation. Repository-operations records (deployment workflow, environment topology, protected-data registers — the former memory-resident facts) live in the institutional repository under `operational/`, because they are institutional facts about how systems are run, not website marketing or code. Temporary-value registers (SITE_URL, favicon) stay in the website README where they are maintained today.

## 14. Staging / Workbench Architecture

`workbench/` (institutional repository, top level): outside every canonical root, outside the manifest corpus, invisible to V1/V2 validators except the exclusion check. Policy (per prior determination + D-3): working material is **uncommitted** — the directory is gitignored except a single governed charter document stating the rules: nothing in workbench has status; canonical-source claims inside workbench are inert; admission happens only through the canonical-source-preservation process with a Determinations Register citation; workbench contents may be deleted only by their sponsoring authority. First occupant: `workbench/ospa-reconstruction/` (the six recovered section files + evidence packet, relocated as an uncommitted file operation authorized in Deliverable D). This resolves ESC-B3 permanently: the governed corpus stays mechanically pure, and Founder working material has a lawful home.

## 15. Institutional Evolution Log Placement

`evolution/` at the institutional repository top level, with registry/schema slots in `metadata/`. Reserved characteristics (placement-level only, per the approved sequence — architecture belongs to Deliverable E): append-only; records institutional-change events (foundation admissions, determinations, supersessions, migrations, authority changes) with references to determination records and affected artifacts; never a second source of truth — it cites canonical artifacts, it does not restate them.

## 16. Current-to-Future Repository Mapping

Complete mapping of every significant asset from Deliverables A/A.1 (grouped as A.1 grouped them). **INST** = institutional repository; **WEB** = website repository; no file moves now.

| Current location (at `4dc354e`) | Future location | Notes |
|---|---|---|
| docs/governance/huerta-group-constitution.md | INST governance/constitution/ | Text-pending markers unchanged |
| docs/governance/vision-foundation-for-development.md | INST governance/strategic/ | — |
| — (new area) | INST governance/determinations/ + metadata/registries/determinations-registry.json | D-6; created in migration |
| docs/README.md (documentation index) | INST standards/repository/ (as the repository documentation-index standard) | D-1; manifest metadata corrected at migration |
| docs/development/development-standards.md · bounded-autonomous-completion-standard.md | INST standards/development/ | D-2 amendments listed §7, applied later |
| docs/development/decisions/ (adr-practice + ADR-0001…0006) | INST decisions/ | Content/status/numbering unchanged |
| docs/development/internal-software-architecture.md | INST technical/ | — |
| docs/methodology/methodology-foundation-v1.md · records/ (mr-0002…0008) | INST foundations/methodology/ (+ records/) | — |
| docs/methodology/method-library-architecture.md | INST technical/ | — |
| docs/intellectual-property/intellectual-property-foundation-v1.md · records/ (ip-0002…0006) | INST foundations/intellectual-property/ (+ records/) | — |
| docs/intellectual-property/ip-repository-architecture.md | INST technical/ | — |
| docs/education/education-workforce-development-foundation-v1.md · records/ (ed-0002…0012) | INST foundations/education/ (+ records/) | — |
| docs/education/education-platform-architecture.md | INST technical/ | — |
| "docs/operating systems & architecture foundation/" S01–S04, S09, S10 + evidence packet (untracked) | INST workbench/ospa-reconstruction/ (uncommitted); admitted sections → foundations/operations/ upon verified admission | D-3; gaps marked, never reconstructed |
| Design System Foundation v1 (no repository presence) | INST foundations/design-system/ (reserved slot) | Preservation deferred per prior determination |
| — (Branding) | INST foundations/branding/ (reserved slot; no placeholder created) | Founder determination |
| docs/launch/ (4 docs) | WEB docs/launch/ | Website-scoped operational documentation |
| knowledge/schema.json · manifest.json | INST metadata/schemas/ · metadata/manifest.json | Corpus rescoped §10 |
| knowledge/capability-{schema,registry}.json | INST metadata/schemas/ · metadata/registries/ | — |
| knowledge/{method,ip,education}-{schema,registry}.json | INST metadata/schemas/ · metadata/registries/ | — |
| scripts/validate-*.mjs (5) | INST validation/ | + new V2/V3 assets; gate per §12 |
| CLAUDE.md · AGENTS.md (root) | Root of **both** repos, governed + manifested | D-8 |
| README.md (root) | WEB README.md; INST gets its own | §13 |
| app/ (16) · components/ (65) · lib/ (4) | WEB unchanged | ADR-0002 boundary intact |
| supabase/migrations/ (2) | WEB supabase/migrations/ | ADR-0004 boundary intact |
| next.config.ts · eslint/postcss/tsconfig · package.json(+lock) · .env.example · .gitignore | WEB unchanged; INST gets its own minimal package/config for validators + CI | Gate split §12 |
| Agent session memory (institutionally material facts; outside repo) | INST operational/repository-operations records | D-6; facts/rules only, no secrets |
| — (Evolution Log) | INST evolution/ (+ metadata slots) | Deliverable E architecture |

## 17. Founder Office Determinations Incorporated

**D-1** documentation index placed as a Repository Standard in `standards/repository/` (§3, §7, mapping) — placement only, no edit. **D-2** required amendments identified (§7) — none performed. **D-3** workbench architecture outside the corpus with uncommitted policy, OSPA recognition path into `foundations/operations/`, and an absolute no-reconstruction rule (§6, §14). **D-4** four-layer validation architecture ending in CI (§12) — nothing implemented. **D-5** Canonical Source Preservation standard placed with minimum function defined (§6) — not drafted. **D-6** Determinations Register + operational records make governance repository-native and memory-independent (§6, §8, §13). **D-7** completion/verification duplication consolidated through the single gate definition that standards will reference (§12) — no standard amended. **D-8** CLAUDE.md/AGENTS.md become governed, manifested operational assets at both roots (§8).

## 18. Outstanding Founder Office Decisions

1. **Topology confirmation** — dual-repository (recommended here, per ADR-0003 criteria: divergent release cadence, differing ownership, deploy blast-radius, unbounded institutional growth vs bounded website) versus single-repository nesting. The internal architecture is identical either way; Deliverable D cannot begin without this choice.
2. **Institutional repository name** (if dual) — e.g., `huerta-group-institution`; naming is an institutional identity act.
3. **CI platform confirmation** — GitHub Actions is the assumed platform (repository already lives on GitHub); confirmation authorizes Deliverable D to plan concrete workflow definitions, including any platform-side branch-protection configuration.
4. **Website-repository governance depth** — whether WEB carries a thin manifest of its own governed docs (launch + entry files) or remains outside manifest governance entirely, referencing INST (recommended: thin manifest, same validator pattern).

## 19. Overall Architectural Determination

The proposed architecture requires **no new doctrine** — every structural rule it applies is already ratified institutional text, now given physical form; every gap it closes was identified and accepted in Deliverables A and B; every determination D-1…D-8 lands in a concrete location with a defined function. It is fully reversible at every step, preserves all canonical text and history byte-for-byte, exercises the existing supersession machinery rather than inventing new mechanisms, and leaves the repository able to admit future foundations, standards, determinations, and the Evolution Log without further restructuring. Subject to the four outstanding decisions in §18, this architecture is ready to govern Deliverable D — the Repository Migration Plan.

DELIVERABLE C COMPLETE — AWAITING FOUNDER OFFICE REVIEW