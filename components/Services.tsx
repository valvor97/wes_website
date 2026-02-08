import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Live Performance",
    desc: "Jazz clubs, festivals, and corporate atmosphere.",
    image: "/images/service-live.jpg"
  },
  {
    id: "02",
    title: "Drum Instruction",
    desc: "Technical mastery for all skill levels.",
    image: "/images/service-instruction.jpg"
  },
  {
    id: "03",
    title: "Studio Session",
    desc: "Precision recording for albums and film scores.",
    image: "/images/service-studio.jpg"
  },
  {
    id: "04",
    title: "Transcription",
    desc: "Professional charting and notation services.",
    image: "/images/service-transcription.jpg"
  }
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-20 sm:py-32 bg-[#050505] relative overflow-hidden" aria-labelledby="services-heading">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          id="services-heading" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[#bf953f] uppercase tracking-[0.3em] text-xs font-bold mb-12 sm:mb-16"
        >
          Expertise
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-20">
            {/* List */}
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                {services.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div 
                        key={service.id}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isActive}
                        aria-label={`${service.title}: ${service.desc}`}
                        className={`group border-t border-neutral-900 py-10 sm:py-12 cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-inset min-h-[44px] ${isActive ? 'border-l-2 border-l-[#bf953f] pl-4' : 'border-l-2 border-l-transparent pl-4'}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onFocus={() => setActiveIndex(index)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveIndex(index); } }}
                    >
                        <div className="flex items-baseline justify-between mb-2">
                             <h3 className={`text-2xl sm:text-3xl md:text-5xl font-bold transition-colors duration-200 ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-white'}`}>
                                {service.title}
                            </h3>
                            <span className={`text-sm font-mono transition-colors duration-200 ${isActive ? 'text-[#bf953f]' : 'text-neutral-600 group-hover:text-[#bf953f]'}`}>{service.id}</span>
                        </div>
                        <p className={`max-w-sm font-light transition-colors duration-200 ${isActive ? 'text-neutral-400' : 'text-neutral-600 group-hover:text-neutral-400'}`}>
                            {service.desc}
                        </p>
                    </div>
                  );
                })}
                <div className="border-t border-neutral-900" />
            </motion.div>

            {/* Image Reveal Area */}
            <div className="hidden lg:block w-1/2 h-[600px] sticky top-32">
                <div className="relative w-full h-full overflow-hidden rounded-sm bg-neutral-900">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={services[activeIndex].image}
                            src={services[activeIndex].image}
                            alt={`${services[activeIndex].title} - ${services[activeIndex].desc}`}
                            loading="lazy"
                            width={600}
                            height={600}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
                        />
                    </AnimatePresence>
                    {/* Gold tint overlay */}
                    <div className="absolute inset-0 bg-[#bf953f] mix-blend-overlay opacity-20" />
                    <div className="absolute bottom-6 right-6 p-4 min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/20 backdrop-blur-md" aria-hidden="true">
                        <ArrowUpRight className="text-white w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
