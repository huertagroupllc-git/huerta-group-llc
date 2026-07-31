#!/usr/bin/env node
/**
 * Institutional knowledge validation (ADR-0001).
 *
 * Deterministic, dependency-free verification that the corpus manifest
 * (knowledge/manifest.json) is complete, consistent, and conformant to
 * the metadata schema (knowledge/schema.json). Exits non-zero with one
 * actionable line per defect.
 *
 * Checks:
 *   1. Manifest parses and conforms to the schema (types, required
 *      fields, enums, patterns, lengths, additionalProperties).
 *   2. Every docs/**\/*.md file appears in the manifest exactly once,
 *      and every manifest path exists (exact one-to-one coverage).
 *   3. No manifest path points outside the corpus root.
 *   4. Identifiers are unique; canonical paths are unique.
 *   5. Every relationship target resolves to a manifest identifier,
 *      and no record relates to itself.
 *
 * Run: npm run validate:knowledge
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const SCHEMA_PATH = join(ROOT, "knowledge", "schema.json");
const MANIFEST_PATH = join(ROOT, "knowledge", "manifest.json");
const CORPUS_ROOT = "docs";

const errors = [];
const fail = (msg) => errors.push(msg);

// ---------- load ----------------------------------------------------------

function loadJson(path, label) {
  let raw;
  try {
    raw = readFileSync(path, "utf8");
  } catch {
    fail(`${label}: cannot read ${relative(ROOT, path)}`);
    return null;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    fail(`${label}: invalid JSON — ${e.message}`);
    return null;
  }
}

const schema = loadJson(SCHEMA_PATH, "schema");
const manifest = loadJson(MANIFEST_PATH, "manifest");
if (!schema || !manifest) report();

// ---------- minimal JSON Schema subset validator --------------------------
// Supports exactly the features schema.json uses: type, const, enum,
// required, properties, additionalProperties, items, minItems, minLength,
// maxLength, pattern, $ref (into $defs), and union types via ["a","b"].

function resolveRef(ref) {
  if (!ref.startsWith("#/")) throw new Error(`unsupported $ref: ${ref}`);
  let node = schema;
  for (const part of ref.slice(2).split("/")) node = node?.[part];
  if (!node) throw new Error(`unresolvable $ref: ${ref}`);
  return node;
}

function typeOf(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (Number.isInteger(value)) return "integer";
  return typeof value;
}

function validate(value, node, path) {
  if (node.$ref) node = resolveRef(node.$ref);

  if (node.type) {
    const allowed = Array.isArray(node.type) ? node.type : [node.type];
    const actual = typeOf(value);
    const ok = allowed.some(
      (t) => t === actual || (t === "number" && actual === "integer"),
    );
    if (!ok) {
      fail(`schema: ${path} — expected ${allowed.join("|")}, got ${actual}`);
      return;
    }
  }
  if ("const" in node && value !== node.const) {
    fail(`schema: ${path} — must equal ${JSON.stringify(node.const)}`);
  }
  if (node.enum && !node.enum.some((v) => v === value)) {
    fail(`schema: ${path} — value ${JSON.stringify(value)} not in enum`);
  }
  if (typeOf(value) === "string") {
    if (node.minLength !== undefined && value.length < node.minLength)
      fail(`schema: ${path} — shorter than minLength ${node.minLength}`);
    if (node.maxLength !== undefined && value.length > node.maxLength)
      fail(`schema: ${path} — exceeds maxLength ${node.maxLength}`);
    if (node.pattern && !new RegExp(node.pattern).test(value))
      fail(`schema: ${path} — does not match pattern ${node.pattern}`);
  }
  if (typeOf(value) === "array") {
    if (node.minItems !== undefined && value.length < node.minItems)
      fail(`schema: ${path} — fewer than minItems ${node.minItems}`);
    if (node.items)
      value.forEach((item, i) => validate(item, node.items, `${path}[${i}]`));
  }
  if (typeOf(value) === "object") {
    for (const key of node.required ?? []) {
      if (!(key in value)) fail(`schema: ${path} — missing required "${key}"`);
    }
    for (const [key, child] of Object.entries(value)) {
      const propSchema = node.properties?.[key];
      if (propSchema) {
        validate(child, propSchema, `${path}.${key}`);
      } else if (node.additionalProperties === false) {
        fail(`schema: ${path} — unexpected property "${key}"`);
      }
    }
  }
}

validate(manifest, schema, "manifest");

// ---------- corpus coverage ----------------------------------------------

function walkMarkdown(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walkMarkdown(full));
    else if (entry.endsWith(".md"))
      out.push(relative(ROOT, full).split(sep).join("/"));
  }
  return out;
}

const corpusFiles = new Set(walkMarkdown(join(ROOT, CORPUS_ROOT)));
const records = Array.isArray(manifest.documents) ? manifest.documents : [];

const seenIds = new Map();
const seenPaths = new Map();

for (const rec of records) {
  const label = rec?.id ?? rec?.path ?? "(unidentified record)";

  if (typeof rec?.id === "string") {
    if (seenIds.has(rec.id))
      fail(`uniqueness: duplicate id "${rec.id}"`);
    seenIds.set(rec.id, rec);
  }
  if (typeof rec?.path === "string") {
    if (seenPaths.has(rec.path))
      fail(`uniqueness: duplicate path "${rec.path}"`);
    seenPaths.set(rec.path, rec);

    if (!rec.path.startsWith(`${CORPUS_ROOT}/`))
      fail(`corpus: ${label} — path outside corpus root: ${rec.path}`);
    if (!existsSync(join(ROOT, rec.path)))
      fail(`paths: ${label} — path does not exist: ${rec.path}`);
    if (!corpusFiles.has(rec.path) && existsSync(join(ROOT, rec.path)))
      fail(`corpus: ${label} — path not discovered in corpus walk: ${rec.path}`);
  }
}

for (const file of corpusFiles) {
  if (!seenPaths.has(file))
    fail(`coverage: governed document missing from manifest: ${file}`);
}

// ---------- relationship integrity ----------------------------------------

for (const rec of records) {
  for (const relEntry of rec?.relationships ?? []) {
    if (!seenIds.has(relEntry.target))
      fail(
        `relationships: ${rec.id} — target "${relEntry.target}" does not resolve to a manifest id`,
      );
    if (relEntry.target === rec.id)
      fail(`relationships: ${rec.id} — record relates to itself`);
  }
}

// ---------- report ---------------------------------------------------------

function report() {
  if (errors.length) {
    console.error(`knowledge validation FAILED — ${errors.length} defect(s):`);
    for (const e of errors) console.error(`  ✗ ${e}`);
    process.exit(1);
  }
  console.log(
    `knowledge validation passed — ${records.length} records, ${corpusFiles?.size ?? 0} corpus documents, coverage exact.`,
  );
  process.exit(0);
}

report();
