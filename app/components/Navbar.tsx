import Image from "next/image";

export default function Navbar() {
  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center overflow-hidden group-hover:rotate-12 transition-transform duration-300">
            {/* 1. Removed "/public" from path 
               2. Added width/height for optimization
               3. Added object-contain to ensure the logo fits nicely
            */}
            <Image 
              src="/image/logo.png" 
              alt="SAVIOMDS Logo" 
              width={32} 
              height={32}
              className="object-contain"
              priority // Loads the logo immediately
            />      
          </div>
          <span className="text-xl font-bold text-white tracking-tighter transition-colors group-hover:text-blue-400">
            SAVIOMDS
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-full transition-all"
            >
              {item}
            </a>
          ))}
          
          {/* Vertical Divider */}
          <div className="h-6 w-[1px] bg-slate-800 mx-4"></div>
          
          {/* Functional Hire Me Button */}
          <a 
            href="#contact" 
            className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-lg shadow-white/5"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-slate-400 hover:text-white transition-colors p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
}