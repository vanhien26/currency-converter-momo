"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  currencies,
  convertCurrency,
  formatCurrency,
  getCurrency,
} from "@/data/currencies";

interface CurrencyConverterProps {
  initialFrom?: string;
  initialTo?: string;
  initialAmount?: number;
}

export default function CurrencyConverter({
  initialFrom = "USD",
  initialTo = "VND",
  initialAmount = 1,
}: CurrencyConverterProps) {
  const router = useRouter();
  const [amount, setAmount] = useState(initialAmount.toString());
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);
  const [result, setResult] = useState<number | null>(null);

  // Tính toán kết quả mỗi khi thay đổi
  useEffect(() => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount) && numAmount > 0) {
      setResult(convertCurrency(numAmount, from, to));
    } else {
      setResult(null);
    }
  }, [amount, from, to]);

  // Đổi chiều quy đổi
  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  // Điều hướng sang trang cặp tiền tệ
  const handleNavigateToPair = () => {
    const pairSlug = `${from.toLowerCase()}-${to.toLowerCase()}`;
    router.push(`/quy-doi-ngoai-te/${pairSlug}`);
  };

  const fromCurrency = getCurrency(from);
  const toCurrency = getCurrency(to);
  const rate = convertCurrency(1, from, to);

  return (
    <div className="card max-w-2xl mx-auto">
      {/* Tiêu đề */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
          Quy đổi ngoại tệ
        </h1>
        <p className="text-gray-500 text-sm">
          Tỷ giá cập nhật · Miễn phí · Chính xác
        </p>
      </div>

      {/* Input số tiền */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Số tiền
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-momo w-full text-lg font-semibold"
          placeholder="Nhập số tiền..."
          min="0"
          step="any"
        />
      </div>

      {/* Chọn tiền tệ */}
      <div className="flex items-center gap-3 mb-6">
        {/* From */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Từ
          </label>
          <div className="relative">
            {fromCurrency && (
              <img
                src={`https://flagcdn.com/24x18/${fromCurrency.flag}.png`}
                alt={fromCurrency.name}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-sm"
                width={24}
                height={18}
              />
            )}
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="select-momo w-full pl-10"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} - {c.namVi}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Nút đổi chiều */}
        <button
          onClick={handleSwap}
          className="mt-6 p-2.5 rounded-xl bg-[#fdf0f7] hover:bg-[#d82d8b] hover:text-white text-[#d82d8b] transition-colors flex-shrink-0"
          title="Đổi chiều"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </button>

        {/* To */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Sang
          </label>
          <div className="relative">
            {toCurrency && (
              <img
                src={`https://flagcdn.com/24x18/${toCurrency.flag}.png`}
                alt={toCurrency.name}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-sm"
                width={24}
                height={18}
              />
            )}
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="select-momo w-full pl-10"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} - {c.namVi}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Kết quả */}
      {result !== null && (
        <div className="bg-[#fdf0f7] rounded-2xl p-5 text-center mb-4">
          <p className="text-sm text-gray-500 mb-1">
            {amount} {from} =
          </p>
          <p className="text-3xl md:text-4xl font-bold text-[#d82d8b]">
            {formatCurrency(result, to)}
          </p>
          <p className="text-lg text-gray-700 font-medium mt-0.5">{to}</p>
          <p className="text-xs text-gray-400 mt-2">
            1 {from} = {formatCurrency(rate, to)} {to} · 1 {to} ={" "}
            {formatCurrency(convertCurrency(1, to, from), from)} {from}
          </p>
        </div>
      )}

      {/* Nút xem chi tiết */}
      <button
        onClick={handleNavigateToPair}
        className="btn-momo w-full text-center"
      >
        Xem chi tiết {from}/{to} →
      </button>

      {/* Lưu ý tỷ giá */}
      <p className="text-xs text-center text-gray-400 mt-3">
        * Tỷ giá chỉ mang tính tham khảo, không dùng cho giao dịch chính thức
      </p>
    </div>
  );
}
