# Questions Reserved to Client Authority — Instrument 10

**Subject:** Huerta Group Publishing · **Baseline:** `e28f12a` ·
**Date:** 2026-08-25 · **RECORDS-ONLY** · **AUTHOR-OF-RECORDS** ·
**Access:** repository full; hosted database none; live deployment none;
Founder Office instruments none; all persons none.

**Stage:** A16, maintained throughout.

Each question is stated **neutrally, without a recommended answer**. Per A16 a
question reserved to the organization's authority is recorded with why the
diagnostic team cannot decide it, which authority holds it, what depends on it,
and the consequence if it remains unresolved — **and is not answered by the
diagnostic**.

Where "responsible client authority" is **unresolved**, that is itself a finding
for Instrument 2, and is so marked.

---

## RQ-01 — Are the seven named authorities distinct actors, and if not, which are the same?

**Question.** The corpus names the Founder Office, the imprint, standing
implementation authority (also called Publishing Development authority), the
author, staff, the publisher, and "(Opus 4.8)". Which of these are distinct
persons, offices, or bodies, and which are the same?

**Why the diagnostic team cannot decide it.** No act of exercise is retrievable
for fourteen of eighteen decision classes (F-09). Three facts in the corpus
would tempt an inference that several collapse to one person, and A6's
non-prescription rule forbids drawing it: *"Do not treat one person's presence in
every record as proof that authority is theirs."* Only the organization can say
who holds what.

**Responsible client authority.** **Unresolved** — and that is a finding for
Instrument 2. The question of which authority may answer a question about
authority is itself unanswered by the corpus.

**Evidence / context.** Instrument 2; F-09; F-10; EV-002; EV-011; Operational
Standard §8.

**Decision dependency.** Instrument 2 cannot record observed authority; A6's
role-compression test cannot be applied at all; A7's habit-versus-role
distinction may be unobtainable in principle until it is answered (A7, A20);
A18's minimum-evidence element "authority/decision-rights ambiguity relevant to
the problem is visible" is answerable but its resolution is not.

**Consequence if unresolved.** The map records seven authorities and cannot say
whether the organization has seven, or fewer. Continuity planning, delegation,
and any future distribution of authority all rest on an answer the records do
not contain.

---

## RQ-02 — Which document is the fourth constitution?

**Question.** Eleven records cite "all four constitutions" as governing canon.
`docs/constitution/` holds three documents named Constitution plus the
terminology canon, and four of the citing sentences list the terminology
document *separately* from the four. Which document is intended as the fourth,
and is it held anywhere?

**Why the diagnostic team cannot decide it.** Choosing a candidate would appoint
a governing instrument on the organization's behalf. A9's rule against appointing
an owner applies by analogy, and A19 forbids creating authority for the client.

**Responsible client authority.** The **Founder Office** — Operational Standard
§8 reserves constitutional matters to it.

**Evidence / context.** EV-021; F-03.

**Decision dependency.** The completeness of the governing canon; every blueprint
whose "Governing canon" preamble cites four; Instrument 8's first row.

**Consequence if unresolved.** Eleven records cite an authority the corpus cannot
produce. A reader cannot establish what governs.

---

## RQ-03 — What does the designation "(Opus 4.8)" record, and do the approvals it carries stand?

**Question.** Four specifications carry "Status: APPROVED for implementation
(Opus 4.8), July 2026", and two further documents carry it in their titles. The
designation is defined nowhere in the corpus. What does it record, and are those
four approvals in force?

**Why the diagnostic team cannot decide it.** The corpus supplies no definition.
Any reading I supplied would be an invention, and A17 rule 2 forbids
reconstructing an unavailable item from inference. I record the string verbatim
in the position it occupies and infer nothing about what it denotes.

**Responsible client authority.** **Unresolved** — a finding for Instrument 2.

**Evidence / context.** EV-T14; D-12; the six occurrences.

**Decision dependency.** The standing of the Author Settings architecture, the
Public Multilingual architecture, and the Reviewer v3 hybrid-model architecture
— all built upon.

**Consequence if unresolved.** Four architectures that have been implemented rest
on an approval whose holder the organization's own records do not identify.

---

## RQ-04 — Are the three constitutions approved, and if not, do they govern?

**Question.** The Product, Design and Engineering Constitutions each read
"Status: proposed, awaiting approval"; the Product Constitution conditions its
own force on that approval. The README lists all four under "Governing canon".
Has approval occurred? If it has not, do the documents govern in the meantime?

**Why the diagnostic team cannot decide it.** A19: do not create authority for
the client. Deciding that "proposed" documents govern, or that they do not, is
an act of governance, not of diagnosis.

**Responsible client authority.** The **Founder Office**.

**Evidence / context.** F-24; EV-004, EV-005, EV-006, EV-017, EV-020.

**Decision dependency.** Whether F-25's typography deviation is a permitted
exception or an unamended breach; whether every "measured against them" claim in
the corpus is well-founded; Instrument 8 rows 1 and 2.

**Consequence if unresolved.** The organization cannot classify a deviation from
its own constitution as permitted or not — as demonstrated concretely at this
baseline.

---

## RQ-05 — Did determination FD-A amend Design Constitution §2, supersede it, or authorize an exception to it?

**Question.** §2 names three faces and states that deviations require amending
the constitution first. The implementation runs two faces under cited
determination FD-A, and §2 is unamended. Which of the three did FD-A do?

**Why the diagnostic team cannot decide it.** FD-A is cited and not held
(EV-020). A17 rule 2: an unavailable item is never reconstructed from a
secondary description. Reading FD-A's effect off the citing documents would be
exactly that.

**Responsible client authority.** The **Founder Office**.

**Evidence / context.** F-25; CX-05; EV-006; `lib/root/fonts.ts`;
`lib/design/tokens.test.ts`.

**Decision dependency.** The status of the Design Constitution as a governing
instrument; the meaning of "deviations require amending it first" for every
future deviation.

**Consequence if unresolved.** A test enforces an outcome whose authority the
organization cannot produce, against a constitution that still states the
opposite rule.

---

## RQ-06 — Who holds the right to put a change onto `main`, and was the Broadsheet work authorized to reach it?

**Question.** By the organization's own model, pushing to `main` deploys to
production. No instrument names an authority for that act. Separately: the
as-built record at `e28f12a` states the Broadsheet work is unpushed and that
production replacement is not authorized and has not been performed, while the
repository's remote-tracking refs place `origin/main` at `e28f12a`. Who holds
the right, and what is the correct account of this instance?

**Why the diagnostic team cannot decide it.** Both statements are preserved as
contradictory per A17 rule 3, and the diagnostic does not choose between
contradictory evidence. What would settle it — the true remote state, or the
deployment — is outside the evidence boundary (NA-12, AS-03).

**Responsible client authority.** **Unresolved** — a finding for Instrument 2.

**Evidence / context.** F-11; F-12; CX-04; D-17; EV-018; EV-019.

**Decision dependency.** A18's constraint that a diagnosis whose access statement
records "none" for a system a material finding depends on cannot *proceed* on
that finding; Instrument 8 row 3.

**Consequence if unresolved.** The organization's single most consequential
recurring act has no recorded authority, and its own as-built record and its own
repository disagree about whether it occurred.

---

## RQ-07 — Should the grant of the staff role leave a durable record?

**Question.** `is_staff()` is the platform's security boundary. The role is a
JWT claim "assigned manually in Supabase". No instrument names who may grant it
and no record records a grant. Should that act leave a durable record, and who
holds the right to perform it?

**Why the diagnostic team cannot decide it.** A16 reserves risk acceptance and
security posture to the organization; Operational Standard §8 reserves security
posture (RLS, authority boundaries) to the Founder Office expressly. A19: do not
create authority for the client.

**Responsible client authority.** The **Founder Office** (Operational Standard §8).

**Evidence / context.** F-11; F-32; EV-023; IM-06; D-11.

**Decision dependency.** Instrument 6 IM-06; Instrument 8 row 4; any future
answer to RQ-01.

**Consequence if unresolved.** The organization cannot answer from its own
durable records who holds staff, when it was granted, or by whom — for the claim
on which every other access control depends.

---

## RQ-08 — Is there an authoritative source for "what exists today", and if so, which record is it?

**Question.** Capability status is represented in at least five places with
different vintages and twelve identified divergences. No record declares itself
authoritative for it. Is one of them authoritative, should one become so, or is
the plurality intended?

**Why the diagnostic team cannot decide it.** A9 is explicit: the authoritative
source "may be 'unresolved' — it is never appointed by the diagnostic." Choosing
one would appoint it.

**Responsible client authority.** **Unresolved.** The Founder Office holds
constitutional matters; whether capability status is one is itself undecided.

**Evidence / context.** F-18; F-34; FR-02; EV-016; EV-017; Instrument 4.

**Decision dependency.** **Instrument 9's outcome depends on this.** The
existing drift-guard capability cannot be extended to capability status until an
authoritative source exists, because the extension would decide the question
silently (F-36).

**Consequence if unresolved.** The one technical improvement the evidence
supports cannot proceed without deciding a question the organization has not
decided.

---

## RQ-09 — Should Founder Validation observations arising from implementation verification be recorded in the same stream as observations from real use?

**Question.** The Operational Standard §1 scopes the program to *"whether a
founder publishing a real book through Huerta Group Publishing encounters
friction"*, and §12 designates Cycle 001's subject as *"the first complete
end-to-end publication performed through Huerta Group Publishing — a real
book"*. The single observation on record states its source as an
implementation-phase production verification working session with disposable
fixtures. Do both belong in the `FVO` stream?

**Why the diagnostic team cannot decide it.** It is a question about the design
of the organization's own evidence apparatus. Deciding it would be imposing a
methodology on the client (A19), and the program is a governance record whose
amendment §8 reserves.

**Responsible client authority.** The **Founder Office** (Operational Standard
§8: an action changing a governance record escalates).

**Evidence / context.** EV-008; EV-009; EV-010; Instrument 8 row 7.

**Decision dependency.** Whether the program's evidence base is what §1
describes; whether the aggregate Evidence Strength of any future Theme is
honestly supportable.

**Consequence if unresolved.** The program built to capture lived evidence about
the institution is, at this baseline, being fed by the function whose work it
exists to evaluate — a condition A2 rule 5 names precisely ("account and record
share a source") and which the program's own §5 level 5, *Independently
Corroborated*, is designed to distinguish.

---

## Questions I considered reserving and did NOT

Recorded so the instrument's boundary is visible:

- **"Should the README's figures be corrected?"** — not reserved. This is a
  bounded implementation matter within approved architecture, which the
  Operational Standard §8 places under standing implementation authority, not the
  Founder Office. It appears as a finding (CX-01/02/03, F-08), not as a reserved
  question.
- **"Should the permanent record have an export path?"** — **not reserved,
  because I could not establish the premise.** Whether backups exist at the
  vendor is unverifiable from the authorized corpus (F-29). Reserving the
  question would assert the gap. It appears as a stakeholder question instead
  (SQ-09).
- **"Is the governance-to-operation ratio excessive?"** — not reserved, because
  A11's excess test is not satisfied on the available evidence (F-26). Reserving
  it would smuggle in the assertion.
