import { Metadata } from "next";
import VideoProductionClient from "./ClientPage";

export const metadata: Metadata = {
  title: "Best TVC & Video Production Company in India | Define Perspective",
  description: "Define Perspective is a premium video production house in India, Kerala. Specialized in TV commercials, high-end brand films, and viral social media reel production for global brands.",
  keywords: [
    "Video Production Company India",
    "TVC Production Kerala",
    "Best Ad Agency Kochi",
    "Instagram Reel Production Agency",
    "Corporate Film Makers India",
    "Commercial Film Production",
    "Social Media Content Creation India",
    "High-End Brand Films Kochi",
    "Video Production House Trivandrum",
    "TV Ad Production India"
  ],
  alternates: {
    canonical: "https://defineperspective.in/video-production"
  }
};

export default function VideoProductionPage() {
  return <VideoProductionClient />;
}
