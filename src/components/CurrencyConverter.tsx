'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { currencies, getCurrencyByCode, getExchangeRate, type Currency } from '@/data/currencies';

interface Props {
  defaultFrom?: string;
  defaultTo?: string;
}

function formatNumber(num: number): string {
  return num.toLocaleString('vi-VN', { 
    maximumFractionDigits: num < 1 ? 6 : 2,
    minimumFractionDigits: num < 1 ? 4 : 2 
  });
}

export default function CurrencyConverter({ 
  defaultFrom = 'USD', 
  defaultTo = 'VND' 
}: Props) {
  const [fromCode, setFromCode] = useState(defaultFrom);
  const [toCode, setToCode] = useState(defaultTo);
  const [amount, setAmount] = useState('1');
  const [direction, setDirection] = useState<'from' | 'to'>('from');

  const fromCurrency = useMemo(() => getCurrencyByCode(fromCode)!, [fromCode]);
  const toCurrency = useMemo(() => getCurrencyByCode(toCode)!, [toCode]);
  
  const rate = useMemo(() => getExchangeRate(fromCode, toCode), [fromCode, toCode]);
  const reverseRate = useMemo(() => getExchangeRate(toCode, fromCode), [fromCode, toCode]);
  
  const numericAmount = parseFloat(amount) || 0;
  const convertedAmount = direction === 'from' ? numericAmount * rate : numericAmount / rate;

  // Input handlers
  const handleAmountChange = useCallback((value: string, dir: 'from' | 'to') => {
    setAmount(value.replace(/[^0-9.]/g, ''));
    setDirection(dir);
  }, []);

  const handleSwap = useCallback(() => {
    const tempCode = fromCode;
    setFromCode(toCode);
    setToCode(tempCode);
    setDirection('from');
  }, [fromCode, toCode]);

  const quickAmounts = [1, 10, 100, 1000, 5000, 10000];

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Dual Input - Wise Style */}
      <div className="space-y-4">
        {/* FROM */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
            Bạn gửi
          </label>
          <div className="flex rounded-xl border-2 border-gray-200 p-3 bg-gradient-to-r from-white to-gray-50">
            <select
              value={fromCode}
              onChange={(e) => setFromCode(e.target.value)}
              className="w-28 rounded-lg border-0 bg-transparent px-2 py-2 text-lg font-bold text-gray-900 outline-none"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
            <input
              type="text"
              inputMode="decimal"
              value={direction === 'from' ? amount : formatNumber(convertedAmount)}
              onChange={(e) => handleAmountChange(e.target.value, 'from')}
              placeholder="0"
              className="ml-3 flex-1 text-right text-3xl font-bold text-gray-900 bg-transparent outline-none placeholder:text-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>

        {/* SWAP + RATE */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" aria-hidden="true" />
          <button
            type="button"
            onClick={handleSwap}
            className="relative z-10 grid h-11 w-11 place-items-center rounded-full border-2 border-gray-200 bg-white shadow-sm transition-all hover:border-pink-500 hover:text-pink-600 hover:shadow-md active:scale-95"
            aria-label="Hoán đổi tiền tệ"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
          {rate > 0 && (
            <div className="absolute right-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
              1 {fromCode} = {formatNumber(rate)} {toCode}
            </div>
          )}
        </div>

        {/* TO */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500">
            Bạn nhận
          </label>
          <div className="flex rounded-xl border-2 border-gray-200 p-3 bg-gradient-to-r from-pink-50 to-white">
            <select
              value={toCode}
              onChange={(e) => setToCode(e.target.value)}
              className="w-28 rounded-lg border-0 bg-transparent px-2 py-2 text-lg font-bold text-gray-900 outline-none"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
            <div className="ml-3 flex flex-1 items-end justify-end text-3xl font-bold text-pink-600">
              {direction === 'to' ? amount : formatNumber(convertedAmount)}
            </div>
          </div>
        </div>
      </div>

      {/* Rate Info */}
      {rate > 0 && (
        <div className="grid grid-cols-2 gap-4 rounded-xl bg-gradient-to-r from-gray-50 to-pink-50 p-4 text-xs">
          <div>
            <div className="text-gray-500 uppercase tracking-wider font-medium">Tỷ giá</div>
            <div className="font-bold text-pink-600 mt-1">1 {fromCode} = {formatNumber(rate)} {toCode}</div>
          </div>
          <div className="text-right">
            <div className="text-gray-500 uppercase tracking-wider font-medium">Ngược lại</div>
            <div className="font-bold text-pink-600 mt-1">1 {toCode} = {formatNumber(reverseRate)} {fromCode}</div>
          </div>
        </div>
      )}

      {/* Quick Amounts */}
      <div className="grid grid-cols-3 gap-2">
        {quickAmounts.map((val) => (
          <button
            key={val}
            type="button"
            onClick={() => {
              setAmount(val.toString());
              setDirection('from');
            }}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition-all hover:border-pink-400 hover:bg-pink-50 hover:text-pink-600 active:scale-95"
          >
            {val.toLocaleString('vi-VN')} {fromCode}
          </button>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#"
        className="block w-full rounded-2xl bg-gradient-to-r from-pink-600 to-pink-700 px-6 py-4 text-center text-sm font-semibold text-white shadow-xl hover:shadow-2xl hover:from-pink-700 hover:to-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 active:scale-[0.98] transition-all"
      >
        <span>Chuyển tiền quốc tế qua MoMo</span>
        <span className="ml-1 text-pink-200">→</span>
      </a>

      <p className="text-center text-xs text-gray-500">
        Tỷ giá cập nhật realtime • Phí thấp nhất thị trường
      </p>
    </div>
  );
}

