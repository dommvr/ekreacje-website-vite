'use client';

import React, { useRef } from 'react';
import Section from '../ui/Section';
import { Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    // Reset height to auto to correctly calculate new scrollHeight (shrink if text is deleted)
    target.style.height = 'auto';
    // Set new height based on content
    target.style.height = `${target.scrollHeight}px`;
  };

  return (
    <Section id="kontakt">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Info */}
        <div className="space-y-6 text-secondary">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">{t.contact.title}</h2>
          <p className="text-lg">
            {t.contact.desc}
          </p>
          
          <div className="bg-white border border-border p-6 my-6">
            <h3 className="font-bold text-xl mb-2 font-serif text-primary">{t.contact.boxTitle}</h3>
            <p className="text-sm leading-relaxed">
              {t.contact.boxDesc}
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <h4 className="font-bold uppercase tracking-widest text-accent">{t.contact.prepTitle}</h4>
            <ul className="list-disc list-inside space-y-2 text-secondary">
              {t.contact.prepList.map((item, idx) => (
                <li key={idx}>
                  <strong className="text-primary">{item.label}</strong> {item.value}
                </li>
              ))}
            </ul>
            <p className="italic text-xs mt-2 text-muted">{t.contact.noData}</p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white border border-border p-8 md:p-10 shadow-lg">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest mb-2 text-primary">{t.contact.form.email}</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-background border border-border p-3 focus:outline-none focus:border-accent transition-colors text-primary"
                placeholder="twoj@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest mb-2 text-primary">{t.contact.form.msg}</label>
              <textarea 
                ref={textareaRef}
                id="message" 
                rows={8}
                onInput={handleInput}
                required
                className="w-full bg-background border border-border p-3 focus:outline-none focus:border-accent transition-colors resize-none text-primary overflow-hidden min-h-[120px]"
                placeholder={t.contact.form.placeholder}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary text-white py-4 uppercase tracking-widest font-bold hover:bg-accent transition-colors flex items-center justify-center gap-2 group"
            >
              {t.contact.form.send}
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-center opacity-60 text-muted">{t.contact.form.success}</p>
          </form>
        </div>

      </div>
    </Section>
  );
};

export default Contact;