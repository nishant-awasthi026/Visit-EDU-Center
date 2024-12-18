import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-violet-900/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white">Visit Edu Center</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-violet-200 transition">Home</a>
          <a href="#class9" className="text-white hover:text-violet-200 transition">Class 9</a>
          <a href="#class10" className="text-white hover:text-violet-200 transition">Class 10</a>
          <a href="#contact" className="text-white hover:text-violet-200 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}