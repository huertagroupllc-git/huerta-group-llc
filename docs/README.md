# Huerta Group LLC — Documentation Index

Canonical reference documents for this repository. Each document exists in
exactly one authoritative location; link to these files rather than
copying their contents.

## Governing documents

| Document | Canonical path | Purpose |
| --- | --- | --- |
| Huerta Group LLC Constitution | [`governance/huerta-group-constitution.md`](governance/huerta-group-constitution.md) | The highest internal authority. Currently ratified: Articles I–III (record awaits verbatim ratified text) |
| Vision Foundation for Development | [`governance/vision-foundation-for-development.md`](governance/vision-foundation-for-development.md) | Approved strategic foundation for all technology and development decisions |
| Development Standards | [`development/development-standards.md`](development/development-standards.md) | How systems are designed, implemented, reviewed, documented, and maintained |
| Bounded Autonomous Completion and Verification Standard | [`development/bounded-autonomous-completion-standard.md`](development/bounded-autonomous-completion-standard.md) | Default execution method for consequential development tasks (loop engineering, builder–inspector separation, evidence-based completion); a companion to the Development Standards |

Current-implementation documentation lives in the repository root
[`README.md`](../README.md).

## Launch documentation

| Document | Canonical path | Purpose |
| --- | --- | --- |
| Launch Readiness | [`launch/launch-readiness.md`](launch/launch-readiness.md) | Authoritative launch-readiness record: production state, verified limitations, navigation capacity, protected owner decisions |
| Custom-Domain Migration Plan | [`launch/custom-domain-migration-plan.md`](launch/custom-domain-migration-plan.md) | Plan (not execution) for the later owner-authorized move to the official domain |
| Official Launch Checklist | [`launch/official-launch-checklist.md`](launch/official-launch-checklist.md) | Phased, testable checklist; owner-gated actions marked |
| Rollback Plan | [`launch/rollback-plan.md`](launch/rollback-plan.md) | Git, platform, environment, canonical, and DNS rollback procedures and boundaries |

## Development decisions

| Document | Canonical path | Purpose |
| --- | --- | --- |
| ADR-0001 — Institutional Knowledge Foundation | [`development/decisions/adr-0001-institutional-knowledge-foundation.md`](development/decisions/adr-0001-institutional-knowledge-foundation.md) | Establishes the machine-readable knowledge layer (schema, manifest, validation) that formalizes this index's governance |

## Institutional knowledge layer

The documentation governance defined in this index is formalized as a
machine-readable layer (see ADR-0001 for the full decision):

- **Metadata schema**: `knowledge/schema.json`
- **Corpus manifest**: `knowledge/manifest.json` — one record per
  governed document under `docs/`
- **Validation**: `npm run validate:knowledge` — verifies schema
  conformance, exact corpus coverage, path existence, identifier and
  path uniqueness, and relationship integrity; fails non-zero with one
  line per defect

Maintenance rules:

- **When to update**: whenever a document under `docs/` is added,
  moved, retitled, reclassified, superseded, or removed, update the
  manifest in the same change and run `npm run validate:knowledge` —
  the validator enforces exact one-to-one coverage.
- **Identifiers**: stable kebab-case slugs derived from the filename
  stem (e.g. `vision-foundation-for-development`); the one exception is
  this index itself (`documentation-index`, since its stem `README` is
  a filesystem convention, not a document name); never positional,
  never timestamps; existing documents are not renamed to satisfy the
  identifier system.
- **Superseded and historical documents**: never deleted to keep the
  index tidy — mark the record's `status` (`superseded` /
  `historical`) and link `superseded-by` to the replacement; git
  history remains the version record.
- **Conflicts and uncertainty**: unresolved metadata is recorded
  transparently (`Unspecified` classification, `unspecified` tier, the
  `unresolved` list) — never fabricated, and never "resolved" through
  metadata. Conflicts between authoritative documents follow this
  index's escalation rule.
- **Authority**: metadata and the manifest are technical indexing
  artifacts. They create no institutional authority; the source
  documents remain authoritative, and documents are never duplicated to
  simplify indexing.
- **Scope limits**: the knowledge layer authorizes no retrieval system,
  AI use, database, portal, or public disclosure of any document; each
  of those requires separate authorization.

## Hierarchy of authority

1. **Huerta Group LLC Constitution** — the highest internal authority.
2. **Vision Foundation for Development** — translates the Company's
   identity and long-term direction into strategic guidance for
   technology.
3. **Other formally approved Company-wide strategy, methodology, policy,
   and governance documents** — govern their respective subjects and must
   remain consistent with the Constitution and Vision Foundation.
4. **Development Standards and approved architectural decisions** —
   govern implementation methods and technical quality.
5. **Individual task instructions** — govern the immediate assignment but
   may not silently override higher authority.

When documents at different levels appear to conflict, development must
pause the conflicting portion, identify the issue, and request an
explicit decision — never choose whichever instruction is easiest to
implement.

An individual task may authorize a clearly stated exception to a
lower-level development standard. It may not amend or override
constitutional text or Company-wide strategic authority. Formal
constitutional amendments and approved revisions to governing documents
must be identified as such; ordinary code changes are never authority to
alter them.

## Document classifications

| Classification | Meaning |
| --- | --- |
| **Ratified Constitutional Authority** | Binding constitutional text, changeable only through the future formal amendment process |
| **Approved Strategic Authority** | Company-wide strategic direction approved by the appropriate authority (includes the Vision Foundation for Development) |
| **Approved Methodology, Governance, and Policy** | Documents governing defined Company functions, subordinate to constitutional and strategic authority |
| **Development Standards and Architecture Decisions** | Technical implementation rules and approved architectural decisions |
| **Current Implementation Documentation** | Descriptions of what the repository and deployed system currently contain |
| **Planned Capability** | Approved work not yet implemented |
| **Long-Term Vision** | Possible or intended future direction — never to be represented as current functionality or guaranteed implementation |

These classifications exist to prevent strategic aspirations from being
mistaken for completed software.
