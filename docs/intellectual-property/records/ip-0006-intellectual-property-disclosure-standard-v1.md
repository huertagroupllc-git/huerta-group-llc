# ip-0006 — Intellectual Property Disclosure Standard v1

**Classification: Approved Methodology, Governance, and Policy**

- **Record:** `ip-0006` · v1.0 · `standard`
- **Authority basis:** Intellectual Property Foundation v1, §6
- **Source:** [`intellectual-property-foundation-v1.md`](../intellectual-property-foundation-v1.md)
- **Disclosure:** internal
- **Status:** approved internal standard · governance record

## Purpose and scope

Defines approved disclosure classifications and preserves separate
treatment of ownership, rights, origin, client derivation, educational
adaptation, publishing adaptation, and software implementation — for
all institutional IP records and authorized representations. The
Foundation source (§6) is authoritative; this record summarizes it and
is corrected by it wherever they differ.

## Approved content

**Disclosure is separate from ownership (§6.1).** Disclosure
classification defines who may access, use, receive, or publish an
asset. It does not determine who created it, who owns it, whether it is
legally protectable, whether rights have been assigned, whether it may
be licensed, or whether it has commercial value. The source's own
examples: a public asset may remain institutionally governed IP; a
confidential asset may be owned by a third party; a proprietary asset
may have unresolved legal ownership.

**Approved disclosure classifications (§6.2):** `public` (approved for
unrestricted public access or distribution in the authorized form —
never authorizing alteration, relicensing, commercial exploitation, or
use beyond applicable rights) · `internal` (restricted to authorized
Huerta Group institutional or corporate use — not necessarily
confidential, proprietary, or legally protected) · `confidential`
(restricted because unauthorized disclosure may create institutional,
contractual, legal, commercial, technical, client, security, or
reputational harm; reason and handling authority should be recorded) ·
`proprietary` (identified as containing Huerta Group proprietary
institutional substance or interest — an institutional governance
status that does not itself establish a legally enforceable right) ·
`restricted` (access limited to explicitly authorized persons, roles,
systems, engagements, or purposes, where other classifications are
insufficiently precise). The schema's additional `unresolved` value is
a conservative technical state from the implementing vocabulary, not a
sixth §6.2 classification.

**Origin and adaptation designations (§6.3)** are not disclosure
levels; they are relationship or use-context designations recorded
separately. *Client-Derived*: the asset contains knowledge, evidence,
structure, data, experience, or adaptation derived from client work;
client-derived assets require documented review of contractual
restrictions, confidentiality, personal or regulated data, client
ownership, preexisting materials, generalization or de-identification,
and authorized reuse — and client-derived status does not establish
Huerta Group ownership. *Educational Adaptation*: adapted for
instruction, learning, practice, or assessment; traceable to the
underlying source asset where applicable. *Publishing Adaptation*:
adapted for publication or external communication; public release
authority is separately recorded. *Software Implementation*: a
technical implementation of another institutional asset; implementation
and underlying asset remain distinguishable and related.

The schema's fuller origin enum (`original_institutional` ·
`client_derived` · `third_party_derived` · `jointly_developed` ·
`acquired` · `unknown` · `not_applicable`) and adaptation enum
(`educational_adaptation` · `publishing_adaptation` ·
`software_implementation` · `brand_implementation` ·
`method_adaptation` · `none` · `unresolved`) come from the implementing
vocabulary; they record §6.3 designations plus conservative technical
states, and no origin or adaptation value ever implies ownership.
Client and third-party interests are recorded through the schema's
interest flags with explicit review-state metadata.

**Multiple classifications (§6.4).** An asset may carry one primary
disclosure classification, additional handling restrictions, origin
designations, adaptation designations, and documented jurisdictional or
contractual restrictions — and the repository must not collapse these
into a single field or inference.

**Ownership and rights recording** (conservative; factual states and
evidence only): ownership statuses from `not_evaluated` through
`legally_confirmed_*` (legally confirmed values require authoritative
Corporate Headquarters or legal evidence references); rights statuses
record evidence condition (`agreement_reference_recorded`,
`registration_reference_recorded`, `restrictions_known`,
`legally_reviewed`, …), never rights conclusions. This standard makes
no determination of copyright, patentability, trademark rights,
trade-secret status, inventorship, authorship, work-for-hire,
assignment validity, or chain of title.

## Limitations and open questions

- Formal criteria for public disclosure of any IP record await IP
  authority; no record carries `public` disclosure.

## Technical implementation

Approved now; the validator rejects unauthorized public disclosure,
evidence-free legal confirmation, and missing client-derived review
states.
