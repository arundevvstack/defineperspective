import GlassNavbar from "@/components/glass-navbar";
import { generateAIGeneratedSchema, generateFAQSchema } from "@/lib/seo-schema";
import AIDirectAnswer from "@/components/seo/ai-direct-answer";
import { Film, BrainCircuit, Workflow, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Video Production Guide | How Generative Filmmaking Works",
  description: "The complete guide to AI video production, generative filmmaking, and synthetic media workflows used by top commercial studios.",
  keywords: [
    "ai video production guide",
    "how ai commercials are made",
    "generative filmmaking explained",
    "ai tvc production process",
    "ai advertising workflow",
    "cinematic ai storytelling"
  ],
  alternates: {
    canonical: "https://defineperspective.in/ai-video-production-guide"
  }
};

export default function AIVideoProductionGuidePage() {
  const faqs = [
    {
      question: "What is generative filmmaking?",
      answer: "Generative filmmaking is the process of using neural networks and AI diffusion models to generate photorealistic video sequences from text, image, or video prompts. It replaces physical cameras, lighting grids, and sets with mathematical latent space manipulation, allowing directors to synthesize high-end visuals instantly."
    },
    {
      question: "How are AI commercials made?",
      answer: "AI commercials are made through a pipeline of prompt engineering, motion synthesis, and AI upscaling. A director creates a storyboard, generates base images using tools like Midjourney, animates those frames using video models like Runway or Sora, and then composites them using traditional post-production software."
    },
    {
      question: "Is AI video production cheaper than traditional production?",
      answer: "Yes, AI video production is significantly more cost-effective because it eliminates the need for massive logistical overhead, including location permits, travel, massive crew sizes, and equipment rentals. However, it still requires highly skilled AI artists, directors, and compute power."
    }
  ];

  const aiSchema = generateAIGeneratedSchema({
    title: metadata.title as string,
    description: metadata.description as string,
    url: "https://defineperspective.in/ai-video-production-guide",
    keywords: metadata.keywords as string[]
  });

  const faqSchema = generateFAQSchema(faqs);

  const jsonLd = [aiSchema, faqSchema];

  return (
    <main className="min-h-screen bg-obsidian text-white relative overflow-hidden selection:bg-primary-accent selection:text-white pb-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <GlassNavbar />

      <section className="pt-48 pb-16 px-6 md:px-12 relative z-10 border-b border-white/5">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[200px] rounded-full pointer-events-none" />
         <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
               AI Video Production <br /><span className="text-primary-accent italic">The Complete Guide_</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed uppercase tracking-widest border-l-4 border-primary-accent pl-6">
              A deep-dive into generative filmmaking, neural synthesis workflows, and how the world's leading brands are transitioning to AI commercial production.
            </p>
         </div>
      </section>

      <article className="px-6 md:px-12 py-16 relative z-10">
        <div className="container mx-auto max-w-4xl space-y-16">
          
          <section>
            <div className="flex items-center gap-4 mb-6">
              <BrainCircuit className="text-primary-accent" size={32} />
              <h2 className="text-3xl font-black uppercase tracking-tighter">1. The Shift to Generative Media</h2>
            </div>
            <p className="text-lg text-zinc-300 leading-relaxed font-light mb-6">
              The advertising industry is undergoing a paradigm shift. Traditional TVC (Television Commercial) production relies heavily on logistics: flying crews across the globe, renting expensive cinema cameras, and relying on unpredictable weather conditions. 
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed font-light">
              <strong className="text-white font-bold">Generative filmmaking</strong> disrupts this model. By utilizing advanced neural networks, production studios like DP AI Studios can synthesize photorealistic, cinematic environments purely from data. This is not just automation; it is a fundamental redefinition of the creative workflow.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <Workflow className="text-primary-accent" size={32} />
              <h2 className="text-3xl font-black uppercase tracking-tighter">2. The AI Production Pipeline</h2>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Phase 1: Concept & Neural Pre-viz</h3>
                <p className="text-zinc-400 leading-relaxed">Before a single frame of video is generated, the AI director crafts a prompt-based storyboard. We use advanced diffusion models to lock in the aesthetic, lighting, and composition.</p>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Phase 2: Motion Synthesis</h3>
                <p className="text-zinc-400 leading-relaxed">Once the keyframes are approved, they are fed into temporal consistency models. These AI models calculate physics, light refraction, and subject movement to generate highly realistic motion.</p>
              </div>
              <div className="h-px w-full bg-white/5" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Phase 3: Upscaling & Post-Production</h3>
                <p className="text-zinc-400 leading-relaxed">Raw AI video often lacks the resolution required for broadcast. We run the footage through proprietary AI upscalers to reach 4K/8K fidelity, followed by traditional color grading in DaVinci Resolve.</p>
              </div>
            </div>
          </section>

          <section className="pt-12 border-t border-white/5">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 text-center">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <AIDirectAnswer 
                key={index}
                question={faq.question}
                directAnswer={faq.answer.split('.')[0] + '.'}
                elaboration={faq.answer.substring(faq.answer.indexOf('.') + 1).trim()}
              />
            ))}
          </section>

        </div>
      </article>
    </main>
  );
}
