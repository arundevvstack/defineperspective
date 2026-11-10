import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/session";

export const metadata: Metadata = {
  title: "Competitor Map | Internal Administration",
  description: "Internal competitor intercept map and neural counter-strategy engine.",
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

export default async function CompetitorMapLayout({
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

