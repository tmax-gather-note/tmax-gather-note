import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        destination: "/main",
        permanent: false,
        source: "/",
      },
    ];
  },
  transpilePackages: ["@coss/ui"],
};

export default nextConfig;
