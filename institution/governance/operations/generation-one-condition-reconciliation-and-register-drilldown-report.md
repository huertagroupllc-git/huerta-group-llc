# Authentic-Use Correction — Generation One Conditions & Register Drill-Down

**Classification: Institutional Record** — completion report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office.

- **Returned:** 2026-08-23.
- **Posture:** LOCAL / PRE-PRODUCTION. Production not launched, not implied.
- **Outcome:** **complete.** Both stale conditions reconciled, the Register
  reaches what it lists, no schema change.

## 1. Dispositions applied

| Object | Disposition | Ground / reason |
| --- | --- | --- |
| **Attention** — "Authorize or withhold Generation One implementation" | **Exited**, 2026-08-23 | `founder_action_occurred` — Foundation §10's first exit ground: the required Founder action occurred |
| **Dependency** — "Founder Office authorization to implement Generation One" | **Retired**, 2026-08-23 | The authorization was given, so the reliance ended |

`founder_action_occurred` is the truthful ground: the Founder Office made the
determination the item awaited. It was not exited as moot, below threshold, or
resolved elsewhere — all of which would have described something that did not
happen.

Both exit notes state what the correction does **not** mean. The attention note
records that production hosting remains separately deferred pending a
capital-allocation decision, "which is a different matter and not this one"; the
retirement reason records that retiring completes nothing else and that
Generation One remains authorized and active in local pre-production.

**The Custom domain connection Attention Item was not touched** — verified
`exit_ground` null, still standing at Near-Term.

## 2. Histories remain reconstructable

Nothing was deleted, rewritten or replaced. Both objects remain with everything
they always carried, now plus their disposition:

```
attention   Generation One program
            expected role  "Authorize or withhold Generation One implementation"
            exit_ground    founder_action_occurred
            exited_at      2026-08-23
            exit_note      "The Founder Office made the determination this item awaited…"

dependency  "Founder Office authorization to implement Generation One"
            kind founder · rests with Founder Office
            retired 2026-08-23
            reason "The authorization was given, so the reliance ended. Retiring it
                    completes nothing else…"
```

The Operational Record's detail surface shows both, the dependency struck
through with its retirement date and reason beneath it.

## 3. Before and after, in the executive presentation

| Surface | Before | After |
| --- | --- | --- |
| Command View — *What needs me?* | Custom domain (Near-Term) **and** Generation One (Normal) | **Custom domain alone** |
| Command View — *What are we waiting on?* | The Founder Office authorization dependency | **"None standing"** |
| Executive Review | Both carried as currently standing | Neither stands; neither is carried forward |
| Generation One record state | authorization=authorized, execution=active, external=independent | **unchanged, all three** |

The Generation One Operational Record was not altered in any respect. Its
authorization, execution and external dimensions read exactly as before, each
still confirmed and independently sourced. Local pre-production posture remains
explicit in the application header and in the record's `external: independent`
dimension. **Production hosting is nowhere implied** — the attention exit note
says so in terms, and no deadline, renewal, follow-up or attention item was
created for it.

## 4. Register drill-down

The Corporate Operations Register listed Headquarters representations it could
not reach. `Command summary → Operational Record → authoritative source` held
from Founder Home, the Executive Review, the five function contexts and the
venture context — from every surface except the one whose whole purpose is to
list Operational Records.

Each entry's title is now a route to that Record's existing detail surface.
Deliberately minimal:

- **No parameters carried.** The Record's default return is already
  "← Register", so no surface, anchor or state needed inventing.
- **No new navigation infrastructure**, no new component, no new route.
- **Only the Record title is interactive.** The kind, admission ground, source
  function, freshness and state dimensions remain text — the correction was a
  missing route, not an invitation to make every datum a link.
- **The Register is otherwise unchanged**: same composition, same ordering, same
  quiet lines, no new semantics.

One line of guidance was added to each entry's provenance text — "open the
matter for its source reference" — so the third hop's location is stated rather
than implied.

## 5. Provenance behaviour

Unchanged and intact. The Register continues to name the authoritative source
function and freshness for each entry without inventing a destination; the
source hop stays on the Operational Record, where the Stage 6 resolver already
lives and where it resolves only what is deterministic.

For the two Generation One entries the source reference is `fd-0013`, which the
resolver classifies as a determination identifier and resolves to the
determinations register when the corpus location is configured. Nothing in this
correction changed that behaviour, and no route was manufactured anywhere it
did not already exist.

## 6. Semantic and security validation

All invariants hold, and the two this correction bears on are asserted rather
than assumed:

- **Attention exit completes nothing else.** The matter remains active and
  un-superseded after the item exits — checked directly.
- **Dependency ≠ Blocker.** Retiring a dependency does not end a blocking
  assertion that named it; the blocker stands until separately ended. Checked
  by retiring a dependency a live blocker referenced and confirming
  `ended_at` is still null.

Also asserted: retirement is refused without a reason; both objects remain
readable with their original terms; and disposing one matter's conditions
leaves every other standing item alone.

**All ten §31 tests answer yes.** pgTAP: 83 assertions, PASS. Authentic
operations suite: **70 of 70**, with five new checks.

**ADR-0017 unchanged.** No policy added, removed, relaxed or widened. The
retirement control invokes the existing `amend_dependency` policy, scoped to
`can_author_representation()` — Corporate Operations alone. The Register link is
a route to a page that already enforced authentication. Authentication remains
required; RLS remains deny-by-default; no Founder Office capability widened.

**No schema or semantic expansion.** Zero files under `supabase/` changed. No
new state, vocabulary, table, column or concept — the dependency lifecycle used
here (`retired_at` / `retired_reason`) has existed since the Generation One
build and had simply never been reachable.

## 7. Authentic-register preservation

The register was not reset and not destructively validated. All reset-based
testing ran on the disposable stack.

The writes were the two authorized dispositions and nothing else, applied as the
existing **Corporate Operations** actor with row level security in force —
through the same governed execution mechanism previously reported: an
admin-minted session for that actor, revoked afterwards. **No credential was
created, recovered, altered, requested or logged.**

The full validation gate was then run against the reconciled register and
reported the fingerprint unchanged either side, credentials intact. The Founder
review boundary is unchanged; the single Review Event is untouched; unrelated
records, blockers, handoffs, obligations and the venture snapshot are unchanged.

The guard continues to report authentic history present and to refuse
destructive commands.

## 8. Commits and SHAs

| Repository | Start | End |
| --- | --- | --- |
| `huerta-group-operations` | `3c546c1` | `a1084cc` |
| `huerta-group-llc` | `fa4892f` | this report's commit |

- `a1084cc` — *feat: retire a dependency, and let the Register reach what it
  lists.*

The authentic reconciliation is not a commit — it is operational history in the
register, evidenced in §1–§3.

## 9. Remaining authentic-use deficiencies

1. **The Register's venture-snapshot list has no route**, while Founder Home and
   the Executive Review both link ventures to `/ventures/<identifier>`. The
   instruction was specific to Operational Record representations and a venture
   snapshot is not one, so it was left alone. It is a one-line correction
   whenever the Founder Office wants it.
2. **A Follow-Up disposition still records no time or basis**, where Renewal and
   Deadline now do and where Attention exit and Handoff disposition always did.
   Carried forward from the previous report; it needs schema beyond any current
   determination.
3. **Dependency retirement records a reason but no ground**, unlike Attention
   exit (seven enumerated grounds) and blocking end (five). Free text was
   correct here because Foundation §13 enumerates none — but if the Founder
   Office expects grounds, that is a semantic determination rather than an
   implementation choice.
4. Unchanged and open: GEN1-REQ §19 Q6 and Q7; GEN2-REQ §34.3, §34.4, §34.5; and
   whether Development should ever again mint an actor session administratively
   to perform an authorized act.

No new deficiency blocked this correction.
