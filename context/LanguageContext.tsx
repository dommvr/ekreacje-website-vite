import React, { createContext, useContext, useState, useEffect } from 'react';
import { pl, en, Dictionary } from '@/locales/data';

interface LanguageContextType {
  lang: 'pl' | 'en';
  setLanguage: (lang: 'pl' | 'en') => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<'pl' | 'en'>('pl'); // Default to PL to avoid flash

  useEffect(() => {
    // 1. Check Storage
    const stored = localStorage.getItem('ekreacje_lang');
    if (stored === 'pl' || stored === 'en') {
      setLang(stored);
      return;
    }

    // 2. Check GeoIP (As requested: "if GeoIP country == PL")
    // We use a fetch to a free API. Note: reliability depends on the API.
    const checkGeoIP = async () => {
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (response.ok) {
                const data = await response.json();
                if (data.country_code === 'PL') {
                    setLang('pl');
                    return;
                } else {
                    setLang('en');
                    return;
                }
            }
        } catch (error) {
            // API failed, fallback to browser
        }
        
        // 3. Fallback: Browser Language
        if (typeof navigator !== 'undefined') {
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('pl')) {
                setLang('pl');
            } else {
                setLang('en');
            }
        }
    };

    checkGeoIP();
  }, []);

  const setLanguage = (newLang: 'pl' | 'en') => {
    setLang(newLang);
    // Persist in localStorage
    localStorage.setItem('ekreacje_lang', newLang);
    // Persist in Cookie as requested
    document.cookie = `ekreacje_lang=${newLang}; max-age=31536000; path=/`;
  };

  const t = lang === 'pl' ? pl : en;

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};