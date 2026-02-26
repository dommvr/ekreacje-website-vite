'use client';

import React from 'react';
import { Linkedin, Facebook } from 'lucide-react';
import { navigateTo } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const handleLegalClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <footer className="w-full border-t border-border py-12 bg-background">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Logo/Text + Social Icons side-by-side on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
          <div>
            <h2 className="text-xl font-serif font-bold tracking-tight text-primary">ALEKSANDRA MARCINIAK</h2>
            <p className="text-sm opacity-60 mt-1 text-muted">© {new Date().getFullYear()} {t.footer.rights}</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/ekreacje.projektownia.graficzna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/e-kreacje/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* Right Side: Links in specific requested order */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium uppercase tracking-widest text-muted">
          <a 
            href="#/polityka-prywatnosci" 
            onClick={(e) => handleLegalClick(e, '#/polityka-prywatnosci')}
            className="hover:text-accent transition-colors cursor-pointer text-center"
          >
            {t.footer.privacy}
          </a>
          <a 
            href="#/polityka-cookies" 
            onClick={(e) => handleLegalClick(e, '#/polityka-cookies')}
            className="hover:text-accent transition-colors cursor-pointer text-center"
          >
            {t.footer.cookies}
          </a>
          <a 
            href="#/regulamin" 
            onClick={(e) => handleLegalClick(e, '#/regulamin')}
            className="hover:text-accent transition-colors cursor-pointer text-center"
          >
            {t.footer.regulations}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;