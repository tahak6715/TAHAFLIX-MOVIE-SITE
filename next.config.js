/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['encrypted-tbn0.gstatic.com',"eslpals.com","occ-0-3933-116.1.nflxso.net"],

  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
