
import { Card, CardContent } from "@/components/ui/card";
import ExperienceScene from "./ExperienceScene";

const experiences = [
  {
    position: "Senior Product Designer",
    company: "TechDesign Studios",
    period: "2023 - Present",
    description: "Lead product designer for consumer electronics and smart home products. Collaborated with engineers and marketing teams to create innovative designs that meet both technical requirements and market demands.",
    technologies: ["Blender", "Fusion 360", "Figma"]
  },
  {
    position: "3D Visualization Specialist",
    company: "VisualCraft Agency",
    period: "2021 - 2023",
    description: "Created high-quality 3D visualizations and animations for product marketing and advertising campaigns. Worked with various clients across industries including furniture, consumer electronics, and automotive.",
    technologies: ["Cinema 4D", "V-Ray", "Adobe After Effects"]
  },
  {
    position: "Junior Product Designer",
    company: "InnovateDesign Co.",
    period: "2020 - 2021",
    description: "Assisted senior designers in conceptualizing and creating product designs. Conducted user research and created prototypes for testing and validation.",
    technologies: ["SolidWorks", "Sketch", "KeyShot"]
  }
];

const education = [
  {
    degree: "Master of Arts in Industrial Design",
    institution: "Design Institute of Technology",
    period: "2018 - 2020",
    description: "Focused on sustainable product design and digital fabrication. Thesis project on smart home interface design."
  },
  {
    degree: "Bachelor of Fine Arts in Product Design",
    institution: "Creative Arts University",
    period: "2014 - 2018",
    description: "Foundation in design principles, materials, manufacturing processes, and digital design tools."
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding px-6 lg:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-center mb-16">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-portfolio-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-500">
                  <path d="M22 10v2a8 8 0 0 1-16 0v-2"></path>
                  <circle cx="14" cy="6" r="3"></circle>
                  <path d="M9 6 H4 m2 0 v4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="glassmorphism border-white/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-display font-medium">{exp.position}</h4>
                        <p className="text-portfolio-400">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-muted/30">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 bg-portfolio-900/50 text-portfolio-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-portfolio-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-500">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>
            
            <div className="space-y-8 mb-8">
              {education.map((edu, index) => (
                <Card key={index} className="glassmorphism border-white/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-display font-medium">{edu.degree}</h4>
                        <p className="text-portfolio-400">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-muted/30">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex-grow mt-auto">
              <ExperienceScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
