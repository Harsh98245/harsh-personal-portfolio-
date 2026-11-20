import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Home, FolderOpen, Code, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Blog', href: '#blog', icon: Code },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="glass border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 glass-strong border-border/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-foreground">Navigation</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start text-left hover:bg-muted transition-colors"
                onClick={() => scrollToSection(item.href)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span className="text-base">{item.name}</span>
              </Button>
            ))}
          </div>
          
          <div className="absolute bottom-8 left-6 right-6">
            <div className="text-center border-t border-border pt-4">
              <p className="text-sm text-muted-foreground mb-1">
                Harsh Khandelwal
              </p>
              <p className="text-xs text-muted-foreground">
                Data Scientist & Analyst
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navigation;