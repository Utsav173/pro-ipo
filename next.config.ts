import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  sw: "pwabuilder-sw.js",
});

const nextConfig: NextConfig = {};

export default withPWA(nextConfig);
