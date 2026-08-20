# Internal Operations & Command Platform — Generation One Production Readiness Report

**Classification: Institutional Record** — readiness report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office.

- **Instrument:** Generation One Pre-Production Completion & Production
  Readiness, execution package, Founder Office → Institutional Platform
  Development.
- **Date:** 2026-08-19.
- **Governing determination:** [`fd-0014`](../determinations/fd-0014-generation-one-construction-authorization.md).
- **Production launch:** **Did not occur. Not authorized.**
- **New recurring cost incurred:** **None.**

---

## 1. Production-readiness determination

The six authorized pre-production conditions are complete. The runtime is
durably preserved in a private remote; backup and recovery are documented and a
restore has been **performed and verified**, not described; the exact
infrastructure cost is known and nothing was purchased; the production-intended
identity and environment posture is validated and was **hardened in three
places** where validation found it wanting; the four classification mismatches
are formally dispositioned without inventing vocabulary; and the full gate
passes against the production-intended configuration.

**Recommendation: READY SUBJECT TO SPECIFIC FOUNDER OFFICE COST/OWNER
DECISION** (§27).

No architecture phase was opened, no accepted construction was reopened, no
scope expanded, and production was not launched.

## 2. Starting and ending repository SHA

| Repository | Starting | Ending |
| --- | --- | --- |
| `huerta-group-llc` — governed corpus | `2900a16` | `a0b41f3` (this report commits on top) |
| `huerta-group-operations` — runtime | `973fa9a` | `039cfa8` |

## 3. Final private runtime repository / remote status

**Established and durable.** The runtime is no longer dependent on one local
machine. Four commits were added during this phase, each pushed and verified at
parity.

| | |
| --- | --- |
| Repository | `huertagroupllc-git/huerta-group-operations` |
| URL | `https://github.com/huertagroupllc-git/huerta-group-operations` |
| Visibility | **PRIVATE** |
| Branch | `main`, tracking `origin/main` |
| History | Complete — all 15 commits, from the first construction commit forward |
| Separation | Outside the public website's repository and outside this corpus, as ADR-0008 requires |

## 4. Remote URL, visibility, branch, and parity verification

| Check | Result |
| --- | --- |
| Remote repository exists | Yes |
| Visibility is private | **PRIVATE**, confirmed via the API rather than assumed |
| Local HEAD | `039cfa8` |
| Remote HEAD | `039cfa8` — **identical** |
| Branch tracking | `main → origin/main` |
| History complete | 15 of 15 commits |
| Working tree clean after push | Yes |
| Environment files tracked | None beyond `.env.example`, which holds placeholders only |
| Deployment configuration tracked | None — no `.vercel`, `vercel.json`, `Dockerfile`, or equivalent |
| Credential material | **None**, in the tree or anywhere in history (§16) |

## 5. Backup design

Four parts and a digest manifest, split the way recovery actually divides the
data rather than as one opaque file:

| Part | Contents | Class |
| --- | --- | --- |
| `01-roles.sql` | Cluster role settings | Reproducible |
| `02-schema-public.sql` | Structure, policies, triggers, functions, views, constraints | Reproducible from migrations |
| `03-data-auth.sql` | Identity records | Provider-managed |
| `04-data-public.sql` | **The Headquarters representation** | **Irreplaceable** |

Only the fourth is genuinely irreplaceable: it is authored by hand, one matter
at a time, and no source system can regenerate it. `npm run backup` produces
the set; the digest manifest lets a restore prove it is restoring what was
taken.

Provider-native mechanisms were preferred over building anything: this is
`pg_dump` through the Supabase CLI, not backup infrastructure.

## 6. Backup scope, cadence, custody, and limitations

**Scope.** The `public` and `auth` schemas. Storage objects and edge functions
are out of scope because Generation One uses neither.

**Cadence.** Pre-production: on demand, and before any migration. Production:
depends on the cost decision at §11 — Pro adds daily provider backups behind
the logical ones; Free adds nothing.

**Custody.** Written **outside the repository** by default. A backup carries
the sensitivity of the register itself and is not placed in shared storage,
attached to messages, or committed. `.gitignore` carries a second line of
defence, and the secret scan would catch a mistake.

**Retention behaviour.** Generation One's determined posture is **preserve by
default, with no routine age-based deletion**. Backups therefore accumulate;
nothing in the repository deletes one.

**Limitations.** Backup is a manual act — nothing schedules it. The rehearsal
restored to a target on the same machine, so off-machine and cross-provider
recovery becomes testable only when a production project exists. Recovery time
was measured at a data volume of tens of records and is not a prediction for a
much larger register. The `auth` part carries password hashes and is the most
sensitive artifact in the set.

## 7. Tested restore procedure

Recovery targets a **new, empty Supabase project**, never a live one.

1. **Verify the artifact** — `shasum -a 256 -c SHA256SUMS`. A restore that
   cannot prove what it is restoring is not a restore.
2. **Apply in order** — roles, then structure, then identity, then Headquarters
   data. The order is load-bearing: Headquarters data references authors
   through `actor`, which references identity.
3. **Verify** — `npm run verify:restore`, which is not optional.

The verification checks three things in increasing order of strength: that the
structure returned; that representative Headquarters matters returned with
their history and provenance; and that **the restored register still refuses
what the original refuses**. A restore that returns the rows but loses the
refusals has returned a spreadsheet, not the register. It then signs in as each
restored identity and confirms it still maps to its access class.

Full procedure: `docs/backup-and-recovery.md` in the runtime repository.

## 8. Restore evidence and verification results

**Performed 2026-08-19** against a genuinely isolated target: a second Supabase
project in its own containers on its own port range, empty before the restore.
Run twice — once during development of the procedure, and once cleanly at the
final state.

| Evidence required | Result |
| --- | --- |
| Backup source identified | Local pre-production project |
| Backup artifact verified | 4 of 4 digests **OK** before restore |
| Restore target isolated | Separate Supabase project, separate containers, separate ports; 0 public tables beforehand |
| Restore executed | **0 errors** across all four parts |
| Restore wall time | ~1 second at this data volume |
| Schema integrity | 18 tables · 4 views · 45 policies · 20 triggers · 13 functions · 22 check constraints · 39 foreign keys — **all matching source** |
| Row level security | Enabled on **18 of 18** tables |
| Referential integrity | **39 of 39 foreign keys explicitly revalidated** against the restored data |
| Data integrity | **18 of 18** Headquarters tables matching the source **row for row** |
| Representative semantic records | 12 checks — Instance/Record distinction, multidimensional state, superseded history, unknown occurrence time still unknown, late-recorded change with both timestamps, standing item asserting no exit ground, three distinct priorities, blocking begun and ended, handoff disposed while a dependency stands, renewal with zero deadlines, follow-up with no due date |
| Provenance and history | Provenance intact on every fact; representation owner still invariantly Corporate Operations; confirmation-event history and reader-scoped review events present |
| Semantic enforcement survived | **6 of 6** refusals still refusing |
| Identity | **2 of 2** restored identities authenticate and still map to their access class |
| **Total** | **36 of 36 checks passed** |

### Failure modes found by rehearsing rather than reading

1. **The `auth` schema does not restore into a bare Postgres.** It is
   provider-managed; a plain instance rejects it. **Recovery must target a real
   Supabase project**, or it recovers the register and loses the ability to
   sign in.
2. **A data-only restore loads with referential integrity disabled.** The first
   rehearsal produced a target holding `actor` rows with no matching identity
   and no complaint. Integrity after a restore is therefore **proven, never
   assumed** — the verification revalidates every foreign key.
3. **Identity ids must be preserved, not regenerated.** Every authored fact
   references its author through `actor`. Re-provisioning with fresh ids would
   orphan the authorship of the entire register.
4. **Restore order is load-bearing.**

## 9. Production Supabase / infrastructure requirement

**Observed, read-only.** One Supabase organization — *Huerta Group LLC*,
`sedhnswxjkkqctfzlsth` — holds three projects: `huerta-group-llc`,
`huerta-group-publishing`, and `curbside-spa`.

**Requirement.** ADR-0009 requires Generation One to own a **separate Supabase
project**. Production therefore needs a fourth project in this organization. It
is not a matter of adding an environment inside already-approved
infrastructure: the topology decision is that the credential boundary, backup
unit and migration path are separate.

**Material limitations of the Free plan**, either of which is disqualifying on
its own:

- **Free projects pause after one week of inactivity.** Generation One is a
  register consulted irregularly — that is its usage pattern, not a defect —
  so it would pause precisely when it had been quiet, and be unavailable at the
  moment someone finally went to look. Restoring a paused project is manual.
- **Free includes no backups at all.** The logical backup here would be the
  only copy in existence, and it depends on someone remembering to run it.
- Free also caps active projects at two per organization and retains logs for
  one day, which undercuts ADR-0018's audit-trail expectation.

**What Pro provides:** daily backups with 7-day retention, no inactivity
pausing, and 7-day log retention — behind, not instead of, the logical backup.

**Point-in-time recovery is not recommended** at $100/month per 7 days of
retention. Daily provider backups plus the tested logical backup are
proportionate to a register of this size.

## 10. One-time and recurring operating cost

| Item | Cost | Cadence |
| --- | --- | --- |
| Private GitHub repository | **$0** | — |
| Backup and restore tooling | **$0** | Built from the provider CLI |
| Supabase Pro — organization subscription | **$25** | Monthly, per organization |
| Micro compute — the Generation One project | **~$10** | Monthly |
| Compute credit | **−$10** | Monthly, **per organization** — already consumed by an existing project |
| Point-in-time recovery | $100 per 7 days retention | Monthly — **not recommended** |

**The incremental cost depends on one fact the Founder Office must confirm:
whether the organization is already on a paid plan.** The Free plan permits two
active projects per organization and the organization holds three, which
strongly suggests it is already paid — but that could not be confirmed
read-only without handling account credentials, which was not attempted.

| If the organization is | Net new recurring cost |
| --- | --- |
| **Already on Pro** | **~$10/month** — the fourth project's Micro compute. Daily backups apply to it automatically. |
| **On Free** | **$25/month + ~$10/month compute**, since a fourth active project exceeds the Free limit regardless. |

**A genuine zero-cost option exists and is not recommended.** Generation One
could run on Free with the tested logical backup as its only recovery path.
That trades roughly $10/month for a register that pauses itself after a quiet
week and has no provider-side safety net. For a system whose entire value is
being current and trusted when consulted, that is the wrong trade.

## 11. Founder Office cost decision required

**Approve the incremental Supabase cost for the Generation One production
project — approximately $10/month if the organization is already on Pro, or
$25/month plus compute if it is not.**

Confirming which applies is a matter of opening the organization's billing
page. **Nothing was purchased, upgraded, or enabled**, and no new project was
created.

## 12. Production-intended identity posture

Validated by probing the running system as an outsider would — with the
publishable key, which is public by definition because it ships in the browser
bundle. **Three defects were found and repaired.**

| Setting | Posture | Note |
| --- | --- | --- |
| Registration | **Closed** | **Repaired.** It was open: anyone holding the public key could create an identity in the project. |
| Email provider | Enabled | Under `[auth.email]`, `enable_signup` enables the *provider*, not registration — setting it false disabled sign-in entirely. Found by probing; the config now says so in place. |
| Anonymous sign-in | Disabled | No anonymous role exists in the access model |
| Minimum password | **12, mixed classes** | **Raised from 6.** The population is provisioned by an administrator, so the floor sits where a generated credential sits. |
| JWT expiry | 3600s | |
| Refresh token rotation | On, 10s reuse interval | |
| Redirect allowlist | Narrowed | An over-broad allowlist is how a token leaves the surface it was issued for |
| **Service-role key** | **Not issued** | **Repaired.** It was advertised in `.env.example` and used by nothing. It bypasses row level security — the enforcement layer — and no application path needs one. |
| Sign-out | **Present, revokes globally** | **Repaired.** There was none. A copied refresh token is refused afterwards. |

Account provisioning remains out-of-band. The application still exposes no path
to create, elevate, or delete an actor.

## 13. Production-intended environment posture

**Two environment variables, and only two** — the project URL and its
publishable key. There is deliberately no service-role key, and `.env.example`
records why, so it is not re-added by reflex.

Secrets live in the deployment platform's own store, never in the repository.
`.env*` is ignored except the example. Local pre-production keeps its own
project, data and credentials, entirely separate from any production-intended
configuration.

Production values that must be set when the project is created — its own site
URL and a redirect allowlist naming the internal host and nothing else — are
recorded in `docs/environments.md`. They are stated as settings the project
must be created with, not as settings in force somewhere.

## 14. Authentication / authorization / RLS validation

| Check | Result |
| --- | --- |
| Self-registration with the public key | **Refused** |
| Provisioned actors sign in | Both |
| Incorrect credential | **Rejected** |
| Unauthenticated request to the application | Redirected to sign-in |
| Unauthenticated read of Headquarters representation | Returns nothing |
| Sign-out | **Revokes at the provider** — a copied refresh token is refused |
| Row level security | Enabled on **18 of 18** tables, deny-by-default, every policy additive from nothing |
| Each access class does what ADR-0017 grants and nothing more | Pass |
| Administrator cannot author, and is not a Headquarters reader | Pass |
| Founder Office cannot author representation | Pass |
| Corporate Operations cannot override attention priority | Pass |
| Source function cannot supply another function's facts | Pass |
| Technical permission confers no institutional authority | No role name implies an office |

## 15. Four governance-classification mismatch dispositions

**All four formally dispositioned. None corrected.** Each is the same shape:
the implementation truth is undisputed and the governed enum has no value that
expresses it. Changing the value would state something untrue; changing the
vocabulary was prohibited.

Full record, with the six required fields for each:
[`generation-one-classification-mismatch-dispositions.md`](generation-one-classification-mismatch-dispositions.md).

| # | Mismatch | Disposition | Remaining action |
| --- | --- | --- | --- |
| 1 | `architecturalDisposition: future_internal_application` — the application is not future | Unchanged: stale but not false. It does not yet run in production, and `unresolved` would discard a decided architecture | Optional schema amendment |
| 2 | `repositoryDisposition: future_separate_repository` — the repository now exists | Unchanged: the only value naming the correct arrangement. The prefix is inaccurate; the arrangement is right | Optional — dropping `future_` would fix it |
| 3 | `identityRequirement: future-required` — identity is implemented and required | Unchanged **under protest**. `none` would be flatly untrue; `unresolved` would suggest a question ADR-0020 closed | **Recommended:** add a `required` value |
| 4 | `evidencePaths` cite governance artifacts, because the validator requires in-repository paths | Existing `publishing-platform` precedent followed; substantive evidence recorded in the reports | Optional — an external evidence reference |

**A stale registry value is a known limitation of the register. A false one is a
defect in the institution's own record.** Four fields are visibly out of date;
the true position is recorded in six places.

No vocabulary was invented, no implementation truth was downgraded, no
historical registry state was rewritten, and no metadata mismatch was treated
as authority to change doctrine.

## 16. Repository validation results

**Runtime — `npm run verify`: all green.**

- 8 structural invariant checks read straight from the migrations
- **Secret scan across the working tree and the full commit history** — new
  this phase, because a credential removed in a later commit is still published
  the moment the history reaches a remote. 47 files, 14 commits, clean. Its
  allowlist has six entries and each states why its match is not a credential;
  the reasons print on every run.
- lint · type checking · production-equivalent build
- Reset to the seeded baseline, then the pgTAP suites
- `git diff` scope reviewed: both trees clean, no unrelated work touched, no
  history rewritten

**Corpus — `npm run verify`: all gate steps green.** 129 manifest records with
exact coverage, 18 capabilities, 14 determinations, 5 evolution records, 134
relative links resolving across 130 governed documents.

## 17. Application, test, and build validation results

| Suite | Result |
| --- | --- |
| pgTAP semantic conformance and authorization | **83 assertions** |
| Pre-production access and identity boundaries | **15 checks** |
| Authentic Corporate Headquarters operation | **28 checks** |
| Restore verification | **36 checks** |
| **Total** | **162 assertions and checks, all passing** |
| Production-equivalent build | Passes, 7 routes |
| Type checking, lint | Clean |

## 18. Semantic validation results

| Distinction | Held |
| --- | --- |
| State distinct from Change | Yes — separate structures, no derivation path |
| Change distinct from Attention | Yes — separate entities |
| Material Change consequence-based | Yes — a limb and a consequence are required, and refused without |
| Dependency distinct from Blocker | Yes — no blocking field; blocking is a separate time-bounded assertion |
| Handoff transfers no authority | Yes — no authority column exists |
| Operational Record distinct from Instance | Yes — two identities |
| Founder Attention exception-based | Yes — a distinct entity, never a flag |
| `recorded_at` is the Since Last Review boundary | Yes |
| `occurred_at` independently represented where known | Yes — nullable, never manufactured |

**No schema change was made during this phase.** The migration set is unchanged
at eight, so the semantics validated here are the semantics accepted at
construction.

## 19. §31 semantic-test results

**All ten still answer yes**, as executable cases against the running system,
and again against the **restored** system.

State changes without Attention · Attention without a State change · Dependency
without a Blocker · Blocker removed with the matter incomplete · Handoff
complete with a Dependency remaining · fact owned elsewhere while Headquarters
owns its representation · Renewal before any Deadline · Follow-Up without a
Deadline · routine change invisible because immaterial · multiple simultaneous
state dimensions without a generic status.

## 20. Security validation results

Every check at §14 passes. In addition:

| Check | Result |
| --- | --- |
| Credential material in the tree | **None** |
| Credential material anywhere in history | **None** — 14 commits scanned |
| Environment files tracked | None beyond the placeholder example |
| Service-role key issued | **None** |
| Remote repository visibility | **PRIVATE**, verified via the API |
| Production-intended configuration leaking pre-production data | No production configuration exists to leak into |
| Technical administration distinct from institutional authority | Held — administrators author nothing and read no Headquarters representation |

## 21. Scope-exclusion verification

**Nothing was added.** The domain surface is unchanged from construction: 7
routes, 8 migrations, 18 tables. The four commits in this phase added backup
and restore tooling, a secret scanner, a sign-out control, documentation, and
configuration hardening.

Confirmed absent: CRM · AI or agent features · advanced analytics · broad
integrations · accounting replication · governance replication · Command Center
automation · any relationship-seam implementation. Generation One synchronizes
nothing and no machine identity exists.

## 22. Known limitations

1. **Backup is manual.** Nothing schedules it. On Free there is no
   provider-side safety net behind it.
2. **The restore rehearsal was same-machine.** It proves the artifact and the
   procedure, not off-machine or cross-provider recovery.
3. **Recovery time is unmeasured at scale** — tens of records, not thousands.
4. **The organization's current plan is unconfirmed**, so the incremental cost
   is stated as a branch rather than a number.
5. **No preview/test environment exists.** Only local pre-production.
6. **Single-user validation remains weak validation.** A semantic error may go
   unnoticed until a second user arrives.
7. **Materiality and freshness judgement are not mechanically checkable** and
   are named as human responsibilities rather than pretended into tests.
8. **Password authentication is the floor**, not a target. Stronger factors are
   available from the same provider without an architecture change.
9. **Identity and data share a provider**, so a provider-level compromise
   reaches both. They already share one under ADR-0009.
10. **Backup retention and custody location remain undetermined** — the same
    institutional question as retention, one step removed.

## 23. Initial Headquarters operating procedure

Recorded in full at
[`generation-one-headquarters-operating-procedure.md`](generation-one-headquarters-operating-procedure.md).

It covers: who may sign in and under which technical access class; who
maintains the register and who owns underlying truth; when a matter earns a
Record and how a wrong Record is superseded rather than edited; how provenance
is recorded and why a fact without it is invalid; how State dimensions are
declared, valued and superseded; how a Material Change is authored and what the
form refuses; how Attention is nominated, admitted against all four conditions,
prioritized across three fields, and exited; how Dependencies, Blockers and
Handoffs are maintained and what a Blocker is not; how Renewals, Deadlines and
Follow-Ups stay apart; how Since Last Review is used; how stale or disputed
source truth is represented without substituting Headquarters' own conclusion;
how backups are checked and recovery initiated; what stays manual and why; and
what must return to its source system for authoritative action.

It restates the adopted model. **It establishes no new operational semantics
and expands no authority**, and where it appears to differ from a governing
source, the governing source wins.

## 24. Manual procedures intentionally retained

Authoring records and material changes · assessing materiality · nominating and
admitting attention · recording handoffs and dispositions · supplying and
confirming venture snapshots · recording financial and administrative
consequence · identifying meaningful relationships · confirming freshness ·
provisioning accounts · **taking backups**.

Unchanged from construction, with backups added. A manual step that proves
genuinely burdensome is evidence for a future integration decision, not a gap
to close now.

## 25. Backup and recovery operating procedure

Summarized at §5 through §8 and recorded in full in the runtime repository at
`docs/backup-and-recovery.md`, with the operating rules restated for
Headquarters at §12 of the operating procedure.

The essentials: take a backup before any migration and on a deliberate cadence;
check a backup by **verifying its digests**, not by observing that a file
exists; restore only into a new, empty Supabase project, in order; **preserve
identity ids rather than regenerating them**; and **validate referential
integrity after restore rather than assuming it**. Then run the verification,
which is not optional.

## 26. Exact remaining Founder Office decisions

| # | Decision | Status |
| --- | --- | --- |
| 1 | **Authorize production launch**, or withhold it | **Gate** |
| 2 | **Approve the incremental Supabase cost** — ~$10/month if the organization is already on Pro, $25/month plus compute if not. Confirming which requires opening the billing page | **Gate** |
| 3 | **Authorize creation of the production Supabase project** and its credentials, held separately from every other environment | **Gate** |
| 4 | Add a `required` value to the `identityRequirement` enum, so the register stops understating the access posture of the only authenticated system the institution operates | Recommended |
| 5 | Determine backup **retention and custody** — how long backups are kept and where they may be held | Recommended before production holds records |
| 6 | Authorize a preview/test environment, or accept its absence | Deferrable |
| 7 | Determine venture snapshot responsibility | Deferrable |
| 8 | Resolve the other three classification mismatches by schema amendment | Deferrable |

**Items 1 through 3 are the gate.** Item 2 is the one that requires spending.

## 27. Production authorization recommendation

**READY SUBJECT TO SPECIFIC FOUNDER OFFICE COST/OWNER DECISION.**

The system that actually exists is complete for its bounded scope, semantically
conformant, durably preserved, recoverable by a procedure that has been
performed rather than described, and hardened where validation found it
wanting. Every technical condition within Development's authority is met.

What stands between it and production is not engineering. It is an owner
decision to authorize launch, an owner decision to approve roughly $10 to $35 a
month, and an owner decision to create the production project — plus a
recommended determination on backup retention before the store holds anything
irreplaceable.

Development recommends production authorization **on the condition** that the
cost at §11 is approved. Running Generation One on the free tier would give the
institution a register that pauses itself after a quiet week and has no
provider-side safety net, which defeats the purpose of building it.

## 28. Confirmation that production was not launched

**Production was not launched.**

No production environment was created. No production Supabase project,
database, credential, or deployment target exists. No deployment configuration
of any kind is tracked in the runtime repository. No public route, domain, or
endpoint exposes any Generation One capability. No live operational production
data was created. No production behaviour of any existing system changed — the
public website is untouched.

Everything constructed and validated remains in a local pre-production
environment. The one durable copy outside that machine is a **private** source
repository containing code and no operational records.

## 29. Confirmation that no paid infrastructure cost was incurred

**No paid infrastructure cost was incurred, and none was approved by
Development.**

No Supabase project was created. No plan was upgraded. No paid feature,
add-on, or point-in-time recovery was enabled. No external backup service was
purchased. The private GitHub repository is free on the existing account. The
backup and restore tooling was built from the provider CLI already in use.

The organization's project count is unchanged at three. The exact cost
requirement is recorded at §10 and returned to the Founder Office as a decision
at §11, unspent.
