'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string[];
  isCompleted?: boolean;
}

export default function StepCard({
  stepNumber,
  title,
  description,
  isCompleted = false,
}: StepCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`rounded-lg border-2 transition-all ${
        isExpanded
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-400'
      }`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 sm:p-6 flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        {/* Step Number */}
        <div className="flex-shrink-0 relative">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-lg sm:text-xl font-bold text-white">
              {stepNumber}
            </span>
          </div>
          {isCompleted && (
            <CheckCircle className="absolute -top-2 -right-2 text-green-500" size={24} />
          )}
        </div>

        {/* Content */}
        <div className="flex-grow text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          {!isExpanded && description.length > 0 && (
            <p className="text-gray-600 dark:text-gray-400 text-sm hide-overflow">
              {description[0]}
            </p>
          )}
        </div>

        {/* Toggle Icon */}
        <div className="flex-shrink-0 text-gray-400">
          {isExpanded ? (
            <ChevronUp size={24} />
          ) : (
            <ChevronDown size={24} />
          )}
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t-2 border-blue-200 dark:border-blue-800 px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-900/10">
          <ul className="space-y-3">
            {description.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
