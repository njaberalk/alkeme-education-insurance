/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/education',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
