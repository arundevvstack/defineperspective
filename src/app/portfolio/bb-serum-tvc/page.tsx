import { Metadata } from "next";
import CaseStudyTemplate from "@/components/portfolio/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "BB Serum TVC | Cinematic AI Ad Production Case Study",
  description: "Visual engineering for high-stakes cosmetics advertising. Discover how we captured the essence of BB Serum through cinematic Macro-visuals and neural post-production.",
  keywords: ["cosmetic TVC India", "beauty product videographer Kerala", "skin care commercial Kochi", "BB Serum brand film", "AI beauty commercials"],
};

const transcript = `[00:01] Close-up of BB Serum bottle with clinical lighting. [00:05] Macro shot of serum liquid viscosity and light refraction. [00:12] Neural skin-tonal preservation sequence. [00:20] Final product reveal with premium branding. [00:28] Call to action: Pure Glow.`;

export default function BBSerumTVCCaseStudy() {
  return (
    <CaseStudyTemplate
      id="bb-serum"
      title="BB Serum"
      accentTitle="TV Commercial_"
      nodeNumber="04"
      category="Cosmetics & Beauty"
      mission="Deliver a photorealistic and 'clinical yet premium' TVC to launch BB Serum in the Indian luxury market."
      service="Ad Film / TVC"
      sector="Cosmetics & Beauty"
      technical="Macro Cine Optics / Neural Post"
      videoId="8TntXDekuE8"
      craftTitle="Liquid Optics_"
      craftDescription="Beauty advertising is about trust. For BB Serum, we focused on high-magnification liquid photography—capturing the viscosity and light-refraction properties of the serum itself. By using clinical lighting setups and ultra-shallow depth of field, we emphasized the product's premium quality, making it stand out in the crowded Indian skincare landscape."
      aiWorkflowTitle="Neural Skin Care"
      aiWorkflowDescription="Retouching and skin-tonal preservation done via our AI-assisted post-production lab, reducing delivery times by 40% while maintaining absolute texture integrity."
      resultsTitle="Ad Impact Score"
      resultsMetric="92% ROI Shift"
      resultsLabel="Ad Impact Score"
      ctaHeadline="Ready for"
      ctaAccent="Pure Glow?"
      region="Kochi, India"
      transcript={transcript}
    />
  );
}

