# evo-0005 — Generation One Constructed and Validated in Pre-Production: the First Authenticated Institutional System

**Classification: Institutional Record** — evolution record
(evidentiary, non-governing).

- **Date:** 2026-08-19
- **Institutional domain:** operations
- **Type of evolution:** capability_change
- **Retrospective:** false

## Prior state

Huerta Group LLC operated one runtime system: a statically rendered public
website with a single Server Action for inquiry intake, a notification module
on standby, no authentication, no admin interface, and no internal application
of any kind (`internal-software-architecture.md` §1; ADR-0008).

Corporate Headquarters coordination therefore happened outside any system.
The Generation One Requirements Report identified the consequence:
fragmentation, dependency invisibility, and change detection performed by
memory.

The Corporate Operations Semantics Foundation V1 had been adopted as
prospective doctrine (`fd-0012`), both authoritative sources preserved
(`fd-0013`), and the accepted architecture recorded in the Phase 1 Technical
Blueprint and ADR-0008 through ADR-0019. Every one of those documents states
that nothing is implemented. `operations-systems` stood at
`implementationReadiness: governance_blocked` — the requirements deficiency
discharged, and Founder Office authorization the thing that remained.

## Change or development

The Founder Office accepted the ADR package and the technical architecture,
and authorized bounded construction (`fd-0014`). Institutional Platform
Development constructed and validated Generation One in a governed
pre-production environment.

**The first authenticated institutional system now exists.** It runs as a
separate application in its own repository (`huerta-group-operations`) on its
own Supabase project, per ADR-0008 and ADR-0009 — outside the public website's
runtime and credential boundary, in ten bounded commits from `2cf0297` to
`b43aa21`.

What was built is the Corporate Operations Register and the Founder Attention
layer: Operational Instances and Records with two identities; multidimensional
State declared per record kind; provenance required at creation; Founder
Attention as a separate entity with nomination, admission, three priority
fields and exit; Dependencies, time-bounded Blocking assertions and Handoffs
as three distinct things; Renewals, Deadlines and Follow-Ups with no shared
parent; authored Material Change; Since Last Review bounded by `recorded_at`;
and the venture snapshot. A Corporate Operations authoring surface refuses
entries that cannot state what the semantics require.

**The identity provider was selected** under the bounded authorization:
Supabase Auth on the project ADR-0009 already requires, chosen on portability
above all — the dependency is one JWT claim read inside row-level policies
(ADR-0020). No Founder Office return trigger fired.

**Adversarial inspection found eleven defects in the first construction, and
all eleven were repaired by changing the architecture** rather than the
semantics. The most consequential were structural rather than cosmetic: a
standing Attention Item falsely claimed the Founder had already acted;
declared state vocabularies were not enforced; state values and Operational
Records were rewritable in place, destroying the reconstructability ADR-0016
requires; ADR-0016's seventh history did not exist; source functions could
author Headquarters materiality, which is representation jurisdiction; any
reader could record a Review Event; the Attention update policy let each class
reach into the other's decision; and the audit table ADR-0018 requires had
never been written to.

**Production launch did not occur and is not authorized.**

## Reason or evidence

The Founder Office instrument recorded at `fd-0014` authorized construction
and withheld production launch.

Evidence of conformance, run against the running pre-production stack rather
than asserted: 83 pgTAP assertions across a semantic-conformance suite and an
authorization suite; 12 access-boundary checks; and 28 authentic-operations
checks that operate Headquarters through the system as provisioned actors
using real institutional matters — the Generation One program with its
dependency, its blocking assertion begun and ended and its handoff disposed;
the HGP venture; the trade-name registration carrying a Renewal, a Deadline
and a Follow-Up at once; the owner-gated custom-domain launch; and the
notification standby as a routine condition that must stay invisible.

All ten Foundation §31 tests answer **yes** as executable cases.

## Authority involved

- **Founder Office** — acceptance of the ADR package and architecture,
  construction authorization, withholding of production launch, the
  `recorded_at` temporal determination (`fd-0014`).
- **Corporate Operations & Command Management** — the operational semantics
  the system implements, and Headquarters representation responsibility.
- **Institutional Platform Development** — identity-provider selection within
  delegated technical authority, construction, inspection, repair, and
  validation.

## Governing decision references

`fd-0014` · `fd-0013` · `fd-0012` · `fd-0011` · ADR-0020 · ADR-0019 ·
ADR-0018 · ADR-0017 · ADR-0016 · ADR-0015 · ADR-0014 · ADR-0013 · ADR-0012 ·
ADR-0011 · ADR-0010 · ADR-0009 · ADR-0008 · ADR-0006 · ADR-0005 · ADR-0004 ·
ADR-0003

## Canonical artifact references

- `institution/governance/determinations/fd-0014-generation-one-construction-authorization.md`
- `institution/decisions/adr-0020-generation-one-identity-provider-selection.md`
- `institution/technical/generation-one-operations-platform-architecture.md`
- `institution/foundations/operations/CORP-OPS-SEM-FND-V1.md`
- `institution/governance/operations/GEN1-REQ-V1.md`
- `institution/metadata/registries/capability-registry.json`
- `institution/standards/repository/documentation-index.md`

Runtime artifacts live in the `huerta-group-operations` repository, outside
this corpus by ADR-0008. They are referenced, never mirrored here.

## Implications

**Readiness reconciliation, and the mismatches it exposed.** Using existing
controlled vocabulary only, `operations-systems` moves from
`implementationReadiness: governance_blocked` to
`ready_with_owner_authorization`, and from `maturity: conceptual` to
`standby` — the posture the notification service already established in this
registry: implemented and hardened, deliberately not activated, awaiting an
owner decision. `repositoryDisposition` moves from `unresolved` to
`future_separate_repository`, which ADR-0008 determined.

**Three classification mismatches are reported rather than resolved**, since
no vocabulary may be modified without authority:

1. `architecturalDisposition` remains `future_internal_application`. The
   application is no longer future — it exists and runs — but the enum offers
   no current-internal-application value, and the capability does not yet run
   in production. The value is defensible and stale, and it is left unchanged.
2. `repositoryDisposition: future_separate_repository` is the only value
   meaning "a separate repository of its own." That repository now exists, so
   the `future_` prefix is stale in the same way.
3. `identityRequirement` remains `future-required`. Identity is now
   implemented and genuinely required; the enum offers only `none`,
   `future-required` and `unresolved`, with no plain `required`.

Each is a vocabulary gap, not a factual dispute. Whether the enums gain
current-state values is a governance decision for the appropriate authority,
and the Founder Office determination at `fd-0014` remains controlling over
the registry value in every case.

**Identity is no longer absent.** `identity-and-access` moves from
`maturity: documented_direction` to `partial`: it exists for exactly one
consumer. Its readiness stays `requirements_incomplete`, because the
requirements that are incomplete are the *shared-service* ones — whether a
second consumer shares this project, receives its own, or federates is
expressly left to that consumer's ADR (ADR-0020).

**What this constrains.** Generation One synchronizes nothing, replicates
nothing authoritative, and cannot represent accounting ledgers, compliance case
files, governance records, venture tasks, or contacts without a scope change
returning to the Founder Office. Four operational-policy questions remain
deferred and unanswered by design.

## Dependencies

Depended on: `fd-0014` (authorization), `fd-0013` (sources preserved),
`fd-0012` (Foundation adopted), the accepted ADR package, and ADR-0005's
isolation threshold, which forecloses production-first for this system.

Now depends on it: the Founder Office Generation One Construction & Validation
Review, which is the gate before any production launch.

## Supersession / later refinement references

None.

## Historical notes

The blueprint predicted that the most likely failure was a single `status`
column, and that the second most likely was deriving Material Change from row
mutations. Neither occurred. The defects that did occur were quieter: a
default value that made every standing item assert a Founder action, a
declared vocabulary that nothing enforced, and an append-only rule that an
`UPDATE` policy silently permitted overwriting. The lesson worth preserving is
that the semantics were protected where they were argued about, and eroded
where they were assumed.
