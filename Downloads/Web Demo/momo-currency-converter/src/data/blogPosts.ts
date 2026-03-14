export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'huong-dan-chuyen-tien-quoc-te-tren-momo',
    title: 'Hướng dẫn chuyển tiền quốc tế trên MoMo',
    excerpt: 'Cách chuyển tiền quốc tế nhanh chóng, an toàn với phí thấp nhất thị trường qua MoMo.',
    author: 'MoMo Team',
    publishedAt: '2026-03-10',
    image: '💱',
    category: 'Hướng dẫn',
    content: `## Chuyển tiền quốc tế trên MoMo chỉ trong 30 giây

Chuyển tiền sang nước ngoài giờ đây dễ dàng hơn bao giờ hết. MoMo cung cấp dịch vụ chuyển tiền quốc tế với:

- **Tốc độ**: Giao dịch hoàn tất chỉ trong 30 giây
- **Phí thấp**: Phí chuyển tiền thấp nhất thị trường
- **An toàn**: Bảo mật ngân hàng cấp cao, mã hóa end-to-end
- **Tỷ giá tốt**: Cập nhật liên tục từ nhiều nguồn dữ liệu

### Bước 1: Mở ứng dụng MoMo
Truy cập phần "Chuyển tiền quốc tế" từ menu chính.

### Bước 2: Nhập thông tin người nhận
- Chọn quốc gia nhận tiền
- Nhập thông tin ngân hàng của người nhận
- Xác nhận thông tin chính xác

### Bước 3: Chọn số tiền và phương thức thanh toán
- Nhập số tiền cần chuyển
- Chọn phương thức thanh toán (ví MoMo, tài khoản ngân hàng)
- Xem tỷ giá và phí chuyển tiền

### Bước 4: Xác nhận và hoàn tất
- Kiểm tra lại thông tin
- Xác nhận giao dịch
- Tiền sẽ được chuyển trong 30 giây

Với MoMo, chuyển tiền quốc tế không bao giờ dễ dàng như vậy!`,
  },
  {
    id: '2',
    slug: 'tieu-chuan-ty-gia-hoi-doai-la-gi',
    title: 'Tiêu chuẩn tỷ giá hối đoái là gì?',
    excerpt: 'Tìm hiểu về tỷ giá hối đoái, cách tính toán và những yếu tố ảnh hưởng đến tỷ giá.',
    author: 'MoMo Team',
    publishedAt: '2026-03-08',
    image: '📊',
    category: 'Kiến thức',
    content: `## Hiểu rõ về tỷ giá hối đoái

Tỷ giá hối đoái là giá trị tương đối giữa hai loại tiền tệ khác nhau. Ví dụ: 1 USD = 25,435 VND có nghĩa là bạn cần 25,435 đồng Việt Nam để đổi lấy 1 đô la Mỹ.

### Tỷ giá hối đoái hoạt động như thế nào?

Tỷ giá được xác định bởi cung và cầu trên thị trường ngoại hối:
- Khi nhu cầu USD cao, giá USD tăng
- Khi nhu cầu VND cao, giá VND tăng

### Các yếu tố ảnh hưởng đến tỷ giá

1. **Lạm phát**: Quốc gia có lạm phát cao sẽ có tiền tệ yếu hơn
2. **Lãi suất**: Lãi suất cao thu hút nhà đầu tư nước ngoài
3. **Cân bằng thương mại**: Xuất nhập khẩu ảnh hưởng đến cung cầu tiền tệ
4. **Ổn định chính trị**: Nước ổn định thu hút đầu tư nước ngoài
5. **Chính sách của ngân hàng trung ương**: Quyết định lãi suất và cung tiền

### Tỷ giá thực tế vs danh nghĩa

- **Tỷ giá danh nghĩa**: Tỷ giá trực tiếp giữa hai loại tiền
- **Tỷ giá thực tế**: Tính toán dựa trên lạm phát của cả hai nước

MoMo cập nhật tỷ giá realtime để bạn luôn có giá tốt nhất!`,
  },
  {
    id: '3',
    slug: 'cach-bao-ve-tien-khi-chuyen-quoc-te',
    title: 'Cách bảo vệ tiền khi chuyển quốc tế',
    excerpt: 'Những lưu ý quan trọng để bảo vệ tiền khi chuyển sang nước ngoài.',
    author: 'MoMo Team',
    publishedAt: '2026-03-05',
    image: '🔒',
    category: 'An toàn',
    content: `## Bảo vệ tiền của bạn khi chuyển quốc tế

Khi chuyển tiền quốc tế, an toàn là ưu tiên hàng đầu. Dưới đây là những cách để bảo vệ tiền của bạn:

### 1. Chọn nhà cung cấp dịch vụ đáng tin cậy
- Sử dụng các nền tảng có giấy phép từ các cơ quan quản lý
- Kiểm tra đánh giá và lịch sử của nhà cung cấp
- MoMo có bảo hiểm giao dịch cho mỗi lần chuyển tiền

### 2. Kiểm tra thông tin người nhận
- Xác minh địa chỉ ngân hàng của người nhận
- Kiểm tra tên chủ tài khoản trùng khớp
- Liên lạc với người nhận trước khi chuyển tiền

### 3. Bảo mật thông tin cá nhân
- Không chia sẻ mã OTP hoặc mật khẩu với ai
- Sử dụng kết nối WiFi an toàn
- Cập nhật phần mềm diệt virus thường xuyên
- Bật xác thực hai lớp (2FA)

### 4. Theo dõi giao dịch
- Lưu lại hoá đơn và mã giao dịch
- Kiểm tra xác nhận từ ngân hàng người nhận
- Báo cáo ngay nếu phát hiện bất thường

### 5. Giới hạn số tiền chuyển
- Bắt đầu với số tiền nhỏ để kiểm tra
- Không chuyển toàn bộ tiền cùng một lúc
- Nếu giao dịch lớn, chia thành nhiều lần

MoMo sử dụng công nghệ mã hóa end-to-end để bảo vệ mỗi giao dịch của bạn!`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
