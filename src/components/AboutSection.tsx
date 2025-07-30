import { Figma, Monitor, Palette, Smartphone, Zap } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: <Monitor size={24} />, name: 'Web Design', description: 'Responsive websites & web apps' },
    { icon: <Smartphone size={24} />, name: 'Mobile UI', description: 'iOS & Android app interfaces' },
    { icon: <Palette size={24} />, name: 'Landing Pages', description: 'High-converting designs' },
    { icon: <Figma size={24} />, name: 'Figma', description: 'Design systems & prototyping' },
    { icon: <Zap size={24} />, name: 'Prototyping', description: 'Interactive user flows' },
  ];

  return (
    <section id="about" className="portfolio-section bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="portfolio-heading">About Me</h2>
            <p className="portfolio-text max-w-3xl mx-auto">
              I'm a passionate UI/UX designer with over 3 years of experience creating intuitive and visually 
              appealing digital experiences. I believe great design happens when user needs meet business goals, 
              and I'm dedicated to finding that perfect balance in every project I work on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="portfolio-card text-center group">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Experience Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="portfolio-card">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="portfolio-card">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="portfolio-card">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;