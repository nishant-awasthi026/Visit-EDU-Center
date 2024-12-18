import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseSection from './components/CourseSection';
import FacilitiesSection from './components/FacilitiesSection';
import TeachersSection from './components/TeachersSection';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import { class9Subjects, class10Subjects } from './data/courses';
import { teachers } from './data/teachers';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <CourseSection
        id="class9"
        className="bg-violet-50"
        title="Crash Course [Offline] for Class 9"
        subjects={class9Subjects}
        imageUrl="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80"
      />
      
      <CourseSection
        id="class10"
        className="bg-white"
        title="Crash Course [Offline] for Class 10"
        subjects={class10Subjects}
        imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
      />
      
      <FacilitiesSection />
      <TeachersSection id="teachers" teachers={teachers} />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}