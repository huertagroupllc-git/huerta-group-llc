# Generation One — Local Operations Activation Report

**Classification: Institutional Record** — activation report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office.

- **Instrument:** Generation One Local Operations Activation.
- **Determination:** [`fd-0015`](../determinations/fd-0015-generation-one-local-operating-posture.md).
- **Date:** 2026-08-19.
- **Posture:** **LOCAL / PRE-PRODUCTION — AUTHENTIC FOUNDER USE.**
- **Production launched:** **No.** · **New recurring cost:** **None.**

---

## 1. Activation determination

**Generation One is ready for authentic Founder use.** One action remains, and
it belongs to the Founder rather than to Development: setting sign-in
credentials (§11).

The work was not about convenience. Authorizing authentic local use converted
the local database from a disposable fixture into **the only copy of
institutional history**, and three things followed that had to be fixed before
the Founder could safely begin.

| What was true | Why it mattered | Now |
| --- | --- | --- |
| `npm run verify` ran `supabase db reset` as its third step | The validation gate would have silently destroyed the Founder's work | The gate is split; the destructive half is guarded and refuses |
| The seed provisions accounts with a password **published in this repository** | Anyone reading the repository could open the register | Activation retires both credentials; nobody holds a working one |
| Backups existed only on the machine holding the register | A machine failure would take both copies | Encrypted off-machine store, recovery rehearsed from it |

No architecture was reopened, no scope expanded, no production resource created,
and no cost incurred.

## 2. Starting and ending repository SHA

| Repository | Starting | Ending |
| --- | --- | --- |
| `huerta-group-llc` — corpus | `54accaa` | this commit |
| `huerta-group-operations` — runtime | `039cfa8` | `ef10223` |

A third repository now exists: `huertagroupllc-git/huerta-group-operations-backups`,
**private**, holding encrypted backups only (§7).

## 3. How the Founder starts Generation One

```sh
npm run gen1 start
```

One command. It starts Docker if it is not running, brings up the database,
builds and starts the application, writes the local environment from the running
stack, and prints the address. Ordering is handled: the database is up before
the application, always.

First run after a restart takes about a minute; afterwards it is quick. Success
looks like `Open http://localhost:3000`.

## 4. How the Founder stops Generation One

```sh
npm run gen1 stop
```

Stops the application, then the database. **Everything is retained on disk.**

Shutdown ordering matters and is handled. So does one flag: `supabase stop
--no-backup` **deletes the data volume**, and `gen1 stop` never passes it. That
flag is named in the procedure as one of four commands never to run against the
register.

## 5. Local access URL and sign-in procedure

**http://localhost:3000** — bound to this machine only.

Unauthenticated requests are redirected to the sign-in page, and an
unauthenticated caller reads no Headquarters representation.

**Two accounts, deliberately**, because the access model keeps two roles apart
and collapsing them would collapse the distinction the system exists to draw:

| Sign in as | To |
| --- | --- |
| `operations@huertagroupllc.test` | **Maintain the register** — admit matters, record state, author Material Changes, record dependencies, blockers, handoffs, admit and normalize Attention |
| `founder@huertagroupllc.test` | **Review it** — read all, mark a review, override Attention priority, act on Attention |

Corporate Operations cannot override Founder priority; the Founder Office cannot
author representation. Enforced by the database, not by convention. In practice
the Founder wears both hats and signs in as whichever the task calls for.

Passwords are set with `npm run gen1 set-password` and are never written to
disk. **Development does not know them and cannot recover them.**

## 6. Authentic local operational data location

Plainly: **the register lives inside Docker, not in the project folder.**

| | |
| --- | --- |
| **Operational data** | Docker named volume `supabase_db_huerta-group-operations`, mounted at `/var/lib/postgresql/data` inside the database container |
| **Runtime code** | `~/GitHub/huerta-group/huerta-group-operations`, and the private remote |
| **Local backups** | `~/huerta-generation-one-backups/` |
| **Off-machine backups** | `huertagroupllc-git/huerta-group-operations-backups`, encrypted |

The distinction matters: **copying the project folder does not copy the
register.** The code is in one place and the history is in another.

It is a named volume, not ephemeral container state — **verified to survive a
full stop and start cycle**, with the record count unchanged across it. What
destroys it is `supabase stop --no-backup`, `supabase db reset`, or removing the
volume directly.

## 7. Durable backup posture

The Production Readiness architecture applies unchanged: a four-part logical
backup — roles, structure, identity, and the irreplaceable Headquarters
representation — with a digest manifest.

**One thing was added because authentic data now exists locally: the backup must
leave this machine.**

```sh
npm run gen1 backup
```

Each part is encrypted with `openssl enc -aes-256-cbc -pbkdf2` **before it
leaves**, and the ciphertext is pushed to a private repository. Verified: the
pushed artifacts carry the `Salted__` header and contain **no readable
Headquarters text**. No readable operational record is handed to any third
party — which is what makes an off-machine copy compatible with the records
policy boundary at `fd-0014` §6.

The consequence is stated plainly to the Founder: **the passphrase is part of
the recovery path.** Without it the off-machine copy is unreadable, including by
the account that owns the repository. Each backup is encrypted independently, so
changing the passphrase does not break older ones.

Retention follows the determined posture — **preserve by default, no routine
age-based deletion**. Backups accumulate; nothing prunes them.

**No new recurring cost.** Private repositories are free on the existing
account, and the tooling is the provider CLI already in use.

## 8. Backup trigger, cadence, and verification

**Trigger:** whenever something has been recorded that would not be acceptable
to lose. **Cadence:** weekly at minimum while the register is in active use.
It takes seconds.

**Confirming it worked**, in increasing strength:

1. `npm run gen1 status` — shows the most recent backup, how many are kept, and
   warns when the newest is more than a week old.
2. `shasum -a 256 -c SHA256SUMS` in the backup directory — four `OK` lines.
3. A full recovery rehearsal (§9), which is what actually proves it.

**A backup that has never been verified is a hope, not a backup.**

## 9. Local failure recovery procedure

Everything needed is already off this machine: the code in the private runtime
repository, the register in the private encrypted backup store. The Founder
supplies the passphrase.

```sh
git clone …/huerta-group-operations.git && npm install
git clone …/huerta-group-operations-backups.git ~/huerta-generation-one-backups/offsite
npm run gen1 start
node scripts/gen1-recover.mjs --from ~/huerta-generation-one-backups/offsite \
  --target-container supabase_db_huerta-group-operations
TARGET_DB=supabase_db_huerta-group-operations node scripts/verify-restore.mjs
npm run gen1 set-password
```

The recovery decrypts, **verifies every digest before restoring**, applies the
parts in the order that matters, and prints what to do next. Verification is not
optional.

**Dependencies recovery has:** this repository, the backup store, the
passphrase, Docker, the Supabase CLI, and Node. **Manual steps:** supplying the
passphrase, and setting credentials afterwards.

## 10. Recovery test evidence

**Performed 2026-08-20, from the off-machine store as if this machine were
gone.** The encrypted backup was cloned fresh from the private remote — nothing
on the local disk was used.

| Step | Result |
| --- | --- |
| Backup store cloned from the remote | The only artifact assumed to survive |
| **Wrong passphrase** | **Refused cleanly** — no partial restore, no half-populated target |
| Correct passphrase | 5 files decrypted |
| Digest verification | **4 of 4 intact** — checked before anything was restored |
| Restore into an isolated Supabase project | **0 errors** across all four parts |
| Structure | 18 tables · 4 views · 45 policies · 20 triggers · 13 functions · 22 checks · 39 foreign keys, all matching |
| Row level security | 18 of 18 tables |
| **Referential integrity** | **39 of 39 foreign keys explicitly revalidated** |
| Headquarters content | 18 of 18 tables matching the source row for row |
| Provenance and history | Intact; representation owner still invariantly Corporate Operations |
| **Semantic enforcement** | **The restored register still refuses what the original refuses** |
| **Identity** | Both accounts authenticate after restore and still map to their access class |
| **Total** | **36 of 36** |

The isolated target was destroyed afterwards, and the decrypted plaintext
removed.

### A correction made to the verification itself

Ten checks asserted that a property was **present** rather than that it
**matched the source** — superseded state, a priority override, a confirmation
event, a governance-mandated nomination. A freshly activated register holds none
of those, because they arise from use. The checks were failing a *correct*
restore of an empty history, and one identity check assumed the fixture password
that activation deliberately retires.

All ten now compare against the source and report absence rather than failing
it. **This mattered: left alone, they would have trained the operator to
discount failures in the one procedure that must never be discounted.**

## 11. Founder actions required for normal local operation

**Before first sign-in — once:**

```sh
npm run gen1 activate        # already performed; resets and retires the published password
npm run gen1 set-password    # Corporate Operations credential  ← REQUIRED
npm run gen1 set-password    # Founder Office credential        ← REQUIRED
```

**Activation has already been performed.** The published fixture password no
longer opens the register, and **no credential that anyone knows exists** —
including Development. Sign-in is impossible until the Founder sets one. That is
the intended state, not a fault.

**Then, ordinarily:** `gen1 start` · use it · `gen1 backup` when something worth
keeping has been recorded · `gen1 stop`.

Docker Desktop must be installed; `gen1 start` launches it if it is not running.

## 12. Security, authentication and RLS validation

| Check | Result |
| --- | --- |
| The password published in this repository | **Refused** — retired at activation, and re-retired after any reset |
| Any credential known to Development | **None exists** |
| Self-registration with the public key | Refused |
| Incorrect credential | Rejected |
| Unauthenticated request to the application | Redirected to sign-in |
| Unauthenticated read of Headquarters representation | Returns nothing |
| Sign-out | Revokes at the provider; a copied refresh token is refused |
| Row level security | **18 of 18 tables**, deny-by-default, unchanged |
| Each access class does what ADR-0017 grants and nothing more | Unchanged |
| Secrets in source control | None, across the tree and all 17 commits |
| Service-role key | Still not issued |

**Nothing was weakened for local convenience.** No authentication was relaxed,
no policy loosened, no provenance requirement dropped, no audit behaviour
changed. Localhost was not treated as an exemption.

**One exposure is reported rather than mitigated.** The database's API is
reachable on the local network on port 54421 while running; the application
itself is bound to this machine only. Row level security means an
unauthenticated caller reads nothing, registration is closed, and sign-in is
rate-limited to 30 attempts per five minutes per address. The practical residual
risk is password guessing against a known account from the same network. The
Supabase CLI does not expose a bind-address setting, so the mitigation is
operational: **prefer trusted networks and keep the macOS firewall on.** Both
are recorded in the Founder procedure.

## 13. Semantic validation

**All ten §31 tests remain answerable yes**, run as executable cases against the
running system — and again against the **restored** system.

| Distinction | Held |
| --- | --- |
| State distinct from Change | Yes |
| Change distinct from Attention | Yes |
| Material Change consequence-based | Yes — refused without a limb and a consequence |
| Dependency distinct from Blocker | Yes — no blocking field |
| Handoff transfers no authority | Yes — no authority column exists |
| Operational Record distinct from Instance | Yes — two identities |
| Founder Attention an exception layer | Yes — a distinct entity, never a flag |
| `recorded_at` the Since Last Review boundary | Yes |
| `occurred_at` separately represented where known | Yes — nullable, never manufactured |
| No universal lifecycle or state-machine shortcut introduced | **None** — the migration set is unchanged at eight |

**No schema change was made.** The semantics in local operation are the
semantics accepted at construction, byte for byte.

## 14. Repository and runtime validation results

| Gate | Result |
| --- | --- |
| `npm run verify` — safe | **Green.** 8 structural invariants, secret scan over 52 files and 17 commits, lint, type checking, production-equivalent build. Touches no data |
| `npm run verify:full` — complete | **Green.** Guard passed, reset, **83 pgTAP assertions**, access and identity boundaries, authentic Headquarters operation, then restored the baseline and re-retired fixture credentials |
| Restore verification | **36 of 36** |
| Runtime startup and shutdown | Verified, including that the record count is unchanged across a full cycle |
| Authentication flow | Verified (§12) |
| Repository cleanliness | Both trees clean; remotes at parity; no history rewritten |

## 15. Additional minimum controls required because authentic local data now exists

Four, all implemented.

1. **A guard on destructive commands.** `verify:full` and `db:reset` check
   whether the register has grown beyond the baseline recorded at activation and
   **refuse if it has**. It fails safe: no baseline on record means it assumes
   there is data to protect.
2. **Retirement of the published credentials**, applied at activation and again
   by any path that re-applies the seed — including the full gate, which resets
   the database and would otherwise restore the published password each time it
   ran.
3. **An encrypted off-machine backup**, because a backup sharing a machine with
   the register protects against neither theft, loss, nor disk failure.
4. **A self-cleaning full gate**, which restores the baseline it started from so
   that running the tests does not leave test records sitting in the register.

## 16. Recurring cost confirmation

**No new recurring cost exists.** No Supabase project was created, no plan
upgraded, no paid feature or add-on enabled, no external service purchased. The
organization remains on the Free plan with three projects, unchanged. Both
private repositories are free on the existing account. Backup, encryption and
recovery tooling use software already installed.

## 17. Production resource confirmation

**No production resource was created.** No production Supabase project,
database, credential, deployment target, or hosted environment exists. No
deployment configuration is tracked. Nothing is public. Generation One was
**not** placed inside the existing public-site Supabase project — ADR-0009's
credential boundary is intact and the prohibition at `fd-0015` §2.4 is honoured.

## 18. Known local-operation limitations

1. **No uptime.** The register is available only while the machine is on and the
   system is running. Nothing is lost when it is not — but nothing is reachable.
2. **Backups are manual.** Nothing schedules them. `gen1 status` warns when the
   newest is over a week old; it cannot make one.
3. **The passphrase is unrecoverable.** Lose it and the off-machine copy is lost
   with it.
4. **The full test suite cannot run against the register**, because it resets the
   database. The safe gate always runs; the full gate needs a disposable stack.
5. **The database API is reachable on the local network** while running (§12).
6. **Recovery is rehearsed on one machine.** Genuinely cross-machine recovery is
   proven only in the sense that the artifact was cloned from the remote.
7. **Single-user validation remains weak validation.**
8. **Free-plan projects pause after a week of inactivity** — irrelevant now,
   since nothing hosted is in use, but it is why production still needs the cost
   decision.
9. **Docker Desktop is a hard dependency.**

## 19. Authentic Founder use readiness

**Ready**, subject to the Founder setting credentials (§11).

The register starts from the five authentic Headquarters matters already seeded
— the Generation One programme, Huerta Group Publishing, the trade-name
registration, the custom-domain launch, and the notification standby — so the
first session begins with real matters rather than an empty screen.

What the Founder can do from the first session: admit matters and see what is
happening, record what materially changed and why it matters, record
dependencies, blockers and handoffs without collapsing them, nominate and admit
Founder Attention, and review what changed since the last review.

What the system will keep doing is refusing. A change that cannot state its
consequence, a generic status dimension, an attention admission missing one of
its four conditions — all still rejected, with the reason given. **That friction
is the capability, not an obstacle to it.**

The production question is deferred, not closed. If persistent availability
starts to matter in practice, that is the evidence that returns it to the
Founder Office.
