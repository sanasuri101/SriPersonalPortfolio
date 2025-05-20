
import { Code, Shield, Database, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { skills, services, personalInfo } from "@/data/resumeData";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding px-6 lg:px-12 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                {personalInfo.summary} I am seeking to leverage my expertise in AI, machine learning, 
                and business development to drive growth and innovation.
              </p>
              
              <p>
                My technical approach combines cybersecurity fundamentals with cutting-edge AI methodologies. 
                I've successfully migrated enterprise-scale applications and implemented security solutions 
                for Fortune 100 companies. My work across identity management, cloud infrastructure, and data 
                analytics demonstrates my versatile technical skillset.
              </p>
              
              <p>
                When I'm not coding or implementing security solutions, I'm exploring the latest 
                advancements in machine learning, contributing to research projects, or optimizing 
                systems for better performance and security.
              </p>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-display font-bold mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-display font-bold mb-8">
              My <span className="text-gradient">Services</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="glassmorphism border-white/10">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-portfolio-500/10 mb-4">
                      {index === 0 && <Shield className="h-6 w-6" />}
                      {index === 1 && <Code className="h-6 w-6" />}
                      {index === 2 && <Cpu className="h-6 w-6" />}
                      {index === 3 && <Database className="h-6 w-6" />}
                    </div>
                    
                    <h4 className="text-xl font-display font-medium mb-2">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
