import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CurrencyConverter from "@/components/CurrencyConverter";
import ConversionTable from "@/components/ConversionTable";
import CurrencyChart from "@/components/CurrencyChart";
import FAQSection from "@/components/FAQSection";
import PopularPairs from "@/components/PopularPairs";
import { getCurrency, convertCurrency, formatCurrency, currencies } from "@/data/currencies";
import { generatePairSEO } from "@/lib/seo";

interface PageProps {
  params: Promise<{ pair: string }>;
}

// Phân tích slug cặp tiền tệ (vd: "usd-vnd" → { from: "USD", to: "VND" })
function parsePair(pairSlug: string): { from: string; to: string } | null {
  const parts = pairSlug.toUpperCase().split("-");
  if (parts.length !== 2) return null;
  const [from, to] = parts;
  if (!getCurrency(from) || !getCurrency(to)) return null;
  return { from, to };
}

// Generate static params cho tất cả cặp tiền tệ
export async function generateStaticParams() {
  const params: { pair: string }[] = [];
  for (const from of currencies) {
    for (const to of currencies) {
      if (from.code !== to.code) {
        params.push({ pair: `${from.code.toLowerCase()}-${to.code.toLowerCase()}` });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pair } = await params;
  const parsed = parsePair(pair);
  if (!parsed) return { title: "Không tìm thấy | MoMo" };

  const seo = generatePairSEO(parsed.from, parsed.to);
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `/quy-doi-ngoai-te/${pair}`,
    },
  };
}

export default async function PairPage({ params }: PageProps) {
  const { pair } = await params;
  const parsed = parsePair(pair);

  if (!parsed) notFound();

  const { from, to } = parsed;
  const fromCurrency = getCurrency(from)!;
  const toCurrency = getCurrency(to)!;
  const rate = convertCurrency(1, from, to);
  const inverseRate = convertCurrency(1, to, from);

  // FAQ cho cặp tiền tệ cụ thể
  const faqItems = [
    {
      question: `1 ${from} bằng bao nhiêu ${to}?`,
      answer: `Hiện tại 1 ${fromCurrency.namVi} (${from}) = ${formatCurrency(rate, to)} ${toCurrency.namVi} (${to}). Tỷ giá này được cập nhật theo thị trường ngoại hối quốc tế.`,
    },
    {
      question: `Tỷ giá ${from}/${to} thay đổi như thế nào?`,
      answer: `Tỷ giá ${from}/${to} biến động hàng ngày dựa trên nhiều yếu tố như chính sách tiền tệ, tăng trưởng kinh tế, lạm phát và các sự kiện địa chính trị. Bạn có thể xem biểu đồ 30 ngày để theo dõi xu hướng.`,
    },
    {
      question: `Có thể quy đổi ${from} sang ${to} qua MoMo không?`,
      answer: `Có, MoMo hỗ trợ quy đổi và chuyển tiền ngoại tệ. Bạn có thể sử dụng tính năng Ngoại tệ trong app MoMo để thực hiện giao dịch với tỷ giá cạnh tranh.`,
    },
    {
      question: `Nên đổi ${from} sang ${to} ở đâu có lợi nhất?`,
      answer: `Bạn nên so sánh tỷ giá tại nhiều ngân hàng và điểm đổi tiền. Tránh đổi tiền tại sân bay vì tỷ giá thường kém. Ngân hàng lớn thường có tỷ giá ổn định và an toàn hơn.`,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Quy đổi ngoại tệ", href: "/" },
          { label: `${from}/${to}` },
        ]}
      />

      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={`https://flagcdn.com/32x24/${fromCurrency.flag}.png`}
            alt={fromCurrency.name}
            className="rounded"
            width={32}
            height={24}
          />
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <img
            src={`https://flagcdn.com/32x24/${toCurrency.flag}.png`}
            alt={toCurrency.name}
            className="rounded"
            width={32}
            height={24}
          />
          <span className="font-bold text-xl text-gray-900">{from}/{to}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Tỷ giá {fromCurrency.namVi} ({from}) sang {toCurrency.namVi} ({to})
        </h1>

        {/* Rate highlight */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <div className="bg-[#fdf0f7] rounded-xl px-5 py-3">
            <p className="text-xs text-gray-500 mb-0.5">1 {from} =</p>
            <p className="text-2xl font-bold text-[#d82d8b]">
              {formatCurrency(rate, to)} {to}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl px-5 py-3">
            <p className="text-xs text-gray-500 mb-0.5">1 {to} =</p>
            <p className="text-2xl font-bold text-gray-700">
              {formatCurrency(inverseRate, from)} {from}
            </p>
          </div>
        </div>
      </div>

      {/* Converter */}
      <CurrencyConverter initialFrom={from} initialTo={to} initialAmount={1} />

      {/* Chart */}
      <CurrencyChart from={from} to={to} />

      {/* Conversion Table */}
      <ConversionTable from={from} to={to} />

      {/* FAQ */}
      <FAQSection items={faqItems} title={`Câu hỏi về ${from}/${to}`} />

      {/* Related pairs */}
      <PopularPairs />
    </div>
  );
}
