import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySession } from '@/lib/session';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('dp_admin_session');
  
  const session = verifySession(sessionCookie?.value);
  
  if (!session || session.role !== 'admin') {
    redirect('/login');
  }

  return (
    <>
      {children}
    </>
  );
}
