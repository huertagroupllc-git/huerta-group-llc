# ADR-0004 — Data Ownership and Supabase Boundary

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted

## Context

One Supabase project (`huerta-group-llc`) exists, containing exactly one
table (`contact_inquiries`) with RLS-deny-by-default and server-only
access. As future systems approach, the convenient assumption would be
that this project is "the Company database." Data ownership across the
future ecosystem must be explicit before a second data-owning system
exists. Governing references consulted: the Development Standards
(defined data boundaries; deliberate infrastructure), the Vision
Foundation (§14, data ownership and portability), and the
[Internal Software Architecture Foundation](../internal-software-architecture.md)
(§5 data-ownership model).

## Options considered

1. Declare the existing project the universal Company database —
   rejected: silently couples every future sensitivity class and
   lifecycle to one credential boundary chosen for a contact form.
2. Mandate project-per-system now — rejected: speculative; some systems
   may never exist.
3. **Scope the current project narrowly and define topology criteria for
   later — accepted.**

## Decision

- **The current Supabase project owns inquiry records only.** It is not
  the universal Company database, and no future system stores data in it
  by default.
- **One authoritative owner per data category** (the data-ownership
  model in the architecture foundation, §5): other systems consume from
  the owner and never duplicate authoritative records. No shared tables
  across unrelated capabilities without an explicit ADR.
- **Future data topology is unresolved** until the second data-owning
  system is authorized. That system's ADR decides between
  project-per-system, schema-per-system in a shared project, or another
  model, using: sensitivity isolation (client-confidential and identity
  records demand the strongest isolation), credential blast radius,
  backup/recovery independence, migration independence, cost and
  operational proportionality, and reversibility.
- Architectural data ownership is **system responsibility for the
  authoritative record** — never legal ownership, rights, retention, or
  disclosure doctrine, which require owner/legal authority.

## Consequences and limitations

The inquiry system keeps its verified, minimal posture. Every future
data decision arrives with evidence rather than by inheritance. No final
database topology exists — deliberately.

## Unresolved institutional dependencies

Retention/disclosure policy for every data category (owner + legal
review); the second data-owning system's identity and requirements.
