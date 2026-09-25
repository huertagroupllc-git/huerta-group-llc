# ADR-0024 — External Delivery Generation One: Placement and Representation in the Headquarters Client Engagement Backend

**Classification: Development Standards and Architecture Decisions**

- **Status:** **Accepted** — the technical decisions below were validated by
  Platform & Systems Development and accepted by the Founder Office with
  corrections A–F (`fd-0041` §2.3, §2.7); this record is made with the
  implementation, as `fd-0041` §2.7 directs.
- **Governs:** the External Delivery Generation One implementation in
  `huerta-group-client-engagement`, against application baseline
  `ab6d63ecbaedacbba31a20c5650db28862a6dfe3`.
- **Implements:** the [External Delivery Operating
  Standard](../standards/engagement/external-delivery-operating-standard.md).
  This ADR decides *how* that standard is held in the backend; it decides
  nothing the standard decides.
- **Varies nothing:** `adr-0021`, `adr-0022` and `adr-0023` stand unchanged.
  No new schema, no new Supabase project, no storage change.

## Context

The External Delivery Operating Standard requires durable, capability-specific
provider knowledge; opportunity-scoped implementation scoping; assignments
subordinate to Authorized Work; and performance learning — all Headquarters-only,
all beneath the Client Engagement Operating Standard. The backend that holds
Client Engagement (`adr-0022`, `adr-0023`) confines everything the capability
owns to the `client_engagement` schema and enforces that boundary
mechanically: its ownership manifest asserts that no object of the capability
references another capability's table, its static gate refuses any migration
not scoped to the schema, and its security suites scan the schema by name for
forced row-level security and the absence of any delete path.

Governing references consulted: the Vision Foundation (§15, §17 guardrails
1–3, 5, 7, 8, 10), the Development Standards, `adr-0017`, `adr-0021`,
`adr-0022`, `adr-0023`, the Client Engagement Operating Standard, and the
External Delivery Operating Standard.

## Options considered

1. **A second schema for External Delivery.** Rejected: an assignment must
   reference `engagement` and `authorized_work`, which a second schema could
   hold only as an unchecked identifier or by breaking the "nothing reaching
   out" assertion; the static gate and every security suite would need
   extension; PostgREST exposure would need a credentialed configuration
   change; and the new schema would begin with no verification coverage.
2. **Reusing client `organization` and `person` as provider identity.**
   Rejected: those are client-world identities by construction and by the
   schema's own words, visible through client engagement grants; a provider is
   Huerta Group's counterparty, may have no client relationship, and must be
   visible across engagements.
3. **Stored current maturity, posture and scoping disposition pinned to
   history by a transaction-local guard.** Rejected as dual truth (correction
   B); the backend elsewhere derives high-level state so a representation
   cannot misreport its record.

## Decision

1. **Placement.** External Delivery records live in the existing
   `client_engagement` schema as a logically distinct bounded domain,
   distinguished by naming, by their own policies, and by documentation.
   Schema placement confers no client access and no client ownership: no
   client or Client Platform principal reads any External Delivery record.
2. **Provider identity is a second record-class root.** A provider carries
   its own authentic-or-synthetic classification, write-once, exactly as a
   client organization does; every downstream External Delivery record
   resolves its class through the provider by join and carries no flag of
   its own. The BUILD01 suite's single-root assertion is widened to name the
   second root; the rule it protects is unchanged.
3. **Identity is separated from detail.** A minimal provider identity record
   (name, type, class) is distinct from a Headquarters-only detail record
   (discovery provenance, contact, location, description, same-party
   references). An operator holding an engagement grant may read only the
   identity of a provider assigned within that engagement; detail, evidence
   and evaluations are never reachable through a grant.
4. **Same-party references** from a provider to a client organization or
   person are optional identity correspondences, at most one, and must share
   the referenced record's class. They transfer no authority, access,
   qualification or data.
5. **Execution method** is a new vocabulary — founder/internal,
   AI-assisted internal, external subcontractor, hybrid, client-retained
   provider coordination, independently retained professional, unresolved —
   distinct from the existing deliverable `delivery_method`, which names how a
   deliverable reached a client.
6. **Evidence, evaluation and maturity are capability-specific**, held on the
   provider–capability pair; evidence and evaluations are append-only.
7. **Current state is derived from history.** Current maturity and sourcing
   posture come from the latest evaluation; current scoping disposition from
   the latest disposition record; assignment readiness from the six recorded
   readiness concerns plus the assignment's own authorized work, scope and
   acceptance basis. None is stored beside its history. Assignment execution
   state alone is stored, moved only by the recording function, on the
   `engagement.status` precedent.
8. **Paid scoping indicated leaves a scoping open**; only *do not pursue*
   closes it.
9. **Planning economics** are numeric planning figures named as fees and
   expected costs, never as amounts, balances or payments, so the backend's
   accounting guard holds without exception.
10. **Extraction and separation.** External Delivery adds no cross-schema
    dependency and no storage object; when Client Engagement is physically
    separated (`adr-0023` gate), provider and scoping records move with the
    schema as Huerta Group operating knowledge. This is recorded in the
    backend's separation-readiness documentation.

## Consequences and limitations

- The Headquarters operator application gains a fifth top-level destination,
  **Providers** at `/providers`; the shell's doctrine of "four situations" is
  restated as five.
- All existing gates apply unchanged; one test assertion (BUILD01-07) is
  widened to a second root and gains write-once and non-mixing assertions.
- Generation One is Headquarters-only. Provider access, client visibility,
  analytics and any automation are not designed and require their own
  authorization.
- Validation evidence: the backend's `npm run verify:full`, its pgTAP suites
  including the three External Delivery suites, and its three synthetic
  probes; in this repository, `npm run validate:architecture` and
  `npm run validate:knowledge`.

## Unresolved institutional dependencies

- **The accepted operating requirement** External Delivery serves is not in
  this repository (`fd-0041` D1); the standard rests on the preserved
  instruments.
- **Subcontract, confidentiality, IP and licensing instruments** remain
  Administration & Compliance and counsel matters; readiness records assert a
  basis and establish no legal sufficiency.
- **Physical separation** of the Client Engagement backend remains gated by
  `docs/launch-readiness-separation.md` in that repository and by `adr-0021`'s
  unresolved backup, expenditure and auth-boundary items.
