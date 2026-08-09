# ddr-0004 — Phase 1 Component Extraction and Classification

**Classification: Institutional Record** — Design Decision Record
(lightweight; fd-0005 decision rules).

- **Date:** 2026-08-08
- **Status:** Accepted (validated in the reference implementation)
- **Related governance:** fd-0005; Website Phase 1 Inventory (component
  candidates and inconsistency register)

## Context

The inventory documented heavy hand-duplication: nine near-identical
page heroes, eight closing CTA bands, twelve left-rule pull-quotes,
nineteen gold arrow links in three micro-variants, a duplicated
button recipe, and a twice-implemented eyebrow. No governing source
defined a component model; fd-0005 authorizes narrowest responsible
implementation decisions recorded here.

## Decision

Extract six reusable components with the following Phase 1
classification (evidence counts from the inventory):

- **Primitive** — `Eyebrow` (13 authored sites), `Button`/`ButtonLink`
  (one `buttonClasses` source; ~23 sites), `ArrowLink` (18 refactored
  sites; arrow glyph hidden from assistive technology).
- **Standard** — `PullQuote` (12 sites; the `pl-6` definition-list
  wrapper in Differentiation is retained as implementation-specific).
- **Composite** — `PageHero` (10 routes; `display` size reserved for
  the homepage), `CtaBand` (8 routes; optional centered eyebrow).

**Normalizations adopted with the extraction:** CTA action rows use
one recipe (`flex flex-col justify-center gap-4 sm:flex-row`) — mobile
CTA buttons are full-width, matching hero action rows; the AboutCta
`items-center` variant is retired. The 404 page adopts the standard
hero padding (`py-20 sm:py-28`, previously `py-24 sm:py-32`). Buttons
gain a uniform disabled treatment
(`disabled:pointer-events-none disabled:opacity-60`).

**Deliberately retained as implementation-specific (not elevated):**
grid recipes and their gap/measure variants; the four item-title (h3)
treatments; top-border list paddings (`pt-5/6/8`); the Capabilities
card hairline (`w-10 bg-gold-500`) and filled-card variants; the
contact-aside prose link; `space-y-2.5`; the ServiceAreas rhythm.

## Alternatives

A wider component sweep (cards, grids, lists) was rejected: variants
carry differing semantics and counts below a reuse threshold —
premature abstraction. Leaving heroes/CTAs duplicated was rejected:
ten- and eight-site duplication is the strongest extraction evidence
on the site.

## Rationale

Extraction only where repetition is overwhelming and semantics
identical; variation with meaning stays page-owned.

## Affected implementation / Validation

`components/ui/{Eyebrow,Button,ButtonLink,ArrowLink,PullQuote,PageHero,CtaBand}.tsx`,
Section shell, all section files, contact page, 404, ContactForm.
Validated by build-level render-diff: page text identical on every
route; class deltas limited to the intended set (tracking, easing,
disabled utilities, CTA row recipe, 404 padding); tsc/lint/build green.
