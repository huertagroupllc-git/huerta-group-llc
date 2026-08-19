# Corporate Operations Semantics — Definition Package

**Classification: Institutional Record** — requirements package
(evidentiary, non-governing).

- **Purpose:** state exactly which operational concepts Corporate
  Operations & Command Management must define as prospective institutional
  methodology, and what each definition must resolve.
- **Prepared under:** `fd-0011`.
- **Recorded:** 2026-08-18.
- **Handoff target:** Corporate Operations & Command Management, subject
  to Founder Office governance.
- **Disclosure:** repository-internal.

> **This package contains questions, not answers.** It deliberately
> supplies no operational definitions. Development identified these gaps
> and is not authorized to fill them: under OSPA S02 Principle 1,
> "Institutional concepts shall be defined before they are technically
> represented… Technical implementation shall not independently determine
> institutional semantics." Any definition written by Development would
> be exactly the defect this package exists to prevent.

## Status of this package — provisional

The instrument directed comparison against **the complete accepted
Generation One Requirements Report**. That report has not been transmitted
to the implementing office and is not accessible in this environment
(`fd-0011` Deficiency 1). It was **not** reconstructed and the abbreviated
repository record was **not** used to infer its contents.

This package was therefore derived from: admitted canonical OSPA
(S01–S04, S09, S10); the Phase 1 semantic-gap inventory; the Founder
Office determinations in `fd-0011`; and the concept set the Phase 2
instrument itself enumerates.

**Consequence:** the concept inventory is provisional. On transmission of
the report, it must be re-tested — concepts the report does not require
should be removed, and concepts it requires that are absent here must be
added. The instrument's own rule governs: this list "is an assessment set,
not a mandate to create doctrine for every item."

## Concepts excluded — already sufficiently governed

These were tested and are **not** carried into prospective definition,
because admitted authority already governs them. Defining them again would
duplicate or risk contradicting existing authority.

| Concept | Governing authority | Why no new doctrine is needed |
| --- | --- | --- |
| **Source provenance / evidence** | OSPA S10 §§10.24–10.36 | Evidence, source, attribution, integrity, relevance, reliability, completeness, sufficiency, proportionality, conflict, negative evidence and absence, correction and amendment, and preservation are all defined. Existing field precedent additionally exists in the determinations registry. |
| **Historical / audit treatment** | OSPA S02 §2.10; S10 §§10.36–10.41, §10.51–10.52 | Decision, approval, change, exception and review history; audit trail; auditability; evidence preservation. Corpus practice already applies these (records never deleted, supersession bidirectional, status history never overwritten). |
| **Authority** | OSPA S01 §1.5; S02 §2.3 Principle 3; S02 §2.7 | Authority is defined and expressly not inferable from technical access or software permissions. Reinforced by ADR-0006. |
| **Responsibility** | OSPA S02 §2.3 Principle 4; §2.7 | Defined as independently established and not inferable from execution. **Transfer** of responsibility is a separate gap — see concept 6 (Handoff). |
| **Status/lifecycle of operational *assets and definitions*** | OSPA S09 §§9.2–9.30 | Fourteen independent dimensions with vocabularies, per-dimension authority, status evidence, effective period, non-propagation, inheritance prohibition, correction, conflict. Governs applicable objects (`fd-0011` S09 applicability determination). **Instances are a separate gap** — see concepts 1, 10, 11 and 12. |
| **Venture snapshot** | Corporate Venture Governance Phase 1 Blueprint; FD-V1, FD-V2, FD-V4 | Venture facts are venture-authoritative; plane separation and parent representation determined; the parent already maintains `venture-registry.json`. |
| **Attention priority vocabulary** (Immediate / Near-Term / Normal) | Founder Office policy, recorded in `fd-0010` | The vocabulary is determined, including "no numeric scoring." The **subject it classifies** is not — see concept 3. |
| **Operational domains** | OSPA S04 | Domain architecture, ownership, stewardship, identifier and naming neutrality, prohibited domain inferences. Generation One requires no new domain doctrine. |

## Concepts requiring prospective definition

Each entry states what must be resolved. None states how.

---

### 1. Operational instance

- **Why Generation One requires it.** Generation One must hold live operational conditions, which are instances rather than definitions. Without instance semantics there is no governed thing for the capability to contain.
- **Existing surviving authority.** OSPA S03 §3.25 establishes Definition, Type and **Instance** as "three distinct conceptual levels," an instance being "An actual occurrence represented according to an approved definition and type," and directs that "None of these concepts shall be treated as interchangeable." S03 §3.24 establishes operational records as "governed representations of approved operational subjects" and that the architecture "governs the conceptual structure through which operational records may **later** be represented."
- **Exact surviving authority boundary.** The conceptual level exists; **authorization does not**. OSPA S09 §9.1 does not authorize "Active operational records. Process instances. Workflow instances. Requests. Cases. Projects. Tasks. Assignments. Runtime state transitions… Production status changes… User accounts. Production data." S01 §1.5 independently excludes "active operational records" from Operations authority. S03 §3.24 also holds that "The existence of a record does not establish that operational work has occurred."
- **Unresolved semantic question.** Under what institutional authority may active operational instances exist; what makes an instance governed rather than incidental; and what distinguishes an operational instance from an operational event, an activity, and a runtime system object (S03 §3.24 names the distinction without defining the instance side).
- **Relationships that must be defined.** Instance to definition; instance to type; instance to operational record; instance to the operational asset it concerns.
- **Status/lifecycle questions.** Which of S09's dimensions apply to an instance, if any — S09 governs assets and definitions, and §9.3/§9.30 require applicability to be established by the governing asset class, standard, or authority.
- **Authority/responsibility questions.** Who may create, amend, and close an instance, and is that distinct from who is responsible for the underlying work.
- **Historical/evidence requirements.** What evidence an instance must carry (S10 vocabulary applies once the instance concept exists).
- **Must remain distinct from.** Operational asset; operational definition; operational event; operational activity; runtime system object; technical metadata; audit entry.
- **Why Development cannot define it.** It is the central institutional question the unavailable sections would have answered; supplying it would let a schema determine institutional meaning.

---

### 2. Material / significant change

- **Why Generation One requires it.** "What materially changed" is one of the three questions the capability exists to answer. Without a materiality rule, a change register degenerates into an undifferentiated event stream — the outcome the program excludes.
- **Existing surviving authority.** OSPA S10 §10.39 establishes **Change History** as an evidence class; §§10.35–10.36 establish correction, amendment, and preservation.
- **Exact surviving authority boundary.** Surviving text establishes that change is *recorded*. It does not establish which changes are **material**.
- **Unresolved semantic question.** What makes a change materially significant to the institution, as distinct from any mutation of a record; who judges materiality; and whether materiality is intrinsic to the change or relative to an audience.
- **Relationships that must be defined.** Change to the state it changed; change to the evidence supporting it; change to any attention it warrants.
- **Status/lifecycle questions.** Whether a change record itself has status, and whether a change can be superseded or corrected without erasing the original.
- **Authority/responsibility questions.** Who may assert that a change occurred, and who may judge it material — and whether those are the same office.
- **Historical/evidence requirements.** Distinction between when a change **occurred** and when it was **recorded**; the corpus already models this pair (`dateReceived` / `recordedDate`).
- **Must remain distinct from.** Audit entry (a technical record that a row was mutated); operational event; state.
- **Why Development cannot define it.** Materiality is an institutional judgement, not a technical predicate.

---

### 3. Founder Attention

- **Why Generation One requires it.** "What requires Founder attention" is the third question, and the Attention layer is half the capability's stated scope.
- **Existing surviving authority.** **None.** The concept is absent from admitted OSPA and the wider corpus. The Founder Office has determined the *priority vocabulary* (Immediate / Near-Term / Normal, no numeric scoring) but not the concept it classifies.
- **Exact surviving authority boundary.** OSPA S10 §§10.55–10.58 supply Observation, Finding, Recommendation and Corrective Action. These are **review-and-control** concepts. They are adjacent and **must not be substituted** — doing so would be reconstruction by professional convention, which `fd-0011` and canonical-source-preservation §7 prohibit.
- **Unresolved semantic question.** What institutionally constitutes a matter requiring Founder awareness or action; what distinguishes attention from escalation, from a control finding, and from ordinary reporting; and whether attention is a property of a fact or a separate governed object.
- **Relationships that must be defined.** Attention to the state and/or change it concerns; whether one attention item may reference multiple facts; whether attention may exist with no underlying governed record.
- **Status/lifecycle questions.** Nomination, acceptance, classification, acknowledgment, action, disposition, reopening — and whether these are one axis or several. Note the transition constraints in concepts 11 and 12.
- **Authority/responsibility questions.** Who may nominate; who may classify (Founder Office policy carried forward from the preceding Generation One instrument and recorded at `fd-0011`, "Founder Office policy carried forward": Corporate Operations owns the Headquarters Attention register and Attention classification); whether resolution requires the Founder specifically.
- **Historical/evidence requirements.** What must be preserved when attention is raised, reclassified, resolved, or reopened.
- **Must remain distinct from.** Observation; finding; recommendation; corrective action; blocker; notification; a priority label.
- **Why Development cannot define it.** It is the capability's defining institutional concept and exists nowhere in admitted authority.

---

### 4. Blocker

- **Why Generation One requires it.** Representing what is stopping progress is required by the concept and is directly evidenced in current practice (owner-gated launch items).
- **Existing surviving authority.** None defining it. OSPA S01 §1.3 places "operational conditions requiring treatment" within OSPA's scope, so the concept is OSPA's to define; the defining section is permanently unavailable.
- **Exact surviving authority boundary.** Scope statement only. No definition survives.
- **Unresolved semantic question.** What institutionally constitutes a blocker; whether it is a condition, a relationship, or a classification of one; and whether "blocked" is a state of the blocked thing or an independent record.
- **Relationships that must be defined.** Blocker to the thing blocked; blocker to the party who can clear it; blocker to dependency (see 5).
- **Status/lifecycle questions.** Whether a blocker has its own lifecycle, and what "cleared" means institutionally.
- **Authority/responsibility questions.** Who may declare something blocked, and who is accountable for clearing it.
- **Historical/evidence requirements.** Whether cleared blockers are retained and what evidence a declaration requires.
- **Must remain distinct from.** Dependency; risk; attention; a status value.
- **Why Development cannot define it.** OSPA reserves it and the reserving text is lost; inventing it would substitute professional convention for institutional meaning.

---

### 5. Dependency

- **Why Generation One requires it.** Prerequisite relationships between operational matters must be representable to answer what is happening and why it is not moving.
- **Existing surviving authority.** OSPA S04 §4.21 (domain dependency) and §4.22 (upstream/downstream relationships) govern **domain-level** relationships; S03 §3.13 governs **architecture-level** dependencies.
- **Exact surviving authority boundary.** Both are structural, between domains or architectural elements. Neither establishes a dependency between items of operational work.
- **Unresolved semantic question.** Whether operational-work dependency is a distinct institutional concept or an application of the domain/architectural sense; and its direction, transitivity, and whether it may cross venture and function boundaries.
- **Relationships that must be defined.** Dependency to blocker (a dependency may or may not currently block); dependency to handoff.
- **Status/lifecycle questions.** Whether a dependency is satisfied, waived, or expired, and who determines that.
- **Authority/responsibility questions.** Who may assert a dependency across a boundary they do not own.
- **Historical/evidence requirements.** Whether satisfied dependencies are retained.
- **Must remain distinct from.** Blocker; handoff; domain dependency (S04); architectural dependency (S03).
- **Why Development cannot define it.** Extending a domain-level concept to operational work is an institutional-semantic act, not a technical mapping.

---

### 6. Handoff

- **Why Generation One requires it.** Cross-functional transfer of accountable work is named by the instrument as recurring evidence and must be representable.
- **Existing surviving authority.** OSPA S02 §2.7 establishes that authority and responsibility are **materially distinct** and independently identified. S01 §1.3 places "responsibility architecture" within OSPA's scope.
- **Exact surviving authority boundary.** Surviving text establishes what responsibility **is** and that it is not inferable from execution. It does not establish **transfer** of responsibility.
- **Unresolved semantic question.** What institutionally constitutes a handoff; whether it transfers responsibility, authority, both, or neither; whether it requires acceptance by the receiver to be effective; and what happens to an unaccepted handoff.
- **Relationships that must be defined.** Handoff to responsibility; handoff to authority; sender and receiver; handoff to the work transferred.
- **Status/lifecycle questions.** Offered, accepted, declined, completed, reverted — whether these are governed states and who may set them.
- **Authority/responsibility questions.** Whether a function may hand off responsibility it holds without the receiving function's consent, and whether authority ever transfers with it.
- **Historical/evidence requirements.** What evidence records that responsibility moved and when.
- **Must remain distinct from.** Delegation; assignment; dependency; notification.
- **Why Development cannot define it.** Transfer of institutional responsibility is precisely the kind of meaning OSPA Principle 4 reserves.

---

### 7. Deadline · 8. Renewal · 9. Follow-up

Grouped because they share an authority position, but each requires its own definition.

- **Why Generation One requires them.** Time-bound obligations are named by the instrument as recurring evidence, and real instances exist in current practice.
- **Existing surviving authority.** OSPA S10 §10.22 establishes **control trigger and frequency** — a control concept. S09 §9.5 establishes "Approval Expired," an approval-status value. S09 §9.10 establishes **Review Condition** and S10 §10.41 **Review History**, both for governed assets.
- **Exact surviving authority boundary.** Adjacent concepts exist for controls, approvals and asset review. None establishes a time-bound operational obligation attached to a live matter.
- **Unresolved semantic questions.** (7) What makes a date a **hard deadline** institutionally, and what passing it means. (8) What a **renewal** is as distinct from a repeating deadline or an expiring approval, and whether recurrence is intrinsic. (9) What a **follow-up** is as distinct from a review date and from a reminder, and whether it carries obligation.
- **Relationships that must be defined.** Each to the matter it constrains; renewal to the thing renewed; follow-up to what prompted it; all three to attention.
- **Status/lifecycle questions.** Whether passing a date changes state automatically — note OSPA S09 §9.23 transition non-propagation and §9.24 status inheritance prohibition constrain any automatic answer.
- **Authority/responsibility questions.** Who may set, extend, or waive each, and whether waiver is distinct from missing it.
- **Historical/evidence requirements.** Whether missed obligations are preserved as missed.
- **Must remain distinct from.** Each other; the S09 §9.10 review condition; control frequency (S10 §10.22); approval expiry (S09 §9.5); and the "Since Last Review" marker (concept 13).
- **Why Development cannot define them.** Each would encode an institutional obligation with consequences the corpus has not established.

---

### 10. Operational-instance identity

- **Why Generation One requires it.** Instances must be referable across time, correction, and any future repository or system change.
- **Existing surviving authority.** OSPA S04 §4.50 (domain identifier neutrality) and §4.54 / S09 §9.32 (technical metadata neutrality) constrain identifiers from encoding or implying classification or authority. FD-V2 establishes identifier-first governance identity: repository paths are locations, not identities.
- **Exact surviving authority boundary.** Constraints on what identity must **not** do. No positive identity model for operational instances.
- **Unresolved semantic question.** What institutionally identifies an operational instance; whether identity survives supersession and correction; and whether instances require institutional identifiers at all or only technical ones.
- **Relationships that must be defined.** Identity to supersession; identity to correction; identity to the asset or definition the instance realizes.
- **Status/lifecycle questions.** Whether identity persists across retirement and archival.
- **Authority/responsibility questions.** Who allocates identity — noting the corpus currently allocates all governed identifiers by human act.
- **Historical/evidence requirements.** Whether an identifier may ever be reused.
- **Must remain distinct from.** Repository path; database key; display label.
- **Why Development cannot define it.** Identity that survives institutional events is a governance question; a surrogate key is not an answer to it.

---

### 11. Operational-instance lifecycle · 12. Operational-instance transition semantics

- **Why Generation One requires them.** A live operational matter changes condition over time, and the capability must represent that without misrepresenting it.
- **Existing surviving authority.** OSPA S09 governs lifecycle and status for operational **assets and definitions**: independent dimensions (§9.2), status authority (§9.19), status evidence (§9.20), effective period (§9.21), transition definition (§9.22), transition non-propagation (§9.23), status inheritance prohibition (§9.24), correction and amendment (§9.25), conflict (§9.26), technical state-machine neutrality (§9.27), and the mandatory-state-machine prohibition (§9.28).
- **Exact surviving authority boundary.** Two Founder Office determinations bound this precisely (`fd-0011`). **S09 applicability:** surviving S09 vocabularies and dimensions "govern applicable objects" — with no universal status field, no universal lifecycle, no universal operational state machine, no collapsing of materially distinct dimensions. **Transition semantics:** "Do not infer a Generation One transition model from S09 §9.28"; any operational-instance transition model "must be established through new prospective doctrine compatible with surviving OSPA."
- **Unresolved semantic question.** (11) Which lifecycle dimensions, if any, apply to an operational instance, and what each means for an instance rather than an asset — S09 §9.3 and §9.30 require applicability to be established by the governing asset class, standard, or authority, and no such standard exists for instances. (12) What transitions exist, what conditions and evidence they require, and how a bounded transition model remains compatible with §9.27 and §9.28.
- **Relationships that must be defined.** Instance lifecycle to asset lifecycle — specifically whether any status of an asset propagates to its instances, which §9.23 and §9.24 forbid by default.
- **Authority/responsibility questions.** Per-dimension authority for instance status.
- **Historical/evidence requirements.** Whether instance status history is permanent and never overwritten, as asset status history is.
- **Must remain distinct from.** Asset lifecycle; governance status; readiness; execution.
- **Why Development cannot define them.** The Founder Office has expressly reserved this and forbidden inference from §9.28.

---

### 13. "Since Last Review" semantics

- **Why Generation One requires it.** Founder Office policy carried forward from the preceding Generation One instrument and recorded at `fd-0011` makes "Since Last Review" the **primary** change view. Its meaning determines whether the Founder can trust that nothing was silently omitted.
- **Existing surviving authority.** OSPA S09 §9.10 (Review Condition), §9.21 (Status Effective Period), S10 §10.41 (Review History) — all for governed assets.
- **Exact surviving authority boundary.** Review exists as a governed dimension and history class. No definition of a reviewer-scoped "everything since you last looked" boundary.
- **Unresolved semantic question.** What institutionally constitutes a **review event**; whether review is Founder-specific or Headquarters-global; and critically, whether a matter that **occurred** before the last review but was **recorded** after it must surface. This last is the failure mode the Founder cannot detect by inspection, because absence is invisible.
- **Relationships that must be defined.** Review event to the matters it covers; review to acknowledgment; review to attention disposition.
- **Status/lifecycle questions.** Whether reviewing changes any status of the reviewed matter — noting §9.23 and §9.24 constrain automatic answers.
- **Authority/responsibility questions.** Who may record a review event, and whether it can be recorded implicitly by an interface action.
- **Historical/evidence requirements.** Whether review events are permanent; how a corrected or late-entered matter is treated relative to a past review.
- **Must remain distinct from.** A follow-up or operational review date (concept 9); the S09 §9.10 review condition; acknowledgment; read state.
- **Why Development cannot define it.** Choosing which timestamp bounds the view determines what the Founder is shown and what is silently withheld — an institutional accountability decision, not a query predicate.

---

### 14. Minimal relationship context

- **Why Generation One requires it.** Operational matters may concern external parties, and context may be needed to interpret them.
- **Existing surviving authority.** None for operational relationship context. Founder Office policy carried forward from the preceding Generation One instrument and recorded at `fd-0011` provides that relationships remain owned by the applicable venture or function where one exists, and that Headquarters owns only genuinely corporate or unassigned relationships.
- **Exact surviving authority boundary.** An ownership rule exists. The concept it allocates does not.
- **Unresolved semantic question.** Whether Generation One requires a relationship concept **at all**, or whether the ownership rule alone suffices with relationships referenced by name. This should be tested against the report before any doctrine is drafted.
- **Relationships that must be defined.** Relationship to owning venture or function; relationship to the operational matter it contextualizes.
- **Authority/responsibility questions.** Who determines that a relationship is "genuinely corporate or unassigned."
- **Must remain distinct from.** CRM contact, account, deal, or pipeline — all explicitly excluded from the program.
- **Why Development cannot define it.** The prior question — whether it is needed — is a scope decision, and answering it by building is how CRMs appear where none was authorized.

---

### 15. Current-state ownership

- **Why Generation One requires it.** Headquarters maintains a representation of facts that source functions own. Without a defined ownership boundary, representation silently becomes a competing source of truth.
- **Existing surviving authority.** OSPA S02 §2.3 Principles 3 and 4, §2.7 (authority and responsibility distinct, not inferable from execution); S03 §3.24 (operational records are governed **representations** of approved operational subjects). Founder Office policy: source functions retain authority over their authoritative facts; Corporate Operations owns the Headquarters operational representation.
- **Exact surviving authority boundary.** The principle is established and is unusually well covered. What is not established is its **operational mechanics**.
- **Unresolved semantic question.** What Headquarters may do when its representation is wrong versus when the underlying fact is wrong; whether correcting a representation requires the source function's participation; and what obligation, if any, a source function has to keep Headquarters current.
- **Relationships that must be defined.** Representation to source fact; representation to the function that owns the fact; correction to amendment (S10 §10.35).
- **Authority/responsibility questions.** Whether Headquarters may ever refuse to represent a fact, and whether a source function may compel or block representation.
- **Historical/evidence requirements.** Whether superseded representations are retained alongside corrections.
- **Must remain distinct from.** Source-fact ownership; technical edit permission (ADR-0006: technical permission is never institutional authority).
- **Why Development cannot define it.** The mechanics allocate institutional accountability between functions.

---

## What Corporate Operations & Command Management is asked to produce

Prospective operational doctrine — provisionally titled **Corporate
Operations Semantics Foundation — Version 1** — resolving the concepts
above, subject to five standing constraints:

1. It is **new authority**, adopted prospectively. It must be clearly
   identified as such and **must never be represented as recovered OSPA**.
2. It must be **compatible with admitted canonical OSPA** (S01–S04, S09,
   S10), whose authority is limited strictly to its surviving text.
3. It must not reconstruct, infer, or paraphrase the permanently
   unavailable sections (S05–S08, S11–S15), nor draw their content from
   the derived `RS05-EV01` packet.
4. It must not create universal status fields, universal lifecycles, or
   universal operational state machines, and must not collapse materially
   distinct status dimensions (`fd-0011`).
5. It must not infer a transition model from S09 §9.28 (`fd-0011`).

Its reserved repository location is `institution/foundations/operations/`
(see that directory's `README.md`). Nothing has been drafted there.

**Sequence note.** Concepts 1, 3 and 15 are upstream of most others: an
operational instance must exist as a governed concept before its identity,
lifecycle and transitions can be defined; Founder Attention has no
surviving basis at all; and current-state ownership determines who may
assert anything the capability holds. Concept 2 (materiality) is what
separates the change view from the activity feed the program excludes.
