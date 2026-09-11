# evo-0011 — The Ratified Constitution Came Into the Company's Own Custody

**Classification: Institutional Record** — evolution record
(evidentiary, non-governing).

- **Date:** 2026-09-10
- **Institutional domain:** governance
- **Type of evolution:** recovery
- **Retrospective:** false

## Prior state

Articles I, II and III were ratified, and the repository could not show
what they said.

The canonical record named them and closed them to ordinary revision;
it held no ratified text. `fd-0004` recorded the condition as
deficiency 1 — *"Constitution ratification of Articles I–III (titles
recorded; ratified text and ratification date not transmitted)"* — under
the standing rule that unavailable provenance is recorded, never
invented. `fd-0001` determination 3 held that *"Constitution full-text
insertion remains deferred."* The governance-mechanism audit reached the
same finding independently and stated its consequence: the top of the
authority flow was *textually thin*, because every subordination clause
in the corpus pointed at authority whose repository evidence was a title
and a listing.

A search of the Git object graph for the text returned NOT RECOVERABLE.
That result was accurate as to the sources searched, and `fd-0040`
preserves it as accurate: the files were in no commit, ref, tag or
dangling object, because they had never been in Git at all.

## Change or development

The ratified text of Articles I–III is now held in authoritative
repository custody, and the canonical record cites those sources instead
of standing alone.

**How the text arrived.** The Founder Office placed three Markdown files
in the canonical constitution directory on 2026-09-10 and determined
that they *are* the ratified text (`fd-0040` FD-CT-1). That
determination is the ratification connection `fd-0004` deficiency 1
recorded as never transmitted.

**How it was preserved.** The files were committed exactly as supplied —
478 lines, 4,523 words, 36,709 bytes, UTF-8 with LF endings — and are
held *beside* the canonical record rather than pasted into it. The
reasoning is recorded in `fd-0040` FD-CT-3: the Constitution requires
verbatim preservation, transcription is the one way that can fail, and
it is avoided entirely by never re-typing the text. Nothing was drafted,
rewritten, modernized, normalized, reordered, corrected or reconstructed
(FD-CT-4), and SHA-256 digests for each article are recorded in
`fd-0040` so the committed bytes can be checked against the supplied
bytes at any time.

**The durable source relationship this established.** The canonical
`huerta-group-constitution.md` remains the single canonical record of
the Constitution and of the articles' status, and it now *cites* the
three files and does not restate them. A rule for future text came with
it: further ratified articles are added under the same terms — verbatim,
unaltered, recorded in the canonical record, never duplicated into it.
This is the `canonical-source-preservation.md` standard applied to the
Company's highest authority, and it is what makes the arrangement
durable rather than a one-time insertion.

**What did not change.** No constitutional language, no article's
meaning, no ratified status, and no closure of Articles I–III to
ordinary redrafting. Constitutional development beyond Article III
remains incomplete, as the canonical record has always said.

## Reason or evidence

`fd-0040`, received and recorded 2026-09-10, carrying FD-CT-1 through
FD-CT-5 and the two matters recorded at insertion.

Repository evidence: the three article files at their canonical paths,
their digests recorded in `fd-0040`, and the canonical record's
*Ratified text* section citing them. Commit provenance: `99e0250`
(insertion of the three articles and restoration of the canonical
record) and `0b1a106` (the Article II status correction under FD-CT-5),
both dated 2026-09-10, from baseline `6716f31`. The repository gate
passed on both.

**Two matters were recorded rather than resolved at insertion**, because
neither was Development's to resolve and neither could be fixed by
editing constitutional text.

- **D1 — Article II carried a contradictory status marker. Closed
  2026-09-10.** Line 5 read `**Status: Final Draft for Comprehensive
  Review**` while Article I read `**Status: Ratified**` and Article III
  carried no status line. It was inserted unaltered because the verbatim
  rule forbids editing it. The Founder Office then determined it was
  stale pre-ratification workflow metadata and authorized the exact
  replacement with `**Status: Ratified**` — a ministerial records
  correction, not an amendment, revision, reconsideration or
  reratification. The complete diff was the single status line; the rest
  of Article II is byte-for-byte unchanged and Articles I and III show
  zero diff.
- **D2 — no ratification date is recorded in any of the three texts.
  Open.** None carries a date, adoption record or signature. `fd-0004`
  recorded the ratified text *and* the ratification date as
  untransmitted; `fd-0040` supplies the first and not the second.

## Authority involved

Founder Office — supplied the texts, determined that they are the
ratified text, authorized their insertion, and determined the Article II
status correction (`fd-0040` FD-CT-1, FD-CT-2, FD-CT-5).

Institutional Platform Development — inserted the files unaltered,
restored the canonical record, verified the digests and the scope of the
status correction, and recorded both open matters rather than resolving
them.

## Governing decision references

fd-0040 · fd-0004 · fd-0003 · fd-0001

## Canonical artifact references

- `institution/governance/determinations/fd-0040-ratified-constitution-text-insertion.md`
- `institution/governance/constitution/huerta-group-constitution.md`
- `institution/governance/constitution/article-i-purpose-and-identity.md`
- `institution/governance/constitution/article-ii-mission-and-long-term-responsibility.md`
- `institution/governance/constitution/article-iii-principles-and-character.md`
- `institution/governance/determinations/fd-0004-deliverable-acceptance-and-provenance-record.md`
- `institution/governance/determinations/fd-0001-governance-audit-instrument-determinations.md`
- `institution/governance/repository-foundation/deliverable-b-governance-mechanism-audit.md`
- `institution/standards/repository/canonical-source-preservation.md`
- `institution/standards/repository/documentation-index.md`

## Implications

The corpus can now be read against its own highest authority. Every
subordination clause in the repository — the standards, the ADRs, the
metadata, the operator instructions — pointed at a Constitution whose
text was not present; they now point at text that is. The condition the
governance-mechanism audit named is answered for Articles I–III.

The insertion rule constrains what comes next: ratified text enters
verbatim, is held beside the canonical record, and is never paraphrased,
compressed, or converted into interface or marketing copy elsewhere.
Article IV and beyond remain undrafted and unauthorized, and nothing
here changes that.

The date limb of `fd-0004` deficiency 1 stays open. It is a
**historical-provenance limitation only**: the original ratification
date and adoption record have not been recovered. It does not call
ratified status into question, does not diminish authoritative force,
does not reopen the articles to ordinary redrafting, does not require
reratification, and authorizes no reconstruction of a date. No date has
been invented, and none may be.

## Dependencies

Depended on `fd-0003`, which established the canonical constitutional
record and its insertion rule, and on the Founder Office's supply of the
text — which no repository work could substitute for, as the NOT
RECOVERABLE result established.

What now depends on it: the authority chain the whole corpus asserts,
and any future ratified article, which is admitted under the same
verbatim rule.

## Supersession / later refinement references

None.

## Historical notes

Classified `recovery` rather than `governance_determination`. Both are
present — FD-CT-1 is a determination — but the institutional change is
custodial: authoritative text that the Company did not hold, it now
holds. The term is used in its custodial sense. The text was not
recovered *by search*; the search returned NOT RECOVERABLE and that
result stands. It was supplied by the Founder Office, and the recovery
is of custody, not of a lost artifact.

Recorded as one entry by determination. No separate entry exists for any
individual article, for the Article II status metadata correction, for
the search that preceded the supply, or for the insertion and
verification mechanics — those are implementation of a governed
direction, which the qualification doctrine excludes.

The earlier records are preserved unchanged rather than tidied. `fd-0004`
still records the deficiency; `fd-0001` still defers the insertion; the
governance audit still finds the record textually thin; the recovery
search still returns NOT RECOVERABLE. Each was true when made, and the
sequence — a gap recorded honestly, searched for, not found, then closed
by the only authority that could close it — is worth keeping legible.
