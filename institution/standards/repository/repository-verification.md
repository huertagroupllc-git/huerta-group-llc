# Repository Verification — Repository Standard

**Classification: Repository Standard.** Defines the canonical
verification gate for **this repository** (Founder Office
determinations D-4 and D-7; fd-0002). Repository Standards govern this
repository only.

## The canonical gate

```
npm run verify
```

`npm run verify` is the single authoritative verification command. It
composes, in order:

1. `validate:knowledge` — corpus manifest: schema, exact coverage of
   the canonical roots (`institution/`, `docs/`) plus the governed root
   files (`CLAUDE.md`, `AGENTS.md`), uniqueness, relationship
   integrity.
2. `validate:architecture` — capability registry integrity.
3. `validate:methods` · `validate:ip` · `validate:education` — domain
   registries and governance guards.
4. `validate:determinations` — determinations register coverage.
5. `validate:evolution` — Institutional Evolution Log integrity.
6. `validate:references` — every relative Markdown link in the
   canonical corpus and root instruction files resolves.
7. `lint` — ESLint.
8. `tsc --noEmit` — TypeScript.
9. `build` — production build (verifies the public route inventory
   still builds; website behavior neutrality is verified against the
   deployed site after merge).

## Rules

- The gate must pass **before any push to `main`**. This is the single
  consolidation point for the validation-gate requirements stated at a
  high level in the Development Standards; where earlier documents
  restate gate contents, this standard's composition is authoritative
  for what "the gate" means (D-7).
- Validators are deterministic, offline, and dependency-free; a
  failure prints one actionable line per defect and exits non-zero.
- The gate is mechanically enforced by CI
  (`.github/workflows/verify.yml`) on every push and pull request.
  Local runs remain required before push; CI is the enforcement
  backstop, not a substitute (D-4). Branch-protection configuration is
  a platform-side setting reserved to separate Founder Office
  authorization.
- Weakening, bypassing, or deleting a valid check to produce a pass is
  prohibited (Bounded Autonomous Completion and Verification
  Standard).
