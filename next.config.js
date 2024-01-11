/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'streamestrenos-scraper.streamestrenos.workers.dev'
      }
    ]
  }
}

module.exports = nextConfig
