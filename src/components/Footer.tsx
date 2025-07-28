import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © {currentYear} Tushar Bansode. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-red-500" />
              <span>for great user experiences</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;