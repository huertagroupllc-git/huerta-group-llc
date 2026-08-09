# ADR-0003 — Application and Repository Boundary Strategy

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted

## Context

Future institutional capabilities need a principled way to decide where
they run and where their code lives, without a premature global mandate
(monorepo vs multi-repo, platform vs services) while nearly all
requirements are immature. Governing references consulted: the Vision
Foundation (§§12–14, proportionate flexibility), the Development
Standards (architecture standards), and the
[Internal Software Architecture Foundation](../technical/internal-software-architecture.md)
(§4), whose capability registry records each placement outcome —
mechanically checked by `npm run validate:architecture`.

## Options considered

1. Mandate a monorepo now — rejected: no evidence; couples immature
   systems.
2. Mandate repository-per-system now — rejected: equally speculative.
3. **Adopt decision criteria, applied per capability when its inputs
   mature — accepted.**

## Decision

**No global topology is mandated.** Each future capability's application
and repository placement is decided by its own ADR against these
criteria, weighed together:

- **data sensitivity** (client-confidential data never shares a runtime
  or repository with the public website);
- **release cadence** (different cadence → separate deployable);
- **ownership** (who maintains it, at what maturity);
- **runtime model** (static/public vs authenticated/interactive vs
  batch);
- **dependency coupling** (tight, justified coupling may colocate;
  incidental coupling never does);
- **security boundary** (authentication or privileged credentials →
  outside the public application);
- **maintainability and reversibility** (prefer the placement easiest to
  undo while requirements are immature);
- **maturity** (immature capabilities start in the least-committal
  viable form — often governed documents before applications).

**Shared services** are extracted only when a *second real consumer*
exists: the first consumer hosts the capability; the second triggers an
extraction ADR. **Defaults:** new institutional *runtime* systems start
outside the website repository (per ADR-0002); new *document-based*
capabilities (like the knowledge foundation) start inside the current
repository, where the governed corpus and validation live — cheap,
reversible, and consistent with ADR-0001.

## Consequences and limitations

Placement decisions arrive exactly when a capability is authorized —
never earlier, never by default. The cost is one small ADR per system;
the benefit is that no wrong global bet is ever unwound. Registry
entries record `unresolved` dispositions until then.

## Unresolved institutional dependencies

Every governance-blocked capability input (methodology substance, IP
policy, program authority, publishing authority, AI governance) — each
blocks its capability's placement decision, and none is resolved here.
