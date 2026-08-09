# Development Standards

**Classification: Development Standards and Architecture Decisions**

These standards govern how the Huerta Group LLC website and future
technology systems are designed, implemented, reviewed, documented, and
maintained.

They are subordinate to the [Huerta Group LLC
Constitution](../../governance/constitution/huerta-group-constitution.md) and the [Vision
Foundation for
Development](../../governance/strategic/vision-foundation-for-development.md). Where
these standards and those documents appear to conflict, the higher
authority prevails and the conflict must be escalated, not resolved
silently.

## Purpose and Scope

These standards apply to:

- The public website
- Future internal systems
- Future client-facing systems
- Automation and integrations
- AI-assisted functionality
- Databases and information systems
- Dashboards and reporting tools
- Future proprietary software and platforms

They guide implementation. They do not define Company identity, strategy,
or business direction — that authority belongs to the documents above
them.

## Execution Method for Consequential Tasks

The default execution method for consequential development tasks is the
[Bounded Autonomous Completion and Verification
Standard](bounded-autonomous-completion-standard.md). It defines the
autonomous inspect–plan–build–test–inspect–repair loop, builder and
fresh-inspector separation, the required-model configuration and bounded
execution budget, verification and repair requirements, stop and
escalation conditions, evidence-based completion, and the structure every
future consequential task prompt must follow. These standards define the
quality bar; that standard defines how consequential work reaches it.

## Core Development Principles

1. Technology serves organizational purpose and methodology.
2. Development must solve a defined operational or user need.
3. Current needs should be implemented without unnecessary speculative
   complexity.
4. Architecture should preserve reasonable future flexibility without
   premature platform development.
5. Simplicity, maintainability, clarity, and reliability take priority
   over novelty.
6. Human responsibility must remain identifiable when AI or automation is
   used.
7. Security, privacy, accessibility, and trust are design requirements,
   not optional enhancements.
8. Current functionality, planned functionality, and long-term vision must
   always be distinguished.
9. No system may falsely imply that incomplete capabilities already exist.
10. Vendor dependence should be proportionate and avoidable where
    practical.
11. Documentation must be sufficient for future contributors to understand
    important decisions.

## Architecture Standards

The current stack (verified in this repository): Next.js App Router with
React Server Components, strict TypeScript, Tailwind CSS design tokens in
`app/globals.css`, npm, ESLint flat config, Vercel deployment from `main`,
and a Supabase project written to exclusively by server-side code.

Standards:

- **Separation of concerns.** Public presentation (`app/`, `components/`),
  shared configuration and validation (`lib/`), server-only integration
  code (Server Actions, `lib/notification.ts`), and database schema
  (`supabase/migrations/`) stay in their own layers.
- **Server-first rendering.** Pages are statically rendered; client
  components exist only where interaction requires them (currently the
  mobile navigation and the contact form). Each new client boundary
  requires a reason.
- **Reusable components where reuse is justified** — shared primitives
  live in `components/ui/`; page-specific sections are not prematurely
  abstracted.
- **Stable directory structure.** New routes follow the existing
  `app/<route>/page.tsx` + `components/sections/<route>/` pattern.
- **Defined data boundaries.** Database access happens only in trusted
  server code with least-privilege credentials. Public API roles have no
  access to inquiry data; that posture is the default for future tables.
- **Secrets.** Server-only environment variables (never `NEXT_PUBLIC_`
  for secrets), documented by name in `.env.example` and the README,
  values only in `.env.local` and Vercel project settings. Client bundles
  are checked for leakage before deploying changes that touch secrets.
- **Validation and error handling.** All user input is validated
  server-side regardless of client validation. User-facing errors are
  safe and generic; internals (status codes only) go to server logs.
- **Single source of truth.** Site facts live in `lib/site.ts`; shared
  validation lives in `lib/inquiry.ts`. Business logic is not duplicated
  across layers.
- **Dependencies.** New dependencies require a demonstrated need the
  platform cannot meet. (The current implementation uses zero runtime
  dependencies beyond the framework — Supabase and Resend are called with
  the platform `fetch` API.)
- **Infrastructure is introduced deliberately.** Databases, migrations,
  authentication, APIs, queues, and background jobs are added only for
  verified requirements, never speculatively. Schema changes are
  version-controlled migrations in `supabase/migrations/`, applied to the
  verified Huerta Group LLC project only.
- **Written decisions.** Consequential technical choices are recorded —
  in the README architecture section, a migration comment, or a decision
  record under `institution/decisions/` — with enough rationale for a future
  contributor to understand why.

Do not impose architecture the project does not currently require.

## Code Quality Standards

- Code must be readable and consistently named, following the patterns
  already established in the repository.
- Modules stay small and focused; a file that needs a paragraph to explain
  its responsibilities is probably too large.
- TypeScript `strict` mode is on and stays on; no suppressed type errors,
  no unjustified `any`.
- Inputs are validated; failures are handled, not ignored.
- Dead and unused code is removed, not commented out.
- Comments are minimal and explain *why*, not *what*.
- Testing is proportionate to risk. The project currently has no test
  framework; verification is performed through linting, type checking,
  production builds, and direct exercise of affected flows (including
  browser and production verification). A test framework is introduced
  when risk justifies it, deliberately.
- Every change passes `npm run lint`, `npx tsc --noEmit`, and
  `npm run build` before it is committed.
- No unresolved warnings or known defects are accepted without being
  documented.
- Refactoring stays within the requested scope; improvements outside it
  are proposed, not smuggled in.

## User Experience and Accessibility

Accessibility is part of quality and human dignity, not a final
compliance checklist.

- Semantic HTML first; ARIA only where semantics cannot express the
  behavior.
- Full keyboard operability with logical order and visible focus states.
- Screen-reader compatibility: correct landmarks, one `h1` per page,
  logical heading sequence, accessible labels, alternative text, and
  status announcements through live regions where state changes matter.
- Sufficient color contrast; no meaning conveyed by color alone.
- Responsive recomposition across breakpoints (narrow mobile through
  desktop), with no horizontal overflow and touch targets of at least
  44px where applicable.
- Forms use persistent visible labels, clear required-field communication,
  inline validation messages, accessible error summaries, focus movement
  to outcomes, and preservation of user input through recoverable errors.
- Reduced-motion preferences are respected.
- Pages remain lightweight enough to perform well on mobile and
  lower-powered devices; core content renders without client JavaScript
  wherever possible.

## Security and Privacy

- Least-privilege access everywhere: public roles receive no database
  access they do not strictly need (the current inquiry table grants
  none).
- Privileged operations execute only in trusted server contexts.
- Secrets are managed as described under Architecture Standards; nothing
  sensitive is ever committed to the repository, printed in logs, or
  exposed in client bundles or rendered HTML.
- Input is validated and output is escaped or sanitized appropriate to
  its destination (HTML, email headers, database).
- Authentication and authorization are introduced when a capability
  requires them — designed deliberately, not bolted on.
- Client, employee, and organizational information is protected: collect
  the minimum needed for the defined purpose, retain it only as long as
  operationally justified, and delete it when it is no longer needed.
- Dependency and vulnerability awareness is maintained when dependencies
  exist; the near-zero dependency posture is itself a security control.
- Logging supports accountability without exposing sensitive content
  (the current standard: status codes and outcomes, never full inquiry
  content or credentials).
- Production data is not used for testing without explicit authorization
  and protection; synthetic data is the default and is removed after
  verification.

This document does not claim compliance with any legal, regulatory, or
security standard that has not been formally verified.

## AI and Automation Standards

- AI and automation are enabling tools, not independent authorities.
- Human responsibility remains clear for every automated behavior.
- AI output is reviewed with rigor proportionate to the risk and
  consequence of its use.
- Automated systems must not conceal uncertainty or fabricate facts.
- Sensitive or confidential information is not submitted to unapproved
  systems.
- AI functionality must serve a defined operational purpose — never
  appearance-of-innovation.
- Users are informed when AI materially affects an important result or
  decision, where appropriate.
- High-impact decisions are not delegated blindly to automated systems.
- AI-generated code and documentation are subject to the same review,
  validation, and quality standards as human-created work.

## Content and Representation Standards

The website and future systems must not invent or exaggerate: clients,
case studies, testimonials, results, statistics, certifications,
partnerships, team members, service maturity, pricing, guarantees,
software capabilities, internal systems, client portals, dashboards, AI
functionality, geographic reach, or market position.

Public representations must distinguish existing capabilities from
planned or possible future capabilities.

Ratified constitutional language is not ordinary marketing copy and must
not be casually rewritten or reproduced. See the
[Constitution record](../../governance/constitution/huerta-group-constitution.md).

## Performance and Reliability

- Pages load fast: static rendering, self-hosted fonts, optimized assets,
  and no unnecessary scripts (no analytics, trackers, or third-party
  embeds exist today; adding any requires justification and approval).
- Error states are graceful — user-facing failures are honest, safe, and
  recoverable where possible (the contact form's failure semantics are
  the model: persistence truth determines what the user is told).
- Form submission is reliable and protected against duplicates.
- Monitoring and logging are added when operationally justified, not by
  default.
- When persistent data is introduced, backup and recovery expectations
  are defined with it (Supabase currently provides project-level
  backups; inquiry data's source of record is the database, not email).
- Availability and resilience requirements stay proportionate to actual
  operational needs.
- Production builds are verified locally before deployment.

## Deployment and Production Standards

This is a production-first project. The verified workflow:

- Code changes flow through repository history: commit to `main`, push to
  GitHub, and Vercel builds and deploys automatically.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` must pass
  before any push.
- After deployment, the affected routes and flows are verified on the
  live production URL — deployment is not reported successful until
  production behavior is confirmed.
- Environment configuration lives in Vercel project settings (production)
  and `.env.local` (local); there is no undocumented production
  configuration.
- No developer's local machine is authoritative; the repository and the
  deployed system are.
- Consequential releases are made with rollback awareness — small
  commits, verified states, and the ability to revert a commit and
  redeploy.
- Deployment status is documented honestly, including standby or
  partially configured capabilities (the current example: inquiry email
  notification exists in code but is deliberately `not_configured` in
  production until credentials are added).

## Documentation Standards

Documentation is required for: setup and verified commands, architecture,
environment variables (names and purposes, never values), major
dependencies, significant architectural decisions, data models when
introduced, integrations, deployment, known limitations, current versus
planned capabilities, and operational procedures needed to maintain the
system.

The README is the primary current-implementation document. Documentation
is updated as part of the work that makes it inaccurate — a change is not
complete while the documentation it invalidated still stands.

## Change Control

- Tasks remain within their approved scope.
- Consequential changes are explained before or within the completion
  report.
- Existing working behavior is not removed without instruction or clear
  justification.
- Temporary solutions are labeled as temporary, in code and in
  documentation.
- Major architectural changes include rationale, tradeoffs, and migration
  implications.
- Lower-level technical convenience never justifies contradicting
  higher-level Company authority.

## Completion and Verification Standards

Every development task concludes with a completion report identifying:

- Files created or changed
- Functionality implemented
- Commands or checks actually run
- Build and lint status
- Known limitations
- Assumptions made
- Deferred work
- Any conflict or uncertainty involving the governing reference documents

A report must not claim a verification that was not actually performed.

This section states the high-level completion and verification
requirement. The detailed bounded execution procedure, inspector
classifications, and full completion-report structure for consequential
tasks are defined once in the
[Bounded Autonomous Completion and Verification Standard](bounded-autonomous-completion-standard.md)
and are referenced here rather than restated (consolidation per Founder
Office determination D-7, recorded in fd-0002).
