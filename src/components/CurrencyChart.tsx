"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { generateChartData, formatCurrency } from "@/data/currencies";

interface CurrencyChartProps {
  from: string;
  to: string;
}

export default function CurrencyChart({ from, to }: CurrencyChartProps) {
  const data = generateChartData(from, to);

  // Tính min/max để hiển thị thay đổi %
  const rates = data.map((d) => d.rate);
  const minRate = Math.min(...rates);
  const maxRate = Math.max(...rates);
  const firstRate = rates[0];
  const lastRate = rates[rates.length - 1];
  const change = ((lastRate - firstRate) / firstRate) * 100;
  const isPositive = change >= 0;

  return (
    <div className="card mt-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Biểu đồ tỷ giá {from}/{to}
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">30 ngày gần nhất</p>
        </div>
        <div className="text-right">
          <p className={`text-lg font-bold ${isPositive ? "text-green-600" : "text-red-500"}`}>
            {isPositive ? "+" : ""}{change.toFixed(2)}%
          </p>
          <p className="text-xs text-gray-500">30 ngày</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6 p-3 bg-[#fdf0f7] rounded-xl">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">Hiện tại</p>
          <p className="font-bold text-gray-900 text-sm">{formatCurrency(lastRate, to)}</p>
        </div>
        <div className="text-center border-x border-[#d82d8b]/20">
          <p className="text-xs text-gray-500 mb-1">Thấp nhất</p>
          <p className="font-bold text-red-500 text-sm">{formatCurrency(minRate, to)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">Cao nhất</p>
          <p className="font-bold text-green-600 text-sm">{formatCurrency(maxRate, to)}</p>
        </div>
      </div>

      {/* Recharts line chart */}
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={false}
              interval={6}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={false}
              width={55}
              tickFormatter={(v) => formatCurrency(v, to)}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #f3f4f6",
                fontSize: "12px",
              }}
              formatter={(value: number) => [
                `${formatCurrency(value, to)} ${to}`,
                `1 ${from}`,
              ]}
            />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#d82d8b"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#d82d8b" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
