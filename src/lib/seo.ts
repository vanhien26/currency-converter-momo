import { Metadata } from 'next';
import { Currency } from '@/data/currencies';

const SITE_URL = '';
const SITE_NAME = 'MoMo - Siêu Ứng Dụng Tài Chính';

// =============================================================================
// METADATA GENERATORS
// =============================================================================

export function generateHubMetadata(): Metadata {
  const title = 'Quy Đổi Ngoại Tệ | Tỷ Giá Hối Đoái Trực Tuyến | MoMo';
  const description =
    'Công cụ quy đổi ngoại tệ trực tuyến với tỷ giá cập nhật liên tục. Chuyển đổi VND, USD, EUR, JPY và 20+ loại tiền tệ. Chuyển tiền quốc tế qua MoMo nhanh chóng, phí thấp.';

  return {
    title,
    description,
    keywords: [
      'quy đổi ngoại tệ',
      'tỷ giá hối đoái',
      'chuyển đổi tiền tệ',
      'tỷ giá USD VND',
      'tỷ giá EUR VND',
      'chuyển tiền quốc tế MoMo',
      'currency converter',
      'exchange rate vietnam',
    ],
    alternates: {
      canonical: `${SITE_URL}/quy-doi-ngoai-te/`,
      languages: {
        'vi-VN': `${SITE_URL}/quy-doi-ngoai-te/`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/quy-doi-ngoai-te/`,
      siteName: SITE_NAME,
      locale: 'vi_VN',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/og/quy-doi-ngoai-te.png`,
          width: 1200,
          height: 630,
          alt: 'MoMo - Quy Đổi Ngoại Tệ Trực Tuyến',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large' as const,
      'max-video-preview': -1,
    },
  };
}

export function generateCurrencyPageMetadata(currency: Currency): Metadata {
  const title = `${currency.name} (${currency.code}) - Tỷ Giá & Quy Đổi Ngoại Tệ | MoMo`;
  const description = `Xem tỷ giá ${currency.name} (${currency.code}) cập nhật liên tục. Quy đổi ${currency.code} sang VND, USD, EUR và 20+ loại tiền tệ khác. ${currency.description}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/quy-doi-ngoai-te/${currency.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/quy-doi-ngoai-te/${currency.slug}/`,
      siteName: SITE_NAME,
      locale: 'vi_VN',
      type: 'website',
    },
  };
}

export function generatePairPageMetadata(from: Currency, to: Currency, rate: number): Metadata {
  const title = `Chuyển Đổi ${from.code} sang ${to.code} | 1 ${from.code} = ${rate.toLocaleString('vi-VN')} ${to.code} | MoMo`;
  const description = `Quy đổi ${from.name} (${from.code}) sang ${to.name} (${to.code}) với tỷ giá cập nhật. 1 ${from.code} = ${rate.toLocaleString('vi-VN')} ${to.code}. Chuyển tiền quốc tế qua MoMo nhanh chóng, an toàn, phí thấp.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/quy-doi-ngoai-te/chuyen-doi-${from.code.toLowerCase()}-sang-${to.code.toLowerCase()}/`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/quy-doi-ngoai-te/chuyen-doi-${from.code.toLowerCase()}-sang-${to.code.toLowerCase()}/`,
      siteName: SITE_NAME,
      locale: 'vi_VN',
      type: 'website',
    },
  };
}

// =============================================================================
// JSON-LD SCHEMA GENERATORS
// =============================================================================

export function generateWebApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'MoMo Quy Đổi Ngoại Tệ',
    description: 'Công cụ quy đổi ngoại tệ trực tuyến với tỷ giá cập nhật liên tục từ MoMo',
    url: `${SITE_URL}/quy-doi-ngoai-te/`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'VND',
    },
    provider: {
      '@type': 'Organization',
      name: 'MoMo',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateExchangeRateSchema(
  from: Currency,
  to: Currency,
  rate: number,
  date: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ExchangeRateSpecification',
    currency: from.code,
    currentExchangeRate: {
      '@type': 'UnitPriceSpecification',
      price: rate,
      priceCurrency: to.code,
      unitCode: from.code,
      validFrom: date,
    },
    provider: {
      '@type': 'Organization',
      name: 'MoMo',
      url: SITE_URL,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

// =============================================================================
// BREADCRUMB HELPERS
// =============================================================================

export function getHubBreadcrumbs() {
  return [
    { name: 'Trang chủ', url: '/' },
    { name: 'Quy đổi ngoại tệ', url: '/quy-doi-ngoai-te/' },
  ];
}

export function getCurrencyBreadcrumbs(currency: Currency) {
  return [
    { name: 'Trang chủ', url: '/' },
    { name: 'Quy đổi ngoại tệ', url: '/quy-doi-ngoai-te/' },
    { name: `${currency.name} (${currency.code})`, url: `/quy-doi-ngoai-te/${currency.slug}/` },
  ];
}

export function getPairBreadcrumbs(from: Currency, to: Currency) {
  return [
    { name: 'Trang chủ', url: '/' },
    { name: 'Quy đổi ngoại tệ', url: '/quy-doi-ngoai-te/' },
    {
      name: `${from.code} sang ${to.code}`,
      url: `/quy-doi-ngoai-te/chuyen-doi-${from.code.toLowerCase()}-sang-${to.code.toLowerCase()}/`,
    },
  ];
}
