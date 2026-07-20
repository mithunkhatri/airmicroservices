import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/simulation/:slug",
        destination: "/simulation/:slug.html",
      },
      // Static SolidPass docs served at clean, extensionless paths.
      // These are `afterFiles` rewrites, so the real /solidpass pages
      // (index, privacy, faq, terms) always take precedence.
      {
        source: "/solidpass/encryption-explained",
        destination: "/solidpass/encryption-explained.html",
      },
      {
        source: "/solidpass/guide",
        destination: "/solidpass/guide.html",
      },
      {
        source: "/solidpass/usage",
        destination: "/solidpass/usage.html",
      },
    ];
  },
};

export default nextConfig;
