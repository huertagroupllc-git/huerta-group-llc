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

## Methodology (internal)

| Document | Canonical path | Purpose |
| --- | --- | --- |
| Methodology Foundation v1 | [`methodology/methodology-foundation-v1.md`](methodology/methodology-foundation-v1.md) | The complete authoritative approved methodology foundation (v1.0) — source of the eight initial Method Library records |
| Method Library — Technical Architecture | [`methodology/method-library-architecture.md`](methodology/method-library-architecture.md) | Repository-based Method Library architecture: records, registry/schema split, separate status dimensions, configurable approval, no runtime authorization |
| Method Library records | [`methodology/records/`](methodology/records/) | The seven derived records (mr-0002 – mr-0008); mr-0001 is the foundation itself. Metadata: `knowledge/method-registry.json` |

**Method Library maintenance** (see the architecture document for full
rules): the registry (`knowledge/method-registry.json`, schema
`knowledge/method-schema.json`) is the authoritative metadata store;
`npm run validate:methods` must pass with any methodology change.
**Adding any substantive record requires prior Methodology approval of
its substance** — the validator enforces exactly the approved record
set, so a new record requires updating the approved set with its
authorization. Provisional asset types are recorded but not assignable.
Substantive refinements require a new version and Methodology approval;
non-substantive corrections do not. Superseded records are retained,
never deleted, with supersession links. The five readiness designations
are updated independently of lifecycle status, and adaptations
(educational, publishing, software, public, IP) must retain source
traceability. Approval authority remains configurable pending
constitutional decision-rights architecture. Library presence creates
no methodological authority, and the Method Library is not a runtime
platform.

## Intellectual property (internal)

| Document | Canonical path | Purpose |
| --- | --- | --- |
| Intellectual Property Foundation v1 | [`intellectual-property/intellectual-property-foundation-v1.md`](intellectual-property/intellectual-property-foundation-v1.md) | The authoritative approved IP governance foundation (v1.0) — source of the six initial repository records; sectional prose pending verbatim insertion |
| IP Repository — Technical Architecture | [`intellectual-property/ip-repository-architecture.md`](intellectual-property/ip-repository-architecture.md) | Repository-based IP Repository architecture: separated status dimensions, authority/stewardship/custody roles, Corporate Headquarters boundary, no runtime or legal determinations |
| IP repository records | [`intellectual-property/records/`](intellectual-property/records/) | The five derived governance records (ip-0002 – ip-0006); ip-0001 is the foundation itself. Metadata: `knowledge/ip-registry.json` |

**IP Repository maintenance** (see the architecture document for full
rules): the registry (`knowledge/ip-registry.json`, schema
`knowledge/ip-schema.json`) is the authoritative metadata store;
`npm run validate:ip` must pass with any IP-repository change.
**Repository presence does not create IP admission, and IP admission
does not create legal rights.** Candidate assets enter as recorded
candidates with substantive-source authority; admission requires an IP
admission decision recorded with authority, basis, and date — and the
validator enforces exactly the approved record set, so any new record
requires updating the approved set with its authorization. Lifecycle,
governance status, maturity, readiness, disclosure, origin, ownership,
rights, legal confirmation, and commercial status are separate and
never collapsed; provisional classes are recorded but never assignable
as primary classes; superseded, declined, withdrawn, and archived
records are preserved, never deleted; client-derived and third-party
interests are flagged with explicit review states; legal and commercial
facts may be *recorded* as Corporate Headquarters / legal evidence
references but are never *created* by the repository; approval
authority remains configurable pending constitutional decision-rights
architecture; and no runtime IP platform exists.

## Architecture and development decisions

| Document | Canonical path | Purpose |
| --- | --- | --- |
| Internal Software Architecture Foundation | [`development/internal-software-architecture.md`](development/internal-software-architecture.md) | System boundaries, data ownership, integration/environment/identity direction, dependency sequencing, capability map. Authorizes no construction; creates no institutional authority |
| ADR Practice | [`development/decisions/adr-practice.md`](development/decisions/adr-practice.md) | When and how architecture decisions are recorded, statuses, supersession, manifest integration, technical-vs-institutional boundary |
| ADR-0001 — Institutional Knowledge Foundation | [`development/decisions/adr-0001-institutional-knowledge-foundation.md`](development/decisions/adr-0001-institutional-knowledge-foundation.md) | Establishes the machine-readable knowledge layer (schema, manifest, validation) that formalizes this index's governance |
| ADR-0002 — Public Website Boundary | [`development/decisions/adr-0002-public-website-boundary.md`](development/decisions/adr-0002-public-website-boundary.md) | The website stays a bounded public interface; inquiry intake colocated |
| ADR-0003 — Application and Repository Boundaries | [`development/decisions/adr-0003-application-and-repository-boundaries.md`](development/decisions/adr-0003-application-and-repository-boundaries.md) | Per-capability placement criteria; no global topology mandate |
| ADR-0004 — Data Ownership and Supabase Boundary | [`development/decisions/adr-0004-data-ownership-and-supabase-boundary.md`](development/decisions/adr-0004-data-ownership-and-supabase-boundary.md) | Current project owns inquiry records only; future topology criteria; ownership is architectural, not legal |
| ADR-0005 — Environment Strategy | [`development/decisions/adr-0005-environment-strategy.md`](development/decisions/adr-0005-environment-strategy.md) | Production-first preserved for the website; mandatory isolation threshold for sensitive systems |
| ADR-0006 — Identity and Access Direction | [`development/decisions/adr-0006-identity-and-access-direction.md`](development/decisions/adr-0006-identity-and-access-direction.md) | Provider-neutral identity direction; technical permissions ≠ institutional authority |

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
- **Capability registry**: `knowledge/capability-registry.json`
  (schema: `knowledge/capability-schema.json`) — the machine-readable
  institutional capability and system map (18 capabilities: maturity,
  dispositions, data ownership, dependencies, readiness, unresolved
  decisions). Validated by `npm run validate:architecture`
  (schema conformance, required-domain coverage, dependency
  resolution/acyclicity, governing-reference and evidence-path
  existence). Update the registry in the same change as any capability
  maturity change, new capability, dependency change, or boundary ADR —
  unresolved decisions stay visible until an authorized decision
  resolves them. Registry entries never authorize construction and
  never create institutional authority.

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
