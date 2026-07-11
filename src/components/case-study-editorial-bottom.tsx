import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ZoomableImage } from '@/components/ui/zoomable-image';
import LiteYouTube from '@/components/lite-youtube';
import { BarChart3, Presentation, Camera } from 'lucide-react';

export default function CaseStudyEditorialBottom({ caseStudy, related, mediaStory }: { caseStudy: any, related: any[], mediaStory: string[] }) {
  const getYouTubeId = (url: string | null | undefined) => {
    if (!url) return null;
    if (url.includes('youtu.be/')) return url.split('youtu.be/')[1]?.split('?')[0];
    if (url.includes('v=')) return url.split('v=')[1]?.split('&')[0];
    if (url.includes('embed/')) return url.split('embed/')[1]?.split('?')[0];
    return null;
  };
  const ytIdPrimary = getYouTubeId(caseStudy.youtube_url);
  const ytIdFallback = getYouTubeId(caseStudy.external_video_url);

  let renderContent = null;
  if (ytIdPrimary) {
    renderContent = <LiteYouTube videoId={ytIdPrimary} title={caseStudy.title} />;
  } else if (caseStudy.external_video_url && ytIdFallback) {
    renderContent = <LiteYouTube videoId={ytIdFallback} title={caseStudy.title} />;
  } else if (caseStudy.external_video_url && caseStudy.external_video_url.includes('vimeo')) {
    renderContent = <iframe src={caseStudy.external_video_url} className="w-full h-full border-0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>;
  } else if (caseStudy.video_url) {
    renderContent = <video src={caseStudy.video_url} controls className="w-full h-full object-contain" />;
  }

  const tags = Array.from(new Set([caseStudy.category, ...(caseStudy.geo_tags || []), ...(caseStudy.industries || [])])).filter(Boolean);

  return (
    <div className="container mx-auto max-w-6xl px-6 md:px-12 relative z-10 space-y-40 mt-40">
      
      {/* 6. GALLERY — Premium Editorial Tiling */}
      {mediaStory.length > 0 && (
        <section id="gallery" className="border-t border-white/5 pt-20">
          <div className="flex items-end justify-between mb-12">
            <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em]">06 // Visual Assets</h3>
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{mediaStory.length} frames</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">

            {/* Tile 0 — Large hero, spans 2 cols */}
            {mediaStory[0] && (
              <div className="col-span-2 relative overflow-hidden rounded-2xl bg-black group cursor-zoom-in">
                <img src={mediaStory[0]} alt="Frame 01" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{aspectRatio:'16/9'}} loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 text-[9px] font-mono text-white/50 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Frame 01</span>
              </div>
            )}

            {/* Tile 1 */}
            {mediaStory[1] && (
              <div className="col-span-1 relative overflow-hidden rounded-2xl bg-black group cursor-zoom-in">
                <img src={mediaStory[1]} alt="Frame 02" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{aspectRatio:'4/3'}} loading="lazy" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-[9px] font-mono text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">Frame 02</span>
              </div>
            )}

            {/* Tile 2 */}
            {mediaStory[2] && (
              <div className="col-span-1 relative overflow-hidden rounded-2xl bg-black group cursor-zoom-in">
                <img src={mediaStory[2]} alt="Frame 03" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{aspectRatio:'4/3'}} loading="lazy" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-[9px] font-mono text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">Frame 03</span>
              </div>
            )}

            {/* Tile 3 — Wide panoramic, spans 3 cols */}
            {mediaStory[3] && (
              <div className="col-span-2 md:col-span-3 relative overflow-hidden rounded-2xl bg-black group cursor-zoom-in">
                <img src={mediaStory[3]} alt="Frame 04" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{aspectRatio:'21/9'}} loading="lazy" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-[9px] font-mono text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">Frame 04</span>
              </div>
            )}

            {/* Tile 4 — portrait right side */}
            {mediaStory[4] && (
              <div className="col-span-2 md:col-span-1 relative overflow-hidden rounded-2xl bg-black group cursor-zoom-in">
                <img src={mediaStory[4]} alt="Frame 05" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{aspectRatio:'3/4', minHeight:'180px'}} loading="lazy" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-[9px] font-mono text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">Frame 05</span>
              </div>
            )}

            {/* Tiles 5-7 — 3 equal cols */}
            {mediaStory.slice(5, 8).map((img, i) => (
              <div key={i} className="col-span-1 relative overflow-hidden rounded-2xl bg-black group cursor-zoom-in">
                <img src={img} alt={`Frame 0${i + 6}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{aspectRatio:'4/3'}} loading="lazy" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-[9px] font-mono text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">Frame 0{i + 6}</span>
              </div>
            ))}

            {/* Tile 8 — spans 2 cols wide */}
            {mediaStory[8] && (
              <div className="col-span-2 relative overflow-hidden rounded-2xl bg-black group cursor-zoom-in">
                <img src={mediaStory[8]} alt="Frame 09" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{aspectRatio:'16/7'}} loading="lazy" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-[9px] font-mono text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">Frame 09</span>
              </div>
            )}

            {/* Any remaining tiles */}
            {mediaStory.slice(9).map((img, i) => (
              <div key={i} className="col-span-1 relative overflow-hidden rounded-2xl bg-black group cursor-zoom-in">
                <img src={img} alt={`Frame ${i + 10}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{aspectRatio:'4/3'}} loading="lazy" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-[9px] font-mono text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">Frame {i + 10}</span>
              </div>
            ))}

          </div>
        </section>
      )}

      {/* 7. VIDEOS */}
      {renderContent && (
        <section id="film" className="border-t border-white/5 pt-20">
          <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] mb-12">07 // The Film</h3>
          <div className="aspect-video w-full rounded-[3rem] overflow-hidden bg-black ring-1 ring-white/10 shadow-3xl relative">
            {renderContent}
          </div>
        </section>
      )}

      {/* 8. BUSINESS RESULTS */}
      {(caseStudy.business_results || (caseStudy.metrics && caseStudy.metrics.length > 0)) && (
        <section className="py-32 rounded-[4rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 text-primary-accent opacity-10 pointer-events-none">
            <BarChart3 size={180} />
          </div>
          <div className="container px-8 md:px-16">
            <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] mb-12">08 // Impact</h3>
            
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                {caseStudy.metrics.map((metric: any, idx: number) => (
                  <div key={idx} className="bg-black/40 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
                     <p className="text-4xl md:text-5xl font-black italic tracking-tighter text-white mb-2">
                       {metric.prefix || ''}{metric.value}{metric.suffix || ''}
                     </p>
                     <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}
            
            {caseStudy.business_results && (
              <div className="max-w-2xl bg-white/5 p-8 rounded-3xl border border-white/10">
                <p className="text-xl text-zinc-300 font-light leading-relaxed">
                  {caseStudy.business_results}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 9. SERVICES USED */}
      {tags.length > 0 && (
        <section className="border-t border-white/5 pt-20">
          <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] mb-8">09 // Strategic Footprint</h3>
          <div className="flex flex-wrap gap-4">
            {tags.map((tag: any, i: number) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-sm text-zinc-400 uppercase tracking-widest hover:bg-white/10 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* 10. RELATED PROJECTS */}
      {related && related.length > 0 && (
        <section className="border-t border-white/5 pt-20">
          <h3 className="text-[10px] font-mono text-primary-accent uppercase tracking-[0.4em] mb-12">10 // Continue Exploring</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((cs, idx) => (
              <Link key={cs.id} href={`/case-studies/${cs.slug}`} className="group flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 shadow-xl">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-black shrink-0">
                  <Image src={cs.thumbnail_url || '/placeholder.jpg'} alt={cs.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-1000" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h4 className="text-xl font-black uppercase tracking-widest text-white group-hover:text-primary-accent transition-colors leading-tight line-clamp-2">
                    {cs.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 11. CTA */}
      <section className="mb-40 border-t border-white/5 pt-40">
        <div className="bg-gradient-to-tr from-primary-accent/10 to-transparent border border-primary-accent/20 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-8 leading-[0.9] italic relative z-10">
            Define <span className="text-primary-accent underline decoration-white/20 underline-offset-8">Your Scale.</span>
          </h2>
          <div className="flex justify-center relative z-10">
             <Link href="/contact" className="px-10 py-5 rounded-full bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform shadow-2xl">
               Start A Project
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
