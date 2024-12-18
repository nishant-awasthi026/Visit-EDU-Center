import React from 'react';
import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-violet-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8" />
              <span className="text-2xl font-bold">Visit Edu Center</span>
            </div>
            <p className="text-violet-200">
              Empowering students with knowledge and skills for academic excellence.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-violet-300" />
                <p className="text-violet-200">
                  Tulsi Mandi, Patna City<br />
                  Patna 800008
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-violet-300" />
                <a href="tel:+918102242652" className="text-violet-200 hover:text-white">
                  +91 8102242652
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-violet-300" />
                <a href="mailto:nishant.officialpost@gmail.com" className="text-violet-200 hover:text-white">
                  nishant.officialpost@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <a href="#home" className="block text-violet-200 hover:text-white">Home</a>
              <a href="#class9" className="block text-violet-200 hover:text-white">Class 9 Courses</a>
              <a href="#class10" className="block text-violet-200 hover:text-white">Class 10 Courses</a>
              <a href="#teachers" className="block text-violet-200 hover:text-white">Our Teachers</a>
              <a href="#contact" className="block text-violet-200 hover:text-white">Contact Us</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-violet-800 mt-12 pt-8 text-center text-violet-300">
          <p>&copy; {new Date().getFullYear()} Visit Edu Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}