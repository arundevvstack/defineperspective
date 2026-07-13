import Image, { ImageProps } from 'next/image';
import { SEO_ENTITIES } from '@/data/seo-knowledge-graph';

interface SemanticImageProps extends ImageProps {
  entityId?: string;
  topicId?: string;
  caption?: string;
  // If true, automatically injects the ImageObject schema for this specific image
  injectSchema?: boolean;
}

export default function SemanticImage({ 
  entityId, 
  topicId, 
  caption, 
  injectSchema = false, 
  alt, 
  ...props 
}: SemanticImageProps) {
  
  // Find related metadata from our Knowledge Graph if provided
  let entityMetadata = null;
  if (entityId) {
    // Search across all dictionary categories
    for (const category of Object.values(SEO_ENTITIES.EntityDictionary)) {
      const found = category.find(e => e.id === entityId);
      if (found) {
        entityMetadata = found;
        break;
      }
    }
  }

  const topicMetadata = topicId ? SEO_ENTITIES.TopicTaxonomy.find(t => t.id === topicId) : null;

  // Build the schema if requested
  const schema = injectSchema ? {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": typeof props.src === 'string' ? `https://defineperspective.in${props.src.startsWith('/') ? '' : '/'}${props.src}` : '',
    "description": caption || alt,
    "name": entityMetadata ? entityMetadata.name : alt,
    ...(topicMetadata ? { "about": { "@type": "Thing", "name": topicMetadata.label } } : {})
  } : null;

  return (
    <figure className="relative w-full my-8 group">
      {schema && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
        />
      )}
      
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <Image 
          alt={alt}
          {...props}
          className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02] ${props.className || ''}`}
        />
      </div>

      {(caption || entityMetadata || topicMetadata) && (
        <figcaption className="mt-4 text-xs font-mono text-zinc-500 flex flex-col md:flex-row md:items-center justify-between gap-2 border-l border-white/20 pl-4 py-1">
          <span>{caption || alt}</span>
          <div className="flex gap-2 uppercase tracking-widest text-[9px]">
            {entityMetadata && (
              <span className="text-primary-accent border border-primary-accent/30 px-2 py-1 rounded bg-primary-accent/5">
                {entityMetadata.name}
              </span>
            )}
            {topicMetadata && (
              <span className="text-zinc-400 border border-white/10 px-2 py-1 rounded bg-white/5">
                {topicMetadata.label}
              </span>
            )}
          </div>
        </figcaption>
      )}
    </figure>
  );
}
