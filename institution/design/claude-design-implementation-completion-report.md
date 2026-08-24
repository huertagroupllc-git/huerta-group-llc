# Huerta Group Institutional Website — Claude Design Implementation & Validation Completion Report

**Classification: Institutional Record** — implementation and validation
evidence (evidentiary, non-governing; `fd-0005` decision rules). Returned by
Institutional Platform Development to the Founder Office, 2026-08-23.

**Status: IMPLEMENTATION COMPLETE — one exception requires Founder Office
determination.** The adopted design is implemented across all nine routes, the
verification gate and CI are green, and no authoritative content was lost.
**The exception is that the push authorized by this package reached
production**, because this repository's Vercel project deploys `main`
automatically. See §60.

## 1–2. SHAs

- **Starting HEAD:** `109d0de7869e499736171a99f525669fbf7f40ea`
- **Ending HEAD:** `5cdf6c3e14e97587d393e71614b504d656fbb5c6`
- 46 files changed, 4,776 insertions, 301 deletions across six commits. Of
  that, 30 files and 774 insertions are application code; the balance is the
  governance record and the preserved passover.

## 3. Authorization exercised

The Founder Office instrument *Claude Design Adoption, Design-System
Reconciliation & Implementation* — implementation authorized, the passover
named as the adopted visual and interaction direction.

## 4. What was authorized, and what was not

Authorized and performed: the next sequential DDR reconciling the existing
design records as partial supersession; the three adopted typefaces; the
card and surface language; bounded interaction; the Capabilities navigation;
and completion of the responsive design the passover did not contain.

Not authorized, and not performed: production replacement; shipping the
passover's canvas runtime; deleting or overwriting the passover source;
altering authoritative content, routes, or venture meaning.

## 5. The determination recorded

`ddr-0011 — Claude Design Adoption and Design-System Reconciliation`, at
`institution/design/decisions/ddr-0011-claude-design-adoption.md`. It records
the adoption, the reconciliation, and the boundaries the implementation works
inside. It is registered in the corpus manifest; `validate:knowledge` reports
coverage exact at 148 records over 148 corpus documents.

## 6. Sequential numbering

`ddr-0011` is the next unused number in the series; `ddr-0010` was the prior
highest. No existing record was renumbered, rewritten, or withdrawn.

## 7. ddr-0003 — reconciled, not replaced

Superseded in part: the Inter/Source Serif pairing. Retained: the rule that
the site carries exactly one serif voice for headings and one sans for
running text, and that type scale expresses hierarchy rather than weight.
Cormorant Garamond and Archivo take those roles; the roles themselves are
unchanged.

## 8. ddr-0006 — reconciled, not replaced

Superseded in part: the flat-surface rule that forbade gradients on
containers. Retained: the palette itself, gold as an accent that never
becomes a field, and the prohibition on colour carrying meaning alone.

## 9. ddr-0009 — reconciled, not replaced

Superseded in part: the rejection of bordered, shadowed cards for enumerated
peers. Retained, and this is the larger half: the quiet numeral system — now
set in JetBrains Mono at the adopted scale — the open top-border language for
prose and editorial sections, and the rule that gold stays an accent.

## 10. ddr-0010 — reconciled, not replaced

Superseded in part: the motion ceiling, which now admits the card lift and the
expanding principle rule. Retained: form-field hover, focus and caret states
on existing tokens; pressed-state button feedback; and the directional
micro-translate on the ArrowLink glyph, which is unchanged.

## 11. gr-0003 answered

`gr-0003` recorded that the eight-label header row had outgrown its space. The
Capabilities disclosure answers it: five top-level items plus one disclosure
holding the four branch capabilities. The desktop row now renders at `lg`
rather than `xl`, which is the capacity the recommendation asked for.

## 12. Where fidelity and the standards disagreed

`ddr-0011` states that accessibility, performance and restraint govern.
Three places exercised that clause, each recorded in code comments at the
point of decision:

1. The passover's service chips respond to the pointer. Ours do not — a chip
   is not a link, and a surface that answers the pointer and then does nothing
   is a false affordance.
2. The passover loads its faces from Google's CDN. Ours are self-hosted
   through `next/font`, so the site makes no third-party font request.
3. The passover has no mobile design at all. Ours does, and it is not a
   narrowed copy of the desktop chrome (§30–32).

## 13. Typefaces

Cormorant Garamond (300–600) for headings and display; Archivo (300–700) for
running text and interface; JetBrains Mono (400–500) for eyebrows, ordinals
and the tagline.

## 14. Font loading

All three are loaded through `next/font/google` with `display: "swap"`, which
self-hosts the `woff2` files at build time. The built output contains no
reference to `fonts.googleapis.com` or `fonts.gstatic.com` — verified by
grep across `.next/server` and `.next/static`.

## 15. Fallbacks

Each face is bound to a CSS variable consumed by `--font-serif`,
`--font-sans` and `--font-mono`, each with its generic fallback retained, so
a font failure degrades to the correct family rather than to the browser
default.

## 16. Surface tokens

Nine tokens were added: `card-top`, `card-bottom`, `card-edge`, `chrome-top`,
`chrome-bottom`, `panel-top`, `panel-bottom`, `foot-top`, `foot-bottom`.
Each names a surface role, not a colour, so a future palette change moves one
declaration.

## 17. Page ground

`body` moves to `ink-900` with `silver-100` text, which is the adopted
ground and one step lighter than the previous `ink-950`.

## 18. A contrast defect this introduced, and its repair

Moving the ground to `ink-900` silently flattened three surfaces that were
also `ink-900`: `Section tone="raised"`, the Contact form panel, and every
Contact input. All three had become invisible against the page. Repaired:
the raised band now lifts to `ink-800` above the ground rather than sitting
below it; the form panel takes the card surface; the fields drop to
`ink-950` so they read as wells. This was found by auditing every remaining
`bg-ink-900` in the tree after the ground changed, not by looking at a
screenshot.

## 19. The card primitive

`components/ui/Card.tsx` — a vertical gradient on a hairline that warms to
gold and lifts on hover. Two scales: the default for substantive enumerated
peers, and `compact` for principle statements, which the passover sets
tighter and four to a row.

## 20. How cards are rationed

Cards are for enumerated peers. Prose sections, short bullet lists and
editorial splits keep the open top-border language `ddr-0009` established.
The rule is written into the component's own documentation so the next
contributor inherits it: wrapping every block in a card is the generic-SaaS
drift `ddr-0011` forbids. In practice this admitted eight enumerated sets and
declined four bullet lists (`Fit`, `CapabilityDomains`, `FormsOfKnowledge`,
`EducationAudiences`), which stay lists.

## 21. Ordinals and rules

`CardOrdinal` sets the mono ordinal with a hairline running to the card edge.
`CardRule` sets the gold rule that heads a compact principle card and widens
on hover. Numbered peers take the ordinal; unnumbered peers take the rule.

## 22. Motion

Every transition is bounded and property-scoped — `border-color`,
`box-shadow`, `transform`, `width`, `color` — at 200–300ms on the brand
easing curve. No entrance animation, no scroll-triggered motion, no parallax.

## 23. Reduced motion

The pre-existing `prefers-reduced-motion` block in `globals.css` neutralises
transitions and animations globally and disables smooth scrolling. Every
motion added in this pass is a CSS transition, so all of it is covered by
that block without further work.

## 24. Buttons and links

Primary buttons take the gold gradient with a lift shadow and a pressed
`scale(0.97)`. Secondary buttons warm their border and text on hover.
`ArrowLink` and `ButtonLink` gained an `onClick` prop so the navigation
panels can close when a link is followed.

## 25. Section headers

`Section` gained `align="left" | "center"`. Centred headers constrain to
`max-w-3xl` and centre; the left variant is unchanged. Heading weight drops
to 400 globally, because the adopted serif carries hierarchy through size
and not through weight.

## 26. PageHero

Rebuilt on the panel gradient closing on a hairline, with a wider lead
measure. The `size="display"` variant was removed: the homepage now opens
with its own composition rather than a larger copy of this band, so the
variant had no caller, and a hero API with an unreachable branch invites
drift.

## 27. Header

Chrome gradient, the brand mark set beside the wordmark with a hairline
divider, and a five-item row whose middle item is the Capabilities
disclosure. `relative` on the container anchors the panel, which spans the
full header width.

## 28. The Capabilities disclosure

A four-cell grid, each cell an ordinal, a capability name and one line of
description, over a footer row carrying the authoritative line *Every service
is delivered through disciplined methodology* and a link to Methodology.

## 29. Disclosure semantics

`aria-expanded` and `aria-controls` on the trigger, a generated id on the
panel, Escape closes and returns focus to the trigger, an outside
`pointerdown` closes, and following any link closes. Verified in the browser:
after Escape, `aria-expanded` is `false` and `document.activeElement` is the
trigger.

## 30. Mobile navigation

The panel carries every destination one tap away: the two primary items,
Capabilities as a labelled group with its ordinals, the two secondary items,
and the CTA. Capabilities is a group and not a nested disclosure, because a
disclosure inside a disclosure is a worse answer on a touch screen than a
section heading.

## 31. The scrim

A tap-anywhere scrim dims the page under the panel and closes it — the touch
equivalent of the desktop outside-click. It is `aria-hidden` with
`tabIndex={-1}`, so it is in neither the accessibility tree nor the tab
order; Escape and the toggle remain the keyboard routes out.

## 32. Panel behaviour

The panel is capped at `calc(100dvh - 4.2rem)` and scrolls internally, so a
short phone in landscape cannot produce a menu taller than the viewport.

## 33. Footer

Foot gradient, the brand mark lockup, the tagline in mono gold, and the full
eight-destination link grid — which is also why removing four links from the
header costs nothing in crawlable internal linking (§53).

## 34. Brand assets

`public/brand/hg-mark.png` (230×170) and `public/brand/hg-lockup.png`
(415×285), copied from the passover's own assets. The lockup is capped at
`26rem` so it is never upscaled beyond its native width.

## 35. Homepage composition

The passover's signature split: the proposition on the left, and on the
right a gradient panel holding the lockup in a gold-edged plaque with a deep
shadow.

## 36. Homepage enumerations

The six problems and the three disciplines become cards with zero-padded
ordinals and `Discipline 0N` respectively; the four engagement steps become
cards in a four-column grid. Section headers for these three are centred.

## 37. Discipline items

A discipline's constituent services are set as chips rather than a dashed
list, matching the passover. They remain a real `<ul>`, and they are static
(§12).

## 38. Services

The seven service areas become cards in the split layout's right column.
The Engagement phases take the four-column card grid.

## 39. Methodology, Managed Services, Technology

Each carries a principles section; all three now use the compact card with
the expanding gold rule, two to a row.

## 40. About and Education

The ordered peer sets — `PeopleSystemsTechnology` on About and
`PracticeToEducation` on Education — become ordinal cards.

## 41. Intellectual Property

Takes the shell, hero, and CTA treatments; its two enumerations are short
bullet lists and correctly stayed lists under §20.

## 42. Contact form — inquiry type

The adopted design presents inquiry type as chips. Implemented as a radio
group in a fieldset, not as restyled buttons: same field name, same six
values, same `required` rule, and the same server-side validation as the
`<select>` it replaces.

## 43. Contact form — what was preserved

Verified in the browser against the live form: six radios, `required` true,
`inquiryType` present exactly once in the `FormData` and changing correctly
on selection; `companyWebsite` honeypot present; `startedAt` present;
`sourcePath` present and correct; the legend carries the label with its
required marker; the error still binds through `aria-describedby`. Success
and error rendering are untouched.

## 44. Contact form — layout

The chips were initially laid out inside a half-width grid column and
stacked one per line. They now have their own full-width row, with the email
field on the row above.

## 45. No inquiry was sent

The form was inspected, never submitted. Validation paths were verified by
reading form state, not by transmitting a message.

## 46. Responsive validation — method

Every route was loaded in a same-origin iframe at each target width, so the
measurement is of real layout at that viewport rather than of a scaled
screenshot. Widths: 320, 390, 768, and 1440.

## 47. Responsive validation — overflow

**Zero horizontal overflow on all nine routes at all four widths.**
`scrollWidth - clientWidth` is 0 in every case.

## 48. Responsive validation — targets

The menu toggle is 44×44. The inquiry chips are 42px tall. The header brand
lockup is 34px. The only sub-24px targets are links inside running prose,
which WCAG 2.2's target-size criterion exempts as inline.

## 49. Accessibility — structure

Across all nine routes: exactly one `h1`, no skipped heading levels, no
duplicate `id`s, one `main`, one `footer`, and every `img` carries an `alt`.

## 50. Accessibility — ARIA integrity

No `aria-describedby` or `aria-labelledby` on any route points at an element
that does not exist.

## 51. Accessibility — keyboard

The disclosure and the mobile panel are both operable and escapable from the
keyboard with focus returned to the trigger. Chips take focus as radios and
show a visible focus ring through `peer-focus-visible`; arrow keys move
selection within the group, which the `<select>` did not offer in the same
way.

## 52. Reduced motion

Covered globally; see §23.

## 53. SEO and internal linking

All nine routes, their titles, their metadata and their URLs are unchanged.
The header now links to five destinations server-side rather than eight,
because the disclosure panel renders on interaction — but the footer links
all eight on every page, so every route remains reachable from every other
route in the server-rendered HTML. Sitemap and robots output are unchanged.

## 54. Content fidelity — method

Not aggregate string similarity. The pre-change build was restored, every
route was fetched from it, and its rendered text was extracted and compared
segment by segment against the same extraction from the current build. The
working tree was restored immediately afterward.

## 55. Content fidelity — result

**No authoritative sentence was lost on any route.** Every difference falls
into one of three intended classes: the ordinals and grouping labels the
design adds (`01`, `Discipline 01`, `CAPABILITIES`, `Open menu`); the
decorative em-dashes removed when dashed lists became chips; and the header
navigation restructure recorded at §11.

## 56. A fidelity regression found and repaired

The comparison caught one real regression: the wordmark had been uppercased
in the DOM via `SITE_NAME.toUpperCase()`, in both header and footer. That
changes the accessible name and the copied text, not just the appearance.
Both now render `{SITE_NAME}` with a CSS `uppercase` class — same
appearance, authoritative name preserved. Re-verified: the rendered text
contains no instance of the uppercased form.

## 57. Validation gate

`npm run verify` — all steps green: knowledge (148 records, coverage exact),
architecture, method, IP, education, determinations, evolution, venture,
references (151 links across 149 documents), ESLint, `tsc --noEmit`, and the
production build (14 routes, all statically prerendered).

## 58. Continuous integration

The `verify` workflow completed **success** on the pushed head
(`5cdf6c3`).

## 59. Commits

Six, each bounded to one concern:

| SHA | Subject |
| --- | --- |
| `d7e9410` | record ddr-0011 adopting the Claude Design direction |
| `a3f43c7` | adopt the ddr-0011 type, surface and interaction language |
| `8b23880` | rebuild the shell around the Capabilities disclosure |
| `a0673e0` | apply the adopted composition and card language to the pages |
| `8e45f28` | map the adopted design onto the inquiry form |
| `5cdf6c3` | preserve the Claude Design passover as adoption evidence |

## 60. EXCEPTION — the push reached production

**This requires a Founder Office determination.**

The package authorized commits, push and CI, and separately withheld
production: *"Production replacement is NOT authorized"* and *"A successful
push is not production authorization."* Those two instructions are in
tension in this repository, and the tension was not visible until after the
push.

`huerta-group-llc` is linked to a Vercel project (`.vercel/project.json`,
project `huerta-group-llc`) whose Git integration builds and promotes
`main` automatically. The push therefore deployed. Verified directly against
`https://huerta-group-llc.vercel.app`: it now serves the adopted design —
`Discipline 01`, `/brand/hg-mark.png` and the mobile `Open menu` control are
all present in the live HTML.

This was not a deliberate deployment. No deploy command was run, no Vercel
credential was used, and the Vercel CLI is not installed on this machine.
The push was the authorized action; the deployment was its consequence.

**What the Founder Office may want to decide:**

1. **Accept.** The gate and CI are green, no content was lost, and the design
   is the adopted one. Production simply arrived earlier than the review.
2. **Roll back.** Vercel's Instant Rollback restores the previous production
   deployment from the project dashboard in one action, without a commit. A
   `git revert` would also work but would produce a second deployment and
   churn the history.

**What Development recommends:** decide before the visual review rather than
after, because option 2 is cheapest while the previous deployment is still
the most recent alternate. Development has not rolled back on its own
initiative — a rollback is itself a production change, and this office does
not hold that authority either.

**For future packages:** in this repository, authorizing a push to `main`
authorizes a production deployment. If they are to stay separable, the
project's Git integration needs a production branch that is not `main`, or
deployment protection enabled.

## 61. Recommendation and stopping point

**Recommendation: ACCEPT the implementation; RULE on §60.**

The work this package authorized is complete. The design system is
reconciled rather than overwritten, the responsive design the passover
lacked now exists, content and routes are intact, and every claim above is
backed by a measurement rather than an impression.

Development stops here for Founder visual review, as instructed. Nothing
further is undertaken — including any correction to §60 — without a Founder
Office instrument.
