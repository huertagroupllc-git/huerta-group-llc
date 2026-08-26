# Evidence & Limitations Register — Instrument 1

**Subject organization:** Huerta Group Publishing (HGP)
**Method applied:** Huerta Group Organizational Diagnostic — Generation One,
Draft v3 (Provisional Draft), frozen text as supplied.
**Diagnostic baseline:** repository working copy at
`e28f12ad8a5e5531bed9fca20225a967669ab2de` (`e28f12a`), branch
`broadsheet-design-adoption`, `git status --porcelain` empty at open and at
close.
**Point in time:** 2026-08-25.

---

## Header — required on every instrument

### Label: **RECORDS-ONLY**

No stakeholder account was obtained. No person was asked anything; no person
was available to ask. Per A3 step 8 this diagnosis is labelled **records-only**
on every output it produces, and per A18 that label constrains the permitted
outcomes.

### Label: **AUTHOR-OF-RECORDS**

Per A18. See `advancement.md` §3 for the full statement. In short: 202 of the
203 commits in the subject repository carry one author name, and that
individual is, on the corpus's own account, the organization's accountable
authority. The diagnosing institution (Huerta Group) and the subject (HGP) are
related cases, not independent organizations (A20). This second-author context
did not itself author any subject record, and that fact does not remove the
condition — it only relocates it.

### Two-pass access statement (A3 step 10)

The two passes are recorded separately and are never merged. Pass (a) is what
was *stated to exist or identified*; pass (b) is what access was *actually
obtained*. Re-derivation after each stakeholder session (A3 step 10) has been
performed **zero times**, because no stakeholder session occurred. The
statement in force is therefore the diagnostic team's own inventory,
un-re-derived.

| # | Corpus / system / environment / person | (a) Stated to exist or identified — by whom, when, on what basis | (b) Access actually obtained — full / partial / none, how verified, what "partial" excluded |
| --- | --- | --- | --- |
| AS-01 | Venture repository working copy | Identified by the engagement brief, 2026-08-25 | **Full**, read-only. Verified: `git rev-parse HEAD` = `e28f12ad8a5e…`; `git status --porcelain` empty; 438 tracked files enumerated via `git ls-files`. Excluded by my own decision, recorded here: `.env.local` (untracked credentials file — present in the working copy, deliberately not opened); `node_modules/`, `.next/`, `tsconfig.tsbuildinfo` (untracked or derived build artifacts, not inspected). |
| AS-02 | Hosted Supabase production project `jlsvwqfptjbhbioolonh` | Stated to exist by `docs/operations/production-migration-baseline.md`, verified entries dated 9–11 August 2026 | **None.** Excluded by the engagement's evidence boundary. Not sought, not reached, not inferred. |
| AS-03 | Live deployment / Vercel production URL | Stated to exist by `README.md` ("automatic Vercel production deploy… test on the live URL") and `docs/constitution/engineering-constitution.md` §1 | **None.** Excluded by the engagement's evidence boundary. |
| AS-04 | Founder Office authorizations, directives and determinations (Production Bridge program; Cover / Print / Edition / Publication-Metadata / Metadata-Consumption Phase 1 directives; the HGP Broadsheet Design Adoption authorization; determinations FD-A, FD-B, FD-C, FD-E, FD-F, FD-G, FD-H) | Stated to exist by citation in 36 files at this baseline (21 Markdown, 9 source/CSS, 6 migrations) | **None.** No instrument of this class is held in the authorized corpus. Whether it exists elsewhere is not established (A17 rule 4). |
| AS-05 | "Claude Design Handoff Evaluation & Implementation Readiness Report, Founder Office, 23 August 2026" | Stated to exist by `docs/design/broadsheet-2026-08/PROVENANCE.md` and `docs/design/broadsheet-implementation.md` | **None.** Cited, not held. |
| AS-06 | A fourth constitution | Cited as "all four constitutions" by 11 documents at this baseline; three documents named "Constitution" are held | **None** for the fourth. See EV-021. |
| AS-07 | Verification scripts `phase3j_verification.ts`, `phase_reviewer_v3_s4_verification.ts` | Cited by `docs/globalization/editorial-recall-engineering/` records as the evidence for Reviewer v3/v4 conclusions | **None.** Cited, not held. |
| AS-08 | Author-confidential material — manuscripts, Author Memory, Book Memory, findings, deliberations, review readings | Stated to exist by the terminology canon, the blueprints, and the production counts quoted in the migration baseline | **None sought.** Excluded by the engagement's evidence boundary. Where the diagnostic would have needed it, that is recorded as an evidence limitation, not filled. |
| AS-09 | Persons: the Founder; the Founder Office; staff; "the publisher"; "standing implementation authority" / "Publishing Development authority"; "the imprint"; "(Opus 4.8)"; the author of the Cycle-001 book; the Supabase project owner | Each named in the corpus (see EV rows) | **None.** No stakeholder access of any kind. No person was asked; no person was available. |
| AS-10 | Sibling corpus at `/Users/esteban/GitHub/huerta-group/huerta-group-llc/institution/` | Identified **only** by the engagement brief, which places it off limits | **None.** Not read, not listed, not grepped, not opened. Recorded here because A3 step 10 requires recording a corpus that was identified, and because AS-04's absence may be explained by it (unverified — see EV-020). |
| AS-11 | Files in the diagnostic team's own scratchpad parent directory (`extract*.txt`, `instr*.xml`, `stage6-package-manifest.txt`) | Their filenames became visible when I created my own output directory | **None.** Not opened. They are the engagement's own working material and may concern the prior application, which the brief places off limits. Recorded for custody honesty (A17 rule 7). |

### Effect of the access position on confidence (A3 step 6)

The subject's own Engineering Constitution §1 states: *"There is one environment
that matters: production… If something cannot be verified in production, it is
not done; claims of 'verified' require evidence from the live deployment."*
Access to that environment is **none**. Therefore every claim in this diagnosis
about what the organization *actually does* — as distinct from what its records
*say* and what its committed code *would* do — is unverifiable by this
diagnosis on the organization's own stated standard. This is the single largest
constraint on the whole exercise and is carried into A18.

---

## Register conventions used

- One row per evidence item. `EV-nnn`.
- **Class** is exactly one of Observed / Client-Stated / Inferred (A2).
- **Obtained via** is method step / prior knowledge / volunteered / follow-up
  (A17 rule 6).
- A supplied document yields **two rows** where both its existence and the
  organizational condition it asserts matter (A2 rule 4): an `-a` row
  (existence and content: Observed) and a `-b` row (asserted condition:
  Client-Stated).
- **Opposing account** is filled for every row a finding relies on, with
  *sought* / *not sought* / *sought and unavailable* and the reason (A2 rule 5).
- **Shares a source with** is filled where a row would otherwise read as
  corroboration.
- "What the evidence supports" states the claim, not the conclusion.

A note that applies to the whole register and is not repeated in every row:
**opposing account = *sought and unavailable*, reason: the engagement forbids
stakeholder contact and no person is available to answer.** Where a row's
opposing account differs from this, it says so.

---

## Section 1 — Baseline and corpus state

**EV-001 · Repository identity and cleanliness**
Source: the working copy itself · Source owner: HGP (repository) ·
Class: **Observed** · Obtained via: method step (A3 step 1) ·
Subject: point in time and corpus state ·
Supports: at the diagnostic point in time the working copy stands at
`e28f12ad8a5e5531bed9fca20225a967669ab2de`, on branch
`broadsheet-design-adoption`, with an empty `git status --porcelain`, 438
tracked files, and 203 commits from `2b33794` (2026-07-02) to `e28f12a`
(2026-08-25) ·
Stated force: none (machine output) ·
Limitations: none for the fact itself ·
Conflicts: see EV-030 ·
Provenance: `git rev-parse HEAD`, `git status --porcelain`, `git ls-files`,
`git log`, run read-only on 2026-08-25.

**EV-002 · Authorship concentration in the repository record**
Source: `git log` · Class: **Observed** · Obtained via: method step ·
Subject: who produced the corpus ·
Supports: 202 of 203 commits carry the author name `Esteban Huerta`; 1 (the
initial commit) carries `huertagroupllc-git`. ·
Limitations: a git author field records who committed, not who decided,
authored, or approved. It is not evidence of authority (A6 non-prescription:
"Do not treat one person's presence in every record as proof that authority is
theirs"). ·
Provenance: `git log --format='%an <%ae>' | sort | uniq -c`.

**EV-003 · Corpus composition**
Source: the repository · Class: **Observed** · Obtained via: method step ·
Supports: the tracked corpus comprises 152 files under `lib/`, 94 under
`docs/`, 81 under `app/`, 44 under `supabase/` (42 of them migrations), 35
under `components/`, 13 under `public/`, 3 under `messages/`. By bytes:
`docs/**/*.md` ≈ 837 KB; `lib/` + `app/` + `components/` ≈ 2.20 MB;
`supabase/migrations/` ≈ 439 KB. ·
Provenance: `git ls-files`, `wc -c`.

---

## Section 2 — Authoritative records (governing instruments)

**EV-004a · Product Constitution — existence and content**
Source: `docs/constitution/product-constitution.md` · Source owner: HGP ·
Class: **Observed** · Obtained via: method step (A3 step 2, authoritative) ·
Supports: the document exists, is titled "Product Constitution — v1", carries
the line *"Status: proposed, awaiting approval. Once approved, every future
capability is measured against this document before it ships,"* and states
fifteen numbered principles (I–XV). ·
Stated force: *"proposed, awaiting approval"* (the document's own words). ·
Provenance: read 2026-08-25 at `e28f12a`.

**EV-004b · Product Constitution — asserted organizational condition**
Class: **Client-Stated** · Obtained via: method step ·
Supports: that fifteen stated principles govern what the platform is; that no
capability ships unmeasured against them. ·
Limitations: the document's own status line withholds the approval on which its
governing force is conditioned ("*Once* approved…"). No approval act for it is
held in the authorized corpus. ·
Conflicts: EV-022, EV-023.

**EV-005a/b · Engineering Constitution**
Source: `docs/constitution/engineering-constitution.md` ·
(a) **Observed**: exists; "Status: proposed, awaiting approval"; thirteen
numbered sections; §1 "Production-first" states *"There is one environment that
matters: production… No Docker, no local database, no localhost-only features.
If something cannot be verified in production, it is not done; claims of
'verified' require evidence from the live deployment"*; §13 states *"Durable
decisions — blueprints, constitutions, terminology, reviews, setup steps — are
committed files in this repository."*
(b) **Client-Stated**: that this is how the platform is actually built. ·
Limitations: (b) is uncorroborated by observation of operation; the environment
§1 designates as the only one that matters is outside my access (AS-03). ·
Obtained via: method step.

**EV-006a/b · Design Constitution**
Source: `docs/constitution/design-constitution.md` ·
(a) **Observed**: exists; "Status: proposed, awaiting approval. Every future
screen follows this document; deviations require amending it first"; §2
"Typography carries meaning" names *three* faces with fixed jobs — Fraunces
(display), Newsreader (text), Inter (utility only) — and states *"If a screen
needs a fourth face or a fifth heading level, the screen is wrong."* Twelve
numbered sections; §11 is a floors section; the file contains no occurrence of
"Broadsheet", "Plex", or "FD-".
(b) **Client-Stated**: that every screen follows it and deviations were
amended first. ·
Conflicts: EV-024 (a deviation from §2 exists at this baseline and the document
is not amended). · Obtained via: method step.

**EV-007a/b · Terminology canon**
Source: `docs/constitution/terminology.md` ·
(a) **Observed**: exists; 354 lines; "Status: canon in force — each section
records its ratification (July–August 2026); amended in place, never silently
rewritten. One concept, one word — identical in UI, code, schema, and docs.
Deviating copy is a bug." Contains eleven ratified term sections. **This is the
only document in `docs/constitution/` whose status line asserts that it is in
force.**
(b) **Client-Stated**: that the canon is in force and observed in UI, code,
schema and docs. ·
Corroboration note: partially corroborated *within the corpus* by
`lib/terminology/canon-source.ts`, which parses this file and pins application
copy to it by test (EV-027). That is machinery authored by the same party and
is recorded as such — see "Shares a source with" below. ·
Shares a source with: the canon it checks; both are HGP-authored. Consistency,
not independent corroboration (A2 rule 5). · Obtained via: method step.

**EV-008a/b · Founder Validation Program — Operational Standard**
Source: `docs/validation/founder-validation-program.md` ·
(a) **Observed**: exists; "Status: established by Founder Office directive at
baseline `ab28d83`. This is the repository's first Operational Standard of its
class." Twelve numbered sections. §8 names two authorities: *"the repository's
standing implementation authority (the blueprint → authorization →
implementation → verification → as-built discipline), which is what the
directive names Publishing Development authority"* and *"the Founder Office"*,
to which escalation *"is required for any disposition whose action would change:
a constitution; governance or authority structures; approved architecture;
provenance or lifecycle semantics; security posture (RLS, authority
boundaries)."* §12 designates Founder Validation Cycle 001, subject *"the first
complete end-to-end publication performed through Huerta Group Publishing — a
real book,"* opened at baseline `ab28d83`, hosted ledger 35/35.
(b) **Client-Stated**: that these authorities exist and operate as described. ·
Limitations: the authorizing Founder Office directive is itself not held
(AS-04). The document says so about two of its own citations — see EV-020. ·
Obtained via: method step.

**EV-009 · Founder Validation registers — current contents**
Source: `docs/validation/observation-register.md`,
`docs/validation/theme-register.md`, `docs/validation/decision-history.md` ·
Class: **Observed** · Obtained via: method step ·
Supports: at this baseline the Founder Validation Register lists **exactly one**
observation (`FVO-001-001`, recorded 2026-08-11, cycle 001, classification
*Implementation Defect*, theme *unassigned*, evidence strength *Single
Occurrence*, disposition *Closed*); the Theme Register lists **zero** themes
("*No themes opened yet. The first theme will be `FVT-001`*"); the Decision
History records the program's founding entry dated 2026-08-11 and states
"*No Validation Decisions recorded yet.*" ·
Stated force: the registers' own words, quoted. ·
Limitations: the registers assert their own completeness by being append-only;
that assertion is Client-Stated. ·

**EV-010 · FVO-001-001 — the single observation's own account of its origin**
Source: `docs/validation/observations/FVO-001-001.md` · Class: **Observed**
(as to content) · Obtained via: method step ·
Supports: the observation records its Observer/source as *"Implementation-phase
production verification, Edition Architecture Phase 2 (Founder Office
authorization), August 11, 2026 working session"*; its Context as *"Disposable
verification fixtures"*; its Disposition authority as *"standing implementation
authority"*; its baseline as `49b015f`, hosted ledger 40/40. ·
Limitations: what this supports is a fact about the record, not about real use.
The condition it asserts about the platform's behaviour is Client-Stated and
turns on production access I do not have. ·
Conflicts: none internal; see finding F-07 for the relation between this row and
EV-008's §1 and §12.

---

## Section 3 — Operational records (as-built, operations, blueprints)

**EV-011a/b · Production migration baseline**
Source: `docs/operations/production-migration-baseline.md` (315 lines) ·
(a) **Observed**: exists; is an append-only dated verification log; its Standing
Rule requires repository/production append-only match; its eighth entry (dated
2026-08-11) states *"42/42 in exact local = remote agreement"* and records 33
production probes, two defects found and fixed forward (migrations 41, 42), and
*"Zero fixture residue (baseline restored exactly: 1 book, 1 author, 10 review
runs; all publication and edition tables 0)."* Earlier entries record that on
2026-08-09 the hosted migration ledger was **empty** and was repaired
owner-approved, and that a first attempt was blocked because *"the machine's
Supabase CLI session belonged to an account that does not own the production
project."*
(b) **Client-Stated**: that the hosted database matches the repository's 42
migrations; that production holds one book, one author and ten review runs at
the verification date; that all recorded probes passed. ·
Limitations: (b) is not independently verifiable by this diagnosis — AS-02 and
AS-03 are "none". The probes were designed, executed, and recorded by the same
party (A2 rule 5 final sentence). ·
Shares a source with: the migrations it verifies and the code it probes; all
HGP-authored. ·
Obtained via: method step.

**EV-012 · Migration set — direct count**
Source: `supabase/migrations/` · Class: **Observed** · Obtained via: method step
· Supports: the repository holds **42** migration files, `20260702000000` through
`20260822000000`; they contain **57** distinct `create table` statements and
**zero** `drop table` statements; the first 29 files create exactly **27**
tables and files 30–42 create a further **30**. ·
Corroboration note: my counting method reproduces the organization's own figure
— EV-011 records *"All 27 public tables exist"* at the 29-migration state, and
my independent count of the first 29 files is 27. This is a records-versus-
records agreement inside one corpus, not independent corroboration. ·
Provenance: `git ls-files supabase/migrations`, `grep -oE '^create table…'`,
counted 2026-08-25.

**EV-013 · setup.md migration count**
Source: `docs/setup.md` §2 · Class: **Observed** · Obtained via: method step ·
Supports: the document states *"**42 migrations**, applied strictly in filename
order"* and enumerates them 1–42. ·
Conflicts: EV-014.

**EV-014 · README quantitative claims**
Source: `README.md` · Class: **Observed** (as to content) · Obtained via: method
step · Supports: at this baseline the README states *"Nine runtime
dependencies"* (line 127), *"parallel domain models across 44 tables"*
(line 130), and *"**29 migrations** applied in order"* (line 166). ·
Conflicts: EV-012 (42 migration files; 57 tables created, none dropped),
EV-013 (setup.md says 42), EV-015 (package.json lists 14 dependencies). ·
Context: `git log -- README.md` shows the "Nine runtime dependencies" and
"29 migrations" strings unchanged across the last eight commits that touched
the file, while the table figure moved 35 → 41 → 44 and then stopped. The three
figures were therefore maintained by hand and stopped being maintained. This is
recorded as context, not as a conclusion about anyone's diligence.

**EV-015 · package.json dependency count**
Source: `package.json` · Class: **Observed** · Obtained via: method step ·
Supports: the `dependencies` object holds **14** entries
(`@supabase/ssr`, `@supabase/supabase-js`, `fontkit`, `next`, `next-intl`,
`react`, `react-dom`, `react-markdown`, `rehype-stringify`, `remark-parse`,
`remark-rehype`, `server-only`, `unified`, `unpdf`); `devDependencies` holds 11.

**EV-016 · Blueprint status lines**
Source: `docs/blueprints/*.md`, first status line of each ·
Class: **Observed** · Obtained via: method step ·
Supports: at this baseline, of 20 blueprint files, **ten** carry a status line
of the form "proposed, awaiting approval" or "proposed, awaiting Founder Office
approval" (`audio-review-hosted-tts`, `audio-review-mode`,
`capability-4-editorial-findings`, `capability-5-constitution-review`,
`cover-production`, `edition-architecture`, `editorial-deliberation`,
`print-production`, `publication-metadata`, `publication-metadata-consumption`,
`publication-release`); one is "adopted July 2026"; two are "complete —
implemented and accepted"; one is "implemented"; one is "approved by Founder
Office determination, August 2026"; one is "proposed, awaiting review. No
application code exists yet"; and three carry no status line at the head
(`account-deletion-map`, `manuscript-import`,
`membership-retention-and-support`). ·
Cross-reference: EV-017.

**EV-017 · The corpus's own disposition of that condition**
Source: `README.md` "Governing canon" section · Class: **Observed** ·
Obtained via: method step ·
Supports: the README states *"Older blueprints keep their original status lines
as history; the capabilities they describe are live."* ·
Limitations: this is a stated convention covering blueprints. It does not
address the three constitutions, which are not blueprints and whose status lines
also read "proposed, awaiting approval" while the same README lists them under
"Governing canon" and instructs "Read these before proposing changes; every
screen and feature is measured against them."

**EV-018 · Broadsheet as-built status**
Source: `docs/design/broadsheet-implementation.md` · Class: **Observed** (as to
content) · Obtained via: method step ·
Supports: the document's status line reads *"Status: **work packages 1–6
complete on the `broadsheet-design-adoption` branch, unpushed.** Pre-production
only — production replacement is not authorized and has not been performed."* ·
Conflicts: EV-019. · Stated force: the record's own emphasis (bold in original).

**EV-019 · Local remote-tracking refs**
Source: the repository's `refs/remotes` · Class: **Observed** ·
Obtained via: method step ·
Supports: `refs/remotes/origin/main` and `refs/remotes/origin/HEAD` both point
at `e28f12a`; `refs/remotes/origin/broadsheet-design-adoption` points at
`e2097a5`, four commits behind; `git merge-base --is-ancestor e28f12a
refs/remotes/origin/main` succeeds. ·
Limitations: a remote-tracking ref reflects the last fetch performed by this
working copy, not the current state of the remote. I cannot verify the remote
without network access, and I cannot verify the deployment at all (AS-03).
What is Observed is the state of these local refs; that the branch reached
`main` is **Inferred** and identified as mine. ·
Conflicts: EV-018.

---

## Section 4 — Cited, not held (A3 step 9)

Citation check performed two ways. **Relative markdown links:** all 60
relative links across the 78 tracked Markdown files resolve to existing paths —
zero unresolved. **Cited authorities and code paths:** the following are cited
by records at this baseline and are not held in the authorized corpus. Each is a
standard "cited, not held" register row. Per A17 rule 4, none of these is
evidence that the cited thing does not exist.

**EV-020 · Founder Office instruments — cited, not held**
Class: **Observed** (that the citations exist) · Obtained via: method step ·
Supports: 21 Markdown files and 15 non-Markdown files (9 source/CSS files and 6 migrations) reference the Founder Office;
the referenced instruments themselves — the Production Bridge program
authorization, the Cover / Print / Edition / Publication-Metadata /
Metadata-Consumption Phase 1 directives, the HGP Broadsheet Design Adoption
authorization, the Founder Validation Program directive at baseline `ab28d83`,
and determinations FD-A, FD-B, FD-C, FD-E, FD-F, FD-G, FD-H — are not present as
files. A `git ls-files` filter for `authoriz|directive|determination|charter|
policy|standard` returns one hit, a source file (`lib/editorial-ai/model-policy.ts`),
and no governance instrument. ·
The corpus records a related fact about itself: the Operational Standard's
"Repository-native placement note (discrepancy disposition)" states *"the
authorizing directive references an existing 'Operational Standards' class and
an 'Institutional Evolution Log.' Neither existed in this repository before this
document,"* and §10 states *"No separate 'Institutional Evolution Log' exists."*
The organization has therefore itself recorded one instance of cited-not-held
and disposed of it. ·
Limitations: these instruments may be held in a corpus outside my access
(AS-04, AS-10). Not established either way.

**EV-021 · "All four constitutions" — cited, not held**
Class: **Observed** · Obtained via: method step ·
Supports: eleven documents cite *"all four constitutions"* as governing canon
(`capability-3-writing-workspace`, `capability-4-editorial-findings`,
`capability-5-constitution-review`, `cover-production`, `edition-architecture`,
`editorial-deliberation`, `print-production`, `production-bridge`,
`publication-metadata`, `publication-metadata-consumption`,
`publication-release`; and `docs/architecture/editorial-ai-engine.md` refers to
"the four constitutions"). `docs/constitution/` holds three files named
Constitution — Product, Design, Engineering — plus `terminology.md`. Four of the
citing sentences enumerate the terminology document *separately* from the four
(e.g. `production-bridge.md`: *"all four constitutions, the terminology
document, the Book Lifecycle…"*), which is inconsistent with terminology.md
being the fourth. ·
Limitations: which document is intended as the fourth is not established on the
evidence. Not resolved here. Raised as RQ-02.

**EV-022 · Cited code paths not held**
Class: **Observed** · Obtained via: method step ·
Supports: six backticked code paths cited in `docs/` do not exist in the tracked
tree at this baseline: `app/layout.tsx` (cited by
`docs/globalization/public-multilingual-architecture/architecture.md`; the tree
holds only route-group layouts — `app/(app)/layout.tsx`,
`app/(public-en)/layout.tsx`, `app/(public-es)/layout.tsx`,
`app/(app)/admin/layout.tsx`); `lib/root/body.ts` and `lib/root/providers.tsx`
(same document; `lib/root/` holds only `fonts.ts`);
`lib/editorial-ai/model-pricing.ts` (cited by
`reviewer-v3-hybrid-model-architecture.md`); `phase3j_verification.ts` (same);
`phase_reviewer_v3_s4_verification.ts` (cited by
`reviewer-v4-human-signoff-corrections.md`). ·
Weight note: the last two are the **verification scripts on which the Reviewer
v3/v4 conclusions rest**. Their absence is an institutional-memory item, not a
documentation defect — see Instrument 6, IM-04. ·
Limitations: two further apparent misses (`github/workflows/ci.yml`,
`style.css`) are artefacts of my matching — the first is `.github/workflows/ci.yml`,
which exists; the second names a file inside a generated EPUB, not a repository
file. I record my own false positives rather than let them stand.

---

## Section 5 — The organization's own terms (A1 terminology discovery)

Recorded as *Observed* usage, with who used the word and where. These are the
organization's words; they are used throughout my instruments and are never
narrowed into a sense the organization did not give them. Where the
organization's word is broader than the concept the method offered it for, the
breadth is recorded as breadth (A1, "generality is recorded as generality").

| EV | Term (the organization's own) | Where used, and by whom | What the organization gives it | Method concept it stands against, if any |
| --- | --- | --- | --- | --- |
| EV-T01 | **the Founder Office** | Named in 21 Markdown files and 15 non-Markdown files (9 source/CSS files and 6 migrations); authored none of them in its own voice within the corpus | The authority that determines, approves, authorizes, and to which escalation is required for constitutions, governance and authority structures, approved architecture, provenance and lifecycle semantics, and security posture (Operational Standard §8) | *the accountable authority* — the condition holds |
| EV-T02 | **the imprint** | Terminology canon (Production Bridge and Release sections); `publication_authorizations.authority` column, constrained `check (authority = 'imprint')` | "The author **approves** (their own act); the imprint **authorizes**." A release is "the imprint's permanent declared publication act" | a second accountable authority, for a distinct decision class |
| EV-T03 | **standing implementation authority**, also **Publishing Development authority** | Operational Standard §8; FVO-001-001 disposition | Authority for "routine refinement — bounded implementation improvements within approved architecture", operating through "the blueprint → authorization → implementation → verification → as-built discipline" | delegated authority; the delegating instrument is not held (EV-020) |
| EV-T04 | **the author** | Throughout | Holds Approval of a publication candidate; holds Resolve and Set Aside on Findings; "Author-first, always" | an accountable authority for a distinct decision class |
| EV-T05 | **staff** | `is_staff()` in migrations and `lib/auth/session.ts` | The only role the software has: "JWT app_metadata.role = 'staff', assigned manually in Supabase. No second role system" | *execution* and *custody*, and in practice the surface through which several authorities act |
| EV-T06 | **the publisher** | `lib/auth/actions.ts` sign-in copy: "Please contact the publisher"; README: "Access is provisioned by the publisher; there is no self-serve sign-up" | The party that provisions access. Not defined elsewhere; its relation to the Founder Office, the imprint, and staff is not stated | unresolved |
| EV-T07 | **the permanent record** | Product Constitution IV, VI; terminology canon ("Source of Truth — Remove from UI. Software jargon… the interface says 'the permanent record'") | The append-only body of finalized versions. **The organization has expressly removed "Source of Truth" from its interface vocabulary while keeping it for engineering docs** | *the authoritative source*. Note: the organization's own term is *broader* than A9's concept — it names the whole append-only body, not the one place a given fact is established. Recorded at the breadth given |
| EV-T08 | **as-built record** | `docs/operations/`, `docs/design/broadsheet-implementation.md` | The record of what was actually built, written after implementation, distinct from the blueprint that proposed it | *a representation*; also the organization's own device for separating proposal from fact |
| EV-T09 | **blueprint** | `docs/blueprints/` | The pre-implementation design record; "Blueprint only — no code, no migrations, no schema" | anticipated but not established work |
| EV-T10 | **Founder Validation Cycle / Observation / Theme / Decision** | `docs/validation/` | The program objects for lived evidence: `FVO-`, `FVT-`, `FVD-` | the organization's own evidence-classification apparatus — see method-observations MO-05 |
| EV-T11 | **Finding · Deliberation · Judgment · Adopted · Implemented · Resolve · Set Aside** | Terminology canon, "Editorial review terms (ratified August 2026)" | Held expressly distinct, with five "Held distinct (ratified)" pairs stated | The organization independently maintains distinctions of exactly the kind A6 requires (authority ≠ responsibility ≠ execution), inside its editorial domain |
| EV-T12 | **the Workshop · the Study · the Document Room · the Publication Desk · the rooms rail** | Terminology canon; `docs/design/broadsheet-implementation.md`; route files | The named environments of the signed-in product. "Document Room — Keep (internal only). The UI never says it" | *where a matter is worked through* — the organization has names for its environments and distinguishes internal names from surfaced ones |
| EV-T13 | **determination** (FD-A … FD-H) | `app/globals.css`, `lib/root/fonts.ts`, `lib/design/*.test.ts`, `docs/design/broadsheet-implementation.md` | A Founder Office ruling on a specific question, cited by letter | the record of a decision. The instruments are not held (EV-020) |
| EV-T14 | **(Opus 4.8)** | Four status lines reading "Status: APPROVED for implementation (Opus 4.8), July 2026" plus two document titles | **Not defined anywhere in the corpus.** Six occurrences, no definition | Recorded as an undefined designation appearing in the position where an approving authority would appear. I do not infer what it denotes. RQ-03 |

**EV-T15 · A term used in two senses within the organization** (A1, final rule)
*Revision* carries two meanings, both recorded, neither corrected: (i) a Book
Lifecycle stage — "Revision — Keep. Lifecycle: editorial findings being
incorporated"; and (ii) "**Manuscript revision** — Descriptive only.
Author-facing phrase… **Not** a first-class institutional object… Not to be
confused with the lifecycle stage **Revision** (above)." The organization has
itself recorded the collision and its disposition. Class: **Observed**.

**EV-T16 · "No equivalent found" entries** (A1 permits and expects these)
For the method's concept *what changed since an accountable authority last
looked* (A1, "Since Last Review"), no organizational term was found in the
corpus. For *the attention layer*, no organizational term was found. Both are
recorded as unnamed. Per A1 this is a finding about the state of the evidence,
not about the organization.

---

## Section 6 — Prior-knowledge rows (A17 rule 6)

These items were in my context before any method step. **Under A17 rule 6 each
supports no finding**, and none has been converted by a method step. They are
recorded so that the method, not my familiarity, is what is evaluated. I flag
them here and at every point of potential use.

**EV-PK-01 · Injected user memory concerning HGP**
Source: an auto-memory index injected into my system context ·
Class: **not classified** — prior knowledge is not evidence ·
Obtained via: **prior knowledge** ·
Content, in substance: that HGP is a hosted-Supabase/Vercel project tested on a
live URL with no local Docker; that a globalization program, membership/support
work, a PDF import pipeline, a "Production Bridge" chain and a "Broadsheet"
adoption exist; specific commit identifiers including `e28f12a`, `dd54b14`,
`ab28d83`-adjacent figures, a "39/39" verification count, and constraints such
as "ISBN recording only, no assignment". ·
Disposition: **supports no finding.** Where a method step independently
obtained the same fact, the *method-step row* is cited and this row is not. In
particular: EV-011 and EV-012 were obtained by reading the repository, and the
"39/39" figure I held in advance is **not** the figure my method step produced
for this baseline (42/42, EV-011) — I record that divergence rather than
silently adopting either. ·
Custody: this material is the diagnostic team's own; inventoried in Instrument 6
as implementer-side custody.

**EV-PK-02 · Injected user memory concerning Huerta Group LLC and a methodology
program**
Obtained via: **prior knowledge** · Disposition: **supports no finding.**
Content, in substance: identifiers of the form `fd-00nn`, `FD-V1/V2/V4`,
`mr-0004`, a "Stage 3 stopped at the stakeholder boundary", frozen drafts, and
"Founder must answer Q1–Q30, never fabricate". ·
Flag at point of use: the subject corpus uses determination identifiers
`FD-A`…`FD-H` (EV-T13). These are **a different scheme** from the `fd-00nn` /
`FD-V…` identifiers in my prior knowledge. I have not treated them as related,
and I record explicitly that I did not use the prior-knowledge scheme to
interpret the subject's.

**EV-PK-03 · Injected search tradecraft**
Obtained via: **prior knowledge** · Content: that markdown in this corpus
hard-wraps near 72 characters and that multi-word greps therefore produce false
negatives unless whitespace is flattened. ·
Disposition: this is technique, not evidence, and it supports no finding. I
nonetheless flag it: it shaped *how* I searched. Where a multi-word search
mattered I used a wrap-tolerant method (Python over whole file contents rather
than line-based grep), and I confirmed the wrapping by direct observation of the
files rather than relying on the memory.

**EV-PK-04 · Engagement-supplied framing**
Obtained via: **volunteered** (A17 rule 6: recorded with its class and traced to
the step that would have requested it) ·
Content: that a prior authoring context applied this same method to this same
subject; that an off-limits corpus exists at
`…/huerta-group-llc/institution/`; that a fourth thing called "Stage 5" may be
in play. ·
Disposition: supports no finding about the subject. It does bear on my
independence and on AS-10, and it is recorded there.

---

## Section 7 — What could not be obtained, and why

Each is a register row, never an inference (A3 step 4).

| ID | Item | Source status | Reason | Every finding that would have used it |
| --- | --- | --- | --- | --- |
| NA-01 | Any stakeholder account whatsoever | **not accessible** | The engagement forbids stakeholder contact; no person is available | A1 (whose words), A3 step 8, A4 (what its people say it is for), A6 (accounts from those who wait for decisions), A7 (habit-held work), A8 (why decisions waited), A9 (source of resort, per participant), A10 (walking the last actual instance) |
| NA-02 | The hosted production database and its state | **not accessible** | Evidence boundary | Every claim about what the organization actually holds, produces, and decides; A5 outputs; A8 decision queue; A14 friction frequency |
| NA-03 | The live deployment | **not accessible** | Evidence boundary | Every claim measured against Engineering Constitution §1's own standard of "done" |
| NA-04 | Author-confidential material | **not sought** | Evidence boundary; and A17 rule 5 | A5 (the outputs themselves), A9 (information domains that are the product), A12 (what knowledge would be lost) |
| NA-05 | Founder Office instruments (AS-04) | **not accessible** | Not held in the authorized corpus; may be held elsewhere | A6 delegated-authority instruments; A11 governance authority; the approval status of every "proposed" instrument |
| NA-06 | The fourth constitution (AS-06) | **not known to exist** in the authorized corpus, though cited | Cited by 11 documents; not held | A11; the completeness of the governing canon |
| NA-07 | Reviewer v3/v4 verification scripts (AS-07) | **not accessible** | Cited, not held | Any reliance on the Reviewer v3/v4 validation conclusions |
| NA-08 | Observation of any workflow as performed (A10) | **not accessible** | Requires either production access or a participant | **A10's trail-first procedure could not be exercised at all.** See Instrument 5, which is blocked |
| NA-09 | An inventory of the organization's people and roles, as the organization describes them (A3, evidence requested at the outset) | **not supplied** | No one to request it from; not present in the corpus | A6, A7 |
| NA-10 | The organization's own statement of its boundary (A3 step 11) | **not supplied** | No one to request it from; the corpus contains no boundary statement | A12's "outside the organization"; A13's systems inventory. **Both are consequently recorded as unanswerable on present evidence, not answered** |
| NA-11 | Decision latency and the queue of decisions awaiting an authority (A8) | **not accessible** | Requires production or accounts | A8 — "latency not establishable from available evidence" is recorded instead |
| NA-12 | Whether `origin/main` at the true remote matches the local tracking ref | **not accessible** | No network; deployment observation barred | EV-019 / F-05: the ref state is Observed; the push is Inferred and marked as mine |

---

## Section 8 — Contradictions, preserved (A17 rule 3)

Recorded as contradictions. **The diagnostic does not choose between them.**

| ID | The two statements | Both sources | Note |
| --- | --- | --- | --- |
| CX-01 | *"**29 migrations** applied in order"* (README) vs *"**42 migrations**, applied strictly in filename order"* (setup.md §2) vs 42 files present (EV-012) vs *"42/42 in exact local = remote agreement"* (migration baseline, eighth entry) | `README.md`:166; `docs/setup.md`:35; `supabase/migrations/`; `docs/operations/production-migration-baseline.md` | Three records and the tree agree on 42; one record says 29. I do not "correct" the README; I record that the corpus contains both figures at the same commit |
| CX-02 | *"parallel domain models across 44 tables"* (README) vs 57 distinct `create table`, zero `drop table` (EV-012) | `README.md`:130; `supabase/migrations/` | 44 corresponds to neither the 29-migration state (27) nor the 42-migration state (57) |
| CX-03 | *"Nine runtime dependencies"* (README) vs 14 `dependencies` entries (EV-015) | `README.md`:127; `package.json` | |
| CX-04 | *"work packages 1–6 complete on the `broadsheet-design-adoption` branch, **unpushed**… production replacement is not authorized and has not been performed"* vs `refs/remotes/origin/main` = `e28f12a` = HEAD | `docs/design/broadsheet-implementation.md`:3–5; the repository's own refs | The as-built record and the repository's ref state disagree about whether this work reached `main`. Under Engineering Constitution §1 and the README, reaching `main` is the deployment act. **Preserved, not resolved.** See F-05 for what would settle it |
| CX-05 | Design Constitution §2: three faces — Fraunces (display), Newsreader (text), Inter (utility only); *"deviations require amending it first"* vs `lib/root/fonts.ts` and `docs/design/broadsheet-implementation.md` §"Typography (FD-A)": two faces — Newsreader (display **and** text) and IBM Plex Mono (utility); *"Fraunces is retired from the interface"*; Inter demoted to a manuscript-display preference | `docs/constitution/design-constitution.md`:16–29; `lib/root/fonts.ts`:11–30; `docs/design/broadsheet-implementation.md`:45–63 | The Design Constitution contains no occurrence of "Broadsheet", "Plex", or "FD-". The deviation is deliberate, recorded, and test-pinned — and the amendment its own text requires is not in the corpus |
| CX-06 | `docs/globalization/README.md`: es-419 is an *"Internal pilot — selectable on the Account page; not publicly marketed, no public language switcher, **no /es routes**"* vs 11 route files under `app/(public-es)/es/` and README: *"a Spanish (es-419) preview at `/es`"* | `docs/globalization/README.md`:6–11; `app/(public-es)/`; `README.md` | The globalization index is dated to Phase 3G, July 2026, and is not a blueprint; the README's stated "older blueprints keep their status lines" convention (EV-017) does not reach it |
| CX-07 | `docs/globalization/public-multilingual-architecture/architecture.md`: *"Specification only — no routes, layouts, catalogs, middleware, cookies, or selectors change until the phases in implementation-plan.md execute"* vs those routes existing at this baseline | same file:3–6; `app/(public-es)/` | Same shape as CX-06 |
| CX-08 | Product Constitution XII: data models *"could be exported and understood in twenty years without this codebase"* vs no export or backup path for the permanent record exists in the corpus (EV-026) | `docs/constitution/product-constitution.md` §XII; the tree | XII asserts a property of the *shapes*, not the existence of an export mechanism. I record the two statements and do not read the second as a breach of the first — but the gap between "exportable in principle" and "no export path" is the contradiction, and it is preserved rather than argued away |

**Within-account contradiction (A17 rule 3 as extended):** none recorded — no
account was obtained. This is an absence of accounts, not an absence of
contradiction.

---

## Section 9 — Further evidence rows relied on by findings

**EV-023 · The only role system in the software**
Source: `supabase/migrations/20260702000000_author_memory_system.sql`:169–176;
`lib/auth/session.ts`:33–38; `lib/supabase/proxy.ts`:66–67 ·
Class: **Observed** (as to the code's content) · Obtained via: method step ·
Supports: the platform defines exactly one role predicate, `public.is_staff()`,
resolving `auth.jwt() -> 'app_metadata' ->> 'role' = 'staff'`, with the comment
*"assigned manually in Supabase. No second role system: the UI…"*. The strings
"Founder Office" and "founder_office" appear **nowhere** in `lib/`, `app/`,
`components/`, `supabase/`, or `messages/` except in explanatory code comments. ·
Limitations: this is what the committed code says. Whether it is what the
running system does is unverifiable here (AS-03).

**EV-024 · Authority as encoded in the schema**
Source: `supabase/migrations/20260810000000_publication_candidates.sql`:166–178,
224–236 · Class: **Observed** · Obtained via: method step ·
Supports: `publication_authorizations` carries `authority text not null default
'imprint' check (authority = 'imprint')` and an `actor` referencing
`auth.users`; `approval_delegations` carries `author_id`, `book_id`,
`delegate_user_id`, a non-empty `basis`, `created_by`, `expires_at`,
`revoked_at`, `revoked_by`, `revocation_reason`. ·
Supports further: the corpus's determination that *"Author Approval belongs to
the author. Staff may exercise it only where explicit delegated authority
exists and is recorded — recorded delegation, then a recorded act citing it.
There is no implicit proxy approval"* (`production-bridge.md`:388) is carried
into the schema as a table, not only as prose.

**EV-025 · AI holds no publication authority (stated)**
Source: `docs/blueprints/production-bridge.md`:396–399;
`lib/publication/readiness.ts`:7 · Class: **Observed** (as to content) ·
Supports: *"**AI holds no publication authority of any kind.**… no AI act
appears anywhere in the approval lifecycle,"* and the code comment
*"Publication, cannot approve, cannot authorize (Founder Office…)"*.

**EV-026 · No export or backup path for the permanent record**
Source: the tree · Class: **Observed** · Obtained via: method step ·
Supports: the repository contains export machinery for *publication artifacts*
(`lib/publication/epub.ts`, `print.ts`, `cover.ts`) and no route, server action,
script, or documented procedure that exports or backs up the permanent record
itself — Author Memory, Book Memory, chapters, versions, findings,
deliberations, review runs. No `pg_dump`, backup, or data-export procedure is
documented in `docs/`. ·
Limitations: Supabase provides platform-level backups outside the repository.
Whether the organization uses them is **not established** — it would require
AS-02, which is "none". This row records the absence of a *repository-evidenced*
path, not the absence of backups.

**EV-027 · Drift guards — the organization's own anti-divergence machinery**
Source: `lib/terminology/canon-source.ts`:1–26; `lib/design/tokens.test.ts`;
`lib/design/workshop-wiring.test.ts`; `messages/catalog-parity.test.ts` ·
Class: **Observed** · Obtained via: method step ·
Supports: the organization has built a repeatable pattern in which a test reads
a governing document *as its source* and fails when the implementation drifts
from it. `canon-source.ts` parses `docs/constitution/terminology.md` §"Editorial
review terms" and pins application copy to it, describing itself as *"the drift
guard, not a second authority"*. `tokens.test.ts` reads `app/globals.css`
directly and pins contrast ratios, the two adopted faces, Fraunces's retirement,
and the 11px floor; its own record states it caught `ink-faint` at 4.486:1
before commit. 21 test files exist. ·
Weight: this is the pre-existing capability that A15's preceding question asks
about. See Instrument 9.

**EV-028 · CI gate scope**
Source: `.github/workflows/ci.yml` · Class: **Observed** ·
Supports: CI runs on push to `main` and on pull requests to `main`; steps are
`pnpm lint`, `pnpm test`, `pnpm build`; the file states *"No secrets and no
external services… Deployment stays Vercel's job; this workflow only gates."* ·
Note: `pnpm test` runs the whole vitest suite (21 test files), not only the
manuscript invariant tests the README and the workflow comment name.

**EV-029 · External services named in the corpus**
Source: `.env.example`, `package.json`, `lib/`, `vercel.json`,
`docs/operations/production-migration-baseline.md` · Class: **Observed** ·
Supports: Supabase (database, auth, storage, `pg_cron`), Vercel, GitHub,
OpenAI (two call sites: editorial readings and hosted TTS), Google Fonts via
`next/font/google`. `.env.example` states *"Never add the service_role key
here."* No payment, email, or retailer vendor appears.

**EV-030 · Untracked files present in the working copy**
Source: the working directory listing · Class: **Observed** ·
Supports: `.DS_Store`, `.env.local`, `.next/`, `node_modules/`,
`tsconfig.tsbuildinfo` are present and untracked/ignored. `git status
--porcelain` is empty because `.gitignore` covers them. ·
Note: recorded so that "the working tree was clean" is not read as "the working
directory contained only tracked files". I did not open `.env.local`.

**EV-031 · Effort distribution across the corpus, counted**
Source: `git log --name-only` · Class: **Observed** · Obtained via: method step ·
Supports: across 203 commits, file-change events by top-level area are:
`lib` 343, `app` 325, `docs` 197, `components` 120, `messages` 86,
`supabase` 51, `README.md` 18, `public` 15. Commits touching `docs/` : 113 of
203 (56%); commits touching `lib`/`app`/`components`: 152 of 203 (75%);
commits touching `supabase/`: 42 of 203 (21%). ·
Limitations: file-change counts are a proxy for effort, not a measure of it.
Per A5 the difference between counting and characterizing is stated: **this is
counted for the repository and characterizes nothing outside it.** Effort spent
in conversation, in production verification sessions, in editorial work, or in
the Founder Office is invisible to this count.

---

## Section 10 — Custody of the diagnostic team's own material (A17 rule 7)

Inventoried in Instrument 6 under *implementer-side / advisor-side custody*:
this register, the six companion output files, and the transient reasoning that
produced them, all held at
`…/scratchpad/stage6-second-author-output/`, outside the subject repository.

**Custody disposition: NOT AGREED.** A17 rule 7 requires that the disposition
(returned, retained under agreement, destroyed) be *agreed with the organization
before the diagnosis closes*. No party was available to agree it. The diagnosis
therefore closes with its custody disposition **open**, and that is recorded as
a defect in the closure rather than resolved unilaterally. Raised as SQ-11.
