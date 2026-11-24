export interface CaseStudySpecItem {
  label: string;
  value: string;
}

export interface CaseStudyWorkflowStep {
  step: string;
  title: string;
  description?: string;
}

export interface CaseStudyFaqItem {
  question: string;
  answer: string;
}

export interface CaseStudyMediaFrame {
  url: string;
  alt: string;
  caption?: string;
  label?: string;
}

export interface MasterCaseStudyData {
  id: string;
  slug: string;
  title: string;
  eyebrow?: string;
  categoryBadge?: string;
  industries?: string[];
  clientName?: string;
  location?: string;
  year?: string | number;
  readTime?: string;
  lastUpdated?: string;
  editorialBy?: string;

  // Hero & Video
  heroImageUrl?: string | null;
  thumbnailUrl?: string | null;
  youtubeId?: string | null;
  videoUrl?: string | null;

  // Executive Summary
  executiveSummary: string;
  whyInitiatedText?: string;
  highlights?: string[];

  // Production Specifications
  specs: CaseStudySpecItem[];

  // Creative Direction
  creativeDirectionTitle?: string;
  creativeDirectionText?: string;
  creativeDirectionImage?: CaseStudyMediaFrame | null;

  // Generative Pipeline & Consistency
  pipelineTitle?: string;
  pipelineText?: string;
  pipelineConsistencyText?: string;
  pipelineFrames?: CaseStudyMediaFrame[];

  // Lighting & Cinematography
  lightingTitle?: string;
  lightingText?: string;
  cinematographyTitle?: string;
  cinematographyText?: string;
  cinematographyFrames?: CaseStudyMediaFrame[];

  // Workflow Pipeline Steps
  workflowSteps: CaseStudyWorkflowStep[];

  // Production Evidence (Before & After)
  evidenceTitle?: string;
  evidenceDescription?: string;
  evidenceRawFrame?: CaseStudyMediaFrame | null;
  evidenceFinalFrame?: CaseStudyMediaFrame | null;

  // AI FAQs / AEO
  faqs: CaseStudyFaqItem[];

  // Final CTA
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;

  // Admin Preview flag & Navigation
  isPreviewMode?: boolean;
  previewStatus?: string;
  backHref?: string;
  backLabel?: string;
}
