# Founder Office Instrument Preservation Record — Organizational Systems Methodology Program

**Classification: Institutional Record** — provenance record (evidentiary,
non-governing). Records the preservation of thirteen Founder Office execution
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
| Generation One — Stage 5 execution package | `instruments/stage-5-execution-package.md` | 2026-08-25, Development execution context | `1a0c3b4ebaa90ac6afbb794135f6f4eaa0870cc8103c163b3e0a7bf2e850c761` | 35,716 · 858 | `51658982a9a5d1476bbf4187158884c28d9438063463630de0d2425a12bc8e21` |
| Generation One — Stage 6 execution package | `instruments/stage-6-execution-package.md` | 2026-08-25, Development execution context | `d3881ef59dd30dd9e50ecb1f0b0168e0db0d6407cd95a00d8fae35fb20f09740` | 36,980 · 931 | `dddf51b1dc60214cdd7326aeadf1409c081924f6d73c2daa8c34cd128071e2e4` |
| Generation One — Stage 7 execution package | `instruments/stage-7-execution-package.md` | 2026-08-26, Development execution context | `f36e22c2418ba95350d5baa25049843ef6590578d00fdbb7cb73e7d834996125` | 42,433 · 1,068 | `a2265ce921e5d4a8e33bedcfb4dd944882543418175b6f889aa2865515635590` |
| Generation One — Stage 8 execution package | `instruments/stage-8-execution-package.md` | 2026-08-26, Development execution context | `a9616c71ae797fe3f3a317323c13b6ae1faa02608c7833e243835ae6b87a4539` | 28,781 · 719 | `eaaacf2169eec0f830b9afb687ddd0702ba63b4261bcc403e1c5e8c9fb5601c9` |
| Generation One — Stage 9 execution package | `instruments/stage-9-execution-package.md` | 2026-08-26, Development execution context | `8d55fecd476143b102a0af626b47b2e45df4abc7043a1649b2c1925f5fcf2e7b` | 42,374 · 1,206 | `889ed17117240f27f5e531ad64f830381032285eb46182e47c08b3ef90f13915` |
| Generation One — Post-Stage 9 A10 execution package | `instruments/post-stage-9-a10-execution-package.md` | 2026-08-26, Development execution context | `30019544b1b52115174b0383cd96f1ee98302863344e2afd61dd39f92fb26e8c` | 29,098 · 713 | `aa94267bc53e66c2d7e475652cc1d077eca7504a7d374a5020d14c3391c855bd` |
| Generation One — Draft v5 reconciliation execution package | `instruments/draft-v5-reconciliation-execution-package.md` | 2026-08-26, Development execution context | `0f4034b187f21168ab59c6bf09ee9df2b4e9e0121bf3f170b00751ef8722642c` | 24,421 · 667 | `3692cf2b7adc0b785e4aad35ba23c54b96a27782af847f940818e0fa09a5318d` |
| Generation One — Stage 10 execution package | `instruments/stage-10-execution-package.md` | 2026-08-26, Development execution context | `7740e3496243770dba03d12c713b8d62587df6d5757f3dba7eeeaa573375bbfd` | 37,560 · 1,005 | `5169275089fe537e7aeec57088d1fefe66261de1e5ece39cd1bf0054db6e0ddc` |

Each instrument text begins `<?xml version="1.0" encoding="UTF-8"?>` and
ends `</claude_execution_package>`. Verification: extract the text between
the fence lines (for example `awk '/^```xml$/{f=1;next}/^```$/{f=0}f'`), and
compare `shasum -a 256` of the result with the third column.

**One byte recorded rather than smoothed over.** The Stage 9 instrument was
received **without a trailing newline** after `</claude_execution_package>`;
every instrument before it was received with one, and every instrument since has been received the same way. The preserved
files add the newline the fenced-block form requires, so the third column above
— computed by the stated extraction method — is of the text **plus that one
byte** for each of them. The digests of those instruments exactly as received,
with no trailing newline, are
`6490ca293cfb308da92a323580aa67d64b095d8317f9620fd6b59d81dc8f3674` (Stage 9,
42,373 bytes),
`7331e0d8018c3807f39501eb37fb253368c8568adbdebd45bd6dc5051bac1a10`
(Post-Stage 9 A10, 29,097 bytes), and
`49e1fda6a67bc2f73beb2ccc611fe6edd8726c1f54bb41ab35b7687a96cdd2d9`
(Draft v5 reconciliation, 24,420 bytes), and
`63f0c22b98e96d0935e5985f2b6874528fd2182ae9add21bb9a5de63c3c5ee92`
(Stage 10, 37,559 bytes). Both forms are recorded for each because only one of
them is the instrument.

## 4. Why each qualifies (against `fd-0020` §2.4)

| Instrument | Authority | Determinations | Execution boundaries | Substantive reasoning | Historically significant direction |
| --- | --- | --- | --- | --- | --- |
| Generation One — Discovery | authorizes evidence retrieval and discovery; withholds implementation | provisional-sequence status; non-assumptions; commercial boundary | read-only; prohibited work; stop condition | central question; learning questions; quality controls | opens the program |
| Stage 2 | authorizes methodology development, bounded retrieval, self-application | closes Discovery with its principal finding (`fd-0019` §1); admission; Curbside Spa; memory principle | no software, no external application, no Method Library admission | evidence-sufficiency reasoning; neutrality rules | first diagnostic draft and dry run |
| Stage 3 | accepts Stage 2; authorizes Draft v2 and the stakeholder application | HGP admission; Founder Office instrument preservation; Evolution Log; A/A.1 status | not authorized: external application, admission, software | twelve priority tests; interaction boundary; maximum maturity claim | first stakeholder-evidence application |
| Stage 3 Completion | authorizes completion of the stakeholder-evidence validation and the sealed comparison | Draft v2 frozen; corrections as proposals only; classification and no-default-preference rules; continued exclusions | not authorized: external application, Method Library admission, standardization, software, pricing, packaging | fifteen priority validation questions; contradiction-handling and non-elevation rules; maximum maturity claim | supplies the first genuine Client-Stated evidence set and closes Stage 3 |
| Stage 4 | accepts and closes Stage 3; authorizes correction disposition and Draft v3 | Stage 3 accepted; Draft v1 and v2 frozen as historical baselines; Q8/Q12/Q13/Q17 stay Client-Stated; fd-0006 closed; no public-copy change; validated-through-use NOT authorized | not authorized: external application, Method Library admission, validated-through-use, standardization, software, pricing, packaging | four Founder clarifications with a chronology-preservation rule; the sensemaking-versus-authority distinction; the authority-concentration rule | supplies the first clarification round and the third draft |
| Stage 5 | authorizes the first application of the diagnostic to a subject other than the parent | Stage 4 findings accepted; Draft v3 frozen at its Stage 4 digest; HGP classified an internal subordinate organizational subject; prior-familiarity limitation compulsory | not authorized: any HGP change of any kind, external application, Method Library admission, validated-through-use, standardization, software | twelve specific validation targets; the stakeholder-evidence gate; the representable-versus-demonstrated distinction | first application to a second subject |
| Stage 6 | authorizes a reproducibility test by a second authoring context | Stage 5 accepted and closed; D-8 determined as a qualification on the whole Generation One evidence base, not a retroactive invalidation; Draft v3 frozen and Draft v4 NOT authorized | not authorized: Draft v4, any HGP change, external application, Method Library admission, standardization, software; no reproducibility score | the withheld-materials list; the no-coaching rule; the seal-before-comparison rule; eight difference classifications | first test of whether outputs depend on the method or its author |
| Stage 7 | authorizes adjudication of the whole standing deficiency corpus | Stage 6 accepted and closed; the corpus fixed at exactly thirty records; five permitted dispositions; the analytical sequence; D-8 preserved and not weakened by replication | not authorized: Draft v4, another application, external application, adoption, Method Library, standardization, software; no scoring of any kind | the reproducibility distinction between subject diagnosis and method self-critique; the replication-design defect; the populated-output risk; the closure defect | first adjudication of the method's own defect corpus |
| Stage 10 | authorizes the first application of any version of this method since Draft v3 | one bounded internal validation of frozen Draft v5 against HGP, read-only, by an authoring context that did not draft it; the seventeen items classified only as exercised, partially exercised, not exercised because the authentic condition did not occur, or not exercisable internally | not authorized: Draft v5 modification, Draft v6, external application, validated-through-use, established-methodology, Method Library, standardization, software, scoring, maturity models, commercialization, HGP changes | the anti-manufacture rule; the prohibition on answering participant questions on the subject's behalf; the meta-rule that the validation must obey the confidentiality rule it is testing; the instrument's own statement of what it cannot test | first validation application of a post-Draft-v3 version, and the first to require participant evidence for A10 |
| Draft v5 reconciliation | answers the versioning question Development returned rather than chose | the A10 reconciliation **is** a substantive refinement under MF v1 §6.4; Draft v4 is **not** modified in place; **Draft v5 is authorized** as a new version whose sole reason is the bounded `fd-0028` reconciliation; Draft v4 remains the historical Stage 9 consolidation containing the later-resolved ambiguity and is not rewritten to agree with `fd-0028` | not authorized: validation execution, application to Huerta Group LLC or HGP, further replication, external application, Draft v6, reopening Stage 7, Method Library, standardization, scoring, maturity models, software | the seven permitted change locations and the hard boundary around everything else; the rule that a determination confers semantic authority and no behavioural validation; prefer reuse of the prepared validation package over redesign | first version in the program produced to encode a determination rather than to consolidate work |
| Post-Stage 9 — A10 | answers the A10 trail-first question Stage 7 returned and Stage 9 preserved | **Reading A adopted**: the four listed items are trail-source *categories*, not a conjunctive four-part completion gate; materially relevant categories must be pursued where they appear to exist and are reasonably accessible; prior familiarity is not trail evidence; missing sources create evidentiary gaps rather than voiding A10 | not authorized: validation execution, Draft v5, external application, Method Library admission, other Draft v4 edits, new instruments, scoring, hierarchy, maturity constructs | the "as available" anti-convenience rule; procedure-performed versus evidence-sufficient; A18's independent advancement authority; the stop rule for versioning governance that cannot represent a same-version reconciliation truthfully | first Founder Office answer to a methodology question the method's own replication exposed |
| Stage 9 | authorizes the construction of Draft v4 as a bounded consolidation | Draft v4 construction AUTHORIZED; Draft v4 validation NOT authorized; Draft v1–v3 immutable; `fd-0026` takes precedence over narrower Stage 7 wording for CS-01, CS-03 and CS-14; A10's ambiguity is an open limitation and not a drafting discretion | not authorized: Draft v4 validation, application to Huerta Group LLC or HGP, third-author replication, synthetic cases, fabricated evidence, external application, Method Library admission, standardization, commercialization, software | the four-value evidence-inheritance classification; the twenty-seven-point bounded consistency review; the rule that repository checks never make a draft tested; the stop rule for genuinely new semantic questions | first consolidation version of the method, and the first version with no application behind it |
| Stage 8 | carries the six substantive methodology determinations Stage 7 reserved | source kind is descriptive and non-ordinal; A2 governs the diagnostic's evidence classification and A1 the subject's terminology; prior involvement is disclosed at both institutional and individual layers; identity-of-record is retained and defined; a diagnosis may close as an application record but not as an unqualified completed diagnosis; MF v1 §7.5 does not travel by implication | not authorized: Draft v4 construction, another application, external application, adoption, Method Library, standardization, commercialization, software | the material-versus-incidental prior-involvement test; the conservative confidentiality default; the four closure states | first substantive Founder Office answers to reserved methodology questions |

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
   Deficiency 1 for the Stage 3 Completion instrument, `fd-0022` §4
   Deficiency 1 for the Stage 4 instrument, `fd-0023` §4 Deficiency 1
   for the Stage 5 instrument, `fd-0024` §4 Deficiency 1 for the Stage 6
   instrument, `fd-0025` §4 Deficiency 1 for the Stage 7 instrument, `fd-0026` §4 Deficiency 1 for the Stage 8 instrument, `fd-0027` §4 Deficiency 1 for
   the Stage 9 instrument, `fd-0028` §4 Deficiency 1 for the Post-Stage 9
   A10 instrument, `fd-0029` §4 Deficiency 1 for the Draft v5
   reconciliation instrument, and `fd-0030` §4 Deficiency 1 for the Stage 10
   instrument.
2. **Determinations transcription is the register's, not this record's.**
   The verbatim determinations of these instruments live in `fd-0019` and
   `fd-0020`; this record makes those transcriptions auditable but does not
   restate them.

## 7. Relationship to other records

- Determinations: `fd-0019` (Stage 2 instrument), `fd-0020` (Stage 3
  instrument; §3 interpretation; §2.4 determination), `fd-0021` (Stage 3
  Completion instrument), `fd-0022` (Stage 4 instrument), `fd-0023` (Stage 5
  instrument), `fd-0024` (Stage 6 instrument), `fd-0025` (Stage 7 instrument), `fd-0026` (Stage 8 instrument), `fd-0027`
  (Stage 9 instrument), `fd-0028` (Post-Stage 9 A10 instrument), `fd-0029` (Draft v5 reconciliation
  instrument), `fd-0030` (Stage 10 instrument). The Generation One
  instrument's authorization is carried by `fd-0019` §1's acceptance of the
  Discovery it opened.
- Standard applied: `institution/standards/repository/canonical-source-preservation.md`.
- Program index: the Organizational Systems Methodology section of
  `institution/standards/repository/documentation-index.md`.
