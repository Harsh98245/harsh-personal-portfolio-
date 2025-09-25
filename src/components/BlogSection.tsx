import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    title: "My Lessons from a Data Analyst Internship",
    excerpt: "Reflecting on 4 months of real-world data analysis experience at Paperchase Business Services, where I reduced manual reporting by 30% and learned the importance of data storytelling.",
    date: "2024-08-15",
    readTime: "5 min read",
    category: "Experience",
    tags: ["Data Analysis", "Internship", "Career", "Python", "SQL"],
    gradient: "from-primary to-primary-glow",
    author: "Harsh Khandelwal"
  },
  {
    title: "Why Feature Engineering Can Make or Break Your Model",
    excerpt: "Diving deep into the art and science of feature engineering through my house price prediction project, where strategic feature creation improved model accuracy from 78% to 92%.",
    date: "2024-07-22",
    readTime: "8 min read",
    category: "Machine Learning",
    tags: ["Machine Learning", "Feature Engineering", "Python", "Data Science"],
    gradient: "from-secondary to-secondary-glow",
    author: "Harsh Khandelwal"
  },
  {
    title: "Balancing Web Dev and AI Projects as a Student",
    excerpt: "How I manage learning full-stack development alongside machine learning projects, sharing time management strategies and portfolio building tips for computer science students.",
    date: "2024-06-10",
    readTime: "6 min read",
    category: "Personal",
    tags: ["Web Development", "AI", "Student Life", "Portfolio", "Time Management"],
    gradient: "from-accent to-stellar-orange",
    author: "Harsh Khandelwal"
  }
];

const BlogSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 star-field opacity-30"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="fade-in-up">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 text-primary">
              Latest Insights
            </Badge>
            <h2 className="text-5xl md:text-7xl font-poppins font-bold mb-8">
              Blog & <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sharing my journey through data science, machine learning, and full-stack development. 
              Real experiences, practical insights, and lessons learned along the way.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title} 
              className={`glass hover-lift group cursor-pointer relative overflow-hidden border-border/50 fade-in-up stagger-${index + 1}`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <CardTitle className="text-xl leading-tight group-hover:gradient-text transition-all duration-300">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-border/50 hover:border-primary/50 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs border-border/50">
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <User className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{post.author}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10"
                  >
                    Read
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-up stagger-4">
          <div className="glass-strong rounded-2xl p-12 max-w-2xl mx-auto border border-border/50">
            <h3 className="text-2xl font-poppins font-bold mb-4 gradient-cosmic">
              Want to Stay Updated?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Get notified when I publish new insights about data science, machine learning, 
              and software development. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                Subscribe to Updates
              </Button>
              <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/50">
                View All Posts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;