
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Briefcase, GraduationCap, Code, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { experiences, education, skills, personalInfo } from "@/data/resumeData";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 mb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-4">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2">{personalInfo.name}</h1>
              <p className="text-xl text-muted-foreground">{personalInfo.title}</p>
            </div>
            <Button className="flex items-center gap-2">
              <Download size={16} />
              Download PDF Resume
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="glassmorphism border-white/10 col-span-2">
              <CardContent className="p-6">
                <h2 className="text-xl font-display font-bold mb-4">Professional Summary</h2>
                <p className="text-muted-foreground">{personalInfo.summary}</p>
              </CardContent>
            </Card>

            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <h2 className="text-xl font-display font-bold mb-4">Personal Details</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-portfolio-500/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-500">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span className="text-muted-foreground">N/A (Contact form)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-portfolio-500/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-500">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{personalInfo.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-portfolio-500/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-500">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{personalInfo.location}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-portfolio-500/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-500">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-portfolio-400 hover:text-portfolio-300 transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-portfolio-500/10">
                <Briefcase className="text-portfolio-500 h-5 w-5" />
              </div>
              <h2 className="text-2xl font-display font-bold">Work Experience</h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="glassmorphism border-white/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-display font-bold">{exp.position}</h3>
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

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-portfolio-500/10">
                <GraduationCap className="text-portfolio-500 h-5 w-5" />
              </div>
              <h2 className="text-2xl font-display font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="glassmorphism border-white/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-display font-bold">{edu.degree}</h3>
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
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-portfolio-500/10">
                <Code className="text-portfolio-500 h-5 w-5" />
              </div>
              <h2 className="text-2xl font-display font-bold">Technical Skills</h2>
            </div>

            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-portfolio-900/50 text-portfolio-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
