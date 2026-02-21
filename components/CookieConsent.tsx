'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { navigateTo } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage immediately
    const consent = localStorage.getItem('ekreacje_cookie_consent');
    if (!consent) {
      // Slight delay for UX so it doesn't pop up instantly on load
      const timer = setTimeout(() => setIsVisible(true), 1500); 
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ekreacje_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('ekreacje_cookie_consent', 'declined');
    setIsVisible(false);
  };

  const handleAdvanced = () => {
     // Navigate to the full cookies policy
     navigateTo('#/polityka-cookies');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-[100] max-w-[380px] w-[calc(100%-3rem)] font-sans"
        >
          <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] relative overflow-hidden p-8 border-l-4 border-accent">
             
             {/* Header */}
             <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                   <Cookie size={24} strokeWidth={2.5} />
                </div>
                <h3 className="font-serif text-3xl font-bold text-primary tracking-tight">{t.cookie.title}</h3>
             </div>
             
             {/* Text */}
             <p className="text-[15px] text-secondary font-serif leading-relaxed italic mb-8">
                {t.cookie.text}
             </p>

             {/* Buttons */}
             <div className="flex gap-4 mb-8">
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-accent text-white py-3 px-2 uppercase tracking-widest font-bold text-xs hover:bg-accent-hover transition-colors shadow-sm"
                >
                  {t.cookie.accept}
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 bg-white border border-primary text-primary py-3 px-2 uppercase tracking-widest font-bold text-xs hover:bg-primary hover:text-white transition-colors"
                >
                  {t.cookie.decline}
                </button>
             </div>

             {/* Advanced Link */}
             <div className="text-center">
                <button 
                  onClick={handleAdvanced}
                  className="text-[10px] uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors font-medium"
                >
                   {t.cookie.advanced}
                </button>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;