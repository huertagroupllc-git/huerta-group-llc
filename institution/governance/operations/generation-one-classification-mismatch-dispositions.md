# Generation One — Governance-Classification Mismatch Dispositions

**Classification: Institutional Record** — disposition record (evidentiary,
non-governing). Returned by Institutional Platform Development to the Founder
Office.

- **Instrument:** Generation One Pre-Production Completion & Production
  Readiness, execution package, Founder Office → Institutional Platform
  Development.
- **Date:** 2026-08-19.
- **Governing determination:** [`fd-0014`](../determinations/fd-0014-generation-one-construction-authorization.md).
- **Disposition of all four:** **formally dispositioned, not corrected.**

## Why none of the four was corrected

The Founder Office directed that the mismatches be reconciled or formally
dispositioned **without inventing new controlled vocabulary and without
distorting implementation truth to fit stale governance vocabulary**.

Each of the four is the same shape: the implementation truth is known and
undisputed, and the governed enum has no value that expresses it. There are
exactly two ways to close such a gap — change the value, or change the
vocabulary — and both are foreclosed here. Changing the value would state
something untrue. Changing the vocabulary is expressly prohibited.

So all four are recorded, with the true position stated in prose, and the
`fd-0014` determination left controlling over the registry value. **A registry
value that is stale is a known limitation of the register. A registry value
that is false is a defect in the institution's own record**, and the
distinction is worth the discomfort of leaving four fields visibly out of date.

These are vocabulary gaps in a metadata schema. **None of them is authority to
change institutional doctrine**, and none is treated as such here.

---

## Mismatch 1 — Architectural disposition

| | |
| --- | --- |
| **Mismatch** | `operations-systems.architecturalDisposition` reads `future_internal_application`. The application is not future. |
| **Governing record** | `institution/metadata/registries/capability-registry.json`, constrained by `institution/metadata/schemas/capability-schema.json`. |
| **Actual truth** | A separate internal application exists, runs, and has been validated in a governed pre-production environment. It does not yet run in production, and production is not authorized. |
| **Reason for mismatch** | The enum offers `current_public_application`, `current_server_capability` and `current_repository_artifacts` for things that run today, and `future_internal_application` for an internal application that does not. It has no value for **an internal application that exists but is not yet in production** — a state the vocabulary was written before anything could occupy. |
| **Disposition** | **Formally dispositioned. Value left unchanged.** `future_internal_application` is stale but not false: the field describes where the capability *would* run, and it does not run in production. The alternatives are worse — `unresolved` would discard a decided architecture, and `current_server_capability` would assert production operation that has not been authorized. |
| **Remaining Founder Office action** | Optional. If the register is to distinguish *built but not launched* from *not built*, the enum needs a value for it — an amendment to `capability-schema.json`. Nothing depends on it: `fd-0014` and `evo-0005` both state the position plainly. |

## Mismatch 2 — Repository disposition

| | |
| --- | --- |
| **Mismatch** | `operations-systems.repositoryDisposition` reads `future_separate_repository`. The repository now exists. |
| **Governing record** | Same registry and schema. Determined by ADR-0008. |
| **Actual truth** | The runtime lives at `huertagroupllc-git/huerta-group-operations`, a **private** repository, separate from the public website's repository and from this corpus, as ADR-0008 requires. Established 2026-08-19 under the Founder Office authorization in this instrument. |
| **Reason for mismatch** | The enum's only value meaning "a separate repository of its own" carries a `future_` prefix. Its siblings — `current_repository`, `venture_repository`, `external_provider` — describe *which* repository, not *when*. The prefix is an artefact of the value having been written while no such repository existed. |
| **Disposition** | **Formally dispositioned. Value left unchanged.** It is the only value that names the correct arrangement. The prefix is now inaccurate; the arrangement it names is exactly right. No other value is closer, and inventing `current_separate_repository` is prohibited. |
| **Remaining Founder Office action** | Optional, and the cheapest of the four to resolve: dropping the `future_` prefix from this one value would make it accurate for both states. That is a schema amendment and is not made here. |

## Mismatch 3 — Identity requirement

| | |
| --- | --- |
| **Mismatch** | `operations-systems.identityRequirement` reads `future-required`. Identity is implemented and genuinely required. |
| **Governing record** | Same registry and schema. |
| **Actual truth** | Authentication is implemented and mandatory. Every route requires a session, row level security is the enforcement layer, and an identity without an actor record can read nothing. Provider selected at ADR-0020. |
| **Reason for mismatch** | The enum is `none`, `future-required`, `unresolved` — three values written when no capability required identity, so the vocabulary never needed to express *required now*. **This is the sharpest of the four**: `future-required` does not merely read as stale, it reads as false, because identity is not in the future. |
| **Disposition** | **Formally dispositioned. Value left unchanged, under protest.** `none` would be flatly untrue and would misrepresent the security posture of the one capability holding operationally consequential data. `unresolved` would suggest an open question that ADR-0020 closed. `future-required` at least preserves that identity is required; only its tense is wrong. |
| **Remaining Founder Office action** | **Recommended rather than optional.** A `required` value should be added to the `identityRequirement` enum. Until it is, the registry understates the access posture of the only authenticated system the institution operates, and the accurate statement lives only here, in `fd-0014`, and in ADR-0020. |

## Mismatch 4 — Evidence paths

| | |
| --- | --- |
| **Mismatch** | `operations-systems.evidencePaths` cites governance artifacts rather than implementation, because `validate-architecture.mjs` requires every path to exist **in this repository**. |
| **Governing record** | `institution/validation/validate-architecture.mjs` (the rule: any capability at maturity `operational`, `partial` or `standby` must declare evidence paths that exist on disk) and `capability-schema.json`. |
| **Actual truth** | The implementation evidence is 46 tracked files in `huertagroupllc-git/huerta-group-operations` at commit `51a7051` — migrations, application, validation suites, and documentation. None of it is in this repository, and ADR-0008 requires that it not be. |
| **Reason for mismatch** | The validator was written when every capability's implementation lived here. ADR-0008 made that assumption false for the first time. The rule's *intent* — that a claim of implementation must be evidenced rather than asserted — remains entirely sound; only its assumption about location has been overtaken. |
| **Disposition** | **Formally dispositioned. The existing precedent followed.** `publishing-platform` already carries `maturity: operational`, `repositoryDisposition: venture_repository`, and an in-corpus governing document as its evidence path. Generation One is treated the same way. The substantive evidence — 83 pgTAP assertions, 55 runtime checks, a tested restore — is recorded in the completion and readiness reports, and the registry points at those. |
| **Remaining Founder Office action** | Optional. If the validator is to accept out-of-repository implementation honestly, it needs a way to record an external evidence reference — a repository and commit — distinguishable from an in-corpus path. That is a Development Standards amendment and is not made here. Until then, two capabilities cite governance artifacts as evidence, and this record says why. |

---

## What did not happen

No controlled vocabulary was invented. No implementation truth was downgraded
to fit a stale classification. No historical registry state was rewritten —
every prior posture remains recorded in the capability entry, marked as
historical. No metadata mismatch was treated as authority to change
institutional doctrine.

## Net position

Four fields in one registry entry are stale. The true position is recorded in
`fd-0014`, in `evo-0005`, in ADR-0020, in the Construction & Validation
Completion Report, in the Production Readiness Report, and here. **A reader who
consults only the enum values will understate what exists; a reader who
consults the record will not.**
