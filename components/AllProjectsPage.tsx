import React, { useState, useEffect } from 'react';
import { 
  getAllProjectsData, 
  getProjectCategories, 
  AllProjectItem, 
  ProjectCategory 
} from '@/data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

const AllProjectsPage = () => {
  const { lang } = useLanguage();
  const ALL_PROJECTS_DATA = getAllProjectsData(lang);
  const PROJECT_CATEGORIES = getProjectCategories(lang);

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(PROJECT_CATEGORIES.main[0]);
  const [selectedProject, setSelectedProject] = useState<AllProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Update active category when language changes to prevent stuck filtering state
  useEffect(() => {
    setActiveCategory(PROJECT_CATEGORIES.main[0]);
  }, [lang]);

  // Ensure page starts at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Filter Data
  const filteredProjects = ALL_PROJECTS_DATA.filter(project => {
    if (activeCategory === "Wszystkie" || activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const openProject = (project: AllProjectItem) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); 
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedProject) return;
    if (e.key === 'Escape') closeProject();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <div className="w-full pt-32 pb-20 min-h-screen px-4 sm:px-8 max-w-[1920px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-32 space-y-12">
          
          {/* Main Categories */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted opacity-80 pl-4">
              {lang === 'en' ? 'My Projects' : 'Moje projekty'}
            </h3>
            <div className="space-y-4">
              {PROJECT_CATEGORIES.main.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "block text-left text-sm transition-colors duration-300 relative pl-4 w-full",
                    activeCategory === category 
                      ? "font-bold text-primary" 
                      : "text-secondary hover:text-primary"
                  )}
                >
                  {activeCategory === category && (
                    <motion.span 
                      layoutId="active-dot"
                      className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-accent rounded-full"
                    />
                  )}
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* PROJECTS GRID */}
        <main className="flex-1 w-full min-h-[50vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer flex flex-col gap-4"
                  onClick={() => openProject(project)}
                >
                  <div className="relative p-3 bg-white border border-border transition-colors duration-300 group-hover:border-accent shadow-sm">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                         <div className="opacity-0 group-hover:opacity-100 bg-white/90 text-primary px-6 py-3 rounded-full font-bold uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            {lang === 'en' ? 'More' : 'Więcej'}
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted/60">
                      {project.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-20 text-center text-muted">
                {lang === 'en' ? 'No projects in this category.' : 'Brak projektów w tej kategorii.'}
              </div>
            )}
          </div>
        </main>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex flex-col"
            onClick={closeProject}
          >
            {/* Toolbar */}
            <div className="flex justify-between items-center p-6 text-white w-full z-10">
              <div className="text-left">
                <h2 className="font-serif text-2xl font-bold">{selectedProject.title}</h2>
                <p className="text-xs opacity-70 uppercase tracking-widest">{selectedProject.category}</p>
              </div>
              <button 
                onClick={closeProject}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex items-center justify-center relative w-full h-full px-4 md:px-20 pb-20">
              
              {/* Left Arrow (only if multiple images) */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 md:left-8 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-20"
                >
                  <ChevronLeft size={48} />
                </button>
              )}

              {/* Right Arrow (only if multiple images) */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 md:right-8 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-20"
                >
                  <ChevronRight size={48} />
                </button>
              )}

              {/* Image Display */}
              <div 
                className="relative max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} 
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                     <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - view ${currentImageIndex + 1}`}
                        className="max-h-[70vh] md:max-h-[80vh] w-auto object-contain shadow-2xl"
                      />
                     
                     <div className="absolute -bottom-12 left-0 right-0 text-center text-white/70 text-sm font-medium uppercase tracking-widest">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                     </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllProjectsPage;
