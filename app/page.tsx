import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experiance";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects"; 

export default function Home() {
  return (
    <div className="pt-24"> 
      <Hero />
      <Projects />
      <Experience />
      <Services />
      <Contact />
    </div>
  );
}