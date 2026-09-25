# External Delivery — Generation One Technical Architecture Validation

**Classification: Institutional Record** — derived record (evidentiary,
non-governing). The Platform & Systems Development validation of the
[Technical Architecture](generation-one-technical-architecture.md), preserved as
delivered on 2026-09-24. Its six corrections (A–F) were accepted by the Founder
Office as authoritative and control implementation (`fd-0041`).

## 1. Validation Disposition

**ACCEPTED WITH BOUNDED CORRECTIONS.** The core architecture is sound and repository-grounded. Six implementation details must change before authorization; none alters the accepted product semantics, and two of them make the implementation smaller.

## 2. Repository Validation Baseline

- **Path:** `/Users/esteban/GitHub/huerta-group/huerta-group-client-engagement`, branch `main`
- **HEAD:** `ab6d63ecbaedacbba31a20c5650db28862a6dfe3`; **origin/main:** identical; neither ahead nor behind
- **Relationship to candidate baseline:** identical commit; no intervening change
- **Worktree:** no staged or unstaged changes
- **Untracked (pre-existing, unchanged):** the ADMIN01 counsel package `.docx`, two OSA `.docx` files under `docs/`, and the iDoRecruit CSV. No other residue.

## 3. Product-Definition Conformance

Every accepted semantic distinction is preserved by the candidate: discovery ≠ qualification; evidence ≠ evaluation; capability-specific, reversible maturity; no universal Proven; candidate consideration ≠ assignment; commercial readiness ≠ proposal; planning economics ≠ accounting; assignment requires authorized work; provider completion ≠ acceptance ≠ work product ≠ deliverable ≠ acknowledgement; performance evidence never promotes maturity by itself. One candidate detail contradicts the product definition (paid-scoping closure, section 8) and is corrected below.

## 4. Schema / Domain Placement Validation

**Validated as returned.** Repository truth confirms all four grounds: `manifest.mjs` asserts "NOTHING REACHING OUT — no Client Engagement object may reference another capability's table"; `verify.mjs` fails any migration not scoped to `client_engagement`; the force-RLS, no-DELETE, EB-07, and BUILD01 suites scan that schema by name; PostgREST exposure is a dashboard setting per schema. A second schema would therefore either forbid the assignment's foreign keys to `engagement` and `authorized_work` or reduce them to unchecked uuids, would require credentialed configuration, and would begin with zero suite coverage. ADR-0023 itself frames the schema as the capability's extraction and coupling boundary, which External Delivery joins rather than crosses.

**Schema placement is not client ownership.** Residence in `client_engagement` confers nothing: every table carries its own policies, no client or Client Platform principal reads any External Delivery table, and provider rows are never reachable through a client-side grant except the bounded assignment-context read in section 15. The separation-readiness document should record that provider records move with the schema as Huerta Group operating knowledge.

## 5. Provider Identity Validation

**Validated as returned, with one correction (same-party class rule).** `organization` and `person` are client-world identities by construction: the seam migration states "the people in this database are the CLIENT's people, and Headquarters has no business receiving them"; `person_granted_read` resolves visibility through `organization_person_relationship` → `engagement`; `organization.status` is a client-relationship lifecycle (`known … declined`). Using them as the provider root would expose providers through client grants, conflate a client relationship with a delivery relationship, and force provider-only parties into a client lifecycle. No less duplicative faithful pattern exists in the repository. The candidate's separate root with optional same-party FKs is the smallest faithful solution, and the same-party reference means only "the same real-world party in another institutional role": it inherits no authority, policy, capability, access, or sourcing eligibility.

**Correction A:** a same-party pair must share `record_class`; a trigger refuses pairing a `synthetic_exercise` provider with an `authentic` organization or person, and the reverse.

## 6. record_class / BUILD01 Validation

**Validated: a faithful doctrine extension, not a weakening.** BUILD01-07's own heading reads "Resolution through the existing relationship chain, with no duplicated flag anywhere"; the invariant is that classification belongs to a root and is resolved downstream by join. `provider` has no path to `organization`, so it is a second root; `provider_capability`, evidence, evaluations, and candidate considerations resolve through it exactly as opportunities resolve through `organization`. Revising the assertion to exempt `provider` while adding write-once and non-mixing assertions preserves the rule. This is within Platform & Systems Development authority; no institutional doctrine is touched.

## 7. Capability / Evidence / Evaluation / Maturity Validation

**Validated with one correction (projection).** The chain provider → provider_capability → evidence → evaluation preserves every required distinction, and reversibility is an ordinary later evaluation.

**Correction B: derive current maturity and posture; do not store them.** The candidate proposed stored columns pinned by a transaction-local guard. That is safe, but it is dual truth the repository elsewhere refuses: `headquarters_representation` derives `high_level_state` "so the seam cannot misreport", and the verify gate "status is derived, and conditions are only added to it" states the preference. The transaction-local pattern (`proposition_presenting`) exists for a stamp a function must move, not for a projection of history. A `security_invoker` view over the latest evaluation per provider capability gives the same one-read list at this scale with nothing to pin and nothing to drift. Maturity `discovered` is the view's value when no evaluation exists; `unknown` remains the absence of the pair.

## 8. Implementation Scoping & Sourcing Validation

**Validated with one correction.** Attachment to `opportunity` is right: `commercial_proposal` and `osa_scope_pricing_assessment` hang there, `engagement.originating_opportunity_id` supports the locality rule for an optional engagement reference (the `scope_review_stays_with_its_work` precedent), OSA is nowhere required, and several scopings per Possible Work are legitimate. The disposition set preserves readiness ≠ proposal and paid-scoping ≠ paid work. `current_disposition` should be derived from the append-only history by view, as in Correction B.

**Correction C: `paid_scoping_indicated` must not set `closed_at`.** It records that responsible pricing needs separately authorized professional analysis; it does not end the matter. Only `do_not_pursue` closes a scoping. A scoping at `paid_scoping_indicated` stays open and may later receive `being_scoped` or `ready_for_commercial_decision` when a paid scoping engagement has answered the question, or `do_not_pursue`.

## 9. Commercial Planning / QuickBooks Boundary Validation

**Validated as returned.** The guard is `/\b(amount|invoice_total|balance|payment_amount)\s+(numeric|money|decimal)/i`; `quoted_fee`, `expected_external_cost`, and `expected_direct_cost` typed `numeric(12,2)` pass it on the same footing as `fee` and `proposed_fee`, without any verification exception. These are planning figures with a basis and date, never bills, expenses, liabilities, payments, or invoices; no accounting state is introduced. The `planning_basis` text snapshot recorded at each disposition is decision provenance, not a ledger: it is composed once, immutable, labelled as planning figures, and never summed.

## 10. Delivery Method Validation

**Validated as returned.** The existing `delivery_method` enum means how a deliverable reached the client ("Recorded, never performed: Headquarters sends nothing"). Reusing it for execution architecture would be a category error. `execution_method` with the seven required values is bounded state on a requirement and an assignment, not a subsystem.

## 11. External Assignment / Authorized Work Validation

**Validated as returned.** `authorized_work` rows require an authorizing `client_decision` and exist only under `active` or `closed` engagements; a closed engagement's scope is "settled and is not rewritten". Requiring `active` at assignment creation is stricter than `require_active_engagement` and is deliberate: execution cannot begin on settled work, in the same way the closed-engagement forms are withheld. Cancellation after closure is consistent with closure doctrine, which "never erases anything" and admits post-closure inserts such as follow-ups and validation records; a cancellation event records truth rather than leaving a false executing state. Assignment creation writes nothing to `client_authority`, `client_decision`, `authorized_work`, `hg_assignment`, or `engagement_prerequisite`.

## 12. Nine Readiness Gates Validation

**Validated with one correction.** The nine concerns match the accepted product definition exactly; seeded rows, default `unresolved`, undeletable and unmovable, `blocked` representable, readiness derived.

**Correction D: three of the nine are structural facts of the assignment and should be derived, not recorded as free text.** Underlying client authorization is established by construction (the assignment's `authorized_work` carries a NOT NULL authorizing decision); assignment-specific scope is `bounded_scope`; acceptance basis is `acceptance_basis`. Forcing an operator to re-type a reference to a record the row already names is duplication the repository refuses elsewhere. The implementation persists six gate rows (client-side authority for the arrangement, provider contractual basis, confidentiality and data handling, IP and work-product chain, access controls, licensing and professional restrictions) and computes readiness as those six established-or-not-applicable plus the three structural conditions non-empty. The six keep a required text reference on `established`; a structured FK to `client_authority` is not warranted in Generation One because no existing capacity maps one-to-one to "authority to use the delivery arrangement", and the operator may name the `authorize_implementation` capacity in the reference where it applies. The screen still shows all nine.

## 13. Provider Completion / Huerta Group Review / Rework Validation

**Validated as returned.** `work_product.is_deliverable` is checked false, `deliverable.from_work_product_id` is NOT NULL, and both are written only by existing acts; the candidate links accepted output by a nullable reference after acceptance and never writes either table. Append-only events make `rework_required → in_execution` sufficient: the completion, the review, the deficiency, the resubmission, and the final disposition each remain as rows.

## 14. Provider Performance Learning Validation

**Validated as returned.** A `provider_evidence` kind `assignment_performance` with the bounded observation columns, an assignment FK, and a post-review precondition carries every required observation, links to the provider capability, changes no maturity, and is citable by a later evaluation. A separate performance table would be a second evidence universe and is unnecessary.

## 15. RLS / Least-Privilege Validation

**Validated with one correction.** Founder-office write control on network and scoping tables, engagement-grant scope on assignments, no client or public access, and no policy that widens client access or crosses clients all hold.

**Correction E: split the provider row so a grant reveals only what an assignment needs.** Row policies cannot hide columns, so `provider_granted_read` on a single table would hand any engagement-granted operator the provider's contact channel, location, discovery provenance, description, and same-party references. Implement `provider` (id, display name, provider type, record class, provenance) and `provider_detail` (everything else, founder-office only; the pattern is `engagement` beside `engagement_confidentiality`), written together by one SECURITY INVOKER function. `provider_granted_read` applies only to the identity table and only where an `external_assignment` on an engagement the operator holds names that provider capability; `provider_capability_granted_read` likewise; evidence and evaluations are never grant-readable. Scoping `granted_read` through an engagement originating from the opportunity mirrors `commercial_proposal` and is acceptable.

## 16. Provenance / Append-Only Validation

**Validated as returned.** Trigger-set `recorded_by/at` from `auth.uid()`/`now()` overwriting caller values, pinned parent keys, revoked UPDATE plus no update policy on history tables (the `post_engagement_review` two-layer pattern), no DELETE anywhere, correction by successor record, and `set search_path = client_engagement, public` on every function (EB-07's `proconfig is null` count must stay zero) all match repository conventions. With Correction B the transaction-local guard is needed only for `external_assignment.state`, whose stored, function-mutated lifecycle follows the `engagement.status` precedent.

## 17. Migration Doctrine Validation

**Validated as returned.** Two forward migrations, both scoped to `client_engagement`, none editing an applied file (the ledger refuses a changed checksum). The "own migration" rule binds only `alter type … add value`; new types may be created and used together, so two files is a stylistic match to the delivery-vocabulary precedent rather than a necessity. The BUILD01 revision is a test-file change plus the provider write-once trigger in the records migration. The ownership manifest is regenerated from the live schema afterwards.

## 18. Verification / Probe Plan Validation

**Validated as returned.** Every listed gate applies unchanged, and the three suites and three probes cover the invariants and the eight scenarios with `PLACEHOLDER`, `synthetic_exercise` fixtures destroyed with the tooling credential; no authentic state is mutated. The pre-existing defect is **independently confirmed in source**: `huerta-group-client-platform/supabase/migrations/20260913000000_material_retrieval_principal.sql` line 181 creates `cp_material_retrieval_read` on `storage.objects`, and `manifest.mjs` boundary check 1 flags any such policy without the `ce_` prefix. It is pre-existing, Client Platform's, and outside this increment; live confirmation belongs to the implementation-time `verify:full` run, which was not executed here because it needs the database connection.

## 19. Headquarters Operator-Surface / Navigation Validation

**Validated with one correction.** Scoping inside the Possible Work page between "What this work would take" and "What we offered", and assignments inside Decisions & Work with a detail route on the `materials/[custodyId]` precedent, fit the current IA. A new top-level destination is justified: provider knowledge is durable, cross-client, and developed independently of any Possible Work, and neither existing destination can hold it. Clients is client work; Company owns no state by doctrine and gate ("Company stores nothing"), and its own document says it is "not a vendor system".

**Correction F: label the destination "Providers", route `/providers`, and update the shell's doctrine comment from four situations to five.** The shell's naming rule is "the shortest true name, promising no capability the page does not have"; "Network" promises a network. Contextual navigation as proposed is validated.

## 20. Generation One Exclusions Validation

No candidate element crosses an exclusion. The flat operator-curated `capability` list is not a skills taxonomy; the planning figures are not accounting; the derived readiness is not a workflow engine; the provider list is Headquarters-only and is not a directory or marketplace.

## 21. Required Architecture Corrections

- **A.** Same-party references must share `record_class` (trigger).
- **B.** Derive current maturity, sourcing posture, and scoping disposition by view; do not store projections.
- **C.** `paid_scoping_indicated` leaves the scoping open; only `do_not_pursue` sets `closed_at`.
- **D.** Persist six readiness gates; derive client authorization, scope, and acceptance basis from the assignment itself.
- **E.** Split `provider` identity from `provider_detail`; grant-scoped reads reach identity only, through an assignment on a held engagement.
- **F.** Top-level destination "Providers" at `/providers`; shell doctrine comment updated.

## 22. Institutional-Model Synchronization Requirement

The README rule is explicit: "This repository implements that model. It does not redefine it. Where the two ever disagree, the institutional repository is right and this one has a defect." Client Engagement was admitted by a Founder determination (fd-0037), a standard (`institution/standards/engagement/client-engagement-operating-standard.md`), a manifest entry (validate:knowledge requires exact one-to-one coverage), and a documentation-index row. External Delivery appears nowhere in that corpus.

Determination:
1. The accepted product definition **is** a material model addition; implementing it first would create the defect the rule names.
2. **Artifacts:** a new bounded standard under `institution/standards/` (the Founder decides the path and classification; the engagement directory is the nearest home), its `institution/metadata/manifest.json` entry, its `documentation-index.md` row, and a determination record under `institution/governance/determinations/` recording acceptance, as fd-0037 did.
3. **Mechanism:** existing, not new: determination plus admitted standard plus index and manifest. Separately, ADR practice requires an ADR for a decision that "materially shapes system boundaries, data ownership"; placement in `client_engagement`, the second record-class root, and `execution_method` warrant **ADR-0024**, authored by Platform & Systems Development as Proposed and Accepted with implementation.
4. **Minimum content:** the accepted product definition by reference, with these corrections noted.
5. **Timing:** the standard's admission **before implementation**; ADR-0024 **atomically with implementation**; any amendment to `capability-registry.json` (External Delivery sits within the existing `client-delivery-systems` and `operations-systems` domains and the validator requires the 18 domains exactly once) is optional and may follow implementation before acceptance.

The admission itself is Founder-reserved and was not performed.

## 23. Confirmed Implementation Baseline

`ab6d63ecbaedacbba31a20c5650db28862a6dfe3` — HEAD equals origin/main with no intervening change.

## 24. Final Bounded Implementation Scope

1. **Additions in `client_engagement`:** `provider`, `provider_detail`, `capability`, `provider_capability`, `provider_evidence`, `provider_evaluation`, `provider_evaluation_evidence`, `implementation_scoping`, `scoping_requirement`, `requirement_capability`, `scoping_unknown`, `candidate_consideration`, `scoping_disposition`, `external_assignment`, `assignment_gate` (six concerns), `assignment_event`; eleven new types including `execution_method`, `capability_maturity`, `readiness_basis`, `assignment_state`; three `security_invoker` views for current maturity/posture, current disposition, and assignment readiness.
2. **Referenced, unmodified:** `organization`, `person`, `opportunity`, `engagement`, `authorized_work`, `work_product`, `operator`, `record_class`, `commercial_proposal`, all existing policies, triggers, and chronology.
3. **Migrations:** two forward files.
4. **BUILD01:** exempt `provider` in BUILD01-07; add write-once and non-mixing assertions.
5. **RLS:** founder-office network and scoping writes; grant-scoped assignments; identity-only grant read for providers via assignment; no evidence or evaluation through grants; force RLS and no DELETE everywhere.
6. **Provenance/append-only:** trigger-set attribution; history tables revoke UPDATE; correction by successor.
7. **Maturity:** derived by view; `record_provider_evaluation` SECURITY INVOKER with deferred citation constraint (tested needs a test; proven needs an accepted assignment's performance evidence).
8. **Scoping:** append-only dispositions with planning-basis snapshot; `closed_at` only on do-not-pursue; navigation link to the existing proposal path.
9. **Gates:** six persisted, three structural, readiness derived.
10. **Assignment:** `record_assignment_event` as the single state path; active-engagement creation rule; post-closure cancellation only.
11. **Performance:** `assignment_performance` evidence after a terminal review.
12. **Surfaces:** `/providers`, `/providers/new`, `/providers/[id]`; scoping panels on `/opportunities/[id]`; assignment region on `/engagements/[id]/do` and `/engagements/[id]/assignments/[assignmentId]`.
13. **Navigation:** fifth destination "Providers"; `return.ts` routes; shell comment.
14. **Guides:** `record-a-provider`, `scope-an-implementation`, `assign-work-externally`.
15. **Docs:** `docs/external-delivery.md`; separation-readiness note; manifest regenerated.
16. **pgTAP:** three suites plus BUILD01 revision.
17. **Probes:** `probe:providers`, `probe:scoping`, `probe:assignment`.
18. **Read-contract:** rows for every new read.
19. **Regression:** `verify:full`, `test:reads`, all existing probes before commit.
20. **Synthetic-only validation:** `PLACEHOLDER` and `synthetic_exercise` fixtures, destroyed with the tooling credential.
21. **Institutional prerequisite:** the standard admitted before implementation; ADR-0024 with it.

**Exclusions:** everything in section 20 of the candidate architecture, plus no chronology vocabulary, no storage object, no QuickBooks touchpoint, no Corporate Operations repository change.

## 25. Genuine Technical Blockers

NONE.

## 26. Recommendation to Founder Office

Authorize External Delivery Generation One implementation on baseline `ab6d63e` with corrections A–F incorporated, on the condition that the accepted product definition is admitted to the institutional repository as a governed standard (with its determination, manifest, and index entries) before implementation begins, and that Platform & Systems Development records ADR-0024 with the implementation.

EXTERNAL DELIVERY GENERATION ONE TECHNICAL ARCHITECTURE VALIDATED WITH BOUNDED CORRECTIONS — READY FOR FOUNDER IMPLEMENTATION AUTHORIZATION
