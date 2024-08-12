/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable source maps in production
    productionBrowserSourceMaps: false,
  
    // Custom Webpack configuration
    webpack: (config, { dev, isServer }) => {
      // Enable source maps in development
      if (dev) {
        config.devtool = 'source-map';
      }
  
      // Additional Webpack configurations can be added here
  
      return config;
    },
  
    // Other potential settings
    reactStrictMode: true, // Enforces React strict mode
    swcMinify: true, // Use the faster SWC minifier
  };
  
  export default nextConfig;
  