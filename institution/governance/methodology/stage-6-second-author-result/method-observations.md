# Method observations — Draft v3, applied once, records-only, by a second author

**Method:** Huerta Group Organizational Diagnostic — Generation One, Draft v3
(Provisional Draft), frozen text as supplied.
**Application:** Huerta Group Publishing at `e28f12a`, 2026-08-25, records-only,
no stakeholder access, no production access.

Blunt, as instructed. Every item is either a place the method was unclear,
silent, ambiguous, or gave me no guidance; or something I had to decide for
myself that the method should arguably have decided. Nothing here was resolved
by inventing a rule and quietly applying it — where I decided, I say so and say
what I decided.

Ordered by how much it cost me, not by stage number.

---

## MO-01 · The three evidence classes are too coarse in exactly one place, and it is the place that mattered most

**Severity: highest.**

A2 gives three classes: Observed, Client-Stated, Inferred. A2 rule 4 says a
supplied document is *Observed* as to existence and content and *Client-Stated*
as to the condition it asserts.

That rule forced me to classify `docs/operations/production-migration-baseline.md`
— eight dated entries, well over a hundred enumerated production probes, each
with its refusal code, its fixture lifecycle, and its residue count — **identically
to the README's sentence "Nine runtime dependencies."** Both are documents
authored by the same party; both are Client-Stated as to the condition they
assert. The method gave me no way to record that one of them is a rigorous
contemporaneous record of executed probes and the other is a hand-maintained
figure that stopped being maintained.

I did not invent a fourth class. I recorded the distinction in prose in the
"confidence/context" field and in the limitations column, which Instrument 1
permits ("confidence/context is prose, never a score"). But prose in a field is
not classification, and a reader scanning classes will see two Client-Stated rows
of equal standing.

**What the method should arguably decide:** whether a subject's own systematic
verification record — probes designed, executed, and recorded against a live
system, with negative controls — is a distinguishable species of evidence, and
if so how it is marked. It is not Observed (the diagnostic did not witness it)
and calling it merely Client-Stated discards real information. A2 rule 5's
"account and record share a source" marking is the nearest existing device and it
addresses a different problem.

---

## MO-02 · "Identity-of-record statement" is a required minimum output that the method never defines

A18's minimum outputs list includes *"identity-of-record statement (or its
explicit absence)"*. **The phrase appears exactly once in the entire method.** It
is not defined in A0–A17, not in A19–A20, not in any of the ten instruments, and
not in Parts C or D. No instrument produces it. No stage names it.

I did not invent a rule. I read it against the nearest thing in the method — A9's
one-matter rule, *"the matter's identity is stated first and its representations
are then listed against it"* — and produced statements in that shape in Instrument
4 and Instrument 7 (FR-01, FR-02), and I recorded in `advancement.md` that **if a
different thing is meant, the output is explicitly absent.**

**What the method should decide:** what this output is, which stage produces it,
and which instrument holds it. As frozen, an application can be told it failed to
produce a required output it had no way to identify.

---

## MO-03 · "Author-of-records" has no rule for a diagnostic team that changes composition

A18 says: *"Where the diagnostic team authored records it is judging, the outcome
states 'author-of-records.'"*

I authored none of the subject's records. The diagnosing institution's principal
authored 202 of 203 of them. The method's phrase "the diagnostic team" assumes a
stable entity and gives no guidance for a second author, a replacement author, or
a team whose membership changed between applications.

**I decided** the condition holds institutionally rather than personally, and
stated both halves explicitly in `advancement.md` §1. I believe that is right —
the mark exists to warn a reader about a structural dependency, not to record who
typed — but **the method did not tell me, and a different author could
defensibly have decided the opposite and dropped the label.** For a method being
tested for author-independence, that is not a small gap: the label's presence or
absence turns on an unresolved question about what "the team" denotes.

---

## MO-04 · The method conflates "we could not obtain it" with "we were forbidden to obtain it"

A3 step 10 records access as **full / partial / none**. A17 rule 2 records a
missing item as **"not supplied," "not accessible," or "not known to exist."**

None of these five values distinguishes:

- evidence that does not exist;
- evidence that exists and was refused;
- evidence that exists and could not be reached for practical reasons;
- **evidence that exists, is reachable, and the diagnostic was instructed not to
  touch.**

The fourth case was the dominant condition of this entire application. The hosted
database, the live deployment, author-confidential material, and a named sibling
corpus were all reachable-in-principle and off limits by instruction. I recorded
them as "none" alongside genuinely unreachable things, and added prose to say
which was which — because the method's vocabulary would otherwise have flattened a
deliberate scope boundary into an access failure.

**What the method should decide:** that an evidence boundary imposed on the
diagnostic team is a distinct value with its own row type, because it says
something entirely different about the diagnosis than "we asked and were
refused". A17 rule 2's three source values were clearly written for a live
engagement where the team sets its own scope through A3. They do not survive
contact with a bounded-scope application.

---

## MO-05 · A3 step 9's citation check assumes the diagnostic's access is coextensive with the organization

Step 9: *"Every authority cited by a record that a material finding relies upon is
checked for being **held by the organization**."*

I cannot check whether the organization holds anything. I can check whether the
**authorized corpus** holds it. Those are different questions, and the difference
is load-bearing here: eight-plus Founder Office instruments are cited and absent
from the corpus I could read, and a corpus I was forbidden to open exists at a
path the engagement named. "Cited, not held" is the register row the method
supplies, and it overstates what I established.

**I decided** to write every such row as "cited, not held **in the authorized
corpus**" and to attach A17 rule 4 explicitly each time. The method's own phrase
would have had me assert something about the organization that I did not
establish.

---

## MO-06 · A3 step 10 is silent on zero sessions

The two-pass access statement is to be *"re-derived after every stakeholder
session"*, and *"the statement in force is the re-derived one"*. With zero
sessions there is no re-derived statement, and the method does not say that the
team's own inventory stands in its place.

**I decided** to state "re-derived zero times, because none occurred" and to carry
the original inventory. Low cost, but it is a hole: the method's text as written
has no statement in force for a records-only diagnosis.

---

## MO-07 · A15's preceding question creates a dead end that records-only diagnoses cannot leave

A15: a "yes" to *does a capability already exist* routes to
*existing system should be improved rather than replaced* or to Instrument 10,
**"and the test proceeds only if the organization's authority has decided
otherwise."**

In a records-only diagnosis **no authority is available to decide otherwise, ever**.
The test therefore cannot proceed past its own preceding question, for any
problem, in any records-only application — regardless of how well the problem is
understood. That is probably the right conservatism, but the method does not say
it, and A15's seven-part test structure reads as though it will be reached.

**I decided** to record the outcome from the preceding question and then answer
the seven questions "for the record, not to reach a different outcome". The
method gave no guidance on whether answering them at all was permitted or
misleading.

---

## MO-08 · One of the five "possible outcomes" is also a mandatory minimum output

A18's outcomes include *Return unresolved questions to client authority*. A18's
minimum outputs include *Questions Reserved to Client Authority* (Instrument 10),
which is produced by every diagnosis.

So one of the five outcomes is a thing that always happens. Choosing it as **the**
outcome would say nothing; not choosing it does not mean the questions are not
returned. The method never disentangles outcome from output here.

**I decided** to treat them as different — outcome = *Request additional
evidence*; Instrument 10 stands as a minimum output regardless — and said so
explicitly. A different author could have stated the outcome as *Return unresolved
questions to client authority* on the same evidence and been equally faithful to
the text. **For a reproducibility test, this is a direct source of divergence
between authors that has nothing to do with the subject.**

---

## MO-09 · A2 rule 5's per-row "opposing account" degenerates when the answer is uniform

Instrument 1 requires the *opposing account* field on every row a finding relies
on. In this application the value is identical for every row: *sought and
unavailable — the engagement forbids stakeholder contact*. Sixty identical
fields carry no information and bury the rows where the answer differs.

**I decided** to state it once as a register-wide convention and to record
exceptions inline. The method does not permit this and does not forbid it; it
simply assumes variation.

---

## MO-10 · Instrument 1's "stated force, in the speaker's own words" has no provision for documents

The field is defined for speakers: *"the qualifier the speaker used, quoted, or
'none'"*, with the rule that *"the team assigns no category of its own to the
speaker's state of mind."* PT-09's disposition (Part D) confirms it was designed
against a taxonomy of *judgement versus assertion* in accounts.

Documents carry qualifiers too, and in this corpus they are the most
diagnostically loaded strings present: *"proposed, awaiting approval"*,
*"canon in force"*, *"Ratified"*, *"Blueprint only"*,
*"unpushed… not authorized and has not been performed"*.

**I decided** to extend the field to quote document qualifiers verbatim under the
same anti-categorization rule. It worked well — arguably better than in its
intended use, because a document's qualifier is fixed text rather than a
recollection. **The method should say whether this is permitted**, because in a
records-only diagnosis it is the only form the field can take.

---

## MO-11 · A17 rule 6 says prior knowledge supports no finding, and says nothing about prior knowledge that *conflicts* with what the method step returns

I held, before starting, a figure of "39/39" associated with this subject's
verification state. The method step returned "42/42" at this baseline. A17 rule 6
told me the prior item supports no finding; it did not tell me what to do with
the conflict itself.

**I decided** to record both — the prior-knowledge row, the method-step row, and
the divergence between them — rather than silently discard the prior figure, on
the reasoning that A17 rule 3 preserves contradictions and does not exempt the
team's own.

This matters more than it looks. A17 rule 6 exists so that *"the method — not the
team's familiarity — is what is evaluated."* But a team whose prior knowledge is
**wrong** and who silently drops it leaves no trace of having been wrong, while a
team whose prior knowledge is **right** looks like it derived the answer. The rule
polices admissibility and not calibration.

---

## MO-12 · The method has no place for a subject that already has its own evidence-classification apparatus

Huerta Group Publishing operates: eleven Founder Validation observation classes;
five Evidence Strength levels including *Independently Corroborated*; three
release evidence classes (*Asserted / Evidenced / Verified*); and a documented
Observation → Theme → Decision chain designed precisely to stop anecdote becoming
law.

A2 imposes three classes. A1 insists the organization's own words are used in
every instrument. The method never addresses what happens when the organization's
own words include **a competing classification scheme for evidence itself**.

**I decided** to classify by A2 and to record the subject's scheme as terminology
(EV-T10) rather than adopt it. But this is the sharpest case in the whole
application of A1 and A2 pulling in opposite directions, and the method does not
acknowledge that they can.

---

## MO-13 · A1's conditional neutral terms assume more organizational plurality than A1 admits

A1 says each neutral term "applies only if the organization has the thing it
names" and that *"No equivalent found"* is expected. Good. But two entries are
malformed rather than negative for this subject:

- **"the coordinating level — *if* the organization assembles cross-unit state
  anywhere."** This subject has no units. "No coordinating level evidenced" is
  technically correct and misleading: the question presupposes a cross-unit
  structure whose absence is the actual fact.
- **"a subordinate unit — *if* any unit holds delegated authority whose detail is
  not reproduced at a coordinating level."** Same shape.

**I decided** to record them as not evidenced and to note the presupposition. A20
already flags that "large organizational scale is not validated" and that
"whether single-actor organizations warrant a distinct diagnostic case is
undecided". This is a concrete instance of the second: several of A1's terms are
not merely inapplicable to a small organization, they are unaskable.

---

## MO-14 · A17 rule 5 defers confidentiality handling to a document the method does not carry

Rule 5: client-specific and confidential material *"is handled under Methodology
Foundation v1 §7.5."* That document was not supplied with the method.

So the method's confidentiality rule is, from my position, **cited and not held** —
the same defect I spent this diagnosis recording in the subject.

I had a real decision to make because of it. The terminology canon names a
specific book title in a ratification note. Is a book title appearing in a
governance record author-confidential material, or governance provenance?
**I decided** not to reproduce it, and to cite the ratification by its cycle
identifier instead — the conservative choice, at some cost to traceability. I had
no rule to apply.

---

## MO-15 · A18's "explicit exclusions" minimum output has no producing stage and no instrument

Required: *"explicit exclusions (what must not enter any system; what should
remain manual; non-goals)."* Three distinct things, one bullet, no home.

- *What should remain manual* — A15 question 6 asks it, and requires the
  accountable authority's judgement, which a records-only diagnosis cannot get.
- *What must not enter any system* — nothing in A0–A17 produces this.
- *Non-goals* — nothing produces this either; in this application the
  **subject** produced them, extensively and well, and I recorded that.

**I decided** to mark the output partial and say which limb came from where. A
minimum output with no producing stage is a defect in the method, not in the
application.

---

## MO-16 · The method has no way to record a defect in the diagnosis's own closure

A17 rule 7 requires the custody disposition of the team's material to be *"agreed
with the organization before the diagnosis closes."* No party was available. The
diagnosis closed anyway, with custody unagreed.

There is no field for this. A18's outcome has no slot for "this diagnosis closed
with a mandatory step unperformed". I put it in Instrument 6 as an
implementer-side custody row and repeated it in the findings and the advancement
determination, because burying it in one instrument seemed wrong.

**What the method should decide:** whether a diagnosis may close at all with A17
rule 7 unsatisfied, and if so where that is recorded.

---

## MO-17 · A14 and Instrument 7 count places for records; they have no counterpart for decisions

A14 asks *"In how many places is the same open matter kept?"* and Instrument 7
requires *"places recorded (count and list)"*. This worked extremely well for
records — FR-01's six places is the single most legible finding in this diagnosis.

It has no counterpart for the friction I actually met most often, which is a
**decision** kept in no place at all: who may push to `main`; who may grant staff;
who approved the constitutions. "Zero places" is a count the instrument accepts
and its shape does not anticipate.

---

## MO-18 · A6's role-compression test is as observation-dependent as A7's, and A20 only flags A7's

A20's evidence-derived additions state that *"habit-held responsibility was asked
for and not obtained"* and that A7's distinction may be unobtainable without
observation. Fair.

A6's role compression — *"where the evidence resolves every decision class to one
actor"* — depends on establishing **observed** authority for every class, which
depends on the same observation and the same accounts. A20 does not say so. An
application working from A20's limitation list would think A6 was safer than A7,
and it is not.

---

## MO-19 · The method's own terminology drifts: "the diagnostic team", "the organization's authority", "client authority"

A16 is headed *"Questions reserved to client authority"*; A18 says *"Return
unresolved questions to client authority"*; A15 says *"the organization's
authority"*; A3 says *"the organization"*. In a self-application, the client and
the organization and — through A20's "related cases" — parts of the diagnostic
team are the same institution. The method's vocabulary quietly assumes an
arms-length engagement it also tells you this is not.

Cost was low; I read them as synonyms. But A1 spends considerable text insisting
that the subject's vocabulary be recorded precisely, and the method does not hold
its own to the same standard.

---

## MO-20 · There is no channel for an application to feed evidence back to the method

A20 ends with a list of open questions, including *"Whether single-actor
organizations warrant a distinct diagnostic case is undecided."* This application
produced evidence bearing directly on that (MO-13, MO-18, and the whole shape of
Instrument 2), and the method provides no place to put it. Part D is traceability
to the previous draft; it is a record of what changed, not an inbox.

The subject organization has solved this exact problem for itself — the Founder
Validation Program's Observation → Theme → Decision chain exists to stop
application evidence from either vanishing or becoming law by assertion. The
method has no equivalent, and its own frozen text is amendable only "by a later
version under Methodology Foundation v1 §6.4."

---

## MO-21 · No stage verifies that the diagnostic is looking at the state it was told to look at

A3 step 1 requires *recording* the point in time and the state of every corpus
inspected. It does not require *verifying* that the state matches the baseline the
engagement specified, and no stage or instrument owns that check.

I did it anyway (`git rev-parse HEAD` against the specified `e28f12a`, plus a
clean-tree check at open and at close) because getting it wrong would have
invalidated everything. It has no home in the method.

---

## MO-22 · A9's six source roles degrade to near-empty without accounts, and the method does not warn of it

*Where a matter is first worked through · where it is clarified · where it is
routed from* are three of the six roles, and all three describe **where people
work**. Without accounts they are "none evidenced" almost everywhere, and
Instrument 4's most distinctive column becomes a column of blanks.

That is honest and it is also a warning the method should carry: PT-10's widening
of *source of resort* into *source roles* (Part D, D1) made Instrument 4
substantially more account-dependent than Draft v2's version, and A20's
limitations list does not mention it.

---

## Two places the method worked notably well, recorded because a blunt file that omits them is not honest

- **A17 rule 3 and A2 rule 5 did real work.** At CX-04 — the as-built record
  saying "unpushed" against `origin/main` sitting at the commit in question —
  every instinct I had was to resolve it, and the method's flat prohibition on
  choosing between contradictory evidence is what stopped me. The rule earned its
  place. Likewise "unopposed is not corroborated" prevented me from reading a
  corpus with no dissenting voice as a corroborated one.
- **A15's preceding question changed the answer.** I came to A15 with a
  well-evidenced recurring problem and a clear technical shape for addressing it.
  The preceding question — *does a capability already exist, awaiting a decision
  rather than a build?* — turned it into *existing system should be improved
  rather than replaced* and then stopped even that, because no authority was
  available to decide otherwise. Without that question I would have written a
  recommendation. See MO-07 for the dead end it also creates.

---

## One structural observation about this application, offered because it bears on what the exercise is for

Everything above was produced without a single stakeholder account, without any
observation of work as performed, and without access to the environment the
subject itself designates as the only one that matters. The method's instruments
still filled — some substantially. That is a real property of the method: **it
degrades into something rather than nothing.**

It is also the property most likely to mislead. Instruments 2, 4, 6, 7 and 8 have
content, tables, evidence classes and citations. They look complete. What they
mostly record is what a corpus says about itself, and the labels that mark this —
RECORDS-ONLY, AUTHOR-OF-RECORDS, "none" in the second pass of the access
statement — are three lines in a header above several thousand words of filled
table.

I do not have a fix. I note that the method's weight of machinery is distributed
almost inversely to where its evidential risk sits.
