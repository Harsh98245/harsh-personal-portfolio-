import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="projects" className="py-20">
          <ProjectsSection />
        </section>
        <section id="skills" className="py-20 bg-secondary/30">
          <SkillsSection />
        </section>
        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </main>
      
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Harsh Khandelwal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
