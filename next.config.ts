import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't infer it from an unrelated
  // lockfile elsewhere on the machine.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
