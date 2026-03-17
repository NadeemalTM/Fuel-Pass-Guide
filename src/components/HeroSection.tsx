'use client';

import { useTranslation } from '@/i18n/useTranslation';
import Image from 'next/image';
import { ChevronDown, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslation();

  const scrollToGuide = () => {
    const guideSection = document.getElementById('guide-section');
    guideSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559034109-8f9e95fd43a6?auto=format&fit=crop&w=2000&q=80"
          alt="Fuel station fueling background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/75 to-blue-700/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl mb-4 text-blue-100">
            {t.hero.subtitle}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto text-blue-50">
            {t.hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={t.links.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              {t.hero.registerBtn}
              <ExternalLink size={18} />
            </a>
            <a
              href={t.links.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors shadow-lg"
            >
              {t.hero.loginBtn}
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Scroll CTA */}
          <button
            onClick={scrollToGuide}
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white text-sm underline underline-offset-2 transition-colors"
          >
            {t.hero.cta}
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
}
