const services = [
  { name: 'Web Dev', price: '1,500', icon: '💻', features: ['Responsive Design', 'SEO Optimized', 'API Integration'] },
  { name: 'Full SaaS', price: '4,500', icon: '🚀', features: ['Auth Systems', 'Database Architecture', 'Cloud Deployment'], popular: true },
  { name: 'UI/UX Audit', price: '800', icon: '🎨', features: ['Accessibility Check', 'Performance Review', 'Design System'] }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Service Solutions</h2>
        <p className="text-slate-400">Tailored packages for growing businesses</p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.name} className={`relative p-8 rounded-3xl border ${service.popular ? 'border-blue-500 bg-blue-500/5' : 'border-slate-800 bg-slate-900'} transition-transform hover:-translate-y-2`}>
            {service.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Most Popular</span>}
            <div className="text-4xl mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold text-white">{service.name}</h3>
            <div className="my-6">
              <span className="text-4xl font-black text-white">${service.price}</span>
              <span className="text-slate-500">/project</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm">
              {service.features.map(f => <li key={f} className="flex items-center gap-2 text-slate-400 font-medium">✅ {f}</li>)}
            </ul>
            <button className={`w-full py-4 rounded-xl font-bold transition-colors ${service.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}