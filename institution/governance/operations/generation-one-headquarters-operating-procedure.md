# Generation One — Initial Headquarters Operating Procedure

**Classification: Institutional Record** — operating procedure (evidentiary,
non-governing). Describes how to operate the already-adopted Generation One
model. It establishes no new operational semantics and expands no authority.

- **Date:** 2026-08-19.
- **Governing:** Corporate Operations Semantics Foundation V1 · Generation One
  Requirements Report · ADR-0008 through ADR-0020 ·
  [`fd-0014`](../determinations/fd-0014-generation-one-construction-authorization.md).
- **Applies from:** Founder Office authorization of production launch. Until
  then it governs pre-production use only.

Every rule below restates something already adopted. Where this procedure and
a governing source appear to differ, **the governing source wins** and the
discrepancy returns to Corporate Operations rather than being resolved here.

---

## 1. Who may sign in

Only provisioned accounts. There is no registration: the application exposes no
path to create an actor, and the provider refuses self-registration. Accounts
are created out-of-band by an administrator against the project directly
(ADR-0020).

Each account maps to exactly one **technical access class**. These are
technical categories and **never institutional offices** — holding one confers
no authority over what the institution does.

| Class | May |
| --- | --- |
| Founder Office | Read everything · record Review Events · override Attention priority · act on Attention |
| Corporate Operations | Author Headquarters representation · admit and normalize Attention · set confirmation |
| Source function / venture | Nominate Attention · supply and confirm facts **in its own domain only** · read what concerns it |
| System administration | Operate the system. **Authors nothing. Reads no Headquarters representation.** |

An identity with no actor record can read nothing. That is the intended
behaviour, not a fault.

**Sign out when finished on a shared or unattended machine.** Sign-out revokes
at the provider, so a copied session cannot be refreshed back to life.

## 2. Who maintains the register

**Corporate Operations & Command Management** authors and maintains the
Headquarters representation and owns its fidelity. Source functions supply and
confirm facts within their own jurisdiction, and nominate matters for Founder
attention. The Founder Office reads, overrides priority, acts, and records
reviews.

Corporate Operations owns **the representation**, never the underlying truth.
It may record *"Administration & Compliance has determined X, creating
operational consequence Y."* It may not record that Corporate Operations
determined X. The interface provides no way to express the latter.

## 3. Admitting a matter

A matter earns a Record only where representing it supports awareness,
coordination, decision, dependency management, escalation, time-sensitive
action, follow-up, material-change visibility, or consequential review.
**Routine activity does not earn a Record by occurring.**

Admission captures two identities, never one: the **Instance** — a stable
designation for the real-world matter, which survives correction and
supersession — and the **Record**, which is how Headquarters represents it.

If a Record is later found to misrepresent its matter, **supersede it and
create a corrected Record against the same Instance**. Do not edit it. Identity,
admission ground, and source provenance are frozen after creation, and the
system will refuse the edit.

## 4. Recording provenance

Every represented fact requires, at creation: the authoritative source domain,
the source function or venture that owns the truth, a reference to the
authoritative record, and — where meaningful — when it was confirmed.

A fact without provenance is **invalid, not incomplete**. The form will not
accept it.

The representation owner is always Corporate Operations and is never an input.

## 5. Maintaining State

State is a **set of dimensions declared per record kind**, each independently
valued and independently sourced. There is no single status, and there must
never be one.

- Declare a dimension before using it, with the vocabulary it may take. A value
  outside that vocabulary is refused.
- A dimension named `status`, `state`, `stage`, `blocked`, `attention` or
  `priority` is refused. If that feels restrictive, the right response is to
  name the institutional condition — not to find a synonym.
- Recording a new value **supersedes** the standing one. The prior value
  remains readable. Values are never rewritten, and the system will refuse.
- Give each dimension its own provenance: a venture-sourced operating phase and
  a compliance-sourced registration standing on the same Record have different
  owners and different confirmation times.

**"Blocked" and "requires attention" are never State values.** Both are shown
as read-time indicators derived from open blocking assertions and open
Attention Items.

## 6. Recording Material Change

A Material Change is **authored deliberately**, never produced by editing
something. Recording one requires three things:

1. what changed;
2. **which limb of Foundation §7** makes it material;
3. the **operational consequence**.

An entry that cannot state its consequence is not a Material Change — it is an
edit, and the system will refuse it. That friction is the control. Typo fixes,
formatting, routine record touches, ordinary task completion, and restatements
of unchanged conditions stay invisible at Headquarters.

**Occurrence time.** Where the change's real-world time is known, record it.
Where it is not, mark it unknown. **Never infer it from the recording time** — a
fabricated occurrence time is worse than an absent one, and the interface says
so rather than defaulting.

**Corrections** are new entries referencing what they correct. Nothing is
edited or deleted.

Headquarters materiality is Corporate Operations' jurisdiction. A source
function that believes a change is material supplies the fact and, where
warranted, nominates Attention.

## 7. Founder Attention

An **exception layer**, not an inbox. An empty queue is a legitimate and
expected condition.

**Nomination.** Any function or venture may nominate, stating the qualifying
reason and why Founder involvement is warranted. Where governing institutional
authority independently requires the Founder to see a matter, mark it
**governance-mandated** — the system will then permit only *admitted* or
*escalated*, and will refuse to record it as not admitted.

**Admission.** Corporate Operations admits, and must state all four entry
conditions: a qualifying reason, the consequence, why Founder involvement is
presently appropriate rather than hypothetically useful, and the expected
Founder role. **Three of four is not admission.** A nomination that is not
admitted is retained with its reason.

**Priority** is Immediate · Near-Term · Normal, held as three separate values —
what the function proposed, what Corporate Operations normalized, what the
Founder Office overrode. They are never collapsed, and **nothing is scored,
weighted or ranked**.

**Standing** is passive. An item remains while its condition remains. Nothing
re-alerts because time passed.

**Exit** when Founder involvement is no longer required, recording which of the
seven grounds applied. **Exit changes nothing about the matter**, which may
remain active, incomplete, or blocked for another reason.

## 8. Dependencies, Blockers, Handoffs

**Dependency** — what a matter relies upon, and who it rests with. A dependency
does **not** mean work has stopped, and carries no blocking field.

**Blocker** — a separate, time-bounded assertion that something *presently
prevents meaningful advancement*. Both limbs must be stated: what is
unavailable, unresolved, unauthorized or unsatisfied; and why the remaining
available work is insufficient to be meaningful progress. **Inconvenience,
preference, delay, or an unresolved question is not a blocker.**

End a blocking assertion when the condition ceases, recording which enumerated
end applied. **Ending it completes nothing** — the matter may remain incomplete,
and other assertions may still stand.

**Handoff** — a transfer of *expected action*, never of authority. Record the
source party, the receiving party, and the expected action. Close it with an
actual disposition. **Acknowledgment is not a disposition** and is not offered
as one. A disposition may complete the handoff while creating a new dependency
that stands on its own.

## 9. Renewals, Deadlines, Follow-Ups

Three things, kept apart, and one matter may carry all three.

- **Renewal** — a continuation requirement with an existing standing and a
  consequence of lapse. It may exist with no deadline at all.
- **Deadline** — a time boundary whose passing has consequence. A target date
  without consequence stays out of Headquarters representation.
- **Follow-Up** — an expected subsequent action. **Its due date is optional and
  must not be invented.** It becomes Founder Attention only when its
  consequence warrants it.

## 10. Using Since Last Review

The Founder Office's primary view. It shows everything **recorded** since that
reader's own last review — including matters that *occurred* before it, marked
as late-recorded with both timestamps shown. Nothing is omitted for having
happened earlier than it was reported.

Review Events are **reader-scoped**: one reader's review never consumes
another's. Recording one is the Founder Office capability.

Today / 7 Days / 30 Days are conveniences. They do not replace this view.

## 11. Stale or disputed source truth

When a source-domain fact can no longer be confirmed, or Headquarters and the
source disagree:

1. **preserve the last confirmed authoritative state** — do not overwrite it;
2. mark confirmation **unresolved**, stating what is unresolved;
3. **seek clarification from the authoritative function**;
4. **never silently substitute Headquarters' own conclusion.**

Confirmation changes are recorded as events, so the history shows when doubt
arose and when it was settled.

Freshness is a **judgement, not a timer**. Nothing expires automatically,
nothing alerts on age, and no score exists. The governing question stays: *would
continued reliance on this representation mislead responsible corporate
action?* If a materiality classification is disputed, Corporate Operations
ordinarily governs Headquarters materiality, subject to Founder Office
escalation.

## 12. Backups and recovery

**Take a backup before any migration, and on a deliberate cadence thereafter.**
`npm run backup` produces a four-part artifact and a digest manifest, written
outside the repository. Backups carry the sensitivity of the register itself:
they are not placed in shared storage or attached to messages.

**Check a backup by verifying its digests**, not by observing that a file
exists.

**Recovery** targets a new, empty Supabase project — never a live one. Restore
in order: roles, structure, identity, Headquarters data. Then run
`npm run verify:restore`, which is not optional: it proves the structure
returned, that representative matters returned with their history and
provenance, that **the restored register still refuses what the original
refuses**, and that restored identities can authenticate and still map to their
access class.

Two rules recovery depends on, learned by rehearsing rather than reading:
**identity ids must be preserved, not regenerated** — every authored fact
references its author — and **referential integrity after a restore must be
validated, never assumed**, because a data-only load does not enforce it.

The full procedure, the rehearsal evidence, and the failure modes it exposed
are in the runtime repository at `docs/backup-and-recovery.md`.

## 13. What remains manual, deliberately

Authoring records and material changes · assessing materiality · nominating and
admitting attention · recording handoffs and dispositions · supplying and
confirming venture snapshots · recording financial and administrative
consequence · identifying meaningful relationships · confirming freshness ·
provisioning accounts · taking backups.

This is a design position. Automating immature workflows freezes assumptions
before the institution understands them. **A manual step that proves genuinely
burdensome is evidence for a future integration decision** — bring it back as
evidence rather than working around it.

## 14. What must return to its source system

Generation One represents; it does not decide. The following are recorded here
only as operational consequence, and **authoritative action happens in the
source domain**:

| Matter | Authoritative owner |
| --- | --- |
| Accounting facts, figures, classifications | Accounting & Financial Management (and its systems) |
| Filings, licences, registrations, compliance determinations | Administration & Compliance |
| Governed decisions, standing, policy | The governance authorities and this corpus |
| Venture operational detail, tasks, products, workflow | The venture |
| Inquiry source material | The existing inquiry infrastructure |

If a matter cannot be represented here without distorting one of the adopted
distinctions, **stop and return the question to Corporate Operations**. The
architecture is repaired; the semantics are not.

## 15. What this system will never do

It will not synchronize anything, replicate a ledger or a case file, manage
venture tasks, become a CRM, score or rank anything, notify anyone, or decide
what is material on your behalf. Those absences are the design, and a request
for any of them is a scope question for the Founder Office.
