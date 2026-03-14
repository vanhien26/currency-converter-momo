export default function FAQPage() {
  const faqs = [
    {
      question: 'Làm thế nào để quy đổi ngoại tệ trên MoMo?',
      answer: 'Chọn "Ngoại tệ" → Chọn cặp tiền → Nhập số tiền → Xác nhận tỷ giá real-time và swap instant.'
    },
    {
      question: 'Tỷ giá trên MoMo có chính xác không?',
      answer: 'Cập nhật mỗi 15s từ liên ngân hàng + spread cạnh tranh nhất. Cam kết best execution.'
    },
    {
      question: 'Có phí chuyển đổi ngoại tệ không?',
      answer: '0.8% all-in (swap + FX). Không hidden fee. Thấp nhất thị trường.'
    },
    {
      question: 'Hỗ trợ những loại tiền tệ nào?',
      answer: '31 currencies phổ biến: USD, EUR, JPY, GBP, AUD, CAD, SGD, KRW, THB, PHP...'
    },
    {
      question: 'Chuyển tiền quốc tế mất bao lâu?',
      answer: 'Instant to MoMo wallet. 5-30p bank account. 24/7 holidays.'
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h1>
          <p className="text-xl text-gray-600">Về quy đổi ngoại tệ và dịch vụ MoMo.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

