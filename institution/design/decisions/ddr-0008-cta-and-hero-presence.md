# ddr-0008 — Asymmetric CTA Composition and Hero Presence

**Classification: Institutional Record** — Design Decision Record
(lightweight; fd-0005 decision rules). Date: 2026-08-09. Status:
Accepted (validated visually at 1440/390).

## Context
Eight identical centered CTA bands were the site's most template-like
recurring device ("repeated centered headings"); standard heroes had
less arrival presence than the home hero and ended without structure.

## Decision
CtaBand becomes an editorial asymmetric band on a raised surface
(`bg-ink-900`, `py-24 sm:py-32`): heading and lead left (max-w-2xl),
actions aligned to the reading baseline on the right at lg (stacked
left-aligned with full-width buttons on mobile, per the ddr-0004
mobile rule). Standard PageHero padding rises to `py-24 sm:py-32` and
every hero closes with a `border-b` datum hairline. The centered
variant is retired.

## Alternatives
Keeping centered bands with bigger type (rejected: still the generic
pattern); removing the raised tone (rejected: the band needs surface
distinction from the closing section above it).

## Affected implementation / Validation
CtaBand.tsx, PageHero.tsx (all 8 bands and 10 heroes inherit).
Verified visually both widths; copy invariant; button behavior
unchanged.
