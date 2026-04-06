import Image from "next/image";

const projects = [
  {
    title: "SaaS Dashboard",
    category: "Web Development",
    // Remove "/public" from the path
    image: "/image/project1.png", 
    link: "#"
  },
  {
    title: "E-commerce App",
    category: "Full Stack",
    image: "/image/project2.png",
    link: "#"
  },
  {
    title: "AI Interface",
    category: "UI/UX Design",
    image: "/image/project3.PNG",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-slate-400">A collection of projects that define my journey.</p>
          </div>
          <button className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
            View All Projects →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 transition-all hover:border-blue-500/50">
              <div className="aspect-video relative overflow-hidden bg-slate-800">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                
                {/* Corrected Image Component */}
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                <a href={project.link} className="inline-block mt-4 text-sm font-semibold text-slate-300 hover:text-white">
                  View Case Study ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}