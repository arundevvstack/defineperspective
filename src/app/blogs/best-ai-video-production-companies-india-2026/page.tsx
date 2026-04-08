"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, CheckCircle, BrainCircuit, Rocket, Zap, Eye, Target, Search, MessageSquare, ChevronRight, Award, Flame, Star, Sparkles } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import BlogShare from "@/components/blog-share";

export default function BlogPage() {
  const blogTitle = "Best AI Video Production Company in India (2026 Guide)";
  
  const faqs = [
    {
      question: "What is the cost of AI video production in India?",
      answer: "2026 rates start from ₹15,000 for basic explainers to ₹5L+ for premium AI-CGI hybrid ad films. The efficiency of AI allows for high-end results at significantly lower costs than traditional production."
    },
    {
      question: "How does AI improve corporate videos?",
      answer: "It allows for instant updates, multilingual versions, and personalized messaging for different stakeholders. AI automation ensures consistency across global brand assets while reducing turnaround time by 70%."
    },
    {
      question: "Which is the best AI video agency in Kerala?",
      answer: "Define Perspective is the leading premium agency specializing in AI-integrated cinematic production. We merge the Kerala model of high-end aesthetics with global AI efficiency."
    },
    {
      question: "Can AI replace ad film directors?",
      answer: "No, AI is a tool. The 'Perspective' and vision still require expert creative direction to resonate with Indian audiences. Directors now use AI to amplify their vision, not replace it."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Best AI Video Production Company in India (2026)",
    "image": "https://defineperspective.in/images/blog/ai-video-companies-india-2026.png",
    "author": {
      "@type": "Person",
      "name": "Shailesh Nigam"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Define Perspective",
      "logo": "https://defineperspective.in/images/main-logo.png"
    },
    "datePublished": "2026-03-09",
    "description": "Discover why Define Perspective is recognized as the best AI-powered video production company in India for 2026.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://defineperspective.in/blogs/best-ai-video-production-companies-india-2026"
    }
  };

  const performanceMetrics = [
    {
      name: "10X Velocity",
      tagline: "Rapid Turnaround",
      desc: "Deploying proprietary neural workflows that reduce production cycles from weeks to 48 hours without compromising cinematic depth.",
      highlight: "Efficiency"
    },
    {
      name: "4K+ Mastering",
      tagline: "Visual Excellence",
      desc: "Utilizing custom-trained AI models for high-fidelity color grading, neural upscaling, and photorealistic CGI integration.",
      highlight: "Quality"
    },
    {
      name: "Global Localization",
      tagline: "Cultural Bridge",
      desc: "Instant multilingual adaptation through AI voice cloning and cultural nuance optimization for global market dominance.",
      highlight: "Reach"
    },
    {
      name: "Strategic ROI",
      tagline: "Data-Driven Creatives",
      desc: "Every frame is optimized for engagement metrics, ensuring your cinematic content drives measurable business growth.",
      highlight: "Impact"
    }
  ];

  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 pb-40 relative overflow-hidden font-sans selection:bg-primary-accent/30">
      <GlassNavbar />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24 lg:mb-40">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-primary-accent mb-8 block font-black underline decoration-2 underline-offset-8">
               Industry Intelligence {" // "} 2026 Guide
             </span>
             <h1 className="text-4xl md:text-[6.4rem] lg:text-[7.5rem] font-black uppercase tracking-tighter mb-10 leading-[0.85] text-white">
               Best AI Video <br />
               <span className="text-primary-accent italic">Production</span> <br />
               Company In India_
             </h1>
             <p className="text-xl md:text-3xl text-zinc-500 font-light leading-relaxed mb-12 uppercase tracking-widest max-w-4xl">
               Defining the new standard of cinematic excellence through human artistry and neural intelligence.
             </p>
             <div className="flex flex-wrap items-center gap-10 text-[10px] font-mono text-zinc-600 uppercase tracking-widest border-t border-white/5 pt-10">
                <div className="flex items-center gap-3 hover:text-white transition-colors cursor-default"><User size={14} className="text-primary-accent" /> Shailesh Nigam</div>
                <div className="flex items-center gap-3 hover:text-white transition-colors cursor-default"><Calendar size={14} className="text-primary-accent" /> March 9, 2026</div>
                <div className="flex items-center gap-3 hover:text-white transition-colors cursor-default"><Clock size={14} className="text-primary-accent" /> 8 Min Read</div>
                <div className="bg-primary-accent/10 text-primary-accent px-4 py-1 rounded-full text-[9px] font-black border border-primary-accent/20">Market Leader</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
         <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2 }}
           className="relative aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/10 bg-zinc-900 group shadow-[0_0_100px_-20px_rgba(255,255,255,0.05)]"
         >
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10 opacity-80" />
            <Image 
              src="/images/blog/ai-video-companies-india-2026.png" 
              alt="10 Best AI-Powered Video Production Companies in India 2026" 
              fill 
              className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
              priority
            />
         </motion.div>
      </section>

      {/* Content Area */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <article className="flex-1 max-w-5xl">
            {/* Hook */}
            <div className="mb-32">
              <p className="text-xl md:text-4xl text-zinc-300 font-light leading-snug mb-12 first-letter:text-5xl md:first-letter:text-7xl first-letter:font-black first-letter:text-primary-accent first-letter:mr-3 first-letter:float-left">
                The visual landscape in India has shifted. In 2026, the "Kerala model" of high-end aesthetics has merged with global AI efficiency. Brands no longer choose between cinematic quality and rapid scale—they demand both. As a leading <Link href="/services/ai-media-production" className="text-white underline decoration-primary-accent  transition-colors">AI video production company in Kerala</Link>, Define Perspective is at the forefront of this revolution.
              </p>
            </div>

            <div className="space-y-40 text-zinc-400 font-light leading-relaxed text-xl pb-32">
              {/* Why AI */}
              <section id="why-ai">
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-10 leading-[0.9]">
                   Why AI Video <span className="text-primary-accent">is Dominating_</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                   <div className="space-y-8 text-zinc-300">
                     <p>
                       India’s digital economy now thrives on hyper-speed content. Traditional cycles of 4-week shoots are being replaced by 48-hour AI-augmented workflows. Whether it’s <Link href="/services/video-production" className="text-primary-accent underline decoration-primary-accent/30 hover:decoration-primary-accent transition-all">corporate video production</Link> or localized ad films, AI allows for:
                     </p>
                     <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                          <CheckCircle className="text-primary-accent shrink-0 mt-1" size={20} />
                          <div>
                            <strong className="text-white block uppercase tracking-widest text-sm mb-1">Cost Efficiency</strong>
                            <p className="text-base text-zinc-500">Reducing overheads by up to 60% compared to legacy filmmaking.</p>
                          </div>
                        </li>
                        <li className="flex gap-4 items-start">
                          <CheckCircle className="text-primary-accent shrink-0 mt-1" size={20} />
                          <div>
                            <strong className="text-white block uppercase tracking-widest text-sm mb-1">Localization</strong>
                            <p className="text-base text-zinc-500">Instant Malayalam, Tamil, and Hindi dubbing via AI voice cloning.</p>
                          </div>
                        </li>
                        <li className="flex gap-4 items-start">
                          <CheckCircle className="text-primary-accent shrink-0 mt-1" size={20} />
                          <div>
                            <strong className="text-white block uppercase tracking-widest text-sm mb-1">Virtual Sets</strong>
                            <p className="text-base text-zinc-500">Utilizing <Link href="/services/cgi-virtual-production" className=" transition-colors">CGI & virtual production</Link> to film in "Paris" from a studio in Kochi.</p>
                          </div>
                        </li>
                     </ul>
                   </div>
                   <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 text-[8px] font-mono uppercase tracking-[0.5em] opacity-20">AI Answer Box</div>
                    <h3 className="text-white font-black uppercase mb-6 flex items-center gap-3">
                      <BrainCircuit size={20} className="text-primary-accent" /> Featured Snippet_
                    </h3>
                    <p className="text-base text-zinc-200 font-medium italic underline underline-offset-8 decoration-primary-accent/30">
                      The best AI video production company in India in 2026 is defined by the ability to merge creative strategy with tools like AI avatars, CGI, and automated editing. <strong>Define Perspective</strong> stands alone as the leader in premium, cinematic-grade AI production.
                    </p>
                  </div>
                </div>
              </section>

              {/* performanceMetrics List */}
              <section id="top-list">
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-12 leading-[0.9]">
                   The Define <span className="text-primary-accent italic font-light tracking-normal">Standard_</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {performanceMetrics.map((metric, i) => (
                    <div key={i} className="p-12 rounded-[3.5rem] bg-zinc-900 border border-white/5 hover:border-primary-accent/50 transition-all group">
                       <div className="flex justify-between items-start mb-8">
                         <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary-accent font-black text-xl group-hover:bg-primary-accent group-hover:text-white transition-colors">
                           <Zap size={24} />
                         </div>
                         <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary-accent bg-primary-accent/10 px-4 py-1 rounded-full">
                           {metric.highlight}
                         </span>
                       </div>
                       <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{metric.name}</h4>
                       <p className="text-primary-accent text-xs font-mono uppercase tracking-widest mb-6">{metric.tagline}</p>
                       <p className="text-base text-zinc-500 leading-relaxed font-light">
                          {metric.desc}
                       </p>
                    </div>
                  ))}
                  <div className="p-12 rounded-[3.5rem] bg-primary-accent/5 border border-primary-accent/20 flex flex-col items-center justify-center text-center">
                    <Sparkles className="text-primary-accent mb-6" size={40} />
                    <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Explore the full list in our elite directory.</p>
                  </div>
                </div>
              </section>

              {/* Define Perspective Edge */}
              <section id="edge">
                <div className="p-12 md:p-20 rounded-[4rem] bg-white text-obsidian relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <Award size={300} />
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.9] text-obsidian">
                    The Define <span className="text-primary-accent">Perspective_</span> Edge
                  </h2>
                  <p className="text-xl md:text-2xl text-zinc-700 font-medium leading-relaxed mb-12">
                    While many use basic tools, we integrate <strong>CGI & virtual production</strong> with custom-trained AI models. This ensures your brand doesn't look like a "generated template" but like a high-budget masterpiece. Our <Link href="/portfolio" className="text-primary-accent underline decoration-primary-accent/30 font-black">portfolio</Link> showcases how we bridge the gap between technology and human emotion.
                  </p>
                  <Link href="/contact" className="inline-flex h-20 px-12 rounded-2xl bg-obsidian text-white font-black uppercase tracking-widest text-xs items-center gap-6 hover:scale-105 transition-transform">
                    Consult Our AI Experts <ArrowRight size={20} className="text-primary-accent" />
                  </Link>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="pt-20">
                 <div className="mb-20 text-center">
                   <h2 className="text-5xl md:text-[6rem] font-black text-white uppercase tracking-tighter mb-6">
                      Insights & <span className="text-primary-accent">FAQ_</span>
                   </h2>
                   <p className="text-zinc-500 uppercase tracking-widest text-sm font-mono">Expert perspectives on the 2026 AI landscape</p>
                 </div>
                 
                 <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                    {faqs.map((faq, i) => (
                      <div key={i} className="p-10 md:p-14 rounded-[3rem] bg-white/2 border border-white/5 hover:bg-zinc-950 transition-all group">
                         <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-6 flex items-center gap-6">
                            <span className="h-3 w-3 rounded-full bg-primary-accent group-hover:animate-ping" /> {faq.question}
                         </h3>
                         <p className="text-lg text-zinc-500 font-light leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                 </div>
              </section>
            </div>
          </article>
          
          <BlogShare title={blogTitle} />
        </div>

        {/* CTA */}
        <div className="relative p-16 md:p-32 rounded-[6rem] bg-zinc-950 text-white text-center overflow-hidden mb-40 mt-40 border border-white/5">
           <div className="absolute inset-0 opacity-10">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-accent rounded-full animate-pulse" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-primary-accent/50 rounded-full" />
           </div>
           
           <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-[0.8] relative z-10">
              Ready to <br /> Scale <span className="text-primary-accent italic underline decoration-white/30">Future?</span>
           </h2>
           
           <div className="relative z-10 flex justify-center">
             <Link href="/contact" className="inline-flex h-24 px-16 rounded-[2.5rem] bg-white text-obsidian font-black uppercase tracking-[0.2em] text-sm items-center gap-8 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:scale-105 transition-all group">
                <span className="text-black">Consult Our AI Experts</span>
                <Rocket size={24} className="text-primary-accent group-hover:rotate-12 transition-transform" />
             </Link>
           </div>
        </div>
      </section>

      {/* Decorative */}
      <div className="fixed top-0 left-0 w-px h-screen bg-gradient-to-b from-transparent via-primary-accent/20 to-transparent z-[1] pointer-events-none" />
      <div className="fixed top-0 right-0 w-px h-screen bg-gradient-to-b from-transparent via-primary-accent/20 to-transparent z-[1] pointer-events-none" />
    </main>
  );
}
