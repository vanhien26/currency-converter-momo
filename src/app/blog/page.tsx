import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts } from "@/data/blogPosts";
import { generateBlogSEO } from "@/lib/seo";

const seo = generateBlogSEO();

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Blog" }]} />

      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Blog Tỷ Giá & Ngoại Tệ
        </h1>
        <p className="text-gray-500">
          Tin tức, phân tích và hướng dẫn về tỷ giá ngoại tệ mới nhất
        </p>
      </div>

      {/* Featured post */}
      {blogPosts[0] && (
        <div className="card hover-lift mb-8 md:flex gap-6">
          <div className="flex-1">
            <span className="badge-momo">{blogPosts[0].category}</span>
            <h2 className="text-xl font-bold text-gray-900 mt-2 mb-2">
              {blogPosts[0].title}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{blogPosts[0].excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>📅 {blogPosts[0].publishedAt}</span>
              <span>⏱ {blogPosts[0].readTime} phút đọc</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {blogPosts[0].tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Post grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.slice(1).map((post) => (
          <article key={post.id} className="card hover-lift flex flex-col">
            <span className="badge-momo self-start mb-2">{post.category}</span>
            <h2 className="text-base font-bold text-gray-900 mb-2 flex-1 line-clamp-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
              <span>📅 {post.publishedAt}</span>
              <span>⏱ {post.readTime} phút</span>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-12 bg-gradient-to-r from-[#d82d8b] to-[#f06ab0] rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-2">Theo dõi tỷ giá mỗi ngày</h3>
        <p className="text-white/80 mb-6 text-sm">
          Tải app MoMo để nhận thông báo biến động tỷ giá theo thời gian thực
        </p>
        <a
          href="https://momo.vn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#d82d8b] font-bold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors inline-block"
        >
          Tải MoMo miễn phí
        </a>
      </div>
    </div>
  );
}
