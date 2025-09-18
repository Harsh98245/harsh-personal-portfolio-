import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Building the future, one line of code at a time.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="gradient-text">Harsh Khandelwal</span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">
              {displayText}<span className="animate-glow">|</span>
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              It all began with curiosity—a fascination for data, code, and the endless possibilities of technology. 
              Late nights debugging, small victories, big lessons—every project taught me patience, creativity, and resilience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This website is my canvas to share my journey: the projects, the challenges, the breakthroughs, 
              and the impact I strive to create. Here, ideas meet action, and learning becomes building.
            </p>
            <p className="text-lg text-primary-glow leading-relaxed">
              Join me as I explore, create, and grow—because the journey of building something meaningful 
              is where the real magic happens.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-primary hover:glow-primary group">
              <span className="mr-2">Explore My Work</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="neon-border hover:glow-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="neon-border hover:glow-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="neon-border hover:glow-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary animate-glow" />
      </div>
    </section>
  );
};

export default HeroSection;