export interface Currency {
  code: string;
  name: string;
  namVi: string;
  symbol: string;
  flag: string;
  // Tỷ giá so với USD (giả lập, cập nhật thực tế từ API)
  rateToUSD: number;
}

export const currencies: Currency[] = [
  { code: "VND", name: "Vietnamese Dong", namVi: "Đồng Việt Nam", symbol: "₫", flag: "vn", rateToUSD: 25450 },
  { code: "USD", name: "US Dollar", namVi: "Đô la Mỹ", symbol: "$", flag: "us", rateToUSD: 1 },
  { code: "EUR", name: "Euro", namVi: "Euro", symbol: "€", flag: "eu", rateToUSD: 0.92 },
  { code: "GBP", name: "British Pound", namVi: "Bảng Anh", symbol: "£", flag: "gb", rateToUSD: 0.79 },
  { code: "JPY", name: "Japanese Yen", namVi: "Yên Nhật", symbol: "¥", flag: "jp", rateToUSD: 149.5 },
  { code: "KRW", name: "South Korean Won", namVi: "Won Hàn Quốc", symbol: "₩", flag: "kr", rateToUSD: 1325 },
  { code: "CNY", name: "Chinese Yuan", namVi: "Nhân dân tệ", symbol: "¥", flag: "cn", rateToUSD: 7.24 },
  { code: "SGD", name: "Singapore Dollar", namVi: "Đô la Singapore", symbol: "S$", flag: "sg", rateToUSD: 1.34 },
  { code: "THB", name: "Thai Baht", namVi: "Baht Thái", symbol: "฿", flag: "th", rateToUSD: 35.1 },
  { code: "AUD", name: "Australian Dollar", namVi: "Đô la Úc", symbol: "A$", flag: "au", rateToUSD: 1.53 },
  { code: "CAD", name: "Canadian Dollar", namVi: "Đô la Canada", symbol: "C$", flag: "ca", rateToUSD: 1.36 },
  { code: "CHF", name: "Swiss Franc", namVi: "Franc Thụy Sĩ", symbol: "Fr", flag: "ch", rateToUSD: 0.89 },
  { code: "HKD", name: "Hong Kong Dollar", namVi: "Đô la Hồng Kông", symbol: "HK$", flag: "hk", rateToUSD: 7.82 },
  { code: "MYR", name: "Malaysian Ringgit", namVi: "Ringgit Malaysia", symbol: "RM", flag: "my", rateToUSD: 4.72 },
  { code: "TWD", name: "Taiwan Dollar", namVi: "Đô la Đài Loan", symbol: "NT$", flag: "tw", rateToUSD: 31.8 },
];

// Các cặp tiền tệ phổ biến
export const popularPairs = [
  { from: "USD", to: "VND" },
  { from: "EUR", to: "VND" },
  { from: "GBP", to: "VND" },
  { from: "JPY", to: "VND" },
  { from: "KRW", to: "VND" },
  { from: "CNY", to: "VND" },
  { from: "SGD", to: "VND" },
  { from: "THB", to: "VND" },
  { from: "AUD", to: "VND" },
  { from: "USD", to: "EUR" },
  { from: "USD", to: "JPY" },
  { from: "EUR", to: "GBP" },
];

export function getCurrency(code: string): Currency | undefined {
  return currencies.find((c) => c.code === code);
}

export function convertCurrency(amount: number, from: string, to: string): number {
  const fromCurrency = getCurrency(from);
  const toCurrency = getCurrency(to);
  if (!fromCurrency || !toCurrency) return 0;
  // Chuyển về USD rồi sang tiền đích
  const usdAmount = amount / fromCurrency.rateToUSD;
  return usdAmount * toCurrency.rateToUSD;
}

export function formatCurrency(amount: number, code: string): string {
  const currency = getCurrency(code);
  if (!currency) return amount.toFixed(2);

  if (code === "VND" || code === "JPY" || code === "KRW") {
    return new Intl.NumberFormat("vi-VN").format(Math.round(amount));
  }
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(amount);
}

// Tạo dữ liệu biểu đồ giả lập 30 ngày
export function generateChartData(from: string, to: string) {
  const baseRate = convertCurrency(1, from, to);
  const data = [];
  const today = new Date();

  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    // Thêm biến động ngẫu nhiên ±2%
    const variation = 1 + (Math.random() - 0.5) * 0.04;
    data.push({
      date: date.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit" }),
      rate: parseFloat((baseRate * variation).toFixed(4)),
    });
  }
  return data;
}
