# Stale Obligation Disposition & Authentic Correction Report

**Classification: Institutional Record** — completion report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office.

- **Returned:** 2026-08-23.
- **Posture:** LOCAL / PRE-PRODUCTION. Production not launched. No recurring
  cost created.
- **Outcome:** **complete.** All three obligations disposed, the stale Record
  superseded, history preserved, no Founder Attention created.

## 1. Completion determination

The correction is applied to the authentic Corporate Headquarters register.
Nothing was deleted, nothing was rewritten, and no replacement obligation of any
kind was created.

| Object | Before | After |
| --- | --- | --- |
| Renewal — trade-name registration continuation | `outstanding` | **`not_established`**, 2026-08-23, with basis |
| Deadline — continuation filing due, 2026-11-20 | `pending` | **`not_established`**, 2026-08-23, with basis |
| Follow-Up — review renewal requirements | `outstanding` | **`moot`** |
| Operational Record — HGP trade-name registration | admitted on `time_sensitive_action`, "Continuation obligation with a consequential boundary" | **superseded**; corrected representation admitted on `awareness` |

## 2–3. SHAs and commits

| Repository | Start | End |
| --- | --- | --- |
| `huerta-group-llc` | `da41a89` | `78ff63a` + this report's commit |
| `huerta-group-operations` | `db7ea3e` | `3c546c1` |

- `78ff63a` (corpus) — *feat: record fd-0018 — NOT ESTABLISHED, and two boundaries it surfaced.*
- `3c546c1` (runtime) — *feat: NOT ESTABLISHED, and the correction it made possible.*

Governance and implementation are separated as instructed. The authentic data
correction is not a commit — it is operational history in the register, and its
evidence is §14–§18 and §24.

## 4. Founder Office determination preservation

`fd-0018` records four determinations: NOT ESTABLISHED for Renewal and Deadline
only; supersession does not cascade; expiration metadata is not a Deadline; and
the authentic correction is authorized. Registered in the determinations
register (record 18 of 18), the manifest, and the `operations-systems`
capability entry.

Chronology is preserved. Neither the Corporate Operations Semantics Foundation
nor the Generation One Requirements Report was amended — `fd-0018` §7 states
this explicitly. The prior Headquarters representation is nowhere recast as
Administration & Compliance truth; the superseded Record still carries its own
original, now-false admission note, as the record of what Headquarters believed.

## 5–6. NOT ESTABLISHED for Renewal and Deadline

Two migrations, deliberately split — Postgres refuses a newly added enum value
used in the same transaction:

- `20260823100000` adds `not_established` to `renewal_state` and
  `deadline_state`. **Follow-Up is untouched.**
- `20260823100001` adds `not_established_at` and `not_established_basis` to
  both tables, with a constraint requiring both **exactly when** the disposition
  is used and refusing them otherwise.

The columns are named for the disposition rather than generically, so they
cannot become the beginnings of a shared lifecycle. The constraint has a second
effect worth naming: a disposition **cannot be unwound** into a clean-looking
row, because state and provenance cannot disagree.

The basis is required because a correction that cannot say what established it
is an assertion without provenance — refused everywhere else in this
architecture, and now refused here by the database rather than by convention.

## 7. Follow-Up MOOT

No new semantics. `moot` is one of Foundation §20's four Follow-Up exits and was
already governed; what was missing was an interface, added in the previous
assignment. It is used here unchanged.

## 8. Disposition history model

For Renewal and Deadline, the disposition records **when** and **on what
authority**. The object itself is untouched: description, existing standing,
consequence of lapse, due date and consequence of passing all remain exactly as
first recorded.

Follow-Up records the disposition only, with no timestamp or basis, because its
table has neither. **This asymmetry is reported, not repaired** — adding those
columns would be schema change beyond the determination. Where the reason for a
Follow-Up disposition is consequential it belongs in a Material Change.

## 9. Current-view filtering

Exclusion derives from governed state, never from UI hiding.

- Founder Home and the function/venture contexts already selected inclusively
  (`in ('pending','reached')`, `in ('outstanding','actionable')`,
  `= 'outstanding'`), so a disposed obligation left them with no code change.
- **One defect found and repaired:** the Executive Review's Coming Due step
  excluded deadlines by *exclusion* (`not in ('passed')`), which would have kept
  showing a not-established deadline. Corrected to exclude both.

## 10. Supersession non-cascade

No cascade existed, and none was added. It is now **asserted rather than
assumed**: a conformance check supersedes a Record carrying an outstanding
follow-up and confirms the follow-up is still outstanding afterwards.

This is also why the correction disposed each obligation individually before
superseding the Record. Supersession coordinates; it does not substitute.

## 11. Expiration-date treatment

**No Deadline was created for 2031-06-15**, and the structural guard would fail
the gate if one appeared for it.

Inspection found no structured location for expiration metadata: a state
dimension carries a vocabulary value rather than a date, and the only
date-bearing concept is a Deadline. Under WP8's second branch the date therefore
stays in authoritative-source context — recorded descriptively in the corrected
Record's admission note ("active and registered through 15 June 2031") and in
the disposition basis on both objects, as prose attributed to Administration &
Compliance rather than as a field the system will act on.

## 12. Corporate Operations interface

Two controls, on the Operational Record's existing Renewals and Deadlines lists,
each behind a disclosure and each requiring the basis. Their language is
deliberate: "Not satisfied and not lapsed — the source does not presently
establish this continuation requirement", and "Not reached, not passed, not met".

A disposed object stays listed, struck through, showing its disposition date and
basis.

No generic cancel control, no bulk editor, no lifecycle machinery, no new stage.

## 13. ADR-0017 and RLS

**Unchanged.** No policy added, removed, relaxed or widened. The controls invoke
the existing `amend_renewal` and `amend_deadline` policies, which are scoped to
`can_author_representation()` — Corporate Operations alone. The Founder Office
cannot reach them and gained nothing.

## 14–16. The authentic corrections

Applied as the existing **Corporate Operations** actor, with row level security
in force, so every write was evaluated by `can_author_representation()` exactly
as if that actor had signed in. Each carries this basis:

> Administration & Compliance establishes the Huerta Group Publishing trade name
> as ACTIVE, registered 15 June 2026 and expiring 15 June 2031, fee paid, with no
> continuation requirement and no filing boundary presently established.

**On the mechanism, plainly.** Development holds no Corporate Operations
password and did not create one. The session was minted through the admin API
for the existing actor and revoked afterwards; no credential was requested,
recovered, logged or set, and no token was printed. This preserves the
access-class boundary in the database — unlike acting as superuser through
`psql`, which would bypass RLS entirely, or setting a password, which would
mutate an authentic credential. **The authority came from `fd-0018` §5, not from
holding an admin key**, and the Founder Office may wish to determine whether
Development should ever use this mechanism again. It is reported here precisely
so that it is not quietly normalised.

## 17. Record reconciliation

The stale Record's admission rationale remained materially false after the
individual dispositions — it was admitted on `time_sensitive_action` because of
a "Continuation obligation with a consequential boundary" that does not exist.
So it was superseded, not rewritten:

- A corrected Record was admitted **on the same Operational Instance**, on
  ground `awareness`, noting the governed standing active through 15 June 2031
  with no continuation requirement or filing boundary presently established.
- The prior Record's `superseded_by` now points at it. Its identity, admission
  ground, admission note and provenance are frozen by trigger and unchanged.
- `registration: valid` was recorded on the corrected Record, sourced from
  Administration & Compliance. The prior Record keeps its own state value —
  supersession cascades nothing.

## 18. Current HGP trade-name representation

One current Record, admitted for awareness, `registration: valid`, sourced from
Administration & Compliance, expiry recorded descriptively. No current Renewal,
no current Deadline, no owed Follow-Up.

## 19. Administration & Compliance provenance

Preserved throughout. Every corrected object names Administration & Compliance
as the source function with reference `trade-name filing`; Corporate Operations
remains representation owner and was not made the source authority for the
registration. The disposition basis states what the source establishes, not what
Headquarters concluded.

## 20–23. Surface results

Verified against the running application, reading live authentic data:

| Surface | Result |
| --- | --- |
| **Founder Home — Coming Due** | Deadlines "None open", Renewals "None open", Follow-ups none |
| **Founder Home — materially changed** | Shows the correction with its consequence: "No filing is due…" |
| **Executive Review** | Carries no stale obligation forward; the correction appears as a Material Change |
| **Administration & Compliance context** | The corrected Record with its truthful admission note; "What is coming due here?" reads None open ×3; nothing blocked; nothing awaiting the Founder |

Direct queries agree: coming-due deadlines 0, outstanding renewals 0, owed
follow-ups 0, current A&C records 1.

## 24. Historical reconstruction

Everything remains readable:

```
renewal            Trade-name registration continuation                    not_established
deadline           Continuation filing due (2026-11-20)                    not_established
follow_up          Review renewal requirements ahead of the filing window  moot
record superseded  HGP trade-name registration — "Continuation obligation with a consequential boundary"
record current     HGP trade-name registration — "Governed trade-name standing … through 15 June 2031 …"
```

Each object keeps its description, its dates and its stated consequences. Both
Records exist. The disposition date and basis are on the two objects that carry
them. Nothing was deleted and no history was overwritten.

## 25–26. No replacement obligation, no Attention

**No Renewal, Deadline or Follow-Up was created** — by the correction, by the
supersession, or by any code path added. Standing Founder Attention is **2,
exactly as before**: the custom-domain and Generation One items, both unrelated.
The correction creates no nomination and no attention item, and a conformance
check asserts that disposing an obligation ends nothing else.

## 27–28. Credential treatment

The Founder's replacement password was not requested, recovered, logged or set,
and does not appear in source, fixtures, documentation, tests or any artifact.
The state fingerprint records only a digest of each stored hash.

Both credential digests changed between assignments, with every other value
identical — the signature of the Founder's own `set-password`, detected by the
control built for exactly that and by nothing else. Routine validation does not
alter authentic credentials: the gate asserts it on every run and reports
"credentials intact".

## 29. Authentic state preservation

The register was never reset. The two migrations were applied with
`supabase migration up`; the fingerprint before and after was **identical**,
confirming schema change touched no data.

The full validation gate was then run against the corrected register:
fingerprint before and after identical, credentials intact. All destructive
testing ran on the disposable stack.

**The Founder review boundary is unchanged** at 2026-08-23 02:55:26+00, and the
single Review Event is untouched. Unrelated records, dependencies, blockers,
handoffs and attention items are unchanged.

**A milestone worth naming:** the guard now reports `AUTHENTIC DATA PRESENT — 3
row(s) authored` and refuses destructive commands. The register holds
institutional history that exists nowhere else for the first time, and the Stage
6 protections are doing exactly what they were built for.

**Backup.** A local four-part dump of the corrected register was taken
(`~/huerta-generation-one-backups/2026-08-23T09-45-17-000Z`, digests written).
The **off-machine encrypted copy needs the Founder's passphrase** and is
therefore theirs to make: `npm run gen1 backup`. The previous off-machine copy
predates this correction.

## 30. Schema impact

Two migrations: two enum values, four columns, two constraints, two comments.
No table, no trigger, no policy, no view. Bounded to what NOT ESTABLISHED
requires and authorized by `fd-0018` §7 and the package's schema posture.

## 31–32. Semantic, §31, security

All invariants hold. Specifically: **Renewal ≠ Deadline ≠ Follow-Up** — three
vocabularies, one value added to two of them, `moot` untouched, and a structural
check that fails if `not_established` reaches a third. **NOT ESTABLISHED ≠
satisfied / lapsed / reached / passed** — asserted by a check confirming the
renewal keeps its standing and consequence-of-lapse and the deadline its due
date and consequence-of-passing, none of them altered. **Disposition ≠
deletion** — every row remains. **Supersession does not cascade** — asserted.
**Headquarters correction ≠ source history** — the basis states what the source
establishes now, and the superseded Record still carries what Headquarters
previously believed.

**All ten §31 tests answer yes.** pgTAP: 83 assertions, PASS. Authentic
operations suite: **65 of 65**, with eight checks over the new semantics.

Authentication required; RLS deny-by-default; ADR-0017 unchanged; no Founder
Office permission widened.

## 33–34. Inspector findings and repairs

1. **The Executive Review would have kept showing the not-established deadline.**
   Its Coming Due step excluded by exclusion list (`not in ('passed')`) rather
   than by inclusion, so a new closing state would have leaked through. Repaired,
   and the asymmetry with Founder Home's inclusive filters is now closed.
2. **The anti-generic-lifecycle guard read the wrong text.** The gate blanks
   string literals before matching — correct for prohibitions about column names,
   wrong for one about enum values. Repaired to read the migrations raw.

No defect was found in the correction itself. The Follow-Up disposition
asymmetry (§8) is reported rather than repaired, as it would require schema
beyond the determination.

## 35–36. Repository and CI

```
12 structural invariants  including "not established is not a generic disposition
                          — renewal and deadline only; follow-up keeps moot"
lint · typecheck · build  green
authentic register        fingerprinted before and after — unchanged, credentials intact
disposable stack          83 pgTAP assertions, boundary suite, 65/65 authentic operations
```

Corpus gate green across nine validators; CI verified on push. Runtime has no
CI by design and was validated locally. Diff limited to the corrective work.

## 37. Remaining Founder Office decisions

- **Whether Development should ever again mint an actor session administratively
  to perform an authorized act** (§14–§16). Used once, under explicit
  authorization, reported rather than normalised.
- Whether a Follow-Up disposition should carry a time and basis as Renewal and
  Deadline now do (§8).
- Unchanged and open: GEN1-REQ §19 Q6 and Q7; GEN2-REQ §34.3, §34.4, §34.5.

## 38–39. Production and cost

Production was not launched; no production project exists; no plan changed; no
paid feature enabled; no recurring infrastructure cost was created.
