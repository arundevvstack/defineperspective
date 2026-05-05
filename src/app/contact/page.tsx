import type { Metadata } from "next";
import ContactContent from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Best AI Video Production Company in Kerala | DP AI Studio India",
  description: "Work with the best AI video production company in Kerala. Delivering cinematic brand videos, AI-powered marketing content, and commercial film production in Kochi, Trivandrum, and UAE for brands across the Globe.",
  keywords: [
    "AI video production company in Kerala India",
    "Best Video Marketing Agency for Brands",
    "Corporate Film Production Services",
    "Commercial ad film production Kerala",
    "AI content creation services Kochi",
    "Cinematic brand video production India",
    "Social media video content creation",
    "AI video generator services India",
    "Digital video marketing services UAE",
    "Professional video editing & post production"
  ],
  openGraph: {
    title: "Best AI Video Production Company in Kerala | DP AI Studio India",
    description: "Leading AI video production company in Kerala and India, delivering services in Kochi, Trivandrum, and Dubai for global brands.",
    url: "https://defineperspective.in/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
