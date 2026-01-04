import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/account/:path*',
        destination: 'http://account:3000/account/:path*',
      },
      {
        source: '/contents/:path*',
        destination: 'http://contents:3000/contents/:path*',
      },
    ]
  },
};

export default nextConfig;
