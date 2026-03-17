'use client';

import { useTranslation } from '@/i18n/useTranslation';
import { AlertCircle, Check } from 'lucide-react';

export default function InfoSection() {
  const t = useTranslation();

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Requirements */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-lg border-2 border-blue-200 dark:border-blue-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Check className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.requirements.title}
              </h3>
            </div>

            <ul className="space-y-4">
              {t.requirements.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold text-lg mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Information */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-8 rounded-lg border-2 border-amber-200 dark:border-amber-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-600 rounded-lg">
                <AlertCircle className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.important.title}
              </h3>
            </div>

            <ul className="space-y-4">
              {t.important.info.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-amber-600 font-bold text-lg mt-1">⚠</span>
                  <span className="text-gray-700 dark:text-gray-300 text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
