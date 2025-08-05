import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Shield, CheckCircle, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AppointmentSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Appointment Booked Successfully!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(355, 100%, 76%), hsl(355, 85%, 70%))' }}>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-gentle-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/5 rounded-full animate-gentle-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8 text-white animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-display font-bold">
                Ready to Transform Your Skin?
              </h2>
              <p className="text-xl lg:text-2xl font-medium opacity-90">
                Book your consultation with Dr. Rahul Sharma today
              </p>
              <p className="text-lg opacity-80 leading-relaxed">
                Take the first step towards healthier, more radiant skin. Our expert team is ready to create a personalized treatment plan just for you.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6" />
                <span className="font-medium">Secure & Confidential Booking</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6" />
                <span className="font-medium">Same Day Response Guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6" />
                <span className="font-medium">Flexible Scheduling Available</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-8 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@prohealthskin.com</span>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <Card className="bg-card border-0 shadow-floating animate-scale-in" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-8 space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                  Book Your Consultation
                </h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="transition-all duration-300 focus:scale-[1.02]"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="transition-all duration-300 focus:scale-[1.02]"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="transition-all duration-300 focus:scale-[1.02]"
                    required
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Service of Interest
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="transition-all duration-300 focus:scale-[1.02]">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                      <SelectItem value="acne">Acne Treatment</SelectItem>
                      <SelectItem value="anti-aging">Anti-Aging Therapy</SelectItem>
                      <SelectItem value="laser">Laser Hair Removal</SelectItem>
                      <SelectItem value="screening">Skin Cancer Screening</SelectItem>
                      <SelectItem value="cosmetic">Cosmetic Procedures</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground font-medium">
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="transition-all duration-300 focus:scale-[1.02]"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Additional Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your skin concerns or any questions you have..."
                    className="transition-all duration-300 focus:scale-[1.02] min-h-[100px]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Booking Your Appointment...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>Book My Appointment</span>
                    </div>
                  )}
                </Button>

                {/* Form Footer */}
                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;