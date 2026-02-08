import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-[#050505] relative" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2 
          id="testimonials-heading" 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-16 sm:mb-24"
        >
            THE <span className="text-neutral-700">WORD</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" role="list">
            <motion.article 
              className="glow-card" 
              role="listitem"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <blockquote className="glow-card-inner p-8 sm:p-10 group">
                    <Quote className="w-8 h-8 text-[#bf953f] mb-6 opacity-50" aria-hidden="true" />
                    <p className="text-base sm:text-lg md:text-2xl font-light text-neutral-300 leading-relaxed mb-8 max-w-prose">
                        "Wes just gets it. Solid feel, no ego, easy to play with."
                    </p>
                    <footer>
                        <p className="text-white font-bold font-syne">Marcus T.</p>
                        <p className="text-[#bf953f] text-xs font-mono uppercase">Vancouver Jazz Scene</p>
                    </footer>
                </blockquote>
            </motion.article>

            <motion.article 
              className="glow-card mt-0 md:mt-12" 
              role="listitem"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <blockquote className="glow-card-inner p-8 sm:p-10 group">
                    <Quote className="w-8 h-8 text-[#bf953f] mb-6 opacity-50" aria-hidden="true" />
                    <p className="text-base sm:text-lg md:text-2xl font-light text-neutral-300 leading-relaxed mb-8 max-w-prose">
                        "Showed up, learned the tunes fast, didn't waste a single take. I'd book him again."
                    </p>
                    <footer>
                        <p className="text-white font-bold font-syne">Dave R.</p>
                        <p className="text-[#bf953f] text-xs font-mono uppercase">Recording Session</p>
                    </footer>
                </blockquote>
            </motion.article>

            <motion.article 
              className="glow-card" 
              role="listitem"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.65, delay: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <blockquote className="glow-card-inner p-8 sm:p-10 group">
                    <Quote className="w-8 h-8 text-[#bf953f] mb-6 opacity-50" aria-hidden="true" />
                    <p className="text-base sm:text-lg md:text-2xl font-light text-neutral-300 leading-relaxed mb-8 max-w-prose">
                        "We hired Wes for a corporate event and honestly weren't sure what to expect. It was our first time booking live jazz. He made the whole process easy. Answered all our questions, showed up early, read the room perfectly. Our guests kept asking where we found him. Looking to book him for next year."
                    </p>
                    <footer>
                        <p className="text-white font-bold font-syne">Sarah M.</p>
                        <p className="text-[#bf953f] text-xs font-mono uppercase">Event Planner</p>
                    </footer>
                </blockquote>
            </motion.article>

            <motion.article 
              className="glow-card mt-0 md:mt-12" 
              role="listitem"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.65, delay: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <blockquote className="glow-card-inner p-8 sm:p-10 group">
                    <Quote className="w-8 h-8 text-[#bf953f] mb-6 opacity-50" aria-hidden="true" />
                    <p className="text-base sm:text-lg md:text-2xl font-light text-neutral-300 leading-relaxed mb-8 max-w-prose">
                        "Always on time, always prepared. Makes my job easier."
                    </p>
                    <footer>
                        <p className="text-white font-bold font-syne">Kevin L.</p>
                        <p className="text-[#bf953f] text-xs font-mono uppercase">Frankie's Jazz Club</p>
                    </footer>
                </blockquote>
            </motion.article>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;