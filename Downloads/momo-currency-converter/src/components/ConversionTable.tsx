import { getExchangeRate, type Currency } from '@/data/currencies';

interface Props {
  baseCurrency: Currency;
  targetCurrencies: Currency[];
  amounts?: number[];
}

export default function ConversionTable({
  baseCurrency,
  targetCurrencies,
  amounts = [1, 5, 10, 50, 100, 500, 1000],
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <caption className="sr-only">
          Bảng quy đổi {baseCurrency.name} ({baseCurrency.code}) sang các loại tiền tệ khác
        </caption>
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-600">
              {baseCurrency.code} {baseCurrency.symbol}
            </th>
            {targetCurrencies.map((c) => (
              <th key={c.code} scope="col" className="px-4 py-3 text-right font-semibold text-gray-600">
                {c.flag} {c.code}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {amounts.map((amt, i) => (
            <tr
              key={amt}
              className={`border-b border-gray-100 transition-colors hover:bg-[#FFF5F9] ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                }`}
            >
              <td className="px-4 py-3 font-semibold text-gray-900">
                {amt.toLocaleString('vi-VN')} {baseCurrency.code}
              </td>
              {targetCurrencies.map((c) => {
                const rate = getExchangeRate(baseCurrency.code, c.code);
                const value = amt * rate;
                const formatted =
                  value >= 1000
                    ? value.toLocaleString('vi-VN', { maximumFractionDigits: 2 })
                    : value.toLocaleString('vi-VN', { maximumFractionDigits: 4 });
                return (
                  <td key={c.code} className="px-4 py-3 text-right tabular-nums text-gray-700">
                    {formatted}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
