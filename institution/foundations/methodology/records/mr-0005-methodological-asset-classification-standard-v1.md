# mr-0005 — Methodological Asset Classification Standard v1

**Classification: Approved Methodology, Governance, and Policy**

- **Record:** `mr-0005` · v1.0 · `standard`
- **Authority basis:** Methodology Foundation v1, §4
- **Source:** [`methodology-foundation-v1.md`](../methodology-foundation-v1.md)
- **Disclosure:** internal_methodology
- **Status:** approved internal standard · substantive

## Purpose and scope

Defines the currently approved distinctions among methodological asset
types, governing the classification of every Method Library record.

## Approved content

**Approved asset types** (assignable to records):
`methodological_doctrine`, `principle`, `method`, `framework`, `model`,
`standard`, `assessment`, `diagnostic_instrument`, `tool`, `template`,
`workflow`, `decision_system`, `verification_procedure`,
`implementation_guidance`, `educational_adaptation`,
`software_implementation`, `methodological_governance_foundation`.

**Provisional candidate types** (recorded for future consideration;
**not assignable** as approved record types without an authorized
vocabulary update): `playbook`, `protocol`, `maturity_model`,
`operating_model`, `reference_architecture`, `pattern`, `practice`,
`technique`, `method_family`, `method_module`, `control_framework`,
`certification_standard`.

The authoritative definition of each type — including the governing
caveats (a tool is not automatically a method; a template does not
independently establish doctrine or analytical validity; an instrument
does not independently establish a diagnosis without an approved
interpretive method; guidance is not automatically a standard;
adaptations may not redefine methodology; software may not establish
methodology through code alone) — resides in Methodology Foundation v1
§4.1.

An asset's type describes what kind of methodological asset it is — it
implies nothing about development status, authority, disclosure,
readiness, or IP status, which remain separate dimensions (mr-0006,
mr-0007, mr-0008).

## Limitations and open questions

- The provisional list is a candidate vocabulary only; promoting any
  value requires Methodology approval and a versioned update to this
  standard.

## Technical implementation

Approved now; enforced by `institution/metadata/schemas/method-schema.json` (approved
enum) and `npm run validate:methods` (provisional values rejected).
