# ddr-0011 — Claude Design Adoption: Typography, Surface Language and Bounded Interaction

**Classification: Institutional Record** — Design Decision Record
(lightweight; fd-0005 decision rules).

- **Date:** 2026-08-24
- **Status:** Accepted — Founder Office adoption of the Claude Design passover
  as the approved visual and interaction direction.
- **Related governance:** fd-0005; ddr-0003, ddr-0006, ddr-0009, ddr-0010
  (partially superseded, below); gr-0003 (answered); the Claude Design passover
  evaluation.

## Context

The Claude Design passover proposed a visual and interaction direction for the
institutional website. The evaluation returned it as requiring Founder Office
determination: its palette was already governed and its copy verbatim, but four
adopted DDRs stood against its typography, its card treatment and its motion,
and it carried no responsive design.

The Founder Office has adopted the direction and authorized implementation,
including completion of the missing responsive design.

## Decision

**The Claude Design passover is the approved visual and interaction direction.**
It governs visual and interaction language only. It does not govern institutional
substance, authority, venture standing, application boundaries or repository
governance.

### 1. Typography

The display/editorial face becomes **Cormorant Garamond**; the interface and body
face **Archivo**; eyebrow labels, ordinals and system detail **JetBrains Mono**.
All three load through `next/font/google`, self-hosted at build time — no runtime
request to a third-party font host, and no raw font files committed.

### 2. Surface and card language

Content that the passover presents as a card is presented as a card: a vertical
gradient surface (`#191A1E → #121316`) on a `#26272c` hairline. On hover the
border warms to gold at 50% and the surface lifts.

This is a language, not a default. Prose sections, principle lists and editorial
splits keep the open top-border treatment ddr-0009 established. Cards are for
enumerated peers — the problem set, the disciplines, the engagement phases, the
service areas, the capability panel.

### 3. Bounded interaction

Permitted, and bounded to these:

- card hover: `translateY(-5px)` with a gold-tinted ring and drop shadow;
- primary button hover: gold glow; press: `scale(0.95)`;
- secondary button hover: gold border and text;
- footer and panel links: gold with a 5px inset on hover;
- the ddr-0010 ArrowLink translate, unchanged.

Motion remains colour-and-transform only, at the ddr-0003 duration and easing.
No entrances, no scroll choreography, no parallax, nothing ornamental. The global
reduced-motion collapse continues to cover every transition.

## Precise reconciliation of prior records

**None of ddr-0003, ddr-0006, ddr-0009 or ddr-0010 is invalidated.** Each is
amended only where the adopted design requires it, and every compatible
provision remains controlling.

| Record | Superseded only insofar as | Remains controlling |
| --- | --- | --- |
| **ddr-0003** — Motion Rule | it prohibits transforms and permits colour transitions only | 200 ms duration; `--ease-brand` easing; motion applied through shared components; global reduced-motion enforcement; no entrances or durations beyond the standard |
| **ddr-0006** — Typographic Refinement | it required "fonts unchanged" | the display tightening token `--tracking-display`; `text-balance` on headings and `text-pretty` on leads; the tightened hero line-height; the serif treatment of Problems titles; PullQuote's step in scale |
| **ddr-0009** — Quiet Numerals and Open Cards | it rejected boxed cards, borders and shadows for enumerated peers | the quiet numeral system itself, now rendered in JetBrains Mono at the passover's scale; the open top-border language for prose and editorial sections; the rule that gold stays an accent |
| **ddr-0010** — Interaction-State Language | it declared transforms "otherwise prohibited" beyond the ArrowLink translate | every form-field state (gold caret, gunmetal hover border, `focus:hover:border-gold-600`); pressed states as immediate recognition rather than animation; the ArrowLink translate itself |

**gr-0003 — Navigation Capacity Ceiling** is answered. The eight-label row is
replaced by five items plus a Capabilities disclosure holding the four
institutional branches, which restores their full names and removes the
overflow ceiling that forced "Technology" as a short label.

## Constraints that override fidelity

- **Accessibility is never traded for fidelity.** Keyboard operability, visible
  focus, semantic structure, label relationships and reduced-motion support
  take precedence over any visual detail.
- **Performance and restraint remain controlling.** Fonts are subset and
  self-hosted; motion is bounded; nothing decorative is added because a
  restriction was relaxed.
- **The site must remain recognisably Huerta Group.** The adopted direction is
  editorial and institutional. It must not drift into generic SaaS, AI-template
  or startup aesthetics — which is why cards are rationed to enumerated peers
  and gold remains an accent rather than a theme.

## Alternatives

Implementing the passover selectively — keeping the existing fonts, or the open
cards, or the colour-only motion — was rejected by the Founder Office as
diluting an adopted direction. Wholly invalidating the four prior records was
rejected here: most of their provisions are compatible and remain in force, and
recording partial supersession keeps the reasoning auditable.

## Affected implementation / Validation

Design tokens, typography loading, all nine public routes, the global shell
(Header, Capabilities disclosure, MobileNav, Footer), the shared primitives, and
the responsive design completed at tablet and mobile. Validated by the
repository gate and by direct rendered review of every route at four widths.
