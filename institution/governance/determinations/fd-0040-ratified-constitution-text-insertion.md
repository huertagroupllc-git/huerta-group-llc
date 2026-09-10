# fd-0040 — Founder Office Determination: Ratified Constitution Text Supplied and Inserted (Articles I–III)

**Classification: Institutional Record** — determination record (evidentiary,
non-governing). The record evidences the determinations; authority resides with
the Founder Office and the artifacts the determinations govern.

- **Instrument:** Ratified Constitution Text Reconciliation — Articles I–III,
  execution package, Founder Office → Institutional Platform Development,
  followed by two direct Founder Office determinations of 2026-09-10: that the
  supplied texts **are ratified**, and that the canonical record be restored and
  the articles inserted.
- **Received:** 2026-09-10. **Recorded:** 2026-09-10.
- **Starting baseline:** `6716f31`.

## What was supplied

Three Markdown files, placed by the Founder Office in the canonical
constitution directory on 2026-09-10:

| Article | File | SHA-256 |
| --- | --- | --- |
| I | `article-i-purpose-and-identity.md` | `5e23c52e30a82b7a40fc89bd01bf0f964a90422619b1a49e8b77f62ce24a73e8` |
| II | `article-ii-mission-and-long-term-responsibility.md` | `f270b1699e7bc78db204a6bb924f4fd86faf6fbb629fb0c7d5a3165b384ae8b8` |
| III | `article-iii-principles-and-character.md` | `4ebefcb4259e9fd73fc013c282557cfd9de42d3ec6d14ef3db77a1532523f735` |

478 lines · 4,523 words · 36,709 bytes · UTF-8 · LF line endings, no CR bytes.
Headings match the canonical titles exactly. Article I carries nine sections,
Article II ten, Article III twelve; none is truncated and none contains a
placeholder gap.

## The determinations

**FD-CT-1 — The supplied texts are the ratified text.** The Founder Office
determined on 2026-09-10 that Articles I, II and III as supplied are ratified.
This determination is the ratification connection; it is the evidence
`fd-0004` deficiency 1 recorded as never transmitted.

**FD-CT-2 — Insertion is authorized.** The Founder Office directed restoration
of the canonical record and insertion of the articles.

**FD-CT-3 — The text is preserved byte-for-byte, not transcribed.** The three
files are committed exactly as supplied and are themselves the ratified text.
They are held beside the canonical record rather than pasted into it: the
Constitution requires verbatim preservation, transcription is the one way that
can fail, and it is avoided entirely by never re-typing the text. The canonical
record cites them and does not restate them.

**FD-CT-4 — No constitutional language was altered.** Nothing was drafted,
rewritten, modernized, normalized, reordered, corrected or reconstructed. The
committed bytes equal the supplied bytes, as the digests above attest.

## Matters recorded at insertion

Recorded rather than resolved at insertion, because neither was Development's
to resolve and neither could be fixed by editing constitutional text.

**D1 — Article II carried a contradictory status marker. CLOSED 2026-09-10.**

*The condition, as it stood at insertion:* line 5 of
`article-ii-mission-and-long-term-responsibility.md` read
`**Status: Final Draft for Comprehensive Review**`. Article I read
`**Status: Ratified**`; Article III carried no status line. Under FD-CT-1 all
three are ratified, so the Article II marker contradicted the article's actual
status. It was inserted unaltered because the verbatim rule forbids editing it,
and correcting it was recorded as a Founder Office act.

*The closure:* the Founder Office determined on 2026-09-10 that the marker was
**stale pre-ratification workflow metadata** which ceased to be accurate when
Article II was ratified, and expressly authorized its replacement with
`**Status: Ratified**`. That correction is made under **FD-CT-5** below. D1 is
closed. The condition is preserved here rather than deleted: the record shows
that the stale metadata existed, and how it was corrected.

**D2 — No ratification date is recorded in any of the three texts. OPEN.**

None carries a date, adoption record or signature. `fd-0004` recorded the
ratified text *and the ratification date* as untransmitted; FD-CT-1 supplies
the first and not the second.

D2 is a **historical-provenance limitation only**: the exact original
ratification date and adoption record for Articles I–III have not been
recovered. It does **not** call ratified status into question, does **not**
diminish the authoritative force of Articles I–III, does **not** reopen them to
ordinary redrafting, does **not** authorize reconstruction of an adoption date,
and does **not** require reratification. No date has been invented, and none
may be.

## FD-CT-5 — Article II status metadata correction (2026-09-10)

The Founder Office determined that the Article II status marker was stale
pre-ratification workflow metadata and authorized this exact replacement:

- **Before:** `**Status: Final Draft for Comprehensive Review**`
- **After:** `**Status: Ratified**`

**This is a ministerial records correction.** It is not an amendment, a
substantive revision, a reconsideration, a reratification, or any change to
Article II's constitutional meaning. It corrects a metadata line that described
a workflow state Article II had already left.

Scope, verified against baseline `99e0250`: the complete diff is the single
status line. Every other line of Article II is byte-for-byte unchanged, and
Article I and Article III show zero diff.

## Effect on prior records

- **`fd-0004` deficiency 1** — the *text* limb is closed by this record. The
  *date* limb remains open (D2). The deficiency record itself is preserved
  unchanged; history is not rewritten because a gap was later closed.
- **The prior recovery determination** returned NOT RECOVERABLE on the sources
  then searched. It was accurate as to the Git object graph and remains so: the
  supplied files were not in any commit, ref, tag or dangling object at the time
  of that search, and their absence from Git is why. It is superseded in
  practical effect only.
- **`deliverable-b` governance audit** — its finding that the constitutional
  record contained no ratified text is preserved as historically accurate.

## Relationship to prior determinations

Answers `fd-0004` deficiency 1 (text limb). Related to `fd-0003`, which
established the canonical constitutional record and its insertion rule.
