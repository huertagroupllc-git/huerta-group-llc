# ADR-0008 — Generation One Module Placement

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-01

## Context

The Founder Office authorized a bounded ADR phase converting the accepted
Generation One Phase 1 Technical Blueprint into governed architecture
decisions (`fd-0013`; ADR phase instrument). Placement is decided first
because it bounds every later decision.

The instrument's default posture is to **prefer reuse of existing internal
application architecture unless evidence establishes a material technical
reason for separation**. That posture is tested here against the verified
baseline, and its premise does not hold: **there is no internal
application to reuse.** The verified architecture
(`internal-software-architecture.md` §1) is one statically rendered public
Next.js website, one Server Action for inquiry intake, a standby
notification module, no authentication, no admin interface, and no
internal application of any kind.

The only existing application is therefore the **public website** — and
two accepted ADRs already exclude this capability from it. Governing
references consulted: ADR-0002 (public website boundary), ADR-0003
(placement criteria), the blueprint §28, Requirements Report §14, and
Foundation §26.

## Options considered

1. **Inside the public website application, behind authenticated routes.**
   Genuinely attractive: one repository, one deployment, shared design
   system and tooling, lowest coordination cost for a one-user internal
   tool. **Rejected** — ADR-0002 excludes "anything requiring
   authentication, client data beyond inquiries, or an internal workflow"
   from the website; ADR-0003 makes the security boundary decisive
   ("authentication or privileged credentials → outside the public
   application"). Substantively rather than formally: a compromise of the
   public marketing site's runtime would become a compromise of
   Headquarters operational data, which is an unacceptable blast radius
   for a convenience.
2. **A bounded module inside a shared internal application.** Rejected as
   presently meaningless — no such application exists. This becomes the
   right question when a *second* internal capability is authorized.
3. **A separate application in its own repository — accepted.**

## Decision

**Generation One is a separate application in its own repository**,
outside the public website and its repository.

Applying ADR-0003's criteria: **security boundary** — authentication is
required and the criteria make it decisive; **runtime model** —
authenticated and interactive versus static and public; **release
cadence** — an internal tool iterating independently of a stable public
site; **data sensitivity** — operationally consequential internal data
that must not share a runtime or credential boundary with public routes;
**dependency coupling** — none beyond shared design conventions, which is
incidental coupling and never justifies colocation; **reversibility** — a
small separate application is the easiest thing to discard if Generation
One proves wrong; **maturity** — the capability is new, so the
least-committal viable runtime form is correct.

**Command Center evolution is preserved by boundary, not by scaffolding.**
Nothing in this placement prebuilds future capability. A future Command
Center, if evidenced, grows from this application or replaces it; either
path stays open precisely because the application is small, separate, and
discardable.

The **governed corpus stays in this repository** — the blueprint, these
ADRs, the Foundation, the Requirements Report, and all institutional
records. Only runtime code moves out. This follows ADR-0003's stated
split: document-based capabilities stay here; runtime systems start
outside.

## Consequences and limitations

Two repositories, two deployment paths, and a design system consumed
across both — a real coordination cost, accepted because the security
boundary is not negotiable and reversibility favors the smaller separate
thing. The public website's verified minimal posture is preserved
untouched. No repository, project, or deployment target is created by this
ADR.

## Unresolved institutional dependencies

Founder Office authorization to construct anything at all (`fd-0013`);
implementation readiness remains `governance_blocked`.
