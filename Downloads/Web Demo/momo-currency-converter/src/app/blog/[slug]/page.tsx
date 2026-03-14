import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import Link from 'next/link';

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) notFound();

  return (
    <article className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#A50064] hover:text-[#8B0055] text-sm mb-8">
          ← Quay lại Blog
        </Link>

        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-[#A50064] to-[#D81B60] rounded-xl text-white font-semibold">
              {post.currencyPair}
            </span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
        </header>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        <div className="mt-16 text-sm text-gray-500">
          <Link href="/blog" className="hover:text-[#A50064]">← Blog khác</Link>
        </div>
      </div>
    </article>
  );
}

