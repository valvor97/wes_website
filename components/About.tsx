import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-40 bg-[#050505] relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background typographic decoration */}
      <div className="absolute top-20 right-0 text-[20vw] font-bold text-white/[0.02] leading-none pointer-events-none select-none font-syne">
        STORY
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 aspect-[3/4] overflow-hidden grayscale contrast-125">
              <img 
                src="/images/wes-bio.png" 
                alt="Wesley Anderson, Vancouver drummer, in formal performance setting"
                loading="lazy"
                width={600}
                height={800}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-out"
              />
              {/* Gold Overlay Effect */}
              <div className="absolute inset-0 bg-[#bf953f] mix-blend-color opacity-0 hover:opacity-20 transition-opacity duration-200" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-[#bf953f]/30 z-0 hidden md:block" />
            <div className="absolute -top-10 -left-10 w-full h-full border border-white/5 z-0 hidden md:block" />
          </motion.div>

          {/* Text Content */}
          <motion.div 
             initial={{ opacity: 0, y: 32 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.15 }}
             transition={{ duration: 0.65, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
             className="w-full lg:w-1/2"
          >
            <div className="mb-10">
                <p className="text-[#bf953f] font-mono text-xs tracking-[0.4em] uppercase mb-4" aria-hidden="true">The Musician</p>
                <h2 id="about-heading" className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-8">
                  ROOTED IN <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">TRADITION.</span>
                </h2>
            </div>

            <div className="space-y-8 text-base sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl">
              <p>
                Wesley is a Vancouver drummer and educator who grew up surrounded by Hall of Fame talent. His grandparents <span className="text-white">Les</span> and <span className="text-white">Irene</span> are BC Country Music legends.
              </p>
              <p>
                Later, he trained under jazz greats <span className="text-white">Joe Farnsworth</span> and <span className="text-white">Carl Allen</span>, shaping him into the versatile musician he is today. From jazz and rock to country and folk, he locks in and delivers for every project, event and stage.
              </p>
            </div>

            <a 
              href="/bio" 
              aria-label="Read full biography of Wesley Anderson"
              className="inline-flex items-center gap-2 mt-8 min-h-[44px] min-w-[44px] text-[#bf953f] uppercase tracking-widest text-xs font-bold hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] group"
            >
              <span className="border-b border-[#bf953f] pb-px group-hover:border-white">Read Full Biography</span>
            </a>

            <div className="mt-12 flex items-center gap-8">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-white font-syne">13+</span>
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