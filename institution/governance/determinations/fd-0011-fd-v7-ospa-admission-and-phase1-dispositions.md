# fd-0011 — Founder Office Determinations: FD-V7 OSPA Admission and Phase 1 Dispositions

**Classification: Institutional Record** — determination record
(evidentiary, non-governing). The record evidences the determinations;
authority resides with the Founder Office and the artifacts the
determinations govern.

- **Instrument:** Corporate Operations & Command Platform — Governance &
  Methodology Readiness, Phase 2 execution package, Founder Office →
  Institutional Platform Development.
- **Received:** 2026-08-18, as transmitted to the implementing office.
- **Recorded:** 2026-08-18.
- **Starting baseline named by the instrument:** `b0cbf37`.
- **Technical architecture status:** **Paused.**
- **Software implementation authorization:** **None.**

## Determinations (verbatim from the instrument)

### FD-V7 — Recovered OSPA Canonical Authority

Admitted as recovered canonical authority: `OSPA-FND-V1-S01`,
`OSPA-FND-V1-S02`, `OSPA-FND-V1-S03`, `OSPA-FND-V1-S04`,
`OSPA-FND-V1-S09`, `OSPA-FND-V1-S10`.

- **Authority boundary:** "Canonical authority is limited strictly to the
  surviving text of those six recovered sections."
- **Permanently unavailable:** `S05`, `S06`, `S07`, `S08`, `S11`, `S12`,
  `S13`, `S14`, `S15`.
- **Prohibition:** "Permanently unavailable sections must never be
  reconstructed or inferred."
- **Derived evidence:** "OSPA-FND-V1-RS05-EV01 remains derived evidence
  and is not canonical OSPA authority."

### Specific `fd-0001` custody exception

- **Rule:** "The Phase 1 preservation directive constitutes a specific
  exception to fd-0001's prohibition on committing OSPA working material
  for the exact seven enumerated preserved artifacts only."
- **Boundary:** "fd-0001 remains governing for every other workbench or
  reconstruction artifact. No blanket supersession, general workbench
  admission, or general OSPA-working-material exception exists."
- **Execution requirement:** "Record this exception narrowly enough that
  future contributors cannot interpret it as permission to commit other
  reconstruction/workbench material."

This disposes of `fd-0010` Deficiency 1. The exception is specific, not a
supersession of `fd-0001`.

### Generation One Requirements Report authority

- **Rule:** the complete Founder Office-transmitted "Huerta Group LLC —
  Internal Operations & Command Platform — Generation One Requirements
  Report" "is accepted as the authoritative business/operational
  requirements record."
- **Preservation requirement:** "Preserve the report verbatim from its
  complete transmitted source."
- **Prohibition:** "Do not reconstruct the complete report from the
  abbreviated repository record."
- **Authority boundary:** "Acceptance as authoritative business/operational
  requirements does not authorize technical architecture, schemas,
  migrations, application behavior, databases, integrations, or
  implementation."

### Operations-systems capability trigger

- **Rule:** "Founder Office determines that the recurring internal
  workflow has now outgrown governed documents as the sole operational
  mechanism. **The trigger has fired.**"
- **Historical integrity:** "Preserve the historical prior posture rather
  than rewriting history to imply the trigger had always been satisfied."
- **Current representation:** "Reconcile the capability registry
  prospectively so the current state accurately represents the Founder
  Office determination."
- **Boundary (from Work Package 4):** "Do not interpret 'trigger fired' as
  technical implementation authorization. It establishes the institutional
  need for an operations-system capability. Technical architecture and
  implementation remain paused pending methodology readiness and
  subsequent Founder Office authorization."

### S09 applicability

- **Rule:** "Surviving S09 vocabularies and status dimensions govern
  applicable objects."
- **Limitations:** "Do not create universal status fields. Do not create
  universal operational state machines. Do not collapse materially
  distinct status dimensions. Preserve independent status dimensions
  where surviving authority distinguishes them."

This disposes of semantic-gap inventory item 21 in part: S09 governs the
objects its surviving text actually covers. It does **not** supply an
applicability rule for operational-instance classes, which surviving text
does not authorize.

### Generation One transition semantics

- **Rule:** "Do not infer a Generation One transition model from S09
  §9.28."
- **Future requirement:** "Any operational-instance transition model
  required by Generation One must be established through new prospective
  doctrine compatible with surviving OSPA."
- **Phase boundary:** "Development is not authorized to create that
  doctrine during Phase 2."

This disposes of semantic-gap inventory item 22: the question is not
answered by interpretation of §9.28, and is routed to prospective
doctrine.

## Founder Office policy carried forward

Policy determined by the Founder Office in the **preceding Internal
Operations & Command Platform — Generation One Phase 1 instrument** (an
instrument not otherwise recorded in this register) and carried forward as
governing. Recorded here so that artifacts relying on it cite a repository
source rather than an unrecorded transmission. Recording this policy
creates no operational concept: the concepts it presupposes — Attention,
material change, relationship context — remain unresolved.

- **Attention ownership and classification:** "Functions may nominate or
  escalate Founder Attention items. Corporate Operations owns the
  Headquarters Attention register and Attention classification."
- **Attention priority vocabulary:** Immediate · Near-Term · Normal, with
  "Do not introduce numeric scoring." (Also recorded at `fd-0010`.)
- **Primary change view:** "Primary change view: Since Last Review."
  Optional secondary views Today / 7 Days / 30 Days "only if technically
  inexpensive."
- **Relationship ownership:** "Relationships remain owned by the
  applicable venture or function where one exists. Headquarters owns only
  genuinely corporate or unassigned relationships."
- **Venture facts:** "Venture facts remain venture-authoritative.
  Corporate Operations maintains only the parent-level venture snapshot."
- **Financial visibility:** limited to operationally consequential
  conditions; "QuickBooks / Accounting remain authoritative."

## The exact seven Phase 1 preserved artifacts

The custody exception above is scoped to "the exact seven enumerated
preserved artifacts." They are enumerated here so the set is verifiable
from the repository rather than by inference:

1. `OSPA-FND-V1-S01.md`
2. `OSPA-FND-V1-S02.md`
3. `OSPA-FND-V1-S03.md`
4. `OSPA-FND-V1-S04.md`
5. `OSPA-FND-V1-S09.md`
6. `OSPA-FND-V1-S10.md`
7. `OSPA-FND-V1-RS05-EV01-verified-canonical-evidence-packet.md`

All seven were placed under version control at
`workbench/ospa-reconstruction/` by `fd-0010`. Items 1–6 have since been
admitted by FD-V7 and moved to `institution/foundations/operations/`; item
7 remains derived evidence in the workbench. The two custody records
(`CUSTODY.md`, `SHA256SUMS`) are repository metadata created by `fd-0010`,
not preserved artifacts, and are not part of the seven.

## Deficiencies recorded

**Deficiency 1 — the complete Generation One Requirements Report source
was not accessible to the implementing office; preservation is
incomplete.** The instrument directs preservation of the report "verbatim
from its complete transmitted source," using "the complete transmitted
source available in the authorized evidence context," and provides a
blocking rule: "If the complete transmitted source is not actually
accessible to the execution environment, do not reconstruct it. Record the
precise source-access limitation and leave the authoritative preservation
action incomplete pending access to the exact transmitted source."

The complete source was searched for and is **not accessible**. Scope
searched: this repository and its full git history; the sibling
repositories `huerta-group-publishing`, `curbside-spa`, `gotrade-official`
and `nest & quill`; the Founder's Google Drive (by title and full-text);
the Founder's Gmail; and the local filesystem under the user's `GitHub`,
`Documents`, `Desktop` and `Downloads` trees. No artifact bearing the
report's title or content was found. No text of the report has been
transmitted to the implementing office in any instrument to date.

Accordingly, **Work Package 3 is left incomplete by design**, per its own
blocking rule. The report was **not** reconstructed, and the abbreviated
repository record at
`institution/governance/operations/generation-one-requirements-report.md`
was **not** expanded, elaborated, or used as a basis for inference. That
record continues to hold status, provenance, authority boundary, and
relationships only.

**Consequential limitation.** Work Package 6's semantic-definition package
was directed to compare "the complete accepted Generation One Requirements
Report" against surviving authority. That comparison could not be
performed against the report. The package was instead derived from
surviving canonical OSPA, the Phase 1 semantic-gap inventory, the
determinations above, and the concept set the instrument itself
enumerates. Its concept inventory is therefore **provisional** and must be
re-tested against the report once the report is accessible.

## Affected artifacts

`institution/foundations/operations/` (admitted OSPA sections S01–S04,
S09, S10; admission and provenance record; directory guide; integrity
manifest); `workbench/README.md`;
`workbench/ospa-reconstruction/CUSTODY.md`;
`workbench/ospa-reconstruction/SHA256SUMS`; `.gitignore`;
`institution/governance/operations/corporate-operations-semantics-definition-package.md`;
`institution/governance/operations/generation-one-requirements-report.md`;
`institution/governance/operations/generation-one-semantic-gap-inventory.md`;
`institution/governance/operations/operations-systems-capability-trigger-reassessment.md`;
`institution/metadata/registries/capability-registry.json`;
`institution/metadata/manifest.json`;
`institution/metadata/registries/determinations-registry.json`;
`institution/standards/repository/documentation-index.md`.

## Reserved to the Founder Office

1. **Transmission of the complete Generation One Requirements Report**, on
   which Deficiency 1 and the provisional status of the semantic-definition
   package both depend.
2. **Adoption of the Corporate Operations Semantics Foundation — Version 1**,
   or any other prospective operational doctrine, as new institutional
   authority. Development is not authorized to draft its substance.
3. **Authorization to resume Generation One technical architecture**,
   which the fired trigger does not confer.
4. **Reclassification of the `operations-systems` capability's
   `implementationReadiness`.** It remains `requirements_incomplete`.
   Reclassifying it (for example to `governance_blocked`) would assert
   that requirements are no longer incomplete, which conflates
   institutional acceptance with repository availability while Deficiency
   1 stands. The question depends on the report's transmission and is
   reserved.
