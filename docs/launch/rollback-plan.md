# Rollback Plan

**Classification: Current Implementation Documentation**

Rollback procedures for the public website, for use during and after the
official-launch phase. Baseline: every production deploy corresponds to a
commit on `main`; Vercel retains previous deployments.

## Baseline references
- **Launch-readiness baseline commit**: the commit recorded in
  [launch-readiness.md](launch-readiness.md) at audit date (pre-domain
  state; site fully verified on the Vercel origin).
- **Pre-domain deployment**: the Vercel deployment current immediately
  before domain attachment (identifiable in the Vercel dashboard's
  deployment history by commit hash).

## Rollback triggers
Roll back when production shows, and cannot be quickly fixed forward:
site-wide rendering failure · inquiry persistence failure · certificate
or HTTPS failure on the primary host · material content error published
by mistake · a deploy that diverges from the intended commit. Do **not**
roll back automatically for: transient DNS propagation delays, single
slow responses, or cosmetic issues — investigate first.

## Procedures (smallest sufficient first)
1. **Content/application rollback (git — Claude may perform):**
   `git revert <bad-commit>` (never history rewrite), push to `main`,
   Vercel auto-deploys the reverted state; verify all routes directly.
2. **Platform deployment rollback (credentialed):** Vercel dashboard →
   Deployments → promote the last known-good deployment ("Instant
   Rollback"). Use when a build succeeds but the deploy misbehaves and a
   git revert would be slower.
3. **Environment-variable rollback (credentialed):** remove or restore
   changed values in Vercel project settings; redeploy. Notification
   variables may be removed at any time — inquiry persistence is
   unaffected by design and rows record `not_configured` again.
4. **Canonical-origin rollback (git — Claude may perform):** revert the
   `SITE_URL` commit so canonicals/sitemap/OG return to the Vercel
   origin, which remains live throughout.
5. **DNS/domain rollback (Esteban or credentialed vendor access):**
   restore prior DNS records at the registrar, or detach the custom
   domain in Vercel. Allow for TTL/propagation delay and certificate
   state; do not thrash records repeatedly.
6. **Inquiry-system rollback:** the schema is versioned in
   `supabase/migrations/`; application-level rollback is git-based (1).
   Database rollbacks are a protected action — never destructive without
   Esteban.

## After any rollback
Verify all 9 routes + robots + sitemap on the live origin · verify the
contact form persists · verify metadata/canonical consistency · record
what was rolled back, when, why, and the evidence (commit hashes,
deployment IDs) in the repository · schedule the forward fix as a
bounded task.

## Responsibility boundaries
Git-based rollbacks: performable by development (Claude) with the
standing deploy workflow. Vercel dashboard, registrar, DNS, Resend, and
Supabase-console actions: Esteban or explicitly credentialed access.
Evidence (deployment IDs, hashes, timestamps) is preserved in repository
documentation — never in public copy.
