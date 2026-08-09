# ed-0011 — Educational Technology and AI Boundary Standard v1

**Classification: Approved Methodology, Governance, and Policy**

- **Record:** `ed-0011` · v1.0 · `technology_boundary_standard`
- **Authority basis:** Education & Workforce Development Foundation v1,
  §16 (per §18.11)
- **Source:** [`education-workforce-development-foundation-v1.md`](../education-workforce-development-foundation-v1.md)
- **Disclosure:** internal
- **Status:** approved internal standard · governance record

## Purpose and scope

Defines what educational technology may support and what it may not
determine independently — records, delivery, assessment support, AI
assistance, human review, privacy, model independence, traceability,
and prohibited automated decisions. The Foundation source (§16) is
authoritative; this record summarizes it and is corrected by it
wherever they differ.

## Approved content

**Permitted functions (§16.1)** — subject to later approval,
twenty-one supported functions from content delivery, learning
records, progress tracking, practice, assessments, evidence
submission, feedback, and collaboration through knowledge retrieval,
search, recommendations, AI-assisted learning, version identification,
source traceability, quality review, and continuing-development
records.

**Technology must not independently determine (§16.2):** educational
doctrine, curriculum quality, methodological fidelity, assessment
validity, competency definitions, credential standards,
high-consequence learner outcomes, certification, organizational
capability, legal eligibility, professional qualification, or public
claims.

**Human review (§16.3).** Human review remains available and
proportionate to consequence; higher-consequence decisions require
stronger oversight, evidence, traceability, and authority.

**Learner privacy (§16.4).** Educational technology is designed around
data minimization, purpose limitation, access control, appropriate
retention, security, transparency, configurable disclosure, and
separation of educational and commercial records where appropriate.

**AI limitations (§16.5).** AI output may be incomplete, inaccurate,
biased, contextually inappropriate, unverifiable, or overly confident;
AI-supported education preserves source awareness, uncertainty, human
responsibility, review, escalation, appropriate limitations, and
proportionate explainability.

**Model-provider independence (§16.6).** Educational doctrine,
competency definitions, and core institutional records never depend on
a single AI model or provider; provider-specific implementations enter
later only through replaceable technical adapters.

**Traceability (§16.7).** Consequential AI-assisted outputs support
traceability appropriate to use: source references, prompt or
instruction context, model or system identity, version, timestamp,
human review, material edits, and final authority.

**Automated decisions (§16.8).** No automated credential,
certification, high-consequence competency, disciplinary, admission,
eligibility, or organizational-certification decision is authorized.

**Vendor neutrality (§16.9).** This foundation selects no LMS, AI
provider, assessment vendor, credential provider, video platform,
collaboration platform, final data architecture, or hosting model.

## Limitations and open questions

- Summary record: Foundation §16 is authoritative and corrects this
  record wherever they differ.
- Production educational technology architecture remains intentionally
  incomplete (§4.13); every permitted §16.1 function awaits separate
  authorization — none is implemented.

## Technical implementation

Approved as boundary governance only. No LMS, runtime system, vendor
selection, AI integration, or automated decision exists or is
authorized; any future runtime system requires ADR-0003 authorization
and ADR-0005 environment isolation.
