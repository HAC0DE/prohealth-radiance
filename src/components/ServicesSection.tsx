import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, ShieldCheck, Heart, Sparkles, Target, Microscope } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Acne Treatment",
      description: "Advanced acne solutions for clear, healthy skin with personalized treatment plans.",
      image: "🎯"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Anti-Aging Therapy",
      description: "Cutting-edge treatments to restore youthful radiance and reduce signs of aging.",
      image: "✨"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Skin Cancer Screening",
      description: "Comprehensive screenings and early detection for optimal skin health protection.",
      image: "🛡️"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Laser Hair Removal",
      description: "Professional laser treatments for smooth, hair-free skin with lasting results.",
      image: "⚡"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Chemical Peels",
      description: "Rejuvenating peels to reveal brighter, smoother, and more radiant skin.",
      image: "💖"
    },
    {
      icon: <Microscope className="w-8 h-8 text-primary" />,
      title: "Cosmetic Procedures",
      description: "Expert aesthetic treatments to enhance your natural beauty safely and effectively.",
      image: "🔬"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground animate-fade-in">
            Our Expert <span className="text-primary">Skincare Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Comprehensive dermatological treatments tailored to your unique skin needs, delivered with cutting-edge technology and compassionate care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-hover bg-card border-border animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* Service Icon */}
                <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Service Title */}
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <Button 
                  variant="ghost" 
                  className="group/btn text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;