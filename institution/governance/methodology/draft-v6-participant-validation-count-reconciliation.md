# Draft v6 Participant Validation — Count Reconciliation and Verification Record

**Classification: Institutional Record** — validation evidence (evidentiary,
non-governing). Produced under `fd-0034` §2.5.

**This is Development's independent verification of the completion report's
checkable claims.** It records what held, and it records **three count errors
that are not corrected inside the report that carries them.** The Stage 10
precedent governs: `stage-11-exercise-matrix-reconciliation.md` §1 recorded a
count defect beside its record rather than editing it, and `fd-0031` §4
Deficiency 2 named the pattern. That discipline is applied again here.

**None of the three errors changes a classification, a finding, a method
defect, an application defect, the exercise matrix, the advancement state, or
the closure result.** They are arithmetic and tally errors in descriptive
passages. They are recorded anyway, because the program's own standing finding
is that this is **how this program summarizes itself**, and a third instance
is no longer an accident.

## 1. The three errors

### Error 1 — commit count at close

**The report states** (§6, and again in §19's evidence list): *"142 commits at
open, 144 at close"* and *"144 commits over 36 days."*

**Verified:** `git rev-list --count` returns **141** at `b838e93`, **142** at
`2f16277` (open), and **143** at `73ff08a` (close). The engagement added
exactly two commits.

**Correct figure: 143 at close, not 144.** The open figure of 142 is correct.
The derived claim *"135 of 142 commits carry an AI co-author trailer"* (§28,
§30, §61 L-7) is **correct as an open-state figure** — verified at 135 of 142
— and is not affected. At close the same measure is 136 of 143.

### Error 2 — participant-limb arithmetic

**The report states** (§14, repeated in §42): *"Of **nineteen limbs** put across
eight questions: **four answered**, **two partially supplied**, **thirteen not
supplied**."*

**Verified by enumerating the report's own §13.1–§13.8 limb rows:**

| Question | Limbs | Answered | Partial | Not supplied | Not applicable |
|---|---|---|---|---|---|
| PQ-V6-1 | 3 | 0 | 0 | 3 | 0 |
| PQ-V6-2 | 3 | 0 | 0 | 3 | 0 |
| PQ-V6-3 | 1 | 0 | 1 | 0 | 0 |
| PQ-V6-4 | 2 | 0 | 0 | 2 | 0 |
| PQ-V6-5 | 3 | 1 | 0 | 0 | 2 |
| PQ-V6-6 | 2 | 0 | 1 | 1 | 0 |
| PQ-V6-7 | 6 | 2 | 0 | 4 | 0 |
| PQ-V6-8 | 2 | 2 | 0 | 0 | 0 |
| **Total** | **22** | **5** | **2** | **13** | **2** |

**Reconciliation: 5 + 2 + 13 + 2 = 22.** ✓

**Correct figures: twenty-two limbs, five answered, two partially supplied,
thirteen not supplied, two not applicable.** The report's *thirteen not
supplied* and *two partially supplied* are **both correct**; its *four
answered* undercounts by one, and its *nineteen* total omits the two
not-applicable limbs and inherits the answered undercount.

**The report's substantive claim survives unchanged.** Thirteen unanswered
limbs is the figure §42 uses to argue that a populated instrument can look
complete while substantively hollow, and thirteen is right.

### Error 3 — validation-gap total

**The report states** (§64): *"Five method defects, three application defects
and **eight** validation gaps were recorded."*

**Verified:** §60 enumerates **VG-1 through VG-9**. Eight are in the table;
**VG-9 is numbered and recorded below it** as *"the largest gap."*

**Correct figure: nine validation gaps.** The undercount excludes the one the
report itself calls the largest. Method defects (MD-1…MD-5 = five) and
application defects (AD-1…AD-3 = three) are **both correct**.

## 2. What verified correct

Checked independently against the repository, not accepted from the report:

| Claim | Result |
|---|---|
| Draft v6 digest `d2f64ee2…4600a238b10` at close | **PASS** — byte-identical to the frozen open digest |
| Drafts v1–v5 unchanged | **PASS** — all five match their recorded digests |
| HEAD `73ff08a`, branch `main`, tree clean | **PASS** — `git status --porcelain` empty |
| `b838e93` an ancestor; exactly two intervening commits | **PASS** — `2f16277`, `73ff08a`, both this engagement's |
| Manifest 257 documents at open → 259 at close | **PASS** |
| knowledge 259/259 · references 294/260 · determinations 33 | **PASS** — all three re-run, exit 0 |
| `lib/notification.ts` is 179 lines | **PASS** |
| Imported at `app/contact/actions.ts:8`; invoked at line 210 | **PASS** |
| Tracking columns written at `actions.ts:218–236` | **PASS** |
| Environment gate at `notification.ts:132–136`, early return | **PASS** |
| Migration `20260722010000_add_notification_tracking.sql` exists | **PASS** |
| Registry: `maturity: standby`, `implementationReadiness: ready_with_owner_authorization`, owner-decision unresolved | **PASS** — verbatim |
| Constitution record says the ratified text *"has not yet been supplied"* | **PASS** |
| Constitution file byte-identical across its entire history | **PASS** — empty diff `b3b1d6f` → `HEAD`, across the `1e6060a` move |
| Canonical-record rule: *"single canonical repository record"*, others *"must not reproduce"* | **PASS** |
| Contradiction C-1 — `README.md:52` Source Serif 4 + Inter vs `app/layout.tsx:2` Archivo, Cormorant Garamond, JetBrains Mono | **PASS** |
| AD-1 — the register field is `dateReceived`, not `receivedDate` | **PASS** — the validator's self-reported near-miss is real |
| 103 of 142 commits at open touch `institution/`; 23 `app/`, 29 `components/`, 13 `lib/` | **PASS** |
| 135 of 142 commits co-authored at open | **PASS** |
| Exercise matrix 6 + 1 + 0 + 0 = 7 | **PASS** — derived by counting §47–§53 |
| Gate matrix 5 + 2 + 0 + 0 = 7 | **PASS** |
| Shared-source marks S-1…S-4 = 4; independent corroborations 0 | **PASS** — derived from §17's rows |
| MD-1…MD-5 = 5 · AD-1…AD-3 = 3 · L-1…L-11 = 11 · PC-1…PC-5 = 5 · RQ-A…RQ-H = 8 · RP-1…RP-10 = 10 | **PASS** |

## 3. The pattern, which is the actual finding

**This is the third count-defect episode in this program.**

1. **Stage 7** — a five-versus-six discrepancy in a summary count.
2. **Stage 10** — the seventeen-item exercise matrix summed to sixteen, omitting
   CS-17. Development **reproduced** that error in the Stage 10 report §27 and
   added its own failure to add up a column before returning it. Recorded at
   `stage-11-exercise-matrix-reconciliation.md` §1 and `fd-0031` §4 Deficiency 2
   as *"a pattern in how this program summarizes itself, not two accidents."*
3. **This application** — three separate miscounts in one report.

**And there is a sharp, useful result inside the third instance.** The
continuation instrument required the **exercise-matrix** totals to be derived
mechanically and checked to sum to seven. **That instruction worked exactly
where it was pointed**: the matrix is correct at close (6+1+0+0=7), correct at
the gate (5+2+0+0=7), and correct in its additive change table. **Every one of
the three errors is in a count the instruction did not name** — a commit tally,
a limb tally, and a defect-class tally.

**The mechanical-derivation requirement is therefore demonstrated to work and
demonstrated not to generalize.** A per-count instruction protects that count
and nothing else. That is evidence about the program's verification practice —
not about Draft v6, which has no provision governing how a validator tallies its
own report — and it is recorded here rather than as a method defect for exactly
that reason.

## 4. What this record does not do

It does not edit the completion report; it does not restate the report's
findings; it does not disposition anything; it does not propose a Draft v7
change; and it does not treat the three errors as bearing on Draft v6's
validation result. **The report's classifications, defects, gaps, limitations,
closure result and advancement state are unaffected**, and Development's
verification found no error in any of them.

**Related records:**
`draft-v6-participant-validation-completion-report.md` (the record these
corrections attach to); `stage-11-exercise-matrix-reconciliation.md` (the
second episode); `fd-0031` §4 Deficiency 2 (where the pattern was first named);
`fd-0034` §2.5.
