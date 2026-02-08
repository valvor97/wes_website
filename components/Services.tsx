import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Live Performance",
    desc: "Jazz clubs, festivals, and corporate atmosphere.",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Drum Instruction",
    desc: "Technical mastery for all skill levels.",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Studio Session",
    desc: "Precision recording for albums and film scores.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Transcription",
    desc: "Professional charting and notation services.",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?q=80&w=2070&auto=format&fit=crop"
  }
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h3 className="text-[#bf953f] uppercase tracking-[0.3em] text-xs font-bold mb-16">Expertise</h3>

        <div className="flex flex-col lg:flex-row gap-20">
            {/* List */}
            <div className="w-full lg:w-1/2 flex flex-col">
                {services.map((service, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div 
                        key={service.id}
                        role="button"
                        tabIndex={0}
                        className={`group border-t border-neutral-900 py-12 cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-inset ${isActive ? 'pl-4' : 'hover:pl-4'}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onFocus={() => setActiveIndex(index)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveIndex(index); } }}
                    >
                        <div className="flex items-baseline justify-between mb-2">
                             <h2 className={`text-3xl md:text-5xl font-bold transition-colors duration-200 ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-white'}`}>
                                {service.title}
                            </h2>
                            <span className={`text-sm font-mono transition-colors duration-200 ${isActive ? 'text-[#bf953f]' : 'text-neutral-600 group-hover:text-[#bf953f]'}`}>{service.id}</span>
                        </div>
                        <p className={`max-w-sm font-light transition-colors duration-200 ${isActive ? 'text-neutral-400' : 'text-neutral-600 group-hover:text-neutral-400'}`}>
                            {service.desc}
                        </p>
                    </div>
                  );
                })}
                <div className="border-t border-neutral-900" />
            </div>

            {/* Image Reveal Area */}
            <div className="hidden lg:block w-1/2 h-[600px] sticky top-32">
                <div className="relative w-full h-full overflow-hidden rounded-sm bg-neutral-900">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={services[activeIndex].image}
                            src={services[activeIndex].image}
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
