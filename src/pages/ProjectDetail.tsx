import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Laundry Service Website',
      category: 'web',
      image: '/lovable-uploads/94f34cc6-4dea-49de-8f7f-b1f12746339c.png',
      description: 'Modern Website platform with clean UI and seamless user experience',
      tools: ['Figma', 'Prototyping', 'User Research'],
    },
    {
      id: 2,
      title: 'E Commers Website',
      category: 'mobile',
      image: '/src/assets/portfolio-mobile-1.jpg',
      description: 'Intuitive banking app with focus on security and usability',
      tools: ['Mobile UI', 'UX Design', 'Prototyping'],
    },
    {
      id: 3,
      title: 'Brand Identity Collection',
      category: 'logos',
      image: '/src/assets/portfolio-logos-1.jpg',
      description: 'Collection of modern brand identities and logo designs',
      tools: ['Branding', 'Logo Design', 'Identity Systems'],
    },
    {
      id: 4,
      title: 'Hotel management App and admin Dashboard',
      category: 'web',
      image: '/src/assets/portfolio-web-1.jpg',
      description: 'Analytics dashboard with complex data visualization',
      tools: ['Web Design', 'Data Viz', 'UX Research'],
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'mobile',
      image: '/src/assets/portfolio-mobile-1.jpg',
      description: 'User-friendly food ordering app with smooth ordering flow',
      tools: ['Mobile Design', 'User Journey', 'Prototyping'],
    },
    {
      id: 6,
      title: 'Startup Logo Package',
      category: 'logos',
      image: '/src/assets/portfolio-logos-1.jpg',
      description: 'Complete branding package for tech startup',
      tools: ['Logo Design', 'Brand Guidelines', 'Typography'],
    },
  ];

  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This project showcases modern design principles and user-centered approach. 
                The development process involved extensive research, prototyping, and iterative 
                design to create an optimal user experience.
              </p>
              <a 
                href="https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=158-833&t=dtBjesPxfTNEpT3y-1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium underline underline-offset-4 mt-4"
              >
                View Design on Figma →
              </a>
              <a 
                href="https://www.figma.com/design/yKfymYbMShVs2MQGNxpUxP/Untitled?node-id=452-156&t=cu79RZJpQb4dxeS3-1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium underline underline-offset-4 mt-2"
              >
                View Additional Design →
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;