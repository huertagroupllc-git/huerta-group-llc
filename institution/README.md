# institution/ — Canonical Institutional Governance Assets

This directory contains the repository's canonical institutional
governance assets. The repository is one institutional asset of Huerta
Group; the institution is not the repository, and nothing here implies
that Huerta Group exists inside, is constituted by, or is equivalent to
this repository.

Layer map (placement expresses authority class; placement never creates
authority):

| Area | Contents |
| --- | --- |
| `governance/constitution/` | The canonical constitutional record (highest internal authority; ratified text pending insertion, marked in the record) |
| `governance/strategic/` | Vision Foundation for Development (Approved Strategic Authority) |
| `governance/determinations/` | Founder Office determination records — repository-native approval provenance (Institutional Records; evidentiary, non-governing) |
| `governance/ventures/` | Corporate Venture Governance — the approved blueprint and per-venture determinations/charters; venture admission occurs only by Founder Office determination (registry: `metadata/registries/venture-registry.json`) |
| `foundations/` | Approved institutional foundations and their derived governance records (methodology, intellectual-property, education; future domains are added only when occupied) |
| `standards/development/` | Development Standards and the Bounded Autonomous Completion & Verification Standard |
| `standards/repository/` | Repository Standards — they govern this repository only, never Huerta Group generally (documentation index, canonical-source preservation, repository verification) |
| `decisions/` | Decision History — ADR practice and accepted Architecture Decision Records |
| `technical/` | Technical architecture documents (internal software architecture; domain repository architectures) |
| `operational/` | Operational records (repository operations facts; future operational assets under their proper authority) |
| `evolution/` | Institutional Evolution Log (append-only records of institutional evolution) |
| `metadata/` | Corpus manifest, schemas, registries — technical representation; metadata never creates authority |
| `validation/` | Deterministic validators; invoked through the package scripts and the canonical verification command |

The authoritative index, classification taxonomy, hierarchy of
authority, and maintenance rules are in
[`standards/repository/documentation-index.md`](standards/repository/documentation-index.md).
The staging area for non-admitted working material is `workbench/` at
the repository root — outside this canonical corpus (see
`workbench/README.md`).
