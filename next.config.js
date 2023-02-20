/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
       // evitar que se incluya 'fs' en el lado del cliente
  //     config.node = {
  //       fs: 'empty'
  //     }
  //   }
  //   return config
  // }
}

const images = {
  domains: ['firebasestorage.googleapis.com'],
}

module.exports = {
  nextConfig,
  images,
}
