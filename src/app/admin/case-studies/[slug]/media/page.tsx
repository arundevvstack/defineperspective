import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { cookies } from 'next/headers';
import { MediaManager } from '@/components/admin/MediaManager';
import { verifySession } from '@/lib/session';

export const metadata: Metadata = {
  title: 'Media Manager | DP Studio Admin',
  robots: { index: false, follow: false }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function AdminMediaManagerPage({ params }: Props) {
  // 1. Authenticate Admin
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('dp_admin_session');
  
  const session = verifySession(sessionCookie?.value);
  
  if (!session || session.role !== 'admin') {
    redirect('/login');
  }

  // 2. Fetch Data
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const { data: caseStudy } = await supabaseAdmin
    .from('case_studies')
    .select('*')
    .eq('slug', decodedSlug)
    .maybeSingle();

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      <MediaManager caseStudy={caseStudy} />
    </main>
  );
}
