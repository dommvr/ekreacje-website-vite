import React from 'react';
import Section from '../ui/Section';
import { ArrowRight } from 'lucide-react';
import { navigateTo } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  return (
    <Section id="uslugi">
      <div className="space-y-16">
        
        {/* Intro */}
        <div className="space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-primary">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed text-secondary">
            <div>
              <p className="mb-4">{t.services.intro1}</p>
            </div>
            <div>
              <p>{t.services.intro2}</p>
            </div>
          </div>
        </div>

        <hr className="border-border" />

        {/* Detailed List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold mb-4 text-primary">{t.services.whatIdoTitle}</h3>
            <p className="text-muted">{t.services.whatIdoDesc}</p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-4 text-secondary">
              {t.services.list.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start group">
                  <span className="text-accent mt-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={20} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-border" />

        {/* Process & Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Process */}
          <div className="space-y-6 text-secondary">
            <h3 className="font-serif text-3xl font-bold text-primary">{t.services.processTitle}</h3>
            <p>{t.services.processDesc}</p>
            <ul className="list-decimal list-inside space-y-3 font-medium">
              {t.services.processSteps.map((step, idx) => (
                <li key={idx}><span className="font-bold text-primary">{step.title}</span> {step.desc}</li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="space-y-6 bg-accent-soft p-8 border border-border flex flex-col">
            <h3 className="font-serif text-3xl font-bold text-primary">{t.services.pricingTitle}</h3>
            <p className="text-sm text-secondary">
              {t.services.pricingDesc}
            </p>
            <div className="space-y-2 text-sm text-secondary">
              <p><strong>{t.services.pricingFactors}</strong></p>
            </div>
            <div className="mt-4 pt-4 border-t border-accent">
              <p className="font-bold mb-2 text-primary">{t.services.pricingListTitle}</p>
              <ul className="space-y-1 text-sm text-secondary">
                {t.services.pricingList.map((item, idx) => (
                  <li key={idx}><span className="font-bold text-primary">{item.label}</span> {item.value}</li>
                ))}
              </ul>
            </div>
            
            {/* New Calculator CTA Button */}
            <div className="mt-8 pt-6 border-t border-accent">
              <a 
                href="#/kalkulator"
                onClick={(e) => { e.preventDefault(); navigateTo('#/kalkulator'); }}
                className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm hover:text-accent-hover group transition-colors"
              >
                {t.services.pricingCta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer of section */}
        <div className="text-center space-y-6 bg-primary text-background p-8 md:p-12">
          <p className="text-lg md:text-xl font-serif">
            {t.services.footerTitle}
          </p>
          <p className="opacity-90 max-w-2xl mx-auto">
            {t.services.footerDesc}
          </p>
          <a 
            href="#kontakt"
            onClick={(e) => { e.preventDefault(); navigateTo('#kontakt'); }} 
            className="inline-block mt-4 bg-accent text-white px-8 py-3 uppercase tracking-widest font-bold hover:bg-accent-hover transition-colors cursor-pointer"
          >
            {t.services.footerCta}
          </a>
        </div>

      </div>
    </Section>
  );
};

export default Services;