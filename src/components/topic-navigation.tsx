'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SEO_ENTITIES } from '@/data/seo-knowledge-graph';

interface TopicNavigationProps {
  currentTopicId?: string;
  basePath: string; // e.g., '/knowledge-center/topic'
}

export default function TopicNavigation({ currentTopicId, basePath }: TopicNavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const topics = SEO_ENTITIES.TopicTaxonomy;

  // For responsive mobile design, we only show a few topics by default
  const displayedTopics = isExpanded ? topics : topics.slice(0, 4);

  return (
    <div className="w-full border-b border-white/10 mb-12">
      <div className="flex items-center justify-between py-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
          Browse by Topic
        </h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden text-xs font-mono uppercase tracking-widest text-primary-accent"
        >
          {isExpanded ? 'Show Less' : 'View All'}
        </button>
      </div>
      
      <div className="flex flex-wrap gap-3 pb-6">
        <Link 
          href={basePath}
          className={`px-4 py-2 rounded-full text-xs font-medium transition-colors border ${!currentTopicId ? 'bg-white text-black border-white' : 'bg-transparent text-zinc-400 border-white/10 hover:border-white/30'}`}
        >
          All Topics
        </Link>
        
        {/* On desktop, always show all. On mobile, respect the state */}
        <div className="hidden md:flex flex-wrap gap-3">
          {topics.map(topic => (
            <Link
              key={topic.id}
              href={`${basePath}/${topic.slug}`}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors border ${currentTopicId === topic.id ? 'bg-white text-black border-white' : 'bg-transparent text-zinc-400 border-white/10 hover:border-white/30'}`}
            >
              {topic.label}
            </Link>
          ))}
        </div>

        <div className="flex md:hidden flex-wrap gap-3">
          {displayedTopics.map(topic => (
            <Link
              key={topic.id}
              href={`${basePath}/${topic.slug}`}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors border ${currentTopicId === topic.id ? 'bg-white text-black border-white' : 'bg-transparent text-zinc-400 border-white/10 hover:border-white/30'}`}
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
