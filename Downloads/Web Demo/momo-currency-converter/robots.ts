import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/quy-doi-ngoai-te/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      // AI crawlers — explicitly allow for GEO
      {
        userAgent: 'GPTBot',
        allow: '/quy-doi-ngoai-te/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/quy-doi-ngoai-te/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/quy-doi-ngoai-te/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/quy-doi-ngoai-te/',
      },
      {
        userAgent: 'Bytespider',
        allow: '/quy-doi-ngoai-te/',
      },
    ],
    sitemap: 'https://momo.vn/sitemap.xml',
  };
}
