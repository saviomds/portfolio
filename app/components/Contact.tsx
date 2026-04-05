"use client";

import { useState, useRef } from "react";
import { sendEmail } from "@/app/actions/contact";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [projectType, setProjectType] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset logic
      setTimeout(() => {
        setIsSuccess(false);
        setProjectType("");
        formRef.current?.reset();
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 overflow-hidden relative">
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
           <svg width="400" height="400" viewBox="0 0 200 200" fill="white">
             <circle cx="100" cy="100" r="100" />
           </svg>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold leading-tight">Ready to launch your next big idea?</h2>
            <p className="text-blue-100 text-lg">Let{"'"}s connect and discuss how I can help your project thrive.</p>
            
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors text-xl">📧</div>
                <span className="font-medium group-hover:text-blue-200 transition-colors">dominiquesaviomds@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">📍</div>
                <span className="font-medium">Port Louis, Mauritius</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {isSuccess && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-blue-900/90 backdrop-blur-md rounded-3xl text-center p-6 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-2xl mb-4 text-white shadow-lg shadow-emerald-500/20">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-blue-100">Thanks for reaching out. I{"'"}ll get back to you shortly.</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input required type="text" name="name" placeholder="Your Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/30 outline-none transition-all" />
                <input required type="email" name="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/30 outline-none transition-all" />
              </div>

              <div className="relative">
                <select 
                  required 
                  name="projectType"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:bg-white/20 focus:border-white/30 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-slate-900 text-slate-400">What do you need help with?</option>
                  <option value="web" className="bg-slate-900">Web Development</option>
                  <option value="saas" className="bg-slate-900">Full SaaS Platform</option>
                  <option value="design" className="bg-slate-900">UI/UX Design Audit</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>

              <textarea required name="message" placeholder="Tell me about your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:bg-white/20 focus:border-white/30 outline-none transition-all resize-none"></textarea>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 active:scale-[0.98] transition-all shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}