# ADR-0011 — State, Change, and Attention Representation

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-04

## Context

Foundation §4 and §8 establish State, Material Change, and Attention as
three distinct dimensions, none derivable mechanically from the others.
Foundation §6 requires State to hold multiple simultaneous dimensions;
§7 makes Material Change consequence-based rather than activity-based;
§9 makes Attention an exception layer. OSPA S09's multidimensional-state
doctrine must remain intact. This is the decision most exposed to
implementation convenience.

## Options considered

1. **One status field with an event log.** Rejected — collapses all three
   concepts and fails semantic tests 1, 2, 9 and 10 simultaneously. It is
   also the most likely thing a competent engineer would build.
2. **Status field plus attention flag plus change log.** Rejected — the
   flag makes Attention a State value; the log makes every edit a
   Headquarters event.
3. **Three separate structures with no mechanical derivation between them
   — accepted.**

## Decision

**State** is an open **set** of dimension values, never a column. Each
entry is (dimension name, value, as-of, provenance, optional confidence).
Dimensions are declared **per record kind**, not globally, so no shared
vocabulary can quietly become a universal status. A Record may hold any
number of simultaneous dimensions — authorized, operationally paused,
externally dependent — each independently valued and independently
sourced. Dimension value history is append-only and never overwritten
(OSPA S09 practice).

**Material Change** is **authored, never derived**. A person asserts it,
names which materiality limb of Foundation §7 it satisfies, and states the
consequence. The authoring path **rejects** an entry that cannot state its
consequence. No trigger, row-diff, timestamp, or edit produces one.
Entries are append-only; corrections are new entries referencing the
corrected one (OSPA S10 §10.35), never edits or deletions.

**Founder Attention** is a distinct entity referencing a Record, never a
field on it (lifecycle in ADR-0014).

**Prohibited by construction:** a single `status` column; a global status
enum; a status vocabulary shared across record kinds; deriving State from
the latest Material Change; deriving Attention from State; and storing
"blocked" or "requires attention" as a State value.

**Blocked and Attention are displayed, never stored, as state.** Both are
read-time projections — from open blocking assertions (ADR-0012) and open
Attention Items (ADR-0014). Persisting either onto the Record is the exact
point at which the invariants fail silently.

**Technical audit entries** — row-level mutation history — are a separate
structure, never surfaced at Headquarters and never promoted into Material
Change.

**No universal lifecycle and no universal state machine.** Foundation §24
authorizes transition semantics **only** where the transition carries
institutional meaning, and "implementation convenience is insufficient
justification." Transitions therefore exist for exactly six things, each
governed by its own ADR:

| Concept | Transitions | ADR |
| --- | --- | --- |
| Founder Attention | nomination → admitted / not admitted / escalated; admitted → exited, with ground | ADR-0014 |
| Blocking assertion | asserted → ended, with ground | ADR-0012 |
| Handoff | open → disposed, by disposition kind | ADR-0012 |
| Deadline | pending → reached / passed | ADR-0013 |
| Renewal | outstanding → actionable → satisfied / lapsed | ADR-0013 |
| Follow-Up | outstanding → satisfied / moot / redirected / escalated | ADR-0013 |

Everything else has **no lifecycle**. Operational State holds independent
dimensions rather than moving through stages; Dependencies appear, change
and cease to matter without a workflow; Material Changes are historical
occurrences rather than objects that transition; and Operational Records
represent different kinds of matters and share no state machine. The
`fd-0011` prohibition stands: no transition model is inferred from OSPA
S09 §9.28 — the table above derives from Foundation §24, the prospective
doctrine `fd-0011` required instead, and from nothing else.

## Consequences and limitations

Querying "current state" costs more than reading a column, at data volumes
where that is irrelevant. Authoring a Material Change is deliberately more
work than editing a row — the friction is the control from Requirements
Report §18.3. Nothing here is implemented; no schema exists.

## Unresolved institutional dependencies

None. Foundation §6–§9 governs, and `fd-0012` supplies the attention
policy.
