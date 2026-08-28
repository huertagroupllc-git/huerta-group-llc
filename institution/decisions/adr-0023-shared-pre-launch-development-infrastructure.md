# ADR-0023 — Shared Pre-Launch Development Infrastructure for Huerta Group LLC

**Classification: Development Standards and Architecture Decisions**

- **Status:** **Accepted** — directed by the Founder Office, 2026-08-28. It
  varies the *timing* of a ratified decision's implementation and therefore
  required the owner's direction; that direction was given expressly and is the
  authority for this record.
- **Varies:** `adr-0022` (placement), and the implementation timing — **not the
  substance** — of `adr-0021` (custody, confidentiality and isolation).
- **Work items:** CUSTODY-01 · ISO-01, both now implemented rather than
  deferred.
- **Implementation:** the `client_engagement` schema, its objects, its bucket
  and its policies in the existing `huerta-group-llc` project. **No new
  project, no new organization, no plan change, no expenditure.**

## Context

`adr-0021` decided that confidential Client Engagement material belongs in a
**dedicated Supabase project**. `adr-0022` then found that no third project was
available under the Free plan without expenditure `fd-0015` withholds, and
placed the capability in **a separate repository with its own local Supabase
project** — local now, hosted when authorized.

That was built. The construction that followed produced a complete operating
backend and, in the process, produced two facts that bear on this decision:

- **The local Docker requirement was the most expensive part of the
  arrangement, and none of that cost bought any security.** The isolation
  guarantees come from the schema, the policies and the grants, not from the
  container they happen to run in.
- **A single-machine local stack cannot satisfy `adr-0021`'s own backup
  requirement.** It is explicit that *"no single copy may be the only copy —
  not one hosted project, not one local machine."* Local custody could prove
  the controls; it could never hold anything that mattered.

**The Founder Office has now directed a different sequencing.** Pre-launch
Huerta Group LLC development uses the **existing `huerta-group-llc` project**,
with strong logical boundaries and demonstrated extractability; **physical
project separation happens at launch-readiness**, where authentic production
requirements justify it.

**Governing references consulted:** `adr-0003`, `adr-0004`, `adr-0005`,
`adr-0017`, `adr-0020`, `adr-0021`, `adr-0022`, `fd-0015`, `fd-0037`, the
Client Engagement Operating Standard, and the Founder Office execution package
of 2026-08-28.

## What is actually being decided

**Not** *"is a shared project as safe as a dedicated one?"* It is not, and this
ADR does not claim it is.

**But** *"what must be true for a shared project to be the right place to build,
before any authentic client material exists?"* — which is a different question,
with a defensible answer, and it is the question the Founder Office asked.

## Decision

**During pre-launch development, Huerta Group LLC backend capabilities use the
existing `huerta-group-llc` Supabase project, each confined to its own
capability schema. Physical project separation is deferred to a launch-readiness
separation review.**

For Client Engagement specifically:

| Concern | Disposition |
| --- | --- |
| **Schema** | **`client_engagement`.** Every table, view, enum, function, trigger and policy the capability owns lives there. `public` — the website's schema — is neither read nor written |
| **Storage** | One bucket, **`client-engagement-confidential`**, private. Its policies on the shared `storage.objects` are prefixed **`ce_`**, because that one table cannot live in the capability's schema |
| **Auth** | **Shared**, per `adr-0020`'s "identity as a shared service." Contact is exactly two points: `operator.id → auth.users(id)`, and `auth.uid()` in every policy predicate |
| **Migrations** | **A separate ledger**, `client_engagement.schema_migrations`, so the two capabilities' histories never interleave and extraction needs no history surgery |
| **Data** | **Synthetic only.** Every fixture identity is marked `PLACEHOLDER`, and the validation gate refuses one that is not |
| **Repository** | **Unchanged.** `adr-0022`'s separate repository stands. Sharing a database does not merge codebases |

**A schema rather than a table-name prefix**, for three reasons. Extraction
becomes `pg_dump --schema=client_engagement` rather than a filter that can miss
an object. `organization`, `person` and `finding` are ordinary words that would
be permanent hazards in `public`. And crossing the boundary requires writing the
schema name, so accidental coupling cannot happen quietly.

## What `adr-0021` decided that still stands, unchanged

**Every security property. Without exception.** These are implemented now, and
were not implemented when `adr-0021` was written:

- **authenticated operator identity** — individual, never a shared credential;
- **deny by default** from an empty policy set, RLS enabled *and forced*;
- **explicit operator → engagement grants**, with **no all-client role for
  anyone, including the Founder Office**;
- **revocation that is real** — a deleted row, effective at the next request;
- **enforcement in the data and storage layers**, never in application code;
- **cross-client isolation**, proven against attempted cross-engagement
  retrieval and forged storage paths;
- **provenance sufficient for an operator who cannot open the document**;
- **raw client material outside the institutional corpus**, and so outside
  every agent session's context.

**`adr-0021`'s architecture was never the thing that required a separate
project.** Re-reading it against the implementation makes that plain: its
mechanisms are schema-level and policy-level throughout. What a separate
project adds is *blast radius* and *independent recovery* — and those are
exactly the concerns that become load-bearing when the data stops being
synthetic.

## What has changed, stated precisely

| | Before | Now |
| --- | --- | --- |
| Physical isolation | during development | **at launch-readiness** |
| Development backend | local Docker/Supabase | **the shared hosted project** |
| Trigger for separation | the architecture itself | **authentic client material, or another production requirement** |
| Justification for the change | — | **no security property depends on the timing; a local stack cost real effort and bought none** |

**`adr-0021` §"Cost and external dependency" is not overturned.** It withheld
*production* expenditure for *third-party confidential material*. That question
is untouched and returns at the separation gate.

**`fd-0015` §2.4 is not overturned either**, and it deserves stating because it
is the closest thing to a contradiction here: *"Cost pressure does not dissolve
a credential boundary."* It does not. **What dissolves the boundary is putting
someone's confidential material behind it, and that has not happened and may
not happen here.** The rule bites when the data is real; the shared project
holds nothing but `PLACEHOLDER`.

## The launch-readiness separation gate

**Client Engagement moves to its own project before any of the following.** The
list is the decision, not a reminder:

1. **any authentic client-confidential source material** — documents,
   stakeholder material, credentials;
2. **any authentic client engagement record**, even without documents;
3. **any operator who is not the Founder**;
4. **any external or client-facing access**;
5. **any availability or continuity requirement.**

And these must be resolved *at* that gate:

- **backup and recovery** meeting `adr-0021` — off-machine, tested restore,
  proof that grants survive it, deletion and corruption detection;
- **the recurring expenditure** (`fd-0015` §2.1), still withheld;
- **production Auth boundary** — whether identity federates or separates;
- **credential blast radius** — the shared project's secret key reaches every
  schema in it, which is the single strongest argument for separation and the
  reason it is scheduled rather than dismissed;
- **lifecycle independence** — the website's migrations and this capability's
  should not be able to affect one another's availability.

## Consequences and limitations

**Consequences.** Development proceeds without Docker, on infrastructure that
already exists, at no cost. The capability is exercisable end to end. The
isolation controls are now *implemented and tested* rather than architectural
claims — which is a strictly better position than `adr-0021` could describe.

**Limitations, stated plainly.**

- **The credential blast radius is real and is not mitigated by the schema.**
  The project's secret key reaches `client_engagement` as surely as it reaches
  `public`. RLS is forced, so the key is the bypass — and that is precisely why
  authentic material may not be admitted before separation.
- **Backup and recovery is now the hosted project's**, which on the Free plan
  means no automatic backup and no point-in-time recovery. **This is not worse
  than the local arrangement it replaces** — a single laptop was never
  adequate — but neither is it adequate, and it closes nothing.
- **A shared project makes a careless migration able to reach further.** The
  capability's migrations are schema-scoped and its validation gate refuses one
  that is not, which reduces the risk without eliminating the possibility.

## Explicit non-goals

Migrating Corporate Operations or any other Huerta Group system into hosted
Supabase. Any change to Huerta Group Publishing, which remains a separate
governed venture on its own project. A client portal, a CRM, generalized
tenancy, or any change to the public website's schema, data or behaviour.

## Unresolved institutional dependencies

1. **The launch-readiness separation review** above.
2. **The recurring-expenditure determination** (`fd-0015` §2.1), unchanged.
3. **ADMIN-01** — the engagement authorization instrument.
4. **ADMIN-02** — official business email identity.
5. **ADMIN-03** — retention, deletion and disclosure doctrine.

**Validation evidence:** `npm run verify` and `npm run test:db` in the Client
Engagement repository; the capability ownership manifest at
`docs/ownership-manifest.json`; and in this repository
`npm run validate:engagements`, `npm run validate:engagement-scenarios`,
`npm run validate:architecture`, `npm run verify`.
