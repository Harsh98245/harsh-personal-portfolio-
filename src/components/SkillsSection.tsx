import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  BarChart3, 
  Wrench,
  GraduationCap,
  Briefcase,
  ExternalLink
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "C++", "JavaScript", "SQL", "HTML/CSS"],
    color: "text-primary"
  },
  {
    title: "Data & ML",
    icon: Brain,
    skills: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "TensorFlow"],
    color: "text-secondary"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MS SQL", "Vector DBs"],
    color: "text-accent"
  },
  {
    title: "Tools & Cloud",
    icon: Cloud,
    skills: ["Docker", "AWS", "Git", "Jupyter", "VS Code"],
    color: "text-primary-glow"
  },
  {
    title: "Frameworks",
    icon: Wrench,
    skills: ["Flask", "FastAPI", "Streamlit", "LangChain", "Hugging Face"],
    color: "text-secondary"
  },
  {
    title: "Analytics",
    icon: BarChart3,
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Excel"],
    color: "text-accent"
  }
];

const experience = {
  education: {
    title: "York University",
    subtitle: "Bachelor of Science (Honours) in Computer Science",
    period: "2022 - 2026",
    gpa: "CGPA: 3.33/4.0",
    courses: [
      "Cyber Security", "Data Structures", "Computer Organization", 
      "Database Management", "Operating Systems", "Theory of Computation"
    ]
  },
  workExperiences: [
    {
      title: "Artificial Intelligence Club at York University",
      subtitle: "Artificial Intelligence Researcher",
      period: "Sept 2024 - Present",
      achievements: [
        "Collaborated with peers to develop data-driven and AI-powered solutions addressing real-world challenges (Current Project: IntelliAgent - an AI knowledge assistant)",
        "Designed and prototyped machine learning models and chat-based systems, contributing to innovative project outcomes",
        "Participated in coding workshops and collaborative sessions to enhance AI proficiency and promote technical knowledge sharing within the club"
      ]
    },
    {
      title: "Paperchase Business Services Ltd.",
      subtitle: "Data Analyst Intern",
      period: "May 2024 - Aug 2024",
      achievements: [
        "Reduced manual reporting effort by 30% with ETL workflows",
        "Designed interactive dashboards for real-time KPI tracking",
        "Cleaned and transformed large datasets using Python and SQL"
      ]
    }
  ]
};

const SkillsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit spanning machine learning, data analysis, and full-stack development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="glass hover-lift neon-border group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <category.icon className={`w-6 h-6 ${category.color} group-hover:animate-glow`} />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="glass neon-border hover-lift">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl">Education</CardTitle>
              </div>
              <CardTitle className="text-2xl gradient-text">
                {experience.education.title}
              </CardTitle>
              <CardDescription className="text-base">
                {experience.education.subtitle}
              </CardDescription>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{experience.education.period}</span>
                <span className="text-accent">{experience.education.gpa}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Relevant Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {experience.education.courses.map((course) => (
                    <Badge key={course} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Experiences */}
          <div className="space-y-8">
            {experience.workExperiences.map((work, index) => (
              <Card key={index} className="glass neon-border hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-6 h-6 text-secondary" />
                    <CardTitle className="text-xl">Experience</CardTitle>
                  </div>
                  <CardTitle className="text-2xl gradient-text">
                    {work.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {work.subtitle}
                  </CardDescription>
                  <div className="text-sm text-muted-foreground">
                    {work.period}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {work.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.coursera.org/account/accomplishments/verify/PQZVLQ2Y7N23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Badge variant="outline" className="px-4 py-2 text-sm">
                🎓 Machine Learning Specialization
              </Badge>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              🧠 Deep Learning Specialization (ongoing)
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;