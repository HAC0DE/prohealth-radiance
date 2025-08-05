import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-consultation.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-background relative overflow-hidden pt-16 lg:pt-20" style={{ background: 'linear-gradient(135deg, hsl(355, 100%, 96%), hsl(355, 70%, 90%))' }}>
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full animate-gentle-float"></div>
      <div className="absolute top-60 left-10 w-16 h-16 bg-secondary/10 rounded-full animate-gentle-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-12 h-12 bg-accent/20 rounded-full animate-gentle-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Advanced Skincare Solutions with{" "}
                <span className="text-primary">Dr. Rahul Sharma</span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                15+ Years of Excellence in Dermatological Care
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Experience personalized skincare treatments with state-of-the-art technology and compassionate care at Pro Health. Your journey to healthy, radiant skin starts here.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center space-x-2 trust-badge">
                <Users className="w-4 h-4" />
                <span>500+ Happy Patients</span>
              </div>
              <div className="flex items-center space-x-2 trust-badge">
                <Award className="w-4 h-4" />
                <span>Board Certified</span>
              </div>
              <div className="flex items-center space-x-2 trust-badge">
                <Star className="w-4 h-4" />
                <span>Award Winning</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{ animationDelay: '600ms' }}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                Book Consultation
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
                View Services
              </Button>
            </div>

            {/* Additional Trust Elements */}
            <div className="flex items-center space-x-6 pt-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-medical-trust" />
                <span className="text-sm font-medium">FDA Approved Treatments</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-medical-trust" />
                <span className="text-sm font-medium">Same Day Appointments</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-scale-in" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              {/* Main image circle */}
              <div className="w-full max-w-lg mx-auto aspect-square rounded-full overflow-hidden shadow-floating bg-card border-8 border-card">
                <img
                  src={heroImage}
                  alt="Professional skincare consultation at Pro Health"
                  className="w-full h-full object-cover image-hover"
                />
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -top-6 -left-6 bg-card p-4 rounded-lg shadow-elegant animate-gentle-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-elegant animate-gentle-float" style={{ animationDelay: '1.5s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent"></div>
    </section>
  );
};

export default HeroSection;