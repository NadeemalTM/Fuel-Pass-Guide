'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GuideSection from '@/components/GuideSection';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import FaqSection from '@/components/FaqSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <HeroSection />
      <GuideSection />
      <InfoSection />
        <FaqSection />
      <Footer />
    </main>
  );
}
