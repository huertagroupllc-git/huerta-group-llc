# FD-V7 Evidence Package — Surviving Recovered OSPA Sections

**Classification: Institutional Record** — evidence package
(evidentiary, non-governing).

- **Purpose:** assemble the repository evidence the Founder Office needs
  to determine the standing and canonical-admission treatment of the
  surviving recovered Operating Systems & Process Architecture
  Foundation v1 (OSPA) sections.
- **Prepared under:** `fd-0010`.
- **Recorded:** 2026-08-18.
- **Disclosure:** repository-internal.

> **DISPOSED — FD-V7 HAS BEEN MADE (`fd-0011`, 2026-08-18).** The Founder
> Office admitted sections S01–S04, S09 and S10 as recovered canonical
> authority, **limited strictly to their surviving text**; confirmed
> S05–S08 and S11–S15 as permanently unavailable and never to be
> reconstructed or inferred; and confirmed `RS05-EV01` as derived evidence
> that is not canonical OSPA authority.
>
> **This package is retained unaltered below as the evidence record that
> preceded the determination.** It is historical: statements in it that
> FD-V7 is "reserved", "unmade", or that the material is "not admitted"
> describe the pre-determination state and are no longer current. The six
> sections have also **moved** — they now live at
> `institution/foundations/operations/`, not the `workbench/` paths cited
> in §1 and §3. Current authority, scope, integrity and provenance are
> recorded at
> `institution/foundations/operations/ospa-foundation-v1-admission-and-provenance.md`.
> See §9 for the disposition of each question this package raised.

## 1. Recovered surviving sections

| Section | Title (as transmitted) | Path |
| --- | --- | --- |
| S01 | Definition, Scope, and Institutional Authority | `workbench/ospa-reconstruction/OSPA-FND-V1-S01.md` |
| S02 | Operational Doctrine | `workbench/ospa-reconstruction/OSPA-FND-V1-S02.md` |
| S03 | Operating Architecture | `workbench/ospa-reconstruction/OSPA-FND-V1-S03.md` |
| S04 | Operational Domains and Hierarchy | `workbench/ospa-reconstruction/OSPA-FND-V1-S04.md` |
| S09 | Operational Lifecycle and Status | `workbench/ospa-reconstruction/OSPA-FND-V1-S09.md` |
| S10 | Controls, Evidence, and Auditability | `workbench/ospa-reconstruction/OSPA-FND-V1-S10.md` |

Byte-level integrity for each is recorded in
`workbench/ospa-reconstruction/SHA256SUMS` and verifiable with
`shasum -a 256 -c SHA256SUMS`.

**Derived material, not source.** `OSPA-FND-V1-RS05-EV01-verified-canonical-evidence-packet.md`
is a *derived verified evidence packet* for Section 5 reconstruction
planning (`fd-0003`). It is **not** canonical source, is **not** eligible
for admission as canonical source, and must remain distinguishable from
source (canonical-source-preservation §2). It is corrected by its sources
wherever they disagree. It must not be used to supply Section 5 wording.

## 2. Recognition and provenance

**Evidenced:**

- **`fd-0003`** recognizes the OSPA canonical recovery set (S01, S02,
  S03, S04, S09, S10) as recovered canonical sources; identifies
  `RS05-EV01` as "a derived verified evidence packet [that] must remain
  distinguishable from canonical source"; and prohibits inferring
  Sections 5–8 and 11–15 or representing unavailable text as recovered
  canonical source.
- **`fd-0002` D-3** establishes the staging architecture: "Establish a
  repository staging/workbench architecture outside the governed
  canonical corpus… OSPA recovered canonical documents remain
  institutionally recognized. Missing sections shall not be
  reconstructed."
- **`fd-0001` determination 1** ("OSPA reconstruction working documents
  remain untracked working material and shall not be committed") — see
  `fd-0010` Deficiency 1 for its unresolved relationship to the custody
  action.
- **`fd-0004`** records Operating Systems & Process Architecture
  Foundation v1 approval within the deliverable acceptance history, and
  records open approval-provenance deficiencies.
- The accepted **Corporate Venture Governance Phase 1 Blueprint**
  describes OSPA as "the approved operational-semantics baseline,"
  inherits its semantics as an approved input, and records **FD-V7** as
  the reserved determination for "OSPA Foundation admission to the
  canonical corpus (recovered sections S01–S04, S09, S10)."

**Not evidenced — recorded as deficiency, not inferred:** the original
transmission channel, transmission date, authorship chain, and recovery
method of the recovered set; and the circumstances of the loss of the
unavailable sections.

## 3. Current repository status — custody, not admission

| Concept | Current state |
| --- | --- |
| Custody / preservation | **Preserved.** Tracked in version control under `fd-0010`; byte identity verified against the working-machine source. |
| Source provenance | **Partially evidenced.** See §2, including recorded deficiencies. |
| Integrity verification | **Established.** SHA-256 per artifact in `SHA256SUMS`. |
| Canonical-admission status | **Not admitted.** Reserved to FD-V7. |
| Institutional-authority status | **Recognized as recovered canonical source (`fd-0003`); not corpus-admitted.** Usable as an approved semantic input only. |

The admission path, if FD-V7 admits: verified provenance → Founder Office
admission determination recorded in the register → verbatim preservation
at a canonical path with its header → manifest and registry entries →
passing verification gate, **all in one change**
(`institution/standards/repository/canonical-source-preservation.md`).

Note for the determination: the section files carry `**Status:**
Canonical Source` in their own transmitted headers. Per
`workbench/README.md` rule 1 that claim is inert until formal admission.
It is preserved because it is part of the transmitted text, and it should
not be read as a repository status assertion.

## 4. Permanently unavailable sections

**S05–S08 and S11–S15 are permanently unavailable.** Already recorded in
`fd-0003` and in canonical-source-preservation §6. Restated here, not
newly determined.

Unavailable canonical text is never reconstructed, inferred, paraphrased,
or assembled from summaries, public content, downstream implementation,
professional convention, memory, prior AI output, or derived evidence
(canonical-source-preservation §7). No unavailable section has been
reconstructed in this phase.

**Consequence the determination should weigh:** admission of the
surviving sections would resolve the *status* of what survives. It cannot
recover what does not. Several operational concepts required by the
Generation One Requirements Report fall in the unavailable range — see §7
and `generation-one-semantic-gap-inventory.md`.

## 5. Operational concepts governed by surviving recovered text

Each entry cites the precise surviving source. These are concepts the
surviving text demonstrably establishes.

| Concept | Surviving source | What it establishes |
| --- | --- | --- |
| Operations' institutional definition and scope | S01 §§1.2–1.3 | Operations governs the conceptual architecture of recurring institutional work; scope enumerates operational doctrine, vocabulary, classifications, relationships, assets, records, process/workflow/responsibility/authority/work-item/lifecycle/readiness architecture, controls, evidence, auditability, operational conditions requiring treatment, quality, performance, continuous improvement, continuity, boundary architecture, repository representation |
| Institutional authority boundaries | S01 §1.5 | Operations is authoritative for operational semantics; enumerates adjacent authorities (Institutional Knowledge, Methodology, IP, Education & Workforce Development, Branding, Corporate Headquarters, Platform & Systems Development); no domain supersedes another within its own substantive scope |
| Institutional meaning precedes technical representation | S02 §2.3 Principle 1 | "Institutional concepts shall be defined before they are technically represented… Technical implementation shall not independently determine institutional semantics." |
| Explicit governance | S02 §2.3 Principle 2 | Governance shall not depend on organizational memory, repeated practice, software behavior, naming conventions, or participant assumptions |
| Explicit authority | S02 §2.3 Principle 3 | Authority shall not be inferred from technical access, software permissions, implementation responsibility, repository ownership, or administrative convenience |
| Explicit responsibility | S02 §2.3 Principle 4 | "Execution does not independently establish institutional responsibility." |
| Conceptual integrity | S02 §2.3 Principle 5 | "Materially distinct operational concepts shall remain conceptually distinct… Conceptual clarity has priority over implementation convenience." |
| Stable operational semantics | S02 §2.3 Principle 6 | Terminology preserves stable institutional meaning; change requires approved governance |
| Authority vs responsibility doctrine | S02 §2.7 | The two are materially distinct and independently identified |
| Historical preservation | S02 §2.10 | Operational history is preserved |
| Operating architecture; conceptual/runtime separation | S03 §§3.23–3.28 | Operational assets, operational records, definitions vs types vs instances, conceptual and runtime separation, repository representation, architectural traceability |
| Operational domains | S04 (throughout, esp. §§4.2, 4.24–4.28, 4.50–4.56) | Domain architecture, ownership, stewardship, identifier neutrality, naming neutrality, provisional terms, prohibited domain inferences, technical metadata neutrality |
| Separated lifecycle dimensions | S09 §9.2 | Fourteen independent dimensions; "No dimension automatically determines another"; "The technical foundation must not collapse these dimensions into one overloaded status field" |
| Lifecycle definition vs instance | S09 §9.3 | A lifecycle definition is not mandatory for every asset merely because it exists; applicability established by the governing asset class, standard, or authority (with §9.30) |
| Institutional approval vocabulary | S09 §9.5 | Not Submitted · Submitted for Approval · Under Approval Review · Approved · Approved with Conditions · Declined · Withdrawn · Superseded · Approval Expired · Approval Suspended · **Approval Status Unresolved** ("Unresolved approval must not be represented as approval") |
| Status authority, evidence, effective period, transition | S09 §§9.19–9.22 | Who may set status, what evidence is required, effective periods, transition definitions |
| Non-propagation and non-inheritance | S09 §§9.23–9.24 | Transitions do not propagate; status is not inherited |
| Status correction and conflict | S09 §§9.25–9.26 | Correction and amendment; conflict handling |
| State-machine neutrality | S09 §§9.27–9.28 | Technical state-machine neutrality; **mandatory-state-machine prohibition** |
| Controls | S10 §§10.3–10.22 | Control definition/instance, objectives, preventive/detective/corrective, **manual control (§10.9)**, automated, hybrid, approval, access, segregation, reconciliation, supervisory; authority, responsibility, scope, trigger and frequency |
| Evidence architecture | S10 §§10.23–10.36 | Control evidence, evidence, source, attribution, integrity, relevance, reliability, completeness, sufficiency, **proportionality (§10.32)**, conflict, **negative evidence and absence (§10.34)**, correction and amendment, preservation |
| History classes | S10 §§10.37–10.41 | Decision, approval, change, exception, and review history |
| Audit and review | S10 §§10.42–10.58 | Validation, verification, control review/testing/effectiveness/failure/limitation/exception, compensating control, **audit trail (§10.51)**, auditability, internal/external review, observation, finding, recommendation, corrective action |

## 6. Concepts the surviving text demonstrably does not establish

The surviving text is explicit about its own limits. Two independent
passages state that Operations authority and the lifecycle architecture
do **not** extend to active operational records:

- **S01 §1.5:** Operations authority "does not independently authorize
  operational execution, technical implementation, commercial activity,
  organizational structure, legal action, financial administration,
  client relationships, production systems, or **active operational
  records**."
- **S09 §9.1:** the section "does not authorize: Active operational
  records. Process instances. Workflow instances. Requests. Cases.
  Projects. Tasks. Assignments. Runtime state transitions. Workflow
  execution. Automated activation. Production status changes.
  Operational notifications. **User accounts. Production data.**
  Mandatory universal state machines."

S09 §9.1 also draws the governing distinction: the section "establishes
the approved lifecycle and status architecture for governed operational
**assets and definitions**," and its dimensions apply to assets such as
operating models, capabilities, processes, workflows, procedures,
policies, standards, controls, **work-item definitions**, request types,
case types, task types, approval types, performance measures, and
continuity plans — that is, to *definitions*, not to *instances*.

**What surviving text does establish, and must not be understated.** S03
§3.25 establishes Definition, Type, and **Instance** as "three distinct
conceptual levels" — an instance being "An actual occurrence represented
according to an approved definition and type" — and directs that "None of
these concepts shall be treated as interchangeable." S03 §3.24 establishes
that "Operational records are governed representations of approved
operational subjects" and that "The operating architecture governs the
conceptual structure through which operational records may **later** be
represented," while holding operational records distinct from operational
events, activities, execution, runtime system objects, and technical
metadata, and stating that "The existence of a record does not establish
that operational work has occurred."

So the conceptual scaffolding survives. What does not survive is
**authorization** for active instances and runtime status, and the
**concrete semantics** of the specific operational conditions Generation
One must hold.

Accordingly, surviving recovered text does **not** establish:

- that active operational records may exist as a governed class, or be
  created, held, or transitioned at runtime;
- work-item, request, case, or task **instance** semantics beyond S03
  §3.25's general conceptual level;
- **blocker** semantics;
- **handoff** semantics;
- **attention / escalation** semantics;
- the materiality rule distinguishing a governed **material change** from
  an ordinary mutation;
- the applicability rule selecting which of the fourteen S09 §9.2
  dimensions bind any particular operations record class.

Where the concept falls within OSPA's declared scope (S01 §1.3 lists
work-item architecture, responsibility architecture, and operational
conditions requiring treatment) but is absent from surviving text, the
defining section falls in the unavailable range S05–S08 / S11–S15. That
is an inference about *location*, drawn from OSPA's own scope statement,
and is not an inference about *content*. No content has been inferred.

## 7. Generation One semantic dependencies not presently groundable

The accepted Generation One Requirements Report requires operational
concepts that cannot presently be grounded in surviving OSPA authority.
They are inventoried, with classifications, in
`generation-one-semantic-gap-inventory.md`.

Summary for the determination: **FD-V7, however determined, does not
close the semantic gaps.** Admitting the surviving sections would resolve
the status of what survives and make it citable as authority; holding
them unadmitted would leave that status open. Neither outcome creates the
missing semantics, because the sections that would carry them are
permanently unavailable. Closing the
Generation One semantic dependencies therefore requires either admitted
authority that supplies them (which does not exist) or prospectively
adopted new operational doctrine, which `fd-0010` permits the institution
to adopt through competent authority, requires to be clearly identified
as new authority, and forbids representing as recovered OSPA. Drafting
that doctrine is outside Phase 1.

## 8. Questions this package puts to the Founder Office

1. **Admission.** Are the surviving recovered sections S01–S04, S09, S10
   admitted to the canonical corpus, admitted with conditions, or held
   unadmitted?
2. **Provenance sufficiency.** Is the evidenced provenance in §2
   sufficient for admission, given the deficiencies recorded there?
3. **Derived-material treatment.** Is `RS05-EV01` to remain permanently
   non-admissible derived evidence?
4. **Unavailable-section record.** Is the existing record of S05–S08 and
   S11–S15 unavailability sufficient, or is a further explicit
   preservation act required?
5. **Deficiency 1.** What is the formal disposition of `fd-0001`
   determination 1 in light of the custody preservation directed by
   `fd-0010`?

None of these is answered here.

---

## 9. Disposition (`fd-0011`)

Sections 1–8 above are retained unaltered as the pre-determination
evidence record. This section states what the Founder Office decided and
where current authority now lives. Where the two differ, this section and
the admission record govern.

**Answers to the five questions in §8:**

1. **Admission.** S01–S04, S09 and S10 are **admitted** as recovered
   canonical authority, with authority "limited strictly to the surviving
   text of those six recovered sections."
2. **Provenance sufficiency.** Admission proceeded on the evidence in §2.
   The provenance deficiencies recorded there — original transmission
   channel, transmission date, authorship chain, recovery method, and the
   circumstances of the loss — remain **open and recorded, not resolved**.
3. **Derived-material treatment.** `RS05-EV01` "remains derived evidence
   and is not canonical OSPA authority." It was not admitted and is never
   admissible as canonical source.
4. **Unavailable-section record.** S05–S08 and S11–S15 are confirmed
   permanently unavailable and "must never be reconstructed or inferred."
5. **Deficiency 1 (`fd-0010`).** Disposed: the Phase 1 preservation was a
   **specific exception** to `fd-0001` determination 1 covering the exact
   seven Phase 1 preserved artifacts only. `fd-0001` remains governing for
   every other workbench or reconstruction artifact; no blanket
   supersession or general workbench admission exists.

**Superseded statements in this package.** The following are historical
and no longer describe current state: that FD-V7 is reserved or unmade
(§ banner, §3); that the sections are "not admitted" or usable "as an
approved semantic input only" (§3 table); that the canonical paths are
under `workbench/ospa-reconstruction/` (§1, §3) — they are now under
`institution/foundations/operations/`; and that integrity digests for the
six sections live in `workbench/ospa-reconstruction/SHA256SUMS` — they now
live in `institution/foundations/operations/SHA256SUMS`, unchanged in
value, because the sections were moved byte-identically with no header
prepended.

**What did not change.** The §5 and §6 analysis of what surviving text
does and does not establish stands, and is the substantive input to
`corporate-operations-semantics-definition-package.md`. Admission resolved
the *status* of the surviving sections. It recovered no lost content and
closed no semantic gap.
