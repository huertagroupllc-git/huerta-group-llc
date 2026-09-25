# fd-0041 — Founder Office Determination: External Delivery — Generation One Admission and Implementation Authorization

**Classification: Institutional Record** — determination record (evidentiary,
non-governing). The record evidences the determinations; authority resides with
the Founder Office and the artifacts the determinations govern.

- **Instruments:** five, all Founder Office → Institutional Platform Development
  / Platform & Systems Development, all received 2026-09-24, preserved verbatim
  under `institution/governance/engagement/instruments/` (§5):
  1. *External Delivery — Generation One Headquarters Product Definition*
     (directive) — accepts the Corporate Operations & Command Management
     operating requirement for the External Delivery Capability Network &
     Implementation Scoping / Sourcing model and directs a product definition.
  2. *External Delivery — Generation One Headquarters Product Definition*
     (execution package, `PRODUCT DEFINITION ONLY`).
  3. *External Delivery — Generation One Technical Architecture* (directive)
     — accepts the product definition and authorizes bounded technical
     architecture definition against `huerta-group-client-engagement`.
  4. *External Delivery — Generation One Technical Architecture Validation*
     (execution package, `READ-ONLY VALIDATION ONLY`).
  5. *External Delivery — Generation One Institutional Admission and
     Technical Implementation* (execution package, `IMPLEMENTATION AUTHORIZED
     SUBJECT TO INSTITUTIONAL ADMISSION FIRST`).
- **Received:** 2026-09-24. **Recorded:** 2026-09-24.
- **Starting baseline (this repository):** `c6e3796`.
- **What is authorized:** admission of the External Delivery Generation One
  operating model into the institutional model of record as the [External
  Delivery Operating Standard](../../standards/engagement/external-delivery-operating-standard.md),
  and bounded technical implementation in `huerta-group-client-engagement`
  against application baseline `ab6d63ecbaedacbba31a20c5650db28862a6dfe3`, with
  corrections A–F controlling.
- **What is not authorized:** enterprise procurement · provider marketplace or
  public directory · referral network · Tucson Digital Deals integration ·
  RFQ/RFP · purchase orders · accounts payable · provider invoicing or payment
  · contract or project management · scheduling, time tracking or utilization
  · automatic or AI provider selection, matching or ranking · provider portal ·
  Client Platform, public website or OSA changes · generalized ratings, skills
  taxonomy, workflow engine or document management · accounting integration ·
  any sourcing service level · a new organizational function · a new
  institutional domain · a new schema or Supabase project.

## 1. What this record disposes of

| Matter | Disposition |
| --- | --- |
| The operating model | **Accepted** (§2.1) |
| The Generation One product definition | **Accepted** (§2.2) |
| The technical architecture | **Accepted with corrections A–F, which are authoritative** (§2.3) |
| Institutional classification | **Within existing client-delivery and operations architecture; no new domain or function** (§2.4) |
| Admission to the institutional model | **Admitted, as an operating standard, before implementation** (§2.5) |
| Implementation | **Authorized, bounded, subject to admission first** (§2.6) |
| Application architecture record | **ADR-0024 authorized** (§2.7) |

## 2. Determinations

### 2.1 FD-XD-1 — The operating model is accepted

*"Founder Office accepts the Corporate Operations & Command Management
operating requirement for the External Delivery Capability Network &
Implementation Scoping / Sourcing model."* (instrument 1). The model: three
layers — Capability Network, Implementation Scoping & Sourcing, External
Delivery Assignment — with Provider Performance Learning feeding the first;
external execution *"a normal delivery option, not an exception and not a
mandate"*; capability-specific maturity **Discovered → Evaluated → Tested →
Proven**, *"evidence-based, contextual and reversible"*; no scores, ratings,
badges or rankings.

### 2.2 FD-XD-2 — The product definition is accepted

*"Founder Office accepts the External Delivery — Generation One Headquarters
Product Definition"* (instrument 3). The accepted definition is preserved at
`institution/governance/engagement/external-delivery/generation-one-product-definition.md`.

### 2.3 FD-XD-3 — The technical architecture is accepted with six authoritative corrections

*"External Delivery Generation One Technical Architecture is ACCEPTED. The
following six corrections are authoritative and supersede conflicting details
from the earlier candidate architecture"* (instrument 5):

- **A.** Same-party references must preserve record-class consistency.
- **B.** Current provider-capability maturity, sourcing posture, and current
  scoping disposition are **derived** from authoritative history, never stored
  as duplicate projections.
- **C.** *Paid scoping indicated* does **not** close a scoping; only a terminal
  disposition such as *do not pursue* closes it.
- **D.** Six readiness concerns are persisted; underlying client
  authorization, assignment-specific scope and acceptance basis are derived
  from existing authoritative structures.
- **E.** Provider identity is separated from provider detail so
  engagement-granted reads expose only the minimum identity an assignment
  needs.
- **F.** The Headquarters destination is **Providers**, at `/providers`.

*"No further architecture cycle is authorized or required for A–F."* The
candidate architecture and its validation are preserved at
`institution/governance/engagement/external-delivery/`.

### 2.4 FD-XD-4 — Classification

*"External Delivery belongs within existing client-delivery-systems and
operations-systems architecture unless actual repository conventions
demonstrate otherwise. Do NOT create a new institutional domain merely because
External Delivery is new. Do NOT create a new organizational function."*
(instrument 5). Repository conventions demonstrate nothing otherwise: the
standard is placed beside the Client Engagement Operating Standard under
`institution/standards/engagement/`, which is where the client-delivery
operating doctrine already lives, and it operates beneath that standard.

### 2.5 FD-XD-5 — Admission to the institutional model

*"Admit the already-accepted External Delivery model into the institutional
repository using existing institutional-governance conventions … Application
implementation MUST NOT begin until … admission has been committed"*
(instrument 5). Admission is by the mechanism `fd-0037` used: a determination
record, a governing standard, the documentation index, the knowledge manifest,
and the determinations register. The standard *"must preserve the governing
model without importing unnecessary database/UI implementation detail"* and is
written accordingly.

### 2.6 FD-XD-6 — Implementation authorized, bounded

Implementation in `huerta-group-client-engagement` is authorized against
application baseline `ab6d63ecbaedacbba31a20c5650db28862a6dfe3` in the sequence
instrument 5 fixes, under its stated exclusions, with synthetic records only,
Docker never contacted, and the four pre-existing untracked application files
untouched. The completion evidence is returned to the Founder Office for
acceptance review; this record does not evidence acceptance of the
implementation.

### 2.7 FD-XD-7 — ADR-0024

Instrument 5 directs that ADR-0024 record the accepted technical decisions —
placement within the existing `client_engagement` schema as a logically
distinct bounded domain; External Provider as a second record-class root;
identity separated from detail; same-party references with class consistency;
execution method distinct from deliverable delivery method; capability-specific
evidence, evaluation and maturity; history as the source of current state;
extraction and separation implications. Per the ADR practice, ADRs live in this
repository under `institution/decisions/`; ADR-0024 is recorded there.

## 3. Application of `fd-0020` §2.4 to these instruments — recorded reading

Preserved on the reading recorded at `fd-0021` §3 through `fd-0037` §3. These
are the twenty-first through twenty-fifth preserved instruments, and the first
concerning external delivery capability. All five are preserved because the
corrections in instrument 5 supersede details in the architecture instrument
3 directed, and a later reader must be able to see the sequence — directive,
definition, directive, validation, authorization — as the Founder Office stated
it rather than as Development later summarised it.

## 4. Deficiencies recorded

**D1 — The accepted operating requirement is not in the repository.**
Instrument 1 accepts *"the Corporate Operations & Command Management operating
requirement for the External Delivery Capability Network & Implementation
Scoping / Sourcing model."* No document by that description exists in this
repository or in the Corporate Operations runtime repository; its substance is
known only as instrument 1 restates it. Recorded as absent. **Not
reconstructed.** The standard rests on the five preserved instruments, not on
the unlocated requirement.

**D2 — Routing deviation on instrument 3.** Instrument 4 records that *"the
prior execution path was procedurally incorrect: Founder Office submitted the
technical-architecture handoff directly to Claude rather than routing it
through Platform & Systems Development"*, and directs that the returned
architecture be treated as *"technical execution evidence"* and validated
rather than repeated. Recorded as the Founder Office recorded it; the
validation (instrument 4's return) is the cure, and its corrections A–F are the
accepted result.

## 5. Affected artifacts

- `institution/governance/engagement/instruments/external-delivery-product-definition-directive.md`
  — preserved instrument 1. SHA-256
  `012f9299b5934c44285353008f7f3ff0ed0efe2e9b15079afd2868f0b1a372d0`.
- `institution/governance/engagement/instruments/external-delivery-product-definition-execution-package.md`
  — preserved instrument 2. SHA-256
  `93dbbcf9ff0fe36331c8ebd908c3625e6cb26366d7fdec5db8e068df2f7e6e9a`.
- `institution/governance/engagement/instruments/external-delivery-technical-architecture-directive.md`
  — preserved instrument 3. SHA-256
  `6f35da38f025b56244b7a6172ccb36dd5cb8041ee321833329b99fb281791ca1`.
- `institution/governance/engagement/instruments/external-delivery-technical-architecture-validation-execution-package.md`
  — preserved instrument 4. SHA-256
  `fa3e0a01b1563e5f7ae36560a0040494a25ddf5f55a717ef64457ee8efc3227a`.
- `institution/governance/engagement/instruments/external-delivery-institutional-admission-and-implementation-execution-package.md`
  — preserved instrument 5. SHA-256
  `fa39379ea610932ff5090ec32e99171ee63fc60e24e6df49d66ff5ef4d74fbf8`.
  Each preserved text is the instrument as received with a trailing newline
  added; presentation is otherwise unaltered.
- `institution/governance/engagement/external-delivery/generation-one-product-definition.md`,
  `…/generation-one-technical-architecture.md`,
  `…/generation-one-technical-architecture-validation.md` — the three
  Development returns, preserved as derived records.
- `institution/standards/engagement/external-delivery-operating-standard.md`
  — created; the governing standard.
- `institution/decisions/adr-0024-external-delivery-generation-one-placement-and-representation.md`
  — created under §2.7.
- `institution/metadata/manifest.json`,
  `institution/metadata/registries/determinations-registry.json`,
  `institution/standards/repository/documentation-index.md` — updated.
- `institution/metadata/registries/capability-registry.json` — **not
  amended.** The registry maps capability domains and the validator requires
  the eighteen required domains exactly once; standards admissions have never
  amended it (`fd-0037` §5, `fd-0039`), and External Delivery is doctrine
  within the existing `client-delivery-systems` and `operations-systems`
  domains rather than a new one.
- **No application source, migration, infrastructure, website or Corporate
  Operations artifact is changed by this record.** Application implementation
  follows admission, in its own repository and commits.
