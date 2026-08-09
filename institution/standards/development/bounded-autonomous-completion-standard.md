# Bounded Autonomous Completion and Verification Standard

**Classification: Development Standards and Architecture Decisions**

This is an operational development-process standard. It is **not**
constitutional law and does not alter the
[governing-reference hierarchy](../repository/documentation-index.md#hierarchy-of-authority). It is
subordinate to the [Huerta Group LLC
Constitution](../../governance/constitution/huerta-group-constitution.md) and the [Vision
Foundation for
Development](../../governance/strategic/vision-foundation-for-development.md), and it
operates at the same tier as, and alongside, the [Development
Standards](development-standards.md). Where this standard and any higher
authority appear to conflict, the higher authority prevails and the
conflict is escalated, not resolved silently.

## Purpose

Establish loop engineering as the default execution method for
consequential Huerta Group LLC development tasks.

The objective is to permit a development model to investigate, implement,
test, inspect, repair, and verify an authorized task with minimal human
intervention while preserving Company authority boundaries, governing
references, production safeguards, and truthful completion reporting.

## Applicability

This standard applies to **consequential development tasks** — tasks whose
outcome materially affects the repository, the deployed system, data, or
users. It governs execution method and verification. It does not define
Company identity, strategy, or business direction; that authority belongs
to the governing references above it.

Generic instructions such as "test everything" or "continue until perfect"
are insufficient on their own. Consequential tasks require observable
acceptance criteria (see *Requirements for Future Task Prompts*).

## Required Model Configuration

- **Builder model and tools:** the model and tool configuration
  authorized by the Founder Office for the assignment. This standard
  binds no permanent model; each task instrument states the current
  authorized configuration. (Amended per Founder Office determination
  D-2, recorded in fd-0002.)
- **Effort level:** max.
- **Execution budget:** work autonomously toward verified completion for up
  to approximately **30 minutes** per assigned loop-engineering task.

The 30-minute budget is a maximum, not a requirement to consume the full
period. Finish immediately when all defined acceptance criteria have
passed. Do not create unnecessary work, refactor unrelated code, or
continue modifying a valid implementation merely to consume time.

## Governing Authority

Before consequential work, consult the applicable governing references in
the established repository hierarchy. Development implements authorized
decisions. It does not independently create Company strategy,
constitutional meaning, brand direction, consulting methodology,
institutional policy, or product authority.

## Default Execution Method

Every consequential development task shall use this bounded autonomous
completion loop:

1. Read governing references and inspect the repository.
2. Determine the exact outcome, scope, constraints, exclusions,
   dependencies, and acceptance criteria.
3. Investigate the existing implementation before changing code.
4. Create an internal implementation and verification plan.
5. Implement the smallest complete solution.
6. Run applicable automated validation.
7. Inspect the implementation against the original task and every
   acceptance criterion.
8. Identify concrete defects, omissions, regressions, or unsupported
   claims.
9. Repair verified defects within scope.
10. Rerun relevant tests and regression checks.
11. Reinspect the repaired implementation.
12. Repeat until all criteria pass or an explicit stop condition is
    reached.
13. Return an evidence-based completion report.

## Builder–Inspector Separation

Separate implementation and final inspection whenever the available Claude
Code environment supports subagents or isolated review contexts.

The **builder** performs investigation, planning, implementation, and
repair.

A **fresh inspector** independently reviews:

- the original task;
- applicable governing references;
- acceptance criteria;
- the repository diff;
- relevant source files;
- automated validation results;
- rendered or runtime behavior where applicable.

The inspector classifies findings using exactly these six classifications:

- **PASS**
- **FAIL_REPAIRABLE**
- **BLOCKED_REQUIRES_HUMAN_AUTHORITY**
- **BLOCKED_BY_ENVIRONMENT**
- **OUT_OF_SCOPE_CHANGE**
- **GOVERNANCE_OR_REQUIREMENTS_CONFLICT**

A task is **not complete** while any required criterion remains
`FAIL_REPAIRABLE`.

## Verification Requirements

Select validation according to the task.

- Successful linting or compilation alone does **not** establish
  completion.
- Visual appearance alone does **not** establish functional completion.
- Subjective statements do **not** replace evidence.

Verification must exercise the actual behavior the task affects — runtime,
data, or rendered output as appropriate — not merely confirm that the code
builds.

## Repair Loop

For every repairable defect:

1. Record the failed criterion.
2. Diagnose the cause.
3. Make the narrowest complete repair.
4. Rerun directly relevant validation.
5. Rerun broader regression validation where appropriate.
6. Submit the repair for fresh inspection.
7. Continue until the criterion passes or a stop condition applies.

Do not weaken, delete, bypass, or alter a valid test — or weaken the
approved requirements — merely to produce a passing result.

## Time and Iteration Controls

Use approximately 30 minutes as the maximum autonomous work budget.

Stop and report a blocker when:

- the same underlying defect remains after **three** well-founded repair
  attempts;
- credentials, permissions, services, data, or requirements are
  unavailable;
- further work requires Company authority;
- further work exceeds scope;
- a governing-reference conflict cannot be resolved;
- the remaining action is destructive, irreversible, security-sensitive,
  financially consequential, or launch-sensitive and was not expressly
  authorized.

## Protected Actions

Do not perform protected actions without explicit task authorization,
including:

- altering or reconstructing constitutional substance;
- creating Company strategy, policy, methodology, or brand direction;
- changing the governing-reference hierarchy;
- destructive database operations;
- deleting production data;
- weakening security;
- exposing or committing production credentials;
- activating paid or external production services;
- connecting or migrating the official domain;
- changing canonical-domain launch strategy;
- authorizing production launch;
- unrelated architectural changes;
- scope expansion;
- unrelated file modifications.

## Clarification Policy

Do not interrupt the Founder Office for routine, reversible implementation choices
that can be resolved safely from governing references, architecture,
development standards, repository conventions, and acceptance criteria.

Request human authority only when ambiguity materially affects Company
meaning, governance, brand direction, product scope, data integrity,
security, financial commitments, launch status, irreversible architecture,
or destructive production behavior.

## Definition of Done

A task may be reported complete only when:

1. Every required deliverable exists.
2. Every defined acceptance criterion passes.
3. Applicable automated checks pass.
4. Relevant runtime and visual behavior has been inspected.
5. Independent inspection reports no unresolved repairable failures.
6. No unauthorized scope expansion occurred.
7. No governing conflict remains unresolved.
8. Documentation is updated when required.
9. Remaining limitations are disclosed.
10. Completion is supported by evidence.

"100% complete" means all explicitly defined acceptance criteria have been
satisfied and verified. It does not mean no undiscovered defect could ever
exist.

Evidence-based completion is mandatory: a task must never be reported
`COMPLETE` while any required criterion remains failed or unverified.

## Required Completion Report

Report:

1. Final status, one of:
   - **COMPLETE**;
   - **BLOCKED**;
   - **PARTIALLY_COMPLETE_DUE_TO_AUTHORIZED_STOP**.
2. Outcome delivered.
3. Files created, modified, or deleted.
4. Material implementation decisions.
5. Commands and validations executed.
6. Result of each acceptance criterion.
7. Independent inspector result.
8. Repair cycles and defects corrected.
9. Unresolved risks or environmental limitations.
10. Deployment status.
11. Any decision requiring Founder Office authority.

Never report `COMPLETE` while a required criterion remains failed or
unverified.

## Requirements for Future Task Prompts

Every consequential XML task prompt must include task-specific sections
for:

- authorized outcome;
- governing references;
- current-state inspection;
- in-scope work;
- out-of-scope work;
- protected actions;
- acceptance criteria;
- required tests and inspections;
- builder–inspector execution;
- repair-loop behavior;
- approximately 30-minute execution budget;
- stop and escalation conditions;
- definition of done;
- evidence-based completion report.

Acceptance criteria must be observable. Generic instructions such as "test
everything" or "continue until perfect" are insufficient without
observable acceptance criteria.
