# Canonical Source Preservation — Repository Standard

**Classification: Repository Standard.** This standard governs how
**this repository** preserves canonical institutional source material
(Founder Office determinations D-3, D-5; fd-0002, fd-0003). It governs
repository handling only — it creates no institutional doctrine and
governs nothing about Huerta Group generally. It records the practiced
preservation rules at migration level; expanding it into broader
doctrine requires separate Founder Office authorization.

## 1. Complete authoritative source preservation

An approved canonical source is preserved **verbatim and complete** as
transmitted through its authorizing instrument. Markdown presentation
normalization only; no summarization, compression, reordering,
expansion, or reinterpretation. A minimal repository header may
identify authority, repository status, disclosure, and the
corresponding registry record — the header never alters the approved
text, and where a header and the body could be read differently, the
body is the source.

## 2. Source versus derived evidence

Canonical source and derived material are never mixed. Derived
records, summaries, and evidence compilations (including verified
evidence packets such as `OSPA-FND-V1-RS05-EV01`) are stored and
labeled as **derived**, cite their sources, and are corrected by their
sources wherever they disagree.

## 3. Provenance

Every canonical source identifies its authorizing authority and
instrument. Approval events are recorded in the determinations
register (`institution/governance/determinations/`); a new canonical
admission cites its determination record. Provenance that is not
evidenced is recorded as a **deficiency** (see fd-0004) — never
completed by inference.

## 4. Version identity

Sources carry their approved version identity (e.g., `v1.0`) in their
headers and registry records; git history is the change record. A new
approved version is a new deliberate act under the source's authority,
never a silent overwrite.

## 5. Supersession compatibility

Superseded sources are retained at their canonical paths with updated
status and both-direction supersession references (manifest and
registry relationship fields). Nothing canonical is deleted or moved
to an archive location.

## 6. Explicit recording of unavailable material

Missing canonical text is marked where it belongs, never left
implicit. Current recorded unavailable material: the Constitution's
ratified Articles I–III text (marked in the constitutional record);
Operating Systems & Process Architecture Foundation v1 Sections
S05–S08 and S11–S15 (recognized as unavailable in fd-0003); the Design
System Foundation v1 text (preservation deferred per fd-0001).

## 7. Prohibition on reconstructed canonical wording

Unavailable canonical text is **never reconstructed, inferred,
paraphrased, or assembled** from summaries, public content, memory, or
derived evidence. Recovery admits only verified preserved text through
the admission path below.

## Admission path (workbench → canonical corpus)

Material stages in `workbench/` (uncommitted; see
`workbench/README.md`) until: (1) provenance is verified; (2) the
Founder Office records the admission determination in the register;
(3) the text is preserved verbatim at its canonical path with its
header; (4) manifest and registry entries are added in the same
change; (5) the repository verification gate passes. All five steps
occur in one reviewed change.
