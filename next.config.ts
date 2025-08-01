import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
    cacheComponents: true,
    inlineCss: true,
    // ppr: true,
    reactCompiler: true,
  },
};

module.exports = nextConfig;
