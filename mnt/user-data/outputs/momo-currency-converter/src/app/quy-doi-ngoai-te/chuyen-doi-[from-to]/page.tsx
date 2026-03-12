import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CurrencyConverter from '@/app/_components/CurrencyConverter';
import ConversionTable from '@/app/_components/ConversionTable';
import FAQSection from '@/app/_components/FAQSection';
import Breadcrumb from '@/app/_components/Breadcrumb';
import {
  currencies,
  getCurrencyByCode,
  getExchangeRate,
  getAllCurrencyPairs,
} from '@/app/_data/currencies';
import {
  generatePairPageMetadata,
  generateExchangeRateSchema,
  getPairBreadcrumbs,
} from '@/app/_lib/seo';

// =============================================================================
// STATIC GENERATION — Generate all pair pages at build time
// =============================================================================

export async function generateStaticParams() {
  const pairs = getAllCurrencyPairs();
  return pairs.map((p) => ({
    'from-to': `${p.from.code.toLowerCase()}-sang-${p.to.code.toLowerCase()}`,
  }));
}

function parsePairSlug(slug: string): { from: string; to: string } | null {
  // Expected format: "usd-sang-vnd"
  const match = slug.match(/^([a-z]{3})-sang-([a-z]{3})$/);
  if (!match) return null;
  return { from: match[1].toUpperCase(), to: match[2].toUpperCase() };
}

export async function generateMetadata({
  params,
}: {
  params: { 'from-to': string };
}): Promise<Metadata> {
  const parsed = parsePairSlug(params['from-to']);
  if (!parsed) return {};
  const from = getCurrencyByCode(parsed.from);
  const to = getCurrencyByCode(parsed.to);
  if (!from || !to) return {};
  const rate = getExchangeRate(from.code, to.code);
  return generatePairPageMetadata(from, to, rate);
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function PairPage({
  params,
}: {
  params: { 'from-to': string };
}) {
  const parsed = parsePairSlug(params['from-to']);
  if (!parsed) notFound();

  const from = getCurrencyByCode(parsed.from);
  const to = getCurrencyByCode(parsed.to);
  if (!from || !to) notFound();

  const rate = getExchangeRate(from.code, to.code);
  const reverseRate = getExchangeRate(to.code, from.code);
  const today = new Date().toISOString().split('T')[0];
  const todayFormatted = new Date().toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const formatRate = (num: number): string => {
    if (num >= 1000) return num.toLocaleString('vi-VN', { maximumFractionDigits: 2 });
    if (num >= 1) return num.toLocaleString('vi-VN', { maximumFractionDigits: 4 });
    return num.toLocaleString('vi-VN', { maximumFractionDigits: 6 });
  };

  // Conversion amounts
  const amounts =
    rate > 100
      ? [1, 5, 10, 25, 50, 100, 500, 1000]
      : rate > 1
      ? [1, 10, 100, 500, 1000, 5000, 10000]
      : [1, 100, 1000, 10000, 100000, 1000000];

  const faqs = [
    {
      question: `1 ${from.code} bằng bao nhiêu ${to.code} hôm nay?`,
      answer: `Tại thời điểm cập nhật ${todayFormatted}, 1 ${from.name} (${from.code}) ≈ ${formatRate(rate)} ${to.name} (${to.code}). Tỷ giá liên tục biến động theo thị trường, hãy sử dụng công cụ quy đổi MoMo để có tỷ giá chính xác nhất.`,
    },
    {
      question: `1 ${to.code} bằng bao nhiêu ${from.code}?`,
      answer: `Ngược lại, 1 ${to.name} (${to.code}) ≈ ${formatRate(reverseRate)} ${from.name} (${from.code}).`,
    },
    {
      question: `Cách chuyển đổi ${from.code} sang ${to.code} trên MoMo?`,
      answer: `Bước 1: Mở công cụ quy đổi ngoại tệ MoMo. Bước 2: Chọn ${from.code} là tiền tệ nguồn, ${to.code} là tiền tệ đích. Bước 3: Nhập số tiền cần chuyển đổi. Kết quả hiển thị tự động. Để thực hiện giao dịch chuyển tiền, mở ứng dụng MoMo.`,
    },
    {
      question: `Tỷ giá ${from.code}/${to.code} trên MoMo có cạnh tranh không?`,
      answer: `Tỷ giá trên MoMo được tham chiếu từ nhiều nguồn dữ liệu thị trường độc lập và cập nhật liên tục. Phí và tỷ giá luôn được hiển thị rõ ràng trong ứng dụng trước khi bạn xác nhận giao dịch.`,
    },
  ];

  // Schema
  const rateSchema = generateExchangeRateSchema(from, to, rate, today);

  // Related pairs (same from currency)
  const relatedFromPairs = currencies
    .filter((c) => c.code !== from.code && c.code !== to.code)
    .slice(0, 6);

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rateSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-[#FFF5F9] to-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Breadcrumb items={getPairBreadcrumbs(from, to)} />

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left: Rate Info */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-3xl">{from.flag}</span>
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="text-3xl">{to.flag}</span>
              </div>

              <h1 className="mb-2 text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
                Chuyển đổi {from.name} sang {to.name}
              </h1>
              <p className="mb-6 text-sm text-gray-500">
                {from.code}/{to.code} — Cập nhật {todayFormatted}
              </p>

              {/* Main Rate Card */}
              <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-gray-500">Tỷ giá hiện tại</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-gray-900">1 {from.code}</span>
                  <span className="text-2xl font-extrabold text-[#A50064]">=</span>
                  <span className="text-3xl font-extrabold text-[#A50064] sm:text-4xl">
                    {formatRate(rate)}
                  </span>
                  <span className="text-lg font-semibold text-gray-600">{to.code}</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  1 {to.code} = {formatRate(reverseRate)} {from.code}
                </div>
              </div>

              {/* Quick convert links */}
              <div className="flex flex-wrap gap-2">
                {amounts.slice(0, 6).map((amt) => (
                  <div
                    key={amt}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs"
                  >
                    <span className="font-semibold text-gray-900">
                      {amt.toLocaleString('vi-VN')} {from.code}
                    </span>
                    <span className="mx-1 text-gray-400">=</span>
                    <span className="font-semibold text-[#A50064]">
                      {formatRate(amt * rate)} {to.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Converter */}
            <div>
              <CurrencyConverter
                defaultFrom={from.code}
                defaultTo={to.code}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Conversion Table */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
            Bảng quy đổi {from.code} sang {to.code}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-600">
                    {from.flag} {from.code}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold text-gray-600">
                    {to.flag} {to.code}
                  </th>
                </tr>
              </thead>
              <tbody>
                {amounts.map((amt, i) => (
                  <tr
                    key={amt}
                    className={`border-b border-gray-100 hover:bg-[#FFF5F9] ${
                      i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    }`}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      {amt.toLocaleString('vi-VN')} {from.code}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums text-gray-700">
                      {formatRate(amt * rate)} {to.code}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reverse table */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
            Bảng quy đổi {to.code} sang {from.code}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-600">
                    {to.flag} {to.code}
                  </th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold text-gray-600">
                    {from.flag} {from.code}
                  </th>
                </tr>
              </thead>
              <tbody>
                {amounts.map((amt, i) => (
                  <tr
                    key={amt}
                    className={`border-b border-gray-100 hover:bg-[#FFF5F9] ${
                      i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    }`}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      {amt.toLocaleString('vi-VN')} {to.code}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums text-gray-700">
                      {formatRate(amt * reverseRate)} {from.code}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mb-16">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Quy đổi {from.name} ({from.code}) sang {to.name} ({to.code}) trên MoMo
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Sử dụng công cụ quy đổi ngoại tệ MoMo để chuyển đổi {from.name} ({from.code}) sang{' '}
              {to.name} ({to.code}) với tỷ giá cập nhật liên tục. Tại thời điểm cập nhật, 1{' '}
              {from.code} = {formatRate(rate)} {to.code}. Tỷ giá này được tham chiếu từ nhiều nguồn
              dữ liệu thị trường độc lập.
            </p>
            <p className="text-gray-600 leading-relaxed">
              {from.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {to.description}
            </p>
          </article>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <FAQSection
            faqs={faqs}
            title={`Câu hỏi thường gặp về quy đổi ${from.code} sang ${to.code}`}
          />
        </div>

        {/* Related pair links */}
        <div>
          <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
            Quy đổi {from.code} sang các loại tiền tệ khác
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {relatedFromPairs.map((c) => (
              <a
                key={c.code}
                href={`/quy-doi-ngoai-te/chuyen-doi-${from.code.toLowerCase()}-sang-${c.code.toLowerCase()}/`}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all hover:border-[#A50064]/30 hover:bg-[#FFF5F9]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{c.flag}</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {from.code} → {c.code}
                  </span>
                </div>
                <span className="text-sm font-bold tabular-nums text-gray-600">
                  {formatRate(getExchangeRate(from.code, c.code))}
                </span>
              </a>
            ))}
          </div>

          {/* Reverse direction link */}
          <div className="mt-6 text-center">
            <a
              href={`/quy-doi-ngoai-te/chuyen-doi-${to.code.toLowerCase()}-sang-${from.code.toLowerCase()}/`}
              className="inline-flex items-center gap-2 rounded-xl border border-[#A50064]/20 bg-[#FFF5F9] px-5 py-2.5 text-sm font-semibold text-[#A50064] transition-all hover:bg-[#A50064] hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              Chuyển đổi {to.code} sang {from.code}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
