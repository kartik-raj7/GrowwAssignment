/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
    NEXT_API_KEY: process.env.NEXT_API_KEY,
    TEST_BASE_URL:process.env.TEST_BASE_URL,
    NEXT_FINANCIAL_BASE_URL:process.env.NEXT_FINANCIAL_BASE_URL,
    NEXT_FINANCIAL_API_KEY:process.env.NEXT_FINANCIAL_API_KEY,
  },
  images: {
    domains: ['financialmodelingprep.com'],
  },
  exportPathMap: function () {
    return {
      '/': { page: '/homepage' },
    };
  },
}

module.exports = nextConfig
