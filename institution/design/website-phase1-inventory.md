# Website Phase 1 Inventory — Existing-State Design Inventory

**Classification: Institutional Record** — approved implementation
evidence, **not institutional Design System authority** (fd-0005
rule 1: "Website Phase 1 Inventory is approved implementation evidence,
not institutional Design System authority"). Preserved verbatim as
delivered to the Design System authority on 2026-08-04; surveyed at
commit `4dc354e` (pre-migration paths appear as surveyed). Nothing in
this document approves a standard; the empty "approved institutional
standard" classification it records was accurate at survey time and
remains governed by fd-0001/fd-0004 (Design System Foundation v1
preservation deferred).

---

# Huerta Group Website — Existing-State Design Inventory

**Design System Foundation v1 — Implementation Phase 1 deliverable**

- **Status of this document:** Existing-state inventory, returned to the
  Design System authority for evaluation. Documentation only. Nothing in
  this document is implemented, normalized, or changed; nothing in it is
  an approved institutional standard.
- **Scope inspected:** the complete public website implementation at
  commit `4dc354e` — 12 routes, 3 UI primitives, 4 layout/contact
  components, 48 section components, `app/globals.css`, `app/layout.tsx`,
  `app/icon.svg`, `next.config.ts`, `lib/site.ts`, `lib/inquiry.ts`,
  `app/contact/actions.ts`. Every file read in full; class frequencies
  extracted mechanically; contrast ratios computed from the exact hex
  values.
- **Method note:** three independent inspection passes covered
  (a) home/services/methodology, (b) intellectual-property/education/
  about, (c) managed-services/technology/contact + configuration, with a
  cross-cutting mechanical sweep for frequencies, accessibility markers,
  and layering. Counts below are exact unless marked approximate.

## Status classification used throughout

| Status | Meaning |
| --- | --- |
| **Current implementation** | What the code does today. Not automatically approved. |
| **Repeated pattern** | The same recipe appears in ≥2 places (counts given). |
| **Candidate** | Flagged for possible future token/component status — requires Design System approval. |
| **Approved institutional standard** | **None exist yet.** Design System Foundation v1's text has not been transmitted to the repository, so no implementation detail below carries approved-standard status. The brand palette values (matte black, gunmetal silver, metallic gold) trace to Branding authority per the comment in `globals.css`, but their design-system codification awaits DSFv1. |

---

## 1. Typography

**Current implementation.** Two families via `next/font` (self-hosted,
`display: swap`): Inter (`--font-inter` → `--font-sans`, body/UI) and
Source Serif 4 (`--font-source-serif` → `--font-serif`, headings and
emphasis). Fallback stacks defined in `@theme`. Only two weights are
used anywhere: default 400 and `font-medium` (17×; eyebrows, button
labels, form labels, one h3 variant). No bold, no italic styling.

**Type scale in actual use** (frequency): `text-xs` 13 (eyebrows,
copyright) · `text-sm` 50 (buttons, labels, markers, footnotes) ·
`text-base` 2 (mobile-nav links) · `text-lg` 48 (body/lead) · `text-xl`
24 (h3s, pull-quotes) · `text-2xl` 6 (h3 large, success heading) ·
`text-3xl`/`text-4xl` (h2 ramp) · `text-4xl`/`text-5xl` (h1 ramp) ·
`text-6xl` 1 (home hero at `lg`).

**Repeated patterns.**
- h1 (9 heroes + 404): `mt-6 max-w-3xl font-serif text-4xl leading-tight text-silver-100 sm:text-5xl` — byte-identical everywhere except the home hero, which alone adds `lg:text-6xl`.
- h2 (42 Section blocks): `mt-5 max-w-2xl font-serif text-3xl text-silver-100 sm:text-4xl`; CTA-band h2 variant swaps `mt-5` for `mx-auto` (8 bands).
- Body/prose (24+): `text-lg leading-relaxed text-silver-400`, usually as `mt-10 max-w-3xl space-y-6 …` (16 identical prose stacks).
- `leading-relaxed` 77× (body), `leading-tight` 10× (h1 only).
- Eyebrow: `text-xs font-medium uppercase tracking-[0.25em]` (heroes, 10×) or `tracking-[0.2em]` (Section shell + home CTA, 2 source sites → 43 rendered).
- Serif emphasis paragraph: `font-serif text-xl text-silver-300` (pull-quotes, 9×).

**One-offs.** `lg:text-6xl` (home hero); contact-aside h2 at `text-xl`
(every other h2 is `text-3xl sm:text-4xl`); `tracking-wide` on brand
mark, buttons (4×).

**Inconsistencies.** (a) Two eyebrow trackings, 0.25em vs 0.2em, split
by hero-vs-section context; (b) four different h3 recipes for analogous
item titles: `font-medium` sans base-size (Problems), `font-serif
text-xl` with `mt-3` (Approach/Engagement) or `mt-6` (Capabilities),
`font-serif text-2xl` (ServiceAreas, GuidingPrinciples, Perspective,
both Principles components); (c) h2 element used at `text-xl` in the
contact aside.

**Token candidates.** Family pair; the de-facto ramp
(xs/sm/lg/xl/2xl/3xl→4xl/4xl→5xl→6xl); the two leading values; eyebrow
tracking (needs a single approved value or an approved two-level rule);
weight rule ("serif at 400, medium for UI labels only").
**Component candidates.** Eyebrow label; heading-with-eyebrow group
(already half-captured by `Section`); pull-quote.

---

## 2. Colors

**Current implementation.** All color flows through Tailwind v4 `@theme`
tokens in `globals.css` — the only raw hex outside it is in the
temporary favicon `app/icon.svg` (`#0F0F10`, `#B08D57`). Dark-only:
`colorScheme: "dark"`, `themeColor #0F0F10`, no light theme, no
`prefers-color-scheme` handling.

| Token | Hex | Observed role (frequency) |
| --- | --- | --- |
| ink-950 | #0b0b0c | page background; button-text-on-gold (2×) |
| ink-900 | #0f0f10 | raised sections (19), footer, cards, inputs, gradient start |
| ink-800/700 | #141416/#1a1a1d | **defined, never used** |
| edge | #232327 | every hairline border/divider (27 border + divide) |
| silver-100 | #ececee | headings, emphasized text (46×) |
| silver-300 | #c2c5c9 | secondary-button text, list items, pull-quotes (24×) |
| silver-400 | #9ba0a6 | body text (66×) |
| silver-500 | #7c828a | footnotes, placeholders, de-emphasis (11×) |
| gunmetal | #5e646b | **defined, never used** |
| gold-300 | #cfb489 | link hover, field-error text (21×) |
| gold-400 | #c2a06c | links at rest, primary-button hover (20×) |
| gold-500 | #b08d57 | eyebrows, markers, primary button, selection, focus outline (23×) |
| gold-600 | #8e6f41 | hairlines, dash markers, secondary hover border (16×) |

**Computed WCAG contrast (on ink-950 / ink-900):** silver-100 16.7/16.2 ·
silver-300 11.4/11.1 · silver-400 7.5/7.3 · silver-500 5.1/4.9 ·
gold-300 9.9/9.6 · gold-400 8.0/7.8 · gold-500 6.4/6.2 · gold-600
4.2/4.1 · ink-950 on gold-500 (primary button) 6.4. All text pairs pass
WCAG AA (silver-500 with margin only). gold-600 fails AA for normal
text but is used exclusively decoratively (aria-hidden markers,
borders).

**Repeated pattern.** A consistent four-step text hierarchy
(silver-100 → 300 → 400 → 500) and a gold "attention" scale where
interaction lightens gold (400→300 links, 500→400 primary button).

**Inconsistencies / observations.** (a) **Gold doubles as the error
color** — the form error banner (`border-gold-500`) and field errors
(`text-gold-300`) are visually identical to accent/link styling; there
is no semantic error/success/warning color. (b) Three `@theme` tokens
are dead: `ink-800`, `ink-700`, `gunmetal`. (c) Favicon hex duplicates
token values by hand.

**Token candidates.** The full ink/silver/gold/edge scales are already
token-shaped; open questions are the dead tokens and whether a semantic
layer (error/success/info) is required. **These CSS variables are
implementation tokens, not approved design tokens** — codification is a
DSFv1 decision.

---

## 3. Spacing

**Current implementation & repeated patterns.**
- Section vertical rhythm: `py-20 sm:py-28` (42 Section blocks + 8 CTA bands + 8 heroes); home hero alone extends `py-24 sm:py-32 lg:py-40`; 404 uses `py-24 sm:py-32`.
- Post-heading content offset: `mt-10` (48×, dominant), `mt-12` (6×, dash grids), `mt-14` (15×, grids/divided lists) — three values for the same structural slot.
- Prose paragraph rhythm: `space-y-6` (26×).
- In-card/item rhythm: `mt-2`/`mt-3`/`mt-5`/`mt-6` small steps; eyebrow→h1 `mt-6`, eyebrow→h2 `mt-5` (differs by heading level).
- Grid gaps: `gap-3` (marker rows, eyebrow), `gap-4` (CTA rows), `gap-6` (form grid, number splits, card grid), `gap-10`/`gap-x-8 gap-y-10`/`gap-x-12 gap-y-4`/`gap-y-10` (content grids), `gap-12` (contact split).
- Footer: `py-14`, legal strip `mt-12 pt-6`.

**One-offs.** `space-y-2.5` (Capabilities items — the only fractional
value); `space-y-12` + `pt-8` items (ServiceAreas); `py-1` link tap
targets (21×) vs `py-2`/`py-3` in nav contexts.

**Inconsistencies.** The `mt-10`/`mt-12`/`mt-14` split; list-item top
padding `pt-5` vs `pt-6` vs `pt-8` across analogous top-border rows;
trailing "→" link margins vary (`mt-6`, `mt-10`, `mt-12`, or inherited
from `space-y-6`).

**Token candidates.** Section rhythm pair (20/28); content-offset step;
prose rhythm (6); the tap-target paddings.

---

## 4. Border radius · 5. Shadows · 6. Elevation

**Current implementation.** Radius exists in exactly one value:
`rounded-sm` — on ButtonLink, the form inputs/select/textarea, the
submit button, and the skip link. Every surface (cards, panels,
banners) is square. The favicon uses `rx=12`.

**Shadows: none.** Zero `shadow-*` classes site-wide. **Elevation is
expressed entirely through background tone and hairlines**, not
shadows: base `ink-950` → raised `ink-900` (19 raised sections, footer,
cards, inputs) → hero gradient (`bg-gradient-to-b from-ink-900
to-ink-950`, the only gradient, 10 uses). Layering: sticky header
`z-50` with `bg-ink-950/85 backdrop-blur` (the only translucency +
blur), skip link `z-[60]`; no other z-index values.

**Candidates.** "Square surfaces, `rounded-sm` interactives" as a
radius rule; a two-level surface-tone elevation token; the header
translucency treatment.

---

## 7. Layout systems · 8. Containers · 9. Grid patterns

**Current implementation.** One layout system: full-width stacked bands
separated by `border-t border-edge` hairlines, alternating background
tone base/raised in strict ABAB rhythm on every page (verified for all
8 content pages), opened by a gradient hero and closed by a centered
CTA band. No sidebars except the contact page. Root: flex column
`min-h-full` with `flex-1` main.

**Container (component, universal):** `mx-auto w-full max-w-6xl px-6
sm:px-8` — every band routes through it. Measure clamps inside:
`max-w-3xl` (46×, h1s + prose), `max-w-2xl` (34×, leads/h2s/quotes),
`max-w-4xl` (3×, wide dash grids), `max-w-xs` (1×, footer blurb).

**Grid recipes (complete list, 9 distinct):**
1. `grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3` — Problems (6 items)
2. `grid gap-6 lg:grid-cols-3` — Capabilities cards (no sm step)
3. `grid gap-10 sm:grid-cols-2 lg:grid-cols-4` — Approach + Engagement (identical, 2×)
4. `grid max-w-4xl gap-x-12 gap-y-4 sm:grid-cols-2` — Fit + FormsOfKnowledge + CapabilityDomains (byte-identical, 3×)
5. `grid gap-x-12 gap-y-10 sm:grid-cols-2` — Strength
6. `grid gap-10 lg:grid-cols-2` — Identity prose split
7. `grid gap-12 lg:grid-cols-[1fr_20rem]` — contact form + aside (only asymmetric grid)
8. `grid gap-6 sm:grid-cols-2` — contact form field rows (2×)
9. Number-beside-content `flex gap-6` split — ServiceAreas, PracticeToEducation, PeopleSystemsTechnology

**Inconsistencies.** Recipe 2's missing `sm:grid-cols-2` step versus
recipe 1; recipes 4 vs 5 (same role, different gap-y/width); markup
nesting of the `flex gap-6` stage row differs between
PracticeToEducation (inner div) and PeopleSystemsTechnology (on the li).

**Component candidates.** Section shell (exists), band/CTA shell,
two-column dash grid, numbered stage list.

---

## 10. Navigation

**Current implementation.** Sticky header (`sticky top-0 z-50 border-b
border-edge bg-ink-950/85 backdrop-blur`, `h-16` row): text brand mark
(`font-serif text-lg tracking-wide text-silver-100`), desktop link row
hidden until `xl` (measured constraint: 8 labels + CTA overflow below
1280px; ~20 px slack at the 1152 px container cap — documented in-code;
any nav addition will overflow), links `py-2 text-sm text-silver-400
hover:text-silver-100`, compact CTA (`px-4 py-2`). MobileNav below
`xl`: 44×44 px toggle (`h-11 w-11`), stroke-based icon, full-width
panel `absolute inset-x-0 top-16 border-b border-edge bg-ink-950`,
links `block py-3 text-base`, Escape-to-close with focus return, the
only client component besides the form. Footer nav: same 8 links,
`py-1` targets. Skip link: `sr-only focus:not-sr-only …` into `#main`.
`scroll-padding-top: 5.5rem` compensates the sticky header for anchor
targets; smooth scroll with reduced-motion opt-out.

**Observations.** Desktop nav appearing only at `xl` (1280px) means
tablets/small laptops get the hamburger — a deliberate, measured
decision recorded in comments. No active-route indication (no
`aria-current="page"`, no visual current-page state) in either nav. The
mobile panel does not trap focus or lock body scroll (Escape and
link-click close it).

---

## 11. Forms · 12. Buttons · 13. Controls

**Form recipes (single source: ContactForm):**
- Input/select/textarea: `w-full rounded-sm border border-edge bg-ink-900 px-4 py-3 text-silver-100 placeholder:text-silver-500 focus:border-gold-600`
- Label: `mb-2 block text-sm font-medium text-silver-300`; required mark `text-gold-500` asterisk
- Field error: `mt-2 text-sm text-gold-300` linked via `aria-describedby`, `aria-invalid`
- Error summary: `border-l-2 border-gold-500 bg-ink-900 px-5 py-4`, `role="alert"`, focus-moved, field anchor links (the site's only `underline`)
- Hint text: `text-sm text-silver-500` (message field)
- Honeypot (`absolute -left-[9999px]`), hidden timing field, select remount-on-error workaround for React 19 reset behavior

**Buttons.** `ButtonLink` (link-as-button): BASE `inline-flex
items-center justify-center rounded-sm px-6 py-3 text-sm font-medium
tracking-wide transition-colors duration-200`; primary `bg-gold-500
text-ink-950 hover:bg-gold-400`; secondary `border border-edge
text-silver-300 hover:border-gold-600 hover:text-silver-100`. ~22
instances. **The submit `<button>` in ContactForm duplicates BASE +
primary as a hand-copied string** (plus `disabled` + `opacity-60`
pending state) because ButtonLink only renders links — the clearest
component-extraction candidate found.

**Controls that exist:** text input, email input, select (styled
identically to inputs, native dropdown chrome), textarea (`rows=7`),
submit button, hamburger toggle. **Controls that do not exist:**
checkbox, radio, switch, tabs, accordion, tooltip, modal, pagination —
no styling precedent for any of them.

**Third button variant (implicit):** the gold inline text link
(`text-gold-400 hover:text-gold-300`, 19× in three layout variants:
`inline-block py-1`, `block py-1`, bare) functions as a tertiary
action. Candidate: formal tertiary/text-link variant.

---

## 14. Cards

**Current implementation — complete recipe list:**
1. **Filled card** `border border-edge bg-ink-950 p-8` — Capabilities only (3 instances). The only four-sided bordered card on the site; opens with hairline `block h-px w-10 bg-gold-500` (unique w-10/gold-500).
2. **Top-border item** `border-t border-edge pt-5` (14 items across Problems/Approach/Engagement) · `pt-6` (10 across PracticeToEducation/PeopleSystemsTechnology) · `pt-8` (7 in ServiceAreas).
3. **Left-rule quote** `border-l-2 border-gold-600 pl-5 font-serif text-xl text-silver-300` — 12 pull-quotes; Differentiation variant uses `pl-6`; Problems variant adds `leading-relaxed max-w-2xl`.
4. **Left-rule card (1px)** `border-l border-edge pl-6` — Strength (6).
5. **Divided stack** `divide-y divide-edge` + `py-8 first:pt-0 last:pb-0` — GuidingPrinciples, Perspective, SustainedSupportPrinciples, ResponsibleTechnologyPrinciples (4 components, ~7 rows each).
6. **Success card** `border border-edge bg-ink-900 p-8 sm:p-10` — form success state (bg-900, not 950; responsive padding — unique).

No rounded cards, no shadowed cards, no hover states on any card.

**Inconsistencies.** Top-border padding (pt-5/6/8); left-rule padding
(pl-5/pl-6); card hairline (w-10 gold-500) vs eyebrow hairline (w-8
gold-600); filled card bg (ink-950 on raised vs success ink-900 on
base).

---

## 15. Icons

**Complete inventory: two SVGs in the entire codebase.**
1. MobileNav toggle — inline, `viewBox 0 0 24 24`, `fill="none"
stroke="currentColor" strokeWidth 1.5`, `strokeLinecap="round"`,
`h-6 w-6`, `aria-hidden` + `sr-only` name; hamburger/X paths.
2. `app/icon.svg` favicon — fill-based, raw hex, serif "HG" text,
explicitly commented as temporary pending a production mark (Branding
authority).

**Glyphs as icons (the site's real icon language):** `→` (19 trailing
links), `—` gold em-dash list marker (aria-hidden, 5 lists), `·`
(none), `*` gold required marker. No icon library, no sizing scale, no
stroke standard beyond the single toggle.

---

## 16. Motion · 17. Hover · 18. Focus

**Motion: one primitive.** `transition-colors duration-200` — 26
identical instances. No transforms, scales, fades, keyframes,
entrances, parallax, or scroll animation. Global smooth scroll.
`prefers-reduced-motion` collapses all durations to 0.01ms and disables
smooth scroll. **The `--ease-brand` theme token
(cubic-bezier(0.25,0.1,0.25,1)) is defined but referenced by nothing.**

**Hover — the complete set (5 recipes):** primary button
`hover:bg-gold-400`; secondary button `hover:border-gold-600
hover:text-silver-100`; gold links `hover:text-gold-300`; nav/footer
links `hover:text-silver-100`; success-card link `text-gold-400 →
gold-300`. Cards, quotes, and headings have no hover.

**Focus.** Global `:focus-visible { outline: 2px solid gold-500;
offset 2px }` covers links/buttons. Form fields override with
always-on `focus:border-gold-600` (border swap, not outline — and
`focus:`, not `focus-visible:`). Skip link becomes visible on focus.
Error summary and success card receive programmatic focus
(`tabIndex={-1}`). MobileNav returns focus to its toggle on Escape.

**Inconsistency.** Two focus languages: outline (global) vs border
swap (inputs).

---

## 19. Loading · 20. Empty · 21. Error states · 22. Notifications

**Loading:** exactly one — submit pending (`opacity-60`, label
"Sending…", `aria-live="polite"` sr-only announcement, `disabled`). No
spinners, skeletons, or route transitions (static pages).

**Empty states: none exist** — fully static content site; no pattern
precedent for future data-driven surfaces.

**Error states:** form-level alert banner + per-field messages (see
§11); branded 404 (`app/not-found.tsx`) reusing the hero grammar
(gradient, eyebrow "Page not found", h1, lead, two ButtonLinks). No
error.tsx / global-error boundary styling; server failures surface
through the form's generic failure message. Anti-abuse paths
(honeypot, timing) intentionally render the genuine success state.

**Notifications:** inline only — `role="alert"` (error summary),
`role="status"` (success card), `aria-live` (pending). No toast/banner
system exists.

---

## 23. Responsive behavior

- Breakpoints in use: `sm` (dominant: type ramps, grid steps, padding
  steps, stacking), `lg` (grid completions, the two `lg:` split
  layouts, home-hero extras), `xl` (desktop nav only). `md` and `2xl`
  are never used.
- Universal stacking idiom: `flex flex-col gap-4 sm:flex-row` (CTA
  rows); grids step `1 → sm:2 → lg:3/4`.
- Type ramps: h1 `4xl→sm:5xl(→lg:6xl home)`; h2 `3xl→sm:4xl`; body has
  no responsive ramp.
- Container padding `px-6 → sm:px-8`; section `py-20 → sm:py-28`.
- The contact aside (`lg:grid-cols-[1fr_20rem]`, `lg:border-l`)
  reflows below `lg`.
- Nav: desktop row `xl`+ only (measured overflow constraint); menu
  serves everything below.
- No responsive images (no raster images exist), no fluid/clamp()
  typography, no orientation or container queries.

## 24. Accessibility observations

**Present and consistent:** one `h1` per route (10/10); skip link;
`lang="en"`; landmark semantics (header/nav ×2 with distinct
aria-labels "Primary"/"Footer", main#main, footer); decorative
elements `aria-hidden` (22×: hairlines, dash markers, glyph arrows are
inside link text — note arrows are *not* hidden, they read as "→");
form: labels bound, required marked, `aria-invalid`/`aria-describedby`
wiring, focus management to summary/success, `aria-live` pending
announcement, `noValidate` with server validation echo; MobileNav:
`aria-expanded`/`aria-controls`, sr-only state name, Escape + focus
return, 44px target; selection and focus-visible styling; reduced
motion honored globally; computed contrast passes AA on all text pairs.

**Gaps / items for review:** no `aria-current` on nav; trailing "→"
glyphs are announced by screen readers ("right arrow"); mobile panel
lacks focus trap and scroll lock (may be acceptable for a short
panel); input focus uses `focus:` border swap (1px→gold-600 border is
a low-salience focus cue at 4.2:1, decorative-level contrast) rather
than the 2px outline used elsewhere; gold-as-error means error text is
not distinguishable from accent text by color role; select relies on
native dark-mode chrome (unstyled options); no `error.tsx` boundary;
heading levels inside the contact aside jump (h1 → aside h2 styled as
minor headings).

---

## Consolidated: repeated patterns most eligible as candidates

**Token candidates** (values already behaving like tokens):
1. Color scales ink/silver/gold/edge as implemented (§2) — plus a
   decision on dead tokens (`ink-800`, `ink-700`, `gunmetal`,
   `--ease-brand`) and on a semantic error/success layer.
2. Type: family pair; size ramp; two leadings; eyebrow tracking
   (0.2 vs 0.25 needs adjudication); weight rule (400 + medium only).
3. Space: section rhythm `20/28`; content offset (`10` dominant, `12`,
   `14` variants need adjudication); prose rhythm `6`; item paddings
   (`pt-5/6/8` need adjudication); CTA gap `4`; marker gap `3`.
4. Radius: single `rounded-sm` interactive rule.
5. Elevation: base/raised surface pair + hero gradient + header
   translucency (85% + blur).
6. Motion: `colors 200ms` as the sanctioned transition; decide fate of
   unused `--ease-brand`.
7. Measure: `max-w-2xl` / `3xl` / `4xl` / `6xl` roles.
8. Hairline: `h-px w-8 gold-600` (vs the one `w-10 gold-500`).

**Component candidates** (recipes already duplicated by hand):
1. **Button** — real `<button>` variant of ButtonLink (recipe currently
   copy-pasted in ContactForm); possible formal tertiary "text link"
   variant (19 instances, 3 layout micro-variants).
2. **Eyebrow** — duplicated between Section shell and 10 hand-rolled
   heroes/CTA (with the tracking fork).
3. **PageHero** — 9 near-identical hand-rolled heroes (variants: home
   scale-up, with/without CTA row).
4. **CtaBand** — 8 hand-rolled closing bands (variants: eyebrow'd home
   version, 1-vs-2 buttons, stray `items-center`).
5. **PullQuote** — 12 left-rule quotes (pl-5/pl-6 fork).
6. **Top-border list item / numbered stage row** — 31 items (pt fork),
   zero-padded `font-serif text-sm gold-500` numeral pattern (3 files).
7. **DashList item** — em-dash marker rows (5 lists, text-size fork).
8. **DividedStack** — 4 identical divide-y components.
9. **Form field group** (label + control + error + hint) — single-use
   today but fully recipe-ized in constants.
10. **FilledCard** — 2 variants (Capabilities, form success).

## Consolidated inconsistency register

| # | Inconsistency | Sites |
| --- | --- | --- |
| 1 | Eyebrow tracking 0.25em vs 0.2em | heroes/404 vs Section/home-CTA |
| 2 | Content offset mt-10 / mt-12 / mt-14 for the same slot | 48/6/15 uses |
| 3 | Top-border item pt-5 / pt-6 / pt-8 | 14/10/7 items |
| 4 | Pull-quote pl-5 vs pl-6 (+leading variants) | 11 vs 1 |
| 5 | Hairline w-8 gold-600 vs w-10 gold-500 | eyebrows vs Capabilities/success cards |
| 6 | Four h3 recipes for analogous titles | Problems / Approach / Capabilities / principles |
| 7 | h2 at text-xl in contact aside | contact page |
| 8 | Grid sm-step present vs absent in 3-col grids | Problems vs Capabilities |
| 9 | Dash-grid rhythm (gap-y-4 max-w-4xl) vs Strength (gap-y-10, no clamp) | 3 vs 1 |
| 10 | Primary CTA label "Start a conversation" vs "Contact Huerta Group" | 4 vs 6 sites |
| 11 | CTA band: eyebrow + mt-5 h2 (home) vs bare (7 others); `items-center` only in AboutCta | 8 bands |
| 12 | Gold link layout: inline-block py-1 / block py-1 / bare | 16/2/1 |
| 13 | Focus language: outline (global) vs border swap (inputs) | site vs form |
| 14 | Gold serves as both accent and error color | form errors |
| 15 | Stage-row markup nesting differs for identical rendering | PracticeToEducation vs PeopleSystemsTechnology |
| 16 | Filled-card bg ink-950 vs ink-900; p-8 vs p-8 sm:p-10 | Capabilities vs success card |
| 17 | Hero secondary-link targets swap between hero and CTA on the same page | managed, technology |
| 18 | Dead theme tokens: ink-800, ink-700, gunmetal, --ease-brand | globals.css |
| 19 | AboutHero uniquely lacks a CTA row | about |
| 20 | Favicon duplicates brand hex outside the token system | app/icon.svg |

## Questions requiring Design System interpretation

1. **Blocking:** the Design System Foundation v1 text must be
   transmitted verbatim before it can be preserved as an authoritative
   repository document and linked into the authority system (documents
   are never reconstructed or inferred in this repository).
2. Where should this inventory itself be preserved once DSFv1 exists —
   as a governed document under `docs/` (requiring classification,
   authority tier, and manifest entry under DSFv1's authority), or as a
   working artifact outside the governed corpus?
3. Eyebrow tracking: is the hero (0.25em) vs section (0.2em) split an
   intentional hierarchy distinction to codify, or drift to normalize?
4. Should the palette gain a semantic layer (error/success/warning)
   distinct from brand gold, or is gold-as-error institutional intent?
5. Are the dead tokens (`ink-800`, `ink-700`, `gunmetal`,
   `--ease-brand`) reserved for future use or to be removed from the
   token set? (`--ease-brand` in particular implies an unratified
   motion intention.)
6. Is "square surfaces, `rounded-sm` interactives, no shadows,
   tone-based elevation" the intended institutional surface language?
7. Should the heading ramp be fixed (including the four h3 variants and
   the contact-aside `text-xl` h2), and is the home hero's extra
   `lg:` step an approved emphasis?
8. Which authority adjudicates the primary CTA label duality ("Start a
   conversation" / "Contact Huerta Group") — Branding (voice) or Design
   System (component API)?
9. Is the glyph-based icon language (→, —, hairlines) the sanctioned
   direction, or should a stroke-icon set (matching the 1.5-stroke
   toggle) be defined before any new interface work?
10. Focus treatment: unify on the 2px gold outline for inputs, or keep
    the border-swap convention? (Interacts with accessibility review.)
11. The nav's measured `xl` overflow ceiling means any added nav item
    forces a nav redesign — is that redesign a Design System decision,
    and should it precede any new public page?
12. Is dark-only an institutional standard, or must future tokens be
    authored theme-neutral for an eventual light context?
13. Does motion governance intend to stay at "color transitions only,
    200ms" (current reality), and does `--ease-brand` become the
    approved curve if motion expands?
14. The temporary favicon sits at the Branding/Design System boundary
    (brand mark = Branding; its technical delivery = Design System /
    Website Development) — which room owns its replacement?

— End of inventory. Returned for Design System evaluation. No
implementation performed.
