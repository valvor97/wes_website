import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full">
      {/* 
        Fixed Background Video
        Stays pinned.
      */}
      <div className="fixed inset-0 z-0 min-h-dvh h-screen w-full pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=2070&auto=format&fit=crop" 
          alt="Drummer background" 
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
          <h1 className="text-[12vw] leading-[0.85] font-extrabold uppercase tracking-tighter text-white mix-blend-overlay opacity-80 select-none">
            Wesley
          </h1>
          <h1 className="text-[12vw] leading-[0.85] font-extrabold uppercase tracking-tighter text-gradient-gold select-none mt-[-2vw]">
            Anderson
          </h1>
          
          <div className="mt-12 flex items-center justify-center gap-6">
            <div className="h-[1px] w-12 bg-neutral-700" />
            <p className="text-sm tracking-[0.3em] uppercase text-neutral-400 font-sans">
              Professional Drummer & Educator
            </p>
            <div className="h-[1px] w-12 bg-neutral-700" />
          </div>
        </motion.div>
      </div>

      {/* 
        Slide 2: Legacy
        Futuristic minimal layout.
      */}
      <div className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-6 bg-gradient-to-b from-transparent to-[#050505]">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl w-full"
        >
            <div className="border-l border-[#bf953f]/30 pl-8 md:pl-16 py-4">
              <h2 className="text-6xl md:text-9xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
                LEGACY <br/>
                <span className="text-gradient-gold italic pr-4">IN EVERY</span> <br/>
                STROKE.
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row justify-end mt-12 md:mt-24 gap-12">
               <div className="max-w-md">
                 <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                    A third-generation drummer with Hall of Fame roots. 
                    Merging jazz tradition with modern precision for events that demand excellence.
                 </p>
                 <a 
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 min-h-[44px] cursor-pointer text-[#bf953f] border-b border-[#bf953f] pb-1 uppercase tracking-widest text-xs font-bold hover:text-white hover:border-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
                >
                  Start The Conversation
                </a>
               </div>
            </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;