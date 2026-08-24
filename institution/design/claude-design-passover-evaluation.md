# Huerta Group Institutional Website — Claude Design Implementation & Validation Report

**Classification: Institutional Record** — design evaluation (evidence,
non-authoritative; fd-0005 decision rules). Returned by Institutional Platform
Development to the Founder Office, 2026-08-23.

**Recommendation: FOUNDER DETERMINATION REQUIRED.** No implementation was
performed. The passover's defining visual language conflicts with four adopted
Design Decision Records, and the design as delivered covers desktop only.

## 1–2. SHAs

- **Starting HEAD:** `3af4865417594b47d2241a7a4efa15e4a2c1f1f8`
- **Ending HEAD:** `3af4865417594b47d2241a7a4efa15e4a2c1f1f8` — unchanged. No
  application code was modified.

## 3–4. Artifacts located

`passover/`, at the repository root, **untracked and local-only** at task start
(`?? passover/`; absent from `origin/main`). Fourteen files:

| File | Role |
| --- | --- |
| `Huerta Group Site.dc.html` (41 KB) | The full nine-page site, direction 1d. Holds the shared component logic and **all page data** |
| `HG <Page>.dc.html` × 8 | Services, Methodology, Intellectual Property, Education, Technology, Managed Services, About, Contact — mounted by the site file, receiving data as props |
| `Huerta Group Redesign.dc.html` (63 KB) | The original five directions (1a–1e), reference only |
| `assets/hg-lockup.png`, `assets/hg-mark.png` | Logo lockup and HG monogram |
| `support.js` (69 KB) | The runtime the `.dc.html` files require |
| `README.md` | Brand colours, file map, navigation, design notes, **known caveats** |

The artifacts are Claude Design canvas exports: templated HTML driven by a
`Component` class, rendered at runtime by `support.js`. Static inspection alone
misses their content — an early measurement of mine did exactly that, and is
corrected in §6.

## 5. The proposed design, as actually found

- **Palette:** matte black `#0F0F10`, gunmetal silver `#5E646B`, metallic gold
  `#B08D57` (light variant `#C9A97A`), hairline `#222327`, text `#EDEDEF`.
- **Typography:** Cormorant Garamond headings, Archivo body, JetBrains Mono
  eyebrow labels, loaded from Google Fonts.
- **Navigation:** Services · Methodology · **Capabilities (disclosure panel)** ·
  About · Contact, plus a gold CTA. The panel holds Intellectual Property,
  Education & Workforce Development, Technology & Software and Managed Services,
  each with a short descriptor. The footer links all eight pages.
- **Composition:** 1280 px design width; numbered cards that lift on hover with
  a gold border and a dark drop shadow; metallic gradient CTA buttons
  (`#C9A97A → #B08D57`) that scale down on click; a home hero panel in a gunmetal
  gradient carrying a black plaque with the logo lockup.
- **Contact:** the five governed fields, with inquiry type rendered as selectable
  chips rather than a `<select>`.
- **Its own stated caveats:** the logo files are soft-edged crops needing
  replacement with vector; the contact form is visual only; and — decisively —
  **"No mobile layouts yet."**

## 6. Comparison against the existing website

**The palette is not a change.** The live site is already dark on this exact
palette: `--color-ink-950 #0b0b0c` as the body surface, `--color-gunmetal
#5e646b`, `--color-gold-500 #b08d57`, with `globals.css` naming "Matte black /
Gunmetal silver / Metallic gold" as the brand palette. The passover's three
brand colours map onto governed tokens already in use.

**The copy is faithful where it appears.** Of 203 prose strings extracted from
the passover, **190 are verbatim** in the repository. The 13 apparent
differences resolve as:

- **7 are not differences at all** — arrow-link labels where the design includes
  the "→" glyph inside the string and the repository renders it as a separate
  `aria-hidden` element. The labels are identical.
- **1 is already present** — the footer copyright, which the repository already
  renders (and computes the year rather than hard-coding 2026).
- **5 are genuinely new copy** — see §7.

**The substantial data sets are carried.** All seven service areas, seven
methodology principles, eight technology principles, seven managed-services
principles, six education-model entries, twenty IP forms, six problems, three
disciplines and four engagement phases are present in the site file and passed to
the subpages.

**Content coverage is nonetheless short, and I cannot measure by how much
precisely.** Rendered word counts give 4,963 (design) against 7,018 (live) — but
the live figure counts header and footer on all nine routes while the design
carries them once, and the design's structural decomposition (`n`/`t`/`b` fields
against rendered prose) defeats sentence matching. My best defensible statement
is that the passover carries **most but not all** of the authoritative copy, and
that the residual must be resolved section by section during implementation
rather than asserted from a number. Three separate automated measures I ran gave
61%, 71% and 74%, each with identifiable artifacts; I am reporting the
disagreement rather than picking the flattering one.

## 7. Conflicts discovered

### 7.1 Four adopted DDRs conflict with the design's core visual language

| Design element | Adopted decision | Conflict |
| --- | --- | --- |
| Cormorant Garamond / Archivo / JetBrains Mono | **ddr-0006**: "Body/lead sizes unchanged; **fonts unchanged (Branding identity preserved)**" | Changes all three typefaces, which ddr-0006 holds as brand identity |
| Boxed cards, gold hover border, dark drop shadow | **ddr-0009**: cards "abandon the boxed … recipe for the site's top-border editorial language". Rejected alternative, verbatim: "keeping boxed cards with radius/shadow refinement (**rejected: deepens the SaaS resemblance instead of removing it**)" | The design proposes the alternative ddr-0009 considered and rejected, for a stated reason |
| Card lift on hover; buttons scale on click | **ddr-0003**: "color transitions only, 200 ms … **No new motion classes (transforms, entrances, durations)**" | Two new transforms |
| Same | **ddr-0010 §3**: the ArrowLink 2 px translate is "**the sole extension** of the ddr-0003 motion vocabulary … **Transforms remain otherwise prohibited**" | Directly contrary |

These are not incidental details. They are the passover's signature — what makes
it look like itself. Implementing the design without them would produce
something that is neither the current design system nor the proposed one.

### 7.2 The design has no mobile half

The README states it plainly: "No mobile layouts yet. Recommended: collapse the
header into a full-screen overlay menu below about 1000px."

The live site has a complete responsive implementation, including `MobileNav`
and the ddr-0004 mobile rule for stacked full-width actions. The institutional
preservation rules require responsive behaviour to be preserved or improved,
never reduced. Implementing a 1280 px-only design would reduce it; designing the
missing half is design authorship, not implementation of a passover.

### 7.3 New public copy

Five strings are new institutional copy, none traceable to an authoritative
source:

- "Four institutional branches, delivered through one methodology." — the
  repository uses "institutional branch" language, but nowhere enumerates four.
- Four capability descriptors for the disclosure panel: "Methodology and
  experience captured as reusable institutional knowledge." (IP); "Structured
  learning built to develop demonstrable capability." (Education); "Technology
  applied in service of organizational systems." (Technology); "Sustained
  support that keeps implemented systems strong." (Managed Services).

Each is a defensible summary of its page, and each is a new public
characterisation of an institutional branch. Under the content-mapping rule I
would map existing authoritative copy into that role rather than adopt these —
but the role itself does not exist today, so there is no authoritative one-line
descriptor to map. That makes it a copy determination, not an implementation
choice.

### 7.4 Navigation architecture is an open governed question

`gr-0003 — Navigation Capacity Ceiling` already records that the eight-label row
has ~20 px of slack and that "a Design System navigation-architecture decision
should precede any future public page or nav addition." `lib/site.ts` carries the
same constraint in code, explaining that "Technology" is a deliberate short label
because the full name cannot render on one line.

The passover's Capabilities disclosure is a direct answer to gr-0003 — and
answering it is a Design System decision requiring a DDR. Writing that DDR myself
would be authoring design governance rather than implementing it, which
Category B excludes.

## 8. Founder Office determination required

**Yes.** The competing positions:

- **Adopted authority (ddr-0003, ddr-0006, ddr-0009, ddr-0010)** — accepted
  Phase 1–3 decisions, validated in the reference implementation, one of which
  rejected the passover's card treatment by name.
- **The Claude Design passover** — a proposed visual language commissioned after
  those decisions, which supersedes them in four respects.

**The smallest decision required:** does the Claude Design passover supersede
ddr-0003, ddr-0006, ddr-0009 and ddr-0010, in whole or in part? Everything else
follows mechanically from that answer.

Three subordinate determinations, only relevant if the first is affirmative:

1. **Mobile** — who designs the half the passover does not contain?
2. **Copy** — are the four capability descriptors and the "four institutional
   branches" line adopted, or should authoritative copy be mapped into those
   roles?
3. **Navigation** — is the Capabilities disclosure adopted as the gr-0003
   answer, and recorded as a DDR?

## 9–12. Implementation path, changes, components

**None to the application.** No page, component, style, token or dependency was
changed. One repository configuration change was necessary and is described in
§22: the passover's bundled runtime broke the lint gate and is now excluded from
it. No component was created or reused, because nothing was built.

The stop was not broadened unnecessarily, and I looked hard for an
independently implementable slice. Each candidate failed:

- **Typography, cards, motion** — the DDR conflicts above.
- **Navigation disclosure** — needs a DDR (§7.4) and has no mobile design.
- **Gradient CTA** — separable as surface treatment, but its click-scale is a
  prohibited transform, and adopting the gradient alone while type and cards
  await determination produces incoherence rather than progress.
- **Logo imagery** — brand identity, and the supplied assets are soft-edged crops
  the passover itself says should be replaced with vector. Publishing them would
  be a quality regression.
- **Contact chips** — the cleanest candidate, and still part of the same visual
  language; adopting it alone changes nothing a reader would recognise as the
  design.

## 13–16. Preservation results

Nothing was changed, so everything is preserved by construction. Recorded for
the record:

- **Authoritative content** — untouched; all nine routes and every section
  component stand.
- **UI copy** — none changed. The five new strings in §7.3 were **not** adopted.
- **Contact/inquiry** — untouched. Worth noting the design's form carries exactly
  the five governed fields (Name, Organization, Email address, Inquiry type,
  Message, all required), so its semantics match; what it lacks — the honeypot,
  `startedAt`, `sourcePath`, and the `aria-invalid`/`aria-describedby` error
  semantics — are mockup omissions, not proposals, and would have been preserved.
- **Navigation / IA** — untouched. The passover changes presentation only: all
  eight routes survive and the footer links all eight. It is Category A in
  principle; §7.4 is why it still needs a determination.

## 17–19. Accessibility, responsive, fidelity

**Accessibility and responsive behaviour are unchanged** because nothing was
implemented. The evaluation did surface that the passover, taken literally,
would regress both: no mobile layouts (§7.2), and a form without the error and
validation semantics the live implementation carries.

**Design fidelity** could not be assessed against an implementation, since there
is none. Against the artifacts: the passover is a coherent, well-made proposal
whose composition, rhythm and restraint are consistent with the institution's
voice, and whose palette is already the site's. Its disagreement with the site is
narrower than it first appears — four decisions, not a wholesale rethink.

## 20–21. Repository and dependencies

**No governance record was altered.** The passover remains untracked at
`passover/`, in its existing role as design exploration. It was not moved into
`institution/design/`, because exploration evidence and adopted Design System
authority are not the same thing and promoting it silently would make it the
latter.

**One recommendation on its disposition:** it is currently untracked and
therefore exists only on this machine. The Founder Office may wish to decide
whether it should be preserved in version control as exploration evidence — a
question this report does not answer for them.

**No dependencies added.** Had implementation proceeded, the typefaces would
have required Google Fonts (or self-hosting via `next/font`), which is itself
a consequential external dependency worth naming in the determination.

## 22–24. Validation

Run: `npm run build` — succeeded, all 14 routes prerendered static, used to
produce the rendered-text baseline for §6.

Run: `npm run verify` — the canonical gate (nine validators, references, lint,
typecheck, build). **It failed on first run, and the cause was the passover
itself.** `passover/support.js` is the Claude Design canvas runtime — 69 KB of
third-party build output sitting in the repository root — and ESLint linted it,
producing two errors (`ReactDOM.render` deprecated; assignment to `module`) and
eight warnings. The design artifacts, merely by being present, broke the
repository's own gate.

**Repair:** `passover/**` added to the ESLint global ignores, with the reason
recorded in the config. This follows the precedent already in `globals.css`,
which excludes `institution/`, `workbench/` and `docs/` from Tailwind class
scanning so that documents quoting utility classes cannot influence the emitted
stylesheet. The principle is the same: evidence in the tree must not influence
the application or its gates. It is the only change to repository configuration,
and it changes no application behaviour.

`npm run verify` then passed — all gate steps green.

Browser validation was not performed: there is no implementation to exercise,
and the build output was used only as a text baseline.

## 25. Adversarial review

Performed against artifacts rather than an implementation. The findings that
changed my conclusion:

1. **I twice measured content coverage wrongly.** My first pass read the
   `.dc.html` files as static HTML and reported 61% coverage — missing every
   runtime-templated array. My second attributed data to subpages that actually
   receive it from the parent, reporting Services at 34% when all seven service
   areas are in fact carried. Both are corrected in §6, and the disagreement
   between methods is reported rather than resolved by choosing one.
2. **I nearly recorded seven copy differences that do not exist** — arrow-link
   labels differing only by a glyph the repository renders separately.
3. **A section-level probe produced a false negative on `FirstVenture.tsx`**,
   the HGP representation governed by FD-V4 (`fd-0009`). Direct checking
   confirms the passover **does** carry the venture copy. Had I trusted the
   probe I would have reported a governed-determination violation that is not
   there.

No implementation defects exist to repair.

## 26–27. Limitations and what was left unchanged

- Exact content coverage is unresolved (§6) and must be settled section by
  section during implementation.
- Everything differing between the passover and the site was left unchanged, for
  the reasons in §7 and §9.
- The passover's own caveats — soft logo crops, unwired form, absent mobile —
  are the design's, not defects I introduced.

## 28–29. Commit and production

No commit was made to application code; ending HEAD equals starting HEAD. This
report is the only addition. **Production deployment was not performed**: no
deploy was run, no domain or environment configuration was touched, and nothing
here constitutes launch authorization.

## 30. Recommendation

**FOUNDER DETERMINATION REQUIRED.**

The passover is a serious and largely faithful proposal — the palette is already
governed, the copy is verbatim where it appears, and the navigation answers a
question the Design System has recorded as open. It is not a redesign of the
institution; it is a disagreement with four design decisions.

But those four are the design, and one of them (`ddr-0009`) rejected the
passover's card treatment by name for a reason the Founder Office may still hold:
that boxed cards with shadow "deepens the SaaS resemblance instead of removing
it." Development cannot decide whether a later commissioned design supersedes an
earlier adopted one. That is the determination.

If it is affirmative, the implementation path is clear and bounded: refine the
existing primitives and section components in place, keep the App Router and
Tailwind architecture, map authoritative content into the new composition
section by section, design the mobile half against ddr-0004's existing rule, and
record the superseding decisions as DDRs so the design system stays the authority
rather than the mockup.
