// src/components/PortfolioSection.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import portfolioWeb from '@/assets/portfolio-web-1.jpg';
import portfolioMobile from '@/assets/portfolio-mobile-1.jpg';
import portfolioLogos from '@/assets/portfolio-logos-1.jpg';

const projects = [
  {
    id: 1,
    title: 'Laundry Service Website',
    category: 'web',
    image: '/lovable-uploads/94f34cc6-4dea-49de-8f7f-b1f12746339c.png', // must be in /public/lovable-uploads/
    description: 'Modern Website platform with clean UI and seamless user experience',
    tools: ['Figma', 'Prototyping', 'User Research'],
    workLink: 'https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=452-156&t=V6aWwByHQK9JBDOc-1',
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    category: 'mobile',
    image: portfolioMobile,
    description: 'Intuitive banking app with focus on security and usability',
    tools: ['Mobile UI', 'UX Design', 'Prototyping'],
    workLink: 'https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=477-1069&t=V6aWwByHQK9JBDOc-1',
  },
  {
    id: 3,
    title: 'Quiz App',
    category: 'logos',
    image: portfolioLogos,
    description: 'Collection of modern brand identities and logo designs',
    tools: ['Branding', 'Logo Design', 'Identity Systems'],
    workLink: 'https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=394-156&t=V6aWwByHQK9JBDOc-1',
  },
  {
    id: 4,
    title: 'Hotel Management App + Admin Dashboard',
    category: 'web',
    image: portfolioWeb,
    description: 'Analytics dashboard with complex data visualization',
    tools: ['Web Design', 'Data Viz', 'UX Research'],
    workLink: 'https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=158-833&t=V6aWwByHQK9JBDOc-1',
  },
];

const PortfolioSection = () => {
  const filteredProjects = projects;

  return (
    <section className="py-12 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-card group overflow-hidden">
            <div className="relative overflow-hidden rounded-lg mb-4 group">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={project.workLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-20 bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <ExternalLink size={16} />
                  View Work
                </a>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

            {/* Tools/Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;

