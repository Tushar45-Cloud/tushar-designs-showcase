import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612e738?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      text: 'Tushar delivered exceptional UI/UX design for our mobile app. His attention to detail and user-centered approach resulted in a 40% increase in user engagement.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      text: 'Working with Tushar was a game-changer for our business. He transformed our complex ideas into beautiful, intuitive designs that our users love.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthLab',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      rating: 5,
      text: 'The landing pages Tushar designed exceeded our expectations. The conversion rate improved by 60% after implementing his designs. Highly recommended!',
    },
  ];

  return (
    <section id="testimonials" className="portfolio-section bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="portfolio-heading">What Clients Say</h2>
            <p className="portfolio-text max-w-2xl mx-auto">
              Don't just take my word for it. Here's what some of my clients have to say about working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="portfolio-card relative">
                <Quote size={24} className="text-primary/20 absolute top-4 right-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;