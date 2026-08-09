# ddr-0003 — Motion Rule: Color Transitions Only, 200 ms, Brand Easing

**Classification: Institutional Record** — Design Decision Record
(lightweight; fd-0005 decision rules).

- **Date:** 2026-08-08
- **Status:** Accepted (validated in the reference implementation)
- **Related governance:** fd-0005; Website Phase 1 Inventory (motion
  findings; dead-token finding)

## Context

Every animated element used exactly `transition-colors duration-200`
with the framework's default easing, while the approved brand easing
token `--ease-brand` (cubic-bezier(0.25, 0.1, 0.25, 1)) existed unused.
No transforms, entrances, or scroll animation exist anywhere.

## Decision

The reference implementation's motion rule is: **color transitions
only, 200 ms, `--ease-brand` easing** — applied through the shared
interactive components (Button/ButtonLink, ArrowLink, NavLink) and the
few remaining direct transition sites. Reduced-motion behavior remains
globally enforced. No new motion classes (transforms, entrances,
durations) are introduced in Phase 1.

## Alternatives

(a) Remove the unused token and keep default easing — rejected: the
token records approved motion intention and activating it costs one
class; (b) introduce a broader motion scale — rejected: no
implementation evidence requires one.

## Rationale

Activates the one approved motion primitive; changes nothing else.

## Affected implementation / Validation

Shared components + direct transition sites gain `ease-brand`.
Render-diff shows only the added easing class; interaction behavior
verified on hover/focus states.
