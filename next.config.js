/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["api.technojunction.in"],
  },
  output: "export",
};

module.exports = nextConfig;
