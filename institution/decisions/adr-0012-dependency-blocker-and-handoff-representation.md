# ADR-0012 — Dependency, Blocker, and Handoff Representation

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-05

## Context

Foundation §11 defines Dependency independently of blocking effect; §12
defines Blocker with a two-limb beginning test and enumerated ends; §13
holds that "every blocker involves a blocking condition or dependency; not
every dependency is a blocker," and that the same dependency may become
blocking or cease to be as circumstances change. §14 and §15 define
Handoff and its completion, with an explicit authority boundary.

## Options considered

1. **A boolean `is_blocking` on Dependency.** Rejected — it makes blocking
   a property of the dependency rather than of a situation, so the same
   dependency cannot block one Record and not another, nor block today and
   not tomorrow. Fails Foundation §13's worked example.
2. **A `blocked` value in the Record's state dimensions.** Rejected —
   collapses Blocker into State (ADR-0011).
3. **Blocking as a separate time-bounded assertion — accepted.**

## Decision

**Dependency** is a relation from a Record to what it relies upon — an
internal Record, external party, condition, decision, or resource —
carrying kind, description, the party it rests with, and provenance. It
has **no blocking field**, and none may be added.

**Blocking assertion** is a separate, time-bounded assertion that a named
condition or Dependency **presently prevents meaningful advancement** of a
Record. It carries: the blocked Record; the blocking condition or
Dependency reference; the start; a statement of why both limbs of
Foundation §12's beginning test are met; and, on ending, the end and which
of §12's enumerated ends applied.

Two rules the model enforces structurally:

1. **Ending a blocking assertion does not complete the Record.** They are
   different objects; no transition on one touches the other.
2. **A Record may hold several concurrent blocking assertions**, so
   removing one does not unblock the Record while others stand.

Foundation §12's exclusion is carried in the authoring requirement: a mere
inconvenience, preference, delay, or unresolved question is not a blocker.

**Handoff** carries source party, receiving party, expected action,
Dependency created or affected, disposition, and escalation condition.
**There is no authority field and none may be added.** Dispositions are:
performed · authoritative disposition returned · validly redirected ·
superseded · other accepted disposition. **Acknowledgment is explicitly
not a disposition** and is not offered as one. A disposition that creates
a new Dependency completes the Handoff while the new Dependency stands
independently (Foundation Example 7).

## Consequences and limitations

Three structures where a conventional design would use one, and a
"blocked" indicator that must be computed at read time rather than read
from a column. Accepted: it is what makes semantic tests 3, 4 and 5
answerable. Nothing is implemented.

## Unresolved institutional dependencies

None. Foundation §11–§15 governs.
