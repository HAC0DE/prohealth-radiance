import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, Heart } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Rahul Sharma",
      title: "Lead Dermatologist",
      specialization: "MD Dermatology, AIIMS Delhi",
      experience: "15+ Years Experience",
      expertise: "Advanced acne treatment, laser procedures, cosmetic dermatology",
      icon: <Award className="w-6 h-6 text-primary" />,
      avatar: "👨‍⚕️"
    },
    {
      name: "Dr. Priya Patel",
      title: "Aesthetic Specialist", 
      specialization: "MD Dermatology, PGIMER",
      experience: "10+ Years Experience",
      expertise: "Anti-aging treatments, chemical peels, aesthetic procedures",
      icon: <GraduationCap className="w-6 h-6 text-secondary" />,
      avatar: "👩‍⚕️"
    },
    {
      name: "Sarah Johnson",
      title: "Senior Nurse Practitioner",
      specialization: "BSN, Certified Dermatology Nurse",
      experience: "8+ Years Experience", 
      expertise: "Patient care, laser treatments, post-procedure support",
      icon: <Heart className="w-6 h-6 text-medical-trust" />,
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <section className="py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, hsl(355, 100%, 96%), hsl(355, 70%, 90%))' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground animate-fade-in">
            Our Expert <span className="text-primary">Medical Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Meet our dedicated team of dermatology experts committed to providing you with exceptional care and outstanding results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="card-hover bg-card border-border group overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center space-y-6 relative">
                {/* Member Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, hsl(355, 100%, 76%), hsl(355, 85%, 70%))' }}>
                    {member.avatar}
                  </div>
                  
                  {/* Specialty Icon */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-card rounded-full flex items-center justify-center shadow-soft border-2 border-background">
                    {member.icon}
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {member.name}
                  </h3>
                  
                  <div className="space-y-1">
                    <p className="text-primary font-semibold">
                      {member.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.specialization}
                    </p>
                    <p className="text-sm font-medium text-secondary">
                      {member.experience}
                    </p>
                  </div>
                </div>

                {/* Expertise */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.expertise}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-coral opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="text-center p-6 bg-card rounded-lg shadow-soft">
            <div className="text-2xl lg:text-3xl font-bold text-primary">3</div>
            <div className="text-sm text-muted-foreground">Expert Doctors</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-soft">
            <div className="text-2xl lg:text-3xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Combined Years</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-soft">
            <div className="text-2xl lg:text-3xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Procedures Monthly</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-soft">
            <div className="text-2xl lg:text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Patient Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;