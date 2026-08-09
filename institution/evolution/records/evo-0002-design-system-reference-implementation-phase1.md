# evo-0002 — Design System Reference Implementation Activated (Phase 1)

**Classification: Institutional Record** — evolution record
(evidentiary, non-governing).

- **Date:** 2026-08-08
- **Institutional domain:** design-system
- **Type of evolution:** capability_change
- **Retrospective:** false

## Prior state

The public website was visually coherent but structurally
hand-duplicated (nine heroes, eight CTA bands, twelve pull-quotes,
nineteen arrow links, a copied button recipe, two eyebrow
implementations), with no reusable design assets, no design-decision
mechanism, and the Website Phase 1 Inventory existing only as a
conversation deliverable. Design System Foundation v1 preservation was
(and remains) deferred.

## Change or development

The Founder Office unblocked implementation through decision rules
rather than foundation transmission (fd-0005): the inventory was
preserved as non-authoritative evidence, lightweight Design Decision
Record and Governance Recommendation practices were established, and
the first reusable Design System assets were extracted from
demonstrated duplication and adopted across every route — the
tracking-eyebrow and activated brand-easing tokens, and the Eyebrow,
Button/ButtonLink, ArrowLink, PullQuote, PageHero, and CtaBand
components — together with navigation current-page accessibility.
Build-level render-diffing (page copy invariant; class deltas checked
against the intended set) was validated as the neutrality-proof method
for reference-implementation refactors, catching one real regression
before commit.

## Reason or evidence

fd-0005; ddr-0001…ddr-0005; gr-0001…gr-0004; commits ef995d0, 09e0e64,
c70f2b9, eaf4081; the Website Phase 1 Inventory (evidence basis);
render-diff verification records in the Phase 1 completion report.

## Authority involved

Founder Office (unblocking determinations); Design System (design
authority, exercised through the fd-0005 decision rules); Platform &
Systems Development (implementation).

## Governing decision references

fd-0005

## Canonical artifact references

`institution/design/README.md` ·
`institution/design/website-phase1-inventory.md` ·
`institution/design/decisions/` ·
`institution/design/recommendations/` ·
`components/ui/PageHero.tsx` · `components/ui/CtaBand.tsx` ·
`components/layout/NavLink.tsx`

## Implications

Reusable design assets now emerge through evidence-gated extraction in
the reference implementation, recorded in DDRs and never silently
elevated to institutional standards; future Design System foundation
work inherits a working asset base, a decision trail, and a proven
neutrality-verification method.

## Dependencies

Depended on: the Repository Foundation migration (evo-0001), the
determinations register, and the preserved inventory. Now depended on
by: subsequent Design System phases and any future website evolution.

## Supersession / later refinement references

None.

## Historical notes

Design System Foundation v1 preservation remains deferred (fd-0001,
fd-0004 deficiency 6); the DDR set documents which patterns were
deliberately retained as implementation-specific rather than
standardized.
