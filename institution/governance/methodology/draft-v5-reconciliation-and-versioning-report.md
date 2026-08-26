# A10 Draft v5 Reconciliation & Versioning Completion Report

**Classification: Institutional Record** — completion report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office under `fd-0029`.

- **Prepared:** 2026-08-26.
- **Draft v5 exists**, at a new governed path, classified **PROVISIONAL DRAFT —
  UNTESTED AS A VERSION**. Applications: 0.
- **Drafts v1, v2, v3 and v4 are unmodified**, verified before and after.
- **A10 is now semantically determined and textually reconciled** — in Draft
  v5. Draft v4's text still carries the ambiguity, deliberately.

---

## 1. Stage execution determination

**The execution is complete.** Draft v5 exists at a new governed path, built
from Draft v4 as its direct textual baseline, applying the prepared `fd-0028`
A10 reconciliation at six of the seven permitted locations and nothing else.
The version traceability record exists; the integrity record exists; all four
historical drafts verified byte-identical before and after; the prepared
validation package was reassessed and **reused rather than redesigned**.

**The substantive result:** the ambiguity that two faithful readings of one
paragraph produced is now settled **in the method's own text**, in a version
that says so and in a version that does not — because the version that does not
is the record of what the method said before the determination.

**What this execution did not do:** validate anything; apply Draft v5 to any
subject; run a replication; reopen Stage 7, any disposition, or any `fd-0026`
determination; modify any earlier draft; or create Draft v6.

**One thing it did do beyond the prepared wording**, flagged rather than
absorbed: Instrument 5's recording rules gained the four per-category recording
facts on the trail row (§11, §25). It is recorded at `fd-0029` §4 Deficiency 3
so the Founder Office can strike it.

## 2. Starting and ending repository SHAs

| Point | SHA | Note |
| --- | --- | --- |
| Start | `b4915ef8aee75680d2c49360d71de8c5a9c8bfa2` | `main`, clean, parity with origin |
| Commit A | `1875610` | `fd-0029`; instrument preserved; preservation record; registry, manifest, index |
| Commit B | `d8a86d0` | Draft v5; traceability; integrity record; the v4 integrity and reconciliation records resolved; manifest, index |
| Commit C | this report's commit | Validation package retargeted; this report; manifest, index |

`main` throughout; no unrelated work touched.

## 3. Draft v1 preservation verification

| Check | Result |
| --- | --- |
| **Pre-construction** | **PASS** — byte-identical to `6fb2fb8448ca19577f1d0c53830ed52597ddf72e7a9b98a5ab2a10c02c4a9a73` |
| **Post-construction** | **PASS** — unchanged |
| Commits on path | **1** (`076440c`) |

## 4. Draft v2 preservation verification

| Check | Result |
| --- | --- |
| **Pre-construction** | **PASS** — byte-identical to `9e2976e1d98f00771f2d57dbcc70d25727c309b21a7870b718b715448cda5d4b` |
| **Post-construction** | **PASS** — unchanged |
| Commits on path | **1** (`9659fbb`) |

## 5. Draft v3 preservation verification

| Check | Result |
| --- | --- |
| **Pre-construction** | **PASS** — byte-identical to `04fd02c7ec80b457877f2de0363ce90e961bc370e019e945634d4720d379f89f` |
| **Post-construction** | **PASS** — unchanged |
| Commits on path | **1** (`d738d7e`) |

**Draft v3 remains the last version any application has used.** Nothing in this
execution changes that.

## 6. Draft v4 preservation verification and historical status

| Check | Result |
| --- | --- |
| **Pre-construction** | **PASS** — byte-identical to its Stage 9 digest `3137da8c1f37bde26abb3c5d034bcd3858f6bb610d49c9047697136673c9c994` |
| **Post-construction** | **PASS** — unchanged |
| Commits on path | **1** (`240ccf9`) |
| Opened for writing at any point | **No** |

**Its status is unchanged: PROVISIONAL DRAFT — UNTESTED AS A VERSION.**

**Its historical meaning, now recorded in three places** — its own integrity
record, Draft v5's header, and the traceability record: Draft v4 is the
**Stage 9 consolidation version whose text still contains the A10 ambiguity
`fd-0028` later resolved**. It was **not rewritten to agree retrospectively
with that determination**, and that is deliberate: without a version that still
carries the ambiguity, the determination's effect would not be legible and the
Stage 5/Stage 6 divergence would look like a defect in the applications rather
than in the text.

Draft v4 is **superseded as the current draft and as no record** (MF v1 §6.5).

## 7. Draft v5 path, version identity, status, and digest

| Field | Value |
| --- | --- |
| **Name** | Huerta Group Organizational Diagnostic — Generation One, Draft v5 |
| **Path** | `institution/governance/methodology/organizational-diagnostic-generation-one-draft-v5.md` |
| **SHA-256** | `d178024b3585bb6273106bfe39daf574794d99ebc14d9ad750da5c8d2f75635c` |
| **Size** | 104,402 bytes · 1,594 lines (Draft v4: 95,951 · 1,488) |
| **Status** | **PROVISIONAL DRAFT — UNTESTED AS A VERSION** |
| **MF v1 status** | §5.1 *draft*, produced under §6.4 as a new version |
| **Authorization** | `fd-0029`; sole substantive authority `fd-0028` |
| **Reason for the version** | Draft v4's consolidation **plus** the A10 Reading A reconciliation. Nothing else |
| **Applications** | **0** |

Recorded in full at
[`organizational-diagnostic-draft-v5-integrity-record.md`](organizational-diagnostic-draft-v5-integrity-record.md),
kept separately from the draft so neither alters the other.

## 8. Draft v4 → Draft v5 version relationship

**Draft v4 is the direct textual baseline.** Draft v5 is Draft v4 with the
bounded A10 reconciliation applied and nothing else changed.

- **Twelve diff hunks across six locations**, all within the seven permitted.
- **226 changed lines** out of 1,594 — and of those, the substantive
  methodology change is confined to A10, Instrument 5 and A20.
- **Sole substantive authority: `fd-0028`.** Every difference is traced to it at
  Draft v5 Part D §D6 and at `draft-v5-a10-reconciliation-traceability.md` §3.
- **Draft v5 supersedes Draft v4 as the current draft and no version as a
  record.** The version chain now holds two untested versions and three
  historical ones, and the tested text remains **Draft v3**.

## 9. Exact changed locations

| # | Location | Nature |
| --- | --- | --- |
| 1 | **Header** | Version identity, reason, the five things Draft v5 is not, the Draft v4 baseline and digest, evidence status, freeze and amendment |
| 2 | **A10 — *Trail-first procedure*** | Rewritten: one paragraph becomes six |
| 3 | **A10 — *Observation preference*** | One sentence added |
| 4 | **Instrument 5 — recording rules** | Extended: per-category recording facts on the trail row; truthful use of the three sufficiency values |
| 5 | **A20 — the A10 limitation** | Rewritten from *unresolved* to *carried through Draft v4, and since determined* |
| 6 | **Part C** | Two version-reference corrections |
| 7 | **Part D** | §D0 clarified; the carried-forward line marked as Draft v4's record; new §D6 |

**Verified byte-identical to Draft v4:** A0–A9; A11–A19; A20 apart from the A10
paragraph; Part B's global instrument rules; Instruments 1, 2, 3, 4, 6, 7, 8, 9
and 10; Part C apart from two references; and **Part D §D2–§D5**.

## 10. A10 clause-by-clause conformance to `fd-0028`

The replacement is the prepared text at
`a10-determination-reconciliation-record.md` §3.1, applied **verbatim** —
verified by whitespace-normalized comparison of the prepared block against the
constructed draft.

| `fd-0028` requirement | Where Draft v5 carries it |
| --- | --- |
| Trail-first means work discovered from evidence of the last actual instance **before** a described process is accepted | A10 ¶1, opening sentence |
| The four items are **trail-source categories** | A10 ¶1, "The trail is sought across four **source categories**" |
| **Not** four mandatory conjunctive limbs | A10 ¶1, closing sentence, in those terms |
| "As available" = the four-fact standard per materially relevant category | A10 ¶2 — appears to exist · reasonably accessible · actually obtained · why not |
| Materially relevant and **reasonably accessible within the authorized boundary** | A10 ¶2, first sentence |
| No convenience omission | A10 ¶2 — "never dropped because another category already produced a plausible trail" |
| Prior familiarity is not trail evidence | A10 ¶2, cross-referenced to A17 rule 6 |
| The five performance conditions | A10 ¶3, as five clauses of one sentence |
| The procedure may be performed with gaps | A10 ¶3, "It may be performed with evidentiary gaps remaining" |
| A missing source affects sufficiency, not validity of the procedure | A10 ¶4 |
| The missing source and its reason stay visible | A10 ¶4 |
| Anti-inference — silence is not agreement | A10 ¶4, final sentence |
| Procedure performed ≠ evidence sufficient | A10 ¶5 |
| A18 decides advancement; the permitted state named | A10 ¶5, verbatim as the determination states it |
| Walkthrough is not a universal gate; obtain-or-record for load-bearing work | A10 ¶6 |
| Stakeholder evidence required elsewhere is unaffected | A10 ¶6, final sentence |
| Observation stays a preference, not a fifth limb | A10, *Observation preference*, added sentence |

## 11. Instrument 5 reconciliation

**Two parts, and they are not equally authorized.**

**(a) The sufficiency marker — the prepared wording, applied.** The three
existing CS-17 values are defined as `fd-0028` §2.5 defines them: *completed*
where the materially relevant categories were obtained and no material gap
remains; *completed with named gaps* where the procedure was performed, one or
more materially relevant categories were unavailable or unobtained, and the
remaining trail still supports a meaningful workflow representation; *blocked by
insufficient evidence* where the available trail is too incomplete to support
one. With the guard: **"An artifact-derived or partial trail is not marked
*completed* automatically**, and the marker never reports the procedure's
completion in place of the evidence's sufficiency."

**(b) The per-category recording facts — an addition beyond the prepared
wording.** The trail row now records, for each materially relevant trail-source
category, whether it appears to exist, whether it is reasonably accessible,
whether it was obtained, and why not where it was not.

**Why (b) was made, and why it is flagged.** `fd-0028` §2.2 requires those four
facts recorded; the prepared reconciliation placed them in A10 only; Instrument
5 is the form on which workflow evidence is actually recorded, so a recording
requirement living only in A10 has no place to land. It was made in the
**recording rules and not the minimum-field list** — the more conservative of
the two available placements — and **no minimum field was added to any
instrument**. It is nonetheless beyond the prepared text, is recorded at
`fd-0029` §4 Deficiency 3, and **can be struck without disturbing anything
else**.

**No new instrument, evidence class, hierarchy, score or maturity construct was
introduced**, and Instrument 5's minimum fields, purpose and stage are
unchanged.

## 12. A20 reconciliation

*An ambiguity carried forward unresolved* becomes ***An ambiguity carried
through Draft v4, and since determined***. It keeps the four forms, keeps the
divergence between the two authors, names `fd-0028`, records A10 as reconciled,
and states that **neither author applied the method incorrectly** and that the
determination "does not make one of them retrospectively right."

**One sentence was added beyond the prepared A20 text**, and its necessity is
direct: *"What the determination did not do is test anything: the reconciled A10
carries Founder Office semantic authority and no application evidence, and
A10's observation limb remains unexercised."* Without it, a limitations section
that had disclosed A10 as unresolved would now disclose it as determined and say
nothing about whether the determined rule works — which is exactly the
conflation `fd-0029` §2.5 forbids.

**Direct necessity to the determination:** left unchanged, A20 would state that
**this** version leaves A10 unresolved, which is false of this version.
`fd-0028` §2.9 also requires A10 removed from the unresolved set on
reconciliation while its historical provenance is preserved.

**A20's other limitations are untouched** — the observation-dependent tests, the
once-exercised procedures, the single-participant evidence base, the
limitations Draft v4 introduced. None was revised, softened, or removed.

## 13. Part D reconciliation

- **§D0** now states that **§D6 traces this version to Draft v4** and that
  **§D1–§D5 are Draft v4's own traceability, preserved unaltered** and to be
  read as statements about Draft v4. *Necessity:* without it, §D1–§D5 read as
  claims about Draft v5, which they are not.
- **The carried-forward line** becomes "Carried forward unresolved **at Draft
  v4's construction**," records that the matter has since been determined and
  reconciled with a pointer to §D6, and states that **the line is Draft v4's
  record and stands as written**. *Necessity:* the prepared text at §3.4,
  adapted to a new version; unchanged it asserts A10 is unanswered in a version
  where it is not.
- **§D6 is new** — the location-by-location table, the statement that everything
  else is carried byte-for-byte, and the statement of what the reconciled A10
  carries and does not. *Necessity:* a new version must trace to its baseline;
  `fd-0029` §2.3 permits "strictly necessary traceability/version-history text."
- **§D2–§D5 are byte-identical to Draft v4**, verified.

**Part D was not used to revise anything else.** No class was restated, no count
was adjusted, and Draft v4's seventeen-item table is untouched.

## 14. Version/status-header reconciliation

The header now carries: the version name; **the reason for the version stated
as the whole of the reason** — Draft v4's consolidation plus the A10
reconciliation; the five things Draft v5 is **not** (not a new discovery
generation, not a reopening of Stage 7, not a validation result, not an
established method, not externally validated); `fd-0029` as authorization with
the §6.4 basis stated; **Draft v4 named as the baseline** with its digest and
its preserved historical meaning; the earlier baselines with Draft v3 marked as
the last text applied to a subject; traceability pointing to §D6; the
evidence-status paragraph rewritten to say that changed elements carry **Founder
Office semantic authority, historical rationale and Stage 5/6 development
evidence, and no behavioural validation whatever**; and the freeze and amendment
lines — the amendment line now recording that **this rule produced this
version**.

## 15. Strictly necessary cross-reference and traceability edits

Three, each named rather than folded into the substantive changes:

1. **Part C — the untested bullet.** "Draft v4 has been applied to nothing" →
   "Draft v4 was applied to nothing, **and neither has Draft v5 been**."
   *Necessity:* this is the sentence establishing that the version you are
   reading has no application behind it. Unchanged, Draft v5 would carry no
   statement that it is itself untested — the precise claim `fd-0029` §2.5
   requires it to make.
2. **Part C — the maximum-claim sentence.** Gains "**reconciled to one Founder
   Office methodology determination**." *Necessity:* this sentence is the bound
   every other record quotes; silent about the reconciliation it misdescribes
   this version's lineage. **No claim was strengthened.**
3. **A20 — the prepared phrase "as this version was constructed"** rendered as
   **"through Draft v4."** *Necessity:* the prepared wording was written for an
   in-place edit; in a new version the phrase would point at the wrong version.

**Nothing else in Part C changed**, and no cross-reference edit touched
methodology substance.

## 16. Confirmation that no unrelated methodology substance changed

**Confirmed by direct comparison, not by assertion.** The following are
**byte-identical** between Draft v4 and Draft v5:

- **A0 through A9** — including A2's evidence classes and the source-kind rule,
  A3's eleven steps, A4's identity-of-record output, and A9's source roles.
- **A11 through A19** — including A17's seven rules and A18 in full.
- **Part B's global instrument rules** — including CS-17's three sufficiency
  values and the placement rule.
- **Instruments 1, 2, 3, 4, 6, 7, 8, 9 and 10** — nine of ten, in full.
- **Part D §D2 through §D5.**

**Not reopened, and verified absent from the diff:** the seventeen Stage 7
change-set items; their dispositions; the six `fd-0026` determinations; Draft
v4's terminology settlements; instrument architecture; method progression;
method maturity rules; external-validation doctrine.

**Scope prohibitions, all confirmed:** no new instrument; no new evidence class;
no evidence hierarchy; no scoring; no maturity construct; no Draft v6; no
validation begun.

## 17. Stage 5 and Stage 6 historical preservation

| Record | Verification |
| --- | --- |
| `hgp-internal-application-stage-5.md` | **1 commit on path, unmodified** |
| `stage-6-second-author-result/` (7 files) | **All seven per-file digests match** `stage-6-second-author-sealed-result.md` §1; 1 commit on the directory |
| `stage-6-replication-comparison.md` | unmodified |

**Neither is retrospectively classified as correct or incorrect** — not in this
report, not in Draft v5's A20, not in the traceability record. Stage 5 was
conducted under the then-ambiguous wording and is consistent with what later
became Reading A; Stage 6 was conducted under the same wording and is consistent
with what was then a faithful Reading B. **That Stage 5's reading was later
adopted is a coincidence of sequence, not a verdict on its author.**

Their divergence remains the methodology-development evidence explaining why
`fd-0028` became necessary, and Draft v5's A20 says so in the method's own
voice.

## 18. Materially unchanged elements inheriting prior internal evidence

Everything at §16, class **UNCHANGED_WITH_PRIOR_INTERNAL_EVIDENCE** — carrying
**exactly the qualification it carried in Draft v4 and no more**. For the
seventeen Stage 7 items that means what Draft v4's traceability recorded: **eight
new structural treatments carrying no validation at all**, and **eight modified
elements requiring revalidation**. Draft v5 improves none of that, and this
report does not restate those counts as though a new version refreshed them.

The underlying evidence base is unchanged: one self-application dry run; one
stakeholder-evidence application with one clarification round; one internal
application to a subordinate unit; one second-author replication of it. **One
organization and one of its units. Two authors.** Every application performed by
a diagnostic team with material prior involvement.

## 19. A10-related elements remaining unvalidated as Draft v5 behaviour

**All of them.** The reconciled A10, the *Observation preference* boundary,
Instrument 5's recording facts and sufficiency rule, and A20's rewritten
limitation carry:

- **Founder Office semantic authority** (`fd-0028`);
- **their historical rationale** — the ambiguity was real and demonstrated;
- **Stage 5 and Stage 6 development evidence** — the divergence that made the
  determination necessary;

and **no behavioural validation of any kind.** No application of the reconciled
text exists. Specifically unexercised:

- whether an applier who did not draft it reads the categories as categories;
- whether the four per-category facts are actually recorded, or quietly skipped
  where a category is obviously absent;
- whether *completed with named gaps* and *blocked by insufficient evidence*
  discriminate in practice, or collapse to one value;
- whether *A10 performed + gaps + A18 not satisfied* is ever actually recorded
  when it occurs;
- whether the no-convenience-omission rule survives contact with a corpus large
  enough to make one category sufficient-looking on its own;
- and **A10's observation limb, which has never been exercised in any version of
  this method.**

## 20. Draft v5 overall maturity classification

**PROVISIONAL DRAFT — UNTESTED AS A VERSION.**

Not a tested baseline. Not "validated through use." Not externally validated.
Not independently validated. Not standardized. Not Method Library ready. Not an
established method. Not a new discovery generation. Not a reopening of Stage 7.
Not a validation result.

**A determination settles what a rule means. It does not establish that the rule
works**, and `fd-0029` §2.5 forbids describing Draft v5 as tested because the
semantic question is resolved. **Repository checks are not validation either.**

## 21. Repository validation results

| Gate | Result |
| --- | --- |
| `npm run verify` before Commit A — nine corpus validators, lint, type check, build | **PASS** — all gate steps green |
| `npm run verify` before Commit B | **PASS** — all gate steps green |
| `npm run verify` before Commit C | recorded in the return message |
| Decision-history registration (`fd-0029`) | **PASS** — determinations registry at 29 records |
| Manifest, index, cross-reference, provenance, version relationship, traceability, integrity records | **PASS** — carried by the validators above |
| Drafts v1–v4 digests, before and after | **PASS** (§3–§6) |
| Stage 5 / Stage 6 unchanged | **PASS** (§17) |
| Diff inspection against Draft v4 for unauthorized changes | **PASS** (§9, §16) |

## 22. CI status

Recorded in the return message with its actual result. No repository
modification was made to manufacture a workflow run.

## 23. Prepared validation-package compatibility assessment

**The package remains substantively valid for Draft v5 and was not
redesigned.** Six questions, per `fd-0029` §2.7:

| Question | Finding |
| --- | --- |
| Non-authoring requirement still appropriate? | **Yes, and it matters more.** The reconciled A10 was drafted by the office that would otherwise validate it |
| Subject criteria still appropriate? | **Yes, unchanged** — and HGP now fits better: Stage 6 found **correspondence not held in the repository**, a genuine *appears not to exist* case, which is what the four per-category facts need in order to be exercised at all rather than answered "obtained" four times |
| All changed Stage 7/8 elements still require testing? | **Yes, every one.** Draft v5 changed nothing about them |
| Does it adequately exercise A10 Reading A now that it is determinate? | **Substantially yes.** A10 Reading A, the recording fields, Instrument 5's three states and *performed ≠ sufficient* were already targets; two observables were sharpened |
| Any target changed solely because Draft v5 replaces Draft v4? | **The freeze gate** — it must pin Draft v5's digest and must not accept Draft v4's |
| Any package language still assuming A10 is unresolved? | **Yes, two places**, both false once `fd-0029` was made; both corrected |

**What was deliberately left alone:** the objective's scope, the subject
assessment and its two-candidate constraint, the non-authoring disclosure
controls, the freeze controls other than the gate, the success criteria, and
what the validation would not establish. `fd-0029` §2.7 directs reuse over
redesign, and the version change did not require them.

## 24. Validation-package references updated from Draft v4 to Draft v5

Recorded at `draft-v4-validation-package.md` §10. In summary:

1. **Title and header** — retargeted, with the reassessment result stated.
2. **The prerequisite** — "the A10 reconciliation is prepared and not applied"
   struck as **satisfied**, with Draft v5's digest named.
3. **The objective** — one application of **Draft v5**, testing the
   consolidation **and the reconciled A10**.
4. **§3** — the non-authoring requirement extended to name Draft v5.
5. **§4** — retitled; two observables sharpened (prior familiarity named; the
   recording fields located on Instrument 5's trail row).
6. **§5.1** — the freeze gate rewritten to Draft v5's digest, with **Draft v4
   expressly not the candidate**; §5.2 retitled.
7. **§7** — one line added: an application testing the reconciled rule is not
   validation *of the determination*.
8. **§8** — the prohibitions updated to Draft v4/v5 and Draft v6.

**The file path was deliberately not renamed** — it retains
`draft-v4-validation-package.md` so its git history and manifest identity stay
continuous. The document says so at its head.

## 25. Genuinely new semantic conflict encountered

**None.** The `<if_conflict>` branch was not taken. Applying the prepared
reconciliation exposed no semantic conflict outside the bounded A10 consequence,
and no governing sources were found in tension.

**Three matters are recorded rather than treated as conflicts**, because none
of them required a decision `fd-0028` had not already made:

1. **The Instrument 5 addition** (§11(b)). Not a conflict — `fd-0028` §2.2
   requires the facts recorded and Instrument 5 is where workflow evidence is
   recorded — but it is **beyond the prepared wording**, and it is flagged at
   `fd-0029` §4 Deficiency 3 so it can be struck.
2. **The A20 validation sentence** (§12). An addition of the same kind, made
   because a limitations section that reports a determination without reporting
   that the determination tested nothing would mislead the reader it exists for.
3. **CS-10's unset scope bound**, unchanged and still open. The reconciled A10
   leans on A17 rule 6 for its familiarity guard, so **rule 6 now has a second
   consumer** — a bound on it would reach A10. The ambiguity is unchanged in
   substance; only its reach has grown. Recorded, not resolved.

## 26. Recommendation on validation-package readiness

**The prepared bounded validation package is ready for Founder Office
authorization.** Its one outstanding prerequisite — the unapplied A10
reconciliation — is satisfied: the candidate under test is Draft v5, whose A10
states Reading A, at a pinned digest with a freeze gate that names it.

**What authorization would commission**, and only this:

> One read-only application of Draft v5, by an authoring context that did not
> draft it, to **Huerta Group Publishing** at a pinned current baseline, with
> participant evidence sought from the Founder Office as HGP's accountable
> authority, with FD-V1 §6.5 material encountered at its boundary, with the
> Stage 5 and Stage 6 findings withheld and named as withheld, and with the
> validator's prior-involvement and familiarity disclosure frozen by commit
> before any subject evidence is read.

**Two things the Founder Office should weigh before authorizing**, neither of
which Development can resolve:

1. **Whether the Instrument 5 addition (§11(b)) stands.** If it is struck, the
   validation's recording-fields observable changes with it, and it is cheaper
   to strike now than after an application has been run against it.
2. **Whether HGP remains an acceptable subject** given two prior diagnoses. If
   not, `draft-v4-validation-package.md` §2.3 records the consequence: **CS-14
   and CS-02's second limb cannot be validated internally at all**, and should
   be recorded as unvalidated rather than tested against a subject that cannot
   exercise them.

**Recommendation is not authorization.** Nothing here begins, schedules, or
commits to an application.

---

**Stopping here for Founder Office review.** No Draft v5 validation, no
application to any subject, no further replication, no external application, and
no Draft v6 will proceed without separate Founder Office authorization.
