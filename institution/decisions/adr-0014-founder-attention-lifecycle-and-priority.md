# ADR-0014 — Founder Attention Lifecycle and Priority

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-07

## Context

Foundation §9–§10 define the Founder Attention Item, its ten qualifying
reasons, its three-value priority vocabulary, and its entry, standing and
exit. `fd-0012` records the Founder Office policy: functions and ventures
nominate; Corporate Operations owns admission and semantic consistency and
**may not suppress an escalation that independently requires Founder
authority**; the Founder Office may override priority; an item exits once
Founder involvement is no longer required, even though the underlying
matter may remain active. Requirements Report §5 requires an exception
queue, not an activity feed.

## Options considered

1. **A priority field plus a policy note about non-suppression.**
   Rejected — a rule enforced only by documentation is a rule that erodes,
   and this one protects the Founder's access to matters governance
   requires them to see.
2. **A single resolved priority value.** Rejected — it erases the
   difference between what a function proposed, what Corporate Operations
   normalized, and what the Founder Office overrode.
3. **Separate nomination and item entities with three priority fields —
   accepted.**

## Decision

**Nomination** is a first-class record: who raised it, why, proposed
priority, and disposition (admitted · normalized · not admitted with a
stated reason · escalated). Not-admitted nominations are **retained with
their reason**, so a suppression pattern is visible in the record rather
than inferable only from absence.

**Non-suppression is structural.** A nomination flagged as independently
required by governing institutional authority offers only two dispositions
— **admitted** or **escalated**. "Not admitted" is not available for it.

**Founder Attention Item** is a distinct entity referencing a Record (or,
rarely, standing alone), carrying: qualifying reason from the ten;
expected Founder role; entry justification; **proposed**, **normalized**
and **override** priority as three distinct fields, each with actor and
reason; continued-standing basis; and exit with its ground.

**Entry** requires all four Foundation §10 conditions — a qualifying
reason, meaningful consequence, present rather than hypothetical
appropriateness, and a statable expected Founder role. Three of four is
not admission.

**Standing** is passive: an item remains while its qualifying condition
remains, and nothing re-alerts merely because time passed.

**Exit** records which of Foundation §10's seven grounds applied, closes
the item, and **changes nothing** about the underlying Record.

**Prohibited:** numeric severity scoring, weighted prioritization,
algorithmic ranking, computed severity, and any generic notification or
inbox model. Priority is the ordered vocabulary Immediate · Near-Term ·
Normal and nothing else.

## Consequences and limitations

A Record may carry zero, one, or several Attention Items across its life,
and attention history is reconstructable independently of the matter's
history. The cost is more structure than a flag. Nothing is implemented,
and no notification mechanism exists.

## Unresolved institutional dependencies

None for architecture. `fd-0012` supplies the policy; this ADR encodes
only its technical representation and creates no institutional authority.
