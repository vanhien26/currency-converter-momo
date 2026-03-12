// =============================================================================
// CURRENCY REGISTRY — Single Source of Truth cho pSEO Currency Converter
// Mỗi currency = 1 spoke page: /quy-doi-ngoai-te/[slug]
// Mỗi pair = 1 deep spoke page: /quy-doi-ngoai-te/chuyen-doi-[from]-sang-[to]
// =============================================================================

export interface Currency {
  code: string;         // ISO 4217
  name: string;         // Tên tiếng Việt
  nameEn: string;       // Tên tiếng Anh
  symbol: string;       // Ký hiệu
  flag: string;         // Emoji flag
  slug: string;         // URL slug (lowercase, no diacritics)
  country: string;      // Quốc gia / khu vực
  popular: boolean;     // Có phải currency phổ biến?
  description: string;  // Mô tả ngắn cho SEO
}

export const currencies: Currency[] = [
  {
    code: 'VND',
    name: 'Đồng Việt Nam',
    nameEn: 'Vietnamese Dong',
    symbol: '₫',
    flag: '🇻🇳',
    slug: 'vnd-dong-viet-nam',
    country: 'Việt Nam',
    popular: true,
    description: 'Đồng Việt Nam (VND) là đơn vị tiền tệ chính thức của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam, do Ngân hàng Nhà nước Việt Nam phát hành.',
  },
  {
    code: 'USD',
    name: 'Đô la Mỹ',
    nameEn: 'US Dollar',
    symbol: '$',
    flag: '🇺🇸',
    slug: 'usd-do-la-my',
    country: 'Hoa Kỳ',
    popular: true,
    description: 'Đô la Mỹ (USD) là đồng tiền dự trữ quốc tế phổ biến nhất thế giới, được sử dụng rộng rãi trong giao dịch thương mại và chuyển tiền quốc tế.',
  },
  {
    code: 'EUR',
    name: 'Euro',
    nameEn: 'Euro',
    symbol: '€',
    flag: '🇪🇺',
    slug: 'eur-euro',
    country: 'Liên minh Châu Âu',
    popular: true,
    description: 'Euro (EUR) là đồng tiền chung của 20 quốc gia thuộc Khu vực đồng Euro, đồng tiền được giao dịch nhiều thứ hai trên thế giới.',
  },
  {
    code: 'JPY',
    name: 'Yên Nhật',
    nameEn: 'Japanese Yen',
    symbol: '¥',
    flag: '🇯🇵',
    slug: 'jpy-yen-nhat',
    country: 'Nhật Bản',
    popular: true,
    description: 'Yên Nhật (JPY) là đồng tiền chính thức của Nhật Bản, đồng tiền được giao dịch nhiều thứ ba trên thị trường ngoại hối toàn cầu.',
  },
  {
    code: 'KRW',
    name: 'Won Hàn Quốc',
    nameEn: 'South Korean Won',
    symbol: '₩',
    flag: '🇰🇷',
    slug: 'krw-won-han-quoc',
    country: 'Hàn Quốc',
    popular: true,
    description: 'Won Hàn Quốc (KRW) là đồng tiền chính thức của Đại Hàn Dân Quốc, phổ biến trong giao dịch thương mại Đông Á.',
  },
  {
    code: 'GBP',
    name: 'Bảng Anh',
    nameEn: 'British Pound',
    symbol: '£',
    flag: '🇬🇧',
    slug: 'gbp-bang-anh',
    country: 'Vương quốc Anh',
    popular: true,
    description: 'Bảng Anh (GBP) là đồng tiền chính thức của Vương quốc Anh, một trong những đồng tiền lâu đời nhất còn lưu hành.',
  },
  {
    code: 'CNY',
    name: 'Nhân dân tệ',
    nameEn: 'Chinese Yuan',
    symbol: '¥',
    flag: '🇨🇳',
    slug: 'cny-nhan-dan-te',
    country: 'Trung Quốc',
    popular: true,
    description: 'Nhân dân tệ (CNY) là đồng tiền chính thức của Cộng hòa Nhân dân Trung Hoa, ngày càng có vai trò quan trọng trong thương mại quốc tế.',
  },
  {
    code: 'THB',
    name: 'Baht Thái',
    nameEn: 'Thai Baht',
    symbol: '฿',
    flag: '🇹🇭',
    slug: 'thb-baht-thai',
    country: 'Thái Lan',
    popular: true,
    description: 'Baht Thái (THB) là đồng tiền chính thức của Vương quốc Thái Lan, đồng tiền phổ biến trong giao dịch du lịch Đông Nam Á.',
  },
  {
    code: 'SGD',
    name: 'Đô la Singapore',
    nameEn: 'Singapore Dollar',
    symbol: 'S$',
    flag: '🇸🇬',
    slug: 'sgd-do-la-singapore',
    country: 'Singapore',
    popular: true,
    description: 'Đô la Singapore (SGD) là đồng tiền chính thức của Cộng hòa Singapore, một trong những trung tâm tài chính hàng đầu châu Á.',
  },
  {
    code: 'AUD',
    name: 'Đô la Úc',
    nameEn: 'Australian Dollar',
    symbol: 'A$',
    flag: '🇦🇺',
    slug: 'aud-do-la-uc',
    country: 'Úc',
    popular: true,
    description: 'Đô la Úc (AUD) là đồng tiền chính thức của Liên bang Úc, đồng tiền được giao dịch nhiều thứ năm trên thế giới.',
  },
  {
    code: 'CAD',
    name: 'Đô la Canada',
    nameEn: 'Canadian Dollar',
    symbol: 'C$',
    flag: '🇨🇦',
    slug: 'cad-do-la-canada',
    country: 'Canada',
    popular: false,
    description: 'Đô la Canada (CAD) là đồng tiền chính thức của Canada, thường được gọi là "Loonie" theo hình chim loon trên đồng xu.',
  },
  {
    code: 'CHF',
    name: 'Franc Thụy Sĩ',
    nameEn: 'Swiss Franc',
    symbol: 'CHF',
    flag: '🇨🇭',
    slug: 'chf-franc-thuy-si',
    country: 'Thụy Sĩ',
    popular: false,
    description: 'Franc Thụy Sĩ (CHF) là đồng tiền chính thức của Thụy Sĩ, được coi là "nơi trú ẩn an toàn" trên thị trường ngoại hối.',
  },
  {
    code: 'HKD',
    name: 'Đô la Hồng Kông',
    nameEn: 'Hong Kong Dollar',
    symbol: 'HK$',
    flag: '🇭🇰',
    slug: 'hkd-do-la-hong-kong',
    country: 'Hồng Kông',
    popular: false,
    description: 'Đô la Hồng Kông (HKD) là đồng tiền chính thức của Đặc khu Hành chính Hồng Kông.',
  },
  {
    code: 'TWD',
    name: 'Đô la Đài Loan',
    nameEn: 'Taiwan Dollar',
    symbol: 'NT$',
    flag: '🇹🇼',
    slug: 'twd-do-la-dai-loan',
    country: 'Đài Loan',
    popular: false,
    description: 'Tân Đài tệ (TWD) là đồng tiền chính thức của Đài Loan, thường được gọi là Đô la Đài Loan.',
  },
  {
    code: 'MYR',
    name: 'Ringgit Malaysia',
    nameEn: 'Malaysian Ringgit',
    symbol: 'RM',
    flag: '🇲🇾',
    slug: 'myr-ringgit-malaysia',
    country: 'Malaysia',
    popular: false,
    description: 'Ringgit Malaysia (MYR) là đồng tiền chính thức của Malaysia, phổ biến trong giao dịch thương mại ASEAN.',
  },
  {
    code: 'IDR',
    name: 'Rupiah Indonesia',
    nameEn: 'Indonesian Rupiah',
    symbol: 'Rp',
    flag: '🇮🇩',
    slug: 'idr-rupiah-indonesia',
    country: 'Indonesia',
    popular: false,
    description: 'Rupiah Indonesia (IDR) là đồng tiền chính thức của Indonesia, nền kinh tế lớn nhất Đông Nam Á.',
  },
  {
    code: 'PHP',
    name: 'Peso Philippines',
    nameEn: 'Philippine Peso',
    symbol: '₱',
    flag: '🇵🇭',
    slug: 'php-peso-philippines',
    country: 'Philippines',
    popular: false,
    description: 'Peso Philippines (PHP) là đồng tiền chính thức của Cộng hòa Philippines.',
  },
  {
    code: 'INR',
    name: 'Rupee Ấn Độ',
    nameEn: 'Indian Rupee',
    symbol: '₹',
    flag: '🇮🇳',
    slug: 'inr-rupee-an-do',
    country: 'Ấn Độ',
    popular: false,
    description: 'Rupee Ấn Độ (INR) là đồng tiền chính thức của Cộng hòa Ấn Độ, nền kinh tế lớn thứ 5 thế giới.',
  },
  {
    code: 'LAK',
    name: 'Kip Lào',
    nameEn: 'Lao Kip',
    symbol: '₭',
    flag: '🇱🇦',
    slug: 'lak-kip-lao',
    country: 'Lào',
    popular: false,
    description: 'Kip Lào (LAK) là đồng tiền chính thức của nước Cộng hòa Dân chủ Nhân dân Lào.',
  },
  {
    code: 'KHR',
    name: 'Riel Campuchia',
    nameEn: 'Cambodian Riel',
    symbol: '៛',
    flag: '🇰🇭',
    slug: 'khr-riel-campuchia',
    country: 'Campuchia',
    popular: false,
    description: 'Riel Campuchia (KHR) là đồng tiền chính thức của Vương quốc Campuchia.',
  },
];

// ======== HELPER FUNCTIONS ========

export function getCurrencyBySlug(slug: string): Currency | undefined {
  return currencies.find((c) => c.slug === slug);
}

export function getCurrencyByCode(code: string): Currency | undefined {
  return currencies.find((c) => c.code === code);
}

export function getPopularCurrencies(): Currency[] {
  return currencies.filter((c) => c.popular);
}

// Tạo tất cả currency pairs cho pSEO (from VND + to VND)
export function getAllCurrencyPairs(): { from: Currency; to: Currency }[] {
  const vnd = getCurrencyByCode('VND')!;
  const others = currencies.filter((c) => c.code !== 'VND');

  const pairs: { from: Currency; to: Currency }[] = [];

  // VND → Other
  others.forEach((c) => {
    pairs.push({ from: vnd, to: c });
  });

  // Other → VND
  others.forEach((c) => {
    pairs.push({ from: c, to: vnd });
  });

  // Popular cross-pairs (USD ↔ EUR, USD ↔ JPY, etc.)
  const popularCodes = ['USD', 'EUR', 'JPY', 'KRW', 'GBP', 'CNY'];
  for (let i = 0; i < popularCodes.length; i++) {
    for (let j = i + 1; j < popularCodes.length; j++) {
      const a = getCurrencyByCode(popularCodes[i])!;
      const b = getCurrencyByCode(popularCodes[j])!;
      pairs.push({ from: a, to: b });
      pairs.push({ from: b, to: a });
    }
  }

  return pairs;
}

// Tạo slug cho pair page
export function getPairSlug(from: Currency, to: Currency): string {
  return `chuyen-doi-${from.code.toLowerCase()}-sang-${to.code.toLowerCase()}`;
}

// Mock exchange rates (in production: fetch from API)
export const MOCK_RATES: Record<string, number> = {
  'USD-VND': 25435,
  'EUR-VND': 27650,
  'JPY-VND': 168.5,
  'KRW-VND': 18.72,
  'GBP-VND': 32180,
  'CNY-VND': 3512,
  'THB-VND': 725.8,
  'SGD-VND': 19250,
  'AUD-VND': 16420,
  'CAD-VND': 18350,
  'CHF-VND': 28900,
  'HKD-VND': 3265,
  'TWD-VND': 802.5,
  'MYR-VND': 5680,
  'IDR-VND': 1.58,
  'PHP-VND': 442.3,
  'INR-VND': 302.1,
  'LAK-VND': 1.15,
  'KHR-VND': 6.22,
  'USD-EUR': 0.92,
  'USD-JPY': 151.2,
  'USD-KRW': 1358,
  'USD-GBP': 0.79,
  'USD-CNY': 7.24,
  'EUR-JPY': 164.3,
  'EUR-KRW': 1476,
  'EUR-GBP': 0.86,
  'EUR-CNY': 7.87,
  'JPY-KRW': 8.98,
  'JPY-GBP': 0.0052,
  'JPY-CNY': 0.0479,
  'KRW-GBP': 0.00058,
  'KRW-CNY': 0.00533,
  'GBP-CNY': 9.17,
};

export function getExchangeRate(from: string, to: string): number {
  if (from === to) return 1;

  const directKey = `${from}-${to}`;
  if (MOCK_RATES[directKey]) return MOCK_RATES[directKey];

  const reverseKey = `${to}-${from}`;
  if (MOCK_RATES[reverseKey]) return 1 / MOCK_RATES[reverseKey];

  // Cross-rate via VND
  const fromVND = MOCK_RATES[`${from}-VND`] || (1 / (MOCK_RATES[`VND-${from}`] || 1));
  const toVND = MOCK_RATES[`${to}-VND`] || (1 / (MOCK_RATES[`VND-${to}`] || 1));

  if (fromVND && toVND) return fromVND / toVND;

  return 0;
}
