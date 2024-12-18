import React from 'react';
import { Video, FileText, BookOpen, Users, HeadphonesIcon } from 'lucide-react';
import FacilityCard from './facilities/FacilityCard';
import type { Facility } from '../types/facility';

const facilities: Facility[] = [
  {
    icon: Video,
    title: "Recorded Lectures",
    description: "Access to recorded lectures for flexible learning and revision at any time",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: FileText,
    title: "Daily PDF Notes",
    description: "Comprehensive daily PDF notes available online for easy reference and study",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: BookOpen,
    title: "Daily Homework Assignments",
    description: "Regular online homework assignments to reinforce learning and practice",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Users,
    title: "Interactive Offline Classes",
    description: "Engaging and interactive online classes to enhance understanding and participation",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Online Support",
    description: "Round-the-clock online support for doubt clearing and academic assistance",
    color: "from-pink-500 to-rose-500"
  }
];

export default function FacilitiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-violet-900 mb-4">
            Our Premium Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience a comprehensive learning environment with our state-of-the-art facilities
            designed to enhance your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <FacilityCard key={facility.title} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
}