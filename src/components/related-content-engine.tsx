import Link from 'next/link';
import { globalContentGraph, ContentNode } from '@/lib/content-graph';

interface RelatedContentEngineProps {
  currentContentId: string;
  limit?: number;
}

export default function RelatedContentEngine({ currentContentId, limit = 4 }: RelatedContentEngineProps) {
  // In a real database environment, we'd fetch these from Supabase based on the content graph
  const relatedContent = globalContentGraph.getRelatedContent(currentContentId, limit);

  if (relatedContent.length === 0) {
    return null;
  }

  return (
    <div className="mt-24 pt-12 border-t border-white/10">
      <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-8">Related Content Engine</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedContent.map((item) => (
          <Link href={item.url} key={item.id} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
            <span className="text-[10px] text-primary-accent uppercase tracking-widest font-mono mb-2 block">
              {item.type}
            </span>
            <strong className="text-lg text-white group-hover:text-primary-accent transition-colors block mb-2">
              {item.title}
            </strong>
            {item.description && (
              <p className="text-sm text-zinc-400 line-clamp-2">
                {item.description}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-4">
              {item.topicIds.slice(0, 2).map((topicId) => (
                <span key={topicId} className="text-[9px] px-2 py-1 rounded bg-white/5 text-zinc-500 font-mono">
                  #{topicId}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
