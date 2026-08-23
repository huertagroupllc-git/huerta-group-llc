# Corporate Command Center — Authentic-Use Stale Obligation Disposition Completion Report

**Classification: Institutional Record** — completion report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office.

- **Returned:** 2026-08-23.
- **Posture:** LOCAL / PRE-PRODUCTION. Production not launched.
- **Outcome:** **one of three corrected in capability; none applied.** Two
  object types lack governed disposition semantics and are returned as a
  deficiency (§24). The third awaits a Corporate Operations credential (§21).
- **Schema change:** none.
- **Authentic register:** unmutated.

## 1. Inspection determination

| Object type | Governed disposition exists? | Applicable to this correction? | Backend capability | Interface |
| --- | --- | --- | --- | --- |
| **Follow-Up** | **Yes** — satisfied, moot, redirected, escalated | **Yes — `moot`** | Present (UPDATE, Corporate Operations) | **Was missing.** Added |
| **Renewal** | Partially — actionable, satisfied (`lapsed` also in the enum) | **No** | Present but unusable truthfully | Not added |
| **Deadline** | Temporal only — reached, passed | **No** | Present but unusable truthfully | Not added |

The determination rests on the Foundation's own enumeration, not on inference
from the enums. Corporate Operations Semantics Foundation §20:

> Generation One presently requires limited transition semantics for: Founder
> Attention; blocked state; handoff disposition; **deadlines reaching or
> passing their consequential time boundary**; **renewals becoming actionable
> or satisfied**; **follow-ups becoming satisfied, moot, redirected, or
> escalated**.

Renewal and Deadline transitions describe an obligation **progressing**.
Neither vocabulary contains a value meaning *this obligation is not
established*.

## 2. Starting and ending SHAs

| Repository | Start | End |
| --- | --- | --- |
| `huerta-group-operations` | `03dfdf3` | `db7ea3e` |
| `huerta-group-llc` | `957424b` | this report's commit |

## 3. Renewal disposition semantics found

`renewal_state` = `outstanding | actionable | satisfied | lapsed`. No
supersession field, no history table, no note or reason column. UPDATE is
permitted to Corporate Operations.

Neither closing value is true here:

- **`satisfied`** asserts the continuation requirement was met. It was not met;
  it was never established. The registration runs to 2031 and no continuation
  act occurred.
- **`lapsed`** asserts the standing was lost. The trade name is **ACTIVE**.

Using either would record a false institutional fact in order to clear a view.
An observation for the record: `lapsed` is in the enum but is **not** among the
transitions Foundation §20 enumerates for a Renewal. That predates this
assignment and was not relied on.

## 4. Deadline disposition semantics found

`deadline_state` = `pending | reached | passed`. No supersession, no history, no
note. UPDATE permitted to Corporate Operations.

The vocabulary is purely temporal — it describes a boundary arriving. Today is
2026-08-23 and the represented boundary is 2026-11-20, so `reached` and
`passed` are both false. There is no value meaning *withdrawn*, *cancelled*, or
*not established*.

## 5. Follow-Up disposition semantics found

`follow_up_state` = `outstanding | satisfied | moot | redirected | escalated`.
All four closing values are exactly those Foundation §20 enumerates.

**`moot` is true here.** The follow-up is "Review renewal requirements ahead of
the filing window"; there is no filing window, so the expected action has ceased
to have a point. That is what moot means, and it is a governed value rather
than a repurposed one.

## 6. Backend capability vs interface gap

For all three types the **backend already permits the change** — an
`amend_*` UPDATE policy scoped to `can_author_representation()`, i.e. Corporate
Operations alone. **No server action or interface control existed for any of
them**: `authoring.ts` creates renewals, deadlines and follow-ups and never
writes a state.

So the gap was interface-only for Follow-Up, and **semantic, not technical**,
for Renewal and Deadline. The database would have accepted `satisfied` on the
renewal today; what stops it is that it would be untrue.

## 7. UI interaction added

One control, on the Operational Record's existing Follow-ups list: a disposition
select offering Foundation §20's four exits, shown only while a follow-up is
outstanding, with the note "Ending a follow-up completes nothing else. The
matter, and any obligation on it, are untouched." A disposed follow-up remains
listed, struck through, showing its disposition.

`disposeFollowUp` refuses an empty disposition and refuses `outstanding`
explicitly — the open state is not a disposition.

**No reason is captured, because the schema has none.** Unlike an Attention exit
(ground + note) or a Handoff (disposition note), a Follow-Up carries no place to
say why. Where the reason is consequential it belongs in a Material Change,
which is how consequence reaches Headquarters. This asymmetry is reported, not
repaired — repairing it would be schema change without a determination.

No bulk editor, no obligation subsystem, no task actions, no new stage.

## 8. Access class / ADR-0017

**Unchanged.** The control invokes the existing `amend_follow_up` policy and is
therefore available to Corporate Operations alone; the Founder Office cannot
reach it, and no policy was added, widened or relaxed. No Founder write
capability was created. Server-side authorization is verified in the action as
well as by RLS.

## 9–11. Disposition results

**None applied.** The three stale objects are exactly as the Founder Office
described them:

```
renewal   | outstanding
deadline  | pending
follow_up | outstanding
```

- **Renewal — stopped.** No governed disposition exists (§24).
- **Deadline — stopped.** No governed disposition exists (§24).
- **Follow-Up — capability built and validated, not applied.** Applying it
  requires a Corporate Operations session, and Development holds no Corporate
  Operations credential (§21). Applying it alone would also leave the matter
  internally contradictory — no follow-up owed, beside a filing still shown due
  in November — which is more misleading than uniform staleness. It should be
  applied together with the other two once they are determined.

## 12. Historical preservation evidence

Nothing was deleted, rewritten or overwritten; nothing was applied at all. The
mechanism built preserves by construction: disposing a follow-up changes its
`state` and leaves the row, its description, its owner and its creation time
intact, and the record page continues to show it.

Validated on the disposable stack: after disposal the follow-up no longer
appears among outstanding ones, and remains readable with `state = moot`.

## 13. HGP trade-name current representation

The register currently holds the state dimension `registration: valid`,
sourced from Administration & Compliance. **That remains accurate** and was not
touched.

**The remaining authoritative facts have no governed home, and none was
invented.** Registered 2026-06-15, expires 2031-06-15, fee paid, owner Huerta
Group LLC:

- A **state dimension** carries a value from a declared vocabulary, not a date.
- A **date** has exactly one governed home in this model — a **Deadline** — and
  the determination expressly prohibits creating one.
- The Record's **admission note** is frozen by trigger; correcting it means
  superseding the Record, which is an authoring act requiring a credential, and
  which raises the unresolved question in §24.3.

So the expiry is recorded in this report and nowhere in the register. That is
reported as a limitation rather than solved.

## 14. Administration & Compliance provenance

Preserved and unchanged. The record, the renewal and the state dimension all
name Administration & Compliance as the source function with reference
`trade-name filing`. Corporate Operations remains the representation owner and
was not made the source authority for the registration.

## 15–16. Founder Home, Executive Review, Coming Due

**Unchanged, and still showing the stale obligations** — necessarily, since
nothing was applied. The November deadline still appears under Coming Due, the
renewal still appears outstanding, and the follow-up still appears owed.

The behaviour after a valid disposition is proven on the disposable stack: the
current-view queries filter on state (`deadline` in pending/reached, `renewal`
in outstanding/actionable, `follow_up` = outstanding), so a disposed obligation
leaves every current surface without further code.

## 17. Founder Attention

**None created**, and none would be. Nothing was applied; and the disposition
mechanism touches only `follow_up.state`, creating no nomination and no
attention item. Asserted on the disposable stack: disposing a follow-up ends
nothing else on the matter.

## 18. Schema impact

**None.** Zero files under `supabase/` changed. No table, column, enum value,
trigger, policy or migration. The stop rule was honoured: where correction
would have required new schema, the work stopped rather than creating it.

## 19. Authentic-runtime preservation

The register was not reset, not written to, and not signed into. Fingerprint
before and after this assignment: **identical**.

All destructive testing ran on the disposable validation stack. Every count,
the review boundary (2026-08-23 02:55:26+00), both actor identities, the venture
snapshot and every record title are as they were.

**One authentic change is visible since Stage 6, and it is not mine.** Both
credential digests changed while every other value stayed identical — the
signature of an authorized `gen1 set-password`, which is the one action Stage 6
asked for. The fingerprint detected exactly what it was built to detect and
nothing else.

## 20. Semantic and §31 conformance

All invariants hold. Specifically for this assignment: **Renewal ≠ Deadline ≠
Follow-Up** (three vocabularies, no shared disposition model appeared while one
was being solved); **historical disposition ≠ deletion** (nothing deletes);
**Corporate Operations representation ≠ source-domain truth** (the correction
changes representation, never the registration).

All ten §31 tests answer yes. pgTAP: 83 assertions, PASS. The authentic
operations suite is **61 of 61**, with six new checks (§22).

## 21. Authentication and RLS — and a credential finding

RLS remains deny-by-default; ADR-0017 unchanged.

**Development cannot apply the correction because it holds no Corporate
Operations credential**, and did not create one. Acting through `psql` as
superuser would have bypassed the access class the architecture exists to
enforce, and technical ability is not authority (ADR-0017).

**A finding that should be acted on.** Verifying credential validity showed
that `founder@huertagroupllc.test` currently authenticates with the password
**published in this repository** (`preproduction-only`), while
`operations@huertagroupllc.test` correctly does not. The Founder Office account
holds read-all, Review Event and attention-override authority.

The exposure is bounded — the stack binds to localhost on the Founder's own
machine — but the account should not be openable by a credential in a git
repository. **Recommended: run `npm run gen1 set-password` for the Founder
Office account and choose a value that is not the published fixture.** No
password was requested, recovered, or set by Development; only the published
one was probed, which is verification rather than recovery.

## 22. Defects found and repairs

No defects were found in existing behaviour. Six checks were added, four of
which exist to keep this correct in future:

| Check | Purpose |
| --- | --- |
| A follow-up disposed moot stops being owed and remains readable | The mechanism works and preserves |
| Disposing a follow-up ends nothing else on the matter | Disposal is not cascade |
| **A renewal has no value meaning the requirement is not established** | Pins the deficiency — the database refuses an invented value (22P02) |
| **A deadline has no value meaning the boundary is not established** | Pins the deficiency |
| The three vocabularies stay distinct | No shared disposition model appeared |

The two pinning checks matter: they mean a later stage cannot quietly add an
enum value to make this problem go away without a Founder Office determination.

## 23. Repository, build, test, CI

```
11 structural invariants  lint · typecheck · build green
secret scan               green
authentic register        fingerprinted before and after — unchanged
disposable stack          83 pgTAP assertions, boundary suite, 61/61 authentic operations
```

Corpus gate green; CI verified on push. Diff limited to the corrective work: one
vocabulary constant, one server action, one control, five checks. No schema, no
dependency change.

## 24. Semantic deficiency requiring Founder Office determination

### 24.1 Renewal — historical disposition

- **Affected object type:** Renewal.
- **Existing governed semantics:** Foundation §20 provides *renewals becoming
  actionable or satisfied*. The implemented enum is `outstanding | actionable |
  satisfied | lapsed`.
- **Why the required correction cannot be represented:** the required outcome is
  that a renewal cease to be current because **no continuation requirement is
  established**. `satisfied` asserts a continuation act that did not occur;
  `lapsed` asserts a loss of standing that did not occur — the trade name is
  ACTIVE to 2031. There is no value for a continuation requirement that was
  never established, and no supersession or retirement field on the object.
- **Why deletion or substitution would violate governance:** deletion destroys
  the historical fact that Headquarters represented this obligation, which the
  determination prohibits; substitution records a false institutional fact to
  clear a view.
- **Exact determination required:** whether a Renewal may cease to be current on
  the ground that the continuation requirement is **not established by the
  authoritative source** — and if so, what that transition is called and what it
  must state.
- **What becomes possible afterwards:** a migration adding the determined value
  to `renewal_state` with its comment, a `disposeRenewal` action restricted to
  Corporate Operations, one control beside the existing Renewals list, and
  application to the stale object. Estimated small; the pattern is already built
  for Follow-Up.

### 24.2 Deadline — historical disposition

- **Affected object type:** Deadline.
- **Existing governed semantics:** Foundation §20 provides *deadlines reaching
  or passing their consequential time boundary*. The enum is `pending | reached
  | passed`, purely temporal.
- **Why the required correction cannot be represented:** the boundary
  (2026-11-20) has neither been reached nor passed, and is not established at
  all. Nothing in the vocabulary means withdrawn, cancelled, or not
  established.
- **Why deletion or substitution would violate governance:** as above. Marking
  it `passed` would additionally imply its stated consequence — "registration
  lapses" — occurred. It did not.
- **Exact determination required:** whether a Deadline may cease to be current
  on the ground that the time boundary is **not established by the authoritative
  source**, and what that transition is called.
- **What becomes possible afterwards:** the same bounded pattern as 24.1.

### 24.3 A related gap, surfaced but not blocking

Generation One defines supersession for Operational Records, state dimension
values and venture snapshots, but **does not define what becomes of Deadlines,
Renewals and Follow-Ups attached to a Record that is superseded**. Superseding
the mis-admitted trade-name Record would have been an available governed act —
its admission note, "Continuation obligation with a consequential boundary", is
now known to be false — but whether that disposes of the obligations hanging off
it is undetermined, and the current views do not exclude them. Development did
not rely on it, because doing so would have invented the rule.

This is offered as context for 24.1 and 24.2: a determination on obligation
supersession might resolve all three at once, and might be the better-shaped
question.

## 25. No unsupported future obligation was created

Confirmed. No renewal date, filing window, deadline, follow-up or reassessment
trigger was created, and no replacement object of any kind. The June 2031
expiry appears in this report and **not** in the register, precisely because its
only governed home would be a Deadline, which the determination prohibits.

## 26. Production

Production was not launched. No production project exists, no plan changed, no
recurring cost was created. All work was local pre-production.
