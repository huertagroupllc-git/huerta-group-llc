# Corporate Command Center — Generation Two Stage 6 Provenance Resolution, Navigation & Development-Environment Separation Report

**Classification: Institutional Record** — completion report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office. The report creates no authority and authorizes nothing.

- **Returned:** 2026-08-23.
- **Posture:** LOCAL / PRE-PRODUCTION ONLY. Production not launched. No paid or
  recurring infrastructure cost created.
- **Schema change:** none.

## 1–3. Stage, SHAs, commits

**Stage 6.** Constructed, inspected, repaired and validated. Stage 3 remains
deferred.

| Repository | Start | End |
| --- | --- | --- |
| `huerta-group-llc` (corpus) | `e805e1e` | `f847bb0` + this report's commit |
| `huerta-group-operations` (runtime) | `cb9d502` | `03dfdf3` |

Four bounded commits, one per workstream:

- `f847bb0` (corpus) — *feat: record fd-0017 — venture authority supplies venture truth.*
- `65a0f76` — *fix: validation stops destroying the register it is meant to protect.*
- `29205c0` — *feat: the third hop — Operational Record to authoritative source.*
- `03dfdf3` — *feat: say who is responsible for what the venture view does not show.*

## 4. Stage 5 acceptance incorporation

Recorded at `fd-0017` and carried into the capability registry. The accepted
findings — the bounded forward-milestone extension, Milestone ≠ Deadline, the
refusal to infer a milestone, truthful absence, the parent/venture boundary,
the projection repair, ADR-0017 intact, the ten §31 tests, and the preserved
review boundary — are the posture Stage 6 builds on and does not revisit.

## 5–7. GEN1-REQ §19 Q5 reconciliation

**Recorded at `fd-0017`**, with six determinations: venture authority supplies
venture truth; Corporate Operations admits, maintains and presents the
Headquarters representation; Corporate Operations may not invent, infer or
reinterpret substantive venture state to populate a snapshot; the venture does
not thereby write the register; absent facts stay absent; venture-source
provenance is preserved. Automated synchronization, direct venture writes and
duplication of venture systems are not authorized.

Reconciled in the capability registry and in the Generation One Requirements
Report **status record** (a new §2.4 and a status row).

**Historical posture preserved.** `GEN1-REQ-V1.md` §19 is **byte-identical** —
digest `c75f3c3e439090ac…`, matching git HEAD and the digest recorded at
`fd-0013`. A preserved verbatim source is not edited to contain its own answer;
it still asks the question as it was asked on 2026-08-18. The `fd-0014`
deferral and the capability entries recording Q5 as open remain as written, and
the Stage 4 and Stage 5 reports still record it unresolved, which was true when
each was returned. The resolution is prospective from 2026-08-23.

## 8–9. Authentic-runtime protection audit, and what it found

| Command / script | Targeted | Data affected | Credential impact | Review-boundary impact | Destructive behaviour necessary? | Corrected target |
| --- | --- | --- | --- | --- | --- | --- |
| `verify:full` → `resetDatabase` | **authentic** | every operational table rebuilt from seed | retired both accounts on every run | **destroyed** the boundary and all Review Events | No | disposable |
| `verify:full` → `supabase test db` | **authentic** | pgTAP writes | none directly | none directly | No | disposable |
| `verify:full` → `verify-preproduction` | **authentic** | auth probes | probes existing accounts | none | No | disposable |
| `verify:full` → `verify-authoring` | **authentic** | authors records, attention, changes, **Review Events** | none directly | **wrote** Review Events | No | disposable |
| `gen1-retire-fixtures` | **authentic** | none | **retires both passwords** | none | Only after a seed | disposable, or authentic post-activation |
| `db:reset` (npm script) | **authentic** | full rebuild | retired | destroyed | No | removed |
| `gen1 activate` → `resetDatabase` | **authentic** | full rebuild | retires by design | resets by design | **Yes** — it is activation | authentic, asked for by name |
| `backup` (`--local`) | authentic by cwd | reads only | none | none | n/a | authentic, now asserted |
| `verify` (safe) | none | none | none | none | n/a | unchanged |

**The finding that matters:** routine validation destroyed the Founder's
operating environment as a matter of course. Every stage since activation ended
by retiring the password the Founder had set, and each report closed by asking
them to set it again. Nothing in the suites needed the authentic register — they
needed *a* register.

## 10. Disposable-validation architecture

A second local Supabase project, `huerta-group-operations-validation`:

- **Derived, not maintained.** Its `config.toml` is generated from the authentic
  one with `project_id` replaced and every port offset by ten, so both run at
  once and the two cannot drift. Two hand-kept configs drift, and a validation
  stack that has drifted from the thing it validates is worse than none.
- **One source of truth for schema and suites.** `migrations`, `seed.sql` and
  `tests` are symlinked to the authentic project's, and each link is checked for
  *being a link* on every run.
- **Its own credentials file**, `validation/.env.local`, written from its own
  stack and refused if it ever points at the authentic API port.
- **Generated on demand and never committed** (`validation/` is gitignored).
- Started with the same exclusions Generation One uses; no storage, studio,
  imgproxy, edge runtime, logflare, vector or supavisor.

Commands: `npm run validation start | stop | status`.

## 11–12. Gate changes and the controls that hold them

`npm run verify:full` now:

1. fingerprints the authentic register,
2. asserts the project setup and that the two environments are not the same,
3. resets **the disposable stack**,
4. runs pgTAP, the access-boundary suite and the authentic-operations suite
   against it, each pointed there by an explicit env file,
5. **fingerprints the authentic register again and fails if anything moved.**

Controls:

- `resetDatabase` **defaults to the disposable stack** and **fails closed** on
  the authentic register — it must be named, and there is no environment
  variable or flag that waives it.
- Even when named, it consults the guard, so activation refuses on a register
  that already holds authored history.
- `npm run db:reset` — a command whose default destructive target was the
  authentic database — is **removed**.
- `backup` refuses unless it is dumping the authentic project or given an
  explicit target: a backup of the disposable stack that looked authentic would
  be worse than none.
- `.env.local` no longer discards keys it does not manage.

## 13–14. Credentials

**Both accounts were already retired before Stage 6 began.** The published
fixture password is refused for each (HTTP 400), and the password the Founder
set at activation was destroyed by the first reset of an earlier stage. This is
**Outcome B** of the authorization.

No password was requested, probed or recovered. The state fingerprint records
only an MD5 of each stored hash — enough to prove a credential did or did not
change, and revealing nothing about it.

**One final manual action is required, and only one:**

```
npm run gen1 set-password
```

After that, the corrected workflow leaves credentials alone. The gate's own
final step now asserts it: the fingerprint includes both credential digests, so
a validation run that touched a password would fail rather than be reported
afterwards.

## 15–16. Preservation evidence

The authentic register's digest before and after a complete destructive
validation cycle:

```
before  8b2f0ec77acddd3a1c9087f6f6cb6f7b7282183ce9a4415b6e2d4c11ea06604c
after   8b2f0ec77acddd3a1c9087f6f6cb6f7b7282183ce9a4415b6e2d4c11ea06604c
```

Identical. The digest covers row counts across all sixteen protected tables,
the review boundary, both account identities with their credential digests, the
venture identity with its forward-milestone state, and every represented
matter's title.

Unchanged and specifically confirmed: 5 Operational Records, 5 Instances, 7
state values, 2 Attention Items, 1 dependency, 1 blocking assertion, 1 handoff,
1 renewal, 1 deadline, 1 follow-up, 3 Material Changes, **1 Review Event**, 1
venture snapshot, 2 actors. **Review boundary 2026-08-23 02:55:26.903853+00 —
unchanged.**

The same digest also held across the Stage 6 work itself, which included an app
rebuild, two app instances and several disposable resets.

## 17. Backup and recovery after separation

**Assumptions unchanged.** `backup` dumps the authentic project and always did;
the separation added no path by which it could target another, and now it
refuses if it would. `verify:restore` and `gen1-recover` take explicit targets
and are untouched. No additional recovery validation was required, because no
backup assumption changed.

One exercise was run and its output destroyed immediately: a backup was taken
to confirm the new target assertion passes, then deleted, because it held
authentic operational records and a temporary directory is not where those live.

## 18–20. The provenance resolver

**Provenance is not technical resolvability.** A reference that names its source
exactly and offers no route is a complete answer. The resolver classifies into
three outcomes and manufactures nothing.

| Source type | Owner | Reference form | Resolvable | Mechanism / reason |
| --- | --- | --- | --- | --- |
| Determination identifier | Founder Office | `fd-0013` | **Yes**, with corpus configured | Resolves to the determinations register, where such records live by governed convention. The filename is **not** guessed: which file carries an identifier is not derivable from it |
| Repository-relative path | varies | `docs/launch/` | **Yes**, with corpus configured | The reference *is* the path; nothing is inferred beyond where the corpus lives |
| Bare filename | venture / function | `venture-registry.json` | No | Names a file without saying where it lives. Resolving it would assert a location the institution has not stated here |
| Named external record | Administration & Compliance | `trade-name filing` | No | The authoritative record is in the source function's keeping; this system holds no route |
| Named venture record | HGP | `venture report`, `FD-V1 charter` | No | As above |
| Named internal module | Development | `notification module` | No | As above |

Where the corpus lives is **optional configuration** (`GEN1_CORPUS_BASE`).
Unset — the default — every corpus-bound reference is identified but unresolved.

**Prohibited behaviours are absent, and enforced.** A structural check fails the
gate if the resolver acquires any means of I/O: no fetch, no dynamic import, no
filesystem, no process spawn, no database client. A resolver that can reach the
network is one that can start looking things up.

## 21. Reference defects found

**None in the register.** All 14 distinct references across records, state
values, material changes, renewals and venture snapshots classify cleanly — 2
deterministic, 12 identified-only, 0 defects.

The defect class is implemented and asserted against synthetic inputs: empty
references, traversal (`../etc/passwd`), absolute paths and URL schemes are
classified as representation defects for Corporate Operations to repair at the
record, and are never interpreted into destinations.

## 22–24. Navigation

The full chain, verified in a running application:

| From | Return | Verified |
| --- | --- | --- |
| Command View | `/#attention` | yes |
| Executive Review | `/review#unresolved` | yes |
| Headquarters function | `/functions/administration-compliance#matters` | yes |
| HGP venture | `/ventures/huerta-group-publishing#record` | yes |
| Unrecognised context | `/records` | yes — no fabricated destination |

The Operational Record now carries an **Authoritative source** block stating the
outcome, the owning function and domain, the reference, a route where one
exists, and the basis on which it exists. It closes by saying that a route
conveys no authority over the source.

**No navigation-state subsystem was built.** Position is a query parameter and
an anchor; it survives reload and can be shared. Navigation reads and writes
nothing, so it cannot consume the review boundary.

## 25–26. HGP Q5 application, and what remains absent

**Nothing was filled, and that is the correct application.**

The governed references behind HGP's parent-level facts are
`venture-registry.json`, `venture report` and the `FD-V1 charter`. **None is
reachable from this runtime** — each lives in the corpus or in venture systems —
and none was consulted from memory, from nearby records, or from implementation
history. Even had one been reachable, admitting a venture fact into Headquarters
representation is Corporate Operations' act, and `fd-0017` places it there
explicitly.

Remaining absent, each saying so on the page: next major expected milestone;
parent-relevant blocker; parent decision required; approaching
Headquarters-relevant obligation; Founder Attention on the venture's matters.

What Stage 6 added is the *reason*. The venture page now states the
responsibility: the venture supplies the substantive condition, Corporate
Operations admits the representation of it, and neither is inferred here. That
is Q5 made operational in the surface where its consequence shows.

## 27–28. Schema impact

**None.** No migration, table, column, trigger, policy, view or function. Zero
files under `supabase/` changed. Resolution is application-layer over reference
strings the register already holds; environment separation is tooling and
configuration. Proof of necessity is not applicable because nothing was
necessary.

## 29–30. Test evidence

**Authentic-state preservation** — §15, digest identical across a full
destructive cycle, asserted by the gate itself rather than checked afterwards.

**Disposable validation** — every reset-based test ran against
`huerta-group-operations-validation`: schema reset, 83 pgTAP assertions, the
access-boundary suite, and the authentic-operations suite which authors records,
attention items, material changes and Review Events. All of that now happens
where it can do no harm.

The authentic-operations suite is **56 of 56**, with four new source checks:
every reference classifies without a defect; at least one is deterministic and
most are not; a bare filename is named rather than located; traversal and
absolute references are refused rather than followed.

## 31–34. Semantic, §31, ADR-0017, authentication and RLS

All semantic invariants hold, including the two this stage bears on:
**venture truth ≠ Headquarters representation** (`fd-0017`, and nothing in the
resolver or the venture page conflates them) and **provenance ≠ technical
resolvability** (the resolver's central distinction, stated on every record).

**All ten §31 tests answer yes.** pgTAP: 83 assertions, Result PASS.

**ADR-0017 unchanged.** No policy added, removed or widened; no generic Founder
write or disposition authority; Corporate Operations retains Headquarters
authoring. Authentication remains required; RLS remains deny-by-default. A
resolved source link grants no access to the source system and transfers no
institutional authority — the record page says so where the link appears.

## 35–36. Inspector findings and repairs

1. **The gate skipped project setup when the stack was already up.**
   `startValidationStack` returned early, so the symlinks were never reasserted.
   Repaired: setup runs every time.
2. **The CLI recreates a missing `tests` directory as a real one**, which shadows
   the symlinked suite. The gate reported `Files=0, Tests=0` as a *pass* shape
   rather than a failure. Repaired: each link is checked for being a link, and
   the empty directory is replaced.
3. **`backup` could dump the disposable stack** from the wrong working
   directory, producing something that looked like a backup of the register.
   Repaired: it asserts its target.
4. **`.env.local` discarded unmanaged keys on every start** — configuration that
   disappears on restart is configuration nobody can rely on. Repaired.

Findings 1 and 2 are the ones worth noting: both made a *silent* failure look
like success, which is the failure mode a validation gate exists to not have.

## 37–38. Repository results and CI

```
11 structural invariants  including "Generation Two added no table",
                          "the venture milestone is not a deadline", and
                          "the provenance resolver performs no I/O"
secret scan               66 tracked files and 27 commits
lint · typecheck · build  green
authentic register        fingerprinted before and after — unchanged
disposable stack          reset, 83 pgTAP assertions, boundary suite, 56/56 authentic operations
```

Corpus `npm run verify`: nine validators green, references resolve, lint/tsc/
build green. **CI verified on the corpus push.** The runtime repository has no
CI — its gate needs Docker and two running stacks — and was validated locally.

Diff scope: no schema, no dependency change, no production configuration.

## 39. Explicit exclusions preserved

Nothing was built toward CRM or Stage 7 relationship functionality, enterprise
search, AI or agents, notifications, accounting or compliance integration,
automated HGP synchronization, direct venture writes, venture task management,
production hosting, a paid Supabase project, or any recurring cost. **GEN1-REQ
§19 Q6 and Q7 remain untouched and unresolved.**

The disposable stack is local Docker on the Founder's machine. It costs disk and
memory while running and nothing else, and `npm run validation stop` reclaims
both.

## 40. Remaining Founder Office decisions

GEN1-REQ §19 Q6 and Q7; GEN2-REQ §34.3 (venture summary vocabulary), §34.4
(recording a Founder decision arising from an Attention Item), §34.5.

Q5 is discharged. **Nothing else is now blocking construction** — which is
itself worth saying, because it has not been true since Stage 4.

## 41–42. Production and cost

Production was not launched. No production project exists, none was created, no
plan changed, no paid feature was enabled, no public access exists. No recurring
infrastructure cost was created.

## 43. Recommended next bounded Generation Two stage

**Stage 7 is excluded, so the sequence's remaining bounded work is Stage 3 —
the Today / 7 Days / 30 Days convenience horizons** — and it is small: the
`changes_in_last()` function exists and the boundary machinery was built in
Stage 2. The only thing to hold is the one GEN2-REQ §16 names: a convenience
horizon must not displace Since Last Review as the governed boundary, or
`recorded_at` doctrine has been replaced by a dropdown.

Before that, though, there is a plainer recommendation. **The Command Center is
now feature-complete against GEN2-REQ's four capabilities**, and the register
still holds only what activation seeded. Every stage since has been validated
against five matters authored on one day. The most useful next step is not more
construction but authentic use: the Founder setting a password, working through
a real review, and letting Corporate Operations admit real matters — including
the financial and administrative conditions whose absence has left Q6 and Q7
undecidable in the abstract.

GEN2-REQ §32 asks for exactly that evidence, and it is the only input that can
answer whether the Command layer is actually useful or merely correct.
