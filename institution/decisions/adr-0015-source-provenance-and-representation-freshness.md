# ADR-0015 — Source Provenance and Representation Freshness

**Classification: Development Standards and Architecture Decisions**

- **Status:** Accepted
- **Generation One ADR program:** ADR-G1-08

## Context

Foundation §20–§23 separate Current-State Ownership (source functions)
from Operational Representation Responsibility (Corporate Operations), and
§22 prescribes a conflict procedure. `fd-0012` determines freshness
qualitatively and forbids a universal numeric SLA. Requirements Report
Capability 6 calls provenance "foundational, not optional," and §18.1
names shadow systems as a risk whose control is provenance "from
inception."

## Options considered

1. **Optional provenance fields, populated where convenient.** Rejected —
   optional provenance decays to absent provenance, and unsourced
   representation is how Headquarters silently becomes a competing source
   of truth.
2. **A numeric freshness SLA per domain.** Rejected — expressly forbidden
   by `fd-0012` and Foundation §32.4.
3. **Required provenance plus qualitative freshness — accepted.**

## Decision

**Provenance is required at creation on every represented fact**, and
comprises: authoritative source domain · source function or venture ·
source record or reference · as-of or confirmed-at where meaningful ·
representation owner · known uncertainty or staleness. A represented fact
without provenance is **invalid**, not merely incomplete.

**The representation owner is always Corporate Operations**, and the
source domain is **never** Corporate Operations for another function's
facts. The authoring vocabulary permits *"Administration & Compliance has
determined X, creating operational consequence Y"* and provides **no way
to express** *"Corporate Operations has determined X"* about another
function's domain (Foundation §21). The boundary lives in what the form
permits, not in guidance text.

**Freshness is qualitative.** Corporate Operations sets a per-domain
confirmation expectation — qualitative, revisable, per source domain — and
the interface surfaces "unconfirmed since {date}" against it. The
governing question stays the Founder Office's own: would continued
reliance mislead responsible corporate action? **No global staleness
threshold, numeric freshness score, automatic expiry, or system-generated
staleness alert exists.**

**Correction behaviour.** Corrections are new entries referencing what
they correct (OSPA S10 §10.35); prior representations are never
overwritten. Where confirmation is unresolved, Foundation §22 governs:
preserve the last confirmed authoritative state, mark confirmation
unresolved, seek clarification, and never silently substitute
Headquarters' own conclusion. **"Confirmation unresolved" is therefore a
representable condition** — a system that cannot express doubt expresses
false certainty instead.

## Consequences and limitations

Every authoring path costs more because provenance cannot be deferred.
Freshness cannot be enforced mechanically, by design — it is a
responsibility with a visible indicator, not a rule. This is the seam
where the financial and administrative visibility boundaries will attach
once determined; the seam is designed, the policy is not. Nothing is
implemented.

## Unresolved institutional dependencies

The financial-visibility boundary — which Accounting outputs are exposed,
to be determined **with Accounting**, not inferred by Development — and
the Administration & Compliance visibility boundary (`fd-0013` §8;
Requirements Report §19 Q6 and Q7). Both attach to this seam without
changing it.
