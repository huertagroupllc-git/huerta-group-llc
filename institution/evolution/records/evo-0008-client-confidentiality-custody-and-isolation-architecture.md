# evo-0008 — Confidential Client Material Was Given an Architecture of Its Own

**Classification: Institutional Record** — evolution record
(evidentiary, non-governing).

- **Date:** 2026-08-26
- **Institutional domain:** repository/platform
- **Type of evolution:** governance_determination
- **Retrospective:** true — authorized by `fd-0038` (FD-EL-2); evidence
  cited throughout.

## Prior state

No isolated store existed for raw confidential client material, and none
could be decided under the construction authority then in force.
`adr-0004` reserved data topology for *"the second data-owning system"*
and its own ADR; `adr-0020` selected Supabase Auth for Generation One
and expressly deferred the question of whether a second consumer
*"shares this project, receives its own, or federates"* to that
consumer's own decision. `fd-0037` reached both limits and returned them
as deficiencies CUSTODY-01 and ISO-01 rather than approximating them —
the isolation guarantee that operator access be scopable rather than
universally granted could not be met, because no authenticated identity
existed.

## Change or development

`adr-0021` decided the architecture: **confidential client material
receives its own Supabase project**, separate from the public website's
and from Generation One's, with authenticated identity, deny-by-default
row and object policies as the enforcement layer, access from an explicit
operator→engagement grant so that revocation is real, cross-client
isolation, provenance, and confidential material held outside the
ordinary institutional corpus and outside institution-wide AI context.
Governed engagement records remain repository-native; the hybrid custody
model is unchanged.

Client Engagement is the second consumer `adr-0020` deferred to, and its
requirements were now known.

## Reason or evidence

`adr-0021`, **Accepted — ratified by the Founder Office, 2026-08-26**.
Under the ADR practice the decision required the owner's explicit
ratification because client confidentiality touches disclosure. The ADR
records that its implementation is **none** — no project, bucket,
schema, migration, policy, account or credential was created by it.

## Authority involved

Founder Office (explicit ratification, required by the ADR practice for
decisions touching disclosure). Institutional Platform Development
(architecture, drafting).

## Governing decision references

adr-0021 · adr-0020 · adr-0004 · fd-0037

## Canonical artifact references

- `institution/decisions/adr-0021-client-confidentiality-custody-and-isolation-architecture.md`
- `institution/decisions/adr-0020-generation-one-identity-provider-selection.md`
- `institution/decisions/adr-0004-data-ownership-and-supabase-boundary.md`
- `institution/governance/determinations/fd-0037-client-engagement-generation-one-p0-construction.md`
- `institution/governance/determinations/fd-0015-generation-one-local-operating-posture.md`

## Implications

Isolation became an architectural property rather than an intention: the
guarantees are carried by the schema, the policies and the grants, and
are therefore portable between runtimes. The decision also fixed a
backup requirement — *no single copy may be the only copy* — which later
constrained where the capability could legitimately run. The recurring
expenditure the architecture implies was **returned to the Founder
Office, not incurred**: `fd-0015` §2.1 withholds production Supabase
expenditure, and the determination has not been made.

## Dependencies

Depended on `evo-0007` producing the deficiencies and on `adr-0020`
having deferred the question. The implementation *path* was subsequently
varied — first by `adr-0022`, then by `adr-0023` (`evo-0009`) — while
the architecture itself was left unchanged.

## Supersession / later refinement references

evo-0009 — refines the implementation timing and placement, not the
architecture.

## Historical notes

The argument recorded against placing confidential material in the
repository is worth preserving: operator scoping is repository-granular,
removing a collaborator cannot recall a clone, and git history means
deletion does not delete — and this institution's development is
performed by agent sessions holding full repository read access, which
would place client material inside institution-wide AI context by
default.
