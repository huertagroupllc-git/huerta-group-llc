# Custom-Domain Migration Plan

**Classification: Current Implementation Documentation (plan only)**

Prepares the later owner-authorized migration of the public website from
the active Vercel origin (`https://huerta-group-llc.vercel.app`) to the
intended official domain. **No domain or DNS action has been performed.**

- **Intended domain**: `huertagroupllc.com` — subject to Esteban's
  confirmation and acquisition. It is **not owned, not connected, and not
  active** as of this plan.
- **Registrar selection is a protected owner decision.** No
  registrar-specific instructions are included until one is selected.

## Decisions Esteban must make first

1. Confirm `huertagroupllc.com` as the official domain and acquire it.
2. Choose the primary host: apex (`huertagroupllc.com`) or
   `www.huertagroupllc.com`. Recommendation to consider at decision time:
   apex primary with `www` → apex redirect (Vercel handles both once the
   domain is attached; either choice works — consistency matters more
   than the choice).
3. Authorize the DNS changes at the registrar.

## Migration sequence (executed only with explicit authorization)

### A. Domain attachment (Esteban or credentialed access: Vercel + registrar)
1. Vercel → project `huerta-group-llc` → Settings → Domains → add the
   apex and `www`; select the primary per decision 2 (the other becomes a
   308 redirect).
2. At the registrar, create the records Vercel specifies at attach time —
   typically an `A` record for the apex to Vercel's IP and a `CNAME` for
   `www` to `cname.vercel-dns.com` (use exactly what the Vercel dashboard
   displays; nameserver delegation to Vercel is the alternative). Keep
   TTLs short (≤ 1 hour) until the migration is verified, then raise.
3. Wait for Vercel to verify ownership and issue the TLS certificate
   automatically; confirm both hosts show valid HTTPS.

### B. Application cutover (Claude may perform with authority)
1. Update `SITE_URL` in `lib/site.ts` to the primary host — this single
   constant drives `metadataBase`, every canonical, all Open Graph URLs,
   the Organization JSON-LD `url`, `sitemap.xml`, and the robots sitemap
   declaration (verified single source of truth; remove its `TEMPORARY`
   comment).
2. Search the repository for any remaining hard-coded
   `huerta-group-llc.vercel.app` references (README/docs) and update.
3. `npm run lint` · `npx tsc --noEmit` · `npm run build`; commit; push;
   Vercel auto-deploys.

### C. Post-cutover verification (Claude may perform)
1. All 9 routes + `/robots.txt` + `/sitemap.xml` return 200 on the
   primary host over HTTPS.
2. Canonicals, OG URLs, JSON-LD, and sitemap entries all use the primary
   host; no mixed origins.
3. `www`/apex secondary host 308-redirects to the primary; the old
   `*.vercel.app` origin redirects to the primary automatically once a
   production custom domain is set (verify; this prevents duplicate
   indexing — if it serves 200 instead, note it: search engines follow
   the canonical tags, which will point at the primary).
4. Contact form submits and persists on the new origin (same-origin
   Server Action — no CORS or Supabase allowed-origin change is required
   by the current architecture; verify once live).
5. Browser console/network clean; headers intact (HSTS on the new domain
   appears after first HTTPS responses).
6. Search-engine verification (e.g., Search Console) — owner decision,
   post-launch.

### D. Notification interaction (only if activation is separately authorized)
Resend sender-domain verification for `huertagroupllc.com` (DNS TXT/DKIM
records at the registrar) is independent of site cutover and remains an
owner-authorized step — see the launch checklist.

## Rollback triggers and procedure
Trigger: primary host unreachable/certificate failure/major rendering or
inquiry failure that cannot be fixed forward quickly.
1. Revert the `SITE_URL` commit (git revert), push — canonicals return to
   the Vercel origin, which never stopped working.
2. If DNS itself is the failure: restore prior records at the registrar
   (Esteban/credentialed) or detach the domain in Vercel.
3. Verify the Vercel origin end-to-end, then diagnose offline.
DNS/registrar rollback requires Esteban or credentialed vendor access;
application rollback is git-based and Claude-performable.

## Action classification
- **Claude may later perform with authority**: B, C, and git-based
  rollback.
- **Esteban must perform**: domain purchase, registrar selection, DNS
  authorization, primary-host decision, Search Console, Resend domain
  verification approval.
- **Credential-dependent**: Vercel dashboard domain attachment, registrar
  record changes.
- **Irreversible/externally consequential**: domain purchase, public DNS
  propagation, search-engine indexing of the new origin.
