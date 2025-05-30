
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers3, ExternalLink } from "lucide-react";
import ProjectScene from "./ProjectScene";
import { personalInfo } from "@/data/resumeData";

const projectCategories = ["All", "Artificial Intelligence", "Machine Learning", "Full Stack Development",];

const projects = [
  {
    id: 1,
    title: "Raven's Progressive Matrices Solver",
    category: "Artificial Intelligence",
    image: "/placeholder.svg",
    color: "#7b6aed",
    tags: ["IoT", "Hardware", "UI/UX"],
    description: "Solving RPM problems with AI and Computer Vision techniques.",
    link: "https://github.com/sanasuri101/RavensProgressiveMatrices"
  },
  {
    id: 2,
    title: "Fiverr Spammer Predictor",
    category: "Machine Learning",
    image: "/placeholder.svg",
    color: "#60a5fa",
    tags: ["Consumer Electronics", "Ergonomics"],
    description: "Look at the steps a new user takes on Fiverr and predict which will become spammers.",
    link: "https://github.com/sanasuri101/Fiverr-Spammer-XGBOOST"
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    category: "Full Stack Development",
    image: "/placeholder.svg",
    color: "#c084fc",
    tags: ["Automotive", "Interface", "Dashboard"],
    description: "The entire code and design for sriramxai.com.",
    link: "https://github.com/sanasuri101/SriPersonalPortfolio"
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding px-6 lg:px-12 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-portfolio-900 text-portfolio-200 border border-portfolio-800">
            <Layers3 size={16} />
            <span className="text-sm font-medium">Portfolio</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-display font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Explore my most recent work showcasing my design process, creative problem solving, and attention to detail.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glassmorphism overflow-hidden border-white/10">
              <div className="bg-gradient-to-br from-portfolio-900/50 to-background p-4">
                <ProjectScene color={project.color} />
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-display font-medium">{project.title}</h3>
                  {project.link ? (
                    <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink size={16} />
                    </Button>
                  )}
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-portfolio-500/10 text-portfolio-300 border-portfolio-500/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button className="rounded-full px-8" asChild>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
