# ADR-0001 — Institutional Knowledge Foundation

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Decision record location:** established here under
  `institution/decisions/`, per the Development Standards provision
  that consequential technical choices are recorded "in the README
  architecture section, a migration comment, or a decision record under
  `docs/development/`".

## Purpose

Huerta Group LLC already governs its repository documentation through an
explicit manual practice: a documentation index
([`docs/README.md`](../../README.md)) that defines document
classifications, a five-level hierarchy of authority, a
canonical-location rule ("each document exists in exactly one
authoritative location; link … rather than copying"), and a
conflict-escalation rule. This decision formalizes that existing
practice into a machine-readable institutional knowledge layer — so the
corpus becomes traceable, verifiable, and consumable by future
authorized systems — **without changing what any document is, says, or
governs**.

## Decision

Three technical artifacts are added, plus a validation mechanism:

| Artifact | Location | Role |
| --- | --- | --- |
| Metadata schema | `knowledge/schema.json` | Defines the shape of document records and of the manifest (JSON Schema 2020-12) |
| Corpus manifest | `knowledge/manifest.json` | One metadata record per governed document — an **index**, never a content store |
| Validator | `scripts/validate-knowledge.mjs` (`npm run validate:knowledge`) | Deterministic, dependency-free verification of schema conformance, corpus coverage, path existence, identifier/path uniqueness, and relationship integrity |

The relationship among the parts: **source documents remain the
knowledge**; the schema defines how they are described; the manifest
describes them; the validator proves the description is complete and
internally consistent. Nothing in the metadata layer restates, replaces,
or reinterprets document content.

## Authority

1. **Source documents remain authoritative.** The manifest and schema
   are technical indexing artifacts. Metadata describes knowledge; it
   does not create, amend, or rank institutional authority. Where
   metadata and a source document disagree, the source document is
   correct and the metadata is defective.
2. **Institutional authority ≠ technical indexing.** Editing the
   manifest is a technical act available to development; changing a
   document's classification, authority, status, or content is an
   institutional act governed by the existing hierarchy.
3. **Classification ≠ authority tier.** Classification is the document's
   established category (the taxonomy in `docs/README.md`, reused
   verbatim). Authority tier is the document's position in the
   hierarchy of authority (levels 1–5), recorded only where the
   governing references state it. A document's subject never implies
   its authority.
4. **Authority ≠ disclosure.** A highly authoritative document is not
   thereby public, and a public document is not thereby authoritative.
   Disclosure metadata currently supports only what repository evidence
   establishes: every governed document is `repository-internal` — an
   observable fact (no public route renders `docs/`), reinforced by the
   constitutional record's own rule against reproducing constitutional
   language on the public website and the Vision Foundation's direction
   that public systems should not reproduce constitutional language
   unnecessarily (§16). A fuller disclosure taxonomy requires separate
   authorization.

## Metadata model (summary — the schema is normative for shape)

- **Identity:** stable, human-readable kebab-case identifiers derived
  from the document's filename stem (e.g.
  `vision-foundation-for-development`), with one documented exception:
  the documentation index uses `documentation-index`, because its stem
  (`README`) is a filesystem convention rather than a document name.
  Identifiers never encode filesystem order or timestamps, and survive
  limited path moves; a rename of institutional substance is a
  governance event, not an indexing event. Existing documents are not
  renamed for the identifier system.
- **Classification:** the seven established values from `docs/README.md`
  reused verbatim, plus `Unspecified` for documents whose
  classification no governing reference states. `Unspecified` is a
  transparent gap, not a new category.
- **Authority tier:** `1`–`5` per the hierarchy of authority, or
  `non-governing` for documents that describe rather than govern
  (current-implementation records), or `unspecified` where the
  governing references are silent.
- **Lifecycle status:** `current`, `superseded`, or `historical`; a
  free-text `statusNote` carries nuances the source document itself
  states (e.g. the constitutional record's pending verbatim text).
- **Provenance:** originating institutional source, approval reference,
  and effective date are recorded **only where a repository document
  states them**; otherwise `null`. Unsupported provenance is never
  fabricated.
- **Versioning:** git history is the version record for every document
  (`git-history`). No parallel version numbers are introduced. Content
  hashes are deliberately omitted: they would go stale on every
  authorized edit and add churn without adding institutional truth.
- **Relationships:** the smallest vocabulary the current corpus
  justifies — `governed-by` (subordination the source documents
  themselves state), `references` (explicit cross-links), and
  `supersedes` / `superseded-by` (reserved for lifecycle events;
  unused today). Relationships never imply authority beyond what the
  linked documents state.
- **Machine consumption:** every record carries
  `machineConsumptionEligible: "unresolved"` — eligibility for future
  AI or retrieval use is an ungoverned question that only a later
  authorized decision may answer.

## Canonical location, duplication, conflicts, history

- The manifest records exactly one canonical repository-relative path
  per document, mirroring the index's canonical-location rule.
  Documents must never be duplicated to simplify indexing.
- Conflicts between authoritative sources are resolved through the
  existing hierarchy by the appropriate authority — never through
  metadata. Where a conflict or gap is known, the manifest records it
  transparently (`Unspecified` / `unspecified` / `statusNote`), and the
  validator will not force a value into existence.
- Historical preservation: superseded documents are retained (git
  history plus, where governance keeps a file in place, a `superseded`
  lifecycle status and `superseded-by` relationship). Nothing is
  deleted to keep the index tidy.

## Corpus scope

The governed corpus is every Markdown document under `docs/`
(`docs/**/*.md`), including this record. Root-level repository
instruction files (`README.md`, `AGENTS.md`, `CLAUDE.md`) are
deliberately excluded: they are repository operating instructions whose
governing content is already canonical in `docs/`, and indexing them
would duplicate authority statements outside the governed tree. This
exclusion rule is explicit; broadening the corpus is a future decision.

## Validation and maintenance

`npm run validate:knowledge` must pass whenever a document is added,
moved, retitled, reclassified, superseded, or removed — the manifest is
updated in the same change, and the validator enforces exact one-to-one
coverage between `docs/**/*.md` and manifest records. Maintenance
expectations live in `docs/README.md` alongside the index this layer
formalizes. Responsibility sits with repository development under the
existing standards; no new role is created.

## Future consumption — explicitly uncommitted

Future authorized systems (a method library, an intellectual-property
repository, education tooling, controlled AI retrieval) may consume this
foundation. This decision commits to **none of them** and selects no
database, vendor, platform, retrieval engine, embedding model, or AI
architecture. The artifacts are plain files in version control; adopting
any consuming system remains a separate, owner-authorized decision.

## Consequences and limitations

- The corpus becomes mechanically verifiable; documentation drift
  (missing, duplicated, or orphaned records) fails fast and locally.
- Two metadata gaps are made visible rather than resolved: the
  documentation index (`docs/README.md`) has no stated classification
  or authority tier, and machine-consumption eligibility is ungoverned
  corpus-wide. Both await owner decisions.
- The layer adds a maintenance duty (update manifest with every corpus
  change) — deliberately cheap, and enforced by the validator.
- Everything introduced here is reversible by reverting the commit;
  no runtime behavior, dependency, schema, or service is affected.
