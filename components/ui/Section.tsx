import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  noBorder?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className, children, noBorder = false }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "w-full max-w-7xl mx-auto my-6 p-6 md:p-12 lg:p-16 relative bg-background",
        !noBorder && "border border-border",
        className
      )}
    >
      {children}
    </motion.section>
  );
};

export default Section;