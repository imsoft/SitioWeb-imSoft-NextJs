/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const images = {
  domains: ['firebasestorage.googleapis.com'],
}

module.exports = {
  nextConfig,
  images,
}
