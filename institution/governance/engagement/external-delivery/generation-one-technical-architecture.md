# External Delivery — Generation One Technical Architecture

**Classification: Institutional Record** — derived record (evidentiary,
non-governing). The Development return to the Founder Office's
technical-architecture directive, preserved as delivered on 2026-09-24. Its
consequential decisions were independently validated and six of its details
were corrected before acceptance; see the
[Technical Architecture Validation](generation-one-technical-architecture-validation.md),
whose corrections A–F control. The governing doctrine is the
[External Delivery Operating Standard](../../../standards/engagement/external-delivery-operating-standard.md).

**Status:** complete, read-only. No code, migration, or file was written. Every claim below was read from the repository at the baseline stated in section 1.

## 1. Repository baseline and state

- **Repository:** `/Users/esteban/GitHub/huerta-group/huerta-group-client-engagement`, branch `main`
- **HEAD:** `ab6d63ecbaedacbba31a20c5650db28862a6dfe3`, level with `origin/main`
- **Worktree:** no staged or unstaged changes. Four untracked files predate this work and must never be committed: the ADMIN01 counsel package, two OSA `.docx` files under `docs/`, and the iDoRecruit CSV.
- **Database:** 37 migrations in `supabase/migrations`, all scoped to `client_engagement` on the shared `huerta-group-llc` Supabase project (adr-0023); ledger `client_engagement.schema_migrations`; 21 pgTAP suites; 25 probes; `verify.mjs` with 13 structural must-contain and 5 must-not-contain rules plus roughly 50 application gates.
- **No provider, vendor, subcontractor, or external-party record exists anywhere.** The only adjacent concepts are `hg_responsibility.contractor` (a free-text current holder on `hg_assignment`) and the `delivery_method` enum, which describes how a deliverable was transferred to the client.

## 2. Existing primitives inspected and reusable patterns

| Primitive or pattern | What was found | Reused as |
|---|---|---|
| `organization`, `person`, `organization_person_relationship` | Client-world identity; policies `*_founder_read/write/update` plus `*_granted_read` through an engagement grant; seam comment: "the people in this database are the CLIENT's people" | Not reused for providers; targets of the optional same-party FK only |
| `opportunity` (Possible Work) | `disposition` is Huerta Group's willingness; `commercial_proposal`, `osa_scope_pricing_assessment` hang off it | Parent of a scoping |
| `engagement`, `authorized_work` | `authorized_work.authorizing_decision_id` NOT NULL; `require_active_engagement()` admits `active` and `closed` for 15 work tables; `chain_link_stays_within_engagement()` | Parents of an assignment; eligibility rule in section 9 |
| `engagement_prerequisite` | All eight rows seeded from birth by trigger; `established` requires `evidence`; rows cannot be deleted or moved | Shape of assignment readiness gates |
| `client_authority` / `authority_basis` | `established / unresolved / not_applicable`; established requires a holder | Vocabulary model for gate basis (a new enum with `blocked` added; the existing enum is not widened) |
| `record_class` | On `organization` only, write-once by trigger; BUILD01-07 asserts no other table carries it | Extended to one more root identity, section 4 |
| Provenance triggers | `*_provenance_is_recorded()` overwrite `authored_by/at`, `revised_by/at` from `auth.uid()`/`now()`, pin parent keys on update, and use a transaction-local setting (`proposition_presenting`) for the one stamp a named function may move | Every new table |
| Append-only | No DELETE privilege or policy anywhere; `post_engagement_review` revokes UPDATE and has no update policy; presented proposal terms refused by trigger; corrections are visible updates or successors | Evidence, evaluations, disposition history, assignment events |
| `record_finding` | SECURITY INVOKER function supplying only a transaction boundary; deferred constraint trigger checks citations | `record_provider_evaluation` |
| `enforce_activation_gate`, EB-07 | Every function carries `set search_path = client_engagement, public`; `create or replace` drops it | All new functions |
| Money guard | `verify.mjs` rejects `amount|invoice_total|balance|payment_amount` typed numeric; `commercial_reference` carries no amount | Column names `quoted_fee`, `expected_external_cost`, `expected_direct_cost` |
| UI doctrine | `Panel`, `Region`, `Facts`, `Recording`, `RecordAction`, `Details`, `Explain`, `Alternatives`, `Refusal`; every action is `(formData) → redirect`, refusal via `fail(back, error.message)`; no `required` inside a disclosure | All three surfaces |
| Guides | `content/guides/<slug>.md`, closed section set, `return.ts` route allowlist | Three new guides |

## 3. Schema and domain placement

**Decision: all External Delivery records live in the `client_engagement` schema**, as a logically distinct domain with a naming prefix (`provider_*`, `capability`, `scoping_*`, `external_assignment*`) and its own section in the ownership manifest.

The product definition preferred a separate schema. Repository inspection rules it out for Generation One on four grounds, each an existing gate:

1. `manifest.mjs` asserts "nothing reaching out": no FK from `client_engagement` to any schema but `auth`. An assignment must reference `engagement` and `authorized_work`; a second schema would either violate that assertion or reduce the reference to an unchecked uuid.
2. `verify.mjs` requires every migration to be scoped to `client_engagement` and to touch no other capability's table.
3. The force-RLS, no-DELETE, EB-07, and BUILD01 suites scan `client_engagement` by name; a second schema would start with no coverage.
4. PostgREST exposes `client_engagement` by dashboard setting; a second schema would need a credentialed configuration change.

Logical separation is preserved by naming, by policies that never let a provider row be read through client access except where an assignment justifies it, and by documentation. Separation moves the records together with the operator application that uses them, which is correct: they are Huerta Group's own operating knowledge, not client material, and nothing in them weakens client confidentiality.

## 4. Minimum persisted structures

Sixteen relations (thirteen tables, three junctions), eleven new enumerated types. Provenance columns are `recorded_by uuid not null references operator`, `recorded_at timestamptz not null`, set by trigger, on every table; `revised_by/at` on the tables that permit update.

**Capability Network**

- `provider` — `id`, `display_name` (not null), `provider_type` (enum), `discovery_source` (enum, not null), `discovery_note`, `contact_channel`, `location`, `description`, `same_party_organization_id` (nullable FK `organization`), `same_party_person_id` (nullable FK `person`), `record_class` (write-once trigger identical to `organization`'s), check: at most one same-party reference. Only `display_name` and `discovery_source` are required.
- `capability` — `id`, `name` unique (case-insensitive), `description`, `active boolean`.
- `provider_capability` — `provider_id`, `capability_id`, unique pair; `known_how` (enum claimed/observed/inferred); `maturity` (enum) default `discovered`; `sourcing_posture` (enum) default `unresolved`; `posture_note`; `material_unknowns`. `maturity` and `sourcing_posture` are a **controlled projection**: a trigger refuses any direct change unless the transaction-local setting `client_engagement.evaluation_projecting` is set, which only the evaluation trigger sets (the `proposition_presenting` pattern).
- `provider_evidence` — append-only. `provider_id`, `provider_capability_id` (nullable; provider-wide evidence), `kind` (enum), `context`, `source`, `observation` (text; the observation itself), `external_reference` (a locator, never an upload), `relates_to` (date), `corrects_evidence_id` (nullable self-FK), and bounded columns used only by two kinds: for `huerta_group_test` → `test_purpose`, `test_requirement`, `test_result`, all required when kind is test; for `assignment_performance` → `external_assignment_id` FK, `requirement_satisfaction`, `quality_and_rework`, `timeliness`, `communication`, `security_and_access`, `integration_burden`, `problems`, `would_consider_again` (enum yes/no/unresolved), all checked non-null only for that kind. No `record_class` column: inherited from `provider`.
- `provider_evaluation` — append-only. `provider_capability_id`, `maturity` (enum), `sourcing_posture` (enum), `strengths`, `limitations`, `material_unknowns`, `risk_considerations`, `rationale` (not null).
- `provider_evaluation_evidence` — junction (`evaluation_id`, `evidence_id`), with a trigger requiring both rows to belong to the same provider.

**Implementation Scoping & Sourcing**

- `implementation_scoping` — `opportunity_id` (FK, not null), `engagement_id` (nullable FK; must be an engagement originating from that opportunity, the `scope_review_stays_with_its_work` pattern), `contemplated_implementation`, `defined_outcome`, `delivery_architecture`, `current_disposition` (enum, projection pinned by trigger from the latest disposition row), `opened_at`, `closed_at`. One scoping per opportunity is not enforced; several contemplated implementations per Possible Work are legitimate.
- `scoping_requirement` — `scoping_id`, `ordinal`, `outcome_or_component`, `constraints`, `dependencies`, `candidate_methods execution_method[]`, `selected_method` (enum, nullable), `external_resource_need` (enum), `sourcing_status` (enum), `expected_external_cost numeric(12,2)`, `expected_direct_cost numeric(12,2)`, `economics_basis` (text: what the figures rest on and when), `risk_and_control`.
- `requirement_capability` — junction (`requirement_id`, `capability_id`, `note`).
- `scoping_unknown` — `scoping_id`, `requirement_id` (nullable), `question`, `material_to` (enum), `resolved_by` (enum), `status` (open/resolved), `resolution`, `resolved_at`.
- `candidate_consideration` — `requirement_id`, `provider_capability_id`, unique pair; `reason_considered`, `suitability` (enum), `material_unknowns`, `quoted_fee numeric(12,2)`, `quote_basis`, `quote_date`, `quote_valid_until`, `quote_source`, `risk_and_dependencies`, `selection` (enum, default `undetermined`), `selection_reason`, `selected_at`. Trigger: a `synthetic_exercise` provider may not be considered for an `authentic` opportunity, and the reverse.
- `scoping_disposition` — append-only history. `scoping_id`, `disposition` (enum), `rationale` (required for every value but `being_scoped`), `planning_basis` (text snapshot of every quotation and expected cost in force, generated by the recording function, labelled as planning figures), `recorded_by/at`.

**External Delivery Assignment**

- `external_assignment` — `engagement_id`, `authorized_work_id`, `scoping_requirement_id` (nullable), `provider_capability_id`, `execution_method` (enum, not null), `bounded_scope` (not null), `expectations`, `dependencies_and_constraints`, `acceptance_basis`, `state` (enum, default `prepared`), `cancelled_reason`, `resulting_work_product_id` (nullable FK `work_product`, must belong to the same authorized work). Triggers: authorized work must belong to the engagement; engagement must be `active` on insert (section 9); parent keys pinned on update; synthetic/authentic pairing rule as above; state transitions only by the recording functions.
- `assignment_gate` — `assignment_id`, `concern` (enum, nine values), `basis` (enum: established / unresolved / not_applicable / blocked, default `unresolved`), `authoritative_reference`, `note`, `recorded_by/at`; PK (assignment, concern); seeded on assignment insert; cannot be deleted or moved; `established` requires a non-empty reference (the prerequisite pattern).
- `assignment_event` — append-only. `assignment_id`, `kind` (enum: provider_completion / review / cancellation), `note`, `output_reference` (where the output can be inspected), `review_disposition` (enum, required when kind is review), `deficiency` (required when disposition is rework), `recorded_by/at`.

**Enumerated types (all new; no existing enum is widened):** `provider_type`, `discovery_source`, `capability_known_how`, `capability_maturity` (discovered/evaluated/tested/proven), `sourcing_posture`, `provider_evidence_kind`, `execution_method` (founder_internal / ai_software_assisted_internal / external_subcontractor / hybrid / client_retained_provider_coordination / independently_retained_professional / unresolved), `scoping_disposition_value` (being_scoped / unresolved / ready_for_commercial_decision / paid_scoping_indicated / do_not_pursue), `readiness_concern`, `readiness_basis`, `assignment_state` (prepared / in_execution / submitted_for_review / accepted / rework_required / rejected_or_escalated / cancelled). Smaller vocabularies (resource need, sourcing status, suitability, selection, material-to, resolved-by, would-consider-again, unknown status) may be enums or CHECK-constrained text at implementation's discretion; the repository uses both.

The name `execution_method` is deliberate: `delivery_method` already exists and means how a deliverable reached the client.

## 5. Persisted versus derived state

| Derived, never stored | From |
|---|---|
| Assignment "ready" | all nine gate rows `established` or `not_applicable` |
| Provider summary line ("3 capabilities: 1 proven, …") | `provider_capability` rows |
| "New evidence since last evaluation" | latest evidence vs latest evaluation per capability |
| Review-cycle count, rework count | `assignment_event` rows |
| Elapsed scoping time | `opened_at`, disposition timestamps, `closed_at` |
| Maturity/posture on `provider_capability` | projection of the latest evaluation, written by trigger only |
| Scoping `current_disposition` | projection of the latest disposition row, written by trigger only |

Everything else in section 4 is persisted. Projections exist so a list page is one read, and are pinned so they cannot drift from their history.

## 6. Invariants and where they are enforced

All in the database, in the repository's own idiom; the application attempts and reports.

1. **Nothing transitions on its own.** Assignment `state` changes only inside `record_assignment_event` (SECURITY INVOKER); a direct UPDATE of `state` is refused by trigger unless a transaction-local setting the function sets is present.
2. **Ready is computed.** No column stores it; `record_assignment_event` refuses `provider_completion` and the move to `in_execution` unless the gate condition holds at that moment.
3. **Provider completion ≠ acceptance.** Only a `review` event with disposition `accepted` sets `accepted`; `rework_required` returns the state to `in_execution`; `rejected_or_escalated` is terminal.
4. **Maturity moves only by evaluation.** Trigger after insert on `provider_evaluation` projects maturity and posture; direct writes refused.
5. **Tested and Proven are evidenced.** Deferred constraint trigger on `provider_evaluation`: `tested` requires a cited `huerta_group_test` evidence for the same provider capability; `proven` requires a cited `assignment_performance` evidence whose assignment is `accepted` and whose provider capability matches. A lower maturity needs only a rationale.
6. **History is append-only.** `provider_evidence`, `provider_evaluation`, `scoping_disposition`, `assignment_event`: UPDATE privilege revoked and no update policy (the two-layer `post_engagement_review` pattern); DELETE granted to nobody, as everywhere. Correction of evidence is a new record naming `corrects_evidence_id`.
7. **Assignment eligibility** (section 9) and **engagement locality**: `authorized_work` and `resulting_work_product_id` must belong to the assignment's engagement.
8. **Gates are structural.** Seeded on insert, undeletable, unmovable; `established` requires a reference.
9. **Synthetic and authentic never mix** across a candidate consideration or an assignment.
10. **Money guard.** No accounting column shape; `quoted_fee` and expected-cost columns are the only numeric money and are labelled planning figures in comments and on screen.
11. **Provenance is set by trigger** and overwrites any caller value.
12. **Existing invariants untouched:** `record_finding`, chain locality, activation gate, chronology (no External Delivery act writes `engagement_chronology`; assignments are not engagement history events in Generation One, and adding vocabulary would put one act into a history holding none of its peers).

## 7. RLS and access model

Every new table: `enable` and `force row level security`; never a DELETE policy; privileges inherited from default grants and explicitly revoked where the table is append-only.

- **Network tables** (`provider`, `capability`, `provider_capability`, `provider_evidence`, `provider_evaluation`, junction): `*_founder_read`, `*_founder_write`, `*_founder_update` on `is_founder_office_operator()`. Plus `provider_granted_read` and `provider_capability_granted_read`: visible to an operator holding a grant on an engagement that has an `external_assignment` naming that provider capability, so an assignment page can name who is assigned. Evidence and evaluations are never visible through a grant.
- **Scoping tables**: founder-office read/write/update, plus `*_granted_read` through an engagement originating from the opportunity (the `commercial_proposal` shape).
- **Assignment tables**: the engagement-scoped shape, `is_active_operator() and has_engagement_grant(engagement_id)` for read, insert, and update, reached through the parent for `assignment_gate` and `assignment_event`. Recording performance evidence remains founder-office because it writes a network table.
- **Same-party references**: plain FKs to `organization` and `person`; the reference row is readable only under those tables' own policies, so a provider page shows "also recorded as a client-side party" only to a reader entitled to see that row. No client attribute is copied onto the provider.
- **Authentic vs synthetic**: `provider.record_class` write-once; `organization.record_class` unchanged; the mixing triggers in section 6; `ClassMark` rendered on provider, scoping, and assignment surfaces exactly as today.
- Generation One is Headquarters-only: no client or provider principal, no Client Platform read, no storage bucket.

## 8. Operator surfaces and navigation

Three surfaces, in the existing doctrine, no new component kinds.

1. **Network** — a fifth top-level destination in `shell.tsx` (Today · Clients · Network · Company · Guides), routes `/providers`, `/providers/new`, `/providers/[id]`. The list shows name, type, discovery source, `ClassMark`, and the derived summary line, with two plain filters (capability, maturity). The provider page: `Panel weight="lead"` "Where this provider stands" (derived line, posture note); `Facts` for identity and provenance (absent values omitted); Region "Capabilities" with one panel per capability showing maturity, posture, unknowns, and a `Details` history of evaluations; Region "Evidence" (append-only log); `RecordAction`s: "Add a capability", "Record evidence", "Record a test", "Record an evaluation". Discovery source is displayed on the identity line and nowhere near maturity.
2. **Scoping & Sourcing** — a Founder-Office panel group on `/opportunities/[id]` titled "What the implementation would take", placed after "What this work would take" and before "What we offered" (the order things happen). Panels: outcome; requirements (each with capabilities, methods, sourcing status, economics as planning figures, its candidates with quotations and selection); unknowns; delivery architecture; "Where this stands" with the disposition history and a `RecordAction` "Record where this stands" using `Alternatives` for the five dispositions, rationale required server-side. From `ready_for_commercial_decision` the panel shows one link, "Draft a commercial proposal", into the existing "What we offered" panel; nothing is prefilled. Where a scoping names an engagement, the engagement Overview shows a one-line reference back.
3. **External Assignments** — a Region on `/engagements/[id]/do` under "What we did, and what the client received", titled "Work performed outside Huerta Group", listing assignments per authorized work with `StateMark`, provider, method, and gate status; `Recording` "Assign a bounded component externally" (provider capability via `Choice`, authorized work via `Choice`, method via `Alternatives`, scope and acceptance basis as `Area`s). A detail route `/engagements/[id]/assignments/[assignmentId]` (the `materials/[custodyId]` precedent) shows the gates as nine `Facts` rows with `Details` per gate to record basis and reference, the event history, and the acts: "Begin execution", "Record provider completion", "Record the review" (`Alternatives`: accepted / rework required / rejected or escalated), "Cancel", and after a final disposition "Record how the provider performed". `Establishment` renders with `records="Assigning work to an external provider"`.

Navigation: provider ↔ candidate ↔ requirement ↔ Possible Work; provider ↔ assignment ↔ authorized work ↔ engagement; evidence ↔ the test or assignment that produced it. `return.ts` gains three route patterns; three guides are added (`record-a-provider`, `scope-an-implementation`, `assign-work-externally`) in the `before-work-begins` and `during-the-engagement` groups.

## 9. Assignment eligibility rule

Grounded in existing semantics rather than a new lifecycle: `authorized_work` rows can only exist under engagements that are `active` or `closed` (`require_active_engagement`), and a closed engagement's work is settled (scope revision refused, forms withheld). Therefore:

- **Insert** of `external_assignment` is refused unless the referenced `authorized_work` belongs to the referenced `engagement` and that engagement's `status = 'active'`, with the refusal sentence naming the status.
- **Events** that advance execution (`in_execution`, `provider_completion`, `review`) are refused once the engagement is `closed`; `cancellation` remains permitted so a closed engagement never holds an assignment that claims to be executing.
- **Update** may not change `engagement_id`, `authorized_work_id`, or `provider_capability_id`.
- Assignment creation writes nothing to `client_authority`, `engagement_prerequisite`, `authorized_work`, or `hg_assignment`; the `contractor` responsibility on `hg_assignment` remains the Founder's separate statement of who currently holds it.

## 10. Readiness-gate implementation

Nine rows seeded per assignment by an after-insert trigger (the `seed_engagement_prerequisites` pattern), one per `readiness_concern`: `client_authorization`, `client_side_authority_for_arrangement`, `provider_contractual_basis`, `confidentiality_and_data_handling`, `ip_and_work_product_chain`, `access_controls`, `licensing_and_professional_restrictions`, `assignment_scope`, `acceptance_basis`. Basis vocabulary is a new enum `readiness_basis` rather than a widened `authority_basis`, because `blocked` has no meaning for client authority and widening an existing enum would touch the authority suites. Default `unresolved` so unaddressed never reads as satisfied. `established` requires `authoritative_reference`; the reference is text naming where the basis lives (the engagement's `client_authority` row, an Administration & Compliance record, a counsel-held agreement) and the screen labels it "as recorded by the operator". Readiness is computed from these rows and displayed; nothing in the product asserts sufficiency.

## 11. Evidence, evaluation, and maturity implementation

`record_provider_evidence(provider uuid, capability uuid, kind, …)` and `record_provider_test(...)` write single evidence rows under the caller's policies. `record_provider_evaluation(provider_capability uuid, maturity, posture, strengths, limitations, unknowns, risks, rationale, evidence uuid[])` is SECURITY INVOKER and writes the evaluation and its citations in one transaction; the deferred constraint trigger enforces the tested/proven evidence rule; the after-insert projection trigger copies maturity and posture onto `provider_capability` under the transaction-local setting. `Unknown` is the absence of a `provider_capability` row and is rendered as such. Lowering maturity is an ordinary evaluation with a rationale. Reads of evaluation history order by `recorded_at desc` and never collapse.

## 12. Scoping and commercial-readiness implementation

`open_implementation_scoping(opportunity uuid, engagement uuid default null, …)` reads the opportunity under the caller's policies (so an invisible Possible Work refuses with a sentence). Requirements, unknowns, and candidates are ordinary founder-office inserts and visible updates. `record_scoping_disposition(scoping uuid, disposition, rationale)` inserts the history row, composes the `planning_basis` snapshot from the current quotations and expected costs, and the trigger pins `current_disposition`; `do_not_pursue` and `paid_scoping_indicated` also set `closed_at`. No function creates a `commercial_proposal`; the only bridge is the navigation link. Labels follow `labels.ts` conventions: "Being scoped", "Unresolved", "Ready for a commercial decision", "Paid scoping indicated", "Do not pursue". Timestamps only; no target or SLA column exists, and the money guard keeps it that way.

## 13. Assignment, review, and performance-learning implementation

`create_external_assignment(...)` inserts the assignment and seeds gates. `record_assignment_gate(assignment, concern, basis, reference, note)` is a visible update. `record_assignment_event(assignment, kind, note, output_reference, review_disposition, deficiency)` is the single SECURITY INVOKER path that inserts the event and moves `state` under the transaction-local setting: `in_execution` requires readiness; `provider_completion` moves to `submitted_for_review`; `review` moves to `accepted`, back to `in_execution`, or to `rejected_or_escalated`; `cancellation` from any non-terminal state. `link_accepted_output(assignment, work_product)` sets `resulting_work_product_id` only when `accepted` and the work product belongs to the same authorized work; the work product itself is created through the existing `recordOutput` act. `record_assignment_performance(assignment, …)` inserts a `provider_evidence` row of kind `assignment_performance` for the assignment's provider capability, permitted only after a terminal review; it changes no maturity. The provider page then shows "new evidence since last evaluation".

## 14. Migration and compatibility implications

- **Migrations:** two forward files, in the repository's style: one vocabulary migration creating the eleven types, one records migration creating tables, triggers, functions, policies, privileges, and the `record_class` trigger on `provider`. No applied migration is edited (the ledger refuses a changed checksum).
- **One deliberate suite revision:** `build01_record_class.test.sql` BUILD01-07 currently asserts that only `organization` carries `record_class`. The doctrine it protects is "one flag per root identity, inherited by construction"; `provider` is a second root with no path to `organization`. The assertion becomes `table_name not in ('organization','provider')`, and BUILD01 gains assertions that `provider.record_class` is write-once and that the mixing triggers hold. This is a widening of the exemption for a second root, not a weakening of the rule.
- **Gates that apply unchanged and must pass:** force RLS (ADMIN03-18, authorization suite, manifest), no DELETE, EB-07 `proconfig` count, no accounting-amount pattern, no `required` inside a disclosure, every `back` a real page, read-contract `pass ≥ 100` (new reads are added to the table with their failure sentences), guide integrity gates, `DENY BY DEFAULT` migration scan.
- **Ownership manifest:** regenerated with `npm run manifest -- --write`; the new tables, enums, functions, triggers, and policies appear under the existing capability.
- **Seed:** no change to `seed.sql` is required; probes create disposable `PLACEHOLDER` fixtures and destroy them with the tooling credential, the `probe-scope-submit` pattern.
- **Institutional model of record:** the README states this repository implements the institutional model and does not redefine it. External Delivery is not yet in `client-engagement-operating-standard.md` or its schema. Admitting the accepted product definition to the institutional repository is a Founder Office act that should precede or accompany implementation so the two repositories agree; it is not a blocker to technical routing.
- **Separation readiness:** External Delivery adds no cross-schema dependency and no storage object; `docs/launch-readiness-separation.md` needs one sentence noting that provider records move with the schema.
- **Untouched:** `public` schema, website, Client Platform, storage bucket and `ce_` policies, QuickBooks references, `engagement_chronology`, `hg_assignment`, `commercial_proposal` lifecycle, Corporate Operations repository.

## 15. Technical validation and probe plan

- **pgTAP suites (three, `begin;`/`rollback;`, `XD-NET-nn`, `XD-SCOPE-nn`, `XD-ASSIGN-nn`):** force RLS and no DELETE on every new table; founder-only writes; grant-scoped assignment reads; provider visible through an assignment grant and not otherwise; evidence never visible through a grant; provenance overwritten; append-only refusals; maturity projection refuses direct write; `tested` without a test refused; `proven` without an accepted assignment refused; lowering maturity permitted; assignment on a `proposed` or `closed` engagement refused; authorized work of another engagement refused; gates seeded, undeletable, `established` needs a reference; execution before readiness refused; rework cycle preserves both completions and both reviews; `link_accepted_output` refused before acceptance; synthetic/authentic mixing refused; planning-basis snapshot recorded at disposition; `record_class` write-once on `provider`.
- **Read-contract rows** for every new read in `lib/domain/network.ts`, `scoping.ts`, `assignments.ts`.
- **Probes (three, real sign-in, `const a`, `PLACEHOLDER` fixtures, `finally destroy()`):** `probe:network` (scenarios 1–3), `probe:scoping` (scenarios 4–6), `probe:assignment` (scenarios 7–8), each asserting `governedState()` unchanged for every act that must create nothing (proposal, engagement, authorized work, work product, deliverable).
- **Existing sweep unchanged:** `verify:full`, `test:reads`, all 25 existing probes, before any commit.

## 16. Excluded systems remain untouched

Confirmed by design: no procurement, directory, marketplace, referral, TDD integration, RFQ/RFP, purchase order, accounts payable, invoicing or payment, contract or project management, scheduling, time tracking, utilization, automatic or AI selection or ranking, provider portal, Client Platform or CP-07 change, website change, OSA change, skills taxonomy beyond a flat operator-curated list, workflow engine, document management, accounting integration, or SLA. No existing table, enum, policy, function, or route is modified except the one BUILD01-07 assertion and the additive navigation, page, and label changes named above.

## 17. Bounded implementation recommendation and surface estimate

Route one increment to Platform & Systems Development after acceptance, in this order: vocabulary migration → records migration → BUILD01 revision and three new suites → domain reads and read-contract rows → actions and labels → Network pages and shell entry → scoping panels on Possible Work → assignment region and detail page → guides and `return.ts` → three probes → manifest regeneration → docs. Estimated surface: 2 migrations, 1 revised and 3 new pgTAP suites, roughly 26 application and tooling files (3 domain modules, `actions.ts`, `labels.ts`, `shell.tsx`, `return.ts`, 4 pages, 2 components, 3 guides, 3 probes, `package.json`, read-contract table, `ownership-manifest.json`, `docs/external-delivery.md`, separation note). Existing gate posture: `verify:full` currently fails on the pre-existing cross-repository `cp_material_retrieval_read` storage-policy prefix defect owned by Client Platform; that failure predates this work and must be reported, not fixed here.

**Genuine technical blockers:** none. **Decision returned to Founder Office rather than made here:** whether the accepted product definition is admitted to the institutional model of record before implementation begins.

EXTERNAL DELIVERY GENERATION ONE TECHNICAL ARCHITECTURE COMPLETE — READY FOR FOUNDER ACCEPTANCE AND IMPLEMENTATION AUTHORIZATION
