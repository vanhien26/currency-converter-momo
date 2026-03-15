import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { generateFAQSEO } from "@/lib/seo";

const seo = generateFAQSEO();

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

const faqItems = [
  {
    question: "Tỷ giá trên công cụ này có chính xác không?",
    answer:
      "Tỷ giá được cập nhật dựa trên dữ liệu thị trường ngoại hối quốc tế. Tuy nhiên, tỷ giá thực tế tại ngân hàng hoặc điểm giao dịch có thể khác một chút do phí dịch vụ và thời điểm cập nhật. Công cụ này chỉ mang tính tham khảo.",
  },
  {
    question: "Có thể quy đổi được những loại tiền tệ nào?",
    answer:
      "Hiện tại công cụ hỗ trợ 15+ loại tiền tệ phổ biến bao gồm VND, USD, EUR, GBP, JPY, KRW, CNY, SGD, THB, AUD, CAD, CHF, HKD, MYR, TWD. Chúng tôi sẽ tiếp tục bổ sung thêm các loại tiền tệ khác.",
  },
  {
    question: "Tỷ giá được cập nhật bao lâu một lần?",
    answer:
      "Tỷ giá được cập nhật liên tục trong giờ giao dịch thị trường ngoại hối quốc tế (24/5). Vào cuối tuần và ngày lễ, tỷ giá sẽ giữ nguyên từ phiên giao dịch cuối cùng.",
  },
  {
    question: "Làm thế nào để đổi ngoại tệ qua MoMo?",
    answer:
      "Bạn có thể đổi ngoại tệ qua ví MoMo bằng cách: Mở app MoMo → Chọn 'Dịch vụ' → Tìm 'Ngoại tệ' hoặc 'Chuyển tiền quốc tế' → Chọn loại tiền và số lượng → Xác nhận giao dịch. Lưu ý cần có tài khoản MoMo đã xác minh.",
  },
  {
    question: "Phí quy đổi ngoại tệ là bao nhiêu?",
    answer:
      "Công cụ quy đổi tỷ giá này hoàn toàn miễn phí. Tuy nhiên khi thực hiện giao dịch thực tế, ngân hàng hoặc dịch vụ chuyển tiền có thể áp dụng phí riêng. Vui lòng kiểm tra biểu phí tại nơi bạn muốn giao dịch.",
  },
  {
    question: "Tỷ giá mua vào và bán ra là gì?",
    answer:
      "Tỷ giá mua vào là giá ngân hàng mua ngoại tệ từ khách hàng. Tỷ giá bán ra là giá ngân hàng bán ngoại tệ cho khách hàng. Chênh lệch giữa hai giá này (spread) là lợi nhuận của ngân hàng. Công cụ của chúng tôi hiển thị tỷ giá giữa (mid rate).",
  },
  {
    question: "Tại sao tỷ giá tại các ngân hàng khác nhau lại khác nhau?",
    answer:
      "Mỗi ngân hàng có thể áp dụng tỷ giá khác nhau tùy theo chính sách kinh doanh, dự trữ ngoại tệ và thời điểm cập nhật. Ngoài ra, tỷ giá cũng có thể khác nhau theo số lượng giao dịch và loại khách hàng.",
  },
  {
    question: "Đồng VND có bị phá giá không?",
    answer:
      "Ngân hàng Nhà nước Việt Nam (NHNN) điều hành tỷ giá theo cơ chế tỷ giá trung tâm có biên độ dao động. NHNN can thiệp để ổn định tỷ giá, tránh biến động lớn ảnh hưởng đến nền kinh tế. Lịch sử cho thấy VND thường mất giá nhẹ so với USD khoảng 1-3%/năm.",
  },
  {
    question: "Có thể xem lịch sử tỷ giá không?",
    answer:
      "Có, công cụ của chúng tôi cung cấp biểu đồ lịch sử tỷ giá 30 ngày cho các cặp tiền tệ. Để xem, bạn chọn cặp tiền tệ muốn xem và nhấn 'Xem chi tiết'. Biểu đồ sẽ hiển thị xu hướng tỷ giá trong 30 ngày qua.",
  },
  {
    question: "MoMo có hỗ trợ chuyển tiền quốc tế không?",
    answer:
      "Có, MoMo cung cấp dịch vụ chuyển tiền quốc tế thông qua các đối tác. Bạn có thể gửi và nhận tiền từ nhiều quốc gia với tỷ giá cạnh tranh và phí thấp. Chi tiết vui lòng xem tại momo.vn hoặc liên hệ hotline MoMo.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "FAQ" }]} />

      {/* Hero */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-[#fdf0f7] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">❓</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Câu Hỏi Thường Gặp
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Giải đáp mọi thắc mắc về quy đổi ngoại tệ, tỷ giá và dịch vụ MoMo
        </p>
      </div>

      {/* FAQ Accordion */}
      <FAQSection items={faqItems} title="Tất cả câu hỏi" />

      {/* Contact CTA */}
      <div className="mt-12 card text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Không tìm thấy câu trả lời?
        </h3>
        <p className="text-gray-500 text-sm mb-5">
          Liên hệ đội hỗ trợ MoMo để được giải đáp trực tiếp
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://momo.vn/lien-he"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-momo"
          >
            Liên hệ MoMo
          </a>
          <a
            href="tel:1900-1792"
            className="border-2 border-[#d82d8b] text-[#d82d8b] font-semibold px-6 py-3 rounded-xl hover:bg-[#fdf0f7] transition-colors"
          >
            📞 1900 1792
          </a>
        </div>
      </div>
    </div>
  );
}
