import { getCurrency } from "@/data/currencies";

export function generatePairSEO(from: string, to: string) {
  const fromCurrency = getCurrency(from);
  const toCurrency = getCurrency(to);

  if (!fromCurrency || !toCurrency) {
    return {
      title: "Quy đổi ngoại tệ | MoMo",
      description: "Công cụ quy đổi ngoại tệ chính xác, cập nhật tỷ giá realtime.",
      keywords: [],
    };
  }

  const title = `Tỷ giá ${from}/${to} hôm nay - Quy đổi ${fromCurrency.namVi} sang ${toCurrency.namVi} | MoMo`;
  const description = `Tỷ giá ${from}/${to} mới nhất hôm nay. Quy đổi ${fromCurrency.namVi} (${from}) sang ${toCurrency.namVi} (${to}) chính xác, nhanh chóng với công cụ của MoMo.`;
  const keywords = [
    `tỷ giá ${from} ${to}`,
    `quy đổi ${from} sang ${to}`,
    `${fromCurrency.name} to ${toCurrency.name}`,
    `${from}/${to} hôm nay`,
    `tỷ giá ngoại tệ`,
    `đổi tiền ${from}`,
  ];

  return { title, description, keywords };
}

export function generateHomeSEO() {
  return {
    title: "Quy đổi Ngoại Tệ Trực Tuyến - Tỷ Giá Realtime | MoMo",
    description:
      "Công cụ quy đổi ngoại tệ trực tuyến của MoMo. Tỷ giá USD, EUR, JPY, KRW, GBP... cập nhật realtime. Miễn phí, nhanh chóng, chính xác.",
    keywords: [
      "quy đổi ngoại tệ",
      "tỷ giá hôm nay",
      "đổi tiền online",
      "tỷ giá USD VND",
      "công cụ quy đổi tiền tệ",
      "MoMo ngoại tệ",
    ],
  };
}

export function generateBlogSEO() {
  return {
    title: "Blog Tỷ Giá & Ngoại Tệ | MoMo",
    description:
      "Cập nhật tin tức, phân tích tỷ giá ngoại tệ mới nhất. Hướng dẫn quy đổi, so sánh tỷ giá và mẹo đổi tiền có lợi nhất.",
    keywords: [
      "tin tức tỷ giá",
      "blog ngoại tệ",
      "phân tích tỷ giá",
      "hướng dẫn đổi tiền",
    ],
  };
}

export function generateFAQSEO() {
  return {
    title: "Câu Hỏi Thường Gặp về Quy Đổi Ngoại Tệ | MoMo",
    description:
      "Giải đáp các câu hỏi thường gặp về tỷ giá, quy đổi ngoại tệ, cách sử dụng MoMo để chuyển tiền quốc tế.",
    keywords: [
      "FAQ ngoại tệ",
      "hỏi đáp tỷ giá",
      "câu hỏi thường gặp",
      "hướng dẫn MoMo",
    ],
  };
}
