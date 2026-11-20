import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, Linkedin, Mail, BarChart3, Brain, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import dataScienceBg from '@/assets/data-science-bg.jpg';

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
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${dataScienceBg})` }}
      ></div>
      <div className="absolute inset-0 neural-bg opacity-20"></div>
      
      {/* Floating data elements */}
      <div className="absolute top-20 left-10 opacity-40">
        <BarChart3 className="w-8 h-8 text-chart-1 animate-float" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-40 right-20 opacity-40">
        <Brain className="w-10 h-10 text-chart-2 animate-float" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute bottom-32 left-16 opacity-40">
        <TrendingUp className="w-6 h-6 text-chart-3 animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Mathematical equations */}
      <div className="absolute top-1/4 left-1/4 equation opacity-30 animate-float" style={{ animationDelay: '1s' }}>
        f(x) = Σ(wi*xi)
      </div>
      <div className="absolute bottom-1/4 right-1/4 equation opacity-30 animate-float" style={{ animationDelay: '3s' }}>
        ∇J(θ) = α∇θ
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-8xl font-poppins font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-data block md:inline">
                  Harsh Khandelwal
                </span>
              </h1>
              <p className="text-2xl md:text-4xl font-inter font-light text-muted-foreground leading-relaxed">
                <span className="gradient-analytics">Turning Data into Intelligent Solutions</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6 text-xl md:text-2xl text-muted-foreground leading-relaxed font-inter font-light">
              <p>
                It all began with curiosity, a fascination with data, code, and the endless possibilities of technology. Through late nights of debugging, moments of small victories, and lessons from setbacks, every project has taught me patience, creativity, and resilience.
              </p>
              <p>
                This website is my canvas to share that journey: the projects I have built, the challenges I have faced, the breakthroughs I have celebrated, and the impact I aspire to create. It is a space where ideas turn into action and learning transforms into building.
              </p>
              <p>
                Join me as I continue to explore, create, and grow, because the journey of building something meaningful is where the real magic happens.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="group bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-medium data-card"
            >
              View My Portfolio
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="data-card border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                <a href="https://github.com/Harsh98245" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="data-card border-secondary/20 hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300 hover:scale-105"
              >
                <a href="https://www.linkedin.com/in/harsh-khandelwal-993212295/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="data-card border-accent/20 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 hover:scale-105"
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
