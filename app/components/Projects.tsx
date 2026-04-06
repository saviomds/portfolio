"use client";

import { useState } from "react";
import Image from "next/image";
// Inside your Projects.tsx Modal section
import { createCheckoutSession } from "@/app/actions/stripe";

const projects = [
  {
    title: "SaaS Dashboard",
    category: "Web Development",
    image: "/image/project1.png",
    link: "https://your-demo-link.com",
    description: "A comprehensive financial tracking dashboard built for modern startups. Features include real-time data visualization, multi-currency support, and automated reporting.",
    tags: ["Next.js 14", "Tailwind CSS", "Recharts", "Prisma"],
    challenge: "The main challenge was handling high-frequency data updates without sacrificing performance on mobile devices.",
    solution: "Implemented React Server Components and optimized data fetching with SWR to ensure a 99/100 Lighthouse score."
  },
  {
    title: "E-commerce App",
    category: "Full Stack",
    image: "/image/project2.png",
    link: "#",
    description: "A high-conversion fashion marketplace with integrated payments and inventory management.",
    tags: ["TypeScript", "Stripe", "MongoDB", "Node.js"],
    challenge: "Managing complex state for product variants (size/color) and synchronized cart logic.",
    solution: "Used Zustand for lightweight state management and integrated Stripe Webhooks for secure payment processing."
  },
  {
    title: "AI Interface",
    category: "UI/UX Design",
    image: "/image/project3.PNG",
    link: "#",
    description: "A minimalist chat interface designed for a custom LLM model, focusing on readability and prompt engineering efficiency.",
    tags: ["Figma", "React", "OpenAI API", "Framer Motion"],
    challenge: "Creating an AI interaction that felt human and responsive while hiding API latency.",
    solution: "Designed custom streaming animations and skeleton loaders that match the AI's generation speed."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0f172a] relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Featured Work</h2>
            <p className="text-slate-400">A collection of projects that define my journey.</p>
          </div>
          <button className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
            View All Projects →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mt-3 line-clamp-2">{project.description}</p>
                <div className="inline-block mt-4 text-sm font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                  View Case Study ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CASE STUDY MODAL --- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-md bg-slate-950/90 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[90vh] rounded-[2rem] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300 scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-64 md:h-80 w-full">
              <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-slate-950/50 hover:bg-slate-950 rounded-full text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <div className="p-8 md:p-12 -mt-16 relative z-10">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{selectedProject.category}</span>
              <h3 className="text-4xl font-bold text-white mt-4 mb-6">{selectedProject.title}</h3>
              
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-3">Overview</h4>
                    <p className="text-slate-300 leading-relaxed text-lg">{selectedProject.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-red-400 font-bold text-sm uppercase tracking-widest mb-3">The Challenge</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-3">The Solution</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="bg-slate-800 text-slate-300 px-3 py-1 rounded-md text-xs border border-slate-700">{tag}</span>
                      ))}
                    </div>
                  </div>

                <button 
                    onClick={async () => {
                      // You can set a price per project in your 'projects' array
                      // For now, let's say access costs $49
                      await createCheckoutSession(selectedProject.title, 49);
                    }}
                    className="block w-full py-4 bg-emerald-500 text-white text-center font-bold rounded-xl hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
                  >
                    Unlock Full Access ($49) 🔒
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}