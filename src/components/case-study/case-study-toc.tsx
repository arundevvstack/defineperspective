import React from 'react';

export interface TOCItem {
  id: string;
  label: string;
}

export default function CaseStudyMasterTOC({ items }: { items: TOCItem[] }) {
  return (
    <>
      {/* LEFT: Sticky Desktop TOC */}
      <aside className="hidden lg:block lg:col-span-3">
        <div className="sticky top-32 bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-md">
          <h4 className="text-sm font-black uppercase tracking-widest text-primary-accent mb-6 font-mono">
            Contents
          </h4>
          <nav className="flex flex-col gap-4 text-sm font-medium text-zinc-400">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-white transition-colors duration-200 py-0.5"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden col-span-1 mb-8">
        <details className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 cursor-pointer group backdrop-blur-md">
          <summary className="text-sm font-black uppercase tracking-widest text-primary-accent outline-none flex items-center justify-between">
            Table of Contents
            <span className="text-zinc-500 group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          <nav className="flex flex-col gap-3 text-sm font-medium text-zinc-400 mt-6 pt-6 border-t border-white/5">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-white transition-colors duration-200 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </>
  );
}
