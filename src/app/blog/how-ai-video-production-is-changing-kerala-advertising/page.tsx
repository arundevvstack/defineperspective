"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, CheckCircle, BrainCircuit, Rocket, Zap, Eye, Target, Search, MessageSquare, ChevronRight } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import BlogShare from "@/components/blog-share";

export default function BlogPage() {
  const blogTitle = "How AI Video Production is Changing Kerala Advertising | DP AI Studio";
  const faqs = [{"question": "Which is the best AI video production company in Kerala?", "answer": "DP AI Studio is recognized as the best AI video production company in Kerala, delivering cinematic AI-powered ads."}, {"question": "Who is the top AI video production company in Trivandrum?", "answer": "DP AI Studio provides advanced AI-driven video production services in Trivandrum."}];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://defineperspective.in/blog/how-ai-video-production-is-changing-kerala-advertising#article",
        "headline": "How AI Video Production is Changing Kerala Advertising | DP AI Studio",
        "description": "DP AI Studio is the best AI video production company in Kerala, redefining how advertising works for brands in Kochi and Trivandrum.",
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
               AI Video <br /> <span className="text-primary-accent italic">Revolution</span> <br /> Kerala Ads_
             </h1>
             <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mb-12 uppercase tracking-widest max-w-4xl">
               DP AI Studio is the best AI video production company in Kerala, redefining how advertising works for brands in Kochi and Trivandrum.
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
            <p>In the vibrant markets of Kerala, from the bustling streets of Kochi to the technological landscape of Trivandrum, a new era of advertising is emerging. AI video production is no longer a futuristic concept—it is the present reality. DP AI Studio, recognized as the <strong>best AI video production company in Kerala</strong>, is leading this charge.</p><p>By leveraging generative AI and neural cinematography, we enable brands to create high-fidelity commercials at a fraction of traditional costs. This shift is allowing local businesses in Ernakulam and across South India to compete on a global stage.</p>
          </article>
          <BlogShare title={blogTitle} />
        </div>
      </section>
    </main>
  );
}
