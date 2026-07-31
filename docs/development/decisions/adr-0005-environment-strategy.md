# ADR-0005 — Environment Strategy

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted

## Context

The repository operates production-first: local development for
inspection, Vercel previews on demand, the live origin as the reference
environment, direct production verification after every deploy. This is
proportionate for a stateless public website — and would be reckless for
systems holding sensitive records. The threshold must be explicit before
such systems exist. Governing references consulted: the Development
Standards (deployment and production standards; production-data rules),
the launch documentation (`docs/launch/`), and the
[Internal Software Architecture Foundation](../internal-software-architecture.md)
(§7).

## Options considered

1. Keep production-first indefinitely — rejected: unacceptable for
   sensitive data.
2. Build staging infrastructure now — rejected: nothing needs it; cost
   without benefit.
3. **Keep production-first for the website; define the mandatory
   isolation threshold — accepted.**

## Decision

- **The public website keeps its production-first discipline**: local
  dev + previews + direct live verification, environment variables in
  Vercel settings and `.env.local`, synthetic test data clearly marked.
- **Isolation becomes mandatory** — separate non-production data,
  environment-specific credentials, migration testing against
  non-production data, deliberate feature activation, and rehearsed
  rollback — **the moment any system stores**: client confidential
  information · learner records · intellectual-property records ·
  identity records · operationally consequential data · financial or
  regulated information. A system crossing this threshold may not launch
  production-first; its first ADR must define its environments.
- Test data never mixes silently with production records; production
  data is never used for testing without explicit authorization.
- External-service activation remains deliberate and owner-gated (the
  notification standby is the template).
- This ADR creates no environments and changes no deployment
  configuration.

## Consequences and limitations

Today's workflow is unchanged. The first sensitive system pays a known,
planned environment cost instead of an emergency retrofit. Observability
expectations scale with the same threshold (architecture foundation §9).

## Unresolved institutional dependencies

None — the threshold is technical. Which systems cross it, and when,
follows from owner-gated capability decisions.
