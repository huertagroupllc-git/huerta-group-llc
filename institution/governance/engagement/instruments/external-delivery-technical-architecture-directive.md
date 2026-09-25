Source: Founder Office
Receiving Function: Platform & Systems Development
Subject: External Delivery — Generation One Technical Architecture

Founder Office accepts the External Delivery — Generation One Headquarters Product Definition and authorizes bounded technical architecture definition against the existing huerta-group-client-engagement repository.

Do not implement code or migrations.

Objective

Determine the smallest technically coherent implementation that enables:

Capability Network → Implementation Scoping & Sourcing → External Delivery Assignment → Provider Performance Learning

while preserving all existing Client Engagement, Commercial Proposal, Work Product, Deliverable, Accounting and governance authority boundaries.

Repository-first requirement

Inspect the actual current repository and authoritative schema before proposing implementation.

In particular inspect and reconcile against existing:

* organization;
* person;
* opportunity / Possible Work;
* engagement;
* client_decision;
* authorized_work;
* work_product;
* deliverable;
* commercial_proposal;
* engagement_prerequisite;
* client_authority;
* record_class;
* provenance conventions;
* append-only conventions;
* RLS/access model;
* existing state/history patterns;
* existing Headquarters component and action/refusal doctrine.

Report exact baseline SHA and repository state.

Do not assume the product definition’s estimated table/enumeration count is technically optimal.

Provider identity

Preserve External Provider as a separate Headquarters-domain identity unless repository inspection establishes a semantically valid existing primitive.

Do not place external providers into client organization or person merely for implementation convenience.

Define the safest optional same-party relationship where a real-world provider is also represented in the client domain, without transferring client-scoped data or authority.

Capability and maturity

Architecture must preserve capability-specific:

* evidence;
* evaluation;
* maturity;
* sourcing posture.

Accepted maturity:

Discovered → Evaluated → Tested → Proven

Maturity changes only through an explicit evaluation act.

Proven must require evidence from relevant accepted external client delivery, not merely a test, portfolio, marketplace history or provider claim.

Later evaluation must be able to lower maturity without destroying prior history.

Determine whether current maturity/posture should be stored as controlled current-state projection, derived from latest evaluation, or another repository-consistent mechanism.

Evidence integrity

Provider Evidence and Provider Evaluation must preserve durable history.

Determine repository-consistent append-only/supersession enforcement.

A mistaken historical record must not simply disappear through ordinary UI editing.

Do not introduce a generalized document-management system.

Implementation Scoping & Sourcing

Architecture must support scoping originating from legitimate Possible Work without requiring an OSA.

Preserve:

* contemplated implementation outcome;
* requirements;
* required capabilities;
* delivery-method consideration;
* material unknowns;
* candidate providers;
* planning economics;
* dependencies/risks;
* delivery architecture;
* disposition history;
* elapsed-time derivation.

Accepted disposition semantics include:

* Being scoped;
* Unresolved;
* Ready for a commercial decision;
* Paid scoping indicated;
* Do not pursue.

Reconcile exact labels/state representation with existing repository conventions.

No state may automatically create a Commercial Proposal.

Where appropriate, provide deliberate navigation into the existing Commercial Proposal workflow.

Planning economics

Provider quotes and expected external/direct costs are planning facts only.

Do not create:

* vendor bills;
* expenses;
* liabilities;
* payments;
* client invoices;
* accounting actuals.

QuickBooks authority remains unchanged.

Architecture should preserve enough historical commercial basis to reconstruct what information supported a sourcing/commercial-readiness determination without pretending planning figures are accounting truth.

Delivery methods

Support at minimum:

* Founder/internal;
* AI/software-assisted internal;
* external subcontractor;
* hybrid;
* client-retained provider coordination;
* independently retained licensed/specialized professional;
* unresolved.

No default or automated selection.

External execution must be an ordinary first-class path.

External Delivery Assignment

An assignment must reference existing Authorized Work and its governing Engagement.

Do not independently interpret “active engagement” as a new lifecycle rule.

Instead inspect existing Client Engagement semantics and define the precise technical eligibility condition corresponding to:

External Delivery Assignment may exist only against Authorized Work presently eligible for execution under existing Client Engagement authority.

Assignment creation must not create or modify client authority.

Preserve bounded scope, delivery method, expectations, dependencies, acceptance basis, readiness gates, execution/completion/review history and resulting performance evidence.

Readiness gates

Define repository-consistent representation for the accepted readiness concerns:

* underlying client authorization;
* client-side authority for the delivery arrangement;
* provider-side contractual basis;
* confidentiality/data handling;
* IP/work-product chain;
* security/system/physical access;
* licensing/professional restrictions;
* assignment-specific scope;
* acceptance basis.

Unaddressed must not silently mean satisfied.

The software may record an operator’s asserted basis and reference. It must not claim legal sufficiency.

Determine whether established / unresolved / not applicable / blocked is consistent with existing prerequisite semantics or should reuse an existing vocabulary.

Execution and acceptance

Preserve the explicit chain:

Assignment prepared → readiness established → execution → provider completion → Huerta Group review → Accepted / Rework Required / Rejected or Escalated

The architecture may derive readiness from gate state.

All substantive execution/review transitions remain operator acts.

Review history must survive rework cycles.

Provider completion cannot automatically create:

* Huerta Group acceptance;
* Work Product;
* Deliverable;
* client acknowledgement.

Accepted external output may later be connected to the existing Work Product chain through existing authoritative acts.

Performance learning

Assignment experience must be capable of producing Provider Evidence associated with the relevant provider capability.

Do not automatically change maturity.

A subsequent explicit Provider Evaluation may cite that evidence and alter maturity/posture.

Surfaces

Define the minimum implementation for:

Capability Network — top-level Headquarters provider discovery/knowledge surface.

Scoping & Sourcing — contextual surface from Possible Work and, where legitimate, Engagement context.

External Assignment — contextual surface beneath the relevant Authorized Work / Engagement work area.

Preserve existing visual/component doctrine.

Do not design dashboards, marketplace UI, procurement UI or new generalized attention systems.

Access and RLS

Define explicit access behavior for:

* authentic versus synthetic records;
* provider/network records;
* scoping records;
* assignments attached to engagement-authorized work;
* same-party references.

Generation One is Headquarters-only. No client/provider access.

Do not weaken existing client confidentiality boundaries to make provider relationships easier to query.

Authentic-use validation

Technical architecture should support the eight accepted validation scenarios:

1. newly discovered freelancer;
2. Tucson business independently discovered through TDD relationship;
3. bounded non-client test;
4. straightforward implementation sourcing;
5. paid-scoping threshold;
6. hybrid delivery;
7. provider completion requiring rework;
8. successful external assignment producing reusable performance evidence.

Synthetic records may be used for technical probes where appropriate and must remain visibly synthetic.

Explicit exclusions

No:

* enterprise procurement;
* public provider directory;
* provider marketplace;
* referral system;
* Tucson Digital Deals integration;
* RFQ/RFP system;
* purchase orders;
* accounts payable;
* provider invoicing/payment processing;
* generalized contract management;
* generalized project management;
* workforce scheduling;
* time tracking;
* utilization planning;
* automatic provider selection;
* AI provider matching/ranking;
* provider portal;
* Client Platform/CP-07 changes;
* public website changes;
* OSA changes;
* generalized skills taxonomy;
* workflow engine;
* document-management system;
* accounting integration;
* sourcing SLA or turnaround promise.

Required return

Return to Founder Office with:

1. exact repository baseline and clean/divergence state;
2. existing primitives inspected and reusable patterns found;
3. proposed schema/domain placement;
4. minimum tables/relationships/enums or equivalent persisted structures;
5. persisted versus derived state;
6. invariants and database/application enforcement;
7. RLS/access model;
8. operator surfaces and navigation;
9. assignment eligibility rule grounded in existing Client Engagement semantics;
10. readiness-gate implementation;
11. evidence/evaluation/maturity implementation;
12. scoping/commercial-readiness implementation;
13. assignment/review/performance-learning implementation;
14. migration and compatibility implications;
15. technical validation/probe plan;
16. explicit confirmation that excluded systems remain untouched;
17. bounded implementation recommendation and estimated changed-file/migration surface.

Do not write code.

Return technical architecture to Founder Office for acceptance before implementation authorization.
