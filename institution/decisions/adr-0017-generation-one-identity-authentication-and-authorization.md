# ADR-0017 — Generation One Identity, Authentication, and Authorization

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-10

## Context

ADR-0006 holds that authentication is introduced only when the first real
internal capability requires it, and then **as a shared service from the
start**, with provider selection left to that first consumer's ADR.
Generation One is that consumer. No authentication, identity store, user,
or authorization policy exists today. OSPA S02 §2.3 Principle 3 and §2.7
hold that authority is not inferable from technical access.

## Options considered

1. **Reuse existing authentication architecture.** **There is none to
   reuse** — the verified baseline has no authentication of any kind.
   Recorded because the instrument asks the question directly.
2. **Improvise authentication for one internal tool.** Rejected —
   ADR-0006 rejected this explicitly, as it fragments the most
   security-critical shared concern.
3. **Select a provider in this ADR.** Rejected — provider selection is a
   vendor commitment with real blast radius, and the criteria require
   evaluation evidence this phase has not gathered.
4. **Define the access model now, defer provider selection to a bounded
   follow-on decision — accepted.**

## Decision

**Access classes** — technical categories in ADR-0006's vocabulary,
**never institutional offices**:

| Class | Capability |
| --- | --- |
| Founder Office user | Read all; record Review Events; override Attention priority; act on Attention |
| Corporate Operations user | Full authoring within Headquarters representation; admit and normalize Attention; set confirmation expectations |
| Source-function / venture user | Nominate Attention; supply and confirm facts within their own domain; read what concerns them |
| Privileged system administrator | Operate the system; **no authoring authority**; administrative actions audited |
| Machine / integration identity | **None in Generation One** — no integration exists |

**Enforcement posture:** deny-by-default, following the existing
RLS-no-policy template (architecture foundation §9). Every policy is
additive from nothing. Row-level authorization is the enforcement layer,
not application-layer checks alone.

**Technical permission is never institutional authority.** No role name
may imply an institutional office; no grant may encode unresolved
constitutional structure; and administrative access confers zero authority
over what the institution does with the system.

**Identity is introduced as a shared service** from the start (ADR-0006),
not as an application-local concern, because a second consumer is
predictable.

**Provider selection is deferred** to a bounded follow-on decision against
ADR-0006's recorded criteria — security posture, auditability,
portability and exit path, cost proportionality, operational burden —
evaluated with evidence rather than asserted here.

**Implementation boundary:** no users, accounts, providers, RLS policies,
database permissions, roles, or runtime authorization are created.

## Consequences and limitations

Identity work sits on Generation One's critical path — a cost ADR-0006
accepted deliberately. The initial population is very small (the Founder,
plus Corporate Operations), which argues for the simplest defensible
provider, not for improvisation. Deferring provider selection means one
further decision stands between this package and construction.

## Unresolved institutional dependencies

Constitutional and institutional authority structures (ADR-0006): any
mapping of institutional roles onto technical roles awaits that authority
and is expressly out of scope. Provider selection remains open.
