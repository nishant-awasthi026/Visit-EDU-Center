import React from 'react';
import type { Teacher } from '../../types/teacher';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <div className="flex-none w-[300px] snap-start">
      <div className="bg-white rounded-xl shadow-lg p-6 h-full">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
          <img
            src={teacher.imageUrl}
            alt={teacher.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-violet-900 text-center mb-2">
          {teacher.name}
        </h3>
        <p className="text-gray-600 text-center mb-4">{teacher.qualification}</p>
        <p className="text-gray-500 text-center text-sm">{teacher.subject}</p>
      </div>
    </div>
  );
}