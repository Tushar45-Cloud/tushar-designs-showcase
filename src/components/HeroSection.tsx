import { ArrowDown, Download, Eye } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="portfolio-section bg-gradient-to-br from-background to-muted min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img 
                src="/src/assets/tushar-photo.jpg" 
                alt="Tushar Bansode"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
            Tushar Bansode
          </h1>
          
          <h2 className="text-2xl lg:text-3xl font-medium text-primary mb-6">
            UI/UX Designer | Web & Mobile Interfaces
          </h2>
          
          <p className="portfolio-text max-w-2xl mx-auto mb-12">
            Crafting beautiful, user-centric designs for web & mobile applications. 
            I help businesses create engaging digital experiences that delight users and drive results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="portfolio-button flex items-center gap-2">
              <Eye size={20} />
              View My Work
            </button>
            <button className="portfolio-button-secondary flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown size={24} className="text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;