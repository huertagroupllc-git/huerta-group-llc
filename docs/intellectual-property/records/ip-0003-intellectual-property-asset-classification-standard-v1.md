# ip-0003 — Intellectual Property Asset Classification Standard v1

**Classification: Approved Methodology, Governance, and Policy**

- **Record:** `ip-0003` · v1.0 · `standard`
- **Authority basis:** Intellectual Property Foundation v1, §3
- **Source:** [`intellectual-property-foundation-v1.md`](../intellectual-property-foundation-v1.md)
- **Disclosure:** internal
- **Status:** approved internal standard · governance record

## Purpose and scope

Defines the approved asset classes, classification principles,
composite treatment, and provisional-class limitations for the
classification of institutional IP records. The Foundation source (§3)
is authoritative; this record summarizes it and is corrected by it
wherever they differ.

## Approved content

**Classification principle (§3).** Asset class identifies the primary
form of the governed asset. It does not determine ownership,
disclosure, maturity, legal protection, or commercial value.

**Approved asset classes (seventeen, §§3.1–3.17):** `framework` (a
structured system of concepts, principles, stages, dimensions, or
relationships that organizes understanding or guides action), `model`
(a defined representation of a system, condition, relationship,
maturity state, decision structure, or expected behavior), `assessment`
(a structured evaluation instrument — including qualifying diagnostics,
maturity and readiness assessments, scorecards, and evaluation
instruments), `methodology_asset` (an admitted proprietary asset
derived from or used within Huerta Group methodology — a complete
methodology, bounded method, method component, protocol, analytical
sequence, or implementation approach — whose substantive authority
remains with Methodology), `standard` (an approved requirement, rule,
specification, convention, or minimum condition for consistency or
quality), `template` (a reusable structure guiding recurring work),
`workflow` (a reusable sequence of activities, decisions, handoffs,
controls, or system actions — a routine operational workflow is not
automatically institutional IP), `tool` (a reusable manual, digital,
analytical, procedural, or hybrid instrument), `software_concept` (an
approved original concept sufficiently defined for preservation, with
or without implementation), `software_component` (an identifiable
technical asset implemented in software — open-source, third-party,
commodity, and dependency components must remain distinguishable from
original Huerta Group components), `publication` (a reusable written,
visual, audio, or multimedia work for internal or external
publication), `educational_asset` (a reusable proprietary asset created
or adapted for learning, instruction, practice, evaluation,
credentialing, or knowledge transfer), `dataset` (a structured
collection of data with institutional value — admission establishes no
rights in underlying third-party, personal, client, licensed,
regulated, or public data), `research_asset` (original institutional
research materials, analyses, findings, experimental records, or
structured research outputs), `brand_asset` (an approved proprietary
identity, visual, verbal, naming, messaging, or presentation asset
whose substantive authority remains with Branding),
`institutional_know_how` (a defined body of practical institutional
knowledge, judgment, technique, or capability not adequately
represented by another class — never a catch-all for undocumented
experience), and `composite_asset` (an asset composed of multiple
approved classes managed as one coherent unit — used only when one
primary class cannot adequately represent the asset; component
relationships are recorded through the relationship architecture,
§2.8, rather than forcing a single component class).

**Technical vocabulary note.** The schema's additional
`intellectual_property_governance_foundation` value is not one of the
seventeen §3 classes; it is a technical-necessity value granted by the
implementing authorization solely for the Foundation source and
approved governance records.

**Provisional asset classes (§3.18)** — not approved as independent
authoritative classes; recordable only as provisional descriptors or
future governance candidates, never assignable as approved primary
classes: `patentable_invention`, `trade_secret`, `trademark`,
`certification_mark`, `data_product`, `ai_agent`, `algorithm` (as an
independent class), `licensing_package`, `commercial_product`,
`product_family`, `intellectual_property_portfolio`,
`royalty_bearing_asset`, `joint_venture_asset`,
`acquired_intellectual_property`. Several of these carry legal or
commercial connotations; using one descriptively never creates the
corresponding legal status, and none may be treated as an approved
class until separately reviewed.

An asset's class implies nothing about lifecycle, governance status,
maturity, readiness, disclosure, origin, ownership, rights, or
commercial treatment, which remain separate dimensions (ip-0004,
ip-0006).

## Limitations and open questions

- Promotion of any provisional class is a reserved IP-authority
  decision.

## Technical implementation

Approved now; enforced by `knowledge/ip-schema.json` (approved enum)
and `npm run validate:ip` (provisional values rejected as primary
classes).
