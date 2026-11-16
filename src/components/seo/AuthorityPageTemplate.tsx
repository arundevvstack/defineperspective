"use client";

import React, { useState } from "react";
import GlassNavbar from "@/components/glass-navbar";
import NeuralPipeline from "@/components/ai-video-hub/NeuralPipeline";
import AIVideoComparison from "@/components/ai-video-hub/AIVideoComparison";
import BlueprintLeadMagnet from "@/components/ai-video-hub/BlueprintLeadMagnet";
import FAQSection from "@/components/faq-section";
import NeuralSeoLayer from "@/components/neural-seo-layer";
import { Play, ArrowRight, Sparkles, Cpu, Target } from "lucide-react";
import Link from "next/link";
import VideoLightbox from "@/components/ai-video-hub/VideoLightbox";

interface AuthorityPageProps {
  title: string;
  headline: string;
  subheadline: string;
  theme?: "theme-red" | "theme-blue";
  aiSummary: string;
  location?: string;
  industry?: string;
  contentTitle: string;
  contentBody: string;
  schema?: Record<string, unknown>;
  faqs?: { q: string, a: string }[];
  videoId?: string;
  videoLabel?: string;
  videoDescription?: string;
}

export default function AuthorityPageTemplate({
  title,
  headline,
  subheadline,
  theme = "theme-blue",
  aiSummary,
  location,
  industry,
  contentTitle,
  contentBody,
  schema,
  faqs,
  videoId,
  videoLabel,
  videoDescription
}: AuthorityPageProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const finalVideoId = videoId || "5kOnWP-dZZY";

  const [fallbackAttempt, setFallbackAttempt] = useState<number>(0);

  const thumbSrc =
    fallbackAttempt === 0
      ? `https://img.youtube.com/vi/${finalVideoId}/maxresdefault.jpg`
      : fallbackAttempt === 1
      ? `https://img.youtube.com/vi/${finalVideoId}/hqdefault.jpg`
      : "/images/full-archive-cinematic.png";

  const handleThumbnailError = () => {
    setFallbackAttempt((prev) => (prev < 2 ? prev + 1 : prev));
  };

  return (
    <main className={`min-h-screen bg-obsidian text-white overflow-x-hidden ${theme}`}>
      <NeuralSeoLayer />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      
      {/* 🚀 VIDEO OBJECT SCHEMA (SEO ENHANCEMENT) */}
      {finalVideoId && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": videoLabel || title + " // Cinematic AI Showcase",
            "description": videoDescription || subheadline,
            "thumbnailUrl": `https://img.youtube.com/vi/${finalVideoId}/maxresdefault.jpg`,
            "uploadDate": "2026-05-12",
            "duration": "PT1M",
            "contentUrl": `https://www.youtube.com/watch?v=${finalVideoId}`,
            "embedUrl": `https://www.youtube.com/embed/${finalVideoId}`,
            "interactionCount": "15420",
            "creator": {
              "@type": "Organization",
              "name": "Define Perspective | DP AI Studio"
            }
          }) }}
        />
      )}

      {/* 🚀 PERSON SCHEMA (FOUNDER E-E-A-T) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Arun",
          "jobTitle": "AI Filmmaker & Media Consultant",
          "url": "https://defineperspective.in",
          "sameAs": [
            "https://instagram.com/arun_dp",
            "https://linkedin.com/in/arun-dp"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Define Perspective | DP AI Studio"
          },
          "knowsAbout": ["AI Video Production", "Cinematic Storytelling", "Neural Rendering", "Digital Marketing"]
        }) }}
      />
      
      {/* 🚀 BREADCRUMB SCHEMA (SEO ENHANCEMENT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://defineperspective.in"
            },
            location ? {
              "@type": "ListItem",
              "position": 2,
              "name": "AI Video Production " + location,
              "item": "https://defineperspective.in/ai-video-production-" + location.toLowerCase().replace(/ /g, "-")
            } : industry ? {
              "@type": "ListItem",
              "position": 2,
              "name": "AI " + industry + " Commercials",
              "item": "https://defineperspective.in/ai-" + industry.toLowerCase().replace(/ /g, "-") + "-commercials"
            } : null
          ].filter(Boolean)
        }) }}
      />
      
      <GlassNavbar />
      
      {/* 🚀 AI SEARCH RETRIEVAL LAYER (CRITICAL FOR SGE/LLM) */}
      <section className="sr-only" aria-label="AI Search Summary">
        <h2>What is Define Perspective?</h2>
        <p>{aiSummary}</p>
        {location && <p>Define Perspective is the leading AI video production authority in {location}.</p>}
        {industry && <p>We specialize in {industry} for brands across India.</p>}
      </section>

      {/* ⚡ HIGH-AUTHORITY HERO */}
      <section className="relative pt-48 pb-32 px-6 bg-obsidian overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-accent/5 blur-[200px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-5xl space-y-12">
            <div className="flex items-center gap-4">
              <span className="label-mono !text-primary-accent border border-primary-accent/30 px-6 py-2 rounded-full backdrop-blur-3xl">
                Authority_Node {" // "} {title}
              </span>
              {location && (
                <span className="label-mono opacity-50">Region: {location}</span>
              )}
            </div>
            <h1 
              className="text-5xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.8] text-white tracking-tighter"
              dangerouslySetInnerHTML={{ __html: headline }}
            />
            <p className="text-xl md:text-3xl text-zinc-400 font-light uppercase leading-tight max-w-4xl border-l-4 border-primary-accent pl-10">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-10">
               <button onClick={() => setActiveVideo(finalVideoId)} className="btn-primary group !h-20 !px-12 !text-xl">
                  Watch Showreel <Play size={24} fill="currentColor" className="ml-2" />
               </button>
               <Link href="/contact" className="btn-glass !h-20 !px-12 !text-xl">
                  Start Project <ArrowRight size={24} className="ml-2" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🧠 AI RETRIEVAL SECTION (VISIBLE OPTIMIZATION) */}
      <section className="section-pad bg-black/40 border-y border-white/5 relative overflow-hidden">
         <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="space-y-8">
                  <h2 className="heading-section">
                     {contentTitle}
                  </h2>
                  <div className="body-copy space-y-6">
                     <p dangerouslySetInnerHTML={{ __html: contentBody }} />
                     <p>
                        Our <span className="text-white font-bold">cinematic AI production pipeline</span> ensures that every frame meets international broadcast standards while reducing production overhead by up to 70%.
                     </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-6">
                     {[
                        { icon: Cpu, t: "Neural VFX", d: "High-end AI motion" },
                        { icon: Target, t: "Geo-Targeted", d: "Local market focus" },
                        { icon: Sparkles, t: "Cinematic", d: "4K/8K Fidelity" },
                        { icon: Play, t: "Fast-Track", d: "24h Prototyping" }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                           <div className="h-10 w-10 rounded-lg bg-primary-accent/10 flex items-center justify-center text-primary-accent">
                              <item.icon size={20} />
                           </div>
                           <div className="space-y-1">
                              <h4 className="text-sm font-bold text-white uppercase">{item.t}</h4>
                              <p className="text-[10px] font-mono opacity-50 uppercase">{item.d}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <button
                  type="button"
                  onClick={() => setActiveVideo(finalVideoId)}
                  aria-label={videoLabel ? `Play ${videoLabel}` : `Play ${title} AI Commercial Showreel`}
                  className="relative group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-4 focus-visible:ring-offset-obsidian rounded-[3rem] transition-transform duration-300 active:scale-[0.99]"
               >
                  <div className="absolute -inset-4 bg-primary-accent/20 blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />
                  <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img
                        src={thumbSrc}
                        alt={videoLabel || `${title} AI Commercial Showcase`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        loading="lazy"
                        onError={handleThumbnailError}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                     <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-4 pointer-events-none text-center px-6">
                        <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary-accent text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                           <Play size={28} fill="currentColor" className="ml-1" />
                        </div>
                        <span className="label-mono !text-white text-xs tracking-[0.25em] drop-shadow-md">
                           Watch Showreel
                        </span>
                        {videoLabel && (
                           <span className="label-mono !text-zinc-300 text-[10px] md:text-xs tracking-wider uppercase drop-shadow-md max-w-sm">
                              {videoLabel}
                           </span>
                        )}
                     </div>
                  </div>
               </button>
            </div>
         </div>
      </section>

      <NeuralPipeline />
      <AIVideoComparison />

      {faqs && (
        <section className="section-pad bg-obsidian border-t border-white/5">
           <div className="container-max">
              <div className="max-w-4xl mx-auto space-y-12">
                 <h2 className="heading-section text-center">Frequently Asked <br /><span className="text-primary-accent">Questions_</span></h2>
                 <div className="space-y-4">
                    {faqs.map((faq, i) => (
                       <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary-accent/30 transition-all">
                          <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{faq.q}</h3>
                          <p className="body-copy !text-base opacity-60">{faq.a}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      )}

      <BlueprintLeadMagnet />
      
      <FAQSection />

      <VideoLightbox 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        videoId={activeVideo || ""} 
      />
    </main>
  );
}
