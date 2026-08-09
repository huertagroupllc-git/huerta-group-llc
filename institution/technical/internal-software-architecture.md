# Internal Software Architecture Foundation

**Classification: Development Standards and Architecture Decisions**

This document defines the technical architecture that governs how future
Huerta Group LLC systems are shaped, bounded, and sequenced. It is
strategic and technical: it is **not** a product requirements document
for any platform, it **authorizes no construction**, and it **creates no
institutional authority** — governing documents remain authoritative,
and unresolved institutional questions remain unresolved. It is
subordinate to the Constitution, the Vision Foundation, and the
Development Standards.

**Companion artifacts** (machine-readable; ADR-0001 conventions apply):
capability registry `institution/metadata/registries/capability-registry.json`, schema
`institution/metadata/schemas/capability-schema.json`, validation
`npm run validate:architecture`. Boundary decisions: ADR-0002 – ADR-0006
under [`decisions/`](../decisions/adr-practice.md).

## 1. Current architecture (verified)

One repository containing one statically rendered Next.js public website
(nine institutional pages, branded 404, metadata layer), exactly one
server-side runtime capability (inquiry intake via a Server Action,
persisting to a single-table Supabase project with RLS-deny-by-default),
a hardened standby notification module, zero runtime dependencies beyond
the framework, Vercel auto-deploy from `main`, and the file-based
Institutional Knowledge Foundation (ADR-0001). There is no internal
application, no authentication, no admin interface, and no other
database surface. This smallness is a strength to preserve, not a gap to
fill.

## 2. Target architectural posture

A **coordinated ecosystem of bounded systems around a governed knowledge
core** — not a monolith accreting inside the website, and not premature
microservices. The public website remains a stable, bounded public
interface (ADR-0002). Institutional capabilities (method library, IP
repository, education, operations, client delivery, AI) become separate
bounded systems **when — and only when — their institutional inputs
mature**, connected through explicit interfaces and the shared knowledge
layer, with identity and data services shared only where cross-system
value is demonstrated (ADR-0003).

## 3. Architectural principles

1. Technology implements approved institutional direction; it never
   creates it.
2. The public website stays bounded; institutional systems are not
   placed there by default (ADR-0002).
3. Proportionality: build for present, evidenced needs; preserve
   reversibility while requirements are immature.
4. Explicit boundaries: every system has an owner, a data boundary, and
   a stated integration surface.
5. One authoritative owner per data category; others consume, never
   duplicate (§5).
6. Shared infrastructure only on demonstrated cross-system value.
7. Security, confidentiality, maintainability, portability, and
   continuity are day-one architectural concerns, weighted by
   sensitivity.
8. Vendor choices remain replaceable in proportion to their blast
   radius; no vendor defines Company identity or boundaries.
9. Technical permissions are never institutional authority (§8).
10. No premature enterprise infrastructure: no microservices, queues,
    service meshes, or platform abstractions without demonstrated need.

## 4. System boundaries

- **Public website boundary (ADR-0002):** the website presents the
  institution and accepts inquiries. Inquiry intake remains colocated
  (same trust boundary, same release cadence, no identity requirement).
  Nothing requiring authentication, client data beyond inquiries, or an
  internal workflow belongs in it.
- **Internal-system boundary:** capabilities serving Huerta Group's own
  operation (method library, operations, research) — internal
  sensitivity or higher, authenticated once interactive, never reachable
  from public routes.
- **Shared-service boundary:** capabilities serving multiple systems
  (identity, shared data services, the future knowledge system). Created
  only when a *second* consumer is real — the first consumer hosts, the
  second extracts (ADR-0003 criteria).
- **Decision criteria** for website / shared service / separate
  application / separate repository / unresolved: data sensitivity,
  release cadence, ownership, runtime model, dependency coupling,
  security boundary, maintainability, maturity, reversibility — applied
  per ADR-0003; "unresolved" is the required answer when inputs are
  immature.

## 5. Data-ownership model (architectural, not legal)

Ownership below means *system responsibility for the authoritative
record* — never legal ownership, rights, retention, or disclosure
policy, all of which require owner/legal authority.

| Data category | Likely owner | Likely consumers | Sensitivity | Exists today | Governance dependency / unresolved |
| --- | --- | --- | --- | --- | --- |
| public-content | public-website | (public) | public | yes | — |
| inquiry-records | inquiry-intake | notification, future client-delivery | confidential | yes (Supabase) | retention policy (owner/legal) |
| knowledge-metadata | knowledge-foundation | all future systems | internal | yes (files) | index classification; machine-consumption eligibility |
| method-records | method-library | education, AI, client-delivery, IP | confidential | no | methodology substance + disclosure tiers (owner) |
| ip-records | ip-repository | education, publishing | confidential | no | IP classification/ownership policy (owner) |
| education-records | education-platform | (learner-facing) | client-confidential | no | program authority; learner-data governance (owner) |
| publishing-records | publishing-platform | — | unresolved | no | publishing authority (owner) |
| ai-records | ai-platform | — | confidential | no | AI governance (owner) |
| operational-records | operations-systems | managed-services | internal | no | first real workflow |
| client-engagement-records | client-delivery-systems | managed-services | client-confidential | no | engagement conventions + confidentiality practice |
| service-delivery-records | managed-service-infrastructure | — | client-confidential | no | service model (owner) |
| identity-records | identity-and-access | all authenticated systems | confidential | no | provider + lifecycle decisions |
| audit-records | identity-and-access (initially) | reviews | confidential | no | auditability scope per sensitivity |

## 6. Integration principles

Explicit interfaces only · least-privilege access · one authoritative
owner per category, consumers never fork copies · synchronous calls only
where immediate consistency is required; asynchronous processing only on
demonstrated need · **no shared database tables across unrelated
capabilities without an explicit ADR** · external providers replaceable
in proportion to blast radius · integration failure must never corrupt
authoritative records (the inquiry system's persistence-first pattern is
the model) · auditability rises with sensitivity and consequence. This
task designs no APIs, events, queues, or formats.

## 7. Environment strategy (ADR-0005)

Production-first remains correct **for the public website**: stateless,
public-content, verified directly on the live origin. Local development
and Vercel previews continue as today. **Production-only discipline
becomes unacceptable — isolated development/staging data and
environment-specific credentials become mandatory — the moment a system
stores client-confidential information, learner records, IP records,
identity records, operationally consequential data, or financial or
regulated information.** Migration testing against non-production data,
deliberate feature activation, and rollback rehearsal become required at
the same threshold. This task creates no environments and changes no
deployment configuration.

## 8. Identity and access direction (ADR-0006)

Authentication is introduced only when the first real internal or client
capability requires it — none does today. Conceptual **technical** user
classes: public visitor, inquiry submitter, authenticated internal user,
privileged system administrator, client user, learner, program
administrator, service operator, machine/integration identity. **These
are technical categories, not Company offices, and no amount of
technical privilege confers constitutional or institutional authority —
an administrator can operate a system and still lack any authority to
decide what the institution does with it.** Principles: least privilege,
role separation, audited administrative access, dedicated service
identities, credential rotation, account lifecycle, periodic
authorization review, confirmation for sensitive actions, environment
separation. Provider selection is deliberately unresolved.

## 9. Security, continuity, and operability direction

- **Security/confidentiality:** deny-by-default data access (the
  RLS-no-policy posture is the template), server-only secrets, minimal
  dependency surface, no public exposure of internal systems.
- **Observability/auditability:** proportionate to sensitivity — the
  website's status-code logging is adequate today; systems holding
  confidential or client data require structured audit trails from their
  first release.
- **Backup/recovery/portability:** every authoritative store must have a
  documented backup and recovery expectation before it holds
  irreplaceable records (Supabase project-level backups cover inquiry
  records today); data models remain exportable in open formats;
  migration paths are considered at adoption time, not crisis time.
- **Maintainability:** version-controlled schemas/migrations, documented
  decisions (ADR practice), and the knowledge layer keep every system
  understandable beyond its original builder.

## 10. Dependency sequencing

Knowledge foundation (done, ADR-0001) → this architecture foundation →
method library (**blocked: owner methodology substance**) → IP
repository (**blocked: owner IP policy**) → operations core (trigger:
first outgrown workflow) → client-delivery foundations (needs
methodology v1) → education platform (**blocked: program authority**) →
managed services (needs client delivery + service model) → publishing
(**blocked: publishing authority**) → AI platform (needs knowledge
system + **AI governance**). Identity-and-access activates when its
first consumer is authorized. The official launch is an owner-gated
parallel track, independent of platform depth. Full detail per
capability: the registry.

## 11. Capability and system map (summary)

The authoritative, validated map is `institution/metadata/registries/capability-registry.json`
(18 capabilities). Summary:

| Capability | Maturity | Disposition | Readiness |
| --- | --- | --- | --- |
| Public Website | operational | current public application | ready |
| Inquiry Intake | operational | current server capability | ready |
| Notification Service | standby | current server capability | owner authorization |
| Knowledge Foundation | operational | repository artifacts | ready |
| Future Knowledge System | documented direction | future shared service | requirements incomplete |
| Method Library | documented direction | unresolved | governance blocked |
| IP Repository | documented direction | unresolved | governance blocked |
| Education Platform | conceptual | unresolved | governance blocked |
| Publishing Platform | conceptual | unresolved | governance blocked |
| AI Platform | conceptual | unresolved | governance blocked |
| Operations Systems | conceptual | future internal application | requirements incomplete |
| Managed-Service Infrastructure | public description only | unresolved | dependency blocked |
| Client Delivery Systems | conceptual | unresolved | requirements incomplete |
| Research Systems | conceptual | deferred | deferred |
| Identity and Access | documented direction | future shared service | requirements incomplete |
| Shared Data Services | documented direction | unresolved | requirements incomplete |
| Platform Operations | partial | external managed service | ready |
| Official Launch Layer | launch phase | launch phase | owner authorization |

## 12. Unresolved architecture decisions (deliberate)

Data topology for future systems (ADR-0004) · repository placement of
every future system (ADR-0003 criteria exist; applications pending) ·
identity provider (ADR-0006) · knowledge-system storage model · every
governance-blocked institutional input listed in §10 · documentation-
index classification/tier and machine-consumption eligibility (carried
from ADR-0001).

## 13. Prohibited premature commitments

No microservices, queues, event buses, service meshes, monorepo/
multi-repo mandates, database topology, identity provider, AI
architecture, retrieval engine, CMS, or enterprise observability stack
is selected here. No disposition in the registry authorizes building
anything.

## 14. Revisiting this architecture

Revisit (via ADR) when: a governance-blocked input matures; a second
consumer appears for any would-be shared service; any system approaches
the §7 sensitivity threshold; a capability's actual requirements
contradict its recorded disposition; or the owner redirects
institutional priorities. The registry is updated in the same change as
any such decision, and `npm run validate:architecture` must pass.
