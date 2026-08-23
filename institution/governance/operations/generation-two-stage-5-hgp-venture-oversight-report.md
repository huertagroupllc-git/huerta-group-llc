# Corporate Command Center — Generation Two Stage 5 HGP Parent-Level Venture Oversight Construction & Validation Report

**Classification: Institutional Record** — completion report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office. The report creates no authority and authorizes nothing.

- **Returned:** 2026-08-22.
- **Posture:** LOCAL / PRE-PRODUCTION ONLY. Production not launched. No
  recurring infrastructure cost created.
- **Schema change:** one nullable column, under the Founder Office
  forward-milestone determination.

## 1. Stage determination and SHAs

**Stage 5 — HGP Parent-Level Venture Oversight.** Constructed, inspected,
repaired and validated. Stage 3 remains deferred.

| Repository | Start | End |
| --- | --- | --- |
| `huerta-group-operations` (runtime) | `6d675b6` | `cb9d502` |
| `huerta-group-llc` (corpus) | `15510c2` | this report's commit |

## 2. Commits

- `fdf2979` — *feat: a venture may state what it expects next, and it is not a
  deadline.* The migration and its structural guard, isolated so the schema
  change can be reviewed on its own.
- `cb9d502` — *feat: HGP parent-level venture oversight.*

Pushed; SHA parity verified. The runtime repository has no CI — its gate needs
Docker and a running stack — and was validated locally (§13).

## 3. Implementation

`/ventures/<identifier>`, reached from the Ventures group on Founder Home and
in the Executive Review's standing step. Sections, in the order the parent needs
them:

1. **Where does the venture stand?** — identity, governed standing, operating
   phase, consequential objective.
2. **What has it achieved, and what is expected next?** — the two milestones.
3. **What does the parent owe the venture?** — parent decision required, and
   Founder Attention standing on the venture's matters.
4. **What is blocking it at parent level?** — the blocker the venture reports,
   and open blocking assertions Headquarters holds.
5. **What is it depending on?** — the dependency it reports, and Headquarters'
   reliance and handoffs.
6. **What Headquarters-relevant obligation is approaching?**
7. **What materially changed?**
8. **How does Headquarters represent the venture?** — the Operational Record.

New: `lib/domain/ventures.ts`, `app/ventures/[identifier]/page.tsx`. The section
bodies are the ones Founder Home, the Executive Review and the function contexts
already share.

## 4. Schema/migration change and its necessity

**One nullable column:** `venture_snapshot.next_expected_milestone text`.
Migration `20260823000000_venture_forward_milestone.sql`.

The existing model could not carry it truthfully. Each alternative collapsed a
distinction:

| Alternative | Why it fails |
| --- | --- |
| `current_objective` | A separately required field; using it merges Objective into Milestone |
| Derive from a Deadline | Expressly forbidden by the determination; a Deadline is a temporal obligation |
| A Follow-Up | An expected action owed by a party, not venture progress |
| A second snapshot row | Misuses supersession, which records succession in time rather than two facts held at once |

**What it is not:** no milestone entity, table, roadmap, sequence, lifecycle or
date. **Milestone ≠ Deadline is enforced by shape**, not intention: a new
structural check fails the gate if anything named for a milestone acquires a
timestamp, due date, state or deadline reference. The existing
`significant_milestone` gained a comment naming it the *last* milestone; no data
was altered.

**The migration also replaced the `current_venture_snapshot` view.** A view
defined as `select *` freezes its column list at creation, so it would have gone
on serving the old columns and silently omitting the new one — the same defect
that left `current_state` omitting provenance in Stage 4. Caught here before the
read model was written.

Applied non-destructively with `supabase migration up`, then proven from a clean
apply. Authentic data preserved; the guard reports the register matching the
activation baseline throughout.

## 5. Treatment of the forward-milestone determination

Implemented exactly as determined, and **left empty**.

HGP has not supplied a next major expected milestone, so the field reads:
*"not represented — the venture has not supplied one, and none is inferred from
an objective, a deadline or a follow-up."*

This is the authenticity requirement applied. The register holds a deadline and
an objective, and either could have been dressed up as a forward milestone. The
capability exists, is proven, and is unpopulated because the authoritative
information has not been admitted. Populating it is Corporate Operations'
act, on the venture's supply — not Development's.

The capability is exercised on the disposable stack (§10), which sets a forward
milestone and asserts the last milestone is unchanged and no deadline is
created.

## 6. Authentic HGP representations exercised, and what is absent

| Required visibility | Authentic state |
| --- | --- |
| Venture identity | Huerta Group Publishing · `huerta-group-publishing` |
| Governed standing | "Admitted venture in early operations under the FD-V1 charter"; the record's `standing` dimension reads `admitted`, established by HGP from the FD-V1 charter |
| Current major operating phase | `early_operations`, in the snapshot and as a state dimension from the venture report |
| Current consequential objective | "Establish repeatable publishing operations" |
| Last significant milestone | "Production chain verified end to end" |
| **Next major expected milestone** | **Absent** — shown as not represented |
| Parent-relevant blocker | **Absent** — "none reported in the venture's snapshot"; no open blocking assertion either |
| Significant dependency | "Parent authorization for capabilities beyond the current charter scope" |
| Founder decision / escalation | **Absent** — none raised, and no Founder Attention stands on the venture's matters |
| Approaching obligation | **Absent** — the venture's matters carry none |
| Recent Material Changes | "Venture reported a parent-relevant milestone", occurrence time unknown and not inferred |
| Authoritative source / provenance | On every line; `venture-registry.json` for the snapshot, `venture report` and `FD-V1 charter` for the dimensions |

**Five of twelve fields are absent, and all five say so.** Nothing was invented
to fill them, and no HGP condition was authored into the register.

## 7. Parent/venture boundary validation

Nothing of the venture's operations crossed. Absent, and unrepresentable:
manuscript and editorial state, publication workflow, Author Workshop queues,
internal deliberations, venture task lists, distribution operations, customer
operations, venture financial books. The register cannot express any of them,
and the page says so in its header.

The boundary is also stated where it matters most — the footer distinguishes
*not represented at Headquarters* from *absent at the venture*: "Where a field
reads not represented, the authoritative information has not been admitted to
Headquarters — it is not thereby absent from the venture."

**No consequential HGP information was found that exists institutionally but
cannot be represented without violating the boundary.** Nothing to return under
that condition.

## 8. Architecture: shared primitives without a shared abstraction

The Stage 4 question is settled on evidence from building both. **The semantics
do not repeat.** A function context is organised around source ownership and
representation responsibility; a venture context around parent-relevant standing
under a charter. Their sections ask different questions in a different order.

What genuinely overlaps is presentation of the *shared* objects — attention,
blockers, dependencies, handoffs, obligations, changes, provenance — and those
were already shared with Founder Home and the Executive Review. That is the
right depth. A common "context" abstraction over function and venture would be
presentation code asserting an institutional identity that does not hold, which
the authorization warns against directly.

**Two representations, never merged.** The snapshot is the venture's own summary;
the Operational Record is Headquarters' representation of the venture as a
matter. They are shown in separate sections with separate provenance. Where the
snapshot's `operating_phase` and the record's `operating_phase` dimension appear
to agree, no code asserts that they do — comparing a free-text summary field to a
declared vocabulary value would invent an equivalence the institution has not
declared, the same trap avoided with function-name matching in Stage 4. Both are
shown; the Founder reads them.

## 9. Provenance, drill-down and return

`Command View → HGP parent-level context → Operational Record → authoritative
source`, verified end to end. Every line carries its standing (**Represented**
here throughout, since the venture owns its truth) with source function, domain,
reference and confirmation.

Links carry `?from=venture&vn=<identifier>&at=<section>`; the record page returns
"← Return to Huerta Group Publishing" → `/ventures/huerta-group-publishing#record`.
An unrecognised identifier falls back to the register rather than building a link
to a route that does not exist — verified with `vn=nope`. `/ventures/not-a-venture`
returns 404; unauthenticated access returns 307 to `/login`.

Which ventures exist is not decided here: the list is whatever
`current_venture_snapshot` holds, and venture identity remains
venture-registry authoritative.

## 10. Semantic conformance and §31

Five new checks; the suite is **52 of 52**.

| Check | What it proves |
| --- | --- |
| The current snapshot view exposes the forward milestone | The projection tracks the table — the defect class found twice is now guarded |
| An unsupplied forward milestone stays null while objectives and deadlines exist | Absent stays absent; nothing is inferred from either |
| Last and next milestone are held separately, and setting next creates no deadline | Two representations; Milestone ≠ Deadline |
| The snapshot carries no admission ground and the Record does | Two objects, not one |
| Superseding a snapshot retains it and leaves no current one | Supersession, not rewriting |

Plus the structural check *the venture milestone is not a deadline*, read
straight from the migrations.

**All ten §31 tests answer yes.** pgTAP: 83 assertions, Result PASS. The schema
change added one nullable column and touched no test's subject; they were re-run
rather than assumed.

## 11. Security and access

ADR-0017 unchanged; no policy added, removed or widened; no new Founder write
authority. The venture context is read-only and offers no control. RLS remains
deny-by-default and the existing `venture_snapshot` policies are untouched — the
new column inherits them. Authentication required (307 verified). Published
fixture credentials retired and refused. GEN1-REQ §19 Q6 and Q7 untouched.

## 12. Defects found and repaired

1. **The `current_venture_snapshot` view omitted the new column.** `select *`
   froze its column list at creation. Found immediately after applying the
   migration, by querying the column and getting "does not exist" from the view
   while the table had it. Repaired inside the same migration; a conformance
   check now guards it.
2. **A dead export.** `listVentures` was written and never used. Removed.
3. **A return link that did not say where it went.** "← Return to the venture"
   where the function contexts name their destination. Now "← Return to Huerta
   Group Publishing", with the name read from the snapshot and an unrecognised
   identifier falling back to the register.

## 13. Repository, build and test results

```
10 structural invariants  including "Generation Two added no table — 18 tables, unchanged"
                          and "the venture milestone is not a deadline"
secret scan               60 tracked files and 24 commits
lint · typecheck · build  green
guard                     register holds no authentic history
semantic and authorization suites   83 assertions, Result: PASS
access and identity boundaries      pass
authentic Corporate Headquarters operation   52/52 checks
restored to the seeded baseline     register clean, fixture credentials retired
```

Diff limited to Stage 5: one migration, one read model, one page, the shared
surface plumbing, and the checks. No dependency or configuration change.
Working tree clean at `cb9d502`.

**Stage 1, 2 and 4 regression:** Founder Home, the Executive Review, the five
function contexts, the register, the Attention surface and the record page all
render correctly. Generation One authentic operation continues.

**The authentic Founder review boundary was not touched.** No Review Event was
created; the register holds exactly one, un-noted, matching the activation
baseline. Runtime validation authenticated server-side and fetched rendered
pages, which writes nothing.

## 14. Explicit exclusions preserved

Nothing was built toward CRM or Stage 7 relationship functionality, AI or agents,
enterprise search, notifications, venture task management, accounting
integration, compliance integration, broad HGP synchronization, portfolio
analytics, production hosting, or recurring infrastructure cost. No chart, tile
or metric was added.

## 15. Unresolved Founder Office decisions

Carried forward, none resolved: GEN1-REQ §19 Q5 (venture snapshot
responsibility), Q6, Q7; GEN2-REQ §34.3 (venture summary vocabulary), §34.4,
§34.5.

**Q5 is now the live one.** Stage 5 built the surface that makes the question
concrete: five of twelve HGP fields are absent, and whether they get filled
depends on who is responsible for supplying the snapshot — the venture executive
function, or Corporate Operations deriving it from governed venture reporting.
The architecture supports either and decides neither; the RLS policy has always
permitted both paths. Until it is answered, the parent-level view will keep
showing accurate absences, which is correct but is not yet oversight.

§34.3 also moves closer: a standardized parent-level vocabulary was not needed
with one venture, and the first ad-hoc second snapshot is what would make it
needed.

## 16. Recommended next bounded Generation Two stage

**Stage 6 — provenance-preserving drill-down**, as the master sequence has it,
but it is now largely built: the path holds from four surfaces, every
consequential line states whether this platform is authoritative or
representational, and every return names its destination. What remains is the
third hop — *Operational Record → authoritative source* — which is today a
reference rendered as text (`fd-0013`, `venture-registry.json`,
`docs/launch/`) rather than something the Founder can follow. Making those
resolvable is a bounded piece of work, and the boundary to hold is the one
GEN2-REQ §26 draws: a resolver for identifiers the institution already uses is
not enterprise search, and must not become one.

If the Founder Office would rather take the more valuable step, **Q5 first**.
Stage 5's honest absences are the argument for it, and no further construction
improves the venture view until someone is responsible for supplying what it
shows.

Stage 3's convenience horizons remain deferred and remain small.
