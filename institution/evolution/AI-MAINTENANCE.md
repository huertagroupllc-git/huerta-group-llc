# Evolution Log — AI-assisted maintenance procedure

**Classification: Repository Standard** (repository-scoped operating
procedure). Required by `fd-0038` (FD-EL-5). Read
[`README.md`](README.md) first: it holds the authority boundary, the
qualification doctrine and the maintenance workflow this procedure serves.

This is the procedure AI assistance follows after a material institutional
determination. It exists because the log's value is entirely a function of
whether its entries are true, and an assistant that is helpful before it is
correct will fill gaps with plausible history.

## The invocation

After a Founder Office determination or a material institutional change, the
procedure is invoked naturally:

> Evaluate the just-completed institutional change against the Evolution Log
> doctrine. Inspect repository authority. If it materially changes
> institutional state, prepare the next Evolution Log entry with authoritative
> provenance. If it does not qualify, say so and record nothing. Do not infer
> or reconstruct unsupported history.

## The procedure

1. **Inspect repository authority relevant to the change.** The determinations
   register, the ADRs, the Foundations, the Standards, the Operational Assets
   and the Decision History — read, not remembered.
2. **Establish whether authoritative institutional state changed.** Not
   whether work happened. Not whether files changed.
3. **Apply the qualification doctrine** in [`README.md`](README.md): the five
   questions, and the exclusion list.
4. **If it does not qualify, say so explicitly and stop.** "No Evolution Log
   entry is required, because …" is a complete and frequently correct answer.
   Recording a non-qualifying event is a worse outcome than recording nothing.
5. **If it qualifies, establish the prior state and the new state from
   authoritative sources.** Both must be evidenced. A prior state that cannot
   be evidenced is not a prior state; it is an assumption.
6. **Establish the authority and the effective date** from the governing
   artifact — the fd-record's date, the ADR's ratification date — not from
   when the work was done or the commit landed.
7. **Establish affected artifacts and supersession relationships.** Which
   canonical artifacts the evolution touched; which earlier record it refines
   or corrects.
8. **Draft the smallest complete entry** from [`TEMPLATE.md`](TEMPLATE.md).
   Prior state and new state are concise institutional-state descriptions, not
   narrative copies of the underlying decision.
9. **Cite repository-relative evidence** for every substantive claim:
   `fd-NNNN`, `adr-NNNN`, repository paths. Every canonical artifact reference
   must exist — the validator checks.
10. **Stop if evidence is missing or contradictory.** Surface the gap. Do not
    resolve it.

Then add the record, its INDEX line, its registry entry and its manifest entry
in the same change, and run `npm run verify`.

## Hard rules

- **Never invent institutional history.** Not a date, not a reason, not a
  prior state, not an authority.
- **Never treat conversation memory as superior to repository authority.** A
  summary of what was discussed is not evidence of what was decided. If the
  repository does not record it, it is not available to the log.
- **Never infer Founder approval from implementation.** That work was done is
  not evidence that it was authorized.
- **Never backfill without authoritative support**, and never without the
  express authorization the retrospective rule requires — currently
  `fd-0038`, cited as `retrospectiveAuthorization`.
- **Never create an entry for routine code work**, however large the diff.
- **Never silently rewrite a prior entry** to match present understanding.
  Corrections are made by a later correcting record referencing the earlier
  one, in both records' refinement references.
- **When governance evidence conflicts, stop and surface the conflict.** The
  log does not resolve governance questions; it records that they were
  resolved elsewhere.

## What a refusal looks like

A correct refusal names the doctrine and the missing thing:

> No Evolution Log entry is required. ADR-0022 is at *Proposed* and has not
> been ratified; under the exclusion for unratified proposals, institutional
> state has not changed. An entry becomes appropriate on ratification, with
> the ratification date as its effective date.

> No Evolution Log entry can be prepared. The Generation Two client-engagement
> program is evidenced only in a separate application repository; this
> repository records no determination for it, so prior state, authority and
> effective date cannot be established here. Surfaced to the Founder Office
> rather than reconstructed.
