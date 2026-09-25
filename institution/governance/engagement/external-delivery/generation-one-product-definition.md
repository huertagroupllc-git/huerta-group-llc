# External Delivery — Generation One Headquarters Product Definition

**Classification: Institutional Record** — derived record (evidentiary,
non-governing). The Development return to the Founder Office's product
definition instrument, preserved as delivered on 2026-09-24 and accepted by the
Founder Office (`fd-0041`). The governing doctrine it produced is the
[External Delivery Operating Standard](../../../standards/engagement/external-delivery-operating-standard.md);
where this return and the standard differ, the standard is right.

**Status:** complete. No repository was modified and no code was written. Existing Headquarters primitives are referenced by their real names as read from the live Generation Two schema in `huerta-group-client-engagement`.

## 1. Product Purpose and Generation One Boundary

Headquarters gains one bounded capability: to know external delivery capability, to scope and source contemplated implementation, and to assign bounded authorized work to an external resource whose output Huerta Group reviews before it enters the governed client chain. The capability exists so the Founder can choose, case by case, not to execute personally, while every decision that matters stays a recorded human act.

Generation One is deliberately small. It records knowledge, decisions, and evidence. It automates nothing, ranks nothing, selects nothing, pays nothing, and creates no client authority.

## 2. Controlling Semantic Architecture

Four layers, each feeding the next by reference only:

1. **Capability Network** holds durable provider knowledge: identity, capabilities, evidence, evaluation, posture.
2. **Implementation Scoping & Sourcing** attaches to Possible Work (or an Engagement) and decomposes a contemplated implementation into requirements, delivery methods, candidates, economics, unknowns, and a commercial-readiness disposition.
3. **External Delivery Assignment** attaches to Authorized Work inside an active Engagement and connects one provider to one bounded component, with readiness gates, execution state, provider completion, and Huerta Group disposition.
4. **Provider Performance Learning** turns accepted or rejected assignments into Provider Evidence, which a deliberate evaluation may then use to move capability maturity.

Nothing transitions on its own. Sourcing readiness does not make a proposal. A proposal does not make an engagement. Authorized work does not make an assignment. Provider completion does not make acceptance. Acceptance does not make a work product. Assignment closure does not change maturity. Each arrow is an operator act.

## 3. Conceptual Record Determination

| Concept | Determination | Reason |
|---|---|---|
| External Provider | A. Persisted primitive | A counterparty of Huerta Group with its own lifecycle, independent of any client, opportunity, or engagement. |
| Provider Capability | B. Persisted relationship (provider × capability) carrying its own state | Maturity and posture are per capability, so the pair is the unit of truth, not the provider. |
| Provider Evidence | A. Persisted primitive (append-only) | Durable, historical, and referenced by evaluations, tests, and assignments; must outlive changes of posture. |
| Provider Evaluation | A. Persisted primitive (append-only, dated) | A distinct interpretive act by a named evaluator at a point in time; it must never overwrite evidence or earlier evaluations. |
| Implementation Scoping & Sourcing | A. Persisted primitive (the "scoping") | An opportunity-specific workspace with its own disposition and timestamps. |
| Implementation Requirement / Required Capability | C. Bounded child of the scoping; required capability is a relationship to the shared capability vocabulary | A requirement has no meaning outside its scoping; capability need is a link, not a second taxonomy. |
| Candidate Resource Consideration | B. Persisted relationship (requirement × provider capability) | Its whole meaning is "this provider, for this requirement", with a suitability posture and any quotation. |
| Delivery Method | C. Embedded enumerated state on the requirement and on the assignment | It describes execution architecture for one component; it is not a thing on its own. |
| External Delivery Assignment | A. Persisted primitive | A governed act with gates, execution state, review history, and disposition, bound to Authorized Work. |
| Provider Performance Record | E. No separate primitive; realised as Provider Evidence of type "assignment performance" linked to the assignment | One evidence universe. A second store for the same truth would fork history. |
| Provider-level posture | D. Derived, with one optional operator-written sourcing note | Any provider summary is computed from capability rows and must not obscure them. |
| Bounded non-client test | C. Embedded as Provider Evidence of type "test", carrying purpose, requirement, and result | A test is an evidence-producing act, not a workflow subsystem. |
| Readiness gates | C. Seeded rows on the assignment, one per gate category | Mirrors the existing prerequisite pattern: absence is a recorded "unresolved", never a missing row. |

## 4. External Provider Identity Model

**Reuse determination.** Existing `organization` and `person` are not reused as provider identity. The reason is semantic, not technical: those tables belong to the Client Engagement domain, and the schema states in its own words that the people in that database are the client's people. They sit inside the client-confidentiality and custody boundary. A provider is Huerta Group's counterparty, may have no client relationship at all, and must be visible across engagements. Putting providers into client identity tables would either leak client-scoped rules onto providers or weaken those rules for clients.

**Provider abstraction.** External Provider is therefore its own primitive in a separate bounded Headquarters domain, carrying the minimum identity: display name, provider type, contact channel(s) as known, location as known, and a free-text description. To avoid duplicate identity where a provider is also a client-side party (a Tucson business that is both a prospect and a possible provider), the provider carries an optional same-party reference to an existing `organization` or `person`. The reference records "same real-world party"; it transfers no client data, no authority, and no qualification in either direction.

**Provider types** (descriptive only): individual freelancer or independent specialist; business; agency; professional firm; other external delivery organization. Type establishes nothing about quality, preference, qualification, maturity, or approval, and no product logic reads it for those purposes.

**Incomplete records.** Every field except display name and discovery source is optional. Unknown is stored as absent and rendered as "not yet known", never as "none" or "no".

**Discovery provenance.** One required source (referral, personal relationship, Tucson Digital Deals participation, marketplace presence, internet research, prior operating relationship, direct outreach, other) plus a free-text provenance note and the recording operator and time. Provenance is a fact about how Huerta Group learned of the provider. It is displayed apart from capability and maturity and is never an input to either. Tucson Digital Deals participation is recorded as provenance text only; no TDD data is linked or synchronised.

**Record class.** Provider records reuse the existing `record_class` distinction (authentic versus synthetic exercise) so validation fixtures never masquerade as network knowledge.

## 5. Provider Capability Model

A **capability** is a named, described entry in one shared vocabulary maintained by Headquarters operators (for example "WordPress site build", "bookkeeping cleanup", "network cabling"). Generation One keeps this a flat, operator-curated list with a name, a description, and an active flag. No hierarchy, no skills taxonomy, no external standard.

A **provider capability** is the pair (provider, capability) and carries: how the capability became known (claimed by provider, observed, inferred); current maturity (see section 8); current sourcing posture (would consider, would not consider now, unresolved) with an optional dated note; and material unknowns text. A provider may hold many; the same capability may be held by many providers.

The distinction the package requires is preserved structurally: the capability *needed* lives on a requirement; the capability *held* lives on the provider-capability pair; the capability *established* lives in evidence and evaluation.

## 6. Provider Evidence Model

Provider Evidence is append-only. Each record holds: provider; capability where relevant (nullable, because some evidence is provider-wide); evidence type; context text; source or provenance; the observation or reference itself (text, or a pointer to an external location, never an uploaded document store); the date or time the evidence relates to; recording operator and recorded-at; and, where the evidence came from a Headquarters act, a reference to that act (test, quotation interaction, assignment).

Evidence types for Generation One: discovery or provenance; portfolio or work sample; reference; credential or licence information; bounded Huerta Group test; quotation or proposal interaction; prior operating observation; assignment performance; security or access behaviour; other.

Evidence is never edited or deleted. A mistaken record is superseded by a later record that says so. Evidence existence establishes nothing by itself; only an evaluation interprets it.

## 7. Provider Evaluation Model

An evaluation is a dated, signed interpretation of evidence for one provider capability. It records: the capability evaluated; the evidence considered (references to evidence records); the maturity determined; the sourcing posture determined; strengths; limitations; material unknowns; risk considerations; rationale; evaluator; and time.

Recording an evaluation is the only act that sets the current maturity and posture on the provider-capability pair; the pair's current values are a copy of the latest evaluation, and every prior evaluation remains readable. Evaluation is distinct from evidence: evidence is what was observed, evaluation is what Huerta Group concluded from it on a given day.

## 8. Capability-Specific Maturity

States, per provider capability: **Discovered → Evaluated → Tested → Proven**, plus **Unknown** for a capability the provider has not been characterised for at all.

- **Discovered**: the capability is claimed, observed, or inferred, and no evaluation exists.
- **Evaluated**: at least one evaluation exists, resting on non-assignment evidence (portfolio, reference, credential, quotation interaction, observation).
- **Tested**: an evaluation cites at least one bounded non-client test evidence record for this capability.
- **Proven**: an evaluation cites at least one accepted External Delivery Assignment performance evidence record for this capability, and concludes Proven.

**How maturity is determined.** Only by recording an evaluation. Evidence arriving, a test finishing, or an assignment being accepted never changes maturity on its own. The product may *suggest* that an evaluation is now warranted; it never performs it.

**Reversibility.** A later evaluation may set any lower state, and must give a rationale. History is intact because evaluations are append-only.

**Testing versus actual use.** A test is Huerta Group's own bounded exercise with no client and no deliverable; actual use is an assignment inside authorized client work. Only the latter can support Proven.

**Successful use is contextual.** A Proven determination is for one capability, in the contexts the cited assignments cover. Proven on one capability says nothing about any other capability of the same provider, and the product never aggregates capability states into a provider grade.

**Provider-level summary boundary.** A provider page may show a derived line such as "3 capabilities: 1 Proven, 1 Evaluated, 1 Discovered" and the operator's optional sourcing note. It computes from capability rows, stores nothing, and is prohibited from rendering as a score, rating, badge, or rank.

## 9. Capability Network Workflow

Discover → Record → Characterize → Gather Evidence → Evaluate → Optional Test → Actual Use → Learn is an operating progression the surfaces support, not a lifecycle the software enforces. A provider is recorded with a name and a source, and is immediately usable as a candidate in sourcing. Each later step is a separate operator act that adds a capability, an evidence record, an evaluation, a test, or an assignment. Any step may be skipped or repeated. The only ordering rule is evidential: Tested needs a test record, Proven needs an accepted assignment record.

## 10. Bounded Non-Client Testing

A test is recorded as Provider Evidence of type "bounded Huerta Group test" with three additional bounded fields: purpose, the bounded test requirement, and the observed result. It is capability-specific and dated. It creates no engagement, no authorized work, no assignment, no client authority, and no cost record beyond an optional expected-cost note. Its only downstream effect is that an operator may cite it in an evaluation, which may then set Tested. It cannot support Proven.

## 11. Implementation Scoping & Sourcing Model

A **scoping** is a workspace attached to exactly one Possible Work (`opportunity`) and optionally to an Engagement where the contemplated implementation arises inside existing authorized work. OSA is not a prerequisite; a scoping may open from any Possible Work regardless of whether an assessment exists or ever will.

The scoping holds: the contemplated implementation (name and description); the defined outcome; the material unknowns register; the delivery architecture statement (text, once determined); the commercial-readiness disposition and its rationale; and timestamps for opened, each disposition change, and closed. The workflow the package lists is a reading of these parts, not a stored stage. An operator may work them in any order and may return to any of them.

## 12. Implementation Requirement / Required Capability Model

A **requirement** is a bounded child of the scoping. It holds: required outcome or component; constraints; dependencies; material unknowns; candidate delivery methods (a set, since several may be contemplated); the selected delivery method once determined; external-resource need (needed, not needed, unresolved); sourcing status (not started, in progress, sufficient, unresolvable without paid scoping); expected economics where known (see section 16); risk and control considerations; and ordering within the scoping.

**Required capability** is a relationship from a requirement to one or more entries in the shared capability vocabulary of section 5, with an optional note. The same vocabulary serves both sides so that a candidate search is a plain join, not a mapping between two taxonomies.

The requirement is a child rather than an independent primitive because it has no identity or lifecycle apart from its scoping; deleting or closing the scoping closes its requirements.

## 13. Candidate Resource Consideration Model

Candidate consideration is a persisted relationship between one requirement and one provider capability. It carries: reason considered; current suitability posture (suitable, unsuitable, unresolved); material unknowns; quotation or economic information where obtained (amount, basis, date, validity, source text); risk and dependency observations; and a selection state (not yet determined, selected, not selected) with a dated reason.

Considering a provider qualifies nothing, assigns nothing, and selects nothing. Selection here means "the delivery architecture names this provider for this requirement", which still leads nowhere until authorized work exists and an assignment is recorded. A quotation interaction may, by an explicit operator act, also be recorded as Provider Evidence.

## 14. Delivery Method Model

Delivery Method is a bounded enumeration carried on each requirement (candidate set plus selected value) and on each assignment (the method under which the assignment executes):

- Founder or internal
- AI or software-assisted internal
- External subcontractor
- Hybrid
- Client-retained provider coordination
- Independently retained licensed or specialised professional
- Unresolved

It is a statement of contemplated or chosen execution architecture and nothing more. It confers no qualification, creates no assignment or authorization, and asserts no contractual sufficiency. External subcontractor and hybrid are listed and rendered exactly like the internal options; no confirmation dialogue or exception path attends them. The product never defaults a requirement to any method, never infers one from provider availability, and never proposes a provider.

## 15. Material Unknowns and Read-Fidelity Treatment

Unknowns are first-class at three levels: the scoping (unknowns about the implementation as a whole), each requirement, and each candidate consideration. An unknown record holds the question, its materiality (material to delivery architecture, material to commercial readiness, both, or informational), what would resolve it (provider research, professional scoping, client information, other), status (open, resolved), resolution text, and timestamps.

Read fidelity is applied throughout: an absent value renders as "not yet known"; an unresolved unknown renders as unresolved, never as a negative; a requirement with no candidates renders as "no candidates considered yet", never "no providers available"; a provider capability with no evidence renders as "no evidence recorded", never "no capability".

## 16. Sourcing Economics

Headquarters may record, per requirement and per candidate consideration: provider quotation (amount, basis such as fixed or hourly estimate, date, validity, source text); expected external cost; expected software or direct costs; and known delivery dependencies with cost implications. Each figure carries a "planning figure" designation and the date and source it rests on.

These are commercial planning facts. They are not bills, expenses, liabilities, payments, or invoices, and the product neither posts nor mirrors them anywhere. QuickBooks remains the only record of accounting truth. No accounts payable, vendor bill, payment, invoice, or synchronisation capability is defined.

**Historical preservation.** When a commercial-readiness disposition is recorded, the scoping snapshots the planning figures it rested on (as text and amounts, stamped with the disposition time) so that a later reader can reconstruct the basis of the Founder's decision even if quotations are later revised. The snapshot is labelled as planning basis, never as actuals.

## 17. Ordinary Proposal Work vs Paid Scoping

The substance test is carried verbatim into operator guidance: ordinary proposal development may include reasonable research, straightforward provider quotations, software-price checking, and similar work principally necessary to price understandable implementation; paid scoping is indicated when reliable pricing requires material professional analysis necessary to determine what the solution itself should be.

The product expresses this as one of the scoping dispositions, **Paid scoping indicated**, chosen by an operator with a required rationale that states which unknowns or requirements cannot be priced without professional analysis. No hour count, fee, dollar amount, complexity score, or formula is stored or computed, and nothing in the product suggests the disposition. Recording it creates no engagement, proposal, authorized work, or client acceptance; it simply records that the path forward, if any, is a separately authorized paid scoping engagement through the existing Commercial Proposal and Engagement machinery.

## 18. Commercial Readiness Model

Dispositions on the scoping, in operator language:

- **Being scoped** (default on open)
- **Unresolved** — material unknowns or unsourced requirements remain
- **Ready for a commercial decision** — sufficient information exists for the Founder to decide
- **Paid scoping indicated**
- **Do not pursue**

Each disposition change records who, when, and why, and the prior dispositions remain readable. **Ready** is a sourcing determination only. It is not a Commercial Proposal, not Founder approval, not client acceptance, and not implementation authorization. From Ready, the surface offers one deliberate link: "Prepare a commercial proposal", which opens the existing Commercial Proposal path on the same Possible Work with the scoping available for reference. Nothing is generated or pre-filled without the operator, and the proposal's lifecycle, presentation, response, supersession, and provenance remain wholly within the existing `commercial_proposal` primitive.

**Timestamps.** Opened, every disposition change, and closed are stamped. Elapsed sourcing time is derivable later from these. No target, expected duration, or SLA is stored or displayed.

## 19. External Delivery Assignment Model

An assignment binds one provider capability to one bounded component of one Authorized Work inside one Engagement. It cannot be created against a Possible Work, a proposal, or an engagement that is not active; it references `engagement`, `authorized_work`, and optionally the scoping requirement it fulfils.

It carries: bounded scope text (what exactly is assigned); delivery method; assignment-specific expectations; dependencies and constraints; acceptance basis (section 21); readiness gates (section 20); execution state (below); provider-completion events; Huerta Group review events and disposition; and provenance timestamps for every act.

Execution states: **Prepared** (recorded, gates not all resolved) → **Ready** (all gates established or not applicable) → **In execution** → **Submitted for review** (provider completion recorded) → one of **Accepted**, **Rework required** (returns to In execution), **Rejected or escalated**; plus **Cancelled** from any pre-acceptance state with a reason. Ready is the only state the product computes, from the gate rows; every other transition is an operator act.

## 20. Pre-First-Client-Execution Readiness Gates

Every assignment is seeded at creation with one row per gate category, following the existing engagement-prerequisite pattern so that "not yet addressed" is a recorded state rather than a missing row:

underlying client authorization; client-side authority to use the delivery arrangement; provider-side contractual basis; confidentiality and data handling; IP and work-product chain; security, system, or physical access controls; licensing or professional restrictions; assignment-specific scope; acceptance basis.

Each gate row holds a basis using the existing vocabulary extended by one value: **established**, **unresolved**, **not applicable**, **blocked**; an authoritative reference (free text pointing at the record, instrument, or authority that establishes it, such as the engagement's `client_authority` row, a counsel-held agreement, or an Administration & Compliance record); a note; and who and when. Establishing a gate requires a reference, as prerequisites require evidence.

The product surfaces gate status; it does not adjudicate it. The gate rows say where Huerta Group believes the basis lies, and that a named operator recorded it. They do not and cannot establish legal sufficiency, which remains with counsel, Administration & Compliance, and the Founder Office.

## 21. Provider Completion and Huerta Group Acceptance

**Provider completion** is an event recorded by the operator on the provider's behalf: the provider represents the bounded assigned work as complete and submitted for review, with a date, a note, and a pointer to where the output can be inspected. It moves the assignment to Submitted for review and means nothing else.

**Acceptance basis** is a text statement recorded on the assignment before Ready: what Huerta Group will check to decide whether the output meets the assigned requirement. It is proportionate by design, from one sentence for a simple task to a short checklist for a larger one. Nothing more elaborate is required or provided.

**Huerta Group disposition** is recorded per review: **Accepted**, **Rework required**, or **Rejected or escalated**, with the reviewer, the time, and the reasoning against the acceptance basis. No fourth state is added.

## 22. Rework / Rejection / Escalation Treatment

Reviews are append-only events on the assignment. A rework cycle is therefore: completion event → review event (Rework required, with the deficiency) → assignment returns to In execution → new completion event → new review event → final disposition. Nothing is overwritten; the assignment page shows the sequence. Rejected or escalated records the reason and, where relevant, the authority the matter was escalated to, and the assignment leaves execution. This is the whole of Generation One's history model: no issue tracker, no defect taxonomy, no ticket states.

## 23. Relationship to Work Product and Deliverable

Acceptance changes nothing in the client chain by itself. When Huerta Group wishes accepted external output to become part of client work, the operator uses the existing acts: the material enters custody under the existing custody rules, and a `work_product` is recorded against the same `authorized_work`, which may then become a `deliverable` and be acknowledged, exactly as internal work does. The assignment carries an optional reference to the resulting work product for traceability. External Delivery never writes to `work_product`, `deliverable`, or custody tables and never duplicates their semantics.

## 24. Provider Performance Learning

After a final disposition, the operator may record one **assignment performance** evidence record for the provider capability used, referencing the assignment. Its bounded observation fields: requirement satisfaction; quality and rework (with the count of review cycles derived from the assignment); timeliness against the assignment's expectations; communication; security and access compliance; integration burden on Huerta Group; problems; the acceptance outcome (derived); and whether Huerta Group would consider the provider again for this capability, as a dated posture, not a grade.

This record is ordinary Provider Evidence, so it is durable and sits beside every other evidence type. It changes no maturity. The provider capability page then shows "new evidence since last evaluation", and an operator may record an evaluation that cites it and, if warranted, sets Proven, or lowers the state. The loop is: Assignment → Huerta Group disposition → performance evidence → evaluation → maturity, with a human act at each step.

## 25. Existing Headquarters Integration

| Existing primitive | Relationship | Never |
|---|---|---|
| `organization`, `person` | Optional same-party reference from External Provider | Provider identity stored in them; client data read across |
| Possible Work (`opportunity`) | Parent of a scoping | A scoping standing in for an opportunity, or creating one |
| `engagement` | Required parent of an assignment; optional context of a scoping | External Delivery creating or activating one |
| `client_decision` | Referenced only indirectly through the authorized work it authorized | External Delivery recording a decision |
| `authorized_work` | Required parent of an assignment | An assignment substituting for authorization |
| `work_product`, `deliverable` | Optional forward reference from an accepted assignment | Written by External Delivery |
| `commercial_proposal` | Reachable from a Ready scoping by a deliberate link | Generated, pre-filled, or lifecycle-managed by sourcing |

External Provider ≠ client organization; candidate consideration ≠ Possible Work; sourcing readiness ≠ Commercial Proposal; External Assignment ≠ Authorized Work; provider output ≠ Work Product; provider completion ≠ Deliverable; Huerta Group acceptance ≠ client acknowledgement.

## 26. Principal Headquarters Operator Surfaces

Three surfaces, in the existing state-first, facts-second, governance-on-demand doctrine, using the existing `Facts`, `Recording`, `RecordAction`, and `Explain` components. No dashboards, card grids, or new attention surfaces.

1. **Capability Network** (a new top-level Headquarters entry beside Organizations and Possible Work): a provider list with plain filters by capability and maturity, and a provider page with identity and provenance, capabilities with per-capability maturity and posture, the evidence log, the evaluation history, and recording actions for each.
2. **Scoping & Sourcing** (a section within the Possible Work page, and, where applicable, the Engagement page): outcome, requirements with required capabilities and delivery methods, unknowns, candidates with quotations, economics, delivery architecture, disposition history, and the single link to the Commercial Proposal path.
3. **External Assignments** (a section within the Engagement's Decisions & Work area, under the relevant Authorized Work): what authorized work this supports, who is assigned and for what capability, bounded scope, gate status, execution state, completion and review history, disposition, and the performance-evidence action after closure.

## 27. Navigation and Operator Workflow

Every reference is a link in both directions: provider ↔ candidate consideration ↔ requirement ↔ scoping ↔ Possible Work; provider ↔ assignment ↔ Authorized Work ↔ Engagement; evidence ↔ the test or assignment that produced it. Subordinate operations are performed where they are authoritative: authorized work in the Engagement, proposals in Possible Work, custody in the engagement's files. External Delivery surfaces link there and do not re-implement them.

## 28. Authorization / Governance Boundaries

- **Client Engagement** remains authoritative for engagement, client authority, decisions, authorized work, work product, deliverable, acknowledgement, and closure; External Delivery only references them and can never satisfy an activation prerequisite.
- **Corporate Operations** owns the operating requirement this product serves and any process rules around it.
- **Administration & Compliance** owns the administrative and compliance records that gate rows point to.
- **Accounting / QuickBooks** owns all bills, expenses, liabilities, payments, and invoices; sourcing figures are planning facts only.
- **Counsel** owns legal sufficiency; the product records references and status, not doctrine, and invents no subcontract, IP, confidentiality, licensing, or professional-restriction language.
- **Founder Office** retains the commercial decision, paid-scoping authorization, and any reserved determination; the product prepares information and records the outcome.

Access: Capability Network and scoping records are Headquarters records readable by Headquarters operators; assignment records inherit the engagement's existing access rules because they sit inside it. No client or provider has access to any of it in Generation One.

## 29. Authentic-Use Validation

1. **Newly discovered freelancer.** Record a provider with a name, type "individual freelancer", source "referral" and a provenance note; add one capability as Discovered with rate and location left unknown. The page shows "not yet known" for absent fields and no maturity above Discovered; the provider is immediately available as a candidate.
2. **Tucson business independently of TDD.** Record a provider of type "business" with source "Tucson Digital Deals participation" and, if the business is also a prospect, a same-party reference to its `organization`. Provenance shows on its own line; capabilities begin at Discovered; evidence and evaluation are added on their own merits. Nothing from TDD is read or implied.
3. **Bounded non-client test.** For one capability, record a test evidence record with purpose, bounded requirement, and observed result; record an evaluation citing it that sets Tested. No engagement, assignment, or client authority exists; Proven is unavailable because no accepted assignment evidence exists.
4. **Straightforward implementation sourcing.** Open a scoping on a Possible Work; one requirement, required capability, candidate methods "external subcontractor" and "hybrid"; one candidate with a quotation and expected external cost; software cost noted; two unknowns resolved; disposition "Ready for a commercial decision" with the planning basis snapshot. No accounting record exists anywhere.
5. **Paid-scoping threshold.** A scoping whose requirements cannot be priced until the solution itself is determined: unknowns marked "requires professional scoping"; disposition "Paid scoping indicated" with rationale. No proposal, engagement, or authorized work is created, and no hour or fee figure appears.
6. **Hybrid delivery.** A scoping with three requirements: one Founder/internal, one AI or software-assisted internal, one external subcontractor with a candidate; delivery architecture text states how they fit; the scoping shows three different methods with no universal default.
7. **Provider completion requiring rework.** An assignment on active authorized work with all gates established; completion recorded; review "Rework required" with the deficiency; second completion; review "Accepted". The page shows both cycles, and the performance evidence records two review cycles.
8. **Successful external client assignment.** Gates established with references; assignment Ready; In execution; completion; Accepted; the operator records a work product against the same authorized work through the existing act and links it from the assignment; performance evidence recorded; an evaluation citing it sets Proven for that capability only.

All eight run on authentic records or on records marked synthetic exercise; no synthetic procurement environment is needed.

## 30. Generation One Explicit Exclusions

Enterprise procurement; public provider directory; provider marketplace; referral network; Tucson Digital Deals integration; RFQ or RFP platform; purchase orders; accounts payable; provider invoicing or payment processing; contract management; project management; workforce scheduling; time tracking; utilization planning; automatic provider selection; AI provider matching or ranking; provider portal; Client Platform changes; CP-07; public website changes; OSA changes; scoring or rating platform; generalized skills taxonomy; workflow engine; document management; QuickBooks synchronisation; any SLA or turnaround target; any automatic state transition beyond computing Ready from gate rows.

## 31. Persisted vs Derived State Matrix

| State | Persisted | Derived |
|---|---|---|
| Provider identity, type, provenance | ✓ | |
| Capability vocabulary | ✓ | |
| Provider capability, current maturity and posture | ✓ (copied from latest evaluation) | |
| Provider-level summary line | | ✓ |
| Evidence (all types, including tests and performance) | ✓ append-only | |
| Evaluation history | ✓ append-only | |
| "New evidence since last evaluation" | | ✓ |
| Scoping, requirements, unknowns, candidates, quotations | ✓ | |
| Disposition history and planning-basis snapshot | ✓ | |
| Elapsed sourcing time | | ✓ |
| Assignment, scope, method, acceptance basis, expectations | ✓ | |
| Gate rows | ✓ | |
| Assignment "Ready" | | ✓ from gate rows |
| Completion and review events | ✓ append-only | |
| Current execution state | ✓ (operator act) except Ready | ✓ Ready |
| Review-cycle count | | ✓ |

## 32. Schema / Migration Determination

New persisted state is necessary. No existing primitive can hold provider identity (client-domain tables are semantically wrong for it), capability-specific evidence and evaluation, opportunity-scoped sourcing with its own disposition history, or an assignment with gates and review events. The expected additions are: External Provider; capability vocabulary; provider capability; provider evidence; provider evaluation (with an evidence-cited junction); scoping; requirement (with required-capability junction); unknown; candidate consideration; assignment; assignment gate; assignment event (completion and review). Delivery method, evidence type, gate basis, disposition, and execution state are bounded enumerations. Provider-level summary, Ready, elapsed time, and review counts are derived.

Domain placement: the Capability Network and scoping belong in a bounded Headquarters domain separate from `client_engagement`, because they carry no client material and must be readable across engagements; the assignment references `client_engagement.engagement` and `authorized_work` and should follow the engagement's access rules. Whether the assignment table lives in the engagement schema or the new domain with a cross-schema reference is a repository-grounded decision reserved for Platform & Systems Development, as is the exact treatment of append-only enforcement, provenance triggers, row-level security, and the same-party reference. No SQL is proposed here.

## 33. Genuine Product/Semantic Blockers

NONE.

## 34. Bounded Technical Implementation Recommendation

After Founder acceptance, route to Platform & Systems Development one increment scoped as follows, in `huerta-group-client-engagement`:

1. **Inspect** the existing `organization`/`person` confidentiality and RLS rules, the `engagement_prerequisite` and `client_authority` patterns, `record_class`, `commercial_proposal`, and the seam and chronology conventions, and decide schema placement for the three layers as section 32 describes.
2. **Persist** the twelve records and five enumerations of section 32 as forward migrations, append-only where stated, with provenance set by trigger, gate rows seeded on assignment creation, Ready computed and never stored, and assignment creation refused unless the referenced authorized work belongs to an active engagement.
3. **Build** the three surfaces of section 26 in the existing component doctrine, with refusals returned in the gate's own words and no `required` inside disclosures.
4. **Validate** with pgTAP suites for the invariants (no automatic transitions, append-only evidence and evaluations, Proven requires accepted-assignment evidence, assignment requires active authorized work, no delete anywhere) and a probe exercising the eight scenarios of section 29 against synthetic-exercise records.
5. **Exclude** everything in section 30, any QuickBooks touchpoint, and any change to Client Platform, the website, or OSA.

EXTERNAL DELIVERY GENERATION ONE PRODUCT DEFINITION COMPLETE — READY FOR FOUNDER ACCEPTANCE AND TECHNICAL ROUTING
