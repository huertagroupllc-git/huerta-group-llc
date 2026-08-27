#!/usr/bin/env node
/**
 * First-client readiness mechanics test for the Client Engagement P0 backbone.
 *
 * Runs every fixture scenario through validate-engagements.mjs and asserts the
 * expected accept/refuse behaviour. The point is not that the validator runs —
 * it is that the backbone STOPS TRUTHFULLY where a mandatory prerequisite is
 * absent, and does not stop where none is.
 *
 * Fixtures contain hypothetical structural placeholders only. No stakeholder
 * testimony, client authority, executed acceptance, confidential source
 * material, diagnostic evidence, finding, recommendation, client decision,
 * deliverable, or substantive client fact is represented anywhere in them.
 *
 * Exits non-zero on any scenario whose behaviour differs from expectation.
 */
import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..", "..");
const dir = resolve(here, "fixtures", "engagement");
const expected = JSON.parse(readFileSync(resolve(dir, "expected.json"), "utf8"));

const names = readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "expected.json")
  .map((f) => f.replace(/\.json$/, "")).sort();

let pass = 0;
const failures = [];
for (const name of names) {
  if (!(name in expected)) { failures.push(`${name}: fixture has no expected result`); continue; }
  const rel = `institution/validation/fixtures/engagement/${name}.json`;
  const r = spawnSync(process.execPath, [resolve(here, "validate-engagements.mjs"), rel, "--quiet"],
    { cwd: root, encoding: "utf8" });
  const got = r.status === 0 ? 0 : 1;
  const want = expected[name];
  if (got === want) { pass++; console.log(`  ✓ ${name} — ${want === 0 ? "accepted" : "refused"} as expected`); }
  else {
    failures.push(`${name}: expected ${want === 0 ? "accepted" : "refused"}, got ${got === 0 ? "accepted" : "refused"}`);
    console.error(`  ✗ ${name} — expected ${want === 0 ? "accepted" : "refused"}, got ${got === 0 ? "accepted" : "refused"}`);
    if (r.stderr) console.error(r.stderr.split("\n").slice(0, 6).map((l) => `      ${l}`).join("\n"));
  }
}
for (const n of Object.keys(expected)) if (!names.includes(n)) failures.push(`${n}: expected result has no fixture`);

if (failures.length) {
  console.error(`engagement scenario tests FAILED — ${failures.length} defect(s)`);
  process.exit(1);
}
console.log(`engagement scenario tests passed — ${pass} scenario(s), stop-conditions and accept-conditions both verified.`);
