import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './app/page';
import KalkulatorPage from './app/kalkulator/page';
import AllProjectsPage from './components/AllProjectsPage';
import LegalPage from './components/LegalPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { getLegalDocs } from './data/legalData';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import './app/globals.css';

const MainApp = () => {
  const [currentHash, setCurrentHash] = useState('');
  const { lang } = useLanguage();
  const LEGAL_DOCS = getLegalDocs(lang);

  // Router Logic based on Hash
  const isKalkulator = currentHash.startsWith('#/kalkulator');
  const isAllProjects = currentHash.startsWith('#/wszystkie-projekty');
  
  // Dynamic Legal Route Checking
  const legalSlug = currentHash.startsWith('#/') ? currentHash.replace('#/', '') : null;
  const activeLegalDoc = legalSlug && LEGAL_DOCS[legalSlug as keyof typeof LEGAL_DOCS] ? LEGAL_DOCS[legalSlug as keyof typeof LEGAL_DOCS] : null;

  // Force scroll to top when switching between main page modes
  useEffect(() => {
    if (isKalkulator || isAllProjects || activeLegalDoc) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [isKalkulator, isAllProjects, activeLegalDoc]);

  useEffect(() => {
    const getPersistedPath = () => {
      try { return localStorage.getItem('ekreacje_last_path'); } catch (e) { return null; }
    };

    const initRoute = () => {
      if (typeof window === 'undefined') return;
      const urlHash = window.location.hash;
      const savedPath = getPersistedPath();
      
      let targetPath = '#home';
      if (urlHash && urlHash !== '#' && urlHash !== '') {
        targetPath = urlHash;
      } else if (savedPath && savedPath.startsWith('#')) {
        targetPath = savedPath;
      }

      setCurrentHash(targetPath);

      // Safe update of location hash if needed, avoid history.replaceState which crashes in some frames
      if ((!urlHash || urlHash === '#' || urlHash === '') && targetPath !== '#home') {
          window.location.hash = targetPath.replace('#', '');
      } else if (!urlHash) {
          window.location.hash = 'home';
      }

      // Initial Scroll Logic
      if (targetPath && targetPath !== '#home' && !targetPath.startsWith('#/')) {
         setTimeout(() => {
            const id = targetPath.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
            }
         }, 300);
      } else {
         window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    initRoute();

    const handleHashChange = () => {
      const newHash = window.location.hash || '#home';
      setCurrentHash(newHash);
      if (newHash) {
        try { localStorage.setItem('ekreacje_last_path', newHash); } catch (e) {}
      }
      if (newHash === '#home' || newHash === '' || newHash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (newHash && !newHash.startsWith('#/')) {
        const id = newHash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else if (newHash.startsWith('#/')) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="font-sans bg-background text-primary antialiased paper-bg">
      <Navbar currentHash={currentHash} />
      <main className="min-h-screen flex flex-col items-center w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {isKalkulator ? (
          <KalkulatorPage />
        ) : isAllProjects ? (
          <AllProjectsPage />
        ) : activeLegalDoc ? (
          <LegalPage doc={activeLegalDoc} />
        ) : (
          <Home />
        )}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </React.StrictMode>
  );
}