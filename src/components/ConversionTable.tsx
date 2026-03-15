import { convertCurrency, formatCurrency, getCurrency } from "@/data/currencies";

interface ConversionTableProps {
  from: string;
  to: string;
}

// Các mức giá trị phổ biến để hiển thị trong bảng
const AMOUNTS = [1, 5, 10, 20, 50, 100, 200, 500, 1000, 5000, 10000];

export default function ConversionTable({ from, to }: ConversionTableProps) {
  const fromCurrency = getCurrency(from);
  const toCurrency = getCurrency(to);

  if (!fromCurrency || !toCurrency) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Bảng quy đổi {from} sang {to}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Bảng: from → to */}
        <div className="card overflow-hidden p-0">
          <div className="bg-[#d82d8b] px-4 py-3">
            <h3 className="text-white font-semibold text-sm">
              {fromCurrency.namVi} ({from}) → {toCurrency.namVi} ({to})
            </h3>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#fdf0f7]">
                <th className="text-left px-4 py-2.5 font-semibold text-gray-700">{from}</th>
                <th className="text-right px-4 py-2.5 font-semibold text-gray-700">{to}</th>
              </tr>
            </thead>
            <tbody>
              {AMOUNTS.map((amount, index) => (
                <tr
                  key={amount}
                  className={`border-t border-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                >
                  <td className="px-4 py-2.5 text-gray-600">
                    {formatCurrency(amount, from)} {from}
                  </td>
                  <td className="px-4 py-2.5 text-right font-medium text-gray-900">
                    {formatCurrency(convertCurrency(amount, from, to), to)} {to}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bảng ngược: to → from */}
        <div className="card overflow-hidden p-0">
          <div className="bg-gray-700 px-4 py-3">
            <h3 className="text-white font-semibold text-sm">
              {toCurrency.namVi} ({to}) → {fromCurrency.namVi} ({from})
            </h3>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-2.5 font-semibold text-gray-700">{to}</th>
                <th className="text-right px-4 py-2.5 font-semibold text-gray-700">{from}</th>
              </tr>
            </thead>
            <tbody>
              {AMOUNTS.map((amount, index) => (
                <tr
                  key={amount}
                  className={`border-t border-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                >
                  <td className="px-4 py-2.5 text-gray-600">
                    {formatCurrency(amount, to)} {to}
                  </td>
                  <td className="px-4 py-2.5 text-right font-medium text-gray-900">
                    {formatCurrency(convertCurrency(amount, to, from), from)} {from}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
