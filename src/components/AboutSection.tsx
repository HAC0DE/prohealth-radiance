import { Button } from "@/components/ui/button";
import { CheckCircle, Award, BookOpen, Users } from "lucide-react";
import drRahulImage from "@/assets/dr-rahul-sharma.jpg";

const AboutSection = () => {
  const specializations = [
    "Advanced Acne Treatment",
    "Anti-Aging Procedures", 
    "Laser Dermatology",
    "Cosmetic Surgery",
    "Skin Cancer Detection",
    "Pediatric Dermatology"
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Happy Patients" },
    { number: "98%", label: "Success Rate" },
    { number: "50+", label: "Awards Won" }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 relative" style={{ background: 'linear-gradient(135deg, hsl(355, 100%, 96%), hsl(355, 70%, 90%))' }}>
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/5 rounded-full animate-gentle-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-secondary/10 rounded-full animate-gentle-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Main doctor image */}
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square rounded-full overflow-hidden shadow-floating bg-card border-8 border-card">
                  <img
                    src={drRahulImage}
                    alt="Dr. Rahul Sharma - Lead Dermatologist"
                    className="w-full h-full object-cover image-hover"
                  />
                </div>
              </div>
              
              {/* Floating credential badges */}
              <div className="absolute -top-6 -left-6 bg-card p-3 rounded-lg shadow-elegant animate-gentle-float">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Board Certified</div>
                    <div className="text-xs text-muted-foreground">Dermatologist</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card p-3 rounded-lg shadow-elegant animate-gentle-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-6 h-6 text-secondary" />
                  <div>
                    <div className="text-sm font-semibold">MD Dermatology</div>
                    <div className="text-xs text-muted-foreground">AIIMS Delhi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground">
                Meet <span className="text-primary">Dr. Rahul Sharma</span>
              </h2>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  MD Dermatology, Board Certified Specialist
                </h3>
                <p className="text-lg text-primary font-medium">
                  15+ Years Transforming Lives Through Skincare
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dr. Rahul Sharma is a renowned dermatologist with over 15 years of experience in advanced skincare treatments. Graduating from AIIMS Delhi with an MD in Dermatology, he has dedicated his career to helping patients achieve healthy, radiant skin through personalized care and cutting-edge treatments.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                His expertise spans from treating complex skin conditions to performing advanced cosmetic procedures. Dr. Sharma believes in combining medical excellence with compassionate care, ensuring each patient receives treatments tailored to their unique needs and lifestyle.
              </p>
            </div>

            {/* Specializations */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h4 className="text-lg font-semibold text-foreground">Specializations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specializations.map((spec, index) => (
                  <div 
                    key={spec} 
                    className="flex items-center space-x-3 animate-slide-down"
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-medical-trust flex-shrink-0" />
                    <span className="text-foreground font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-scale-in" style={{ animationDelay: '600ms' }}>
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center p-4 bg-card rounded-lg shadow-soft"
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;