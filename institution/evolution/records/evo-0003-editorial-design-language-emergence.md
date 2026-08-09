# evo-0003 — A Distinctive Editorial Design Language Emerged Through the Reference Implementation

**Classification: Institutional Record** — evolution record
(evidentiary, non-governing). This record documents institutional
learning from Design System Phase 2; it does not elevate the
implementation evidence it describes into institutional doctrine, and
the deferred Design System Foundation v1 remains the pending
authority for any such elevation (fd-0001, fd-0004 deficiency 6).

- **Date:** 2026-08-09
- **Institutional domain:** design-system
- **Type of evolution:** capability_change
- **Retrospective:** false

## Prior state

After Phase 1, the website was structurally unified but visually
templated: every section stacked a left header over a narrow column
beside a permanently empty right half; eight centered call-to-action
bands repeated one shape; cards were boxed in the generic dark-SaaS
manner; ordinal markers were timid; display type was undifferentiated.
The Phase 1 inventory (approved implementation evidence) had recorded
these patterns without approving them.

## Change or development

Phase 2 (`ed792a1`, refined `477eac1`) converted the reference
implementation to a recognizably Huerta Group editorial language, and
Phase 3 completed its interface surfaces. What emerged as the
distinctive language, validated across every route:

1. **Editorial split composition** — section headers beside content on
   a 12-column grid, adopted only where content is a narrow stack
   (33 sections; wide grids deliberately stacked) — ddr-0007.
2. **Quiet gunmetal serif numerals** — the ordinal system elevated
   into a structural signature, activating a reserved brand primitive
   for exactly one role — ddr-0009.
3. **The hairline rule system** — gold eyebrow ticks, top-border
   editorial items replacing boxed cards, hero datum rules, and the
   divided-stack rhythm as the site's unifying structural device.
4. **Asymmetric closing bands** — heading left, actions at the reading
   baseline right, on a raised surface — ddr-0008.
5. **Restrained display refinement** — a single display-tracking
   token, balanced wrapping, and measured presence instead of
   oversized display type — ddr-0006.
6. **A disciplined interaction voice** — brand-eased color
   transitions, precise field states, pressed feedback, and one
   2px directional micro-translate as the entire motion vocabulary —
   ddr-0003, ddr-0010.

## Reason or evidence

fd-0005 decision rules; ddr-0006…ddr-0010; the Phase 1 inventory as
the evidence baseline; commits `ed792a1`, `477eac1`, and the Phase 3
series; byte-identical page copy across the entire redesign
(render-diff verification); independent inspections (Phase 2 PASS with
route-by-route screenshots; Phase 3 inspection); production
verification at both phases.

## Authority involved

Founder Office (authorizing instruments); Design System (design
authority through the fd-0005 decision rules); Platform & Systems
Development (implementation).

## Governing decision references

fd-0005

## Canonical artifact references

`institution/design/decisions/ddr-0006-typography-refinement.md` ·
`institution/design/decisions/ddr-0007-editorial-split-composition.md` ·
`institution/design/decisions/ddr-0008-cta-and-hero-presence.md` ·
`institution/design/decisions/ddr-0009-quiet-numerals-and-open-cards.md` ·
`institution/design/decisions/ddr-0010-interaction-state-language.md` ·
`components/ui/Section.tsx` · `components/ui/CtaBand.tsx`

## Implications

**Lessons learned:** identity emerged by amplifying devices the site
already possessed (numerals, hairlines, restraint) rather than by
importing novelty; evidence-gated adoption criteria (split only for
narrow stacks) preserved meaning while removing monotony; copy
invariance plus visual review proved that a full visual transformation
can be executed with zero content risk.

**Principles that appear durable:** placement expresses hierarchy;
one activated primitive per role; extend vocabulary only by recorded
decision (the motion rule's single extension); wide content earns full
width; the empty half of a canvas is a composition resource, not a
void.

**Boundary:** every characteristic above remains implementation
evidence recorded in DDRs. None of it becomes institutional Design
System doctrine until the deferred Foundation is transmitted, admitted,
and ratifies or revises it.

## Dependencies

Depended on: fd-0005, the Phase 1 asset base (ddr-0001…0005), the
preserved inventory. Now depended on by: future Design System
foundation work, which inherits both the language and its complete
decision trail.

## Supersession / later refinement references

None.

## Historical notes

Prepared as the proposed record required by the Phase 3 instrument
(step 11) under the Evolution Log's standard implementing-office
process; recorded as institutional learning, never as design
authority.
