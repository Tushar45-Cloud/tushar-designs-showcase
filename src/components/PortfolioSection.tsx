// src/components/PortfolioSection.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Laundry Service Website',
    category: 'web',
    image: '/lovable-uploads/94f34cc6-4dea-49de-8f7f-b1f12746339c.png',
    description: 'Modern Website platform with clean UI and seamless user experience',
    tools: ['Figma', 'Prototyping', 'User Research'],
    workLink: 'https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=452-156&t=V6aWwByHQK9JBDOc-1',
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    category: 'mobile',
    image: '/lovable-uploads/portfolio-mobile-1.jpg',
    description: 'Intuitive banking app with focus on security and usability',
    tools: ['Mobile UI', 'UX Design', 'Prototyping'],
    workLink: 'https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=477-1069&t=V6aWwByHQK9JBDOc-1',
  },
  {
    id: 3,
    title: 'Quiz App',
    category: 'logos',
    image: '/lovable-uploads/portfolio-logos-1.jpg',
    description: 'Collection of modern brand identities and logo designs',
    tools: ['Branding', 'Logo Design', 'Identity Systems'],
    workLink: 'https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=394-156&t=V6aWwByHQK9JBDOc-1',
  },
  {
    id: 4,
    title: 'Hotel Management App + Admin Dashboard',
    category: 'web',
    image: '/lovable-uploads/portfolio-web-1.jpg',
    description: 'Analytics dashboard with complex data visualization',
    tools: ['Web Design', 'Data Viz', 'UX Research'],
    workLink: 'https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=158-833&t=V6aWwByHQK9JBDOc-1',
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="portfolio-card group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              {/* Image with aspect ratio */}
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={project.workLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-20 bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-100"
                >
                  <ExternalLink size={16} />
                  View Work
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              {/* Tools/Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
