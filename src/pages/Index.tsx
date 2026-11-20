import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      
      <main className="space-y-0">
        <section id="hero">
          <HeroSection />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
          <div className="relative">
            <ProjectsSection />
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
          <div className="relative">
            <SkillsSection />
          </div>
        </section>
        
        {/* Blog Section */}
        <section id="blog" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background"></div>
          <div className="relative">
            <BlogSection />
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
          <div className="relative">
            <ContactSection />
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="relative border-t border-border/50 bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-poppins font-bold gradient-text">
                Harsh Khandelwal
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Building the future with code, data, and innovation. 
                Always learning, always creating.
              </p>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Harsh98245" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/harsh-khandelwal-993212295/" className="text-muted-foreground hover:text-secondary transition-colors">
                LinkedIn
              </a>
              <a href="mailto:harshkhandelwal129@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                Email
              </a>
            </div>
            
            <div className="pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                Built with React, TypeScript & Tailwind CSS
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                © 2024 Harsh Khandelwal. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
