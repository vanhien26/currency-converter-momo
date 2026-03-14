import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from '@/data/blogPosts';

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    'chi-tiet': slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ 'chi-tiet': string }> }) {
  const { 'chi-tiet': slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | MoMo Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ 'chi-tiet': string }>;
}) {
  const { 'chi-tiet': slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category or next posts)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-white via-pink-50 to-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/ty-gia/" className="hover:text-pink-600">
              Trang chính
            </Link>
            <span>/</span>
            <Link href="/ty-gia/blog" className="hover:text-pink-600">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900">{post.title}</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="mb-6 inline-flex">
              <span className="rounded-full bg-pink-100 px-4 py-1.5 text-sm font-semibold text-pink-700">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-lg">
                  {post.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div className="text-xs text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString('vi-VN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, idx) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={idx} className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    {post.content
                      .split('\n')
                      .filter((p) => p.startsWith('-'))
                      .map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                  </ul>
                );
              }
              if (paragraph.trim() === '') {
                return null;
              }
              if (!paragraph.startsWith('#') && !paragraph.startsWith('-')) {
                return (
                  <p key={idx} className="text-gray-700 mb-6 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </article>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
              Bài viết liên quan
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/ty-gia/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl bg-gray-50 p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-pink-300"
                >
                  <div className="text-4xl mb-4">{p.image}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 mb-2 line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Sẵn sàng chuyển tiền quốc tế?
          </h2>
          <p className="text-pink-100 mb-8 text-lg">
            Sử dụng công cụ quy đổi tiền tệ realtime của MoMo ngay bây giờ.
          </p>
          <Link
            href="/ty-gia/"
            className="inline-block rounded-xl bg-white px-8 py-4 text-center text-sm font-semibold text-pink-600 hover:bg-gray-50 transition-all"
          >
            Quy đổi tiền tệ ngay →
          </Link>
        </div>
      </section>
    </div>
  );
}
