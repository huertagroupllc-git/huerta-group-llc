# Draft v7 — Preconstruction Traceability Matrix

**Classification: Institutional Record** — methodology provenance record
(evidentiary, non-governing). Produced under `fd-0036` before any Draft v7 text
was written, and preserved unaltered.

**Every Draft v7 change traces to one of six authorities and to nothing else.**
`fd-0036` fixes the permitted authority sources: the Founder Office
determinations on **MD-1 … MD-5**, and the **RQ-G** custody determination. A
change lacking one of those may proceed only as a **strictly necessary
internal-consistency or cross-reference consequence** of one of them, and each
such consequence is identified below as exactly that.

## 1. The matrix

| ID | Authority | Draft v6 provision affected | Instrument affected | Exact semantic consequence | Kind | Fresh validation ultimately required |
| --- | --- | --- | --- | --- | --- | --- |
| **V7-01** | **MD-1 determination** — *accepted methodology defect* | **A15** — *Preceding question*, *What answers it affirmatively*, *Where the assertion is Client-Stated* | **Instrument 9** — preceding-question rule | The terminating shortcut fires only where **both** limbs are **Observed**: that the capability exists (built, standby or dormant), **and** that it is actually awaiting an organizational-authority decision rather than further construction. A Client-Stated assertion on either limb remains valid evidence — not false, not downgraded, not rejected — and simply does not establish the terminating condition; the ordinary test proceeds | **semantic** | **Yes — targeted** |
| **V7-02** | **MD-2 determination** — *accept with modification* | **A15** — new treatment inserted before *Access is not existence* | — | Where the proposition is that a capability is standby, dormant or otherwise not operating, **operational observation is not required**; existence and material state may be established by direct examination of the capability, its implementation, configuration or deployment state. Absence of operational observation is a limitation on **use and performance**, not evidence of non-existence. Operation is never manufactured to corroborate dormancy | **semantic** | **Yes — targeted** |
| **V7-03** | **MD-3 determination** — *accepted methodology defect* | **A15** — routing paragraph and new outcome semantics | **Instrument 9** — permitted outcomes and recording rules | A **sixth** permitted Technology-Worthiness outcome: ***existing capability awaits an organizational-authority decision***. Construction is not the unresolved issue; the decision routes to the competent authority; the outcome authorizes neither activation nor construction and implies no suitability, validation, approval or production readiness; it is never used as a softer form of *existing system should be improved rather than replaced* | **instrument / outcome-set** | **Yes — targeted** |
| **V7-04** | **MD-4 determination** — *no structural evidence-model change authorized* | **A20** — known limitations | — | Bounded disclosure that A15's threshold, A6's role compression and A7's habit test, met together, must not be generalized into a claim that Client-Stated evidence is weaker, inferior, less credible or lower ranked, with the evidence for both halves from the same application. **Disclosure and guidance only** | **guidance / limitation** | **No** |
| **V7-05** | **MD-5 determination** — *accepted methodology defect* | **A18** — closure and outcome semantics | — | Outcomes are **point-in-time**. A suspended, resumed or later-clarified application retains every outcome-bearing state with its date and order, evidence basis, reason, the constraint operating at that time, and its relationship to later states. A later state may supplement or supersede an earlier one's operational effect and never erases it. Application-stage status, point-in-time outcome, advancement permission and unresolved closure stay distinguishable at every state | **semantic** | **Yes — targeted** |
| **V7-06** | **RQ-G determination** — custody disposition established | **A17 rule 7** — custody | *(Instrument 6 unchanged; its custody row type already carries the material)* | The custody agreement may be satisfied by **the organization's own authorized standing custody arrangement** where one exists and covers the material, recorded with what establishes it and which authority made it. The organization's arrangement establishes the disposition; **the method never prescribes one** and names no location, system, vendor or mechanism. An arrangement not reaching the material leaves the condition unsatisfied | **semantic / closure-related** | **Yes — targeted** |
| **V7-C1** | *Strictly necessary consequence of V7-03* | **A15** — the *Where the assertion is Client-Stated* sentence naming reachable outcomes | — | The sentence listing what the full test may still reach had to name the new outcome, or it would have read as excluding the one outcome the new rule creates | **cross-reference** | covered by V7-03 |
| **V7-C2** | *Strictly necessary consequence of all six* | **Header**; **Part C** version-count line; **Part D §D8** | — | Version identity, baseline and digest, evidence-basis and applied-to-nothing statements, freeze line, and the traceability section a new version must carry | **version/status text** | — |

**Mechanical reconciliation: 6 authority-derived changes + 2 strictly necessary
consequences = 8 rows.** ✓ Authorities used: MD-1, MD-2, MD-3, MD-4, MD-5,
RQ-G = **6 of the 6 permitted**, none unused, none exceeded.

## 2. What was deliberately *not* changed, and why

**A2 was not touched, and MD-2 was implemented without touching it.** The
obvious-looking route for MD-2 was to amend A2 rule 4's phrase *"until the
condition is corroborated by observation of operation."* That was declined.
Rule 4 governs **when an assertion *about* a condition becomes Observed**;
direct examination of the artifact that constitutes a capability is not an
assertion about it but first-hand evidence under A2's existing definition of
*Observed*. V7-02 therefore states the relationship inside A15 and leaves A2
**byte-identical**. `fd-0036` prohibits adding an evidence class, strength axis,
recurrence score, hierarchy or weighting; **none was added, and A2's text was
not opened at all.**

**Instrument 6 was not changed.** RQ-G's methodology effect lands on A17 rule 7,
which Instrument 6 already cross-references through its *implementer-side /
advisor-side custody* row type. Changing the instrument would have been change
beyond the authority.

**A18's five advancement outcomes were not changed.** MD-3 changes **Instrument
9's** permitted outcomes from five to six. The two five-item lists are different
objects and only the Instrument 9 list was in scope.

**RQ-1's threshold was not reopened.** MD-1 **extends** it to the second limb;
it does not revisit whether Observed is required, which `fd-0032` settled.

**RQ-H was not reopened.** Alternative C remains controlling and no boundary
provision was touched.

**No program-specific custody arrangement entered the method.** RQ-G's
determination names an owner, a durable record location, a technical custody
mechanism and an admission mechanism **for Huerta Group's own records**. None of
those appears in Draft v7: A17 rule 7 contains no location, system, vendor or
mechanism, verified by inspection.

## 3. Relationship to the preserved clarification determinations

Carried forward unchanged and not reopened, per `fd-0036`: FU-1's referent
determination; FU-2's preserved breadth; FU-3's clarified preservation intent,
which did **not** establish custody — RQ-G did; FU-4's prohibition on a
manufactured A10 walkthrough; FU-5's ChatGPT Projects as a locus of discussion
and not authority by existence; and **RQ-H Alternative C**.

**Related records:** `organizational-diagnostic-generation-one-draft-v7.md`
§D8; `draft-v7-validation-readiness.md`;
`organizational-diagnostic-draft-v7-integrity-record.md`;
`draft-v6-participant-validation-completion-report.md` §58 (MD-1 … MD-5 as
recorded); `draft-v6-clarification-reconciliation-report.md`; `fd-0036`.
