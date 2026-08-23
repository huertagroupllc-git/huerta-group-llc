# Corporate Command Center — Generation Two Stage 1 Construction & Validation Report

**Classification: Institutional Record** — completion report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office. The report creates no authority and authorizes nothing.

- **Returned:** 2026-08-22.
- **Posture:** LOCAL / PRE-PRODUCTION ONLY. Production hosting not authorized,
  not created, not launched.

## 1. Stage determination

**Stage 1 — Founder Home / Command View.** Constructed, inspected, repaired and
validated. Stages 2 through 9 of the master sequence were not begun.

## 2. Starting and ending SHAs

| Repository | Start | End |
| --- | --- | --- |
| `huerta-group-operations` (runtime) | `7d408dd` | `0eb0e11` |
| `huerta-group-llc` (corpus) | `6e2305a` | `aef998d` + this report's commit |

## 3. Commits

Runtime, two bounded commits:

- `1af8fd9` — *fix: a failed container restart must not leave the published
  password live.* The security repair, isolated so it can be reviewed on its
  own.
- `0eb0e11` — *feat: Founder Home — the Generation Two Command View.*

Pushed to the private remote `huertagroupllc-git/huerta-group-operations`;
remote SHA parity verified. **The runtime repository has no CI** — it never has,
because its gate requires Docker and a running stack. The gate was run locally
and its output is recorded in §25.

## 4. Founder Home implementation

`/` is now the Command View. Generation One's home listed every Operational
Record with every state dimension; GEN2-REQ §6 refuses that, so the full
register moved to `/records`, where it already existed and belongs. Generation
One's three governing questions all remain answerable — "what is happening"
from the register, one click away and linked from both the header and the foot
of the page.

Six sections, in GEN2-REQ §5's order of consequence, each headed by the
governing question rather than a noun:

1. **What needs me?** — standing Founder Attention, ordered by effective
   priority.
2. **What is blocked?** — open blocking assertions.
3. **What materially changed?** — Since Last Review.
4. **What is coming due?** — Deadlines, Renewals, Follow-Ups, as three groups.
5. **What are we waiting on?** — non-blocking dependencies, undisposed handoffs.
6. **Where do the ventures and functions stand?** — venture snapshot, function
   standing.

New files: `lib/domain/command.ts` (the read model), `components/command.tsx`
(presentational primitives). Modified: `app/page.tsx`, `app/layout.tsx`,
`app/records/[id]/page.tsx`, `lib/domain/headquarters.ts`.

## 5. Consequentiality hierarchy

The hierarchy governs order, not layout. There is no tile, card, gauge, chart,
KPI or metric anywhere on the page. Within sections, ordering is by the
institution's own vocabularies: attention by effective priority
(immediate → near-term → normal, an ordering and never a score), blockers by
how long they have stood, deadlines by due date, changes by `recorded_at`.

Completeness is subordinated to consequence in a way that is visible: matters
carrying nothing consequential do not appear at all, and the foot of the page
says how many were withheld so their absence reads as a decision rather than a
defect. On the authentic register that count is 1 (Contact notification
standby).

## 6. Founder Attention presentation

Each item carries reason, effective priority, expected Founder role,
consequence if not acted on, why involvement is presently appropriate, the
affected function, any deadline on the same matter, the dependencies standing
on it, and whether any of them presently blocks.

Attention remains an exception layer. Nothing re-alerts on elapsed time, and
the empty state says so in terms: an empty queue is a legitimate condition, not
a missing feature. Where the reader is the Founder Office, the section offers
the route to act; where it is not, it does not.

## 7. Blocker presentation

Blocked is read at request time from open blocking assertions and is never
stored. Each shows what is blocked, the condition preventing advancement, both
limbs of the Foundation §12 test as they were stated at assertion, who controls
the prerequisite where the assertion was linked to a dependency, and since when.

Two refusals to infer are worth naming. Where an assertion carries no
dependency the view says "not recorded against a dependency" rather than
guessing an owner. And on Founder involvement it reports only what the
institution recorded — "Founder Attention stands on this matter", or "none
admitted — being blocked does not by itself make a matter the Founder's". The
Command layer does not decide that question.

Operational risk that does not prevent advancement is not here; it enters as
Founder Attention, and the section note says where it went.

## 8. Material Change presentation

Bounded by `recorded_at` through the governed `since_last_review()` function,
which this layer calls and does not reimplement. Each entry shows what changed,
the materiality limb, the consequence, the recorded time, and the occurrence
time **or** the statement that occurrence time is unknown and was not inferred
from the recording time. Late-recorded entries are marked "occurred before your
last review"; corrections are marked as corrections.

Where Attention stands on the same matter it is noted as exactly that —
"Founder Attention stands on this matter", never "resulted from". The register
records no causal link between a change and an admission, and the view does not
invent one.

For a reader with no review recorded, the note says everything held is shown,
unbounded by anyone else's review, rather than claiming a boundary that does
not exist for them.

## 9. Coming Due presentation

Grouped for review under one question, kept apart in substance: three headings,
three sources, three sets of fields. A Deadline shows its due date and the
consequence of passing. A Renewal shows the standing being continued, the
consequence of lapse, and how many Deadlines arise from it — "no deadline yet —
a renewal may stand without one" when that is zero. A Follow-Up shows who owes
it and, where there is no due date, "no due date — optional by design".

There is no combined dated list, no shared sort across the three, and no "due
item" abstraction over them.

## 10. Dependency / Handoff presentation

Dependencies appear under the heading "Dependencies, not blocking", and a
dependency that presently blocks is excluded here and reported as a blocker
instead — the two sets are disjoint by construction. Handoffs show source
party, receiving party, expected action and escalation condition, under a note
stating that a handoff moves expected action and never institutional authority.

## 11. Venture / Headquarters standing presentation

Parent-level only. The HGP snapshot renders identity, governed standing,
operating phase, objective, milestone, parent-relevant blocker, major
dependency, parent decision required, as-of date and provenance — each field
omitted when the snapshot does not hold it, rather than shown empty. No venture
task, product, workflow, manuscript, queue or ledger is represented; the
Generation One schema makes them unrepresentable.

Function standing is one line per function, naming what stands and how much:
"Administration & Compliance — 1 matter · 1 carrying an open obligation ·
1 materially changed". A function with nothing consequential reads "quiet — N
matters represented, none consequential now".

**Functions are derived from the register, never enumerated.** A function
appears because Headquarters holds a matter sourced from it. The section says
so explicitly, and says that absence means Headquarters represents nothing from
that function rather than that the function is idle. Building a list of the
institution's functions would have made this system the register that defines
them, which ADR-0017 deliberately avoids.

## 12. Provenance and Operational Record drill-down

Every consequential line carries provenance, and every provenance line states
one of two standings, read off GEN1-REQ §3's source-of-truth map:

- **Headquarters record** — this platform is the authoritative source.
  Attention Items, handoffs, Headquarters dependencies, Headquarters
  follow-ups, and standalone coordination deadlines.
- **Represented** — it is not, and the line names the authoritative source
  function, its domain, the source reference, and the confirmation state.
  Operational Records, state values, Material Changes, Renewals, Venture
  Snapshots, and any Deadline arising from a Renewal, which takes its authority
  from that Renewal.

Every summary links to its Operational Record, which carries the full
Generation One representation and the source reference. The path is Command
summary → Operational Record → authoritative source, and the third step is a
reference rather than a link, because no enterprise search or cross-system
navigation was built.

Drill-down carries the review position: links pass `?from=command&at=<section>`,
and the record page renders "← Return to the Command View" pointing back at that
anchor. Nothing is stored; the position is the URL. Verified in the running
application from the Coming Due section, returning to `/#due`.

## 13. Generation One architecture reused

Unchanged and reused in full: authentication, the four access classes, row
level security, Operational Instances and Records, multidimensional State,
Material Change, Founder Attention with its three priority fields, Dependencies,
blocking assertions, Handoffs, Deadlines, Renewals, Follow-Ups, provenance and
confirmation, the seven histories, the technical audit trail, the
`since_last_review()` function, the `standing_attention`, `currently_blocked`,
`current_state` and `current_venture_snapshot` views, the guard, backup and
recovery, and the local runtime.

One Generation One export was added rather than duplicated: `byEffectivePriority`
in `lib/domain/headquarters.ts`, so the Command layer orders attention with the
same sequence Generation One uses instead of keeping a second copy.

## 14. ADR-0017 / Founder-access treatment

**ADR-0017 is unamended. No policy was relaxed, broadened or added. No access
class gained a capability.**

The Founder Office is offered what it already held — read all, record Review
Events, override attention priority, act on attention. Where GEN2-REQ §18 and
the master package name actions the Founder Office does not hold technically,
they are exposed to the class that does hold them, per `fd-0016` §2.6:

| Action named | How Stage 1 treats it |
| --- | --- |
| Acknowledge / review an Attention Item | Review Event, Founder Office |
| Resolve Attention where involvement is complete | Attention exit, Founder Office |
| Redirect expected Headquarters action | Attention exit on the `validly_redirected` ground, Founder Office — the existing governed mechanism, per `fd-0016` §2.7 |
| Review or dispose of an operational escalation | Attention exit, Founder Office |
| Record a Headquarters follow-up | Corporate Operations, which holds it |
| Update Headquarters representation | Corporate Operations, which holds it |

Verified in the running application under both access classes: the Founder
Office sees the route to act on attention; Corporate Operations does not, and
sees its own authoring paths instead.

## 15. Financial visibility treatment

**Nothing financial appears on Founder Home, because nothing financial has been
admitted.** The register presently holds no Operational Record with Accounting
& Financial Management provenance, no financial-kind dependency, and no
attention item on the `financial_exception` reason.

This is the correct outcome and not a shortfall. The Command layer surfaces what
Corporate Operations has admitted; it does not decide what qualifies. Deciding
would have resolved GEN1-REQ §19 Q6, which `fd-0016` §2.12 forbids. When
Corporate Operations admits a capital-dependent blocker, a required
expenditure, a recurring commitment or a financial exception, it will appear
through the existing sections carrying Accounting provenance and its as-of
context, with no code change.

No finance panel, ledger, transaction view, calculation or integration was
built.

## 16. Administration & Compliance visibility treatment

Administrative consequence appears through the existing sections, not a
compliance surface. On the authentic register the trade-name registration
carries a Renewal, a Deadline arising from it, and a Follow-Up — each shown with
its own consequence and each marked **Represented**, naming Administration &
Compliance as authoritative.

No case file, evidence, filing, correspondence or analysis is reproduced, and
no central-visibility rule was established. GEN1-REQ §19 Q7 remains
unresolved.

## 17. Schema/migration changes, if any

**None.** No migration, no table, no column, no trigger, no policy, no view, no
function. The Generation One schema is byte-identical to `7d408dd`.

This is now enforced rather than asserted. A new structural check in the
validation gate — *"Generation Two added no storage"* — reads the create-table
statements out of the migrations and fails if the set differs from Generation
One's eighteen tables in either direction. Adding a table is a Founder Office
matter, and the check says so.

## 18. Authentic Headquarters examples exercised

Against the authentic register, in the running application, signed in as both
access classes:

| Required case | Outcome |
| --- | --- |
| Active Founder Attention | Two items — custom domain (near-term) and Generation One program (normal), each with role, consequence and justification |
| Blocker preventing meaningful progress | **Not present in the authentic register** — the seeded blocking assertion has ended. Exercised instead against the disposable stack (§19) |
| Significant Dependency that is not a Blocker | The Founder Office authorization dependency, shown under "Dependencies, not blocking" and annotated "none of which presently blocks this matter" |
| Material Change that does not create Attention | The HGP venture milestone and the trade-name change, both shown with no Attention implied |
| Coming Due item | The trade-name Deadline (due 2026-11-20), Renewal (outstanding, 1 deadline arising) and Follow-Up (no due date) |
| HGP / Headquarters standing | HGP snapshot at parent level; three functions with their standing, none manufactured |
| Quiet domain with no consequential matter | Contact notification standby appears nowhere on Founder Home and is counted in the footer as deliberately absent |

**No state was authored into the authentic register to populate the interface.**
The missing blocker was a real gap in coverage, and the honest options were to
invent one or to prove the path elsewhere. Authoring a blocking assertion would
have been Development making an institutional assertion about Headquarters, so
the path was proven against the disposable stack instead and the gap is
reported here rather than papered over.

## 19. Semantic-conformance results

Five new checks in the authentic-operations suite exercise the Command
composition against a disposable stack. All pass; the suite is now 33 of 33.

| Check | What it proves |
| --- | --- |
| A matter reads as blocked with no state dimension saying so, and no Attention implied | Blocked stays a read-time projection; State ≠ Blocker ≠ Attention |
| A second dependency on the same matter is not thereby blocking | Dependency ≠ Blocker survives composition |
| A matter with nothing consequential is in the register and on no Command surface | Quiet is representable; the surface is not an index |
| Coming due is composed from three relations and merges none of them | Deadline ≠ Renewal ≠ Follow-Up survives grouping |
| Composing the entire Command View writes nothing | The command layer reads; it has not become a second register |

The last runs the exact query set `getCommandView()` performs and compares row
counts across eleven tables before and after.

## 20. §31 test results

All ten answer **yes**, unchanged. Asserted in the pgTAP semantic-conformance
suite (83 assertions, Result: PASS) and, for tests 1–9, again through authentic
operation. Generation Two touched no schema, so no test could have been
weakened by it; they were re-run rather than assumed.

## 21. Inspector findings

Six defects, all found by inspection or by the gate, all repaired.

1. **The validation gate left the published password live.** `supabase db reset`
   completes the reset and then fails restarting containers; the caller aborted
   on the non-zero exit before retiring the fixture credentials the seed had
   just reinstated. A security defect in Generation One tooling, and the most
   serious finding of the stage.
2. **A reset that succeeded was reported as failed**, because the gate trusted
   an exit code instead of the database.
3. **Root cause: `storage-api`.** Kong returns 502 for it consistently.
   Generation One stores no objects and never started it deliberately.
4. **Function standing miscounted obligations.** "1 open obligation" counted
   matters carrying obligations, not obligations — the trade-name matter carries
   three. The label claimed something the number did not mean.
5. **Provenance lines repeated themselves.** Attention items rendered the source
   function twice, once on the item's own line and once on the matter's.
6. **The change-boundary note claimed a boundary that did not exist** for a
   reader with no recorded review, and labels repeated the actor's name as its
   own access class.

## 22. Repairs performed

1–3 are repaired together in `1af8fd9`. The reset now asks the database whether
it happened rather than trusting the CLI, and retires fixture credentials inside
the reset so nothing on the way out can skip it. `gen1 activate` used the same
unsafe sequence and now uses the shared path. `storage-api` joins the excluded
services, closing the root cause and removing unused surface from a machine
that holds the register.

4–6 are repaired in `0eb0e11`: counts renamed to what they count and labelled
accordingly, the attention provenance line reworded so the two lines say
different things, the change-boundary note made reader-accurate, and duplicated
labels suppressed.

Verified after repair: the published password is refused for both accounts
(HTTP 400), anonymous read of `operational_record` returns `[]`, the register
matches the activation baseline, and the full gate passes end to end.

## 23. Explicit exclusions preserved

Not built, not begun, not scaffolded: CRM and Stage 7 relationship
functionality, sales pipeline, ERP, project management, venture task
replication, QuickBooks or any accounting integration, bank or transaction
ingestion, any new financial or administrative system of record, compliance case
management, governance editing, enterprise search, workflow engine, AI or agent
capability, automated corporate querying, notification infrastructure,
historical analytics, portfolio analytics, broad synchronization, public access,
production hosting.

No recurring infrastructure cost was created. Nothing was purchased, no plan
changed, no hosted project created.

## 24. Unresolved Founder Office decisions

Carried forward, none resolved by Development:

- **GEN1-REQ §19 Q6** — the financial visibility boundary. Untouched by design;
  §15 explains why Stage 1 shows nothing financial.
- **GEN1-REQ §19 Q7** — the administrative visibility boundary.
- **GEN1-REQ §19 Q5** — venture snapshot responsibility. Stage 1 reads the
  snapshot and decides nothing about who supplies it.
- **GEN2-REQ §34.3** — a standardized parent-level venture vocabulary. Not yet
  necessary with HGP the only chartered venture.
- **GEN2-REQ §34.4** — whether a Founder decision arising from an Attention Item
  should be recorded operationally and linked to the authoritative governance
  record. Stage 1 records Founder disposition only where Generation One already
  provides for it: the exit ground and note, and the override reason.
- **GEN2-REQ §34.5** — which Accounting outputs surface first.

One question is raised by Stage 1 and returned rather than answered:

- **Does the Founder Office hold authority to record an operational disposition
  against an Operational Record that carries no standing Attention Item?**
  ADR-0017 does not grant it, and `fd-0016` §2.8 requires that a genuinely new
  direct Founder capability return for determination. Stage 1 therefore
  implements Founder disposition only through the attention mechanism. If the
  Founder Office intends the broader capability, that is a determination, not a
  code change.

## 25. Repository/build/test results

Runtime, `npm run verify:full`, all green:

```
9 structural invariants   including "Generation Two added no storage — 18 tables, unchanged"
secret scan               52 tracked files and 19 commits
lint · typecheck · build  green
guard                     register holds no authentic history
semantic and authorization suites   83 assertions, Result: PASS
access and identity boundaries      pass
authentic Corporate Headquarters operation   33/33 checks
restored to the seeded baseline     register clean, fixture credentials retired
```

Corpus, `npm run verify`: nine validators green, 142 links across 136 governed
documents resolve, lint/tsc/build green. CI run 32616171418 success.

Working trees clean at both ending SHAs. Git diff limited to Stage 1 and the
three repairs: no migration, no schema, no `config.toml`, no dependency change.

## 26. Authentication/RLS validation

- Authentication remains required: an unauthenticated request to `/` redirects
  to `/login`.
- Deny-by-default holds: anonymous read of `operational_record` returns `[]`.
- ADR-0017 intact: no policy added, removed or widened; the four access classes
  and their capabilities are byte-identical to `7d408dd`.
- Class boundaries verified through authentic operation: Corporate Operations
  cannot override attention priority (42501); the Founder Office can; a
  governance-mandated nomination cannot be recorded as not admitted (23514); a
  Record's provenance cannot be rewritten.
- Published fixture credentials retired — refused for both accounts.
- Technical access remains distinct from institutional authority, and the
  Command View states the distinction on every line rather than only in the
  schema.

## 27. Local/pre-production verification

Exercised in the local runtime at `http://localhost:3000` against the authentic
register, under both access classes, with drill-down and return verified.
`.env.local` is regenerated from the running stack and is not committed. The
register lives in the Docker volume and matches the activation baseline. Backup
and recovery are unchanged; the guard is unchanged and functioning.

**One consequence of validation requires Founder action.** The full gate resets
the database, and the reset reinstates and then retires the seeded credentials.
The password set at activation no longer exists. Before next signing in, run:

```
npm run gen1 set-password
```

Until then no credential opens the register — which is the intended posture
after any reset, not a fault.

## 28. Confirmation production was not launched

Production was not launched. No production project exists, none was created, no
plan was changed, no paid feature was enabled, no recurring cost was incurred,
and no public access exists. The system ran only on the Founder's machine
bound to localhost throughout. Successful pre-production validation is not
implicit production approval.

## 29. Recommended next bounded Generation Two stage

**Stage 2 — Executive Review Flow**, as the master sequence has it, and for a
reason Stage 1 exposed. Founder Home now answers each governed question in
place, but the review is still a page rather than a session: the Founder reads,
drills into a matter, returns, and nothing records where they had got to except
the anchor in the URL. GEN2-REQ §16 asks the system to distinguish
already-reviewed material state from new consequential change and from matters
carried forward, and Stage 1 supplies only the first of those three.

Before building it, §20 asks Development to determine whether existing Material
Change history, Attention history and review history already support that
distinction. On Stage 1's evidence they support two of the three: `recorded_at`
against the reader's Review Events distinguishes new from already-reviewed, and
attention admission history distinguishes newly escalated. What has no
representation is *reviewed but unresolved* — a matter the Founder has seen and
consciously left standing. That may need nothing more than reading standing
Attention against the last Review Event, which would require no schema change;
Stage 2 should test that before Corporate Operations is asked for a narrow
semantic amendment.

Two smaller items also belong in Stage 2's scope: the Today / 7 Days / 30 Days
convenience horizons, which the existing `changes_in_last()` function already
supports and which must not displace Since Last Review as the governed
boundary; and a review note on the Review Event, whose `note` column exists and
is unused.
