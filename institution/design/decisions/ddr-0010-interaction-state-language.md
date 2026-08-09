# ddr-0010 — Interaction-State Language and the Directional Micro-Translate

**Classification: Institutional Record** — Design Decision Record
(lightweight; fd-0005 decision rules).

- **Date:** 2026-08-09
- **Status:** Accepted (validated in the reference implementation at
  1440/390, mouse and keyboard)
- **Related governance:** fd-0005; ddr-0003 (motion rule, which this
  record deliberately extends); ddr-0005 (accessibility rules)

## Context

Phase 2 established the visual language; interaction feedback remained
minimal: form fields had no hover affordance or transition, buttons no
pressed state, and the arrow links no directional feedback. The
ddr-0003 motion rule permitted color transitions only.

## Decision

1. **Form-field states**: inputs carry the brand-eased color
   transition, a hover affordance stepping the border from `edge` to
   the activated `gunmetal` primitive (3.2:1 non-text contrast), the
   gold focus border retained over hover
   (`focus:hover:border-gold-600`), and a gold caret
   (`caret-gold-500`) as a precision cue.
2. **Pressed states**: primary buttons darken one accent step on
   press (`active:bg-gold-600`); secondary buttons sharpen the border
   to `gold-500`. Press feedback is immediate state recognition, not
   animation.
3. **Directional micro-translate** — the sole extension of the
   ddr-0003 motion vocabulary: the ArrowLink glyph translates 2px
   (`translate-x-0.5`) on hover with the standard 200 ms brand easing,
   communicating navigation direction. Transforms remain otherwise
   prohibited; the global reduced-motion collapse covers this
   transition; the glyph stays `aria-hidden`.

## Alternatives

Underline-based link feedback (rejected: introduces a new vocabulary
the site deliberately avoids); scale/glow feedback on buttons
(prohibited decorative class); leaving states as-was (rejected: state
recognition and affordance were measurably absent on form fields).

## Affected implementation / Validation

ContactForm INPUT_CLASSES, Button variants (ButtonLink inherits),
ArrowLink. Verified: hover/focus/pressed distinguishable by keyboard
and mouse, reduced-motion collapse applies, no contrast regression, no
layout shift from the translate (glyph is inline-block).
