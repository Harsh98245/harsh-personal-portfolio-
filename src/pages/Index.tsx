import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground">
            Built with ❤️ using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            © 2024 Harsh Khandelwal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
