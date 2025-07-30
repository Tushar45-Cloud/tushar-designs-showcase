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
          
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
