# ddr-0002 — Eyebrow Letter-Spacing Unified at 0.25em via Token

**Classification: Institutional Record** — Design Decision Record
(lightweight; fd-0005 decision rules).

- **Date:** 2026-08-08
- **Status:** Accepted (validated in the reference implementation)
- **Related governance:** fd-0005; Website Phase 1 Inventory
  inconsistency register #1

## Context

The eyebrow label appeared with two letter-spacings: `0.25em` in the
ten hand-rolled hero/404 sites and `0.2em` in the shared Section shell
and the homepage CTA band — the inventory's top inconsistency, with no
governing determination either way.

## Decision

One eyebrow tracking value, **0.25em**, expressed as the
`--tracking-eyebrow` token and applied by the single shared `Eyebrow`
component everywhere (heroes, sections, CTA bands).

## Alternatives

(a) Two-level tracking as an intentional hero/section hierarchy —
rejected: no governing source establishes the distinction, and the
split originated as drift, not decision; (b) unify at 0.2em — rejected:
0.25em is the majority of authored sites and the more distinctive
institutional treatment at the label's small size.

## Rationale

Same role, one value; the narrowest decision that removes the
inconsistency without inventing hierarchy doctrine.

## Affected implementation / Validation

`components/ui/Eyebrow.tsx` (single source), Section shell, all hero
and CTA sites. Visible delta: section-level eyebrows widen from 0.2em
to 0.25em. Verified by render-diff (only tracking class changes) and
visual review.
