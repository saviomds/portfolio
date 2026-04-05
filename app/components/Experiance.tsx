"use client";

import { useState } from "react";

const allExperiences = [
  {
    date: "2023 — Present",
    role: "Senior Front-End Developer",
    description: "Leading the development of a flagship SaaS platform. Improved performance scores by 40% and mentored a team of 5 junior developers in React best practices.",
    tags: ["React", "Redux", "AWS"],
    color: "blue"
  },
  {
    date: "2021 — 2022",
    role: "UI/UX Designer",
    description: "Focused on user-centric design for mobile-first applications, creating high-fidelity prototypes and conducting user testing for fintech startups.",
    tags: ["Figma", "Tailwind", "Next.js"],
    color: "purple"
  },
  // --- NEW ITEMS HIDDEN BY DEFAULT ---
  {
    date: "2020 — 2021",
    role: "Junior Web Developer",
    description: "Developed and maintained responsive websites for local businesses in Mauritius. Specialized in converting PSD designs to clean, semantic HTML/CSS.",
    tags: ["JavaScript", "Sass", "PHP"],
    color: "emerald"
  },
  {
    date: "2019 — 2020",
    role: "Freelance Graphic Designer",
    description: "Collaborated with marketing agencies to deliver brand identities, social media assets, and vector illustrations.",
    tags: ["Illustrator", "Photoshop"],
    color: "orange"
  }
];

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  // Decide how many items to show initially (e.g., first 2)
  const visibleExperiences = showAll ? allExperiences : allExperiences.slice(0, 2);

  return (
    <section id="about" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          Professional Journey <div className="h-[1px] flex-1 bg-slate-800"></div>
        </h2>

        <div className="grid md:grid-cols-12 gap-6 transition-all duration-700 ease-in-out">
          {visibleExperiences.map((exp, index) => (
            <div 
              key={index} 
              className={`${
                index === 0 ? 'md:col-span-8' : 'md:col-span-4'
              } p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group animate-in fade-in slide-in-from-bottom-4 duration-500`}
            >
              <span className="text-blue-500 font-mono text-sm">{exp.date}</span>
              <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">
                {exp.role}
              </h3>
              <p className="text-slate-400 mt-4 leading-relaxed line-clamp-3 group-hover:line-clamp-none">
                {exp.description}
              </p>
              
              {exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-md bg-slate-800/50 text-slate-300 text-xs font-semibold border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More / Show Less Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-blue-400 font-bold rounded-full border border-slate-800 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl"
          >
            <span>{showAll ? "Show Less History" : "Read More History"}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-y-1'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}