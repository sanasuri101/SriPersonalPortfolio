
import { Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene from "./HeroScene";
import { personalInfo } from "@/data/resumeData";

export default function HeroSection() {
  return <section id="home" className="min-h-screen pt-24 lg:pt-28 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-portfolio-900 text-portfolio-200 border border-portfolio-800">
                <Briefcase size={16} />
                <span className="text-sm font-medium">{personalInfo.title}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold leading-tight">
                Securing Digital <span className="text-gradient">Environments</span> with AI
              </h1>
              
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                Specialized in identity management, security solutions, and machine learning applications
                that merge enterprise security needs with innovative AI approaches.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <a href="/resume.pdf" download className="flex items-center gap-2">
                    <Download size={16} />
                    Download Resume
                  </a>
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-3xl font-display font-bold">2+</p>
                  <p className="text-muted-foreground text-sm mt-1">Years of Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold">20+</p>
                  <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold">10+</p>
                  <p className="text-muted-foreground text-sm mt-1">Enterprise Clients</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="hero-gradient absolute inset-0"></div>
            <HeroScene />
          </div>
        </div>
      </div>
    </section>;
}
