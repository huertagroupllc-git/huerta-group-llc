# Diagnostic findings — Huerta Group Publishing

**Baseline:** `e28f12a` · **Date:** 2026-08-25 ·
**RECORDS-ONLY** · **AUTHOR-OF-RECORDS** ·
**Access statement (two-pass, re-derived zero times):** repository **full**;
hosted database **none**; live deployment **none**; Founder Office instruments
**none**; all persons **none**. Full statement in `evidence-register.md`.

Every material claim below carries exactly one class (A2) and names its
evidence. Where a claim would have needed evidence I do not have, the gap is
named in the claim rather than filled (A17 rule 2). Nothing here is a
prescription (A19).

---

## A3 — Evidentiary baseline

**F-01 · The organization's own standard of proof is outside this diagnosis's
reach.** *Class: Observed (as to the record's content); the consequence is
Inferred and is mine.*
Engineering Constitution §1 states: *"There is one environment that matters:
production… If something cannot be verified in production, it is not done;
claims of 'verified' require evidence from the live deployment."* Access to
that environment is **none** (AS-03), and access to the hosted database is
**none** (AS-02). Therefore: **on the subject's own stated standard, this
diagnosis can verify nothing about the organization's operation.** It can
establish what the corpus says, what the committed code would do, and where the
corpus disagrees with itself. That is the whole of its reach, and every finding
below is bounded by it.
*Evidence:* EV-005, AS-02, AS-03.

**F-02 · The organizational boundary is unresolved, and two of the method's
questions are consequently unanswerable rather than unanswered.** *Class:
Observed (the absence of a boundary statement in the corpus).*
A3 step 11 requires the organization's own statement of what it counts as
itself. **No such statement exists in the corpus, and no one was available to
supply one** (NA-10). The corpus uses, without defining their relations:
"Huerta Group Publishing", "the Huerta Group Publishing imprint", "the
publisher", "the Founder Office", "the imprint", "staff", "HGP Author
Experience & Publishing Methodology", and — in `lib/site.ts` and the README —
HGP as *"the digital platform of the Huerta Group Publishing imprint"*, which
distinguishes the platform from the imprint without saying where either ends.
Per A3 step 11, **A12's "outside the organization" question and A13's systems
inventory are therefore recorded as unanswerable on present evidence, not
answered against my own assumption.** They are so recorded in Instrument 6 and
in F-31.
*Evidence:* NA-10; EV-T01, EV-T02, EV-T06; `lib/site.ts`; README.md.

**F-03 · The corpus's internal citation discipline is strong; its external
citation discipline is not established.** *Class: Observed.*
All **60** relative markdown links across the 78 tracked Markdown documents resolve — zero
unresolved. Against that: **six cited code paths do not exist** at this
baseline (EV-022), **eight-plus Founder Office instruments are cited and not
held** (EV-020), **a fourth constitution is cited by eleven documents and not
held** (EV-021), and **the evaluation report that gated an externally authored
design package is cited and not held** (IM-05). The discipline that keeps
document-to-document links true does not extend to document-to-authority or
document-to-code references.
Per A17 rule 4, none of this is evidence that the cited things do not exist.
*Evidence:* EV-020, EV-021, EV-022, IM-05.

---

## A4 — Purpose and identity discovery

**F-04 · Stated identity is unusually explicit, consistent, and repeated across
independent surfaces of the corpus.** *Class: Observed as to the statements;
Client-Stated as to the condition.*
The organization states its purpose in four places written at different times
that do not merely cross-quote each other: `lib/site.ts` (*"an editorial house
with a memory"*, *"Not an AI writer"*), `README.md` (*"exists to help authors
create books that sound more like themselves, not more like AI"*), Product
Constitution II (*"a publishing house before software… The platform is an
imprint with a memory, not a SaaS product with a publishing theme"*), and
Product Constitution III (*"AI is a servant of the author's voice, never a
source of it"*). The four are mutually consistent.
*Evidence:* EV-004, README.md, `lib/site.ts`.

**F-05 · Where stated identity and observed operation diverge, they diverge in
one specific place: the identity is a publishing house; the observable operation
is a software and governance practice.** *Class: Inferred — this is my
interpretation, and I state what would settle it.*
What I can observe of the organization's operation is a repository: 203
commits, 42 migrations, 2.20 MB of application code, 837 KB of governing
documents, 21 test files, a CI gate, eight production-verification entries. What
the organization says it exists to do — develop books, preserve authorship — is
carried on by authors inside a system I cannot see, and the corpus records that
system as holding, at last verification, **one book and one author**
(EV-011, Client-Stated).
I record this as divergence *between what I can see and what the organization
says*, **not** as divergence between claim and reality. The reality is in the
production system (AS-02) and in author-confidential material (AS-08), both
outside the boundary of this diagnosis by design. A4 warns against inferring
identity from public copy alone; I have not, and I also cannot corroborate it.
**What would settle it:** production access, or an account from a participant.
*Evidence:* EV-003, EV-011, EV-031; NA-02, NA-04.

**F-06 · The organization distinguishes current, planned, and aspirational
capability on its own surfaces, and does so better than most records of this
kind.** *Class: Observed.* — *Positive finding, recorded with the same weight as
the negative ones.*
A4's evidence-derived supplementary question asks exactly this. The corpus
answers it in four distinct devices: the README's **"Current non-goals"**
section, which names deliberate exclusions and says so (*"Deliberate exclusions,
not omissions"*); the blueprint convention *"Blueprint only — no code, no
migrations, no schema"*; Product Constitution XI, *"The absence of a capability
is communicated by silence, not by advertisement"*; and the README's statement
that pricing is *"a published template; no payment is collected and no billing
SDK exists"*. Four capabilities are named as *"named future capabilities, still
unblueprinted"*.
**Qualification, recorded rather than omitted:** the same corpus fails the test
in the opposite direction elsewhere — ten blueprints announce themselves as
proposals for capabilities that have shipped (EV-016), and two globalization
records describe as unbuilt routes that exist (CX-06, CX-07). The organization
is scrupulous about not over-claiming and comparatively careless about
under-claiming.
*Evidence:* README.md; EV-004; EV-016; CX-06; CX-07.

---

## A5 — Outputs and value-creation discovery

**F-07 · Consumption classification, with the counting/characterizing
distinction stated.** *Class: Observed for the counts; the classification is
Inferred and is mine.*

**Externally consumed** (received by parties outside the organization):
published books and their artifacts (EPUB, print interior, cover wrap),
Releases, Bibliographic Records and ISBN registrations, the public site (nine
editorial pages in English, a Spanish preview), the support inbox. Of these,
**none was observed being received by anyone** — production access is none.

**Internally consumed** (received by the organization itself — its own
structure, governance, systems, or capability): the platform; the governing
corpus; the terminology canon; the blueprints; the as-built records; the
migration baseline and its verification log; the Founder Validation Program and
its registers; the design-source package and its provenance.

**Proportion of observed effort.** *Counted where records permit, characterized
otherwise, with the difference stated:*
- **Counted** — across 203 commits, file-change events fall as: `lib` 343,
  `app` 325, `docs` 197, `components` 120, `messages` 86, `supabase` 51,
  `README.md` 18, `public` 15. 113 of 203 commits (56%) touch `docs/`; 152 of
  203 (75%) touch application code; 42 (21%) touch migrations. By bytes,
  documents are ≈837 KB against ≈2.20 MB of application code.
- **The difference stated:** these are counts *of the repository*, and the
  repository is the only surface I can count. They do not measure effort. Work
  done in production-verification sessions, in editorial review, in the Founder
  Office, in conversation, or by the author is entirely invisible to them. A
  count of one visible surface is not a proportion of total effort, and I do not
  present it as one.
- **Characterized, not counted:** on the evidence available, effort is
  overwhelmingly directed at building the capability to produce books and at
  recording how that capability is governed, rather than at producing books.
  The corpus's own figure for the latter is one book and one author (EV-011).

Per A5, **neither class is a judgement.** The proportion is the finding.
*Evidence:* EV-003, EV-011, EV-031.

**F-08 · Relevance test.** *Class: Observed.*
A5's relevance test asks, for anything the organization maintains: *what
decision, coordination need, risk, obligation, or action does it support?*
Applied across the corpus, almost everything answers credibly: the terminology
canon supports UI, code, schema and docs and is enforced by test; the migration
baseline supports the decision to apply new schema; the blueprints support
authorization; the as-built records support future implementers; the design
provenance supports the boundary between proposal and product.
**Two items have no credible answer on the available evidence, and are recorded
as such:** (i) the README's three quantitative figures, which support
orientation and currently mis-orient (CX-01/02/03); (ii) the
`docs/globalization/README.md` status paragraph, which describes a state the
tree contradicts (CX-06). Neither is load-bearing; both are recorded because A5
requires that "no credible answer" be recorded rather than passed over.
*Evidence:* CX-01, CX-02, CX-03, CX-06; EV-027.

---

## A6 — Authority and decision-rights discovery

Full map: Instrument 2.

**F-09 · The corpus names seven distinct authorities and identifies who
exercises fourteen of eighteen decision classes: no one.** *Class: Observed as
to the record; the count is mine.*
Named: **the Founder Office**; **the imprint**; **standing implementation
authority** (also *Publishing Development authority*); **the author**;
**staff**; **the publisher**; **"(Opus 4.8)"**. For fourteen of the eighteen
decision classes I could identify, "observed authority" is **unresolved** — not
because the authorities conflict, but because no act of exercise is retrievable
from the authorized corpus.
*Evidence:* Instrument 2; EV-T01…EV-T06, EV-T14.

**F-10 · Role compression is NOT recorded, and the reason is itself the
finding.** *Class: a statement about the state of the evidence.*
A6 and Instrument 3 require role compression to be recorded where the evidence
resolves every decision class to one actor — and forbid assuming it from the
organization's size, founding, or the number of names encountered. Here the
evidence resolves *most* decision classes to **no** identified actor. Three
facts would tempt the inference — 202 of 203 commits carry one name (EV-002);
the corpus records production as holding one author and one book (EV-011); the
Operational Standard §1 speaks of *"a founder publishing a real book through
Huerta Group Publishing"* — and A6's non-prescription rule forbids exactly that
step (*"Do not treat one person's presence in every record as proof that
authority is theirs"*). **I record that I declined the inference, and that
whether the seven named authorities are distinct actors is the largest open
question in the map** (SQ-01).
Correspondingly, **no concentration is recorded**, and nothing here should be
read as a finding that authority is concentrated *or* distributed. A6 requires
that concentration, distribution, delegation, contest and unresolved authority
carry the same weight; at this baseline the evidence supports only *unresolved*.

**F-11 · The two acts with the widest blast radius are the two with no recorded
authority at all.** *Class: Observed.*
(i) **Granting the staff role.** The platform's entire security model rests on
`is_staff()`, resolving a JWT claim *"assigned manually in Supabase"*. No
instrument names who may grant it; no record records a grant. It happens outside
the repository, outside RLS, and outside the append-only discipline the
organization applies to everything else.
(ii) **Putting a change onto `main`.** By the organization's own model
(Engineering Constitution §1; README) this act *is* deployment to production. No
instrument names an authority for it. CI gates it mechanically and approves
nothing (EV-028).
Set against the care taken elsewhere — a `basis`-bearing `approval_delegations`
table, an `authority` column constrained to `'imprint'`, database-enforced
refusals with named error codes — the contrast is sharp and is recorded as such.
*Evidence:* EV-023, EV-024, EV-028, D-11, D-17.

**F-12 · One decision class is contested on the evidence, and the contest is
preserved.** *Class: Observed, both sides.*
For D-17 (a change reaching `main`), the corpus states one thing and the
repository's refs show another:
- *"work packages 1–6 complete on the `broadsheet-design-adoption` branch,
  **unpushed**… Pre-production only — production replacement is not authorized
  and has not been performed."* — `docs/design/broadsheet-implementation.md`,
  read at `e28f12a`, i.e. the very commit in question.
- `refs/remotes/origin/main` and `refs/remotes/origin/HEAD` both point at
  `e28f12a`; `refs/remotes/origin/broadsheet-design-adoption` points four
  commits behind, at `e2097a5`.

Per A17 rule 3 **both are kept and neither is preferred.** Two readings are
available and I record that both are mine: (**Inferred, mine**) the branch
reached `main` and the as-built status line was not updated; or (**Inferred,
mine**) the local remote-tracking refs are stale relative to the true remote.
**What would settle it:** the state of the actual remote, or the deployment —
both outside access (NA-12, AS-03) — or an account.
*Evidence:* EV-018, EV-019, CX-04.

---

## A7 — Functions and responsibilities

Full map: Instrument 3.

**F-13 · The organization's governing acts are visible only as citations of
themselves.** *Class: Observed.*
The Founder Office is referenced in 21 Markdown files and 15 non-Markdown files (9 source/CSS files and 6 migrations). Not
one instrument it issued is held in the authorized corpus. Its determinations
FD-A, FD-B, FD-C are cited in `app/globals.css` and `lib/root/fonts.ts` as the
authority for the platform's typography, palette and panel treatment;
FD-E, FD-F, FD-G, FD-H are cited in the Broadsheet as-built as the basis on
which four design proposals were rejected — and `lib/design/workshop-wiring.test.ts`
*"fails if any does"* reach the runtime. **The outcome of each determination is
encoded in code and pinned by test; the determination itself is not
retrievable.**
Per A17 rule 4 this is not evidence that the determinations do not exist; they
may be held in a corpus outside my access (AS-04, AS-10). It *is* evidence about
what this corpus can and cannot produce.
*Evidence:* EV-020, EV-T13, IM-03.

**F-14 · A function is named exactly once in 438 files.** *Class: Observed.*
"HGP Author Experience & Publishing Methodology" appears in the terminology
canon's Editorial review preamble, as the channel through which a Founder Office
determination was delivered, and appears nowhere else. Per Instrument 3 it is
recorded as **evidenced by: named by an account only**, and per A7 *"a function
that appears in no evidence is recorded as 'not evidenced,' not as absent."*
*Evidence:* terminology.md, Editorial review terms preamble.

**F-15 · Habit-held responsibility: capability not exercised — observation
unavailable.** *Class: the method's required label, not a finding of fact.*
A7 requires that habit-held work be found by **observing work as performed**,
never by asking whether it exists. No observation was available (NA-08); no
account was available (NA-01). The map therefore records the method's exact
wording and **not** "no habit-held work found". A7 further notes that in an
organization whose evidence resolves every assignment to a single actor the
habit/role distinction may be unobtainable *in principle*; I record that this
may apply here and that **I have not established that it does** (see F-10).

---

## A8 — Recurring decisions

**F-16 · Latency not establishable from available evidence; and the
distribution is not available either.** *Class: the method's required entry.*
A8 requires counting rather than characterizing where evidence allows: how many
decisions awaited an authority at a point in time, across how many places they
were recorded, how many were rediscovered rather than tracked. **None of these
is countable here.** The queue of decisions awaiting anyone lives in production
and in people (NA-11, NA-01). A8's fallback — "record the distribution instead"
— is also unavailable, because the distribution requires the same evidence.
The one measurable adjacent fact: across **five** repository-side
representations of capability status (FR-02), no surface records a pending
decision at all.
*Evidence:* NA-01, NA-11; FR-02.

**F-17 · Decision cadence, where it is visible, is same-day.** *Class: Observed,
sample of one.*
The only decision with a recorded trigger, disposition, authority, and date is
FVO-001-001: recorded 2026-08-11, disposed 2026-08-11, closed 2026-08-11, by
standing implementation authority, with the fix applied and re-verified in the
same session. A8 asks for the cadence of decision-making; this is what the
corpus offers, and it is a sample of one.
*Evidence:* EV-010.

---

## A9 — Information and source-of-truth discovery

Full inventory: Instrument 4.

**F-18 · The organization has established authority by *practice* in exactly
the places where it built a machine to do so — and nowhere else.** *Class:
Observed.*
A9 requires three facts never collapsed: **(a)** the source exists;
**(b)** a stakeholder is confident in it; **(c)** the organization treats it as
authoritative, by what act, instrument, or practice.
Fact **(b) is unobtainable for every domain** — it needs a participant (NA-01)
— and is recorded as "not obtained" throughout, never merged into (c).
Fact **(c)** is satisfied by *practice* in four domains and only four: the
terminology canon (pinned by `lib/terminology/canon-source.ts`), the design
tokens (pinned by `lib/design/tokens.test.ts`), catalog parity (pinned by
`messages/catalog-parity.test.ts`), and the Workshop's wiring (pinned by
`lib/design/workshop-wiring.test.ts`). In every other domain, (c) rests on an
assertion in a document whose own status line says "proposed, awaiting
approval".
**For "capability status" there is no authoritative source and no establishing
act at all** — five representations, no authority. Per A9 the owner is recorded
as **unresolved** and is **not appointed** by this diagnosis.
*Evidence:* EV-027; Instrument 4; EV-016; EV-017.

**F-19 · Source of resort is blocked for every domain, and the method says why
that matters.** *Class: blocked.*
A9 requires recording, per participant and in their own words, *where they
actually go when they need a working answer*, beside the authoritative source
and never as it — because *"the difference between them is frequently where
informal authority becomes visible."* **No participant was available.** Informal
authority in this organization is therefore, by construction, invisible to this
diagnosis. That is not a finding that none exists; Instrument 2 records
"informal authority: none evidenced" for every row, with that basis.
*Evidence:* NA-01.

**F-20 · The organization has removed the method's own vocabulary from its
interface, deliberately, and kept the concept.** *Class: Observed.*
The terminology canon records: *"**Source of Truth** — Remove from UI. Software
jargon. Engineering docs may use it; the interface says 'the permanent
record'."* A1 requires that the organization's word be used at the breadth the
organization gives it and never narrowed. **"The permanent record" is broader
than A9's "authoritative source"**: it names the whole append-only body, not the
one place a given fact is established. It is recorded at that breadth
throughout, and the concepts it leaves unnamed — the per-domain authoritative
source, the attention layer, "since last review" — are recorded as unnamed
(EV-T16), which per A1 is a finding about the evidence, not about the
organization.
*Evidence:* EV-007, EV-T07, EV-T16.

---

## A10 — Workflow, handoff, dependency and obligation discovery

**F-21 · A10's central procedure could not be exercised, and the method
anticipates this exact failure.** *Class: blocked.*
Trail-first requires artifacts, records and timestamps, correspondence, **and a
stakeholder walking through the last actual instance**. The first two were
obtained; the last two were not (NA-01). Observation of work as performed was
unavailable (NA-08). A20 already records that *"A10's observation of work as
performed has never been exercised at all"* in any application of this method;
this application does not change that.
*Evidence:* Instrument 5.

**F-22 · No matter in the corpus records the owner of its next expected
action.** *Class: Observed.*
A10 requires that for **every** matter the owner of the next expected action be
recorded, or recorded as "unrecorded", whether or not a handoff occurred. Across
the corpus — 20 blueprints, 13 as-built records, 4 registers, 42 migrations, 203
commits — **the count of matters carrying a next-action owner is zero.** The
registers come closest: the Founder Validation Register carries a *Disposition*
column, and the Decision History records *"the first evidence-derived decision
will be `FVD-001`"*.
Per A10 every such matter is recorded as **"unrecorded"**, which is a permitted
value. Whether this is a gap depends on whether transfers occur at all — which
is what the missing walkthrough would establish (SQ-05). **I do not record it as
a defect.**
*Evidence:* Instrument 5; EV-009.

**F-23 · No obligation with a consequential time boundary is evidenced.**
*Class: Observed.*
A10 distinguishes an obligation whose date's passing has consequence from a
target date, a continuation requirement, or an expected follow-up. Searching the
corpus for the first class returns nothing: no date in the corpus is recorded as
having consequence if it passes. Dates in the corpus are *ratification* dates,
*verification* dates, and *baseline* dates — records of things that happened.
Two scheduled jobs exist (`due-archivals` 04:00 UTC, `import-cleanup-sweep`
04:30 UTC) and are mechanisms, not obligations.
Per A17 rule 4, absence of a record is not proof of non-occurrence: obligations
may exist in production (membership access-end dates, retention milestones) and
were not reachable (NA-02).
*Evidence:* the corpus; EV-011; NA-02.

---

## A11 — Governance gap and governance-excess discovery

Full assessment: Instrument 8.

**F-24 · Every top-level governing instrument except one says it is not yet in
force, and the corpus treats them all as in force.** *Class: Observed.*
`docs/constitution/` holds four documents. **One** — `terminology.md` — says
*"canon in force"*. The other three — Product, Design, Engineering — each say
*"Status: proposed, awaiting approval"*, and the Product Constitution conditions
its own authority on that approval (*"**Once** approved, every future capability
is measured against this document before it ships"*). The README lists all four
under **"Governing canon"** with the instruction *"Read these before proposing
changes; every screen and feature is measured against them."* Eleven blueprints
cite "all four constitutions" as governing.
**No approval act for any of the three is held.**
The README states a convention that disposes of the analogous problem for
blueprints — *"Older blueprints keep their original status lines as history; the
capabilities they describe are live"* — and that convention does not reach the
constitutions, which are not blueprints and whose capabilities are not the thing
at issue.
*Evidence:* EV-004, EV-005, EV-006, EV-016, EV-017, EV-020.

**F-25 · The Design Constitution is deviated from in its most concrete clause,
by a deliberate, recorded, test-enforced change, without the amendment its own
text requires.** *Class: Observed, both sides.*
Design Constitution §2 names **three** faces with fixed jobs — Fraunces
(display), Newsreader (text), Inter (utility only) — and states *"If a screen
needs a fourth face or a fifth heading level, the screen is wrong."* Its status
line states *"deviations require amending it first."*
At this baseline `lib/root/fonts.ts` loads Newsreader (carrying **both**
`--font-serif` and `--font-display`), IBM Plex Mono (`--font-sans`), and Inter
— the last explicitly demoted: *"Inter remains loaded but is no longer interface
chrome: it serves the author's governed manuscript-display preference."* The
as-built record states *"Fraunces is retired from the interface"* under cited
determination **FD-A**. `lib/design/tokens.test.ts` pins *"the two adopted
faces, Fraunces retired, Inter still reachable."*
The Design Constitution contains **no occurrence** of "Broadsheet", "Plex", or
"FD-".
This is not concealed: it is announced, reasoned, and mechanically enforced. It
is nonetheless a conflict between a governing text and the artefact it governs,
and the instrument that would resolve it (FD-A) is cited and not held.
*Evidence:* EV-006, CX-05, EV-020, EV-027.

**F-26 · Governance excess is NOT asserted, and the reason is evidentiary.**
*Class: a statement about the evidence.*
A11's excess test measures governance depth against operational load and
requires evidence of operational load or of bypass. **No evidence of bypass was
found anywhere in the corpus** — the one adjacent instance (the hosted migration
ledger applied through the SQL Editor rather than the CLI) is recorded by the
organization itself as *"the sanctioned alternative in docs/setup.md §2"* and
was reconciled. Operational load cannot be measured without production access
(AS-02). **Excess is therefore not asserted**, and its absence in this report is
a statement about the evidence, not a finding that none exists.
I note without asserting excess that the corpus carries ≈837 KB of governing
documents for a system whose own records place one book and one author in it.
A11's non-prescription rule — *"Do not treat every governance gap as requiring
formal policy"* — has a mirror the method does not state, and I decline to
supply it: the ratio of governance to operation is **not** by itself evidence of
excess, and I do not treat it as such.
*Evidence:* EV-011, EV-031; NA-02.

---

## A12 — Institutional-memory risk

Full inventory: Instrument 6.

**F-27 · The organization preserves its inputs meticulously and its judgements
inconsistently.** *Class: Observed.*
Preserved exceptionally well: an externally authored design package,
byte-for-byte, with nine SHA-256 digests recorded before placement and
re-verified after, a stated verification command, a lint exclusion and a test to
keep it out of the runtime, and an explicit rule that it *"records what was
proposed, not what was built"* (IM-10).
Not preserved: **the evaluation of that package** — *"Claude Design Handoff
Evaluation & Implementation Readiness Report, Founder Office, 23 August 2026"* —
cited twice, held nowhere (IM-05). Likewise the determinations FD-A…FD-H
(IM-03), and the verification scripts on which the Reviewer v3/v4 model
conclusions rest (IM-04).
The pattern: **what arrived from outside is preserved with digests; what the
organization decided about it is preserved as a citation.**
*Evidence:* IM-03, IM-04, IM-05, IM-10.

**F-28 · Corrections preserve prior state, consistently and structurally.**
*Class: Observed.* — *Positive finding.*
A12's supplementary question asks whether corrections overwrite prior state or
preserve it. Preservation is asserted in the canon (*"Correction / Amendment /
Withdrawal / Supersession — the four forward-only history mechanisms; never one
generic 'edited' state"*), enforced in the schema (immutability triggers,
append-only version tables, active-pointer FKs), practised in the registers
(*"nothing is silently rewritten"*), and probed in production per the
verification log (*"assignment correction preserves the original with
back-pointer and **never restores availability**"*). It is the most thoroughly
evidenced property of the organization at this baseline.
*Evidence:* EV-007, EV-011; `supabase/migrations/`.

**F-29 · The permanent record's independent retrievability is not established.**
*Class: Observed as to the absence of an evidenced path; the risk is recorded as
unestablished, not as high.*
Product Constitution XII states data models favour *"plain, durable shapes… that
could be exported and understood in twenty years without this codebase."* No
export or backup path for the permanent record — memory documents, chapters,
versions, findings, deliberations, review runs — is evidenced anywhere in the
repository (EV-026). Export machinery exists, and it is for *publication
artifacts*, not for the record. Platform-level backups may exist at the vendor
and were not verifiable (AS-02). Per A17 rule 2 this is recorded as a gap in the
evidence, not as a finding that no backups exist.
*Evidence:* EV-026, CX-08, NA-02.

**F-30 · The diagnostic team's own custody disposition is unagreed at closure.**
*Class: Observed — a defect in this diagnosis, not in the subject.*
A17 rule 7 requires the custody disposition of the team's working material to be
agreed with the organization **before the diagnosis closes**. No party was
available. The diagnosis closes with it open (IM-09, SQ-11).

---

## A13 — Systems and tooling discovery

**F-31 · The systems inventory is recorded as constrained by the unresolved
boundary.** *Class: Observed as to the list; the inventory's completeness is not
established.*
Named in the corpus: Supabase (hosted Postgres, auth, storage, `pg_cron`),
Vercel, GitHub, OpenAI (two call sites — editorial readings and hosted TTS),
Google Fonts via `next/font/google`. Nine runtime dependencies are claimed;
fourteen are declared (CX-03). `.env.example` states *"Never add the
service_role key here."*
Per F-02 and A3 step 11, **which of these the organization counts as part of
itself is not answered**, because the boundary is unresolved. The list is
recorded; the inside/outside judgement is not made.
*Evidence:* EV-029, EV-015, NA-10.

**F-32 · Acts with material, irreversible or externally visible consequence: the
authorization practice carries the fact superbly for publication acts and not at
all for two others.** *Class: Observed.*
A13 asks which routine acts carry such consequence **where the evidence warrants
the question**, and whether the authorization practice carries that fact. Which
acts warrant the question is a judgement recorded with its basis; mine follows,
and I impose no list of "risky acts".

| Act | Basis for asking | Does the authorization practice carry the consequence? |
| --- | --- | --- |
| **ISBN Assignment** | The corpus states it is permanent: *"forever — never reused, never transferred"* | **Yes, structurally.** The verification log records that a whole-book cascade erased editions and associations while assignments survived, and the identifier remained unassignable from a fresh book — *"the no-reuse law outlives the book"*. Database-enforced, probe-verified |
| **Declaring a Release** | *"the imprint's permanent declared publication act"*; externally visible | **Yes.** Evidence-gated: acceptance without evidence refused; withdrawal and supersession preserve every record; forward-only corrections |
| **Permanent deletion of an author or book** | Irreversible; destroys the permanent record | **Partially.** Staff-only, routed through a dedicated confirmation page, cascade graph audited in `docs/operations/permanent-deletion.md`. **No second party, no recorded authorization, and no durable record of the act itself is evidenced.** The care is in the mechanism; the authority is a single staff session |
| **Granting the staff role** | Confers every staff capability including the above | **No.** No record of any kind (F-11) |
| **Putting a change onto `main`** | By the organization's own model, deploys to production | **No.** No named authority; CI gates and approves nothing (F-11); a contested instance stands at this baseline (F-12) |
| **A production-verification session against the live system** | Creates and removes real rows in the production database | **Partially, and notably well:** TEST-labelled disposable fixtures with residue counted back to baseline (*"Zero fixture residue… 1 book, 1 author, 10 review runs"*). A convention recorded in a log, not a control |

*Evidence:* EV-011, EV-023, EV-024, `docs/operations/permanent-deletion.md`.

**F-33 · Current software is not proof of actual workflow, and here it is the
only proof available.** *Class: a limitation statement.*
A13 requires observing the workflow, then the tool. I could observe only the
tool — and only its source, not its running form. Every statement in this
diagnosis about what the platform does is a statement about what its committed
code and schema *say* it does.
*Evidence:* AS-02, AS-03.

---

## A14 — Operational friction and bottleneck discovery

Full inventory: Instrument 7.

**F-34 · The recurring friction the evidence supports is one shape repeated
seven times: one matter kept in several places, diverging silently.** *Class:
Observed.*
Applying A14's one-matter rule, the instances are recorded once each against
their matter: which migrations are applied (6 places, 1 divergence); capability
status (5 places, 12 divergences); a governing instrument's force (4 places); a
determination's outcome versus its reasoning (3 places hold the outcome, 0 the
instrument). The organization has a proven answer to exactly this shape — the
drift-guard test — and has applied it to four artefacts and not to these.
*Evidence:* FR-01…FR-04; EV-027.

**F-35 · Two of A14's six named fragmentation problems are directly evidenced;
four are not reachable.** *Class: Observed / blocked.*
- **Change detection** — evidenced: there is no concise answer to "what changed
  since I last looked", and A1's concept for it has **no equivalent term** in
  this organization (EV-T16). git history answers at commit granularity, not
  decision granularity.
- **Context without authority distinction** — evidenced: FR-04; and the corpus's
  own counter-practice (the design-source directory's "Not product truth" rule)
  shows the organization is alert to it.
- **State reconstruction** — evidenced weakly: FR-07.
- **Attention reconstruction**, **dependency invisibility**, **temporal
  fragmentation** — **not reachable.** Each requires production access or an
  account. Recorded as not establishable, not as absent.
*Evidence:* Instrument 7; NA-01, NA-02.

---

## A15 — Technology-worthiness

Full test: Instrument 9.

**F-36 · Outcome for the one testable problem: *existing system should be
improved rather than replaced*.** *Class: the instrument's outcome.*
A15's **preceding question** — *does a capability already exist, built, standby,
or dormant, awaiting a decision rather than a build?* — is answered **yes**: the
drift-guard pattern (EV-027), already built, already tested, already applied four
times, and already described by the organization as *"the drift guard, not a
second authority."* Per A15 a "yes" routes to this outcome or to Instrument 10,
and the test proceeds only if the organization's authority has decided
otherwise. **No such decision exists and no authority was available to make
one.** Extending the pattern would additionally require the organization to
establish an authoritative source for "capability status", which Instrument 4
records as having none — so building first would decide that question silently.
**This outcome authorizes nothing.**

**F-37 · Every other candidate problem: *insufficient evidence*.** *Class: the
instrument's outcome.*
Instrument 9 requires Instruments 4, 5 and 7 for the problem in question.
Instrument 5 is blocked and Instrument 7's frequency column is largely
uncountable. Editorial workflow friction, publication workflow friction,
author-facing friction, and decision latency are therefore recorded as
**Insufficient evidence** and are not tested and not concluded on.

---

## Findings recorded as *not* found

Recorded explicitly, so that absence is not read as clearance (A19; A17 rule 4):

- **No evidence of any control being bypassed** was found. This is the state of
  the evidence, not a clearance — bypass would most likely be visible in
  production or in accounts, and neither was reachable.
- **No contradiction within a single account** is recorded, because no account
  was obtained. This is an absence of accounts.
- **No governance excess** is asserted (F-26).
- **No role compression, no concentration, and no distribution** is recorded
  (F-10).
- **No finding about authors' experience of the platform** is recorded.
  Author-facing evidence was deliberately not sought (NA-04). The one
  author-facing friction the organization itself recorded — *"Assigned
  identifiers were invisible to the book's author"* — is the clearest indication
  that this diagnosis's blind spot is a real one and not an empty one.
