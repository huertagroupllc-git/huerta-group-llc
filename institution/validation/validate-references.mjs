#!/usr/bin/env node
/**
 * Deterministic reference validator: every relative Markdown link in
 * the canonical corpus (institution/**, docs/**) and the governed root
 * instruction files (CLAUDE.md, AGENTS.md) must resolve to an existing
 * repository file. External links (http/https/mailto) are out of
 * scope. The workbench is structurally excluded. Offline; exits
 * non-zero with one line per defect.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { resolve, dirname, join, normalize, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const errors = [];

function walkMarkdown(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walkMarkdown(full));
    else if (entry.endsWith(".md")) out.push(full);
  }
  return out;
}

const files = [
  ...["institution", "docs"].flatMap((r) =>
    existsSync(join(root, r)) ? walkMarkdown(join(root, r)) : [],
  ),
  ...["CLAUDE.md", "AGENTS.md", "README.md"]
    .map((f) => join(root, f))
    .filter(existsSync),
];

let links = 0;
for (const file of files) {
  const text = readFileSync(file, "utf8");
  const relFile = relative(root, file).split(sep).join("/");
  const re = /\]\(([^)#\s]+)(#[^)]*)?\)/g;
  let m;
  while ((m = re.exec(text))) {
    const target = m[1];
    if (/^(https?:|mailto:)/.test(target)) continue;
    links++;
    const resolved = normalize(join(dirname(file), target));
    if (!existsSync(resolved))
      errors.push(`${relFile}: broken relative link -> ${target}`);
  }
}

if (errors.length) {
  for (const e of errors) console.error(`✗ ${e}`);
  console.error(`reference validation failed — ${errors.length} defect(s).`);
  process.exit(1);
}
console.log(
  `reference validation passed — ${links} relative links across ${files.length} governed documents resolve.`,
);
