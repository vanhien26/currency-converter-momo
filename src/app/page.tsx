import type { Metadata } from "next";
import CurrencyConverter from "@/components/CurrencyConverter";
import PopularPairs from "@/components/PopularPairs";
import { generateHomeSEO } from "@/lib/seo";

const seo = generateHomeSEO();

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero section */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-[#fdf0f7] text-[#d82d8b] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          <span className="w-2 h-2 bg-[#d82d8b] rounded-full animate-pulse"></span>
          Tỷ giá cập nhật liên tục
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
          Quy đổi ngoại tệ{" "}
          <span className="text-[#d82d8b]">miễn phí</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Tỷ giá USD, EUR, JPY, KRW và 15+ loại tiền tệ. Nhanh chóng, chính xác, không phí ẩn.
        </p>
      </div>

      {/* Converter */}
      <CurrencyConverter initialFrom="USD" initialTo="VND" initialAmount={1} />

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
        {[
          {
            icon: "⚡",
            title: "Cập nhật nhanh",
            desc: "Tỷ giá được cập nhật liên tục, phản ánh thị trường thực tế",
          },
          {
            icon: "🔒",
            title: "An toàn & Tin cậy",
            desc: "Dữ liệu từ các nguồn uy tín, được MoMo kiểm chứng",
          },
          {
            icon: "📱",
            title: "Miễn phí hoàn toàn",
            desc: "Không phí ẩn, không đăng ký, sử dụng ngay lập tức",
          },
        ].map((f) => (
          <div key={f.title} className="card text-center hover-lift">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Popular pairs */}
      <PopularPairs />

      {/* SEO text */}
      <section className="mt-12 card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Công cụ quy đổi ngoại tệ trực tuyến
        </h2>
        <div className="prose text-sm text-gray-600 space-y-3">
          <p>
            Công cụ quy đổi ngoại tệ của MoMo cung cấp tỷ giá hối đoái mới nhất
            cho hơn 15 loại tiền tệ phổ biến trên thế giới. Từ USD/VND, EUR/VND
            đến JPY/VND, KRW/VND, bạn có thể tra cứu và quy đổi nhanh chóng ngay
            trên trình duyệt.
          </p>
          <p>
            Tỷ giá được cập nhật dựa trên dữ liệu thị trường ngoại hối quốc tế,
            giúp bạn có cái nhìn chính xác về giá trị đồng tiền. Dù bạn đang
            chuẩn bị đi du lịch nước ngoài, nhận kiều hối hay theo dõi biến động
            tỷ giá để đầu tư, công cụ này đều đáp ứng được nhu cầu của bạn.
          </p>
        </div>
      </section>
    </div>
  );
}
