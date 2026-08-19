# ADR-0016 — Audit, History, and Since Last Review

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-09

## Context

Requirements Report §2.5 identifies change detection as a fragmentation
problem and Capability 7 requires change visibility "without becoming a
comprehensive event-log system." `fd-0011` fixes Since Last Review as the
primary change view. The Phase 1 Blueprint raised the occurred-before /
recorded-after question, and **the Founder Office has since determined
it** (ADR phase instrument, determination 4).

## Options considered

1. **Full event sourcing.** Rejected — far more machinery than
   reconstruction needs, and expressly excluded by Capability 7.
2. **Since Last Review bounded by `occurred_at`.** The intuitive choice,
   and **rejected by Founder Office determination** — it silently omits
   matters recorded after the previous review, and the Founder cannot
   detect the omission by inspection because absence is invisible.
3. **Seven bounded histories with `recorded_at` as the review boundary —
   accepted.**

## Decision

**Minimum history, and no more.** Seven structures:

1. State dimension values — append-only, never overwritten.
2. Material Changes — append-only, corrections by reference.
3. Attention nomination, admission, priority changes, and exit, with actor
   and reason.
4. Blocking assertion start and end, with ground.
5. Handoff disposition.
6. Representation corrections, distinguished from amendments (OSPA S10
   §10.35).
7. Provenance changes, including confirmation events.

No universal change feed and no event-log substrate. **Technical audit
entries** (ADR-0011) exist for operability and are never Headquarters
history.

**Since Last Review.** A **Review Event** is a **Founder-scoped** marker —
scoped to the reader, because the question is "what changed since *I* last
looked," and a Headquarters-global marker would let one reader's review
consume another's.

**Per Founder Office determination, `recorded_at` is the inclusion
boundary.** A material matter that **occurred** before the previous review
but **entered** Headquarters representation afterward **appears** in the
subsequent view. `occurred_at` remains separately represented wherever
known, and where the two differ materially the interface must make the
difference intelligible — the entry is marked late-recorded and both
timestamps are shown. Corrections surface the same way, referencing what
they correct.

`occurred_at` and `recorded_at` are **never collapsed** into a single
timestamp, and neither is derived from the other.

Today / 7 Days / 30 Days remain available as secondary views: the same
query with a different bound, and therefore technically inexpensive
(`fd-0011`).

**Scope boundary.** This is a **Generation One operational-view
determination only.** It establishes no universal Huerta Group temporal
doctrine, and nothing here may be cited as one.

## Consequences and limitations

Two timestamps must be captured on every Material Change, and
`occurred_at` is sometimes unknown — recorded as unknown rather than
defaulted to `recorded_at`, since a fabricated occurrence time is worse
than an absent one. The view may show an item the Founder has, in some
other sense, already encountered; that is the deliberate cost of never
silently omitting. Nothing is implemented.

## Unresolved institutional dependencies

Optional change-horizon behaviour beyond Since Last Review remains a
Founder Office question (`fd-0013` §8), and the secondary views above
are offered as convenience rather than as its answer.
