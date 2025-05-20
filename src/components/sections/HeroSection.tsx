import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene from "./HeroScene";
export default function HeroSection() {
  return <section id="home" className="min-h-screen pt-24 lg:pt-28 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-portfolio-900 text-portfolio-200 border border-portfolio-800">
                <Briefcase size={16} />
                <span className="text-sm font-medium">Software/Cybersecurity/Machine Learning Engineer</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold leading-tight">
                Turning Ideas into <span className="text-gradient">Interactive</span> Experiences
              </h1>
              
              <p className="mt-6 text-lg text-muted-foreground max-w-lg">
                I specialize in transforming abstract concepts into tangible 3D products 
                that merge form, function and emotion for exceptional user experiences.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8">
                  View Projects
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Download Resume
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-3xl font-display font-bold">3+</p>
                  <p className="text-muted-foreground text-sm mt-1">Years of Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold">20+</p>
                  <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold">15+</p>
                  <p className="text-muted-foreground text-sm mt-1">Satisfied Clients</p>
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