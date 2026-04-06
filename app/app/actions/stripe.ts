"use server";

import Stripe from "stripe";
import { redirect } from "next/navigation";

// Use a fallback to prevent crash if key is missing during build
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

export async function createCheckoutSession(projectName: string, price: number) {
  // 1. Clean the Site URL (Removes any accidental trailing slashes)
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  siteUrl = siteUrl.replace(/\/$/, ""); 

  let sessionUrl: string | null = null;

  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is missing from environment variables.");
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // Explicitly set for testing
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Access to ${projectName}`,
              description: "Full project access and professional source files.",
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      // Force the absolute URL construction
      success_url: `${siteUrl}/onboarding?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/portfolio`,
    });

    sessionUrl = session.url;
    
  } catch (error: unknown) {
    // If it's an internal Next.js redirect error, let it propagate
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage === "NEXT_REDIRECT") throw error;
    
    console.error("Stripe API Failure:", errorMessage);
    throw new Error(`Payment Setup Failed: ${errorMessage}`);
  }

  // 2. Final Redirect (Must be outside the try/catch)
  if (sessionUrl) {
    return redirect(sessionUrl);
  }
  
  throw new Error("No session URL returned from Stripe.");
}