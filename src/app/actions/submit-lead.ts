"use server";

import { Resend } from "resend";

// Ensure the RESEND_API_KEY is available in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitLeadAction(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const businessName = formData.get("businessName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const requirement = formData.get("requirement") as string;
    const budget = formData.get("budget") as string;

    // Send the email to your team using Resend
    const { data, error } = await resend.emails.send({
      from: "DP AI Studio <onboarding@resend.dev>", // Replace with your verified domain email (e.g., hello@defineperspective.in)
      to: "defineperspective.in@gmail.com", // Replace with the actual inbox to receive leads
      subject: `New Lead: ${name} (${businessName})`,
      html: `
        <h2>New AI Video Strategy Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Requirement Type:</strong> ${requirement}</p>
        <p><strong>Budget Range:</strong> ${budget}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Error submitting lead:", err);
    return { success: false, error: "Internal Server Error" };
  }
}
