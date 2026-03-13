import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Tỷ Giá</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Phân tích tỷ giá, chiến lược ngoại hối MoMo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={'/blog/' + post.slug} className="block">
              <div className="rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#A50064] to-[#D81B60] rounded-full text-xs font-semibold text-white">
                    {post.currencyPair}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                <span className="text-[#A50064] font-semibold text-sm">Đọc thêm →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

