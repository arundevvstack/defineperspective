"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import Image from "next/image";
import Link from "next/link";

import { BLOGS } from "@/data/blog-data";

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
            <h1 className="text-6xl md:text-[8rem] font-black uppercase leading-none mb-12">
               BLOGS_
            </h1>
          </motion.div>
        </section>

        {/* Featured Post Hero */}
        <section className="mb-24">
          {BLOGS.slice(0, 1).map((featured) => (
            <Link key={featured.slug} href={`/blog/${featured.slug}`} className="group block relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 aspect-[21/9] min-h-[300px]">
              <Image 
                src={featured.image} 
                alt={featured.title} 
                fill 
                className="object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end max-w-4xl">
                 <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded bg-primary-accent text-black text-[9px] font-black uppercase tracking-widest">Featured Post</span>
                    <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">{featured.date}</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-6 leading-tight tracking-tighter">
                    {featured.title}
                 </h2>
                 <p className="text-sm md:text-lg text-zinc-400 font-light max-w-2xl uppercase tracking-widest mb-8 line-clamp-2">
                    {featured.excerpt}
                 </p>
                 <div className="flex items-center gap-4 text-primary-accent font-black uppercase text-[10px] tracking-widest">
                    Enter the future <ArrowRight size={16} />
                 </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-20 overflow-x-auto pb-4 scrollbar-hide">
           {["All Posts", "AI TVC", "Production", "Marketing", "Strategy"].map((tag, i) => (
             <button 
               key={i}
               className="px-8 py-3 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:border-primary-accent/50 transition-all whitespace-nowrap"
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
                 
                 <h2 className="text-2xl font-black uppercase text-white mb-6 leading-tight group- transition-colors duration-300 mt-6 md:text-3xl line-clamp-3">
                    {blog.title}
                 </h2>
                 
                 <p className="text-zinc-400 font-light leading-relaxed uppercase text-[10px] tracking-widest mb-10 flex-1 leading-loose">
                    {blog.excerpt}
                 </p>

                 <div className="pt-8 border-t border-white/5 mt-auto">
                    <Link 
                      href={`/blog/${blog.slug}`}
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
