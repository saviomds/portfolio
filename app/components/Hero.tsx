import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative py-20 px-6 overflow-hidden">
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
           <a 
              href="#contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all text-center"
            >
              View Portfolio
            </a>
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
            <div className="absolute -bottom-6 -left-6 z-20 bg-slate-900/90 backdrop-blur border border-slate-700 p-6 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-xs uppercase tracking-tighter text-slate-500 font-bold">Years of<br/>Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}