"use client";

import React, { useState, useEffect, useCallback, useTransition } from 'react';
import Link from 'next/link';
import {
  PortfolioProject,
  PortfolioProjectStatus,
  PortfolioCategory,
} from '@/types/portfolio-cms';
import {
  getProjects,
  setProjectPublishStatus,
  deleteDraftProject,
} from '@/app/actions/portfolio-cms';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Archive,
  CheckCircle,
  AlertCircle,
  Layers,
  ArrowUpRight,
  RefreshCw,
  Eye,
} from 'lucide-react';

const STATUS_COLORS: Record<PortfolioProjectStatus, { bg: string; text: string; border: string }> = {
  draft: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  in_review: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  approved: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  published: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  publicly_published: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  archived: { bg: 'bg-neutral-800', text: 'text-neutral-400', border: 'border-neutral-700' },
};

const CATEGORIES: PortfolioCategory[] = [
  'commercial',
  'fashion',
  'luxury',
  'automotive',
  'hospitality',
  'technology',
  'narrative',
  'experimental',
];

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [errorType, setErrorType] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [isPending, startTransition] = useTransition();
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchProjectsList = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setErrorType(null);
    try {
      const res = await getProjects({
        status: statusFilter !== 'all' ? (statusFilter as PortfolioProjectStatus) : undefined,
        category: categoryFilter !== 'all' ? (categoryFilter as PortfolioCategory) : undefined,
        search: searchTerm.trim() || undefined,
      });

      if (res.success && res.data) {
        setProjects(res.data);
        setError(null);
        setErrorType(null);
      } else {
        setProjects([]);
        setError(res.error || 'Failed to load portfolio projects.');
        setErrorType(res.errorType || 'DATABASE_ERROR');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error fetching projects';
      setProjects([]);
      setError(msg);
      setErrorType('DATABASE_ERROR');
    } finally {
      setIsLoading(false);
    }
  }, [statusFilter, categoryFilter, searchTerm]);

  useEffect(() => {
    fetchProjectsList();
  }, [fetchProjectsList]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchProjectsList();
  };

  const handleQuickStatusChange = (id: string, newStatus: PortfolioProjectStatus) => {
    if (newStatus === 'publicly_published' || newStatus === 'published') {
      alert('Safety Lock: Direct public publishing from the project table is disabled. Please perform pre-publish review inside the project editor.');
      return;
    }

    if (!confirm(`Are you sure you want to transition this project to "${newStatus}"?`)) {
      return;
    }

    startTransition(async () => {
      const res = await setProjectPublishStatus(id, newStatus, `Admin fast transition to ${newStatus}`);
      if (res.success) {
        setActionMessage({ type: 'success', text: `Project status updated to ${newStatus}` });
        fetchProjectsList();
      } else {
        setActionMessage({ type: 'error', text: res.error || 'Failed to update status' });
      }
      setTimeout(() => setActionMessage(null), 4000);
    });
  };

  const handleDeleteDraft = (id: string, title: string) => {
    if (!confirm(`Permanently delete draft "${title}"? This cannot be undone.`)) {
      return;
    }

    startTransition(async () => {
      const res = await deleteDraftProject(id);
      if (res.success) {
        setActionMessage({ type: 'success', text: `Draft project "${title}" deleted.` });
        fetchProjectsList();
      } else {
        setActionMessage({ type: 'error', text: res.error || 'Failed to delete project' });
      }
      setTimeout(() => setActionMessage(null), 4000);
    });
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 font-sans selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <p className="text-amber-500 uppercase tracking-widest text-xs font-mono">Portfolio CMS Hub</p>
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight">Portfolio Projects</h1>
            <p className="text-neutral-500 text-sm mt-1">
              Manage dynamic portfolio projects, publication workflows, media assets, and SEO canonical metadata.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchProjectsList}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 rounded-lg text-xs uppercase tracking-wider transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <Link
              href="/admin/portfolio/new"
              prefetch={false}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-amber-500/10"
            >
              <Plus className="w-4 h-4" />
              New Project
            </Link>
          </div>
        </div>

        {/* Action feedback notification */}
        {actionMessage && (
          <div
            className={`p-4 rounded-lg flex items-center gap-3 text-sm border ${actionMessage.type === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
              : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}
          >
            {actionMessage.type === 'success' ? (
              <CheckCircle className="w-4 h-4 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0" />
            )}
            <span>{actionMessage.text}</span>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 md:p-6 backdrop-blur space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="md:col-span-6 relative">
              <input
                type="text"
                placeholder="Search by title, slug, client, or overview..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/60 border border-neutral-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
            </form>

            {/* Status Filter */}
            <div className="md:col-span-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-black/60 border border-neutral-800 rounded-lg px-3 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-amber-500/50 transition-colors"
              >
                <option value="all">All Statuses</option>
                <option value="draft">Draft</option>
                <option value="in_review">In Review</option>
                <option value="approved">Approved</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="md:col-span-3">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full bg-black/60 border border-neutral-800 rounded-lg px-3 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-amber-500/50 transition-colors"
              >
                <option value="all">All Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.replace('_', ' ').toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Projects Table / Grid */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
          {isLoading ? (
            <div className="p-16 text-center text-neutral-500 space-y-3">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-amber-500" />
              <p className="text-sm">Querying portfolio repository...</p>
            </div>
          ) : error ? (
            <div className="p-12 text-center text-red-400 space-y-4">
              <AlertCircle className="w-8 h-8 mx-auto text-red-500" />
              <div className="space-y-1">
                <p className="font-semibold text-white">
                  {errorType === 'DATABASE_SCHEMA_MISSING' && 'Database Schema Not Applied'}
                  {errorType === 'NETWORK_UNREACHABLE' && 'Supabase Staging Unreachable'}
                  {errorType === 'DATABASE_TIMEOUT' && 'Database Query Timed Out'}
                  {errorType === 'AUTH_UNAUTHORIZED' && 'Authentication Required'}
                  {(!errorType || errorType === 'DATABASE_ERROR') && 'Portfolio Query Failed'}
                </p>
                <p className="text-xs text-neutral-400 font-mono max-w-lg mx-auto">{error}</p>
              </div>
              {errorType === 'DATABASE_SCHEMA_MISSING' && (
                <p className="text-xs text-amber-400/90 max-w-md mx-auto">
                  The <code className="bg-neutral-800 px-1 py-0.5 rounded text-amber-300">public.portfolio_projects</code> relation was not found in the database. Ensure the additive migration has been applied to Staging.
                </p>
              )}
              {errorType === 'NETWORK_UNREACHABLE' && (
                <p className="text-xs text-neutral-400 max-w-md mx-auto">
                  The Next.js server cannot reach the Supabase Staging endpoint. Check network connectivity or development server configuration.
                </p>
              )}
              {errorType === 'DATABASE_TIMEOUT' && (
                <p className="text-xs text-neutral-400 max-w-md mx-auto">
                  The query exceeded the 3.5s timeout. The database connection may be blocked or undergoing maintenance.
                </p>
              )}
              <div className="pt-2">
                <button
                  onClick={fetchProjectsList}
                  className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Retry Query
                </button>
              </div>
            </div>
          ) : projects.length === 0 ? (
            <div className="p-16 text-center text-neutral-500 space-y-4">
              <Layers className="w-10 h-10 mx-auto text-neutral-700" />
              <div>
                <p className="text-base font-medium text-neutral-400">No portfolio projects found</p>
                <p className="text-xs text-neutral-600 mt-1">
                  {statusFilter !== 'all' || categoryFilter !== 'all' || searchTerm
                    ? 'Try clearing your filters or search terms.'
                    : 'Create your first project draft to get started.'}
                </p>
              </div>
              <Link
                href="/admin/portfolio/new"
                className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                Create Project
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-950/70 border-b border-neutral-800 text-neutral-500 text-xs uppercase tracking-wider font-mono">
                  <tr>
                    <th className="py-3.5 px-6">Project / Client</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">SEO / Canonical</th>
                    <th className="py-3.5 px-4">Created</th>
                    <th className="py-3.5 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60 font-sans">
                  {projects.map((p) => {
                    const statusStyle = STATUS_COLORS[p.status] || STATUS_COLORS.draft;
                    const clientLabel = p.is_client_confidential
                      ? 'Confidential'
                      : p.public_client_display_name || p.internal_client_name;

                    return (
                      <tr key={p.id} className="hover:bg-neutral-800/30 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            {p.hero_image_url ? (
                              <img
                                src={p.hero_image_url}
                                alt={p.title}
                                className="w-12 h-12 rounded object-cover border border-neutral-800 shrink-0"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-600 shrink-0">
                                <Layers className="w-5 h-5" />
                              </div>
                            )}
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-white">{p.title}</p>
                                {p.is_client_confidential && (
                                  <span className="text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 px-1.5 py-0.5 rounded font-mono uppercase">
                                    Confidential
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-neutral-500 font-mono mt-0.5">
                                /portfolio/{p.slug}
                              </p>
                              {clientLabel && (
                                <p className="text-xs text-neutral-400 mt-0.5">
                                  Client: {clientLabel}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-4">
                          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                            {p.category.replace('_', ' ')}
                          </span>
                        </td>

                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
                          >
                            {p.status.replace('_', ' ')}
                          </span>
                        </td>

                        <td className="py-4 px-4">
                          <div className="text-xs font-mono space-y-0.5">
                            <span
                              className={
                                p.robots_index
                                  ? 'text-emerald-400'
                                  : 'text-neutral-500'
                              }
                            >
                              {p.robots_index ? 'index' : 'noindex'}
                            </span>
                            <span className="text-neutral-600"> / </span>
                            <span
                              className={
                                p.in_sitemap
                                  ? 'text-blue-400'
                                  : 'text-neutral-500'
                              }
                            >
                              {p.in_sitemap ? 'sitemap' : 'nositemap'}
                            </span>
                          </div>
                        </td>

                        <td className="py-4 px-4 font-mono text-xs text-neutral-400">
                          {p.created_at ? new Date(p.created_at).toLocaleDateString() : '—'}
                        </td>

                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {p.status !== 'archived' && (
                              <Link
                                href={`/api/portfolio/preview?id=${p.id}`}
                                target="_blank"
                                title="Preview Draft"
                                className="p-2 text-neutral-400 hover:text-amber-400 bg-neutral-800/60 hover:bg-neutral-800 rounded-lg transition-colors"
                              >
                                <Eye className="w-4 h-4" />
                              </Link>
                            )}

                            {(p.status === 'published' || p.status === 'publicly_published') && (
                              <Link
                                href={`/portfolio/${p.slug}`}
                                target="_blank"
                                title="View Live Page"
                                className="p-2 text-neutral-400 hover:text-white bg-neutral-800/60 hover:bg-neutral-800 rounded-lg transition-colors"
                              >
                                <ArrowUpRight className="w-4 h-4" />
                              </Link>
                            )}

                            <Link
                              href={`/admin/portfolio/${p.id}/edit`}
                              title="Edit Project"
                              className="p-2 text-neutral-400 hover:text-amber-400 bg-neutral-800/60 hover:bg-neutral-800 rounded-lg transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                            </Link>

                            {p.status === 'draft' && (
                              <button
                                onClick={() => handleQuickStatusChange(p.id, 'in_review')}
                                title="Submit for Review"
                                disabled={isPending}
                                className="p-2 text-neutral-400 hover:text-blue-400 bg-neutral-800/60 hover:bg-neutral-800 rounded-lg transition-colors"
                              >
                                <Layers className="w-4 h-4" />
                              </button>
                            )}

                            {p.status === 'in_review' && (
                              <button
                                onClick={() => handleQuickStatusChange(p.id, 'approved')}
                                title="Approve for Publication"
                                disabled={isPending}
                                className="p-2 text-neutral-400 hover:text-purple-400 bg-neutral-800/60 hover:bg-neutral-800 rounded-lg transition-colors"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </button>
                            )}

                            {p.status === 'approved' && (
                              <span
                                title="Project is approved. Fast publishing from listing is locked. Open editor to review before live publication."
                                className="px-2 py-1 text-purple-400 bg-purple-500/10 border border-purple-500/30 rounded text-[10px] font-mono uppercase tracking-wider cursor-default"
                              >
                                Ready
                              </span>
                            )}

                            {(p.status === 'published' || p.status === 'publicly_published') && (
                              <button
                                onClick={() => handleQuickStatusChange(p.id, 'archived')}
                                title="Archive Project"
                                disabled={isPending}
                                className="p-2 text-neutral-400 hover:text-amber-400 bg-neutral-800/60 hover:bg-neutral-800 rounded-lg transition-colors"
                              >
                                <Archive className="w-4 h-4" />
                              </button>
                            )}

                            {p.status === 'archived' && (
                              <button
                                onClick={() => handleQuickStatusChange(p.id, 'draft')}
                                title="Restore to Draft"
                                disabled={isPending}
                                className="p-2 text-neutral-400 hover:text-neutral-200 bg-neutral-800/60 hover:bg-neutral-800 rounded-lg transition-colors"
                              >
                                <RefreshCw className="w-4 h-4" />
                              </button>
                            )}

                            {p.status === 'draft' && (
                              <button
                                onClick={() => handleDeleteDraft(p.id, p.title)}
                                title="Delete Draft"
                                disabled={isPending}
                                className="p-2 text-neutral-500 hover:text-red-400 bg-neutral-800/60 hover:bg-neutral-800 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
