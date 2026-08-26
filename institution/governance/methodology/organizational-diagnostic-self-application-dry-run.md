# Organizational Diagnostic — Generation One: Huerta Group LLC Self-Application Dry Run

**Classification: Institutional Record** — validation evidence (evidentiary,
non-governing). Returned by Institutional Platform Development under
`fd-0019` (self-application validation).

- **Target:** Huerta Group LLC.
- **Draft tested:** `organizational-diagnostic-generation-one-draft.md`,
  frozen at commit `076440ce5aff5f02acd7f08921a312f50fdedddf`, SHA-256
  `6fb2fb8448ca19577f1d0c53830ed52597ddf72e7a9b98a5ab2a10c02c4a9a73`.
  **The draft was not altered during or after this test**; the digest was
  re-verified at the end (§7).
- **Performed:** 2026-08-25.
- **Critical boundary.** This is a methodology validation exercise. Nothing
  here reopens, reinterprets, or amends any current Huerta Group operating
  determination. Findings about Huerta Group LLC are recorded as what the
  method surfaced; they are not new institutional findings and create no
  action.
- **What this dry run establishes and does not.** It tests whether the
  frozen draft behaves as a method when applied to an organization by a team
  that must obtain its evidence through the method rather than from memory.
  It establishes nothing about external validity, general applicability, or
  validated-through-use status outside Huerta Group.

---

## 1. Dry-run method

Executed as the instrument prescribes:

1. **Freeze.** The draft was committed (`076440c`) before any test step.
2. **Apply using only evidence the method directs a team to retrieve or
   request.** For each stage the team recorded what the draft told it to ask
   for, requested or retrieved it, and classified it (A2).
3. **Record hidden prior knowledge.** Every point at which the team's
   familiarity with Huerta Group supplied a fact the draft had not formally
   obtained is logged as `HK-n` (§5.1).
4. **Record access assumptions.** Every point at which the draft assumed
   evidence or access a real external organization might not provide is
   logged as `AS-n` (§5.2).
5. **Record terminology assumptions** as `TA-n` (§5.3).
6. **Record successful method behaviour** as `OK-n` (§5.4), without changing
   the draft.
7. **Record deficiencies** as `DF-n` (§5.5). Proposed corrections are in the
   separate correction package, not here.

**Simulated engagement conditions.** The "diagnostic team" is Institutional
Platform Development, which authored most of the evidence it is now reading —
the strongest possible form of the hidden-knowledge problem, and the reason
the `HK` log matters more than the findings. The "client" is Huerta Group
LLC; its accountable authority (the Founder Office) was not interviewed during
the test, so **no stakeholder account was available** — every stakeholder
evidence request below is recorded as *not supplied* rather than filled from
what the team already knows. Evidence was limited to what the method's
questions would lead a team to request: governing records, operational
records and systems, historical records, and the organization's public
surface.

---

## 2. Stage 0 — Evidentiary baseline (A3), and Instrument 1

### 2.1 Corpora and systems inspected

| Corpus / system | State | Access mode |
| --- | --- | --- |
| Governed repository `huerta-group-llc` | `076440c` (after the freeze) | read; the team's own working repository (`HK-1`) |
| Public website | `https://huerta-group-llc.vercel.app`, nine routes | read (public) |
| Operational runtime `huerta-group-operations` | `a1084cc`, private | read; named by the organization's records (`repository-operations`, ADR-0008) — see `AS-1` |
| Subordinate unit `huerta-group-publishing` | `e28f12a` | read as the subordinate unit's own custody; not reproduced (A1) |
| Accounting system (QuickBooks) | named in records | **not accessible** — not supplied |
| Administration & Compliance records | named in records | **not accessible** — not supplied |
| Deployment platform (Vercel), inquiry store (Supabase) | named in records | configuration not inspected; existence and posture taken from records |
| Founder Office instruments (execution packages) | cited by 19 determination records | **not held** — only their transcribed determinations |
| Stakeholder accounts | — | **not supplied** — no interview conducted |

### 2.2 Instrument 1 — Evidence & Limitations Register (Huerta Group LLC)

| Id | Source | Source owner | Class | Subject | What the evidence supports | Limitations | Conflicts | Confidence / context | Provenance |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E-01 | Constitution record (`governance/constitution/`) | Founder Office | Observed (record exists) / Client-Stated (identity claims) | Identity, mission, principles | That three articles are ratified and closed; **their text is not held** | Ratified text absent; ratification date absent (`fd-0004` deficiency 1) | — | The organization's highest authority cannot be read by the team | repository, 2026-08-25 |
| E-02 | Vision Foundation for Development | Founder Office ("Vision Room") | Client-Stated | Identity, purpose, philosophy, intended lifecycle | The organization's stated self-understanding: "an organizational systems company"; technology "not the source of the Company's identity" | Approval date and instrument not held | With E-04 in tense (aspirations vs current) — the document itself draws the line | High as a statement of intent; not evidence of operation | repository |
| E-03 | Methodology, IP, Education foundations and records | Methodology / IP / Education rooms | Client-Stated | Doctrine of three capability domains | Extensive governance vocabulary; zero admitted assets, programs, or adaptations | Approval dates not held; no operational use recorded | Volume vs operational load (see Instrument 8) | High as doctrine; nil as operation | repository |
| E-04 | Public website (nine routes) | Founder Office (copy) | Observed (surface) / Client-Stated (capability claims) | Public identity and capability representation | What the organization tells the public it does; explicit "philosophy only" framing on five pages | Copy corrected 2026-08-12 (`fd-0006`); no client portfolio implied | — | Observed as surface; claims are the organization's own | live site, 2026-08-25 |
| E-05 | README and application code | IPD | Observed | Current implementation | A static site, one Server Action, inquiry storage, notification standby | README's "Current Project Status" is prose; code is the observed fact | README vs code not diffed by the team | Observed | repository |
| E-06 | Determinations register `fd-0001`…`fd-0019` | Founder Office (acts) / IPD (records) | Observed (acts recorded) / Client-Stated (verbatim determinations as transmitted) | Decisions actually made, 2026-08-07 → 2026-08-25 | 19 determination records in 19 days; who decided what; deficiencies recorded | The instruments themselves are not held | — | The best single evidence of *observed* authority | repository |
| E-07 | Capability registry (18 capabilities) | IPD (metadata) | Observed (metadata) | Capability posture | 50 unresolved-decision entries, roughly two dozen still open; readiness spread: ready 5, ready-with-owner-authorization 3, requirements-incomplete 4, governance-blocked 4, dependency-blocked 1, deferred 1 | Four values "stale but not false"; the registry "records, never creates" | With observed implementation on four fields (dispositioned) | Observed as metadata | repository |
| E-08 | Launch checklist | Founder Office (decisions) / IPD (record) | Observed | Open owner decisions | 39 unchecked items, 19 checked, 7 marked owner-gated | Predates the governed-corpus machinery (validation commands stale) | With launch-readiness on nav slack (~20px vs ≈0px) | Observed | repository |
| E-09 | Repository operations record; `.env.example` | IPD | Observed | Systems and credential locations | Vercel, Supabase, Resend (standby); four environment variables; a protected TEST row | Values never recorded (by design) | — | Observed | repository |
| E-10 | Operational runtime (register, migrations, suites, docs) | Corporate Operations & Command Management (representation) / IPD (custody) | Observed | Headquarters operational state and its protections | Five seeded matters plus three authored corrections; environment separation; encrypted off-machine backup | Local, single machine; single user | README/procedure behind the Stage 6 change (Instrument 7) | Observed | private runtime repository |
| E-11 | Subordinate unit records (HGP) | HGP (venture custody) | Observed (records) / Client-Stated (its claims) | The subordinate unit's condition | Chartered venture; operates its own platform; its own governance vocabulary arrived after operation | Venture plane; not parent authority | Constitutions "proposed" while treated as law | Not reproduced at the coordinating level (A1) | venture repository |
| E-12 | Stakeholder accounts | — | — | Every domain | **Not supplied.** No interview conducted | The team cannot corroborate any Client-Stated condition against a participant's account | — | Confidence in "observed authority" rests on recorded acts alone | — |
| E-13 | Founder Office instruments (19), audits A/A.1, Design System Foundation v1, OSPA S05–S08/S11–S15 | Founder Office | — | Governing and diagnostic sources | **Unavailable**; recorded as such | Cited, accepted, not held | — | Recorded as deficiency, never inferred | `fd-0004`, `fd-0019` |
| E-14 | Accounting facts | Accounting & Financial Management / QuickBooks | — | Economic condition | **Not supplied**; no representation admitted anywhere | The register's Accounting context reads "nothing represented" | — | Nothing can be said about economic condition | — |
| E-15 | Compliance determinations | Administration & Compliance | Client-Stated (via one register representation) | Registration standing | Trade name active to 2031-06-15; no continuation obligation presently established | Only the represented consequence is visible; the filing is not | Prior representation carried false obligations (corrected 2026-08-23) | Single fact | register |
| E-16 | Conversation and working environments | various | never authoritative by existence | Working context | That significant knowledge lives there (E-13; `fd-0012` chronology) | — | — | Recorded as a memory risk, not as evidence of facts | — |
| E-17 | Contradictions preserved by the organization itself | — | Observed | Record integrity | The organization keeps at least fourteen internal contradictions visible rather than reconciling them | — | (they are the conflicts) | Evidence of the organization's own record discipline | Discovery Report §13.4 (`HK-2`) |

**Known evidence gaps (A3 step 4).** Ratified constitutional text; every
Founder Office instrument; two accepted audits; the Design System Foundation;
nine OSPA sections; all accounting facts; all compliance filings; any
stakeholder account; the Vercel and Supabase configurations as deployed.

**Access limitations affecting confidence (A3 step 6).** The team had
*total* access to the organization's records (`AS-1`) and *no* access to its
people (E-12). Both are atypical of an external engagement, in opposite
directions.

---

## 3. Discovery stages A4–A16 with Instruments 2–10

### 3.1 Purpose and identity (A4)

- **Stated purpose** (Client-Stated, E-02): an organizational systems company
  helping organizations "understand, design, improve, implement, and
  continuously strengthen the systems through which they operate"; explicitly
  "not fundamentally… a software company."
- **What operation suggests** (Observed, E-05, E-06, E-10, E-11): during the
  observed period the organization built one public website, one internal
  operational system, governed one publishing venture, and produced a large
  governance corpus about itself. **No client engagement is evidenced.** The
  activity that consumed the observed period was institution-building.
- **Divergence recorded** (Inferred): stated purpose is outward-facing
  service; observed operation is inward-facing foundation-building. The
  organization's own audit reached a compatible conclusion ("matured faster
  than its public representation," `fd-0006`). Whether this is a phase or a
  condition cannot be determined without a stakeholder account (E-12).
- **Current / planned / aspirational** (supplementary question): the
  organization distinguishes these on its own surfaces deliberately (E-02
  §13; E-04 "philosophy only" pages). `OK-1`.
- **Non-prescription honoured:** nothing about purpose was rewritten.

### 3.2 Outputs and value creation (A5)

- **Outputs actually produced** (Observed): a public website; governance
  records (149 → 159 governed documents); one operational register; one
  chartered venture that produces books and publication artifacts.
- **Who depends on them:** the Founder Office (for decisions), the venture
  (for its charter and identity), future contributors (for orientation). No
  external dependent is evidenced.
- **Relevance test applied to the largest activity — governance authoring:**
  the operational relevance question ("what decision, coordination need,
  risk, obligation or action does this support?") has a credible answer for
  determinations, requirements, operations doctrine and venture governance,
  and **no present operational answer** for the education and IP foundations
  (E-03). Recorded, not judged (Instrument 8).
- `DF-1`: the draft's A5 gave the team no way to distinguish *internal*
  value creation (building the institution) from *external* value creation
  (serving a client) — both are "outputs." The distinction turned out to be
  the central identity finding (§3.1), and the method did not ask for it.

### 3.3 Authority and decision rights (A6) — Instrument 2

| Decision / domain | Formal authority (Client-Stated) | Observed authority (Observed) | Responsible function / role | Required consultation | Escalation path | Evidence | Ambiguity / conflict |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Constitutional amendment | "the Company's formal amendment process" | None has occurred | — | — | — | E-01 | **Unresolved**: the process is named, not defined; decision-rights architecture "pending" everywhere |
| Strategic direction | Vision Room / Founder Office (Guardrail 15) | Founder Office, by instrument | Founder Office | — | — | E-02, E-06 | Vision Room and Founder Office appear to be the same actor |
| Methodology approval | Methodology room, interim rule "under the Founder's existing institutional authority" | Founder Office (`fd-0019`) | Methodology room | IP, Education, Knowledge Architecture (dependencies) | "later-approved institutional decision-rights architecture" | E-03, E-06 | Permanent approver **unresolved** (Methodology Foundation §10.6) |
| Technical architecture and implementation | Institutional Platform Development ("how, never what") | IPD proposes; Founder Office accepts ADR packages and authorizes construction | IPD | Founder Office return triggers | Founder Office | E-06 (`fd-0013`, `fd-0014`) | Clear |
| Production launch; recurring cost | Owner / Founder Office | Withheld (`fd-0015`) | Founder Office | — | — | E-06 | Clear |
| Venture admission, charter, representation | Founder Office | Founder Office (`fd-0007`–`fd-0009`) | Founder Office | Corporate Headquarters for legal facts | — | E-06, E-11 | Clear |
| Legally operative acts | Corporate Headquarters | **No instance observed** in the corpus | Corporate Headquarters | legal guidance | — | E-01…E-06 | Authority named; exercise unobserved |
| Public representation | Founder Office | Founder Office (`fd-0006`, FD-V4) | Founder Office / IPD (implementation) | Branding (future authority) | — | E-04, E-06 | Branding authority does not exist |
| Headquarters representation fidelity | Corporate Operations & Command Management | The same person as the Founder Office, signing in as either | Corporate Operations | Source functions | Founder Office | E-10 | Role compression (`AS-2`) |
| Accounting facts | Accounting & Financial Management / QuickBooks | **Unobserved** | Accounting | — | — | E-14 | Nothing represented |
| Compliance determinations | Administration & Compliance | One determination represented at Headquarters | A&C | — | Founder Office | E-15 | Exercise observed only through a representation |
| Attention admission / priority override | Corporate Operations admits; Founder Office overrides | Both held by one person; code grants exit more widely than the procedure states | — | — | — | E-10 | Documentation/code divergence (Instrument 7) |

**Anti-inference statement recorded:** technical access (the team holds
write access to every repository), custody (IPD holds the runtime), and
participation (IPD drafted most instruments) confer no authority — a rule the
organization itself states (ADR-0006, Blueprint §9).

**Findings about the map itself:** (i) every row's *observed* authority is
one individual acting under different names (`AS-2`); (ii) three
"unresolved" values were honestly recordable (`OK-2`); (iii) **required
consultation** and **escalation path** were nearly empty because, with one
actor, there is no one to consult and nowhere to escalate — the fields
presuppose a distributed organization (`DF-2`).

### 3.4 Functions and responsibilities (A7) — Instrument 3

| Function | Purpose | Formal responsibilities (Client-Stated) | Observed responsibilities (Observed) | Key outputs | Dependencies | Overlap | Unowned work | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Founder Office | Apex authority pending constitution | Strategy, priority, capital, reserved decisions, venture oversight | Issues instruments (19 in 19 days); accepts returns; supplies sources | Determinations | Development's returns | Vision Room (same actor) | — | E-06 |
| Institutional Platform Development (also styled "Platform & Systems Development") | Technical architecture and implementation | ADRs, construction, validation, preservation | Everything technical, plus most governance drafting, plus this program | Reports, code, records | Founder Office instruments and sources | **Two names for one function in the records** | — | E-05, E-06, E-10 |
| Corporate Operations & Command Management | Headquarters representation fidelity | Author and maintain the register; admit attention | Authored two requirements reports and the semantics foundation; register maintained by the same person as the Founder Office | Requirements, doctrine, register | Source functions | Corporate Headquarters (authority domain vs function — naming overload) | — | E-10, E-06 |
| Administration & Compliance | Filings, licences, registrations | Determinations | One fact represented (trade name) | Determinations (unseen) | External authorities | — | — | E-15 |
| Accounting & Financial Management | Accounting truth | Facts, classification, reporting | **Nothing observed**; the register's context reads "nothing represented" | — | QuickBooks | — | — | E-14 |
| Methodology / IP / Education rooms | Domain doctrine | Foundations and records | The foundations exist; the "rooms" are roles held by one person; no operational activity | Foundations (documents only) | Constitution (pending) | Overlapping taxonomies (IP "assessment" vs Education "assessment") | Reconciliation of overlapping taxonomies | E-03 |
| Design System; Branding | Interface and brand authority | DDR/GR practice; Branding "future authority, no governing document" | Design decisions recorded and validated; Branding decisions taken interim by Founder Office | DDRs, GRs | Design System Foundation (unpreserved) | — | **Brand decisions** (routed to a non-existent authority) | E-04, design records |
| Corporate Headquarters | Legal, financial, contractual, commercial, administrative matters | Governs legally operative matters | **No exercise observed** | — | — | Naming overload with "Headquarters representation" | — | E-01…E-06 |
| Huerta Group Publishing (subordinate unit) | Publish books; operate its platform | Charter §7 delegated authority | Operates; governed after operating | Books, artifacts, its own records | Parent grants | — | — | E-11 |

**Derivation rule applied (`OK-3`):** functions were listed only where
evidence of work or of a governing document exists; Accounting is recorded
with "nothing observed" rather than omitted or assumed active; Branding is
recorded as a function that exists only as a future name. **Three kinds of
quiet** were all present: Accounting (no evidence at all), Corporate
Headquarters (named authority, no observed exercise), and the rooms (documents
without work).

**Unowned work found:** brand decisions (no authority exists); taxonomy
reconciliation between IP and Education; **preservation of Founder Office
instruments** (no function is responsible for keeping them, and four had to be
recovered from the implementer's transient records — see Instrument 6).

`DF-3`: Instrument 3 has no field to record *how* a function is evidenced —
by work, by document only, or by name only — and the team had to write it
into prose.

### 3.5 Recurring decisions (A8)

- **Decisions that recur** (Observed, E-06): authorization of each bounded
  stage of work; acceptance of returned reports; adoption of doctrine;
  preservation of sources; admission of records; disposition of deficiencies.
  Trigger: a returned report or a discovered gap. Evidence required: the
  return itself and the sources it cites. Maker: the Founder Office, in every
  case.
- **Measured** (`OK-4`, A8 measurement guidance): 19 determination records in
  19 days; 24 items listed under "Reserved to the Founder Office" across five
  records (many since discharged; the count is of items listed, not currently
  open); 39 unchecked owner items in the launch checklist; roughly two dozen
  open entries among 50 in the capability registry. The same open matter
  frequently appears in more than one of these places.
- **Latency**: not measurable from records alone — timestamps of instrument
  issue are not preserved (E-13). What is observable is that the whole
  operations arc ran in six days, and that the decision queue is *distributed*
  rather than slow.
- `DF-4`: A8 asks "where does decision latency arise?" but the draft gives
  no way to obtain latency without instrument timestamps or a stakeholder
  account; the team could only report distribution.

### 3.6 Information and source of truth (A9) — Instrument 4

| Information domain | Authoritative source | Source owner | Representational systems | Duplicate / conflicting sources | Freshness concerns | Access limitations | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Institutional governance records | The governed repository (canonical paths) | Founder Office (acts), rooms (doctrine) | Manifest; registries; documentation index; CLAUDE.md/AGENTS.md; contributor memory (never authoritative) | Contributor memory found stale twice | Four registry values stale by design | — | E-06, E-07 |
| Founder Office instruments | Founder Office custody | Founder Office | Determination records (transcribed determinations) | **Instruments cited but not held** — the transcription is treated as the record | — | Not held | E-13 |
| Constitutional text | Founder Office custody | Founder Office | Constitution record (titles only) | — | — | Not held | E-01 |
| Accounting | QuickBooks | Accounting & Financial Management | none admitted | — | — | Not accessible | E-14 |
| Compliance filings and determinations | Administration & Compliance / external authority | A&C | One register representation | Prior representation carried obligations the source did not establish (corrected) | Representation freshness is "a judgement, not a timer" | Not accessible | E-15 |
| Headquarters operational state | The operational register — for what it *owns* (attention, handoffs, HQ dependencies, follow-ups, coordination deadlines); **a representation** for everything else | Corporate Operations (representation owner) | Founder Home, Executive Review, function and venture contexts (read layers, own no storage) | Two representations of the venture (snapshot vs record) held side by side, "never merged" | Manual maintenance "can decay" | Local, single machine | E-10 |
| Venture standing | Founder Office determination (`fd-0007`) | Founder Office | Venture registry (mirror); register snapshot; About-page passage | — | — | — | E-06, E-11 |
| Venture operational detail | The venture's own systems | HGP | Parent-level snapshot only (5 of 12 fields absent, stated) | — | — | Venture plane | E-11 |
| Public inquiries | Supabase `contact_inquiries` | Founder Office | Notification (standby); manual checks | — | — | — | E-09 |
| Deployment state | Vercel | IPD (custody) | Repository operations record | Push to `main` deploys — a consequence the instrument that authorized the push did not carry | — | Configuration not inspected | E-09, design records |
| Working conversation; execution sessions | — | — | — | **Held the only copies of four accepted instruments** (recovered 2026-08-25) | — | Transient | E-13, E-16 |

**Rules applied (`OK-5`):** "owner unresolved" was not needed — every domain
has a named owner in the organization's own records; conversation was
recorded as never-authoritative-by-existence; the representation/authority
distinction was legible in every row because the organization draws it
itself.

**Finding surfaced by the instrument:** the organization's own sources of
truth for its *governing acts* (the instruments) are not held by the
organization's durable record; the transcription is. `DF-5`: Instrument 4
has no column for "is the authoritative source actually retrievable by the
organization?" — the team put it under "conflicts," which is the wrong home.

### 3.7 Workflow, handoff, dependency and obligation (A10) — Instrument 5

| Workflow / matter | Trigger | Participants | Expected outputs | Handoffs (seven questions) | Dependencies | Blocking conditions | Obligations / time boundaries | Failure points | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Instrument → execution → return → determination** (dominant) | A Founder Office instrument | Founder Office; IPD | Report; records; determinations | FO→IPD: instrument (expected action: execute; disposition: return); IPD→FO: report (expected: determine; disposition: next instrument). Escalation: "return the exact question" | Sources transmitted with the instrument | **Missing sources** stopped execution 5 times in 6 days | None stated | Transmission chain; instruments not preserved | E-06, E-13 |
| **Canonical admission** | A source to preserve | Founder Office (determination); IPD (preservation) | Preserved text; manifest; index; gate | FO→IPD: source + determination | Provenance verifiable | Provenance unverifiable → recorded as deficiency, not blocked | none | Digest discipline held every time | E-06 |
| **Inquiry intake and follow-up** | A public inquiry | Public; Supabase; (Resend standby); Founder | Stored inquiry; (email); a response | Stored → **no recorded handoff to anyone** | Notification activation (owner decision) | none | none recorded | Follow-up ownership unrecorded; one TEST row only | E-09 |
| **Launch decisions** | Owner readiness | Founder Office | Domain, DNS, activation | none — all owner-held | Domain acquisition | none | **no time boundary** on 39 open items | Open items distributed across documents | E-08 |
| **Venture oversight** | Venture condition changes | HGP (supplies); Corporate Ops (admits) | Parent-level snapshot | HGP→CorpOps: supply (expected: admit); **5 of 12 fields not supplied** | Venture reporting | none | none | Absence stated truthfully; no supply cadence exists | E-10, E-11 |
| **Compliance representation** | A determination | A&C; Corporate Ops | Represented consequence | A&C→CorpOps | — | none | Registration expires 2031-06-15 (expiration metadata, not a deadline) | Prior stale obligations | E-15 |
| **Operational validation** | A construction stage | IPD | Green gate | — | Disposable stack | none (since Stage 6) | none | Previously destroyed the operating record on every run | E-10 |

**Distinctions applied as aids (`OK-6`):** "relies on" vs "cannot presently
proceed" separated cleanly in every row; the only true blocking condition in
the observed period was missing sources. **Observation vs description:** the
dominant workflow was *observed* through the register's own records
(`fd-0010`–`fd-0016`), not described by a stakeholder — the difference between
description and observation could not be tested (E-12) (`AS-5`).

`DF-6`: the inquiry workflow exposed that Instrument 5 has no field for
"who owns follow-up" distinct from "handoffs" — when nothing is handed off,
ownership silently disappears from the form.

### 3.8 Governance gap and excess (A11) — Instrument 8

| Subject | Current authority / governance | Gap / excess / ambiguity / conflict | Operational consequence | Evidence | Client authority required | Diagnostic recommendation only |
| --- | --- | --- | --- | --- | --- | --- |
| Decision-rights architecture | "Pending" in every foundation; interim Founder authority "configurable" | **Gap** | Every approval carries a caveat; permanent approvers unresolved | E-03 | Constitutional | Note that operation has proceeded for weeks under the interim rule without observed harm; the gap is a continuity risk, not a present blocker |
| Retention / disclosure doctrine | None (`fd-0014` §6) | **Gap** | Blocked the backup expectation for production; deferred | E-10 | Founder Office | The organization already knows this; nothing to add |
| Branding | "Future authority, no governing document" | **Gap** | Brand decisions taken interim; routed to no one | E-04 | Founder Office | Same |
| Preservation of Founder Office instruments | No rule requires it | **Gap** | Four accepted instruments existed only in the implementer's transient records; two are lost | E-13, `fd-0019` | Founder Office | A preservation duty at the point of issue would close it; whether to adopt one is the organization's |
| Education and IP foundations | ≈14,000 words of doctrine; validators locking record counts | **Excess relative to load** (zero programs, zero assets) | Maintenance burden; two overlapping taxonomies to reconcile when either is populated | E-03 | Rooms / Founder Office | Not harmful now; would become friction the moment a program exists |
| ADR-0006's nine user classes; the 30-minute budget in a governing standard | Written before any user or any need | **Excess / drift** | Nine classes for a population of two; a model-execution parameter in doctrine | E-05, E-06 | Founder Office | Cosmetic unless relied upon |
| `fd-0001` det. 1 vs `fd-0010` custody | Two instruments from one authority conflicted | **Conflict, resolved** by scoped exception (`fd-0011`) | None now | E-06 | — | The resolution pattern (record, don't choose) worked |
| Attention-exit capability | Procedure: Founder Office; code: also Corporate Operations | **Ambiguity** (documentation vs enforcement) | None observed with one user | E-10 | Corporate Operations | Reconcile in either direction |
| Validation ledger at the subordinate unit | Designed chain bypassed by direct authorization | **Drift** | The ledger records one observation; the corrections are elsewhere | E-11 | HGP (venture plane) | Venture matter; outside parent recommendation |

**Excess test applied (`OK-7`):** excess was asserted only where operational
load was zero or where bypass was observed, and the consequence was stated as
"not harmful now" where that is the truth.

### 3.9 Institutional-memory risk (A12) — Instrument 6

| Knowledge / domain | Current holder / location | Organizational control | Independent retrievability | Authority status | Loss risk | Continuity consequence | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ratified constitutional text | Founder Office custody (location unknown to the team) | presumably yes | **No** — not in the durable record | Ratified, closed | Unknown | The highest authority cannot be consulted by anyone but its custodian | E-01 |
| Founder Office instruments | Transient transmission; Founder Office custody | partial | **No** — only transcribed determinations retrievable | Governing | High (evidenced: two lost, four recovered from the implementer) | The reasoning behind determinations is partly unrecoverable | E-13 |
| OSPA sections S05–S08, S11–S15 | Lost | — | No | Was canonical | **Realized** | Recorded as permanent; doctrine re-authored prospectively | admission record |
| Headquarters operational history | Local Docker volume on one machine; encrypted backup in a private repository | yes | **Depends on one person's passphrase** | Representation | Medium: machine loss survivable; passphrase loss not | Register unrecoverable without the passphrase | E-10 |
| Contributor (AI) memory | Session files | no | yes but non-authoritative | Non-authoritative by rule | — (found stale twice) | None if the rule holds | E-16 |
| Governance corpus | Repository, remote, CI | yes | yes | Authoritative | Low | — | E-06 |
| Subordinate unit's cited directives | Not preserved in its repository | no | no | Venture plane | High | The venture's own rule ("nothing important lives only in conversation") is violated by its own records | E-11 |
| Knowledge held only by the one individual | The Founder | yes | **no** | — | **Total**: the organization is one person | Everything | all |

**Principle applied mechanism-neutrally (`OK-8`):** the instrument recorded
the repository as *one* location among others and judged retrievability, not
mechanism. **Finding:** the organization's durable memory is strong for what
it decided to govern and weak at exactly the two ends of its own chain — the
apex (constitutional text, instruments) and the implementer (session records).
`DF-7`: Instrument 6 has no row type for *implementer-side* custody, and the
retrieval finding had to be forced into "current holder."

### 3.10 Systems and tooling (A13)

- **Systems supporting real operation** (Observed): the governed repository
  with its validators and CI; the operational register (local); the public
  site; the venture's platform. Named but unobserved: QuickBooks; Vercel and
  Supabase configuration; Resend (standby).
- **Systems containing authoritative information:** the repository (governing
  acts); QuickBooks (accounting); A&C's external filings; the register (only
  for what it owns). **No system duplicates another by design**; the
  organization's doctrine forbids it and the register "synchronizes nothing."
- **Tools imposing obsolete workflows:** the capability registry's enums
  ("stale but not false"); the launch documentation's validation commands
  (superseded by the gate). Recorded as findings about tools (`OK-9`).
- **Where manual work is appropriate:** the organization has already
  determined fifteen workflows should remain manual and states why.
- **Tooling absent but justified:** none identified; the team declined to
  infer any (A19).
- **Sanctioned-path finding:** a push to `main` deploys to production — the
  routine act has an irreversible consequence the authorizing instrument did
  not carry (design completion report §60). `DF-8`: A13 asks about tools that
  "impose obsolete workflows" but not about routine acts with irreversible
  consequences.

### 3.11 Operational friction (A14) — Instrument 7

| Friction | Where observed | Frequency | Consequence | Affected roles | Underlying cause | Current workaround | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sources fail to reach the implementer with the instrument that relies on them | Operations track | 5 in 6 days | Execution stops; deficiency recorded; retransmission | Founder Office; IPD | **Unknown** — not recorded | Stop, record, request | E-06 |
| The accountable authority reconstructs company state, attention, dependencies and change by hand | Headquarters | continuous before Gen One | Founded the operational register | Founder Office | Fragmentation across legitimate systems | Gen One / Gen Two (built) | E-10 |
| Validation destroys the operating environment | Gen Two Stages 1–5 | every stage | Credential reset; review boundary consumed | Founder; IPD | Test gate targeted the authentic database | Environment separation (Stage 6) | E-10 |
| Open owner decisions distributed across documents | Launch checklist (39), fd "reserved" lists (24 listed), registry (~24 open) | continuous | Attention reconstruction | Founder Office | No single decision surface | The register's attention layer, partially | E-06, E-07, E-08 |
| A published credential | Runtime seed | twice | Founder account openable from the repository | Founder | Fixture credentials in a seed file | Retirement at activation and reset | E-10 |
| Stale registry vocabulary | Capability registry | 4 fields | Registry understates the truth | Readers | No-vocabulary-change rule | Dispositioned in prose | E-07 |
| Documentation behind implementation | Runtime README/procedure vs Stage 6 | 2 documents | Reader misled about `verify:full` | Operators | Docs not updated with the change | — | E-10 |
| Naming drift / overload | "Platform & Systems Development" vs "Institutional Platform Development"; "Headquarters" as domain vs representation; "Workshop" vs "Workspace" (venture) | pervasive | Reader confusion; no operational failure observed | all | Terminology discipline applied to concepts, not to function names | — | E-06, E-11 |
| Routine push deploys to production | Design adoption | once observed | Unintended production deployment | Founder; IPD | Platform auto-deploys `main` | Reported; no rollback | design records |
| Inquiry follow-up unowned | Inquiry workflow | one inquiry (TEST) | Unknown | Founder | Notification standby; no follow-up owner recorded | Manual Supabase checks | E-09 |

**Counting where possible (`OK-10`):** frequencies were counted where the
records permit and characterized otherwise, and the difference is visible in
the table. **Distribution as a friction** (`DF-9`): the same open matter
recorded in several places was the most consequential friction found, and the
instrument has no field for "in how many places is this recorded."

### 3.12 Technology-worthiness (A15) — Instrument 9, three problems

**Problem A — the accountable authority reconstructing state, attention,
dependencies and change by hand.**
Recurring? Yes (continuous, E-10). Understood? Yes — after meaning was
established (the semantics foundation), not before. Authoritative ownership
understood? Yes — a source-of-truth map exists. Would technology reduce
material friction? Yes (reconstruction). Duplicate an authoritative system?
No — the register references and summarizes; synchronizes nothing. Freeze
premature assumptions? Mitigated by keeping fifteen workflows manual. Manual
first? Manual operation was preserved and generated the evidence (stale
obligations, unreachable register). Preserve institutional meaning? Yes —
enforced by shape. **Outcome: Technical intervention appears warranted** —
recorded *retrospectively*; the organization had already reached this outcome
through its own trigger. `HK-3`.

**Problem B — sources failing to reach the implementer with the instrument
that relies on them.**
Recurring? Yes (five times). Understood? **No** — the underlying cause is
not recorded. Ownership? The Founder Office owns instruments; no function
owns their preservation. Would technology reduce friction? Unknown; the
failure is in a transmission chain whose mechanism is unrecorded. Duplicate?
n/a. Freeze assumptions? Yes — automating an unrecorded process would encode
the unknown. Manual first? **Yes** — a preservation duty at issue would
generate the evidence. **Outcome: Manual / process intervention should precede
technology.** `OK-11` — the instrument reached a non-software outcome on a
real recurring problem.

**Problem C — inquiry follow-up.**
Recurring? **Insufficient evidence** — one inquiry, marked TEST. Understood?
Partly. Ownership? The follow-up owner is unrecorded. Duplicate? A standby
capability (notification) already exists awaiting an owner decision.
**Outcome: Insufficient evidence** (and, secondarily, "existing system should
be improved rather than replaced," since activation is an owner decision, not
a build). `OK-12`. `DF-10`: the instrument has no question that surfaces an
*existing standby capability awaiting an owner decision*; the team found it
through Instrument 4, not Instrument 9.

### 3.13 Questions reserved to client authority (A16) — Instrument 10

| Question | Why the diagnostic team cannot decide it | Responsible client authority | Evidence / context | Decision dependency | Consequence if unresolved |
| --- | --- | --- | --- | --- | --- |
| The permanent decision-rights architecture (who approves what, delegation, appeals) | Constitutional | Founder Office / the amendment process | E-01, E-03 | Every approval remains interim | Continuity risk if the single actor is unavailable |
| Whether Founder Office instruments must be preserved at issue | Institutional policy | Founder Office | E-13, `fd-0019` | Instrument 6 finding | Further loss of governing reasoning |
| Production hosting and its cost | Capital allocation | Founder Office | `fd-0015` | Register availability | Register reachable only on one machine |
| Retention, deletion, archival and disclosure doctrine | Institutional policy | Founder Office | `fd-0014` §6 | Backup expectation for production | Production blocked |
| Financial and administrative visibility boundaries (Q6, Q7) | Source-function authority | Accounting; A&C; Founder Office | `fd-0016` | Headquarters economic awareness | Accounting context remains empty by design |
| Establishment of a Branding authority | Institutional | Founder Office | design records | Public representation decisions | Interim brand decisions continue |
| The venture's official launch and commercial activation | Reserved (Charter §8) | Founder Office; Corporate Headquarters | E-11 | Parent-to-venture link | None operational |
| Whether the organization's purpose is presently service delivery or institution-building | Strategic | Founder Office | §3.1 | The meaning of "outputs" for every later stage | The diagnosis cannot name the organization's value creation without it |

`OK-13`: every question was stated without a recommended answer; the
"responsible client authority" column never needed "unresolved" *for the
authority* (the Founder Office holds all of them), which is itself the
`AS-2` finding restated.

---

## 4. Advancement logic applied (A18)

Against the minimum evidence before design: material evidence limitations
are explicit (yes — §2); purpose and outputs sufficiently understood (**no**
— the internal/external value-creation question is reserved, §3.13);
authority ambiguity visible (yes — one actor, pending architecture);
source-of-truth boundaries identified (yes); workflows and dependencies
sufficiently understood (partly — observed through records, never through a
participant); contradictions preserved (yes — E-17); client-authority
questions separated (yes); prescription would not depend primarily on
unverified inference (**no** — with no stakeholder account, every "observed
authority" rests on records the team itself wrote, `HK-1`).

**Outcome the method would return:** *Request additional evidence* —
specifically stakeholder accounts — **and** *return unresolved questions to
client authority*. It would not proceed to design. `OK-14`: the advancement
logic refused to advance on documents alone, which is the behaviour the
Discovery Report hoped for and the method's most important property.

---

## 5. Logs

### 5.1 Hidden prior knowledge (`HK`)

- **HK-1.** The team is the author of most records it read, and it knew where
  every record was without asking. A real team would have had to request an
  inventory and would have received whatever the client chose to supply. Every
  "Observed" row in Instrument 1 benefits from this.
- **HK-2.** The contradictions in E-17 were known from the Discovery Report,
  not found by the method; the method (A17 rule 3) would have found *some* but
  the team did not re-derive them.
- **HK-3.** Instrument 9 Problem A was answered knowing the organization's own
  trigger determination; a blind team would have had to reach "warranted"
  from evidence and would likely have stopped at "manual first."
- **HK-4.** The existence and location of the private runtime repository and
  the venture repository were known; the method directs a team to ask "which
  systems support real operation?" and to rely on the answer.
- **HK-5.** The team knew which register fields were "stale but not false"
  because it dispositioned them; a blind team would have read the registry as
  true.
- **HK-6.** The team knew that the Founder "wears both hats"; the records say
  so in one activation report, which a blind team might not have been given.

### 5.2 Access and evidence assumptions exposed (`AS`)

- **AS-1 (total document access).** The draft's baseline procedure assumes the
  team can *inventory* the organization's records; it does not say what to do
  when the client supplies a curated subset. Exposed: the team had everything.
- **AS-2 (single decision-maker).** Instrument 2's "required consultation" and
  "escalation path" fields, and Instrument 10's "responsible authority," all
  presuppose a distributed organization *or* a single one; the draft handles
  the single case only by recording the same name repeatedly, and has no
  guidance for recording role compression as a finding in itself.
- **AS-3 (known terminology).** See §5.3.
- **AS-4 (clear source authority).** The organization names an owner for every
  domain; Instrument 4's "owner unresolved" value was never exercised. Its
  behaviour under contested ownership is untested.
- **AS-5 (cooperative stakeholders).** No stakeholder was available at all;
  the draft's stakeholder procedures (A3 step 2 "stakeholder," A6 "accounts
  from the people who wait," A10 "observe as performed") were untested.
  Cooperation, hostility, and politics are equally untested.
- **AS-6 (complete records).** Records were incomplete in two known ways
  (constitutional text; instruments) and the draft handled both correctly by
  recording absence — but the team *knew* they were incomplete. A blind team
  might not detect that a cited instrument is absent unless the method tells
  it to check every citation.
- **AS-7 (founder-level contextual knowledge).** Pervasive; see HK-1…HK-6.
- **AS-8 (repository-centred institutional memory).** Instrument 6 was
  applied mechanism-neutrally (`OK-8`), but the evidence of memory *is* the
  repository; the draft's ability to assess memory held in people, paper, or
  unrelated systems was not exercised.
- **AS-9 (prior workflow knowledge).** The dominant workflow (instrument →
  return → determination) was known to the team as its own working rhythm;
  the draft's workflow questions would have surfaced it from the register,
  but the team cannot claim to have discovered it.

### 5.3 Terminology assumptions (`TA`)

- **TA-1.** "Representation" and "representation owner" (A1) remain
  Huerta-flavored; a client will not have the word. The draft's own rule
  ("record the client's terms first") was applied here with a client that
  *has* the word, so the rule was not tested.
- **TA-2.** "Coordinating level" assumes there is one; the draft provides no
  guidance when an organization has none, or several.
- **TA-3.** "Consequential change" and "what changed since the accountable
  authority last looked" presuppose an accountable authority who reviews; an
  organization with no review rhythm has no "since last looked."
- **TA-4.** The analytical distinctions in A10 (relies on / cannot proceed /
  transferred action / consequential boundary) worked as aids and were not
  imposed as vocabulary (`OK-6`), but the *table columns* of Instrument 5
  still carry Huerta-shaped names (handoffs, dependencies, blocking).
- **TA-5.** The three evidence classes required a fourth distinction in
  practice — a *document's existence* (observed) versus the *condition it
  asserts* (client-stated) — which A2's final paragraph provides but every
  register row had to restate.

### 5.4 Successful method behaviour (`OK`)

OK-1 current/planned/aspirational distinction surfaced from the client's own
surfaces · OK-2 "unresolved" recorded honestly in the authority map · OK-3
functions derived from evidence; three kinds of quiet distinguished · OK-4
decision load counted rather than characterized · OK-5 representation vs
authority legible in every source-of-truth row · OK-6 the analytical
distinctions worked as aids without imposing vocabulary · OK-7 excess asserted
only against load or bypass, with consequence stated · OK-8 memory assessed
mechanism-neutrally · OK-9 tool findings recorded as findings about tools ·
OK-10 frequencies counted where records permit · OK-11 the technology test
reached a non-software outcome on a real recurring problem · OK-12 the test
returned "insufficient evidence" rather than inventing recurrence · OK-13
reserved questions stated without recommended answers · OK-14 the advancement
logic refused to advance to design on documents alone.

### 5.5 Deficiencies (`DF`) — recorded, not repaired

DF-1 no way to distinguish internal from external value creation (A5) ·
DF-2 consultation/escalation fields presuppose a distributed organization
(Instrument 2) · DF-3 no field for *how* a function is evidenced (Instrument
3) · DF-4 latency not obtainable without timestamps or accounts (A8) · DF-5
no column for "is the authoritative source retrievable by the organization?"
(Instrument 4) · DF-6 follow-up ownership disappears when nothing is handed
off (Instrument 5) · DF-7 no row type for implementer-side custody
(Instrument 6) · DF-8 routine acts with irreversible consequences not asked
about (A13) · DF-9 no field for distribution of the same open matter across
places (Instrument 7) · DF-10 no question surfacing an existing standby
capability awaiting an owner decision (Instrument 9) · DF-11 the
hidden-knowledge log (A17 rule 6) proved indispensable and has no home in any
instrument · DF-12 the draft never tells the team to *verify that every cited
authority is actually held* (AS-6) · DF-13 no stakeholder-access plan or rule
for proceeding when no interview is possible (AS-5).

### 5.6 Evidence the method failed to request

An inventory of the organization's *people* and their roles (the method asks
about functions and authority but never asks "who works here?"); the
organization's calendar or cadence of decision-making; the instruments by
which authority is exercised (it asks who decides, not *how the decision
travels*); the deployment consequences of routine repository acts; any
external counterparty (registrar, provider, authority) as a source owner.

### 5.7 Issues impossible to validate internally

Conflicting stakeholder accounts (one stakeholder, absent); formal versus
observed authority diverging across *different people* (one person);
contested source ownership; hostile or political environments; an
organization whose records are paper, oral, or held in unrelated systems;
scale; regulated-industry constraints; multinational or cross-cultural
settings; a client that supplies a curated subset of records.

---

## 6. Additional tests (instrument-specified)

| Test | Result | Basis |
| --- | --- | --- |
| Can the diagnostic tolerate conflicting stakeholder accounts? | **Untestable** — no accounts | E-12 |
| Can it proceed when formal authority differs from observed authority? | **Yes, partly** — formal (Corporate Headquarters, Accounting) vs observed (no exercise) was recorded without resolution; divergence across different people untestable | Instrument 2 |
| Can it identify unknown source authority without inventing one? | **Not exercised** — every domain had a named owner (`AS-4`); the rule exists (A9) | Instrument 4 |
| Can it identify absence of evidence without treating absence as negative proof? | **Yes** — E-13, E-14, Accounting "nothing observed," A&C "exercise unobserved" | Instruments 1, 3 |
| Can it conclude that no software intervention is warranted? | **Yes** — Problem B (manual first) and Problem C (insufficient evidence) | Instrument 9 |
| Can it separate client decisions from diagnostic findings? | **Yes** — eight reserved questions, none answered | Instrument 10 |
| Can it preserve uncertainty rather than forcing completeness? | **Yes** — advancement refused; §3.1 divergence left open | §4 |

---

## 7. Draft integrity after the test

```
6fb2fb8448ca19577f1d0c53830ed52597ddf72e7a9b98a5ab2a10c02c4a9a73  organizational-diagnostic-generation-one-draft.md
```

Identical to the freeze digest. No method change was made during testing;
every correction is proposed separately in
`organizational-diagnostic-correction-package.md`.

## 8. What this dry run does not claim

It does not claim external validity, general applicability, or
validated-through-use status outside Huerta Group. It does not claim that the
findings about Huerta Group LLC are new institutional findings; most were
already recorded by the organization about itself, which is the strongest
evidence that the method — applied by a team without hidden knowledge — would
have to work much harder than this team did. It reopens no operating
determination.
