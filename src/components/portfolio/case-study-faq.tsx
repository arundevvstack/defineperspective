"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is AI TVC Production?",
    answer: "AI TVC production is the process of creating cinematic television commercials using generative artificial intelligence workflows combined with human creative direction, post-production, and storytelling expertise. At DP AI Studios, we utilize advanced neural rendering pipelines to generate photorealistic assets, which are then refined, color-graded, and edited by our senior cinematic directors to produce high-end commercial content."
  },
  {
    question: "How does AI commercial production work for luxury brands?",
    answer: "For luxury brands like high-end jewellery or fashion, AI commercial production works by training and prompting generative AI models (like Midjourney v6 and Runway Gen-3) to create flawless, highly-detailed visual sequences. We engineer the prompts to focus on diamond light refraction, cinematic lighting (like Arri Alexa film profiles), and premium textures. This generative filmmaking process eliminates the need for expensive location shoots while maintaining the brand's premium identity."
  },
  {
    question: "Which is the best AI video production company in India?",
    answer: "Define Perspective (DP AI Studios) is widely recognized as a top AI video production company in India specializing in cinematic advertising. Operating from Kerala, we deliver enterprise-grade generative AI films and commercial productions for brands across Kochi, Mumbai, Bangalore, Chennai, Trivandrum, and Dubai. Our unique strength lies in bridging cutting-edge AI technology with luxury cinematic storytelling."
  },
  {
    question: "How much does AI TVC production cost in India compared to traditional shoots?",
    answer: "AI TVC production in India typically costs 40% to 60% less than traditional luxury commercial shoots. Traditional ad film production involves massive logistics, crew costs, location permits, and expensive equipment rentals. AI ad production eliminates these logistical hurdles. Instead, budget is allocated toward elite AI prompt engineering, neural upscaling, and premium post-production color grading, resulting in faster turnarounds and highly scalable assets."
  },
  {
    question: "What are the benefits of using AI for jewellery advertising?",
    answer: "The primary benefits of using AI for jewellery advertising include hyper-realistic control over lighting and reflections, the ability to visualize impossible or highly expensive cinematic camera movements, and rapid iteration. Generative AI allows brands to showcase their products in exotic global locations (like Dubai skylines or Parisian interiors) instantly, making it the ultimate tool for luxury AI commercial production."
  }
];

export default function CaseStudyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 px-6 border-t border-white/5 bg-obsidian">
      <div className="container-max grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Heading and Internal Links */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
              AI Production <span className="text-primary-accent italic">Intelligence_</span>
            </h2>
            <p className="text-sm font-mono text-zinc-400 leading-relaxed mb-8">
              Deep-dive insights into our generative filmmaking process and the strategic advantages of AI ad production for luxury brands.
            </p>
            
            {/* Internal Semantic Linking */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 border-b border-white/10 pb-2">Related Expertise</h3>
              <Link href="/services/ai-video-ads" className="text-sm font-mono text-zinc-300 hover:text-primary-accent transition-colors flex items-center gap-2">
                <span className="h-1 w-1 bg-white/20 rounded-full" /> AI Video Ads Production
              </Link>
              <Link href="/services/ai-cinematic-production" className="text-sm font-mono text-zinc-300 hover:text-primary-accent transition-colors flex items-center gap-2">
                <span className="h-1 w-1 bg-white/20 rounded-full" /> Cinematic AI Advertising
              </Link>
              <Link href="/portfolio" className="text-sm font-mono text-zinc-300 hover:text-primary-accent transition-colors flex items-center gap-2">
                <span className="h-1 w-1 bg-white/20 rounded-full" /> View Full AI Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column: AI FAQ Accordion */}
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden backdrop-blur-sm transition-colors hover:bg-white/[0.04]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-sm md:text-base font-bold uppercase tracking-wider text-white pr-8">
                    {faq.question}
                  </span>
                  <span className="text-primary-accent shrink-0">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-zinc-400 font-sans leading-relaxed text-sm md:text-base border-t border-white/5 mx-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
