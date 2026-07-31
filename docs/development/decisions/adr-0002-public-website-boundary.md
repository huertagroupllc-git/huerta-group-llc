# ADR-0002 — Public Website Boundary

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted

## Context

The public website (nine institutional pages + inquiry intake) is
complete, launch-ready, and deliberately minimal. As institutional
systems are developed, the path of least resistance would be to build
them into this repository "because it already exists." The Development
Standards already require separation between the public website and
future internal systems; the Vision Foundation (§15) states the website
is one component of a broader ecosystem, not the Company's technology
strategy. Governing references consulted: the Development Standards,
Vision Foundation §15, and the
[Internal Software Architecture Foundation](../internal-software-architecture.md)
(§4), which this decision anchors.

## Options considered

1. Grow the website repository into the institutional platform —
   rejected: couples unrelated release cadences, trust boundaries, and
   sensitivities; erodes the near-zero attack surface.
2. Extract inquiry intake into a separate service now — rejected:
   premature; no second consumer, same trust boundary, added operational
   surface with no benefit.
3. **Keep the website a bounded public interface; inquiry intake stays
   colocated — accepted.**

## Decision

The public website remains a **stable, bounded public interface**:
public presentation plus public inquiry intake, and nothing else.
Institutional systems are **not** built inside it by default; any
exception requires a new ADR meeting the ADR-0003 criteria. Inquiry
intake remains colocated because it shares the website's trust boundary,
release cadence, and zero-identity model — extraction becomes a real
option only if a future system needs shared access to inquiry records
beyond read-only consumption (that trigger is recorded, not acted on).

## Consequences and limitations

The website's smallness, security posture, and launch readiness are
preserved. Future systems bear the (deliberate) cost of separate
housing. This ADR does not decide where any future system lives —
ADR-0003 governs that.

## Unresolved institutional dependencies

None for this boundary itself. Future public representation of new
capabilities remains governed by existing truthfulness standards and
owner authorization.
