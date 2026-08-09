# ddr-0005 — Phase 1 Accessibility and Interaction Rules

**Classification: Institutional Record** — Design Decision Record
(lightweight; fd-0005 decision rules).

- **Date:** 2026-08-08
- **Status:** Accepted (validated in the reference implementation)
- **Related governance:** fd-0005; Website Phase 1 Inventory
  (accessibility observations); existing accessibility requirements in
  the Development Standards

## Context

The inventory's accessibility review found a strong baseline with
specific gaps: no current-page indication in any navigation
(`aria-current` absent), decorative "→" glyphs announced by screen
readers, and an inconsistent disabled-button treatment. It also noted
the dual focus convention (global 2px gold `:focus-visible` outline;
form fields adding an always-on border swap).

## Decision

1. **Current-page state**: every navigation link (header, menu,
   footer) renders through the shared `NavLink`, which sets
   `aria-current="page"` on the active route and the emphasized text
   tone (`text-silver-100`); active/inactive classes are computed
   exclusively so no conflicting utilities are emitted.
2. **Decorative glyphs are hidden from assistive technology**: the
   arrow in `ArrowLink` (and any future decorative glyph) is wrapped
   in `aria-hidden`.
3. **Disabled interactive treatment**:
   `disabled:pointer-events-none disabled:opacity-60` on the shared
   button base — pending/disabled controls suppress hover feedback
   uniformly.
4. **Focus convention retained**: the global 2px gold
   `:focus-visible` outline remains the site-wide focus treatment;
   form fields keep the supplementary `focus:border-gold-600` border
   swap. Both applied together were verified sufficient; unifying
   further had no accessibility benefit.

## Alternatives

An underline or marker for the active nav state was rejected: the
tonal step matches the established hover language and adds no new
visual vocabulary; nav-architecture changes are out of scope (gr-0003).

## Rationale

Smallest set of rules that closes the observed gaps using existing
visual language only.

## Affected implementation / Validation

`components/layout/NavLink.tsx` (+ Header/MobileNav/Footer),
`components/ui/ArrowLink.tsx`, `components/ui/Button.tsx`. Validated:
keyboard walk of navigation and form, `aria-current` present on the
active route only, screen-reader text free of arrow glyphs
(render-diff shows glyphs inside `aria-hidden` spans), contrast
unchanged (token-identical palette).
