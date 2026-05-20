import GlassNavbar from "@/components/glass-navbar";
import { generateAIGeneratedSchema, generateFAQSchema } from "@/lib/seo-schema";
import AIDirectAnswer from "@/components/seo/ai-direct-answer";
import { LayoutTemplate, MonitorPlay, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How AI Commercials Are Made | DP AI Studios Workflow",
  description: "Explore the step-by-step workflow of how AI commercials are made. Learn about prompt engineering, video synthesis, and generative post-production.",
  keywords: [
    "how ai commercials are made",
    "ai filmmaking workflow",
    "ai commercial production company",
    "ai tvc production process",
    "generative filmmaking"
  ],
  alternates: {
    canonical: "https://defineperspective.in/how-ai-commercials-are-made"
  }
};

export default function HowAICommercialsAreMadePage() {
  const faqs = [
    {
      question: "How are AI commercials generated?",
      answer: "AI commercials are generated using a combination of text-to-image and image-to-video diffusion models. A director inputs descriptive text prompts to generate initial visual frames, which are then passed through video generation algorithms to synthesize motion, lighting, and camera movement."
    },
    {
      question: "Do AI commercials use real actors?",
      answer: "Most AI commercials do not use real actors. The human subjects seen in generative filmmaking are synthetic digital humans created entirely by the AI based on mathematical probabilities of human facial structure and movement."
    },
    {
      question: "How long does it take to make an AI commercial?",
      answer: "An AI commercial typically takes between 2 to 4 weeks to produce. While generating the raw footage is fast, the true time investment goes into prompt refinement, motion stabilization, high-end upscaling, and traditional post-production editing to ensure it meets luxury broadcast standards."
    }
  ];

  const aiSchema = generateAIGeneratedSchema({
    title: metadata.title as string,
    description: metadata.description as string,
    url: "https://defineperspective.in/how-ai-commercials-are-made",
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
               How AI Commercials <br /><span className="text-primary-accent italic">Are Made_</span>
            </h1>
            <p className="text-xl text-zinc-400 font-light leading-relaxed uppercase tracking-widest border-l-4 border-primary-accent pl-6">
              The anatomy of a generative brand film. Step-by-step documentation of the neural synthesis pipeline used at DP AI Studios.
            </p>
         </div>
      </section>

      <article className="px-6 md:px-12 py-16 relative z-10">
        <div className="container mx-auto max-w-4xl space-y-16">
          
          <section>
            <div className="flex items-center gap-4 mb-6">
              <LayoutTemplate className="text-primary-accent" size={32} />
              <h2 className="text-3xl font-black uppercase tracking-tighter">1. Structural Engineering</h2>
            </div>
            <p className="text-lg text-zinc-300 leading-relaxed font-light mb-6">
              The first step in generating an AI commercial is not software—it is narrative engineering. Because AI systems synthesize exactly what they are told, the script must be incredibly precise, detailing camera angles, lighting conditions (e.g., "volumetric lighting, cinematic, anamorphic lens"), and subject placement.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <Sparkles className="text-primary-accent" size={32} />
              <h2 className="text-3xl font-black uppercase tracking-tighter">2. Visual Latent Exploration</h2>
            </div>
            <p className="text-lg text-zinc-300 leading-relaxed font-light mb-6">
              We begin generating thousands of still frames using text-to-image models (like Midjourney v6). The AI director acts as a curator, sifting through the generated images to find the perfect cinematic composition that aligns with the brand's identity. This process is iterative and requires deep prompt engineering expertise.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <MonitorPlay className="text-primary-accent" size={32} />
              <h2 className="text-3xl font-black uppercase tracking-tighter">3. Video Generation & Physics Emulation</h2>
            </div>
            <p className="text-lg text-zinc-300 leading-relaxed font-light mb-6">
              The curated static frames are passed into video generation models (like Runway Gen-2 or Luma Dream Machine). Here, we prompt the AI to animate the scene by giving it camera motion vectors (e.g., "slow pan left, shallow depth of field"). The AI calculates how light, fabric, and physics should react in motion.
            </p>
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
