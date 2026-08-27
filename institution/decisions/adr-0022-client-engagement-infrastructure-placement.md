# ADR-0022 — Client Engagement Generation One Infrastructure Placement

**Classification: Development Standards and Architecture Decisions**

- **Status:** **Proposed** — awaiting Founder Office ratification. It governs
  where **third-party confidential material** will live and it varies the
  implementation path of a ratified ADR. The ADR practice reserves that to the
  owner.
- **Work items:** CUSTODY-01 · ISO-01 · the Founder Office infrastructure
  reassessment.
- **Implementation:** **no project, database, container, bucket, schema, policy,
  account, or credential was created.**

## Context

ADR-0021 is ratified and selected a dedicated Supabase project for confidential
client custody. The capacity verification that followed established two facts:
the Supabase organization holds **exactly two active projects against a
Free-plan limit of two**, and the Free plan provides **no automatic backups and
no point-in-time recovery** while pausing projects after one week of
inactivity. **No paid infrastructure is authorized.**

The Founder Office then directed a reassessment: reuse existing infrastructure
first, use local Docker where hosted operation is not required, and do not
preserve a separate-project assumption merely because an earlier architecture
proposed one — **but only where direct inspection confirms the existing
boundary can truthfully hold the data.**

**This ADR is that inspection's result.** It decides *placement*, not
architecture: ADR-0021's semantic and security requirements are untouched.

**Governing references consulted:** `adr-0003` (application and repository
boundaries), `adr-0004` (data ownership and Supabase boundary), `adr-0005`
(environment strategy), `adr-0008` (Generation One module placement),
`adr-0017`, `adr-0020`, `adr-0021`, `fd-0015`, `fd-0037`, the Client Engagement
Operating Standard, and the Internal Software Architecture Foundation §9.

## Current-state evidence

Established by direct inspection at `5ac7b5c`:

- **No local Supabase project exists in this repository.** `supabase/` contains
  `migrations/` and a CLI temp directory. **There is no `config.toml`** — the
  local stack the reassessment assumed has never been initialized here.
- **Docker is installed and running**, so a local stack is *available*.
- **The existing `supabase/migrations/` set is the public website's**, and
  `repository-operations.md` records that it is applied to the live
  `huerta-group-llc` project. **Any Client Engagement migration placed there
  would be applied to the website's project.**
- The Client Engagement P0 backbone is repository-backed: a governed standard, a
  schema, an **empty** registry, and two validators in the verification gate.

## Options considered

1. **Place Client Engagement in the existing hosted `huerta-group-llc`
   project** — the Founder direction's first principle. **Rejected on
   inspection**, for reasons below.
2. **Initialize a local Supabase project in this repository** — rejected: its
   migration set is the website's, and separating them inside one repository
   invites precisely the accident that must never happen.
3. **A separate application and repository with its own local Supabase project,
   hosted only when authorized — accepted.**

## Decision

**Client Engagement's operating backend belongs in a separate application and
repository with its own Supabase project — local and free now, hosted when
authorized. It is not placed in the public website's repository, its migration
set, or its hosted project.**

**Why the existing hosted project cannot hold it**, on three accepted ADRs
rather than on preference:

- **`adr-0004`** — the existing project *"owns inquiry records only,"* is *"not
  the universal Company database,"* and **"no future system stores data in it by
  default."**
- **`adr-0005`** — isolation becomes mandatory *"the moment any system stores
  client confidential information,"* and such a system **"may not launch
  production-first."** The existing project **is** production-first by that same
  ADR's decision and has no non-production counterpart.
- **`adr-0003`** — **"client-confidential data never shares a runtime or
  repository with the public website,"** and *"authentication or privileged
  credentials → outside the public application."*

**`adr-0008` already decided this exact question for the analogous case.**
Generation One — authenticated, interactive, holding *internal* operational data
— was placed in its own repository on ADR-0003's criteria. **Client Engagement
scores the same way on every criterion and higher on sensitivity**, because its
data is not the Company's.

**What follows for placement**, by disposition:

| Disposition | Contents |
| --- | --- |
| **HOSTED_EXISTING** | **Nothing.** No object requires hosted operation today, and every candidate is barred by `adr-0004`/`adr-0005`/`adr-0003` |
| **LOCAL_PREPROD** *(separate repository)* | The operating backend for organizations, persons, relationships, opportunities and dispositions, engagements and their scope, authority, commercial and communication references, chronology, evidence registration metadata; and the P1 chain — diagnostic instances, participant-evidence metadata, findings, contradictions, limitations, reserved questions, recommendations, client decisions, authorized work, work products, deliverables, validation records, closure, follow-ups. Plus the confidentiality controls: Auth, deny-by-default RLS, operator→engagement grants, Storage policies |
| **SEPARATE_CONFIDENTIAL_BOUNDARY** | **Raw client documents · stakeholder source material · client credentials or secrets if ever legitimately held.** These require a hosted, backed-up boundary before any outside-client use. Local custody is adequate to *build and test the controls*, never to *hold a client's only copy* |
| **REPOSITORY_DOCUMENT** | The Client Engagement Operating Standard, this and every ADR, the determinations register, the engagement schema and its validators, institutional-learning admission decisions, and governance instruments. **These stay here** — they are governance about client work, never client data |

**The semantic model is authoritative wherever it is implemented.** The
repository-backed schema and validators are the model of record; a future
database implements them and does not redefine them.

**Migration compatibility is required**: portable SQL, ordinary Supabase
migrations, portable RLS and Storage policy concepts, environment configuration
rather than hard-coded local behaviour. **No local-only institutional model may
be created that would need semantic redesign to host.**

**No migration to hosted Supabase is recommended now.** Applying the
instrument's own standard — migrate only for required availability, integration,
durable shared access, or continuity — **none applies**: there is no client, no
external user, and no availability requirement. Migrating would be migration for
uniformity, which the standard forbids.

## Consequences and limitations

**The backend cannot be built in this repository**, so the construction
performed under this determination is the **repository-backed semantic model and
its enforcement** — extended to the full Opportunity → closure chain — rather
than a database. That model is what a future backend implements.

**A separate repository must be authorized before backend construction
proceeds.** Creating one is an outward-facing act and, under `adr-0003`, a
decision for its own ADR. **This ADR recommends it and does not perform it.**

**Local custody is not a substitute for hosted custody.** It is adequate to
prove the controls; a single machine may never be a client's only durable copy,
and `fd-0037`'s backup requirement stands.

**The cost gate is unchanged.** Nothing here requires expenditure, and nothing
here removes the eventual need for it: hosting confidential client material with
credible backup still meets the `fd-0015` gate when a client exists.

## Explicit non-goals

A client portal, a CRM, generalized tenancy, document management, accounting,
any change to the public website, Corporate Headquarters, or Generation One, and
any retention or disclosure policy.

## Unresolved institutional dependencies

1. **Authorization of a separate Client Engagement repository** (`adr-0003`).
2. **The hosting expenditure**, when a client exists (`fd-0015`).
3. **The organization-tenancy question** raised by the capacity verification:
   the Supabase organization also holds a separate business's project, so
   `repository-operations.md`'s claim of a *"dedicated"* account is inaccurate at
   the organization level.
4. **ADMIN-01** and **ADMIN-02**, unchanged and independent.

**Validation evidence:** `npm run validate:knowledge`,
`npm run validate:engagements`, `npm run validate:engagement-scenarios`,
`npm run verify`.
