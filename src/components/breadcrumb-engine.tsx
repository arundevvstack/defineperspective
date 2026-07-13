import Link from 'next/link';
import { generateBreadcrumbSchema } from '@/lib/seo-schema';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbEngineProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbEngine({ items }: BreadcrumbEngineProps) {
  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      {/* Zero regression schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <nav aria-label="breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.item} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-white" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link href={item.item} className="hover:text-primary-accent transition-colors">
                      {item.name}
                    </Link>
                    <span className="text-white/20">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
