/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HUGGING: process.env.HUGGING,
    PINATA_KEY: process.env.PINATA_KEY,
    PINATA_SECRET: process.env.PINATA_SECRET,
  },
}

module.exports = nextConfig
