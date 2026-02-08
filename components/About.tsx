import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-40 bg-[#050505] relative overflow-hidden">
      {/* Background typographic decoration */}
      <div className="absolute top-20 right-0 text-[20vw] font-bold text-white/[0.02] leading-none pointer-events-none select-none font-syne">
        STORY
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 aspect-[3/4] overflow-hidden grayscale contrast-125">
              <img 
                src="https://images.unsplash.com/photo-1524230659092-07f99a75c013?q=80&w=1470&auto=format&fit=crop" 
                alt="Wesley Anderson Portrait" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Gold Overlay Effect */}
              <div className="absolute inset-0 bg-[#bf953f] mix-blend-color opacity-0 hover:opacity-20 transition-opacity duration-700" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-[#bf953f]/30 z-0 hidden md:block" />
            <div className="absolute -top-10 -left-10 w-full h-full border border-white/5 z-0 hidden md:block" />
          </motion.div>

          {/* Text Content */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.3 }}
             className="w-full lg:w-1/2"
          >
            <div className="mb-10">
                <h4 className="text-[#bf953f] font-mono text-xs tracking-[0.4em] uppercase mb-4">The Musician</h4>
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-8">
                  ROOTED IN <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">HISTORY.</span>
                </h2>
            </div>

            <div className="space-y-8 text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl">
              <p>
                <span className="text-white font-normal">Wesley Anderson</span> is more than a drummer; he's a custodian of rhythm. Born into a legacy of melody, he studied under his grandparents, Hall of Famers <span className="text-[#bf953f]">Les Vogt and Irene Butler</span>.
              </p>
              <p>
                Refining his craft under jazz legends <span className="text-white">Joe Farnsworth</span> and <span className="text-white">Carl Allen</span>, Wes developed a sound that bridges the gap between vintage warmth and modern precision.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-white font-syne">15+</span>
                    <span className="text-xs text-neutral-600 uppercase tracking-widest mt-1">Years Playing</span>
                </div>
                <div className="w-[1px] h-12 bg-neutral-800" />
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-white font-syne">100+</span>
                    <span className="text-xs text-neutral-600 uppercase tracking-widest mt-1">Projects</span>
                </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;