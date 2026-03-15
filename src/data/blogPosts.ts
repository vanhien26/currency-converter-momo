export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Tỷ giá USD/VND hôm nay và những điều cần biết",
    slug: "ty-gia-usd-vnd-hom-nay",
    excerpt:
      "Tìm hiểu tỷ giá USD/VND mới nhất, các yếu tố ảnh hưởng và cách quy đổi nhanh chóng nhất.",
    content: `
## Tỷ giá USD/VND là gì?

Tỷ giá USD/VND cho biết 1 đô la Mỹ (USD) tương đương bao nhiêu đồng Việt Nam (VND).
Đây là một trong những cặp tiền tệ được quan tâm nhất tại Việt Nam.

## Yếu tố ảnh hưởng tỷ giá

- **Lãi suất**: Khi Fed tăng lãi suất, USD thường mạnh lên so với VND
- **Lạm phát**: Lạm phát cao ở Việt Nam có thể làm yếu VND
- **Cán cân thương mại**: Xuất khẩu nhiều hơn nhập khẩu giúp VND ổn định
- **Dự trữ ngoại hối**: NHNN can thiệp để ổn định tỷ giá

## Cách quy đổi USD sang VND

Sử dụng công cụ quy đổi của chúng tôi để tính toán nhanh và chính xác nhất.
    `,
    publishedAt: "2024-01-15",
    readTime: 5,
    category: "Tỷ giá",
    tags: ["USD", "VND", "tỷ giá", "ngoại tệ"],
  },
  {
    id: "2",
    title: "Quy đổi EUR sang VND - Hướng dẫn chi tiết 2024",
    slug: "quy-doi-eur-vnd-huong-dan",
    excerpt:
      "Hướng dẫn cách quy đổi Euro sang Việt Nam đồng chính xác nhất, kèm bảng tỷ giá cập nhật.",
    content: `
## Tỷ giá EUR/VND

Euro (EUR) là đồng tiền chung của Liên minh Châu Âu. Tỷ giá EUR/VND thường dao động
trong khoảng 26.000 - 28.000 VND cho mỗi Euro.

## Khi nào nên đổi EUR sang VND?

- Khi đi du lịch về từ Châu Âu
- Khi nhận kiều hối từ các nước EU
- Khi thanh toán cho đối tác Châu Âu

## Mẹo đổi tiền có lợi nhất

1. So sánh tỷ giá tại ngân hàng và các điểm thu đổi ngoại tệ
2. Tránh đổi tiền tại sân bay vì tỷ giá thường kém hơn
3. Theo dõi biến động tỷ giá để chọn thời điểm đổi tốt nhất
    `,
    publishedAt: "2024-01-20",
    readTime: 4,
    category: "Hướng dẫn",
    tags: ["EUR", "VND", "Euro", "quy đổi"],
  },
  {
    id: "3",
    title: "Tỷ giá JPY/VND - Yen Nhật hôm nay",
    slug: "ty-gia-jpy-vnd-yen-nhat",
    excerpt:
      "Cập nhật tỷ giá Yên Nhật so với Đồng Việt Nam mới nhất và lịch sử biến động.",
    content: `
## Yen Nhật (JPY) là gì?

Yên Nhật (JPY) là đồng tiền chính thức của Nhật Bản, là một trong những đồng tiền
được giao dịch nhiều nhất thế giới.

## Tỷ giá JPY/VND

Do Yen Nhật có mệnh giá nhỏ hơn nhiều so với các đồng tiền khác, tỷ giá JPY/VND
thường ở mức 160-175 VND cho mỗi Yên.

## Đặc điểm của Yen Nhật

- Được coi là "đồng tiền trú ẩn an toàn" trong thời điểm biến động
- BOJ (Ngân hàng Trung ương Nhật Bản) thực hiện chính sách tiền tệ độc đáo
- Thường bị ảnh hưởng bởi chênh lệch lãi suất với các nước khác
    `,
    publishedAt: "2024-01-25",
    readTime: 3,
    category: "Tỷ giá",
    tags: ["JPY", "VND", "Yen", "Nhật Bản"],
  },
  {
    id: "4",
    title: "Cách sử dụng MoMo để chuyển tiền ngoại tệ",
    slug: "su-dung-momo-chuyen-tien-ngoai-te",
    excerpt:
      "Hướng dẫn chi tiết cách dùng ví MoMo để quy đổi và chuyển tiền ngoại tệ tiện lợi.",
    content: `
## MoMo và dịch vụ ngoại tệ

Ví điện tử MoMo hiện đang tích hợp nhiều tính năng liên quan đến ngoại tệ,
giúp người dùng dễ dàng quy đổi và theo dõi tỷ giá.

## Các tính năng nổi bật

- Xem tỷ giá realtime ngay trên app
- Quy đổi ngoại tệ nhanh chóng
- Chuyển tiền quốc tế an toàn
- Theo dõi lịch sử giao dịch

## Hướng dẫn sử dụng

1. Mở app MoMo
2. Chọn "Dịch vụ" > "Ngoại tệ"
3. Chọn loại tiền tệ muốn quy đổi
4. Nhập số lượng và xác nhận giao dịch
    `,
    publishedAt: "2024-02-01",
    readTime: 6,
    category: "Hướng dẫn",
    tags: ["MoMo", "chuyển tiền", "ngoại tệ", "ví điện tử"],
  },
  {
    id: "5",
    title: "Biến động tỷ giá KRW/VND - Won Hàn Quốc",
    slug: "bien-dong-ty-gia-krw-vnd",
    excerpt:
      "Phân tích biến động tỷ giá Won Hàn Quốc so với Đồng Việt Nam và dự báo xu hướng.",
    content: `
## Won Hàn Quốc (KRW)

Won Hàn Quốc là đồng tiền của nền kinh tế lớn thứ 4 châu Á.
Tỷ giá KRW/VND thường dao động quanh mức 18-20 VND cho mỗi Won.

## Yếu tố ảnh hưởng KRW

- Tăng trưởng kinh tế Hàn Quốc (Samsung, Hyundai...)
- Quan hệ thương mại với Trung Quốc
- Tình hình địa chính trị bán đảo Triều Tiên
- Chính sách của BOK (Ngân hàng Trung ương Hàn Quốc)

## Lý do quan tâm KRW/VND

Với làn sóng Hallyu (văn hóa Hàn Quốc) và nhiều người Việt làm việc tại Hàn Quốc,
tỷ giá KRW/VND ngày càng được quan tâm nhiều hơn.
    `,
    publishedAt: "2024-02-10",
    readTime: 4,
    category: "Phân tích",
    tags: ["KRW", "VND", "Won", "Hàn Quốc"],
  },
  {
    id: "6",
    title: "Tỷ giá ngân hàng vs chợ đen - Nên đổi tiền ở đâu?",
    slug: "ty-gia-ngan-hang-vs-cho-den",
    excerpt:
      "So sánh tỷ giá đổi tiền tại ngân hàng, tiệm vàng và các kênh khác để chọn nơi có lợi nhất.",
    content: `
## Các kênh đổi ngoại tệ

### 1. Ngân hàng thương mại
- An toàn, có bảo hành pháp lý
- Tỷ giá thường thấp hơn thị trường 1-2%
- Cần giấy tờ tùy thân

### 2. Cửa hàng vàng bạc đá quý
- Tỷ giá thường cạnh tranh hơn ngân hàng
- Nhanh chóng, ít thủ tục
- Rủi ro cao hơn về pháp lý

### 3. Sân bay
- Thuận tiện nhưng tỷ giá kém nhất
- Chênh lệch có thể lên đến 3-5%

## Lời khuyên

Luôn so sánh tỷ giá tại nhiều nơi trước khi quyết định.
Với số lượng lớn, ngân hàng vẫn là lựa chọn an toàn nhất.
    `,
    publishedAt: "2024-02-15",
    readTime: 5,
    category: "Tư vấn",
    tags: ["đổi tiền", "tỷ giá", "ngân hàng", "mẹo"],
  },
];
