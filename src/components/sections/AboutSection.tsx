
import { Wand, Layers3, View, Design } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  "3D Modeling",
  "Product Design",
  "UI/UX Design",
  "CAD",
  "Prototyping",
  "User Research",
  "Rendering",
  "Animation",
  "Material Design",
  "Blender",
  "Cinema 4D",
  "SolidWorks",
  "Rhino",
  "Figma",
  "Adobe Suite"
];

const services = [
  {
    icon: <Design className="h-6 w-6" />,
    title: "Product Design",
    description: "End-to-end product design with a focus on usability, aesthetics, and manufacturability."
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: "3D Modeling",
    description: "High quality 3D models with clean topology and proper scale for visualization or production."
  },
  {
    icon: <View className="h-6 w-6" />,
    title: "Visualization",
    description: "Photorealistic renderings and animations to showcase products in context."
  },
  {
    icon: <Wand className="h-6 w-6" />,
    title: "Prototyping",
    description: "Functional prototypes to validate design concepts and test user interaction."
  }
];

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
                I'm a passionate 3D Product Designer with a keen eye for detail and a commitment to creating 
                designs that are both aesthetically pleasing and functional. With over 3 years of experience, 
                I've worked with a variety of clients from startups to established brands.
              </p>
              
              <p>
                My design process starts with understanding the user's needs and the business goals. 
                I believe that good design should solve real problems and create emotional connections 
                with users. I'm constantly exploring new tools and techniques to push the boundaries 
                of what's possible in 3D design.
              </p>
              
              <p>
                When I'm not designing, you can find me exploring new design trends, experimenting 
                with new technologies, or sharing my knowledge through articles and tutorials.
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
                      {service.icon}
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
