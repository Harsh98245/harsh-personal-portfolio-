import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Code, Database } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 star-field"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <Code className="w-6 h-6 text-primary animate-float" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-40 right-20 opacity-30">
        <Database className="w-8 h-8 text-secondary animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute bottom-32 left-16 opacity-30">
        <Sparkles className="w-5 h-5 text-accent animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-primary/20 text-primary animate-pulse-glow">
              Available for opportunities
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-8xl font-poppins font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text block md:inline">
                  Harsh Khandelwal
                </span>
              </h1>
              <p className="text-2xl md:text-4xl font-inter font-light text-muted-foreground leading-relaxed">
                Full Stack Developer & <span className="gradient-cosmic">ML Enthusiast</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-inter font-light">
              Passionate about building <span className="text-primary font-medium">innovative solutions</span> with modern technologies.
              I specialize in <span className="text-secondary font-medium">full-stack development</span> and{' '}
              <span className="text-accent font-medium">machine learning</span>, creating applications that make a real impact.
            </p>
          </div>

          {/* Action buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-medium"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="glass border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="glass border-border/50 hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 hover:scale-105"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="glass border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:scale-105"
              >
                <a href="mailto:harshkhandelwal129@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col items-center gap-2 text-muted-foreground animate-float">
              <span className="text-sm font-inter">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;