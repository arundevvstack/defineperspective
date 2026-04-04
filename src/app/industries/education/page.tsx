import Link from "next/link";
import { Metadata } from "next";
import GlassNavbar from "@/components/glass-navbar";
import {
  GraduationCap,
  Zap,
  Target,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title:
    "Education & EdTech Video Production India | Best AI E-learning Content Kerala | Define Perspective Studios",
  description:
    "High-velocity AI-powered video production for EdTech and educational institutions across India. Scale your training content with photorealistic AI avatar presenters and engaging digital lessons.",
  keywords: [
    "EdTech video production India",
    "AI e-learning content Kerala",
    "best educational videos Kochi",
    "AI avatar presenters India",
  ],
};
export default function EducationIndustryPage() {
  return (
    <main className="min-h-screen bg-obsidian text-white pt-40 px-6 md:px-12 relative overflow-hidden text-center md:text-left">
      {" "}
      <GlassNavbar />{" "}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-transparent border-2 border-primary-accent/5 blur-[200px] rounded-full pointer-events-none hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />{" "}
      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        <header className="mb-40 flex flex-col gap-8">
          {" "}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            {" "}
            <div className="px-4 py-1.5 rounded-full border border-primary-accent/50 text-[10px] font-mono font-black text-primary-accent uppercase tracking-widest bg-transparent border-2 border-primary-accent/10 backdrop-blur-md hover:bg-transparent hover:text-primary-accent   transition-all duration-300">
              {" "}
              Vertical: Education & EdTech{" "}
            </div>{" "}
          </div>{" "}
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
            {" "}
            Education <br />{" "}
            <span className="text-primary-accent italic">EdTech_Hub_</span>{" "}
          </h1>{" "}
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed mx-auto md:mx-0">
            {" "}
            "Knowledge at the speed of AI. We build high-velocity learning media
            for India's high-stakes education sector."{" "}
          </p>{" "}
        </header>{" "}
        <section className="mb-40 grid md:grid-cols-2 gap-20 items-center p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-3xl overflow-hidden relative group">
          {" "}
          <div className="relative z-10 text-left">
            {" "}
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-widest leading-tight italic">
              Future-Ready{" "}
              <span className="text-primary-accent font-black italic">
                Learning.
              </span>
            </h2>{" "}
            <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
              {" "}
              Traditional educational production is slow and expensive. Our
              specialized EdTech wing in Kerala and India utilizes
              photorealistic AI avatar presenters and neural-accelerated editing
              to create engaging digital lessons in hours, not weeks. We help
              Indian platforms scale their course libraries with cinematic
              clarity and student-centric storytelling.{" "}
            </p>{" "}
            <Link
              href="/contact?subject=Education Project enquiry"
              className="h-16 px-10 rounded-2xl bg-transparent border-2 border-primary-accent text-zinc-100 font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:bg-transparent hover:text-primary-accent   transition-all duration-300"
            >
              {" "}
              Launch Learning campaign{" "}
            </Link>{" "}
          </div>{" "}
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group shadow-xl">
            {" "}
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Engaging Digital E-learning Scene India"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
            />{" "}
            <div className="absolute inset-0 bg-transparent border-2 border-primary-accent/10 hover:bg-transparent hover:text-primary-accent   transition-all duration-300" />{" "}
          </div>{" "}
        </section>{" "}
        <div className="mb-40 p-12 md:p-24 rounded-[3rem] bg-transparent border border-white/20 text-left">
          {" "}
          <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-primary-accent font-black">
            Education Visibility FAQ
          </h2>{" "}
          <div className="space-y-12">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic">
                Best EdTech video agency in India?
              </h4>{" "}
              <p className="text-zinc-400 font-light leading-relaxed">
                Define Perspective is a pioneer in AI-driven educational
                content. We provide specialized video solutions for EdTech
                platforms and schools in Kerala and across India, focusing on
                teacher presence, student engagement, and scalable course
                production.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
