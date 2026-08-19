# ADR-0018 — Generation One Environment Architecture

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-11

## Context

ADR-0005 preserves production-first discipline for the public website and
defines a **mandatory isolation threshold**: separate non-production data,
environment-specific credentials, migration testing against non-production
data, deliberate feature activation, and rehearsed rollback become
required "the moment any system stores … operationally consequential
data." It adds that a system crossing the threshold "may not launch
production-first; its first ADR must define its environments." This is
that ADR.

## Options considered

1. **Reuse the website's production-first posture.** Rejected — ADR-0005
   forecloses it. Generation One stores operationally consequential data
   by definition; the register exists to hold exactly that.
2. **A full staging environment mirroring production.** Rejected as
   disproportionate for a single-user internal tool with trivial data
   volumes.
3. **Bounded environment separation meeting the threshold and no more —
   accepted.**

## Decision

**Generation One crosses the ADR-0005 threshold and may not launch
production-first.** Required posture:

- **Local development** against a non-production data store, never
  production data.
- **Preview / test** with its own data and its own credentials; preview
  deployments never read or write production operational data.
- **Production** with environment-specific credentials held separately
  from every other environment and from the public website's.
- **Migrations tested against non-production data** before production
  application; applied state confirmed against the live project rather
  than assumed from the repository (`repository-operations.md`).
- **Deliberate, owner-gated feature activation** — the notification
  standby is the template.
- **Rehearsed rollback** before the store holds any operational record.
- **Documented backup and recovery expectation** before the store holds
  irreplaceable records (architecture foundation §9).
- **Structured audit trails from the first release**, since observability
  scales with the same threshold.

**Reusable from existing environments:** the Vercel account scope and
deployment discipline, the preview mechanics, and the repository's
validation gate as a model. **Not reusable:** the public website's
production-first data posture, its Supabase project (ADR-0009), and its
credentials.

**No environment, project, credential, or deployment resource is created
or configured by this ADR.**

## Consequences and limitations

Generation One cannot be built the way the website was, and pays a known,
planned environment cost instead of an emergency retrofit — ADR-0005's
explicit intent. Test data never mixes silently with production records,
and production data is never used for testing without explicit
authorization.

## Unresolved institutional dependencies

None. The threshold is technical and ADR-0005 already determined it;
this ADR only records that Generation One crosses it.
