# Huerta Group LLC — Website

Production repository for the public website of **Huerta Group LLC**, an organizational systems company. Huerta Group helps organizations become stronger through systems design, operational improvement, process development, technology implementation, AI integration, automation, documentation, measurement, and organizational leadership.

Technology, software, automation, and AI are tools used in service of organizational purpose and human capability. They are not the Company's identity or ultimate product. This repository must never be documented or developed as an AI platform, SaaS product, or technology-vendor website.

This repository currently contains the public-facing website foundation: the homepage and the global layout, design-token, and metadata infrastructure that future pages will build on. The website is one part of a potentially broader future digital ecosystem; future software capabilities remain distinct from — and must not be conflated with — the functionality that exists today.

## Current Project Status

Implemented and deployed:

- **Homepage** with a deliberate narrative structure: hero, organizational problem framing, capabilities, working approach, differentiation, and a closing call-to-action section
- **About page** (`/about`) with its own narrative: identity, organizational strength, the purpose→people→systems→technology hierarchy, operating perspective, long-term orientation, and a closing call to action
- **Global layout**: sticky header with desktop navigation, accessible mobile navigation, footer with legal name and tagline
- **Design tokens**: brand palette (matte black `#0F0F10`, gunmetal silver `#5E646B`, metallic gold `#B08D57`), typography, and motion tokens defined once in `app/globals.css`
- **Technical SEO**: page metadata, Open Graph and Twitter tags, canonical URL, Organization JSON-LD, `robots.txt`, and `sitemap.xml`
- **Fully static rendering** — every route prerenders at build time; no server-side runtime behavior
- **Responsive behavior** across desktop, laptop, tablet, and mobile breakpoints
- **Accessibility foundations**: semantic landmarks, skip link, logical heading hierarchy, keyboard-operable navigation, visible focus states, reduced-motion support

Not implemented (and not to be implied elsewhere): databases, authentication, APIs, forms, analytics, CMS tooling, environment variables, tests, client portals, dashboards, or any third-party integration.

### Temporary values

These are placeholders, marked `TEMPORARY` in source, pending business decisions:

| Item | Location | Status |
| --- | --- | --- |
| `SITE_URL` (`https://huerta-group-llc.vercel.app`) | `lib/site.ts` | Deliberately uses the active Vercel domain — which drives canonical/OG/robots/sitemap URLs — until the intended custom domain (`huertagroupllc.com`) is connected and confirmed in Vercel |
| `CONTACT_HREF` (`#contact`) | `lib/site.ts` | All calls to action point to the homepage contact section until a formal contact or intake channel is established |
| Contact-section notice | `components/sections/Contact.tsx` | States that the formal contact channel is being established |
| Favicon (`app/icon.svg`) | text-based "HG" monogram | Replace with the production vector logo mark |
| Header brand mark | `components/layout/Header.tsx` | Text-based; the brand link contents swap for a vector logo without structural changes |

## Technology Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16.2.11 (App Router, Turbopack build) |
| Language | TypeScript 5.9 (`strict: true`) |
| UI library | React 19.2 |
| Styling | Tailwind CSS 4.3 — CSS-first design tokens via `@theme` in `app/globals.css` |
| Fonts | `next/font/google` (self-hosted): Source Serif 4 for headings, Inter for body and interface text |
| Linting | ESLint 9 flat config with `eslint-config-next` (core-web-vitals + TypeScript presets) |
| Package manager | npm (`package-lock.json`) |
| Deployment | Vercel, building from this repository's `main` branch |

There is intentionally no database, authentication, CMS, analytics, test framework, or external API integration at this stage.

## Architecture

```
app/
  layout.tsx        Root layout: fonts, metadata, viewport, skip link, Header/Footer shell
  page.tsx          Homepage: section composition, canonical URL, Organization JSON-LD
  about/page.tsx    About page: section composition and page-specific metadata
  globals.css       Tailwind v4 @theme design tokens and base styles
  robots.ts         robots.txt (Next.js metadata file convention)
  sitemap.ts        sitemap.xml (Next.js metadata file convention)
  icon.svg          Favicon (temporary monogram)
components/
  layout/           Header, MobileNav, Footer — global chrome
  sections/         Hero, Problems, Capabilities, Approach, Differentiation, Contact
  sections/about/   AboutHero, Identity, Strength, PeopleSystemsTechnology,
                    Perspective, LongTerm, AboutCta
  ui/               Container, ButtonLink, Section — reusable primitives
lib/
  site.ts           Site constants: names, tagline, description, URLs, navigation
  cx.ts             Class-name join utility
```

- **Server-first**: every component is a React Server Component except `components/layout/MobileNav.tsx`, which is a client component because it manages menu open/close state and an Escape-key listener in the browser. It is the only client-side JavaScript on the site.
- **Navigation** links to the `/about` route plus homepage-section anchors. Anchors are root-relative (`/#capabilities`, `/#approach`, `/#difference`, `/#contact`) so they resolve correctly from every route; no link points to a page that does not exist.
- **Site facts live in `lib/site.ts`** — names, tagline, URLs, and navigation are defined once and imported everywhere they appear.

The architecture is intentionally proportional to a small static site. Additional layers are added when real requirements emerge, not before.

## Development Standards

This is a production-first project. Localhost is used only for development and inspection; the deployed site is the reference environment.

- Clean, modular, reusable component architecture
- Strict TypeScript; no suppressed type errors
- Accessibility as a core requirement: semantic HTML, heading hierarchy, keyboard operability, visible focus states, reduced-motion support
- Responsive design recomposed per breakpoint, not merely shrunk
- Performance-conscious: static rendering, self-hosted fonts, client-side JavaScript only where interaction requires it
- Metadata and technical SEO maintained as part of the layout, not as an afterthought
- Minimal dependencies; no premature technical complexity
- Clear separation between the public website and any future internal systems, client-facing systems, or platform capabilities
- Every change validated by linting, type checking, and a production build before it is committed

## Constitutional and Brand Guardrails

Huerta Group LLC is governed by the **Huerta Group LLC Constitution**, which currently contains three formally ratified articles: Article I — Purpose and Identity; Article II — Mission and Long-Term Responsibility; Article III — Principles and Character. The Constitution governs the Company's identity, mission, principles, and character.

Rules for this repository:

- The Company is positioned as an **organizational systems company**. AI, software, automation, and technology are tools, never the identity.
- Ratified constitutional text is closed to ordinary revision. It must not be altered, paraphrased, compressed, expanded, or reproduced in website copy or project documentation. Changes occur only through an explicitly requested formal amendment process.
- This README and all website copy are project documentation, subordinate to the Constitution. Nothing in this repository is constitutional text.
- The website must not invent clients, case studies, results, statistics, certifications, pricing, team members, partnerships, awards, service maturity, organizational history, or market position.
- Copy should communicate confidence, clarity, institutional seriousness, and long-term capability — without inflated or trend-driven language.
- Final brand standards may be governed by separate approved brand documentation.

## Local Development

```bash
npm install        # install dependencies
npm run dev        # development server at http://localhost:3000
npm run lint       # ESLint
npx tsc --noEmit   # type check (no named package script; run directly)
npm run build      # production build
npm run start      # serve the production build
```

No environment variables are required.

## Deployment

- The repository is hosted on GitHub; `main` is the production branch.
- Vercel builds and deploys automatically on push to `main`.
- The active production deployment uses the Vercel-provided domain: **https://huerta-group-llc.vercel.app**
- The intended custom domain (`https://huertagroupllc.com`) is **not yet active**. Until it is connected and confirmed in Vercel, `SITE_URL` in `lib/site.ts` intentionally points at the active Vercel domain so canonical and sitemap URLs always resolve.
- After each deployment, validate on the live URL (content, metadata, `robots.txt`, `sitemap.xml`).

## Content Standards

- Precise, restrained language accessible to business and organizational leaders
- No unsupported claims, invented proof points, or inflated marketing language
- No startup clichés, AI-first positioning, or generic consulting filler
- No constitutional paraphrasing in any copy
- Technology described in service of organizational outcomes
- Clear distinction between current capabilities and future direction
- Consistent terminology and clear information hierarchy

## Future Development

The following are **possible directions**, not current functionality: additional public pages (Services, Approach, Insights, Contact), consulting service information, client portals, internal dashboards, a Huerta Group Command Center, proprietary tools, databases, integrations, automation, APIs, reporting systems, software, education, intellectual property, publishing, managed services, and partnerships.

Future development must remain constitutionally consistent, preserve the Company's organizational systems identity, maintain separation of concerns, avoid premature implementation, adopt scalable architecture only as real requirements emerge, and continue prioritizing human usability and operational clarity.
