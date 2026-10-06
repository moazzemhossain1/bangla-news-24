import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.bbci.co.uk",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
