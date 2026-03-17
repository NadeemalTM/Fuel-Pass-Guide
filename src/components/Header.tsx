'use client';

import { useTranslation } from '@/i18n/useTranslation';
import LanguageToggle from './LanguageToggle';
import { Fuel } from 'lucide-react';

export default function Header() {
  const t = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Fuel className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Fuel Pass QR
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {t.hero.subtitle}
              </p>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile Language Toggle */}
        <div className="sm:hidden pb-4 border-t border-gray-200 dark:border-gray-700 pt-2">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
