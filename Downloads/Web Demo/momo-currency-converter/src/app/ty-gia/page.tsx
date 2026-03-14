import CurrencyConverter from '@/components/CurrencyConverter';
import { getPopularCurrencies } from '@/data/currencies';
import Link from 'next/link';

export default function TyGiaHome() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-pink-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent mb-6">
            Quy Đổi <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-700">Ngoại Tệ</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Công cụ quy đổi tiền tệ realtime với tỷ giá liên ngân hàng. Chuyển tiền quốc tế qua MoMo nhanh 30s, phí thấp nhất thị trường.
          </p>

          <div className="max-w-4xl mx-auto">
            <CurrencyConverter />
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Cặp tỷ giá phổ biến
          </h2>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
            {[
              ['USD → VND', 'usd-sang-vnd/'],
              ['EUR → VND', 'eur-sang-vnd/'],
              ['JPY → VND', 'jpy-sang-vnd/'],
              ['KRW → VND', 'krw-sang-vnd/'],
              ['VND → USD', 'vnd-sang-usd/'],
              ['VND → EUR', 'vnd-sang-eur/']
            ].map(([label, href]) => (
              <Link
                key={href}
                href={`/ty-gia/${href}`}
                className="group h-32 flex flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-lg border border-gray-100 hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-200/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden relative"
              >
                <div className="text-3xl font-black text-gray-900 mb-2 group-hover:text-pink-600">
                  {label}
                </div>
                <div className="text-sm text-gray-500 text-center">
                  Click để xem tỷ giá & quy đổi
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Bài viết gần đây
            </h2>
            <Link href="/ty-gia/blog" className="text-pink-600 font-semibold hover:text-pink-700">
              Xem tất cả →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                emoji: '💱',
                title: 'Hướng dẫn chuyển tiền quốc tế trên MoMo',
                excerpt: 'Cách chuyển tiền quốc tế nhanh chóng, an toàn với phí thấp nhất thị trường qua MoMo.',
                slug: 'huong-dan-chuyen-tien-quoc-te-tren-momo'
              },
              {
                emoji: '📊',
                title: 'Tiêu chuẩn tỷ giá hối đoái là gì?',
                excerpt: 'Tìm hiểu về tỷ giá hối đoái, cách tính toán và những yếu tố ảnh hưởng đến tỷ giá.',
                slug: 'tieu-chuan-ty-gia-hoi-doai-la-gi'
              },
              {
                emoji: '🔒',
                title: 'Cách bảo vệ tiền khi chuyển quốc tế',
                excerpt: 'Những lưu ý quan trọng để bảo vệ tiền khi chuyển sang nước ngoài.',
                slug: 'cach-bao-ve-tien-khi-chuyen-quoc-te'
              }
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/ty-gia/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:border-pink-300 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{post.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-pink-600 font-semibold text-sm">
                  Đọc thêm →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why MoMo */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Tại sao chọn MoMo để chuyển ngoại tệ?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl text-pink-600">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tốc độ cao</h3>
              <p className="text-gray-600 leading-relaxed">
                Chuyển tiền quốc tế chỉ trong 30 giây. Không chờ đợi, không giấy tờ.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl text-pink-600">
                🔒
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">An toàn tuyệt đối</h3>
              <p className="text-gray-600 leading-relaxed">
                Bảo mật ngân hàng cấp cao, mã hóa end-to-end, bảo hiểm giao dịch.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-2xl text-pink-600">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tỷ giá cạnh tranh</h3>
              <p className="text-gray-600 leading-relaxed">
                Cập nhật liên ngân hàng realtime, phí thấp nhất, không phí ẩn.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
