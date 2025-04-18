
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold">G.Narendar Reddy</h1>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" onClick={() => handleScroll("about")}>About</Button>
            <Button variant="ghost" onClick={() => handleScroll("education")}>Education</Button>
            <Button variant="ghost" onClick={() => handleScroll("skills")}>Skills</Button>
            <Button variant="ghost" onClick={() => handleScroll("projects")}>Projects</Button>
          </div>
          <div className="flex items-center space-x-2">
            <a href="https://github.com/narendarreddy7676" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/narendhar-reddy-211b69328" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:sidhu007766@gmail.com">
              <Button size="icon" variant="ghost">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <a href="tel:9666965703">
              <Button size="icon" variant="ghost">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
