import React from 'react';
import Section from '../ui/Section';
import { navigateTo } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <Section id="main" className="pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary text-balance">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-secondary max-w-prose">
            {t.hero.subtitle}
          </p>
          <div className="text-base md:text-lg leading-relaxed space-y-4 text-secondary">
            <p>{t.hero.desc1}</p>
            <p className="font-medium">{t.hero.desc2}</p>
          </div>
          
          <div className="pt-4">
            <p className="mb-4 italic text-muted">{t.hero.quote}</p>
            <a 
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); navigateTo('#kontakt'); }}
              className="inline-block border border-primary px-8 py-4 bg-transparent text-primary hover:bg-primary hover:text-background transition-colors uppercase tracking-widest font-medium cursor-pointer"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>

        {/* Right: Image with Decorative Frame (Original Proportions) */}
        <div className="relative w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
          {/* Wrapper with margins to accommodate the offset background */}
          <div className="relative mr-6 mb-6">
            {/* Background Block - Accent Color, Offset to bottom-right */}
            <div className="absolute top-6 left-6 w-full h-full bg-accent" />
            
            {/* Foreground Container - White Frame with Padding */}
            <div className="relative bg-white p-4 md:p-6 shadow-xl z-10">
              <img
                src="https://storage.googleapis.com/ekreacje-assets/Book_Mockup_Ba%C5%9Bnie3_od%20Mockupfree.co.png"
                alt="Opened book showing professional typography"
                className="w-full h-auto block max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;