# ddr-0001 — Token Architecture: Single Primitive Layer with Documented Roles

**Classification: Institutional Record** — Design Decision Record
(lightweight; records a Design System decision under fd-0005; creates
no authority beyond it).

- **Date:** 2026-08-08
- **Status:** Accepted (validated in the reference implementation)
- **Related governance:** fd-0005 decision rules; Website Phase 1
  Inventory (evidence); fd-0001/fd-0004 (DSFv1 deferral)

## Context

The reference implementation already routes all color, typography, and
motion through Tailwind v4 `@theme` tokens in `app/globals.css`
(ink/silver/gold/edge scales, two font stacks, one easing). The
inventory asked whether a parallel semantic alias layer
(surface/text/border roles) should be introduced and what to do with
the four defined-but-unused tokens.

## Decision

Phase 1 keeps a **single primitive, brand-named token layer** as the
Design System token architecture. Roles are documented (ink = surface
scale · silver = text scale · gold = accent/interactive scale · edge =
hairline) rather than duplicated as alias tokens. The unused color
primitives (`ink-800`, `ink-700`, `gunmetal`) are **retained as
reserved scale steps**; `--ease-brand` is activated (ddr-0003) rather
than removed. One token is added: `--tracking-eyebrow` (ddr-0002).

## Alternatives

(a) Full semantic alias layer now — rejected: renames every class
usage for naming-only gain, doubles vocabulary with a single theme and
no second consumer; (b) delete unused tokens — rejected: they are
plausible brand-scale steps and removal is churn without benefit.

## Rationale

Narrowest responsible decision: the primitive layer already behaves as
the token system; aliasing becomes justified only with a demonstrated
second need (multi-theme, non-web platform, or divergent role mapping).

## Affected implementation / Validation

`app/globals.css` (token comments + one addition); all consumers
unchanged. Validated by unchanged rendered output except the intended
ddr-0002/0003 deltas (build-level HTML render-diff).
