const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, 
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

module.exports = nextConfig;
