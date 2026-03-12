import { generateFAQSchema } from '@/lib/seo';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs, title }: { faqs: FAQ[]; title?: string }) {
  const schema = generateFAQSchema(faqs);

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
        {title || 'Câu hỏi thường gặp'}
      </h2>
      <div className="divide-y divide-gray-200 rounded-xl border border-gray-200">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group"
            {...(i === 0 ? { open: true } : {})}
          >
            <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50 sm:text-base [&::-webkit-details-marker]:hidden">
              <span className="pr-4">{faq.question}</span>
              <svg
                className="h-4 w-4 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-5 pb-4 text-sm leading-relaxed text-gray-600">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
