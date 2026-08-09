# ddr-0007 — Editorial Split-Section Composition

**Classification: Institutional Record** — Design Decision Record
(lightweight; fd-0005 decision rules). Date: 2026-08-09. Status:
Accepted (validated visually across all routes).

## Context
Every section stacked a left-anchored header over a max-w-3xl content
column, leaving a permanently dead right half at desktop widths — the
site's strongest template/generated characteristic (WP-01 critique).

## Decision
`Section` gains `layout="split"`: at lg, a 12-column grid places the
header (eyebrow/title/lead) in columns 1–5 and the content in columns
6–12 (`gap-x-16`). **Adoption criterion:** only sections whose content
is a narrow stack (prose, divided lists, ordered/stage lists, single-
column dash lists — formerly `max-w-3xl`) adopt split; wide grids
(multi-column card/dash grids) remain stacked so content keeps full
width. 33 sections adopted; 9 remain stacked. Split content drops its
own width cap (the column constrains) via `lg:mt-0` companions.

## Alternatives
Universal split (rejected: flattens wide grids); per-page bespoke
layouts (rejected: duplicates the shared shell; violates reuse rule).

## Affected implementation / Validation
Section.tsx; 33 adopter files. Verified: mobile unchanged (stacked),
desktop fills the canvas, heading hierarchy unchanged, copy invariant.
