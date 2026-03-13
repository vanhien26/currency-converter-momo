export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  currencyPair: string;
}

export const blogPosts = [
  {
    slug: 'usd-vnd-forecast-2025',
    title: 'Dự báo tỷ giá USD/VND năm 2025: Xu hướng tăng?',
    excerpt: 'Phân tích chuyên sâu USD/VND, Fed và NHNN.',
    content: '<p>USD/VND test 25.500. Fed giữ lãi suất cao. <strong>Khuyến nghị:</strong> Portfolio USD 30-40% qua MoMo.</p>',
    date: '2025-01-15',
    author: 'Nguyễn Văn A',
    currencyPair: 'USD/VND'
  },
  {
    slug: 'eur-vnd-gap-rut-gon',
    title: 'EUR/VND thu hẹp gap - Cơ hội arbitrage?',
    excerpt: 'ECB hạ lãi suất → EUR yếu.',
    content: '<p>ECB cắt 25bps, EUR/USD 1.08. Target 27.000 Q1.</p>',
    date: '2025-01-10',
    author: 'Trần Thị B',
    currencyPair: 'EUR/VND'
  },
  {
    slug: 'jpy-vnd-intervene',
    title: 'NHNN can thiệp JPY/VND - Bullish?',
    excerpt: 'JPY phá đáy, NHNN stabilize.',
    content: '<p>VNĐ/JPY 180. Long target 185 MoMo swap.</p>',
    date: '2025-01-08',
    author: 'Lê Minh C',
    currencyPair: 'JPY/VND'
  }
];

