# ADR-0013 — Deadline, Renewal, and Follow-Up Representation

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-06

## Context

Foundation §16–§19 establish three separate concepts and require they stay
separate. Its worked example — a trade-name registration whose
continuation obligation is a Renewal, whose completion boundary is a
Deadline, and whose advance review is a Follow-Up — is one matter carrying
all three. Requirements Report §14 Capability 4 requires time-bound
visibility "without attempting to become a universal calendar or task
manager."

## Options considered

1. **A shared "due item" parent with a type discriminator.** The obvious
   modelling choice, since the three share fields. **Rejected** — it is
   precisely the semantic collapse the invariants forbid, and it fails
   tests 7 and 8 by construction.
2. **Deadline as the base concept, with Renewal and Follow-Up as flavours.**
   Rejected — a Renewal may exist with no Deadline at all, and a Follow-Up
   may have no due date.
3. **Three independent concepts — accepted.**

## Decision

Three separate concepts, **no shared parent entity**:

- **Renewal** — a continuation requirement with an existing valid
  standing, a future continuation obligation, and a consequence of lapse.
  It may exist with **zero** Deadlines and may generate several over time
  (test 7).
- **Deadline** — a consequential time boundary. Not every planned date
  qualifies; a target date without meaningful consequence stays outside
  Headquarters representation (Foundation §16).
- **Follow-Up** — an expected subsequent action whose due date is
  **optional** (test 8). It becomes Founder Attention only when its
  consequence warrants it, never automatically.

All three may attach to the same Operational Record without becoming the
same thing. No universal calendar, task, scheduling, or reminder system is
created or implied.

## Consequences and limitations

Some field duplication across three structures, accepted deliberately in
exchange for the distinctions. A combined "what is due" view is a read-time
composition across the three, not a stored abstraction — and it must not
become one, since that would reintroduce the rejected parent by another
name. Nothing is implemented.

## Unresolved institutional dependencies

None. Foundation §16–§19 governs.
