# ADR-0006 — Identity and Access Direction

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted

## Context

No authentication exists, deliberately (Development Standards:
introduced when a capability requires it). Several future capabilities
(operations, client delivery, education, AI) will eventually require
authenticated identity. Direction must exist before the first of them is
authorized — without selecting a provider or inventing institutional
structure. The constitutional record is incomplete; nothing here may
presume its content. Governing references consulted: the Development
Standards (security; authentication introduced when required), the
constitutional record's status rules, and the
[Internal Software Architecture Foundation](../internal-software-architecture.md)
(§8).

## Options considered

1. Select an identity provider now — rejected: no consumer exists;
   premature vendor commitment.
2. Let each future system improvise its own authentication — rejected:
   guarantees fragmentation of the most security-critical shared
   concern.
3. **Define provider-neutral direction now; implement with the first
   real consumer — accepted.**

## Decision

- **Authentication is introduced only when the first real internal or
  client capability requires it** — and then as a shared service from
  the start (identity is the clearest known case where a second consumer
  is predictable).
- **Conceptual technical user classes** (vocabulary for future design,
  not accounts to create): public visitor · inquiry submitter ·
  authenticated internal user · privileged system administrator ·
  client user · learner · program administrator · service operator ·
  machine/integration identity.
- **Technical permissions are not institutional authority.** These
  classes are technical categories, not Company offices. Administrative
  access to any system confers zero constitutional, executive, or
  institutional authority; no role name may imply an institutional
  office; and nothing in access control may encode unresolved
  constitutional structure (including any future Entrusted Institutional
  Authority) before it is ratified.
- **Principles binding future implementation:** least privilege ·
  separation of roles · audited administrative and sensitive actions ·
  dedicated service identities (never shared human credentials) ·
  credential rotation · defined account lifecycle (provision, review,
  revoke) · periodic authorization review · confirmation for
  destructive/sensitive operations · environment-separated credentials
  (ADR-0005).
- **Provider selection is unresolved**, decided by the first consumer's
  ADR against: security posture, auditability, portability/exit path,
  cost proportionality, and operational burden.

## Consequences and limitations

Future systems inherit coherent identity direction without a premature
vendor bet. The cost: identity work is on the critical path of the first
authenticated capability — accepted deliberately.

## Unresolved institutional dependencies

Constitutional and institutional authority structures (owner;
constitutional work in progress). Any mapping of institutional roles
onto technical roles awaits that authority and is expressly out of
scope here.
