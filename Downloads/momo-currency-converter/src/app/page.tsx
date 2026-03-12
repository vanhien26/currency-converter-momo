import CurrencyConverter from '@/components/CurrencyConverter';
import PopularPairs from '@/components/PopularPairs';
import { getPopularCurrencies } from '@/data/currencies';

export default function Home() {
    const popular = getPopularCurrencies().slice(0, 12);

    return (
        <div className="flex flex-col gap-12 py-12">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#FFF5F9] to-white border-b border-gray-100 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
                        Quy Đổi Ngoại Tệ & <span className="text-[#A50064]">Chuyển Tiền Quốc Tế</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                        Tỷ giá hối đoái trực tuyến cập nhật liên tục. Quy đổi nhanh chóng, chuyển tiền an toàn qua MoMo với chi phí thấp nhất.
                    </p>

                    <div className="max-w-3xl mx-auto">
                        <CurrencyConverter />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Popular Pairs */}
                <div className="mb-16">
                    <PopularPairs />
                </div>

                {/* Features / Why MoMo */}
                <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tại sao chọn MoMo?</h2>
                    <div className="grid gap-8 md:grid-cols-3 text-center">
                        <div>
                            <div className="bg-pink-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#A50064]">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-2">Nhanh chóng</h3>
                            <p className="text-sm text-gray-500">Chuyển tiền và nhận tiền ngay lập tức, không qua trung gian rườm rà.</p>
                        </div>
                        <div>
                            <div className="bg-pink-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#A50064]">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002-2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-2">Bảo mật</h3>
                            <p className="text-sm text-gray-500">Tiêu chuẩn bảo mật toàn cầu, đảm bảo an toàn tuyệt đối cho mọi giao dịch.</p>
                        </div>
                        <div>
                            <div className="bg-pink-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#A50064]">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-2">Tỷ giá tốt</h3>
                            <p className="text-sm text-gray-500">Luôn cập nhật tỷ giá liên ngân hàng cạnh tranh nhất thị trường.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}