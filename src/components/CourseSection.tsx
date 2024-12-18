import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import PriceTag from './PriceTag';
import type { Subject } from '../types/course';

interface CourseSectionProps {
  className: string;
  title: string;
  subjects: Subject[];
  imageUrl: string;
}

export default function CourseSection({ className, title, subjects, imageUrl }: CourseSectionProps) {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image comes first on mobile */}
            <div className="relative h-[300px] md:h-auto md:order-2">
              <img
                src={imageUrl}
                alt="Students studying"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:order-1">
              <h2 className="text-3xl font-bold text-violet-900 mb-6">{title}</h2>
              <p className="text-gray-600 mb-8">
                Comprehensive crash course designed to help students excel in their board exams.
                Expert faculty, focused approach, and proven results.
              </p>
              
              <PriceTag price={2499} className="mb-8" />
              
              <div className="space-y-4">
                {subjects.map((subject) => (
                  <div key={subject.name} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedSubject(expandedSubject === subject.name ? null : subject.name)}
                      className="w-full px-4 py-3 flex items-center justify-between bg-violet-50 hover:bg-violet-100 transition"
                    >
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-5 w-5 text-violet-700" />
                        <span className="font-semibold text-violet-900">{subject.name}</span>
                      </div>
                      {expandedSubject === subject.name ? (
                        <ChevronUp className="h-5 w-5 text-violet-700" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-violet-700" />
                      )}
                    </button>
                    {expandedSubject === subject.name && (
                      <div className="px-4 py-3 bg-white">
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          {subject.topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}