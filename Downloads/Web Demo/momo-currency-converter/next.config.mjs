/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO: Trailing slash consistency
  trailingSlash: true,
  
  // Performance
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Headers for security & caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },

  // Redirects: canonical URL handling
  async redirects() {
    return [
      {
        source: '/quy-doi-ngoai-te',
        destination: '/quy-doi-ngoai-te/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
