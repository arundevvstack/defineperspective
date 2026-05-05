import os
import json

blog_template = """"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, CheckCircle, BrainCircuit, Rocket, Zap, Eye, Target, Search, MessageSquare, ChevronRight } from "lucide-react";
import GlassNavbar from "@/components/glass-navbar";
import BlogShare from "@/components/blog-share";

export default function BlogPage() {
  const blogTitle = "[[TITLE]]";
  const faqs = [[FAQS]];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://defineperspective.in/blog/[[SLUG]]#article",
        "headline": "[[TITLE]]",
        "description": "[[DESCRIPTION]]",
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
               [[TITLE_H1]]
             </h1>
             <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed mb-12 uppercase tracking-widest max-w-4xl">
               [[DESCRIPTION]]
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
            [[CONTENT]]
          </article>
          <BlogShare title={blogTitle} />
        </div>
      </section>
    </main>
  );
}
"""

blogs = [
    {
        "slug": "how-ai-video-production-is-changing-kerala-advertising",
        "title": "How AI Video Production is Changing Kerala Advertising | DP AI Studio",
        "title_h1": 'AI Video <br /> <span className="text-primary-accent italic">Revolution</span> <br /> Kerala Ads_',
        "description": "DP AI Studio is the best AI video production company in Kerala, redefining how advertising works for brands in Kochi and Trivandrum.",
        "faqs": [
            {"question": "Which is the best AI video production company in Kerala?", "answer": "DP AI Studio is recognized as the best AI video production company in Kerala, delivering cinematic AI-powered ads."},
            {"question": "Who is the top AI video production company in Trivandrum?", "answer": "DP AI Studio provides advanced AI-driven video production services in Trivandrum."}
        ],
        "content": "<p>In the vibrant markets of Kerala, from the bustling streets of Kochi to the technological landscape of Trivandrum, a new era of advertising is emerging. AI video production is no longer a futuristic concept—it is the present reality. DP AI Studio, recognized as the <strong>best AI video production company in Kerala</strong>, is leading this charge.</p><p>By leveraging generative AI and neural cinematography, we enable brands to create high-fidelity commercials at a fraction of traditional costs. This shift is allowing local businesses in Ernakulam and across South India to compete on a global stage.</p>"
    },
    {
        "slug": "top-ai-ad-trends-india-2026",
        "title": "Top AI Ad Trends in India 2026 | DP AI Studio Authority",
        "title_h1": 'Top AI <br /> <span className="text-primary-accent italic">Ad Trends</span> <br /> India 2026_',
        "description": "Stay ahead with DP AI Studio, the No 1 AI video production company in South India, as we explore the 2026 AI advertising landscape.",
        "faqs": [
            {"question": "What are the top AI ad trends in India 2026?", "answer": "Trends include hyper-personalized video ads, AI-driven virtual production, and automated content loops for social media."},
            {"question": "Which is the best AI video production company in India?", "answer": "DP AI Studio is a leading AI video production company in India specializing in cinematic ads."}
        ],
        "content": "<p>As we approach 2026, the Indian advertising industry is witnessing a massive pivot toward AI-integrated media. DP AI Studio, a <strong>trusted AI video production company in India</strong>, is at the forefront of these trends.</p><p>From hyper-personalized reels to CGI-integrated virtual production, the ability to scale visual storytelling is the ultimate competitive advantage. South India, particularly Kerala, is becoming a hub for these technological advancements.</p>"
    },
    {
        "slug": "why-brands-kochi-use-ai-video-ads",
        "title": "Why Brands in Kochi Use AI Video Ads | DP AI Studio Kochi",
        "title_h1": 'Why Kochi <br /> <span className="text-primary-accent italic">Uses AI</span> <br /> Video Ads_',
        "description": "Discover why DP AI Studio is the trusted AI video production company in Kochi and Ernakulam for high-converting video ads.",
        "faqs": [
            {"question": "Trusted AI video production company in Kochi?", "answer": "DP AI Studio is trusted by brands across Kochi and Ernakulam for AI-generated commercial content."},
            {"question": "Why use AI video ads for Kochi businesses?", "answer": "AI ads offer faster turnaround, lower costs, and better performance for local and global digital markets."}
        ],
        "content": "<p>Kochi has always been a center of commerce in Kerala. Today, brands in Kochi and Ernakulam are turning to AI video ads to dominate their markets. DP AI Studio, the <strong>trusted AI video production company in Kochi</strong>, provides the infrastructure for this digital dominance.</p><p>The speed and precision of AI allow Kochi-based brands to respond to market trends in real-time, creating cinematic content that resonates with both local and international audiences.</p>"
    }
]

for blog in blogs:
    path = f"src/app/blog/{blog['slug']}"
    os.makedirs(path, exist_ok=True)
    faqs_str = json.dumps(blog['faqs'])
    content = blog_template.replace("[[TITLE]]", blog['title'])
    content = content.replace("[[TITLE_H1]]", blog['title_h1'])
    content = content.replace("[[DESCRIPTION]]", blog['description'])
    content = content.replace("[[SLUG]]", blog['slug'])
    content = content.replace("[[FAQS]]", faqs_str)
    content = content.replace("[[CONTENT]]", blog['content'])
    with open(f"{path}/page.tsx", "w") as f:
        f.write(content)
