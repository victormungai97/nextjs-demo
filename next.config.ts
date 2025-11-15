import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  cacheComponents: true,
  cacheLife: {
    twoweeks: {
      stale: 60 * 5,
      revalidate: 60 * 60 * 24 * 14,
      expire: 60 * 60 * 24 * 365,
    },
  },
};

export default nextConfig;
