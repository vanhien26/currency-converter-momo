# MoMo Currency Converter — pSEO Web Platform

## Tổng quan kiến trúc

Dự án xây dựng theo mô hình **Hub & Spoke pSEO** tương tự Revolut `/currency-converter`, được Việt hóa và tối ưu cho MoMo.

### URL Architecture (3 Layer)

```
Layer 0 — HUB (priority 1.0)
└── /quy-doi-ngoai-te/                          ← Trang chính converter tool + overview

Layer 1 — CURRENCY SPOKE (priority 0.8, ~20 pages)
├── /quy-doi-ngoai-te/usd-do-la-my/             ← Trang riêng Đô la Mỹ
├── /quy-doi-ngoai-te/eur-euro/                  ← Trang riêng Euro
├── /quy-doi-ngoai-te/jpy-yen-nhat/              ← Trang riêng Yên Nhật
├── /quy-doi-ngoai-te/krw-won-han-quoc/          ← Trang riêng Won Hàn Quốc
└── ...20 currencies

Layer 2 — PAIR SPOKE (priority 0.7, ~68+ pages)
├── /quy-doi-ngoai-te/chuyen-doi-usd-sang-vnd/   ← USD → VND
├── /quy-doi-ngoai-te/chuyen-doi-vnd-sang-usd/   ← VND → USD
├── /quy-doi-ngoai-te/chuyen-doi-eur-sang-vnd/   ← EUR → VND
├── /quy-doi-ngoai-te/chuyen-doi-usd-sang-eur/   ← USD → EUR (cross-pair)
└── ...68+ pair combinations
```

### Tổng pages sinh ra: ~90+ pages từ 1 data registry

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Rendering | SSG (Static Site Generation) via `generateStaticParams` |
| SEO | Dynamic Metadata API, JSON-LD Schema, Sitemap, Robots |
| Deploy | Vercel (recommended) |

---

## Cấu trúc thư mục

```
app/
├── _data/
│   └── currencies.ts              ← SINGLE SOURCE OF TRUTH — currency registry + rates
├── _lib/
│   └── seo.ts                     ← Metadata, Schema, Breadcrumb generators
├── _components/
│   ├── Breadcrumb.tsx              ← BreadcrumbList schema + UI
│   ├── CurrencyConverter.tsx       ← Interactive converter (client component)
│   ├── ConversionTable.tsx         ← SEO-rich rate tables
│   ├── PopularPairs.tsx            ← Internal linking grid
│   └── FAQSection.tsx              ← FAQ accordion + FAQPage schema
├── quy-doi-ngoai-te/
│   ├── [currency]/
│   │   └── page.tsx                ← Currency spoke (SSG)
├── layout.tsx                      ← Root layout + header/footer
├── page.tsx                        ← Home page
├── globals.css
├── sitemap.ts                      ← Dynamic sitemap
├── robots.ts                       ← Robots + AI crawler rules
```

---

## SEO/GEO/AEO Optimization

### On-page SEO
- ✅ Dynamic `<title>` + `<meta description>` cho mỗi page type
- ✅ Canonical URLs với trailing slash consistency
- ✅ Hreflang cho `vi-VN`
- ✅ Open Graph + Twitter Cards
- ✅ Semantic HTML (h1/h2/h3 hierarchy, tables, nav, article)
- ✅ Breadcrumb navigation + BreadcrumbList schema

### Schema Markup (JSON-LD)
- ✅ `WebApplication` — Hub page
- ✅ `ExchangeRateSpecification` — Currency + Pair pages
- ✅ `FAQPage` — Tất cả pages
- ✅ `BreadcrumbList` — Tất cả pages

### GEO/AEO (AI Engine Optimization)
- ✅ Answer-first format: Tỷ giá hiện ngay đầu page
- ✅ Heading là câu hỏi: "1 USD bằng bao nhiêu VND?"
- ✅ Structured data cho AI crawlers parse
- ✅ robots.ts cho phép GPTBot, PerplexityBot, anthropic-ai, Google-Extended
- ✅ Short, factual paragraphs (< 5 dòng)
- ✅ Tables + lists cho dễ extract

### Internal Linking
- ✅ Hub → Currency spokes (currency index grid)
- ✅ Hub → Pair spokes (popular pairs)
- ✅ Currency → Related pairs (tag links)
- ✅ Pair → Reverse pair (bidirectional link)
- ✅ Pair → Related pairs (same-from links)
- ✅ Footer → Popular pairs + currencies (persistent)

---

## Production TODO

### Phase 1 — Ship MVP
- [ ] Kết nối API tỷ giá thực (thay thế MOCK_RATES)
- [ ] Deploy lên Vercel
- [ ] Submit sitemap lên Google Search Console
- [ ] Thêm GA4 + Firebase tracking

### Phase 2 — Expand
- [ ] Thêm historical rate chart (recharts)
- [ ] Email alert khi tỷ giá đạt mức mong muốn
- [ ] Rate comparison widget (MoMo vs ngân hàng)
- [ ] Blog content cluster cho từng currency

### Phase 3 — Scale
- [ ] Mở rộng sang 50+ currencies
- [ ] Thêm trang `/chuyen-tien-quoc-te/[country]/`
- [ ] ISR (Incremental Static Regeneration) cho realtime rates
- [ ] A/B test CTA "Chuyển tiền qua MoMo"

---

## Cài đặt & Chạy

```bash
npm install
npm run dev      # Development
npm run build    # Production build
npm run start    # Production server
```

---

## Ghi chú cho Dev Team

1. **currencies.ts là Single Source of Truth** — Thêm currency mới = thêm 1 object vào mảng → Tự động sinh thêm 2+ pages (currency + pair pages)

2. **Mock rates** — File `currencies.ts` chứa `MOCK_RATES` để demo. Production cần thay bằng API call trong `getExchangeRate()`, recommend dùng ISR `revalidate: 300` (5 phút)

3. **Trailing slash** — Tất cả URL dùng trailing slash cho consistency. Đã config redirect trong `next.config.mjs`

4. **AI Crawlers** — robots.ts đã explicitly allow các AI bot phổ biến. Đây là chiến lược GEO quan trọng.
