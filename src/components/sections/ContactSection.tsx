import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/resumeData";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EmailTemplateParams } from "@/lib/emailjs";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: personalInfo.email,
    link: `mailto:${personalInfo.email}`
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    value: "+1 (510) 557-9082",
    link: "tel:+15105579082"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Location",
    value: personalInfo.location,
    link: "https://maps.google.com"
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message,
        to_email: personalInfo.email,
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Interested in working together? Feel free to reach out through the form below or
            directly via email or phone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-secondary/50 border-white/10"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="bg-secondary/50 border-white/10"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    className="bg-secondary/50 border-white/10"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    required
                    className="bg-secondary/50 border-white/10 resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="flex items-start gap-4 hover:text-portfolio-400 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full flex items-center justify-center bg-portfolio-500/10 text-portfolio-500 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <h4 className="text-xl font-display font-medium mb-4">Let's Collaborate</h4>
                <p className="text-muted-foreground">
                  I'm open to discussing projects, creative collaborations, 
                  or opportunities in cybersecurity, machine learning, and software engineering.
                  If you have a project in mind, don't hesitate to reach out!
                </p>
                
                <div className="mt-6 flex gap-4">
                  <a 
                    href={personalInfo.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-muted/30 hover:bg-portfolio-500/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={personalInfo.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-muted/30 hover:bg-portfolio-500/20 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-muted/30 hover:bg-portfolio-500/20 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
