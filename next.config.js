/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // <-- comment out or remove this line to enable server mode
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
