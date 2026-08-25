# Huerta Group Organizational Systems Methodology — Generation One Discovery Report

**Classification: Working material — non-admitted, non-governing.** Placed in `workbench/` under the workbench charter (uncommitted by policy; carries no institutional status). Nothing in this report creates, amends, or interprets institutional authority. Every methodology proposition below is a hypothesis, an evidence-backed pattern, a candidate method, or provisional methodology unless and until the Founder Office adopts it.

- **Program:** Huerta Group Organizational Systems Methodology
- **Phase:** Generation One — Discovery
- **Authority:** Founder Office → Institutional Platform Development; authorized for evidence retrieval and methodology discovery only
- **Implementation / platform / commercial authorization:** none
- **Returned:** 2026-08-25
- **Stop condition:** this report stops for Founder Office determination

**Provenance labels used throughout.** `[EIA]` Existing Institutional Authority · `[HG]` Observed Huerta Group LLC evidence · `[HGP]` Observed Huerta Group Publishing evidence · `[BOTH]` Supported across Huerta Group and HGP · `[MECH]` Implementation-specific mechanism · `[PROV]` Provisional reusable pattern · `[HYP]` Hypothesized reusable pattern · `[INSUF]` Insufficient evidence. Where it matters, `(a)` marks a statement taken directly from a record and `(b)` marks this office's inference. Quotations are verbatim from the cited record.

---

## 1. Repository Baseline and Evidence Reviewed

### 1.1 Starting baseline

| Item | Value |
| --- | --- |
| Repository | `huerta-group/huerta-group-llc` (remote `https://github.com/huertagroupllc-git/huerta-group-llc.git`) |
| Starting SHA | `44c7e95084692318c4c877e37e0c26fae9dbec0c` |
| Branch | `main`, in sync with `origin/main` |
| `git status` at start | clean — no modified, staged, or untracked tracked-path files |
| `git status` at return | clean — this report lives at `workbench/methodology-discovery/`, which `.gitignore` excludes by policy (`/workbench/*` with only the charter and the three OSPA custody paths un-ignored) |
| Files modified in any repository | none |
| Runtime systems started, databases touched, scripts executed | none |

The last commit is `44c7e95` (2026-08-23), "docs: return the Claude Design implementation and validation completion report." The repository holds 91 commits spanning 2026-07-21 to 2026-08-23.

### 1.2 Repositories and corpora actually inspected

| Corpus | State inspected | What was read |
| --- | --- | --- |
| `huerta-group-llc` (governed corpus) | `44c7e95`, `main`, clean | `institution/` in full (≈150 files, ≈260,000 words: constitution record, Vision Foundation, three foundations with derived records, OSPA S01–S04/S09/S10, Semantics Foundation, both Generation requirements reports, all 18 Founder Office determinations, venture governance instruments, ADR practice and ADR-0001…0020, technical architectures, standards, operational record, evolution log, design records, all registries, schemas and validators); `workbench/README.md`, `CUSTODY.md`, `SHA256SUMS`, the RS05-EV01 evidence packet (≈39,000 words); `docs/launch/*`; `passover/README.md`; `README.md`, `CLAUDE.md`, `AGENTS.md`; `.github/workflows/verify.yml`; `.gitignore`; git history |
| `huerta-group-operations` (Corporate Command Center runtime) | `a1084ccb6005f9f7fa3804e58e9948c3c2187850`, `main`, clean; 32 commits 2026-08-19 → 2026-08-23 | `README.md`, `docs/*`, `.env.example` (names only), `.gen1-baseline.json`, all 11 migrations, both pgTAP suites, `scripts/*` (read, not executed), `lib/domain/*`, `app/**`, `components/*`, `proxy.ts`, full commit narrative. `.env.local` was not opened. |
| `huerta-group-publishing` (HGP venture repository) | `e28f12ad8a5e5531bed9fca20225a967669ab2de`; branch `broadsheet-design-adoption`, identical to `main`; clean; 203 commits 2026-07-02 → 2026-08-25 | `README.md`; all 77 files under `docs/` (constitutions, terminology, validation program and registers, reviews, 21 blueprints, 13 operations records, engine architecture, design and provenance records, 20 globalization records, settings); migration filenames (42); git history including first-appearance dating of governance vocabulary |
| `curbside-spa` | `c07ea1b`, `main`, clean | `README.md` head only. This is the website/operations repository of a separate business (Curbside Spa Services, Tucson). It is named in the Corporate Venture Governance Blueprint §27.8 as an example of "client-delivery work" awaiting the FD-V8 classification sweep, which has not occurred. It was **not** treated as Huerta Group evidence (see §15, Q5). |

Also present on the machine and named in `fd-0011` as searched locations — `gotrade-official`, `nest & quill` — were not inspected; nothing in the Huerta Group corpora identifies them as Huerta Group evidence.

**Method.** Read-only throughout. This office read the governing authorities, all determinations, both requirements reports, the operations doctrine, the venture instruments, the repository standards, and every Generation One and Generation Two report directly. Five delegated read-only retrieval passes covered the HGP repository, the Command Center runtime, the OSPA corpus and evidence packet, the design/education/IP corpora, and the ADR/architecture set with the git arc; their returned findings carry file paths and verbatim quotations, and every finding that bears on a conclusion below was checked against its source. Where a conclusion rests on a delegated reading that this office did not independently re-open, that is stated.

### 1.3 Major authoritative sources reviewed

Constitution record (Articles I–III by title; text not held) · Vision Foundation for Development · Methodology Foundation v1 with records mr-0002…mr-0008 · Intellectual Property Foundation v1 with ip-0002…ip-0006 · Education & Workforce Development Foundation v1 with ed-0002…ed-0012 · OSPA-FND-V1 S01, S02, S03, S04, S09, S10 and their admission record · Corporate Operations Semantics Foundation V1 (`CORP-OPS-SEM-FND-V1`) and its adoption record · Generation One Requirements Report (`GEN1-REQ-V1`) · Generation Two Requirements Report (`GEN2-REQ-V1`) · Corporate Venture Governance Phase 1 Blueprint, FD-V1 Charter, FD-V2, FD-V4 · Founder Office determinations fd-0001…fd-0018 · ADR practice and ADR-0001…ADR-0020 · Internal Software Architecture Foundation · Generation One Phase 1 Technical Blueprint · Method Library, IP Repository and Education Platform architectures · Development Standards · Bounded Autonomous Completion and Verification Standard · Repository Standards (documentation index, canonical-source preservation, repository verification) · Repository Operations Record · Corporate Operations & Command Management function record · DDR-0001…DDR-0011, GR-0001…GR-0004 · Evolution Log README, INDEX, evo-0001…evo-0005 · capability, venture, determinations, evolution, method, IP and education registries with schemas and validators.

### 1.4 Major operational evidence reviewed

Generation One Construction & Validation Completion Report · Production Readiness Report · Local Operations Activation Report · Initial Headquarters Operating Procedure · Classification Mismatch Dispositions · Generation Two Requirements Preservation Completion Report · Generation Two Stage 1, 2, 4, 5 and 6 reports · Authentic-Use Stale Obligation Disposition Report · Stale Obligation Disposition & Authentic Correction Report · Generation One Condition Reconciliation & Register Drill-Down Report · `operations-systems` Capability Trigger Reassessment · Generation One Semantic-Gap Inventory · Corporate Operations Semantics Definition Package · FD-V7 Evidence Package · Claude Design passover evaluation and implementation completion report · Website Phase 1 Inventory · launch documentation · the Command Center runtime's commit narrative, migrations, conformance suites, validation scripts and domain code · HGP's Founder Validation Program, observation register, theme register, decision history, the two 2026-07 reviews, every blueprint and as-built record, the migration baseline, the globalization pilots/controls/diagnosis/sign-off records, and its git history.

### 1.5 Evidence unavailable to Development — recorded, not reconstructed

Each of the following was named or relied upon by a record but is not accessible in any inspected corpus. None was inferred, summarized from secondary description, or reconstructed.

1. The ratified text of Constitution Articles I–III (titles only; `fd-0004` deficiency 1).
2. OSPA Foundation v1 sections S05–S08 and S11–S15 (permanently unavailable), the circumstances of their loss, the original approval date, and the transmission and recovery provenance of the surviving set (`fd-0004` deficiency 7; admission record §5). **No record states why the sections were lost.** The corpus does not attribute the loss to conversation or session dependency; that attribution would itself be an inference the canonical-source-preservation standard forbids.
3. The Design System Foundation v1 text (preservation deferred, `fd-0001` det. 2; `fd-0004` deficiency 6).
4. The Repository Foundation Project deliverables — A (Repository Audit), A.1 (Repository Authority Matrix), B (Governance Mechanism Audit), C (Proposed Repository Architecture), D (Migration Plan). Their acceptance is recorded (`fd-0004`) and their determinations are transcribed (`fd-0001`–`fd-0003`), but the deliverables themselves are not preserved. These are the closest things to diagnostic instruments in the institution's history.
5. The Corporate Platform Alignment Audit (accepted, `fd-0006`) — the audit that identified "the ungoverned parent–venture relationship as the institution's largest truth gap" (`evo-0004`). Not preserved.
6. The establishing instrument for Corporate Operations & Command Management (`fd-0010` deficiency 3).
7. The complete text of FD-V11 (one sentence transmitted; `fd-0009`).
8. The Founder Office execution packages themselves; only their determinations are transcribed into the register.
9. Founder Office directives cited by HGP records but absent from HGP's repository: the FVP authorizing directive, the Phase 2 publication directives, the "Claude Design Handoff Evaluation & Implementation Readiness Report," the "August 2026 repository audit."
10. HGP: a results document for the six-run Reviewer v3 hybrid matrix; any recorded Spanish or English human sign-off artifact; the `docs/validation/themes/` directory (referenced, non-existent).
11. The "PR01" reconstruction-room artifacts and the "quarantined generated draft" referenced by the RS05-EV01 packet (Appendix C).
12. Approval dates and instruments for the Vision Foundation and the Methodology, IP, Education and Design foundations (`fd-0004` deficiencies 2–6).
13. **Any client engagement evidence.** No inspected corpus records a client engagement. `fd-0006` FO-04 forbids public copy implying an established portfolio "unless repository evidence supports that claim," and none does. The Vision Foundation's own learning cycle begins with consulting; that cycle has not yet produced repository evidence.

### 1.6 Provenance limitations of this report

- **Both cases are internal and founder-led.** Every authority in both cases resolves, in practice, to one person. The Local Operations Activation Report states it plainly: "In practice the Founder wears both hats and signs in as whichever the task calls for."
- **The evidence is young.** The corporate corpus spans 34 days (2026-07-21 → 2026-08-23); the operations track that supplies most authentic-use evidence spans six calendar days (2026-08-18 → 2026-08-23); HGP spans 54 days.
- **Self-evidence.** The office writing this report is the office that produced most of the operational records it reads. Those records are treated as evidence of what was recorded; where a record's claim could be checked against code or git, it was, and the discrepancies found are preserved in §13 rather than smoothed.
- **Contributor memory was found stale and corrected from the repository** in at least two respects (the expansion of "OSPA" — Operating Systems & Process Architecture Foundation — and the status of FD-V7, made 2026-08-18). This is itself an instance of determination D-6 operating as intended.
- **Scale.** The Command Center register holds five seeded matters plus three authored corrections; identity has a population of two; "Recovery time was measured at a data volume of tens of records." Nothing here is evidence about behaviour at scale.

---

## 2. Executive Discovery Determination

### 2.1 What capability appears to be emerging

The evidence supports a narrower and more specific claim than "a methodology for organizational systems." What Huerta Group has demonstrably practiced — on itself and on its first venture — is a discipline for **converting organizational ambiguity into governed, truthful, provenance-preserving representation** of five things: what the organization is and is obligated to do; who may decide what and who is responsible for what; where the authoritative truth of each fact lives; what has materially changed; and what requires the attention of the person who must act. Software was introduced in only one of the institution's five domains of work, and only after a recurring need was judged to have outgrown governed documents. The distinctive strength on record is **semantic and truth discipline, not software**:

- meaning is defined before it is represented, and a data model is never permitted to decide what a term means;
- authority, responsibility, representation, execution and technical custody are held apart and each is assigned by record;
- every fact has exactly one authoritative source, and every other appearance of it is a labeled representation that says whose truth it carries;
- unresolved is recorded as unresolved and absence as absence — never inferred, never defaulted, never "completed" for tidiness;
- correction is by supersession with the prior state preserved, never by erasure;
- every advance — need, requirements, meaning, architecture, construction, activation, production — is a separately authorized gate, and "technical extensibility is not authorization";
- authentic use is treated as the only arbiter of usefulness, and the defects it finds are routed back through authority rather than patched around.

### 2.2 What is already supported

Supported across both cases (see §11 for the matrix): meaning-before-representation; one authoritative source per fact with labeled representation elsewhere; truthful absence; correction by supersession; concept-specific rather than generic state; requirements/blueprint before code; bounded authorization gates; executable conformance validation with adversarial inspection; authentic-use validation exposing a different defect class than pre-use validation; separation of disposable validation from authentic operation; repository-native institutional memory; public truth discipline; self-audit before restructuring; regularization of governance over existing operation without rewriting history.

Supported in the corporate case only: multidimensional State as a governed doctrine; the executive-attention-as-exception-layer model; dependency/blocker/handoff as three independent concepts; the parent/venture representation boundary; the determinations register and evolution log as mechanisms; the "discharged, not erased" chronology practice.

Supported in the HGP case only: gold-standard-before-run experimental discipline with same-language controls; deterministic, no-AI production of records of truth; content-addressed reproducibility; the eight-stage lifecycle that "guides, never gates"; and the counter-evidence that a well-designed validation ledger is bypassed when the founder's direct authorization is faster than the ledger.

### 2.3 What remains premature

- **The diagnostic front end has never been exercised on an organization Huerta Group did not already understand.** Both cases are self-diagnosis by the founder's own functions with total access and no confidentiality boundary. The Methodology Foundation v1 §10.1 names "Detailed organizational-discovery methodology" and "Organizational assessment methodology" as undeveloped; nothing in the evidence changes that.
- No instrument exists that has been used more than once, and the three audits that came closest to being diagnostic instruments (Deliverables A/B, the Corporate Platform Alignment Audit) are not preserved.
- Nothing in the evidence establishes behaviour with more than one operator, more than one venture, more than tens of records, or any external decision-rights structure.
- No commercial category, packaging, or pricing can be supported and none is proposed (§14).

### 2.4 Is Generation One discovery sufficiently grounded to continue?

**Yes, within a stated boundary.** The evidence is sufficient to (i) state a provisional end-to-end methodology map that corrects the starting hypothesis in specific, evidenced ways (§6); (ii) specify what a first-generation Organizational Diagnostic must produce and must not prescribe (§7); and (iii) identify candidate instruments and the evidence each would need (§8). The evidence is **not** sufficient to classify any stage as established, to standardize any instrument, or to assert external applicability. The most important honest determination of this report is that Huerta Group's methodology is strongest exactly where it has been practiced (meaning, representation, truth, correction) and weakest exactly where future engagements begin (understanding an unfamiliar organization under partial access).

### 2.5 Direction changes the record preserves

The evidence includes genuine reversals after authentic use, which matter more than the successes: the Founder Office withdrew the dual-repository split Development recommended (FO-1); the constructed obligation vocabularies could not express a correction authentic use required, and a determination had to add "NOT ESTABLISHED" (`fd-0018`); the validation gate destroyed the operating register on every run until Stage 6 separated the environments; the source-transmission chain between Founder Office and Development failed five times and Development stopped each time rather than reconstruct; HGP's browser text-to-speech passed every mechanical criterion and failed acceptance because the ear could not judge the prose; HGP's Spanish pilot found recall was "zero by construction" because a validation gate rejected the findings it was measuring; and the "editorial design language" recorded as having emerged on 2026-08-09 was partially superseded by an externally produced design fourteen days later.

---

## 3. Major Institutional Lessons Already Earned

Each lesson states the problem, what was done, what result and later use showed, the evidence, the case(s), a reusability assessment, and limitations.

### L1. Define meaning before representing it; never let a schema, tool, or interface decide what a term means

- **Evidence.** OSPA S02 Principle 1: "Institutional concepts shall be defined before they are technically represented… Technical implementation shall not independently determine institutional semantics." `fd-0011`: "Do not interpret 'trigger fired' as technical implementation authorization." The Semantics Definition Package "contains questions, not answers" because "Any definition written by Development would be exactly the defect this package exists to prevent." The Corporate Operations Semantics Foundation was authored by the owning function and adopted (`fd-0012`) before any architecture resumed (`fd-0013`). ADR-0011: "This is the decision most exposed to implementation convenience." HGP wrote three constitutions and a terminology canon one week into the build, then pinned copy to the ratified canon with drift-guard tests (`lib/terminology/canon-source.ts`).
- **What use revealed.** The blueprint predicted the failure would be a single `status` column; it was not. `evo-0005`: "the semantics were protected where they were argued about, and eroded where they were assumed." HGP's terminology drifted anyway ("Workspace — Keep" in the canon while "Workshop" pervades August records).
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]` as a principle: the organization's own meaning must be established by its competent authority before any representation, and the representation is defective — never the meaning — when they conflict (FD-V2 synchronization doctrine).
- **Limitations.** The corporate case relied on a two-office structure (owning function defines; Development refuses to define) that a client organization may not have. The lesson also cuts the other way: careful semantics still missed a case (L6).

### L2. Every fact has one authoritative source; everything else is a representation that must say whose truth it carries

- **Evidence.** `GEN1-REQ-V1` §3 source-of-truth map with treatments *store directly / reference / summarize / do nothing*, and the governing rule "The platform should store directly only information for which Corporate Operations itself is the legitimate authoritative owner. It should not copy data merely to make retrieval convenient." ADR-0004 "one authoritative owner per data category"; ADR-0009 "Every 'Synchronize' cell is deliberately empty." Foundation §21: Corporate Operations "may say: Administration & Compliance has determined X… may not convert that into: Corporate Operations has independently determined X." Stage 6: "Provenance is not technical resolvability" — the resolver "declines more references than it resolves." HGP: "Files are derivable; the artifact identity is the fact"; the Candidate is "the durable authoritative publication-state record"; for pilots "the repository, not the database, is the durable record."
- **What use revealed.** The Register listed representations it could not reach (`a1084cc`); the third hop to the authoritative source "was one the Founder had to walk themselves"; HGP's PostgREST double-foreign-key hazard recurred twice, both times in read paths that rendered a true record as absent.
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]`
- **Limitations.** The mechanism (representation-owner column, resolver, standing labels) is `[MECH]`. The map itself was drawn by the owner of every source; drawing it for an organization where sources are contested is untested.

### L3. Authority ≠ responsibility ≠ representation ≠ execution ≠ custody

- **Evidence.** Corporate Venture Governance Blueprint §25.3, stated as an architectural principle; OSPA S02 §2.7 "Authority and responsibility remain materially distinct institutional relationships"; ADR-0006/0017 "Technical permissions are not institutional authority… no role name may imply an institutional office"; Foundation §14 "A handoff transfers expected operational action. It does not transfer institutional authority"; `fd-0017` "Supplying the underlying truth confers no write authority over the Headquarters representation of it"; FD-V1 §21 "Stewardship is responsibility, not authority"; Stage 4 "Presentation confers nothing." HGP: Founder Office approval separated from "standing implementation authority"; "AI-side grading informs; it does not approve"; the Design Constitution governs the interface while the Print Profile is "adopted through this program's ceremony rather than a parallel constitution."
- **What use revealed.** The runtime's attention-exit capability is granted more widely in code than the README states (corporate operations can exit an item); the FVP's designed authority chain was bypassed in HGP; all five roles in both cases resolve to one person.
- **Case(s).** `[BOTH]` (explicit doctrine in the corporate case; practiced but less articulated in HGP)
- **Reusability.** `[PROV]` The five-way separation is the single most consequential diagnostic distinction the evidence supports, because most organizational ambiguity the records describe is a conflation of two of them.
- **Limitations.** In a founder-led institution the separation is recorded but not lived; whether it survives a second person is `[INSUF]`.

### L4. Unresolved is a first-class state; absence is recorded and never inferred

- **Evidence.** Every one of OSPA S09's fourteen vocabularies carries an "…Unresolved" value and §9.31 forbids treating it "as favorable." `fd-0004` records seven approval events as deficiencies "not invented, not backfilled." `fd-0010` principle 4: "Absence from the governed repository is not evidence that an institutionally established artifact or function does not exist." Stage 5: "Five of twelve fields are absent, and all five say so." The Command View footer states how many matters were withheld "so their absence reads as a decision rather than a defect." HGP: readings "null when the provider omits it, never fabricated"; "Absence of rows for a run means 'provenance predates per-reading instrumentation' — never 'zero readings'"; "No fake precision."
- **What use revealed.** The Founder Office ↔ Development transmission chain failed five times; each time the missing source was recorded by "status, provenance, authority boundary, and relationships only." The register's `implementationReadiness` stayed `requirements_incomplete` because reclassifying it "conflates institutional acceptance with repository availability."
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]`
- **Limitations.** Costly: the same untransmitted report was recorded as a deficiency three times. The discipline requires an authority willing to accept "incomplete by design" as an outcome.

### L5. Correct by supersession; preserve the prior state; "discharged, not erased"

- **Evidence.** `fd-0013` §1, `fd-0014` §1, `fd-0017` §4: prior records "remain accurate for their own period" and are not rewritten. `fd-0016` det. 2: the requirements report's own "NOT YET AUTHORIZED" line "is not edited to agree with the later authorization." `fd-0018`: NOT ESTABLISHED "corrects Headquarters representation. It does not retroactively alter authoritative source history"; supersession "does not cascade." The runtime: Records "corrected by supersession, never rewritten"; the superseded trade-name Record "still carries its own original, now-false admission note, as the record of what Headquarters believed." HGP: four correction mechanisms "never one generic 'edited' state"; "Set-aside is the record; nothing is deleted"; "append new migrations, never edit applied ones."
- **What use revealed.** The pattern held under real correction (the trade-name obligations; the two Generation One conditions that "outlived the decision creating them").
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]`
- **Limitations.** Strength varies by object even inside one system (follow-up dispositions carry no time or basis; "an asymmetry reported rather than smoothed over"). The pattern presumes the organization will tolerate visible historical error.

### L6. Generic status models fail; state is multidimensional and concept-specific, and lifecycle exists only where a transition carries institutional meaning

- **Evidence.** OSPA S09 §9.2: "must not collapse these dimensions into one overloaded status field"; §9.28 no mandatory state machine. Methodology Foundation §5: "authority, maturity, disclosure, and implementation readiness are separate dimensions. They must not be collapsed into one status field." The same rule in the IP and Education foundations, the venture lifecycle (eight dimensions), and the capability registry. Foundation §24 and §31 test 10; ADR-0011; the runtime refuses any dimension named `status`. HGP: the five-status enum became an eight-stage lifecycle that "guides; it never gates"; "Published is not a state… derived evidence observation"; channel state "derived from the event history — never stored as an editable status"; five "held distinct" relations ("Adopted ≠ Implemented," "Implemented ≠ Resolved").
- **What use revealed.** Two counter-findings. First, the Renewal and Deadline vocabularies described an obligation *progressing* and could not say one was *never established*; a determination had to add the value. Second, the capability registry's own carefully separated enums went stale (four "stale but not false" values) because the vocabulary had no current-state values and "no vocabulary may be modified without authority."
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]` for the principle; every specific dimension set is `[MECH]` or case-specific.
- **Limitations.** Multidimensionality does not prevent staleness or missing values; it makes them visible. The cost is real ("Three structures where a conventional design would use one").

### L7. Executive attention is an exception layer, not an activity feed; quiet is a legitimate reading

- **Evidence.** `GEN1-REQ-V1` §2.2: "information discovery and attention management are currently coupled. They should be separated"; §5: "Founder Attention should be an exception queue, not an activity feed." Foundation §9–10 and Example 2 ("This prevents the platform from becoming an activity feed"). `GEN2-REQ-V1` §7: "A function with no meaningful Headquarters-level issue should be allowed to appear quiet. Silence can itself indicate healthy operation." Stage 4 distinguished three silences. Stage 1: "an empty queue is a legitimate condition, not a missing feature." HGP analog: "More findings is not success"; the Constitution Review audit found "The architecture did not break under real volume — the editorial economy did."
- **What use revealed.** Attention is asserted, never derived; the first construction's default made every standing item "falsely claim the Founder had acted."
- **Case(s).** `[HG]` strong; `[HGP]` analogous only.
- **Reusability.** `[PROV]` as a principle (consequentiality over completeness; nothing re-alerts because time passed). The Founder Attention entity with ten reasons, seven exit grounds and three priority fields is `[MECH]`.
- **Limitations.** Tested with two standing items and one reader.

### L8. Dependency, blocker and handoff are three things; ending any one changes nothing else

- **Evidence.** Foundation §11–15: "Every blocker involves a blocking condition or dependency. Not every dependency is a blocker"; "Acknowledgment alone is not necessarily completion." ADR-0012: no blocking field on Dependency; no authority field on Handoff. Runtime: blocking is a time-bounded assertion; "Ending a blocking assertion does NOT complete the Record"; retiring a dependency leaves a blocker that named it standing.
- **What use revealed.** A dependency "could be retired by the schema and by nothing else — no action, no control" until authentic use found it.
- **Case(s).** `[HG]`; HGP practices the analogous "held distinct" discipline on editorial objects but has no dependency/handoff model.
- **Reusability.** `[PROV]` for the distinction as diagnostic vocabulary — the `GEN1-REQ-V1` §1.2 handoff questions ("what was handed off; to whom; why; whether action is expected; current disposition; whether another function is waiting on the result; and whether escalation is required") are reusable questions.
- **Limitations.** One case; one operator.

### L9. Diagnose and establish requirements before software; build only when a recurring need has outgrown documents; keep work manual deliberately while learning

- **Evidence.** The `operations-systems` trigger had two limbs — a recurring workflow exists *and* it has outgrown governed documents — and stayed "none identified yet" for weeks while documents served. Vision Foundation §7: "The best solution may be advanced software, a simple workflow, clearer documentation, a revised responsibility structure, or no new technology at all." `GEN1-REQ-V1` §13: fifteen workflows that "should remain external/manual"; "Manual curation is acceptable in Generation One where it helps Huerta Group learn what information actually deserves institutionalization"; §18.4 "Automating immature workflows freezes assumptions before Huerta Group understands them." The HQ operating procedure §13: "A manual step that proves genuinely burdensome is evidence for a future integration decision." The method, IP and education "platforms" authorize "no runtime application." HGP: every Phase 1 blueprint opens "Blueprint only — no code, no migrations"; "The platform does not solve problems before they exist"; the relationship seam and CRM were never built because authentic use never required them.
- **What use revealed.** Counter-evidence in both directions. HGP built first (eight deploy-fix commits on day one) and governed later; the corporate case produced three document-only foundations with zero operational load (§13.2).
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]`
- **Limitations.** The trigger's second limb was ultimately a Founder judgement "resting on the Founder's own operating experience… neither of which is fully legible in the repository." An external test of "outgrown" does not yet exist.

### L10. Bound every advance with a separate authorization: need ≠ requirements ≠ meaning ≠ architecture ≠ construction ≠ activation ≠ production

- **Evidence.** `fd-0010` records four independent status dimensions for one capability (requirements discovery accepted; concept accepted subject to readiness; architecture paused; implementation not authorized). `fd-0013` passes a ten-condition gate for architecture only; `fd-0014` authorizes construction and withholds production; `fd-0015` authorizes local authentic use and declines expenditure; `fd-0016` authorizes Stage 1 and stops for review. "Successful pre-production validation is expressly not implicit production approval." `GEN1-REQ-V1` §21: a design that expands scope "should return to Founder Office for authorization rather than treating extensibility as permission." HGP: Phase 1 blueprint → Founder Office approval → Phase 2 → as-built → migration baseline, per program.
- **What use revealed.** Gates were enforced under pressure: architecture resumption "stopped at the Phase A gate" when sources were missing; Gen Two implementation authorization arrived before its requirements twice and Development stopped both times.
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]`
- **Limitations.** Requires an authority willing to issue many small determinations (fourteen instruments in seventeen days). The elapsed time between gates was sometimes hours; the discipline is in the separation of acts, not in deliberation time.

### L11. Prove conformance; do not assert it — and expect the predicted failures not to be the real ones

- **Evidence.** ADR-0019: "Acceptance is semantic, not functional"; the ten §31 tests as executable cases; "Rules that live only in prose erode." Adversarial inspection found eleven defects in the first construction and "all eleven were repaired by changing the architecture" — a false default asserting a Founder action, an unenforced vocabulary, an update policy that permitted overwrite. Stage 1 found a gate that "trusted an exit code instead of the database." HGP production verification found trigger-versus-cascade, join, and RLS defects in nearly every publication program; "verify structural edits by reading the result, not the tool's exit code"; "String-edit tooling burned us twice."
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]` — inspection by someone who did not build it, against the meaning not the function, and checks that test the property rather than a proxy.
- **Limitations.** "some invariants (freshness responsibility, materiality judgement) are not mechanically checkable — those are named as human responsibilities rather than pretended into tests."

### L12. Authentic use is the only validator of usefulness, and it finds a different class of defect

- **Evidence.** Pre-use validation found semantic-collapse defects; authentic use found stale obligations no vocabulary could dispose, a Register that could not reach what it listed, a dependency with no way to retire it, a validation gate that destroyed the operating register, a `select *` view that silently dropped new columns (found twice). Stage 6's recommendation: "The most useful next step is not more construction but authentic use… the only input that can answer whether the Command layer is actually useful or merely correct." HGP: the Constitution Review audit after "two real cycles"; browser TTS "read words; they do not read prose"; Cycle 001 amendments to Reading Copy and editorial-loop continuity; "The pattern case predicted at blueprint time arrived immediately."
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]`
- **Limitations.** "Single-user validation is weak validation." HGP's validation ledger recorded one engineering-found observation while real corrections bypassed it (L18).

### L13. Validation must not consume the operating environment

- **Evidence.** Stage 6: "routine validation destroyed the Founder's operating environment as a matter of course"; the fix names environments, makes destruction opt-in by name, and fingerprints the authentic register before and after every run — "fails if anything moved." Stage 2 restored the register after recording a validation review "because that validation review was mine and not the Founder's. Leaving it would have consumed the Founder's boundary." `fd-0018` §6: "routine validation must not alter authentic credentials." HGP: pilots graded on "independent identical copies" because a second run on the same book would see the first run's findings; pilot data permanently deleted with stable IDs recorded; the local review harness "refuses to start if 3210 is occupied rather than moving," after a port drift once led to "typing the review credentials into another application's sign-in page."
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]` — separate disposable validation from authentic operation the moment the operating record becomes irreplaceable, and prove non-interference rather than promise it.
- **Limitations.** Learned late in both cases; every Generation Two stage until Stage 6 "quietly destroyed the Founder's password to run tests that never needed it."

### L14. Institutional memory must be repository-native; conversation, contributor memory and transmission are non-authoritative and unreliable

- **Evidence.** `fd-0002` D-6: "Institutionally significant governance shall become repository-native. Repository execution shall not depend upon AI memory." `GEN1-REQ-V1` §2.6: "Conversations contain substantial useful operating context but should not automatically become institutional truth." The OSPA loss and the recovered set "existing on one working machine… and nowhere in version control" — "a compounding permanent-loss risk." Five failed source transmissions recorded rather than worked around. Canonical-source preservation §7: never reconstruct "from summaries, public content, memory, or derived evidence." HGP Engineering Constitution §13: "If it mattered enough to decide, it matters enough to commit."
- **What use revealed.** HGP cites Founder Office directives that are not in its repository, violating its own §13. This office's own memory was stale on two facts.
- **Case(s).** `[BOTH]` (with HGP partially violating its own rule)
- **Reusability.** `[PROV]`
- **Limitations.** The cause of the OSPA loss is unrecorded; the lesson is enacted, not derived from a recorded post-mortem.

### L15. Truth discipline on every surface: current truth distinguished from future direction; representation never creates standing

- **Evidence.** Vision Foundation Guardrail 8; `fd-0006` (public copy corrected to remove implied portfolio language and separate envisioned from operating capability — and the audit found the institution "has matured faster than its public representation," so alignment ran both ways); FD-V4 maturity ceiling "Chartered does not mean launched. Internally operational does not mean commercially available"; Blueprint §25.1 "Representation records; it never creates." HGP: "Public Capability Truth Alignment" commit; legal pages with `[[bracketed]]` placeholders for every unestablished fact; README's plain list of what does not exist.
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]`
- **Limitations.** None evidenced; the rule was practiced consistently.

### L16. Governance one layer ahead — and evidence that this was exceeded

- **Evidence for the principle.** FD-V11: "Governance should evolve one organizational layer ahead of institutional growth, but no further." Blueprint §8: "Governance ceremony scales with consequence." OSPA S02 §2.5: "Governance exists to preserve institutional coherence rather than administrative control." HGP: "never generalize the data model on speculation about level three"; "revisit only when a third level actually exists."
- **Evidence it was exceeded.** The Education foundation (≈9,500 words, eleven derived standards, ~50 prohibited implementations, ~80 unresolved matters) governs zero programs, zero competency records, zero assessments; the IP foundation defines seventeen asset classes and nine readiness axes for zero admitted assets; ADR-0006 defined nine technical user classes when no user existed; the capability registry maps eighteen capabilities of which most are conceptual. Each foundation closes "READY FOR TECHNICAL IMPLEMENTATION," where implementation means a registry, a schema and a validator locking the record count — "documentation of the documentation."
- **Case(s).** `[BOTH]` — HGP practiced restraint; the corporate case exceeded it in domains with no operational load.
- **Reusability.** `[PROV]` as a *failure mode to test for*: governance depth should be measured against operational load, not against the completeness of the doctrine.
- **Limitations.** The foundations are explicit about their own incompleteness and forbid reading absence as approval; the excess is in volume, not in overreach of authority.

### L17. Audit before restructuring: self-diagnosis preceded every major intervention

- **Evidence.** Repository Foundation Project: Repository Audit (A) → Governance Mechanism Audit (B) → Proposed Architecture (C) → Migration Plan (D) → execution; the audits found "authority classes physically mixed; no staging semantics" and "Approval provenance was conversation-dependent." Corporate Platform Alignment Audit → truth alignment → venture governance. `GEN1-REQ-V1` is a diagnosis (workflow inventory, six fragmentation problems, source-of-truth map, information requirements, non-goals, overbuilding risks, unresolved questions) that constrained the software before any design. HGP: "Constitution Review system audit after two real cycles"; the refinement review; the readiness audit; the register probe and pre-change diagnosis "committed BEFORE any correction is implemented."
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]` — but the instruments are not preserved (§1.5, items 4–5), so what is reusable is the *shape* (audit → determinations → architecture → bounded execution), not a template.
- **Limitations.** All self-audits.

### L18. Regularization: governance can be applied over existing operation without rewriting history — and operation may legitimately precede governance

- **Evidence.** FD-V1 admitted HGP "as a regularization… using retrospective evidence honestly marked as such"; `fd-0007`: "Governance records authority; it does not create history." HGP's own vocabulary shows the order: "Founder Office" first appears in its records on 2026-08-09, the Founder Validation Program on 2026-08-11, after most of the product existed; its constitutions still read "proposed, awaiting approval" while treated as law.
- **Case(s).** `[BOTH]`
- **Reusability.** `[PROV]` — this is a necessary corrective to any reading of "governance before software" as a fixed order. The methodology must accommodate an organization arriving mid-operation.
- **Limitations.** Regularization in HGP was applied by the same person who had authorized the ungoverned operation.

### L19. Founder-led compression: the records separate roles that one person does not

- **Evidence.** Two accounts "deliberately, because the access model keeps two roles apart… In practice the Founder wears both hats." Venture steward = the Founder. HGP: author, imprint staff, Founder Office and human sign-off editor "resolve to one person"; acceptance criteria "A real author (you)… A real book (yours)"; the FVP's evidence scale climbs from "Repeated by Founder" to "Independently Corroborated" — an admission that current evidence is single-founder.
- **Case(s).** `[BOTH]`
- **Reusability.** **Not reusable.** This is the boundary of the evidence, and it is stated here so that no pattern above is read as validated for a multi-person organization.

---

## 4. Reusable Patterns Presently Supported by Evidence

Patterns are stated at the level of principle or method, with the evidence class and maturity. Mechanisms that implement them are listed separately in §12. "Supported" means observed in a case; it does not mean validated externally.

### 4.1 Understanding and diagnosis

| # | Pattern | Class | Maturity |
| --- | --- | --- | --- |
| P1 | **Establish the evidentiary baseline first**: record what was inspected, what could not be accessed, and what is unavailable — and never fill gaps by inference. (`fd-0004`; canonical-source preservation §3, §6–7; HGP migration-baseline verification log) | `[BOTH]` | provisional |
| P2 | **Audit before restructuring**: an inventory of the existing state and its governance mechanisms precedes any architecture. (Deliverables A/B → C/D; Website Phase 1 Inventory; HGP refinement review and audits) | `[BOTH]` | provisional (instruments unpreserved) |
| P3 | **Name the problem as fragmentation, not absence**: "The principal operational problem is not absence of information. The problem is fragmentation of decision-useful company state." (`GEN1-REQ-V1`) | `[HG]` | provisional |
| P4 | **Inventory recurring workflows, handoffs, dependencies and time-bound obligations as first-class diagnostic objects** (`GEN1-REQ-V1` §1–§2; trigger reassessment's counts) | `[HG]` | provisional |
| P5 | **Draw the source-of-truth map with an explicit treatment per domain** — store directly only what the new layer legitimately owns; reference, summarize, or do nothing for the rest; conversation is never authoritative by existence. (`GEN1-REQ-V1` §3; ADR-0009; HGP "repository, not database, is the durable record") | `[BOTH]` | provisional |
| P6 | **List what must *not* enter a system, what remains manual, the non-goals and the overbuilding risks, as diagnostic outputs** (`GEN1-REQ-V1` §12, §13, §17, §18; `GEN2-REQ-V1` §30, §33; HGP "Not proposed" lists) | `[BOTH]` | provisional |
| P7 | **Record the questions reserved to the client's own authority rather than answering them** (`GEN1-REQ-V1` §19; Foundation §32; HGP "open verdicts… decide when it first matters") | `[BOTH]` | provisional |

### 4.2 Meaning and authority

| # | Pattern | Class | Maturity |
| --- | --- | --- | --- |
| P8 | **Meaning before representation** (L1) | `[BOTH]` | provisional |
| P9 | **Authority ≠ responsibility ≠ representation ≠ execution ≠ custody**, each assigned by record, none inferred from access, participation, naming or practice (Blueprint §9 anti-inference rules; L3) | `[BOTH]` | provisional |
| P10 | **Decompose "ownership" into reserved / delegated / unresolved / configurable**, and keep approval authority configurable pending the organization's own decision-rights architecture (Methodology Foundation §6.2; Blueprint §8; FD-V1 §7–§8, §23) | `[HG]` | provisional |
| P11 | **Two governance planes**: institutional standing is singular; operational governance may be distributed; crossing planes requires an explicit institutional act (FD-V2) | `[HG]` | provisional |
| P12 | **A representation records; it never creates** standing, authority, readiness or history (Blueprint §25.1; FD-V4 §16; ADR-0001 "metadata is defective" rule) | `[BOTH]` | provisional |
| P13 | **Regularize over existing operation without rewriting history** (L18) | `[BOTH]` | provisional |

### 4.3 Representation and truth

| # | Pattern | Class | Maturity |
| --- | --- | --- | --- |
| P14 | **One authoritative source per fact; every other appearance is a labeled representation** (L2) | `[BOTH]` | provisional |
| P15 | **Provenance is required at creation; a fact without it is invalid, not incomplete** (ADR-0015; HGP per-reading provenance, digest-anchored design sources) | `[BOTH]` | provisional |
| P16 | **Truthful absence over inferred completeness** (L4) | `[BOTH]` | provisional |
| P17 | **State is a set of independently sourced dimensions; no universal status; lifecycle only where the transition carries meaning** (L6) | `[BOTH]` | provisional |
| P18 | **Distinguish when something occurred from when the organization learned of it; bound review by the latter and never manufacture the former** (`fd-0014` §3; ADR-0016; HGP "effective-time precision markers") | `[HG]` strong, `[HGP]` analogous | provisional |
| P19 | **Attention is an exception layer; quiet is a legitimate reading** (L7) | `[HG]` | provisional |
| P20 | **Dependency ≠ blocker ≠ handoff**; a handoff moves expected action, never authority (L8) | `[HG]` | provisional |
| P21 | **Represent doubt**: confirmation unresolved / known stale are representable; freshness is a judgement, not a timer (ADR-0015; HQ procedure §11) | `[HG]` | provisional |
| P22 | **Summarize the subordinate unit; do not reproduce it**; absent facts stay absent and the page says who is responsible for supplying them (`GEN1-REQ-V1` §6; `fd-0017`; Stage 5/6) | `[HG]` | provisional |
| P23 | **Public truth discipline**: current vs planned; representation precedes linking; the ceiling is the subordinate unit's own honesty (L15; FD-V4 §10, §13) | `[BOTH]` | provisional |

### 4.4 Design and implementation

| # | Pattern | Class | Maturity |
| --- | --- | --- | --- |
| P24 | **Technology only when a recurring need has outgrown documents; the need determination is separate from build authorization** (L9, L10) | `[BOTH]` | provisional |
| P25 | **Bounded authorization gates between every advance; extensibility is not authorization** (L10) | `[BOTH]` | provisional |
| P26 | **Smallest coherent capability first; preserve seams conceptually, implement none** (`GEN1-REQ-V1` §16; blueprint §36; HGP "rule of two", "Revisit only when a second real human needs access") | `[BOTH]` | provisional |
| P27 | **Isolation by default; sharing by explicit grant; a shared service only on the second real consumer** (ADR-0003; Blueprint §12; FD-V1 §13) | `[HG]` | provisional |
| P28 | **Write the blueprint, then the code; record blueprint-vs-as-built deviations with reasons** (HGP program triplets; Broadsheet deviation table with one-of-four reasons; corporate blueprint → ADRs → construction) | `[BOTH]` | provisional |
| P29 | **Deterministic records of truth; AI holds no authority over any record of truth or approval act** (HGP Candidate/Release/Readiness Report; Vision §8; Foundation: no automated attention; `GEN2-REQ-V1` §25 "AI should consume a trustworthy model later") | `[BOTH]` | provisional |
| P30 | **Decision rules can unblock work when a governing document is missing, provided decisions are recorded lightly and never elevated** (`fd-0005`; DDR/GR practice) | `[HG]` | provisional |
| P31 | **Keep exploration artifacts out of the gates that judge the product** (passover evaluation §22; HGP design source "Not runtime code") | `[BOTH]` | provisional |

### 4.5 Validation, operation and correction

| # | Pattern | Class | Maturity |
| --- | --- | --- | --- |
| P32 | **Conformance is proven, not asserted; acceptance is semantic** (L11) | `[BOTH]` | provisional |
| P33 | **Independent inspection against meaning, not function; expect quiet defects** (L11) | `[BOTH]` | provisional |
| P34 | **Validate with authentic matters, never synthetic fixtures — and never author state into the operating record to populate a surface** (ADR-0019; Stage 1 §18; Stage 2 §17) | `[HG]` | provisional |
| P35 | **Gold standard and decision matrix committed before any run; one variable at a time; same-language control; grade on independent copies; human sign-off** (HGP globalization program) | `[HGP]` | provisional |
| P36 | **Authentic use is the arbiter of usefulness and reveals a different defect class** (L12) | `[BOTH]` | provisional |
| P37 | **Separate disposable validation from authentic operation and prove non-interference** (L13) | `[BOTH]` | provisional |
| P38 | **When a vocabulary cannot express a true correction: do not overload a value; pin the gap with a check; return it to authority; give the new value its own provenance and a guard against spread** (`db7ea3e`, `fd-0018`, `3c546c1`) | `[HG]` | provisional |
| P39 | **Correction by supersession; no automatic cascade; no new attention generated by a correction** (L5; `fd-0018` §3, §5) | `[HG]` strong, `[HGP]` analogous | provisional |
| P40 | **A backup is a hypothesis until restored into an isolated target and re-tested for its refusals** (Production Readiness §7–8; HGP baseline verification) | `[BOTH]` | provisional |

### 4.6 Learning and record

| # | Pattern | Class | Maturity |
| --- | --- | --- | --- |
| P41 | **Repository-native institutional memory; contributor memory and conversation never authoritative** (L14) | `[BOTH]` | provisional |
| P42 | **Preserve the input state of a decision; append later determinations rather than editing earlier records; "discharged, not erased"** (L5) | `[HG]` | provisional |
| P43 | **Deficiencies and conflicts between instruments are recorded and dispositioned, never chosen between silently** (`fd-0010` Def. 1 → `fd-0011`) | `[HG]` | provisional |
| P44 | **Every completion report carries starting and ending SHAs, what was not done, remaining limitations, and the exact decisions returned to authority** (Bounded standard; all Generation reports; HGP as-builts) | `[BOTH]` | provisional |
| P45 | **Learning feeds the next generation's requirements, explicitly and with evidence categories named in advance** (`GEN2-REQ-V1` §2.3, §32) | `[HG]` | provisional |

---

## 5. Huerta Group / HGP-Specific Patterns Not Yet Generalizable

These are real, evidenced, and in several cases essential to the cases — and none should be carried into another organization as a default.

1. **The constitutional architecture and the room model.** Constitution → Vision Foundation → foundations → standards → task instructions; Founder Office as apex authority "pending constitutional decision-rights architecture"; Methodology, IP, Education, Design, Branding, Corporate Headquarters, Platform & Systems Development as rooms. This is Huerta Group's identity expressed as structure. The Vision Foundation itself forbids inferring "broader strategic authority from an immediate task"; the same restraint applies outward.
2. **The Corporate Command Center and its concepts** — Operational Instance/Record, the Founder Attention entity with its ten reasons and seven exit grounds, Since Last Review bounded by `recorded_at`, the venture snapshot, the three-priority-field model, the five access classes. Every one is bounded by its own records to Generation One: ADR-0016 "establishes no universal Huerta Group temporal doctrine, and nothing here may be cited as one"; `fd-0018` NOT ESTABLISHED "is expressly not a generic cancellation state."
3. **The venture model** (FD-V1…FD-V11): admission by determination, name grants, per-dimension venture lifecycle, representation-before-linking. Evidence is one venture. `GEN2-REQ-V1` §34.3 itself defers a standardized venture vocabulary "not yet necessary with HGP the only chartered venture."
4. **The repository as governance record** — manifest, schemas, registries, validators locking exact approved sets, the CI gate, the workbench, canonical-source preservation, the determinations register, the evolution log. The corpus is explicit that "Repository Standards govern this repository; they are not standards governing Huerta Group as an institution generally," and that "The institution is not the repository." These are mechanisms proportionate to a documentation-centric, single-repository, founder-and-AI operating model.
5. **The Founder Office ↔ Development transmission model** — XML execution packages, verbatim preservation with digests, model-neutral bounded-loop standards with a 30-minute budget. An artifact of how this institution works with an AI development office.
6. **The Author Operating System and the publishing chain** — memory hierarchy, editorial findings/deliberation/judgment, Candidate/Artifact/Release/Edition, ISBN provenance, deterministic export. The package's non-assumption stands: the Author Operating System is not a model for unrelated organizational systems. What HGP contributes is disciplines (P28, P29, P35, P40), not its objects.
7. **The Founder Validation Program as designed.** Its structure (closed classes, qualitative strength, theme-before-decision) is generic; its recorded practice (one engineering-found observation; corrections bypassing it) means it is evidence of a design, not of a working method.
8. **The specific vocabularies**: OSPA S09's fourteen dimensions and ~130 values; the eight venture dimensions; the ten readiness axes of the education foundation; the nine access-control principles; the eleven materiality limbs. Each is a Huerta Group determination, several pre-need.
9. **The local / pre-production operating posture** — Docker on the Founder's machine, encrypted off-machine backup to a private repository, passphrase as part of the recovery path. A capital-allocation outcome (`fd-0015`), not a pattern.
10. **Compression of roles into one person** (L19), including the fact that most "escalations" were the Founder returning questions to the Founder.

---

## 6. Provisional End-to-End Methodology Map

### 6.1 Testing the starting hypothesis against the evidence

The starting hypothesis was **Understand → Diagnose → Architect → Implement → Operate → Validate → Learn/Evolve**. Tested against the evidence, seven findings follow.

**F1 — Existing authority already holds a progression; the provisional sequence must be reconciled with it, not replace it.** `[EIA]` Methodology Foundation v1 §3 (approved principle-level progression): Understand the organization → Define the problem or intended outcome → Examine systems and evidence → Design improvement → Support implementation → Verify results → Build sustainable capability → Preserve learning — "authoritative as a governing structure… not approved as a branded, numbered, proprietary phase model." Vision Foundation §9 (intended order for software) and §11 (eighteen-step consulting lifecycle, "not a rigid sequence"). Any revised map is a *refinement proposal* under Methodology Foundation §6.4 (substantive refinements "require a new version and approval") — it cannot be adopted by this report.

**F2 — The evidence shows a gate the hypothesis lacks: establishing meaning and authority between diagnosis and design.** The single most consequential event in the operations arc is `fd-0011`: "A fired trigger and a paused architecture are consistent, not contradictory: the institution now agrees it needs this capability, and does not yet have the operational semantics the capability would encode." Requirements were accepted; architecture stayed paused until the owning function defined meaning and the Founder Office adopted it. This is not a sub-step of "Architect"; it is a separately authorized stage with its own outputs (a semantics foundation, an authority map, a source-of-truth map) and its own gate.

**F3 — "Architect" presumes a technical outcome the evidence does not support as the default.** Of the five institutional domains with governed work, only Operations produced software. The Repository Foundation produced structure, standards and validators; venture governance produced a blueprint, a charter and a registry; truth alignment produced copy corrections; design produced decision records and a reference implementation. Methodology Foundation §3.4: "Improvement design may involve organizational, operational, technological, informational, managerial, or capability-related changes." The stage should be **Design**, with the technology-worthiness determination inside it, and "Architect" reserved for the technical sub-case.

**F4 — Validation occurs twice and finds different things.** Pre-use validation (adversarial inspection, executable semantic tests, production verification) found defects of semantic collapse and enforcement; authentic use found defects of representation fidelity, disposition vocabulary, navigation reachability, and environment contamination. Collapsing both into one "Validate" stage after "Operate" misplaces the first; treating the first as sufficient misses the second. The corrected map places **Verify** inside construction and **Validate in Use & Correct** after operation.

**F5 — "Correct & Preserve" is a distinct, evidenced activity.** The three authentic-use correction reports and `fd-0018` show correction as a governed act with its own semantics (diagnose whether the gap is technical, interface, or semantic; pin it; return it; dispose with basis; supersede without cascade; generate no new attention; preserve the review boundary). It belongs with validation-in-use, not inside "Operate."

**F6 — The sequence is a cycle, and the order of entry is not fixed.** `GEN2-REQ-V1` §2.3 derives Generation Two's requirements from Generation One's authentic use ("Generation One use now creates an executive-navigation problem"). HGP entered at Construct, was governed later (L18), and its authentic use drove architecture ("Validation preceded and drove architecture rather than following it," per its own records — the Spanish pilot found unapplied migrations; the diagnosis found a validation gate zeroing recall). The map must permit **regularization** — entering mid-cycle and back-filling meaning and authority without rewriting history.

**F7 — Bounded authorization gates and record disciplines are cross-cutting, not stages.** They govern every transition (L10, L4, L5, L14, L15). Representing them as a stage would hide that they operate continuously.

**Disposition of the hypothesis.** Retained in substance; renamed and extended as follows. Nothing here is ratified terminology.

### 6.2 Revised provisional map

**Cross-cutting disciplines (apply at every stage):** evidence and provenance recorded, unavailable material recorded as unavailable; one authoritative source per fact; representation records and never creates; truthful current-vs-planned distinction on every surface; correction by supersession; proportionality ("one layer ahead"); and a bounded authorization gate at every transition, where each advance is a separate act and "extensibility is not authorization."

```
Understand → Diagnose → Establish Meaning & Authority → Design (Architect where technical)
   → Construct & Verify → Operate Authentically → Validate in Use & Correct → Learn & Evolve
                                                                                   ↺ (feeds the next generation's Understand/Diagnose)
Regularization entry: an organization already operating enters at Operate and back-fills
Understand → Diagnose → Meaning & Authority without rewriting history.
```

### 6.3 Stage specifications

Each stage is specified with the thirteen fields the package requires. Maturity uses the Methodology Foundation §5.1 vocabulary in lower case: *established* (none), *provisional* (supported by both cases, with stated limits), *hypothesis* (supported by one case or by doctrine only), *insufficient evidence*.

#### Stage 1 — Understand

- **Purpose.** Establish who the organization is, what it is obligated to do, and by what principles it acts — before any change is designed; and establish the evidentiary baseline.
- **Primary questions.** What does the organization exist to do? What does it believe it produces, enables, or protects? What is its stated identity and what does its operation show? What authorities exist, formally and informally? What evidence exists, where, and what cannot be accessed?
- **Required inputs.** Whatever constitutional, strategic, or identity records exist (or the record that none do); access boundaries; confidentiality constraints (Methodology Foundation §7.5).
- **Activities / methods.** Read governing records before consequential decisions (the AGENTS.md rule generalized); record the baseline (what was inspected, at what state, what is unavailable); inventory the organization's own vocabulary without replacing it; identify the apex authority and the decision-rights posture, including "unresolved."
- **Expected outputs.** Evidentiary baseline and limitations register; identity-of-record statement (or explicit absence); authority posture (who can decide, provisional); vocabulary inventory.
- **Decision authority required.** The client's own authority to grant access and to confirm what its records of identity are. Huerta Group holds no authority here.
- **Evidence required before advancement.** The baseline is recorded; unavailable evidence is listed, not inferred; the identity-of-record is either sourced or recorded absent.
- **Candidate instruments.** Purpose/identity interview guide (`[HYP]`); evidence and provenance register (`[PROV]`, modeled on `fd-0004` and the Stage 6 source classification).
- **Failure modes.** Inferring purpose from public copy (the corpus forbids this for itself: EWDFv1 §17.7; Methodology Foundation §9.3 "Methodological content reconstructed from public website language"); mistaking the founder's account for the organization's record; treating absence of a record as absence of the fact (`fd-0010` principle 4).
- **What must not be assumed.** That the organization has or needs a constitution; that its terminology should become Huerta Group's; that its stated purpose matches its operation.
- **Evidence basis.** Vision Foundation §1–§4, §16, §18 `[EIA]`; the Constitution's three questions `[EIA]`; `fd-0006` (identity had outrun representation) `[HG]`; HGP constitutions and terminology canon `[HGP]`; `fd-0004` and `fd-0013` baseline discipline `[HG]`.
- **Maturity.** *hypothesis* for an unfamiliar organization; the self-application is provisional.

#### Stage 2 — Diagnose

- **Purpose.** Define the problem before accepting a requested solution; locate friction, fragmentation, unowned responsibility, contested truth, and memory risk; determine what is understood well enough to change.
- **Primary questions.** See §7 (the eleven discovery domains).
- **Required inputs.** Stage 1 outputs; access to the people who operate the recurring workflows; the organization's systems and records as they are.
- **Activities / methods.** Inventory recurring workflows, decisions, handoffs, dependencies and time-bound obligations; map sources of truth with a treatment per domain; inventory friction (state reconstruction, attention reconstruction, dependency invisibility, temporal fragmentation, change detection, context-without-authority — the six named in `GEN1-REQ-V1` §2); identify governance gaps and excesses; identify knowledge concentrated in individuals; apply the technology-worthiness test; list what must not be built and what should stay manual; list questions reserved to the client's authority.
- **Expected outputs.** The minimum diagnostic outputs of §7.10.
- **Decision authority required.** The client's authority to confirm the diagnosis as its own (Methodology Foundation §3.2: "A requested solution should not be accepted automatically as an accurate definition of the underlying problem"). Huerta Group's Methodology room for the method used.
- **Evidence required before advancement.** Every material diagnostic claim traces to observed evidence or is labeled interpretation; the source-of-truth map is confirmed by the owners of the sources; unresolved questions are recorded, not resolved by Huerta Group.
- **Candidate instruments.** See §8 — source-of-truth inventory, authority and decision-rights map, function/responsibility map, workflow and handoff inventory, friction inventory, technology-worthiness test, memory-risk assessment.
- **Failure modes.** Prescribing during diagnosis; drawing the source-of-truth map from the new system's convenience; treating a dashboard as the answer to "executive visibility" (`GEN1-REQ-V1` §18.2 "Dashboard theater"); mistaking activity for value creation.
- **What must not be assumed.** That the problem is absence of information rather than fragmentation of it; that every organization needs a command center, a venture model, or Huerta Group's governance depth; that software is required.
- **Evidence basis.** `GEN1-REQ-V1` as the worked example `[HG]`; the three audits (unpreserved) `[HG]`; HGP audits and diagnoses `[HGP]`; Methodology Foundation §3.2–3.3 `[EIA]`.
- **Maturity.** *provisional* as self-diagnosis; *hypothesis* for an unfamiliar organization. This is the stage the next bounded work should develop (§16).

#### Stage 3 — Establish Meaning & Authority

- **Purpose.** Before any representation is designed, define what the organization's operational concepts mean, who owns each fact's truth, who is responsible for its representation, and who may decide what — with the client's own authority adopting the result.
- **Primary questions.** What does each load-bearing term mean, and what must it remain distinct from? Which facts are owned where? What is reserved, delegated, unresolved, configurable? What lifecycle transitions carry institutional meaning, and which concepts must not share one? What is the exception layer for the person who must act, and what may never enter it?
- **Required inputs.** Diagnostic outputs; the client's existing doctrine wherever it exists ("concepts already governed elsewhere should retain their established meanings," Foundation §2).
- **Activities / methods.** Semantic-gap inventory (grounded / other authority / requirement-without-semantics / out of scope / decision required — the A–E scheme); a questions-only definition handoff to the owning function; worked examples and semantic tests that must remain answerable (Foundation §30–§31); an authority map with anti-inference rules; a source-of-truth matrix with treatments.
- **Expected outputs.** A meaning-and-authority record adopted by the client's competent authority as *its* doctrine; the semantic tests; the reserved questions; the non-goals.
- **Decision authority required.** The client's. Huerta Group may draft questions and candidate distinctions; it may not supply the organization's meaning by invention (`fd-0010` principle 6).
- **Evidence required before advancement.** The semantic tests survive concrete examples "without ambiguity"; the authority map names an owner or an explicit "unresolved" for every fact class; the client has adopted the record as new prospective doctrine, distinguishable from anything recovered or pre-existing (Foundation §3).
- **Candidate instruments.** Semantic-gap inventory (`[PROV]`); definition package template (`[PROV]`); authority and decision-rights map (`[PROV]`); organizational-state (multidimensional) assessment (`[HYP]`).
- **Failure modes.** Development or the consultant defining meaning; a generic status or lifecycle adopted "for implementation convenience"; the exception layer becoming an inbox; representation quietly becoming a competing source of truth; over-defining ahead of need (L16).
- **What must not be assumed.** That Huerta Group's concept set (Operational Record, Founder Attention, Material Change) is the client's; that a database should replace the client's authoritative systems; that the client needs a universal state model.
- **Evidence basis.** OSPA S01–S04, S09, S10 `[EIA]`; Semantics Foundation and its adoption `[HG]`; definition package, gap inventory `[HG]`; HGP constitutions and terminology ratification per capability `[HGP]`; Blueprint §9–§10 authority/responsibility model `[HG]`.
- **Maturity.** *provisional*. This is the best-evidenced stage in the corpus and the one absent from the hypothesis.

#### Stage 4 — Design (Architect where technical)

- **Purpose.** Design the improved system — organizational, informational, procedural, or technical — connecting the defined problem, evidence, meaning, authority, proposed change, intended outcome, risks and measures (Methodology Foundation §3.4), and determine whether technology is warranted.
- **Primary questions.** What is the smallest coherent change that solves the diagnosed problem? Would technology reduce friction or encode dysfunction? What must the design be structurally unable to do? What seams are preserved conceptually and implemented nowhere? What returns to the client's authority before construction?
- **Required inputs.** Adopted meaning-and-authority record; diagnostic non-goals; the technology-worthiness determination.
- **Activities / methods.** Options considered with rejections and reasons; per-capability placement against explicit criteria (ADR-0003); source-of-truth and semantic-conformance matrices (blueprint §6, §27); non-goals and overbuilding risks; where technical: an architecture blueprint that "records the determination the criteria produce; it does not adopt it," followed by decision records; independent adversarial review of the design before construction (blueprint §38: eight defects found pre-construction).
- **Expected outputs.** Design record with rejected alternatives; conformance criteria; explicit exclusions; required determinations listed for the client's authority; where technical, decision records and a blueprint that authorizes no construction.
- **Decision authority required.** The client's authority to accept the design and to authorize construction as a separate act. Huerta Group's technical authority for how, never what.
- **Evidence required before advancement.** The design answers every semantic test; every excluded capability is structurally unrepresentable or explicitly gated; the client has authorized construction separately from accepting the design (`fd-0013` → `fd-0014`).
- **Candidate instruments.** Technology-worthiness test (`[PROV]`); implementation-readiness gate (`[PROV]`); decision-record practice (`[MECH]`, principle `[PROV]`).
- **Failure modes.** Architecture written for the vision rather than the need (§13.2); scaffolding future capability "by scaffolding rather than by boundary"; the convenient implementation that collapses a distinction; a design that answers the client's reserved questions by building.
- **What must not be assumed.** That the outcome is software; that Huerta Group's stack, topology or environment posture applies; that a shared service is needed before a second real consumer.
- **Evidence basis.** Vision Foundation §7, §9, §13–§14 `[EIA]`; Internal Software Architecture, ADR practice, ADR-0002…0009 `[HG]`; Gen One blueprint `[HG]`; HGP blueprints with "(existing)/(new)" marking and Recommended Slice 1 `[HGP]`; venture blueprint as non-software design `[HG]`; Repository Foundation deliverables C/D `[HG]`.
- **Maturity.** *provisional*.

#### Stage 5 — Construct & Verify

- **Purpose.** Build the smallest complete solution within the authorized boundary and prove — not assert — that it conforms to the adopted meaning.
- **Primary questions.** Does the constructed system refuse what the meaning forbids? Do the semantic tests pass as executable cases? Did an independent inspector find what the builder did not? What deferred question did construction encounter, and was it returned rather than answered?
- **Required inputs.** Authorized design; conformance criteria; authentic matters to validate against (never fixtures alone).
- **Activities / methods.** Bounded builder → inspector → repair loop with observable acceptance criteria; semantic-invariant checks; executable semantic tests; authentic-operations checks; security/boundary checks; rehearsed rollback and tested restore before any irreplaceable record exists; deliberate preservation of manual steps; evidence-based completion report naming what was not done.
- **Expected outputs.** The constructed capability; conformance evidence; inspection findings and repairs (with the rule that architecture is repaired, semantics never); the list of deferred questions encountered; exact decisions returned to authority.
- **Decision authority required.** Construction authorization already given; any scope expansion, deferred policy question, retention/disclosure question, or irreversible act returns to the client's authority.
- **Evidence required before advancement.** All acceptance criteria pass; the inspector reports no unresolved repairable failures; no excluded capability was built; a restore has been performed, not described; activation is a separate authorization.
- **Candidate instruments.** Authentic-use validation protocol (`[PROV]`); bounded completion report structure (`[PROV]`); conformance-matrix template (`[MECH]`).
- **Failure modes.** Trusting a tool's exit code; a default value asserting an event nobody decided; unenforced vocabularies; validation that consumes the operating environment; treating pre-production success as production approval; authoring facts into the operating record to make a surface look populated.
- **What must not be assumed.** That functional tests establish semantic acceptance; that a working system is a used system.
- **Evidence basis.** Bounded Autonomous Completion Standard `[EIA]`; ADR-0019 `[HG]`; Gen One completion, readiness and activation reports `[HG]`; the runtime's suites and guards `[HG]`; HGP production verification, migration baseline, as-built records `[HGP]`; design reference-implementation neutrality proofs `[HG]`.
- **Maturity.** *provisional* (strong in both cases).

#### Stage 6 — Operate Authentically

- **Purpose.** Put the system into real use by the people who must use it, on real matters, in a protected operating environment, with manual responsibilities named.
- **Primary questions.** Who maintains the representation and who owns the truth? What earns a record? What stays manual, and what returns to its source system? How is the operating record protected from validation, from loss, and from published credentials?
- **Required inputs.** Activation authorization; an operating procedure that restates the adopted model without adding to it; backup and recovery already rehearsed.
- **Activities / methods.** An operating procedure ("Every rule below restates something already adopted. Where this procedure and a governing source appear to differ, the governing source wins"); environment separation from the first authentic record; credential retirement; encrypted off-machine backup on a stated trigger; a guard that refuses destructive commands once authentic history exists; evidence categories for authentic use named in advance (`GEN2-REQ-V1` §32).
- **Expected outputs.** Authentic operating history; a growing evidence base of what is used, ignored, reconstructed, or repeatedly performed outside the system.
- **Decision authority required.** Activation and any hosting or cost decision belong to the client's authority; representation fidelity belongs to the function that owns it.
- **Evidence required before advancement.** Authentic matters recorded by the responsible function, not by the implementer; the review boundary and credentials untouched by validation; a restore proven from the off-machine copy.
- **Candidate instruments.** Operating-procedure template (`[HYP]`); authentic-use evidence categories (`[PROV]`).
- **Failure modes.** The local database becoming "the only copy of institutional history" without protection; manual maintenance decaying ("a register that stops being current is worse than none because it is trusted"); the implementer operating the system on the client's behalf.
- **What must not be assumed.** That the operating posture Huerta Group used (local Docker, founder-held passphrase) is appropriate; that the system will be used because it exists.
- **Evidence basis.** `fd-0015`, activation report, HQ operating procedure, Stage 6 `[HG]`; HGP "production-first, verify on live," deploy-safety rules, local-review harness `[HGP]`.
- **Maturity.** *provisional*, with the explicit limit that single-user operation is weak evidence of operation.

#### Stage 7 — Validate in Use & Correct

- **Purpose.** Let authentic use test whether the system is useful, not merely correct; correct what it exposes through governed dispositions that preserve history.
- **Primary questions.** Are the exceptions consistently consequential? Is anything repeatedly reconstructed outside the system? What stale representation persists, and what does the source establish now? Can the vocabulary express the true correction? What does the correction *not* assert?
- **Required inputs.** Authentic operating history; the source authorities for each represented fact; the evidence categories named in advance.
- **Activities / methods.** Reconcile representation against source; classify each gap (interface / technical / semantic); where semantic, pin with a check and return the exact determination required; dispose each subordinate condition individually on its own ground with its own basis; supersede the record, never cascade; generate no new attention by correction; preserve the review boundary; record what the correction does not mean.
- **Expected outputs.** Correction reports; determinations where meaning had to be extended; a list of remaining deficiencies; evidence for or against integration and for the next generation.
- **Decision authority required.** The owning function corrects representation; the client's authority supplies missing meaning; the source authority establishes the truth.
- **Evidence required before advancement.** Every correction is traceable to the source that established it; nothing was deleted; the historical representation remains readable; open deficiencies are listed, not closed by inference.
- **Candidate instruments.** Authentic-use validation protocol (`[PROV]`); correction-disposition pattern (`[PROV]`).
- **Failure modes.** Overloading an existing value to clear a view ("recording a false institutional fact"); cascading dispositions; erasing history; the implementer performing corrections the owning function should perform (the admin-minted session in the correction report is "reported rather than normalised"); expiration metadata becoming a deadline "merely so the register can hold it."
- **What must not be assumed.** That the vocabulary is complete; that a correction to representation says anything about source history.
- **Evidence basis.** The three authentic-use reports and `fd-0017`, `fd-0018` `[HG]`; HGP Constitution Review audit, Cycle 001 amendments, audio-review reversal, globalization diagnosis and v4 corrections `[HGP]`.
- **Maturity.** *provisional* (strong in the corporate case; in HGP the corrections occurred but bypassed the designed ledger).

#### Stage 8 — Learn & Evolve

- **Purpose.** Preserve what was learned, validated, failed, remained uncertain, and was case-specific; refine methodology only through competent authority; feed the next generation's diagnosis.
- **Primary questions.** What did authentic use reveal that design did not predict? Which assumptions were superseded? What is case-specific and what may be proposed for institutional approval? What does the evidence now justify — and not justify — next?
- **Required inputs.** Correction reports; evolution and determination records; the next-generation requirements evidence.
- **Activities / methods.** Append-only evolution records citing their authorities; determinations register; "discharged, not erased" chronology; next-generation requirements derived explicitly from authentic-use evidence; methodology refinement proposals submitted to the Methodology room, never adopted by the implementer; confidentiality-preserving abstraction of client-specific material (Methodology Foundation §7.5).
- **Expected outputs.** Evolution records; refinement proposals with evidence basis and known limitations; the next bounded stage.
- **Decision authority required.** Methodology authority for methodology; the client's authority for its own doctrine; Founder Office for institutional evolution.
- **Evidence required before advancement.** The learning record distinguishes validated from failed from uncertain; refinement proposals carry authority basis, evidence from use, validation status, known limitations, open questions (Methodology Foundation §2.1 Layer 5).
- **Candidate instruments.** Institutional learning/evolution record (`[PROV]` mechanism exists; `[HYP]` as method); case-study evidence matrix (`[HYP]` — this report is the first instance).
- **Failure modes.** Learning that lives only in a report or a conversation; a ledger bypassed by faster direct authorization (HGP FVP); converting one observed solution into doctrine (Methodology Foundation §1.3 "A client-specific recommendation automatically generalized into institutional doctrine"); no record of methodology ever being refined by operational evidence (none exists yet).
- **What must not be assumed.** That two internal cases establish universality; that a mechanism for recording evolution is evidence of evolution.
- **Evidence basis.** Evolution log and register `[HG]`; `GEN2-REQ-V1` §2 `[HG]`; Methodology Foundation §3.8, §6.6, §10.7 `[EIA]`; HGP retrospectives and "lessons carried forward" (Edition §27) `[HGP]`.
- **Maturity.** *provisional* as mechanism; *hypothesis* as effect — no methodology record has yet been refined from operational evidence.

---

## 7. Organizational Diagnostic — Detailed Assessment

### 7.1 Diagnostic purpose

The diagnostic exists so that Huerta Group **diagnoses before it prescribes** when it encounters an organization it does not already understand. Its product is not a solution: it is a confirmed, evidence-labeled account of what the organization is, produces, decides, owns, knows, and stalls on — with the questions the organization's own authority must answer listed rather than answered — sufficient to determine *whether* architecture or software is warranted and *what must be governed first* if it is.

**The critical caveat.** Every diagnostic act in the evidence was self-diagnosis, performed by the founder's own functions with total access, shared vocabulary, no confidentiality boundary, and a single apex authority that could adopt the result the same day. None of that will hold for an unfamiliar organization. What transfers with confidence are the *questions* and the *disciplines*; what does not yet exist is any instrument or protocol validated under partial access, contested authority, or a stranger's terminology. The Methodology Foundation v1 says so itself: "Detailed organizational-discovery methodology" is listed among "Missing Methodology Substance" (§10.1), and "An instrument does not independently establish a diagnosis without an approved interpretive method" (§4.1).

### 7.2 Discovery domains, with the evidence for each

The package's eleven domains are assessed against what the corpus actually practiced.

**1. Purpose and identity.** Evidence: the Constitution's three questions ("Who is the Company? What is the Company obligated to do? By what principles… will it act?") `[EIA]`; the Vision Foundation's separation of current implementation / planned capability / long-term vision `[EIA]`; `fd-0006`'s finding that the institution "has matured faster than its public representation" `[HG]`; HGP's three constitutions written in week one `[HGP]`. Reusable questions: what the organization exists to do; what it believes it produces, enables or protects; how stated purpose compares with operation; which of its capabilities are current, planned, or aspirational. Discipline: never infer identity from public copy. Maturity: hypothesis externally.

**2. Outputs and value creation.** Evidence is thin. The corporate case is a headquarters, not a producer; HGP's outputs are books and publication artifacts with a "records of truth vs derivatives" distinction `[HGP]`. `GEN1-REQ-V1` §12's "operational relevance test" — "What Headquarters decision, coordination need, risk, deadline, or action does this information support?" — is the closest thing to an activity-vs-value test `[HG]`. Maturity: hypothesis.

**3. Authority and decision rights.** Strongest doctrinal evidence in the corpus: the Blueprint's decomposition of "ownership" into reserved / delegated / interim / configurable and its anti-inference rules ("authority is never inferred from technical access, repository ownership, implementation responsibility, participation, historical practice, public description, or naming") `[HG]`; OSPA S02 §2.7 `[EIA]`; the charter's decision-routing table `[HG]`; `GEN1-REQ-V1` §1.1 ("The current weakness is not the decision process itself. It is visibility into which matters are awaiting Founder action") `[HG]`; the trigger reassessment's measurement of decision load ("10 [determinations] in 11 days," "39 unchecked items") `[HG]`. Reusable questions: who can actually decide what; what formal and informal authority exists; where decisions are delayed, duplicated, or unclear; what is reserved, delegated, unresolved. Discipline: record "unresolved" as a value. Maturity: provisional as questions; hypothesis as method for discovering *informal* authority in an unfamiliar organization (never practiced).

**4. Functions and responsibilities.** Evidence: the Headquarters roster of five functions and the Command View's refusal to enumerate them from anything but evidence ("Functions are derived from the register, never enumerated… Building a list of the institution's functions would have made this system the register that defines them") `[HG]`; Blueprint §10 responsibility model ("Execution creates no responsibility by itself — responsibility, like authority, is assigned by record") `[HG]`; three kinds of quiet (unrepresented / quiet / section-level quiet) `[HG]`. Reusable questions: what functions actually exist; what responsibilities are formally assigned; which exist only through habit or individuals; which are duplicated or unowned. Maturity: provisional as questions.

**5. Recurring decisions.** Evidence: `GEN1-REQ-V1` §1 workflow inventory (eight recurring Headquarters workflows) `[HG]`; the Founder decision flow "Operational work → finding/recommendation → Founder attention → Founder decision → downstream handoff" `[HG]`; HGP's escalation practice ("matters exceeding delegated authority stop and escalate") `[HGP]`. Reusable questions: what decisions recur; what information they require; who makes them; where latency arises. Maturity: provisional as questions.

**6. Information and source authority.** The best-evidenced domain. `GEN1-REQ-V1` §3 source-of-truth map with treatments; §2.6's six-way distinction (authoritative fact / operational summary / working context / recommendation / pending determination / decision) `[HG]`; ADR-0004/0009 `[HG]`; Foundation §20–§22 `[HG]`; HGP's explicit truth loci `[HGP]`. Reusable questions: what information matters operationally; where authoritative truth resides; where duplicate or conflicting records exist; what exists only in individual memory or conversation. Maturity: provisional.

**7. Critical workflows.** Evidence: handoff questions (§1.2), dependency/blocker inventory (§1.6), deadline/renewal/follow-up (§1.7) `[HG]`; HGP's editorial loop continuity findings ("navigation friction, loss of editorial context, workflow discontinuity, hierarchy reconstruction") `[HGP]`. Reusable questions: where handoffs occur; where dependencies become blocking; where work stalls; where context is lost between steps. Maturity: provisional as questions; workflow *observation* (as opposed to inventory from the operator's knowledge) is hypothesis — no observation protocol was ever used.

**8. Governance.** Evidence: the Governance Mechanism Audit's finding that approval provenance was conversation-dependent `[HG, unpreserved]`; the Corporate Platform Alignment Audit's "largest truth gap" `[HG, unpreserved]`; FD-V11 proportionality `[HG]`; the education/IP over-governance `[HG]`; HGP's regularization `[HGP]`. Reusable questions: what decisions require durable authority; what policies are real versus assumed; where governance is missing; where it is excessive. Maturity: provisional as questions, including the "excessive" question, which the corpus supplies evidence for against itself.

**9. Institutional knowledge.** Evidence: the OSPA loss and single-machine custody `[HG]`; D-6 `[HG]`; the transmission failures `[HG]`; HGP's "memory institution" framing and its own conversation-dependency violations `[HGP]`. Reusable questions: what critical knowledge is concentrated in individuals; what happens if they leave; what memory exists; how history is preserved; what lives only in conversation or on one machine. Maturity: provisional as questions.

**10. Systems and tools.** Evidence: `GEN1-REQ-V1` §3 (QuickBooks, repository, venture systems, conversation environments as legitimate sources), §12 (what must not enter), §13 (what remains external) `[HG]`; the classification-mismatch dispositions (a tool whose vocabulary cannot express the truth) `[HG]`; HGP's ledger-empty finding (a tool applied outside its sanctioned path) `[HGP]`. Reusable questions: which tools reflect actual operation; which force obsolete processes; which duplicate each other; which contain authoritative truth; where technology is unnecessary. Maturity: provisional as questions.

**11. Operational friction and bottlenecks.** Evidence: the six fragmentation problems `[HG]`; `GEN2-REQ-V1` §32's evidence categories (what still requires opening multiple records; what represented data is repeatedly ignored; what external information is repeatedly reconstructed; what action is repeatedly performed outside the system) `[HG]`; HGP audit ("the editorial economy did" break) `[HGP]`. Reusable questions: where work is reconstructed; where context is lost; where deadlines are rediscovered; where decisions are repeatedly escalated; where stale state persists. Maturity: provisional.

**12. Technology-worthiness** (the package's additional domain). Evidence: the two-limb trigger `[HG]`; Vision Foundation §9's six conditions for proprietary software ("a problem is real; the problem recurs; existing solutions are inadequate…; the workflow is sufficiently understood; the Company has a defensible methodology; software would materially improve the outcome") `[EIA]`; `GEN2-REQ-V1` §23's integration triggers ("recurring stale state, duplicated effort, missed changes, or unacceptable operational friction") `[HG]`; the deliberate-manual doctrine `[HG]`; HGP's "revisit when it first matters" `[HGP]`. Reusable questions: which recurring problem is understood well enough to justify technology; which workflow is too poorly understood to automate; would technology reduce friction or encode dysfunction. Maturity: provisional as a test; the "outgrown" judgement remains human.

### 7.3 Interview and observation requirements

**What the evidence supports.** No interview has been conducted in either case; every diagnostic fact was supplied by the operator from their own knowledge. The nearest things to observation are: authentic-use evidence categories named in advance (`GEN2-REQ-V1` §32); HGP's Founder Validation observation model (eighteen fields, eleven closed classes, five qualitative evidence strengths, "Recorded → Under Analysis → Disposed → Closed"); and HGP's experimental discipline (gold standard before runs; controls). These are `[PROV]` as *structures for recording observations* and `[INSUF]` as interview or observation protocols for an unfamiliar organization.

**What must therefore be true of any first diagnostic.** (i) Each claim is labeled observed / stated by the client / inferred; (ii) the client's terms are recorded in the client's words; (iii) informal authority and habit-held responsibility are discovered by asking the people who do the work, not by reading the organization chart — a method with no evidence base in this corpus and therefore a hypothesis to be tested in the next stage; (iv) observation of a workflow is preferred to description of it where the workflow is load-bearing.

### 7.4 Evidence requirements

Drawn directly from practiced discipline: separate observed evidence from interpretation (§13's controls); cite the source for every material claim; record unavailable evidence as unavailable and never reconstruct it (canonical-source preservation §3, §7); preserve contradictory evidence (the corpus keeps at least fourteen internal contradictions visible — §13.4); record measurement disagreement rather than choosing the flattering figure (passover evaluation §6); "a missing record does not prove non-occurrence without an approved basis for that inference" (OSPA S10 §10.34); confidentiality and client-specific material governed by Methodology Foundation §7.5.

### 7.5 Authority discovery

Fields the evidence supports for an authority map: for each decision class or fact class — reserved to whom; delegated to whom and by what instrument; **unresolved** (explicitly); configurable pending what; and the anti-inference statement that access, custody, participation and naming confer nothing. The FD-V1 charter §23 decision-routing table is the worked example (`[HG]`). What is missing is any method for discovering *informal* authority — the Vision Foundation names "unclear responsibilities" as a founding problem organizations face, and no case in the corpus had to discover them from outside.

### 7.6 Workflow discovery

Fields the evidence supports: the workflow's recurring trigger; who performs it; what decision it produces; the handoffs (seven questions from `GEN1-REQ-V1` §1.2); dependencies and whether they presently block; time-bound obligations and their consequence if missed; where state is reconstructed rather than read; where context is lost. Discipline: inventory before automating; keep manual while learning what deserves institutionalization.

### 7.7 Source-of-truth discovery

The single most reusable diagnostic artifact in the corpus is `GEN1-REQ-V1` §3. Its shape: *information domain → authoritative source → treatment by any new layer (store directly / reference / summarize / do nothing / never authoritative by existence)* — with the governing rule that a new layer stores directly only what it legitimately owns, and never copies "merely to make retrieval convenient." Two corpus rules extend it: conversation and brainstorming are "Not authoritative merely because it exists"; and a summarized fact "must remain distinguishable from its authoritative record." HGP independently drew the same lines (database as permanent record; repository as durable record for pilots; artifacts as derivatives). Class: `[BOTH]`, `[PROV]`.

### 7.8 Institutional-memory discovery

Questions the evidence supports: what exists only in one person's memory; what exists only in conversation or on one machine; what has been lost and how the loss is recorded; whether history can be reconstructed from the records that exist; whether corrections overwrite or supersede; whether the organization's transmission chain (between its authority and its implementers) is reliable. The corpus supplies a template for recording loss honestly (OSPA admission record §5: "Provenance not evidenced, recorded as deficiency rather than inferred").

### 7.9 Technology-worthiness assessment

Composed from the evidence: (1) is there a recurring workflow (evidence of recurrence, not anecdote)? (2) has it outgrown the organization's governed documents and existing systems as the sole mechanism — a judgement, recorded as such, by the organization's authority? (3) are the six Vision Foundation §9 conditions met — real, recurring, existing solutions inadequate, workflow sufficiently understood, defensible method, material improvement? (4) is the meaning of the concepts the technology would encode established by the organization's authority (Stage 3)? (5) what would remain deliberately manual, and why? (6) what would the technology be structurally unable to do? A "yes" establishes need; it authorizes nothing (`fd-0011`).

### 7.10 Minimum diagnostic outputs

Before Huerta Group prescribes architecture or software for an organization, a first-generation Organizational Diagnostic should produce:

1. **Evidentiary baseline and limitations register** — what was inspected, at what state; what could not be accessed; what is unavailable and recorded as such.
2. **Identity-of-record statement** — the organization's purpose and obligations as its own records state them, or the explicit finding that no such record exists; current vs planned vs aspirational capability.
3. **Authority and decision-rights map** — reserved / delegated / unresolved / configurable; formal and informal; where decisions are delayed, duplicated or unclear.
4. **Function and responsibility map** — functions that exist; responsibilities assigned by record; responsibilities held by habit or by individuals; duplicated and unowned responsibilities.
5. **Recurring workflow, handoff, dependency and obligation inventory.**
6. **Source-of-truth map** with a treatment per domain and the conversation/working-context exclusion.
7. **Friction inventory** — the fragmentation problems as they manifest in this organization.
8. **Institutional-memory risk statement** — knowledge concentrated in individuals; conversation- and single-machine-dependent records; loss history.
9. **Governance-gap and governance-excess findings.**
10. **Explicit exclusions** — what must not enter any system; what should remain manual; non-goals; overbuilding risks.
11. **Technology-worthiness determination** — need established or not, stated separately from any authorization to build.
12. **Questions reserved to the organization's authority** — listed, not answered.

### 7.11 What must remain unprescribed at the diagnostic stage

No schema, data model, vocabulary, universal status or lifecycle; no tool, platform, vendor or integration; no organizational restructuring; no replacement of the organization's terminology with Huerta Group's; no answer to any question reserved to the organization's authority; no assertion that software is the outcome. The corpus's own prohibitions apply by analogy: "Development may identify semantic gaps but may not fill them by invention" (`fd-0010` principle 6); the technical system "must not generate records for unapproved assessment frameworks, diagnostic methods… merely to populate the library" (Methodology Foundation §8); and no "automated diagnostic conclusions," "assessment scoring algorithms," or "organizational maturity levels" may be encoded (§9.3).

---

## 8. Candidate Reusable Instruments and Artifacts

None is recommended for standardization now. Several may be *stated as questions or field lists* now because their fields are directly evidenced; the rest are deferred until a diagnostic has been performed on an unfamiliar organization.

| Instrument | Purpose | Evidence supporting need | Stage | Minimum contents | Now or deferred | Over-formalization risk |
| --- | --- | --- | --- | --- | --- | --- |
| Organizational purpose/identity interview guide | Establish identity-of-record and stated vs operated purpose | Constitution's three questions; Vision §18 decision standard; `fd-0006` | 1 | The three identity questions; current/planned/aspirational; the organization's own vocabulary | **Deferred** — no interview has occurred | High: risks importing Huerta Group's constitutional frame |
| Authority and decision-rights map | Make reserved / delegated / unresolved / configurable explicit; separate authority from responsibility, custody, execution | Blueprint §9–§10; FD-V1 §23; ADR-0006/0017; `fd-0017` | 1–3 | Decision class · reserved to · delegated to (instrument) · unresolved · configurable pending · anti-inference statement | **Fields may be stated now**; instrument deferred | Medium: informal authority discovery untested |
| Function/responsibility map | Distinguish assigned, habitual and unowned responsibility | Blueprint §10; HQ roster derivation rule; "three silences" | 2 | Function · responsibilities by record · by habit · unowned · duplicated · quiet vs unrepresented | Fields now; instrument deferred | Medium |
| Source-of-truth inventory | One authoritative owner per domain; treatment by any new layer | `GEN1-REQ-V1` §3; ADR-0004/0009; HGP truth loci | 2–3 | Domain · authoritative source · treatment (store/reference/summarize/do nothing/never authoritative) · conflicts · conversation exclusion | **Fields may be stated now** — the strongest candidate | Low |
| Workflow observation protocol | Observe rather than describe load-bearing workflows | `GEN2-REQ-V1` §32 categories; HGP FVP observation model | 2, 7 | Trigger · performer · decision · handoffs · dependencies/blocking · obligations · reconstruction points · context loss | **Deferred** — never used | High: risks becoming a questionnaire |
| Dependency/handoff map | Make "waiting on" vs "cannot proceed" vs "transferred action" visible | Foundation §11–§15; `GEN1-REQ-V1` §1.2 questions | 2 | The seven handoff questions; dependency with party it rests with; whether it presently blocks | Questions now | Low |
| Organizational-state assessment | Represent state as independent dimensions with "unresolved" | OSPA S09; four registries; venture lifecycle | 3 | Dimensions declared per object kind; vocabularies; "unresolved" as a value; no propagation | **Deferred** — dimension sets are case-specific | **High**: the fourteen-dimension model is Huerta-specific and pre-need |
| Institutional-memory risk assessment | Find knowledge in individuals, conversations, single machines | OSPA loss; D-6; transmission failures; HGP §13 violations | 2 | Where each critical record lives; custody; loss history; transmission reliability | Questions now | Low |
| Governance-gap assessment | Where durable authority is missing or excessive | Governance Mechanism Audit (unpreserved); FD-V11; education/IP evidence | 2 | Decisions requiring durable authority · real vs assumed policy · missing · excessive (measured against operational load) | Questions now | Medium |
| Technology-worthiness test | Separate need from authorization; decide manual vs encoded | Trigger two limbs; Vision §9; `GEN2-REQ-V1` §23 | 2, 4 | The six questions in §7.9 | **Questions may be stated now** | Low if it stays a test, not a score |
| Operational-friction inventory | Locate reconstruction, context loss, stale state | `GEN1-REQ-V1` §2; `GEN2-REQ-V1` §32 | 2, 7 | The six fragmentation problems as prompts; repeated reconstruction; repeated outside-system action | Prompts now | Low |
| Implementation-readiness gate | Keep need, requirements, meaning, architecture, construction, activation, production as separate authorizations | `fd-0010` dimensions; `fd-0013` gate; `fd-0014`–`fd-0016` | 3–6 | Independent status per dimension; the gate conditions; "extensibility is not authorization"; return triggers | **Structure may be stated now** | Medium: ceremony must scale with consequence |
| Authentic-use validation protocol | Validate usefulness in real use without contaminating operation | ADR-0019; Stage 6; `GEN2-REQ-V1` §32; HGP pilots and controls | 5–7 | Authentic matters, never fixtures; evidence categories named in advance; environment separation with fingerprint; review-boundary and credential preservation; independent copies for repeated runs | **Structure may be stated now** | Medium |
| Institutional learning/evolution record | Append-only record of evolution with authority references | Evolution log; determinations register; HGP FVP/decision history | 8 | Prior state · change · evidence · authority · references · implications · supersession | Mechanism exists (`[HG]`); method **deferred** until it has produced a refinement | Medium: HGP shows ledgers get bypassed |
| Case-study evidence matrix | Classify each methodology element by case support | This report §11 | 8 | Element · observed in case · supported across · still hypothesized · source | First instance is this report; **deferred** as a standard | Low |

---

## 9. Role of Software and Technology Within the Methodology

The package prohibits concluding that the methodology culminates in custom software. The evidence supports that prohibition directly: four of five governed domains produced no software; the Vision Foundation states the best solution "may be… no new technology at all"; HGP is the counter-case where software came first and governance regularized it.

**When software becomes justified.** When (1) a recurring workflow is evidenced, (2) the organization's authority judges it has outgrown governed documents and existing systems as the sole mechanism, (3) the Vision Foundation §9 conditions hold, and (4) the meaning of what the software would encode has been established by the organization's authority — and even then, need is not authorization; requirements are not architecture; architecture is not construction; validation is not production (`fd-0010` → `fd-0016`).

**What evidence should exist before a workflow is encoded technically.** A workflow inventory showing recurrence; a source-of-truth map confirmed by the owners; the semantic tests answerable in worked examples; the list of what remains manual and why; the list of what the system will be structurally unable to do; a record of the questions the organization's authority has reserved. `GEN1-REQ-V1` §20: "Anything materially beyond these concepts should require additional operational evidence."

**When manual operation should be preserved deliberately.** When automating would "freeze assumptions before Huerta Group understands them"; while the organization is learning "what information actually deserves institutionalization"; wherever the judgement is not mechanically checkable (materiality, freshness); and until "a manual step that proves genuinely burdensome" becomes evidence for a bounded integration decision. Fifteen workflows were named as remaining manual in Generation One and none has yet been automated.

**How source-of-truth systems should be respected rather than replaced.** Store directly only what the new layer legitimately owns; reference or summarize the rest; synchronize nothing by default; require provenance at creation on every represented fact; never let the representation's vocabulary express that it determined another function's facts; make the path from summary to authoritative source visible even where it cannot be a link ("Provenance is not technical resolvability"). Accounting remained in QuickBooks; compliance case files remained with Administration & Compliance; venture detail remained in HGP.

**When a new operational layer is warranted.** When "fragmentation of decision-useful company state" across *legitimate* systems that should not be collapsed forces a person to reconstruct state, attention, dependencies and change by hand — and not when information is merely absent. The layer's purpose is awareness and coordination, "not a CRM, ERP, analytics platform, governance system, accounting system."

**What must be governed before schema, API, or interface design.** Meaning (Stage 3); source ownership and representation responsibility; decision rights and access classes that "never imply an institutional office"; the admission principle (what earns a record at all); the non-goals; the reserved questions; and, ideally, the retention posture — the one item the corporate case had to defer and which then blocked a backup expectation ("cannot be written honestly without a retention posture").

**How authentic use validates or disproves technical assumptions.** By running the semantic tests as executable cases against the constructed system and again against its restore; by validating with authentic matters, never fixtures; by naming evidence categories in advance and collecting them during use; by treating every correction authentic use forces as evidence about the model (semantic gap → determination; interface gap → bounded repair); and by preferring "authentic use, not more construction" once a layer is feature-complete against its requirements. The evidence also shows the limit: single-user validation is weak, and a validation ledger will be bypassed if direct authorization is faster.

---

## 10. Authentic-Use Validation and Institutional Learning

### 10.1 Why operation is necessary

Pre-use validation in both cases was rigorous and found real defects; authentic use found a different class. `GEN2-REQ-V1` §32 asks for authentic-use evidence because it "is the only input that can answer whether the Command layer is actually useful or merely correct." HGP's Founder Validation Program §1: "The platform's capabilities have been verified mechanically… What only real use can establish is whether the *institution* works." Methodology Foundation §5.1 makes "Validated through use" a distinct development status that "strengthens the evidence basis but does not independently create institutional authority."

### 10.2 What authentic use revealed — the eleven required topics

**Stale state.** The Headquarters register carried a Renewal, a Deadline and a Follow-Up on the HGP trade-name matter after Administration & Compliance had established the registration as active to 2031 with no filing due. Lesson: representation fidelity is an ongoing responsibility, not a property established at admission; "a register that stops being current is worse than none because it is trusted." Candidate principle: every represented fact carries a named fidelity owner and a way to express doubt; staleness is made visible, not prevented. `[HG]`, `[PROV]`.

**False obligations.** The Renewal and Deadline vocabularies "describe an obligation progressing — actionable, satisfied, reached, passed — and none of those values could say an obligation was never established without recording a false institutional fact." Development refused to use `satisfied` or `lapsed`, pinned the gap with two checks "so a later stage cannot quietly add an enum value to make this problem go away," and returned it. `fd-0018` added NOT ESTABLISHED for exactly two concepts, with a required basis naming "what the source authority actually says; never a Headquarters conclusion about it." Candidate principle: a correction the vocabulary cannot truthfully express is a semantic deficiency for the organization's authority, never an implementation workaround. `[HG]`, `[PROV]`.

**Subordinate conditions.** Superseding the mis-admitted Record could not be allowed to dispose of the obligations attached to it: "Superseding an Operational Record does not automatically dispose of attached Renewals, Deadlines, Follow-Ups, Dependencies, Blockers, Founder Attention Items… Each retains its own governed disposition semantics." Each was disposed individually, on its own ground, before the Record was superseded. Candidate principle: every subordinate condition has its own enumerated, provenance-bearing exit; cascades record exits nobody decided. `[HG]`, `[PROV]`. Note the runtime's residual: conditions attached to a superseded Record surface as "Matter not represented" — a live open question.

**Provenance.** The provenance resolver classifies fourteen distinct references in the register as two deterministic and twelve "identified, not technically resolvable," and refuses to guess: "A reference that names its source exactly and offers no route is a complete answer." Source ownership (`headquarters-owned` vs `representational`) and technical resolvability are separate types, and "A route to the source conveys no authority over it." Candidate principle: provenance is satisfied by naming the authoritative record and its owner; resolvability is a convenience that must never manufacture a destination. `[HG]`, `[PROV]`; HGP's digest-anchored design sources and per-reading model provenance are the analogous discipline `[HGP]`.

**History.** Nothing was deleted in any correction; the superseded Record keeps "its own original, now-false admission note, as the record of what Headquarters believed"; the disposition "cannot be unwound into a clean-looking row, because state and provenance cannot disagree." HGP: four correction mechanisms, "never one generic 'edited' state." Candidate principle: correction preserves what was believed and when, and states what the correction does *not* assert. `[BOTH]`, `[PROV]`.

**Review boundaries.** A Founder's review boundary is the reader's own latest Review Event; the validation suites wrote Review Events and reset the database, "destroying the boundary and all Review Events" on every run. Stage 2 recorded a validation review and then restored the register "because that validation review was mine and not the Founder's. Leaving it would have consumed the Founder's boundary and hidden two genuine Material Changes from their next real review." Candidate principle: validation must never consume the executive's real review position; a reviewed-state marker is a relationship between a reader and a moment, never a property of the matter. `[HG]`, `[PROV]`.

**Environment separation.** Authorizing authentic local use "converted the local database from a disposable fixture into the only copy of institutional history." Three defects followed immediately (the gate reset the database; the seed published a password; backups shared the machine), and it took until Stage 6 to stop "validation destroying the register it is meant to protect." The corrected posture: named environments, destruction opt-in by name, a fingerprint of the authentic register before and after every run, "and there is deliberately no environment variable or flag that turns this off globally." HGP's local-review harness "refuses to start if 3210 is occupied rather than moving." Candidate principle: the moment an operating record becomes irreplaceable, every validation path is an adversary; separate, and prove non-interference. `[BOTH]`, `[PROV]`.

**Navigation.** The Command View had to carry the review position into a record and back ("← Return to the Command View" pointing at the section anchor); the Register "listed Headquarters representations it could not reach"; the third hop to the authoritative source had to be stated even where it cannot be followed. Position lives in the URL, "which is also why it survives a reload and can be shared." HGP's editorial-loop continuity reached the same design ("Carried only in the URL, never stored"). Candidate principle: an executive summary requires provenance-preserving drill-down and context-preserving return, with no navigation state that could become a status. `[BOTH]`, `[PROV]`.

**Missing data.** Stage 5: "Five of twelve fields are absent, and all five say so"; Stage 6 filled nothing, because "admitting a venture fact into Headquarters representation is Corporate Operations' act." Accounting's context page is one sentence: "Headquarters holds no representation sourced from this function… this is a reading rather than a gap." `fd-0017` absence rule: "Where an authoritative venture source does not establish a required parent-level fact, the Headquarters representation remains absent." HGP: "null when the provider omits it, never fabricated." Candidate principle: truthful absence, with the responsible supplier named, is better than inferred completeness — and the surface should say which of the two kinds of quiet it is showing. `[BOTH]`, `[PROV]`.

**Semantic models.** Generic models proved inadequate repeatedly and in both cases: a single status field (refused by construction); the "due item" abstraction (refused); HGP's five-status enum (expanded to eight guiding stages); stated stages with "no operational meaning" (given records of truth); `pending/complete/failed` (needed `incomplete`); "Published" (made derived, not stored). And careful concept-specific vocabularies still needed extension under real use (NOT ESTABLISHED). Candidate principle: model each concept with its own meaning and its own exits; expect to extend vocabularies through authority, not through code. `[BOTH]`, `[PROV]`.

**Builder → inspector → repair.** Value: eleven pre-use defects in the first construction, six in Stage 1, three each in Stages 2 and 4, four in Stage 6 — all found by inspection or by the gate, all repaired by changing architecture, none by relaxing meaning; one defect in Stage 4 was "found by a conformance check, not by reading the code." Limitations: the inspector cannot decide governance (the passover evaluation ended "FOUNDER DETERMINATION REQUIRED"); the loop did not surface a fact recorded in the repository's own launch docs (that a push to `main` deploys) until after an unintended production deployment; the standard's 30-minute budget and "max" effort are execution parameters embedded in a governing standard; and the pattern's evidence is entirely from an AI development office working under founder instruments. Candidate principle: independent inspection against meaning, with evidence-based completion and honest reporting of what was not done. `[BOTH]` (HGP: adversarial self-review in the evaluation; production verification per program). `[PROV]` as principle; the specific loop is `[MECH]`.

### 10.3 Which of these should become reusable principles for client engagements

All eleven above are proposed as **provisional validation/operational principles**, at the level of principle only, with three qualifications: (i) each was learned with one operator and tens of records; (ii) each depends on the organization's willingness to leave visible historical error and to accept "incomplete by design"; (iii) the first four (stale state, false obligations, subordinate conditions, provenance) presuppose that a representation layer exists at all — for an engagement that ends without one, they collapse to the source-of-truth and truthful-absence disciplines.

### 10.4 How corrections should work

From the two correction reports and `fd-0018`, the practiced sequence: (1) reconcile representation against the source authority and state what the source establishes now; (2) classify the gap — interface (a control missing for a governed capability), technical (a policy or projection defect), or semantic (the vocabulary cannot say the true thing); (3) for semantic gaps, pin them with a failing-if-changed check and return the exact determination required, in the narrowest form ("whether a Renewal may cease to be current on the ground that the continuation requirement is not established… and if so, what that transition is called and what it must state"); (4) apply dispositions individually, each with its own ground and basis; (5) supersede the record only where its admission rationale is materially false, without cascade; (6) create no replacement obligation and no new attention; (7) preserve the review boundary and credentials; (8) report what the correction does not mean, and what remains deficient.

### 10.5 How history should be preserved

Append later determinations rather than editing earlier records; keep proposal-era status text and represent adoption as a subsequent act ("Reading a source alone understates its current authority; reading it with its status record states it correctly"); label historical postures in place ("HISTORICAL POSTURE, preserved and not rewritten"); supersede with bidirectional links; never delete; record loss as loss.

### 10.6 How learning should feed methodology evolution

The corpus has the mechanisms (evolution log, determinations register, next-generation requirements derived from use) and the rule (Methodology Foundation §10.7: "Operational use may inform methodology but does not independently approve or redefine it"). It does not yet have an instance: no methodology record has been refined from operational evidence, HGP's validation ledger holds one observation and no decision, and no evolution record exists for Generation Two or for the design direction change. The honest finding is that **learning is being recorded but has not yet evolved anything**; this report is the first attempt to convert operational evidence into a methodology proposal, and its acceptance would be the first test of the loop.

---

## 11. Huerta Group / HGP Case Evidence Matrix

"Observed" means the element was practiced in that case's records. "Supported across both" requires observation in both. "Still hypothesized" marks elements whose reusability beyond these two internal cases is asserted by nobody and validated by nothing. Two related internal cases remain limited evidence; cross-case support raises confidence and does not establish external universality.

| Methodology element | Observed in Huerta Group | Observed in HGP | Supported across both | Still hypothesized as reusable | Evidence / source |
| --- | --- | --- | --- | --- | --- |
| Identity of record before design | Yes | Yes (constitutions week one) | Yes | Yes | Constitution record; Vision Foundation; HGP constitutions |
| Evidentiary baseline; unavailable recorded, never reconstructed | Yes | Yes (migration baseline; ledger repair) | Yes | Yes | `fd-0004`, `fd-0013`; HGP WP-00 |
| Audit before restructuring | Yes (A/B → C/D; alignment audit) | Yes (refinement review; CR audit) | Yes | Yes | `evo-0001`; HGP reviews |
| Problem named as fragmentation, not absence | Yes | — | No | Yes | `GEN1-REQ-V1` Exec. Det. |
| Recurring workflow / handoff / dependency / obligation inventory | Yes | Partial (editorial loop findings) | Partial | Yes | `GEN1-REQ-V1` §1; HGP continuity record |
| Source-of-truth map with treatment per domain | Yes | Yes (truth loci per object) | Yes | Yes | `GEN1-REQ-V1` §3; ADR-0009; HGP README/operations |
| Explicit non-goals, exclusions, "remain manual" lists | Yes | Yes | Yes | Yes | `GEN1-REQ-V1` §12–§13, §17; HGP "Not proposed" |
| Questions reserved to authority, listed not answered | Yes | Yes ("decide when it first matters") | Yes | Yes | `GEN1-REQ-V1` §19; Foundation §32; HGP blueprints |
| Meaning before representation (semantics before schema) | Yes | Yes | Yes | Yes | OSPA S02; `fd-0011`–`fd-0012`; HGP canon + drift tests |
| Authority ≠ responsibility ≠ representation ≠ execution ≠ custody | Yes (doctrine) | Partial (practiced, less articulated) | Partial | Yes | Blueprint §25.3; ADR-0017; HGP authority tiers |
| Reserved / delegated / unresolved / configurable authority | Yes | — | No | Yes | Blueprint §9; FD-V1 §7–§8 |
| Two governance planes | Yes | — (subject of it) | No | Yes | FD-V2 |
| Representation records, never creates | Yes | Yes ("Intended is never publication evidence") | Yes | Yes | Blueprint §25.1; FD-V4; HGP release records |
| Regularization without rewriting history | Yes | Yes (governed after operating) | Yes | Yes | `fd-0007`; HGP vocabulary dating |
| One authoritative source; labeled representation elsewhere | Yes | Yes | Yes | Yes | ADR-0004/0009; Foundation §21; HGP artifacts/candidates |
| Provenance required at creation | Yes | Yes | Yes | Yes | ADR-0015; HGP per-reading provenance, digests |
| Truthful absence over inferred completeness | Yes | Yes | Yes | Yes | Stage 5/6; `fd-0017`; HGP "never fabricated" |
| Multidimensional state; no universal status; lifecycle only where meaningful | Yes | Yes (guides, never gates; derived not declared) | Yes | Yes | OSPA S09; ADR-0011; HGP lifecycle, edition |
| Occurred vs recorded kept distinct; review bounded by recorded | Yes | Analogous ("no fake precision") | Partial | Yes | `fd-0014` §3; ADR-0016 |
| Attention as exception layer; quiet legitimate | Yes | Analogous ("more findings is not success") | Partial | Yes | Foundation §9–10; Stage 4 |
| Dependency ≠ blocker ≠ handoff | Yes | — | No | Yes | Foundation §11–15; ADR-0012 |
| Representable doubt; freshness as judgement | Yes | — | No | Yes | ADR-0015; HQ procedure §11 |
| Summarize the subordinate unit; do not reproduce it | Yes | — (subject of it) | No | Yes | `GEN1-REQ-V1` §6; Stage 5 |
| Public truth discipline; representation before linking | Yes | Yes | Yes | Yes | `fd-0006`; FD-V4; HGP truth alignment |
| Technology only when need outgrows documents; need ≠ authorization | Yes | Yes (with counter-case) | Yes | Yes | trigger; `fd-0011`; HGP blueprint-first & day-one build |
| Bounded authorization gates; extensibility ≠ authorization | Yes | Yes | Yes | Yes | `fd-0010`–`fd-0016`; HGP program triplets |
| Smallest coherent capability; seams preserved, not built | Yes | Yes | Yes | Yes | `GEN1-REQ-V1` §16; HGP rule of two |
| Isolation by default; second-consumer rule | Yes | Yes (chartered state) | Yes | Yes | ADR-0003; FD-V1 §13 |
| Blueprint before code; as-built deviations recorded | Yes | Yes | Yes | Yes | ADR practice; HGP triplets |
| Deterministic records of truth; AI holds no approval authority | Yes (doctrine) | Yes (practiced) | Yes | Yes | Vision §8; HGP Candidate/Release |
| Decision rules to unblock a missing foundation | Yes | — | No | Yes | `fd-0005` |
| Exploration artifacts kept out of the gates | Yes | Yes | Yes | Yes | passover evaluation §22; HGP design source |
| Conformance proven, not asserted; acceptance semantic | Yes | Yes (production verification per program) | Yes | Yes | ADR-0019; HGP baseline |
| Independent inspection; quiet defects expected | Yes | Yes | Yes | Yes | `evo-0005`; HGP audits |
| Authentic matters, never fixtures; never author state to populate | Yes | Partial | Partial | Yes | Stage 1 §18; HGP acceptance "a real book (yours)" |
| Gold standard before runs; controls; one variable; human sign-off | — | Yes | No | Yes | HGP globalization |
| Authentic use reveals a different defect class | Yes | Yes | Yes | Yes | three correction reports; HGP CR audit, TTS reversal |
| Separate disposable validation from operation; prove non-interference | Yes | Yes | Yes | Yes | Stage 6; HGP independent copies, local review |
| Vocabulary gap → pin, return, extend by authority | Yes | — | No | Yes | `db7ea3e`; `fd-0018` |
| Supersession without cascade; no attention from correction | Yes | Analogous | Partial | Yes | `fd-0018` §3; HGP set-aside |
| Backup as hypothesis until restored and re-refused | Yes | Yes | Yes | Yes | readiness §7–8; HGP baseline |
| Repository-native memory; conversation non-authoritative | Yes | Yes (with own violations) | Yes | Yes | D-6; HGP Eng §13 |
| Discharged, not erased; append later determinations | Yes | — | No | Yes | `fd-0013`/`14`/`17` |
| Instrument conflicts recorded and dispositioned | Yes | — | No | Yes | `fd-0010` Def. 1 → `fd-0011` |
| Evidence-based completion report with SHAs, omissions, returned decisions | Yes | Yes | Yes | Yes | Bounded standard; all reports; HGP as-builts |
| Learning feeds next generation with evidence categories named in advance | Yes | Designed, not practiced | No | Yes | `GEN2-REQ-V1` §2, §32; HGP FVP |
| Validation ledger bypassed by faster direct authorization (failure mode) | — | Yes | No | Yes (as a risk) | HGP FVP register vs Cycle 001 |
| Governance depth exceeding operational load (failure mode) | Yes | — (restraint practiced) | No | Yes (as a risk) | education/IP foundations; FD-V11 |
| Founder-led role compression (boundary of evidence) | Yes | Yes | Yes | **Not reusable** | activation report §5; HGP acceptance criteria |

---

## 12. Principles Versus Mechanisms

**Reusable institutional principles** (governing propositions; candidate doctrine for the Methodology room, never adopted here):

1. Meaning is defined by the organization's authority before it is represented; a representation that conflicts with meaning is defective, never the reverse.
2. Authority, responsibility, representation, execution and custody are distinct relationships, each assigned by record, none inferred.
3. Every fact has one authoritative source; all other appearances are representations that state whose truth they carry.
4. Unresolved is recorded as unresolved; absence is stated, never inferred; unavailable material is never reconstructed.
5. Correction preserves history: supersede, never erase; state what a correction does not assert.
6. Current truth is distinguished from planned direction on every surface; representation never creates standing.
7. Governance is proportionate — one layer ahead of the organization's growth, and no further.
8. Technology serves a diagnosed, recurring, understood need; need is separate from authorization; keep work manual while learning.
9. Every advance is a separately authorized act; extensibility is not authorization.
10. Authentic use is the arbiter of usefulness; validation must not consume the operating environment.
11. Institutional memory is repository-native; conversation, contributor memory and transmission are non-authoritative.

**Reusable methods** (defined approaches with inputs, logic, outputs — all provisional):

- The source-of-truth map with per-domain treatment (§7.7).
- The semantic-gap inventory (grounded / other authority / requirement-without-semantics / out of scope / decision required) and the questions-only definition handoff.
- The technology-worthiness test (§7.9).
- The bounded readiness gate with independent status dimensions.
- The builder → independent inspector → repair loop with observable acceptance criteria and evidence-based completion.
- Authentic-use validation with evidence categories named in advance, authentic matters, environment separation and fingerprinting.
- The correction-disposition sequence (§10.4).
- Gold standard before runs, same-language controls, one variable at a time, independent copies, human sign-off (from HGP).
- Regularization: admit governance over existing operation with retrospective evidence honestly marked.

**Reusable patterns** (recurring shapes, less formal than methods):

- Audit → determinations → architecture → bounded execution.
- Blueprint (no code) → approval → construction → as-built with deviations → verified baseline.
- "Discharged, not erased" chronology; proposal-vs-adoption two-state preservation.
- Decision rules plus lightweight decision records to unblock work when a foundation is missing.
- Three kinds of quiet; the withheld-count footer; "not represented — and who is responsible for supplying it."
- Drill-down that carries its return position in the URL, never in state.
- Provenance resolver that classifies and refuses more than it resolves.
- Pin a semantic gap with a failing-if-changed check.

**Case-specific organizational choices** (Huerta Group's or HGP's, not transferable as defaults):

- The Constitution → Vision → foundations → standards hierarchy and the room model; Founder Office as apex.
- The venture model and FD-V series; parent/venture representation before linking.
- Generation-based increments of the Command Center; "Founder Attention" as the exception layer's name and scope; the Headquarters function roster.
- Deliberately manual maintenance of the register; local pre-production posture on cost grounds.
- HGP's product decisions: memory hierarchy, editorial findings/deliberation, eight stages, imprint-provisioned access, es-419 canon, deterministic export.
- Publishing before governing; regularization on 2026-08-12.

**Implementation-specific technical mechanisms** (evidence of principles, not principles):

- Corpus manifest, schemas, registries with approved-set locks, deterministic validators, `npm run verify`, CI; the workbench and `.gitignore` exception; SHA-256 preservation with digests computed before copying.
- The determinations register and evolution log formats; ADR/DDR/GR record formats; the XML execution-package transmission model.
- The runtime's two-identity model, per-kind state-dimension declarations with generic-name refusal, append-only triggers, representation-owner check constraints, three priority fields, governance-mandated nomination constraint, nullable `occurred_at`, reader-scoped review events, `since_last_review()`, blocking assertions, no-authority handoffs, three obligation tables, NOT ESTABLISHED columns with completeness constraint, the provenance resolver's I/O ban, the "no new table" structural check, the authentic-register fingerprint, named environments with port offset and symlinked suites, encrypted four-part backups with digest manifests, restore verification "for refusals."
- HGP's immutability triggers, active-pointer composite foreign keys, drift-guard tests pinning copy to canon, dual-computed fingerprints refusing to write on disagreement, stored-only ZIP writer, metrics-based print layout engine, `[[bracketed]]` legal placeholders, the local-review loopback guard.

---

## 13. Methodology Risks and Failure Modes

### 13.1 The ten required risks, with evidence

1. **Premature prescription.** Evidence for the risk: the Vision Foundation's warning against accepting a requested solution as the problem; Methodology Foundation §3.2. Evidence of the discipline holding: `GEN1-REQ-V1` diagnosing fragmentation before any design. Control: Stage 2 outputs precede Stage 3; the reserved-questions list.
2. **Over-governance.** Evidence: education and IP foundations governing nothing operational (§3 L16); ADR-0006's nine user classes for no users; the capability registry's stale enums; the same deficiency recorded three times. Control: FD-V11 as a test — measure governance depth against operational load; prefer decision rules over foundations where nothing yet needs governing.
3. **Technology-first thinking.** Evidence against: four of five domains produced no software. Evidence of the risk: HGP's day-one deploy-and-diagnose commits; the Vision Foundation's own ecosystem lists (§12) that "preserve architectural awareness" but could be read as a build list. Control: technology-worthiness test; need ≠ authorization.
4. **Copying Huerta Group structures.** Evidence of the risk in the corpus's own words: "Repository Standards govern this repository; they are not standards governing Huerta Group as an institution generally"; ADR-0016 "nothing here may be cited as [universal doctrine]"; `fd-0018` "expressly not a generic cancellation state." Control: §5 of this report; the case-specific classification in §12.
5. **Misidentifying source truth.** Evidence: the runtime's `current_state` view silently dropping provenance (found twice); HGP's read path rendering "No bibliographic record exists yet" beside a real draft; the migration ledger found EMPTY because migrations had been applied outside the sanctioned path. Control: source-of-truth map confirmed by owners; provenance required at creation; applied state "confirmed against the live project rather than assumed from the repository."
6. **Flattening authority/responsibility.** Evidence: source functions were initially able to author Headquarters materiality (defect D4); any reader could record a Review Event (D5); attention exit granted more widely in code than documented. Control: enforce by shape (policy, trigger, constraint), not by prose; "no role name may imply an institutional office."
7. **Automating poorly understood work.** Evidence: `GEN1-REQ-V1` §18.4; fifteen workflows kept manual; HGP's "premature generality" refusals; the Constitution Review audit finding that the architecture held while "the editorial economy" broke. Control: manual by design with "burdensome" as the integration trigger.
8. **Erasing history during correction.** Evidence: NOT ESTABLISHED designed so a disposition "cannot be unwound into a clean-looking row"; the superseded Record keeps its false admission note; HGP's four correction mechanisms. Control: supersession, no cascade, basis required.
9. **Treating current-state representations as source authority.** Evidence: `GEN1-REQ-V1` §18.8 "Governance erosion — Convenient operational summaries could eventually be mistaken for authoritative determinations"; `GEN2-REQ-V1` §31.3 "Shadow authority"; FD-V4 §22.4 "The parent platform is never a fact source." Control: every summary states whether the system is author or reader of the fact; drill-down to the source; "Provenance is not technical resolvability."
10. **Assuming executive visibility requires dashboards.** Evidence: `GEN1-REQ-V1` §18.2 "Dashboard theater"; `GEN2-REQ-V1` §31.1; the Command View built with "no tile, card, gauge, chart, KPI or metric anywhere on the page"; the trigger reassessment finding governed documents "performing the function adequately" on repository evidence. Control: every prominent element must answer a real operating question; quiet is a legitimate reading; consider documents before applications.

### 13.2 Additional risks the evidence exposes

11. **The transmission chain between authority and implementer.** Five failures in six days; each instrument asserted a source it did not carry. Development's refusal to reconstruct was correct and expensive. For a client engagement the equivalent is the chain between the client's authority and Huerta Group's work; a diagnostic must test it.
12. **A validation ledger bypassed by faster direct authorization.** HGP designed a rigorous observation → theme → decision chain and recorded one observation while real corrections flowed through Founder authorization. A method whose ledger the principal does not use is not a method.
13. **Speed compression masquerading as deliberation.** The entire operations arc — semantics, blueprint, thirteen ADRs, construction, validation, activation, Generation Two through Stage 6, two corrections — occupies six calendar days. The ordering discipline is real; elapsed time is not evidence of reflection.
14. **Self-evidence.** The implementing office authored most operational records and this report. The corrections it reports on its own work are real, but the absence of independent review of the *method* is a limitation.
15. **Enum staleness under a no-vocabulary-change rule.** Four registry fields left "stale but not false, under protest" because the vocabulary could not be changed without authority — the discipline that prevents silent redefinition also prevents timely accuracy.
16. **Irreversible consequences of routine actions.** An authorized push to `main` deployed to production because the platform auto-deploys; the instrument separated the two and the platform did not. Any engagement must map which routine acts are irreversible in *that* organization's environment.
17. **Overloaded terms.** "Platform" (OSPA's Platform & Systems Development vs the Internal Operations & Command Platform); "Headquarters" (an authority domain vs a function's representation); "Workshop"/"Workspace" in HGP. Terminology discipline is itself a diagnostic finding.
18. **Governance drift after design changes.** HGP retired a constitutional typeface and introduced Docker "without amending Design/Engineering constitutions" despite "deviations require amending it first"; the Design System Foundation was never transmitted; three constitutions remain "proposed, awaiting approval" while treated as law.

### 13.3 What only works because Huerta Group is founder-led

The single apex authority that can adopt doctrine the same day; determinations issued at a rate of fourteen in seventeen days; the same person nominating, admitting, reviewing and overriding attention; stewardship, source authority and representation responsibility resolving to one individual; regularization approved by the person who authorized the ungoverned operation; validation that is "single-user"; and the Founder Office ↔ Development transmission model itself. None of these should be generalized. The records already say so in their own terms: "must not hard-code named individuals or unresolved permanent offices" (OSPA S09 §9.19); "A domain may exist without: a dedicated department; a permanent role; a manager; employees" (S04 §4.27).

### 13.4 Contradictions preserved, not smoothed

The corpus contains internal inconsistencies that a clean methodology story would hide. They are listed so that the Founder Office reads them as evidence, not as defects in this report: OSPA §3.23 lists operational records among assets while §3.24 holds them distinct; S09 §9.1 enumerates twelve dimensions and §9.2 fourteen; the OSPA admission record §6 still says the Semantics Foundation "does not yet exist" after it was preserved; the RS05-EV01 packet is titled for "reconstruction" of a section the rules forbid reconstructing; the runtime README and operating procedure describe a `verify:full` and `db:reset` behaviour that Stage 6 changed and a script that no longer exists; migration 070000's comment still calls Q5 open after `fd-0017`; the runtime grants attention exit more widely than its README states; the IP foundation §8.1 authorizes search/retrieval that its architecture defers; the education schema carries a `digital_badge` value the source only prohibits; navigation slack is recorded as "~20 px" and "≈0px" in two records; HGP's Broadsheet as-built says "unpushed… no merge" while git shows branch and `main` identical; HGP's README says 29 migrations where `setup.md` says 42; HGP's README lists ISBN assignment as a non-goal while Edition Phase 2 shipped assignment; the Claude Design completion report dated 2026-08-23 records a DDR dated 2026-08-24; and no evolution record exists for Generation Two or for the design direction change.

---

## 14. Commercial / Product Boundary

The capability that appears to exist, stated without category: Huerta Group can take an organization's operational ambiguity — unclear decision rights, contested or duplicated truth, invisible dependencies, state reconstructed by hand, memory held in individuals and conversations — and convert it into governed, truthful, provenance-preserving representation and operation, through disciplined diagnosis, explicit meaning adopted by the organization's own authority, bounded design, proven construction where technology is warranted, and correction through authentic use that preserves history. Its demonstrated strength is discipline about meaning, truth, authority and evidence; software is one of its outputs, and in the evidence the least common one.

What cannot be said: that this capability has been exercised for any external organization; that it scales beyond one operator; that it has a name, a package, a tier or a price. `fd-0006` forbids public wording implying "an established client portfolio unless repository evidence supports that claim," and the Methodology Foundation forbids representing an asset as approved methodology because it "Was used by a consultant" or "Has been validated through one or more uses." The Vision Foundation's own value-creation cycle begins with consulting as "the source of operational knowledge"; the corpus holds no consulting evidence yet, which is the honest boundary of what has been learned. No commercial category is imposed; no pricing, packaging, tiers or copy are proposed.

---

## 15. Unresolved Founder Office Questions

Only questions requiring institutional determination are listed; methodology-analysis judgements were made in this report and are not escalated.

**Q1. Relationship between this discovery and the Methodology Foundation's approved progression.** The revised map (§6.2) adds an explicit "Establish Meaning & Authority" stage, splits verification from validation-in-use, and admits regularization entry. Under Methodology Foundation §6.4 that is a substantive refinement of mr-0004 (Organizational Improvement Work Progression v1) requiring a new version and Methodology-room approval. Does the Founder Office wish the map to be developed as a refinement proposal to mr-0004, as a separate methodology asset subordinate to it, or held as working material only?

**Q2. Admissibility of self-diagnosis as the evidence base for a diagnostic method.** Every diagnostic act in the corpus was performed by the Founder's functions on the Founder's institution. Does the Founder Office accept that evidence as sufficient to draft a *provisional* Organizational Diagnostic method at "working concept" or "draft" status (Methodology Foundation §5.1), or does it require an external application before any draft is prepared?

**Q3. Preservation of the unpreserved diagnostic instruments.** The Repository Audit (Deliverable A), the Repository Authority Matrix (A.1), the Governance Mechanism Audit (B), the Proposed Repository Architecture (C), the Migration Plan (D) and the Corporate Platform Alignment Audit are accepted instruments whose texts are not in the repository. They are the institution's only worked examples of diagnosing itself before restructuring. Should they be transmitted and preserved through the canonical admission path so the diagnostic method can be tested against them, or is their absence to stand as a recorded deficiency?

**Q4. Status of this report.** Under the workbench charter it carries no institutional status. Does the Founder Office wish it admitted as an Institutional Record (evidentiary, non-governing) through the canonical path, retained as workbench working material, or disposed?

**Q5. Classification of `curbside-spa` under FD-V8.** The Corporate Venture Governance Blueprint §27.8 names "client-delivery work such as curbside-spa" as a subject for the classification sweep, which has not occurred. If it is client-delivery work, it is the only external-organization evidence the institution holds, and its admissibility to this program (subject to Methodology Foundation §7.5 confidentiality and client-specific-material rules) would change the evidence base for the diagnostic front end. Does the Founder Office wish FD-V8 to be made, and if the endeavor is classified as client delivery, whether its evidence may be examined under confidentiality for this program?

**Q6. HGP's evidence channel.** FD-V1 §14 provides that venture operating knowledge enters parent institutional knowledge "only through governed admission — abstracted, reviewed, and approved." This report has read HGP's records as evidence under the Founder Office's authorization for this program. Should HGP-derived lessons proposed for methodology (P28, P29, P35, P40 and the FVP-bypass finding) pass through a recorded admission act before any methodology asset relies on them?

---

## 16. Recommended Next Bounded Stage

**Recommendation: Generation One — Stage 2: Provisional Organizational Diagnostic Method (working concept → draft), with a self-application dry run.**

**Purpose.** Draft — as a Methodology-room asset at "working concept" status advancing to "draft" under Methodology Foundation §5.1 — the front-end method this program's evidence shows to be both the most needed and the least exercised: how Huerta Group establishes understanding and diagnosis for an organization it does not already understand, including the questions, the minimum outputs, the evidence and provenance disciplines, the technology-worthiness test, the readiness gate that separates need from authorization, and the explicit list of what the diagnostic must not prescribe.

**Why the evidence now supports it.** (1) The authority itself names "Detailed organizational-discovery methodology" as missing (Methodology Foundation §2.2, §10.1), so this is the gap the approved architecture expects to be filled next. (2) `GEN1-REQ-V1` is a complete worked example of a diagnostic whose shape — workflow inventory, fragmentation problems, source-of-truth map, information requirements, exclusions, non-goals, overbuilding risks, reserved questions — can be abstracted without inventing substance. (3) The disciplines the diagnostic depends on (evidentiary baseline, truthful absence, one source per fact, unresolved recorded, technology-worthiness as a test) are supported across both cases. (4) The four candidate instruments whose fields are directly evidenced (source-of-truth inventory, authority map, technology-worthiness test, readiness gate) can be stated as field lists without building anything. (5) A self-application dry run — applying the draft to Huerta Group LLC *as if it were unknown* — is the only validation available before an external application, and it will expose where the draft silently assumes total access, a single apex authority, or Huerta Group's vocabulary.

**What it should produce.** A draft method record (not a Method Library admission) containing: purpose and scope; the discovery domains with their questions in Huerta-neutral language; interview and observation requirements stated as hypotheses to be tested; evidence and provenance rules; the authority-discovery and source-of-truth-discovery field lists; the technology-worthiness test; the minimum outputs (§7.10); the non-prescription rules (§7.11); known limitations and open questions; the dry-run findings recorded as observations, not as refinements; and a case-study evidence matrix for the dry run. Status language throughout must follow Methodology Foundation §6.3 for provisional material.

**What remains excluded.** No diagnostic application, portal, assessment engine, scoring model, maturity model, or client questionnaire; no Method Library admission or change to any mr-record; no client engagement or outreach; no pricing, packaging, tiers or sales copy; no software of any kind; no change to any foundation, ADR, determination, or the Command Center; no generalization of any Huerta Group structure into the draft as a default; no resolution of Q1–Q6 by Development.

**Prerequisites and parallel action.** Q1 and Q2 govern whether the stage may begin. Q3 (preservation of the audits) would materially strengthen it and can proceed in parallel through the canonical admission path if the Founder Office so directs. Q5 (curbside-spa) is not a prerequisite but would change the evidence base if answered.

---

## Validation self-check against the instrument

**Evidence validation.** Major claims cite repository sources by path, section, determination or commit. New hypotheses are labeled `[HYP]` or "hypothesis"; provisional patterns `[PROV]`. Unavailable sources are listed in §1.5 and were not reconstructed — including the circumstances of the OSPA loss, which this report declines to attribute. Huerta-Group-specific choices are separated in §5 and §12; HGP-specific findings are marked `[HGP]` and were not generalized without cross-case support in §11.

**Methodology validation.** Diagnosis precedes prescription (§6 Stages 1–2 before 3–4; §7.11). Authority is distinguished from responsibility (L3, P9). Source truth is distinguished from operational representation (L2, P14–P16). Governance is distinguished from software (§9; §12). Principles are distinguished from mechanisms (§12). Authentic operation is a stage with its own evidence (§6 Stages 6–7; §10). Institutional learning is represented explicitly, including the finding that it has not yet evolved anything (§10.6).

**Scope validation.** No platform implementation began; no file in any repository was modified; no runtime was started; no pricing was established; no commercial category was imposed; no client system was designed; no existing authority was rewritten or reinterpreted — every existing determination is cited as it stands, including those this report's map would refine only through the Methodology room's own process.

**Stop.** This report stops here for Founder Office determination.
