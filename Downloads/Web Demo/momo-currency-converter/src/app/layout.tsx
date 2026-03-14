import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | MoMo',
    default: 'MoMo - Siêu Ứng Dụng Tài Chính',
  },
  description: 'MoMo - Ứng dụng thanh toán, chuyển tiền, đầu tư và quản lý tài chính hàng đầu Việt Nam.',
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#A50064" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="/" className="flex items-center gap-2" aria-label="MoMo Trang chủ">
              {/* MoMo Logo */}
<img src="https://momo.vn/favicon.ico" alt="MoMo" className="h-9 w-9" />
              <span className="text-lg font-bold text-gray-900">
                Mo<span className="text-[#A50064]">Mo</span>
              </span>
            </a>

            <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
              <a href="/ty-gia/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Blog
              </a>
              <a href="/faq" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                FAQ
              </a>
              <a href="/ty-gia/" className="text-sm font-medium text-[#A50064] hover:text-[#8B0055]">
                Quy đổi
              </a>
            </nav>

            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-[#A50064] to-[#D81B60] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-pink-200/50 transition-all hover:shadow-lg hover:shadow-pink-200/60"
            >
              Tải MoMo
            </a>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer — SEO-rich internal links */}
        <footer className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Quy đổi phổ biến
                </h3>
                <ul className="space-y-2">
                  {[
                    ['USD sang VND', '/ty-gia/usd-sang-vnd/'],
                    ['EUR sang VND', '/ty-gia/eur-sang-vnd/'],
                    ['JPY sang VND', '/ty-gia/jpy-sang-vnd/'],
                    ['KRW sang VND', '/ty-gia/krw-sang-vnd/'],
                    ['GBP sang VND', '/ty-gia/gbp-sang-vnd/'],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <a href={href} className="text-sm text-gray-600 hover:text-[#A50064]">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Loại tiền tệ
                </h3>
                <ul className="space-y-2">
                  {[
                    ['Đô la Mỹ (USD)', '/ty-gia/usd-do-la-my/'],
                    ['Euro (EUR)', '/ty-gia/eur-euro/'],
                    ['Yên Nhật (JPY)', '/ty-gia/jpy-yen-nhat/'],
                    ['Won Hàn Quốc (KRW)', '/ty-gia/krw-won-han-quoc/'],
                    ['Nhân dân tệ (CNY)', '/ty-gia/cny-nhan-dan-te/'],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <a href={href} className="text-sm text-gray-600 hover:text-[#A50064]">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Dịch vụ MoMo
                </h3>
                <ul className="space-y-2">
                  {[
                    ['Chuyển tiền quốc tế', '/chuyen-tien-quoc-te/'],
                    ['Tài khoản đa tiền tệ', '/tai-khoan-da-tien-te/'],
                    ['Thanh toán quốc tế', '/thanh-toan-quoc-te/'],
                    ['Mua bán ngoại tệ', '/mua-ban-ngoai-te/'],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <a href={href} className="text-sm text-gray-600 hover:text-[#A50064]">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Về MoMo
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  MoMo là siêu ứng dụng tài chính hàng đầu Việt Nam với hơn 40 triệu người dùng.
                  Quy đổi ngoại tệ, chuyển tiền quốc tế nhanh chóng, an toàn.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    App Store
                  </a>
                  <a
                    href="#"
                    className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8 text-center text-xs text-gray-400">
              <p>© {new Date().getFullYear()} MoMo. Tỷ giá hối đoái chỉ mang tính tham khảo, cập nhật liên tục từ nhiều nguồn dữ liệu độc lập.</p>
              <p className="mt-1">Công ty Cổ phần Dịch vụ Di động Trực tuyến (M_Service) — Giấy phép NHNN số 01/GP-NHNN</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
