/** @type {import('next').NextConfig} */
const nextConfig = {};

// export default nextConfig;
// // next.config.mjs

export default {
    output: 'export',
    // Optional: Specify the output directory
    distDir: 'out',
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
    },
  };
  