"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const projectType = formData.get("projectType") as string;
  const message = formData.get("message") as string;

  // Add a timestamp for the inquiry
  const date = new Date().toLocaleString('en-US', { 
    timeZone: 'Indian/Mauritius',
    dateStyle: 'full',
    timeStyle: 'short' 
  });

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Lead <onboarding@resend.dev>',
      to: ['dominiquesavio2003@gmail.com'],
      subject: `🔔 NEW LEAD: ${name} - ${projectType}`,
      replyTo: email,
      html: `
        <div style="background-color: #f9fafb; padding: 40px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            
            <div style="background-color: #0f172a; padding: 32px; text-align: center;">
              <img src="https://i.ibb.co/xKY8MGCQ/logo.png" alt="Saviomds" style="width: 48px; height: 48px; margin-bottom: 16px; border-radius: 10px;" />
              <h1 style="color: #ffffff; font-size: 20px; font-weight: 700; margin: 0; letter-spacing: -0.025em;">New Project Inquiry</h1>
              <p style="color: #94a3b8; font-size: 14px; margin-top: 4px;">Recieved on ${date}</p>
            </div>

            <div style="padding: 32px;">
              <div style="display: grid; gap: 20px; margin-bottom: 32px;">
                <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
                  <p style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; margin: 0 0 4px 0;">Prospect Name</p>
                  <p style="font-size: 16px; color: #1e293b; font-weight: 500; margin: 0;">${name}</p>
                </div>
                
                <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
                  <p style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; margin: 0 0 4px 0;">Email Address</p>
                  <a href="mailto:${email}" style="font-size: 16px; color: #2563eb; text-decoration: none; font-weight: 500; margin: 0;">${email}</a>
                </div>

                <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
                  <p style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; margin: 0 0 4px 0;">Inquiry Type</p>
                  <span style="display: inline-block; background-color: #dbeafe; color: #1e40af; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 9999px; margin-top: 4px;">
                    ${projectType.toUpperCase()}
                  </span>
                </div>
              </div>

              <div style="background-color: #f8fafc; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0;">
                <p style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; margin: 0 0 12px 0;">Message Thread</p>
                <div style="font-size: 15px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</div>
              </div>

              <div style="margin-top: 32px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #2563eb; color: #ffffff; font-weight: 600; font-size: 15px; padding: 14px 32px; border-radius: 8px; text-decoration: none; box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2);">
                  Reply to Prospect
                </a>
              </div>
            </div>

            <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="font-size: 12px; color: #94a3b8; margin: 0;">
                This inquiry was sent via the contact form on <strong>saviomds.com</strong>
              </p>
            </div>
          </div>
        </div>
      `
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: "Failed to deliver email." };
    }

    return { success: true };

  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, error: "A server error occurred." };
  }
}