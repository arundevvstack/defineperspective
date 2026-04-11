import { Metadata } from "next";
import AIServiceTemplate from "@/components/ai-service-template";

export const metadata: Metadata = {
  title: "AI Explainer Video Company UAE | SaaS & App Demos India",
  description: "Leading AI explainer video company in the UAE and India. Scale your SaaS, app, or corporate message with AI-generated explainers, neural voiceovers, and automated animation.",
  keywords: ["AI explainer video UAE", "AI explainer company India", "AI SaaS video Kerala", "AI app demo Kochi", "best AI explainer company"],
};

export default function AIExplainerPage() {
  return (
    <AIServiceTemplate 
      categoryName="AI Explainer Videos"
      currentPath="/services/ai-explainer"
      h1="AI Explainer Video Company UAE"
      intro="Define Perspective is the leading AI explainer video company in the UAE and India, specializing in high-fidelity neural animations for SaaS, startups, and enterprise brands. With our AI hubs in Kochi, Trivandrum, and Kerala, we produce complex explainer videos at 10x the speed of traditional animation studios. Our AI explainer video services integrate proprietary neural voiceovers, automated character animation, and intelligent pacing to deliver your brand message with clarity and conversion-focussed precision across Google and AI search engines."
      services={[
        "Neural SaaS & App Explainer Videos",
        "AI-Generated Character Animation",
        "Auto-Timed Neural Voiceover Sync",
        "AI Script-to-Video Workflows",
        "Multilingual Global AI Explainers",
        "Fast-Batch Training & Webinar Videos"
      ]}
      benefits={[
        "Rapid Deployment for MVP Launches",
        "Global Multilingual Compatibility",
        "Significant Cost Reduction vs. 2D/3D",
        "Consistent Quality Across Entire Library",
        "Optimized for AI Search Conversions"
      ]}
      locationBlock="As the top AI explainer video production agency in UAE and India, Define Perspective serves as the visual engine for tech leaders in Kerala, Kochi, and the Middle East. Our Kerala studio specializes in high-fidelity technical and corporate explainers that resonate with global investors and customers. Whether you are a startup in Trivandrum or an enterprise in Dubai, our AI-driven explainer videos provide the most scalable and effective way to communicate your product's value proposition."
      faqs={[
        {
          q: "What is an AI explainer video?",
          a: "It is a professional brand video that uses AI tools to generate scripts, voices, characters, and animations, resulting in a cohesive and high-quality educational or marketing asset."
        },
        {
          q: "Are AI voices good for professional explainer videos?",
          a: "Our neural voiceovers are hyper-realistic and indistinguishable from human talent, allowing for instant translations and global brand consistency."
        },
        {
          q: "Who is the best AI explainer video company in the UAE?",
          a: "Define Perspective is the leading AI explainer agency in the UAE, providing high-spec visual assets for the region's top tech and corporate entities."
        },
        {
          q: "How long does AI explainer production take?",
          a: "We can deliver a fully animated and voiced AI explainer video in as little as 3-5 days, compared to the 4-6 weeks required by traditional animation houses."
        },
        {
          q: "Can AI create multilingual explainer videos for global brands?",
          a: "Yes, our AI systems can instantly generate and sync your explainer video in 50+ languages, each with native-sounding neural voices and accurate translations."
        }
      ]}
    />
  );
}
