"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, CheckCircle, BrainCircuit, Rocket, Zap, Eye, Target, Search, MessageSquare, ChevronRight } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import BlogShare from "@/components/blog-share";

export default function BlogPage() {
  const blogTitle = "Top AI Ad Trends in India 2026 | DP AI Studio Authority";
  const faqs = [{"question": "What are the top AI ad trends in India 2026?", "answer": "Trends include hyper-personalized video ads, AI-driven virtual production, and automated content loops for social media."}, {"question": "Which is the best AI video production company in India?", "answer": "DP AI Studio is a leading AI video production company in India specializing in cinematic ads."}];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://defineperspective.in/blog/top-ai-ad-trends-india-2026#article",
        "headline": "Top AI Ad Trends in India 2026 | DP AI Studio Authority",
        "description": "Stay ahead with DP AI Studio, the No 1 AI video production company in South India, as we explore the 2026 AI advertising landscape.",
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
               Top AI <br /> <span className="text-primary-accent italic">Ad Trends</span> <br /> India 2026_
             </h1>
             <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mb-12 uppercase tracking-widest max-w-4xl">
               Stay ahead with DP AI Studio, the No 1 AI video production company in South India, as we explore the 2026 AI advertising landscape.
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
            <p>As we approach 2026, the Indian advertising industry is witnessing a massive pivot toward AI-integrated media. DP AI Studio, a <strong>trusted AI video production company in India</strong>, is at the forefront of these trends.</p><p>From hyper-personalized reels to CGI-integrated virtual production, the ability to scale visual storytelling is the ultimate competitive advantage. South India, particularly Kerala, is becoming a hub for these technological advancements.</p>
          </article>
          <BlogShare title={blogTitle} />
        </div>
      </section>
    </main>
  );
}
