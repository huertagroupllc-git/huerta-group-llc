# Historical Diagnostic-Instrument Retrieval and Preservation Record

**Classification: Institutional Record** — retrieval and provenance record
(evidentiary, non-governing). Returned by Institutional Platform Development
under `fd-0019` §2.5 (bounded retrieval).

- **Performed:** 2026-08-25.
- **Targets (six):** Repository Audit (Deliverable A); Repository Authority
  Matrix (Deliverable A.1); Governance Mechanism Audit (Deliverable B);
  Proposed Repository Architecture (Deliverable C); Repository Migration Plan
  (Deliverable D); Corporate Platform Alignment Audit.
- **Outcome:** **four recovered and preserved; two not found; nothing
  reconstructed.**

## 1. Why these six

Each is an accepted instrument (`fd-0004` acceptance history; `fd-0006`
"audit status: Accepted") whose determinations are transcribed in the register
but whose text was not preserved. The Generation One Discovery Report §1.5
identified them as "the closest things to diagnostic instruments in the
institution's history," and Stage 2 depends on worked examples of diagnosis
before restructuring.

## 2. Locations searched, and results

| Location | Method | Result |
| --- | --- | --- |
| This repository, working tree and full history | `git log --all` for files ever added; `git log -S` for each title; the `pre-migration-baseline` tag | Only the determination records that cite the titles |
| This repository, unreachable objects | `git fsck --unreachable --no-reflogs`, every blob read and grepped | Five unreachable blobs matched — all prior versions of `manifest.json` / `determinations-registry.json` citing the titles; no instrument text |
| Workbench and gitignored paths | listing and grep | None |
| Sibling repositories (`huerta-group-publishing`, `huerta-group-operations`) | grep of docs and READMEs | None |
| Local filesystem | Spotlight by title; grep of `~/Documents`, `~/Desktop`, `~/Downloads`, iCloud Drive (`.md`, `.txt`, `.xml`, `.json`, `.html`) | Only repository files citing the titles |
| Other sessions' scratchpads | grep | None |
| Founder's Google Drive | title search for all six; full-text search for three | None (one unrelated full-text hit, not an instrument) |
| Founder's Gmail | thread search for all six titles | None |
| Institutional Platform Development's session records | scan of every assistant-returned message for each title as a line-leading heading, in both project directories | **Four complete originals found** (§3); one false positive (§4) |

The session records are Development's own working environment. They were
searched because the `fd-0012` precedent searched "the implementing office's
own transmission cache and prior session records," and because the
deliverables were **returned** through that environment — the returning
message is the transmitted original, not a summary of it.

## 3. Recovered originals — identity, completeness, integrity

For each recovered instrument, the returning assistant message was extracted
verbatim (the exact string, no added header, no normalization, no trailing
newline added) and verified before any repository copy existed.

| Instrument | Session record · timestamp (UTC) | Identity evidence | Completeness | Bytes | SHA-256 |
| --- | --- | --- | --- | --- | --- |
| **Deliverable B — Governance Mechanism Audit** | `1702b6a9…` · 2026-08-08T05:44:43Z | Title; header "Repository Foundation Project, Phase 1 · Audited at commit `4dc354e` (= origin/main) · READ ONLY · Builds on accepted Deliverable A" | §1–§16 contiguous; closes "DELIVERABLE B COMPLETE — AWAITING FOUNDER OFFICE REVIEW" | 34,113 | `a0d131034babfcf6a395a1504238e46511c66613c32c991a5c593a2a1b622963` |
| **Deliverable C — Proposed Repository Architecture** | `1702b6a9…` · 2026-08-09T02:53:17Z, immediately after the Deliverable C task instrument (`<task><title>Repository Foundation Project — Phase 1 — Deliverable C …`) | Title; header "Designed against accepted Deliverables A, A.1, and B (baseline commit `4dc354e`) · Design only" | §1–§19 contiguous; closes "DELIVERABLE C COMPLETE — AWAITING FOUNDER OFFICE REVIEW" | 29,037 | `7878307bb8814e661913cf2faee68b2b06cb6292c556644a21d99225fd3118d9` |
| **Deliverable D — Repository Migration Plan** | `1702b6a9…` · 2026-08-09T03:09:52Z, immediately after the Deliverable D task instrument | Title; header "Planned against baseline `4dc354e` (= origin/main) · Planning only" | §1–§25 contiguous (§8–§12 and §20–§21 are combined headings in the source); closes "DELIVERABLE D COMPLETE — AWAITING FOUNDER OFFICE REVIEW" | 26,674 | `084f50b81639863759612568f55c9ece881a54f13738ef66caa12703d18426a8` |
| **Corporate Platform Alignment Audit** | `84d242e7…` · 2026-08-12T05:10:54Z | Title; header table "Governing authority Founder Office · Implementing office Platform & Systems Development · Execution mode Architectural and Strategic Audit — read-only · Audit date 2026-08-11" | §1–§18 contiguous; closes "This audit is complete. No repository or platform modification was made. Awaiting Founder Office review." | 52,695 | `1140e73cda4dce7519b1deea45de155c28a883f2e0618403fc912484130d9999` |

Dates are consistent with the register: the Deliverable B instrument was
received 2026-08-07 and B was returned the same evening (Arizona time); C and D
were returned 2026-08-08 evening, and `fd-0002`/`fd-0003` were received
2026-08-08; the Alignment Audit is dated 2026-08-11 and `fd-0006` recording its
acceptance was received 2026-08-12.

**What is preserved is the deliverable as returned.** `fd-0004` records C and D
as "Accepted as modified by Founder Office"; the modifications (chiefly FO-1's
single-repository determination, withdrawing the dual-repository split C
recommended and D planned) are recorded in `fd-0003`. The preserved texts
therefore describe a target the Founder Office subsequently changed. They are
historical instruments and are not edited to agree with the determinations
made on them.

**Preserved at:**

- `institution/governance/repository-foundation/deliverable-b-governance-mechanism-audit.md`
- `institution/governance/repository-foundation/deliverable-c-proposed-repository-architecture.md`
- `institution/governance/repository-foundation/deliverable-d-repository-migration-plan.md`
- `institution/governance/platform-alignment/corporate-platform-alignment-audit.md`

Each preserved file was compared (`cmp`) against the extracted original and
its digest re-verified after copying. No header was added, following the
`fd-0013` precedent that provenance lives in a separate record rather than in
the preserved text.

## 4. Not recovered — and one false positive

**Deliverable A — Repository Audit Report** and **Deliverable A.1 — Repository
Authority Matrix** were found in none of the locations in §2. Deliverable B's
header states it "Builds on accepted Deliverable A," and Deliverable C's that
it was "Designed against accepted Deliverables A, A.1, and B," so both existed
and were transmitted; their returning session record is not among the records
available to Development.

A message dated 2026-08-10T03:20:09Z carries the headings "# Deliverable A —
Repository Audit Report" and "# Deliverable A.1 — Repository Authority
Matrix" but is an audit of a different repository — its first table records
"Remote `https://github.com/huertagroupllc-git/huerta-group-publishing.git`"
— and closes "This completes Deliverables A, A.1, B, and C" for that venture.
It is **not** the Huerta Group LLC Repository Audit and was not preserved here.
It is recorded as an incidental finding: Huerta Group Publishing's own records
cite an "August 2026 repository audit" they do not preserve, and Development's
session record appears to hold it. That is a venture-plane matter (FD-V2) and
is returned to the Founder Office at `fd-0019` §6.4, not acted on.

**Deficiency retained.** Deliverables A and A.1 remain unavailable (`fd-0019`
Deficiency 1). Neither was reconstructed from `fd-0004`'s acceptance history,
from Deliverable B's and C's references to them, from the Discovery Report's
characterization, or from memory.

## 5. Provenance limitations

1. The recovered texts are Development's returning messages. The Founder
   Office's received copies were not available for comparison (`fd-0019`
   Deficiency 2). Identity rests on internal evidence: title, project header,
   audited baseline commit, contiguous numbering, closing determination line,
   and — for C and D — the tasking instrument immediately preceding the return
   in the same session.
2. Session records are transient working environments. Under the refined
   institutional-memory principle (`fd-0019` §2.9) they are not authoritative
   by existence; here they served only as the custody location from which an
   authentic transmitted original was recovered, and the originals now reside
   in durable, organization-controlled, independently retrievable custody.
3. No search was made of the Founder Office's own custody beyond Google Drive
   and Gmail, which are the locations prior instruments named.

## 6. What this record does not do

It creates no authority for the recovered instruments — they are evidentiary
Institutional Records of accepted deliverables, superseded in effect by the
determinations made on them and by the architecture since executed. It does
not reconstruct anything, and it does not preserve the venture-plane artifact
found incidentally.
