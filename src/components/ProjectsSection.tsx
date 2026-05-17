import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, TrendingUp, Shield, Brain, Car, Heart } from 'lucide-react';

const projects = [
  {
    title: "House Price Prediction",
    description: "ML model predicting Canadian property prices with 92% accuracy using advanced feature engineering and ensemble methods.",
    icon: TrendingUp,
    stats: "1,460+ properties • 92% accuracy • $28k RMSE",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Random Forest"],
    highlights: [
      "Engineered 10+ new features improving R² from 0.78 to 0.923",
      "5-fold cross-validation with 91.8% consistent accuracy",
      "Reduced missing value errors by 100%"
    ],
    gradient: "bg-gradient-primary",
    github: "https://github.com/Harsh98245/-House-Price-Prediction-.git"
  },
  {
    title: "Fraud Detection System",
    description: "End-to-end ML pipeline processing 5,000+ transactions with optimized fraud prevention algorithms.",
    icon: Shield,
    stats: "5,000+ transactions • 0.89 PR-AUC • 0.92 ROC-AUC",
    technologies: ["Python", "XGBoost", "NumPy", "Matplotlib", "Seaborn"],
    highlights: [
      "Reduced false negatives by 20%",
      "Improved model performance by 25% with feature engineering",
      "Calibrated probabilities for imbalanced data"
    ],
    gradient: "bg-gradient-secondary",
    github: "https://frauddetection-enmgq7m5fpvpw6swmbfnfb.streamlit.app/"
  },
  {
    title: "Smart Parking Management",
    description: "End-to-end parking management system using Python and Flask, enabling real-time monitoring of 500+ parking spots across campus.",
    icon: Car,
    stats: "500+ parking spots • 40% reduced search time • Real-time monitoring",
    technologies: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript"],
    highlights: [
      "Real-time monitoring of 500+ campus parking spots",
      "Reduced parking search time by 40% during peak hours",
      "Analytics dashboard for occupancy trends and optimization",
      "Automated user role management for enhanced security"
    ],
    gradient: "bg-gradient-accent",
    github: "https://github.com/Harsh98245/YorkuParkingSystem-.git"
  },
  {
    title: "IntelliAgent",
    description: "AI knowledge assistant using RAG architecture for company-specific information retrieval and summarization.",
    icon: Brain,
    stats: "RAG pipeline • OpenAI embeddings • Vector search",
    technologies: ["Python", "LangChain", "OpenAI API", "Chroma", "FAISS"],
    highlights: [
      "Full RAG pipeline with context-aware responses",
      "Optimized retriever-memory chains",
      "Performance comparison: FAISS vs Chroma"
    ],
    gradient: "bg-primary"
  },
  {
    title: "CareBridge",
    description: "Community care platform built during a hackathon, connecting users with essential services and enabling real-time support.",
    icon: Heart,
    stats: "100+ demo participants • <200ms response time • 40% engagement boost",
    technologies: ["Node.js", "Express.js", "Socket.IO", "EJS", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      "AI-powered chat support with real-time responses under 200ms",
      "Secure donation system with multi-payment support and 100% transparency",
      "Community features boosting engagement by 40% during the event",
      "User registration, blogs, and resource sharing functionality"
    ],
    gradient: "bg-gradient-accent",
    github: "https://github.com/wasayfaizan/ctrl-hack-dev.git"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From machine learning models to AI systems, here are some projects that showcase my journey in building intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`glass hover-lift group neon-border ${project.github ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => project.github && window.open(project.github, '_blank')}
              role={project.github ? 'link' : undefined}
              tabIndex={project.github ? 0 : undefined}
              onKeyDown={(e) => {
                if (project.github && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  window.open(project.github, '_blank');
                }
              }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${project.gradient} glow-primary`}>
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
                
                <div>
                  {project.github ? (
                    <CardTitle 
                      className="text-xl mb-2 group-hover:gradient-text transition-all cursor-pointer hover:underline"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      {project.title}
                    </CardTitle>
                  ) : (
                    <CardTitle className="text-xl mb-2 group-hover:gradient-text transition-all">
                      {project.title}
                    </CardTitle>
                  )}
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </div>

                <div className="text-sm text-accent font-mono">
                  {project.stats}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;