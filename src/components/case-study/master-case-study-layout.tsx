import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import GlassNavbar from '@/components/glass-navbar';
import WhatsAppChat from '@/components/whatsapp-chat';
import LiteYouTube from '@/components/lite-youtube';
import CaseStudyMasterHero from './case-study-hero';
import CaseStudyMasterTOC, { TOCItem } from './case-study-toc';
import CaseStudyProductionSpecs from './case-study-specs';
import CaseStudyWorkflowTimeline from './case-study-workflow';
import CaseStudyProductionEvidence from './case-study-evidence';
import CaseStudyAiFaq from './case-study-faq';
import CaseStudyFinalCTA from './case-study-cta';
import { MasterCaseStudyData } from './case-study-types';

export default function MasterCaseStudyLayout({ data }: { data: MasterCaseStudyData }) {
  // Determine which sections genuinely have content
  const hasExecutiveSummary = Boolean(data.executiveSummary);
  const hasSpecs = Boolean(data.specs && data.specs.length > 0);
  const hasCreativeDirection = Boolean(data.creativeDirectionText || data.creativeDirectionImage);
  const hasPipeline = Boolean(
    data.pipelineText ||
    data.pipelineConsistencyText ||
    (data.pipelineFrames && data.pipelineFrames.length > 0)
  );
  const hasCinematography = Boolean(
    data.lightingText ||
    data.cinematographyText ||
    data.youtubeId ||
    (data.cinematographyFrames && data.cinematographyFrames.length > 0)
  );
  const hasWorkflow = Boolean(data.workflowSteps && data.workflowSteps.length > 0);
  const hasEvidence = Boolean(data.evidenceRawFrame && data.evidenceFinalFrame);
  const hasFaqs = Boolean(data.faqs && data.faqs.length > 0);

  // Dynamic Table of Contents: contains ONLY sections that are actually rendered
  const tocItems: TOCItem[] = [
    ...(hasExecutiveSummary ? [{ id: 'executive-summary', label: 'Executive Summary' }] : []),
    ...(hasSpecs ? [{ id: 'production-specs', label: 'Production Specifications' }] : []),
    ...(hasCreativeDirection
      ? [{ id: 'creative-direction', label: data.creativeDirectionTitle || 'Creative Direction' }]
      : []),
    ...(hasPipeline
      ? [{ id: 'generative-pipeline', label: data.pipelineTitle || 'Generative Pipeline' }]
      : []),
    ...(hasCinematography
      ? [{ id: 'lighting-and-cinematography', label: 'Lighting & Cinematography' }]
      : []),
    ...(hasWorkflow ? [{ id: 'production-workflow', label: 'Production Workflow' }] : []),
    ...(hasEvidence ? [{ id: 'production-evidence', label: 'Production Evidence' }] : []),
    ...(hasFaqs ? [{ id: 'ai-search-answers', label: 'AI Search Answers' }] : []),
  ];

  const videoWatchUrl = data.youtubeId
    ? `https://www.youtube.com/watch?v=${data.youtubeId}`
    : data.videoUrl || null;

  return (
    <main className="min-h-screen bg-obsidian text-white pb-40 relative overflow-hidden font-sans selection:bg-primary-accent/30">
      <ScrollProgress />
      <GlassNavbar />

      {/* ADMIN PREVIEW BANNER (Unpublished draft mode only) */}
      {data.isPreviewMode && (
        <div className="sticky top-0 z-50 w-full bg-amber-500/95 text-black py-2.5 px-4 backdrop-blur-md shadow-lg border-b border-amber-400">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
              <span>ADMIN PREVIEW MODE — UNPUBLISHED DRAFT</span>
              <span className="opacity-75 font-normal">({data.previewStatus || 'draft'})</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] bg-black/10 px-2 py-0.5 rounded">noindex, nofollow</span>
              <Link
                href={`/admin/portfolio/${data.id}/edit`}
                className="bg-black text-amber-400 px-3 py-1 rounded hover:bg-neutral-900 transition-colors"
              >
                Return to Editor
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-accent/5 blur-[250px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />

      {/* 1. Cinematic Hero Banner */}
      <div className="relative z-10">
        <CaseStudyMasterHero data={data} />
      </div>

      <div
        id="overview"
        className="container mx-auto px-4 md:px-12 pt-16 pb-32 max-w-7xl relative z-10 scroll-mt-24"
      >
        {/* 2. Editorial Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-6 mb-12 gap-6">
          <div className="flex items-center gap-6 text-xs md:text-sm text-zinc-400 font-mono tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-accent" />{' '}
              {data.readTime || '10 Min Read'}
            </span>
            <span>Updated: {data.lastUpdated || '2026'}</span>
            <span>By: {data.editorialBy || 'DP AI Studio Editorial'}</span>
          </div>

          <div className="flex gap-4">
            <Link
              href={data.backHref || '/portfolio'}
              className="text-xs font-bold uppercase tracking-widest hover:text-primary-accent transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5"
            >
              ← {data.backLabel || 'Back to Portfolio'}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* 3. Sticky Desktop TOC & Mobile Accordion (Only rendered if there are TOC items) */}
          {tocItems.length > 0 && <CaseStudyMasterTOC items={tocItems} />}

          {/* MAIN ARTICLE AREA */}
          <div className={`col-span-1 ${tocItems.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12'}`}>
            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-widest prose-a:text-primary-accent hover:prose-a:text-white transition-colors">
              {/* 4. Executive Summary */}
              {hasExecutiveSummary && (
                <>
                  <h2
                    id="executive-summary"
                    className="text-3xl md:text-5xl text-white mb-8 scroll-mt-24"
                  >
                    Executive Summary
                  </h2>
                  <p className="text-xl text-zinc-300 leading-relaxed mb-6 font-light">
                    {data.executiveSummary}
                  </p>
                  {data.whyInitiatedText && (
                    <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                      <strong className="text-white">Why was this project initiated?</strong>{' '}
                      {data.whyInitiatedText}
                    </p>
                  )}

                  {/* Highlights Bullet List */}
                  {data.highlights && data.highlights.length > 0 && (
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-12">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-primary-accent mb-4 font-black">
                        Key Project Highlights
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-zinc-300 m-0 list-none p-0">
                        {data.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 m-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-accent shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}

              {/* 5. Production Specifications */}
              {hasSpecs && (
                <>
                  <h2
                    id="production-specs"
                    className="text-3xl text-white mb-8 mt-16 scroll-mt-24"
                  >
                    Production Specifications
                  </h2>
                  <CaseStudyProductionSpecs specs={data.specs} />
                </>
              )}

              {/* 6. Creative Direction & Visual Language */}
              {hasCreativeDirection && (
                <>
                  <h2
                    id="creative-direction"
                    className="text-3xl text-white mb-8 mt-16 scroll-mt-24"
                  >
                    {data.creativeDirectionTitle || 'Creative Direction & Visual Language'}
                  </h2>
                  {data.creativeDirectionText && (
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                      {data.creativeDirectionText}
                    </p>
                  )}

                  {data.creativeDirectionImage && (
                    <figure className="my-12">
                      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video bg-neutral-900 group">
                        <Image
                          src={data.creativeDirectionImage.url}
                          alt={data.creativeDirectionImage.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      {data.creativeDirectionImage.caption && (
                        <figcaption className="mt-4 text-xs font-mono text-zinc-500 uppercase tracking-widest border-l-2 border-primary-accent pl-4">
                          {data.creativeDirectionImage.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </>
              )}

              {/* 7. Generative Pipeline & Consistency Workflow */}
              {hasPipeline && (
                <>
                  <h2
                    id="generative-pipeline"
                    className="text-3xl text-white mb-8 mt-16 scroll-mt-24"
                  >
                    {data.pipelineTitle || 'Generative Pipeline & Consistency Workflow'}
                  </h2>
                  {data.pipelineText && (
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                      {data.pipelineText}
                    </p>
                  )}
                  {data.pipelineConsistencyText && (
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                      {data.pipelineConsistencyText}
                    </p>
                  )}

                  {/* Pipeline Frames Grid */}
                  {data.pipelineFrames && data.pipelineFrames.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                      {data.pipelineFrames.map((frame, idx) => (
                        <figure key={idx} className="group">
                          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                            <Image
                              src={frame.url}
                              alt={frame.alt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          {frame.caption && (
                            <figcaption className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                              {frame.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* 8. Lighting Philosophy & Virtual Cinematography */}
              {hasCinematography && (
                <>
                  <h2
                    id="lighting-and-cinematography"
                    className="text-3xl text-white mb-8 mt-16 scroll-mt-24"
                  >
                    Lighting Philosophy & Virtual Cinematography
                  </h2>
                  {data.lightingText && (
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                      {data.lightingText}
                    </p>
                  )}
                  {data.cinematographyText && (
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                      {data.cinematographyText}
                    </p>
                  )}

                  {/* Primary Video Player Embed */}
                  {data.youtubeId && (
                    <div className="my-12 rounded-3xl overflow-hidden border border-white/10 bg-black aspect-video shadow-2xl">
                      <LiteYouTube
                        videoId={data.youtubeId}
                        title={data.title}
                        priority
                      />
                    </div>
                  )}

                  {/* Cinematography Frames Grid */}
                  {data.cinematographyFrames && data.cinematographyFrames.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                      {data.cinematographyFrames.map((frame, idx) => (
                        <figure key={idx} className="group">
                          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                            <Image
                              src={frame.url}
                              alt={frame.alt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                          {frame.caption && (
                            <figcaption className="mt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                              {frame.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* 9. Production Workflow Timeline */}
              {hasWorkflow && (
                <>
                  <h2
                    id="production-workflow"
                    className="text-3xl text-white mb-8 mt-16 scroll-mt-24"
                  >
                    Production Workflow
                  </h2>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    The execution of this project followed a deterministic, human-directed AI filmmaking pipeline. Generative diffusion models were steered as camera instruments, ensuring strict narrative pacing and brand consistency across every second of motion.
                  </p>
                  <CaseStudyWorkflowTimeline steps={data.workflowSteps} />
                </>
              )}

              {/* 10. Production Evidence (Before & After) */}
              {hasEvidence && (
                <section id="production-evidence" className="scroll-mt-24">
                  <CaseStudyProductionEvidence
                    title={data.evidenceTitle}
                    description={data.evidenceDescription}
                    rawFrame={data.evidenceRawFrame}
                    finalFrame={data.evidenceFinalFrame}
                  />
                </section>
              )}

              {/* 11. AI Search Answers (AEO / GEO FAQ) */}
              {hasFaqs && (
                <section id="ai-search-answers" className="scroll-mt-24">
                  <h2 className="text-3xl text-white mb-8 mt-16">
                    Core Production Answers (AEO)
                  </h2>
                  <CaseStudyAiFaq faqs={data.faqs} />
                </section>
              )}

              {/* Final Production CTA */}
              <CaseStudyFinalCTA
                title={data.ctaTitle}
                description={data.ctaDescription}
                buttonText={data.ctaButtonText}
                buttonLink={data.ctaButtonLink}
                videoWatchUrl={videoWatchUrl}
              />
            </article>
          </div>
        </div>
      </div>

      <WhatsAppChat />
    </main>
  );
}
