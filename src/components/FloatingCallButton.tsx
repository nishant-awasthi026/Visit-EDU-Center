import React from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+918102242652"
      className="fixed bottom-6 right-6 bg-violet-600 text-white p-4 rounded-full shadow-lg hover:bg-violet-700 transition-all transform hover:scale-110 z-50"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}