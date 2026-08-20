# fd-0014 — Founder Office Determinations: Generation One Construction Authorization and Bounded Construction

**Classification: Institutional Record** — determination record
(evidentiary, non-governing). The record evidences the determinations;
authority resides with the Founder Office and the artifacts the
determinations govern.

- **Instrument:** Founder Office ADR Phase Review & Construction
  Authorization, execution package, Founder Office → Institutional Platform
  Development.
- **Received:** 2026-08-19, as transmitted to the implementing office.
- **Recorded:** 2026-08-19.
- **Starting baseline:** `0150038`.
- **ADR package:** **Accepted.**
- **Technical architecture:** **Accepted.**
- **Identity-provider evaluation:** **Authorized**, bounded.
- **Generation One construction:** **Authorized**, bounded.
- **Production launch:** **NOT AUTHORIZED.**
- **Scope expansion:** **NOT AUTHORIZED.**
- **Next major gate:** Generation One Construction & Validation Review.

## 1. What this record disposes of

The ADR phase authorized by `fd-0013` produced ADR-0008 through ADR-0019 and
the Generation One Phase 1 Technical Blueprint. The Founder Office has
accepted both, and has authorized bounded construction of the smallest
coherent Generation One capability the accepted architecture describes.

This discharges, prospectively:

- ADR-0019's stated gate — "Founder Office acceptance of this architecture
  package remains the gate before construction (`fd-0013`)";
- ADR-0017's deferred provider selection, by authorizing a bounded technical
  evaluation and selection within Development's delegated authority
  (recorded at ADR-0020);
- the blueprint §40 determination 1 (authorization to implement), 6 (adoption
  of the §34 ADR sequence) and 7 (confirmation of the §28 placement and §31
  topology determinations);
- `fd-0013`'s reserved `operations-systems` readiness posture, reconciled
  again below.

**Discharged, not erased.** Each prior record remains accurate for its own
period. Nothing is rewritten to imply construction was authorized sooner than
it was.

## 2. Determinations recorded

1. **ADR package accepted.** ADR-0008 through ADR-0019 are accepted as
   governed architecture.
2. **Technical architecture accepted.** The Generation One Phase 1 Technical
   Blueprint is accepted.
3. **Identity-provider evaluation authorized**, bounded: Development selects
   the narrowest technically sufficient identity approach for Generation One,
   returning to the Founder Office before adoption if the approach would
   materially change the accepted architecture, create a significant new
   recurring cost, introduce a consequential external dependency, or require a
   decision outside Development's delegated technical authority.
4. **Generation One construction authorized**, bounded to the accepted
   architecture and the already-approved Generation One requirements, in
   governed non-production environments only.
5. **Production launch not authorized**, and successful pre-production
   validation is expressly not implicit production approval.
6. **Scope expansion not authorized.** Technical extensibility is not
   authorization to construct future capability.

## 3. Temporal determination (Generation One operational-view doctrine)

The Founder Office determines, for Generation One's Since Last Review view:

- **`recorded_at` is the inclusion boundary.**
- **`occurred_at` remains independently represented where known.**
- A material matter that occurred before the previous Founder review but was
  **recorded** afterward **must appear** in the subsequent Since Last Review
  view.
- Where `occurred_at` and `recorded_at` materially differ, the representation
  must make the distinction intelligible.
- Where occurrence time is unknown, it is **not manufactured** from
  `recorded_at`.

**Scope boundary.** This is Generation One temporal-view doctrine only and
establishes no universal institutional temporal policy. ADR-0016 records the
technical representation; this record evidences the determination itself.

## 4. Binding semantic invariants restated by the instrument

State, Change and Attention are distinct · Material Change is
consequence-based, not activity-based · Dependency does not imply Blocker ·
removing a Blocker does not imply completion · a Handoff transfers expected
action, not institutional authority · Corporate Operations owns Headquarters
operational representation, not source-domain truth · Operational Instance
remains distinct from Operational Record · no universal lifecycle or state
machine may be introduced for implementation convenience · Founder Attention
is an exception layer, not an activity feed or inbox · surviving OSPA
multidimensional-state doctrine remains controlling where applicable ·
technical convenience never authorizes semantic collapse.

All ten Corporate Operations Semantics Foundation V1 §31 tests must remain
answerable **yes** throughout construction and final validation.

## 5. Deferred operational policy — unanswered by design

The instrument holds four questions deferred and directs that they **not** be
answered speculatively. Where one becomes necessary to determine actual
Founder-facing behaviour, only the affected decision stops and the specific
bounded question returns to the appropriate institutional authority.

| Question | Status |
| --- | --- |
| Change horizon beyond Since Last Review | Deferred |
| Venture snapshot responsibility | Deferred |
| Financial visibility boundary | Deferred |
| Administration & Compliance visibility boundary | Deferred |

## 6. Records policy boundary

No general retention, deletion, archival, or disclosure doctrine is implied by
the ADR package or by this construction authorization. Where construction
requires such a determination, the affected decision stops and returns through
the appropriate institutional authority. Ordinary technical safeguards
necessary to protect the system remain permitted.

## 7. Readiness reconciliation directed

The instrument directs that the institutional capability/readiness record be
reconciled from `governance_blocked` to the closest existing governed value
that truthfully represents construction authorization, **using existing
controlled vocabulary only**, and that any classification mismatch be reported
rather than resolved by inventing vocabulary.

Reconciliation performed, and the mismatches found, are recorded in
[`evo-0005`](../../evolution/records/evo-0005-generation-one-construction-and-validation.md).

## 8. Authority boundary

This record evidences determinations; it creates none. The Founder Office
retains strategy, priority, capital allocation, reserved decisions, venture
oversight and consequential authorization. Institutional Platform Development
retains technical architecture and implementation jurisdiction within what is
authorized here and nothing beyond it. Construction is authorized; production
launch is not.
