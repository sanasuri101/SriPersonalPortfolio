
import { Layers3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glassmorphism border-t border-white/5 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center gap-2">
              <Layers3 size={20} className="text-portfolio-500" />
              <span className="text-lg font-display font-bold text-gradient">Portfolio</span>
            </a>
            <p className="text-muted-foreground mt-2 text-sm">
              Bringing designs to life through 3D innovation.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-display font-medium mb-3">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-muted-foreground hover:text-foreground">Home</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="#experience" className="text-muted-foreground hover:text-foreground">Experience</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-foreground">Projects</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-medium mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">LinkedIn</a></li>
                <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">GitHub</a></li>
                <li><a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Dribbble</a></li>
                <li><a href="https://behance.net/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Behance</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-6 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
