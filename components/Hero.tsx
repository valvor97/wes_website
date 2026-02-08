import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full" aria-label="Hero - Wesley Anderson Professional Drummer">
      {/* 
        Fixed Background Video
        Stays pinned.
      */}
      <div className="fixed inset-0 z-0 min-h-dvh h-screen w-full pointer-events-none" aria-hidden="true">
        <img 
          src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=2070&auto=format&fit=crop" 
          alt=""
          role="presentation"
          fetchPriority="high"
          className="w-full h-full object-cover grayscale contrast-125 brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/80" />
      </div>

      {/* 
        Slide 1: Name 
        Uses new Syne font and gradient gold.
      */}
      <div className="relative z-10 min-h-dvh h-screen w-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="text-[10vw] sm:text-[12vw] leading-[0.85] font-extrabold uppercase tracking-tighter select-none">
            <span className="text-white mix-blend-overlay opacity-80">Wesley</span>
            <br />
            <span className="text-gradient-gold mt-[-2vw] block">Anderson</span>
          </h1>
          
          <div className="mt-8 sm:mt-12 flex items-center justify-center gap-4 sm:gap-6 px-2">
            <div className="h-[1px] w-8 sm:w-12 bg-neutral-700" aria-hidden="true" />
            <p className="text-sm sm:text-base tracking-[0.3em] uppercase text-neutral-400 font-sans">
              Professional Drummer & Educator
            </p>
            <div className="h-[1px] w-12 bg-neutral-700" />
          </div>
        </motion.div>
      </div>

      {/* Slide 2: Legacy */}
      <div className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-6 bg-gradient-to-b from-transparent to-[#050505]">
        <motion.div 
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-24"
        >
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <div className="border-l border-[#bf953f]/30 pl-8 md:pl-16 py-4">
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
                  LEGACY <br/>
                  <span className="text-gradient-gold italic pr-4">IN EVERY</span> <br/>
                  STROKE.
                </h2>
              </div>
              
              <div className="pl-8 md:pl-16">
                 <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-md">
A third-generation musician and drummer with Hall of Fame roots. Merging jazz tradition with modern precision for events that leave a mark.
                 </p>
                 <a 
                  href="#contact"
                  aria-label="Start the conversation - go to contact section"
                  className="mt-8 inline-flex items-center gap-2 min-h-[44px] min-w-[44px] cursor-pointer text-[#bf953f] uppercase tracking-widest text-xs sm:text-sm font-bold hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] group"
                >
                  <span className="border-b border-[#bf953f] pb-px group-hover:border-white">Start The Conversation</span>
                </a>
              </div>
            </div>

            {/* Image Composition */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative aspect-[3/4] overflow-hidden grayscale contrast-125 border-l border-[#bf953f]/20 pl-4 pt-4">
                 <img 
                  src="/images/legacy-drummer.png" 
                  alt="Wesley Anderson, Vancouver drummer, performing live" 
                  loading="lazy"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover opacity-80"
                />
                {/* Overlay gradient for blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
              </div>
            </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
