import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quy đổi Ngoại Tệ Trực Tuyến - Tỷ Giá Realtime | MoMo",
  description:
    "Công cụ quy đổi ngoại tệ trực tuyến của MoMo. Tỷ giá USD, EUR, JPY, KRW, GBP... cập nhật realtime. Miễn phí, nhanh chóng, chính xác.",
  keywords: ["quy đổi ngoại tệ", "tỷ giá hôm nay", "đổi tiền online", "MoMo"],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "MoMo Currency Converter",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        {/* Header */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo MoMo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#d82d8b] flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div>
                <span className="font-bold text-[#d82d8b] text-lg leading-none">MoMo</span>
                <p className="text-xs text-gray-500 leading-none">Quy đổi ngoại tệ</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-[#d82d8b] transition-colors">
                Quy đổi
              </Link>
              <Link href="/blog" className="hover:text-[#d82d8b] transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="hover:text-[#d82d8b] transition-colors">
                FAQ
              </Link>
            </nav>

            {/* CTA Button */}
            <a
              href="https://momo.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block btn-momo text-sm py-2 px-4"
            >
              Tải MoMo
            </a>

            {/* Mobile menu icon */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Logo & mô tả */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#d82d8b] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <span className="font-bold text-white text-lg">MoMo</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Công cụ quy đổi ngoại tệ trực tuyến, cung cấp tỷ giá thực
                  tế, nhanh chóng và chính xác. Được tin dùng bởi hàng triệu
                  người dùng Việt Nam.
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 className="text-white font-semibold mb-3">Công cụ</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/quy-doi-ngoai-te/usd-vnd" className="hover:text-[#d82d8b] transition-colors">USD sang VND</Link></li>
                  <li><Link href="/quy-doi-ngoai-te/eur-vnd" className="hover:text-[#d82d8b] transition-colors">EUR sang VND</Link></li>
                  <li><Link href="/quy-doi-ngoai-te/jpy-vnd" className="hover:text-[#d82d8b] transition-colors">JPY sang VND</Link></li>
                  <li><Link href="/quy-doi-ngoai-te/krw-vnd" className="hover:text-[#d82d8b] transition-colors">KRW sang VND</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Thông tin</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/blog" className="hover:text-[#d82d8b] transition-colors">Blog</Link></li>
                  <li><Link href="/faq" className="hover:text-[#d82d8b] transition-colors">FAQ</Link></li>
                  <li>
                    <a href="https://momo.vn" target="_blank" rel="noopener noreferrer" className="hover:text-[#d82d8b] transition-colors">
                      MoMo.vn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
              <p>© 2024 MoMo Currency Converter. Dữ liệu tỷ giá chỉ mang tính tham khảo.</p>
              <p className="text-[#d82d8b]">Powered by MoMo ❤️</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
