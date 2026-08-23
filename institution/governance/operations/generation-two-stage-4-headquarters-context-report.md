# Corporate Command Center — Generation Two Stage 4 Headquarters Context Construction & Validation Report

**Classification: Institutional Record** — completion report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office. The report creates no authority and authorizes nothing.

- **Returned:** 2026-08-22.
- **Posture:** LOCAL / PRE-PRODUCTION ONLY. Production hosting not authorized,
  not created, not launched. No recurring infrastructure cost created.

## 1. Stage determination

**Stage 4 — Headquarters Context Views.** Constructed, inspected, repaired and
validated. Stage 3 remains deferred as determined; Stages 5 through 9 were not
begun.

## 2. Starting and ending SHAs

| Repository | Start | End |
| --- | --- | --- |
| `huerta-group-operations` (runtime) | `294d8d1` | `6d675b6` |
| `huerta-group-llc` (corpus) | `ce2b9a9` | this report's commit |

## 3. Commits

- `6d675b6` — *feat: Headquarters function context views.* One bounded commit:
  the context layer, the roster-based standing it required, and the three
  defects inspection found in it. The repairs were to code introduced in the
  same stage and are not separable from it.

Pushed to the private remote; SHA parity verified. The runtime repository has
no CI — its gate needs Docker and a running stack — and was validated locally
(§30).

## 4. Headquarters functions implemented

All five authorized, at `/functions/<slug>`:

| Function | Authentic representation | What its context shows |
| --- | --- | --- |
| Founder Office | Sources no matter; establishes 2 state dimensions on Development's matters; holds 1 dependency | Attention addressed to it, facts it established elsewhere, where it is the party |
| Corporate Operations & Command Management | Sources no matter and can source none | What this platform itself authors, and which representation is no longer confirmed |
| Administration & Compliance | 1 matter, 1 renewal, 1 deadline, 1 follow-up, 1 material change | Six sections, fully populated |
| Accounting & Financial Management | None at all | One sentence saying so |
| Institutional Platform Development | 3 matters, 2 attention items, 1 dependency, 1 change | Six sections, fully populated |

**Density varies because the functions do.** Nothing was added to make a page
look comparable to another.

## 5. Shared composition primitives reused or created

Reused unchanged: `components/sections.tsx` — the Stage 2 extraction that
Founder Home and the Executive Review already share. Function contexts render
the same bodies, so "blocked" cannot mean one thing on Home and another in a
function view. `CommandSection`, `Entry`, `Line`, `Matter`, `ProvenanceLine`,
`Quiet` and `Meta` are reused as they stand.

Created: `lib/domain/functions.ts` (the context read model) and
`lib/domain/roster.ts` (the authorized roster, split into its own module so the
Command View and the contexts can both read it without a cycle). `Matter` gained
a third surface and an optional function slug.

No portal framework, no generalized function abstraction, and no primitive was
built speculatively for the future venture context. The shared-primitive
exception in the authorization was not needed and was not used.

## 6. Founder Office context behavior

It sources no matter, so the page says so in one line rather than rendering an
empty section, and shows three things instead:

- **What is addressed to the Founder Office** — standing Founder Attention,
  read whole. Attention is addressed to the Founder Office by construction
  rather than sourced from any function, so it is filtered nowhere, and the
  section note says exactly that.
- **Where it is the expected party** — the Founder Office authorization
  dependency, marked *not presently blocking*.
- **What it has established elsewhere** — the two `authorization` dimensions it
  owns on matters Development sources, each with its own source reference.

The third is the section that makes the design work: without it the Founder
Office would have read as empty, which would have been false.

**Presentation confers nothing.** The page states the boundary in its header,
and no control on it writes anything the Founder Office did not already hold.

## 7. Corporate Operations context behavior

Structurally unlike the others and treated as such: it owns the Headquarters
representation of every matter and is the authoritative source of none, so
counting it by sourced matters states the opposite of the truth. Its context
shows:

- **What Headquarters itself authors** — the object classes GEN1-REQ §3 lists
  as held directly rather than referenced: Founder Attention, handoffs,
  Headquarters dependencies, Headquarters follow-ups.
- **Which representation is no longer confirmed** — records whose confirmation
  is unresolved or knowingly stale. Presently none, and the section says doubt
  is expressible and none is expressed. Freshness stays qualitative: no score,
  no threshold, no expiry.

This view necessarily overlaps the Command View, because Corporate Operations
owns the whole representation. The distinction is the question asked: the
Command View asks what matters now; this asks what I am responsible for keeping
true.

## 8. Administration & Compliance context behavior

Consequence only. The trade-name matter with its admission ground, the renewal,
the deadline arising from it, the follow-up, and the material change — each
marked **Represented** and naming Administration & Compliance as authoritative.

No case file, filing, correspondence, evidence, regulatory research or analysis
appears, and none can: the register cannot express them. **GEN1-REQ §19 Q7 was
not resolved.** Which statuses automatically qualify for Headquarters visibility
remains undetermined; the context shows what Corporate Operations has already
admitted and decides nothing about what should be.

## 9. Accounting & Financial Management context behavior

The page renders one sentence: Headquarters holds no representation sourced from
this function — no matter, no supplied fact, no expected action — and says that
this is a reading rather than a gap.

Nothing was added to populate it. **GEN1-REQ §19 Q6 was not resolved.** Deciding
which Accounting outputs qualify is what would have filled this page, and it is
not Development's to decide. No ledger, transaction view, balance, calculation
or integration exists.

This is also the stage's cleanest authentic demonstration of quiet.

## 10. Institutional Platform Development context behavior

Six sections over the three matters it sources: the Generation One program, the
custom domain connection, and the notification standby. Two attention items, the
Founder Office dependency shown as not blocking, and the material change from
the source transmission.

**Parent-relevant only.** No issue, task, sprint, branch, build, backlog,
assignment or throughput appears, and the page's header says none can. The
notification standby matter carries nothing consequential and is present as a
represented matter without being given manufactured activity.

## 11. Quiet-function behavior

Three distinct silences, each stated differently rather than collapsed:

1. **Unrepresented** — Headquarters holds nothing from this function
   (Accounting). One sentence, no sections.
2. **Quiet** — matters are represented but none carries anything consequential.
   A single sentence explaining that quiet is a reading of a function.
3. **Section-level quiet** — a populated function with nothing in one section:
   "Nothing is presently blocked", "None open", each in its own place.

No placeholder, synthetic metric, empty card or artificial warning was added
anywhere. Sections that can only ever say "none" for a given function are not
rendered at all — see §27, defect 2.

## 12. Command View → function-context navigation

Founder Home's standing section now lists the authorized roster, each name
linking to its context, with an accurate standing line. Two rows required
explicit correction because counting them the same way as the others stated
something false — see §28.

Huerta Group Publishing is listed separately, below the functions: "Headquarters
also represents matters sourced from Huerta Group Publishing (1) — not
Headquarters functions, and so without a function context."

The Executive Review's standing step uses the same component and therefore the
same roster.

## 13. Operational Record drill-down behavior

Every matter, obligation, dependency, handoff, change and supplied fact in a
function context links to its Operational Record as
`?from=function&fn=<slug>&at=<section>`. The record page renders the full
Generation One representation, unchanged.

## 14. Authoritative-source provenance behavior

Unchanged from Stage 1 and applied throughout: every consequential line carries
a provenance line stating whether this platform is the authoritative source for
that fact (**Headquarters record**) or is representing another function's truth
(**Represented**), naming the source function, its domain, the source reference
and the confirmation state.

The supplied-facts section makes the distinction sharpest: a fact the Founder
Office owns, sitting on a matter Development sources, attributed to the Founder
Office with its own source reference, while Corporate Operations remains the
representation owner of both. That attribution is asserted independently in the
conformance suite (§25).

## 15. Context-preserving return behavior

The record page offers "← Return to Administration & Compliance" →
`/functions/administration-compliance#due`, alongside the Stage 1 and Stage 2
returns. The slug is checked against the authorized roster rather than trusted
from the query string: an unrecognised one falls back to the register instead of
building a link to a route that does not exist. Verified with
`fn=not-a-function`, which returns the plain register link.

Each function context also links back to the Command View and the Executive
Review at both head and foot, anchored at the standing section the Founder
would have come from.

Nothing is stored. Position lives in the URL.

## 16. HGP venture-boundary treatment

Held. Huerta Group Publishing is absent from the roster, so
`/functions/huerta-group-publishing` returns **404** — verified. It appears on
Founder Home as a venture (its parent-level snapshot) and separately as a
source of one represented matter, explicitly labelled as not a Headquarters
function.

No venture context was built and no primitive was shared with one, because none
was needed yet. A conformance check asserts that a source outside the roster is
represented without becoming a function.

## 17. ADR-0017 / access-control treatment

**ADR-0017 remains unchanged. No policy was added, removed, relaxed or
broadened. No access class gained a capability.**

Function-context visibility confers no authority over a function's domain, and
the pages say so in the header and the footer. Verified under both access
classes: Corporate Operations can read every function context (it holds
Headquarters read) and is offered neither "Act on attention" nor "Mark
reviewed", both of which remain Founder Office capabilities enforced by RLS.

No generic Founder write or disposition capability was introduced, consistent
with the determination of 2026-08-22.

## 18. Financial visibility boundary treatment

See §9. Nothing financial is shown because nothing with Accounting provenance
has been admitted. Q6 stands unresolved and untouched.

## 19. Administration & Compliance boundary treatment

See §8. Consequence only, source-authoritative, no case-file reproduction. Q7
stands unresolved and untouched.

## 20. Schema or migration impact

**None.** No migration, no table, no column, no trigger, no policy, no view, no
function. `git diff` touches zero files under `supabase/`. The structural check
*Generation Two added no storage* passes at 18 tables, unchanged.

## 21. Proof of necessity for any schema change

Not applicable. Every authorized context requirement was met from existing
governed data:

| Required | Read from |
| --- | --- |
| Matters a function sources | `operational_record.source_function` |
| Attention, blockers, obligations, dependencies, handoffs, changes | the Stage 1 composition, filtered by those matters |
| Facts a function established elsewhere | `state_dimension_value` and `material_change`, each carrying its own `source_function` |
| Where a function is the party | `dependency.rests_with`, `handoff.source_party` / `receiving_party` |
| Representation no longer confirmed | `operational_record.confirmation` and `uncertainty_note` |
| Which object classes Headquarters owns | GEN1-REQ §3's source-of-truth map, already encoded in Stage 1's provenance |

One thing the model does not record is a canonical list of the institution's
functions — and Stage 4 does not add one. The roster is the Founder Office's,
transcribed from the authorization, and governs which functions have a *context
view*, not which functions exist. Matching is exact; no near-miss is treated as
an equivalence the institution has not declared.

## 22. Authentic Headquarters examples exercised

| # | Required case | Outcome |
| --- | --- | --- |
| 1 | Function with active consequential records | Institutional Platform Development (3), Administration & Compliance (1) |
| 2 | Function containing active Founder Attention | Development (2); the Founder Office context shows both as addressed to it |
| 3 | Significant dependency that is not blocking | The Founder Office authorization dependency, in both Development's and the Founder Office's contexts, marked not presently blocking |
| 4 | Function with an active Blocker | **Not available authentically** — no blocking assertion is open. Proven on the disposable stack |
| 5 | Function with a current Handoff | **Not available authentically** — the only handoff is disposed. Proven on the disposable stack |
| 6 | Consequential Deadline, Renewal or Follow-Up | All three, on Administration & Compliance's trade-name matter |
| 7 | Recent Material Change | Administration & Compliance's registration change, and Development's transmission change |
| 8 | Source-domain representation with explicit provenance | Every line; sharpest in the Founder Office's supplied facts |
| 9 | Quiet function | Accounting — nothing represented at all. Also the notification standby matter, present in Development's context without manufactured activity |
| 10 | Command View → function context → Operational Record → source, and return | Exercised end to end |

**No state was authored into the authentic register.** Cases 4 and 5 need
conditions the register does not contain, and manufacturing them would have been
inventing Headquarters facts.

## 23. Disposable validation cases used, if any

The authentic-operations suite runs against a disposable stack the gate resets
before and after. It supplies the open blocker (case 4) through the Stage 1
composition checks, and the Stage 4 checks in §25. The gate restores the seeded
baseline and retires fixture credentials on the way out.

## 24. Confirmation authentic Founder review boundary was preserved

**Preserved and unchanged.** No Review Event was created in the authentic
register during Stage 4. The register holds exactly one Review Event — the
seeded one, un-noted — as it did at the start of the stage, and the guard
reports the register matching the activation baseline recorded 2026-08-20.

Runtime validation was performed by authenticating server-side and fetching the
rendered pages, which reads and writes nothing. Every reset used during
validation was `resetDatabase`, which returns the register to that same
baseline.

## 25. Semantic-conformance results

Five new checks, asserting the boundary independently of the read model. The
suite is now **47 of 47**.

| Check | What it proves |
| --- | --- |
| Composing a Headquarters function context writes nothing | A context is a read, not a system of record |
| Every matter names one source function, and Corporate Operations represents all of them | Representation ownership is invariant and separate from source ownership |
| A fact supplied on another function's matter keeps its own source and transfers no ownership | Attribution follows the fact, not the matter it sits on — 4 cross-supplied dimensions |
| A source outside the authorized roster is represented without becoming a function | The venture boundary, enforced against data rather than intention |
| No function registry, status or ownership table exists to be written to | The absence is enforced by the schema, not merely intended |

## 26. §31 semantic-test results

All ten answer **yes**, unchanged. pgTAP: 83 assertions, Result PASS. Stage 4
touched no schema, so no test could have been weakened; they were re-run rather
than assumed.

## 27. Inspector findings

Three, all repaired, all in code introduced by this stage.

1. **Corporate Operations rendered as unrepresented and its entire context was
   suppressed.** The quiet test was computed from sourced matters, supplied
   facts and party relationships — and Corporate Operations has none of those by
   construction, because it owns the representation of every matter and is the
   authoritative source of none. The one function whose context was most needed
   was the one the interface hid.
2. **Five permanently empty sections on two functions.** The Founder Office and
   Corporate Operations source no matters, so the source-scoped sections could
   only ever answer "none" — five of them, padding the page. That is
   manufactured density, which the authorization names directly.
3. **The supplied-facts queries were silently returning nothing.** They read
   `current_state`, which is a projection that drops the provenance columns, so
   asking it for `source_function` returned an empty set rather than failing.
   The Founder Office context would have rendered as having established nothing
   anywhere, which is false. **Found by a conformance check, not by reading the
   code** — the check asserted cross-supplied facts must exist and reported
   "none found".

## 28. Defects found and repairs performed

1. Quiet is now computed over everything a context can show, including the
   function-specific sections, so a function that authors rather than sources is
   judged by what it authors.
2. Source-scoped sections render only where the function sources at least one
   matter. Where it sources none, a single sentence in the header explains why —
   and for Corporate Operations, that it can source none.
3. Provenance is read from `state_dimension_value` rather than the
   `current_state` view, in the context read model, in the Command View's
   standing computation, and in the check itself.

Two further corrections to standing on Founder Home, made for the same
structural reason as defect 1: Corporate Operations now reads "owns the
Headquarters representation of every matter and sources none", and the Founder
Office's standing counts the Attention addressed to it, since Attention is
addressed to the Founder Office by construction rather than sourced from any
function. Both are commented in the code as deliberate exceptions.

## 29. Security / authentication / RLS validation

- ADR-0017 unchanged; no policy added, removed or widened.
- No generic Founder write or disposition capability exists or was introduced.
- Function-context visibility confers no authoring authority over that
  function's domain.
- Verified under both access classes; capability-gated controls remain gated.
- Authentication remains required — every function route redirects to `/login`
  unauthenticated (HTTP 307 verified).
- RLS remains deny-by-default; anonymous reads return empty.
- The function slug is validated against the roster before being used to build
  a link.
- Published fixture credentials retired and refused.

## 30. Repository / build / test results

Runtime, `npm run verify:full`, all green:

```
9 structural invariants   including "Generation Two added no storage — 18 tables, unchanged"
secret scan               57 tracked files and 23 commits
lint · typecheck · build  green
guard                     register holds no authentic history
semantic and authorization suites   83 assertions, Result: PASS
access and identity boundaries      pass
authentic Corporate Headquarters operation   47/47 checks
restored to the seeded baseline     register clean, fixture credentials retired
```

Git diff limited to Stage 4: zero files under `supabase/`, no dependency change,
no configuration change. Working tree clean at `6d675b6`.

## 31. Stage 1 and Stage 2 regression validation

- **Founder Home** renders correctly; the only change is the standing section,
  now over the authorized roster with links and with the venture separated.
- **Executive Review** renders correctly; all eight steps intact, and its
  standing step uses the same corrected component.
- **The record page** is unchanged apart from recognising a third return
  surface; the Stage 1 and Stage 2 returns still work.
- Generation One authentic operation continues; the register is byte-equivalent
  to the activation baseline.
- All Generation One structural invariants and pgTAP tests pass.

## 32. Explicit exclusions preserved

Nothing was built toward: CRM or Stage 7 relationship functionality, AI or
agents, enterprise search, notifications, accounting integration, compliance
integration, venture task replication, development-management tooling,
production hosting, recurring infrastructure cost, Stage 3 convenience horizons,
or a dedicated HGP venture context.

No departmental task board, queue, assignment or throughput measure exists. No
chart was added.

## 33. Unresolved Founder Office decisions

Carried forward, none resolved: GEN1-REQ §19 Q5 (venture snapshot
responsibility), Q6 (financial visibility boundary), Q7 (administrative
visibility boundary); GEN2-REQ §34.3 (venture summary vocabulary), §34.4
(recording a Founder decision arising from an Attention Item), §34.5 (which
Accounting outputs surface first).

One observation, offered rather than acted on. Function names are matched
exactly against free-text provenance. That is correct — inferring an equivalence
between two names the institution has not declared equivalent would be inventing
one — but it means a matter authored with, say, "Administration and Compliance"
would silently miss its function context. Nothing in the current register does
this. If it becomes a practical problem, the remedy is an operating convention
for Corporate Operations rather than fuzzy matching in code, and it would be
the Founder Office's to set.

## 34. Confirmation production was not launched

Production was not launched. No production project exists, none was created, no
plan was changed, no paid feature was enabled, and no public access exists. The
system ran only on the Founder's machine, bound to localhost.

## 35. Confirmation no recurring infrastructure cost was created

None. Nothing was purchased, no plan changed, no hosted project created, no paid
feature enabled.

## 36. Recommended next bounded Generation Two stage

**Stage 5 — parent-level venture oversight for Huerta Group Publishing.**

Stage 4 sharpened the reason. HGP now appears three times on the Command Center
— as a venture snapshot, as the source of one represented matter, and in the
footnote saying it is not a Headquarters function — and none of those is the
parent-level view GEN2-REQ §8 describes. The boundary Stage 4 held is exactly
the one Stage 5 needs stated positively: what a parent may see of a venture, as
against what a Headquarters function context shows.

The shared-primitive question the Stage 4 authorization raised should be settled
there on evidence. My reading after building the function contexts is that the
semantics do not in fact repeat: a function context is organised around source
ownership and representation responsibility, and a venture context is organised
around parent-relevant standing under a charter. They share section bodies —
attention, blockers, obligations, provenance — which are already shared with
Founder Home and the Executive Review, and that is the right level of reuse. A
common "context" abstraction over the two would be presentation code asserting a
semantic identity that does not hold.

One item from GEN2-REQ §8 is not representable today and should be settled
before or during that stage: **next major expected milestone**. The venture
snapshot holds a single `significant_milestone` with no forward/backward
distinction, and deriving "next" from a Deadline would collapse Milestone into
Deadline. That is a narrow, bounded question — whether the parent-level snapshot
should carry a forward milestone — and it is the Founder Office's, not
Development's.

Stage 3's convenience horizons remain deferred and remain small whenever they
are taken up.
