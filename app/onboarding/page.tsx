"use client";

import Link from "next/link";
import { CheckCircle, Calendar, FileText, MessageSquare } from "lucide-react";

export default function Onboarding() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Success Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">You{`'`}re In! 🚀</h1>
          <p className="text-slate-400 text-lg">
            Payment confirmed. I{`'`}m excited to bring your vision to life.
          </p>
        </div>

        {/* Next Steps Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 text-left shadow-2xl">
          <h2 className="text-2xl font-bold mb-8">Next Steps to Kickoff:</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" /> Project Brief
                </h3>
                <p className="text-slate-400 mb-4">Please fill out this 2-minute questionnaire so I can understand your brand better.</p>
                <Link href="https://forms.google.com/your-link" className="text-blue-400 hover:underline font-semibold">
                  Fill out Form →
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-400" /> Kickoff Call
                </h3>
                <p className="text-slate-400 mb-4">Book a 30-minute discovery call to finalize our project roadmap.</p>
                <Link href="https://calendly.com/your-link" className="text-purple-400 hover:underline font-semibold">
                  Schedule on Calendly →
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-400" /> Slack/Discord Access
                </h3>
                <p className="text-slate-400">I{`'`}ve sent an invite to your email for our dedicated communication channel.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-slate-500 hover:text-white transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}