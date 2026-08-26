# Organizational Diagnostic — Generation One: Internal Application to Huerta Group Publishing (Stage 5)

**Classification: Institutional Record** — validation evidence (evidentiary,
non-governing). The application of **frozen Draft v3** to Huerta Group
Publishing as an **internal subordinate organizational subject**, authorized by
`fd-0023`. This is methodology validation. **It authorizes nothing about the
venture and changes nothing in it.**

- **Subject:** Huerta Group Publishing (HGP).
- **Method applied:** `organizational-diagnostic-generation-one-draft-v3.md`,
  **verified at its Stage 4 digest `04fd02c7ec80b457877f2de0363ce90e961bc370e019e945634d4720d379f89f`
  before any HGP evidence was read**, and re-verified after.
- **Diagnostic team:** Institutional Platform Development — **not independent
  of the subject** (§1).
- **Access path:** FD-V1 §17 — the venture repository "is not part of the
  parent canonical corpus and is never cited as institutional authority by
  parent canonical documents; **parent governance may cite it as evidence**."
  Nothing was admitted to the parent corpus; nothing was written to the
  venture.
- **Confidentiality boundary applied** (FD-V1 §6.5, `fd-0023` §2.7): no
  author-confidential, manuscript-specific, or deliberative editorial material
  was sought, read, or reproduced. No manuscript, author record, book memory
  document, or editorial finding was opened. The diagnostic needed none of it.
- **Reporting composition:** the **single-source qualifier** of
  [`one-sided-evidence-reporting-disposition.md`](one-sided-evidence-reporting-disposition.md)
  is used where a subject has evidence on one side only.

## 1. Prior familiarity and evaluator independence — recorded limitation

**This is not blind, independent, external, or unfamiliar-subject validation,
and no part of this record may be read as any of those** (`fd-0023` §2.6).

Institutional Platform Development has previously read HGP records, supported
its architecture and implementation, evaluated its design and validation
evidence, and used admitted HGP evidence in earlier methodology work
(`fd-0020` §2.3; the HGP evidence admission record). The diagnostic team is
therefore, for this subject: **author-of-records in part**, prior evaluator,
and prior implementer.

**How the limitation was handled.** Prior familiarity supported **no finding**.
Every evidence row in §3 was obtained by reading the venture's own records in
this session and carries its path. Where the team's memory held an answer that
the obtained evidence did not, the row is *not supplied* — the same discipline
that produced nineteen such rows at Stage 3. Draft v3's A17 rule 6 is the
governing rule and it held.

**Recorded execution deviation.** `fd-0023` §2.6 requires the limitation to be
recorded *before* examining HGP. The limitation was known from the outset and
governed the work throughout, but the **written record of it was produced
after** the startup inspection had already obtained the venture's README,
terminology canon, constitutions and validation registers — the instrument's
own startup step directs locating the access path, and evidence gathering began
there. The deviation is recorded rather than concealed. Its material
consequence is assessed as **none**: the limitation's content does not depend
on what was read, and it was applied to every row. The Founder Office may
disagree with that assessment; the fact is recorded so that it can.

**What this limitation costs the validation.** Any conclusion of the form "the
method worked on an unfamiliar subject" is unavailable. The strongest available
claim is: *the method worked on a subject whose records the team had seen
before, when the team was required to obtain everything again.*

## 2. Access statement — two passes (A3 step 10)

Session: one, 2026-08-25, HGP repository working copy at `e28f12a`.

| Corpus / system / environment | Stated to exist — by whom | Access actually obtained |
| --- | --- | --- |
| Venture repository, working copy | FD-V1 §22 (parent record); observed | **Full** — 438 tracked files at `e28f12a`; `broadsheet-design-adoption`, `main` and `origin/main` all at the same commit; working tree clean |
| Governing canon (constitutions, terminology, lifecycle) | README "Governing canon" | **Full** — four documents read |
| Blueprints (20) | README; `docs/blueprints/` | **Partial** — all twenty status lines read; three read in substance |
| As-built operations records (13) | README; `docs/operations/` | **Partial** — headers of all thirteen; three read in substance |
| Validation program (standard, three registers, one observation) | `docs/validation/README.md` | **Full** — all read |
| Migration set | README; observed | **Full as filenames** (42); **not obtained as applied database state** |
| Application code, CI, package manifest | observed | **Partial** — route inventory, CI workflow, dependency list; no code review |
| **Hosted Supabase project** (`jlsvwqfptjbhbioolonh`) | FD-V1 §22; README | **None** — venture custody; not sought |
| **Live production deployment / Vercel project** | FD-V1 §22; README | **None** — venture custody; not sought |
| **Author-confidential material** (manuscripts, author memory, editorial records) | README; FD-V1 §6.5 | **None — deliberately not sought.** Excluded by boundary, not by inability |
| **Venture-steward account** | FD-V1 §21 | **None — not sought** (`fd-0023` §2.8 forbids requiring an interview merely to mirror Stage 3) |
| **OpenAI usage / editorial reading records** | README | **None** — runtime state, venture custody |
| Globalization, brand, design, settings, reviews directories | observed | **Partial** — two read; the rest listed only |

**Consequence, stated plainly.** This is a **records-only** diagnosis of a
subject whose *operational* state lives in a database the diagnostic did not
open. Draft v3 labels it as such and constrains its outcome by rule (§18).

## 3. Instrument 1 — Evidence & Limitations Register (abstracted)

Evidence classes as Draft v3 A2: **Observed** (the record exists with this
content, or an act is recorded as having occurred); **Subject-Stated** (a
condition the venture's records assert — Client-Stated in A2's terms, from an
organizational source rather than a person); **Parent-Record** (a condition the
parent's own governing records assert about the venture); **Inferred** (marked);
**not obtained**. Every row was obtained by method step in this session.

| Row | Subject | Evidence | Source | Class |
| --- | --- | --- | --- | --- |
| H-01 | Repository scale and life | 438 tracked files; 203 commits; 2026-07-02 → 2026-08-25; 42 migration files; 77 documents | `git` at `e28f12a` | Observed |
| H-02 | Branch state | feature branch, `main` and `origin/main` identical at `e28f12a`; clean tree | `git` | Observed |
| H-03 | Purpose and mission | "help authors create books that sound more like themselves, not more like AI"; conversations temporary, "the platform is the permanent record" | `README.md` | Subject-Stated |
| H-04 | What exists today | Eleven capability areas enumerated as running in production, August 2026 | `README.md` | Subject-Stated |
| H-05 | Deliberate exclusions | Distribution, billing, outbound email, Spanish public launch, four named future capabilities, teams/diff/rich-text — "[d]eliberate exclusions, not omissions" | `README.md` | Subject-Stated |
| H-06 | Terminology canon | 354 lines; ratified per section July–August 2026; "One concept, one word — identical in UI, code, schema, and docs. Deviating copy is a bug"; derived into `lib/terminology/`, "pinned by test" | `docs/constitution/terminology.md` | Observed (document) + Subject-Stated (the enforcement claim) |
| H-07 | Three constitutions | Product (15 principles), Engineering (13), Design (12) — **all three read "Status: proposed, awaiting approval"** | `docs/constitution/*.md` | Observed |
| H-08 | Blueprint status convention | Of 20 blueprints: 2 complete, 1 adopted, 1 approved by determination, 2 implemented, 11 "proposed, awaiting approval — Blueprint only", 3 no status line | `docs/blueprints/*.md` | Observed |
| H-09 | The convention that explains H-08 | "Older blueprints keep their original status lines as history; the capabilities they describe are live" | `README.md:119–121` | Subject-Stated |
| H-10 | As-built records | 13 operations records; sampled three, each naming the blueprint implemented, the migration, the modules, and the surfaces | `docs/operations/*.md` | Observed |
| H-11 | Validation program | Operational Standard (238 lines); three append-only registers; identifier conventions; Cycle 001 open since 2026-08-11 | `docs/validation/` | Observed |
| H-12 | Validation state at `e28f12a` | **One observation** (`FVO-001-001`, Implementation Defect, Single Occurrence, Closed); **"No themes opened yet"**; **"No Validation Decisions recorded yet"** | the three registers | Observed |
| H-13 | Validation authority routing | "Repository records remain authoritative… No observation, at any evidence strength, changes a governed record by itself." Routine refinement under standing implementation authority; escalation to the Founder Office required for constitutions, governance/authority, approved architecture, provenance/lifecycle semantics, security posture | `founder-validation-program.md` §8 | Observed |
| H-14 | A complete correction trail | `FVO-001-001`: observed in production verification 2026-08-11 → classified → first fix failed (RLS column capture) → two migrations → production probes 27–28 → baseline entry → closed same session by standing implementation authority | `observations/FVO-001-001.md` | Observed |
| H-15 | Migration ledger discipline | Standing rule: hosted database and `supabase/migrations/` "must remain append-only and repository-matched"; `supabase db push` the single sanctioned path; emergency SQL Editor use requires immediate ledger repair and an appended entry | `production-migration-baseline.md` | Observed |
| H-16 | Ledger repair event | 2026-08-09, owner-approved: `migration repair --status applied` across 29 versions, bookkeeping only; post-repair 29 of 29 in exact local=remote agreement | same | Observed |
| H-17 | Verification practice | 13 dated verification-log entries; the sampled entry records 35 SQL probes, a defect found and fixed forward, "[z]ero fixture residue (counts returned exactly to baseline)", and "no OpenAI call occurred" | same | Observed |
| H-18 | Systems and tooling | Next.js 16.2.10, React 19, Supabase SSR/JS, next-intl, unpdf, remark/rehype, fontkit — **14 runtime dependencies**; pnpm; vitest; ESLint | `package.json` | Observed |
| H-19 | CI | lint → invariant tests → production build, on push to `main` and PRs to `main`; "[n]o secrets and no external services" | `.github/workflows/ci.yml` | Observed |
| H-20 | Path to production | "commit → push to main → CI → automatic Vercel production deploy → test on the live URL"; no local database, no Docker | `README.md`; `engineering-constitution.md` §1 | Subject-Stated |
| H-21 | Two public locales | Route groups `(public-en)`, `(public-es)`, `(app)`; **9 Spanish content pages** under `/es` plus layout and social images; two message catalogs with a parity test | `app/`, `messages/` | Observed |
| H-22 | Irreversible staff operations | Two permanent-deletion operations (book, author) behind confirmation pages, cascade-audited from the migration set; "Archive… remains a product concept, not a deletion variant" | `docs/operations/permanent-deletion.md` | Observed |
| H-23 | Security posture | RLS as the security boundary; "the app never uses `service_role`"; atomic workflows as SECURITY INVOKER functions | `engineering-constitution.md` §4; `README.md` | Subject-Stated |
| H-24 | Append-only doctrine | "The permanent record only grows… applied migrations are never edited, only followed by new ones" | `engineering-constitution.md` §3 | Subject-Stated |
| H-25 | Conversation doctrine | "**Nothing important lives only in conversation.** Durable decisions — blueprints, constitutions, terminology, reviews, setup steps — are committed files in this repository, written before or alongside the code they govern" | `engineering-constitution.md` §13 | Subject-Stated |
| H-26 | Stated staleness (i) | README setup section: "**29 migrations** applied in order"; 42 migration files exist | `README.md:166`; `ls supabase/migrations` | Observed — conflict between two representations |
| H-27 | Stated staleness (ii) | `docs/globalization/README.md`: es-419 is an "**Internal pilot** — … no public language switcher, **no /es routes**"; nine `/es` pages exist | `docs/globalization/README.md`; `app/(public-es)/` | Observed — conflict between two representations |
| H-28 | Stated staleness (iii) | `docs/blueprints/cover-production.md`: "proposed, awaiting Founder Office approval. Blueprint only"; `docs/operations/cover-production.md`: "Implements Cover Production Phase 2 **under the approved blueprint**" | both files | Observed — conflict between two representations |
| H-29 | Date representation conflict | `FVO-001-001` records the session as 2026-08-11; the two migrations it names are versioned `20260821`/`20260822` | observation file; migration filenames | Observed — unresolved on present evidence |
| H-30 | Parent-side charter | Delegated authority (7 classes), reserved parent authority (8 classes), decision routing table, steward = the Founder, custody surfaces, operational boundaries (8 prohibitions) | FD-V1 §§7–11, §§21–23 | Parent-Record |
| H-31 | Hosted database state | 42 migrations *stated* applied; ledger reconciliation *stated* current | FD-V1 §22; `production-migration-baseline.md` | **not obtained** |
| H-32 | Live deployment behaviour | Production routes, gating, runtime errors | — | **not obtained** |
| H-33 | People | Who works in or for the venture, in any capacity | — | **not obtained** — no venture record of persons was located, and none was requested |
| H-34 | Cadence, latency, waiting | How often decisions are taken; how long anything waits | — | **not obtained** — no record holds it |
| H-35 | Habit-held responsibility | Work done only because one person does it | — | **not obtained** — Draft v3 A7: obtainable only by observing work as performed |

## 4. A1 — Terminology discovery (the subject's own words, untranslated)

HGP maintains a **ratified terminology canon** — the first subject in this
program to have one. Draft v3 A1 requires the organization's words to be
recorded before any neutral term, and to be used in every instrument. They are.

| HGP's term | HGP's own definition (abbreviated) | Neutral term the method would otherwise reach for |
| --- | --- | --- |
| **Assembled Memory** | "The verbatim payload future AI assistance receives: active, finalized versions only. Load-bearing; **never paraphrase it as 'AI context' in UI**" | no equivalent in the method |
| **Establish / Activate / Finalize** | "Documents are established; versions are activated"; finalize is what happens to a draft's text on first activation — it becomes immutable | *state transition* |
| **Superseded** | "A final version the pointer moved past. Preferred over 'archived' in UI ('archived' suggests a place; superseded states a fact)" | *historical version* |
| **The permanent record** | The prose name for the durable store — the canon **removes "Source of Truth" from the UI** as "[s]oftware jargon" while permitting it in engineering docs | *authoritative source* (A9) |
| **Draft** | "The single private working space per document… the only deletable thing" | *working material* |
| **Document Room** | "Keep (internal only) — Code/docs name for the document page. The UI never says it" | no equivalent |
| **Observation / Theme / Validation Decision** | The three validation objects, with `FVO`/`FVT`/`FVD` identifiers and separate registers | *finding*, *pattern*, *decision* |
| **Routine refinement** | "bounded implementation improvements within approved architecture" proceeding under standing implementation authority | *delegated change* |
| **Blueprint / as-built record** | The two-document pattern: intent frozen at authorship, current state in a separate record | *design record* / *implementation record* |
| **Vertical slice** | "a capability ships when a real author can complete its whole workflow in production" | *increment* |
| **The editorial desk** | The design frame for the workspace; the public site as "an imprint's front matter" | no equivalent |

**Result against validation target 1 — terminology neutrality: held.** No HGP
term was replaced by a parent or method term anywhere in this record. Two of
the subject's terms — *the permanent record*, *superseded* — occupy exactly the
territory the method's own vocabulary covers, and the method's conditional
terms stayed unused, which is what A1 requires. One genuinely useful discovery:
**the subject forbids in its interface the very phrase the method's Instrument
4 is named after** ("Source of Truth"), while permitting it in engineering
prose. A method less careful about A1 would have written the forbidden phrase
back into the subject's own diagnostic.

## 5. A4 — Purpose and identity

- **Stated purpose** (Subject-Stated, H-03): to help authors "create books that
  sound more like themselves, not more like AI," by inverting the disposability
  of AI conversation — "[c]onversations are temporary discovery spaces; the
  platform is the permanent record."
- **Stated identity** (Subject-Stated, H-07): "an imprint with a memory, not a
  SaaS product with a publishing theme… When a software convention and a
  publishing convention conflict, the publishing convention wins unless it costs
  clarity."
- **Observed operation** (H-01, H-04, H-08, H-10): 203 commits over 54 days
  producing an authoring-and-editorial platform, a publication production chain,
  a two-locale public site, an administration surface, and a documentary
  apparatus of 77 records.
- **Divergence between stated identity and observed operation:** *none found*.
  This is a finding, not an absence of one, and it is the first subject in this
  program of which it is true. The stated identity is unusually specific and
  falsifiable ("no cards, dashboards, icons, or metric tiles"; "the app never
  uses `service_role`"; "one concept, one word") and the observed artifacts do
  not contradict it at the level this diagnosis reached.
- **Limitation:** the diagnosis reached documents and code inventory, not the
  running product. Whether the interface honours the Design Constitution is
  **not obtained** (H-32).

## 6. A5 — Outputs and value creation

| Output | Consumption | Evidence |
| --- | --- | --- |
| The authoring and editorial platform | **Internally consumed** — provisioned authors and staff; "no self-serve sign-up" | H-04, H-30 |
| Publication artifacts (EPUB, 6×9 print interiors, covers) and Releases | **Internally consumed** at present; the Release Record is staff-operational with author read-only | H-04, H-10 |
| The Bibliographic Record and ISBN Registry | Internal; **recording only, never assigning** | H-04 |
| The two-locale public site | **Externally consumed** — nine editorial pages plus a Spanish preview | H-21 |
| The governing canon and as-built records | Internally consumed — by the venture's own future work | H-06 to H-10 |
| **Published books reaching readers** | **not obtained** — no evidence located either way | — |

**Effort proportion** (A5 requires it counted where records permit,
characterized otherwise): not counted. The commit history would permit a count
by directory but not a mapping to outputs; characterized instead as
overwhelmingly weighted to internal platform construction, with the public site
a small and stable fraction. Marked **Inferred**.

**Relevance test** (A5): every documentary class located has a present
operational answer — blueprints govern construction, as-built records answer
"what is live," terminology is enforced by a pinned test, the migration
baseline answers "what is applied," the validation registers answer "what use
revealed." **No documentary class was found that governs nothing.** That result
is the opposite of the parent's own dry-run finding, where two foundations of
~14,000 words governed zero programs.

## 7. A6 / Instrument 2 — Authority and decision rights

| Decision class | Formal authority | Observed authority | Contested | Anticipated but not established | Evidence |
| --- | --- | --- | --- | --- | --- |
| Editorial, production, platform implementation, provisioning, internal records | Venture, delegated (FD-V1 §7) | Exercised — 203 commits, 13 as-built records | none evidenced | — | H-30, H-01, H-10 |
| Bounded implementation improvement within approved architecture | "standing implementation authority" (FVP §8) | Exercised once on record — `FVO-001-001` closed under it | none evidenced | — | H-13, H-14 |
| Constitutions; governance/authority structures; approved architecture; provenance/lifecycle semantics; security posture | Founder Office, by escalation (FVP §8) | **No escalation observed** — no theme, no Validation Decision, no `FVD` record exists | none evidenced | — | H-12, H-13 |
| Charter, lifecycle, brand, disclosure, cross-venture, capability grants | Founder Office (FD-V1 §8) | Exercised at the parent plane (`fd-0007`) | none evidenced | — | H-30 |
| Legal, financial, contractual, commercial, ISBN-operative, privacy-legal | Corporate Headquarters (FD-V1 §8) | **No exercise observed** in venture records | none evidenced | — | H-30 |
| Technical architecture standards of the institution | Platform & Systems Development (FD-V1 §23) | Not separable from the venture's own implementation on available evidence | none evidenced | — | Inferred |
| Ambiguity | "Stop and escalate… no authority is created by the gap" (FD-V1 §23) | **Not observed to have fired** | none evidenced | — | H-30 |

**Role compression finding (A6).** Every authority above resolves in practice to
one person: FD-V1 §21 records the venture steward as the Founder, and the
parent's Founder Office is the same individual. The venture's own records
separate the roles carefully — the FVP distinguishes "standing implementation
authority" from "the Founder Office" and requires each disposition to record
which one acted — **and the separation is maintained in the records even though
the actor does not change.** `FVO-001-001` names its deciding authority
explicitly.

**Result against validation target 4 — one person acting through multiple
institutional roles: represented, and well.** Draft v3's Instrument 2 field
*held by the same actor as…* carries it, and the "concentration is a condition,
not a model" rule (Stage 4, S4-C3) applies without strain. The subject supplies
something the parent's own application could not: **a written record of which
role acted, on a decision where the roles could have differed.**

**Contested authority: none evidenced.** Recorded as *none evidenced (basis:
no second claimant appears in any located record)*, never as "not applicable."
**Validation target 11 — representable versus demonstrated:** the field exists,
was available, and **found nothing to hold**. Contested authority remains
representable and undemonstrated, exactly as `fd-0023` §2.3 requires it be kept.

## 8. A7 / Instrument 3 — Functions and responsibilities

Functions are derived from evidence of work, never enumerated from a chart.

| Function (in HGP's own terms where it has them) | Evidenced by | Observed responsibilities | Unowned work |
| --- | --- | --- | --- |
| Publishing Development (implementation) | **Work** | Blueprints, migrations, as-built records, CI, every commit | — |
| Editorial (Reviewer program, deliberation) | **Work** — capability shipped; findings/deliberation/current-review live | Constitution Review runs, findings, deliberation | — |
| Production (EPUB, print, cover, releases, ISBN registry) | **Work** — as-built records with migrations and modules | Deterministic artifacts; evidence-gated releases | — |
| Administration (staff operations) | **Work** — admin surfaces enumerated; permanent-deletion operations built | Triage, cleanup, health, audited deletion | — |
| Founder Validation Program | **Document + one act of work** | One observation recorded, dispositioned, closed | **Theme formation and Validation Decisions: no owner has acted in 14 days** |
| The imprint (bibliographic presentation) | **Document only** — `publisher.ts` constants and the charter | Publisher-of-record presentation | — |
| Support (inbox, staff triage) | **Work** — capability shipped | — | Whether anyone triages: **not obtained** |
| Membership / retention | **Work** — state machine, scheduler, event ledger | Planning only; "nothing sends email" | — |

**The three kinds of quiet (A7), all three present in one subject:**
a function with no evidence at all (none found); a function with evidence but
nothing consequential now (**membership/retention** — built, scheduled, and
deliberately inert); and a function whose activity is consequential but
invisible at any coordinating level (**the validation program** — the one place
where lived evidence enters, holding one entry).

**Habit-held responsibility: capability not exercised — observation
unavailable.** Draft v3's A7 rule (Stage 4, PT-07) applies exactly as written.
The finding is **empty and labelled**, not absent and not filled — the second
subject in a row where the method asked and could not obtain.

## 9. A8 — Recurring decisions

| Recurring decision | Trigger | Evidence required | Who decides | Cadence |
| --- | --- | --- | --- | --- |
| Approve a blueprint | A blueprint reaching "proposed, awaiting approval" | The blueprint | Founder Office | **not recorded** |
| Ship a capability | Blueprint approved | Vertical slice complete in production | Standing implementation authority | **not recorded** |
| Disposition an observation | Production verification surfacing something | The observation record | Standing implementation authority, or Founder Office by escalation | **one instance on record** |
| Reconcile the migration ledger | Any migration application | Local vs remote comparison | Standing implementation authority; owner approval for repair | 13 dated entries |
| Correct forward | A defect found in production | The failing behaviour | Standing implementation authority | Twice on record (H-14, H-17) |

**Latency: not establishable from available evidence.** Recorded as A8 permits,
with the distribution recorded instead: of thirteen verification entries, the
one sampled shows observation, correction and closure **within a single
session**.

## 10. A9 / Instrument 4 — Information and source of truth

This is the domain the Stage 5 instrument most wanted tested, and the subject
is unusually well-suited to test it.

| Information domain | Authoritative source | Retrievable by the organization | Representations | Freshness concerns |
| --- | --- | --- | --- | --- |
| Authoring and editorial state | **The hosted database** — "[t]he database is the permanent record" | Yes, by the venture; **not obtained here** | The workspace UI; the `active_*` views | — |
| Assembled memory | The `active_author_memory` / `active_book_memory` / `active_manuscript` **views** — "the only read paths… drafts and superseded versions unreachable by construction" | Yes | The Reading Copy | — |
| Schema | `supabase/migrations/` **and** the hosted ledger, required to agree | Yes | `production-migration-baseline.md` | The standing rule exists because they once disagreed (H-16) |
| Governing intent | The **constitutions and blueprints** — repository | Yes | — | All three constitutions read "proposed, awaiting approval" (H-07) |
| Current implementation state | The **as-built operations records** — repository | Yes | Blueprint status lines, which are **frozen at authorship by convention** | H-08, H-09, H-28 |
| Terminology | `docs/constitution/terminology.md`, derived into `lib/terminology/` **and pinned by test** | Yes | Every UI surface | The strongest freshness control located anywhere in this program |
| Validation evidence | The three append-only registers | Yes | — | — |
| Venture standing and authority | **The parent repository** (FD-V1, `fd-0007`) — not the venture | Yes, by the parent | The venture's own references to "Founder Office" | — |

**Source roles (Draft v3 A9, new in this version) — the first exercise:**

| Role | For HGP's governing decisions | Class |
| --- | --- | --- |
| Where a matter is first worked through | **not obtained** — no record locates it | — |
| Where it is clarified | The blueprint, on the evidence: intent is written before code | Inferred |
| Where it is routed from | The FVP's escalation rule and the charter's routing table name the destinations; **no instance of routing was observed** | Observed (rule) / not obtained (practice) |
| Who decides it | §7 above | Observed |
| Where the fact is established | Per domain, above | Observed |
| Where the durable record resides | Repository for intent and as-built; database for operational state | Observed |

**Result against validation target 2 — multiple records of truth, not
collapsed: held, and this is the strongest single result of the application.**
The subject legitimately has **two** authoritative stores with different jobs —
the hosted database for operational state, the repository for intent and
as-built truth — plus a required *agreement* between a third pair (migration
files and the hosted ledger). Draft v3's Instrument 4 recorded all three
without appointing a winner, and A9's rule that "authoritative source may be
'unresolved' — it is never appointed by the diagnostic" was never strained,
because the subject had already resolved it. **Validation target 6 — database
state versus repository records: held.**

**Result against validation target 12 — one-sided evidence not promoted:** the
"where a matter is first worked through" role is `single-source (subject
silent)` — the method asked and the records do not answer. It is not recorded
as "no sensemaking environment exists."

## 11. A10 / Instrument 5 — Workflow, handoff, dependency, obligation

**Trail row first, from the last actual instance** (Draft v3 A10):

`FVO-001-001` — obtained end to end from artifacts, not from description:

1. Edition Architecture Phase 2 implementation commit `49b015f`; hosted ledger
   40/40.
2. Author-initiated print generation, in disposable verification fixtures,
   refuses with `isbn_not_eligible`.
3. Observation recorded: classification *Implementation Defect*; evidence
   strength *Single Occurrence*; theme *unassigned*.
4. First fix fails — "the policy's outer-row references were captured by the
   subquery's own columns."
5. Two migrations follow; the Desk's eligible-list is extended.
6. Production probes 27–28 verify post-fix behaviour, including a refusal case.
7. Migration baseline gains its eighth entry.
8. Disposition: Closed, by **standing implementation authority**, basis
   "[b]ounded defect within the approved Phase 2 authority."
9. Closure basis: "[f]ix applied, hosted ledger reconciled, live probes green,
   zero fixture residue."

**Described row, for comparison:** the venture's stated workflow is
"blueprint → authorization → implementation → verification → as-built" (H-13)
and "commit → push to main → CI → automatic Vercel production deploy → test on
the live URL" (H-20). **Trail and description agree** — the first subject in
this program where they could be compared at all.

**Owner of the next expected action:** recorded for every step of the trail.
**Dependencies that blocked:** one — the failed first fix. **Obligations with
consequential time boundaries:** none located; the retention scheduler exists
but "nothing sends" (H-05).

**Result against validation target 5 — historical correction not treated as
current state: held.** The trail contains a failure (the first fix) and a
correction. The method's A17 rule and the instrument's trail-row convention
kept them as *history*; nothing in this record represents `isbn_not_eligible`
as HGP's current behaviour, and the closure evidence is recorded as the current
condition.

## 12. A11 / Instrument 8 — Governance gap and excess

| Subject | Current governance | Gap / excess / ambiguity | Consequence | Authority required |
| --- | --- | --- | --- | --- |
| The three constitutions | Written, comprehensive, **"proposed, awaiting approval"** since July 2026 | **Ambiguity** — the documents every screen is "measured against" have no recorded approval, while being treated as binding | The venture's most-cited governing texts hold no recorded approval act | Founder Office (FD-V1 §8: constitutions are reserved) |
| Blueprint status lines | Convention stated once, in the README | **Ambiguity, mild** — the convention is real and stated, but each stale line restates its own falsity, and a reader who misses one sentence in the README misreads twenty documents | H-28: a blueprint says "awaiting approval" while its as-built record says "under the approved blueprint" | Venture |
| Theme formation and Validation Decisions | Designed in full; identifiers reserved; registers created | **Gap in practice** — 14 days, one observation, no theme, no decision | The mechanism designed to accumulate evidence across occurrences holds nothing to accumulate | Venture |
| Setup and globalization records | Written and dated | **Stale representations** (H-26, H-27) with traceable origins | A reader following `docs/setup.md` applies 29 of 42 migrations | Venture |
| Governance **excess** | — | **None found.** Every documentary class has a present operational answer (§6) | — | — |

**Result against validation target 7 — deliberate absence without manufacturing
a deficiency: held, and it was tested hard.** Eleven blueprints say "Blueprint
only — no code" about capabilities that are live. A diagnostic that read status
lines as current state would have produced eleven false findings. The method
did not, because A2 rule 4 makes a document *Observed* as to its content and
*Client-Stated* as to the condition it asserts — and because the subject's own
README supplies the convention. **The four items in the README's "[d]eliberate
exclusions, not omissions" list are likewise recorded as chosen scope, not as
gaps.**

## 13. A12 / Instrument 6 — Institutional-memory risk

| Knowledge / domain | Holder / location | Organizational control | Independently retrievable | Loss risk | Continuity consequence |
| --- | --- | --- | --- | --- | --- |
| Governing intent and terminology | Repository, remote, CI | Yes | Yes | **Low** | — |
| Current implementation state | As-built records, repository | Yes | Yes | **Low** | — |
| Operational and author data | Hosted database | Yes | **not obtained** — no backup or restore evidence was located in the repository | **Unknown** | Unknown; the venture's most sensitive custody |
| Schema history | Migrations + hosted ledger | Yes | Yes, if they agree | Low; the agreement rule exists because it once failed | — |
| **Founder Office directives cited by venture records** | Cited; **not located in the venture repository** | No | **No** | **High** | The reasoning behind at least the FVP authorization is unrecoverable from the venture's own records |
| Lived evidence from use | The validation registers | Yes | Yes | — | Holds one entry |
| Knowledge held only by the one individual | The steward | Yes | **No** | **Total** | Everything, as at the parent |

**The subject's own rule, tested against its own records.** Engineering
Constitution §13: *"Nothing important lives only in conversation."* The venture
keeps that rule for blueprints, constitutions, terminology, reviews and setup —
extensively and verifiably. The `FVO-001-001` record nonetheless cites a
"Founder Office authorization" and the validation README a "Founder Office
directive" whose text is not in the repository. **Contradiction between a rule
the subject states and the subject's own records — preserved, not resolved.**
It is also the same condition the parent found in itself at Stage 3, which is
notable and is *not* offered as corroboration of anything: two instances of one
person's practice are one source.

## 14. A13 — Systems and tooling

- **Systems supporting real operation** (Observed): the repository; GitHub
  Actions CI; the hosted Supabase project (**not obtained**); Vercel (**not
  obtained**); OpenAI, called "by plain `fetch` in exactly two places."
- **Deliberately manual** (Subject-Stated): everything the exclusions list names
  — no billing SDK, no outbound email, no distribution tooling.
- **Tools imposing obsolete workflows:** none found.
- **Routine acts with irreversible or externally visible consequences**
  (A13, evidence-warranted): **push to `main` deploys to production**; the two
  **permanent-deletion** operations; migration application to the hosted
  database. Authorization practice for the first: CI gates but does not
  approve, and the deployment consequence is stated in the README and the
  Engineering Constitution rather than in any authorization step. For the
  second: confirmation pages plus staff-only gating, cascade-audited. For the
  third: a single sanctioned path with a ledger-repair obligation on deviation.
- **Result against validation target 9 — internal software supporting real
  workflows, without presuming software is the solution:** held. §16.

## 15. A14 / Instrument 7 — Operational friction

| Friction | Where observed | Places recorded | Consequence | Cause |
| --- | --- | --- | --- | --- |
| Migration ledger divergence | 2026-08-09 | 1 (baseline record) | Repository and hosted ledger disagreed; repaired, bookkeeping only | Recorded: emergency SQL Editor use outside the sanctioned path |
| RLS column capture | 2026-08-11 | 2 (observation + baseline) | First fix failed; second succeeded | Recorded in the observation's analysis, and generalized there as "a recurring hazard" |
| Stale representations of live matters | H-26, H-27, H-28 | 3 matters, 2 representations each | A reader of one record forms a false belief about current state | **Unknown** — no record explains why the setup figure was not updated |
| Theme mechanism unused | 2026-08-11 → 2026-08-25 | 1 | Evidence cannot accumulate across occurrences | **Unknown** — one observation may simply be too few |

**One matter, N representations (A9/A14):** three matters are each recorded in
two places that disagree (H-26, H-27, H-28). Recorded once per matter, with
places counted — never as six frictions.

## 16. A15 / Instrument 9 — Technology-worthiness

**Preceding question** (Draft v2 correction C-12): does a capability already
exist, built or standby, awaiting a decision rather than a build? **Yes** —
membership/retention is built, scheduled, and inert by choice; the Spanish
locale is built and gated on recorded human sign-offs. Both route to the
subject's own authority, not to a build.

**One problem tested — the problem the platform exists for**, stated by the
subject: authors' formative thinking happens in AI conversations that are
disposable.

| Test | Finding |
| --- | --- |
| Recurring, on evidence? | **Insufficient evidence obtained.** The premise is asserted (H-03), not evidenced in any located record |
| Outgrown existing documents and systems? | Judgement of the accountable authority; **not obtained** |
| Understood well enough not to freeze premature assumptions? | Evidenced *yes* by construction: fifteen product principles, a ratified vocabulary, and a lifecycle adopted before most capabilities shipped |
| Meaning established by the organization's authority? | **Ambiguous** — established in documents that read "proposed, awaiting approval" (§12) |
| Authoritative system already exists? | No |
| What remains deliberately manual? | Stated (H-05) |
| What would technology be structurally unable to do? | **not obtained** |

**Outcome: Insufficient evidence.** One of the five permitted outcomes,
recorded exactly. Not "warranted" — the software exists and works, and saying
"warranted" would be a finding about a decision already taken, not about need.
Not "no intervention warranted" — nothing supports that either.

**Result against validation target 9: held.** The method examined a working
platform with real workflows and produced *insufficient evidence* about the
need it serves, rather than treating the software's existence as proof of its
own justification.

## 17. A16 / Instrument 10 — Questions reserved to HGP authority

Stated neutrally, with no recommended answer. **Development decides none of
them, and Stage 5 executes none.**

| Question | Why the diagnostic cannot decide it | Responsible authority | What depends on it |
| --- | --- | --- | --- |
| Do the three constitutions stand as approved, and by what act? | Constitutions are reserved parent authority (FD-V1 §8) | Founder Office | The recorded status of every document the venture measures itself against |
| Should the blueprint status-line convention be made legible in the blueprints themselves? | A records-discipline choice within venture custody | Venture | Whether twenty documents each restate their own falsity |
| Should the setup and globalization records be brought current? | Venture records discipline | Venture | Whether a reader following them reaches the current state |
| Does one observation in fourteen days mean the platform is stable, or that the ledger is being bypassed? | Requires the steward's account of use; the registers cannot distinguish | Venture steward | Whether the validation program is working |
| Are the Founder Office directives the venture cites to be preserved in a durable record? | Preservation of parent instruments is a parent matter | Founder Office | Whether the reasoning behind venture authorizations survives |
| What is the backup and recovery posture of the hosted database? | Not obtained; venture custody | Venture | The only *unknown* loss risk in §13 |

## 18. A18 — Advancement logic

**Labels carried.** Author-of-records: **yes, in part** — the diagnostic team
supported the subject's architecture (§1). **Records-only: yes** — no
stakeholder account was obtained. Account-and-record-share-a-source: not
applicable; no account exists to share one.

**Minimum-evidence test, evidence-classed:**

| Element | Answer | Basis |
| --- | --- | --- |
| Material evidence limitations explicit | **Yes** (*Observed*) | §2, §3 |
| Purpose and outputs sufficiently understood | **Yes as stated** (*Subject-Stated*) | §5, §6 |
| Authority ambiguity relevant to the problem visible | **Yes** (*Observed*) | §7, §12 |
| Key source-of-truth boundaries identified | **Yes** (*Observed*) — the strongest result | §10 |
| Critical workflows and dependencies sufficiently understood | **Partially** (*Observed* for one complete trail; *not obtained* for the editorial and production workflows) | §11 |
| Major contradictions preserved rather than hidden | **Yes** | §13, H-26 to H-29 |
| Client-authority questions separated from findings | **Yes** | §17 |
| Prescription would not depend primarily on unverified inference | **No** — the operational half of the subject was never opened | §2 |

**Constraint that governs before any of this.** Draft v3 A18: *"A **records-only**
diagnosis may produce only request additional evidence, return unresolved
questions to client authority, or narrow the engagement problem."* No
stakeholder account was obtained, so **advancement is refused by rule, before
the judgement is reached** — and the judgement is recorded anyway, because A18
requires it recorded, and it independently fails on one element.

**Outcome: request additional evidence, and return unresolved questions to
subject authority.** No intervention is proposed, none is warranted on this
evidence, and none would be Development's to propose (`fd-0023` §2.7).

## 19. Minimum stakeholder evidence required (A3 step 8; `fd-0023` §2.8)

Returned, **not answered**. No answer is supplied on behalf of the Founder, the
steward, the author, the imprint, or HGP. Phrased in HGP's own terms, non-leading,
each tied to the requirement it serves.

| # | Question | Draft v3 requirement served | Class an answer would enter as |
| --- | --- | --- | --- |
| V1 | Who works in or for Huerta Group Publishing today, in any capacity — including services or tools you treat as doing work? | A3 people-and-roles inventory; A7 | Client-Stated |
| V2 | Which people, tools, environments, vendors and services do you count as part of Huerta Group Publishing, and which as outside it? | A3 step 11 (boundary) | Client-Stated |
| V3 | When something needs working out before it becomes a blueprint, where does that happen? | A9 source roles — sensemaking | Client-Stated |
| V4 | If two records disagreed about the state of a book, where would you go? | A9 source of resort | Client-Stated |
| V5 | Which work happens only because you personally do it, out of habit? | A7 habit-held responsibility | Client-Stated |
| V6 | When do you actually sit down to disposition an observation, and how long do things usually wait? | A8 cadence and latency | Client-Stated |
| V7 | The constitutions read "proposed, awaiting approval." Is that current, and if so what is waiting? | A11; A9 three facts (treated as authoritative) | Client-Stated |
| V8 | What happens if the hosted database is lost? | A12 loss risk — the one *unknown* row | Client-Stated |
| V9 | Since Cycle 001 opened, what have you noticed in use that has not become an observation? | A14; A8 — the theme-register gap | Client-Stated |
| V10 | Which of the deliberate exclusions are waiting on a decision of yours rather than on a build? | A15 preceding question | Client-Stated |

## 20. Non-intervention confirmation (`fd-0023` §2.7)

**No HGP record was changed. No HGP governance was changed. No HGP software was
changed. No HGP schema or database state was changed or read.** The venture
repository was opened read-only at `e28f12a`; its working tree was clean before
and is clean after; no file was written, staged, committed, or pushed. Nothing
in this record is implementation authority, and every finding that might warrant
attention is routed to a named authority in §17 rather than acted on.

**Author-confidential material was neither sought nor read.** No manuscript,
author memory document, editorial finding, deliberation, or review reading was
opened. The diagnostic required none, which is itself a result: an organizational
diagnosis of a publishing platform completed without touching a single author's
work.

## 21. Seal

Applied 2026-08-25 against HGP at `e28f12a`, using Draft v3 verified at
`04fd02c7…` before and after. Parent HEAD at application: `d7dfd16`. Evidence
was obtained in one session; prior familiarity supported no row. The commit
that adds this file is its seal.
