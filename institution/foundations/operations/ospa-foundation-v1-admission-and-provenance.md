# Operating Systems & Process Architecture Foundation v1 — Admission, Scope, and Provenance

**Classification: Approved Methodology, Governance, and Policy.**

- **Governing authority:** Founder Office.
- **Admission instrument:** **FD-V7**, recorded in the determinations
  register at `fd-0011`.
- **Admitted:** 2026-08-18.
- **Disclosure:** repository-internal.

This record accompanies the admitted OSPA sections. It states what is
admitted, what is not, and how the admitted text is verifiable. **It is
not OSPA and does not speak for OSPA.** Where this record and an admitted
section could be read differently, the section governs.

## 1. What FD-V7 admitted

The Founder Office admitted the six **surviving recovered sections** of
the Operating Systems & Process Architecture Foundation v1 as **recovered
canonical operational-foundation authority**:

| Section | Title (as transmitted) | Canonical path |
| --- | --- | --- |
| S01 | Definition, Scope, and Institutional Authority | `OSPA-FND-V1-S01.md` |
| S02 | Operational Doctrine | `OSPA-FND-V1-S02.md` |
| S03 | Operating Architecture | `OSPA-FND-V1-S03.md` |
| S04 | Operational Domains and Hierarchy | `OSPA-FND-V1-S04.md` |
| S09 | Operational Lifecycle and Status | `OSPA-FND-V1-S09.md` |
| S10 | Controls, Evidence, and Auditability | `OSPA-FND-V1-S10.md` |

**Authority boundary — read this before citing OSPA.** Canonical authority
is limited **strictly to the surviving text of those six sections**. OSPA
is authority for what it actually says. It is not authority for what a
complete fifteen-section foundation would have said, and the gap between
the two is not a matter of interpretation — it is nine permanently
unavailable sections.

## 2. Permanently unavailable sections

**S05, S06, S07, S08, S11, S12, S13, S14, and S15 are permanently
unavailable.** Nine of the foundation's fifteen sections do not survive.

They must **never** be reconstructed, inferred, paraphrased, assembled
from summaries or downstream implementation, or replaced by professional
convention (`institution/standards/repository/canonical-source-preservation.md`
§7; `fd-0003`; `fd-0011`). Their absence is recorded as absence.

**No metadata, index, registry, manifest entry, or navigational structure
in this repository may present the foundation as complete, or present an
unavailable section as existing, implied, reconstructed, or canonically
represented.** The corpus records six admitted sections, never fifteen.

Practical consequence, stated plainly so it is not rediscovered later: a
question that OSPA's surviving text does not answer is **unresolved**, not
answerable by reading further. Several operational concepts required by
the Generation One concept fall in exactly that position — see
`institution/governance/operations/generation-one-semantic-gap-inventory.md`
and the semantic-definition package.

## 3. Derived evidence — not canonical authority

`OSPA-FND-V1-RS05-EV01-verified-canonical-evidence-packet.md` is a
**derived verified evidence packet** prepared for Section 5 reconstruction
planning. FD-V7 did **not** admit it. It is **not canonical OSPA
authority**, is never admissible as canonical source, must remain
distinguishable from source (`fd-0003`; canonical-source-preservation §2),
and is corrected by its sources wherever they disagree. **It must not be
used to supply Section 5 wording.**

It remains outside the canonical corpus at
`workbench/ospa-reconstruction/`, tracked under the narrow custody
exception described in §5.

## 4. Integrity — verifiable from recovery through admission

The admitted sections are preserved **byte-identical to the recovered
source**. No header was prepended, no whitespace or line ending was
normalized, and no filename was altered, so the digests recorded at
custody preservation remain valid at the canonical paths and integrity is
continuously verifiable across the move.

SHA-256, unchanged from Phase 1 custody preservation (`fd-0010`):

```
eb92a58486c473e0a966851ba91f2aaadcd81e895cfbd9a4cacd906669274b72  OSPA-FND-V1-S01.md
ce4799914fd356ece57bc74ee2380bd87a3d661e6efc5f2cd71e00e5af07bf15  OSPA-FND-V1-S02.md
6e006d39b7edaceaf0f2dceb0b66c8221b433b396f6777ce04b4b14539bd6a28  OSPA-FND-V1-S03.md
165dce643855788a8e8289ac49deaf0c50958fb92474ddc9b45fb8a6b5b4723c  OSPA-FND-V1-S04.md
eb53beddab2b798389ebd44f4b6cdadd47826f40dc468ccf69cba1f3f07c1f1f  OSPA-FND-V1-S09.md
a8395af3eb425dfd70902eaa926c4115d877b26b2a40c967865a33f80cc587bc  OSPA-FND-V1-S10.md
```

Verify from this directory:

```
shasum -a 256 -c SHA256SUMS
```

The sections carry `**Status:** Canonical Source` in their own transmitted
headers. Prior to FD-V7 that claim was inert; FD-V7 makes it accurate for
these six sections, and for no others.

## 5. Provenance and custody history

Admission did not erase how this material was preserved, and the history
is retained deliberately.

| Stage | Record |
| --- | --- |
| Recovery-set recognition | `fd-0003` — recognized S01–S04, S09, S10 as recovered canonical sources; identified RS05-EV01 as derived; prohibited inferring S05–S08 and S11–S15 |
| Staging architecture | `fd-0002` D-3 — workbench established outside the governed canonical corpus |
| Foundation approval provenance | `fd-0004` — records OSPA v1 approval within the deliverable acceptance history, with open approval-provenance deficiencies |
| Custody preservation | `fd-0010` — bytes placed under version control before FD-V7, with digests recorded; custody explicitly distinguished from admission |
| Custody exception scope | `fd-0011` — the exception to `fd-0001` determination 1 covers **only the exact seven Phase 1 preserved artifacts**; `fd-0001` remains governing for every other workbench or reconstruction artifact, and no blanket workbench admission exists |
| Canonical admission | `fd-0011` (FD-V7) — this record |

**Provenance not evidenced, recorded as deficiency rather than inferred:**
the original transmission channel, transmission date, authorship chain,
and recovery method of the recovered set; and the circumstances of the
loss of the nine unavailable sections (canonical-source-preservation §3).

## 6. Relationship to prospective operational doctrine

Genuine institutional gaps left by the unavailable sections may be filled
only by doctrine **prospectively adopted as new authority** through
competent institutional authority. Such doctrine must be clearly
identified as new, and **must never be represented as recovered OSPA**.

The instrument prepared for that purpose is the **Corporate Operations
Semantics Foundation — Version 1**, whose repository location is reserved
in this directory (`README.md`). It does not yet exist, and Development is
not authorized to draft its substance.
