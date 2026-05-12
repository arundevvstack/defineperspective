import AIScriptGenerator from "@/components/ai-video-hub/AIScriptGenerator";
import GlassNavbar from "@/components/glass-navbar";
import NeuralSeoLayer from "@/components/neural-seo-layer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Commercial Script Generator | Neural Creative Tool",
  description: "Generate professional 30-second AI commercial scripts instantly. Optimized for luxury brands, viral reels, and cinematic TVCs.",
  keywords: ["AI Script Generator", "AI Commercial Script", "Video Script Tool AI", "Cinematic Script Generator"],
};

export default function AIScriptGeneratorPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white">
      <NeuralSeoLayer />
      <GlassNavbar />
      <div className="pt-20">
        <AIScriptGenerator />
      </div>
    </main>
  );
}
