# Organizational Diagnostic — Generation One: Method Deficiencies Exposed by the HGP Application, and Proposed Corrections (Stage 5)

**Classification: Institutional Record** — proposal record (evidentiary,
non-governing). **PROPOSALS ONLY.** Preserved **separately from frozen
Draft v3**, which is unchanged at
`04fd02c7ec80b457877f2de0363ce90e961bc370e019e945634d4720d379f89f`, commit
`d738d7e`, one commit on its path — verified before the application began and
again after it ended (`fd-0023` §2.2).

**No correction was folded into Draft v3 while the test was running.** Nothing
below is applied, and nothing below was written to make the application appear
successful. Two of the eight (D-2, D-8) make the method's conclusions *weaker*,
not stronger.

Each deficiency records the eight fields `fd-0023` §2.8 requires.

---

## D-1 — "Client-Stated" presumes a person is speaking

- **Where exposed.** A2 (evidence classification); Instrument 1.
- **HGP evidence that exposed it.** The subject asserts conditions about itself
  through *documents*, not people: the README's account of what exists, the
  Engineering Constitution's rules, the charter's delegations. No person spoke
  in this application at all. A2 defines Client-Stated as "condition asserted by
  an organizational participant **or supplied institutional source**" — the
  second limb covers it, but the *name* does not.
- **Observed behaviour of Draft v3.** Correct in substance, misleading in
  label. Recording "the platform is the permanent record" as *Client-Stated*
  reads as though someone said it in an interview.
- **Why insufficient.** A reader cannot tell from the class whether a condition
  was asserted by a person who could be asked again, or by a document that will
  say the same thing forever. Those have different evidentiary futures.
- **Type.** Wording, with an evidence-model edge.
- **Proposed correction.** Keep three classes; add a required **source-kind**
  attribute on Client-Stated rows: *person* / *organizational record* /
  *supplied institutional source*. No class is added, split, or redefined.
- **Possible consequences.** Every existing Client-Stated row in the corpus
  would lack the attribute until re-read; the attribute must not become a
  strength ranking.
- **Authority required.** Methodology room / Founder Office — it is a change to
  the method, and Draft v3 is frozen.

## D-2 — "Records-only" names the wrong absence

- **Where exposed.** A18 (advancement logic); A3 step 8.
- **HGP evidence.** The subject's *records* were richly available: 77
  documents, 42 migrations, three constitutions, a ratified vocabulary. What
  was closed was the **operational half** — the hosted database, the live
  deployment, the runtime. Draft v3 labelled the diagnosis **records-only**
  because no *stakeholder account* was obtained, which is true and is not the
  most important thing that was missing.
- **Observed behaviour.** The label fired correctly by its own definition and
  constrained the outcome correctly. But it named the absence of a person while
  the diagnosis's real limit was that it never opened the system the subject
  calls "the permanent record."
- **Why insufficient.** Two different insufficiencies — no account, and no
  operational observation — collapse into one label, and the constraint they
  produce is identical. An organization could have every person available and
  no system access, and would receive the same label for the opposite gap.
- **Type.** Advancement logic.
- **Proposed correction.** Replace the single label with two, both carried
  where they apply: **records-only** (no stakeholder account obtained) and
  **artifacts-only** (no observation of the organization's operating systems or
  work as performed). A18's constraint applies where **either** is present.
- **Possible consequences.** More diagnoses carry a constraining label —
  correctly. Some organizations will receive both, which is a true and
  uncomfortable statement about the evidence.
- **Authority required.** Methodology room / Founder Office.

## D-3 — Source roles have a field and no acquisition step

- **Where exposed.** A9 (source roles — new at Stage 4); Instrument 4.
- **HGP evidence.** Three of the six roles came back **not obtained**: where a
  matter is first worked through, where it is routed from in practice, and
  (partly) where it is clarified. Records state destinations and rules; they do
  not record where thinking happened.
- **Observed behaviour.** The instrument held the answer honestly — "none
  evidenced" and "not obtained" were both available and used. It offered no way
  to *get* the answer.
- **Why insufficient.** The correction adopted at Stage 4 (PT-10) was derived
  from a clarification a participant volunteered. Where no participant speaks,
  the field is structurally empty, and the method does not say so in advance.
- **Type.** Procedure / instrument.
- **Proposed correction.** In A9, state that the first three source roles are
  **ordinarily obtainable only from participants**, and that a records-only
  application records them as *not obtainable from records* rather than as
  *none evidenced* — the two mean different things.
- **Possible consequences.** Removes a false negative; adds a distinction a
  reader must hold.
- **Authority required.** Methodology room / Founder Office.

## D-4 — No treatment for a subject that already has a ratified vocabulary

- **Where exposed.** A1 (terminology discovery).
- **HGP evidence.** The subject maintains a 354-line terminology canon,
  ratified by section, enforced by a pinned test, and explicitly binding on UI,
  code, schema and docs — including a rule *removing* one phrase from the
  interface. It had performed A1 on itself, more thoroughly than the diagnostic
  could have.
- **Observed behaviour.** A1's rules held — nothing was translated, the
  organization's words were used throughout. But A1 is written as an
  **elicitation** procedure ("record the organization's own words… as spoken by
  its people and as written in its records") and has no step for adopting an
  authoritative vocabulary the subject already governs.
- **Why insufficient.** The diagnostic improvised: it read the canon, adopted
  it, and recorded its enforcement mechanism as a freshness control. Improvised
  correctly here; unrepeatable as written.
- **Type.** Procedure.
- **Proposed correction.** Add an A1 step: *where the organization maintains an
  authoritative vocabulary, it is adopted as the organization's terms, its
  governing status and enforcement mechanism are recorded as evidence, and
  elicitation is used only for concepts it does not cover.*
- **Possible consequences.** A subject's canon could be adopted uncritically; the
  step must keep A1's rule that a divergence between a stated term and observed
  usage is a finding.
- **Authority required.** Methodology room / Founder Office.

## D-5 — Stale-by-convention and stale-by-drift are indistinguishable

- **Where exposed.** A9 (freshness concerns); Instrument 4; the comparison class
  *records that no longer describe actual operation*.
- **HGP evidence.** Two conditions that look identical and are not. **(i)** Eleven
  blueprints read "Blueprint only — no code" about live capabilities, because
  the subject has a stated convention that blueprint status lines are frozen at
  authorship and current state lives in as-built records. **(ii)** The README's
  setup section says 29 migrations where 42 exist, and a globalization record
  says "no /es routes" where nine exist — with no convention behind them.
- **Observed behaviour.** Both land as freshness concerns. Draft v3 gave no way
  to record that the first is a records architecture working as designed and
  the second is drift.
- **Why insufficient.** A diagnosis that reports both as staleness produces
  eleven false findings and buries two true ones. The method avoided that only
  because the subject's README stated the convention in one sentence, and the
  diagnostic happened to read it.
- **Type.** Evidence model / instrument.
- **Proposed correction.** In A9's freshness field, distinguish **stale by
  stated convention** (with the convention and where it is stated) from **stale
  without stated basis**. Where a convention is claimed, record whether it is
  discoverable from the record itself or only from elsewhere.
- **Possible consequences.** Organizations may claim a convention after the
  fact; the field records where the convention is stated, not whether it is wise.
- **Authority required.** Methodology room / Founder Office.

## D-6 — Instrument 9's outcomes fit a decision not yet taken

- **Where exposed.** A15; Instrument 9.
- **HGP evidence.** The subject has a built, working platform. Applying the
  technology-worthiness test to the problem it exists for produced
  **Insufficient evidence**, because the premise the platform rests on — that
  authors' formative thinking is lost in disposable AI conversation — is
  asserted in the README and evidenced in no located record.
- **Observed behaviour.** Correct and honest, and it reads wrong. "Insufficient
  evidence" about a system that demonstrably runs sounds like a failure of the
  diagnostic rather than a true statement about a decision already made.
- **Why insufficient.** The five permitted outcomes are all *prospective* —
  they answer "should this be built?" None answers "was the need for what was
  built ever evidenced?", which is the only question available once the thing
  exists.
- **Type.** Instrument.
- **Proposed correction.** Add a **retrospective mode** to Instrument 9 — same
  seven questions, applied to an existing system, with outcomes stated as
  findings about the evidence base rather than recommendations: *the need is
  evidenced* / *the need is asserted and not evidenced* / *the system has
  outgrown its stated need* / *insufficient evidence*. **Not** a sixth
  prospective outcome.
- **Possible consequences.** A retrospective mode could read as second-guessing
  a decision the organization already owns; A19's non-prescription rules must be
  restated inside it.
- **Authority required.** Methodology room / Founder Office.

## D-7 — A5's effort proportion is not obtainable from artifacts

- **Where exposed.** A5 (consumption classification).
- **HGP evidence.** A5 requires the proportion of observed effort on internally
  versus externally consumed outputs, "counted where records permit,
  characterized otherwise." A repository permits counting *commits by
  directory*, which is not effort and does not map to outputs.
- **Observed behaviour.** The application characterized instead and marked it
  *Inferred*, which A5 permits.
- **Why insufficient.** Minor, and recorded for completeness: "characterize"
  is a wide door, and two diagnoses could characterize the same repository
  oppositely with equal fidelity to the rule.
- **Type.** Instrument.
- **Proposed correction.** Where effort is characterized rather than counted,
  require the **basis of the characterization** to be named, so a reader can
  see what it rests on.
- **Possible consequences.** None material.
- **Authority required.** Methodology room; low consequence.

## D-8 — The method has no disclosure for a team that built the subject

- **Where exposed.** A18 (how the judgement is recorded).
- **HGP evidence.** `fd-0023` §2.6 required the prior-familiarity limitation to
  be recorded, and Draft v3 supplied no place for it. Draft v3 discloses two
  independence defects — **author-of-records** (the team wrote the records it
  judges, adopted at Stage 2) and **account and record share a source** (the
  participant wrote them, adopted at Stage 4). It has nothing for the third and,
  here, largest: **the team previously designed, built, or advised the subject
  itself.**
- **Observed behaviour.** The limitation was recorded because the *instrument*
  demanded it, not because the method did. A future application under the
  method alone would omit it.
- **Why insufficient.** This is the defect that most limits what this program
  can claim. Every application to date has been performed by a team that helped
  build its subject, and the method has never said so in its own voice.
- **Type.** Evidence model / advancement.
- **Proposed correction.** A18 gains a third disclosure — **prior-involvement**:
  where the diagnostic team has previously designed, implemented, advised, or
  evaluated the subject, the outcome states it, states in what capacity, and
  states that the diagnosis is not independent. It sits beside the existing two
  and is stated before any finding.
- **Possible consequences.** Every past application in this program would carry
  it, and every claim resting on them weakens accordingly. That is the correct
  consequence and is the reason to adopt it.
- **Authority required.** Methodology room / Founder Office.

---

## Disposition status

**All eight are PROPOSALS.** None is applied. Draft v3's digest is unchanged.
Disposition — `ACCEPTED · MODIFIED · DEFERRED · DECLINED`, individually, with
the reason and the exact change where accepted — is reserved, as it was for the
seventeen Stage 2 corrections and the ten Stage 3 proposals. **Do not assume
any of the eight should be adopted.**

## What is deliberately not proposed

- **Nothing that would have made the HGP application look better.** D-2 and D-8
  make the method's conclusions weaker; D-6 says an honest outcome reads badly
  and proposes a way to say it more precisely, not a way to say something more
  flattering.
- **No relaxation of the advancement constraint.** D-2 would cause the
  constraint to fire *more* often.
- **No new instrument, register, numbering system, or software.**
- **No change arising from an HGP defect.** The subject's own conditions —
  unapproved constitutions, stale records, an unused theme register — are
  findings about the subject, routed to its authority in the application record
  §17. They are not method corrections and none is proposed as one.
- **Nothing about contested authority.** The field was available, found nothing
  to hold, and remains representable and undemonstrated. That is a result, not a
  deficiency.
