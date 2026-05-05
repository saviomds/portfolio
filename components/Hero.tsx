"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [activeModal, setActiveModal] = useState<"resume" | "contact" | null>(null);

  const location = "Quatre Bornes, Mauritius";

  // Success Metrics
  const stats = [
    { label: "Projects Completed", value: "40+" },
    { label: "Satisfied Clients", value: "25+" },
    { label: "Teams Led", value: "4" },
    { label: "Years Exp.", value: "5+" },
  ];

  const socials = [
    { name: "GitHub", url: "https://github.com/saviomds", icon: "💻" },
    { name: "LinkedIn", url: "https://linkedin.com/in/saviomds", icon: "🔗" },
    { name: "X", url: "https://www.threads.com/@savio__mds", icon: "𝕏" },
    { name: "Instagram", url: "https://www.instagram.com/savio__mds/", icon: "📸" },
  ];

  const projects = [
    {
      title: "Nexus E-Commerce",
      description: "A high-performance headless storefront with real-time inventory and Stripe integration.",
      tech: ["Next.js", "Prisma", "Stripe", "Tailwind"],
    },
    {
      title: "TaskFlow SaaS",
      description: "Project management tool with real-time collaboration using WebSockets and PostgreSQL.",
      tech: ["React", "Node.js", "Socket.io", "Postgres"],
    },
  ];

  const closeModal = () => setActiveModal(null);

  return (
    <section id="home" className="relative py-20 px-6 overflow-hidden bg-slate-950">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Crafting Digital <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Experiences</span> that Matter.
            </h1>
            
            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I specialize in building high-performance web applications and intuitive user interfaces using the modern tech stack.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button 
                onClick={() => setActiveModal("contact")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 text-center"
              >
                Start a Project
              </button>
              
              <button 
                onClick={() => setActiveModal("resume")}
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all flex items-center gap-2 border border-slate-700"
              >
                View Digital CV
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10 w-full aspect-square rounded-[2rem] overflow-hidden border border-slate-700 bg-slate-800">
              <Image 
                src="/image/profile/Owner.png" 
                alt="Dominique Savio" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- UNIFIED DIGITAL CV MODAL --- */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={closeModal}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Browser Header Controls */}
            <div className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur border-b border-slate-800 p-6 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-3 text-sm font-mono text-slate-500">dominique_portfolio_final.v2</span>
              </div>
              <button onClick={closeModal} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l18 18" /></svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 md:p-12 space-y-16 custom-scrollbar">
              
              {/* Profile Header */}
              <header className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden border-2 border-blue-500/20 shadow-2xl shrink-0">
                  <Image src="/image/profile/Owner.png" alt="Profile" fill className="object-cover" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight">Dominique Savio</h2>
                  <p className="text-blue-400 text-xl font-medium mb-6">Full Stack Software Engineer</p>
                  
                  {/* ABOUT ME SECTION */}
                  <div className="max-w-2xl">
                    <h3 className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] mb-3">About Me</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      I am a passionate Software Engineer dedicated to building scalable, user-centric applications. With a focus on modern web technologies, I bridge the gap between complex backend logic and seamless frontend experiences. I thrive on solving architectural challenges and turning bold ideas into functional digital realities.
                    </p>
                  </div>
                </div>
              </header>

              {/* SUCCESS METRICS / STATS BAR */}
              <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-3xl text-center group hover:border-blue-500/30 transition-colors">
                    <p className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors mb-1">{stat.value}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </section>

              {/* Technical Arsenal */}
              <section className="space-y-6">
                <h3 className="text-xs font-black uppercase text-slate-500 tracking-[0.3em]">Technical Arsenal</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-8 bg-slate-800/40 border border-slate-700/50 rounded-[2rem]">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js 14', 'TypeScript', 'React', 'Tailwind', 'Redux', 'Framer Motion'].map(s => (
                        <span key={s} className="px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-xl text-[11px] font-bold border border-blue-500/20">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 bg-slate-800/40 border border-slate-700/50 rounded-[2rem]">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'PostgreSQL', 'Prisma', 'AWS', 'Docker', 'GraphQL'].map(s => (
                        <span key={s} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 rounded-xl text-[11px] font-bold border border-emerald-500/20">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Work History */}
              <section className="space-y-8">
                <h3 className="text-xs font-black uppercase text-slate-500 tracking-[0.3em]">Work History</h3>
                <div className="space-y-12 border-l-2 border-slate-800 ml-2 pl-8 relative">
                  <div className="relative">
                    <div className="absolute -left-[43px] top-1 w-7 h-7 rounded-full bg-blue-600 border-4 border-slate-900 shadow-xl shadow-blue-900/20"></div>
                    <h4 className="text-white font-black text-xl">Senior Web Engineer</h4>
                    <p className="text-blue-400 font-bold text-sm mt-1">TechFlow Solutions • 2022 — Present</p>
                    <p className="text-slate-400 text-sm mt-4 leading-relaxed">Spearheaded the migration to a micro-frontend architecture, managing a team of 4 developers to improve deployment speeds by 40%.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[43px] top-1 w-7 h-7 rounded-full bg-slate-700 border-4 border-slate-900"></div>
                    <h4 className="text-white font-black text-xl">Full Stack Developer</h4>
                    <p className="text-slate-500 font-bold text-sm mt-1">Creative Pixel • 2019 — 2022</p>
                    <p className="text-slate-400 text-sm mt-4 leading-relaxed">Delivered custom SaaS dashboards and e-commerce solutions for 25+ global clients with 100% satisfaction rates.</p>
                  </div>
                </div>
              </section>

              {/* Featured Projects */}
              <section className="space-y-8">
                <h3 className="text-xs font-black uppercase text-slate-500 tracking-[0.3em]">Featured Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((proj) => (
                    <div key={proj.title} className="group p-8 bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 rounded-[2rem] transition-all duration-300">
                      <h4 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">{proj.title}</h4>
                      <p className="text-slate-400 text-sm my-4 leading-relaxed">{proj.description}</p>
                      <div className="flex flex-wrap gap-3 mt-6">
                        {proj.tech.map(t => (
                          <span key={t} className="text-[10px] uppercase tracking-widest font-black text-slate-500 border-b border-slate-800 pb-1">{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Footer / Contact Card */}
              <section className="pt-12">
                <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-10 rounded-[2.5rem] border border-blue-500/20 text-center relative overflow-hidden">
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Let{`'`}s work together</h3>
                  <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                    Based in {location}, available for remote opportunities and high-impact engineering roles.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {socials.map((social) => (
                      <a 
                        key={social.name} 
                        href={social.url} 
                        className="w-14 h-14 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-2xl hover:border-blue-500 hover:-translate-y-1 transition-all text-2xl shadow-xl"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                      href="mailto:dominiquesaviomds@gmail.com" 
                      className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20"
                    >
                      Email Me
                    </a>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText("dominiquesaviomds@gmail.com");
                        alert("Email address copied to clipboard!");
                      }}
                      className="text-xs font-bold text-slate-500 hover:text-white transition-colors"
                    >
                      Copy Email
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}