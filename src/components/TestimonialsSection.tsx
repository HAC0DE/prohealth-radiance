import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Mehta",
      treatment: "Acne Treatment",
      rating: 5,
      quote: "Dr. Sharma's expertise completely transformed my skin confidence. After struggling with acne for years, his personalized treatment plan gave me the clear, healthy skin I always dreamed of.",
      avatar: "👩"
    },
    {
      name: "Rajesh Kumar",
      treatment: "Laser Hair Removal",
      rating: 5,
      quote: "Professional, caring, and incredibly skilled. The laser hair removal treatments were comfortable and effective. The results exceeded my expectations completely.",
      avatar: "👨"
    },
    {
      name: "Sneha Patel",
      treatment: "Anti-Aging Therapy",
      rating: 5,
      quote: "The anti-aging treatments at Pro Health made me look and feel years younger. Dr. Sharma's approach is both scientific and artistic. Highly recommended!",
      avatar: "👩‍💼"
    }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const startTimer = () => {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 3);
      }, 4000);
    };

    startTimer();
    
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground animate-fade-in">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Real stories from real patients who have experienced the Pro Health difference in their skincare journey.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-elegant mx-4" style={{ background: 'linear-gradient(135deg, hsl(355, 100%, 96%), hsl(355, 70%, 90%))' }}>
                    <CardContent className="p-8 lg:p-12 text-center space-y-6">
                      {/* Quote Icon */}
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <Quote className="w-8 h-8 text-primary" />
                      </div>

                      {/* Star Rating */}
                      <div className="flex justify-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Testimonial Quote */}
                      <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed font-medium italic">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Patient Info */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl">
                            {testimonial.avatar}
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-foreground">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.treatment}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Happy Patients</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-muted-foreground">Years Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;