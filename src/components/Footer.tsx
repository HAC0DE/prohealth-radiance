import { Phone, Mail, MapPin, Clock, Stethoscope } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold">Pro Health</h3>
                <p className="text-sm opacity-80">Skincare Excellence</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Advanced skincare solutions with Dr. Rahul Sharma. 15+ years of excellence in dermatological care, serving Mumbai with state-of-the-art treatments.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Pro Health Skincare Clinic</p>
                  <p className="opacity-80">123 Medical Plaza, Health District</p>
                  <p className="opacity-80">Mumbai - 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div className="text-sm">
                  <p>+91 98765 43210</p>
                  <p className="opacity-80">Emergency: +91 87654 32109</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div className="text-sm">
                  <p>info@prohealthskin.com</p>
                  <p className="opacity-80">appointments@prohealthskin.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Working Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm space-y-1">
                  <p className="font-medium">Monday - Friday</p>
                  <p className="opacity-80">9:00 AM - 8:00 PM</p>
                  <p className="font-medium">Saturday</p>
                  <p className="opacity-80">9:00 AM - 6:00 PM</p>
                  <p className="font-medium">Sunday</p>
                  <p className="opacity-80">10:00 AM - 4:00 PM</p>
                  <p className="text-xs opacity-60">(Emergency only)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2 text-sm">
              <p className="opacity-80 hover:text-primary transition-colors cursor-pointer">Acne Treatment</p>
              <p className="opacity-80 hover:text-primary transition-colors cursor-pointer">Anti-Aging Therapy</p>
              <p className="opacity-80 hover:text-primary transition-colors cursor-pointer">Laser Hair Removal</p>
              <p className="opacity-80 hover:text-primary transition-colors cursor-pointer">Skin Cancer Screening</p>
              <p className="opacity-80 hover:text-primary transition-colors cursor-pointer">Chemical Peels</p>
              <p className="opacity-80 hover:text-primary transition-colors cursor-pointer">Cosmetic Procedures</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2024 Pro Health Skincare Hospital. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="opacity-80 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="opacity-80 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="opacity-80 hover:text-primary transition-colors">Medical Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;