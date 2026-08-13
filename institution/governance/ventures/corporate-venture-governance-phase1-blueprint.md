# Corporate Venture Governance — Phase 1 Blueprint (Approved)

**Classification: Approved Methodology, Governance, and Policy**

- **Version:** 1.0 — **complete approved text**, preserved exactly as
  transmitted; no substantive change.
- **Authority basis:** Approved by the Founder Office as the governing
  prerequisite architecture for FD-V1 (approval provenance recorded in
  fd-0007). Governs venture governance for Huerta Group LLC,
  subordinate to the Constitution and the Vision Foundation for
  Development.
- **Disclosure:** repository-internal.
- **Preservation note:** the text below is preserved verbatim,
  including its pre-approval status header, which reflects its
  preparation state at transmission. Repository admission of this
  document was performed under the Phase 3 instrument (fd-0007) and
  changes nothing in the approved text.

---

# Corporate Venture Governance — Phase 1 Blueprint

| | |
| --- | --- |
| **Governing authority** | Founder Office |
| **Technical authority** | Platform & Systems Development |
| **Status** | Architectural blueprint — awaiting Founder Office review |
| **Date** | 2026-08-12 |
| **Effect** | None until approved. This blueprint implements nothing, creates no repository artifact, amends no governing document, and creates no authority. Where approved, it becomes institutional architecture from which later implementation phases may inherit under separate authorization. |

---

## 1. Executive Summary

Huerta Group LLC has matured from building individual endeavors into an institution responsible for more than one of them. One venture — Huerta Group Publishing — already operates as a production system under the Company's legal entity, while the parent's governed corpus contains no venture concept at all: no definition, no admission process, no lifecycle, no registry, and no recorded parent–venture relationship (Corporate Platform Alignment Audit, discrepancies D-1/D-2; fd-0006 FO-02/FO-03).

This blueprint establishes the missing architecture. Its principal design decisions, each grounded in repository evidence:

1. **A venture is an institutional-governance construct, not an operational domain.** The Operating Systems & Process Architecture Foundation (OSPA) — the approved operational-semantics baseline — deliberately creates no domain instances and no domain-creation shortcut, and severs structure from authority throughout. The venture construct therefore lives in the institutional governance layer, beside (not inside) OSPA's operational layer, while **inheriting** OSPA's doctrine wherever it touches operational concepts: explicit authority, per-dimension status, non-propagation, evidence-based approval, and historical preservation.
2. **Venture status is created only by determination, never by existence.** Following the institution's strongest recurring rule ("a representation records authority; it does not create authority"), no repository, platform, brand name, or operating history makes something a venture. Only a Founder Office venture determination does. Huerta Group Publishing itself remains, formally, an unadmitted de facto venture until the first such determination is made.
3. **The parent governs through two instruments:** a per-venture **Charter** (the venture's governing document) and **Venture Determinations** recorded in the determinations register (admission, charter approval, reserved-matter decisions, lifecycle transitions). Registers and metadata mirror these facts; they never substitute for them.
4. **Authority is decomposed, never bundled.** "Venture ownership" is deliberately not a single concept: institutional authority (Founder Office), legally operative matters (Corporate Headquarters), brand grants (Founder Office interim, pending the future Branding authority), technical custody (Platform & Systems Development and venture repositories), and stewardship (a recorded responsibility) are independent relationships that must each be explicit.
5. **Ventures are isolated by default and share by explicit grant.** The evidenced infrastructure pattern (dedicated, deliberately separated Supabase/Vercel accounts per platform; repository-per-venture; ADR-0002/0003 boundaries) becomes the default venture posture. Methodology, IP, knowledge, and education flow to ventures only through the adaptation and disclosure channels those foundations already define — never by implication.
6. **Truth discipline binds every public surface.** Vision Foundation Guardrail 8 and §15 extend to ventures: no venture, and no parent representation of a venture, may present planned capability as existing. Per-venture disclosure posture is a governed dimension; parent-platform silence is a valid posture.
7. **Lifecycle is multi-dimensional and history is permanent.** Venture lifecycle inherits OSPA Section 9's separated dimensions and its dormancy/retirement/supersession/archival distinctions. Records are never deleted; supersession links are bidirectional; status history is never overwritten.

The blueprint closes with the explicit Founder Office determinations it requires but does not make (§28), the smallest of which — the Huerta Group Publishing venture determination — is the natural Phase 2.

---

## 2. Purpose

Define how Huerta Group LLC governs, owns, relates to, and represents ventures throughout their institutional lifecycle, as durable institutional architecture that future ventures inherit without governance redesign. This is architecture only: it defines meaning, structure, authority, and process. It does not implement repository changes, website changes, organizational restructuring, legal restructuring, or public communication, and it does not create or modify any individual venture.

## 3. Scope

**In scope:** the institutional definition of a venture; parent and venture architecture; parent–venture relationship types; governance, authority, and responsibility models; shared capabilities, services, branding, technology, knowledge, and IP relationships; financial/administrative boundary architecture; public and internal representation rules; lifecycle, metadata, and repository-representation requirements; the future admission process; dormancy, retirement, supersession, and historical preservation.

**Out of scope** (see §26): every item in the instrument's implementation boundaries — including repository modification, schema/metadata/record creation, website or Design System changes, legal-entity creation, tax/accounting/HR/organizational-chart definition, lifecycle tracking implementation, repository restructuring, and runtime governance — plus the substantive governance of any adjacent institutional domain (methodology, IP, education, knowledge, branding, corporate administration), which remains with its own authority.

**Interpretive rule:** repository evidence is authoritative. Where this blueprint's architecture requires a decision the repository does not evidence, the decision is identified in §28 rather than resolved here.

## 4. Venture Definition

**Definition.** A **venture** is a governed institutional structure of Huerta Group LLC through which the Company conducts a distinct, named, enduring endeavor — with its own identity, purpose, audience, platform or delivery surface, and lifecycle — that is institutionally distinct from the Company's internal capabilities while remaining under the Company's institutional authority and, presently, within its single legal entity.

**Admission rule.** Venture status is created exclusively by a Founder Office venture determination (§23). Characteristics indicate candidacy; they never self-execute. A repository, deployed platform, brand name, code constant, commit history, or public description does not create a venture, exactly as a domain representation records but does not create authority.

**Indicative characteristics** (evidence for a candidacy assessment, not a test that confers status): a distinct name and identity; a public-facing or client-facing purpose distinct from the parent practice's own service delivery; dedicated platforms, repositories, or infrastructure; an internal governance layer of its own; an intended lifecycle independent of any single parent engagement.

**What a venture is not:**

- **Not an institutional capability or branch.** Education & Workforce Development, Managed Services, Methodology, Intellectual Property, and Technology & Software are capabilities *of the parent practice* — governed by their own foundations, presented on the parent platform, and not ventures. A capability does not become a venture by maturing; conversion would require an explicit determination.
- **Not an OSPA operational domain.** OSPA Foundation v1 creates no domain instances and provides no domain-creation process; ventures are governance-layer structures that may later *relate to* operational domains if and when those are separately established. If a venture's operations are ever modeled as a domain, it is an **external operational domain**, which OSPA already requires to carry "separate authority, scope, disclosure, data, legal, commercial, and relationship governance" — precisely what a venture charter supplies.
- **Not a legal entity.** Today every venture operates within Huerta Group LLC (evidence: Huerta Group Publishing's publisher legal entity is "Huerta Group LLC"; imprint "Huerta Group Publishing"). Legal form is a Corporate Headquarters matter recorded as fact, never implied by venture status (§17).
- **Not a brand.** A name grant is a separate, revocable, recorded relationship (§13).
- **Not a client engagement.** Client delivery work — however substantial — is the parent practice operating, not a venture. Classification of ambiguous existing endeavors is a determination matter (§28, FD-V8).
- **Not a repository.** Repositories are technical custody. One venture may span several repositories; a repository may exist without venture status.

**Vocabulary rule** (inheriting OSPA S04's provisional-terms discipline): upon approval, **venture** becomes the approved institutional term for this construct. **Imprint, subsidiary, portfolio, business line, studio, lab, spin-off, operating unit** remain descriptive terms only — usable in prose, conferring no classification, and not to be treated as governance categories merely because an organization, platform, or public page uses them.

## 5. Parent Organization Architecture

Huerta Group LLC is the parent institution: an organizational systems company (Vision Foundation §1) whose constitutional record ratifies Articles I–III (Purpose and Identity; Mission and Long-Term Responsibility; Principles and Character), with formal text insertion pending.

**Institutional authorities relevant to venture governance** (per OSPA S01 §1.5 and the approved foundations; each authoritative in its own scope, none merged by shared use):

| Authority | Venture-relevant scope |
| --- | --- |
| Founder Office | Apex governing authority pending constitutional decision-rights architecture; issues venture determinations; holds all interim reserved matters |
| Corporate Headquarters | Legal, financial, contractual, commercial, and administrative matters — including legal form, publisher-of-record facts, licensing, and commercial activation |
| Institutional Knowledge / Methodology / Intellectual Property / Education & Workforce Development | Substantive authority over their domains; ventures reach that substance only through each foundation's own channels |
| Branding | Recognized as a **future** institutional authority (fd-0001 det. 6); no governing document exists; interim brand decisions are Founder Office reserved matters |
| Operations (OSPA) | Operational semantics that venture architecture inherits where it touches operational concepts; admission of the recovered OSPA text to the canonical corpus is pending (§28, FD-V7) |
| Platform & Systems Development | Technical architecture and implementation; technical custody, never substantive ownership |
| Design System | The parent platform's reference-implementation records (DDRs/GRs); Design System Foundation v1 text unpreserved (fd-0004 deficiency 6) |

**The parent's dual character.** Huerta Group LLC is simultaneously (a) an operating practice and (b) the institution that governs ventures. These roles are architecturally distinct: when the parent practice uses shared institutional capabilities, it does so as a *user* under the same channels ventures use — colocation with governance confers no substantive privilege (custody ≠ ownership; execution ≠ authority).

## 6. Venture Architecture

A governed venture consists of:

1. **Venture Charter** — the venture's governing document (§8). Identity, purpose, scope, granted authorities, reserved matters, boundaries, shared-capability grants, brand grant, disclosure posture, infrastructure custody, stewardship. Versioned; amended only by determination; superseded, never silently edited.
2. **Venture Determination record(s)** — the admission and subsequent parent-level decisions, recorded in the determinations register with instrument, dates, verbatim determinations, and evidence (the fd-record idiom).
3. **Venture registry entry** — machine-readable metadata mirroring the above (§21); records facts, creates nothing.
4. **Venture repositories and platforms** — technical custody surfaces (e.g., huerta-group-publishing: its repository, hosted database, deployment). Custody lists live in metadata; custody never creates authority.
5. **Venture-internal governance records** — a venture may (and should) mirror parent idioms internally: decision records, validation programs, observation registers (Huerta Group Publishing already maintains a founder-validation program and observation register). These are venture custody. Whether any venture-internal record class constitutes institutional determinations, and how the registers relate, is reserved (§28, FD-V2).
6. **Relationship declarations** — every shared-capability, brand, technology, or representation relationship the venture holds, each traceable to its granting instrument.
7. **Lifecycle status set** — the venture's independent status dimensions (§20).

## 7. Parent–Venture Relationships

Enumerated relationship types — each explicit, each recorded, none arising by implication:

| Relationship | Content | Governing instrument |
| --- | --- | --- |
| Governance | Admission, charter, reserved matters, lifecycle determinations | Venture determinations + charter |
| Identity / brand | Grant (or withholding) of the Huerta Group name and marks | Charter brand grant (Founder Office interim; future Branding authority) |
| Legal | Entity relationship; publisher-of-record and similar legally operative facts | Corporate Headquarters records (referenced as fact) |
| Financial / administrative | Boundary architecture only (§17) | Corporate Headquarters |
| Capability sharing | Methodology, IP, knowledge, education flows | Each foundation's adaptation/disclosure channels + charter grants |
| Technology | Isolation defaults; any shared service | ADR-0003 criteria; per-service ADR + charter reference |
| Representation | Whether/how the parent platform represents the venture; whether/how the venture references the parent | Disclosure-posture determination + charter |
| Records | What the parent registers mirror; evolution-log events | §19, §21, §22 |

**Non-propagation (inherited doctrine).** Parent–venture is organization, not control-by-implication: it does not itself establish approval authority, status inheritance, resource rights, brand rights, or representation rights in either direction. Peer ventures hold no implied authority over one another; cross-venture arrangements require both charters to provide for them. Every institutional conclusion requires its own governing basis.

## 8. Governance Model

**Instruments.**

- **Venture Determination** (Founder Office): the sole act that admits a venture, approves or amends its charter, decides reserved matters, and effects institutionally significant lifecycle transitions. Recorded in the determinations register (verbatim text, instrument identity, dates, affected artifacts), satisfying the approval-control rule that an interface action, status change, or folder is never itself a valid approval — authority and conditions must be independently satisfied and evidenced.
- **Venture Charter**: one per venture; the venture's governing document; subordinate to the Constitution, the Vision Foundation, and Company-wide governing documents; superior to venture-internal practice. A task instrument may authorize exceptions to a charter's lower-level rules but never amend the charter silently.
- **Registers and metadata**: the determinations register (parent), the future venture registry, corpus-manifest entries, and Evolution Log records for venture lifecycle events. All are evidentiary — the record evidences; the underlying authority governs.

**Approval authority.** Interim rule, consistent with every approved foundation: venture governance authority is held by the Founder Office and remains **configurable pending the constitutional decision-rights architecture**. No named individual is hard-coded; no permanent office is created here.

**Proportionality.** Governance ceremony scales with consequence (OSPA S10 proportionality): a small exploratory venture warrants a short charter and few dimensions actively tracked; an operating venture with public surfaces warrants the full set. Proportionality is exercised within the architecture, never by skipping the determination.

## 9. Authority Model

**Reserved to the parent** (Founder Office unless noted; not delegable by silence):

1. Venture admission, classification, and charter approval or amendment.
2. Use of the "Huerta Group" name, marks, or shared brand elements (interim; migrates to Branding authority when established).
3. Legal form and every legally operative act — entity changes, contracts binding the LLC, licensing, registration, commercial activation (Corporate Headquarters).
4. Cross-venture commitments and any commitment of parent institutional capabilities beyond a charter's existing grants.
5. Public representation of the venture on the parent platform, and the venture's disclosure posture.
6. Institutionally significant lifecycle transitions: pilot/active activation, pause with public consequence, dormancy, retirement, supersession, archival treatment.
7. Amendment of this governance architecture itself.

**Venture autonomy (within its charter):** implementation and technical architecture of its own surfaces (subject to §12 isolation defaults); product, editorial, and operational decisions inside its approved scope; venture-internal records and processes; hiring of tools and vendors within charter boundaries that do not bind the LLC beyond authorized scope.

**Per-dimension authority** (inheriting OSPA S09): commercial readiness and legal/compliance readiness — Corporate Headquarters; public-disclosure readiness — Founder Office (with future Branding participation); technical readiness — Platform & Systems Development; no dimension's authority implies another's.

**Anti-inference rules** (inherited verbatim in substance): authority is never inferred from technical access, repository ownership, implementation responsibility, participation, historical practice, public description, or naming. A venture registry entry, charter reference, or platform deployment records authority relationships; it creates none.

## 10. Responsibility Model

Authority and responsibility are materially distinct (OSPA S02 §2.7); each venture relationship carries both, independently identified:

- **Venture steward** — each venture has one recorded steward (today, factually, the Founder in every case): responsible for charter conformance, truthful public representation, venture-record maintenance, and timely reporting of material lifecycle changes to the parent registers. Stewardship confers no authority.
- **Parent responsibilities** — maintain the determinations register, venture registry, manifest, and Evolution Log; preserve history; verify venture-related public copy against evidence (the Truth Alignment discipline); run the verification gates that guard the records.
- **Corporate Headquarters responsibilities** — maintain the legally operative record; supply the legal/financial facts that venture metadata references.
- **Platform & Systems Development responsibilities** — technical custody of implementation surfaces; faithful repository representation; correction of any technical representation that conflicts with governing meaning (the representation, not the meaning, is defective).
- **Execution creates no responsibility by itself** — responsibility, like authority, is assigned by record.

## 11. Shared Institutional Capabilities

**General rule:** shared use never merges authority, and a venture has **no automatic right** to any parent institutional substance. Each capability flows through its own foundation's channel, on explicit grant recorded in the charter:

- **Methodology** — via the Method Library's disclosure architecture. The `publishing_adaptation`, `educational_adaptation`, and `software_ready_methodology` levels (mr-0008) already anticipate exactly this flow; adaptations must retain source traceability to method records and versions. All eight current records are `internal_methodology`; no venture consumption exists or is created here.
- **Intellectual property** — via the IP Repository's admission and disclosure standards (ip-0006). No record currently carries `public` disclosure; venture use of institutional IP requires the appropriate disclosure classification plus, where legally operative, Corporate Headquarters action.
- **Knowledge** — via the Institutional Knowledge Foundation. Machine-consumption eligibility is unresolved corpus-wide; no venture (or venture AI system) may consume governed documents until resolved.
- **Education** — via EWDFv1's adaptation authority chain (§17.3); educational substance never flows by venture convenience.
- **Reverse flow** — venture-produced methods, knowledge, or assets enter parent institutional governance only through the same admission processes (candidate → review → admission), never automatically. Venture operating experience is a legitimate evidence source; evidence does not self-admit.

## 12. Shared Services

Inheriting the Internal Software Architecture Foundation and ADR-0003:

- **Isolation is the default.** Each venture runs on its own infrastructure and accounts. This is the evidenced, deliberate pattern: the parent platform and Huerta Group Publishing each maintain dedicated Supabase and Vercel accounts, explicitly "separate from any other project's accounts."
- **No shared service before a second real consumer.** The first consumer hosts; a second real consumer triggers an extraction ADR. Ventures do not change this rule; they instantiate it.
- **Anticipated shared-service candidates** — identity and access, shared data services, the future institutional knowledge system — remain `documented_direction`/`unresolved` in the capability registry; a venture requiring one becomes the trigger that ADR contemplates, decided by its own ADR at that time.
- **Client-confidential and venture data never share a runtime or repository with the parent public website** (ADR-0003/ADR-0004 sensitivity criteria; ADR-0002 boundary).
- A venture's use of a shared service is a recorded relationship with its own terms; it creates no authority over the service and no obligation on other ventures.

## 13. Branding Relationships

- **Constraint:** Branding is a recognized **future** institutional authority with no governing document (fd-0001 det. 6), and the Design System Foundation v1 text is unpreserved (fd-0004 deficiency 6). Deep brand architecture cannot be established here without inventing doctrine.
- **Interim architecture:** use of the "Huerta Group" name or marks by a venture is a **name grant** — a discrete, revocable, recorded element of the venture charter, decided by the Founder Office. A venture may be chartered with an unrelated name (brand-independent venture); the grant question is per-venture, never default.
- **Existing fact requiring regularization:** Huerta Group Publishing already carries the shared name across its platform and records. The name usage is treated as an existing fact to be regularized by that venture's admission determination — not as precedent creating a general right.
- **Deferred to the Branding authority when established:** visual-identity sharing, co-branding rules, brand hierarchy across ventures, public brand claims standards (EWDFv1 §12.6 already requires Branding approval for public educational claims — a dependency that will bind ventures equally).

## 14. Technology Relationships

- **Repository-per-venture is the evidenced pattern** and the default: venture implementation lives outside the parent repository (ADR-0002 keeps the parent website a bounded public interface; FO-1's single-repository determination governs the parent repository itself, not venture repositories, which already exist separately).
- **Placement of any future capability** — venture-side or shared — is decided per capability against ADR-0003's criteria (sensitivity, cadence, ownership, runtime model, coupling, security boundary, reversibility, maturity). No global topology is mandated for ventures, exactly as none is mandated for the parent.
- **Data ownership** follows the ADR-0004 idiom: each venture's project owns its own data surfaces; there is no universal Company database; consolidation would require its own ADR with a second data-owning consumer.
- **Environments and identity** follow ADR-0005 (sensitivity-triggered isolation; production-first is a per-surface decision, not doctrine) and ADR-0006 (provider-neutral identity, introduced only when a capability requires it; technical permissions never institutional authority).
- **Design System:** the parent's DDR-governed reference implementation governs the parent platform. Ventures own their visual languages unless a charter provides otherwise; any future shared design system across ventures is a Branding/Design System matter, not a venture default.
- **Technical custody vs authority:** venture engineers, CI systems, and deployment accounts hold custody. Institutional authority over what a venture *is* and *may claim* remains with the instruments in §8.

## 15. Knowledge Relationships

- The parent's governed corpus (manifest, schemas, validators) governs parent institutional documents. Venture documents are venture custody and are **not** part of the parent canonical corpus by existence.
- Institutionally material venture facts are mirrored into parent registers as metadata (§21) — mirrors record; they are never authoritative over the venture documents they cite, and venture repositories are never cited as *authority* by parent canonical documents (the workbench rule's logic, generalized: authority citations point to admitted canonical sources only).
- Admission of any venture document into the parent canonical corpus follows the canonical-source-preservation standard: verified provenance, a Founder Office determination, verbatim preservation, manifest/registry entries, and a passing verification gate — in one change.
- Venture knowledge loss events follow the institution's loss discipline: unavailable material is recorded as unavailable, never reconstructed.

## 16. Intellectual Property Relationships

- **All legally operative IP matters are Corporate Headquarters matters** — ownership, protection, registration, licensing, valuation, commercialization, and the unresolved joint-venture ownership policy the IP Foundation itself lists (§10). Nothing here resolves them.
- **Institutional IP admission remains the parent IP Repository's process.** Venture-created assets may become candidates with substantive-source authority; admission requires the recorded IP admission decision; repository presence creates no admission, and admission creates no legal rights.
- **Publisher-of-record facts** (e.g., "Huerta Group LLC" as legal entity, "Huerta Group Publishing" as imprint, established by Founder Office authorization and enforced in the venture's code and tests) are recorded facts referenced by venture metadata — they are neither IP determinations nor brand grants.
- **Client-derived and third-party interests** inside venture work carry the same explicit review states ip-0006 requires; venture context never relaxes them.

## 17. Financial & Administrative Relationships

This blueprint establishes the **boundary architecture only**:

- All financial, accounting, tax, treasury, contractual, and administrative matters concerning ventures are Corporate Headquarters authority. This blueprint defines no tax treatment, no accounting policy, no HR structure, and no organizational chart (instrument boundaries).
- Ventures presently operate within the single legal entity; any per-venture financial separation is administrative practice, not institutional doctrine, until Corporate Headquarters defines it (§28, FD-V6).
- A venture charter records which financial/administrative commitments the venture may make within the entity (scope of spend, vendor commitments) as *charter boundaries*, without creating financial policy.
- Commercial readiness is a per-venture status dimension owned by Corporate Headquarters (§20); no venture becomes commercially active by operating maturity alone (Huerta Group Publishing's own honest state — no billing, no payment collection — illustrates the distinction the architecture preserves).

## 18. Public Representation Rules

1. **Truth discipline is universal.** Guardrail 8 and Vision Foundation §15 bind every venture public surface and every parent representation of a venture: current truth distinguished from future direction; no planned capability presented as existing; no venture presented as commercially transacting unless commercially ready in fact.
2. **Per-venture disclosure posture** is set by determination, using the disclosure vocabulary the institution already holds (inheriting OSPA S09 public-disclosure readiness): *Not Assessed · Internal Only · Disclosure Review Required · Approved for Limited Disclosure · Approved for Public Adaptation · Approved for Public Disclosure*. Silence on the parent platform is a governed, legitimate posture — the current factual posture for Huerta Group Publishing.
3. **No representation by implication.** A venture is not publicly represented because it exists, deploys, or matures; the parent platform adds venture representation only under an explicit determination (and any navigation change remains separately owner-gated per the recorded capacity constraint).
4. **No cross-claiming.** A venture must not present parent capabilities as its own, and the parent must not present venture capabilities as its own; each surface claims only what its own evidence supports. Cross-referencing between parent and venture public surfaces requires both sides' instruments to provide for it.
5. **Claim ceilings travel with substance.** Where a venture publicly touches governed substance (methodology, education, IP), the source foundation's public-claim rules apply unchanged (e.g., no effectiveness or outcome claims without evidence and approval; public pages are positioning, never authoritative specification).
6. **Machine-readable representation follows the same rules** — structured data, metadata, and registries visible publicly are public claims.

## 19. Internal Representation Rules

1. **Naming:** "venture" is the approved term (§4 vocabulary rule); descriptive terms confer nothing.
2. **Classification:** venture governance records are classified per the documentation-index taxonomy — charters as approved governing documents (their tier fixed at admission), determination records and registry entries as **Institutional Records (evidentiary, non-governing)**.
3. **The record evidences; the authority governs.** No internal representation — registry entry, manifest record, README, code constant, or dashboard — creates venture status, authority, readiness, or relationships.
4. **Consistency:** internal documents refer to ventures by their registered identity; internal shorthand never migrates into governing text.
5. **Contributor memory** (AI or human) is a convenience cache, never authoritative — the standing D-6 rule extends to all venture facts: where memory and repository evidence disagree, the repository is correct, and where parent and venture records disagree, the governing instrument identified by this architecture decides which is authoritative for that fact.

## 20. Venture Lifecycle

Venture lifecycle inherits OSPA S09's architecture: **independent dimensions, per-dimension authority, no propagation, no universal state machine, permanent history.** No dimension implies another; no status is inherited between parent and venture or between ventures; a transition is a governed act evidenced by determination, not a field edit.

**Dimensions and vocabularies** (venture profile of the S09 vocabularies; *Unresolved* is always a recordable value and is never treated as favorable):

| Dimension | Authority | Vocabulary |
| --- | --- | --- |
| Institutional standing | Founder Office | Candidate · Admitted · Chartered · Charter Amended · Superseded · Retired Standing |
| Development maturity | Steward (recorded), reviewed at determination points | Concept · Exploration · Development · Established · Mature |
| Operational activity | Founder Office for institutionally significant transitions | Inactive · Preparation Authorized · Pilot Authorized · Pilot Active · Active · Paused · Restricted · Transitioning · Retired |
| Public-disclosure readiness | Founder Office (future Branding participation) | the §18.2 vocabulary |
| Commercial readiness | Corporate Headquarters | Not Assessed · Not Applicable · Commercial Requirements Incomplete · Commercial Review Required · Commercial Preparation Authorized · Commercially Ready for Defined Scope · Suspended · Withdrawn · Unresolved |
| Legal / compliance readiness | Corporate Headquarters | per S09 vocabulary |
| Retirement condition | Founder Office | Not Retired · Retirement Proposed · Retirement Under Review · Retirement Approved · Transition in Progress · Retired · Retirement Withdrawn · Unresolved |
| Archival treatment | Founder Office | Current Record · Historical Record · Archival Review Required · Archived · Restricted Archive · Preservation Hold · Unresolved |

**Dormant venture treatment.** Dormancy is *Paused* or *Inactive* operational activity with standing preserved: the charter remains in force, registry entries remain current records, no artifact is deleted, brand grant and custody persist unless separately changed, and a recorded review condition prevents indefinite ambiguity. Dormancy is entered and exited by determination; suspension, pause, withdrawal, expiration, and retirement remain distinct acts, and no technical label substitutes for the applicable institutional act.

**Retired venture treatment.** Retirement follows its own condition sequence (proposed → review → approved → transition → retired). Retirement does not delete: records become historical records; repositories are preserved or archived per an explicit archival decision; name-grant reversion, data disposition, and any public wind-down statement are each explicit determination elements. A retired venture's history remains citable evidence.

**Venture supersession.** One venture may supersede another (or a capability may be re-chartered as a venture, or vice versa) only by determination, with bidirectional supersession links in both records. Supersession does not itself retire, archive, or invalidate the superseded venture's history — each consequence is decided and recorded separately.

## 21. Venture Metadata

Requirements for the future venture registry (defined here; **not created** — implementation is a separately authorized phase following the ADR-0001 idiom of registry + schema + deterministic validator wired into the verification gate):

- **Identity:** stable id (kebab-case, filename-derived idiom), registered name, descriptive aliases (non-classifying).
- **Governance:** charter reference and version; determination references (admission and all subsequent); classification; steward.
- **Lifecycle:** every §20 dimension as an independent field; no combined "status" field; status history preserved (git history plus explicit supersession/refinement links).
- **Relationships:** brand-grant reference; shared-capability grants (each with granting instrument); shared-service usages; supersedes / superseded-by; parent-representation posture.
- **Facts by reference:** legal-form evidence (Corporate Headquarters record reference); publisher-of-record or equivalent constants; custody list (repositories, platforms, accounts by name/scope — locations, never secrets).
- **Integrity rules:** entries validate against schema; identifiers unique and stable; referenced instruments must exist; unresolved values recorded as unresolved, never defaulted; superseded/retired entries retained forever.
- **Authority rule, verbatim in spirit with the capability registry:** registry entries never authorize construction and never create institutional authority.

## 22. Repository Representation

Architecture only (no artifact is created by this blueprint):

- **Parent repository** is the canonical home of venture *governance*: charters (upon admission) under the governance area, determination records in the existing register, the future venture registry + schema under `institution/metadata/`, manifest entries for every governed venture document, Evolution Log records for venture lifecycle events, and validator coverage in the canonical gate. Exact paths and the registry/validator are fixed at implementation under the documentation-index and ADR-0001 rules.
- **Venture repositories** hold venture implementation and venture-internal records; they inherit the truth disciplines through their charters but are not converted into governed parent corpus by admission.
- **Cross-repository references** are explicit and one-directional in authority: parent governance may cite venture artifacts as *evidence*; only admitted canonical sources are cited as *authority*.
- **Register topology** — whether the parent determinations register remains the single institutional register (recommended default, consistent with the Evolution Log's designation of it as "the authoritative decision record") or per-venture registers are established with defined standing — is reserved (§28, FD-V2).
- The parent repository remains a single repository (FO-1); nothing here reopens that determination.

## 23. Future Venture Admission Process

1. **Candidacy.** Anyone may propose; the proposal is recorded as a candidate (a workbench-class working document until admitted). Candidacy confers nothing.
2. **Charter drafting.** Purpose; identity; scope and exclusions; requested authorities and boundaries; brand-grant request; shared-capability requests (each mapped to its foundation's channel); infrastructure/custody plan; disclosure-posture request; steward; initial lifecycle profile; dependencies and known risks; historical rationale — the same discipline OSPA S04 requires of a proposed domain.
3. **Review.** Founder Office review against this architecture, with evidence proportionate to consequence (S10): the authority basis, the conditions, and the evidence are each independently satisfied — an approval is an institutional act, never a workflow transition.
4. **Determination and recording.** The venture determination is recorded in the determinations register; the charter is admitted with manifest coverage; the registry entry and an Evolution Log record are added; the verification gate passes — in one governed change (implementation phase mechanics).
5. **Separation of consequences.** Admission authorizes nothing else: no build, no activation, no disclosure, no commercial activity, no brand use beyond the recorded grant — each is its own dimension with its own authority (non-propagation).
6. **Regularization of de facto ventures.** An endeavor that already operates (Huerta Group Publishing) is admitted through the same process, using retrospective evidence honestly marked as such; regularization changes the record, never rewrites history. The first regularization is Phase 2 work (§27), not executed here.

## 24. Historical Preservation

- Venture records — charters, determinations, registry entries, evolution records — are **never deleted**. Supersession and retirement change status, with links, never existence.
- Status history is never overwritten; historical interpretation uses the status and authority effective at the relevant time.
- Git history is the version record for governed artifacts; explicit supersession links carry the institutional narrative.
- Venture repositories preserve their own histories; archival of a retired venture's repositories is an explicit archival decision, not a side effect.
- Loss events are recorded as loss, never reconstructed (the OSPA precedent governs conduct here).
- Venture history is institutional knowledge: it remains available as evidence for methodology, education, and future venture decisions through the appropriate admission channels.

## 25. Architectural Principles

1. **Representation records; it never creates.** No registry, repository, platform, name, or page creates venture status, authority, readiness, or relationship.
2. **Explicit authority, explicitly scoped.** Every venture-related authority is traceable to a recorded instrument; no inference from access, custody, participation, practice, or description.
3. **Authority ≠ responsibility ≠ execution ≠ custody.** Each relationship independent, each recorded.
4. **Per-dimension status; no propagation.** No overloaded status field; no dimension implies another; no status inherits across the parent–venture relationship.
5. **Isolation by default; sharing by grant.** Infrastructure separated; capabilities flow only through their foundations' channels; shared services only on the second-consumer rule.
6. **Truth over marketing, everywhere.** Guardrail 8 binds all surfaces, parent and venture, human- and machine-readable.
7. **Single canonical source; mirrors are mirrors.** Each fact has one authoritative home; every other representation cites it.
8. **Configurable authority.** Interim Founder Office authority everywhere, pending constitutional decision-rights; no hard-coded individuals or permanent offices.
9. **Proportionate governance.** Ceremony scales with consequence; the determination itself is never skipped.
10. **Repository-first, implementation-neutral.** Governance lives in governed records; no runtime system, vendor, or technology is assumed or selected.
11. **History is permanent.** Never deleted, never silently rewritten, never reconstructed.
12. **Inheritance without annexation.** This architecture inherits existing foundations' semantics and creates no authority over any of them; where it touches their subjects, their authority governs.

## 26. Explicit Non-Goals

This blueprint does **not**: modify repository files; implement governance; create schemas, metadata, records, or registries; modify the website, public copy, or Design System assets; create legal entities or define legal form; define tax treatment, accounting policy, HR structure, or organizational charts; implement lifecycle tracking; restructure repositories; establish runtime governance; create, admit, charter, or reposition any venture (including Huerta Group Publishing); amend OSPA, the Vision Foundation, any foundation, ADR, or determination; establish Branding standards or a cross-venture design system; resolve the constitutional decision-rights architecture; or authorize any public communication.

## 27. Future Work

Sequenced, each requiring its own Founder Office authorization:

1. **Phase 2 — Huerta Group Publishing venture determination and charter (regularization).** The first application of §23.6: classification, charter, name-grant regularization, disclosure posture, custody record — with retrospective evidence marked as such. Smallest coherent next step; unblocks the stale parent records (audit D-1/D-2).
2. **Phase 3 — Repository implementation of venture governance.** Venture registry + schema + validator in the canonical gate; manifest coverage; charter location; capability-registry corrections that follow from Phase 2 (e.g., the `publishing-platform` entry's maturity); Evolution Log record. Follows the ADR-0001/documentation-index idiom.
3. **Public representation decision for Huerta Group Publishing** (only after Phases 2–3 set posture and records; interacts with the owner-gated navigation constraint and the parent launch sequence).
4. **Branding authority establishment** (or an interim documented name-use rule), retiring §13's interim posture.
5. **Register topology determination** (FD-V2) and, if needed, venture-internal record-class standing.
6. **Corporate Headquarters definitions** of financial/administrative venture boundaries and the legal-form roadmap.
7. **OSPA canonical admission**, converting this blueprint's semantic inheritance from approved-input alignment into formal corpus traceability.
8. **Classification sweep** of existing endeavors and repositories (e.g., client-delivery work such as curbside-spa) to record what is and is not a venture — recording, not creating.

## 28. Required Founder Office Determinations

Identified per the instrument's decision rule — required by this architecture, deliberately **not** resolved here:

| Id | Decision | Why it cannot be resolved by this blueprint |
| --- | --- | --- |
| FD-V1 | Admit and charter Huerta Group Publishing (classification, charter content, name-grant regularization, disclosure posture, steward) | Venture status is created only by determination (§4); no evidence-based inference can substitute |
| FD-V2 | Determinations-register topology: single parent register vs. defined standing for venture-internal registers | The venture repository already operates an internal "Founder Office" governance layer with no recorded relationship to the parent register; standing is an authority question |
| FD-V3 | Interim brand/name-use rule pending the Branding authority (and the decision to establish that authority) | Branding is a recognized future authority with no governing document; fd-0001 det. 6 prohibits placeholder governance artifacts |
| FD-V4 | Huerta Group Publishing's public-disclosure posture on the parent platform | Disclosure is a reserved per-venture determination (§9, §18) |
| FD-V5 | Confirmation of the interim venture-approval authority configuration (Founder Office, configurable) | Approval authority remains constitutionally unresolved across all foundations; consistency requires the same explicit interim rule |
| FD-V6 | Legal-form roadmap and financial/administrative venture boundaries | Corporate Headquarters authority; expressly out of this blueprint's scope |
| FD-V7 | OSPA Foundation admission to the canonical corpus (recovered sections S01–S04, S09, S10) | This blueprint inherits OSPA semantics as an approved input; formal corpus-level traceability requires the admission the workbench charter defines |
| FD-V8 | Classification of other existing endeavors (venture / client engagement / internal capability) | Classification is a determination act; repository evidence alone must not be converted into status by inference |

---

*Prepared by Platform & Systems Development under the Corporate Venture Governance — Phase 1 instrument. Repository evidence reviewed at huerta-group-llc `main` @ `64942e9` and huerta-group-publishing `main` @ `ab0dac8`. No repository artifact was created or modified. Awaiting Founder Office review.*
