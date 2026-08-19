# ADR-0010 — Operational Identity and Representation Model

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-03

## Context

Foundation §5 distinguishes the **Operational Instance** — the real-world
corporate matter — from the **Operational Record**, the Headquarters
representation of it. OSPA S03 §3.24 adds that "the existence of a record
does not establish that operational work has occurred," and OSPA S04 §4.50
and S09 §9.32 constrain identifiers from encoding classification or
authority. The definition package left positive identity semantics open;
Foundation §25 assigns technical representation to Development.

## Options considered

1. **One identity for both.** Rejected — it makes "the record is wrong"
   indistinguishable from "the matter changed," collapsing the
   Foundation's central distinction.
2. **Instance identity only, records as versions.** Rejected — the Record
   needs its own identity to be referenced, corrected, and superseded.
3. **Two identities — accepted.**

## Decision

**Two identities, never one.**

- The **Operational Record** carries an opaque surrogate identifier owned
  by the system.
- The **Operational Instance** carries a separate designation of the
  real-world matter, which survives correction, supersession, and
  re-admission of its Record.

Both are **neutral**: they encode no classification, function, authority,
venture, sensitivity, or status (OSPA S04 §4.50, S09 §9.32). Display
labels are separate from both and carry no identity function. Repository
paths and database keys are locations and storage details, never identity
(FD-V2's identifier-first principle).

**Representation boundaries.** An Operational Record is not the
authoritative source record, a task, an activity log, a governance record,
a compliance file, an accounting entry, a venture record, or a
notification. A Record exists only where Foundation §5's admission
principle is satisfied, and the admission ground is recorded on it —
routine activity does not earn a Record merely by occurring.

**Existence is not institutional reality.** Creating a Record asserts that
Headquarters represents a matter; it asserts nothing about the matter's
truth, standing, or completion, each of which belongs to its source
domain.

## Consequences and limitations

History reconstructs to the matter rather than to a row: a Record may be
corrected or superseded while its Instance designation persists. The cost
is that two identities must be maintained and the distinction taught. No
schema, key, table, or identifier scheme is implemented by this ADR.

## Unresolved institutional dependencies

Whether operational instances require *institutional* identifiers rather
than technical ones is a governance question the Foundation does not
answer; this ADR allocates only technical identity and does not decide it.
