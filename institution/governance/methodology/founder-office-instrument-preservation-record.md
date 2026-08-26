# Founder Office Instrument Preservation Record — Organizational Systems Methodology Program

**Classification: Institutional Record** — provenance record (evidentiary,
non-governing). Records the preservation of five Founder Office execution
instruments under the determination transcribed at `fd-0020` §2.4, through the
existing canonical-source preservation standard
(`institution/standards/repository/canonical-source-preservation.md`). It
creates no archive, registry, or numbering system: the preserved instruments
are ordinary documentation-index and corpus-manifest entries under the program
that received them.

## 1. The determination applied

`fd-0020` §2.4 (verbatim in the register): institutionally significant Founder
Office instruments should be preserved when they materially establish
authority; determinations; execution boundaries; substantive reasoning
necessary to understand an institutional act; or historically significant
direction — reusing existing preservation mechanisms; never a parallel
archive; never reconstruction; never conversation summaries as originals;
never indiscriminate preservation. Development's interpretation that all three
program instruments qualify is recorded at `fd-0020` §3 and is reviewable by
the Founder Office.

## 2. How the standard was applied to instruments received as text

The canonical-source standard was written for source files copied verbatim
with a digest computed before the copy. These instruments were received by
Development as XML text inside its execution context, not as files. The
standard's substance is preserved and one adaptation is recorded:

- **Source = the transmitted text.** Each instrument is reproduced exactly as
  received — every element, comment, entity (`&amp;`), blank line and
  indentation — inside a fenced ```` ```xml ```` block.
- **No header inside the source.** The preserved file carries a short header
  *outside* the fences stating classification, determination, and the rule
  that the instrument, not the header, is the source. The header never
  alters the instrument.
- **Digest computed on the fenced text alone.** The SHA-256 below is of the
  bytes between the fence lines (exclusive), extracted mechanically. It is the
  integrity reference; the digest of the whole file is also given so that
  either can be checked.
- **Provenance kept here, not in the source**, exactly as the standard
  requires.

## 3. Instruments preserved

| Instrument | Path | Received | SHA-256 of instrument text (fenced, exclusive) | Bytes · lines | SHA-256 of preserved file |
| --- | --- | --- | --- | --- | --- |
| Generation One — Discovery execution package | `instruments/generation-one-discovery-execution-package.md` | 2026-08-25, Development execution context | `ca4b46552e553607cbc0ddf63dca0d535687116be66137d15c68b578a2c3d871` | 39,270 · 1,103 | `f93992f7c4c9afc9868b2bd1698b0e5ca05dac06d8361001010942fe294e1c68` |
| Generation One — Stage 2 execution package | `instruments/stage-2-execution-package.md` | 2026-08-25, Development execution context | `a36daf95e3263528125f2b5f324266d99722526917dcc14de7805acacbb60d9d` | 48,043 · 1,268 | `80dbd2883300c88855a5856ae35c121467d18287411a05700e3ebd3c346573b2` |
| Generation One — Stage 3 execution package | `instruments/stage-3-execution-package.md` | 2026-08-25, Development execution context | `012a286990a0a178ca5d4d3b7b069460d4e0ad37a7bd4900168018a34aa2147e` | 35,628 · 754 | `b3e71078da175f505ea0ebe55ab339e968d8836d5d716fba832b7832f902aeb9` |
| Generation One — Stage 3 Completion execution package | `instruments/stage-3-completion-execution-package.md` | 2026-08-25, Development execution context | `c3c7a360cbeacaae256ea38d2c28b52e7dbb85ce0304217af67b9634252cff44` | 31,165 · 884 | `3b48bc0e414430de111f6b7f5523d6d6b016b7cfcb4591ebe0fd7997935683ff` |
| Generation One — Stage 4 execution package | `instruments/stage-4-execution-package.md` | 2026-08-25, Development execution context | `17a1e5dc8e12f3cfe65e7cf710e0603981d7cc60c836579c468ee6a1ecbdb56d` | 31,184 · 771 | `4eabdb44c0f85ee1bfbcc9ef9f9eb75b6eb05d67d9618355b3b06655c2bf8420` |

Each instrument text begins `<?xml version="1.0" encoding="UTF-8"?>` and
ends `</claude_execution_package>`. Verification: extract the text between
the fence lines (for example `awk '/^```xml$/{f=1;next}/^```$/{f=0}f'`), and
compare `shasum -a 256` of the result with the third column.

## 4. Why each qualifies (against `fd-0020` §2.4)

| Instrument | Authority | Determinations | Execution boundaries | Substantive reasoning | Historically significant direction |
| --- | --- | --- | --- | --- | --- |
| Generation One — Discovery | authorizes evidence retrieval and discovery; withholds implementation | provisional-sequence status; non-assumptions; commercial boundary | read-only; prohibited work; stop condition | central question; learning questions; quality controls | opens the program |
| Stage 2 | authorizes methodology development, bounded retrieval, self-application | closes Discovery with its principal finding (`fd-0019` §1); admission; Curbside Spa; memory principle | no software, no external application, no Method Library admission | evidence-sufficiency reasoning; neutrality rules | first diagnostic draft and dry run |
| Stage 3 | accepts Stage 2; authorizes Draft v2 and the stakeholder application | HGP admission; Founder Office instrument preservation; Evolution Log; A/A.1 status | not authorized: external application, admission, software | twelve priority tests; interaction boundary; maximum maturity claim | first stakeholder-evidence application |
| Stage 3 Completion | authorizes completion of the stakeholder-evidence validation and the sealed comparison | Draft v2 frozen; corrections as proposals only; classification and no-default-preference rules; continued exclusions | not authorized: external application, Method Library admission, standardization, software, pricing, packaging | fifteen priority validation questions; contradiction-handling and non-elevation rules; maximum maturity claim | supplies the first genuine Client-Stated evidence set and closes Stage 3 |
| Stage 4 | accepts and closes Stage 3; authorizes correction disposition and Draft v3 | Stage 3 accepted; Draft v1 and v2 frozen as historical baselines; Q8/Q12/Q13/Q17 stay Client-Stated; fd-0006 closed; no public-copy change; validated-through-use NOT authorized | not authorized: external application, Method Library admission, validated-through-use, standardization, software, pricing, packaging | four Founder clarifications with a chronology-preservation rule; the sensemaking-versus-authority distinction; the authority-concentration rule | supplies the first clarification round and the third draft |

## 5. What was not preserved, and why

The Founder Office's conversational instructions in the same execution
context (a login step; a working-directory instruction; an instruction to
resume Stage 2 after a session pause without redoing completed work) do not
materially establish authority, determinations, boundaries, reasoning, or
direction beyond what the preserved instruments already establish, and are
not preserved. This is the "not indiscriminate" limb of the determination
applied, not an omission.

## 6. Deficiencies recorded, never invented

1. **No independent copy compared.** Each digest is of the text as received
   by Development. If the Founder Office holds the instrument as a file, that
   file was not available to compare; identity of the received text with any
   such file is asserted by the receiving context only. Same deficiency as
   `fd-0020` §4 Deficiency 1 for the Stage 3 instrument, `fd-0021` §4
   Deficiency 1 for the Stage 3 Completion instrument, and `fd-0022` §4
   Deficiency 1 for the Stage 4 instrument.
2. **Determinations transcription is the register's, not this record's.**
   The verbatim determinations of these instruments live in `fd-0019` and
   `fd-0020`; this record makes those transcriptions auditable but does not
   restate them.

## 7. Relationship to other records

- Determinations: `fd-0019` (Stage 2 instrument), `fd-0020` (Stage 3
  instrument; §3 interpretation; §2.4 determination), `fd-0021` (Stage 3
  Completion instrument), `fd-0022` (Stage 4 instrument). The Generation One
  instrument's authorization is carried by `fd-0019` §1's acceptance of the
  Discovery it opened.
- Standard applied: `institution/standards/repository/canonical-source-preservation.md`.
- Program index: the Organizational Systems Methodology section of
  `institution/standards/repository/documentation-index.md`.
