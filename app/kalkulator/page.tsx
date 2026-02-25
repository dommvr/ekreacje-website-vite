'use client';

import React, { useEffect } from 'react';
import Calculator from '@/components/Calculator';
import { ArrowRight } from 'lucide-react';
import { navigateTo } from '@/lib/utils';
import Section from '@/components/ui/Section';
import { useLanguage } from '@/context/LanguageContext';

export default function KalkulatorPage() {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="w-full pt-16 pb-16">
      <Section id="kalkulator-content" className="space-y-16">
      
        {/* Intro Section */}
        <div className="space-y-8 max-w-4xl mx-auto text-center md:text-left">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            {t.calculator.title}
          </h1>
          
          <div className="prose prose-lg text-secondary max-w-none space-y-6 leading-relaxed">
            <p className="text-xl font-serif text-accent">
              <span className="font-extrabold">{t.calculator.subtitle}</span>
            </p>
            <p>{t.calculator.intro}</p>
            
            <h3 className="text-2xl font-serif font-bold text-primary pt-4">{t.calculator.howItWorksTitle}</h3>
            <p>{t.calculator.howItWorksDesc}</p>
          </div>
        </div>

        {/* Calculator Section */}
        <Calculator />

        {/* Bottom Section */}
        <div className="max-w-2xl mx-auto text-center space-y-10 pt-10">
          <p className="text-lg text-secondary leading-relaxed">
            {t.calculator.ctaHelp}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
             <a 
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); navigateTo('#kontakt'); }}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 uppercase tracking-widest font-bold hover:bg-accent transition-colors min-w-[240px] cursor-pointer"
            >
              {t.calculator.ctaContact}
              <ArrowRight size={18} />
            </a>
            
            <a 
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); navigateTo('#portfolio'); }}
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-colors min-w-[240px] cursor-pointer"
            >
              {t.calculator.ctaPortfolio}
            </a>
          </div>
        </div>
      
      </Section>
    </div>
  );
}