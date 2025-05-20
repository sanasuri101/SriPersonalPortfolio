import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Layers3, Menu, X } from "lucide-react";
const navLinks = [{
  name: "Home",
  href: "#home"
}, {
  name: "About",
  href: "#about"
}, {
  name: "Experience",
  href: "#experience"
}, {
  name: "Projects",
  href: "#projects"
}, {
  name: "Contact",
  href: "#contact"
}];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <header className={cn("fixed top-0 w-full z-50 transition-all duration-300 px-6 lg:px-12", scrolled ? "py-4 glassmorphism backdrop-blur-lg" : "py-6 bg-transparent")}>
      <div className="container flex justify-between items-center">
        <a href="#home" className="text-xl font-display font-bold flex items-center gap-2">
          <Layers3 size={24} className="text-portfolio-500" />
          <span className="text-gradient">Sriram Anasuri</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => <a key={link.name} href={link.href} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.name}
            </a>)}
          <Button className="ml-4">Resume</Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <nav className="md:hidden glassmorphism mt-4 p-4 rounded-lg animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map(link => <a key={link.name} href={link.href} className="px-4 py-3 text-sm font-medium hover:bg-muted/20 rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>)}
            <Button className="mt-2 w-full">Resume</Button>
          </div>
        </nav>}
    </header>;
}