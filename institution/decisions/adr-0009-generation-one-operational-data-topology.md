# ADR-0009 — Generation One Operational Data Topology

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-02

## Context

ADR-0004 scoped the existing Supabase project to inquiry records only and
held future topology unresolved "until the second data-owning system is
authorized," assigning the decision to **that system's ADR**. Generation
One is that system. Governing references consulted: ADR-0004, ADR-0008,
the architecture foundation §5–§6, Requirements Report §3 and §12, and
Foundation §20–§23.

## Options considered

1. **Store Generation One data in the existing Supabase project.**
   Rejected — that project's credentials were scoped for a contact form;
   widening them to cover Headquarters operational data enlarges the blast
   radius of the website's most exposed surface, and couples migrations on
   an actively iterating internal tool to the live public inquiry path.
2. **A schema within the existing project.** Rejected for the same
   credential and migration reasons; schema separation does not separate
   the credential boundary or the backup and recovery unit.
3. **A separate Supabase project — accepted.**

## Decision

**Generation One owns a separate Supabase project.** Applying ADR-0004's
criteria: sensitivity isolation, credential blast radius, backup and
recovery independence, migration independence, and reversibility all point
one way; only cost and operational proportionality argue the other, and
weakly. ADR-0004's rule stands unchanged: the existing project owns
inquiry records only and is not the Company database.

**Per-domain treatment**, from the blueprint §6 source-of-truth matrix:

- **Store Directly** — only what Corporate Operations legitimately owns:
  Operational Records, State dimension values, Material Changes, Founder
  Attention Items and nominations, Dependencies, blocking assertions,
  Handoffs, Follow-Ups, Headquarters coordination Deadlines and Renewals,
  Venture Snapshots, the Relationship seam, Review Events, and provenance.
- **Reference** — accounting figures, governance records, determinations,
  licenses and registrations, external platform state, inquiry source
  material, venture governance standing.
- **Summarize** — accounting interpretation, administrative and compliance
  determinations, venture parent-relevant standing: their **operational
  consequence** only, never the underlying determination.
- **Do Nothing** — venture operational detail, working conversation,
  brainstorming and speculation.
- **Synchronize** — **no domain.** Generation One synchronizes nothing.

The governing rule is Requirements Report §3: store directly only what
Corporate Operations legitimately owns; never copy data to make retrieval
convenient.

## Consequences and limitations

No universal corporate database, no accounting replication, no governance
replication, no venture-system replacement, and no synchronization exist
or can exist without a superseding ADR. The cost is manual maintenance
(ADR-0019 §validation and the blueprint §32 treat this as deliberate).
Backup and recovery expectations must be documented before the store holds
irreplaceable records. **No project, schema, table, or migration is
created by this ADR.**

## Unresolved institutional dependencies

Retention and disclosure policy for operational records (owner and legal
review), carried forward from ADR-0004 and unresolved here. The financial
and administrative visibility boundaries remain Founder Office questions
(ADR-0015; `fd-0013` §8) — the topology supports either answer.
