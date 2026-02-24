'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn, navigateTo } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

interface NavItem {
  name: string;
  id: string;
  href: string;
  isPage?: boolean;
  isButton?: boolean;
  subItems?: { name: string; href: string }[];
}

// Fixed: Made currentHash optional to prevent errors in layouts or environments where hash state is not provided.
const Navbar = ({ currentHash = '' }: { currentHash?: string }) => {
  const { lang, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('');

  const NAV_ITEMS: NavItem[] = useMemo(() => [
    { name: t.nav.services, id: 'uslugi', href: '#uslugi' },
    { name: t.nav.target, id: 'dla-kogo', href: '#dla-kogo' },
    { 
      name: t.nav.portfolio, 
      id: 'portfolio', 
      href: '#portfolio',
      subItems: [
        { name: t.nav.selectedWorks, href: '#portfolio' },
        { name: t.nav.allProjects, href: '#/wszystkie-projekty' }
      ]
    },
    { name: t.nav.calc, id: 'kalkulator', href: '#/kalkulator', isPage: true },
    { name: t.nav.contact, id: 'kontakt', href: '#kontakt', isButton: true },
  ], [t]);

  const isSubPage = currentHash.startsWith('#/');
  const isHomePage = !isSubPage;

  // Intersection Observer for Home Page scroll spy
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.25, 
        rootMargin: "-120px 0px -40% 0px" 
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHomePage, currentHash]);

  // STRICT HIGHLIGHTING LOGIC
  const checkIsActive = (item: NavItem) => {
    // Rule: Contact button is NEVER highlighted as active (it's a button)
    if (item.isButton) return false;

    // Rule: If we are on a SUB-PAGE (starts with #/)
    if (isSubPage) {
      // 1. Direct Page Match (Calculator)
      if (item.isPage && currentHash.startsWith(item.href)) return true;
      // 2. Child Page Match (Portfolio sub-page)
      if (item.subItems?.some(sub => sub.href.startsWith('#/') && currentHash === sub.href)) return true;
      // On sub-pages, we NEVER highlight home sections
      return false;
    }

    // Rule: If we are on the HOME PAGE
    if (isHomePage) {
      // Rule 2: Exclude Hero (#main) and Contact (#kontakt) from highlighting
      if (activeSection === 'main' || activeSection === 'kontakt') return false;
      if (currentHash === '#home' || currentHash === '#' || currentHash === '' || currentHash === '#kontakt') return false;

      // Match based on scroll spy
      if (activeSection === item.id) return true;
      
      // Fallback for Portfolio parent highlighting if we are on the #portfolio hash section
      if (item.id === 'portfolio' && currentHash === '#portfolio') return true;
    }

    return false;
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setExpandedMobileItem(null);
    navigateTo(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background backdrop-blur-sm border-b border-primary">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[80px] py-2 lg:py-4 transition-all duration-300 gap-12">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 group shrink-0">
            <img 
              src="https://storage.googleapis.com/ekreacje-assets/logo_2.png" 
              alt="E-KREACJE" 
              className="h-12 sm:h-16 xl:h-[88px] w-auto object-contain transition-all duration-300 group-hover:brightness-[0.9]" 
            />
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            <nav className="flex items-center gap-6 xl:gap-10 h-full">
              {NAV_ITEMS.map((item) => {
                const isActive = checkIsActive(item);

                if (!item.subItems) {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "uppercase tracking-widest font-medium transition-all duration-300 cursor-pointer relative whitespace-nowrap",
                        // Responsive sizes
                        "text-sm xl:text-lg",
                        item.isButton
                          ? "bg-accent text-white px-5 py-2 xl:px-8 xl:py-4 hover:bg-accent-hover active:scale-95"
                          : isActive ? "text-accent font-bold" : "text-primary hover:text-accent"
                      )}
                    >
                      {item.name}
                      {!item.isButton && isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </a>
                  );
                }

                return (
                  <div key={item.id} className="relative group h-full flex items-center" onMouseEnter={() => setHoveredItem(item.id)} onMouseLeave={() => setHoveredItem(null)}>
                     <button className={cn(
                       "uppercase tracking-widest font-medium transition-all duration-300 cursor-pointer flex items-center gap-1 relative whitespace-nowrap",
                       "text-sm xl:text-lg",
                       isActive ? "text-accent font-bold" : "text-primary group-hover:text-accent"
                     )}>
                       {item.name}
                       <ChevronDown size={16} className={cn("transition-transform duration-300", hoveredItem === item.id ? "rotate-180" : "")} />
                       {isActive && (
                          <motion.div
                            layoutId="nav-underline"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                     </button>
                     <AnimatePresence>
                       {hoveredItem === item.id && (
                         <motion.div initial={{ opacity: 0, y: 10, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 10, x: "-50%" }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 pt-4 w-max min-w-[200px]">
                           <div className="bg-white border border-border shadow-xl rounded-sm overflow-hidden flex flex-col">
                             {item.subItems.map((sub) => (
                               <a
                                 key={sub.name}
                                 href={sub.href}
                                 onClick={(e) => handleNavClick(e, sub.href)}
                                 className={cn("px-6 py-4 text-sm font-bold uppercase tracking-widest transition-colors text-center whitespace-nowrap", currentHash === sub.href ? "bg-accent text-white" : "text-primary hover:bg-accent hover:text-white")}
                               >
                                 {sub.name}
                               </a>
                             ))}
                           </div>
                         </motion.div>
                       )}
                     </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 text-xs xl:text-sm font-sans tracking-widest">
                <button onClick={() => setLanguage('pl')} className={cn("transition-colors", lang === 'pl' ? "font-bold text-accent" : "text-muted hover:text-primary")}>PL</button>
                <span className="text-border">|</span>
                <button onClick={() => setLanguage('en')} className={cn("transition-colors", lang === 'en' ? "font-bold text-accent" : "text-muted hover:text-primary")}>EN</button>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-primary hover:text-accent transition-colors">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden border-t border-border bg-background overflow-hidden">
            <nav className="flex flex-col p-8 space-y-4">
              {NAV_ITEMS.map((item) => {
                 const isActive = checkIsActive(item);
                 if (item.subItems) {
                    return (
                      <div key={item.id} className="flex flex-col w-full items-center">
                        <button onClick={() => setExpandedMobileItem(prev => prev === item.id ? null : item.id)} className={cn("uppercase tracking-widest text-2xl font-medium w-full text-center py-3 flex items-center justify-center gap-2", isActive ? "text-accent font-bold" : "text-primary")}>
                          {item.name}
                          <ChevronDown size={20} className={cn("transition-transform", expandedMobileItem === item.id ? "rotate-180" : "")} />
                        </button>
                        <AnimatePresence>
                          {expandedMobileItem === item.id && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex flex-col w-full bg-primary/5 space-y-2 py-2">
                               {item.subItems.map(sub => (
                                 <a key={sub.name} href={sub.href} onClick={(e) => handleNavClick(e, sub.href)} className={cn("uppercase tracking-widest text-sm font-bold w-full text-center py-3 transition-colors", currentHash === sub.href ? "text-accent" : "text-secondary")}>
                                   {sub.name}
                                 </a>
                               ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                 }
                 return (
                  <a key={item.id} href={item.href} onClick={(e) => handleNavClick(e, item.href)} className={cn("uppercase tracking-widest text-2xl font-medium w-full text-center py-3 cursor-pointer", item.isButton ? "bg-accent text-white mt-4" : isActive ? "text-accent font-bold" : "text-primary hover:text-accent")}>
                    {item.name}
                  </a>
                );
              })}
              <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-border/20">
                 <button onClick={() => setLanguage('pl')} className={cn("text-xl uppercase tracking-widest transition-colors", lang === 'pl' ? "font-bold text-accent" : "text-muted")}>PL</button>
                 <button onClick={() => setLanguage('en')} className={cn("text-xl uppercase tracking-widest transition-colors", lang === 'en' ? "font-bold text-accent" : "text-muted")}>EN</button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;