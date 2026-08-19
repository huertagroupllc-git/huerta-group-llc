# Internal Operations & Command Platform — Generation One Phase 1 Technical Blueprint

**Classification: Development Standards and Architecture Decisions**

Architecture and design only. This blueprint **authorizes no
construction**: no application, schema, migration, database,
authentication, authorization policy, integration, or production change
is created or permitted by it. It is subordinate to the Constitution, the
Vision Foundation, the Development Standards, the adopted Corporate
Operations Semantics Foundation v1, and the Generation One Requirements
Report — and it never outranks them.

- **Prepared under:** `fd-0013` (architecture resumption).
- **Recorded:** 2026-08-18.
- **Implementation authorization:** **None.** Implementation requires a
  separate Founder Office act and the ADR sequence in §34.

## 1. Architecture baseline

The verified starting state (`internal-software-architecture.md` §1): one
repository, one statically rendered Next.js public website, exactly one
server-side runtime capability (inquiry intake via Server Action to a
single-table Supabase project with RLS-deny-by-default), a standby
notification module, Vercel auto-deploy from `main`, and the file-based
Institutional Knowledge Foundation. **No internal application, no
authentication, no admin interface, no second database surface exists.**

Generation One would be the **first authenticated internal system**, the
**second data-owning system**, and the **first system to cross the
ADR-0005 sensitivity threshold**. Each of those firsts carries a
consequence recorded below; none of them is incidental.

## 2. Governing sources reviewed

| Source | Bearing |
| --- | --- |
| `GEN1-REQ-V1.md` (preserved) | What Generation One must do; the bounded scope, non-goals, and overbuilding risks |
| `CORP-OPS-SEM-FND-V1.md` (adopted) | What every represented concept means; the ten semantic tests |
| `fd-0012` | Founder Office §32 policy: attention entry and exit, materiality disputes, freshness, priority |
| `fd-0013` | Architecture resumption; the four open policy questions |
| OSPA S01–S04, S09, S10 | Surviving canonical authority: authority ≠ technical access (S02 §2.3, §2.7); identifier neutrality (S04 §4.50, S09 §9.32); status dimensions and non-propagation (S09); evidence, correction, amendment (S10) |
| ADR-0002 – ADR-0006 | Website boundary; placement criteria; data topology; environment threshold; identity direction |
| `internal-software-architecture.md` | Target posture, data-ownership model, integration principles, prohibited premature commitments |
| Corporate Venture Governance (FD-V1/V2/V4) | Venture facts are venture-authoritative; institutional and operational planes stay separate |
| Development Standards | Implementation quality rules |

## 3. Executive architectural determination

**Generation One is a Corporate Operations Register with a Founder
Attention layer, built as a small authenticated internal application in
its own repository, owning its own data store, holding only what Corporate
Operations is the legitimate authoritative owner of, and referencing
everything else with provenance.**

The single most consequential architectural decision is **what not to
build**: no universal status field, no universal state machine, no event
sourcing, no workflow engine, no CRM, no ledger, no governance mirror, no
integrations. Generation One's difficulty is not technical complexity —
the data volumes are trivial and there is one primary user. Its difficulty
is **semantic discipline**: nine of the twelve rejection conditions in the
adversarial review are failures a competent engineer would commit by
reflex, because each one is the locally convenient choice.

The architecture is therefore organized around **resisting collapse**. Six
concepts that a conventional schema would merge — State, Material Change,
Attention, Dependency, Blocking, and the Record/Instance pair — are kept
structurally separate, and the separation is enforced by shape rather than
by convention, because conventions erode.

## 4. Generation One bounded system boundary

**In scope** — the smallest set that answers the three governing
questions:

Headquarters Operational Records · multidimensional State · Material
Change · Founder Attention (nomination, admission, standing, exit) ·
Dependencies · Blocking assertions · Handoffs · Deadlines · Renewals ·
Follow-Ups · Venture Snapshots · a minimal Relationship seam · Source
Provenance on every represented fact · Review Events for "since last
review."

**Out of scope, structurally** — not merely unbuilt but *unrepresentable*
without a scope change returning to the Founder Office (Requirements
Report §21): accounting ledgers or balances; compliance case files;
governance records; venture tasks; manuscripts or editorial records; raw
conversation; contact ingestion; notifications infrastructure; analytics;
AI querying; automated attention detection; any integration.

**The boundary test**, applied to every proposed field (Requirements
Report §12): *what Headquarters decision, coordination need, risk,
deadline, or action does this support?* No credible answer → it stays out.

## 5. Technical domain model

Twelve concepts. Names below are conceptual, not table names — no schema
is created here.

**1 · Operational Record.** The Headquarters representation of an
Operational Instance. Carries its own identity, a distinct *instance
designation* for the real-world matter, the admission reason (which of
Foundation §5's nine admission grounds justifies representing it at all),
the owning source function or venture, and required provenance. It is
never the authoritative source record, a task, an activity log, a
governance record, a compliance file, an accounting entry, a venture
record, or a notification.

**2 · Instance designation.** A stable, human-meaningful reference to the
real-world matter, separate from the Record's technical identity. Two
Records may, over time, represent the same Instance (correction,
supersession, re-admission); the designation is what makes that
recoverable. Identifiers on both sides are **neutral** — they encode no
classification, authority, function, or status (OSPA S04 §4.50, S09 §9.32).

**3 · State dimension value.** State is a **set**, never a column. Each
entry is (dimension name, value, as-of, provenance, optional confidence).
Dimensions are declared **per record kind**, not globally, so no shared
vocabulary can quietly become a universal status. A Record may hold any
number of simultaneous dimensions — authorized, operationally paused,
externally dependent — each independently valued and independently
sourced. Dimension value history is append-only and never overwritten.

**4 · Material Change.** An **authored** assertion that something changed
whose consequence warrants Headquarters awareness. Carries: the Record it
concerns; what changed; **which materiality limb of Foundation §7 it
meets**; who asserted it; **occurred-at and recorded-at as two distinct
timestamps**; provenance. Append-only. Corrections are new entries
referencing the corrected one (S10 §10.35), never edits.

**5 · Technical audit entry.** Row-level mutation history, entirely
separate from Material Change, never surfaced at Headquarters, and never
promoted into one. This separation is the whole of invariant 2.

**6 · Founder Attention Item.** A distinct entity — never a flag, boolean,
or state value on a Record. Carries: the qualifying reason (one of the ten
in Foundation §9 / Requirements Report §5); expected Founder role; entry
justification; proposed priority; normalized priority; Founder override;
continued-standing basis; exit with exit reason; and the Record it
concerns (or none, in the rare standalone case). A Record may have zero,
one, or several Attention Items across its life.

**7 · Attention nomination.** Admission is a decision, so the thing decided
upon must exist independently. A nomination records who raised it, why,
and the proposed priority. Its disposition is admitted, normalized, or
not admitted with a stated reason. **A nomination marked as independently
governance-mandated cannot be dispositioned "not admitted"** — the only
available dispositions are admitted or escalated. This is `fd-0012`'s
non-suppression rule expressed structurally rather than as a policy note.

**8 · Dependency.** A relation from a Record to what it relies upon — an
internal Record, an external party, a condition, a decision, a resource.
Exists independently of any blocking effect. Carries kind, description,
the party it rests with, and provenance.

**9 · Blocking assertion.** A **time-bounded** assertion that a named
condition or Dependency *presently prevents* meaningful advancement of a
Record. Has a start, an optional end, an end reason drawn from Foundation
§12's enumerated ends, and an optional Dependency reference. Modeling
blocking as a *property of a Dependency* would collapse the distinction;
modeling it as a separate assertion preserves Foundation §13's rule that
the same dependency may become blocking and later cease to be. **Ending a
blocking assertion changes nothing about the Record's completion.**

**10 · Handoff.** Source party, receiving party, expected action,
Dependency created or affected, disposition (performed · authoritative
disposition returned · validly redirected · superseded · other accepted
disposition), and escalation condition. **There is no authority field, and
none may be added** — a Handoff moves expected action only. Acknowledgment
is not a disposition.

**11 · Deadline · Renewal · Follow-Up.** Three separate concepts, never
merged and never given a shared "due item" parent. A **Renewal** is a
continuation requirement that may exist long before it produces any
Deadline, and may produce several. A **Deadline** is a consequential time
boundary. A **Follow-Up** is an expected subsequent action whose due date
is optional. Each may attach to the same Record without becoming the same
row.

**12 · Venture Snapshot · Relationship · Review Event.** The Venture
Snapshot carries only the Requirements Report §6 field set, referencing
the institutional `venture-registry.json` identity, with provenance to the
venture. The Relationship seam carries party, category, owning function or
venture, disposition, next action, and source — and nothing resembling a
pipeline, stage, score, or activity history. The Review Event is a
Founder-scoped marker bounding "since last review" (§19).

**Provenance is not a concept but a requirement on all of them.** Every
represented fact carries: authoritative source domain; source function or
venture; source reference; as-of or confirmed-at; representation owner
(always Corporate Operations); and any known uncertainty or staleness. A
represented fact without provenance is invalid, not merely incomplete —
Requirements Report Capability 6 calls this "foundational, not optional."

## 6. Source-of-truth treatment matrix

| Domain | Authoritative source | Treatment | Stored locally | Provenance required | Update method | Manual / automated | Sync justification |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Accounting transactions, balances, classifications | QuickBooks / Accounting | **Reference** | Operational consequence only, never figures as truth | Source, as-of date | Corporate Operations records consequence | Manual | None — a shadow ledger is excluded |
| Accounting interpretation | Accounting & Financial Management | **Summarize** | Consequence statement | Source, determination reference | On consequential change | Manual | None |
| Institutional governance records | This repository | **Reference** | Identifier and link only | Record path | On consequential change | Manual | None — a governance mirror is excluded |
| Founder / governed decisions | Determinations register | **Reference** | Identifier, operational effect | `fd-` reference | On determination | Manual | None |
| Venture operational detail | Venture system / function | **Do nothing** | Nothing | — | — | — | Excluded outright |
| Venture parent-relevant standing | Venture function | **Summarize** | §6 snapshot fields | Venture, as-of, who supplied | On material change | Manual | None in Gen One |
| Venture governance standing | `venture-registry.json` | **Reference** | Venture identifier | Registry entry | On registry change | Manual | None |
| Administrative / compliance determinations | Administration & Compliance | **Summarize** | Operational consequence, prerequisite, renewal, required action | Determination reference, as-of | On consequential determination | Manual | None — case files excluded |
| Licenses, registrations, filings | Administration & Compliance / external authority | **Reference** | Standing and renewal horizon only | Source, as-of | On status change | Manual | None until repeated manual cost is evidenced |
| External platform state | External system | **Reference** | Condition affecting work | System, as-of | On consequential change | Manual | None |
| Public inquiry source material | Existing inquiry infrastructure | **Reference** | Only where a meaningful relationship arises | Inquiry reference | On assessment | Manual | Automated ingestion excluded |
| **Founder Attention Items** | **Generation One** | **Store directly** | Full record | Originating nomination | Admission and lifecycle acts | Manual | Owner is Corporate Operations |
| **Cross-functional Handoffs** | **Generation One**, absent a superior workflow record | **Store directly** | Full record | Source and receiving party | Handoff and disposition acts | Manual | Owner is Corporate Operations |
| **Headquarters Follow-Ups** | **Generation One** | **Store directly** | Full record | Originating matter | Creation and disposition | Manual | Owner is Corporate Operations |
| **Headquarters Dependencies** | **Generation One**, where they are HQ coordination | **Store directly** | Full record | Related Record | Creation and change | Manual | Owner is Corporate Operations |
| **Headquarters Operational Records / State / Material Change** | **Generation One** | **Store directly** | Full record | Source domain per fact | Authored acts | Manual | Owner is Corporate Operations |
| Headquarters operational deadlines | Generation One when a coordination record; otherwise the authoritative deadline | **Store or reference** | Coordination deadlines only | Source where external | Authored acts | Manual | None |
| Working conversation | Conversation environment | **Do nothing** | Nothing | — | — | — | Never authoritative by existence |
| Brainstorming / speculation | Working environment | **Do nothing** | Nothing | — | — | — | Excluded unless formally promoted |

**Governing rule (Requirements Report §3):** store directly *only* what
Corporate Operations legitimately owns. Never copy data to make retrieval
convenient. **Every "Synchronize" cell is deliberately empty** —
Generation One synchronizes nothing, and no integration is designed here.

## 7. Operational Instance / Operational Record identity

Two identities, never one. The **Record** gets an opaque surrogate
identifier owned by the system. The **Instance** gets a designation that
survives correction, supersession, and re-admission of its Record.

The distinction pays for itself the first time a Record is found to have
misrepresented its matter: the Record is corrected or superseded while the
Instance designation persists, so history reconstructs to the *matter*
rather than to a row. Collapsing them would make "the record is wrong"
indistinguishable from "the matter changed" — Foundation §5's central
distinction, and OSPA S03 §3.24's rule that "the existence of a record does
not establish that operational work has occurred."

Neither identifier encodes classification, function, authority, venture,
sensitivity, or status. Display labels are separate from both and carry no
identity function.

## 8. State architecture

State is the **presently valid** Headquarters-relevant condition, held as
an open set of independently valued dimensions (§5.3).

**Prohibited by construction:** a single `status` column; a global status
enum; a shared status vocabulary across record kinds; any derivation of
State from the latest Material Change; any storage of "blocked" or
"needs attention" as a state value.

**Blocked and Attention are displayed, never stored, as state.** The
interface may render a derived "blocked" indicator from open blocking
assertions and a derived "requires attention" indicator from open
Attention Items. Both are read-only projections computed at read time. The
moment either is persisted onto the Record, invariants 1 and 3 fail
silently — which is precisely how this failure occurs in practice.

Each dimension value carries its own as-of and provenance, because
dimensions are sourced independently: a venture-sourced operating phase
and a compliance-sourced registration standing on the same Record have
different owners and different confirmation times.

## 9. Material Change architecture

Material Change is **authored, never derived**. A person asserts it, names
which of Foundation §7's materiality limbs it satisfies, and states the
consequence. No database trigger, row-diff, timestamp, or edit ever
produces one.

The two-timestamp rule is load-bearing: **occurred-at** (when the change
happened in the world) and **recorded-at** (when Headquarters learned of
it) are separate fields, both required. They are what make §19's
late-entry problem solvable rather than invisible.

Material Change entries are append-only. A mistaken entry is corrected by
a new entry referencing it (S10 §10.35 correction versus amendment), never
by editing or deleting — the corpus's existing practice, applied here.

Requirements Report §18.3's control is structural: the authoring form
**requires** the materiality limb and the consequence before it will
accept an entry. An entry that cannot state its consequence is not a
Material Change, and the interface should say so rather than accept it.

## 10. Founder Attention architecture

A distinct entity with its own lifecycle, referencing a Record rather than
living on it.

**Entry** requires all four Foundation §10 conditions: a qualifying
reason; consequence meaningful enough to warrant Founder involvement;
present rather than hypothetical appropriateness; and a statable expected
Founder role. The form requires each; three of four is not admission.

**Priority** is the three-value ordered vocabulary Immediate · Near-Term ·
Normal, held as **three distinct fields** — proposed (by the originating
function), normalized (by Corporate Operations, with reason), and override
(by the Founder Office) — never collapsed into one resolved value, so the
disagreement remains visible. **No numeric score, weight, rank, or
computed severity exists anywhere in the model**, and none may be added
without returning to the Founder Office.

**Continued standing** is passive: an item remains while its qualifying
condition remains. Nothing re-alerts merely because time passed
(Foundation §10).

**Exit** records which of Foundation §10's seven exit grounds applied.
Exit closes the Attention Item and **changes nothing** about the
underlying Record — which may remain active, incomplete, or blocked for
another reason. This is `fd-0012`'s attention-exit determination expressed
structurally.

## 11. Founder Attention admission and lifecycle

Nomination → admission decision → standing → exit, with the nomination
preserved regardless of outcome.

Functions and ventures **nominate**. Corporate Operations **admits** and
**normalizes**, owning semantic consistency of the Headquarters attention
representation. The Founder Office **overrides** priority.

**Non-suppression is structural.** A nomination flagged as independently
required by governing institutional authority has only two available
dispositions — admitted, or escalated to the Founder Office. "Not
admitted" is not offered for it. Corporate Operations cannot suppress what
governing authority independently requires the Founder to see, and the
architecture does not rely on anyone remembering that rule.

Not-admitted nominations are retained with their reason. A suppression
pattern must be visible in the record, not inferable only from absence.

## 12. Source-provenance architecture

Required on every represented fact: authoritative source domain · source
function or venture · source reference · as-of or confirmed-at ·
representation owner · known uncertainty or staleness.

Provenance is **required at creation**, not backfilled. Optional
provenance decays to absent provenance, and absent provenance is how a
representation quietly becomes a competing source of truth — Requirements
Report §18.1's shadow-system risk, whose stated control is that provenance
must be a requirement "from inception."

Foundation §21's boundary is enforced in the authoring vocabulary: the
system records *"Administration & Compliance has determined X, creating
operational consequence Y."* It provides **no way to express** *"Corporate
Operations has determined X"* about another function's domain. The
distinction lives in what the form permits, not in guidance text.

## 13. Dependency architecture

Dependencies exist independently of blocking, are created and retired on
their own terms, and carry the party they rest with.

A Dependency has **no blocking field**. Whether it presently blocks is
expressed only through a separate blocking assertion (§14), which is what
allows the same Dependency to block one Record and not another, or to
block today and not tomorrow (Foundation §13's worked example).

Dependencies may point at internal Records, external parties, conditions,
decisions, or resources. Cross-Record dependencies are the mechanism
behind Requirements Report §2.3's "dependency invisibility" problem.

## 14. Blocker architecture

A blocking assertion names: the blocked Record; the blocking condition or
Dependency; the start; the reason it satisfies both limbs of Foundation
§12's beginning test; and, when it ends, the end and which of §12's
enumerated ends applied.

Two rules the model enforces:

1. **Ending a blocking assertion does not complete the Record.** They are
   different objects, and no transition on one touches the other.
2. **A Record may hold several concurrent blocking assertions.** Removing
   one does not unblock the Record while others stand.

Foundation §12's exclusion is carried in the authoring requirement: a mere
inconvenience, preference, delay, or unresolved question is not a blocker,
and the assertion must state why meaningful advancement is prevented.

## 15. Handoff architecture

Source party · receiving party · expected action · Dependency created or
affected · disposition · escalation condition.

**No authority is represented, transferred, or implied.** The receiving
party owns the expected action within its own jurisdiction; the
transferring party retains its authority; neither acquires the other's.
Foundation §14's worked example — Corporate Operations hands a technical
requirement to Development; Development owns the technical work; neither
gains the other's authority — is the model's acceptance test.

Completion requires an actual disposition (Foundation §15).
**Acknowledgment is explicitly not a disposition** and is not offered as
one. A disposition that creates a new Dependency completes the Handoff
while the new Dependency stands independently — Foundation Example 7,
which a single generic status could not represent.

## 16. Deadline / Renewal / Follow-Up architecture

Three concepts, three shapes, **no shared parent entity**. A "due item"
abstraction over them would be the convenient modeling choice and is
prohibited: it is exactly the semantic collapse invariant 10 forbids.

- **Renewal** — a continuation requirement with an existing valid
  standing, a future continuation obligation, and a consequence of
  lapse. It may exist with **zero** Deadlines (test 7) and may generate
  several over time.
- **Deadline** — a consequential time boundary. Not every planned date
  qualifies; a target without consequence stays out (Foundation §16).
- **Follow-Up** — an expected subsequent action with an **optional** due
  date (test 8). It becomes Founder Attention only when its consequence
  warrants it, never automatically.

Foundation §19's registration example — one matter, one Renewal, one
Deadline, one Follow-Up, all distinct — is the acceptance test.

## 17. Concept-specific lifecycle and transition architecture

**There is no universal lifecycle and no universal state machine.**
Transition semantics exist only where Foundation §24 gives the transition
institutional meaning:

| Concept | Transitions represented |
| --- | --- |
| Founder Attention | nomination → admitted / not admitted / escalated; admitted → exited, with ground |
| Blocking assertion | asserted → ended, with ground |
| Handoff | open → disposed, by disposition kind |
| Deadline | pending → reached / passed |
| Renewal | outstanding → actionable → satisfied / lapsed |
| Follow-Up | outstanding → satisfied / moot / redirected / escalated |

Everything else has **no** lifecycle. Operational State holds independent
dimensions rather than moving through stages. Dependencies appear, change,
and cease to matter without a workflow. Material Changes are historical
occurrences, not objects that transition. Operational Records represent
different kinds of matters and share no state machine.

The `fd-0011` prohibition stands: no transition model is inferred from
OSPA S09 §9.28. The table above derives from Foundation §24 — the
prospective doctrine `fd-0011` required instead — and from nothing else.

## 18. Audit and history architecture

The minimum history for reconstruction, and no more:

1. State dimension values — append-only, never overwritten (S09 practice).
2. Material Changes — append-only, corrections by reference.
3. Attention admission, priority changes, and exit, with actor and reason.
4. Blocking assertion start and end.
5. Handoff disposition.
6. Representation corrections, distinguished from amendments (S10 §10.35).
7. Provenance changes, including confirmation events.

**Not** built: full event sourcing, a universal change feed, or an
event-log substrate. Requirements Report Capability 7 requires change
visibility "without becoming a comprehensive event-log system," and the
seven histories above are what reconstruction actually needs. The separate
technical audit entry (§5.5) exists for operability and is never a
Headquarters history.

## 19. Since Last Review mechanics

A **Review Event** is a Founder-scoped marker. Founder-scoped rather than
Headquarters-global, because the question is "what changed since *I* last
looked" and a global marker would let one reader's review consume
another's.

**The view is bounded by recorded-at, not occurred-at.** This is the
single most consequential mechanical choice in the blueprint. A matter
that *occurred* before the last review but was *recorded* after it
**appears**, marked as late-recorded with both timestamps shown. Bounding
by occurred-at would silently omit it, and the Founder could not detect
the omission by inspection — absence is invisible. Corrections surface the
same way, referencing what they correct.

Today / 7 Days / 30 Days remain available as secondary views, since they
are the same query with a different bound and are therefore technically
inexpensive (`fd-0011`).

**Open policy question:** whether recorded-at bounding is the Founder
Office's intended treatment. The architecture adopts the
nothing-silently-omitted default because it is the only choice whose
failure mode is visible, and carries the question to §40.

## 20. Representation freshness

**Qualitative, never a universal numeric SLA** (`fd-0012`; Foundation
§32.4).

Every represented fact carries confirmed-at and a representation owner.
Corporate Operations sets a **per-domain confirmation expectation** —
qualitative, per source domain, revisable — and the interface surfaces
"unconfirmed since {date}" against it. The governing question stays the
Founder Office's own: *would continued reliance on this representation
mislead responsible corporate action?*

No global staleness threshold, no numeric freshness score, no automatic
expiry, and no system-generated staleness alerts. Where confirmation is
unresolved, Foundation §22 governs: preserve the last confirmed
authoritative state, mark confirmation unresolved, seek clarification, and
**never silently substitute Headquarters' own conclusion**.

## 21. Venture snapshot

One snapshot per governed venture, carrying only the Requirements Report
§6 fields: identity · current standing · operating phase · high-level
objective · significant milestone or state · material blocker · major
dependency · parent decision required · significant recent change · source
of authoritative venture information.

Venture identity references the institutional `venture-registry.json`
(FD-V2's identifier-first, plane-separated model). **No venture task,
product, workflow, or lifecycle entity exists**, and the snapshot has no
child collections — the structural guarantee behind "summarize the
venture; do not reproduce the venture."

Huerta Group Publishing is the first and, in Generation One, only
instance. Whether the venture supplies its snapshot or Corporate
Operations derives it is an open Founder Office question (§40); the
architecture supports either, recording who supplied it as provenance.

## 22. Minimal relationship seam

Party · category · owning function or venture · disposition · next action
· source reference. Nothing further.

**Absent by construction:** pipeline, stage, score, deal, campaign,
activity history, enrichment, and lifecycle automation. Requirements
Report §18.5 names premature CRM as a specific overbuilding risk, and the
control is that the fields to build one do not exist.

Relationships enter only when they create a Headquarters operational
requirement — a follow-up, dependency, handoff, or attention condition
(Foundation §27). Inquiry records remain owned by the existing inquiry
infrastructure and are referenced, never ingested.

## 23. Financial visibility seam

QuickBooks and Accounting & Financial Management remain authoritative.
Generation One represents **operational consequence only**: a
capital-dependent blocker, a significant committed expenditure, a
financial exception warranting Founder judgment, a constraint affecting an
active priority.

Every displayed figure retains provenance to Accounting and an as-of date.
**The system cannot categorize transactions, compute statements, hold
balances, or maintain any account structure** — not by policy but because
no such concept exists in the model. Which Accounting outputs are exposed
is an open question to be settled *with Accounting*, not inferred by
Development (§40).

## 24. Administration & Compliance seam

Administration & Compliance retains authority over determinations,
filings, licensing, records, and regulatory interpretation. Headquarters
represents only operational consequence: a prerequisite, an approaching
renewal, a required Founder action, a standing that materially affects
operations, a reassessment trigger.

Case files, evidence, legal reasoning, applications, and correspondence
stay with the function. Which statuses automatically qualify for
Headquarters visibility is an open question (§40).

## 25. Governance visibility seam

Governance is made **legible by reference**, never duplicated. A Record may
cite a determination (`fd-` identifier), a governed record path, or a
venture registry entry, and state its operational effect.

Generation One is not the institutional repository, an alternate
decision-history system, a policy repository, or any mechanism capable of
changing governed standing. A summarized governance fact always displays
its authoritative reference alongside it, so the summary can never be
mistaken for the record — Requirements Report §18.8's control.

## 26. Current-state ownership and representation responsibility

**Source functions own authoritative truth. Corporate Operations owns
Headquarters representation fidelity.** The system encodes this as a
required, non-nullable representation owner on every fact, always
Corporate Operations, alongside a required source domain that is never
Corporate Operations for another function's facts.

Foundation §22's conflict procedure is a first-class capability, not a
convention: preserve the last confirmed authoritative state; mark
confirmation unresolved; seek clarification; never silently substitute.
"Confirmation unresolved" is therefore a representable condition, because
a system that cannot express doubt will express false certainty instead.

## 27. Authority and RLS boundaries

Access classes, using ADR-0006's provider-neutral vocabulary — **technical
categories, never institutional offices**:

| Class | Capability |
| --- | --- |
| Founder Office user | Read all; record review events; override attention priority; act on attention |
| Corporate Operations user | Full authoring within Headquarters representation; admit and normalize attention; set confirmation expectations |
| Source-function / venture user | Nominate attention; supply and confirm facts within their own domain; read what concerns them |
| Privileged system administrator | Operate the system; **no authoring authority**; administrative actions audited |
| Machine / integration identity | None in Generation One — no integration exists |

Deny-by-default, following the existing RLS-no-policy template
(architecture foundation §9). Every policy is additive from nothing.

**Technical permission is never institutional authority** (OSPA S02 §2.3
Principle 3, §2.7; ADR-0006). No role name may imply an institutional
office, and no access grant may encode unresolved constitutional
structure. An administrator can operate this system and hold no authority
whatever over what the institution does with it.

## 28. Module placement determination

**A separate application, in a separate repository, outside the public
website.**

Applying ADR-0003's criteria: **security boundary** — authentication
required, which the criteria make decisive for placement outside the
public application; **runtime model** — authenticated and interactive
versus static and public; **release cadence** — an internal tool iterating
independently of a stable public site; **data sensitivity** —
operationally consequential internal data that must not share a runtime or
credential boundary with public routes; **dependency coupling** — none
beyond shared design conventions, which is incidental coupling and never
justifies colocation; **reversibility** — a small separate application is
the easiest thing to discard if Generation One proves wrong.

ADR-0002's website boundary independently excludes it: "nothing requiring
authentication, client data beyond inquiries, or an internal workflow
belongs in it." ADR-0003's default for new institutional *runtime* systems
points the same way.

**This blueprint records the determination the criteria produce; it does
not adopt it.** A placement ADR is required (§34).

## 29. Environment prerequisites

Generation One stores **operationally consequential data** and therefore
crosses ADR-0005's mandatory isolation threshold. The consequences are not
optional:

- separate non-production data;
- environment-specific credentials;
- migration testing against non-production data;
- deliberate, owner-gated feature activation;
- rehearsed rollback.

**It may not launch production-first.** This is the sharpest departure
from current practice in this blueprint: the public website's
production-first discipline is correct for a stateless public site and
becomes unacceptable here. ADR-0005 requires that this system's first ADR
define its environments.

Observability scales with the same threshold: structured audit trails from
the first release (architecture foundation §9). Backup and recovery
expectations must be documented **before** the store holds irreplaceable
records.

## 30. Identity and authentication prerequisites

Generation One is **the first real consumer** of identity, which activates
ADR-0006. Identity is introduced **as a shared service from the start**,
since a second consumer is predictable.

Prerequisites, none implemented here: provider selection, against
ADR-0006's criteria — security posture, auditability, portability and exit
path, cost proportionality, operational burden; account lifecycle
(provision, review, revoke); least privilege and role separation; audited
administrative and sensitive actions; dedicated service identities;
credential rotation; environment-separated credentials; periodic
authorization review; confirmation for destructive operations.

Initial population is very small — the Founder, plus Corporate Operations
— which argues for the simplest defensible provider, not for improvising
authentication. ADR-0006 rejected improvisation explicitly.

## 31. Data topology determination

ADR-0004 holds future topology unresolved "until the second data-owning
system is authorized," and assigns the decision to **that system's ADR**.
Generation One is that system.

**The criteria produce: a separate Supabase project, not a second schema
in the existing one.** Sensitivity isolation — operational data and public
inquiry data have no reason to share a credential boundary; **credential
blast radius** — the existing project's credentials were scoped for a
contact form, and widening them to cover Headquarters operational data
enlarges the blast radius of the website's most exposed surface; **backup
and recovery independence**; **migration independence** — an internal tool
under active iteration must not put the live public inquiry path at risk;
**reversibility**. Only cost and operational proportionality argue the
other way, and weakly.

ADR-0004's rule stands regardless: the existing project **owns inquiry
records only** and is not the Company database. Per-domain treatment is in
§6; every domain resolves to Store Directly, Reference, Summarize, or Do
Nothing, and **no domain resolves to Synchronize**.

**Recorded as the determination the criteria produce, not adopted.** A
data-topology ADR is required (§34).

## 32. Manual operations intentionally preserved

Deliberately manual in Generation One (Requirements Report §13):
authoring every Operational Record and Material Change; assessing
materiality; nominating and admitting attention; recording handoffs and
dispositions; supplying and confirming venture snapshots; recording
financial and administrative consequence; identifying meaningful
relationships; and confirming freshness.

This is a design position, not a shortfall. Requirements Report §18.4:
automating immature workflows freezes assumptions before the institution
understands them. Manual curation is how Huerta Group learns what actually
deserves institutionalization — and each manual step that later proves
genuinely burdensome becomes the *evidence* for a future integration ADR.

## 33. Existing infrastructure reused

| Asset | Reuse |
| --- | --- |
| Repository conventions | Governed corpus, ADR practice, manifest and registry discipline, `npm run verify` |
| Validation patterns | The validator suite is the model for any structural checks the new system needs |
| Design system | DDR-0001–0010 tokens, typography, motion, interaction states — internal UI should look like Huerta Group |
| Deployment infrastructure | Vercel account scope, preview mechanics, deployment discipline |
| Database platform | Supabase as platform (a **separate project**, §31) |
| Deny-by-default posture | The inquiry system's RLS-no-policy template |
| Persistence-first pattern | Integration failure must never corrupt authoritative records |
| Audit conventions | Append-only history, correction-by-reference, status history never overwritten |
| Authorization patterns | None exist yet — Generation One establishes them (§27, §30) |

## 34. Required ADR sequence

Required **before** implementation. None is created or adopted here.

1. **Application and repository placement** (ADR-0003) — records the §28
   determination. First, because it bounds the rest.
2. **Data topology and the Supabase boundary extension** (ADR-0004) —
   records the §31 determination. ADR-0004 explicitly assigns this to
   this system's ADR.
3. **Environment architecture** (ADR-0005) — mandatory: this system
   crosses the isolation threshold and "its first ADR must define its
   environments."
4. **Identity provider and authentication** (ADR-0006) — first real
   consumer; provider selection against the recorded criteria.
5. **Authorization and RLS model** — the access classes in §27, expressed
   as deny-by-default policy, with the technical-permission-is-not-
   authority boundary explicit.
6. **Audit and history mechanism** — the seven histories in §18, and the
   Material-Change-is-authored rule that keeps them out of the technical
   audit trail.

A seventh, **domain model and semantic-preservation ADR**, is recommended:
it would carry the anti-collapse rules — no universal status, blocking as
a separate assertion, attention as a separate entity, no shared
due-item parent, recorded-at bounding — as accepted decisions rather than
as prose in a blueprint that a future contributor may not read.

## 35. Authentic-operations testing strategy

Generation One is validated by **operating Corporate Headquarters through
it**, not by synthetic fixtures. Foundation §26 requires exactly this, and
the institution has real matters available that exercise every distinction:

- **The Generation One program itself** — a Record with a dependency on
  Founder Office source transmission, a blocking assertion that began and
  ended, a handoff to Development with a returned disposition, and
  Material Changes distinct from all of them. It exercises tests 3, 4 and
  5 with real history.
- **The HGP venture snapshot** — parent-relevant standing without venture
  task reproduction (test 6).
- **Trade-name registration** — one matter carrying a Renewal, a Deadline,
  and a Follow-Up simultaneously (tests 7 and 8).
- **The custom-domain launch** — owner-gated, valid but unexecuted; state
  unchanged while attention may arise (test 2).
- **The notification standby** — a routine condition that should stay
  invisible at Headquarters (test 9).

**Acceptance is semantic, not functional.** The system passes when the
Founder can answer the three governing questions without reconstructing
state manually, *and* when no represented matter has been forced into a
shape that collapses a distinction. A representation that fits only by
flattening is a failure even if every feature works.

## 36. Future Command Center, CRM, and AI seams

Preserved conceptually, implemented nowhere. Each seam is *what the model
does not preclude*, never scaffolding built in advance:

- **Command Center** — the seven histories in §18 are the substrate later
  aggregation would need; none is built for that purpose.
- **CRM** — the relationship seam can grow fields; it has no pipeline
  shape to unwind.
- **Integration** — every domain in §6 records its update method, so a
  future ADR can convert a specific Reference into a specific
  Synchronize with evidence. Nothing is designed for it now.
- **Automated attention detection** — the qualifying reasons are already
  explicit, so rules could later *propose* nominations. They could never
  admit them: admission is a judgment, and §11's structure keeps it one.
- **AI-assisted querying** — deferred until the semantics are trustworthy
  in authentic use, per the Requirements Report's own condition.
- **Portfolio expansion** — the venture snapshot is per-venture from the
  start; additional governed ventures need no new machinery.
- **Historical operational intelligence** — accumulates as a by-product of
  §18; no analytics are built.

## 37. §31 semantic-conformance matrix

| # | Test | Mechanism | Answer | Failure mode prevented |
| --- | --- | --- | --- | --- |
| 1 | State change without Attention? | State dimensions and Attention Items are separate entities; no state change creates an Attention Item | **Yes** | Every update becoming an alert — the activity-feed failure |
| 2 | Attention without State change? | Attention Items are created independently and may cite a future condition | **Yes** | Attention derivable only from state diffs, hiding approaching obligations |
| 3 | Dependency without Blocker? | Dependency has no blocking field; blocking is a separate assertion | **Yes** | Every dependency presenting as blocked work |
| 4 | Blocker removed, matter incomplete? | Ending a blocking assertion touches nothing on the Record | **Yes** | Unblocking silently reading as completion |
| 5 | Handoff complete, Dependency remains? | Handoff disposition and Dependency are independent; a disposition may create a new Dependency | **Yes** | One generic status unable to hold Foundation Example 7 |
| 6 | Fact owned elsewhere, HQ owns representation? | Required source domain plus required representation owner, with no vocabulary for asserting another function's determination | **Yes** | Headquarters becoming a competing source of truth |
| 7 | Renewal before an approaching Deadline? | Renewal is its own entity with zero-to-many Deadlines | **Yes** | Renewal collapsed into a due date, losing the continuation requirement |
| 8 | Follow-Up without a Deadline? | Follow-Up's due date is optional | **Yes** | Every follow-up acquiring a fabricated deadline |
| 9 | Routine change invisible because immaterial? | Material Change is authored and must state a §7 materiality limb; row mutations live in a separate technical audit | **Yes** | The register degenerating into an undifferentiated event stream |
| 10 | Multiple simultaneous state dimensions? | State is an open set of independently valued, independently sourced dimensions declared per record kind | **Yes** | The single `status` column — the most likely failure of all |

All ten answer **Yes**.

## 38. Adversarial review — findings and repairs

An independent pass against the twelve rejection conditions found eight
defects in the first architecture. All were repaired by changing the
architecture; **no adopted semantics were altered to accommodate a
technical convenience.**

1. **Blocked as a state value.** The first model carried "blocked" among
   the state dimensions — convenient, and a collapse of Blocker into
   State. **Repair:** blocking is a separate time-bounded assertion; a
   blocked indicator exists only as a read-time projection (§8, §14).
2. **Material Change from row mutation.** Deriving changes from an audit
   trail would have made every edit a Headquarters event. **Repair:**
   Material Change is authored, must state a §7 materiality limb, and the
   technical audit is a separate, never-surfaced structure (§9).
3. **Attention as a flag on the Record.** A boolean would have made
   Attention a state value and destroyed entry/exit semantics. **Repair:**
   a distinct entity with its own lifecycle; a Record may carry several
   across its life (§10).
4. **Priority collapsed to one field.** Storing a single resolved priority
   would erase the proposal/normalization/override distinction and invite
   a numeric score. **Repair:** three distinct fields with actor and
   reason; no numeric representation anywhere (§10).
5. **A shared "due item" parent.** Deadline, Renewal and Follow-Up share
   fields, so a common parent was tempting. It is precisely the collapse
   invariant 10 forbids. **Repair:** three independent concepts, no shared
   parent (§16).
6. **Since Last Review bounded by occurred-at.** The intuitive bound would
   have silently omitted late-recorded matters — an undetectable failure.
   **Repair:** bound by recorded-at, display both timestamps, mark
   late-recorded entries (§19).
7. **Suppressible escalation.** Non-suppression was initially a policy
   note, leaving Corporate Operations structurally able to close a
   governance-mandated nomination. **Repair:** such nominations offer only
   admitted or escalated; not-admitted is unavailable (§11).
8. **Optional provenance.** Nullable provenance fields would have decayed
   to empty, turning representation into unsourced assertion. **Repair:**
   provenance required at creation; a fact without it is invalid (§12).

Re-tested against all twelve conditions after repair: State, Change and
Attention remain distinct; Material Change is consequence-based; no
dependency implies blocking; no handoff transfers authority; Corporate
Operations is never source-of-truth for external domains; Record is never
Instance; no universal status field or state machine exists; Founder
Attention is an exception layer; no numeric scoring exists; no numeric
freshness SLA exists; nothing authoritative is replicated; and no future
Command Center scope is implemented.

## 39. Risks and tradeoffs

1. **Manual maintenance decays.** The largest risk by far: a manually
   maintained register that stops being current becomes worse than no
   register, because it is trusted. Mitigation is qualitative freshness
   (§20) and the explicit representation of unconfirmed state — the
   architecture makes decay *visible* rather than preventing it. If decay
   occurs anyway, that is evidence for integration, not for automation
   built now.
2. **Semantic discipline erodes under delivery pressure.** Every
   anti-collapse rule here is more work than its convenient alternative.
   Mitigation: the §34 domain ADR, so the rules are accepted decisions
   rather than prose in a document a future contributor may never read.
3. **Identity work is on the critical path.** ADR-0006 accepted this
   deliberately, but it front-loads real cost onto a small internal tool.
4. **Environment isolation raises the floor.** Crossing the ADR-0005
   threshold means Generation One cannot be built the way the website was.
   Accepted: the alternative is an emergency retrofit.
5. **Single-user validation is weak validation.** With effectively one
   primary user, semantic errors may go unnoticed until a second user
   arrives. Mitigation: the §35 authentic matters exercise the
   distinctions deliberately rather than incidentally.
6. **Scope creep toward the Command Center.** Every seam in §36 is a
   temptation. Mitigation: Requirements Report §21 requires that material
   scope expansion return to the Founder Office rather than be treated as
   extensibility.
7. **Separate repository raises coordination cost.** Two repositories, two
   deploy paths, a design system used across both. Accepted: the security
   boundary is decisive, and reversibility favors the smaller separate
   thing.

## 40. Founder Office determinations required before implementation

1. **Authorization to implement.** Architecture resumption is not
   implementation authorization (`fd-0013`).
2. **Change horizon and late-entry treatment** (Requirements Report §19
   Q4) — confirm or replace the recorded-at bounding in §19. This is the
   one open question that changes what the Founder is *shown*.
3. **Venture snapshot responsibility** (§19 Q5) — venture-supplied or
   Corporate Operations-derived.
4. **Financial visibility boundary** (§19 Q6) — which Accounting outputs
   are exposed, determined **with Accounting**, not inferred by
   Development.
5. **Administrative visibility boundary** (§19 Q7) — which Administration
   & Compliance statuses qualify automatically.
6. **Adoption of the §34 ADR sequence.**
7. **Confirmation of the §28 placement and §31 topology determinations**,
   which this blueprint records but does not adopt.

## 41. Recommended bounded implementation sequence

Should implementation later be authorized:

1. ADRs 1–4 of §34 (placement, topology, environments, identity) — nothing
   is built until these are accepted.
2. Environment and identity foundations, with rollback rehearsed before
   any operational data exists.
3. ADRs 5–6 (authorization, audit), then the recommended domain ADR.
4. Operational Record, State dimensions, and Provenance — the core, and
   the first authentic use.
5. Founder Attention with nomination and admission.
6. Dependencies, blocking assertions, Handoffs.
7. Deadlines, Renewals, Follow-Ups.
8. Material Change and Since Last Review.
9. Venture snapshot (HGP).
10. Relationship seam — last, and only if authentic use demands it.

Steps 4 through 9 each enter authentic Headquarters use before the next
begins. If a step cannot represent a real matter without collapsing a
distinction, the sequence stops and the question returns to Corporate
Operations — the architecture is repaired, never the semantics.

## 42. Explicit implementation boundary

No application implementation · no schema · no migrations · no production
database change · no authentication implementation · no RLS implementation
· no CRM · no AI or agent capability · no integrations · no accounting
replication · no governance replication · no venture task management · no
advanced analytics · no Command Center automation · no universal workflow
engine · no notification infrastructure.

## 43. Confirmation that no implementation began

**No implementation began.** This blueprint is a documentation artifact.
No application code, schema, migration, database object, authentication
configuration, authorization policy, integration, environment, or
deployment configuration was created or modified. No ADR was created or
adopted. No production behavior changed. The only repository changes are
this document and its metadata registration.
