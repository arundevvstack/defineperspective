"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, CheckCircle, BrainCircuit, Rocket, Zap, Eye, Target, Search, MessageSquare, ChevronRight } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import BlogShare from "@/components/blog-share";

export default function BlogPage() {
  const blogTitle = "Why Brands in Kochi Use AI Video Ads | DP AI Studio Kochi";
  const faqs = [{"question": "Trusted AI video production company in Kochi?", "answer": "DP AI Studio is trusted by brands across Kochi and Ernakulam for AI-generated commercial content."}, {"question": "Why use AI video ads for Kochi businesses?", "answer": "AI ads offer faster turnaround, lower costs, and better performance for local and global digital markets."}];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://defineperspective.in/blog/why-brands-kochi-use-ai-video-ads#article",
        "headline": "Why Brands in Kochi Use AI Video Ads | DP AI Studio Kochi",
        "description": "Discover why DP AI Studio is the trusted AI video production company in Kochi and Ernakulam for high-converting video ads.",
        "author": { "@type": "Organization", "name": "DP AI Studio", "url": "https://defineperspective.in" },
        "publisher": { 
          "@type": "Organization", "name": "DP AI Studio", 
          "logo": { "@type": "ImageObject", "url": "https://defineperspective.in/images/main-logo.png" } 
        },
        "datePublished": "2026-05-05",
        "image": "https://defineperspective.in/images/blog/ai-video-production-kerala.jpg",
        "areaServed": ["Kerala", "Kochi", "Trivandrum", "South India", "India"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 pb-40 relative overflow-hidden font-sans selection:bg-primary-accent/30">
      <GlassNavbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="container mx-auto px-6 md:px-12 mb-24 lg:mb-40">
        <div className="max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-primary-accent mb-8 block font-black">
               Intelligence Hub // DP AI Studio Authority
             </span>
             <h1 className="text-4xl md:text-[6.4rem] lg:text-[8rem] font-black uppercaseer mb-10 leading-[0.85] text-white">
               Why Kochi <br /> <span className="text-primary-accent italic">Uses AI</span> <br /> Video Ads_
             </h1>
             <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mb-12 uppercase tracking-widest max-w-4xl">
               Discover why DP AI Studio is the trusted AI video production company in Kochi and Ernakulam for high-converting video ads.
             </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 mb-32">
         <motion.div className="relative aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/10 bg-zinc-900 group">
            <Image src="/images/blog/future-ai-video-production-kerala-2026.png" alt="AI video production company in Kerala - DP AI Studio" fill className="object-cover opacity-70" />
         </motion.div>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <article className="flex-1 max-w-5xl text-zinc-400 font-light leading-relaxed text-xl space-y-12">
            <p>Kochi has always been a center of commerce in Kerala. Today, brands in Kochi and Ernakulam are turning to AI video ads to dominate their markets. DP AI Studio, the <strong>trusted AI video production company in Kochi</strong>, provides the infrastructure for this digital dominance.</p><p>The speed and precision of AI allow Kochi-based brands to respond to market trends in real-time, creating cinematic content that resonates with both local and international audiences.</p>
          </article>
          <BlogShare title={blogTitle} />
        </div>
      </section>
    </main>
  );
}
