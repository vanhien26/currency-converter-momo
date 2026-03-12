import { MetadataRoute } from 'next';
import { currencies, getAllCurrencyPairs } from '@/data/currencies';

const SITE_URL = 'https://momo.vn';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Hub page
  const hub: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/quy-doi-ngoai-te/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // Currency spoke pages (20 currencies)
  const currencyPages: MetadataRoute.Sitemap = currencies.map((c) => ({
    url: `${SITE_URL}/quy-doi-ngoai-te/${c.slug}/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  // Pair spoke pages (68+ pages)
  const pairs = getAllCurrencyPairs();
  const pairPages: MetadataRoute.Sitemap = pairs.map((p) => ({
    url: `${SITE_URL}/quy-doi-ngoai-te/chuyen-doi-${p.from.code.toLowerCase()}-sang-${p.to.code.toLowerCase()}/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  return [...hub, ...currencyPages, ...pairPages];
}
