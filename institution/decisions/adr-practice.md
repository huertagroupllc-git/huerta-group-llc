# Architecture Decision Record Practice

**Classification: Development Standards and Architecture Decisions**

Defines how Huerta Group LLC records consequential technical decisions.
Grounded in the Development Standards' written-decisions provision and
the ADR-0001 precedent. ADRs record **technical** decisions; they never
create institutional authority, and they never resolve institutional
questions — those belong to the owner and the governing hierarchy.

## When an ADR is required

A decision needs an ADR when it materially shapes system boundaries,
data ownership, repository structure, environments, identity, security
posture, vendor commitments with real blast radius, or anything a future
contributor would otherwise have to reverse-engineer. **Not** required
for: routine implementation choices within existing patterns, content
changes, dependency patches, or anything already governed by an existing
ADR or standard.

## Convention

- **Location/naming:** `institution/decisions/adr-NNNN-<slug>.md`,
  sequential four-digit numbers, kebab-case slug.
- **Classification header:** `Development Standards and Architecture
  Decisions` (authority tier 4 as an approved architecture decision).
- **Status values:** `Proposed` → `Accepted` | `Rejected`; later
  `Superseded by ADR-NNNN`. Status changes are edits to the status line
  with git history as the record.
- **Required sections:** Status · Context (including governing
  references consulted) · Options considered (briefly; omit only when
  genuinely none existed) · Decision · Consequences and limitations ·
  Unresolved institutional dependencies (explicitly listed, never
  silently resolved).
- **Validation evidence:** where a decision is mechanically checkable
  (registry values, paths), the ADR names the check
  (`npm run validate:architecture` / `validate:knowledge`).
- **Supersession:** a superseding ADR links both directions; the old ADR
  is retained (status updated, `superseded-by` relationship in the
  knowledge manifest) — never deleted.
- **Knowledge manifest:** every ADR is a governed document — add its
  record to `knowledge/manifest.json` in the same change and run
  `npm run validate:knowledge`.
- **Ratification:** decisions within development's technical authority
  are Accepted by development under the bounded standard. Any ADR whose
  substance touches institutional policy, Company strategy, commercial
  terms, disclosure, or constitutional matters requires the owner's
  explicit ratification before Accepted status — when in doubt, it
  requires the owner.

## Technical vs institutional decisions

An ADR may decide *how systems are built and bounded*. It may never
decide *what the institution is, offers, owns, teaches, publishes, or
discloses*. Where a technical decision depends on an unresolved
institutional question, the ADR records the dependency as unresolved and
stops there.
