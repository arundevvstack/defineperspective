import type { Metadata } from "next";
import ContactContent from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact Define Perspective | Project Intake Node India",
  description: "Get a custom quote within 24 hours. Contact our team in Thrivandrum & Kochi for elite video production and AI media labs across India.",
  keywords: ["Contact video production Kerala", "hire AI video agency", "get video production quote", "Define Perspective phone number", "Trivandrum studio contact"],
  openGraph: {
    title: "Contact Define Perspective | Start Your Project",
    description: "Our creative team is ready to scale your vision. Connect with our strategic hubs.",
    url: "https://defineperspective.in/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
