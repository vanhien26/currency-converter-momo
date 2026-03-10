import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CurrencyConverter from '@/components/CurrencyConverter';
import ConversionTable from '@/components/ConversionTable';
import FAQSection from '@/components/FAQSection';
import Breadcrumb from '@/components/Breadcrumb';
import {
  currencies,
  getCurrencyBySlug,
  getCurrencyByCode,
  getPopularCurrencies,
  getExchangeRate,
  type Currency,
} from '@/data/currencies';
import CurrencyChart from '@/components/CurrencyChart';
import {
  generateCurrencyPageMetadata,
  generatePairPageMetadata,
  generateExchangeRateSchema,
  getCurrencyBreadcrumbs,
  getPairBreadcrumbs,
} from '@/lib/seo';
import { getAllCurrencyPairs } from '@/data/currencies';

// =============================================================================
// STATIC GENERATION — Generate all currency pages at build time
// =============================================================================

export async function generateStaticParams() {
  const currencyParams = currencies.map((c) => ({
    slug: c.slug,
  }));

  const pairParams = getAllCurrencyPairs().map((pair) => ({
    slug: `chuyen-doi-${pair.from.code.toLowerCase()}-sang-${pair.to.code.toLowerCase()}`,
  }));

  return [...currencyParams, ...pairParams];
}

interface PageProps {
  params: { slug: string };
}

type ParsedSlug =
  | { type: 'pair'; from: Currency; to: Currency }
  | { type: 'currency'; currency: Currency };

function parseSlug(slug: string): ParsedSlug | null {
  // Case 1: Pair slug "chuyen-doi-usd-sang-vnd"
  if (slug.startsWith('chuyen-doi-') && slug.includes('-sang-')) {
    const parts = slug.replace('chuyen-doi-', '').split('-sang-');
    if (parts.length === 2) {
      const from = getCurrencyByCode(parts[0].toUpperCase());
      const to = getCurrencyByCode(parts[1].toUpperCase());
      if (from && to) return { type: 'pair', from, to };
    }
  }

  // Case 2: Single currency slug "usd-do-la-my"
  const currency = getCurrencyBySlug(slug);
  if (currency) return { type: 'currency', currency };

  return null;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const result = parseSlug(params.slug);
  if (!result) return {};

  if (result.type === 'pair') {
    const rate = getExchangeRate(result.from.code, result.to.code);
    return generatePairPageMetadata(result.from, result.to, rate);
  }

  return generateCurrencyPageMetadata(result.currency);
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function CurrencyPage({ params }: PageProps) {
  const result = parseSlug(params.slug);
  if (!result) notFound();

  // Common data
  const vnd = getCurrencyByCode('VND')!;
  const today = new Date().toISOString().split('T')[0];

  // If it's a PAIR page
  if (result.type === 'pair') {
    const { from, to } = result;
    const rate = getExchangeRate(from.code, to.code);
    const inverseRate = getExchangeRate(to.code, from.code);

    const schema = generateExchangeRateSchema(from, to, rate, today);
    const breadcrumbs = getPairBreadcrumbs(from, to);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <section className="border-b border-gray-100 bg-gradient-to-b from-[#FFF5F9] to-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbs} />

            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex -space-x-2 text-4xl">
                    <span>{from.flag}</span>
                    <span>{to.flag}</span>
                  </div>
                  <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    Chuyển đổi {from.code} sang {to.code}
                  </h1>
                </div>

                <div className="mb-6 rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">Tỷ giá hối đoái hôm nay</div>
                  <div className="text-3xl font-extrabold text-[#A50064]">
                    1 {from.code} = {rate.toLocaleString('vi-VN', { maximumFractionDigits: (rate < 1 ? 6 : 2) })} {to.code}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    1 {to.code} = {inverseRate.toLocaleString('vi-VN', { maximumFractionDigits: (inverseRate < 1 ? 6 : 2) })} {from.code}
                  </div>
                </div>

                <p className="text-gray-600">
                  Quy đổi {from.name} ({from.code}) sang {to.name} ({to.code}) với tỷ giá ưu đãi nhất.
                  Theo dõi biến động tỷ giá và thực hiện giao dịch an toàn, nhanh chóng ngay trên MoMo.
                </p>
              </div>

              <div>
                <CurrencyConverter defaultFrom={from.code} defaultTo={to.code} />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-16">
            <CurrencyChart fromCode={from.code} toCode={to.code} baseRate={rate} />
          </div>

          <div className="mb-16">
            <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
              Bảng giá quy đổi {from.code}/{to.code}
            </h2>
            <ConversionTable baseCurrency={from} targetCurrencies={[to]} />
          </div>

          <div className="mb-16">
            <FAQSection
              faqs={[
                {
                  question: `Làm sao để chuyển tiền từ ${from.code} sang ${to.code}?`,
                  answer: `Bạn có thể sử dụng tính năng Chuyển tiền quốc tế trên ứng dụng MoMo để gửi tiền nhanh chóng với tỷ giá tốt nhất.`
                },
                {
                  question: `Tỷ giá ${from.code}/${to.code} hôm nay là bao nhiêu?`,
                  answer: `Tỷ giá hiện tại là 1 ${from.code} = ${rate.toLocaleString('vi-VN')} ${to.code}.`
                }
              ]}
            />
          </div>
        </div>
      </>
    );
  }

  // If it's a SINGLE CURRENCY page (fallback to original logic)
  const { currency } = result;
  const isVND = currency.code === 'VND';
  const defaultTo = isVND ? 'USD' : 'VND';

  const rateToVND = isVND ? 1 : getExchangeRate(currency.code, 'VND');
  const rateFromVND = isVND ? 1 : getExchangeRate('VND', currency.code);

  // Target currencies for table (exclude self)
  const targets = getPopularCurrencies()
    .filter((c) => c.code !== currency.code)
    .slice(0, 6);

  // Related pairs for internal linking
  const otherCurrencies = currencies.filter(
    (c) => c.code !== currency.code && c.code !== 'VND'
  );

  const faqs = [
    {
      question: `1 ${currency.code} bằng bao nhiêu VND?`,
      answer: `Tại thời điểm cập nhật, 1 ${currency.code} (${currency.name}) ≈ ${rateToVND.toLocaleString('vi-VN', { maximumFractionDigits: 2 })} VND. Tỷ giá liên tục thay đổi theo thị trường, hãy sử dụng công cụ quy đổi MoMo để tra cứu tỷ giá chính xác nhất.`,
    },
    {
      question: `Cách quy đổi ${currency.name} (${currency.code}) sang VND?`,
      answer: `Sử dụng công cụ quy đổi ngoại tệ MoMo ở đầu trang: Chọn ${currency.code} làm tiền tệ nguồn, VND là tiền tệ đích, nhập số tiền cần quy đổi. Kết quả sẽ hiển thị tự động với tỷ giá cập nhật liên tục.`,
    },
    {
      question: `Có thể chuyển tiền ${currency.code} qua MoMo không?`,
      answer: `MoMo hỗ trợ chuyển tiền quốc tế nhanh chóng, an toàn. Tỷ giá ${currency.code}/VND và phí chuyển tiền được hiển thị rõ ràng trong ứng dụng trước khi bạn xác nhận giao dịch.`,
    },
    {
      question: `Tỷ giá ${currency.code} trên MoMo có tốt không?`,
      answer: `Tỷ giá trên MoMo được cập nhật liên tục từ nhiều nguồn dữ liệu độc lập, đảm bảo tính cạnh tranh. Mỗi nhà cung cấp đặt tỷ giá riêng, vì vậy hãy so sánh để chọn mức giá phù hợp nhất.`,
    },
  ];

  // Schema for this currency
  const rateSchema = !isVND
    ? generateExchangeRateSchema(currency, vnd, rateToVND, today)
    : null;

  return (
    <>
      {/* Schema */}
      {rateSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rateSchema) }}
        />
      )}

      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-[#FFF5F9] to-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Breadcrumb items={getCurrencyBreadcrumbs(currency)} />

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left: Info */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-5xl">{currency.flag}</span>
                <div>
                  <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    {currency.name} ({currency.code})
                  </h1>
                  <p className="text-sm text-gray-500">{currency.country}</p>
                </div>
              </div>

              {!isVND && (
                <div className="mb-6 rounded-xl bg-white p-4 shadow-sm border border-gray-200">
                  <div className="text-sm text-gray-500">Tỷ giá hiện tại</div>
                  <div className="mt-1 text-3xl font-extrabold text-[#A50064]">
                    1 {currency.code} = {rateToVND.toLocaleString('vi-VN', { maximumFractionDigits: 2 })} VND
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    1 VND = {rateFromVND.toLocaleString('vi-VN', { maximumFractionDigits: 6 })} {currency.code}
                  </div>
                </div>
              )}

              <p className="text-gray-600 leading-relaxed">{currency.description}</p>

              {/* Pair links from this currency */}
              <div className="mt-6">
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Quy đổi {currency.code} phổ biến
                </h2>
                <div className="flex flex-wrap gap-2">
                  {(isVND ? otherCurrencies.slice(0, 8) : [vnd, ...otherCurrencies.slice(0, 7)]).map(
                    (target) => (
                      <a
                        key={target.code}
                        href={`/quy-doi-ngoai-te/chuyen-doi-${currency.code.toLowerCase()}-sang-${target.code.toLowerCase()}/`}
                        className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-all hover:border-[#A50064]/30 hover:text-[#A50064]"
                      >
                        {currency.code} → {target.code}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right: Converter */}
            <div>
              <CurrencyConverter
                defaultFrom={currency.code}
                defaultTo={defaultTo}
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
            Bảng quy đổi {currency.name} ({currency.code})
          </h2>
          <ConversionTable baseCurrency={currency} targetCurrencies={targets} />
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <FAQSection
            faqs={faqs}
            title={`Câu hỏi thường gặp về ${currency.name} (${currency.code})`}
          />
        </div>

        {/* Related currencies */}
        <div>
          <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
            Các loại tiền tệ khác
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currencies
              .filter((c) => c.code !== currency.code)
              .map((c) => (
                <a
                  key={c.code}
                  href={`/quy-doi-ngoai-te/${c.slug}/`}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 transition-all hover:border-[#A50064]/30 hover:bg-[#FFF5F9]"
                >
                  <span className="text-xl">{c.flag}</span>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{c.code}</div>
                    <div className="text-xs text-gray-500">{c.name}</div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
