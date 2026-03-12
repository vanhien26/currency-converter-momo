'use client';

import { useState, useCallback, useMemo } from 'react';
import { currencies, getExchangeRate, type Currency } from '@/data/currencies';

interface Props {
  defaultFrom?: string;
  defaultTo?: string;
}

export default function CurrencyConverter({ defaultFrom = 'USD', defaultTo = 'VND' }: Props) {
  const [fromCode, setFromCode] = useState(defaultFrom);
  const [toCode, setToCode] = useState(defaultTo);
  const [amount, setAmount] = useState('1');
  const [direction, setDirection] = useState<'from' | 'to'>('from');

  const rate = useMemo(() => getExchangeRate(fromCode, toCode), [fromCode, toCode]);
  const reverseRate = useMemo(() => getExchangeRate(toCode, fromCode), [fromCode, toCode]);

  const numericAmount = parseFloat(amount) || 0;
  const convertedAmount = direction === 'from' ? numericAmount * rate : numericAmount * reverseRate;

  const fromCurrency = currencies.find((c) => c.code === fromCode)!;
  const toCurrency = currencies.find((c) => c.code === toCode)!;

  const handleSwap = useCallback(() => {
    setFromCode(toCode);
    setToCode(fromCode);
  }, [fromCode, toCode]);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return num.toLocaleString('vi-VN', { maximumFractionDigits: 2 });
    }
    if (num >= 1) {
      return num.toLocaleString('vi-VN', { maximumFractionDigits: 4 });
    }
    return num.toLocaleString('vi-VN', { maximumFractionDigits: 6 });
  };

  return (
    <div className="w-full">
      {/* Converter Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-100/50 sm:p-8">
        {/* From Input */}
        <div className="mb-2">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
            Bạn có
          </label>
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/50 p-3 transition-all focus-within:border-[#A50064] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#A50064]/10">
            <select
              value={fromCode}
              onChange={(e) => setFromCode(e.target.value)}
              className="min-w-[140px] rounded-lg border-0 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A50064]/20"
              aria-label="Chọn tiền tệ nguồn"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code} – {c.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setDirection('from');
              }}
              placeholder="0"
              className="w-full bg-transparent text-right text-2xl font-bold text-gray-900 outline-none placeholder:text-gray-300 sm:text-3xl"
              aria-label={`Số tiền ${fromCode}`}
            />
          </div>
        </div>

        {/* Swap Button + Rate Display */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" />
          <button
            onClick={handleSwap}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-500 shadow-sm transition-all hover:border-[#A50064] hover:text-[#A50064] hover:shadow-md active:scale-95"
            aria-label="Đổi chiều quy đổi"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
          <div className="absolute right-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            1 {fromCode} = {formatNumber(rate)} {toCode}
          </div>
        </div>

        {/* To Output */}
        <div>
          <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
            Bạn nhận được
          </label>
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gradient-to-r from-[#FFF5F9] to-white p-3">
            <select
              value={toCode}
              onChange={(e) => setToCode(e.target.value)}
              className="min-w-[140px] rounded-lg border-0 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A50064]/20"
              aria-label="Chọn tiền tệ đích"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code} – {c.name}
                </option>
              ))}
            </select>
            <div className="w-full text-right text-2xl font-bold text-[#A50064] sm:text-3xl">
              {formatNumber(direction === 'from' ? numericAmount * rate : numericAmount)}
            </div>
          </div>
        </div>

        {/* Rate Details */}
        <div className="mt-6 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">1 {fromCode}</span> = {formatNumber(rate)} {toCode}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">1 {toCode}</span> = {formatNumber(reverseRate)} {fromCode}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <a
            href="#"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#A50064] to-[#D81B60] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-pink-200/40 transition-all hover:shadow-xl hover:shadow-pink-200/50 active:scale-[0.98]"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Chuyển tiền qua MoMo
          </a>
          <p className="mt-2 text-center text-xs text-gray-400">
            Phí chuyển tiền quốc tế từ 0đ. Tỷ giá cạnh tranh, cập nhật liên tục.
          </p>
        </div>
      </div>

      {/* Quick Amount Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        {[1, 10, 100, 1000, 5000, 10000].map((val) => (
          <button
            key={val}
            onClick={() => {
              setAmount(val.toString());
              setDirection('from');
            }}
            className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-all hover:border-[#A50064] hover:text-[#A50064]"
          >
            {val.toLocaleString()} {fromCode}
          </button>
        ))}
      </div>
    </div>
  );
}
