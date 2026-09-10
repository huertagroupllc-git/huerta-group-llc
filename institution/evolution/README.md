# Institutional Evolution Log

**Classification: Repository Standard** (this governance note is
repository-scoped; the log's records are Institutional Records).
Established as Phase Zero by Founder Office determination FO-6
(fd-0003), immediately after the Repository Foundation migration.

## Purpose and authority boundary

The Evolution Log preserves significant institutional evolution —
foundations established, determinations issued, capabilities changed,
structures reorganized, corrections made — as durable, citable
repository records supporting institutional learning, historical
traceability, future governance refinement, methodology development,
and future educational and publication work.

**The log records evolution; it never creates it.** An entry evidences
that something happened and points at the authorities and artifacts
involved. Governing authority remains entirely with the underlying
approved institutional artifacts and decision authorities. An event
absent from the log is not thereby unauthorized; an event present in
the log is not thereby approved.

## What qualifies

The threshold is **material institutional evolution**: a durable change to
what the institution *is*, how it is governed, how it is structured, or where
its truth lives. The Phase Zero standard said "significant"; `fd-0038`
(FD-EL-4) requires the test stated, so that it is applied consistently rather
than judged afresh.

An event qualifies when it materially changes one or more of: institutional
identity · constitutional structure · governance authority · the institutional
operating model · source-of-truth architecture · organizational structure or
functional responsibility · methodology architecture · IP governance ·
education and workforce architecture · platform architecture · a major system
boundary · venture or portfolio standing · client-engagement operating
doctrine · compliance posture · significant institutional product direction ·
or a previously governed institutional state that is established, superseded,
retired or materially revised.

**The five questions.** A candidate qualifies when the answer to all five is
yes:

1. Did authoritative institutional state materially change?
2. Would a future operator misunderstand Huerta Group's evolution if this were
   absent?
3. Did authority, structure, doctrine, a system boundary, a source of truth,
   an institutional capability or a major operating direction change?
4. Is there authoritative evidence for **both** the prior and the new state?
5. Is this more than routine implementation of an already-governed decision?

A qualifying entry requires all three of: material institutional consequence,
authoritative support, and durable relevance.

## What does not qualify

Excluded by default, and none of these becomes an entry merely because it
touched repository files:

individual commits · bug fixes · minor visual refinements · editorial and copy
corrections · formatting · ordinary operational transactions · one-off client
records · temporary investigative states · **unratified proposals** ·
brainstorming and transient discussion · implementation progress that does not
alter institutional state · routine dependency upgrades · ordinary test or CI
changes.

Two exclusions are worth stating plainly because they are the ones most often
argued with. **A proposed decision is not an evolution** — an ADR at *Proposed*
records an intention, and institutional state changes when it is ratified.
**Implementing an already-governed decision is not a second evolution** — the
evolution was the decision; the implementation is evidence that it happened,
and belongs in the entry for that decision or in the ordinary repository
history.

## Architecture

- **Records:** `records/evo-NNNN-<slug>.md` — sequential, stable,
  never reused, never deleted. Narrative record with a structured
  header.
- **Index:** [`INDEX.md`](INDEX.md) — the human-readable ledger; lists
  every record, newest last (append-only).
- **Template:** [`TEMPLATE.md`](TEMPLATE.md) — the required record
  structure.
- **AI-assisted maintenance:** [`AI-MAINTENANCE.md`](AI-MAINTENANCE.md) —
  the procedure AI assistance follows after a material determination,
  required by `fd-0038` (FD-EL-5).
- **Registry:** `institution/metadata/registries/evolution-registry.json`
  (schema `institution/metadata/schemas/evolution-schema.json`) — the
  machine-readable metadata store.
- **Validation:** `npm run validate:evolution` (part of
  `npm run verify`) — schema conformance, identifier/path uniqueness
  and existence, INDEX/registry/directory three-way coverage,
  decision-reference resolution against the determinations register
  and Decision History, and the retrospective-evidence rule.

## Record requirements

Every record carries: identifier · title · date · institutional
domain · type of evolution · prior state · change or development ·
reason or evidence · authority involved · governing decision
references (fd-/ADR identifiers) · canonical artifact references ·
implications · dependencies · supersession or later-refinement
references · historical notes. Fields that genuinely do not apply are
marked "Not applicable"; unknown facts are marked unknown — never
completed by inference.

## Maintenance workflow

1. A significant institutional event occurs (or is authorized).
2. The implementing office drafts the record from the template, citing
   the governing determination/decision records and canonical
   artifacts as evidence.
3. The record, its INDEX line, and its registry entry are added in the
   same change; `npm run verify` must pass.
4. Records are append-only history: corrections are made by a **later
   correcting record** that references the corrected one (recorded in
   both records' refinement references) — earlier records are never
   silently edited or deleted. Supersession of the *subject matter*
   lives with the governed artifacts; the log only cross-references it.

## Founder Office integration

Records documenting Founder Office decisions cite the determinations
register (`fd-NNNN`) as their decision reference; the register remains
the authoritative decision record. Where an evolution record reveals a
gap requiring institutional decision, the gap is escalated to the
Founder Office, not resolved in the log.

## Retrospective strategy

Broad retrospective population was **not** authorized with Phase Zero;
the log begins prospectively. Sufficiently evidenced historical
milestones (e.g., the foundation phases preserved in git history and
the determinations register) may be added later **only** under express
Founder Office authorization; such records must be clearly marked
`retrospective: true` and cite their evidence (commits, instruments,
fd-records). Fabricated or inferred history is prohibited.

**`fd-0038` (FD-EL-2) is the first such authorization**, and it is
bounded: only material institutional evolution supported by
authoritative repository evidence, preferring a small set of strong
entries to broad speculative history. Records added under it carry
`retrospective: true` and cite `fd-0038` as their
`retrospectiveAuthorization`. The authorization is not a licence to
complete the log's history; where the repository records no
determination, no entry is made and the gap is surfaced.
