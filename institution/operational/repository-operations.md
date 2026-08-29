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
  `huertagroupllc-git`). Verify the account scope before any platform
  operation.
- **Correction, 2026-08-26 — the Supabase account is dedicated at the
  *project* level, not at the *organization* level.** This entry
  previously said the accounts were "deliberately separate from any
  other project's accounts." Direct inspection of the authenticated
  account establishes that the Supabase organization
  `sedhnswxjkkqctfzlsth` contains **three** projects:
  `huerta-group-llc`, `huerta-group-publishing`, and `curbside-spa` —
  the last being a separate business's project. Supabase grants project
  access through organization membership, so the organization is a
  shared administrative and credential boundary. Recorded rather than
  quietly amended, because the earlier claim was relied on by
  `adr-0021`'s isolation reasoning; the consequence is carried as an
  unresolved dependency at `adr-0022`.
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
- **Migration provenance, recorded 2026-08-29 — the two website
  migrations are applied; the project migration ledger does not record
  them.** Direct read-only inspection of the live project establishes
  that both are authentically reflected in hosted state:
  `20260722000000_create_contact_inquiries.sql` — `public.contact_inquiries`
  exists, with row level security enabled and no policies, which is the
  server-key-writes posture `adr-0004` describes; and
  `20260722010000_add_notification_tracking.sql` — all four
  `notification_status`, `notification_attempted_at`,
  `notification_message_id` and `notification_error_code` columns are
  present. The hosted shape matches the repository definitions.
  **`supabase_migrations.schema_migrations` exists and contains zero
  rows.** The migrations were therefore applied outside the CLI's
  ledger. **How and when they were applied cannot be established from
  available evidence** — not the tool, not the operator, not the
  instant — and nothing here should be read as establishing it.
  **The absence of ledger rows does not mean the changes are absent;
  inspection proves they are present.** They must not be reapplied, and
  no ledger row may be inserted, merely to manufacture a history that
  was never recorded: either act would risk the live table to
  reconstruct a record of the past. Future migration tooling must treat
  these objects as **already applied** rather than inferring an
  unapplied state from an empty ledger. Recorded rather than corrected,
  because the gap is in the record and not in the database.

## Verification

- The canonical repository verification command is `npm run verify`
  (see `institution/standards/repository/repository-verification.md`).
  It must pass before any push to `main`.
