#!/usr/bin/env node
/**
 * Architecture validation (internal software architecture foundation).
 *
 * Deterministic, dependency-free verification that the capability
 * registry (institution/metadata/registries/capability-registry.json) conforms to its schema
 * (institution/metadata/schemas/capability-schema.json) and is referentially coherent.
 * Exits non-zero with one actionable line per defect.
 *
 * Checks:
 *   1. Registry parses and conforms to the schema (types, required
 *      fields, enums, patterns, lengths, additionalProperties).
 *   2. Capability identifiers are unique.
 *   3. Every required capability domain is present exactly once.
 *   4. dependsOn targets resolve; no self-dependency; no cycles.
 *   5. governingReferences and evidencePaths exist on disk.
 *   6. Maturity/evidence coherence: operational|partial|standby
 *      capabilities must declare evidencePaths.
 *
 * Run: npm run validate:architecture
 */

import { readFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const SCHEMA_PATH = join(ROOT, "institution", "metadata", "schemas", "capability-schema.json");
const REGISTRY_PATH = join(ROOT, "institution", "metadata", "registries", "capability-registry.json");

/** The capability domains the architecture requires, exactly once each. */
const REQUIRED_CAPABILITIES = [
  "public-website",
  "inquiry-intake",
  "notification-service",
  "institutional-knowledge-foundation",
  "institutional-knowledge-system",
  "method-library",
  "ip-repository",
  "education-platform",
  "publishing-platform",
  "ai-platform",
  "operations-systems",
  "managed-service-infrastructure",
  "client-delivery-systems",
  "research-systems",
  "identity-and-access",
  "shared-data-services",
  "platform-operations",
  "official-launch-layer",
];

const errors = [];
const fail = (msg) => errors.push(msg);

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
const registry = loadJson(REGISTRY_PATH, "registry");
if (!schema || !registry) report();

// ---------- minimal JSON Schema subset validator (same subset as the
// knowledge validator: type/union, const, enum, required, properties,
// additionalProperties, items, minItems, min/maxLength, pattern, $ref) --

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
  if ("const" in node && value !== node.const)
    fail(`schema: ${path} — must equal ${JSON.stringify(node.const)}`);
  if (node.enum && !node.enum.some((v) => v === value))
    fail(`schema: ${path} — value ${JSON.stringify(value)} not in enum`);
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
    for (const key of node.required ?? [])
      if (!(key in value)) fail(`schema: ${path} — missing required "${key}"`);
    for (const [key, child] of Object.entries(value)) {
      const propSchema = node.properties?.[key];
      if (propSchema) validate(child, propSchema, `${path}.${key}`);
      else if (node.additionalProperties === false)
        fail(`schema: ${path} — unexpected property "${key}"`);
    }
  }
}

validate(registry, schema, "registry");

// ---------- identity, coverage --------------------------------------------

const caps = Array.isArray(registry.capabilities) ? registry.capabilities : [];
const byId = new Map();

for (const cap of caps) {
  if (typeof cap?.id !== "string") continue;
  if (byId.has(cap.id)) fail(`uniqueness: duplicate capability id "${cap.id}"`);
  byId.set(cap.id, cap);
}

for (const required of REQUIRED_CAPABILITIES) {
  const count = caps.filter((c) => c?.id === required).length;
  if (count === 0) fail(`coverage: required capability missing: ${required}`);
  if (count > 1)
    fail(`coverage: required capability duplicated: ${required} (${count}×)`);
}

// ---------- dependencies: resolution, self-reference, cycles --------------

for (const cap of caps) {
  for (const dep of cap?.dependsOn ?? []) {
    if (dep === cap.id)
      fail(`dependencies: ${cap.id} — depends on itself`);
    else if (!byId.has(dep))
      fail(`dependencies: ${cap.id} — unknown dependency "${dep}"`);
  }
}

// Cycle detection via iterative DFS with coloring.
const WHITE = 0, GRAY = 1, BLACK = 2;
const color = new Map([...byId.keys()].map((id) => [id, WHITE]));

function findCycle(startId) {
  const stack = [[startId, 0]];
  const pathIds = [startId];
  color.set(startId, GRAY);
  while (stack.length) {
    const [id, idx] = stack[stack.length - 1];
    const deps = (byId.get(id)?.dependsOn ?? []).filter((d) => byId.has(d));
    if (idx < deps.length) {
      stack[stack.length - 1][1]++;
      const next = deps[idx];
      if (color.get(next) === GRAY) {
        const cycleStart = pathIds.indexOf(next);
        return [...pathIds.slice(cycleStart), next];
      }
      if (color.get(next) === WHITE) {
        color.set(next, GRAY);
        stack.push([next, 0]);
        pathIds.push(next);
      }
    } else {
      color.set(id, BLACK);
      stack.pop();
      pathIds.pop();
    }
  }
  return null;
}

for (const id of byId.keys()) {
  if (color.get(id) === WHITE) {
    const cycle = findCycle(id);
    if (cycle) {
      fail(`dependencies: cycle detected — ${cycle.join(" → ")}`);
      // Clear residual in-progress marks so nodes that merely reach the
      // reported cycle are not misreported as separate cycles.
      for (const [nodeId, c] of color) if (c === GRAY) color.set(nodeId, BLACK);
    }
  }
}

// ---------- path existence ------------------------------------------------

for (const cap of caps) {
  for (const ref of cap?.governingReferences ?? []) {
    if (!existsSync(join(ROOT, ref)))
      fail(`references: ${cap.id} — governing reference missing: ${ref}`);
  }
  for (const ev of cap?.evidencePaths ?? []) {
    if (!existsSync(join(ROOT, ev)))
      fail(`evidence: ${cap.id} — evidence path missing: ${ev}`);
  }
  const implemented = ["operational", "partial", "standby"].includes(
    cap?.maturity,
  );
  if (implemented && !(cap?.evidencePaths?.length > 0))
    fail(
      `evidence: ${cap.id} — maturity "${cap.maturity}" requires evidencePaths`,
    );
}

// ---------- report ---------------------------------------------------------

function report() {
  if (errors.length) {
    console.error(
      `architecture validation FAILED — ${errors.length} defect(s):`,
    );
    for (const e of errors) console.error(`  ✗ ${e}`);
    process.exit(1);
  }
  console.log(
    `architecture validation passed — ${caps.length} capabilities, all ${REQUIRED_CAPABILITIES.length} required domains present, dependencies acyclic, references resolve.`,
  );
  process.exit(0);
}

report();
