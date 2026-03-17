'use client';

import { useState } from 'react';
import { useTranslation } from '@/i18n/useTranslation';
import Image from 'next/image';
import StepCard from './StepCard';
import { ExternalLink } from 'lucide-react';

export default function GuideSection() {
  const t = useTranslation();
  const [activeTab, setActiveTab] = useState<'register' | 'login'>('register');
  const registerSteps = Object.values(t.register.steps);
  const loginSteps = Object.values(t.login.steps);

  return (
    <section id="guide-section" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.nav.guide}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.hero.description}</p>
        </div>

        <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden mb-10 border border-blue-100 dark:border-gray-700 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
            alt="Decorative road journey background"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/65 via-blue-800/40 to-transparent" />
          <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 text-white">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-blue-100">Fuel Pass</p>
            <p className="text-lg sm:text-2xl font-semibold">Quick steps for registration and login</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={t.links.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md"
          >
            {t.hero.registerBtn}
            <ExternalLink size={18} />
          </a>
          <a
            href={t.links.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors shadow-md"
          >
            {t.hero.loginBtn}
            <ExternalLink size={18} />
          </a>
        </div>

        <div className="flex rounded-lg overflow-hidden border-2 border-blue-200 dark:border-blue-700 mb-8">
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-3 px-4 font-semibold text-sm sm:text-base transition-colors ${
              activeTab === 'register'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            {t.tabs.newUser}
          </button>
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 px-4 font-semibold text-sm sm:text-base transition-colors ${
              activeTab === 'login'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            {t.tabs.existingUser}
          </button>
        </div>

        {activeTab === 'register' && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {t.register.heading}
            </h3>
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg text-blue-800 dark:text-blue-200 text-sm">
              {t.register.notice}
            </div>
            <div className="space-y-4">
              {registerSteps.map((step, index) => (
                <StepCard
                  key={index}
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'login' && (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {t.login.heading}
            </h3>
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg text-green-800 dark:text-green-200 text-sm">
              {t.login.notice}
            </div>
            <div className="space-y-4">
              {loginSteps.map((step, index) => (
                <StepCard
                  key={index}
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 p-6 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-700 rounded-lg">
          <h4 className="font-bold text-amber-900 dark:text-amber-300 text-lg mb-3">
            {t.transfer.heading}
          </h4>
          <ul className="space-y-2">
            {t.transfer.description.map((line, i) => (
              <li key={i} className="flex items-start gap-2 text-amber-800 dark:text-amber-200 text-sm">
                <span className="mt-1 shrink-0">-</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}