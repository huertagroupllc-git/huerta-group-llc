# Huerta Group Organizational Diagnostic — Generation One Stage 11 Draft v5 Validation Finding & Correction Disposition Report

**Classification: Institutional Record** — completion report (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office under `fd-0031`.

- **Prepared:** 2026-08-26.
- **All seven findings accepted. Five of seven proposals narrowed.** Two
  questions reserved to the Founder Office. **Nothing applied; no Draft v6.**
- **Draft v5 unchanged**, verified before and after.
- **One Stage 10 corpus discrepancy found at the integrity gate, and half of it
  is Development's own** (§5).

---

## 1. Stage 11 execution determination

**Stage 11 is complete.** The authoritative Stage 10 corpus was retrieved from
the repository; the integrity gate was run and returned one discrepancy; the
seventeen-item matrix was reconciled additively under the four fixed
definitions; every finding was dispositioned individually and every proposal
separately; the Part B non-compliance received the six-question analysis; the A2
recurrence issue was dispositioned at the narrowest supported level without
touching A2's architecture; the eight participant questions and PQ-6 were
preserved unanswered; and a consolidated **unapplied** change set of seven
bounded items was assembled.

**The substantive result:** the Stage 10 corpus is now determinate. Every finding
has a governed disposition with its evidence, its affected provision, its
semantic effect and its revalidation consequence; **five proposals are narrower
than proposed** and one is **stronger**; and the two questions Development cannot
answer are separated out rather than resolved by drafting.

**What Stage 11 did not do:** modify Draft v5; create Draft v6; apply a
correction; answer a participant question; infer PQ-6; introduce any evidence
ranking, strength, weighting or hierarchy; treat any unexercised provision as a
defect; or elevate Draft v5's maturity.

## 2. Starting and ending repository SHAs

| Point | SHA | Note |
| --- | --- | --- |
| Start | `b2e8132df6d1e5eda971ec0db59565009c37c2c8` | `main`, clean, parity with origin |
| Commit A | `cc37f96` | `fd-0031`; Stage 11 instrument preserved; preservation record |
| Commit B | `748a0e5ebd3573f4a45940f90d0abde13be9c901` | Matrix reconciliation; finding and proposal dispositions; change set |
| Commit C | this report's commit | Recorded in the return message with the push and CI result |

`main` throughout. **No draft file was modified. HGP was not touched at all.**

## 3. Draft v5 freeze / integrity verification

| Check | Result |
| --- | --- |
| **Before Stage 11 analysis** | **PASS** — `d178024b3585bb6273106bfe39daf574794d99ebc14d9ad750da5c8d2f75635c` |
| **Before final return** | **PASS** — unchanged |
| Commits on path | **1** |

**Drafts v1–v4 unchanged. Stage 10 records unchanged. HGP at `e28f12a`,
untouched.**

## 4. Authoritative Stage 10 corpus retrieved

Retrieved directly from the repository, not reconstructed:

| Record | Carries |
| --- | --- |
| `stage-10-draft-v5-validation-application.md` | The application; §8 the authoritative eighteen-row exercise table; §9 the eight questions; §10 the seven findings with their evidence; §11 the seven proposals |
| `stage-10-method-findings-and-proposed-corrections.md` | Findings and proposals in summary, with Development's two pre-disposition flags |
| `stage-10-participant-questions.md` | The eight questions verbatim, and PQ-6's status |
| `stage-10-draft-v5-internal-validation-report.md` | The forty-six-section return |
| `stage-10-validator-independence-statement.md`, `stage-10-evidence-access-and-isolation-record.md` | The limitations that constrain interpretation (§9) |
| `organizational-diagnostic-generation-one-draft-v5.md` | The frozen method and its digest |

**The governed disposition vocabulary was also retrieved rather than assumed:**
`fd-0025` §2.4's five values — ACCEPT · ACCEPT WITH MODIFICATION · DEFER ·
DECLINE · DUPLICATE/SUBSUMED — confirmed against their use across all thirty
Stage 7 records. **No Stage 11-specific class was created.**

## 5. Corpus consistency verification

**Agreement confirmed** on: finding count and identifiers (**MF-1…MF-7**, seven);
proposal count and identifiers (**PC-1…PC-7**, seven); **finding-to-proposal
relationships** (strict 1:1, stated identically in two records);
participant-question count and identity (**PQ-1…PQ-8**, eight); **PQ-6 status**
(unresolved, governing the A17 rule 7 closure condition); and the **per-item
exercise classifications**, which exist in one authoritative table, complete at
eighteen rows.

### ⚠ Stage 10 Authoritative Corpus Discrepancy

**The derived tallies contradict the table they derive from, in two records.**

- The application's §8 summary sentence says **"twelve EXERCISED"** and sums to
  **16**.
- The Stage 10 report's §27 table says EXERCISED **12**, names twelve items, and
  its column sums to **16 under a heading reading "Seventeen-item exercise
  matrix."**
- **CS-17 is EXERCISED in the authoritative table and appears in neither
  tally.**

**Development's error is the larger half.** The applier's summary was wrong by
one; Development reproduced the omission in §27 and again in §28's prose, and
returned it without adding up the column. That should not have survived the
Stage 10 return, and it is recorded rather than quietly fixed.

**Which disposition work it blocks: none.** The finding and proposal
dispositions depend on identifiers and relationships, which agree exactly. The
matrix reconciliation rebuilds from the per-item evidence in any case, as
`fd-0031` §2.3 requires. **Development is not choosing a version by preference:**
the summary is *derived from* the table, contradicts its own source, and carries
no independent evidence. **That assessment is Development's judgement and is
stated as such** — if the Founder Office assesses it as blocking, the
dispositions below rest on evidence unaffected by it.

**This is the second count defect in this program.** `fd-0026` §2.7 records the
first — Stage 7's five-versus-six — and directed it preserved rather than
repaired. Same failure mode, different stage, different author, again caught
only downstream. **Two instances is a pattern in how this program summarizes
itself**, and it is recorded as one.

## 6. All seven validation findings — inventory

| ID | Affected provision | Kind |
| --- | --- | --- |
| **MF-1** | A0 terminology settlement | Ambiguity — an enumeration presenting itself as exhaustive omits the *Client-Stated* class |
| **MF-2** | A2 classes and rule 6 | Representation failure — no recurrence or observer-independence axis, which A2 rule 6 itself reaches for |
| **MF-3** | A18 disclosure item 3 | Representation failure — the shared-source mark reports zero where its risk is total |
| **MF-4** | Instrument 1 *opposing account* | Ambiguity — the field is narrower than A2 rule 6's *"participant, source, or side"* |
| **MF-5** | Part B global rules; A3 step 10 | **Unworkable requirement** — literal compliance not achieved by the first non-authoring applier |
| **MF-6** | A10 third source category; A20 | Ambiguity — correspondence has no locus, so its **first** per-category fact is participant-dependent |
| **MF-7** | A15 / Instrument 9 preceding question | Ambiguity — no evidentiary standard for a terminating question, with an asymmetric incentive |

## 7. All proposed corrections — inventory

**PC-1** complete A0's settlement · **PC-2** disclose A2's missing axis (author
recommends declining the larger change) · **PC-3** require a reason at a zero
count; optionally extend the mark · **PC-4** rename to *opposing source* or add a
parallel field; retain the register-wide mechanism · **PC-5** split Part B's
header requirement · **PC-6** add correspondence to A20; note the unknown state
in A10 · **PC-7** state the preceding question's evidentiary standard and record
the class that fired it.

## 8. Finding-to-proposal relationship map

**Strict 1:1 — PC-*n* derives from MF-*n*, for n = 1…7.** Verified identically in
both records that state it. **No finding has two proposals; no proposal has two
findings.**

**Stage 11 introduces one cross-link, recorded rather than silent:** PC-3's
second limb is **DUPLICATE / SUBSUMED into PC-4**, because both raise
record-versus-record opposition and it should be decided once.

## 9. Stage 10 limitations constraining interpretation

Per-finding at `stage-11-finding-and-correction-dispositions.md` §1. In summary:

- **MF-1, MF-3, MF-4** — **no material limitation.** All three are textual
  properties of Draft v5, establishable by reading it.
- **MF-2** — **one instance**, in a subject with an unusually developed evidence
  vocabulary. This constrains what may be built on it, and it did: the
  structural cure was declined.
- **MF-5** — **the zero-session case only.** The ~500-line duplication follows
  from an application where the access statement was re-derived zero times. With
  sessions, instruments may fall under *different* statements and repetition is
  not duplication. **The finding is untested for the multi-session case**, which
  is why V6-05 carries a re-derivation clause.
- **MF-6** — **subject-shaped.** The subject's durable decisions are files by
  constitution. That the method names no locus is textual and holds regardless;
  how often it bites is not established by one subject.
- **MF-7** — **the system was behind the evidence boundary**, so the applier
  could not have observed the capability in any case. The finding is about the
  method's silence, not a failure to look.

**A limitation constrains the claim, it does not invalidate the finding**
(`fd-0031` §2.9). All seven were accepted.

## 10. Original seventeen-item exercise matrix

**Preserved unaltered** at `stage-10-draft-v5-validation-application.md` §8:
thirteen rows plain EXERCISED; CS-14 "EXERCISED (one branch)"; CS-03, CS-06,
CS-09 PARTIALLY EXERCISED; the A10 reconciliation EXERCISED. **Its summary
sentence and the Stage 10 report's §27 remain as written, discrepancy
included** — the `fd-0026` §2.7 precedent.

## 11. Stage 11 reconciled exercise matrix

| Classification | Count | Items |
| --- | --- | --- |
| **EXERCISED** | **12** | CS-01, CS-02, CS-04, CS-05, CS-08, CS-10, CS-11, CS-12, CS-13, CS-15, CS-16, **CS-17** — plus the A10 reconciliation |
| **PARTIALLY EXERCISED** | **5** | CS-03, CS-06, **CS-07**, CS-09, **CS-14** |
| **NOT EXERCISED** | **0** | — |
| **NOT EXERCISABLE INTERNALLY** | **0** | — |
| | **17** | **The column sums.** |

**A caution against a false reading.** Stage 11's EXERCISED count is twelve —
the same number Stage 10's tally claimed, **but not the same twelve.** CS-17
enters; CS-07 and CS-14 leave. **The matching number is a coincidence and must
not be read as the tally having been right.**

Full reconciliation, per item, with evidence:
`stage-11-exercise-matrix-reconciliation.md` §3.

## 12. Exercise-classification changes and reasons

**Two substantive reclassifications, both downward, both on the applier's own
evidence.**

**CS-07 — EXERCISED → PARTIALLY EXERCISED.** `fd-0026` §2.4 made the **absence
rule** part of the treatment: where identity authority is absent or conflicted,
the output is still required and must say so. **That condition did not occur** —
the subject has a settled answer — and the applier said exactly that: *"The
'still required when absent' limb was not exercised… reported rather than dressed
up."* Under `fd-0031` §2.3's *some but not all* definition, partially exercised
is correct. **The unexercised limb is NOT EXERCISED, not NOT EXERCISABLE
INTERNALLY** — a subject with unresolved identity authority could exist
internally; both present subjects happen to have charters.

**CS-14 — "EXERCISED (one branch)" → PARTIALLY EXERCISED.** First, Stage 10's
label **was not one of the four permitted values**. Second, and more important:
**the unexercised branch is the load-bearing one.** `fd-0026` §2.6 required A17
rule 5 to state a minimum binding principle *precisely so the method works when
the parent doctrine does not travel*. Stage 10 exercised the branch where the
doctrine **was** held. **The branch that motivated the entire change was not
tested — and it is NOT EXERCISABLE INTERNALLY**, because producing it requires
withholding Methodology Foundation v1 from a validator that could read it, which
the Stage 10 evidence-access record states in terms would have *"manufactured the
answer."*

**CS-17 — membership corrected.** Always EXERCISED in the table; dropped from
both tallies (§5).

**No classification moved upward. No condition was manufactured.**

## 13. Individual disposition — MF-1

**ACCEPT.** A0's enumeration of retained uses of "client" omits the evidence
class *Client-Stated* — the most frequent surviving use, required on every
material claim, and in neither of A0's two named categories. **No limitation
affects interpretation**; the incompleteness is readable from the text. Affected:
**A0**. Semantics: **clarifies**; no rule changes. Revalidation: **none**. No
Founder Office authority required — CS-16 authorized a terminology pass and this
falls inside it.

Full record, with the secondary observation preserved but expressly not
accepted: `stage-11-finding-and-correction-dispositions.md` §1.

## 14. Individual disposition — MF-2

**ACCEPT.** A2 has no recurrence and no observer-independence axis; the applier
needed the distinction and could only narrate it. **The strongest evidence is
internal to the method:** A2 rule 6's own final sentence reaches for
observer-independence without a place to record it. Limitation: **one instance**,
in a subject with an unusually developed evidence vocabulary — and that
limitation did work, in declining the structural cure. Affected: **A2 classes and
rule 6**; **A1's subject-scheme block**. Related: **MF-3**, the same gap from
A18's side. Semantics: **unchanged as dispositioned** — disclosure only.
Revalidation: **none**. Founder Office authority: **not for the disclosure; yes
for anything structural** (RQ-2).

**What the applier got right and this adopts:** A1's rule was followed exactly.
The subject's scheme was preserved as evolution evidence and **not substituted
in**, at the moment it was genuinely the better instrument.

## 15. Individual disposition — MF-3

**ACCEPT.** A18's shared-source mark reports **zero** in a records-only diagnosis
— at the moment every record shares a source with every other, which is the
maximum of the condition the mark exists to expose. The applier added an
explanation the method does not require and noted *"a less wary applier would
simply write 'zero.'"* Limitation: **none that weakens it** — the condition is
structural and any records-only diagnosis reproduces it. Affected: **A18 item
3**; **A2 rule 6**. Related: **MF-2**, **MF-4**. Semantics: **clarifies** (for
the accepted limb). Revalidation: **TARGETED**. No Founder Office authority
required.

## 16. Individual disposition — MF-4

**ACCEPT.** The *opposing account* field cannot hold record-versus-record
opposition, so four genuine contradictions had no home on the rows they oppose —
while A2 rule 6's own wording governs *"participant, source, or side."*
Limitation: **none**. Affected: **Instrument 1**; **A2 rule 6**. Related:
**MF-3** (rule 6's reach); **MF-5** (uniform repetition burying what differs).
Semantics: **clarifies** — the instrument catches up to its rule. Revalidation:
**TARGETED**; full testing of the field's discrimination needs participant
access. No Founder Office authority required.

**The applier's own framing is adopted:** *"a genuine ambiguity and not a
failure"* — the rule works; its instrument cannot express its full scope.

## 17. Individual disposition — MF-5

**ACCEPT — and it is the most consequential finding Stage 10 produced.** Literal
compliance required a ~50-line access statement repeated at ten instrument
heads, identical in all ten, burying the marker that varies. **The first
non-authoring applier of this method could not meet the requirement, and
recorded the deviation as a deviation.**

Limitation, stated because it bounds the finding: **established for the
zero-session case only.** With sessions the statement is re-derived and
instruments may fall under different statements, in which case repetition is not
duplication. Affected: **Part B global rules**; **A3 step 10's carriage
sentence**. Related: **MF-4** — the method names this failure mode in Instrument
1's rule and mandates it in Part B. Category: presentation and unworkable
requirement, **and author behaviour recorded but not held against the applier**,
the deviation being disclosed, reasoned and against its own interest. Semantics:
**unchanged** — delivery form only. Revalidation: **TARGETED, and it must include
an application with at least one session.**

## 18. Individual disposition — MF-6

**ACCEPT.** A10's correspondence category has no locus the method names or the
subject's records name, so **the first of its four per-category facts is itself
participant-dependent** — which A10 does not anticipate and A20's list does not
carry. Limitation: **subject-shaped** — the textual point holds regardless; the
frequency does not follow from one subject. Affected: **A10 third source
category**; **A20**. Semantics: **disclosure plus a clarification of an existing
state**. Revalidation: **none** for the A20 limb; **TARGETED** for the A10 note.
No Founder Office authority required.

## 19. Individual disposition — MF-7

**ACCEPT.** The preceding question — which terminates the whole test — fired on
**Client-Stated** evidence, and the method states no standard for it. The
second-order point is sharper still: **because "yes" is conservative and "no" is
not, an applier under time pressure has a standing incentive to answer "yes" on
thin evidence and stop.** Limitation: the system was behind the evidence
boundary, so the finding concerns the method's silence rather than a failure to
look. Affected: **A15**; **Instrument 9**. Semantics: **the recording limb, no;
the threshold limb, yes.** Revalidation: **TARGETED**. **Founder Office authority
required for the threshold limb** — RQ-1.

## 20. Separate disposition of every proposed correction

| Proposal | Disposition | What changed from the proposal |
| --- | --- | --- |
| **PC-1** | **ACCEPT** | Nothing — already the narrowest treatment |
| **PC-2** | **ACCEPT WITH MODIFICATION** | Disclosure accepted **in A20 only**; the applier's alternative placement inside A2 declined as unnecessarily close to the protected architecture; all structure declined, as the applier itself urged |
| **PC-3** | **ACCEPT WITH MODIFICATION** | Limb (a) accepted; **limb (b) DUPLICATE / SUBSUMED into PC-4**, so record-versus-record opposition is decided once |
| **PC-4** | **ACCEPT WITH MODIFICATION** | Rename accepted; **parallel field declined** (two places for one concept invites drift); PC-3(b) absorbed; register-wide mechanism **retained unchanged** as urged |
| **PC-5** | **ACCEPT WITH MODIFICATION** | Split accepted and **strengthened twice** — see §24 |
| **PC-6** | **ACCEPT** | Nothing; both limbs accepted |
| **PC-7** | **ACCEPT WITH MODIFICATION** | Recording limb accepted; **threshold limb DEFERRED** to RQ-1 |

**Totals: findings — 7 ACCEPT. Proposals — 2 ACCEPT, 5 ACCEPT WITH
MODIFICATION**, one carrying an internal DEFER and one an internal
DUPLICATE/SUBSUMED. **No proposal was accepted merely because its finding was**,
and **five are narrower than proposed.** The one that is broader — PC-5 — is
broader in the direction of *more* disclosure.

## 21. Part B non-compliance — literal Draft v5 requirement

At the head of **every** instrument, before its first row: the **access
statement** (A3 step 10), the **advancement-state declaration** in the method's
own words, and the **evidence-sufficiency marker with its reason** in prose. A3
step 10 independently requires the access statement *"carried into the header of
every instrument."*

## 22. Part B non-compliance — actual Stage 10 behaviour

At each of ten instrument heads: a **named reference** to the statement in force
(A3-O2), **plus the access determinations material to that instrument**, plus the
advancement-state declaration **in full**, plus the marker and its reason **in
full**.

**The applier stated this as a deviation, not as compliance.**

## 23. Part B non-compliance — why literal compliance was operationally defective

In a zero-session application the access statement is invariant: a two-pass,
four-condition table over eleven identified items and thirteen access
determinations, roughly fifty lines. **Ten identical repetitions is ~500 lines
whose only function is to separate each marker from the next** — burying the one
element that varies between instruments and that Part B's own rationale says the
reader must meet at the evidence.

**And the method names this failure mode itself**, in Instrument 1's
opposing-account rule: *"sixty identical fields bury the rows that differ."*
Part B mandates it.

## 24. Part B duplication analysis and bounded correction disposition

**Duplication: yes, conditionally.** The statement is held canonically at A3-O2
and is invariant **only where re-derived zero times**. Where sessions occur it is
re-derived after each, and instruments produced at different points may fall
under **different** statements — in which case repetition is not duplication.
**The duplication is a property of the zero-session case, not of the
requirement.**

**Non-duplicative mechanism available: reference plus exception-only
reporting** — cite the statement in force by name and date, and carry the
determinations material to *this* instrument. **Inheritance alone would not do:**
a bare pointer satisfies brevity and loses attribution.

**Disposition: ACCEPT WITH MODIFICATION**, strengthened twice beyond the
proposal, because `fd-0031` §2.5 says optimize for **conspicuous and
attributable**, not merely fewer lines — and the proposal as written optimized
for the second:

1. **The declaration and the marker stay in full at every head, always.**
2. **The access statement may be carried by reference only if the header also
   carries the determinations material to that instrument.** A bare pointer is
   insufficient. *(This is what the applier actually did; the proposal did not
   say so.)*
3. **Where the statement has been re-derived one or more times, each header must
   identify which re-derivation it falls under** — otherwise reference would
   silently attach the wrong statement in any application with sessions, the
   exact case Stage 10 could not test.

**`fd-0031` §2.5's warning was heeded:** the workaround was assessed, not
assumed correct, and was strengthened before acceptance.

## 25. A2 / PC-2 recurrence finding

**Accepted as a finding (MF-2).** A2 cannot represent recurrence or
observer-independence; the applier expressed the distinction by narration, which
works but is *"invisible to anyone scanning classes."* **The decisive evidence is
internal to the method:** A2 rule 6's own final sentence — *"account and record
share a source"* — is a statement about observer-independence made by a rule
whose model has nowhere to record it.

## 26. A2 non-ordering constraint analysis

`fd-0031` §2.4 forbids introducing evidence strength, reliability, credibility or
quality ranking, numerical weighting, preferential classes, ordering among
evidence kinds, or **implicit hierarchy through terminology.**

Every structural route Development can see runs into that list:

- A **recurrence scale** of the subject's kind (*Single Occurrence → … →
  Independently Corroborated*) is **ordinal on its face**.
- A **bare recurrence count** is factual and non-ordinal, but Stage 10's evidence
  is one instance — insufficient to justify adding structure to the evidence
  model, on the same discipline Stage 7 used to decline D-6 and D-7.
- An **observer-independence attribute** (*independent* versus *self-observed*)
  is descriptive in form but carries **implicit hierarchy through terminology** —
  every reader will take *independent* as better — which the prohibition list
  names explicitly.

**The narrowest treatment the evidence supports is disclosure**, and it does not
touch the architecture.

## 27. A2 recurrence correction disposition, and the residual returned

**Disposition: ACCEPT WITH MODIFICATION — disclosure in A20 only.** All
structure declined. **A2's non-ordering architecture is untouched.** Placement is
evidence-backed rather than preferred: Stage 10 demonstrated A20's list is
**load-bearing** — CS-13's entries changed the output of two instruments.

**`fd-0031` §2.4's stop rule did not fire**, because the deficiency *was*
dispositionable at the narrowest level without altering the architecture.

**But disclosure does not cure the deficiency**, and the report says so rather
than letting acceptance imply repair: a note in A20 does not make the distinction
visible in the register. **A partial treatment was accepted knowingly.** The
residue is returned as **RQ-2** (§37).

## 28. Eight unanswered participant questions — preservation status

**All eight preserved exactly, at `stage-10-participant-questions.md`, and
unanswered.** None was answered from repository evidence, from prior Founder
conversations, or by inference; **none was collapsed into a methodology
finding**, and Stage 11 created no finding that depends on an answer.

**What their unanswered status means** (`fd-0031` §2.10, and only this):

- **Validation completeness** — four of the five partially exercised items are
  partial because these questions are unanswered. Answering them would not
  validate anything by itself; **an application with participant access would.**
- **Subject-diagnosis closure** — see §29.
- **Participant-dependent validation evidence** — nil, and unchanged by Stage 11.
- **Future testing** — the questions identify precisely which conditions a
  participant-access application would need to meet.

## 29. PQ-6 unresolved closure condition

**Preserved unresolved.** *"What disposition should apply to the working material
this application produced about Huerta Group Publishing?"* — the A17 rule 7
custody agreement, which must be **agreed with the organization** and cannot be
supplied by the diagnostic team.

**Its consequence is unchanged by Stage 11**: the Stage 10 subject diagnosis
**may not be represented as an unqualified completed diagnosis**. It closed as an
application record; its work, outcome and preservation are unaffected.

**Stage 11 added working material of its own** — this report and the three
disposition records — **and that material falls under the same unresolved
condition.** Recorded rather than passed over: adjudicating a diagnosis does not
discharge the diagnosis's custody condition, and Stage 11's own records inherit
it.

## 30. Participant-dependent provisions still lacking authentic validation evidence

**Five items partially exercised**, four of them for want of a participant:
**CS-03** item 3 (the shared-source mark has nothing to attach to); **CS-06**'s
participant half (the six source roles were never tested against someone
answering); **CS-09**'s *opposing account* discrimination (no rows differ when
there are no accounts); **CS-07**'s absence limb (needs a subject whose identity
authority is unresolved).

**And the whole people-facing method, in every version:** A10's observation limb
— which A20 records as *"never exercised at all"* — A7's habit test, A6's role
compression, A9's first three source roles, and A3 step 8's clarification-only
follow-up.

**CS-14's conservative-default branch is in a harder class:** **NOT EXERCISABLE
INTERNALLY**, because producing it requires manufacturing the condition.

## 31. Findings that represent method defects

**All seven.** Each is a property of Draft v5's text, established by reading it
and demonstrated by an application:

- **MF-1, MF-4, MF-6, MF-7** — ambiguities or mismatches between a rule and the
  instrument or enumeration serving it.
- **MF-2, MF-3** — representation limits: a rule reaching for something the model
  cannot record, seen from A2's side and A18's.
- **MF-5** — an **unworkable requirement**: its first non-authoring applier could
  not comply.

## 32. Gaps that are absence of validation evidence, not method defect

**Everything at §30.** `fd-0031` §2.8's distinction is applied strictly:
**an unexercised provision is not defective because Stage 10 did not meet its
condition.**

**No correction in the change set addresses any of them, and none was written to
appear to.** `fd-0031` §2.12 forbids disguising this gap as a drafting problem,
and §4 of the change set states that it does not close it.

## 33. Findings accepted but proposal modified, declined or deferred

**Five of seven** — the substance of Stage 11's work:

| Finding | What was narrowed, and why |
| --- | --- |
| **MF-2 / PC-2** | Disclosure accepted **in A20 only**; every structural route declined. The applier itself recommended declining, and `fd-0031` §2.4 forecloses the alternatives |
| **MF-3 / PC-3** | Limb (a) accepted; limb (b) subsumed into PC-4 so one concept has one treatment |
| **MF-4 / PC-4** | Rename accepted, **parallel field declined** — two places for one concept invites the drift MF-2 and MF-3 already exhibit |
| **MF-5 / PC-5** | Accepted and **strengthened**, because the proposal as written optimized for fewer lines rather than for attribution |
| **MF-7 / PC-7** | Recording limb accepted; **threshold limb deferred** — it would change methodology semantics beyond any existing determination |

## 34. Interactions among findings

- **MF-2 ↔ MF-3** — the same underlying gap from two directions: A2 has no axis
  for observer-independence; A18's mark for it cannot attach records-only. **The
  two are treated separately and neither treatment creates a second home for the
  concept.**
- **MF-3 ↔ MF-4** — both concern A2 rule 6's reach beyond accounts. **Resolved by
  subsuming PC-3(b) into PC-4**, so record-versus-record opposition is decided
  once.
- **MF-4 ↔ MF-5** — both are burial-by-uniform-repetition. The method names the
  failure mode in Instrument 1's rule and mandates it in Part B — **the sharpest
  internal tension Stage 10 surfaced**, and it is not classified as a
  contradiction because neither provision forbids what the other requires.
- **MF-1, MF-6, MF-7** — independent of each other and of the above.

## 35. Methodology-semantic changes following from accepted corrections

| Item | Semantic effect |
| --- | --- |
| V6-01 | **Clarifies existing semantics** |
| V6-02 | **None** — disclosure |
| V6-03 | **Clarifies existing semantics** |
| V6-04 | **Clarifies existing semantics**; instrument-field change |
| V6-05 | **Reporting and presentation only** |
| V6-06 | **Disclosure** (a); **clarifies** (b) |
| V6-07 | **Clarifies existing semantics** — disclosure only |

**No accepted item changes methodology semantics beyond an existing
determination.** The one item that would have — PC-7's threshold — **was removed
from the set and reserved.**

## 36. Revalidation requirements per accepted correction

| Item | Requirement |
| --- | --- |
| **V6-01** | **NO FRESH VALIDATION** |
| **V6-02** | **NO FRESH VALIDATION** |
| **V6-03** | **TARGETED REVALIDATION** |
| **V6-04** | **TARGETED REVALIDATION**; full testing needs **participant access** |
| **V6-05** | **TARGETED REVALIDATION**, and it **must include an application with at least one session** |
| **V6-06** | **NO FRESH VALIDATION** (a); **TARGETED REVALIDATION** (b) |
| **V6-07** | **TARGETED REVALIDATION** |

**None requires external validation to test.** These are evidence requirements
after a future change, **not maturity scores** (`fd-0031` §2.9).

## 37. Unresolved Founder Office determinations

**Two. Neither is answered here; neither blocks the change set.**

**RQ-1 — the A15 preceding-question evidentiary standard.** *May Client-Stated
evidence that a capability exists, is built and is dormant fire the preceding
question and thereby terminate the Technology-Worthiness Test — and if the
standard is higher, what is it?* Development cannot decide it: it sets a
threshold governing a terminating step and changes methodology semantics beyond
any existing determination. `fd-0026` §2.4 settled the analogous question for
A18 element 4 and is silent here. **Severable** — V6-07 carries the recording
limb only.

**RQ-2 — whether the method should ever represent observer-independence
structurally.** A2 rule 6 reaches for it and A2's model cannot record it; every
structural route Development can see runs into `fd-0031` §2.4's prohibitions.
Development cannot decide it, because answering yes would require altering the
architecture `fd-0031` §2.4 forecloses to it. **Not the §2.4 stop rule firing:**
the deficiency *was* dispositioned at the narrowest supported level. RQ-2 asks
whether more should ever be done. **Non-blocking.**

## 38. Proposed consolidated Draft v6 change set — UNAPPLIED

**Seven bounded items**, at `stage-11-draft-v6-change-set.md`:

| Item | Affected | Semantic effect | Revalidation |
| --- | --- | --- | --- |
| **V6-01** complete A0's settlement | A0 | clarifies | none |
| **V6-02** disclose A2's missing axis, **A20 only** | A20 | none | none |
| **V6-03** require a reason at a zero shared-source count | A18 | clarifies | targeted |
| **V6-04** rename to *opposing source*; retain the register-wide mechanism | Instrument 1 | clarifies | targeted |
| **V6-05** split Part B's header, **attribution preserved, re-derivation identified** | Part B; A3 step 10 | presentation | targeted (needs a session) |
| **V6-06** add correspondence to A20; clarify *existence unknown* | A20; A10 | disclosure / clarifies | none / targeted |
| **V6-07** record the class that fires the preceding question | A15; Instrument 9 | clarifies | targeted |

**No corrected wording is drafted.** Each item states the nature of the change
and nothing more.

## 39. Items explicitly excluded from the consolidated change set

Any recurrence, strength or observer-independence **axis, scale, class or field**
in A2 · a note on A2's limits placed **inside A2** · extending **A18's mark** to
record-versus-record (subsumed into V6-04) · a **parallel field** in Instrument 1
· any **evidentiary threshold** for A15's preceding question (deferred, RQ-1) ·
any treatment of the **participant-facing validation gap** · any correction
reaching **CS-14's conservative-default branch** · any change to Draft v5.

Reasons per item: `stage-11-draft-v6-change-set.md` §5.

## 40. Is the correction set coherent enough to justify Draft v6 construction?

**Yes, on coherence. Conditionally, on authority.**

**Coherent:** no item conflicts with another; two touch A20 by addition to the
same list; one cross-cutting concept is deliberately decided once; nothing
touches A2's architecture; six of seven are individually severable; and no item
changes semantics beyond an existing determination.

**Conditional:** `fd-0031` §2.12 requires the reserved questions returned first
and forbids recommending drafting as though the method were determinate. **RQ-1
stands.** It is severable — V6-07 carries only the recording limb — so drafting
is warranted **once RQ-1 is answered or expressly excluded from the drafting
scope**, and not before.

**And a coherence caution:** this set is coherent in a **weaker** sense than
Stage 7's seventeen items. Four of seven are clarifications or disclosures; one
is presentation. **It repairs the method's account of itself more than the method
itself** — which is the correct result when the findings are what they are, and
should not be mistaken for a larger achievement.

## 41. Draft v5 post-disposition maturity

**PROVISIONAL DRAFT — INTERNALLY APPLIED ONCE — NOT VALIDATED AS A VERSION.**
**Unchanged.**

`fd-0031` §2.12: disposition does not validate. **Adjudicating findings adds no
application evidence**, and nothing here is claimed as validation. Not claimed:
validated through use; externally validated; independently validated;
established methodology; Method Library ready; standardized.

**If anything, Stage 11 records the evidence position as slightly weaker than
Stage 10 reported it** — five items partially exercised rather than three, and
one branch identified as not exercisable internally at all.

## 42. The exact claim Stage 10 + Stage 11 evidence supports

> **Draft v5 was applied once, in full, to one previously diagnosed internal
> subject at a pinned baseline, by an authoring context that did not draft it and
> did not hold the prior applications' results — read-only, without participant
> evidence, observation of work, or access to the subject's operating systems.
> Twelve of seventeen consolidation items plus the A10 reconciliation encountered
> the authentic conditions necessary to test them; five did not fully, four of
> those for want of a participant and one because its remaining branch cannot be
> produced internally without manufacturing it. The application produced seven
> method findings, all of which have since been accepted on individual
> adjudication, and seven proposed corrections, five of which were narrowed. Two
> methodology questions remain reserved to the Founder Office. One requirement
> was found unworkable at literal compliance.**

**Every clause traces to a record in the corpus.**

## 43. Claims still unsupported

- **Not validity.** One application by one operator on the institution's own
  venture, using its own records, establishes workability, not correctness.
  **Adjudication does not change that.**
- **Not independence** — a separation of hands, not of interest, and Stage 11's
  adjudication is by the office that wrote the method.
- **Not fresh-subject discovery** — the subject was diagnosed twice before, at
  the same commit.
- **Not external or client validity, organizational diversity, general
  applicability, commercial readiness, or Method Library maturity.**
- **Not the people-facing method** — unexercised in every version.
- **Not that the accepted corrections are right.** They are adjudicated, not
  applied and not tested; §36 records what each would require afterwards.
- **Nothing about HGP fit for operational use.** Its diagnosis is not complete
  and its closure condition is unresolved.

## 44. Remaining external-validation gap

**Total, and unchanged.** No organization outside Huerta Group has been diagnosed
with any version of this method. Five applications across four versions, all on
the parent or a venture of it, all by a team with material prior involvement.

**Stage 11 moved this gap by nothing and could not have** — it applied the method
to no one.

## 45. Repository validation results

| Gate | Result |
| --- | --- |
| `npm run verify` before Commit A | **PASS** — all gate steps green |
| `npm run verify` before Commit B | **PASS** — all gate steps green |
| `npm run verify` before Commit C | recorded in the return message |
| Decision-history registration (`fd-0031`) | **PASS** — determinations registry at 31 records |
| Draft v1–v5 digests, before and after | **PASS** (§3) |
| Stage 10 records unchanged | **PASS** |
| HGP unchanged | **PASS** — not touched in this stage |
| Final diff inspection for unauthorized methodology changes | recorded in the return message |

## 46. CI status

Recorded in the return message with its actual result. No repository
modification was made to manufacture a workflow run.

## 47. Recommended next bounded stage

**Two Founder Office acts, in order, and neither is Development's.**

**First — answer or exclude RQ-1** (§37). `fd-0031` §2.12 requires the reserved
questions returned before drafting is recommended as though the method were
determinate, and this report does not do that. RQ-2 needs no answer for drafting
to proceed.

**Then — one bounded stage, and only this:**

> **Generation One — Draft v6 Bounded Correction Construction**, limited to the
> seven items at `stage-11-draft-v6-change-set.md`, from Draft v5 as the direct
> textual baseline, with Draft v5 preserved unchanged as the version Stage 10
> actually applied.

**Why drafting rather than more validation.** Seven findings are accepted and
their treatments are determinate. Leaving accepted corrections unapplied while
running further validation would accumulate findings against a text already known
to need them — the inverse of the Stage 5/6 problem and the same waste.

**Why not external application.** Nothing has changed since Stage 10 said so: the
method's people-facing half has never been exercised in any version, and meeting
a real client first with it untested is a risk neither Stage 10 nor Stage 11
reduced.

**And the thing Draft v6 will not do, stated so it is not mistaken later.**
**Draft v6 does not close the participant-facing validation gap** — no item in
the change set touches it, and `fd-0031` §2.12 forbids disguising it as drafting
work. **After Draft v6, the outstanding need is exactly what it is now: one
application with participant access.** CS-14's conservative-default branch will
still be unreachable internally even then.

**Recommendation is not authorization.**

---

**Stopping here for Founder Office review.** No Draft v5 modification, no Draft
v6, no applied correction, no further application, and no answer to any
participant question will proceed without separate Founder Office authorization.
