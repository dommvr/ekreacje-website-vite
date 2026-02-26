'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Section from '../ui/Section';
import { ChevronLeft, ChevronRight, X, BookOpen, ArrowLeft, ArrowRight, AlignLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPortfolioData } from '@/data/portfolioData';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import HTMLFlipBook from 'react-pageflip';

const WORD_LIMIT = 30; // Limit words for the small designer note window

// Helper component for individual pages to work with react-pageflip
const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>((props, ref) => {
  return (
    <div className={cn("bg-[#fdfbf7] shadow-inner overflow-hidden", props.className)} ref={ref}>
      <div className="w-full h-full relative">
        {props.children}
        {/* Subtle page texture/noise */}
        <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.03] bg-noise" />
      </div>
    </div>
  );
});

Page.displayName = 'Page';

const Portfolio = () => {
  const { lang, t } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(lang);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [isFullNoteOpen, setIsFullNoteOpen] = useState(false);
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const flipBookRef = useRef<any>(null);

  const currentBook = PORTFOLIO_DATA[currentIndex];
  const totalBooks = PORTFOLIO_DATA.length;

  // Flatten spreads into individual pages for the flipbook
  const pages = React.useMemo(() => {
    const allPages: string[] = [];
    currentBook.spreads.forEach(spread => {
      allPages.push(spread.leftSrc);
      allPages.push(spread.rightSrc);
    });
    return allPages;
  }, [currentBook]);

  // --- CONTENT PREP ---
  // Split by whitespace to ensure newlines don't mess up word count
  const words = currentBook.designNotes.split(/\s+/);
  const isLongText = words.length > WORD_LIMIT;
  const truncatedText = isLongText 
    ? words.slice(0, WORD_LIMIT).join(' ') + '...' 
    : currentBook.designNotes;

  // Formatter for rich text display in full view
  const renderFormattedNotes = (text: string) => {
    return text.split('\n').filter(line => line.trim() !== '').map((line, idx) => {
      const trimmed = line.trim();
      
      // 1. Check for "Key: Value" pattern
      const colonIndex = trimmed.indexOf(':');
      if (colonIndex > 0 && colonIndex < 60) {
        const key = trimmed.substring(0, colonIndex + 1);
        const value = trimmed.substring(colonIndex + 1);
        return (
          <p key={idx} className="mb-4">
            <span className="font-bold text-primary block sm:inline mr-2">{key}</span>
            <span>{value}</span>
          </p>
        );
      }
      
      // 2. Check for list items (starting with 1/, 2/)
      if (trimmed.match(/^\d+\//)) {
         return (
          <p key={idx} className="mb-4 pl-4 border-l-2 border-accent/30 italic">
            {trimmed}
          </p>
         );
      }

      // 3. Subtitle Heuristic
      if (idx === 0 && trimmed.length < 60 && !trimmed.match(/[.!?]$/)) {
         return <h4 key={idx} className="font-serif font-bold text-xl text-primary mb-6 mt-2 pb-2 border-b border-border/50 inline-block">{trimmed}</h4>
      }

      // 4. Standard Paragraph
      return <p key={idx} className="mb-4">{trimmed}</p>;
    });
  };

  // --- RESET STATE ON CHANGE ---
  useEffect(() => {
    // When book changes, reset inner states
    setCurrentSpreadIndex(0);
    setIsFullNoteOpen(false);
  }, [currentIndex]);

  // --- CAROUSEL LOGIC ---
  const nextBook = () => {
    if (isReaderOpen) {
      setIsReaderOpen(false);
      setIsFullNoteOpen(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === totalBooks - 1 ? 0 : prev + 1));
      }, 300);
    } else {
      setCurrentIndex((prev) => (prev === totalBooks - 1 ? 0 : prev + 1));
    }
  };

  const prevBook = () => {
    if (isReaderOpen) {
      setIsReaderOpen(false);
      setIsFullNoteOpen(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === 0 ? totalBooks - 1 : prev - 1));
      }, 300);
    } else {
      setCurrentIndex((prev) => (prev === 0 ? totalBooks - 1 : prev - 1));
    }
  };

  const openReader = () => {
    setCurrentSpreadIndex(0);
    setIsReaderOpen(true);
    setIsFullNoteOpen(false);
  };

  const closeReader = () => {
    setIsReaderOpen(false);
    setIsFullNoteOpen(false);
  };

  // --- READER LOGIC ---
  const onFlip = useCallback((e: any) => {
    // react-pageflip returns page index. Since we show 2 pages, spread index is page / 2
    setCurrentSpreadIndex(Math.floor(e.data / 2));
  }, []);

  const nextSpread = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevSpread = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  // --- KEYBOARD LISTENERS ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isReaderOpen) return;

      if (e.key === 'Escape') {
        if (isFullNoteOpen) setIsFullNoteOpen(false);
        else closeReader();
      }
      if (!isFullNoteOpen) {
        if (e.key === 'ArrowLeft') prevSpread();
        if (e.key === 'ArrowRight') nextSpread();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isReaderOpen, isFullNoteOpen]);


  return (
    <Section id="portfolio" className="flex flex-col gap-12 min-h-[800px]">
      
      {/* 1. HEADER AREA */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
          {t.portfolio.title}
        </h2>
        <p className="text-lg leading-relaxed text-secondary">
          {t.portfolio.desc}
          <span className="block mt-2 font-medium text-accent">
            {t.portfolio.clickHint}
          </span>
        </p>
      </div>

      {/* 2. MAIN DISPLAY AREA */}
      <div className="relative flex-1 flex flex-col items-center w-full">
        
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
          <button 
            onClick={prevBook}
            className="p-3 md:p-4 rounded-full bg-white/80 border border-primary/20 text-primary hover:bg-accent hover:text-white hover:border-accent transition-all shadow-lg backdrop-blur-sm group"
            aria-label="Previous book"
          >
            <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
          <button 
            onClick={nextBook}
            className="p-3 md:p-4 rounded-full bg-white/80 border border-primary/20 text-primary hover:bg-accent hover:text-white hover:border-accent transition-all shadow-lg backdrop-blur-sm group"
            aria-label="Next book"
          >
            <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Content Container */}
        <div className="w-full px-16 md:px-24 relative min-h-[600px] flex items-start justify-center">
          <AnimatePresence mode="wait">
            
            {!isReaderOpen ? (
              /* --- STATE A: CLOSED CAROUSEL --- */
              <motion.div
                key="carousel-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-6"
              >
                 {/* Carousel Item */}
                <div className="relative group cursor-pointer perspective-1000" onClick={openReader}>
                  <motion.div
                    key={currentBook.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative shadow-2xl rounded-sm overflow-hidden"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img
                      src={currentBook.coverSrc}
                      alt={currentBook.title}
                      className="w-[300px] md:w-[350px] h-auto object-cover rounded-sm transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Spine Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/40 to-transparent opacity-50 rounded-l-sm pointer-events-none z-10" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center z-20">
                      <div className="opacity-0 group-hover:opacity-100 bg-white/90 text-primary px-6 py-3 rounded-full font-bold uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {t.portfolio.open}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="text-center space-y-2 mt-4">
                  <h3 className="text-2xl font-serif font-bold text-primary">{currentBook.title}</h3>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">{currentBook.category}</p>
                </div>
              </motion.div>

            ) : (
              /* --- STATE B: READER CONTAINER --- */
              <motion.div
                key="reader-container"
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AnimatePresence mode="wait">
                  {!isFullNoteOpen ? (
                    /* --- SUB-STATE B1: BOOK + SMALL NOTES --- */
                    <motion.div
                      key="split-view"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start"
                    >
                      {/* 1. BOOK PREVIEW AREA (2/3 width) */}
                      <div className="lg:col-span-2 flex flex-col items-center w-full">
                        
                        <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] bg-transparent mb-6 flex items-center justify-center overflow-visible">
                          {/* @ts-ignore */}
                          <HTMLFlipBook
                            key={currentBook.id}
                            width={500}
                            height={700}
                            size="stretch"
                            minWidth={250}
                            maxWidth={1000}
                            minHeight={350}
                            maxHeight={1400}
                            maxShadowOpacity={0.5}
                            showCover={false}
                            mobileScrollSupport={true}
                            onFlip={onFlip}
                            className="portfolio-flipbook"
                            ref={flipBookRef}
                            useMouseEvents={true}
                            startPage={0}
                            drawShadow={true}
                            flippingTime={1000}
                            swipeDistance={30}
                            showPageCorners={true}
                            disableFlipByClick={false}
                          >
                            {pages.map((pageSrc, index) => (
                              <Page key={`${currentBook.id}-page-${index}`}>
                                <img 
                                  src={pageSrc} 
                                  alt={`Page ${index + 1}`}
                                  className="w-full h-full object-contain pointer-events-none"
                                />
                                {/* Spine shadow for inner pages */}
                                <div className={cn(
                                  "absolute top-0 bottom-0 w-12 pointer-events-none z-10",
                                  index % 2 === 0 
                                    ? "right-0 bg-gradient-to-l from-black/15 to-transparent" // Left page shadow
                                    : "left-0 bg-gradient-to-r from-black/15 to-transparent"  // Right page shadow
                                )} />
                              </Page>
                            ))}
                          </HTMLFlipBook>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex justify-center items-center gap-8 w-full">
                          <button 
                            onClick={prevSpread}
                            disabled={currentSpreadIndex === 0}
                            className="p-3 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary transition-colors"
                          >
                            <ArrowLeft size={20} />
                          </button>
                          <span className="font-serif text-base text-secondary font-medium">
                            {t.portfolio.spread} {currentSpreadIndex + 1} / {currentBook.spreads.length}
                          </span>
                          <button 
                            onClick={nextSpread}
                            disabled={currentSpreadIndex === currentBook.spreads.length - 1}
                            className="p-3 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary transition-colors"
                          >
                            <ArrowRight size={20} />
                          </button>
                        </div>
                      </div>

                      {/* 2. DESCRIPTION PANEL (1/3 width) - Small View */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 bg-white border border-border p-8 h-full shadow-sm relative flex flex-col"
                      >
                        <button 
                          onClick={closeReader}
                          className="absolute top-4 right-4 p-2 text-muted hover:text-accent transition-colors"
                          title={t.portfolio.back}
                        >
                          <X size={24} />
                        </button>

                        <div className="space-y-6 mt-4">
                          <div>
                            <h3 className="font-serif text-2xl font-bold text-primary mb-1">{currentBook.title}</h3>
                            {currentBook.author && (
                              <p className="text-sm text-secondary font-medium mb-1 italic">{currentBook.author}</p>
                            )}
                            <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest rounded-full">
                              {currentBook.category}
                            </span>
                          </div>

                          <div className="text-secondary font-serif leading-relaxed text-sm md:text-base">
                            <h4 className="font-sans font-bold text-primary uppercase tracking-widest text-xs mb-3">{t.portfolio.aboutProject}</h4>
                            <p className="opacity-90">
                              {truncatedText}
                            </p>
                            
                            {/* CTA: Read More */}
                            {isLongText && (
                              <button 
                                onClick={() => setIsFullNoteOpen(true)}
                                className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent border-b border-primary hover:border-accent pb-1 transition-all group"
                              >
                                {t.portfolio.readMore}
                                <AlignLeft size={14} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                            )}
                          </div>

                          <div className="pt-6 border-t border-border mt-auto">
                            <div className="flex items-center gap-2 text-sm text-muted">
                              <BookOpen size={16} />
                              <span>{t.portfolio.format}: A5 / Oprawa miękka</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                  ) : (
                    /* --- SUB-STATE B2: FULL NOTE VIEW (Replaces Book+Sidebar) --- */
                    <motion.div
                      key="full-note-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full max-w-4xl mx-auto bg-white border border-border shadow-2xl relative p-8 md:p-16 min-h-[500px] flex flex-col"
                    >
                      <button 
                        onClick={() => setIsFullNoteOpen(false)}
                        className="absolute top-6 right-6 p-2 text-primary hover:text-accent transition-colors flex items-center gap-2 group"
                      >
                        <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{t.portfolio.back}</span>
                        <X size={32} />
                      </button>

                      <div className="max-w-2xl mx-auto w-full space-y-10 mt-8">
                        <div className="space-y-4 border-b border-accent/20 pb-8">
                          <span className="text-accent font-bold uppercase tracking-widest text-sm block">
                            {t.portfolio.notesTitle}
                          </span>
                          <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary">
                            {currentBook.title}
                          </h3>
                          {currentBook.author && (
                            <p className="text-xl text-secondary font-medium italic mt-2">{currentBook.author}</p>
                          )}
                        </div>

                        <div className="font-serif text-lg text-secondary leading-loose max-w-none">
                          {renderFormattedNotes(currentBook.designNotes)}
                        </div>

                        <div className="pt-8 border-t border-border flex justify-between items-center">
                          <button 
                             onClick={() => setIsFullNoteOpen(false)}
                             className="text-sm font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors flex items-center gap-2"
                          >
                            <ArrowLeft size={16} />
                            {t.portfolio.backToPreview}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Pagination dots for total context */}
      <div className="flex justify-center gap-2 mt-4">
        {PORTFOLIO_DATA.map((_, idx) => (
          <div 
            key={idx}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentIndex === idx ? "bg-accent w-6" : "bg-border"
            )}
          />
        ))}
      </div>

    </Section>
  );
};

export default Portfolio;