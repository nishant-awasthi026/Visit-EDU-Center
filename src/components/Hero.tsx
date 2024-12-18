import React from 'react';
import { PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-violet-950 via-violet-900 to-violet-800">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-white space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Unlock Your Academic Potential
          </h1>
          <p className="text-xl text-violet-100">
            Expert guidance and comprehensive crash courses for Class 9 & 10 students.
            Join Visit Edu Center for academic excellence.
          </p>
          <button 
            onClick={() => window.location.href = 'tel:+919876543210'}
            className="bg-white text-violet-900 px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-violet-100 transition"
          >
            <PhoneCall className="h-5 w-5" />
            <span>Request Call Back</span>
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Students studying"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}