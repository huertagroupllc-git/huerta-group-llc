# Huerta Group LLC — Website

Production repository for the public website of **Huerta Group LLC**, an organizational systems company. Huerta Group helps organizations become stronger through systems design, operational improvement, process development, technology implementation, AI integration, automation, documentation, measurement, and organizational leadership.

Technology, software, automation, and AI are tools used in service of organizational purpose and human capability. They are not the Company's identity or ultimate product. This repository must never be documented or developed as an AI platform, SaaS product, or technology-vendor website.

This repository currently contains the public-facing website: the homepage, Services page, Methodology page, Intellectual Property page, Education & Workforce Development page, Technology & Software page, Managed Services page, About page, and Contact page — the complete foundational institutional architecture — together with the global layout, design-token, and metadata infrastructure that future pages will build on. The website is one part of a potentially broader future digital ecosystem; future software capabilities remain distinct from — and must not be conflated with — the functionality that exists today.

## Current Project Status

Implemented and deployed:

- **Homepage** with a deliberate narrative structure: hero, organizational problem framing, capabilities, working approach, differentiation, and a closing call-to-action section
- **About page** (`/about`) with its own narrative: identity, organizational strength, the purpose→people→systems→technology hierarchy, operating perspective, long-term orientation, and a closing call to action
- **Services page** (`/services`) presenting seven connected areas of systems-oriented work (assessment, process design, documentation, technology/AI implementation, measurement, implementation leadership, ongoing advisory), an adaptable engagement model, and restrained fit guidance — all CTAs lead to `/contact`
- **Methodology page** (`/methodology`) — a foundational institutional page explaining how Huerta Group works at the level of enduring principles: methodology (not technology) as the foundation of the Company's work, understanding before change, the enduring principles that guide the work (structured thinking, systems thinking, evidence-informed judgment, practical implementation, sustainable capability, continuous improvement, governance awareness), repeatability with responsible adaptation, and methodology's place in the Company's institutional model. The page deliberately publishes **public principles only**: no proprietary framework, named methodology, numbered process, engagement lifecycle, phase model, diagnostic instrument, assessment, or internal operating detail is published or invented — protected methodology remains internal. CTAs use existing routes (`/contact`, `/services`)
- **Intellectual Property page** (`/intellectual-property`) — a foundational institutional page explaining the Company's intellectual-property philosophy: knowledge treated as an institutional asset, experience captured into reusable structure, the methodology↔intellectual-property distinction, broad forms of institutional knowledge (categories, deliberately not an inventory), responsible stewardship with client confidentiality and selective disclosure, and continuity/value beyond consulting hours. The page publishes **philosophy only**: no named framework, tool, model, assessment, template, publication, software product, asset count, portfolio, license, patent, trademark, registration, or trade-secret claim is published or invented — internal assets remain protected, and the page makes no legal-rights statements. CTAs use existing routes (`/contact`, `/methodology`, `/education`, `/services`)
- **Technology & Software page** (`/technology-software`) — a foundational institutional page explaining the Company's technology philosophy: purpose and methodology before tools, software as a response to validated organizational need, eight enduring principles for responsible technology (systems fit, practical implementation, human responsibility, interoperability/independence, security-privacy-stewardship, maintainability, capability-not-dependency, continuous improvement), responsible governed AI ("a capable tool, not an authority"), and technology's supporting role across the institutional model. The page publishes **philosophy only**: no product, platform, application, dashboard, portal, feature set, integration, API, AI system, roadmap, demo, pricing, or software offering exists, is implied, or was invented — Huerta Group remains an organizational systems company, never a software or AI vendor. Navigation uses the deliberate short label "Technology" (full-label row cannot render unwrapped at any supported desktop width); the desktop link row appears at `xl` (1280px+), with the accessible menu button serving narrower viewports. CTAs use existing routes (`/contact`, `/methodology`, `/intellectual-property`, `/services`)
- **Managed Services page** (`/managed-services`) — the foundational institutional page completing the public architecture. It presents Managed Services as sustained organizational capability support: why implementation alone does not produce durable capability, support without surrendered authority (clients retain purpose, decisions, and accountability), seven principles of sustained support (methodology throughout, proportionality, reviewability, adaptation, knowledge transfer, responsible transition, continuous improvement), capability over dependency ("support that cannot step back is not support"), and integration with every other institutional branch. The page publishes **institutional function only**: no package, tier, plan, pricing, SLA, response time, support hours, monitoring system, portal, dashboard, staffing commitment, client, or recurring offering exists, is implied, or was invented — and Managed Services is expressly not IT support, outsourcing, staffing, or a passive retainer. CTAs use existing routes (`/contact`, `/services`, `/methodology`, `/technology-software`)
- **Education & Workforce Development page** (`/education`) — presents the Company's educational division in established institutional voice: the division's role, education as organizational capability, the institutional progression it operates within (vision → methodology → intellectual property → education → technology & software → managed services), the ten capability domains Huerta Group develops, the audiences the division serves, the competency-over-completion philosophy, and the division's integration with the rest of the Company. The page deliberately claims **no specific offerings**: no named course, program, credential, certification, price, schedule, instructor, or enrollment exists or is implied (truthfulness through omission, per the approved voice direction). All inquiry CTAs lead to the existing `/contact` route. No LMS, enrollment, student, certification, or payment functionality exists
- **Contact page** (`/contact`) with a formal inquiry-intake workflow: an accessible form submitted through a Next.js Server Action, validated server-side, protected by proportionate abuse checks (honeypot, timing gate, payload limits, best-effort rate limiting), and persisted to the Huerta Group LLC Supabase project
- **Inquiry notification infrastructure** (Resend, currently in standby): after an inquiry is persisted, the server attempts an internal email notification and records the outcome on the inquiry row (`notification_status`: `pending` → `sent` / `failed` / `not_configured`). With the Resend environment variables absent — the current state — inquiries are stored normally and marked `not_configured`; no email is attempted
- **Global layout**: sticky header with desktop navigation, accessible mobile navigation, footer with legal name and tagline
- **Design tokens**: brand palette (matte black `#0F0F10`, gunmetal silver `#5E646B`, metallic gold `#B08D57`), typography, and motion tokens defined once in `app/globals.css`
- **Technical SEO**: page metadata, Open Graph and Twitter tags, canonical URL, Organization JSON-LD, `robots.txt`, and `sitemap.xml`
- **Static rendering** — every route prerenders at build time; the only server-side runtime behavior is the contact form's Server Action
- **Responsive behavior** across desktop, laptop, tablet, and mobile breakpoints
- **Accessibility foundations**: semantic landmarks, skip link, logical heading hierarchy, keyboard-operable navigation, visible focus states, reduced-motion support

Not implemented (and not to be implied elsewhere): authentication, analytics, CMS tooling, tests, client portals, dashboards, or any other third-party integration. The only database surface is the server-side contact-inquiry write path described below.

Known inquiry-workflow limitations, accepted deliberately for this stage: email notification is built but in standby (`not_configured`) until the Resend environment variables are added, so Supabase is checked directly for new inquiries; there is no automatic retry for failed notifications (the failure is recorded on the row for manual follow-up); `sent` means the provider accepted the request, not proof of final mailbox delivery; rate limiting is per-serverless-instance (best-effort) rather than durable. A formal privacy-policy/legal review remains a future requirement.

### Temporary values

These are placeholders, marked `TEMPORARY` in source, pending business decisions:

| Item | Location | Status |
| --- | --- | --- |
| `SITE_URL` (`https://huerta-group-llc.vercel.app`) | `lib/site.ts` | Deliberately uses the active Vercel domain — which drives canonical/OG/robots/sitemap URLs — until the intended custom domain (`huertagroupllc.com`) is connected and confirmed in Vercel |
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
| Inquiry storage | Supabase (Huerta Group LLC project) — written to server-side via the PostgREST API using built-in `fetch`; no client SDK dependency |

There is intentionally no authentication, CMS, analytics, or test framework at this stage. The Supabase JavaScript SDK is intentionally not installed — the single insert the site performs uses the platform `fetch` API.

## Architecture

```
app/
  layout.tsx        Root layout: fonts, metadata, viewport, skip link, Header/Footer shell
  page.tsx          Homepage: section composition, canonical URL, Organization JSON-LD
  about/page.tsx    About page: section composition and page-specific metadata
  services/page.tsx Services page: section composition and page-specific metadata
  methodology/page.tsx Methodology page: section composition and
                    page-specific metadata
  intellectual-property/page.tsx Intellectual Property page: section
                    composition and page-specific metadata
  technology-software/page.tsx Technology & Software page: section
                    composition and page-specific metadata
  managed-services/page.tsx Managed Services page: section composition
                    and page-specific metadata
  education/page.tsx Education & Workforce Development page: section
                    composition and page-specific metadata
  contact/page.tsx  Contact page: hero, guidance, inquiry form, page metadata
  contact/actions.ts  Server Action: validation, abuse checks, Supabase insert,
                      then notification attempt + outcome recording
  globals.css       Tailwind v4 @theme design tokens and base styles
  robots.ts         robots.txt (Next.js metadata file convention)
  sitemap.ts        sitemap.xml (Next.js metadata file convention)
  icon.svg          Favicon (temporary monogram)
components/
  layout/           Header, MobileNav, Footer — global chrome
  sections/         Hero, Problems, Capabilities, Approach, Differentiation, Contact
  sections/about/   AboutHero, Identity, Strength, PeopleSystemsTechnology,
                    Perspective, LongTerm, AboutCta
  sections/services/ ServicesHero, SystemsFirst, ServiceAreas, HowItConnects,
                    Engagement, TechnologyRole, Fit, ServicesCta
  sections/methodology/ MethodologyHero, MethodologyBeforeTechnology,
                    UnderstandingBeforeChange, GuidingPrinciples,
                    ConsistencyWithAdaptation, InstitutionalFoundation,
                    MethodologyCta
  sections/ip/      IpHero, KnowledgeBeyondEngagement, MethodologyToKnowledge,
                    FormsOfKnowledge, StewardshipAndProtection,
                    ExtendingCapability, InstitutionalContinuity, IpCta
  sections/technology/ TechHero, PurposeBeforeTools, SoftwareFromNeed,
                    ResponsibleTechnologyPrinciples, ResponsibleAi,
                    ExtendingInstitution, TechCta
  sections/managed/ MsHero, ImplementationToOperation, AuthorityBoundary,
                    SustainedSupportPrinciples, CapabilityOverDependency,
                    IntegratedModel, MsCta
  sections/education/ EducationHero, EducationMission, PracticeToEducation,
                    CapabilityDomains, EducationAudiences,
                    CompetencyOverCompletion, IntegratedApproach,
                    EducationCta
  contact/          ContactForm — accessible inquiry form (client component)
  ui/               Container, ButtonLink, Section — reusable primitives
lib/
  site.ts           Site constants: names, tagline, description, URLs, navigation
  inquiry.ts        Inquiry types, field limits, and shared validation
  notification.ts   Server-only inquiry email (Resend via fetch): sanitized
                    subject, escaped HTML + plain text, never throws
  cx.ts             Class-name join utility
supabase/
  migrations/       Version-controlled SQL (contact_inquiries table + security)
docs/
  README.md         Documentation index: authority hierarchy, classifications
  governance/       Constitution record, Vision Foundation for Development
  development/      Development Standards, bounded autonomous completion standard
```

- **Server-first**: every component is a React Server Component except two deliberate client boundaries — `components/layout/MobileNav.tsx` (menu open/close state, Escape handling) and `components/contact/ContactForm.tsx` (submission state, inline errors, focus management). All pages remain statically rendered.
- **Inquiry security**: the `contact_inquiries` table has Row Level Security enabled with no policies and all privileges revoked from the public API roles — anonymous clients cannot read or write it. Inserts happen only in the Server Action using the server-side Supabase secret key, which never reaches the browser.
- **Notification ordering**: persistence first, notification second. The Supabase row is the source of record; the email is an operational alert. A notification failure never affects the user-facing success state (their inquiry was stored) and is recorded on the row (`notification_status`, `notification_attempted_at`, `notification_message_id`, `notification_error_code`). User content is control-character-sanitized before reaching any email header and HTML-escaped in the email body. The sender identity defaults to Resend's own onboarding address until a Huerta Group domain is verified with the provider.
- **Navigation** links to the `/services`, `/methodology`, `/intellectual-property`, `/education`, `/technology-software` (labeled "Technology"), `/managed-services`, `/about`, and `/contact` routes, with the header CTA also leading to `/contact`. The desktop link row renders at `xl` and above — with `gap-3` and a slightly narrower CTA, measured so all eight labels fit on one line — and the accessible menu button serves all narrower viewports. **The primary navigation is at measured capacity: any future top-level item requires an owner-authorized structural decision** (see `docs/launch/launch-readiness.md`). No link points to a page that does not exist.
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

## Development Governance

Authoritative reference documents live under [`docs/`](docs/README.md), which indexes them and defines the document classifications. In order of authority:

1. **[Huerta Group LLC Constitution](docs/governance/huerta-group-constitution.md)** — the highest internal authority. The canonical record currently lists the three ratified articles (I–III) by title and awaits verbatim insertion of the ratified text; constitutional development remains incomplete beyond Article III.
2. **[Vision Foundation for Development](docs/governance/vision-foundation-for-development.md)** — the approved strategic foundation for all technology decisions; preserved exactly, never to be rewritten through ordinary development work.
3. **[Development Standards](docs/development/development-standards.md)** — how this repository's systems are designed, implemented, reviewed, documented, and maintained. Its companion, the **[Bounded Autonomous Completion and Verification Standard](docs/development/bounded-autonomous-completion-standard.md)**, defines the default execution method for consequential development tasks.

Individual task instructions sit below all of these and may not silently override them (see AGENTS.md for the full authority rules).

Critical distinction the governance system enforces: the long-term ecosystem the Vision Foundation describes (portals, dashboards, platforms, proprietary tools) is **vision, not implementation**. Only what this README's Current Project Status lists actually exists. Public content must never present aspirations as existing capabilities.

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

### Environment variables

The site renders without any environment variables; only the contact
form's submission path requires them. Copy `.env.example` to `.env.local`
and fill in real values (never committed):

| Variable | Purpose |
| --- | --- |
| `SUPABASE_URL` | Huerta Group LLC Supabase project URL |
| `SUPABASE_SECRET_KEY` | Server-only secret API key (`sb_secret_…`) used by the Server Action to insert inquiries. No `NEXT_PUBLIC_` prefix — it never enters the client bundle |
| `RESEND_API_KEY` | Optional (notification standby without it). Resend API key for the internal inquiry notification |
| `CONTACT_NOTIFICATION_EMAIL` | Optional (standby without it). Internal recipient for inquiry notifications; until a custom domain is verified with Resend, must be the Resend account owner's address |
| `CONTACT_NOTIFICATION_FROM` | Optional. Verified sender identity; defaults to Resend's onboarding sender |

To activate notifications: add `RESEND_API_KEY` and `CONTACT_NOTIFICATION_EMAIL` in Vercel project settings (Production) and redeploy. Until then inquiries persist normally with `notification_status = 'not_configured'`.

Database schema lives in `supabase/migrations/` and is applied to the
`huerta-group-llc` Supabase project. The same two variables must exist in
Vercel project settings for production.

## Deployment

- The repository is hosted on GitHub; `main` is the production branch.
- Vercel builds and deploys automatically on push to `main`.
- The active production deployment uses the Vercel-provided domain: **https://huerta-group-llc.vercel.app**
- The intended custom domain (`https://huertagroupllc.com`) is **not yet active**. Until it is connected and confirmed in Vercel, `SITE_URL` in `lib/site.ts` intentionally points at the active Vercel domain so canonical and sitemap URLs always resolve.
- Production requires the two Supabase environment variables (above) in Vercel project settings; everything else deploys with zero configuration.
- After each deployment, validate on the live URL (content, metadata, `robots.txt`, `sitemap.xml`, and a contact-form submission).
- Launch preparation is documented under [`docs/launch/`](docs/launch/launch-readiness.md): the authoritative launch-readiness record, custom-domain migration plan, phased official-launch checklist, and rollback plan. The official launch itself (domain acquisition/connection, DNS, notification activation) is owner-authorized and has **not** been performed.

## Content Standards

- Precise, restrained language accessible to business and organizational leaders
- No unsupported claims, invented proof points, or inflated marketing language
- No startup clichés, AI-first positioning, or generic consulting filler
- No constitutional paraphrasing in any copy
- Technology described in service of organizational outcomes
- Clear distinction between current capabilities and future direction
- Consistent terminology and clear information hierarchy

## Future Development

The following are **possible directions**, not current functionality: additional public pages (Approach, Insights), client portals, internal dashboards, a Huerta Group Command Center, proprietary tools, databases, integrations, automation, APIs, reporting systems, software, educational programs and platforms (the public `/education` division page exists today; no program catalog, curriculum, LMS, enrollment, or certification capability does), intellectual property, publishing, managed-service offerings (the public `/managed-services` institutional page exists today; no packages, SLAs, monitoring systems, or recurring commercial offerings do), and partnerships.

Future development must remain constitutionally consistent, preserve the Company's organizational systems identity, maintain separation of concerns, avoid premature implementation, adopt scalable architecture only as real requirements emerge, and continue prioritizing human usability and operational clarity.
