import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Monitor, Smartphone, Palette } from 'lucide-react';
import portfolioWeb from '@/assets/portfolio-web-1.jpg';
import portfolioMobile from '@/assets/portfolio-mobile-1.jpg';
import portfolioLogos from '@/assets/portfolio-logos-1.jpg';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

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
      image: '/lovable-uploads/94f34cc6-4dea-49de-8f7f-b1f12746339c.png',
      description: 'Modern Website platform with clean UI and seamless user experience',
      tools: ['Figma', 'Prototyping', 'User Research'],
      worklink: "https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=452-156&t=V6aWwByHQK9JBDOc-1"
    },
    {
      id: 2,
      title: 'E Commers Website',
      category: 'mobile',
      image: portfolioMobile,
      description: 'Intuitive banking app with focus on security and usability',
      tools: ['Mobile UI', 'UX Design', 'Prototyping'],
       worklink: "https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=477-1069&t=V6aWwByHQK9JBDOc-1"
    },
    {
      id: 3,
      title: 'Quiz App',
      category: 'logos',
      image: portfolioLogos,
      description: 'Collection of modern brand identities and logo designs',
      tools: ['Branding', 'Logo Design', 'Identity Systems'],
      worklink: "https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=394-156&t=V6aWwByHQK9JBDOc-1"
    },
    {
      id: 4,
      title: 'Hotel management App and admin Dashboard',
      category: 'web',
      image: portfolioWeb,
      description: 'Analytics dashboard with complex data visualization',
      tools: ['Web Design', 'Data Viz', 'UX Research'],
       worklink: "https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=158-833&t=V6aWwByHQK9JBDOc-1"
    },
    
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
   <section id="portfolio" className="portfolio-section bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="portfolio-heading">My Work</h2>
            <p className="portfolio-text max-w-2xl mx-auto">
              Explore my latest projects showcasing user-centered design solutions
              across web, mobile, and branding.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === category.id
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
                className="portfolio-card group overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
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
                      onClick={e => e.stopPropagation()} // Prevents card click from navigating away
                    >
                      <ExternalLink size={16} />
                      View Work
                    </a>
                  </div>
                </div>

                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default PortfolioSection;
