# Generation One Semantic-Gap Inventory

**Classification: Institutional Record** — assessment record
(evidentiary, non-governing).

- **Purpose:** establish exactly which Generation One operational
  concepts can be grounded in surviving governing authority and which
  remain unresolved, before technical architecture resumes.
- **Prepared under:** `fd-0010`.
- **Recorded:** 2026-08-18.
- **Disclosure:** repository-internal.

## Method and limits

Each concept is classified into exactly one category:

- **A — Governed by admitted canonical OSPA authority.** Established by
  the surviving text of S01–S04, S09 and S10, with citation.
  **Updated by FD-V7 (`fd-0011`):** those six sections are now admitted to
  the canonical corpus at `institution/foundations/operations/` and are
  citable as authority. Their authority remains limited **strictly to
  their surviving text** — admission recovered no lost content.
- **B — Governed by another existing repository authority.** Established
  elsewhere in the governed corpus, with citation.
- **C — Business requirement established, operational semantics
  unresolved.** The requirement exists; the institutional meaning does
  not exist in any authority available to Development.
- **D — Outside current Generation One scope.**
- **E — Founder Office determination required.**

**Two limits govern every entry.** No unavailable OSPA wording has been
reconstructed, inferred, or substituted. And the Generation One
Requirements Report's text was not transmitted (`fd-0010` Deficiency 2),
so where an entry says a requirement "is established," that rests on the
Founder Office's acceptance of the report and on the concepts the
`fd-0010` instrument itself enumerates — not on a reading of the report.

A category-C classification is **not** a gap Development may close. Under
`fd-0010` execution principle 6, Development may identify semantic gaps
and may not fill them by invention.

## Inventory

| # | Concept | Class | Basis / what is missing |
| --- | --- | --- | --- |
| 1 | **Operational state** (of a governed operational asset or definition) | **A** | S09 §9.2 fourteen independent dimensions; §§9.4–9.18 dimension vocabularies; §9.5 approval vocabulary including "Approval Status Unresolved". Applies to assets and definitions. |
| 2 | **Operational state of an active record/instance** | **C** | Two-part position, and the distinction matters. Surviving text **does** establish the conceptual scaffolding: S03 §3.25 defines Definition / Type / **Instance** as "three distinct conceptual levels" ("None of these concepts shall be treated as interchangeable"), and S03 §3.24 establishes that "the operating architecture governs the conceptual structure through which operational records may **later** be represented." What surviving text **withholds** is authorization for *active* instances and their runtime status: S09 §9.1 does not authorize "Active operational records… Process instances… Runtime state transitions… Production data," and S01 §1.5 likewise excludes "active operational records" from Operations authority. The conceptual level exists; the authorization and the concrete status semantics do not. |
| 3 | **Significant / material change** | **C** | S10 §10.39 establishes Change History as an evidence class, and §§10.35–10.36 establish correction/amendment and preservation — but the **materiality rule** distinguishing a governed material change from an ordinary mutation is not established in surviving text. This is the single distinction separating a change register from an undifferentiated event stream. |
| 4 | **Founder Attention** | **C** | Not established anywhere in surviving OSPA or the wider corpus. S10 §§10.55–10.58 supply Observation, Finding, Recommendation, Corrective Action — adjacent review-and-control concepts. Substituting them would be reconstruction by professional convention and is prohibited. |
| 5 | **Attention priority vocabulary** (Immediate / Near-Term / Normal) | **B** | Determined by the Founder Office in the preceding Generation One instrument and now recorded in the repository at `institution/governance/determinations/fd-0010-corporate-operations-governance-methodology-readiness-phase1.md`, "Transmitted substance preserved verbatim". The vocabulary exists and has a repository source; the concept it classifies (#4) does not. A classification scheme without a defined subject cannot be implemented. |
| 6 | **Blocker** | **C** | "Operational conditions requiring treatment" is within OSPA scope (S01 §1.3) and is not defined in surviving text. Defining section falls in the unavailable range. |
| 7 | **Dependency** | **C** | Partially adjacent to S04 §4.21 (domain dependency) and §4.22 (upstream/downstream relationships), which govern **domain-level** relationships, and to S03 §3.13 (architectural dependencies), which governs architecture-level ones. Neither establishes a dependency between items of operational work. The operational-work sense is not established. |
| 8 | **Handoff** | **C** | "Responsibility architecture" is within OSPA scope (S01 §1.3). S02 §2.7 establishes that authority and responsibility are materially distinct and independently identified, but does not establish **transfer** of responsibility. Defining section unavailable. |
| 9 | **Deadline** | **C** | Not established in surviving text. S10 §10.22 establishes control trigger and frequency, which is a control concept, not a time-bound operational obligation. |
| 10 | **Renewal** | **C** | Not established. S09 §9.5 "Approval Expired" establishes an approval-expiry status for governed assets — adjacent, and not a renewal obligation for operational conditions. |
| 11 | **Follow-up** | **C** | Not established. S10 §10.58 Corrective Action is a control-review concept and is not equivalent. |
| 12 | **Review date / review condition** | **A (partial)** | S09 §9.10 Review Condition and S10 §10.41 Review History establish review as a governed dimension and history class for operational **assets**. Their application to active records inherits gap #2. |
| 13 | **Venture snapshot** | **B** | Corporate Venture Governance Phase 1 Blueprint; FD-V1 (charter), FD-V2 (register topology and plane separation), FD-V4 / `fd-0009` (parent representation). The parent already maintains `institution/metadata/registries/venture-registry.json`. |
| 14 | **Relationship context** | **C / D** | No relationship concept is established in surviving OSPA or the corpus. Whether Generation One requires one at all is a scope question the untransmitted Requirements Report would answer. Recorded as unresolved and possibly out of scope. |
| 15 | **Source provenance** | **A** | S10 §§10.24–10.36: evidence, evidence source, attribution, integrity, relevance, reliability, completeness, sufficiency, proportionality, conflict, negative evidence and absence, correction and amendment, preservation. Corpus field precedent additionally exists in the determinations registry. |
| 16 | **Authority** | **A** | S01 §1.5; S02 §2.3 Principle 3; S02 §2.7. Reinforced in the corpus by ADR-0006 (no role name may imply an institutional office; technical permission is never institutional authority). |
| 17 | **Responsibility** | **A** | S02 §2.3 Principle 4; S02 §2.7. Establishes responsibility as independently defined and not inferable from execution. Transfer of responsibility remains #8. |
| 18 | **Lifecycle / status architecture** | **A** | S09 §§9.1–9.3, 9.19–9.28, 9.30. Includes the mandatory-state-machine prohibition (§9.28) and technical state-machine neutrality (§9.27). Applies to operational assets and definitions, consistent with S03 §3.25's definition/type/instance levels and §3.26's conceptual/runtime separation; instances inherit gap #2. |
| 19 | **Historical preservation** | **A** | S02 §2.10; S10 §§10.36–10.41 (evidence preservation; decision, approval, change, exception and review history). Corpus practice: records are never deleted, supersession is bidirectional, status history is never overwritten. |
| 20 | **Non-propagation / non-inheritance** | **A** | S09 §9.23 Transition Non-Propagation; §9.24 Status Inheritance Prohibition; S04 §4.48 Cross-Domain Non-Propagation. |
| 21 | **PARTLY DISPOSED (`fd-0011`).** Applicability rule — which of the fourteen S09 §9.2 dimensions bind a given operations record class | **E** | S09 §9.3 and §9.30 require applicability to be "established by the governing asset class, standard, or authority." No such governing standard exists for operations records. Requires a determination; cannot be selected by Development. |
| 22 | **DISPOSED (`fd-0011`).** Whether a permitted-transition model is compatible with §9.28 | **E** | S09 §9.27–9.28 constrain any transition model. Whether a bounded permitted-transition model for a single governed record class is compatible, or is a prohibited mandatory state machine, is an interpretive question reserved above Development. |

## Summary

| Class | Count | Concepts |
| --- | --- | --- |
| **A** — grounded in surviving OSPA text | 8 (one partial) | 1, 12 (partial), 15, 16, 17, 18, 19, 20 |
| **B** — other repository authority | 2 | 5, 13 |
| **C** — requirement established, semantics unresolved | 10 | 2, 3, 4, 6, 7, 8, 9, 10, 11, 14 (also D) |
| **D** — possibly outside scope | 1 | 14 |
| **E** — Founder Office determination required | 2 | 21 (partly disposed), 22 (disposed) |

**The load-bearing result:** every concept that a Corporate Operations
Register would need in order to hold a *live operational condition* —
active record, blocker, handoff, deadline, renewal, follow-up, attention,
and the materiality rule for change — is class **C**. The concepts that
*are* grounded (provenance, authority, responsibility, lifecycle of
assets, historical preservation, non-propagation) describe how governed
operational **assets and definitions** behave, not how live operational
work is represented.

Generation One sits on the instance side of a distinction that surviving
OSPA draws explicitly and then declines to authorize (S09 §9.1; S01
§1.5).

## What closing these gaps requires

Class C gaps cannot be closed by admission, because their defining
sections are permanently unavailable. Under `fd-0010`, the institution
may prospectively adopt new operational doctrine where surviving
authority leaves a genuine gap. Any such doctrine must be clearly
identified as **new authority**, adopted through competent institutional
authority, and **never represented as recovered OSPA**.

Drafting that doctrine is outside Phase 1 and is not begun here.

Class E items have since been addressed by `fd-0011`, and the disposition
is **not symmetrical**:

- **Item 22 — disposed.** No Generation One transition model may be
  inferred from S09 §9.28; any such model requires new prospective
  doctrine compatible with surviving OSPA.
- **Item 21 — disposed only *in part*.** `fd-0011` determines that
  surviving S09 vocabularies and dimensions "govern applicable objects,"
  with no universal status fields, no universal operational state
  machines, and no collapsing of materially distinct dimensions. It does
  **not** supply an applicability rule for operational-instance classes,
  because surviving text does not authorize those classes. That remainder
  stays unresolved and is carried in the semantic-definition package
  (concepts 11 and 12).
