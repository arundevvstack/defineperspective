import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/session";

export const metadata: Metadata = {
  title: "AI Infrastructure Cybersecurity & Traffic Monitor | DP AI Studio",
  description: "Advanced cybersecurity monitoring and live traffic analysis for Define Perspective's AI video production labs. Tracking neural sync status and secure CDN delivery.",
  keywords: ["AI cybersecurity", "traffic monitor", "secure AI video production", "DP AI Studio network"],
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

export default async function CybersecurityLayout({
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
