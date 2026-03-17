'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import { Language } from '@/i18n/translations';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'si', name: 'සිංහල', flag: '🇱🇰' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  ];

  return (
    <div className="flex gap-2 items-center">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {t.footer.language}:
      </span>
      <div className="flex gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              language === lang.code
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <span>{lang.flag} {lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
