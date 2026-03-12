import { getPopularCurrencies, getExchangeRate, getCurrencyByCode, type Currency } from '@/data/currencies';

interface PairLink {
  from: Currency;
  to: Currency;
  rate: number;
  href: string;
}

export default function PopularPairs({ currentCode }: { currentCode?: string }) {
  const vnd = getCurrencyByCode('VND')!;
  const popular = getPopularCurrencies().filter((c) => c.code !== 'VND');

  // Pairs: Popular → VND and VND → Popular
  const pairs: PairLink[] = [];
  popular.forEach((c) => {
    if (c.code === currentCode) return;
    pairs.push({
      from: c,
      to: vnd,
      rate: getExchangeRate(c.code, 'VND'),
      href: `/quy-doi-ngoai-te/chuyen-doi-${c.code.toLowerCase()}-sang-vnd/`,
    });
  });

  // Some cross pairs
  const crossPairs: [string, string][] = [
    ['USD', 'EUR'],
    ['USD', 'JPY'],
    ['EUR', 'GBP'],
    ['USD', 'KRW'],
  ];
  crossPairs.forEach(([a, b]) => {
    if (a === currentCode || b === currentCode) return;
    const from = getCurrencyByCode(a)!;
    const to = getCurrencyByCode(b)!;
    pairs.push({
      from,
      to,
      rate: getExchangeRate(a, b),
      href: `/quy-doi-ngoai-te/chuyen-doi-${a.toLowerCase()}-sang-${b.toLowerCase()}/`,
    });
  });

  const formatRate = (num: number): string => {
    if (num >= 1000) return num.toLocaleString('vi-VN', { maximumFractionDigits: 0 });
    if (num >= 1) return num.toLocaleString('vi-VN', { maximumFractionDigits: 2 });
    return num.toLocaleString('vi-VN', { maximumFractionDigits: 4 });
  };

  return (
    <section>
      <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
        Tỷ giá quy đổi phổ biến
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pairs.slice(0, 12).map((pair) => (
          <a
            key={`${pair.from.code}-${pair.to.code}`}
            href={pair.href}
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3.5 transition-all hover:border-[#A50064]/30 hover:bg-[#FFF5F9] hover:shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1 text-xl">
                <span>{pair.from.flag}</span>
                <span>{pair.to.flag}</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 group-hover:text-[#A50064]">
                  {pair.from.code} → {pair.to.code}
                </div>
                <div className="text-xs text-gray-500">
                  {pair.from.name} sang {pair.to.name}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold tabular-nums text-gray-900">
                {formatRate(pair.rate)}
              </div>
              <div className="text-xs text-gray-400">{pair.to.code}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
