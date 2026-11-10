import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/session";

export const metadata: Metadata = {
  title: "Tactical SEO Console | Internal Administration",
  description: "Advanced SEO tracking, competitor intercept, and live SERP authority monitoring interface.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function SEOConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("dp_admin_session");

  const session = verifySession(sessionCookie?.value);

  if (!session || session.role !== "admin") {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  );
}
