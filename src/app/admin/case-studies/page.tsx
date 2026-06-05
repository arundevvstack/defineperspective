import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Image as ImageIcon } from 'lucide-react';
import { verifySession } from '@/lib/session';

export const metadata: Metadata = {
  title: 'Case Studies Admin | DP Studio',
  robots: { index: false, follow: false }
};

export default async function AdminCaseStudiesPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('dp_admin_session');
  
  const session = verifySession(sessionCookie?.value);
  
  if (!session || session.role !== 'admin') {
    redirect('/login');
  }

  const { data: caseStudies } = await supabaseAdmin
    .from('case_studies')
    .select('id, title, slug, published, created_at')
    .order('created_at', { ascending: false });

  return (
    <main className="min-h-screen bg-black text-white p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-black tracking-tighter uppercase mb-8">Manage Case Studies</h1>
        
        <div className="flex flex-col gap-4">
          {caseStudies?.map(cs => (
            <div key={cs.id} className="flex items-center justify-between p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors">
              <div>
                <h2 className="text-lg font-bold">{cs.title}</h2>
                <div className="flex items-center gap-4 mt-2">
                  <span className={`text-xs px-2 py-1 rounded font-mono uppercase tracking-wider ${cs.published ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'}`}>
                    {cs.published ? 'Published' : 'Draft'}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">{cs.slug}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link 
                  href={`/case-studies/${cs.slug}`} 
                  target="_blank"
                  className="text-xs text-neutral-400 hover:text-white uppercase tracking-widest transition-colors"
                >
                  View Public
                </Link>
                <Link 
                  href={`/admin/case-studies/${cs.slug}/media`}
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-colors"
                >
                  <ImageIcon className="w-4 h-4" />
                  Manage Media
                </Link>
              </div>
            </div>
          ))}
          {(!caseStudies || caseStudies.length === 0) && (
            <div className="p-12 text-center text-neutral-500 border border-dashed border-neutral-800 rounded-xl">
              No case studies found.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
