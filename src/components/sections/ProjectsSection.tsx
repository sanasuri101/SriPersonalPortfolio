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
    category: "Product Design",
    image: "/placeholder.svg",
    color: "#7b6aed",
    tags: ["IoT", "Hardware", "UI/UX"],
    description: "Solving RPM problems with AI and Computer Vision techniques."
  },
  {
    id: 2,
    title: "Wireless Earbuds",
    category: "Product Design",
    image: "/placeholder.svg",
    color: "#60a5fa",
    tags: ["Consumer Electronics", "Ergonomics"],
    description: "Ergonomic wireless earbuds designed for comfort during extended wear while maintaining superior sound quality."
  },
  {
    id: 3,
    title: "Electric Vehicle Dashboard",
    category: "UI/UX",
    image: "/placeholder.svg",
    color: "#c084fc",
    tags: ["Automotive", "Interface", "Dashboard"],
    description: "A modern, intuitive dashboard UI for electric vehicles focusing on essential information and user experience."
  },
  {
    id: 4,
    title: "Modular Furniture System",
    category: "3D Modeling",
    image: "/placeholder.svg",
    color: "#34d399",
    tags: ["Furniture", "Modular", "Sustainable"],
    description: "A versatile modular furniture system designed for small living spaces with sustainability in mind."
  },
  {
    id: 5,
    title: "Futuristic Drone Concept",
    category: "Concept Art",
    image: "/placeholder.svg",
    color: "#f472b6",
    tags: ["Drone", "Concept", "Futuristic"],
    description: "Conceptual design for a next-generation delivery drone with improved aerodynamics and battery efficiency."
  },
  {
    id: 6,
    title: "Portable Water Purifier",
    category: "Product Design",
    image: "/placeholder.svg",
    color: "#fbbf24",
    tags: ["Sustainability", "Utility", "Portable"],
    description: "Compact water purifier designed for outdoor adventures and emergency situations."
  }
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
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink size={16} />
                  </Button>
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
