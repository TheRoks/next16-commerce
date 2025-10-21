import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    clientSegmentCache: true,
    inlineCss: true,
  },
  reactCompiler: true,
  typedRoutes: true,
};

module.exports = nextConfig;
