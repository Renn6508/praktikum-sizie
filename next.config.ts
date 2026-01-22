/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Tanda bintang ganda mengizinkan SEMUA domain (untuk development)
      },
    ],
  },
}

module.exports = nextConfig