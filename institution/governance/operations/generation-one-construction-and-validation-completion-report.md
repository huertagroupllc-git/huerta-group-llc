# Internal Operations & Command Platform — Generation One Construction & Validation Completion Report

**Classification: Institutional Record** — completion report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office for review.

- **Instrument:** Founder Office ADR Phase Review & Construction Authorization
  (recorded at [`fd-0014`](../determinations/fd-0014-generation-one-construction-authorization.md)).
- **Date:** 2026-08-19.
- **Production launch:** **Did not occur. Not authorized.**
- **Next gate:** Founder Office Generation One Construction & Validation Review.

---

## 1. Construction determination

The smallest coherent Generation One capability authorized by the Founder
Office — the **Corporate Operations Register and Founder Attention layer** —
is **constructed and validated in a governed pre-production environment**.

The system Corporate Headquarters can now operate answers the three governing
questions from real institutional matters: what is happening, what materially
changed, and what requires Founder attention. It was validated by operating
Headquarters through it, not by synthetic fixtures.

Construction stayed inside the authorized boundary. No scope expanded, no
adopted semantics were altered to make an implementation easier, and no
deferred policy question was answered speculatively.

**Eleven defects were found by adversarial inspection of the first
construction and all eleven were repaired by changing the architecture.**

## 2. Starting and ending repository SHA

| Repository | Starting | Ending |
| --- | --- | --- |
| `huerta-group-llc` (governed corpus) | `0150038` | `81b6dc6` |
| `huerta-group-operations` (Generation One runtime) | *no commits — repository was empty* | `973fa9a` |

The runtime repository is separate by ADR-0008 and structurally outside this
corpus. It has **no remote configured**; nothing has been published to any
hosting service (§33).

## 3. Commits

**Corpus (2, pushed, CI green at `81b6dc6`):**

| SHA | Commit |
| --- | --- |
| `6c589c8` | ADR-0020 — Generation One identity provider selection |
| `81b6dc6` | Record the construction authorization and reconcile readiness |

**Runtime (11, local only), bounded to construction stages:**

| SHA | Stage |
| --- | --- |
| `2cf0297` | Application foundation and identity (Stage 1) |
| `6e8929e` | Operational Record, State and provenance core (Stage 2) |
| `228310a` | Founder Attention (Stage 3) |
| `4381fcb` | Dependencies, blocking assertions, handoffs, time concepts (Stage 4) |
| `bef55d9` | Material Change and Since Last Review (Stage 5) |
| `738e856` | Venture snapshot (Stage 6) |
| `01943e0` | Eleven inspection defects repaired |
| `b6eea20` | Semantic, authorization and authentic-operations validation |
| `7490949` | Headquarters surface and Corporate Operations authoring |
| `b43aa21` | Repository documentation |
| `973fa9a` | Rollback rehearsal and recovery expectation |

## 4. Readiness-record reconciliation

Performed with **existing controlled vocabulary only**, as directed.

| Field | From | To |
| --- | --- | --- |
| `operations-systems.implementationReadiness` | `governance_blocked` | `ready_with_owner_authorization` |
| `operations-systems.maturity` | `conceptual` | `standby` |
| `operations-systems.repositoryDisposition` | `unresolved` | `future_separate_repository` |
| `identity-and-access.maturity` | `documented_direction` | `partial` |

`ready_with_owner_authorization` and `standby` are the posture the
notification service already established in this registry: implemented and
validated, deliberately not activated, awaiting an owner decision. That is
exactly true here. `identity-and-access.implementationReadiness` stays
`requirements_incomplete` because the requirements that remain incomplete are
the *shared-service* ones, not Generation One's.

**Four classification mismatches are reported rather than resolved.** No
governed vocabulary was modified.

1. `architecturalDisposition` remains `future_internal_application`. The
   application exists and runs; the enum has no current-internal-application
   value, and the capability does not yet run in production.
2. `repositoryDisposition: future_separate_repository` carries a stale
   `future_` prefix for a repository that now exists. It is the only value
   meaning "a separate repository of its own."
3. `identityRequirement` remains `future-required`. Identity is implemented
   and genuinely required; the enum offers only `none`, `future-required` and
   `unresolved`.
4. `evidencePaths` cite in-corpus governance artifacts, because this
   capability's runtime is structurally outside the corpus. The validator's
   evidence rule assumes in-repository implementation. This follows the
   precedent `publishing-platform` already set.

Each is a vocabulary gap for the appropriate authority, never a factual
dispute. **The `fd-0014` determination remains controlling over the registry
value in every case.** Prior postures are preserved and not rewritten.

## 5. Identity-provider evaluation

Bounded, as authorized, and deliberately not a procurement exercise.

The material facts: the initial population is **two**; enforcement is already
determined to be row-level authorization; and the data store is already
determined to be a Supabase project whose issued JWT is the subject of those
policies. There is no integration, no machine identity, and no external
consumer.

Evaluated against ADR-0006's five recorded criteria:

| Criterion | Dedicated external provider | Self-hosted | Supabase Auth |
| --- | --- | --- | --- |
| Security posture | Strong | Strong if operated well | Strong; credentials never touch application code |
| Auditability | Strongest | Strong | Adequate: provider events + policy decisions + ADR-0018 audit trail |
| Portability / exit | Moderate | Strong | **Strongest here** — the dependency is one JWT claim |
| Cost proportionality | New recurring cost | Infrastructure cost | **None** — no new vendor |
| Operational burden | Low | **High** | **Lowest** — no additional service to run |

## 6. Identity-provider selection and rationale

**Supabase Auth on the project ADR-0009 already requires**, with email and
password for the provisioned internal population. Recorded as
[ADR-0020](../../decisions/adr-0020-generation-one-identity-provider-selection.md).

Portability decided it. The identity dependency is one claim read by
`auth.uid()` inside row-level policies; accounts are two rows keyed by that
identifier. Replacing the provider means issuing a JWT with the same claim and
repointing one helper function — no institutional data, no policy and no
application logic is provider-shaped. **The exit path is short because the
commitment is small.**

A dedicated external provider was rejected because it would introduce a new
vendor, a new recurring cost and a consequential external dependency — each an
explicit Founder Office return trigger — to buy capability no accepted
requirement asks for. Self-hosted identity was rejected as more operational
burden than the application it protects; hand-rolled authentication is the
improvisation ADR-0006 rejected.

**No Founder Office return trigger fired.** Nothing in the accepted
architecture changed, no significant recurring cost was created, no
consequential external dependency was introduced beyond infrastructure
ADR-0009 already requires, and nothing outside Development's delegated
technical authority was decided.

The selection is **scoped to Generation One and does not settle shared
identity**. Whether a second consumer shares this project, receives its own,
or federates is that consumer's ADR to make when it exists.

## 7. Environment implementation

ADR-0018 posture, implemented:

- **Local pre-production** — its own Supabase project, its own data, its own
  credentials, seeded with authentic Headquarters matters. `.env.local` is
  never committed and is regenerated from the running stack.
- **Preview / test** — not created; would carry its own project and
  credentials.
- **Production** — **not created, not authorized.**

Migrations are forward-only and applied to non-production first. **Applied
state is confirmed against the live project rather than assumed from the
repository** — all eight migrations verified present in
`supabase_migrations.schema_migrations`.

**Rollback rehearsed** (2026-08-19), before any operational record existed
outside the seed: a divergence was written directly to the database outside
every authoring path; `supabase db reset` was executed; the divergence was
gone, the baseline restored, all eight migrations re-applied, and
`npm run verify` re-run green. Recorded in the runtime repository at
`docs/environments.md`.

**No public exposure exists.** No deployment target, no remote repository, no
hosting service holds any part of this system.

## 8. Authentication / authorization / RLS implementation

Deny-by-default. **Every one of the 18 tables enables row level security**, 45
policies exist, and every policy is additive from nothing. Row-level
authorization is the enforcement layer; the application's proxy is a redirect
convenience and is documented as not being the security boundary.

Access classes, exactly as ADR-0017 grants and nothing more:

| Class | May |
| --- | --- |
| `founder_office` | Read all · record Review Events · override attention priority · act on attention |
| `corporate_operations` | Author Headquarters representation · admit and normalize attention · set confirmation |
| `source_function` | Nominate attention · supply and confirm facts **within its own domain only** · read |
| `system_administrator` | Operate the system. **No authoring authority and no Headquarters read.** |
| Machine / integration | **None exists.** No integration exists. |

**Technical permission is never institutional authority.** No role name
implies an office. Account provisioning is deliberately out-of-band: the
application exposes no path to create, elevate or delete an actor.

## 9. Operational Record / Operational Instance implementation

Two identities, never one. The Instance carries a neutral designation that
survives correction, supersession and re-admission of any Record representing
it; the Record carries an opaque surrogate identifier. Neither encodes
classification, function, authority, venture, sensitivity or status.

Every Record records **which of Foundation §5's nine admission grounds**
justifies representing the matter at all, and why that ground applies. Routine
activity earns no Record by occurring.

**Records are corrected by supersession, never rewritten.** Identity,
admission and source provenance are frozen by trigger — a repair, since the
first construction allowed silent in-place edits that destroyed
reconstructability.

## 10. State implementation

State is an **open set of dimensions declared per record kind**, never a
column. Each value carries its own as-of, source domain, source function,
source reference and confirmation, because dimensions are sourced
independently.

Values are **append-only**: superseding a dimension writes a new row and marks
the old one superseded, and both remain readable. A trigger refuses any update
that changes anything but `superseded_at` — a repair; the original supersession
policy permitted overwriting the value in place.

**Declared vocabularies are enforced**, also a repair: the declaration existed
and nothing checked values against it.

Prohibited by construction and verified absent: a single `status` column, a
global status enum, a vocabulary shared across record kinds, any derivation of
State from the latest Material Change, and any storage of "blocked" or
"requires attention" as a state value. A dimension named `status`, `state`,
`stage`, `blocked`, `attention` or `priority` is refused by the database.

## 11. Provenance implementation

**Required at creation on every represented fact**, never backfilled: source
domain, source function or venture, source reference, as-of or confirmed-at,
representation owner, and any uncertainty. A fact without provenance is
invalid, not incomplete.

**The representation owner is invariantly Corporate Operations**, enforced by
check constraint on the Record, state values, material changes, venture
snapshots and renewals — the last four added as a repair.

**The authoring vocabulary provides no way to express that Corporate
Operations determined another function's facts.** The forms ask which source
function established the fact and record only its Headquarters consequence.

**Doubt is representable.** Confirmation is three-valued — confirmed,
unresolved, known stale — and unresolved or stale confirmation must state why.
Freshness is qualitative: **no numeric score, threshold, automatic expiry, or
system-generated staleness alert exists anywhere.** Confirmation changes are
recorded as events, which is ADR-0016's seventh history — added as a repair,
since it did not exist.

## 12. Founder Attention implementation

A distinct entity referencing a Record, never a flag on one.

Entry requires **all four** Foundation §10 conditions: a qualifying reason
from the ten, a stated consequence, present rather than hypothetical
appropriateness, and a statable expected Founder role. The authoring path
refuses three of four.

Priority is **three distinct fields** — proposed, normalized, override — each
with actor and reason, so disagreement stays visible. **No numeric severity,
weight, rank or computed score exists anywhere in the schema**, verified
mechanically.

**Non-suppression is structural**: a governance-mandated nomination offers
only admitted or escalated, and the database refuses to record it as not
admitted. Refused nominations are retained with their reason.

Standing is passive — nothing re-alerts because time passed. **Exit records
which of the seven grounds applied and changes nothing about the Record.** A
standing item now asserts no exit ground at all; the first construction
defaulted it to "founder action occurred," so every standing item falsely
claimed the Founder had already acted.

Class boundaries are enforced at column level, a repair: only Corporate
Operations normalizes, only the Founder Office overrides, and admission facts
are fixed once admitted.

## 13. Dependency implementation

A relation to what a matter relies upon, carrying kind, description, the party
it rests with, and an optional reference to another Record. **It has no
blocking field and none may be added**, verified mechanically. Dependencies
appear, change and cease to matter without any workflow.

## 14. Blocker implementation

A **separate, time-bounded assertion** that a named condition or dependency
presently prevents meaningful advancement. It must state **both limbs** of
Foundation §12's beginning test, and on ending records which of the enumerated
ends applied and who ended it.

**Ending a blocking assertion completes nothing** — they are different objects
and no transition on one touches the other. A Record may hold several
concurrent assertions. "Blocked" is a read-time projection over open
assertions and is never stored.

## 15. Handoff implementation

Source party, receiving party, expected action, dependency created or
affected, disposition, and escalation condition. **There is no authority
column and none may be added**, verified mechanically.

Dispositions are performed · authoritative disposition returned · validly
redirected · superseded · other accepted disposition. **Acknowledgment is
absent and is not offered**, verified mechanically. A disposition may create a
new dependency that stands independently.

## 16. Deadline / Renewal / Follow-Up implementation

**Three concepts, no shared parent**, verified mechanically. A Renewal is a
continuation requirement with an existing standing and a consequence of lapse,
and may exist with **zero** Deadlines. A Deadline is a consequential time
boundary that must state the consequence of passing. A Follow-Up's due date is
**optional** and is never invented. All three may attach to the same Record
without becoming the same thing.

## 17. Material Change implementation

**Authored, never derived.** A person asserts it, names which of Foundation
§7's eleven materiality limbs it satisfies, and states the consequence. **An
entry that cannot state its consequence is refused** by the form and by the
database. **No trigger anywhere produces a Material Change**, verified by
inspecting every trigger function in the schema.

Entries are append-only; corrections are new entries referencing what they
correct.

**Headquarters materiality is Corporate Operations' jurisdiction** — a repair.
The first construction let source functions author Material Changes directly;
they now supply facts within their own domain and nominate attention instead.

The technical audit is a separate structure that is never a Headquarters
surface and is never promoted into a Material Change. It is now actually
written to, which ADR-0018 requires and the first construction omitted.

## 18. Since Last Review implementation

A **reader-scoped** Review Event bounds the view, so one reader's review never
consumes another's. Recording one is the Founder Office capability and no
other's — a repair; any reader could previously record one.

**The view is bounded by `recorded_at`.** A matter that occurred before the
previous review but reached Headquarters afterward **appears**, marked
late-recorded with both timestamps shown. This is the single most important
executable test in the package, and it passes.

Today / 7 Days / 30 Days remain available as the same query with a different
bound. They do not replace Since Last Review as the primary model.

## 19. `recorded_at` / `occurred_at` behavior

Two distinct columns, **never merged and neither derived from the other**,
verified mechanically. `recorded_at` is required and is the inclusion
boundary. `occurred_at` is **nullable by design**: where occurrence time is
unknown it stays unknown and is never manufactured from the recording time.
The interface states "occurrence time unknown — not inferred from the
recording time" rather than showing a fabricated date.

Scope boundary observed: this is Generation One operational-view doctrine
only, and establishes no universal institutional temporal policy.

## 20. Venture Snapshot implementation

One snapshot per governed venture carrying only the Requirements Report §6
fields, referencing the institutional `venture-registry.json` identity.
**No child collections exist** — that absence is the structural guarantee
behind "summarize the venture; do not reproduce the venture." No venture task,
product, workflow or lifecycle entity exists.

Huerta Group Publishing is the first and only instance. Who supplied the
snapshot is recorded as provenance, and **both paths remain open in policy**
(§23).

## 21. Relationship seam implementation or explicit non-implementation

**Not implemented.** Stage 7 is conditional on authentic use establishing a
concrete Headquarters need, and it did not. Every matter exercised during
validation was represented without one.

No party, category, disposition or follow-up-context structure exists, and no
pipeline, stage, score, deal, campaign, activity history or enrichment field
exists to be unwound later. Relationship follow-up remains representable as an
ordinary Follow-Up on a Record where one is genuinely owed.

## 22. Manual operating procedures retained

Deliberately manual, as a design position rather than a shortfall: authoring
every Operational Record and Material Change · assessing materiality ·
nominating and admitting attention · recording handoffs and dispositions ·
supplying and confirming venture snapshots · recording financial and
administrative consequence · identifying meaningful relationships · confirming
freshness · provisioning accounts.

Automating immature workflows freezes assumptions before the institution
understands them. Each manual step that later proves genuinely burdensome
becomes the evidence for a future integration ADR.

## 23. Deferred operational-policy questions encountered

| Question | Encountered? | Disposition |
| --- | --- | --- |
| Change horizon beyond Since Last Review | No | `fd-0014` determined `recorded_at`; convenience windows exist and do not replace it |
| **Venture snapshot responsibility** | **Yes** | **Not answered.** The write policy admits both Corporate Operations and the owning venture function, and who supplied it is recorded as provenance. No construction decision required choosing |
| Financial visibility boundary | No | Nothing beyond operational consequence was built; the seam is designed, the policy is not |
| Administration & Compliance visibility boundary | No | Same |

**No deferred question was answered speculatively**, and none forced a stop.

## 24. Retention/disclosure questions encountered

**One, and it is reported rather than resolved.** ADR-0009 and ADR-0018
require a documented backup and recovery expectation before the store holds
irreplaceable records. That expectation cannot be written honestly without a
retention posture, and **no retention, deletion, archival or disclosure
doctrine is implied by the ADR package or by the construction authorization**
(`fd-0014` §6).

Disposition: the pre-production store holds nothing irreplaceable — everything
in it is a migration, the seed, or validation output. `docs/environments.md`
in the runtime repository records what must be settled before production
(retention, recovery objective, and a *performed* restore rehearsal) rather
than inventing a policy. **This is a Founder Office decision, listed at §36.**

Ordinary technical safeguards necessary to protect the system were applied and
nothing more.

## 25. Authentic Corporate Headquarters validation cases

Real institutional matters, not synthetic fixtures:

| Matter | Exercises |
| --- | --- |
| **The Generation One program** | Dependency on Founder authorization; a blocking assertion begun and ended; a handoff to Development disposed; Material Changes distinct from all of them |
| **The Generation One construction authorization** | Multiple simultaneous dimensions; supersession preserving the prior value; provenance owned by the Founder Office while Headquarters owns representation |
| **Huerta Group Publishing** | Parent-relevant standing without venture task reproduction; a Material Change with genuinely unknown occurrence time |
| **HGP trade-name registration** | One matter carrying a Renewal, a Deadline and a Follow-Up simultaneously; a change that occurred three days before the review and was recorded two hours before it |
| **The custom-domain launch** | Attention arising while state is unchanged; owner-gated, valid but unexecuted |
| **The notification standby** | A routine condition that must stay invisible at Headquarters |
| **HGP capability beyond the production chain** | Admitted through the running interface during validation; a routine formatting change was then refused for naming no materiality limb |

## 26. §31 semantic-test results

All ten answer **yes**, as executable cases against the running system.

| # | Test | Result | Evidence |
| --- | --- | --- | --- |
| 1 | State changes without creating Attention | **Yes** | State recorded on the program; no Attention Item came into being |
| 2 | Attention arises without a State change | **Yes** | The custom-domain launch: no state value exists, an item stands |
| 3 | Dependency exists without being a Blocker | **Yes** | Founder-authorization dependency with the matter not blocked |
| 4 | Blocker removed, matter still incomplete | **Yes** | Assertion ended; Record unchanged; dependency still standing |
| 5 | Handoff completes while a Dependency remains | **Yes** | Handoff disposed while the Founder determination dependency stands |
| 6 | Fact owned elsewhere, Headquarters owns representation | **Yes** | Founder Office source, Corporate Operations owner; the reverse is refused |
| 7 | Renewal exists before an approaching Deadline | **Yes** | Renewal with zero Deadlines |
| 8 | Follow-Up exists without a Deadline | **Yes** | Follow-Up with a null due date, not invented |
| 9 | Routine change stays invisible because immaterial | **Yes** | A change that could not state its consequence was refused |
| 10 | Multiple simultaneous dimensions, no generic status | **Yes** | Three dimensions on one matter; a `status` dimension is refused |

## 27. Adversarial inspection findings

Eleven defects in the first construction. The blueprint predicted the two most
likely failures — a single `status` column and deriving Material Change from
row mutations — and **neither occurred**. The defects that did occur were
quieter.

| # | Defect | Class |
| --- | --- | --- |
| 1 | A standing Attention Item asserted an exit ground, claiming the Founder had acted | False assertion |
| 2 | Declared state vocabularies were not enforced | Semantic collapse |
| 3 | State dimension values were rewritable in place despite the append-only rule | History loss |
| 4 | Source functions could author Headquarters Material Changes | Authority leakage |
| 5 | Any reader could record a Review Event | Authority leakage |
| 6 | `representation_owner` was absent from every fact except the Record | Provenance |
| 7 | ADR-0016's seventh history — confirmation events — did not exist | History gap |
| 8 | Operational Records were silently overwritable, destroying reconstructability | History loss |
| 9 | Each access class could rewrite the other's attention decision | Authority leakage |
| 10 | The audit table ADR-0018 requires was never written to | Operability |
| 11 | An ended blocking assertion recorded no actor; a normalized priority recorded none | Completeness |

Two further defects were found before this pass: **the pgTAP suites had never
been executed** — their fixtures collided with the seed — and **no seeded actor
could sign in**, because GoTrue's token columns were left NULL.

## 28. Repairs performed

All thirteen repaired. **Every repair changed the architecture; no adopted
semantics were altered to accommodate an implementation.** The repairs are one
migration (`20260819080000`) and are executable-tested rather than asserted.

Where the fault was in the *test* rather than the system, the test was
corrected and said so: one assertion claimed an audit row sharing an id with
the row it records was a defect, which it is not. The meaningful invariant —
that no trigger anywhere produces a Material Change — replaced it.

One repair was made to the interface after validation: the review page offered
"Mark reviewed" to Corporate Operations, who is no longer permitted to record
one. Only the Founder Office is offered the control.

## 29. Security validation

| Check | Result |
| --- | --- |
| Deny-by-default before any session | **Pass** — an anonymous caller reads no Headquarters representation |
| Row level security enabled on every table | **Pass** — 18 of 18 |
| Unauthenticated application access | **Pass** — redirected to sign-in |
| Each class does what ADR-0017 grants and nothing more | **Pass** |
| Administrator cannot author | **Pass** |
| Administrator is not a Headquarters reader | **Pass** |
| Technical audit is not a Headquarters surface for anyone else | **Pass** |
| Founder Office cannot author representation | **Pass** |
| Corporate Operations cannot override attention priority | **Pass** |
| Source function cannot supply another function's facts | **Pass** |
| Environment isolation | **Pass** — no production credential, target, or deployment exists |
| Secrets in version control | **None** — `.env.local` ignored; the staged diff carries no key material |

## 30. Repository/application validation results

**Runtime repository — `npm run verify`: all green.**

- 8 structural invariant checks read straight from the migrations
- lint · type checking · production-equivalent build
- Reset to the seeded baseline, then **83 pgTAP assertions** across the
  semantic-conformance and authorization suites
- **12 access-boundary checks** against the running stack
- **28 authentic-operations checks** operating Headquarters as provisioned
  actors

When the stack is not running, the database stages are **skipped loudly** and
never silently passed.

**Corpus repository — `npm run verify`: all gate steps green.** Knowledge,
architecture, methods, IP, education, determinations, evolution, ventures and
reference validation, plus lint, type checking and the production build.

Migration validation: all eight applied and **confirmed against the live
project** rather than assumed from the repository. `git diff` scope reviewed:
both trees clean, no unrelated work touched, no history rewritten.

## 31. CI verification

Corpus repository: workflow `verify` **succeeded** at `81b6dc6`
(run 32326393859).

The runtime repository has **no remote and no CI**, because publishing it is
an outward-facing act that construction authorization does not cover (§36).

## 32. Pre-production environment verification

Local pre-production stack running, eight migrations applied and confirmed
against the live project, seeded with authentic Headquarters matters, both
provisioned actors able to sign in, and the full gate green against it.
Rollback rehearsed with observed evidence (§7).

**No production exposure exists**: no production project, no production
credentials, no deployment target, no remote repository, no hosting service.

## 33. Known limitations

1. **Single-user validation is weak validation.** With effectively one primary
   user, a semantic error may go unnoticed until a second arrives. Mitigated
   by exercising the distinctions deliberately rather than incidentally.
2. **Manual maintenance can decay**, and a register that stops being current
   is worse than none because it is trusted. The architecture makes decay
   *visible* through qualitative freshness and representable doubt; it does
   not prevent it.
3. **Materiality and freshness judgement are not mechanically checkable.**
   They are named as human responsibilities rather than pretended into tests.
4. **No backup or recovery expectation exists for production**, and cannot
   honestly be written before retention is determined (§24).
5. **No preview/test environment exists.** Only local pre-production was
   constructed; a preview environment would need its own project and
   credentials.
6. **Password authentication is the floor, not a target.** Stronger factors
   are available from the same provider without an architecture change.
7. **Identity and data share a provider**, so a provider-level compromise
   reaches both. They already share one under ADR-0009.
8. **Account provisioning is out-of-band** by design, which means it is a
   manual administrative act with no interface.
9. **The Instance designation is human-chosen**, so two Records could
   represent the same matter under different designations if authoring is
   careless. No mechanical check can catch that.

## 34. Scope-exclusion confirmation

**No excluded capability was built.** Absent, and structurally unrepresentable
without a scope change returning to the Founder Office:

CRM · ERP · accounting replication · QuickBooks replacement · compliance
case-management replacement · governance-repository replication · venture-system
replacement · venture task management · broad integrations · universal
synchronization · AI agents · AI corporate querying · automated executive
summaries · automated corporate interpretation · advanced analytics · universal
notifications · general workflow orchestration · universal workflow engine ·
universal operational state machine · premature Command Center.

**Generation One synchronizes nothing.** No integration exists and no machine
identity exists. Technical extensibility was not treated as authorization.

## 35. Production-readiness assessment

**The bounded capability is functionally and semantically complete and
validated in pre-production.** Acceptance is semantic, and it is met: the
Founder can answer the three governing questions without reconstructing state
by hand, and no represented matter was forced into a shape that collapses a
distinction.

**It is not production-ready**, and the gaps are not defects of construction:

| Gap | Nature |
| --- | --- |
| No production environment or credentials | Requires authorization to create |
| No preview/test environment | Requires authorization to create |
| No backup, recovery, or retention posture | **Requires an institutional determination**, not a technical one |
| No remote repository | Requires authorization to publish |
| Single-user validation | Inherent at this population |

**Production launch is not authorized and did not occur.** Successful
pre-production validation is not implicit production approval.

## 36. Exact Founder Office decisions required before production

1. **Authorize production launch of Generation One**, or withhold it. Nothing
   below matters if this is withheld.
2. **Determine the retention posture for operational records and their
   histories** — how long they are kept, and on what ground. This is the
   blocking decision, because a backup and recovery expectation cannot be
   written without it, and ADR-0009 and ADR-0018 require that expectation
   before the store holds irreplaceable records.
3. **Authorize creation of the production Supabase project and its
   credentials**, held separately from every other environment and from the
   public website's.
4. **Authorize creation of a preview/test environment**, or accept its absence
   and the reduced migration-testing confidence that follows.
5. **Authorize publishing the runtime repository to a hosting service**, or
   direct that it remain local. This determines whether CI can run against it.
6. **Determine venture snapshot responsibility** — venture-supplied or
   Corporate Operations-derived. Not blocking: both paths are open, and who
   supplied each snapshot is recorded either way.
7. **Confirm or vary the recorded-at change horizon** now that it can be seen
   working, if the Founder Office wishes to revisit it in light of use.

Items 4 through 7 may be deferred. **Items 1 through 3 are the gate.**

## 37. Confirmation that production launch did not occur

**Production launch did not occur.**

No production environment was created. No production Supabase project,
database, credential, or deployment target exists. No hosting service holds
any part of this system. No remote repository exists for the runtime code. No
public route, domain, or endpoint exposes any Generation One capability. No
production behavior of any existing system changed — the public website is
untouched.

Everything constructed exists in a local pre-production environment holding no
irreplaceable record, and remains there.

**Construction was authorized. Production launch was not. Construction stopped
where the authorization stopped.**
