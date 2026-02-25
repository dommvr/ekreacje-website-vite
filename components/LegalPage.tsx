import React, { useEffect } from 'react';
import { LegalDocument } from '@/data/legalData';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock } from 'lucide-react';
import { navigateTo } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

interface LegalPageProps {
  doc: LegalDocument;
}

const LegalPage: React.FC<LegalPageProps> = ({ doc }) => {
  const { t } = useLanguage();

  // Ensure we are at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [doc.id]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full pt-[88px] pb-[88px] px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-32 space-y-8">
          <button 
            onClick={() => navigateTo('#home')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            {t.legal.returnHome}
          </button>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted/50 pl-4 border-l border-border">
              {t.legal.tableOfContents}
            </h3>
            <nav className="space-y-4">
              {doc.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block text-left text-sm text-secondary hover:text-accent transition-colors pl-4 border-l border-transparent hover:border-accent"
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <header className="mb-16 space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary leading-tight">
                {doc.title}
              </h1>
              <div className="flex items-center gap-2 text-muted text-sm font-medium uppercase tracking-widest">
                <Clock size={16} />
                <span>{t.legal.lastUpdated}: {doc.lastUpdated}</span>
              </div>
            </header>

            {/* Sections */}
            <div className="space-y-20">
              {doc.sections.map((section) => (
                <section 
                  key={section.id} 
                  id={section.id} 
                  className="scroll-mt-32"
                >
                  <h2 className="font-serif text-3xl font-bold text-primary mb-8 pb-4 border-b border-border/50">
                    {section.title}
                  </h2>
                  <div className="prose prose-lg text-secondary leading-relaxed space-y-6 whitespace-pre-line font-sans">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Mobile Back Button */}
            <div className="lg:hidden mt-20 pt-8 border-t border-border">
               <button 
                onClick={() => navigateTo('#home')}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors"
              >
                <ArrowLeft size={16} />
                {t.legal.returnHome}
              </button>
            </div>
          </motion.div>
        </main>

      </div>
    </div>
  );
};

export default LegalPage;