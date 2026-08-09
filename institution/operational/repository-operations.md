# Repository Operations Record

**Classification: Current Implementation Documentation** (non-governing
operational record). Purpose: make the institutionally material
operational facts of this repository **repository-native**, per Founder
Office determination D-6. AI contributor memory may cache these facts
for convenience but is never authoritative; where memory and this
record disagree, this record and the repository evidence are correct.
No secret values appear here; this record names where credentials live,
never what they are.

## Deployment

- Pushes to `main` are built and deployed automatically by Vercel
  (project `huerta-group-llc`, account scope `huertagroupllc-git`).
  Branch pushes produce preview deployments only.
- Production URL: `https://huerta-group-llc.vercel.app` (temporary; the
  custom domain `huertagroupllc.com` is intentionally not yet
  connected — an owner-gated launch action, see `docs/launch/`).
- After any deployment-affecting change, affected routes are verified
  on the live production URL before the work is reported complete
  (Development Standards deployment rule).

## Accounts and credentials (locations only — never values)

- Supabase and Vercel for this repository live under **dedicated
  Huerta Group accounts** (Supabase organization "Huerta Group LLC",
  project ref `egvfsijyjocflvxhfldh`; Vercel scope
  `huertagroupllc-git`) — deliberately separate from any other
  project's accounts. Verify the account scope before any platform
  operation.
- Runtime secrets exist only as Vercel project environment variables
  and local `.env.local`; the variable names are documented in
  `.env.example`. This Supabase project uses the current secret-key
  model (`sb_secret_…`, `SUPABASE_SECRET_KEY`); the legacy
  `service_role` JWT is disabled. Supabase management access tokens are
  held outside the repository on authorized machines and are never
  committed or printed.

## Production data protections

- The `contact_inquiries` table is the only production data surface
  (ADR-0004). It contains one **marked internal TEST row** (submitted
  2026-07-30 from `esteban.digitalofficial+launchtest@gmail.com`,
  message marked as an internal test). This row is deliberately
  retained launch evidence: **never delete or modify it without
  explicit Founder Office approval.**
- Production data is never used for testing without explicit
  authorization; synthetic test data is clearly marked and removed
  after verification (ADR-0005).

## Standing service states

- Inquiry email notification (Resend) is **deliberately in standby**:
  code complete, `notification_status = 'not_configured'` recorded on
  new inquiry rows until `RESEND_API_KEY` and
  `CONTACT_NOTIFICATION_EMAIL` are added in Vercel and the project is
  redeployed. Activation is an owner-gated decision.
- Database schema changes ship only as version-controlled migrations in
  `supabase/migrations/`, applied to the verified Huerta Group project
  only; applied-state must be confirmed against the live project, not
  assumed from the repository.

## Verification

- The canonical repository verification command is `npm run verify`
  (see `institution/standards/repository/repository-verification.md`).
  It must pass before any push to `main`.
