"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import Image from "next/image";
import Link from "next/link";

const BLOGS = [
  {
    slug: "short-form-video-growth-2026",
    title: "Why Short-Form Video is the #1 Growth Engine for Brands in 2026",
    excerpt: "Mastering the 9:16 economy through high-fidelity micro-storytelling and neural-accelerated production.",
    date: "April 3, 2026",
    author: "Arun Dev",
    category: "9:16 Economy",
    image: "/images/blog/short-form-hero.png"
  },
  {
    slug: "ai-vs-traditional-ads-2026",
    title: "How AI Video Production is Replacing Traditional Ads in 2026 (And What Brands Must Do)",
    excerpt: "The death of the 90-day production cycle and the rise of the Always-On Neural Storytelling Engine.",
    date: "April 3, 2026",
    author: "Arun Dev",
    category: "Comparative Study",
    image: "/images/blog/ai-vs-traditional-hero.png"
  },
  {
    slug: "cognitive-content-revolution",
    title: "The Cognitive Content Revolution: Why Brands Are Switching to AI-Driven Media Production in 2026",
    excerpt: "Exploring the fundamental shift from manual creation to neural-accelerated generation and how it's redefining global brand growth.",
    date: "April 3, 2026",
    author: "Arun Dev",
    category: "AI & Innovation",
    image: "/images/blog/cognitive-hero.png"
  },
  {
    slug: "ai-video-production-kerala",
    title: "How AI Video Production is Transforming Brand Communication in Kerala",
    excerpt: "Discover how automation and neural workflows are redefining storytelling for premium brands in the south Indian creative ecosystem.",
    date: "April 03, 2026",
    author: "Shamnad Shams",
    category: "Market Report",
    image: "/images/blog/ai-kerala-hero-v2.png"
  },
  {
    slug: "best-ai-video-production-kerala",
    title: "#1 AI Video Production Company In Kerala | Kochi & Trivandrum (Elite 2026)",
    excerpt: "The authoritative pillar guide to AI-powered media production, market dominance, and neural storytelling for premium brands in Kochi and Trivandrum.",
    date: "April 4, 2026",
    author: "Define Editorial",
    category: "Pillar Guide",
    image: "/images/blog/ai-kerala-hero-v2.png"
  },
  {
    slug: "performance-video-ads-d2c",
    title: "Mastering Performance Video Ads for D2C Brands",
    excerpt: "A deep dive into the technical structure of high-converting social media ads that scale revenue for direct-to-consumer businesses.",
    date: "April 12, 2024",
    author: "Define Labs",
    category: "Strategy",
    image: "/images/blog/d2c-ads-hero.png"
  },
  {
    slug: "virtual-production-revolution",
    title: "CGI vs. Reality: The Virtual Production Revolution",
    excerpt: "Exploring why Unreal Engine and virtual studios are becoming the primary tool for high-end commercial shoots in 2024.",
    date: "April 08, 2024",
    author: "Production Lab",
    category: "Technical",
    image: "/images/blog/virtual-prod-hero.png"
  }
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 pb-40 relative overflow-hidden font-sans">
      <GlassNavbar />

      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,var(--primary-accent)_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <section className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-none mb-12">
               BLOGS_
            </h1>
          </motion.div>
        </section>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-20 overflow-x-auto pb-4 scrollbar-hide">
           {["All Posts", "AI Nodes", "Vertical Economy", "Production Strategy", "Cinematic Density"].map((tag, i) => (
             <button 
               key={i}
               className="px-8 py-3 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white hover:border-primary-accent/50 hover:bg-white/5 transition-all whitespace-nowrap"
             >
               {tag}
             </button>
           ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOGS.map((blog, idx) => (
            <motion.article
              key={blog.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group flex flex-col h-full bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary-accent/30 transition-all duration-500 shadow-xl"
            >
              <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden">
                 <Image 
                   src={blog.image} 
                   alt={blog.title} 
                   fill 
                   className="object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000" 
                 />
                 <div className="absolute top-6 left-6 p-2 rounded-lg bg-black/40 backdrop-blur-md text-primary-accent border border-primary-accent/20">
                    <Tag size={16} />
                 </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                 <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6 border-b border-white/5 pb-6">
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-primary-accent" /> {blog.date}</span>
                    <span className="flex items-center gap-2"><User size={12} className="text-zinc-700" /> {blog.author}</span>
                 </div>
                 
                 <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-6 leading-tight group-hover:text-primary-accent transition-colors duration-300 mt-6 md:text-3xl line-clamp-3">
                    {blog.title}
                 </h2>
                 
                 <p className="text-zinc-500 font-light leading-relaxed uppercase text-[10px] tracking-widest mb-10 flex-1 leading-loose">
                    {blog.excerpt}
                 </p>

                 <div className="pt-8 border-t border-white/5 mt-auto">
                    <Link 
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-primary-accent group/btn"
                    >
                      Read more <ArrowRight size={14} className="group-hover/btn:translate-x-3 transition-transform" />
                    </Link>
                 </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
