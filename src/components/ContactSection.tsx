import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to build something amazing together? I'm always excited to discuss new opportunities and collaborate on innovative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project idea, want to discuss technology, or just say hello, 
                I'd love to hear from you. Let's turn ideas into reality.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="glass neon-border hover-lift group cursor-pointer">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 rounded-lg bg-gradient-primary glow-primary">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:gradient-text transition-all">Email</p>
                    <p className="text-muted-foreground">harshkhandelwal129@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass neon-border hover-lift group cursor-pointer">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 rounded-lg bg-gradient-secondary glow-secondary">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:gradient-text transition-all">Phone</p>
                    <p className="text-muted-foreground">437-973-2403</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass neon-border hover-lift group cursor-pointer">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 rounded-lg bg-accent/20 glow-accent">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:gradient-text transition-all">Location</p>
                    <p className="text-muted-foreground">Toronto, ON</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-primary hover:glow-primary flex-1">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button size="lg" className="bg-gradient-secondary hover:glow-secondary flex-1">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass neon-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" className="glass" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" className="glass" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john.doe@example.com" className="glass" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Project Collaboration" className="glass" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or just say hello!" 
                  rows={6}
                  className="glass resize-none"
                />
              </div>
              
              <Button size="lg" className="w-full bg-gradient-primary hover:glow-primary">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;