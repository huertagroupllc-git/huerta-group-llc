import type { NextConfig } from "next";

/**
 * Baseline security headers, applied to every route. This is the
 * conservative, application-compatible set: it requires no external
 * origin inventory and cannot break rendering. A Content-Security-Policy
 * is deliberately not set here — a correct one requires a verified
 * origin inventory (Next inline runtime, self-hosted fonts, inline
 * JSON-LD) and is planned as its own bounded change rather than rushed.
 */
const SECURITY_HEADERS = [
  // The site is never legitimately framed by another origin; SAMEORIGIN
  // blocks all cross-origin framing (the clickjacking vector) while
  // keeping same-origin rendering tools working.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Assets are served with correct MIME types; forbid sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send origin-only referrer data across origins.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site uses none of these browser capabilities.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't infer it from an unrelated
  // lockfile elsewhere on the machine.
  turbopack: {
    root: import.meta.dirname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
