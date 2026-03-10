import { Metadata } from 'next';
import CurrencyConverter from '@/app/_components/CurrencyConverter';
import PopularPairs from '@/app/_components/PopularPairs';
import ConversionTable from '@/app/_components/ConversionTable';
import FAQSection from '@/app/_components/FAQSection';
import Breadcrumb from '@/app/_components/Breadcrumb';
import {
  generateHubMetadata,
  generateWebApplicationSchema,
  getHubBreadcrumbs,
} from '@/app/_lib/seo';
import { getCurrencyByCode, getPopularCurrencies } from '@/app/_data/currencies';

export const metadata: Metadata = generateHubMetadata();

const hubFAQs = [
  {
    question: 'Tỷ giá hối đoái trên MoMo được cập nhật như thế nào?',
    answer:
      'Tỷ giá trên MoMo được cập nhật liên tục dựa trên tỷ giá mua và bán từ nhiều nguồn dữ liệu độc lập. Bạn luôn thấy tỷ giá hiện tại trong ứng dụng trước khi thực hiện giao dịch chuyển đổi hoặc chuyển tiền quốc tế.',
  },
  {
    question: 'Quy đổi ngoại tệ trên MoMo có mất phí không?',
    answer:
      'MoMo cung cấp công cụ quy đổi ngoại tệ miễn phí để bạn tra cứu tỷ giá. Khi thực hiện giao dịch chuyển tiền quốc tế hoặc mua ngoại tệ, phí sẽ được hiển thị rõ ràng trong ứng dụng trước khi bạn xác nhận.',
  },
  {
    question: 'MoMo hỗ trợ quy đổi bao nhiêu loại tiền tệ?',
    answer:
      'Công cụ quy đổi ngoại tệ MoMo hỗ trợ tra cứu tỷ giá cho 20+ loại tiền tệ phổ biến bao gồm VND, USD, EUR, JPY, KRW, GBP, CNY, THB, SGD và nhiều loại tiền tệ khác trong khu vực ASEAN.',
  },
  {
    question: 'Cách quy đổi ngoại tệ trên MoMo như thế nào?',
    answer:
      'Bước 1: Mở công cụ quy đổi ngoại tệ trên trang web hoặc ứng dụng MoMo. Bước 2: Chọn loại tiền tệ nguồn và đích. Bước 3: Nhập số tiền cần quy đổi. Hệ thống sẽ tự động hiển thị kết quả với tỷ giá hiện tại.',
  },
  {
    question: 'Tỷ giá trên MoMo có giống tỷ giá ngân hàng không?',
    answer:
      'Tỷ giá trên MoMo được tham chiếu từ nhiều nguồn dữ liệu thị trường và có thể khác với tỷ giá niêm yết tại từng ngân hàng thương mại. Mỗi tổ chức tài chính đặt tỷ giá riêng, vì vậy hãy so sánh để chọn mức giá tốt nhất.',
  },
  {
    question: 'Có thể chuyển tiền quốc tế qua MoMo không?',
    answer:
      'Có. MoMo hỗ trợ chuyển tiền quốc tế nhanh chóng và an toàn. Bạn chỉ cần chọn quốc gia đích, nhập số tiền, kiểm tra tỷ giá và phí trong ứng dụng, sau đó xác nhận giao dịch.',
  },
];

export default function CurrencyConverterHub() {
  const vnd = getCurrencyByCode('VND')!;
  const popularNonVND = getPopularCurrencies().filter((c) => c.code !== 'VND').slice(0, 5);
  const allCurrencies = getPopularCurrencies().filter((c) => c.code !== 'VND');

  return (
    <>
      {/* Schema: WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebApplicationSchema()),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#A50064] via-[#C7007A] to-[#D81B60]">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-white/5" />
          <div className="absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-white/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumb items={getHubBreadcrumbs().map(b => ({...b, url: b.url}))} />

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left: Copy */}
            <div>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                Quy Đổi Ngoại Tệ
                <span className="block text-white/80">Tỷ Giá Cập Nhật Liên Tục</span>
              </h1>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
                Tra cứu tỷ giá hối đoái 20+ loại tiền tệ phổ biến. Chuyển đổi nhanh VND, USD, EUR, JPY, KRW 
                và chuyển tiền quốc tế qua MoMo với phí thấp, tỷ giá cạnh tranh.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tỷ giá real-time
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  20+ loại tiền
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Phí chuyển tiền từ 0đ
                </div>
              </div>
            </div>

            {/* Right: Converter Tool */}
            <div>
              <CurrencyConverter defaultFrom="USD" defaultTo="VND" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Popular Pairs — Internal Links */}
        <div className="mb-16">
          <PopularPairs />
        </div>

        {/* Conversion Table */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
            Bảng quy đổi VND sang các loại tiền tệ phổ biến
          </h2>
          <ConversionTable
            baseCurrency={vnd}
            targetCurrencies={popularNonVND}
            amounts={[100000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000]}
          />
        </div>

        {/* Currency Index — Internal Links to Spoke Pages */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
            Tất cả loại tiền tệ
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {getPopularCurrencies()
              .concat(
                // Add non-popular ones
                (require('@/app/_data/currencies') as typeof import('@/app/_data/currencies')).currencies.filter(
                  (c: any) => !c.popular
                )
              )
              .map((c) => (
                <a
                  key={c.code}
                  href={`/quy-doi-ngoai-te/${c.slug}/`}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 transition-all hover:border-[#A50064]/30 hover:bg-[#FFF5F9]"
                >
                  <span className="text-2xl">{c.flag}</span>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{c.name}</div>
                    <div className="text-xs text-gray-500">{c.code} — {c.country}</div>
                  </div>
                </a>
              ))}
          </div>
        </div>

        {/* SEO Content — AEO/GEO optimized */}
        <div className="mb-16">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Công cụ quy đổi ngoại tệ MoMo là gì?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Công cụ quy đổi ngoại tệ MoMo giúp bạn tra cứu tỷ giá hối đoái trực tuyến cho hơn 20 loại tiền tệ 
              phổ biến trên thế giới. Tỷ giá được cập nhật liên tục dựa trên giá mua và bán từ nhiều nguồn dữ liệu 
              độc lập, giúp bạn nắm được mức giá chính xác nhất tại thời điểm tra cứu.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Bạn có thể sử dụng công cụ này để chuyển đổi giữa Đồng Việt Nam (VND) với các loại tiền tệ quốc tế 
              như Đô la Mỹ (USD), Euro (EUR), Yên Nhật (JPY), Won Hàn Quốc (KRW), Bảng Anh (GBP), Nhân dân tệ (CNY), 
              Baht Thái (THB), Đô la Singapore (SGD) và nhiều loại tiền tệ khác.
            </p>
            
            <h2 className="mt-8 text-xl font-bold text-gray-900 sm:text-2xl">
              Tỷ giá hối đoái là gì?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Tỷ giá hối đoái cho biết giá trị đồng tiền của bạn khi quy đổi sang một đồng tiền khác tại bất kỳ thời 
              điểm nào. Giá trị này liên tục thay đổi theo cung và cầu trên thị trường ngoại hối quốc tế. Mỗi tổ chức 
              tài chính — từ ngân hàng thương mại đến ứng dụng fintech — đều đặt tỷ giá riêng, vì vậy việc so sánh 
              giữa các nhà cung cấp là rất quan trọng để đảm bảo bạn nhận được mức giá tốt nhất.
            </p>
            
            <h2 className="mt-8 text-xl font-bold text-gray-900 sm:text-2xl">
              Chuyển tiền quốc tế qua MoMo như thế nào?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              MoMo hỗ trợ chuyển tiền quốc tế nhanh chóng và an toàn. Sau khi tra cứu tỷ giá bằng công cụ quy đổi 
              ngoại tệ, bạn có thể mở ứng dụng MoMo để thực hiện giao dịch chuyển tiền. MoMo sẽ hiển thị tỷ giá 
              hiện tại và toàn bộ phí trước khi bạn xác nhận, đảm bảo minh bạch trong mọi giao dịch.
            </p>
          </article>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <FAQSection faqs={hubFAQs} />
        </div>
      </div>
    </>
  );
}
