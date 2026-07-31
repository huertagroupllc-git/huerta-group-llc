# Launch Readiness — Authoritative Record

**Classification: Current Implementation Documentation**

This is the single authoritative launch-readiness location for the Huerta
Group LLC public website. It records the verified production state, known
limitations, and the documents that govern the later owner-authorized
official launch. Companion documents in this directory:

- [Custom-Domain Migration Plan](custom-domain-migration-plan.md)
- [Official Launch Checklist](official-launch-checklist.md)
- [Rollback Plan](rollback-plan.md)

## Current production state

| Item | State |
| --- | --- |
| Active production origin | **https://huerta-group-llc.vercel.app** (Vercel-provided domain) |
| Official custom domain | `huertagroupllc.com` — **not acquired, not connected, not active**; migration is planned only |
| Production branch | `main` (auto-deploys via Vercel on push) |
| Last verified audit | 2026-07-30 — full launch-readiness audit (this phase) |
| Readiness classification | READY FOR OWNER-AUTHORIZED OFFICIAL LAUNCH (pending the owner decisions listed below) |

## Foundational route inventory (complete institutional architecture)

`/` · `/services` · `/methodology` · `/intellectual-property` ·
`/education` · `/technology-software` · `/managed-services` · `/about` ·
`/contact` — plus `/robots.txt`, `/sitemap.xml`, `/icon.svg`, and a
branded 404 (`app/not-found.tsx`). All routes statically prerendered; the
contact form's Server Action is the only server-side runtime behavior.

## Inquiry system state

- Inquiries are validated server-side and persisted to the Huerta Group
  LLC Supabase project (`contact_inquiries`, RLS enabled, no public
  policies; server-only secret key).
- Abuse controls: honeypot, payload cap, timing gate, best-effort
  per-instance rate limiting. Errors are generic; logs record status
  codes only, never inquiry content.
- **Notification standby**: the Resend notification path is implemented
  but deliberately `not_configured` in production — no notification
  credentials are set, no email is sent, and persistence does not depend
  on them. Activation is an owner decision (see checklist).
- Inquiries are reviewed by checking Supabase directly until
  notifications are activated.

## Environment variables (names only — values never committed)

| Variable | Class | Required | Notes |
| --- | --- | --- | --- |
| `SUPABASE_URL` | server-only | required for inquiry persistence | configured in Vercel production |
| `SUPABASE_SECRET_KEY` | server-only | required for inquiry persistence | configured in Vercel production |
| `RESEND_API_KEY` | server-only | optional (standby) | absent in production by design |
| `CONTACT_NOTIFICATION_EMAIL` | server-only | optional (standby) | absent in production by design |
| `CONTACT_NOTIFICATION_FROM` | server-only | optional | defaults to Resend onboarding sender |

No `NEXT_PUBLIC_` variables exist. The site renders fully without any
environment variables; only inquiry submission requires the Supabase
pair. `SITE_URL` is a constant in `lib/site.ts` (deliberately the active
Vercel origin until the custom domain is live).

## Security posture

- HTTPS + HSTS (Vercel platform). Baseline headers set in
  `next.config.ts`: `X-Frame-Options: DENY`,
  `X-Content-Type-Options: nosniff`,
  `Referrer-Policy: strict-origin-when-cross-origin`,
  `Permissions-Policy` (camera/microphone/geolocation denied).
- **Content-Security-Policy: deliberately not deployed.** A correct CSP
  requires an origin inventory (Next inline runtime, self-hosted fonts,
  inline JSON-LD) and its own verification pass; a rushed policy risks
  breaking the site for no real gain on a zero-third-party page. Planned
  as a separate bounded change.
- No cookies, analytics, trackers, third-party scripts, or external
  requests of any kind from the client. Attack surface is the static
  pages plus one Server Action.
- Repository contains no committed secrets; env files are git-ignored;
  `.env.example` holds placeholders only.

## Dependency posture (audited 2026-07-30)

`npm audit`: 12 high findings, all in two transitive chains, **none
reachable in production**: (1) `brace-expansion`/`minimatch` under the
ESLint toolchain — development-only, never bundled; (2) `postcss`/`sharp`
vendored inside Next — build-time only (no attacker-controlled CSS input;
`next/image`/sharp unused). Every offered "fix" is a breaking downgrade
(`--force` installs eslint@4 / next@9); declined. Revisit on the next
routine Next.js upgrade. `npm ls`: tree valid (one extraneous transitive
package, informational).

## Navigation capacity (measured, not estimated)

The desktop link row (xl breakpoint and above, `gap-3`, no-wrap CTA at
`px-4`) is **at capacity with eight labels**: at the `max-w-6xl` container
cap the occupied row width equals the available width with the CTA flush
at the content edge (≈0px slack measured at 1280/1366/1440; the row fits
by design, verified unwrapped). Below `xl`, the accessible menu button
serves all viewports (320–1279px).

**Any future top-level navigation addition will not fit and requires an
owner-authorized structural decision** (options: grouped navigation,
shorter labels, wider container — all reserved to Esteban).

## Verified limitations (acceptable for launch)

1. Favicon is the deliberate temporary "HG" monogram (`app/icon.svg`,
   brand palette); the production vector logo replaces it later. Not a
   framework placeholder. (`/favicon.ico` itself 404s; the referenced
   `<link rel="icon">` asset resolves — modern browsers use the link.)
2. No custom social-share image; Open Graph/Twitter metadata is valid
   without one (summary cards).
3. Notification email in standby (by design; owner activation step).
4. Rate limiting is per-serverless-instance (best-effort), documented in
   the README.
5. No automated test framework (repository standard: lint, types, build,
   and direct browser/production verification).
6. Cross-browser verification in this environment is Chromium-based;
   WebKit/Firefox engines were unavailable (standards-based inspection
   substituted; no engine-specific code is used).
7. No CSP yet (deliberate — see Security posture).
8. A formal privacy-policy/legal review remains a future owner
   requirement before or shortly after launch.

## Protected owner decisions (required before official launch)

Domain acquisition and registrar choice · apex vs `www` primary ·
DNS authorization · notification activation + recipient confirmation ·
analytics (currently deferred) · legal/privacy review · any future
navigation restructuring.

## Validation commands

`npm run lint` · `npx tsc --noEmit` · `npm run build` — plus direct
production verification (route status, rendered content, metadata,
headers, sitemap/robots) against the active origin after every deploy.
