import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/session";

export const metadata: Metadata = {
  title: "SEO Rankings | Internal Administration",
  description: "Internal search performance, keyword velocity, and backlink audit system.",
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

export default async function SEORankingsLayout({
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
    <>
      {children}
    </>
  );
}

