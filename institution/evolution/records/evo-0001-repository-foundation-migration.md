# evo-0001 — Repository Foundation Migration and Evolution Log Activation

**Classification: Institutional Record** — evolution record
(evidentiary, non-governing).

- **Date:** 2026-08-08
- **Institutional domain:** repository/platform
- **Type of evolution:** structure_reorganization
- **Retrospective:** false

## Prior state

The repository held its governed institutional documentation in a flat
`docs/` tree mixed across authority classes, with metadata under
`knowledge/` and validators under `scripts/`. Approval provenance was
conversation-dependent (no repository-native determination records);
pre-approval working material had no sanctioned staging location (the
OSPA recovery set sat untracked inside `docs/`, breaking corpus
validation); validation ran only when manually invoked; the execution
standard bound a specific model and a personally named escalation
authority. Evidence: Deliverable A (Repository Audit) and Deliverable
B (Governance Mechanism Audit), accepted per fd-0004; baseline commit
`4dc354e` (tag `pre-migration-baseline`).

## Change or development

The repository was reorganized into the approved single-repository
layered architecture: canonical institutional governance assets under
`institution/` (governance, foundations, standards, decisions,
technical, operational, metadata, validation, evolution), the
workbench established outside the corpus with the OSPA recovery set
staged uncommitted, the canonical corpus rescoped, the Founder Office
determinations register introduced (fd-0001…fd-0004), the
documentation index placed as a Repository Standard, CLAUDE.md and
AGENTS.md governed, operational facts made repository-native, the
authorized standard amendments applied (model-neutral configuration;
Founder Office escalation; duplication by reference), the canonical
verification gate (`npm run verify`) and minimal CI established, and
this Institutional Evolution Log activated as Phase Zero.

## Reason or evidence

Authorized by the Repository Foundation Project instruments:
Deliverables A–D accepted (as modified) and the migration execution
instrument (determinations FO-1…FO-7). Evidence: fd-0001…fd-0004;
ADR-0007; the migration commit series on branch
`repository-foundation-migration` from tag `pre-migration-baseline`;
migration-gate verification (empty website-code delta vs baseline,
canonical source bodies unchanged, route inventory identical, full
gate green).

## Authority involved

Founder Office (governing authority; determinations and acceptances);
Platform & Systems Development (implementing office).

## Governing decision references

fd-0001 · fd-0002 · fd-0003 · fd-0004 · ADR-0007 (with ADR-0001's
corpus provision superseded; ADRs 0002–0006 unchanged).

## Canonical artifact references

`institution/README.md` · `institution/standards/repository/documentation-index.md` ·
`institution/standards/repository/canonical-source-preservation.md` ·
`institution/standards/repository/repository-verification.md` ·
`institution/governance/determinations/` · `workbench/README.md` ·
`institution/decisions/adr-0007-repository-foundation-migration.md` ·
`.github/workflows/verify.yml` · `institution/evolution/README.md`

## Implications

Institutional governance, approval provenance, and operational
execution rules are now repository-native and mechanically verified;
future foundations, standards, determinations, and evolution records
have defined homes and admission paths; Design System and website
redesign work can resume on a stable structure without further
reorganization.

## Dependencies

Depended on: the five committed institutional foundations and their
validators; the accepted Deliverables A–D. Now depended on by: all
future governed repository work, which enters through this structure
and gate.

## Supersession / later refinement references

None.

## Historical notes

The OSPA canonical recovery set (S01–S04, S09, S10) remains recognized
but unadmitted in the workbench; Sections S05–S08 and S11–S15 remain
unavailable and must not be reconstructed. Seven approval-provenance
deficiencies predating the determinations register are recorded in
fd-0004.
