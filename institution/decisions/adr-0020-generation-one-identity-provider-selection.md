# ADR-0020 — Generation One Identity Provider Selection

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-13

## Context

ADR-0017 defined Generation One's access model and **deferred provider
selection** to "a bounded follow-on decision against ADR-0006's recorded
criteria — security posture, auditability, portability and exit path, cost
proportionality, operational burden — evaluated with evidence rather than
asserted." The Founder Office construction authorization authorizes exactly
that: a bounded technical evaluation and selection within the accepted
architecture, with the instruction to **select the narrowest technically
sufficient identity approach for Generation One**, and an explicit prohibition
against turning it into an enterprise identity-platform procurement exercise.

Governing references consulted: ADR-0006 (criteria and provider-neutral
direction), ADR-0017 (access classes and enforcement posture), ADR-0009
(Generation One owns a separate Supabase project), ADR-0018 (environment
isolation), the blueprint §27 and §30, and the Founder Office return triggers.

The material facts. The initial population is **two**: the Founder and
Corporate Operations. Enforcement is already determined to be **row-level
authorization**, not application-layer checks. The data store is already
determined to be a **Supabase project**, which ships an authentication service
whose issued JWT is the subject of those row-level policies. There is no
integration, no machine identity, and no external consumer in Generation One.

## Options considered

1. **A dedicated external identity provider** (Auth0, Clerk, WorkOS or
   equivalent). Genuinely attractive on auditability and on a future
   federation story. **Rejected** for Generation One: it introduces a new
   vendor, a new recurring cost, and a consequential external dependency for a
   two-person internal tool — each of which is an explicit Founder Office
   return trigger — and it buys capability (social login, SSO, directory sync,
   organizations) that no accepted requirement asks for. Choosing it here would
   be the speculative enterprise identity architecture the authorization
   forbids.
2. **Self-hosted identity** (Keycloak, Ory, or a hand-rolled session layer).
   Rejected: hand-rolled authentication is the improvisation ADR-0006 rejected
   explicitly, and a self-hosted identity server is more operational burden
   than the entire application it protects.
3. **Supabase Auth on the project ADR-0009 already requires — accepted.**

## Decision

**Generation One authenticates through Supabase Auth on its own Supabase
project**, with email and password for the provisioned internal population,
and its issued JWT as the subject of every row-level policy.

Applying ADR-0006's five criteria:

- **Security posture.** Credentials are never handled by application code;
  the enforcement layer is row-level authorization, so a defect in a page or a
  Server Function cannot widen access beyond the policies. Deny-by-default
  holds from an empty policy set.
- **Auditability.** Authentication events are held by the provider;
  authorization decisions are policy decisions in the database; and
  ADR-0018's structured audit trail records mutations from the first release.
- **Portability and exit path.** This is the criterion that decides it. The
  identity dependency is one claim — the subject identifier — read by
  `auth.uid()` inside policies. Accounts are a table of two rows keyed by that
  identifier. Replacing the provider means issuing a JWT with the same claim
  and repointing one helper function; no institutional data, no policy, and no
  application logic is provider-shaped. **The exit path is short because the
  commitment is small.**
- **Cost proportionality.** No new vendor, no new recurring cost, no new
  contract. Authentication is included in infrastructure the accepted
  architecture already requires.
- **Operational burden.** One provider, one credential boundary per
  environment, no additional service to run, monitor, or patch.

**Account provisioning is deliberately out-of-band.** The application exposes
no path to create, elevate, or delete an actor. Provisioning is an
administrative act performed against the project directly, and the actor
record binding an account to an access class is written the same way. A
capability the system does not have cannot be misused through it.

**This decision is scoped to Generation One and does not settle shared
identity.** ADR-0006 requires identity be introduced *as a shared service from
the start*, and this selection is compatible with that: a second consumer would
use the same provider. Whether it shares this project, receives its own, or
federates is **a decision for that second consumer's ADR**, made when a second
consumer exists and its requirements are known. Deciding it now would be
exactly the speculative architecture this ADR declines.

**No Founder Office return trigger fired.** The selection changes no accepted
architecture, creates no new recurring cost, introduces no new external
dependency beyond infrastructure already required by ADR-0009, and decides
nothing outside Development's delegated technical authority.

## Consequences and limitations

Identity and data share a provider, so a provider-level compromise reaches
both. Accepted: they already share one under ADR-0009, and separating the
identity provider would not separate the blast radius of the store that holds
the records.

Password authentication for two internal accounts is the floor, not a target.
Stronger factors are available from the same provider without an architecture
change, and no requirement presently asks for them.

The shared-identity question is deferred rather than answered, which means the
second authenticated capability inherits a decision to make. That is the
correct place for it: it will have evidence this one does not.

## Validation evidence

`npm run verify` in the Generation One repository exercises the access classes
against the running pre-production stack: an unauthenticated caller reads no
Headquarters representation; each class can do what ADR-0017 grants and
nothing more; the administrator can neither author nor read Headquarters; and
the Founder Office cannot author representation. `npm run validate:knowledge`
and `npm run validate:architecture` cover this record and the capability
registry here.

## Unresolved institutional dependencies

Constitutional and institutional authority structures (ADR-0006, ADR-0017):
any mapping of institutional roles onto technical roles awaits that authority
and remains expressly out of scope. Shared-identity topology for a second
consumer remains open by design.
