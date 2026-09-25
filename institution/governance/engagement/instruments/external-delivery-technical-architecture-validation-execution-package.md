<?xml version="1.0" encoding="UTF-8"?>
<claude_execution_package id="external-delivery-g1-technical-architecture-validation">

  <metadata>
    <authority>Huerta Group LLC Founder Office</authority>
    <receiving_function>Platform &amp; Systems Development</receiving_function>
    <execution_environment>Claude Code</execution_environment>
    <initiative>External Delivery — Generation One</initiative>
    <phase>Technical Architecture Validation</phase>
    <authorization>READ-ONLY VALIDATION ONLY</authorization>
    <implementation_authorization>NOT GRANTED</implementation_authorization>
    <candidate_repository>huerta-group-client-engagement</candidate_repository>
    <candidate_baseline>ab6d63ecbaedacbba31a20c5650db28862a6dfe3</candidate_baseline>
  </metadata>

  <mission>
    Validate, rather than repeat, the previously returned External Delivery — Generation One Technical Architecture.

    The prior execution path was procedurally incorrect: Founder Office submitted the technical-architecture handoff directly to Claude rather than routing it through Platform &amp; Systems Development.

    Claude nevertheless performed a read-only repository inspection and returned a detailed architecture.

    Treat that returned architecture as technical execution evidence.

    Do NOT redo the architecture merely because the routing path was incorrect.

    Independently validate its consequential claims and decisions against:
    - the accepted External Delivery Generation One Product Definition;
    - actual current repository truth;
    - existing Client Engagement authority semantics;
    - schema/RLS/provenance/append-only conventions;
    - migration and verification doctrine;
    - Founder Office's technical-architecture requirements.

    Return a Platform &amp; Systems Development validation determination suitable for Founder Office final technical acceptance and implementation authorization.

    DO NOT IMPLEMENT EXTERNAL DELIVERY.
  </mission>

  <candidate_architecture>
    The architecture under review reported:

    - repository:
      /Users/esteban/GitHub/huerta-group/huerta-group-client-engagement

    - branch:
      main

    - inspected HEAD:
      ab6d63ecbaedacbba31a20c5650db28862a6dfe3

    - inspected relationship:
      level with origin/main

    - no staged or unstaged changes;

    - four pre-existing untracked files that must remain untouched and uncommitted;

    - External Delivery placed within existing client_engagement schema as a logically distinct domain;

    - separate External Provider identity rather than treating client Organization/Person as provider identity;

    - optional same-party references to existing organization/person where the same real-world party is also represented in the client domain;

    - capability-specific evidence, evaluation and maturity;

    - append-only evidence/evaluation history;

    - current maturity and sourcing posture projected from evaluation history;

    - Implementation Scoping &amp; Sourcing attached to Possible Work / opportunity;

    - planning economics represented as non-accounting commercial-planning facts;

    - External Delivery Assignment attached to Engagement + Authorized Work;

    - assignment creation/execution eligibility based on existing engagement execution authority;

    - nine seeded readiness gates;

    - provider completion distinct from Huerta Group review and acceptance;

    - rework preserving history;

    - assignment performance creating Provider Evidence but not automatically changing maturity;

    - Headquarters-only RLS architecture;

    - two forward migrations;

    - BUILD01 record_class suite revision for provider as a second root identity;

    - three new pgTAP suites;

    - three authentic-shape synthetic probes;

    - no Client Platform, public website, QuickBooks, OSA, generalized procurement, provider portal, or other excluded-system expansion.
  </candidate_architecture>

  <source_of_truth_rule>
    The candidate architecture is evidence, not authority.

    Validate every consequential architecture decision against the actual repository.

    Repository truth governs technical claims.

    Accepted Founder Office product semantics govern product meaning.

    Do not silently change product doctrine to accommodate implementation convenience.

    Conversely, do not reject an implementation pattern merely because the Product Definition used conceptual language if the repository-grounded pattern preserves the accepted semantics more faithfully.
  </source_of_truth_rule>

  <preflight>
    Perform a fresh READ-ONLY repository inspection.

    Establish:
    - actual repository path;
    - branch;
    - full current HEAD SHA;
    - origin/main SHA;
    - ahead/behind relationship;
    - staged state;
    - unstaged state;
    - untracked files;
    - whether candidate baseline
      ab6d63ecbaedacbba31a20c5650db28862a6dfe3
      remains current or is an ancestor of current main.

    Do not:
    - modify files;
    - create files;
    - format files;
    - run migrations;
    - write manifests;
    - update generated artifacts;
    - commit;
    - push;
    - reset;
    - clean;
    - stash;
    - rebase;
    - start a development server;
    - contact Docker.

    Preserve the four known pre-existing untracked files unchanged.

    If additional unrelated worktree residue exists, record it but do not alter it.
  </preflight>

  <docker_boundary>
    Docker must remain OFF.

    Do not:
    - start Docker Desktop;
    - invoke docker;
    - invoke docker compose;
    - start local Supabase;
    - start local PostgreSQL;
    - start containers;
    - use any Docker-dependent verification path.

    Repository inspection and architecture validation must remain non-Docker.
  </docker_boundary>

  <validation_1_domain_placement>
    Independently validate the proposed decision:

    External Delivery records reside inside the existing client_engagement schema as a logically distinct bounded domain.

    Inspect:
    - repository schema-boundary doctrine;
    - ownership manifest;
    - migration-scoping verification;
    - FK boundary assertions;
    - PostgREST exposure assumptions;
    - force-RLS coverage;
    - no-DELETE coverage;
    - EB-07/search_path coverage;
    - BUILD01 coverage;
    - launch-readiness separation doctrine;
    - existing ADRs relevant to the hosted shared Supabase architecture.

    Determine whether placing External Delivery in a second schema would materially:
    - conflict with existing verification doctrine;
    - prevent enforceable FKs to Engagement/Authorized Work;
    - require new infrastructure/configuration;
    - reduce security verification coverage;
    - create unnecessary Generation One complexity.

    Determine whether the candidate's client_engagement placement remains semantically acceptable despite External Delivery being Huerta Group operating knowledge rather than client material.

    Explicitly distinguish:
    SCHEMA PLACEMENT
    from
    CLIENT OWNERSHIP / CLIENT VISIBILITY.

    Confirm that residing in client_engagement must NOT imply client access or client ownership of provider/network records.
  </validation_1_domain_placement>

  <validation_2_provider_identity>
    Independently assess the candidate decision to create a separate External Provider root rather than reuse organization/person directly.

    The accepted Product Definition required explicit evaluation of identity reuse and prohibited unnecessary duplication.

    Inspect existing semantics for:
    - organization;
    - person;
    - organization_person_relationship;
    - record_class;
    - client-grant RLS;
    - engagement relationships;
    - comments/documentation establishing client-world meaning.

    Determine whether organization/person are semantically client-domain identities such that using them as the canonical provider root would:
    - incorrectly expose provider identity through client-grant semantics;
    - conflate client relationship with delivery-provider relationship;
    - force providers into client-world assumptions;
    - make provider-only individuals/businesses unnatural or unsafe.

    Then validate whether the proposed model:

    external provider identity
    +
    optional same-party organization/person reference

    is the smallest faithful solution.

    Ensure same-party reference means only:

    "These two records represent the same real-world party in different institutional roles."

    It must NOT mean:
    - provider qualification;
    - provider/client authority inheritance;
    - shared RLS;
    - automatic capability;
    - automatic engagement access;
    - automatic sourcing eligibility.

    If a less duplicative faithful pattern exists in current repository architecture, identify it precisely.

    Do not redesign identity without repository evidence.
  </validation_2_provider_identity>

  <validation_3_record_class>
    Validate the proposed addition of record_class to provider as a second root identity.

    Inspect BUILD01 doctrine and the current BUILD01-07 assertion.

    Determine whether the underlying invariant is genuinely:

    classification belongs to root identity and is inherited/derived downstream

    rather than:

    organization must forever be the only table containing record_class.

    Validate whether provider is semantically a distinct root requiring independent authentic/synthetic classification.

    Validate:
    - write-once classification;
    - downstream inheritance;
    - authentic/synthetic non-mixing;
    - no unnecessary record_class proliferation.

    Determine whether revising BUILD01-07 to recognize provider as another legitimate root is:
    - a faithful doctrine extension;
    - a weakening;
    - or requires Founder-level institutional doctrine.

    Do not implement the revision.
  </validation_3_record_class>

  <validation_4_capability_evidence_maturity>
    Validate the proposed Capability Network architecture:

    provider
    →
    provider_capability
    →
    provider_evidence
    →
    provider_evaluation
    →
    projected current maturity/posture.

    Confirm preservation of:

    DISCOVERY ≠ QUALIFICATION

    EVIDENCE ≠ EVALUATION

    PROVIDER ≠ UNIVERSALLY PROVEN

    TESTED ≠ PROVEN

    ACTUAL USE ≠ AUTOMATIC MATURITY PROMOTION

    HISTORICAL EVIDENCE ≠ CURRENT POSTURE

    Validate capability-specific maturity:

    Discovered
    Evaluated
    Tested
    Proven

    Confirm reversibility through subsequent human evaluation.

    Validate the candidate proposal that provider_capability.maturity and sourcing_posture may be stored only as controlled projections of the latest append-only evaluation.

    Specifically determine whether this is consistent with repository precedent for:
    - append-only authoritative history;
    - controlled current-state projections;
    - transaction-local mutation guards;
    - provenance;
    - read performance without semantic duplication.

    If storing the projection creates avoidable dual truth, say so.

    If it is safe because the projection is mechanically pinned to history and direct mutation is refused, confirm that explicitly.
  </validation_4_capability_evidence_maturity>

  <validation_5_evidence_requirements>
    Validate the proposed evidence constraints:

    - Tested requires cited Huerta Group test evidence for the same provider capability.
    - Proven requires cited assignment-performance evidence from an accepted assignment for the same provider capability.
    - Lower maturity may be recorded with rationale.
    - Assignment-performance evidence does not itself change maturity.

    Determine whether this faithfully implements the accepted evidence-based maturity doctrine without creating an automatic scoring/ranking system.

    Validate whether a deferred constraint trigger modeled after existing finding/citation patterns is appropriate.

    Ensure:
    - one successful assignment does not imply universal provider quality;
    - Proven remains capability-specific and contextual;
    - later evaluation can reduce maturity;
    - historical evidence survives.
  </validation_5_evidence_requirements>

  <validation_6_scoping_attachment>
    Validate the decision to attach Implementation Scoping &amp; Sourcing primarily to Possible Work / opportunity, with optional later Engagement reference where faithful.

    Inspect:
    - opportunity semantics;
    - engagement establishment;
    - existing OSA scope/pricing attachment;
    - Commercial Proposal attachment;
    - existing opportunity→engagement relationships.

    Confirm that:
    - OSA is not required;
    - sourcing can occur pre-engagement;
    - sourcing may inform Commercial Proposal;
    - Commercial Proposal is not automatically created;
    - more than one contemplated implementation/scoping per Opportunity can legitimately exist if supported by product semantics.

    Evaluate the proposed rule that optional engagement_id, when present, must reference an Engagement originating from the same Opportunity.
  </validation_6_scoping_attachment>

  <validation_7_scoping_state>
    Validate the proposed persisted/derived scoping model:

    implementation_scoping
    scoping_requirement
    requirement_capability
    scoping_unknown
    candidate_consideration
    scoping_disposition

    with current_disposition as a controlled projection of append-only disposition history.

    Validate proposed dispositions:

    - being_scoped;
    - unresolved;
    - ready_for_commercial_decision;
    - paid_scoping_indicated;
    - do_not_pursue.

    Confirm these preserve:

    Commercial Readiness ≠ Commercial Proposal

    Paid Scoping Indicated ≠ paid work authorization

    Do Not Pursue ≠ generalized CRM stage

    Determine whether setting closed_at for paid_scoping_indicated is semantically correct.

    Specifically scrutinize this point.

    Paid scoping indicated may mean the current free/commercial scoping cannot responsibly proceed without separately authorized paid scoping; it does not necessarily mean the implementation matter itself is permanently closed.

    If candidate architecture's closed_at behavior could falsely imply terminal closure, require a bounded correction.

    Do not invent a new paid-scoping workflow.
  </validation_7_scoping_state>

  <validation_8_planning_economics>
    Validate the proposed representation of:
    - quoted_fee;
    - expected_external_cost;
    - expected_direct_cost;
    - quote validity/source;
    - planning_basis snapshot.

    Confirm these are legitimate operational/commercial planning facts and not QuickBooks accounting truth.

    Inspect repository money guards.

    Determine whether the proposed column names/types and verification exceptions can preserve:

    PLANNING ECONOMICS ≠ ACCOUNTING TRANSACTION

    Confirm External Delivery must not introduce:
    - bills;
    - expenses;
    - liabilities;
    - payments;
    - invoice state;
    - accounts payable;
    - accounting ledger;
    - QuickBooks duplication.

    Assess whether the proposed planning_basis snapshot is useful historical commercial-decision provenance without becoming a duplicate accounting record.
  </validation_8_planning_economics>

  <validation_9_delivery_method>
    Validate the proposed new execution_method vocabulary rather than reuse of existing delivery_method.

    Inspect existing delivery_method semantics.

    Confirm whether existing delivery_method means the mechanism by which a Deliverable reached a client.

    If so, validate that reusing it for execution architecture would be semantically incorrect.

    Required execution architecture must support:
    - Founder/internal;
    - AI/software-assisted internal;
    - external subcontractor;
    - hybrid;
    - client-retained provider coordination;
    - independently retained licensed/specialized professional;
    - unresolved.

    Confirm this remains bounded state rather than a standalone procurement subsystem.
  </validation_9_delivery_method>

  <validation_10_assignment_authority>
    Validate:

    External Delivery Assignment
    →
    existing Engagement
    +
    existing Authorized Work.

    Inspect:
    - engagement status semantics;
    - require_active_engagement();
    - authorized_work invariants;
    - authorizing Client Decision requirements;
    - closed-engagement mutation restrictions.

    Determine whether assignment creation must require:
    - referenced Authorized Work belongs to referenced Engagement;
    - Engagement is active at creation;
    - no new client authority is created.

    Validate candidate rule:
    - no assignment creation on closed engagement;
    - no execution advancement after closure;
    - cancellation remains available after closure to eliminate false executing state.

    Determine whether this is consistent with existing closure doctrine.

    Confirm assignment creation writes nothing to:
    - client_authority;
    - client_decision;
    - authorized_work;
    - hg_assignment;
    - engagement prerequisites.
  </validation_10_assignment_authority>

  <validation_11_readiness_gates>
    Validate the proposed nine assignment readiness concerns:

    1. underlying client authorization;
    2. client-side authority for the arrangement;
    3. provider-side contractual basis;
    4. confidentiality and data handling;
    5. IP and work-product chain;
    6. access controls;
    7. licensing and professional restrictions;
    8. assignment-specific scope;
    9. acceptance basis.

    Compare directly with the accepted Product Definition.

    Determine whether the candidate architecture faithfully represents these as readiness records without claiming legal sufficiency.

    Validate:
    - seeded at assignment creation;
    - default unresolved;
    - cannot be deleted;
    - cannot move between assignments;
    - established requires authoritative reference;
    - not_applicable remains possible where legitimate;
    - blocked is representable;
    - readiness is derived rather than stored.

    Scrutinize whether every "established" gate should universally require a textual authoritative_reference.

    If some gate categories can be established by authoritative state already directly linked in Headquarters, determine whether the implementation should permit a structured existing-record reference or derived basis rather than force free-text duplication.

    Recommend the smallest repository-consistent representation.

    Do not invent legal doctrine.
  </validation_11_readiness_gates>

  <validation_12_completion_review_rework>
    Validate the proposed separation:

    Provider completion
    ≠
    Huerta Group review
    ≠
    Huerta Group acceptance
    ≠
    Work Product
    ≠
    Deliverable
    ≠
    Client acknowledgement.

    Inspect existing Work Product and Deliverable semantics.

    Validate assignment event/history approach for:
    - provider completion;
    - review;
    - rework;
    - resubmission;
    - rejection/escalation;
    - cancellation.

    Confirm history remains durable.

    Determine whether the proposed state transition:

    rework_required → in_execution

    is semantically sufficient while append-only event history preserves the fact that completion/review/rework occurred.

    Confirm accepted output may only be linked into existing Work Product chain deliberately and cannot create Work Product automatically.
  </validation_12_completion_review_rework>

  <validation_13_performance_learning>
    Validate the proposed reuse of Provider Evidence for assignment-performance learning rather than creation of a second redundant Provider Performance universe.

    Confirm assignment-performance evidence can preserve:
    - requirement satisfaction;
    - quality/rework;
    - timeliness;
    - communication;
    - security/access compliance;
    - integration burden;
    - problems;
    - acceptance outcome;
    - would-consider-again posture.

    Confirm:
    - performance evidence can only be recorded after meaningful assignment review;
    - it is linked to the assignment and provider capability;
    - it does not automatically change maturity;
    - later human evaluation may cite it;
    - historical evidence remains immutable/correctable by successor evidence.

    Determine whether a separate Provider Performance Record table is unnecessary if Provider Evidence faithfully carries these semantics.
  </validation_13_performance_learning>

  <validation_14_rls>
    Independently validate the proposed RLS architecture.

    Network:
    - Founder Office controls writes;
    - provider identity/provider-capability may be readable by an internal operator only when an authorized Engagement assignment requires that context;
    - evidence/evaluation history remains more restricted.

    Scoping:
    - Founder Office write authority;
    - bounded read where an operator has legitimate Engagement relationship originating from the Opportunity, if repository semantics support it.

    Assignments:
    - engagement-grant-scoped internal operator access;
    - no client/client-platform access;
    - no public access.

    Validate that no proposed policy:
    - broadens client access;
    - weakens engagement isolation;
    - allows cross-client reads;
    - makes provider network generally visible to engagement-granted users;
    - permits evidence/evaluation leakage.

    Scrutinize whether provider_granted_read/provider_capability_granted_read should expose provider context to ANY engagement-granted operator merely because an assignment names that provider capability.

    Confirm the exact minimum provider fields required for assignment operation.

    Prefer least privilege.

    If full provider row access is unnecessary, require a bounded client-safe/internal-assignment projection or narrower policy rather than broad network disclosure.

    Do not implement.
  </validation_14_rls>

  <validation_15_provenance_append_only>
    Validate proposed provenance and history patterns against actual repository conventions.

    Confirm:
    - server-derived operator identity;
    - server-derived timestamps;
    - parent keys pinned where appropriate;
    - append-only evidence/evaluation/disposition/event history;
    - no DELETE;
    - correction by successor/correction record where appropriate;
    - no destructive rewriting of historical performance.

    Validate transaction-local controlled projection pattern against existing implementation precedent.

    Ensure every SECURITY INVOKER function preserves repository search_path doctrine.
  </validation_15_provenance_append_only>

  <validation_16_migration_plan>
    Validate the candidate two-migration recommendation.

    Candidate structure:
    1. vocabulary/types migration;
    2. records/tables/triggers/functions/policies/privileges migration.

    Determine whether this is consistent with repository migration doctrine.

    Verify:
    - no applied migration would be edited;
    - migrations remain client_engagement-scoped;
    - migration ledger expectations;
    - rollback/forward-only doctrine;
    - migration ordering;
    - manifest implications.

    Do not create migrations.

    If technical architecture would be safer with a different bounded migration split, identify it and why.
  </validation_16_migration_plan>

  <validation_17_verification_plan>
    Validate the proposed technical validation plan against current repository tooling.

    Confirm whether implementation should require:
    - force-RLS verification;
    - no-DELETE verification;
    - EB-07 search_path verification;
    - BUILD01 classification verification;
    - synthetic/authentic isolation;
    - read-contract coverage;
    - DENY BY DEFAULT migration scan;
    - ownership manifest regeneration;
    - pgTAP;
    - authenticated probes;
    - verify:full;
    - test:reads;
    - existing regression suite.

    Validate the proposed three probe groupings:
    - Capability Network;
    - Scoping &amp; Sourcing;
    - External Assignment.

    Probes must use synthetic/PLACEHOLDER fixtures.

    Authentic client/provider state must not be mutated for implementation validation.

    If the reported pre-existing cross-repository cp_material_retrieval_* verification defect still exists, confirm it independently and classify it as:
    - pre-existing;
    - outside External Delivery scope;
    - not to be repaired under this increment.

    Do not assume it still exists merely because the candidate report says so.
  </validation_17_verification_plan>

  <validation_18_operator_surfaces>
    Validate the proposed Generation One surfaces against current Headquarters IA.

    Candidate surfaces:
    - Capability Network;
    - Scoping &amp; Sourcing inside Possible Work;
    - External Assignments inside Engagement.

    Assess the proposed top-level "Network" destination carefully.

    Inspect current shell/navigation doctrine and current navigation state.

    Determine whether a new top-level destination is actually justified by:
    - durable cross-client provider knowledge;
    - authentic network development independent of an Opportunity;
    - repeated sourcing across matters.

    If yes, confirm the minimum appropriate label and placement based on current IA.

    If current IA supports a more coherent placement under Company or another existing destination without hiding first-class capability, identify it.

    Do not make an aesthetic preference decision.

    Ground the recommendation in current operator architecture.

    Validate contextual navigation:
    provider ↔ candidate ↔ requirement ↔ Possible Work;
    provider ↔ assignment ↔ Authorized Work ↔ Engagement.

    No provider marketplace, procurement center, or generalized project-management UI.
  </validation_18_operator_surfaces>

  <validation_19_generation_one_exclusions>
    Confirm architecture still excludes:

    - enterprise procurement;
    - public provider directory;
    - provider marketplace;
    - referral network;
    - TDD integration;
    - RFQ/RFP platform;
    - purchase-order system;
    - accounts payable;
    - provider invoicing/payment processing;
    - generalized contract management;
    - generalized project management;
    - workforce scheduling;
    - time tracking;
    - utilization planning;
    - automatic provider selection;
    - AI provider matching;
    - provider portal;
    - Client Platform changes;
    - CP-07;
    - public website changes;
    - OSA changes;
    - generalized ratings;
    - generalized workflow engine;
    - generalized DMS;
    - accounting integration;
    - invented sourcing SLA.

    Flag any candidate architecture element that unintentionally crosses one of these boundaries.
  </validation_19_generation_one_exclusions>

  <institutional_model_synchronization>

    <question>
      Resolve technically the candidate architecture's returned question:

      What institutional-repository change, if any, is required so the institutional model of record and the implementation repository remain coherent before External Delivery implementation?
    </question>

    <instruction>
      Inspect repository references to:
      - institutional model of record;
      - Client Engagement domain/model documentation;
      - canonical architecture/model documents;
      - repository README;
      - manifests/registries;
      - cross-repository authority statements;
      - any explicit rule that implementation must correspond to an admitted institutional model.

      If the authoritative institutional repository is locally available through the authorized Huerta Group repository structure, inspect only what is necessary to identify the required synchronization target.

      Do NOT modify it.
    </instruction>

    <required_determination>
      Identify exactly:

      1. whether the accepted External Delivery Generation One Product Definition constitutes a material institutional-model addition requiring authoritative admission before implementation;

      2. which existing institutional artifact/document/registry would require amendment or addition;

      3. whether the action is:
         - a new bounded domain-model record;
         - an amendment to an existing Client Engagement institutional model;
         - a registry/index update;
         - an architecture decision;
         - another existing repository-supported mechanism;

      4. the minimum content that must be admitted, by reference where possible;

      5. whether that synchronization must occur:
         - before implementation;
         - atomically with implementation;
         - or may occur after technical implementation but before acceptance.

      Do not invent a new governance mechanism if an existing one already exists.
    </required_determination>

    <founder_boundary>
      Do NOT perform the institutional admission.

      Do NOT decide a Founder-reserved institutional adoption question.

      Platform &amp; Systems Development should identify the exact required action and return it to Founder Office for disposition.

      If repository evidence shows no institutional-model change is actually required, state that with supporting repository basis.
    </founder_boundary>

  </institutional_model_synchronization>

  <implementation_baseline>
    Determine the implementation baseline from current repository truth.

    If:
    - current main remains exactly
      ab6d63ecbaedacbba31a20c5650db28862a6dfe3;
    - origin/main matches;
    - no relevant architecture-changing commits have intervened;

    confirm that SHA as the implementation baseline.

    If main has advanced:
    - report current full SHA;
    - determine whether the candidate architecture remains valid against it;
    - identify any material delta;
    - recommend current HEAD as implementation baseline only if validation remains sound.

    Never reset the repository back to the candidate baseline merely to preserve the prior report.
  </implementation_baseline>

  <final_bounded_implementation_scope>
    If architecture validates, return a precise future implementation scope for Founder authorization.

    It should identify, without implementing:

    1. exact bounded schema/domain additions;
    2. exact existing tables/semantics referenced but not modified;
    3. migrations required;
    4. BUILD01 revision if validated;
    5. RLS model;
    6. provenance/append-only model;
    7. capability maturity projection model;
    8. scoping/disposition model;
    9. readiness-gate model;
    10. assignment/event/review model;
    11. performance-evidence feedback;
    12. operator surfaces;
    13. navigation changes;
    14. guides/documentation;
    15. manifest/separation documentation;
    16. pgTAP additions;
    17. probe additions;
    18. read-contract additions;
    19. full regression requirements;
    20. synthetic-only implementation validation;
    21. institutional-model synchronization prerequisite or companion action.

    Explicitly state all exclusions.
  </final_bounded_implementation_scope>

  <decision_framework>
    Return exactly one architecture validation disposition:

    ACCEPTED AS RETURNED

    or

    ACCEPTED WITH BOUNDED CORRECTIONS

    or

    RETURNED — MATERIAL TECHNICAL CORRECTION REQUIRED

    or

    BLOCKED — FOUNDER / INSTITUTIONAL DETERMINATION REQUIRED

    Use ACCEPTED AS RETURNED only if no material or bounded architecture correction is required.

    Use ACCEPTED WITH BOUNDED CORRECTIONS when the core architecture is sound but specific implementation details must be corrected before implementation authorization.

    Do not treat wording improvements as architecture corrections unless they affect implementation semantics.
  </decision_framework>

  <required_return>
    Return one document titled:

    External Delivery — Generation One Technical Architecture Validation

    Include:

    1. Validation Disposition.

    2. Repository Validation Baseline.
       - path;
       - branch;
       - current HEAD;
       - origin/main;
       - relationship to candidate baseline;
       - worktree state;
       - four known untracked files status.

    3. Product-Definition Conformance.

    4. Schema / Domain Placement Validation.

    5. Provider Identity Validation.

    6. record_class / BUILD01 Validation.

    7. Capability / Evidence / Evaluation / Maturity Validation.

    8. Implementation Scoping &amp; Sourcing Validation.

    9. Commercial Planning / QuickBooks Boundary Validation.

    10. Delivery Method Validation.

    11. External Assignment / Authorized Work Validation.

    12. Nine Readiness Gates Validation.

    13. Provider Completion / Huerta Group Review / Rework Validation.

    14. Provider Performance Learning Validation.

    15. RLS / Least-Privilege Validation.

    16. Provenance / Append-Only Validation.

    17. Migration Doctrine Validation.

    18. Verification / Probe Plan Validation.

    19. Headquarters Operator-Surface / Navigation Validation.

    20. Generation One Exclusions Validation.

    21. Required Architecture Corrections.
        State NONE if none.

    22. Institutional-Model Synchronization Requirement.
        Identify exact artifact/action if repository evidence supports one.
        Do not perform the Founder-reserved action.

    23. Confirmed Implementation Baseline.

    24. Final Bounded Implementation Scope.

    25. Genuine Technical Blockers.
        State NONE if none.

    26. Recommendation to Founder Office.
        State whether External Delivery Generation One implementation can now be authorized, and identify any institutional synchronization action that must accompany or precede it.
  </required_return>

  <critical_review_points>
    Do not merely endorse the candidate architecture.

    Give special scrutiny to:

    - whether provider identity truly needs a separate root;
    - whether same-party references are safe;
    - whether client_engagement schema placement is correct;
    - whether record_class on provider faithfully extends BUILD01;
    - whether maturity/posture projection creates dual truth;
    - whether paid_scoping_indicated should really set closed_at;
    - whether planning economics evade or violate money guards;
    - whether nine gate references should always be free-text references;
    - whether provider rows should be broadly readable through engagement grants;
    - whether assignment cancellation after Engagement closure is consistent with closure immutability;
    - whether "Network" deserves top-level navigation;
    - whether two migrations are sufficient and repository-consistent;
    - whether institutional-model admission is a real prerequisite and, if so, exactly what artifact must change.

    Correct bounded technical issues now in the architecture determination.

    Do not defer obvious architecture defects into implementation.
  </critical_review_points>

  <security>
    Do not expose:
    - database URLs;
    - passwords;
    - Supabase service-role credentials;
    - admin keys;
    - tokens;
    - connection strings;
    - environment secrets.

    Do not print sensitive environment values.

    Do not use secrets in command arguments where an error could echo them.

    This phase should not require authenticated database mutation.
  </security>

  <no_implementation>
    This authorization is strictly read-only technical architecture validation.

    Do NOT:
    - create migrations;
    - modify BUILD01;
    - modify RLS;
    - create tables;
    - create enums;
    - create functions;
    - create routes;
    - create UI;
    - create guides;
    - regenerate manifests;
    - alter documentation;
    - commit;
    - push;
    - mutate hosted Supabase;
    - mutate authentic client state;
    - begin External Delivery implementation.

    Founder Office must issue implementation authorization after receiving this validation.
  </no_implementation>

  <required_conclusion>
    If architecture is technically sound and ready for Founder implementation authorization, conclude exactly:

    EXTERNAL DELIVERY GENERATION ONE TECHNICAL ARCHITECTURE VALIDATED — READY FOR FOUNDER IMPLEMENTATION AUTHORIZATION

    If architecture is sound only after bounded corrections, conclude exactly:

    EXTERNAL DELIVERY GENERATION ONE TECHNICAL ARCHITECTURE VALIDATED WITH BOUNDED CORRECTIONS — READY FOR FOUNDER IMPLEMENTATION AUTHORIZATION

    If a material technical problem requires architecture revision before implementation, conclude exactly:

    EXTERNAL DELIVERY GENERATION ONE TECHNICAL ARCHITECTURE REQUIRES REVISION — IMPLEMENTATION NOT YET RECOMMENDED

    If a Founder-reserved determination blocks implementation, conclude exactly:

    EXTERNAL DELIVERY GENERATION ONE TECHNICAL ARCHITECTURE BLOCKED — FOUNDER DETERMINATION REQUIRED: [precise issue]
  </required_conclusion>

  <final_instruction>
    Validate the prior Claude architecture rather than repeating it.

    Use current repository truth.

    Preserve the accepted External Delivery Generation One Product Definition.

    Independently test the consequential architectural decisions.

    Resolve technical questions within Platform &amp; Systems Development authority.

    Identify, but do not make, any Founder-reserved institutional-model admission.

    Return the exact institutional synchronization action required, if any.

    Do not implement External Delivery.

    Do not modify any repository.

    Keep Docker OFF.

    Preserve the four existing untracked files.

    Return a repository-grounded validation disposition, corrections, implementation baseline, synchronization requirement, final bounded implementation scope, blockers, and recommendation to Founder Office.
  </final_instruction>

</claude_execution_package>
