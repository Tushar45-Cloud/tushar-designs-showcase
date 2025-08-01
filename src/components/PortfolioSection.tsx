import { useState } from 'react';
import { ExternalLink, Monitor, Smartphone, Palette } from 'lucide-react';
import portfolioWeb from '@/assets/portfolio-web-1.jpg';
import portfolioMobile from '@/assets/portfolio-mobile-1.jpg';
import portfolioLogos from '@/assets/portfolio-logos-1.jpg';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Monitor size={20} /> },
    { id: 'web', name: 'Web Design', icon: <Monitor size={20} /> },
    { id: 'mobile', name: 'Mobile App UI', icon: <Smartphone size={20} /> },
    { id: 'logos', name: 'Logos', icon: <Palette size={20} /> },
  ];

  const projects = [
    {
      id: 1,
      title: 'Laundry Service Website',
      category: 'web',
      image: portfolioWeb,
      description: 'Modern Website platform with clean UI and seamless user experience',
      tools: ['Figma', 'Prototyping', 'User Research'],
      workLink: "https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=452-156&t=V6aWwByHQK9JBDOc-1"
    },
    {
      id: 2,
      title: 'E-commerce Website',
      category: 'mobile',
      image: portfolioMobile,
      description: 'Intuitive banking app with focus on security and usability',
      tools: ['Mobile UI', 'UX Design', 'Prototyping'],
      workLink: "https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=477-1069&t=V6aWwByHQK9JBDOc-1"
    },
    {
      id: 3,
      title: 'Quiz App',
      category: 'logos',
      image: portfolioLogos,
      description: 'Collection of modern brand identities and logo designs',
      tools: ['Branding', 'Logo Design', 'Identity Systems'],
      workLink: "https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=394-156&t=V6aWwByHQK9JBDOc-1"
    },
    {
      id: 4,
      title: 'Hotel Management App & Dashboard',
      category: 'web',
      image: portfolioWeb,
      description: 'Analytics dashboard with complex data visualization',
      tools: ['Web Design', 'Data Viz', 'UX Research'],
      workLink: "https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=158-833&t=V6aWwByHQK9JBDOc-1"
    }
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio-section bg-muted/30 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">My Work</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore my latest projects showcasing user-centered design solutions across web, mobile, and branding.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card group overflow-hidden rounded-lg bg-white shadow-md"
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.workLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    View Work
                  </a>
                </div>
              </div>

              <div className="px-4 pb-4">
                <h3 className="font-semibold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

