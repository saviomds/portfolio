"use client";

import { useState } from "react";

const allServices = [
  { 
    id: 'web', 
    name: 'Web Development', 
    price: '1,500', 
    icon: '💻', 
    shortDesc: 'High-performance websites built with Next.js.',
    longDesc: 'Complete end-to-end web development focusing on speed and conversion. We handle everything from the initial architecture to the final deployment on lightning-fast servers.',
    features: ['Responsive Design', 'SEO Optimized', 'API Integration', 'Speed Optimization', 'CMS Integration'],
    timeline: '2-4 Weeks'
  },
  { 
    id: 'saas', 
    name: 'Full SaaS Platform', 
    price: '4,500', 
    icon: '🚀', 
    shortDesc: 'Scalable software solutions for your business.',
    longDesc: 'A full-scale software-as-a-service build-out. Perfect for startups looking to launch a robust product with user management, payments, and complex data handling.',
    features: ['Auth Systems', 'Database Architecture', 'Cloud Deployment', 'Stripe Integration', 'Admin Dashboard'],
    popular: true,
    timeline: '6-10 Weeks'
  },
  { 
    id: 'design', 
    name: 'UI/UX Audit', 
    price: '800', 
    icon: '🎨', 
    shortDesc: 'Expert review to boost your user retention.',
    longDesc: 'A deep-dive analysis of your current product. We identify friction points in your user journey and provide a complete Figma redesign for key pages.',
    features: ['Accessibility Check', 'Performance Review', 'Design System', 'User Flow Mapping', 'Figma Source Files'],
    timeline: '1 Week'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof allServices[0] | null>(null);

  const handleBookPlan = (serviceId: string) => {
    setSelectedService(null); // Close modal
    const contactSection = document.getElementById('contact');
    const selectElement = document.querySelector('select[name="projectType"]') as HTMLSelectElement;

    if (selectElement) {
      selectElement.value = serviceId;
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    }
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 px-6 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Service Solutions</h2>
        <p className="text-slate-400 text-lg">Detailed packages for serious growth</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {allServices.map((service) => (
          <div key={service.id} className={`group relative p-8 rounded-3xl border transition-all duration-500 hover:border-blue-500/50 ${service.popular ? 'border-blue-500 bg-blue-500/5' : 'border-slate-800 bg-slate-900/50'}`}>
            <div className="text-4xl mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
            <p className="text-slate-400 text-sm mb-6">{service.shortDesc}</p>
            
            <div className="mb-8">
              <span className="text-3xl font-black text-white">${service.price}</span>
              <span className="text-slate-500 text-sm">/start</span>
            </div>

            <button 
              onClick={() => setSelectedService(service)}
              className="w-full py-3 rounded-xl border border-slate-700 text-white font-semibold hover:bg-white hover:text-slate-950 transition-all mb-3"
            >
              View Full Details
            </button>
          </div>
        ))}
      </div>

      {/* --- SERVICE MODAL --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-slate-950/80 animate-in fade-in duration-300">
          <div 
            className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl">
                  {selectedService.icon}
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">{selectedService.name}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">{selectedService.longDesc}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">What{`'`}s Included</h4>
                  <ul className="space-y-3">
                    {selectedService.features.map(f => (
                      <li key={f} className="text-slate-300 text-sm flex items-center gap-2">
                        <span className="text-blue-500">✦</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                  <h4 className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-2">Estimated Timeline</h4>
                  <p className="text-white font-bold text-xl">{selectedService.timeline}</p>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <p className="text-slate-500 text-xs">Investment</p>
                    <p className="text-white font-black text-2xl">${selectedService.price}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => handleBookPlan(selectedService.id)}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]"
              >
                Book this Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}