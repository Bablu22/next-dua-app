/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/another": ["./prisma/**/*"],
    },
  },
};

export default nextConfig;
