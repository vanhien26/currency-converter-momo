import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { StatCard } from "@/components/cards/StatCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Sparkles,
  CreditCard,
  Shield,
  Wallet,
  Clock,
  Phone,
  Tv,
  Building,
  ShoppingBag,
  ArrowRight,
  Download,
  Zap,
  Lock,
  Users,
  Brain,
  CheckCircle2,
  Target,
  BarChart3,
  TrendingUp,
  Coins,
  QrCode,
  Star,
  Gift,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useState } from "react";

// ============ SECTION 1: QUICK TRUST INDICATORS ============
const trustIndicators = [
  { value: "30", suffix: "M+", label: "Người dùng tin tưởng" },
  { value: "₫12.5", suffix: "T", label: "Giao dịch/năm" },
  { value: "4.9", suffix: "★", label: "App Store VN" },
  { value: "Top 1", label: "Ứng dụng tài chính" },
];

// ============ SECTION 3: CUSTOMER SEGMENTS ============
const customerSegments = [
  {
    id: "personal",
    title: "Cá Nhân",
    description: "Vay, tiết kiệm, bảo hiểm",
    icon: Users,
    features: [
      "Vay tức thì - Duyệt trong 2 giây",
      "Bảo hiểm toàn diện",
      "Tiết kiệm & đầu tư",
    ],
  },
  {
    id: "shopping",
    title: "Mua Sắm Thông Minh",
    description: "Trả góp, trả sau, thanh toán",
    icon: ShoppingBag,
    features: [
      "Trả góp 0% lãi suất",
      "Trả sau linh hoạt",
      "50K+ cửa hàng",
    ],
  },
  {
    id: "business",
    title: "Doanh Nghiệp",
    description: "Transfer, thanh toán, bảng kê",
    icon: Building,
    features: [
      "Transfer nhanh tức thì",
      "Thanh toán hóa đơn",
      "Báo cáo chi tiết",
    ],
  },
];

// ============ SECTION 4: FINANCIAL SERVICES MODULES ============
const loanServices = [
  {
    title: "Tín Dụng",
    description: "Duyệt tín dụng nhanh chóng với AI",
    icon: CreditCard,
    href: "/services/tin-dung",
    benefit: "được phê duyệt trong vài phút",
    gradient: "from-primary to-secondary",
    stat: "Hạn mức tới 500M",
  },
  {
    title: "Vay Tiền",
    description: "Vay tiền nhanh, giải ngân 24 giờ",
    icon: Clock,
    href: "/services/vay",
    benefit: "AI đánh giá hồ sơ tức thì",
    gradient: "from-blue-500 to-cyan-500",
    stat: "Giải ngân 24h",
  },
];

const shoppingServices = [
  {
    title: "Trả Góp 0% Lãi",
    description: "Mua sắm trả góp 0% lãi suất",
    icon: Wallet,
    href: "/services/tra-gop",
    benefit: "hàng ngàn đối tác trên toàn quốc",
    gradient: "from-orange-500 to-amber-500",
    stat: "50K+ đối tác",
  },
  {
    title: "Trả Sau Linh Hoạt",
    description: "Mua trước, trả sau linh hoạt",
    icon: Clock,
    href: "/services/tra-sau",
    benefit: "hạn mức lên đến 30 triệu đồng",
    gradient: "from-violet-500 to-purple-500",
    stat: "Hạn mức 30M",
  },
];

const insuranceServices = [
  {
    title: "Bảo Hiểm",
    description: "Bảo vệ toàn diện với gói phù hợp",
    icon: Shield,
    href: "/services/bao-hiem",
    benefit: "AI tư vấn gói phù hợp nhất",
    gradient: "from-emerald-500 to-teal-500",
    stat: "100+ gói bảo hiểm",
  },
];

// ============ SECTION 5: FINANCIAL TOOLS & CALCULATORS ============
const financialTools = [
  {
    title: "Tính Lãi Vay",
    description: "Tính toán lãi suất và kỳ hạn chi tiết",
    icon: CreditCard,
    value: "0.79% /tháng",
    color: "from-primary/20 to-secondary/20",
  },
  {
    title: "Kế Hoạch Tiết Kiệm",
    description: "Lập kế hoạch tiết kiệm theo mục tiêu",
    icon: Target,
    value: "50M+ đồng",
    color: "from-emerald-100 to-teal-100",
  },
  {
    title: "So Sánh Bảo Hiểm",
    description: "So sánh chi tiết các gói bảo hiểm",
    icon: BarChart3,
    value: "100+ gói",
    color: "from-blue-100 to-cyan-100",
  },
  {
    title: "Sức Mua Trả Góp",
    description: "Kiểm tra hạn mức trả góp của bạn",
    icon: Wallet,
    value: "30M+ hạn",
    color: "from-orange-100 to-amber-100",
  },
  {
    title: "Quản Lý Chi Tiêu",
    description: "Phân loại chi tiêu tự động",
    icon: TrendingUp,
    value: "AI Phân Tích",
    color: "from-violet-100 to-purple-100",
  },
  {
    title: "Tính Lợi Suất Đầu Tư",
    description: "Dự tính lợi suất đầu tư",
    icon: Coins,
    value: "Flexible",
    color: "from-pink-100 to-rose-100",
  },
];

// ============ SECTION 6: AI FEATURES ============
const aiFeatures = [
  {
    title: "Phân Tích Chi Tiêu Tự Động",
    description: "AI tự động phân loại chi tiêu, nhận diện xu hướng tiêu dùng của bạn",
    icon: Brain,
    badge: "Analytics",
  },
  {
    title: "Gợi Ý Tiết Kiệm Thông Minh",
    description: "Đề xuất cách tiết kiệm 2.5M/tháng dựa trên thói quen chi tiêu",
    icon: Zap,
    badge: "Smart Tips",
  },
  {
    title: "Phê Duyệt Vay Trong 2 Giây",
    description: "Công nghệ AI xử lý nhanh nhất, giải ngân tức thì",
    icon: CheckCircle2,
    badge: "Instant Approval",
  },
];

// ============ SECTION 7: CUSTOMER TESTIMONIALS ============
const testimonials = [
  {
    name: "Nguyen Van A",
    role: "Kinh doanh online",
    image: "🧑‍💼",
    quote: "Từng bị từ chối vay ở ngân hàng, nay được duyệt 50M qua MoMo trong 2 phút",
    rating: 5,
  },
  {
    name: "Tran Thi B",
    role: "Nhân viên văn phòng",
    image: "👩‍💻",
    quote: "MoMo giúp tôi tiết kiệm 2.5M mỗi tháng. AI phân tích chi tiêu siêu hữu ích",
    rating: 5,
  },
  {
    name: "Le Van C",
    role: "Sinh viên",
    image: "🎓",
    quote: "Trả góp 0% lãi rất tốt. Mua laptop mình muốn mà không lo tiền",
    rating: 5,
  },
];

// ============ SECTION 8: SERVICE ECOSYSTEM ============
const serviceEcosystem = [
  {
    title: "Dịch Vụ Công",
    description: "Nước, điện, internet, đăng ký xe",
    icon: Building,
    stat: "500+ dịch vụ",
    color: "text-blue-600",
  },
  {
    title: "Vé & Giải Trí",
    description: "Vé máy bay, khách sạn, rạp chiếu phim",
    icon: Tv,
    stat: "10K+ điểm bán",
    color: "text-purple-600",
  },
  {
    title: "Mua Sắm",
    description: "Thời trang, điện tử, nhà cửa",
    icon: ShoppingBag,
    stat: "50K+ cửa hàng",
    color: "text-orange-600",
  },
  {
    title: "Nạp Tiền & Data",
    description: "Nạp tiền điện thoại, data 4G",
    icon: Phone,
    stat: "500M+ giao dịch",
    color: "text-green-600",
  },
];

// ============ SECTION 9: PROMOTIONAL CAMPAIGNS ============
const promotions = [
  {
    title: "Trả Góp 0% - Giảm 100K",
    description: "Mua sắm bây giờ, trả sau linh hoạt",
    code: "MOMO100K",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Vay 10M/tháng, Lãi 0.79%",
    description: "Duyệt tức thì, không giới hạn hạn mức",
    code: "VAY079",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Mở Tài Khoản → Nhận 50K",
    description: "Miễn phí, không cần giấy tờ",
    code: "NEW50K",
    color: "from-emerald-500 to-teal-500",
  },
];

// ============ SECTION 11: FAQ ============
const faqs = [
  {
    question: "Tôi có được duyệt vay không?",
    answer: "MoMo sử dụng AI để đánh giá hồ sơ tức thì. Chỉ cần CMND/CCCD + số điện thoại, được duyệt trong 2 giây.",
    category: "loans",
  },
  {
    question: "Lãi suất MoMo bao nhiêu?",
    answer: "Lãi suất từ 0.79%/tháng tùy hạn mức và hồ sơ. Có thể kiểm tra ngay trên ứng dụng.",
    category: "loans",
  },
  {
    question: "Tôi có bị giới hạn hạn mức không?",
    answer: "Không. Hạn mức của bạn được AI đánh giá và có thể tăng theo lịch sử giao dịch.",
    category: "loans",
  },
  {
    question: "Có phí gì không?",
    answer: "Không có phí ẩn. Tất cả phí được công khai từ đầu. Trả góp 0% lãi suất là thực.",
    category: "fees",
  },
  {
    question: "Trả góp 0% lãi là thực hay giả?",
    answer: "100% thực. MoMo hợp tác với 50K+ cửa hàng để cung cấp dịch vụ này.",
    category: "shopping",
  },
  {
    question: "Dữ liệu của tôi có an toàn không?",
    answer: "Có. MoMo sử dụng mã hóa 256-bit và được NHNN cấp phép. Bảo mật PCI DSS 3.2.1.",
    category: "security",
  },
];

export default function Index() {
  const [selectedSegment, setSelectedSegment] = useState("personal");

  const ServiceModule = ({ title, services, icon: Icon }) => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <a
              key={service.title}
              href={service.href}
              className="group relative p-5 rounded-2xl bg-white border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3`}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
              <p className="text-xs text-muted-foreground mb-3">{service.description}</p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-xs font-semibold text-primary">{service.stat}</span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );

  return (
    <Layout>
      {/* ============ SECTION 1: HERO ============ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="ai-badge mb-6 inline-flex">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Powered by AI</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-display font-bold text-foreground mb-6 leading-tight">
                Trợ Thủ Tài Chính{" "}
                <span className="text-gradient-primary">#1 Việt Nam</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Vay, bảo hiểm, thanh toán, trả góp - tất cả dịch vụ tài chính bạn cần trong 1 ứng dụng
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl">
                  <Download className="w-5 h-5" />
                  Mở Tài Khoản Ngay
                </Button>
                <Button variant="outline" size="xl">
                  Duyệt Tín Dụng Trong 2s
                  <Zap className="w-5 h-5" />
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="security-badge">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Được NHNN cấp phép</span>
                </div>
                <div className="security-badge">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Bảo mật PCI DSS</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="MoMo AI Financial Assistant"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute -top-6 -left-6 p-4 bg-white rounded-2xl shadow-momo-lg animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">AI đề xuất</p>
                      <p className="text-sm font-semibold">Tiết kiệm 2.5M/tháng</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 p-4 bg-white rounded-2xl shadow-momo-lg animate-float" style={{ animationDelay: "-2s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Giao dịch thành công</p>
                      <p className="text-sm font-semibold text-green-600">+500,000đ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: QUICK TRUST INDICATORS ============ */}
      <section className="section-padding bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="flex items-baseline gap-2 justify-center lg:justify-start mb-2">
                  <span className="text-3xl lg:text-4xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xl lg:text-2xl font-semibold text-primary">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: CUSTOMER SEGMENT NAVIGATION ============ */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Chọn Nhu Cầu Của Bạn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MoMo có giải pháp tài chính phù hợp cho mọi nhu cầu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {customerSegments.map((segment) => {
              const SegmentIcon = segment.icon;
              return (
                <button
                  key={segment.id}
                  onClick={() => setSelectedSegment(segment.id)}
                  className={`p-6 rounded-2xl transition-all duration-300 text-left ${
                    selectedSegment === segment.id
                      ? "bg-gradient-primary text-white shadow-lg scale-105"
                      : "bg-white border border-slate-200 text-foreground hover:border-primary"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    selectedSegment === segment.id
                      ? "bg-white/20"
                      : "bg-primary/10"
                  }`}>
                    <SegmentIcon className={`w-6 h-6 ${selectedSegment === segment.id ? "text-white" : "text-primary"}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{segment.title}</h3>
                  <p className={`text-sm ${selectedSegment === segment.id ? "text-white/80" : "text-muted-foreground"} mb-4`}>
                    {segment.description}
                  </p>
                  <ul className={`space-y-2 text-xs ${selectedSegment === segment.id ? "text-white/90" : "text-muted-foreground"}`}>
                    {segment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: CORE FINANCIAL SERVICES ============ */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Loan & Credit Services */}
            <ServiceModule
              title="Vay & Tín Dụng"
              services={loanServices}
              icon={CreditCard}
            />

            {/* Shopping Services */}
            <ServiceModule
              title="Mua Sắm Thông Minh"
              services={shoppingServices}
              icon={ShoppingBag}
            />

            {/* Insurance Services */}
            <ServiceModule
              title="Bảo Vệ Tài Chính"
              services={insuranceServices}
              icon={Shield}
            />
          </div>
        </div>
      </section>

      {/* ============ SECTION 5: FINANCIAL TOOLS & CALCULATORS ============ */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Công Cụ Tài Chính <span className="text-gradient-primary">Nhanh Gọn</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              6 mini calculators giúp bạn lên kế hoạch tài chính - dùng ngay, không cần đăng ký
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialTools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.title}
                  className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-primary">
                      {tool.value}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {tool.description}
                  </p>

                  <button className="w-full py-2 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-white transition-colors text-sm">
                    Dùng công cụ
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SECTION 6: AI FEATURES SHOWCASE ============ */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-secondary/20 blur-3xl opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="ai-badge mb-4 inline-flex bg-white/10">
              <Brain className="w-3.5 h-3.5" />
              <span>AI Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Được Cấp Quyền Bởi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI Thông Minh</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              15M+ người đã tiết kiệm 500K+/tháng nhờ AI của MoMo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/80 mb-4">
                    {feature.badge}
                  </div>

                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Tìm hiểu thêm</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SECTION 7: CUSTOMER TESTIMONIALS ============ */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hàng Triệu Người <span className="text-gradient-primary">Tin Tưởng MoMo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nghe câu chuyện thành công của những người dùng MoMo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 8: SERVICE ECOSYSTEM ============ */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="ai-badge mb-4 inline-flex">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Thanh Toán Mọi Thứ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Từ Hóa Đơn Đến <span className="text-gradient-primary">Giải Trí</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thanh toán 50K+ dịch vụ - tất cả trong 1 app
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceEcosystem.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 text-center group cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-white to-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{service.description}</p>
                  <div className="text-sm font-bold text-primary">{service.stat}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SECTION 9: PROMOTIONAL CAMPAIGNS ============ */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="ai-badge mb-4 inline-flex">
              <Gift className="w-3.5 h-3.5" />
              <span>Khuyến Mãi</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ưu Đãi <span className="text-gradient-primary">Độc Quyền</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {promotions.map((promo) => (
              <div
                key={promo.code}
                className={`relative overflow-hidden rounded-2xl p-8 text-white hover:shadow-lg transition-all duration-300 cursor-pointer`}
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${promo.color} opacity-90`} />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-white/80 text-sm mb-6">{promo.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="bg-white/20 px-3 py-1 rounded-lg">Mã: {promo.code}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ============ SECTION 10: SECURITY & COMPLIANCE ============ */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bảo Mật <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tuyệt Đối</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              MoMo được tin tưởng bởi 30M+ người dùng với các tiêu chuẩn bảo mật cao nhất
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Bảo mật PCI DSS 3.2.1</h3>
                <p className="text-sm text-white/70">Tiêu chuẩn bảo mật quốc tế cho thanh toán</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Mã hóa 256-bit</h3>
                <p className="text-sm text-white/70">Tất cả dữ liệu được mã hóa end-to-end</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Bảo hiểm Giao Dịch</h3>
                <p className="text-sm text-white/70">Bảo hiểm tới 100M cho mỗi giao dịch</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Được NHNN Cấp Phép</h3>
                <p className="text-sm text-white/70">Kiểm soát 24/7 bởi Ngân hàng Nhà nước</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 11: FAQ ============ */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Câu Hỏi <span className="text-gradient-primary">Thường Gặp</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tìm câu trả lời cho những câu hỏi phổ biến
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                  <AccordionTrigger className="hover:text-primary transition-colors py-4">
                    <div className="flex items-start gap-3 text-left">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-semibold text-foreground">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============ SECTION 12: APP DOWNLOAD ============ */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tải MoMo Ngay để Bắt Đầu
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Miễn phí, nhanh chóng, an toàn. Hơn 30 triệu người dùng đang tin tưởng MoMo mỗi ngày.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/80" />
                  <span>Duyệt tín dụng trong vài phút</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/80" />
                  <span>Bảo hiểm & trả góp 0% lãi suất</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/80" />
                  <span>Thanh toán, vay, tiết kiệm - tất cả 1 app</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  iOS
                </Button>
                <Button variant="secondary" size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Android
                </Button>
              </div>

              <p className="text-sm text-white/60 mt-6">
                ⭐ 4.9 sao · Top ứng dụng VN
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-white mx-auto mb-4" />
                    <p className="text-white text-sm font-semibold">Quét mã để tải</p>
                    <p className="text-white/60 text-xs mt-1">Hoặc tìm "momo" trên App Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 13: FINAL CTA ============ */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 md:p-12 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="ai-badge mb-6 inline-flex">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Miễn phí tải về</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Bắt Đầu Với{" "}
                <span className="text-gradient-primary">MoMo</span> Ngay Hôm Nay
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Tải ứng dụng miễn phí và khám phá trợ thủ tài chính AI thông minh nhất Việt Nam.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  <Download className="w-5 h-5" />
                  Tải cho iOS
                </Button>
                <Button variant="hero" size="xl">
                  <Download className="w-5 h-5" />
                  Tải cho Android
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
