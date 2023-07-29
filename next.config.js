/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;
