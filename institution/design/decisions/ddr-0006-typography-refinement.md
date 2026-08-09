# ddr-0006 — Phase 2 Typographic Refinement

**Classification: Institutional Record** — Design Decision Record
(lightweight; fd-0005 decision rules). Date: 2026-08-09. Status:
Accepted (validated visually across all routes at 1440/390).

## Context
Phase 1 unified sources; the type still read uniform: identical
display treatment everywhere, modest hero presence, small quotes, one
sans h3 outlier, no wrapping control.

## Decision
Display serif gains a tightening token `--tracking-display` (-0.015em)
applied to h1/h2/pull-quotes; headings use `text-balance`, leads
`text-pretty`; hero h1 line-height tightens to 1.08 with measure
widened to `max-w-4xl`; PullQuote steps to `text-2xl leading-snug
pl-6`; the Problems item titles join the serif system (`font-serif
text-xl`). Body/lead sizes unchanged; fonts unchanged (Branding
identity preserved).

## Alternatives
Larger display scale (rejected: oversized-display-plus-small-body is
the generic pattern the instrument prohibits); font substitution
(prohibited); body size reduction (rejected: readability risk without
evidence).

## Affected implementation / Validation
globals.css token; PageHero, Section, CtaBand, PullQuote, Problems.
Verified: copy invariance, semantic hierarchy unchanged, no overflow
at 390/768/1440, contrast token-identical.
