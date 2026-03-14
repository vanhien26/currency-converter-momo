import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-pink-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent mb-6">
            Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-700">Tỷ Giá</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Tìm hiểu về tiền tệ, tỷ giá hối đoái, và các kỹ năng chuyển tiền quốc tế.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/ty-gia/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:border-pink-300 hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
              >
                {/* Category Badge */}
                <div className="mb-4 inline-flex w-fit">
                  <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700">
                    {post.category}
                  </span>
                </div>

                {/* Emoji */}
                <div className="text-4xl mb-4">{post.image}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm flex-grow mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Sẵn sàng chuyển tiền quốc tế?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Quay lại trang chính để sử dụng công cụ quy đổi tiền tệ realtime của MoMo.
          </p>
          <Link
            href="/ty-gia/"
            className="inline-block rounded-2xl bg-gradient-to-r from-pink-600 to-pink-700 px-8 py-4 text-center text-sm font-semibold text-white shadow-xl hover:shadow-2xl hover:from-pink-700 hover:to-pink-800 transition-all"
          >
            Quy đổi tiền tệ ngay →
          </Link>
        </div>
      </section>
    </div>
  );
}
