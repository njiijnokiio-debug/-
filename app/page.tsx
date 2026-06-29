'use client';

import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { HeroSection } from '@/components/sections/hero';
import { AdvantagesSection } from '@/components/sections/advantages';
import { ProgramsSection } from '@/components/sections/programs';
import { TeachersSection } from '@/components/sections/teachers';
import { ReviewsSection } from '@/components/sections/reviews';
import { CTASection } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <ProgramsSection />
        <TeachersSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}