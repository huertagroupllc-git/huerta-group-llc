# evo-0009 — Where Client Engagement Develops Was Separated From Where It Will Live

**Classification: Institutional Record** — evolution record
(evidentiary, non-governing).

- **Date:** 2026-08-28
- **Institutional domain:** repository/platform
- **Type of evolution:** structure_reorganization
- **Retrospective:** true — authorized by `fd-0038` (FD-EL-2); evidence
  cited throughout.

## Prior state

`adr-0021` had decided that confidential client material belongs in a
dedicated Supabase project (`evo-0008`). A capacity verification then
established that no third project was available under the Free plan
without expenditure `fd-0015` withholds, and `adr-0022` placed the
capability in a separate repository with **its own local Supabase
project** — local now, hosted when authorized. That arrangement was
built, and building it produced two facts that bore on the decision: the
local Docker requirement was the most expensive part of the arrangement
and bought no security, since the isolation guarantees come from the
schema, the policies and the grants rather than from the container; and
a single-machine local stack could not satisfy `adr-0021`'s own backup
requirement that no single copy be the only copy.

## Change or development

`adr-0023` varied **where and when**, not what. Pre-launch development
of the Client Engagement capability moves into the existing
`huerta-group-llc` Supabase project, confined to a `client_engagement`
schema with its own objects, bucket and policies. **No new project, no
new organization, no plan change, no expenditure.** CUSTODY-01 and
ISO-01 moved from deferred to implemented.

The separation `adr-0021` decided was **scheduled rather than
dismissed**: the capability moves to its own project before any
authentic client-confidential material, any authentic engagement record,
any operator who is not the Founder, any external access, or any
availability requirement becomes true.

## Reason or evidence

`adr-0023`, **Accepted — directed by the Founder Office, 2026-08-28**.
It varies the *timing* of a ratified decision's implementation and was
therefore a Founder Office direction rather than a fresh architectural
choice. Recorded in the repository at commit `4444e70`.

## Authority involved

Founder Office (direction). Institutional Platform Development (capacity
verification, architecture, implementation).

## Governing decision references

adr-0023 · adr-0021 · fd-0015

## Canonical artifact references

- `institution/decisions/adr-0023-shared-pre-launch-development-infrastructure.md`
- `institution/decisions/adr-0021-client-confidentiality-custody-and-isolation-architecture.md`
- `institution/decisions/adr-0022-client-engagement-infrastructure-placement.md`
- `institution/governance/determinations/fd-0015-generation-one-local-operating-posture.md`

## Implications

A pre-launch capability may share infrastructure with the public website
**only while it holds nothing authentic**, and the conditions that end
that permission are stated in advance rather than judged later. The
institution therefore carries a standing, dated obligation: the
extraction must happen before Client #1, and it is a migration rather
than a rebuild because everything the capability owns lives inside one
schema.

## Dependencies

Depends on `evo-0008`, whose architecture it implements on a varied
timetable. `adr-0022` sits between them and is **not** recorded as an
evolution: it remains at *Proposed* and was never ratified.

## Supersession / later refinement references

None.

## Historical notes

This record is the clearest instance in the log of a decision that
changed an implementation path while deliberately leaving an
architecture alone — and of the institution choosing to schedule an
obligation it could not yet afford, rather than quietly dropping it or
pretending the arrangement was permanent.
