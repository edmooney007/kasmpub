/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Pub images',
    description: 'Helper images',
    icon: 'https://edmooney007.github.io/kasmpub/1.1/logo.svg',
    listUrl: 'https://edmooney007.github.io/kasmpub/',
    contactUrl: 'https://github.com/edmooney007/kasmpub/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
