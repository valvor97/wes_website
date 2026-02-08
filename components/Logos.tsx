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
  "Frankie's Jazz Club", // Repeated for smooth loop
  "Tyrant Studios",
  "District",
];

const Logos: React.FC = () => {
  return (
    <section className="py-12 bg-[#050505] border-y border-neutral-900/50 overflow-hidden relative z-20">
      <div className="flex whitespace-nowrap">
        <motion.div 
            className="flex gap-20 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {venues.map((venue, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-4xl font-bold text-neutral-800 uppercase tracking-tighter hover:text-[#bf953f] transition-colors duration-500 cursor-default font-serif"
            >
              {venue}
            </span>
          ))}
          {venues.map((venue, index) => (
            <span 
              key={`dup-${index}`} 
              className="text-2xl md:text-4xl font-bold text-neutral-800 uppercase tracking-tighter hover:text-[#bf953f] transition-colors duration-500 cursor-default font-serif"
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