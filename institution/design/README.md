# institution/design/ — Design System Reference-Implementation Records

**Classification: Repository Standard** (this charter is
repository-scoped). Established under fd-0005 ("Design System
Implementation Unblocked"). This area holds the repository records of
Design System reference-implementation work. **Nothing here is
institutional Design System doctrine**: the Design System Foundation v1
text remains deferred (fd-0001, fd-0004 deficiency 6), and no record in
this area may substitute for it.

## Contents

- [`website-phase1-inventory.md`](website-phase1-inventory.md) — the
  Website Phase 1 existing-state inventory. **Approved implementation
  evidence, not institutional Design System authority** (fd-0005 rule
  1). It records what the implementation did at the time of survey;
  it approves nothing.
- `decisions/` — **Design Decision Records (DDRs)**, `ddr-NNNN-<slug>.md`,
  sequential and never reused. A DDR records a Design System decision
  made under the fd-0005 decision rules (narrowest responsible
  implementation decision where governance is silent). Required fields:
  Identifier · Date · Context · Decision · Alternatives · Rationale ·
  Affected implementation · Validation/evidence · Status · Related
  governance. A DDR creates no authority beyond the decision it
  records and never elevates an implementation decision into an
  institutional standard.
- `recommendations/` — **Governance Recommendations (GRs)**,
  `gr-NNNN-<slug>.md`. Non-authoritative observations preserved for
  future governance work: ambiguities, missing non-blocking rules,
  patterns that may warrant standardization, authority-boundary
  observations. A GR proposes; only the appropriate authority
  disposes.

## Maintenance

Records are append-only with corrections by later records; every
document here is a governed corpus member (manifest entry in the same
change; `npm run verify` must pass). Manifest classification:
Institutional Record (non-governing) for inventory/DDRs/GRs; this
charter is a Repository Standard scoped to this repository only.
