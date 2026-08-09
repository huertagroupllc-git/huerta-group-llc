#!/usr/bin/env node
/**
 * Canonical repository verification gate (npm run verify) — see
 * institution/standards/repository/repository-verification.md.
 *
 * Composition is deterministic: every package script named
 * "validate:*" (in declaration order), then lint, TypeScript, and the
 * production build. Any failure fails the gate with a faithful exit
 * code — no step's result is swallowed.
 */
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const pkg = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));

const steps = [
  ...Object.keys(pkg.scripts)
    .filter((s) => s.startsWith("validate:"))
    .map((s) => ["npm", ["run", "--silent", s]]),
  ["npm", ["run", "--silent", "lint"]],
  ["npx", ["tsc", "--noEmit"]],
  ["npm", ["run", "--silent", "build"]],
];

let failed = 0;
for (const [cmd, args] of steps) {
  const label = `${cmd} ${args.filter((a) => a !== "--silent").join(" ")}`;
  const res = spawnSync(cmd, args, { cwd: root, stdio: "inherit" });
  if (res.status !== 0) {
    console.error(`✗ gate step failed: ${label}`);
    failed++;
  }
}

if (failed) {
  console.error(`repository verification FAILED — ${failed} gate step(s) failed.`);
  process.exit(1);
}
console.log("repository verification passed — all gate steps green.");
