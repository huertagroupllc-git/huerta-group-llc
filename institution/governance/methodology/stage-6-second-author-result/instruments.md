# Part B Instruments — completed or blocked

**Subject:** Huerta Group Publishing · **Baseline:** `e28f12a` ·
**Date:** 2026-08-25

**Header carried on every instrument (Part B global rule):**
**RECORDS-ONLY.** **AUTHOR-OF-RECORDS.**
**Two-pass access statement:** repository working copy — *stated to exist* by
the engagement brief, *access obtained* **full** (read-only, `.env.local` and
build artifacts excluded by my decision); hosted database — *stated to exist* by
the migration baseline, *access obtained* **none**; live deployment — *stated to
exist* by the README and Engineering Constitution §1, *access obtained*
**none**; Founder Office instruments — *stated to exist* by citation in 36
files, *access obtained* **none**; all persons — *identified* in the corpus,
*access obtained* **none**. Re-derived after stakeholder sessions: **zero
times, because none occurred.** Full statement in `evidence-register.md`.

Global rules observed: no numerical scoring, no maturity levels, no weighted
formulas, no automated conclusion generation, no questionnaire. Every entry
cites evidence and carries a class.

**Instrument 1 — Evidence & Limitations Register** is `evidence-register.md`.
It is opened first and maintained throughout; it is not repeated here.

---

# Instrument 2 — Authority / Decision-Rights Map

**Stage:** A6. **Status: COMPLETED FOR FORMAL AUTHORITY; OBSERVED AUTHORITY
LARGELY UNRESOLVED — insufficient evidence, reason stated per row.**

Recording rules applied: "formal authority" is Client-Stated unless a governing
instrument was observed; "observed authority" cites decisions actually made;
"unresolved" is used where no one can say on the available evidence;
consultation and escalation are recorded as "none evidenced (basis: …)" or
"none formally required (instrument: …)" and never as "not applicable"; the map
assigns no authority; responsibility is recorded separately from authority.

**A note that governs this whole map.** No governing instrument of the Founder
Office class is held in the authorized corpus (EV-020). Every "formal
authority" entry below therefore rests on a *citation of* an instrument rather
than on the instrument, and is **Client-Stated**, even where the citing document
is itself a governance record. The one exception is where authority is encoded
in the schema, which is Observed as to the code.

| # | Decision / domain | Formal authority | Observed authority | Delegated authority + instrument | Informal authority | Contested | Anticipated but not established | Held by the same actor as | Responsible function | Required consultation / input | Escalation path | Evidence | Ambiguity / conflict |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| D-01 | Approve a Publication Candidate | **the author** — "The author **approves** (their own act)"; "Author Approval belongs to the author" — Client-Stated | **Unresolved.** No approval act is retrievable; production access none (AS-02). The only recorded exercises are disposable TEST fixtures in verification sessions | Yes — `approval_delegations` table with non-empty `basis`, `created_by`, expiry, revocation. Instrument: cited Founder Office determination (Revision 2, Question 1), **not held** | none evidenced (basis: no act records reachable) | none evidenced | — | — | the author | **none formally required** (instrument: the cited determination states "There is no implicit proxy approval") | none evidenced (basis: no escalation clause found for this class) | terminology.md "Approve / Authorize"; production-bridge.md:388; migration `20260810000000` (EV-024) | The right is encoded in the schema (Observed) while its exercise is unobservable (AS-02) |
| D-02 | Authorize a candidate (export / release eligibility) | **the imprint** — "the imprint **authorizes**" — Client-Stated; **and Observed in the schema**: `publication_authorizations.authority text not null default 'imprint' check (authority = 'imprint')` | **Unresolved.** The schema's `actor` is a `auth.users` reference; which human or role occupies "the imprint" is not stated anywhere in the corpus | none evidenced | none evidenced | none evidenced | — | possibly D-03, D-04, D-16 — **not established**; see the compression note below | staff (the only role the software has) | none evidenced (basis: no consultation clause found) | none evidenced | EV-024; terminology.md Production Bridge + Release sections | **"The imprint" is a constant in a check constraint, not an identified actor.** The gap between the governance term and any person is unresolved |
| D-03 | Declare a Release | **the imprint** — "the imprint's permanent declared publication act" — Client-Stated | **Unresolved** (as D-02) | none evidenced | none evidenced | none evidenced | — | as D-02 | staff | none evidenced | none evidenced | terminology.md Release terms; `publication_releases` | as D-02 |
| D-04 | Assign an ISBN to an Edition + Manifestation | **the imprint** — "ISBN Assignment — the imprint's act binding one recorded, evidenced registration to one Manifestation, forever" — Client-Stated | **Unresolved** | none evidenced | none evidenced | none evidenced | Institutional *assignment* is stated to have arrived with Edition Architecture; the terminology canon's earlier ISBN Registration row still reads "new institutional assignment **waits for** Edition architecture" — recorded as a sequencing statement, not a contest | as D-02 | staff | none evidenced | none evidenced | terminology.md Edition terms + Publication Metadata terms; migration `20260820000000` | Two ratified sections of the same canon describe assignment at different points in time; the canon is "amended in place", so both readings sit in one document |
| D-05 | Amend a constitution | **the Founder Office** — Operational Standard §8 makes escalation to it *required* for any action changing a constitution — Client-Stated | **Unresolved, and materially so.** No constitutional amendment act is held. The Design Constitution stands unamended while a deviation from its §2 is in force (CX-05) | none evidenced | none evidenced | none evidenced | — | D-06, D-09 (all three are Founder Office classes on the record) | — | none evidenced (basis: §8 states the requirement to escalate, not a consultation set) | Operational Standard §8 names the Founder Office as the terminus | founder-validation-program.md §8; design-constitution.md:5 | The instrument that would evidence an amendment is of the class that is cited-not-held throughout (EV-020) |
| D-06 | Approve a blueprint; authorize a phase | **the Founder Office** — "**The Founder Office** holds program authority: it approves this blueprint, authorizes phases" — Client-Stated | **Partially Observed *as citation*:** `production-bridge.md` records "approved by Founder Office determination, August 2026, with Required Revision 2 incorporated"; ten other blueprints record "proposed, awaiting Founder Office approval" while their capabilities are recorded elsewhere as shipped (EV-016) | none evidenced | none evidenced | none evidenced | — | D-05, D-09 | — | none evidenced | — | production-bridge.md:374; EV-016; EV-017 | **The principal ambiguity of the map.** Ten instruments simultaneously say "awaiting approval" and are treated as governing. The README states a convention that disposes of this for blueprints; nothing disposes of it for the three constitutions |
| D-07 | Routine refinement within approved architecture | **standing implementation authority**, also called **Publishing Development authority** — Operational Standard §8 — Client-Stated | **Observed once, by record:** FVO-001-001 is Disposed with "Authority: standing implementation authority", basis "Bounded defect within the approved Phase 2 authority" | Yes, by description: "the blueprint → authorization → implementation → verification → as-built discipline". Instrument: the Founder Office directive at `ab28d83`, **not held** | none evidenced | none evidenced | — | — | unresolved — the standing authority is described as a *discipline*, not as a person or office | none evidenced (basis: the discipline names stages, not consultees) | **Founder Office**, for any action changing a constitution, governance or authority structures, approved architecture, provenance or lifecycle semantics, or security posture (§8) | founder-validation-program.md §8; FVO-001-001 | The authority is named after a *process*. Whether it is held by a person, a role, or by the process's completion is not stated |
| D-08 | Dispose a Founder Validation observation | Split by §8: standing implementation authority for bounded matters; Founder Office where the action would change a constitution, governance/authority structure, approved architecture, provenance/lifecycle semantics, or security posture | **Observed once:** one disposition on record (FVO-001-001, Closed via Implemented → Verified, standing implementation authority) | as D-07 | none evidenced | none evidenced | — | D-07 | — | none evidenced | Founder Office per §8 | EV-009; EV-010 | Sample of one |
| D-09 | Ratify terminology | **the Founder Office** — "Ratified by Founder Office determination, delivered through **HGP Author Experience & Publishing Methodology** from Founder Validation Cycle 001" — Client-Stated | **Observed as citation** in eleven ratified sections of terminology.md dated July–August 2026 | Delivery is attributed to a named function — see Instrument 3, F-04 | none evidenced | none evidenced | — | D-05, D-06 | HGP Author Experience & Publishing Methodology (delivery, not authority) | none evidenced | — | terminology.md, Editorial review terms preamble | The delivering function appears **once** in the entire corpus |
| D-10 | Provision access to the platform | **"the publisher"** — "Access is provisioned by the publisher; there is no self-serve sign-up" — Client-Stated | **Unresolved** | none evidenced | none evidenced | none evidenced | — | unresolved | unresolved | none evidenced | none evidenced | README.md; `lib/auth/actions.ts` ("Please contact the publisher") | **"The publisher" is used as an actor and is defined nowhere.** Its relation to the Founder Office, the imprint, and staff is unstated |
| D-11 | Grant the staff role | **Unresolved as a governance matter; Observed as a mechanism:** the role is a JWT `app_metadata.role` value "assigned manually in Supabase" — i.e. by whoever holds the Supabase project's administrative access | **Unresolved** — no grant act is recorded anywhere in the corpus | none evidenced | none evidenced | none evidenced | — | — | — | none evidenced | none evidenced | migration `20260702000000`:169–176; `lib/auth/session.ts`:33–34 | **The most consequential access decision in the system has no governance record of any kind.** It is a dashboard action, outside the repository, outside RLS, and outside the append-only discipline |
| D-12 | Approve an architecture specification for implementation | **"(Opus 4.8)"** — four specifications carry "Status: APPROVED for implementation (Opus 4.8), July 2026" | **Unresolved** | none evidenced | none evidenced | none evidenced | — | — | — | none evidenced | none evidenced | `docs/settings/author-settings-architecture.md`:3; `docs/globalization/public-multilingual-architecture/architecture.md`:3; `…/reviewer-v3-hybrid-model-architecture.md`:3; two further title occurrences | **The designation is not defined anywhere in the corpus.** I record it verbatim in the position it occupies and infer nothing about what it denotes. RQ-03 / SQ-04 |
| D-13 | Permanently delete an author or a book | **staff** — "Staff-only" — Observed in code and RLS | **Unresolved** — no deletion act is retrievable (AS-02) | none evidenced | none evidenced | none evidenced | — | — | staff | none evidenced (basis: the record describes a confirmation page, not a second party) | none evidenced | `docs/operations/permanent-deletion.md`; admin delete routes | An irreversible, externally consequential act whose authorization is a single staff session plus a confirmation page. See A13 |
| D-14 | Resolve or Set Aside a Finding | **the author** — "the author's disposition" — Client-Stated, Observed in the canon | **Unresolved** (AS-02) | none evidenced | none evidenced | none evidenced | — | D-01, D-15 | the author | **none formally required** (instrument: terminology canon — Set Aside requires "No justification required") | none evidenced | terminology.md Editorial review terms | — |
| D-15 | Adopt a Judgment | **the author** | **Unresolved** (AS-02) | none evidenced | none evidenced | none evidenced | — | D-14 | the author | none formally required (instrument: terminology canon — "A Finding does not require a Deliberation") | none evidenced | terminology.md | — |
| D-16 | Move the Current Edition pointer | **Unresolved on the record**; Observed in code that authors cannot ("authors cannot move it" — migration-baseline eighth entry) | **Unresolved** | none evidenced | none evidenced | none evidenced | — | as D-02 | staff | none evidenced | none evidenced | migration `20260820000000`; migration baseline eighth entry | Recorded negatively (who *cannot*) rather than positively (who *may*) |
| D-17 | Put a change onto `main` (and thereby into production) | **Unresolved.** No instrument in the corpus names an authority for this act. The Engineering Constitution §1 describes the *mechanism* ("commit → push to `main` → automatic Vercel deploy") and names no approver; CI gates but does not approve (EV-028) | **Contested on the evidence** — see the Contested column | none evidenced | none evidenced | **Contested.** Claim A: `docs/design/broadsheet-implementation.md` states the Broadsheet work is "unpushed… production replacement is **not authorized** and has not been performed." Claim B: `refs/remotes/origin/main` = `e28f12a` = HEAD. **Both are recorded; neither is preferred.** The basis of Claim A is the as-built record's own words; the basis of Claim B is the repository's ref state | — | — | unresolved | none evidenced | none evidenced | EV-018; EV-019; CX-04; engineering-constitution.md §1 | **The single most consequential recurring act in the organization's stated operating model has no named accountable authority in the corpus.** See F-05 |
| D-18 | Select a design composition | **the Founder**, by name, in this instance | **Observed as record:** `PROVENANCE.md` states three captures were "selected by the Founder as the composition reference for the public homepage's body sections and placed here by the Founder on 2026-08-25", a fourth was "the Founder's reference for the public wordmark's size ('about twice')", and a fifth "the Founder's crop of the brand lockup" | none evidenced | none evidenced | none evidenced | — | — | — | none evidenced | none evidenced | `docs/design/broadsheet-2026-08/PROVENANCE.md` | The clearest instance in the whole corpus of an authority *exercising* a decision with the act, the actor, the date, and the artifact all recorded together. It is recorded here as the map's best-evidenced row |

### Role compression — the required finding, and why it is NOT recorded

A7/A6 require that where **the evidence resolves every decision class to one
actor**, role compression is recorded as a finding with its continuity
consequence and the evidence that established it — and that it is **never
assumed from the organization's size, founding, or the number of names
encountered**.

**Role compression is not recorded, because the evidence does not establish
it.** What the evidence establishes is different and weaker: the corpus names
**seven distinct authorities** (Founder Office; the imprint; standing
implementation authority / Publishing Development authority; the author; staff;
the publisher; "(Opus 4.8)") and, for **fourteen of eighteen** decision classes,
does not identify who actually exercises them. That is *unresolved observed
authority*, not concentration.

I record explicitly what I declined to do: 202 of 203 commits carry one name
(EV-002), the migration baseline records production holding one author and one
book (EV-011), and the Operational Standard §1 speaks of "a founder publishing
a real book through Huerta Group Publishing". It would be easy, and wrong, to
conclude from these that the seven named authorities are one person. A6's
non-prescription rule forbids exactly that inference ("Do not treat one person's
presence in every record as proof that authority is theirs"), and A6's
concentration rule forbids treating concentration as the default. **Whether the
named authorities are distinct actors is the map's largest open question and is
put to the organization** (SQ-01), not answered here.

### Concentration

Not found, and therefore not recorded as a condition. Nothing in this map should
be read as a finding that authority is concentrated, or that it is distributed.
Both remain unestablished at this baseline on the available evidence.

---

# Instrument 3 — Function / Responsibility Map

**Stage:** A7. **Status: COMPLETED WITH A NAMED, IRREDUCIBLE GAP.**

Functions are derived from evidence of work, never enumerated from a chart. No
chart and no participant-supplied inventory exist (NA-09), so the
participant-inventory comparison the instrument requires **could not be
performed** and is recorded as such rather than skipped.

| Function | Purpose | Evidenced by | Formal responsibilities | Observed responsibilities | Key outputs | Dependencies | Overlap | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Platform engineering | Build and change the software | **work** — 203 commits, 42 migrations, 21 test files, a CI gate | Not formally assigned in any held instrument | Writes code, schema, tests, and as-built records; runs production verification sessions; fixes forward | The platform; the migration set; as-built records | Supabase, Vercel, GitHub, OpenAI | with "standing implementation authority" (D-07) — the same discipline named as an authority and performed as work | EV-001, EV-003, EV-011, EV-031 |
| Governance record-keeping | Write and maintain the governing corpus | **work** — 78 tracked Markdown files (94 files under `docs/`, including images and design sources), 837 KB; 113 of 203 commits touch `docs/` | Engineering Constitution §13: "Durable decisions… are committed files in this repository" | Produces constitutions, terminology canon, blueprints, as-built records, operational standards, registers | The governing corpus | — | with Platform engineering — the same commits frequently carry both | EV-003, EV-031, EV-005 |
| Production verification | Prove behaviour against the hosted system | **work** — eight dated entries in the migration baseline, each enumerating probes, defects, and fixture residue | The Engineering Constitution §1 standard of "done" | Designs probes, executes them against production with disposable TEST fixtures, records outcomes, restores baseline | The verification log; defect fixes | Hosted Supabase (AS-02) | with Platform engineering | EV-011 |
| Founder Office | Determine, approve, authorize, ratify | **name only** — 21 Markdown files and 15 non-Markdown files (9 source/CSS files and 6 migrations) reference it; **no instrument authored by it is held** (EV-020) | Operational Standard §8 escalation set; program authority (production-bridge.md:374) | **Not evidenced.** Its acts are known only through other functions' citations of them | Determinations FD-A…FD-H; authorizations; ratifications — all cited, none held | — | with the Founder (D-18) — **not established** | EV-020, EV-T01 |
| The imprint | Authorize, declare, assign | **name only**, plus **one encoded constant** — `check (authority = 'imprint')` | Terminology canon | Not evidenced | Authorizations; Releases; ISBN Assignments | the platform | with Founder Office and staff — **not established** | EV-024, EV-T02 |
| Staff / administration | Operate the administration surfaces | **work** — 19 admin route files; `is_staff()` in RLS throughout | Staff-only areas: authors, books, review runs, support, import cleanup, system health, permanent deletion | Not evidenced beyond the code's existence (AS-02) | Administration views; triage; permanent deletion | the platform | with the imprint (staff is the surface through which imprint acts are made) | EV-023, EV-026 |
| HGP Author Experience & Publishing Methodology | Deliver Founder Office determinations on editorial method | **named by an account only** — a single occurrence, in the terminology canon's Editorial review preamble, and nowhere else in 438 files | Not stated | Not evidenced | The Editorial review terms ratification | — | — | terminology.md, Editorial review terms preamble |
| The author | Write, approve, resolve, set aside | **document only** — the canon and blueprints describe the role extensively; no author act is retrievable (AS-02, AS-08) | Terminology canon; production-bridge.md | Not evidenced *by this diagnosis* — deliberately not sought | Manuscript; approvals; dispositions | the platform | — | terminology.md; NA-04 |
| The publisher | Provision access | **name only** — two occurrences | Not stated | Not evidenced | Provisioned accounts | Supabase auth | unresolved with Founder Office / imprint / staff | EV-T06 |
| Design authorship (external) | Produce the design direction package | **work** — nine checksummed files, dated 23 August 2026, author recorded as "Claude Design" | None — the record states the package "records what was proposed, not what was built" | Produced the Broadsheet direction; the evaluation of it is attributed to the Founder Office and **not held** | The design source package | — | — | `PROVENANCE.md` |

### Unowned work, recorded against the map as a whole

- **Granting the staff role** (D-11). No function claims it; it happens in the
  Supabase dashboard.
- **Deciding that a change goes to `main`** (D-17). No function claims it.
- **Keeping the README's quantitative claims true** (CX-01/02/03). No function
  claims it, and the drift-guard pattern that protects the terminology canon and
  the design tokens (EV-027) does not cover it.
- **Custody of the diagnostic team's own material** (A17 rule 7). Unowned by
  agreement, because no party was available to agree it.

### Habit-held responsibility — the required entry

**"Habit-held responsibility: capability not exercised — observation
unavailable."**

A7 requires that work held only by habit be identified by **observing work as
performed** and comparing it with what any assignment covers — *not* by asking
whether it exists. No observation was available (NA-08) and no account was
available (NA-01). Per A7 and Instrument 3's recording rule, this is recorded as
**"capability not exercised — observation unavailable"** and **never** as "no
habit-held work found."

A7 further notes that where the evidence resolves every assignment to a single
actor, the distinction between habit and role may be unobtainable in principle.
I record that this *may* be the case here and that **I have not established
it** — see the role-compression note in Instrument 2.

### Three kinds of quiet (A7)

- *No evidence at all:* the fourth constitution (EV-021).
- *Evidence, but nothing consequential now:* the Theme Register and Decision
  History — both exist, both are correctly empty by their own account.
- *Consequential but invisible at any coordinating level:* granting the staff
  role, and the act of putting a change onto `main`. Both are consequential;
  neither leaves a record in the corpus that assembles cross-unit state.

---

# Instrument 4 — Source-of-Truth Inventory

**Stage:** A9. **Status: COMPLETED FOR REPOSITORY-EVIDENCED DOMAINS; "SOURCE OF
RESORT" BLOCKED THROUGHOUT.**

The three facts of A9 are recorded separately with their own classes:
**(a) the source exists**, **(b) a stakeholder is confident in it**,
**(c) the organization treats it as authoritative**.
**Fact (b) is unobtainable for every row** — it requires a participant (NA-01).
It is recorded as "not obtained", never as absent and never merged into (c).

**Source of resort** (A9: "where a participant actually goes when they need to
resolve uncertainty or obtain a working answer — per participant, in their own
words, Client-Stated") is **blocked for every row**: no participant. It is
recorded as blocked rather than substituted with the authoritative source,
because A9 states it is "recorded beside the authoritative source and never as
it."

| Domain | Authoritative source | Source owner | Retrievable by the organization | (a) exists | (b) stakeholder confidence | (c) treated as authoritative — by what act | Source roles | Representational systems | Duplicate / conflicting | Freshness | Access limits | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Manuscript and memory content (the permanent record) | The hosted Supabase database | **Unresolved** — no owner is named for it in any held instrument | **Partial, basis stated:** the schema is retrievable from `supabase/migrations/`; the *content* is retrievable only through the hosted project, and no export or backup path is evidenced in the repository (EV-026) | Observed *by citation* only (EV-011); I did not reach it | **not obtained** (NA-01) | Client-Stated — Product Constitution IV, Engineering Constitution §3, and the append-only triggers in the migrations | first worked through: **none evidenced**; clarified: none evidenced; routed from: none evidenced; **decides:** the author (D-14/15); **fact established:** the database; **durable record:** the database | The Reading Copy; Assembled Memory views; Publication Candidates | none evidenced | not establishable (AS-02) | **none** | EV-011, EV-026 |
| Platform terminology | `docs/constitution/terminology.md` | Not named; ratification attributed to Founder Office determination | **Yes** — a committed file in a repository with a local clone | **Observed** | **not obtained** | **Observed act:** the canon declares itself "canon in force", and `lib/terminology/canon-source.ts` reads it as source and fails the build on drift (EV-027). This is the strongest (c) in the inventory: authority established by *practice*, mechanically | first worked through: none evidenced; clarified: the canon itself; routed from: none evidenced; decides: Founder Office (cited); fact established: this file; durable record: this file + git history | Message catalogs `messages/en-US.json`, `messages/es-419.json`; UI copy; the Spanish canon `terminology-es-419.md` | none evidenced — the drift guard exists to prevent them | current by construction for the guarded section; **unguarded for the other ten sections** | none | EV-007, EV-027 |
| Design tokens and typography | `app/globals.css` (values) + cited determinations FD-A/B/C (authority) | Not named | **Partial:** the values are retrievable; **the determinations are not held** (EV-020) | **Observed** for the CSS; **not held** for the determinations | **not obtained** | **Observed act** for the CSS: `lib/design/tokens.test.ts` reads it directly and pins contrast, faces, and floors | first worked through: the design source package (`docs/design/broadsheet-2026-08/`, preserved with checksums); clarified: the as-built record; routed from: none evidenced; decides: Founder Office / the Founder (D-18); fact established: `app/globals.css`; durable record: the as-built record + git | The design-source prototype; the founder-review PNGs | **Conflict recorded:** the Design Constitution §2 states a three-face system the CSS does not implement (CX-05) | current | none | EV-006, EV-027, CX-05 |
| Which migrations are applied to production | **Unresolved between two candidates:** `supabase_migrations.schema_migrations` in the hosted project, and `docs/operations/production-migration-baseline.md` | Not named | **Partial** — the baseline document is retrievable; the hosted ledger is not (AS-02) | Observed for the document; cited for the ledger | **not obtained** | Client-Stated — the baseline's Standing Rule asserts the two "must remain append-only and repository-matched" | first worked through: none evidenced; clarified: the baseline's verification log; routed from: none evidenced; decides: unresolved; fact established: **disputed between the ledger and the document**; durable record: the document | `supabase/migrations/` (42 files); `docs/setup.md` §2 (enumeration); `README.md` (a count); the `/admin/system` page (a panel); the hosted ledger | **Conflict recorded:** README says 29; setup.md and the baseline say 42 (CX-01) | the baseline's last entry is dated 2026-08-11; the baseline is 14 days old at this diagnostic's point in time | hosted side **none** | EV-011, EV-012, EV-013, EV-014 |
| Capability status ("what exists today") | **Unresolved** — no single source | Not named | Yes for each part | Observed | **not obtained** | **No act evidenced.** No document declares itself authoritative for capability status | first worked through: blueprints; clarified: as-built records; routed from: none evidenced; decides: unresolved; **fact established: none evidenced**; durable record: the as-built records collectively | Blueprint status lines (20); README "What exists today"; `docs/operations/` as-built records (13); terminology ratification notes; the Broadsheet as-built | **Conflicts recorded:** EV-016/EV-017 (ten "awaiting approval" blueprints for live capabilities); CX-06/CX-07 (globalization records describing routes as unbuilt that exist) | mixed; several records are explicitly frozen "as history" by convention | none | EV-016, EV-017, CX-06, CX-07 |
| Governing law of the product | `docs/constitution/` (three files) + terminology.md | Founder Office (cited) | Yes | **Observed** | **not obtained** | **Weak / contested:** all three constitutions read "proposed, awaiting approval", while the README lists them as "Governing canon" and instructs that every screen and feature is measured against them. **No approval act is held** | first worked through: `docs/reviews/2026-07-refinement-review.md` ("feeding the v1 constitutions"); clarified: the constitutions; routed from: none evidenced; decides: Founder Office (cited); fact established: the constitution files; durable record: the files + git | README "Governing canon"; blueprint "Governing canon" preambles; code comments | **Conflict recorded:** the status line withholds the approval on which the documents' own force is conditioned | unchanged since July 2026 | none | EV-004, EV-005, EV-006, EV-017 |
| The design direction as proposed | `docs/design/broadsheet-2026-08/` | "Claude Design" (recorded author) | **Yes, and exceptionally well:** nine SHA-256 digests recorded, a stated verification command, and an explicit rule that the directory is "design-source evidence, preserved unaltered" | **Observed** | **not obtained** | **Observed act:** the PROVENANCE record establishes it as evidence-of-proposal and expressly **not** as product truth: "Where the prototype's copy conflicts with the platform, the repository controls" | first worked through: the package; clarified: the as-built record; routed from: none evidenced; decides: the Founder (D-18); fact established: the repository; durable record: the package + digests | The founder-review PNGs; the as-built record | none — the record pre-empts them | frozen by design | none | `PROVENANCE.md` |

### Rule applications recorded

- **"Never authoritative by existence":** the design-source prototype's invented
  Workshop content (book titles, chapter text, findings, version entries,
  account identity) is recorded in this class — the organization records the
  same disposition itself: "**Not product truth.** All Workshop content in the
  prototype is invented placeholder… by the author's own statement."
- **One matter, N representations (A9/A14):** *which migrations are applied* is
  **one matter with five repository-side representations plus one hosted
  representation** — see Instrument 7, FR-01. It is recorded once, against the
  matter.
- **No source role makes a source authoritative:** applied to
  `docs/design/broadsheet-2026-08/` — it is where the design was first worked
  through and it is *not* an authoritative source, by the organization's own act.

---

# Instrument 5 — Workflow / Handoff / Dependency Inventory

**Stage:** A10. **Status: PARTIALLY COMPLETED — TRAIL ROWS ONLY. THE
INSTRUMENT'S CENTRAL REQUIREMENT IS BLOCKED.**

A10's trail-first procedure requires four things before any described process is
recorded: the artifacts produced; the records and timestamps they left; the
correspondence around them; and **a stakeholder walking the team through the
last actual instance of the work, step by step, in their own words.**

- Artifacts: **obtained.**
- Records and timestamps: **obtained** (git history, the verification log).
- Correspondence: **not obtained** — none is held in the repository, and the
  Engineering Constitution §13 implies durable decisions are files rather than
  correspondence. Whether correspondence exists elsewhere is not established.
- Stakeholder walkthrough of the last actual instance: **not obtained** (NA-01).
- **Observation of work as performed: not obtained** (NA-08).

Per A10 and A20, every finding that would depend on observation of work as
performed is therefore untested. The described rows below are recorded as
**separate rows** from the trail rows, as the instrument requires, and the two
are compared.

### W-01 · A capability reaches the platform

| | Trail row (from artifacts and timestamps) | Described row (from records) |
| --- | --- | --- |
| Trigger | A commit series appears; a blueprint file is added before the implementation commits | "the blueprint → authorization → implementation → verification → as-built discipline" (Operational Standard §8) |
| Participants | One committer name on 202 of 203 commits (EV-002); "the Founder Office" as a cited authorizer | Founder Office (authorizes), standing implementation authority (implements), production verification |
| Expected outputs | Blueprint · migrations · code · tests · an as-built record in `docs/operations/` · a dated entry in the migration baseline | the same |
| Handoffs | **Not evidenced.** No artifact records a transfer of expected action from one party to another | Implied by the discipline's stage names |
| **Owner of the next expected action** | **Unrecorded** for every stage. Nothing in the corpus records who is expected to act next on anything | Not stated |
| Dependencies | Hosted Supabase; Vercel; GitHub; the CI gate | Stated in the Engineering Constitution §1 |
| Blocking conditions | **None evidenced as currently blocking.** Note: a dependency is recorded as blocking only where evidence shows work cannot presently proceed; no such evidence exists | — |
| Obligations / time boundaries | **None evidenced.** No date in the corpus is recorded as having consequence if it passes | — |
| Failure points | Not establishable without observation (NA-08) | — |
| Evidence | EV-001, EV-003, EV-011, EV-016, EV-031 | founder-validation-program.md §8, §10 |

**Comparison of the two rows.** They agree on the stages and disagree on
nothing; what the trail *cannot* show is any handoff, any next-action owner, and
any wait. That is the substantive result of this row: **the discipline is
visible in its artifacts and invisible in its transfers.** Whether transfers
occur and are simply unrecorded, or do not occur because one actor performs
every stage, is exactly what the missing walkthrough would settle (SQ-05).

### W-02 · An observation becomes institutional change

| | Trail row | Described row |
| --- | --- | --- |
| Trigger | One instance: a defect found during an implementation-phase verification session (FVO-001-001) | Operational Standard §6: Recorded → Under Analysis → Disposed → (action path) → Closed |
| **Owner of the next expected action** | **Unrecorded** | — |
| Dependencies | §7: "a decision cites a theme, a theme cites observations" | The learning chain: Observation → Theme → Institutional Learning → Evolution Record |
| Blocking conditions | **Evidenced:** with zero Themes opened, the *required path* from observations to any Validation Decision is not presently traversable. This is a dependency that currently prevents advancement of that specific chain — recorded as blocking, with its basis | §7 makes the theme the required path |
| Obligations | none evidenced | — |
| Evidence | EV-009, EV-010 | founder-validation-program.md §6, §7, §8 |

**Comparison.** The described process has five stages; the trail contains one
instance which traversed them all in a single day (recorded 2026-08-11, closed
2026-08-11) without opening a Theme. The record is internally consistent —
Closure follows Verified on the action path, and no Decision was made, so no
Theme was required. Recorded as consistent, not as a defect.

### W-03 · A change reaches production

**BLOCKED — insufficient evidence, and contested.** The trail row cannot be
written: the act's own record (the as-built) and the repository's ref state
disagree about whether it occurred for the work at this baseline (CX-04), and
the environment in which it would be observed is outside access (AS-03). Per
A10 the described row is not written in place of a trail row. Recorded as
blocked. See D-17 and F-05.

### W-04 · Editorial review → Finding → Deliberation → disposition

**BLOCKED — insufficient evidence.** The workflow is described in detail by the
terminology canon and three blueprints, and its last actual instances are
author-confidential (NA-04) and live in production (NA-02). Neither the trail
nor the walkthrough is available. Per A10, the described process is **not**
recorded here in place of a trail row. The organization's described model is
noted only by reference: terminology.md "Editorial review terms" and the
"*No change needed*" rule.

---

# Instrument 6 — Institutional-Memory Risk Inventory

**Stage:** A12. **Status: COMPLETED, WITH ONE QUESTION RECORDED AS UNANSWERABLE
BY RULE.**

A12's question *"What knowledge about the organization exists only with its
implementers, advisors, or vendors — including the diagnostic team itself?"*
turns on the boundary recorded at A3 step 11. **That boundary is unresolved
(NA-10).** Per A12 and Instrument 6's recording rule, rows below record **the
holding and the unresolved boundary**, and do not deliver a judgement about
inside or outside.

| ID | Knowledge / domain | Current holder / location | Organizational control | Independent retrievability | Authority status | Loss risk | Continuity consequence | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IM-01 | The governing corpus (constitutions, terminology, blueprints, as-built records, registers) | A git repository, cloned locally and mirrored at a remote | **Yes** (partial basis: control of the remote is not evidenced in the corpus) | **Yes** — a working clone exists and was read | Treated as authoritative by practice; three of the four top-level instruments say "proposed" | Low | — | EV-001, EV-003 |
| IM-02 | The permanent record (manuscripts, memory, versions, findings, deliberations, review runs) | The hosted Supabase project | **Partial, basis stated:** the schema is in the repository; the content is in a third-party hosted service | **Not established.** No export or backup path is evidenced in the repository (EV-026); platform-level backups may exist and were not verifiable (AS-02) | Authoritative by the constitutions and by schema-level immutability | **Not establishable from available evidence.** Recorded as unestablished, not as low or high | The Product Constitution IV states "Losing work must be structurally impossible, not merely discouraged." Whether that property survives loss of the *hosted account* — as distinct from loss of a *row* — is not addressed by any held record | EV-026, NA-02 |
| IM-03 | Founder Office determinations, directives and authorizations (FD-A…FD-H; the phase directives; the `ab28d83` directive) | **Unknown to this diagnosis.** Cited by 36 files; held by none | **Not established** | **No** — not retrievable from the authorized corpus | Cited as the authority for typography, palette, panel treatment, four rejected design proposals, every publication phase, and the Founder Validation Program itself | **Material.** The corpus's own governing acts are known to it only as citations | If the instruments are not held anywhere durable, the organization can retrieve *that a determination was made* but not *what it said* beyond the citing document's paraphrase. Several are load-bearing: FD-E…FD-H are the basis on which four design proposals were rejected, and `lib/design/workshop-wiring.test.ts` fails if any reaches runtime — the test encodes the outcome, not the reasoning | EV-020, EV-T13 |
| IM-04 | The Reviewer v3/v4 validation evidence | `phase3j_verification.ts`, `phase_reviewer_v3_s4_verification.ts` — **cited, not held** | **Not established** | **No** | The globalization records' conclusions about model choice rest on them | **Material.** The conclusions are retrievable; the evidence for them is not | The organization can retrieve *that* gpt-5.5 found a seeded contradiction 8/8 and gpt-4o 0/8; it cannot re-run or audit the scripts that produced those figures from this corpus | EV-022 |
| IM-05 | The "Claude Design Handoff Evaluation & Implementation Readiness Report" | **Cited, not held** | Not established | **No** | The stated basis on which an externally authored design package was evaluated before placement | Material for the design domain | The package itself is preserved byte-for-byte with digests; **the evaluation of it is not preserved at all.** The organization kept the input and not the judgement | `PROVENANCE.md`:21 |
| IM-06 | The staff-role grant | The Supabase project's administrative surface; a JWT claim | **Not established** — outside the repository, outside RLS, outside the append-only discipline | **No** — no grant act is recorded anywhere | The security boundary of the entire platform rests on it (Engineering Constitution §4) | **Material** | The organization cannot answer from its own durable records who holds staff, when it was granted, or by whom | EV-023, D-11 |
| IM-07 | Which migrations are applied to production | The hosted ledger; and the baseline document | Partial | Partial — the document is retrievable, the ledger is not | The baseline's Standing Rule | Moderate | The baseline records that the ledger was once **empty** and was repaired; the durability of the reconciliation depends on `supabase db push` remaining the single path, which is a stated convention rather than an enforced control | EV-011 |
| IM-08 | Knowledge of *why* the README's figures diverged and which is current | **Nowhere.** No record addresses it | — | No | — | Low individually; instructive collectively | The corpus has no mechanism that would notice this class of drift; the mechanism it does have (drift-guard tests, EV-027) covers the terminology canon, the design tokens, the Workshop wiring, and catalog parity, and not the README | CX-01/02/03, EV-027 |
| IM-09 | **Implementer-side / advisor-side custody — the diagnostic team's own material** (A17 rule 7) | This diagnosis's seven output files and the reasoning behind them, held at `…/scratchpad/stage6-second-author-output/`, outside the subject repository | **No** — held by the diagnostic team | Yes, to the team | Not authoritative; evidentiary only | **Custody disposition NOT AGREED** — no party was available to agree it (A17 rule 7 requires agreement before the diagnosis closes) | The diagnosis closes with an unagreed custody disposition. Recorded as a defect in the closure. SQ-11 | this file |
| IM-10 | The design source package | `docs/design/broadsheet-2026-08/`, with nine SHA-256 digests and a stated verification command | **Yes** | **Yes** | Explicitly *not* authoritative — "records what was proposed, not what was built" | **Low — and this row is recorded as the corpus's strongest institutional-memory practice**, not as a risk | An externally authored artifact was received, checksummed before placement, moved byte-for-byte, re-verified after, and fenced from the runtime with a lint exclusion and a test. It is the pattern IM-03, IM-04 and IM-05 lack | `PROVENANCE.md` |

### A12's evidence-derived supplementary questions

- *Has the organization lost significant records before, and how is that loss
  recorded?* — **Not answerable on available evidence.** One adjacent fact is
  recorded: the hosted migration ledger was found empty on 2026-08-09 and
  repaired; the corpus records this as a bookkeeping state, not a loss.
- *Is the chain by which decisions travel from an accountable authority to the
  people who act reliable, and is it recorded?* — **The chain's endpoints are
  recorded and its middle is not.** Determinations are cited at the point of
  use (in CSS comments, test files, as-built records) and the determining
  instruments are not held (IM-03).
- *Do corrections overwrite prior state or preserve it?* — **Preserve.**
  Observed and consistently so: forward-only correction is enforced in the
  schema (release corrections, association corrections, assignment corrections
  with back-pointers), asserted throughout the canon, and practised in the
  registers ("nothing is silently rewritten"). This is the corpus's most
  thoroughly evidenced property.

---

# Instrument 7 — Operational-Friction Inventory

**Stage:** A14. **Status: COMPLETED FOR REPOSITORY-EVIDENCED FRICTION;
FREQUENCY LARGELY UNCOUNTABLE.**

Per A14's one-matter rule, friction arising from one matter kept in several
places is recorded **once**, against the matter, with its places counted and
listed.

| ID | Friction | Where observed | **Places recorded (count and list)** | Frequency | Consequence | Affected roles | Underlying cause | Current workaround | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FR-01 | The state of "which migrations are applied" is kept in several places, and they disagree | The corpus | **6** — (1) `supabase/migrations/` (42 files); (2) `docs/setup.md` §2 (enumerated 1–42); (3) `docs/operations/production-migration-baseline.md` (verification log, last entry 42/42); (4) `README.md` (a count: 29); (5) the `/admin/system` panel (renders a pending/applied state); (6) the hosted `supabase_migrations.schema_migrations` ledger | **Counted, not characterized:** one divergence present at this baseline, in place (4) | A reader oriented by the README begins from a figure 13 migrations out of date | Anyone orienting to the system | **Known.** Places (1)–(3) and (6) have a reconciliation discipline; place (4) has none | None evidenced. Places (1)–(3) and (6) are reconciled by the baseline's Standing Rule and `supabase db push` | CX-01, EV-011, EV-012, EV-013 |
| FR-02 | Capability status is kept in several places with different vintages | The corpus | **5** — blueprint status lines (20 files); `README.md` "What exists today"; `docs/operations/` as-built records (13 files); terminology ratification notes (11 sections); `docs/globalization/README.md` | **Counted:** 10 blueprints read "awaiting approval" for capabilities recorded elsewhere as live; 2 globalization records describe as unbuilt routes that exist | A reader must know which record class to trust for which question | Anyone orienting to the system | **Known and partly disposed:** the README states the convention "Older blueprints keep their original status lines as history; the capabilities they describe are live" | The stated convention — which covers blueprints and does not reach the globalization index or the constitutions | EV-016, EV-017, CX-06, CX-07 |
| FR-03 | A governing instrument's stated force is conditioned on an approval that is not held | The corpus | **4** — the three constitutions' status lines, plus the README's "Governing canon" list that treats them as in force | Standing since July 2026 | A reader cannot tell from the corpus whether the constitutions bind | Anyone proposing a change; anyone judging a deviation | **Unknown.** No record states whether approval occurred, was withheld, or was never sought | None evidenced. In practice the documents are cited as governing | EV-004, EV-005, EV-006, EV-020 |
| FR-04 | Context without authority distinction — a determination's *outcome* is encoded while its *reasoning* is not retrievable | `app/globals.css`, `lib/root/fonts.ts`, `lib/design/*.test.ts` | **3** classes of place hold the outcome (CSS comments, font module comments, tests); **0** hold the instrument | 8 determinations cited (FD-A, B, C, E, F, G, H — 7 distinct letters, 16 citation sites) | The tests will hold the line; nothing will explain it | Future implementers | **Known** | The tests themselves: `workshop-wiring.test.ts` "fails if any [rejected proposal] does [reach runtime]" | EV-T13, IM-03 |
| FR-05 | Change detection — no concise answer to "what changed since I last looked" | The corpus | **1** — git history is the only surface that answers it, and it answers at commit granularity, not at decision granularity | Standing | An accountable authority returning after an interval has no assembled account of what changed | Founder Office; any reviewing authority | **Known by the method, unaddressed by the corpus:** A1's "Since Last Review" concept has **no equivalent term** in this organization (EV-T16) | Reading the log | EV-T16 |
| FR-06 | Dependency invisibility — no surface records who is expected to act next on anything | The corpus | **0** places record a next-action owner | Standing | A10's "next action, always" requirement cannot be satisfied from any record | All | **Unknown** — it may be that in a single-actor operation the question does not arise. **Not established** | None evidenced | W-01, W-02 |
| FR-07 | State reconstruction — assembling "what is true now" requires reading across record classes | The corpus | **≥5** record classes must be read together to establish current capability state (see FR-02) | Standing | Orientation cost | Anyone entering the corpus | Known | The README attempts to be the assembling surface and is itself out of date on three figures | CX-01/02/03, FR-02 |

### Frictions the method asks about and the evidence cannot reach

- *Attention reconstruction*, *temporal fragmentation*, *where deadlines are
  rediscovered instead of managed*, *where work routinely bypasses intended
  controls*, *how many decisions await an authority at a point in time*
  (A8/A14) — **not establishable from available evidence.** These require
  production access or accounts (NA-01, NA-02, NA-11). Per A8, latency is
  recorded as **"latency not establishable from available evidence"** and no
  distribution is available either.
- **No friction is recorded as affecting authors.** That is not a finding that
  authors experience none; author-facing evidence was deliberately not sought
  (NA-04). The single Founder Validation observation on record is precisely an
  author-facing friction ("Assigned identifiers were invisible to the book's
  author"), which is the clearest available indication that this instrument's
  blind spot is real.

---

# Instrument 8 — Governance Gap / Excess Assessment

**Stage:** A11. Every row ends in "diagnostic recommendation only" — a
description of what the organization might decide, never a decision.

| Subject | Current authority / governance | Gap / excess / ambiguity / conflict | Operational consequence | Evidence | Client authority required | Diagnostic recommendation only |
| --- | --- | --- | --- | --- | --- | --- |
| The three constitutions' force | Each reads "proposed, awaiting approval"; the README lists them as "Governing canon" | **Ambiguity** | A deviation cannot be classified as permitted or as a breach, because the instrument's own force is conditional and the condition is unrecorded | EV-004/005/006, EV-017 | **Founder Office** (Operational Standard §8 reserves constitutional change to it) | The organization might decide whether the approval occurred and, if so, record the act; or decide that "proposed" is the intended standing state and say so |
| Design Constitution §2 vs the Broadsheet typography | §2 names three faces and requires amendment before deviation; the implementation runs two and retires one, under cited determination FD-A | **Conflict** | The governing text and the governed artefact state different rules; a future implementer reading §2 would be misled, and `tokens.test.ts` would fail them | CX-05, EV-006, EV-027 | **Founder Office** | The organization might decide whether FD-A amended §2, superseded it, or was an authorized exception, and record which |
| Authority to put a change onto `main` | **None held.** The mechanism is described; no approver is named | **Gap** | The act that, by the organization's own model, *is* deployment has no recorded accountable authority; and the corpus contains a contested instance of it (CX-04) | D-17, EV-018, EV-019 | **Unresolved** — which is itself a finding for Instrument 2 | The organization might decide who holds this right and whether it needs recording at all in a single-operator condition |
| Grant of the staff role | A manual dashboard action; no record | **Gap** | The platform's entire security boundary (Engineering Constitution §4: "Row Level Security is the security boundary") is keyed to a claim whose grant is outside every governance mechanism the organization has built | EV-023, IM-06 | **Unresolved** | The organization might decide whether staff grants should leave a durable record, given that everything else consequential does |
| "The publisher", "the imprint" as actors | Named and used; neither defined | **Ambiguity** | Acts are attributed to entities that cannot be resolved to a person, office, or body | EV-T02, EV-T06 | **Founder Office** | The organization might decide whether these are roles, offices, or synonyms, and record the mapping |
| "(Opus 4.8)" as an approving designation | Four specifications approved under it; undefined | **Ambiguity** | Four approved architectures rest on an approval whose holder the corpus does not identify | EV-T14, D-12 | **Unresolved** | The organization might decide what the designation records and whether those approvals stand |
| The Founder Validation Program's evidence source | §1 and §12 scope the program to lived evidence from real use; the single observation on record arose from an implementation verification session with disposable fixtures | **Ambiguity, not a gap** | The program is correctly built and, at this baseline, is being fed by the function it was designed to be independent of | EV-008, EV-009, EV-010 | **Founder Office** | The organization might decide whether implementation-phase verification findings belong in the FVO stream, or whether the stream should be reserved to real use as §1 describes |
| Governance **excess** | — | **None asserted** | — | — | — | A11's excess test requires evidence of operational load or bypass. **No evidence of bypass was found**, and operational load cannot be measured without production access. **Excess is therefore not asserted**, and its absence here is a statement about the evidence, not a finding that no excess exists |
| The Institutional Evolution Log / Operational Standards class | Cited by the authorizing directive; the Operational Standard records that neither existed and disposes of it by mapping the concept onto the standing corpus | **Recorded and disposed by the organization itself** | None currently | EV-020 | — | Recorded here as an instance of the organization performing its own citation check. No recommendation |

---

# Instrument 9 — Technology-Worthiness Test

**Stage:** A15, applied after Instruments 4, 5 and 7. **One test per problem.**

I apply the test to **exactly one** diagnosed recurring problem, because only
one is sufficiently evidenced by this records-only diagnosis to be tested at
all.

## Problem tested: FR-01/FR-02/FR-07 — *one matter kept in several places, with places diverging silently*

**Preceding question (A15, mandatory before the test).**
*Does a capability already exist — built, standby, or dormant — awaiting a
decision rather than a build?*

**Yes.** EV-027: the organization has already built, tested, and repeatedly
applied a drift-guard pattern — a test that reads a governing document *as its
source* and fails when the implementation diverges. `lib/terminology/canon-source.ts`
reads `docs/constitution/terminology.md` and pins application copy to it, and
describes itself as "the drift guard, not a second authority".
`lib/design/tokens.test.ts` reads `app/globals.css` and pins contrast ratios,
typefaces, and floors. `messages/catalog-parity.test.ts` pins catalog parity.
`lib/design/workshop-wiring.test.ts` pins rejected design proposals out of the
runtime. The pattern is proven — the tokens test is recorded as having caught a
contrast failure before commit.

Per A15's preceding question, a "yes" **routes to the outcome
*existing system should be improved rather than replaced*** or to Instrument 10,
and the test proceeds only if the organization's authority has decided
otherwise. **No such decision exists**, and no authority was available to make
one.

**Outcome: EXISTING SYSTEM SHOULD BE IMPROVED RATHER THAN REPLACED.**

The remaining questions are answered for the record, not to reach a different
outcome:

- *Is the problem recurring?* Yes, on evidence rather than anecdote: three
  divergent figures in one file (CX-01/02/03), two stale globalization records
  (CX-06/07), one unamended constitution (CX-05), and one contested as-built
  status line (CX-04) — seven instances at one baseline.
- *Is the problem sufficiently understood?* Partly. What diverged is known.
  *Why* the drift-guard pattern was extended to four artefacts and not to
  others is not recorded anywhere and would require an account (SQ-08).
- *Is authoritative ownership understood?* **No.** Instrument 4 records
  "capability status" as having **no** authoritative source and **no**
  establishing act. Automating a check against a source that is not established
  would encode a source of truth the organization has not chosen — precisely
  what A15 question (4) guards against.
- *Would technology reduce material friction?* Probably, for the mechanical
  cases (counts, file existence). Not for FR-03, FR-05 or FR-06, which are
  governance and attention questions, not drift questions.
- *Would technology duplicate an existing authoritative system?* It would
  duplicate the existing drift-guard pattern — which is the basis of the
  outcome above.
- *Would technology freeze premature assumptions?* **Yes, for the general
  case.** A general "documentation truth" checker would have to decide which
  record is authoritative for capability status. The organization has not
  decided that (Instrument 4). Building it would decide it silently.
- *Can manual operation generate needed learning first?* Yes — and the
  organization already has the instrument for it: the Founder Validation
  Program's Observation → Theme → Decision chain, with zero Themes opened.
- *Is technical representation likely to preserve institutional meaning?* For
  a count, yes. For "what exists today", not until the authoritative source is
  established.

**"Warranted" is a finding about need, never an authorization to build.** This
outcome authorizes nothing.

### Problems NOT tested, and why

Instrument 9 requires Instruments 4, 5 and 7 for the problem in question.
Instrument 5 is blocked (no observation, no walkthrough) and Instrument 7's
frequency column is largely uncountable. Every other candidate problem —
editorial workflow friction, publication workflow friction, author-facing
friction, decision latency — **fails the precondition** and is recorded as
**Insufficient evidence**, not tested and not concluded on.

---

# Instrument 10 — Questions Reserved to Client Authority

**Stage:** A16, maintained throughout. Full instrument in
`reserved-questions.md`. Summary of entries: RQ-01 … RQ-09.
