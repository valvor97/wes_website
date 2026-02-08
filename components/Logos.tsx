import React from 'react';
import { motion } from 'framer-motion';

const venues = [
  "Frankie's Jazz Club",
  "Tyrant Studios",
  "District",
  "2nd Floor Gastown",
  "Guilt & Co",
  "The Blue Martini",
  "Vancouver Int. Jazz Fest",
];

const Logos: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 px-6 bg-[#050505] border-y border-neutral-900/50 overflow-hidden relative z-20" aria-label="Venues and stages where Wesley has performed">
      <div className="flex whitespace-nowrap" aria-hidden="true">
        <motion.div 
            className="flex gap-20 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {venues.map((venue, index) => (
            <span 
              key={index} 
              className="text-xl sm:text-2xl md:text-4xl font-bold text-neutral-800 uppercase tracking-tighter hover:text-[#bf953f] transition-colors duration-500 cursor-default font-serif"
            >
              {venue}
            </span>
          ))}
          {venues.map((venue, index) => (
            <span 
              key={`dup-${index}`} 
              className="text-xl sm:text-2xl md:text-4xl font-bold text-neutral-800 uppercase tracking-tighter hover:text-[#bf953f] transition-colors duration-500 cursor-default font-serif"
            >
              {venue}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Logos;