import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Hi, I'm <span className="text-primary">Harsh Khandelwal</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer & ML Enthusiast
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about building innovative solutions with modern technologies. 
              I specialize in full-stack development and machine learning, creating applications that make a real impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From web applications to AI-powered systems, I love turning complex problems into elegant solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:contact@example.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;