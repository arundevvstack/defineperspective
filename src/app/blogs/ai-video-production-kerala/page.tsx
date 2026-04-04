"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, CheckCircle, BrainCircuit, Rocket, Zap, Eye } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";

export default function BlogPage() {
  const faqs = [
    {
      question: "What is AI video production?",
      answer: "AI video production uses artificial intelligence to automate various stages of filmmaking, from script generation and video editing to voiceovers and photorealistic grading, significantly reducing production time while maintaining high quality."
    },
    {
      question: "How does AI help in brand communication?",
      answer: "AI enables brands to create personalized content at scale, ensuring consistent storytelling across multiple platforms. It processes data to understand audience preferences and generates visuals that resonate with specific demographics."
    },
    {
      question: "Why choose an AI video production agency in Kerala?",
      answer: "Choosing a local agency like Define Perspective ensures your brand leverages cutting-edge technology while maintaining regional cultural relevance. We combine global AI workflows with deep local market insights for maximum impact."
    },
    {
      question: "Is AI video production cost-effective?",
      answer: "Yes. By automating repetitive tasks and reducing the need for massive physical shoots, AI-powered workflows deliver high-end cinematic results at a fraction of the cost and time of traditional production."
    }
  ];

  return (
    <main className="min-h-screen bg-obsidian text-white pt-32 pb-40 relative overflow-hidden font-sans">
      <GlassNavbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24 lg:mb-40">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-primary-accent mb-8 block font-black underline">Intelligence Hub {" // "} Case Study</span>
             <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
               How AI Video Production is Transforming <br /><span className="text-primary-accent">Brand Communication</span> in Kerala
             </h1>
             <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed mb-12 uppercase tracking-widest">
               "How automation and AI are redefining brand storytelling in the Kerala creative ecosystem."
             </p>
             <div className="flex flex-wrap items-center gap-10 text-[10px] font-mono text-zinc-600 uppercase tracking-widest border-t border-white/5 pt-10">
                <div className="flex items-center gap-3"><User size={14} className="text-primary-accent" /> Shamnad Shams</div>
                <div className="flex items-center gap-3"><Calendar size={14} className="text-primary-accent" /> April 3, 2026</div>
                <div className="flex items-center gap-3"><Clock size={14} className="text-primary-accent" /> 8 Min Read</div>
                <div className="flex items-center gap-3"><Eye size={14} className="text-primary-accent" /> 3.1K+ Page Visits</div>
                <div className="bg-white/5 px-4 py-1 rounded-full text-zinc-400">AI, Video Production, Marketing</div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-6 md:px-12 mb-32">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 group"
         >
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
            <Image 
              src="/images/blog/ai-kerala-hero.png" 
              alt="AI Video Production Kerala" 
              fill 
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="h-24 w-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <div className="h-0 w-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-2" />
               </div>
            </div>
         </motion.div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* Intro */}
        <div className="mb-20">
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10">
            The traditional landscape of media production is undergoing a seismic shift. In Kerala, a region known for its high-fidelity storytelling and visual aesthetics, brands are no longer satisfied with slow, expensive content cycles. The emergence of AI-driven video production has introduced a new paradigm where data-driven creativity meets cinematic excellence.
          </p>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-10 md:p-16 rounded-[2.5rem] bg-white text-obsidian border-l-[12px] border-primary-accent shadow-2xl relative z-10"
          >
             <blockquote className="text-2xl md:text-3xl font-black leading-tight tracking-tight uppercase italic">
               "AI video production in Kerala is transforming brand communication by combining automation, data-driven creativity, and scalable content creation. Businesses can now produce high-quality videos faster, personalize content for different audiences, and maintain consistent brand storytelling across platforms using AI-powered workflows."
             </blockquote>
          </motion.div>
        </div>

        {/* Content Sections */}
        <div className="space-y-32 text-zinc-400 font-light leading-relaxed text-lg pb-32">
          
          <section id="section-1">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
               1. AI Video Production in Kerala: A New Era
            </h2>
            <p className="mb-6">
              The creative industry in Kerala is witnessing a transition from manual labor-intensive editing to <strong>neural-accelerated workflows</strong>. Deep learning algorithms are now capable of analyzing raw footage and assembling rough cuts that used to take days in just minutes.
            </p>
            <p>
              Brands in sectors like fashion, real estate, and healthcare are the first adopters, utilizing AI to maintain a constant presence on social media without burning out their creative teams.
            </p>
          </section>

          <section id="section-2">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none text-primary-accent">
               2. Automation is the New Creative Backbone
            </h2>
            <p className="mb-8">
               Automation isn't about replacing the director; it's about empowering them. By handling repetitive tasks like color grading, noise reduction, and formatting for various platforms, AI allows creators to focus on <strong>superior brand storytelling</strong>.
            </p>
            <ul className="space-y-4 text-zinc-500 font-mono text-sm uppercase tracking-widest">
               <li className="flex items-center gap-4"><CheckCircle size={16} className="text-primary-accent" /> Automated Multi-Platform Export</li>
               <li className="flex items-center gap-4"><CheckCircle size={16} className="text-primary-accent" /> Real-time Neural Grading</li>
               <li className="flex items-center gap-4"><CheckCircle size={16} className="text-primary-accent" /> AI Script-to-Screen Mapping</li>
            </ul>
          </section>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative aspect-video rounded-[2rem] bg-zinc-900 border border-white/5 overflow-hidden group shadow-2xl"
          >
             <Image src="/images/blog/ai-workflow.png" alt="Automation Workflow" fill className="object-cover opacity-60 group-hover:scale-105 transition-all duration-700" />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white">Neural Workflow Dashboard</span>
             </div>
          </motion.div>

          <section id="section-3">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
               3. Speed + Creativity = The New Standard
            </h2>
            <p className="mb-6">
              In the fast-paced digital economy of India, speed is a competitive advantage. <b>AI video production Kerala</b> enables agencies to deliver finished assets within 24-48 hours. This agility allows brands to respond to market trends in real-time, creating a significant lead over competitors using legacy processes.
            </p>
          </section>

          <section id="section-4">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none text-primary-accent">
               4. Benefits of AI in Video Marketing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
               <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                  <BrainCircuit className="text-primary-accent mb-6" size={32} />
                  <h4 className="text-white font-bold uppercase mb-4 tracking-widest">Hyper-Personalization</h4>
                  <p className="text-sm">Generate thousands of versions of a single ad, each tailored to different audience interests.</p>
               </div>
               <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                  <Rocket className="text-primary-accent mb-6" size={32} />
                  <h4 className="text-white font-bold uppercase mb-4 tracking-widest">Rapid Scaling</h4>
                  <p className="text-sm">Transition from one video a month to ten videos a week without increasing overhead.</p>
               </div>
            </div>
          </section>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative aspect-video rounded-[3rem] overflow-hidden"
          >
             <Image src="/images/blog/ai-film-concept.png" alt="AI Film Production Concept" fill className="object-cover" />
          </motion.div>

          <section id="section-7" className="p-12 md:p-20 rounded-[3rem] bg-primary-accent/10 border border-primary-accent/20">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
               7. The Define Perspective Approach
            </h2>
            <p className="mb-10 text-xl font-medium text-white italic text-primary-accent">
               "Define Perspective is a Kerala-based creative agency specializing in AI-driven video production, automated content workflows, and performance-focused brand storytelling."
            </p>
            <p>
               Our proprietary <strong>Neural Pipeline</strong> integrates custom AI models with high-end cinematic execution to deliver visuals that don't just look good but drive measurable growth.
            </p>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="border-t border-white/10 pt-32 mb-32">
           <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-20 text-center">
              Insights & <span className="text-primary-accent">Intelligence_</span>
           </h2>
           <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="p-10 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-neutral-900 transition-colors duration-500"
                >
                   <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-4">
                      <span className="h-2 w-2 rounded-full bg-primary-accent" /> {faq.question}
                   </h3>
                   <p className="text-zinc-500 font-light leading-relaxed">
                      {faq.answer}
                   </p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* CTA Section */}
        <section className="p-12 md:p-20 rounded-[4rem] bg-obsidian text-white text-center border border-white/10 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 text-primary-accent opacity-20 transition-transform duration-1000 group-hover:rotate-12 group-hover:scale-125">
              <Zap size={120} />
           </div>

           <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
              Looking to scale your brand with <br /> <span className="text-primary-accent italic underline">AI-powered</span> video content?
           </h2>
           <p className="text-xl font-light text-zinc-500 mb-12 uppercase tracking-widest max-w-2xl mx-auto">
              Partner with Define Perspective to create high-impact, automated visual campaigns.
           </p>
           
           <Link 
             href="/contact"
             className="inline-flex h-20 px-12 rounded-2xl bg-primary-accent text-white font-black uppercase tracking-[0.2em] text-sm items-center gap-6 shadow-xl transition-all duration-300 hover:bg-white hover:text-obsidian"
           >
              <span>Talk to us</span>
              <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
           </Link>
        </section>

      </article>

      {/* Decorative Accents */}
      <div className="fixed top-0 left-0 w-1 h-screen bg-primary-accent/20 z-50 pointer-events-none" />
      <div className="fixed top-0 right-0 w-1 h-screen bg-primary-accent/20 z-50 pointer-events-none" />
    </main>
  );
}
