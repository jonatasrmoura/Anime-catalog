/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/utils/myLoader.js',
    remotePatterns: [{
        protocol: 'https',
        hostname: 'vocesabianime.com',
    }],
  },
}

module.exports = nextConfig
