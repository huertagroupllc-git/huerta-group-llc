import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Design exploration artifacts are not application source. The Claude
    // Design passover ships its own canvas runtime (passover/support.js),
    // which is third-party build output and fails the gate on rules that do
    // not govern it. Excluded for the same reason globals.css excludes
    // institution/ and workbench/ from class scanning: evidence in the tree
    // must not influence the application or its gates.
    "passover/**",
  ]),
]);

export default eslintConfig;
