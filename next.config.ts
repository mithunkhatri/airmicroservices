import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/simulation/:slug",
        destination: "/simulation/:slug.html",
      },
    ];
  },
};

export default nextConfig;
