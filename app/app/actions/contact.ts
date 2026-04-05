"use server";

export async function sendEmail(formData: FormData) {
  // Extract data from the form
  const name = formData.get("name");
  const email = formData.get("email");
  const projectType = formData.get("projectType");
  const message = formData.get("message");

  // Here you would normally use a library like 'resend' or 'nodemailer'
  // For now, we'll log it and simulate a real database/email save
  console.log("Form received:", { name, email, projectType, message });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
}