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
classification of institutional IP records.

## Approved content

**Approved asset classes (seventeen):** `framework`, `model`,
`assessment`, `methodology_asset`, `standard`, `template`, `workflow`,
`tool`, `software_concept`, `software_component`, `publication`,
`educational_asset`, `dataset`, `research_asset`, `brand_asset`,
`institutional_know_how`, `composite_asset`, and
`intellectual_property_governance_foundation` (usable only for the
Foundation source and approved governance records where technically
necessary — never a general class).

**Provisional asset classes** (non-authoritative descriptors only;
never assignable as approved primary classes): `patentable_invention`,
`trade_secret`, `trademark`, `certification_mark`, `data_product`,
`ai_agent`, `algorithm`, `licensing_package`, `commercial_product`,
`product_family`, `intellectual_property_portfolio`,
`royalty_bearing_asset`, `joint_venture_asset`,
`acquired_intellectual_property`. Several of these carry legal or
commercial connotations; using one descriptively never creates the
corresponding legal status, and promotion to an approved class
requires an authorized vocabulary update.

An asset's class describes what kind of asset it is — it implies
nothing about lifecycle, governance status, maturity, readiness,
disclosure, origin, ownership, rights, or commercial treatment, which
remain separate dimensions (ip-0004, ip-0006). Composite assets are
classified `composite_asset` with component relationships rather than
forcing a single component class.

## Limitations and open questions

- Full §3 classification-principles prose pending verbatim insertion.
- Promotion of any provisional class is a reserved IP-authority
  decision.

## Technical implementation

Approved now; enforced by `knowledge/ip-schema.json` (approved enum)
and `npm run validate:ip` (provisional values rejected as primary
classes).
