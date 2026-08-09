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

## Architecture

- **Records:** `records/evo-NNNN-<slug>.md` — sequential, stable,
  never reused, never deleted. Narrative record with a structured
  header.
- **Index:** [`INDEX.md`](INDEX.md) — the human-readable ledger; lists
  every record, newest last (append-only).
- **Template:** [`TEMPLATE.md`](TEMPLATE.md) — the required record
  structure.
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
