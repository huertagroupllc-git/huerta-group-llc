# Official Launch Checklist

**Classification: Current Implementation Documentation (checklist)**

Phased checklist for the owner-authorized official launch. Items marked
**[owner]** are Esteban's decisions/actions and are never marked complete
by development. Technical items are testable. Status legend:
`[x]` verified in the 2026-07-30 launch-readiness audit · `[ ]` pending.

## Phase 1 — Owner authorizations [owner]
- [ ] Confirm official domain (`huertagroupllc.com`) and acquire it
- [ ] Select registrar
- [ ] Choose primary host: apex vs `www`
- [ ] Authorize DNS changes
- [ ] Authorize custom-domain connection in Vercel
- [ ] Decide whether to activate inquiry email notifications (Resend)
- [ ] Confirm notification recipient address through a protected channel
- [ ] Confirm analytics remain deferred (current state: none installed)
- [ ] Decide whether a legal/privacy review happens pre- or post-launch

## Phase 2 — Pre-launch technical verification
- [x] Clean `main`, synchronized with origin
- [x] `npm run lint` — 0 errors
- [x] `npx tsc --noEmit` — clean
- [x] `npm run build` — all routes generate, static where intended
- [x] Dependency audit — findings classified; none production-reachable
- [x] Secret audit — no committed secrets; env files ignored
- [x] Environment-variable inventory — documented in
      [launch-readiness.md](launch-readiness.md)
- [x] Inquiry persistence verified in production (notification standby)
- [x] Metadata: unique titles/descriptions/canonicals on all 9 routes
- [x] Sitemap: 9 routes exactly once, active origin, valid XML
- [x] Robots: valid, indexing permitted, sitemap declared
- [x] Structured data: Organization JSON-LD only, accurate
- [x] Favicon + brand assets resolve (temporary monogram documented)
- [x] 404 behavior: correct status, branded page, recovery paths
- [x] Security headers deployed and verified in production
- [x] Navigation capacity measured and documented
- [x] Responsive: no overflow/wrap at 320–1920px on all routes
- [x] Accessibility: headings, landmarks, keyboard, focus, form labels,
      touch targets, reduced motion
- [x] Production performance inspected (static prerender, self-hosted
      fonts, no third-party requests)

## Phase 3 — Domain migration (per the [migration plan](custom-domain-migration-plan.md))
- [ ] Attach domain in Vercel [owner/credentialed]
- [ ] Configure DNS records [owner/credentialed]
- [ ] Verify certificate issuance and HTTPS on both hosts
- [ ] Update `SITE_URL` (canonical origin) and redeploy
- [ ] Verify apex/www redirect direction
- [ ] Verify old Vercel-origin behavior prevents duplicate indexing
- [ ] Verify all production routes on the new origin

## Phase 4 — Inquiry notification activation (only if authorized) [owner-gated]
- [ ] Preserve inquiry persistence throughout (never depends on email)
- [ ] Add `RESEND_API_KEY` + `CONTACT_NOTIFICATION_EMAIL` in Vercel
      production env [owner/credentialed]
- [ ] Verify sender domain with Resend if using a custom From address
- [ ] Submit one clearly-marked internal test inquiry; verify delivery
- [ ] Verify failure fallback (row records `failed`, user unaffected)
- [ ] Verify no credential appears in logs or client code

## Phase 5 — Launch verification
- [ ] Homepage + all 8 other foundational pages render on the new origin
- [ ] Contact form end-to-end on the new origin
- [ ] Metadata + canonicals consistent on the new origin
- [ ] Social preview check (OG/Twitter tags resolve)
- [ ] Sitemap + robots on the new origin
- [ ] Structured data URLs updated
- [ ] 404 behavior on the new origin
- [ ] Desktop + mobile navigation
- [ ] Browser console/network clean
- [ ] HTTPS + redirects verified
- [ ] Deployment logs clean

## Phase 6 — Post-launch
- [ ] Record launch date and active domain in
      [launch-readiness.md](launch-readiness.md)
- [ ] Preserve deployed-commit evidence
- [ ] Monitor deployments and inquiry persistence for the first days
- [ ] Search-engine verification / indexing readiness [owner]
- [ ] Retain rollback reference ([rollback plan](rollback-plan.md))
- [ ] Defer optional enhancements (CSP, production logo/favicon, social
      image, analytics decision, legal review follow-ups) into separate
      bounded tasks
