import Link from "next/link";
import { popularPairs, getCurrency, convertCurrency, formatCurrency } from "@/data/currencies";

export default function PopularPairs() {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Cặp tiền tệ phổ biến</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {popularPairs.map(({ from, to }) => {
          const fromCur = getCurrency(from);
          const toCur = getCurrency(to);
          if (!fromCur || !toCur) return null;

          const rate = convertCurrency(1, from, to);
          const pairSlug = `${from.toLowerCase()}-${to.toLowerCase()}`;

          return (
            <Link
              key={`${from}-${to}`}
              href={`/quy-doi-ngoai-te/${pairSlug}`}
              className="card hover-lift p-4 flex flex-col gap-2 group"
            >
              {/* Flags */}
              <div className="flex items-center gap-1.5">
                <img
                  src={`https://flagcdn.com/24x18/${fromCur.flag}.png`}
                  alt={fromCur.name}
                  className="rounded-sm"
                  width={24}
                  height={18}
                />
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <img
                  src={`https://flagcdn.com/24x18/${toCur.flag}.png`}
                  alt={toCur.name}
                  className="rounded-sm"
                  width={24}
                  height={18}
                />
              </div>

              {/* Pair label */}
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#d82d8b] transition-colors">
                {from}/{to}
              </p>

              {/* Rate */}
              <p className="text-xs text-gray-500">
                1 {from} = {formatCurrency(rate, to)} {to}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
