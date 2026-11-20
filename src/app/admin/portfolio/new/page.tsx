"use client";

import React, { useState, useRef, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  CreateProjectInput,
  PortfolioCategory,
  PortfolioVideoType,
  PortfolioSchemaType,
  PORTFOLIO_CATEGORIES,
  isReservedSlug,
  isValidSlug,
} from '@/types/portfolio-cms';
import { createProject } from '@/app/actions/portfolio-cms';
import {
  ArrowLeft,
  Upload,
  AlertCircle,
  Layers,
  Film,
  Search,
  Save,
} from 'lucide-react';

const CATEGORIES = PORTFOLIO_CATEGORIES;

export default function NewPortfolioProjectPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const isSubmittingRef = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [uploadingMedia, setUploadingMedia] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [category, setCategory] = useState<PortfolioCategory>('commercial');
  const [publicClientDisplayName, setPublicClientDisplayName] = useState('');
  const [internalClientName, setInternalClientName] = useState('');
  const [isClientConfidential, setIsClientConfidential] = useState(false);
  const [clientWebsite, setClientWebsite] = useState('');
  const [productionYear, setProductionYear] = useState<number>(new Date().getFullYear());
  const [projectOverview, setProjectOverview] = useState('');
  const [creativeConcept, setCreativeConcept] = useState('');
  const [productionApproach, setProductionApproach] = useState('');
  const [servicesInput, setServicesInput] = useState('');

  // Hero Media
  const [heroImageUrl, setHeroImageUrl] = useState('');

  // Video
  const [videoType, setVideoType] = useState<PortfolioVideoType>('none');
  const [videoId, setVideoId] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  // SEO
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [focusKeywords, setFocusKeywords] = useState('');
  const [schemaType, setSchemaType] = useState<PortfolioSchemaType>('CreativeWork');

  // Auto-slug generator
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slugManuallyEdited) {
      const generated = val
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      setSlug(generated);
    }
  };

  // Validation feedback
  const isSlugCollision = slug ? isReservedSlug(slug) : false;
  const isSlugValidFormat = slug ? isValidSlug(slug) : true;

  // Media upload handler
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      setErrorMessage(`File size exceeds maximum limit of 50MB (${(file.size / (1024 * 1024)).toFixed(1)}MB provided).`);
      return;
    }

    setUploadingMedia(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/portfolio/upload', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Failed to upload file');
      }

      setHeroImageUrl(json.data.url);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Upload failed';
      setErrorMessage(msg);
    } finally {
      setUploadingMedia(false);
    }
  };

  // Form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingRef.current || isPending || uploadingMedia) return;

    setErrorMessage(null);

    if (!title.trim()) {
      setErrorMessage('Project title is required.');
      return;
    }

    if (!slug.trim()) {
      setErrorMessage('Project slug is required.');
      return;
    }

    if (!isValidSlug(slug)) {
      setErrorMessage('Slug must contain only lowercase alphanumeric characters and hyphens.');
      return;
    }

    if (isReservedSlug(slug)) {
      setErrorMessage(`Slug "${slug}" collides with a reserved static route or system keyword.`);
      return;
    }

    // Synchronous mutex lock to eliminate duplicate submissions from rapid clicks or Enter key repeats
    isSubmittingRef.current = true;
    setIsSubmitting(true);

    const services = servicesInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const keywords = focusKeywords
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const input: CreateProjectInput = {
      slug: slug.trim(),
      title: title.trim(),
      category,
      public_client_display_name: publicClientDisplayName.trim() || undefined,
      internal_client_name: internalClientName.trim() || undefined,
      is_client_confidential: isClientConfidential,
      client_website: clientWebsite.trim() || undefined,
      production_year: Number(productionYear) || new Date().getFullYear(),
      project_overview: projectOverview.trim() || undefined,
      creative_concept: creativeConcept.trim() || undefined,
      production_approach: productionApproach.trim() || undefined,
      services_delivered: services.length > 0 ? services : undefined,
      hero_image_url: heroImageUrl.trim() || undefined,
      video_type: videoType,
      video_id: videoId.trim() || undefined,
      video_url: videoUrl.trim() || undefined,
      seo_title: seoTitle.trim() || undefined,
      seo_description: seoDescription.trim() || undefined,
      focus_keywords: keywords.length > 0 ? keywords : undefined,
      schema_type: schemaType,
    };

    startTransition(async () => {
      try {
        const res = await createProject(input);
        if (res.success && res.project_id) {
          router.push(`/admin/portfolio/${res.project_id}/edit`);
          router.refresh();
        } else if (res.success) {
          router.push('/admin/portfolio');
          router.refresh();
        } else {
          setErrorMessage(res.error || 'Failed to create project.');
          isSubmittingRef.current = false;
          setIsSubmitting(false);
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'An unexpected error occurred.';
        setErrorMessage(msg);
        isSubmittingRef.current = false;
        setIsSubmitting(false);
      }
    });
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 font-sans selection:bg-amber-500/30">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Navigation & Header */}
        <div>
          <Link
            href="/admin/portfolio"
            prefetch={false}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Portfolio Projects
          </Link>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <p className="text-amber-500 uppercase tracking-widest text-xs font-mono">Create Mode</p>
          </div>
          <h1 className="text-3xl font-light tracking-tight">New Portfolio Project</h1>
          <p className="text-neutral-500 text-sm mt-1">
            Define project attributes, media assets, and SEO canonical metadata. Projects start in Draft status.
          </p>
        </div>

        {/* Error notification banner */}
        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Error saving project</p>
              <p className="text-xs text-red-400/90 mt-0.5">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Project Form */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Section 1: Core Project Info */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h2 className="text-base font-medium flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Layers className="w-4 h-4 text-amber-500" />
              General Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Celestial Horizon: Luxury Timepiece Film"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>

              {/* Slug with collision warning */}
              <div className="space-y-2 md:col-span-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                    URL Slug *
                  </label>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    https://defineperspective.in/portfolio/{slug || ':slug'}
                  </span>
                </div>
                <input
                  type="text"
                  required
                  placeholder="celestial-horizon-luxury-timepiece"
                  value={slug}
                  onChange={(e) => {
                    setSlug(e.target.value.toLowerCase().trim());
                    setSlugManuallyEdited(true);
                  }}
                  className={`w-full bg-black border rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 font-mono focus:outline-none transition-colors ${isSlugCollision
                    ? 'border-red-500 focus:border-red-500'
                    : !isSlugValidFormat
                      ? 'border-amber-500 focus:border-amber-500'
                      : 'border-neutral-800 focus:border-amber-500/60'
                    }`}
                />
                {isSlugCollision && (
                  <p className="text-xs text-red-400 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    RESERVED SLUG: &quot;{slug}&quot; collides with an existing static route or reserved keyword.
                  </p>
                )}
                {!isSlugValidFormat && !isSlugCollision && (
                  <p className="text-xs text-amber-400 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Slug may only contain lowercase letters, numbers, and single hyphens.
                  </p>
                )}
              </div>

              {/* Category */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as PortfolioCategory)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60 transition-colors"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Production Year */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Production Year
                </label>
                <input
                  type="number"
                  min="2020"
                  max="2035"
                  value={productionYear}
                  onChange={(e) => setProductionYear(Number(e.target.value))}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60 transition-colors font-mono"
                />
              </div>

              {/* Public Client Display Name */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Public Client Display Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vacheron Constantin"
                  value={publicClientDisplayName}
                  onChange={(e) => setPublicClientDisplayName(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>

              {/* Internal Client Name */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Internal Client Name (Audit / Invoicing)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Richemont Luxury Group"
                  value={internalClientName}
                  onChange={(e) => setInternalClientName(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>

              {/* Client Website */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Client Website
                </label>
                <input
                  type="url"
                  placeholder="e.g. https://example.com"
                  value={clientWebsite}
                  onChange={(e) => setClientWebsite(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>

              {/* Client Confidential Toggle */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs uppercase tracking-wider text-neutral-300 font-mono">
                  <input
                    type="checkbox"
                    checked={isClientConfidential}
                    onChange={(e) => setIsClientConfidential(e.target.checked)}
                    className="rounded border-neutral-700 text-amber-500 focus:ring-0 bg-black"
                  />
                  Mark Client Identity as Confidential (Hides client name on public page)
                </label>
              </div>

              {/* Project Overview */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Project Overview / Summary
                </label>
                <input
                  type="text"
                  placeholder="One sentence synopsis summarizing the creative vision and impact..."
                  value={projectOverview}
                  onChange={(e) => setProjectOverview(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>

              {/* Creative Concept */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Creative Concept & Narrative
                </label>
                <textarea
                  rows={4}
                  placeholder="Full background, creative challenge, concept execution, and visual results..."
                  value={creativeConcept}
                  onChange={(e) => setCreativeConcept(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg p-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>

              {/* Services Delivered */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Services Delivered (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="AI Commercial Direction, Gen-3 Synthesis, Color Grading"
                  value={servicesInput}
                  onChange={(e) => setServicesInput(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>

              {/* Production Approach */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Production Workflow / Stack
                </label>
                <input
                  type="text"
                  placeholder="Midjourney v6, Runway Gen-3 Alpha, DaVinci Resolve Studio"
                  value={productionApproach}
                  onChange={(e) => setProductionApproach(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Media & Video Assets */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h2 className="text-base font-medium flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Film className="w-4 h-4 text-amber-500" />
              Media & Hero Assets
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Hero Image Upload / URL */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Hero Image
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="https://... or upload below"
                    value={heroImageUrl}
                    onChange={(e) => setHeroImageUrl(e.target.value)}
                    className="flex-1 bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 font-mono focus:outline-none focus:border-amber-500/60"
                  />
                  <label className="inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider cursor-pointer transition-colors shrink-0">
                    <Upload className="w-4 h-4" />
                    {uploadingMedia ? 'Uploading...' : 'Upload File'}
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/avif"
                      className="hidden"
                      onChange={handleFileUpload}
                      disabled={uploadingMedia}
                    />
                  </label>
                </div>
              </div>

              {/* Video Type */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Video Platform
                </label>
                <select
                  value={videoType}
                  onChange={(e) => setVideoType(e.target.value as PortfolioVideoType)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                >
                  <option value="none">None (Static Hero Image Only)</option>
                  <option value="youtube">YouTube</option>
                  <option value="vimeo">Vimeo</option>
                  <option value="mux">Mux Video Stream</option>
                  <option value="custom">Custom / Direct MP4/WebM URL</option>
                </select>
              </div>

              {/* Video ID or URL */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  {videoType === 'youtube'
                    ? 'YouTube Video ID (e.g. dQw4w9WgXcQ)'
                    : videoType === 'vimeo'
                      ? 'Vimeo Video ID (e.g. 123456789)'
                      : 'Video Stream URL'}
                </label>
                <input
                  type="text"
                  disabled={videoType === 'none'}
                  placeholder={videoType === 'none' ? 'Disabled' : 'Video ID or Source URL'}
                  value={videoType === 'custom' || videoType === 'mux' ? videoUrl : videoId}
                  onChange={(e) => {
                    if (videoType === 'custom' || videoType === 'mux') setVideoUrl(e.target.value);
                    else setVideoId(e.target.value);
                  }}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 font-mono focus:outline-none focus:border-amber-500/60 disabled:opacity-40"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Technical SEO & Discoverability */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h2 className="text-base font-medium flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Search className="w-4 h-4 text-amber-500" />
              SEO & Structured Schema
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* SEO Title */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  SEO Meta Title
                </label>
                <input
                  type="text"
                  placeholder="Defaults to Project Title | DP AI Studio"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Schema Type */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  JSON-LD Schema Type
                </label>
                <select
                  value={schemaType}
                  onChange={(e) => setSchemaType(e.target.value as PortfolioSchemaType)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                >
                  <option value="CreativeWork">CreativeWork (Default)</option>
                  <option value="VideoObject">VideoObject</option>
                  <option value="Article">Article / Case Study</option>
                </select>
              </div>

              {/* SEO Description */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  SEO Meta Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Defaults to Project Overview if empty. 150-160 characters recommended."
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Focus Keywords */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Focus Search Queries / Keywords (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="AI commercial production, luxury jewellery commercial, synthetic film studio"
                  value={focusKeywords}
                  onChange={(e) => setFocusKeywords(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/60"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
            <Link
              href="/admin/portfolio"
              prefetch={false}
              className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={isSubmitting || isPending || uploadingMedia || isSlugCollision || !isSlugValidFormat || !title || !slug}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              {(isSubmitting || isPending) ? 'Saving Project Draft...' : 'Create Project Draft'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
