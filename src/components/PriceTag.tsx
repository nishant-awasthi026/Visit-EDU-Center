import React from 'react';
import { IndianRupee } from 'lucide-react';

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className = '' }: PriceTagProps) {
  return (
    <div className={`inline-block ${className}`}>
      <div className="bg-gradient-to-r from-violet-600 to-violet-800 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-2">
          <IndianRupee className="h-6 w-6" />
          <span className="text-2xl font-bold">{price}/-</span>
        </div>
        <div className="text-sm text-violet-200 mt-1">Limited Time Offer</div>
      </div>
    </div>
  );
}