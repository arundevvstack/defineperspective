import React from 'react';
import { CaseStudyFaqItem } from './case-study-types';

export default function CaseStudyAiFaq({ faqs }: { faqs: CaseStudyFaqItem[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-md space-y-8">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className={`${idx < faqs.length - 1 ? 'border-b border-white/10 pb-8' : ''}`}
        >
          <h3 className="text-lg md:text-xl text-primary-accent font-semibold mb-3 tracking-tight">
            {faq.question}
          </h3>
          <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed m-0">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
