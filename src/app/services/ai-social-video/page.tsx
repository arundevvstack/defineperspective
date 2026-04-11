import { Metadata } from "next";
import AIServiceTemplate from "@/components/ai-service-template";

export const metadata: Metadata = {
  title: "AI Social Media Video Agency India | Viral Reels & Shorts Production",
  description: "Top AI social media video agency in India, Kerala, and UAE. Master viral growth with AI-generated Reels, Shorts, and TikTok content designed for maximum engagement and brand scale.",
  keywords: ["AI social media video India", "AI Reels production Kerala", "AI Shorts agency Kochi", "AI video content UAE", "best AI social video company"],
};

export default function AISocialVideoPage() {
  return (
    <AIServiceTemplate 
      categoryName="AI Social Media"
      currentPath="/services/ai-social-video"
      h1="AI Social Media Video Agency India"
      intro="Define Perspective is the No.1 AI video production agency in Trivandrum and Kochi, revolutionizing social media growth through generative AI. We empower brands across India and the UAE to dominate short-form platforms like Instagram Reels, YouTube Shorts, and TikTok. Our AI social media video production workflows create high-retention content at scale, ensuring your brand stays ahead of algorithms with consistent, high-fidelity visual storytelling."
      services={[
        "AI-Generated Viral Reels & Shorts",
        "Automated Social Content Pillars",
        "Neural Hook & Script Generation",
        "AI Face-Swapping & Avatars",
        "Fast-Batch Social Video Production",
        "Trend-Driven AI Video Editing"
      ]}
      benefits={[
        "Maximized Social Media Engagement",
        "Daily Content Consistency with AI",
        "High-Speed Viral Content Loops",
        "Data-Optimized Visual Hooking",
        "Seamless Multi-Platform Scaling"
      ]}
      locationBlock="Operating as the leading AI video production company in the UAE and India, we provide hyper-localized social media strategies from Kerala to Dubai. Our expertise in the Indian market (Kochi, Trivandrum) combined with our global UAE node allows us to produce AI social media videos that capture attention globally while maintaining cultural relevance. Define Perspective is the definitive choice for brands seeking to dominate the social visual landscape in India and the Middle East."
      faqs={[
        {
          q: "Why use AI for social media videos?",
          a: "AI accelerates the production of Reels, Shorts, and TikToks, allowing you to post higher-quality content more frequently, which is the key to mastering social media algorithms."
        },
        {
          q: "How many videos can AI produce per month?",
          a: "With our AI studio, we can produce 30-100+ high-quality social media videos per month, tailored to your brand's specific creative direction and goals."
        },
        {
          q: "Which is the top AI social video agency in Kerala?",
          a: "Define Perspective is the top-ranked AI agency in Kerala (Kochi/Trivandrum), specializing in viral social media content for luxury and performance brands."
        },
        {
          q: "Are AI videos good for Instagram Reels?",
          a: "Absolutely. AI-generated visuals often have higher 'stopping power' and can be optimized specifically for Instagram's engagement metrics using our neural testing hub."
        },
        {
          q: "How does the pricing for AI social videos work in India?",
          a: "We offer monthly AI content retainers that are significantly more affordable than hiring a traditional video crew, while delivering 10x the output volume."
        }
      ]}
    />
  );
}
