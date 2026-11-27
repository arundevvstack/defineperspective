"use client";

import React, { useState, useEffect, useTransition } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import {
  PortfolioProject,
  PortfolioCategory,
  PortfolioProjectStatus,
  PortfolioVideoType,
  PortfolioSchemaType,
  GalleryImage,
  VerifiedCredit,
  isValidSlug,
  isReservedSlug,
  MutateProjectInput,
  PORTFOLIO_CATEGORIES,
  normalizePortfolioCategory,
  normalizePortfolioVideoType,
  normalizePortfolioSchemaType,
  parsePortfolioStatus,
  normalizeMediaUrl,
} from '@/types/portfolio-cms';
import {
  getProjectById,
  mutateProject,
  setProjectPublishStatus,
  deleteDraftProject,
} from '@/app/actions/portfolio-cms';
import {
  ArrowLeft,
  Upload,
  AlertCircle,
  CheckCircle,
  Layers,
  Film,
  Search,
  Lock,
  Save,
  Globe,
  Trash2,
  X,
  RefreshCw,
  Eye,
  ChevronUp,
  ChevronDown,
  Plus,
  MapPin,
  Users,
  Award,
  Clock,
  FileText,
} from 'lucide-react';

const CATEGORIES = PORTFOLIO_CATEGORIES;

export default function EditPortfolioProjectPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params?.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [uploadingMedia, setUploadingMedia] = useState(false);

  // Form Fields
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
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
  const [productionTechniquesInput, setProductionTechniquesInput] = useState('');
  const [deliverablesInput, setDeliverablesInput] = useState('');
  const [productionLocation, setProductionLocation] = useState('');
  const [geoEntitiesInput, setGeoEntitiesInput] = useState('');
  const [measuredResults, setMeasuredResults] = useState('');
  const [verifiedCredits, setVerifiedCredits] = useState<VerifiedCredit[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [newGalleryUrl, setNewGalleryUrl] = useState('');

  // Hero Media
  const [heroImageUrl, setHeroImageUrl] = useState('');

  // Video
  const [videoType, setVideoType] = useState<PortfolioVideoType>('none');
  const [videoId, setVideoId] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoDuration, setVideoDuration] = useState('');
  const [videoTranscript, setVideoTranscript] = useState('');

  // SEO & Flags
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [focusKeywords, setFocusKeywords] = useState('');
  const [schemaType, setSchemaType] = useState<PortfolioSchemaType>('CreativeWork');
  const [canonicalOverride, setCanonicalOverride] = useState('');

  // Status transition state
  const [targetStatus, setTargetStatus] = useState<PortfolioProjectStatus>('draft');
  const [auditNotes, setAuditNotes] = useState('');

  useEffect(() => {
    if (!projectId) return;

    async function loadProject() {
      setIsLoading(true);
      try {
        const res = await getProjectById(projectId);
        if (res.success && res.data) {
          const p = res.data;
          setProject(p);
          setTitle(p.title);
          setSlug(p.slug);
          setCategory(normalizePortfolioCategory(p.category));
          setPublicClientDisplayName(p.public_client_display_name || '');
          setInternalClientName(p.internal_client_name || '');
          setIsClientConfidential(!!p.is_client_confidential);
          setClientWebsite(p.client_website || '');
          setProductionYear(p.production_year || new Date().getFullYear());
          setProjectOverview(p.project_overview || '');
          setCreativeConcept(p.creative_concept || '');
          setProductionApproach(p.production_approach || '');
          setServicesInput(Array.isArray(p.services_delivered) ? p.services_delivered.join(', ') : '');
          setProductionTechniquesInput(Array.isArray(p.production_techniques) ? p.production_techniques.join(', ') : '');
          setDeliverablesInput(Array.isArray(p.deliverables) ? p.deliverables.join(', ') : '');
          setProductionLocation(p.production_location || '');
          setGeoEntitiesInput(Array.isArray(p.geo_entities) ? p.geo_entities.join(', ') : '');
          setMeasuredResults(p.measured_results || '');
          setVerifiedCredits(Array.isArray(p.verified_credits) ? p.verified_credits : []);
          setGalleryImages(Array.isArray(p.gallery_images) ? p.gallery_images : []);
          setHeroImageUrl(p.hero_image_url || '');
          setVideoType(normalizePortfolioVideoType(p.video_type));
          setVideoId(p.video_id || '');
          setVideoUrl(p.video_url || '');
          setVideoDuration(p.video_duration || '');
          setVideoTranscript(p.video_transcript || '');
          setSeoTitle(p.seo_title || '');
          setSeoDescription(p.seo_description || '');
          setFocusKeywords(Array.isArray(p.focus_keywords) ? p.focus_keywords.join(', ') : '');
          setSchemaType(normalizePortfolioSchemaType(p.schema_type));
          setCanonicalOverride(p.canonical_override || '');
          const initialStatus = parsePortfolioStatus(p.status).status || 'draft';
          setTargetStatus(initialStatus === 'approved' ? 'publicly_published' : initialStatus);
        } else {
          setFeedback({ type: 'error', message: res.error || 'Failed to load project details.' });
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Error fetching project';
        setFeedback({ type: 'error', message: msg });
      } finally {
        setIsLoading(false);
      }
    }

    loadProject();
  }, [projectId]);

  const isSlugLocked = project ? project.status === 'published' || project.has_ever_been_published === true : false;
  const isSlugCollision = slug !== project?.slug && isReservedSlug(slug);
  const isSlugValid = isValidSlug(slug);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, target: 'hero' | 'gallery' | 'video') => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      setFeedback({
        type: 'error',
        message: `File size exceeds maximum limit of 50MB (${(file.size / (1024 * 1024)).toFixed(1)}MB provided).`,
      });
      return;
    }

    setUploadingMedia(true);
    setFeedback(null);

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

      if (target === 'hero') {
        setHeroImageUrl(json.data.url);
      } else if (target === 'video') {
        setVideoUrl(json.data.url);
        setVideoType('custom');
      } else {
        setGalleryImages((prev) => [
          ...prev,
          {
            storage_path: json.data.storagePath || json.data.url,
            url: json.data.url,
            alt_text: `${title} still`,
          },
        ]);
      }
      setFeedback({ type: 'success', message: 'Asset uploaded to media vault.' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Upload failed';
      setFeedback({ type: 'error', message: msg });
    } finally {
      setUploadingMedia(false);
    }
  };

  const handleAddGalleryUrl = () => {
    if (!newGalleryUrl.trim()) return;
    setGalleryImages((prev) => [
      ...prev,
      {
        storage_path: newGalleryUrl.trim(),
        url: newGalleryUrl.trim(),
        alt_text: `${title} visual still`,
      },
    ]);
    setNewGalleryUrl('');
  };

  const handleRemoveGalleryImage = (idx: number) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleMoveGalleryImage = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= galleryImages.length) return;
    const updated = [...galleryImages];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    setGalleryImages(updated);
  };

  const handleUpdateGalleryItem = (index: number, field: 'alt_text' | 'caption', val: string) => {
    setGalleryImages((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: val };
      return copy;
    });
  };

  const handleAddCredit = () => {
    setVerifiedCredits((prev) => [...prev, { role: '', name: '', company: '' }]);
  };

  const handleUpdateCredit = (index: number, field: keyof VerifiedCredit, val: string) => {
    setVerifiedCredits((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: val };
      return copy;
    });
  };

  const handleRemoveCredit = (index: number) => {
    setVerifiedCredits((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSaveMutation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!project) return;

    if (!title.trim()) {
      setFeedback({ type: 'error', message: 'Title is required.' });
      return;
    }

    if (!isSlugLocked) {
      if (!slug.trim() || !isValidSlug(slug)) {
        setFeedback({ type: 'error', message: 'Invalid slug format.' });
        return;
      }
      if (slug !== project.slug && isReservedSlug(slug)) {
        setFeedback({ type: 'error', message: `Slug "${slug}" collides with a reserved static route.` });
        return;
      }
    }

    const services = servicesInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const techniques = productionTechniquesInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const deliverables = deliverablesInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const geoEntities = geoEntitiesInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const keywords = focusKeywords
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const input: MutateProjectInput = {
      title: title.trim(),
      slug: isSlugLocked ? project.slug : slug.trim(),
      category,
      public_client_display_name: publicClientDisplayName.trim() || undefined,
      internal_client_name: internalClientName.trim() || undefined,
      is_client_confidential: isClientConfidential,
      client_website: clientWebsite.trim() || undefined,
      production_year: Number(productionYear) || new Date().getFullYear(),
      project_overview: projectOverview.trim() || undefined,
      creative_concept: creativeConcept.trim() || undefined,
      production_approach: productionApproach.trim() || undefined,
      services_delivered: services,
      production_techniques: techniques,
      deliverables: deliverables,
      production_location: productionLocation.trim() || undefined,
      geo_entities: geoEntities,
      measured_results: measuredResults.trim() || undefined,
      verified_credits: verifiedCredits,
      gallery_images: galleryImages,
      hero_image_url: heroImageUrl.trim() || undefined,
      video_type: videoType,
      video_id: videoId.trim() || undefined,
      video_url: videoUrl.trim() || undefined,
      video_duration: videoDuration.trim() || undefined,
      video_transcript: videoTranscript.trim() || undefined,
      seo_title: seoTitle.trim() || undefined,
      seo_description: seoDescription.trim() || undefined,
      focus_keywords: keywords,
      schema_type: schemaType,
      canonical_override: canonicalOverride.trim() || undefined,
    };

    startTransition(async () => {
      try {
        const res = await mutateProject(project.id, input);
        if (res.success) {
          setFeedback({ type: 'success', message: 'Project changes saved successfully.' });
        } else {
          setFeedback({ type: 'error', message: res.error || 'Failed to update project.' });
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Error updating project';
        setFeedback({ type: 'error', message: msg });
      }
    });
  };

  const handleStatusChange = () => {
    if (!project) return;
    const targetParsed = parsePortfolioStatus(targetStatus);
    if (!targetParsed.success || !targetParsed.status) {
      setFeedback({ type: 'error', message: targetParsed.error || 'Invalid target status' });
      return;
    }
    const normTarget = targetParsed.status;
    const currentParsed = parsePortfolioStatus(project.status);
    if (currentParsed.success && normTarget === currentParsed.status) return;

    if (!confirm(`Confirm transition from "${project.status}" to "${normTarget}"?`)) {
      return;
    }

    startTransition(async () => {
      try {
        const res = await setProjectPublishStatus(project.id, normTarget, auditNotes);
        if (res.success && res.status) {
          const normResultStatus = res.status;
          setProject((prev) => (prev ? { ...prev, status: normResultStatus } : null));
          setTargetStatus(normResultStatus);
          setFeedback({
            type: 'success',
            message: `Publication status changed to "${normResultStatus}".`,
          });
        } else {
          setFeedback({ type: 'error', message: res.error || 'Failed to transition status.' });
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Error transitioning status';
        setFeedback({ type: 'error', message: msg });
      }
    });
  };

  const handleDeleteDraft = () => {
    if (!project) return;
    if (project.status === 'published' || project.status === 'publicly_published') {
      alert('Published projects cannot be deleted. Archive the project first.');
      return;
    }
    if (!confirm(`Permanently delete "${project.title}"? This action is irreversible.`)) {
      return;
    }

    startTransition(async () => {
      try {
        const res = await deleteDraftProject(project.id);
        if (res.success) {
          router.push('/admin/portfolio');
          router.refresh();
        } else {
          setFeedback({ type: 'error', message: res.error || 'Delete failed.' });
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Delete error';
        setFeedback({ type: 'error', message: msg });
      }
    });
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-black text-white p-12 flex items-center justify-center">
        <div className="text-center space-y-3">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto text-amber-500" />
          <p className="text-sm text-neutral-400">Loading portfolio project data...</p>
        </div>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white p-12">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
          <h1 className="text-2xl font-light">Project Not Found</h1>
          <p className="text-neutral-500 text-sm">
            The requested portfolio project could not be found or has been deleted.
          </p>
          <Link
            href="/admin/portfolio"
            className="inline-block bg-neutral-800 text-white px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider"
          >
            Back to Overview
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 font-sans selection:bg-amber-500/30">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-8">
          <div>
            <Link
              href="/admin/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors mb-3"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Portfolio Projects
            </Link>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <p className="text-amber-500 uppercase tracking-widest text-xs font-mono">Editor</p>
            </div>
            <h1 className="text-3xl font-light tracking-tight">{project.title}</h1>
            <p className="text-neutral-500 text-xs font-mono mt-1">ID: {project.id}</p>
          </div>

          <div className="flex items-center gap-3">
            {project.status !== 'archived' && (
              <Link
                href={`/api/portfolio/preview?id=${project.id}`}
                target="_blank"
                title="Preview Draft in New Tab"
                className="flex items-center gap-2 bg-neutral-900 border border-amber-500/40 hover:border-amber-400 text-amber-400 px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <Eye className="w-3.5 h-3.5 text-amber-400" />
                Preview Draft
              </Link>
            )}

            {(project.status === 'published' || project.status === 'publicly_published') && (
              <Link
                href={`/portfolio/${project.slug}`}
                target="_blank"
                className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-200 px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                Live Page
              </Link>
            )}
          </div>
        </div>

        {/* Feedback Banner */}
        {feedback && (
          <div
            className={`p-4 rounded-xl flex items-start gap-3 text-sm border ${
              feedback.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}
          >
            {feedback.type === 'success' ? (
              <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-medium">
                {feedback.type === 'success' ? 'Operation Completed' : 'Operation Failed'}
              </p>
              <p className="text-xs opacity-90 mt-0.5">{feedback.message}</p>
            </div>
          </div>
        )}

        {/* Section: Status Governance & Lifecycle Controls */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <h2 className="text-base font-medium flex items-center gap-2 text-white">
              <Globe className="w-4 h-4 text-amber-500" />
              Publication Status & Workflow Lifecycle
            </h2>
            <span className="text-[11px] font-mono text-neutral-400">
              State Machine Governed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono block mb-2">
                Current Status
              </label>
              <div className="px-4 py-2.5 bg-black border border-neutral-800 rounded-lg text-sm font-mono uppercase text-amber-400 flex items-center justify-between">
                <span>{project.status.replace('_', ' ')}</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono block mb-2">
                Permitted Transition
              </label>
              <select
                value={targetStatus}
                onChange={(e) => setTargetStatus(e.target.value as PortfolioProjectStatus)}
                className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60 font-mono"
              >
                {project.status === 'draft' && (
                  <option value="in_review">Submit for Review (In Review)</option>
                )}
                {project.status === 'in_review' && (
                  <>
                    <option value="approved">Approve Project (Approved)</option>
                    <option value="draft">Return to Draft (Needs Work)</option>
                  </>
                )}
                {project.status === 'approved' && (
                  <>
                    <option value="publicly_published">Publish Live (Promote to Production)</option>
                    <option value="in_review">Return to Review</option>
                    <option value="draft">Return to Draft</option>
                  </>
                )}
                {(project.status === 'published' || project.status === 'publicly_published') && (
                  <option value="archived">Decommission to Archive</option>
                )}
                {project.status === 'archived' && (
                  <>
                    <option value="draft">Restore to Draft</option>
                    <option value="approved">Re-Approve for Publication</option>
                  </>
                )}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={handleStatusChange}
                disabled={isPending || targetStatus === project.status}
                className={`w-full font-bold text-xs uppercase tracking-widest px-4 py-3 rounded-lg transition-colors shadow-sm disabled:opacity-40 ${
                  targetStatus === 'publicly_published'
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-black'
                    : 'bg-amber-500 hover:bg-amber-400 text-black'
                }`}
              >
                {isPending
                  ? 'Transitioning...'
                  : targetStatus === 'publicly_published'
                  ? 'Publish Live to Production'
                  : 'Apply Transition'}
              </button>
            </div>
          </div>

          {/* Contextual Lifecycle Explanations */}
          <div className="p-3 bg-black/40 border border-neutral-800/80 rounded-lg text-xs text-neutral-400 font-sans">
            {project.status === 'draft' && (
              <p>Draft projects are private to administrators. When ready, submit for editorial review to proceed.</p>
            )}
            {project.status === 'in_review' && (
              <p>Under review. Reviewers can approve this project for staging validation or return it to draft for revisions.</p>
            )}
            {project.status === 'approved' && (
              <p className="text-emerald-300">
                Project is approved. Select &quot;Publish Live&quot; and click &quot;Publish Live to Production&quot; to make this project publicly accessible, indexed by search engines, and visible in the portfolio showcase.
              </p>
            )}
            {(project.status === 'published' || project.status === 'publicly_published') && (
              <p className="text-emerald-300">
                This project is live in production. It cannot be deleted directly; it can only be decommissioned to Archived.
              </p>
            )}
            {project.status === 'archived' && (
              <p>Archived projects are hidden from public search and cannot be previewed. Restore to draft to edit.</p>
            )}
          </div>

          <div className="pt-2">
            <input
              type="text"
              placeholder="Audit log notes for this lifecycle transition (optional)..."
              value={auditNotes}
              onChange={(e) => setAuditNotes(e.target.value)}
              className="w-full bg-black/60 border border-neutral-800 rounded-lg px-4 py-2 text-xs text-neutral-300 placeholder-neutral-600 focus:outline-none focus:border-amber-500/60"
            />
          </div>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSaveMutation} className="space-y-8">

          {/* General Information */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h2 className="text-base font-medium flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Layers className="w-4 h-4 text-amber-500" />
              General Attributes
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Slug with Immutability Lock */}
              <div className="space-y-2 md:col-span-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-1.5">
                    URL Slug *
                    {isSlugLocked && (
                      <span className="text-[10px] text-amber-500 flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded">
                        <Lock className="w-3 h-3" /> Locked (Published)
                      </span>
                    )}
                  </label>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    /portfolio/{slug}
                  </span>
                </div>
                <input
                  type="text"
                  disabled={isSlugLocked}
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase().trim())}
                  className={`w-full bg-black border rounded-lg px-4 py-2.5 text-sm text-white font-mono focus:outline-none transition-colors ${
                    isSlugLocked
                      ? 'border-neutral-800 opacity-60 cursor-not-allowed'
                      : isSlugCollision
                      ? 'border-red-500'
                      : !isSlugValid
                      ? 'border-amber-500'
                      : 'border-neutral-800 focus:border-amber-500/60'
                  }`}
                />
                {isSlugLocked && (
                  <p className="text-[11px] text-neutral-500 flex items-center gap-1 mt-1">
                    <Lock className="w-3 h-3" />
                    Slug cannot be altered after publication to prevent SEO link degradation and canonical divergence.
                  </p>
                )}
                {isSlugCollision && (
                  <p className="text-xs text-red-400 mt-1">
                    RESERVED SLUG: &quot;{slug}&quot; collides with an existing static route or reserved keyword.
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
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
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
                  Release Year
                </label>
                <input
                  type="number"
                  value={productionYear}
                  onChange={(e) => setProductionYear(Number(e.target.value))}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60 font-mono"
                />
              </div>

              {/* Public Client Display Name */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Public Client Display Name
                </label>
                <input
                  type="text"
                  value={publicClientDisplayName}
                  onChange={(e) => setPublicClientDisplayName(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Internal Client Name */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Internal Client Name (Audit / Invoicing)
                </label>
                <input
                  type="text"
                  value={internalClientName}
                  onChange={(e) => setInternalClientName(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Confidential Toggle */}
              <div className="space-y-2 md:col-span-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs uppercase tracking-wider text-neutral-300 font-mono">
                  <input
                    type="checkbox"
                    checked={isClientConfidential}
                    onChange={(e) => setIsClientConfidential(e.target.checked)}
                    className="rounded border-neutral-700 text-amber-500 focus:ring-0 bg-black"
                  />
                  Mark Client Identity as Confidential
                </label>
              </div>

              {/* Project Overview */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Project Overview / Summary
                </label>
                <input
                  type="text"
                  value={projectOverview}
                  onChange={(e) => setProjectOverview(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Creative Concept */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Creative Concept & Narrative
                </label>
                <textarea
                  rows={4}
                  value={creativeConcept}
                  onChange={(e) => setCreativeConcept(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Services Delivered */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Services Delivered (comma-separated)
                </label>
                <input
                  type="text"
                  value={servicesInput}
                  onChange={(e) => setServicesInput(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Production Approach */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Production Workflow / Stack
                </label>
                <input
                  type="text"
                  value={productionApproach}
                  onChange={(e) => setProductionApproach(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>
            </div>
          </div>

          {/* Media & Video Assets */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h2 className="text-base font-medium flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Film className="w-4 h-4 text-amber-500" />
              Media Assets & Video
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Hero Image */}
              <div className="space-y-3 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Hero Image
                </label>
                {heroImageUrl && (
                  <div className="relative max-w-md rounded-lg overflow-hidden border border-neutral-800 bg-black aspect-video group">
                    <img
                      src={normalizeMediaUrl(heroImageUrl)}
                      alt="Hero preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-mono text-neutral-300 border border-neutral-800">
                      Current Hero Asset
                    </div>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={heroImageUrl}
                    onChange={(e) => setHeroImageUrl(e.target.value)}
                    placeholder="https://... or upload hero image"
                    className="flex-1 bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-amber-500/60"
                  />
                  <label className="inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider cursor-pointer transition-colors shrink-0">
                    <Upload className="w-4 h-4" />
                    {uploadingMedia ? 'Uploading...' : 'Replace Hero'}
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/avif"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'hero')}
                      disabled={uploadingMedia}
                    />
                  </label>
                </div>
              </div>

              {/* Video Platform */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Video Platform
                </label>
                <select
                  value={videoType}
                  onChange={(e) => setVideoType(e.target.value as PortfolioVideoType)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                >
                  <option value="none">None (Static Hero Only)</option>
                  <option value="youtube">YouTube</option>
                  <option value="vimeo">Vimeo</option>
                  <option value="mux">Mux Video Stream</option>
                  <option value="custom">Custom / Direct MP4/WebM URL</option>
                </select>
              </div>

              {/* Video ID / URL & Upload */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Video ID / URL
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    disabled={videoType === 'none'}
                    value={videoType === 'custom' || videoType === 'mux' ? videoUrl : videoId}
                    onChange={(e) => {
                      if (videoType === 'custom' || videoType === 'mux') setVideoUrl(e.target.value);
                      else setVideoId(e.target.value);
                    }}
                    placeholder={videoType === 'custom' ? 'https://... or upload' : 'Video ID'}
                    className="flex-1 bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-amber-500/60 disabled:opacity-40"
                  />
                  {(videoType === 'custom' || videoType === 'none') && (
                    <label className="inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider cursor-pointer transition-colors shrink-0">
                      <Upload className="w-4 h-4" />
                      {uploadingMedia ? 'Uploading...' : 'Upload Video'}
                      <input
                        type="file"
                        accept="video/mp4,video/webm"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, 'video')}
                        disabled={uploadingMedia}
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Video Duration & Video Transcript */}
              {videoType !== 'none' && (
                <>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      Video Duration (e.g. 03:45 or PT3M45S)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 03:45"
                      value={videoDuration}
                      onChange={(e) => setVideoDuration(e.target.value)}
                      className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white font-mono focus:outline-none focus:border-amber-500/60"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-amber-500" />
                      Video Transcript / Dialogue (AEO & Accessibility)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Optional dialogue or voiceover transcript for search engines and screen readers..."
                      value={videoTranscript}
                      onChange={(e) => setVideoTranscript(e.target.value)}
                      className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-amber-500/60"
                    />
                  </div>
                </>
              )}

              {/* In-Editor Video Preview Player */}
              {videoType === 'custom' && videoUrl && (
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                    Video Preview
                  </label>
                  <div className="max-w-md rounded-lg overflow-hidden border border-neutral-800 bg-black aspect-video">
                    <video
                      src={normalizeMediaUrl(videoUrl)}
                      controls
                      preload="metadata"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Gallery Images Manager */}
              <div className="space-y-4 md:col-span-2 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                    Gallery Images ({galleryImages.length})
                  </label>
                  <span className="text-[11px] text-neutral-500">
                    Reorder and annotate assets for portfolio presentation
                  </span>
                </div>

                {/* Gallery Items List */}
                {galleryImages.length > 0 ? (
                  <div className="space-y-3">
                    {galleryImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="bg-black/40 border border-neutral-800 rounded-lg p-3 flex flex-col md:flex-row gap-4 items-start md:items-center"
                      >
                        {/* Thumbnail */}
                        <div className="relative w-32 h-20 rounded overflow-hidden border border-neutral-800 bg-black shrink-0">
                          <img
                            src={normalizeMediaUrl(img.url)}
                            alt={img.alt_text || `Gallery asset ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-1 left-1 bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-mono text-neutral-300">
                            #{idx + 1}
                          </span>
                        </div>

                        {/* Metadata inputs */}
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                          <div>
                            <label className="text-[10px] uppercase font-mono text-neutral-500 block mb-1">
                              Alt Text (Accessibility & SEO)
                            </label>
                            <input
                              type="text"
                              placeholder="Describe image..."
                              value={img.alt_text || ''}
                              onChange={(e) => handleUpdateGalleryItem(idx, 'alt_text', e.target.value)}
                              className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500/60"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] uppercase font-mono text-neutral-500 block mb-1">
                              Caption (Editorial Context)
                            </label>
                            <input
                              type="text"
                              placeholder="Optional caption..."
                              value={img.caption || ''}
                              onChange={(e) => handleUpdateGalleryItem(idx, 'caption', e.target.value)}
                              className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500/60"
                            />
                          </div>
                          {img.storage_path && (
                            <div className="sm:col-span-2">
                              <span className="text-[10px] font-mono text-neutral-600 truncate block">
                                Storage: {img.storage_path}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Order & Remove Controls */}
                        <div className="flex md:flex-col items-center gap-1 shrink-0 self-end md:self-center">
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => handleMoveGalleryImage(idx, 'up')}
                              disabled={idx === 0}
                              title="Move Up"
                              className="p-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded border border-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                              <ChevronUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMoveGalleryImage(idx, 'down')}
                              disabled={idx === galleryImages.length - 1}
                              title="Move Down"
                              className="p-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded border border-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                              <ChevronDown className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveGalleryImage(idx)}
                            title="Remove Image"
                            className="p-1.5 bg-neutral-900 hover:bg-red-950/60 text-neutral-500 hover:text-red-400 rounded border border-neutral-800 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 border border-dashed border-neutral-800 rounded-lg text-center text-xs text-neutral-500">
                    No gallery images added yet. Upload images below.
                  </div>
                )}

                {/* Add new image controls */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <input
                    type="text"
                    placeholder="Paste image URL to append..."
                    value={newGalleryUrl}
                    onChange={(e) => setNewGalleryUrl(e.target.value)}
                    className="flex-1 bg-black border border-neutral-800 rounded-lg px-4 py-2 text-xs text-white placeholder-neutral-600 font-mono focus:outline-none focus:border-amber-500/60"
                  />
                  <button
                    type="button"
                    onClick={handleAddGalleryUrl}
                    className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg text-xs uppercase tracking-wider transition-colors shrink-0"
                  >
                    Add URL
                  </button>
                  <label className="inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-4 py-2 rounded-lg text-xs uppercase tracking-wider cursor-pointer transition-colors shrink-0">
                    <Upload className="w-3.5 h-3.5" />
                    Upload Image
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/avif"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'gallery')}
                      disabled={uploadingMedia}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Geographic Scope & Technical Deliverables */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h2 className="text-base font-medium flex items-center gap-2 border-b border-neutral-800 pb-3">
              <MapPin className="w-4 h-4 text-amber-500" />
              Geographic Scope & Technical Deliverables
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Production Location */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Production Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Varanasi, Uttar Pradesh, India"
                  value={productionLocation}
                  onChange={(e) => setProductionLocation(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Geo Entities */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Geo Entities (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Varanasi, Ghats of Ganga, Kashi"
                  value={geoEntitiesInput}
                  onChange={(e) => setGeoEntitiesInput(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Camera & Production Techniques */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Camera / Production Techniques (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Arri Alexa Mini LF, Cooke Anamorphic, Steadicam"
                  value={productionTechniquesInput}
                  onChange={(e) => setProductionTechniquesInput(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Deliverables Produced */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Deliverables Produced (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 60s Brand Film, 30s Cutdown, Social Stills"
                  value={deliverablesInput}
                  onChange={(e) => setDeliverablesInput(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Measured Results / Impact */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  Measured Results & Campaign Impact
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. +340% organic impressions, Cannes Lions shortlist, 1.8M verified views..."
                  value={measuredResults}
                  onChange={(e) => setMeasuredResults(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>
            </div>
          </div>

          {/* Verified Creative Credits & Team */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h2 className="text-base font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-500" />
                Verified Creative Credits ({verifiedCredits.length})
              </h2>
              <button
                type="button"
                onClick={handleAddCredit}
                className="flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-3 py-1.5 rounded-lg text-xs uppercase tracking-wider transition-colors"
              >
                <Plus className="w-3.5 h-3.5 text-amber-500" />
                Add Credit
              </button>
            </div>

            {verifiedCredits.length > 0 ? (
              <div className="space-y-3">
                {verifiedCredits.map((credit, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 sm:grid-cols-10 gap-2 items-center bg-black/40 border border-neutral-800 rounded-lg p-2.5"
                  >
                    <div className="sm:col-span-3">
                      <input
                        type="text"
                        placeholder="Role (e.g. Director)"
                        value={credit.role}
                        onChange={(e) => handleUpdateCredit(idx, 'role', e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <input
                        type="text"
                        placeholder="Name (e.g. Jane Doe)"
                        value={credit.name}
                        onChange={(e) => handleUpdateCredit(idx, 'name', e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <input
                        type="text"
                        placeholder="Company (optional)"
                        value={credit.company || ''}
                        onChange={(e) => handleUpdateCredit(idx, 'company', e.target.value)}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                    <div className="sm:col-span-1 flex justify-end">
                      <button
                        type="button"
                        onClick={() => handleRemoveCredit(idx)}
                        title="Remove Credit"
                        className="p-1.5 text-neutral-500 hover:text-red-400 rounded hover:bg-neutral-800 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 border border-dashed border-neutral-800 rounded-lg text-center text-xs text-neutral-500">
                No credits added. Click &quot;Add Credit&quot; to attribute director, cinematographer, colourist, etc.
              </div>
            )}
          </div>

          {/* SEO & Discoverability */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6">
            <h2 className="text-base font-medium flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Search className="w-4 h-4 text-amber-500" />
              SEO & Structured Schema
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* SEO Title */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  SEO Title
                </label>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Schema Type */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Schema Type
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
                  SEO Description
                </label>
                <textarea
                  rows={2}
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Focus Keywords */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Focus Keywords
                </label>
                <input
                  type="text"
                  value={focusKeywords}
                  onChange={(e) => setFocusKeywords(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60"
                />
              </div>

              {/* Canonical Override */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Canonical URL Override (Optional)
                </label>
                <input
                  type="text"
                  placeholder="https://defineperspective.in/portfolio/..."
                  value={canonicalOverride}
                  onChange={(e) => setCanonicalOverride(e.target.value)}
                  className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/60 font-mono"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
            {project.status === 'draft' ? (
              <button
                type="button"
                onClick={handleDeleteDraft}
                disabled={isPending}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Delete Draft Project
              </button>
            ) : (
              <span className="text-xs text-neutral-500">
                Published projects cannot be deleted directly.
              </span>
            )}

            <div className="flex items-center gap-4">
              <Link
                href="/admin/portfolio"
                className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isPending || isSlugCollision || !title}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-500/10 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {isPending ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
