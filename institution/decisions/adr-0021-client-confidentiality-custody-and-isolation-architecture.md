# ADR-0021 — Generation One Client Confidentiality, Custody, and Isolation Architecture

**Classification: Development Standards and Architecture Decisions**

- **Status:** **Proposed** — awaiting Founder Office ratification. Under the ADR
  practice, *"any ADR whose substance touches institutional policy, Company
  strategy, commercial terms, disclosure, or constitutional matters requires the
  owner's explicit ratification before Accepted status."* This decision governs
  the custody of **third-party confidential material** and depends on a
  **capital-allocation decision `fd-0015` presently withholds**. It is the
  owner's.
- **Work items:** CUSTODY-01 · ISO-01 (`fd-0037` §4 Deficiencies 4 and 5).
- **Implementation:** **none.** No project, bucket, schema, migration, policy,
  account, or credential is created by this ADR.

## Context

`fd-0037` built the Client Engagement P0 backbone and stopped at two
deficiencies it could not resolve under P0 authority:

- **CUSTODY-01** — no isolated store exists for raw confidential client
  material, and `adr-0004` reserves data topology for *"the second data-owning
  system"* and its own ADR.
- **ISO-01** — the isolation guarantee that operator access be *"scopable rather
  than universally granted"* could not be met, because no authenticated identity
  exists. `fd-0037` applied the instrument's stop rule and returned it rather
  than approximating it.

**This ADR is the one `adr-0020` expressly deferred to.** That decision selected
Supabase Auth for Generation One and held that *"whether [a second consumer]
shares this project, receives its own, or federates is a decision for that
second consumer's ADR, made when a second consumer exists and its requirements
are known."* **Client Engagement is that second consumer, and its requirements
are now known.**

**Governing references consulted:** `adr-0004` (data ownership and Supabase
boundary), `adr-0005`/`adr-0018` (environment), `adr-0006` (identity and access
direction), `adr-0009` (Generation One data topology), `adr-0017` (identity,
authentication and authorization), `adr-0020` (identity provider selection),
`fd-0015` (Generation One local operating posture and the cost gate), `fd-0037`
and the Client Engagement Operating Standard, the ADR practice, and the
Internal Software Architecture Foundation §9.

## Current-state evidence

Established by direct inspection at `5eaf87a`, not from memory:

- **No authentication exists.** Application dependencies are `next`, `react`,
  `react-dom` and nothing else — no auth library, no Supabase client library, no
  session middleware. There is no operator identity of any kind.
- **One Supabase project**, under the dedicated Supabase organization "Huerta
  Group LLC", using the current secret-key model with the legacy `service_role`
  JWT disabled. It owns `contact_inquiries` and nothing else (`adr-0004`).
- **Access to it is by a single server-held secret key.** Any holder has full
  access; there is no per-operator scope and no revocation short of rotating the
  key for everyone.
- **The organization is on the Supabase Free plan, and production Supabase
  expenditure is NOT AUTHORIZED** (`fd-0015` §2.1).
- **Generation One's own project is decided but deferred.** `adr-0009` requires
  it; `fd-0015` classifies Generation One **LOCAL / PRE-PRODUCTION** with
  production *"deferred at the owner/cost gate."*
- **The P0 backbone already carries the custody seam** — five custody classes,
  required provenance fields, and mechanical refusal of confidential classes
  held repository-native, plus a corpus guard. **What it lacks is a place to
  point at.**
- **Development is performed by AI agent sessions holding full repository read
  access** — 136 of 143 commits at this baseline carry an AI co-author trailer.
  This is an observed operating fact, and it decides the repository option
  below.

## Options considered

### ALT-A — private repository or private file isolation

Attribution by path is credible and costs nothing. **It fails on three grounds,
any one of which is disqualifying.**

**Operator scoping is repository-granular, not engagement-granular.** A
collaborator reads the whole repository. One-engagement access means
one-repository-per-engagement, and administration grows with every engagement.

**Revocation is not real.** Removing a collaborator does not recall a clone.
For third-party confidential material carrying future obligations, an access
boundary that cannot be withdrawn is not an access boundary. **Git history
compounds it: deletion does not delete**, which forecloses honouring any future
retention or deletion policy.

**And the repository is the one place client material must not be**, because
this institution's development is performed by agent sessions with full
repository read access. Material placed there is **automatically inside
institution-wide AI context by default** — the precise condition
`fd-0037` §2.6 forbids. An encrypted-archive variant was considered and fails
the same way: a key once shared cannot be unshared, decrypted working copies
defeat it, and key custody merely relocates the unsolved problem.

### ALT-B — dedicated third-party object storage with its own authenticated access

Technically capable. **Rejected on `adr-0006`'s own criteria**: it introduces a
**new vendor**, a **new recurring cost**, and — decisively — **a second identity
boundary**, when `adr-0006` requires identity be introduced *"as a shared
service from the start"* and `adr-0020` has already selected the provider.
Nothing about client custody requires capabilities the selected provider lacks.

### ALT-C — a dedicated Supabase project for confidential Client Engagement material

Storage for raw material, Postgres for the reference and grant model,
**Supabase Auth as already selected**, and **row- and object-level policies as
the enforcement layer** — `adr-0017`'s posture: deny-by-default from an empty
policy set, *"row-level authorization is the enforcement layer, not
application-layer checks alone."*

**Applying `adr-0004`'s criteria produces the same result it produced for
Generation One at `adr-0009`**: sensitivity isolation, credential blast radius,
backup and recovery independence, migration independence and reversibility all
point one way. Client material is **more** sensitive than Generation One's
internal operational records, because it is not ours.

**Revocation is real** — delete a grant row and access stops at the next
request, with no outstanding copies by construction.

### ALT-D — Client Engagement as a second consumer on the Generation One project

The narrower option inspection exposes, and the one `adr-0020` named. **It is
the only option that might avoid a third project and therefore any new cost.**

**Rejected, and `fd-0015` §2.4 states the rule in terms:** *"Generation One may
not be placed inside the existing public Huerta Group Supabase project merely to
remain within Free-tier limits. **Cost pressure does not dissolve a credential
boundary.**"* The rule binds symmetrically. Sharing would place third-party
confidential material inside the credential blast radius of an internal
operational system, and it would couple a client-facing confidentiality
boundary to a system `fd-0015` classifies **LOCAL / PRE-PRODUCTION** whose own
production is deferred.

## Decision

**Confidential Client Engagement material is held in its own dedicated Supabase
project, separate from the public website's project and from Generation One's.**

- **Custody.** Raw client source material, internal working material and
  deliverables are held in that project's **Storage**, organized by
  organization and engagement. **Governed Huerta Group-authored engagement
  records remain repository-native** — hybrid custody is unchanged.
- **Identity.** **Supabase Auth**, the provider `adr-0020` selected, on the new
  project. Identity remains a shared *service*; topology is per-domain, which is
  the question `adr-0020` left to this ADR and which is hereby answered:
  **its own project, not shared, not federated** — federation may be revisited
  when a third consumer exists.
- **Authorization.** **Deny-by-default from an empty policy set**, per
  `adr-0017`. Access derives from an explicit **operator → engagement grant**;
  there is no organization-wide or all-client role. **Application-layer checks
  are never the enforcement layer.**
- **Provenance.** The governed record holds a **reference**, never the material.
  Every reference carries source identifier, organization, engagement, source
  kind, custody location, confidentiality classification, provenance, received
  context, an integrity hash where appropriate, and resolution status — **so
  that provenance stays meaningful to an operator who cannot open the
  document.**
- **Account provisioning is out-of-band**, per `adr-0020`. No application path
  creates, elevates, or deletes an actor.
- **Environment posture** follows `adr-0018`: local and preview never touch
  client material; production credentials are separate from every other
  environment; backup and recovery are documented **before** the store holds
  irreplaceable records.

**Implementation is not authorized by this ADR**, and is additionally barred by
the cost gate below.

## ADR-0006 interaction

`adr-0006`'s trigger is that *"authentication is introduced only when the first
real internal or client capability requires it."*

**Does Client Engagement require authenticated authorization? YES.** ISO-01's
requirement is that a future operator hold one-engagement access without
all-client access, and that access be **withdrawable**. No membership,
credential-sharing, filesystem or procedural arrangement enforces either. This
is not authentication being *convenient* or *modern* — it is the only mechanism
under which the required boundary is enforced rather than remembered.

**Is it the *first*? NO — and the instrument's framing should be corrected.**
Generation One was the first, at `adr-0017` and `adr-0020`. Client Engagement is
**the second consumer**, which is precisely why `adr-0020` deferred topology to
this ADR. Nothing here reopens provider selection.

**One further precision.** The requirement is not *application-level*
authorization. `adr-0017` holds that row-level authorization is the enforcement
layer *"not application-layer checks alone."* **Authentication carries identity;
the data and storage layers enforce.** An ADR that placed enforcement in the
application would weaken `adr-0017`, not extend it.

## Data-topology interaction

| Boundary | Effect |
| --- | --- |
| Public website data | **Untouched.** `adr-0004` unchanged: the existing project owns inquiry records only |
| Corporate Command Center | **Untouched.** `adr-0009`'s separate project stands; nothing is written into Headquarters |
| Client Engagement authoritative records | **Repository-native, unchanged** — the governed registry remains authoritative |
| Confidential client source material | **New, isolated boundary** — the subject of this ADR |
| Identity | Shared **provider**, per-domain **project** |
| Production / pre-production | Per `adr-0018`; client material never in local or preview |
| Backup and recovery | Independent per project — which is one reason the projects are separate |

**No existing ADR is superseded, narrowed, or contradicted.** This ADR answers a
question `adr-0020` expressly left open and applies `adr-0004`'s criteria to a
new domain.

## Backup and recovery

The architecture foundation §9 requires *"a documented backup and recovery
expectation before it holds irreplaceable records."* **Client material is
irreplaceable and is not ours to lose.**

**No single copy may be the only copy** — not one hosted project, not one local
machine, not one operator account. Required before Client #1: provider-native
backup with a stated recovery point and method; a **restore rehearsal** proving
isolation survives restore, since a restore that flattens grants would silently
widen access; detection of deletion or corruption; and backup access held under
the same boundary as the primary.

**Free-plan backup posture is very unlikely to satisfy this for third-party
confidential material.** That is a principal input to the cost determination
below, and it is stated as an expectation to be verified against the provider's
current terms rather than asserted from this repository's evidence.

## Institutional-learning, AI, and search separation

**The default state becomes isolated by construction rather than by
recollection.** Material outside the repository is outside the corpus, outside
the manifest, outside the validators, and **outside every agent session's
context**, because reaching it requires a credential and a grant that no such
session holds. Nothing needs to remember not to index it.

**This is the strongest single argument for the decision**, and it is grounded
in how this institution actually works rather than in a hypothetical.

## Cost and external dependency

**No new vendor.** The provider, the organization and the account already exist.

**But `fd-0015` §2.1 bars the expenditure: "Production Supabase expenditure:
NOT AUTHORIZED. No paid plan, no paid feature, no new recurring infrastructure
cost."** The organization is on the **Free plan**.

**The Founder Office determination required** — stated exactly, and returned
rather than incurred:

> Whether to authorize the recurring Supabase expenditure necessary to hold
> third-party confidential client material under an adequate backup, recovery
> and isolation posture — including whether a **third** project is available
> under the current plan at all, and whether Free-plan backup and project-pause
> behaviour is acceptable for material that is **not the Company's to lose**.

**Following `fd-0015` §2.2, this is a capital-allocation decision and not a
rejection or modification of the architecture decided here.** The architecture
stands whether or not the expenditure is authorized today.

## Consequences and limitations

**Consequences.** Client Engagement acquires a real confidentiality boundary
with real revocation. Authentication enters the Client Engagement domain, and
identity work joins the critical path — the cost `adr-0006` accepted
deliberately. A third project adds administrative surface and, on present
evidence, recurring cost.

**Limitations.** **Nothing is implemented, so nothing is proven.** The isolation
guarantees are architectural claims until policies exist and are tested against
attempted cross-client retrieval. **The admin boundary remains the residual
risk**: a project administrator can reach any object, so `adr-0006`'s audited
administrative action and least-privilege principles carry weight that policies
alone cannot. And **client material is not Company material** — retention,
deletion and disclosure obligations remain ungoverned (`fd-0037` ADMIN-03), and
this ADR provides the technical seam to honour a future policy without
inventing one.

## Explicit non-goals

Multitenant SaaS. A client portal. Generalized document management. A CRM.
Cross-client search or knowledge. P1 engagement execution records. Any change to
the public website, Corporate Headquarters, or Generation One. Any retention,
deletion or disclosure policy.

## Unresolved institutional dependencies

1. **The recurring-expenditure determination** above (`fd-0015` §2.1).
2. **ADMIN-01** — the engagement authorization instrument; unrelated to this ADR
   but still blocking first-client readiness.
3. **ADMIN-02** — official business email identity.
4. **ADMIN-03** — retention, deletion and disclosure doctrine, which
   `adr-0004` holds *"require owner/legal authority"* and which this ADR does
   not invent.
5. **Ratification of this ADR**, which the practice reserves to the owner.

**Validation evidence:** `npm run validate:knowledge`,
`npm run validate:architecture`, `npm run validate:references`, and the
Client Engagement gates `npm run validate:engagements` and
`npm run validate:engagement-scenarios`.
