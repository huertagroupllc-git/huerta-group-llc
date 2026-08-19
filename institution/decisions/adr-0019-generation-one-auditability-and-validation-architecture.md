# ADR-0019 — Generation One Auditability and Validation Architecture

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-12

## Context

Every ADR in this package protects a semantic distinction that the
convenient implementation would collapse. Rules that live only in prose
erode; the repository's own answer to that problem is mechanical
validation (`npm run verify`, the validator suite). Foundation §26 and
§33 require the semantics be tested through authentic Corporate
Headquarters operation before expansion.

## Options considered

1. **Rely on code review to preserve the semantics.** Rejected — the
   failures are individually reasonable-looking local choices; review
   catches them only if every reviewer holds the whole doctrine in mind.
2. **Test only functional behaviour.** Rejected — a Generation One that
   works perfectly while collapsing State into a status column has failed
   at exactly the thing it was built to preserve.
3. **Mechanical semantic-invariant validation plus authentic-use testing
   — accepted.**

## Decision

Future implementation must prove conformance, not assert it. Required
validation classes:

- **Semantic invariant checks**, mechanically enforced where structure
  permits: no universal status field; no status vocabulary shared across
  record kinds; no `is_blocking` on Dependency; no attention flag on a
  Record; no shared parent over Deadline / Renewal / Follow-Up; no numeric
  priority or freshness field anywhere; no authority field on Handoff;
  `occurred_at` and `recorded_at` never merged.
- **The ten §31 semantic tests** as executable cases, each asserting the
  distinction survives a concrete operational example.
- **Source-provenance validation** — no represented fact persists without
  complete provenance; representation owner is always Corporate
  Operations; source domain is never Corporate Operations for another
  function's facts.
- **State / Change / Attention separation** — no derivation path exists
  between them; blocked and attention indicators are read-time
  projections only.
- **History and reconstructability** — the seven ADR-0016 histories are
  append-only; corrections reference rather than overwrite; a prior
  Headquarters representation can be reconstructed for any past instant.
- **Since Last Review correctness** — a matter recorded after a review but
  occurring before it **appears** in the next view. This is the single
  most important executable test in the package, because its failure mode
  is invisible.
- **Authorization boundaries** — deny-by-default holds; each access class
  can do what ADR-0017 grants and nothing more; administrators cannot
  author.
- **Authentic-operations testing** — validated by operating Corporate
  Headquarters through it, using real matters that already exercise the
  distinctions: the Generation One program itself (dependency, blocking
  begun and ended, handoff with returned disposition); the HGP venture
  snapshot; trade-name registration (Renewal, Deadline and Follow-Up on
  one matter); the owner-gated custom-domain launch (attention without
  state change); and the notification standby (a routine condition that
  must stay invisible).

**Acceptance is semantic, not functional.** The system passes when the
Founder can answer the three governing questions without reconstructing
state manually **and** no represented matter has been forced into a shape
that collapses a distinction. A representation that fits only by
flattening is a failure even if every feature works.

## Consequences and limitations

Validation is a first-class deliverable rather than an afterthought, and
some invariants (freshness responsibility, materiality judgement) are not
mechanically checkable — those are named as human responsibilities rather
than pretended into tests. No test, harness, or check is implemented here.

## Unresolved institutional dependencies

None. Founder Office acceptance of this architecture package remains the
gate before construction (`fd-0013`).
