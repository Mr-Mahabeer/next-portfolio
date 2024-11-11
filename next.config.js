/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ["api.technojunction.in"],
  },
  output: "export",
  // basePath: "/next-portfolio",
  // assetPrefix: "/next-portfolio",
};

module.exports = nextConfig;
