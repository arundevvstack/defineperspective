"use server";

import { Resend } from "resend";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

// Basic in-memory rate limiting map
// Format: { [ip]: { count: number, resetAt: number } }
const rateLimitCache = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 5; // 5 requests per window
const WINDOW_MS = 5 * 60 * 1000; // 5 minutes

export async function submitUniversalForm(formData: FormData) {
  try {
    // 1. Honeypot Spam Protection
    const honey = formData.get("_honey");
    if (honey) {
      console.warn("Honeypot triggered. Silently rejecting.");
      return { success: true }; // Silent success for bots
    }

    // 2. Rate Limiting
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for")?.split(",")[0] || "unknown-ip";
    const now = Date.now();

    const rateLimitInfo = rateLimitCache.get(ip);
    if (rateLimitInfo) {
      if (now < rateLimitInfo.resetAt) {
        if (rateLimitInfo.count >= MAX_REQUESTS) {
          console.warn(`Rate limit exceeded for IP: ${ip}`);
          return { success: false, error: "Too many requests. Please try again later." };
        }
        rateLimitInfo.count++;
      } else {
        rateLimitCache.set(ip, { count: 1, resetAt: now + WINDOW_MS });
      }
    } else {
      rateLimitCache.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    }

    // Clean up cache to prevent memory leaks over time (basic approach)
    if (rateLimitCache.size > 1000) {
      rateLimitCache.clear();
    }

    // 3. Dynamic Payload Parsing
    const fields: Record<string, string> = {};
    formData.forEach((value, key) => {
      // Ignore Next.js hidden fields or our honeypot
      if (!key.startsWith("$ACTION") && key !== "_honey" && typeof value === "string") {
        fields[key] = value;
      }
    });

    const formType = fields.form_type || fields._subject || "New Inquiry";
    
    // Construct HTML Email
    let htmlContent = `<h2>${formType}</h2><hr/>`;
    for (const [key, value] of Object.entries(fields)) {
      if (key !== "form_type" && key !== "_subject" && key !== "redirect") {
         const cleanKey = key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
         htmlContent += `<p><strong>${cleanKey}:</strong> ${value || "N/A"}</p>`;
      }
    }

    // 4. Dispatch via Resend
    const { error } = await resend.emails.send({
      from: "DP AI Studio <onboarding@resend.dev>", // Replace with verified domain in production
      to: "defineperspective.in@gmail.com",
      subject: `System Notification: ${formType}`,
      html: htmlContent,
      replyTo: fields.email || undefined,
    });

    if (error) {
      console.error("Resend API Error:", error.message);
      return { success: false, error: "Email delivery failed." };
    }

    return { success: true };
  } catch (err) {
    console.error("Universal Form Server Error:", err);
    return { success: false, error: "Internal Server Error" };
  }
}
