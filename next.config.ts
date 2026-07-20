import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/simulation/:slug",
        destination: "/simulation/:slug.html",
      },
      // SolidPass docs (encryption-explained, guide, usage) are now real App
      // Router routes under src/app/solidpass/*, so no rewrites are needed.
    ];
  },
};

export default nextConfig;
