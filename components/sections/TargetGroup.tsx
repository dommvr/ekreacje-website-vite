import React from 'react';
import Section from '../ui/Section';
import { useLanguage } from '@/context/LanguageContext';

const TargetGroup = () => {
  const { t } = useLanguage();
  return (
    <Section id="dla-kogo">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-primary">{t.target.title}</h2>
        <h3 className="font-serif text-2xl md:text-3xl text-accent mb-12">{t.target.subtitle}</h3>
        
        <div className="prose prose-lg prose-headings:font-serif text-secondary max-w-none">
          <p>{t.target.desc}</p>
          
          <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {t.target.cards.map((card, idx) => (
              <div key={idx} className="border border-border p-6 hover:bg-primary hover:text-white transition-colors duration-300 group">
                <h4 className="font-bold text-xl mb-4 font-serif text-primary group-hover:text-white">{card.title}</h4>
                <p className="text-sm">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center font-medium text-lg text-primary">
            {t.target.footer}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default TargetGroup;