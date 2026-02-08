import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Inquire",
    desc: "Send over your event details. We'll check availability and align on the vibe."
  },
  {
    num: "02",
    title: "Lock In",
    desc: "Logistics confirmed. Deposit secured. The date is yours."
  },
  {
    num: "03",
    title: "Experience",
    desc: "Wes arrives prepared. You get a world-class performance."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-32 bg-[#050505] relative overflow-hidden" aria-labelledby="process-heading">
      <div className="container mx-auto px-6">
        <motion.h2 
          id="process-heading" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[#bf953f] font-mono text-xs tracking-[0.4em] uppercase mb-12 sm:mb-20 text-center md:text-left"
        >
          The Process
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 relative" role="list" aria-label="Booking process steps">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[88px] left-0 w-full h-[1px] bg-neutral-800 -z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative z-10 group" 
              role="listitem"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <div className="text-7xl sm:text-9xl font-bold text-neutral-800 font-syne leading-none mb-6 group-hover:text-gradient-gold transition-all duration-200" aria-hidden="true">
                    {step.num}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{step.title}</h3>
                <div className="w-12 h-[1px] bg-[#bf953f] mb-6" />
                <p className="text-neutral-500 text-base sm:text-[1rem] font-light leading-relaxed max-w-xs">
                    {step.desc}
                </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;