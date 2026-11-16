import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/session";

export const metadata: Metadata = {
  title: "System Security Console | DP AI Studio Authority",
  description: "Advanced system security monitoring, neural node integrity, and real-time performance metrics for the Define Perspective ecosystem.",
  keywords: ["System Security Console", "DP AI Studio Security", "Neural Node Integrity", "Cybersecurity Monitoring"],
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

export default async function AnalysisLayout({
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

  return <>{children}</>;
}
