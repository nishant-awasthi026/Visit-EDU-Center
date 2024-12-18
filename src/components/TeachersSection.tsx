import React from 'react';
import TeachersList from './teachers/TeachersList';
import type { Teacher } from '../types/teacher';

interface TeachersSectionProps {
  id: string;
  teachers: Teacher[];
}

export default function TeachersSection({ id, teachers }: TeachersSectionProps) {
  return (
    <section id={id} className="py-20 bg-violet-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-violet-900 text-center mb-12">
          Meet Our Expert Teachers
        </h2>
        <TeachersList teachers={teachers} />
      </div>
    </section>
  );
}