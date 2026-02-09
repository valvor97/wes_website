import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-40 bg-[#050505] relative overflow-hidden border-t border-neutral-900" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          id="contact-heading" 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[8vw] sm:text-[10vw] font-bold text-white leading-none mb-16 mix-blend-exclusion"
        >
          LET'S WORK <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#fcf6ba]">TOGETHER</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center"
        >
            <p className="text-base sm:text-xl text-neutral-400 mb-10 sm:mb-12 font-light tracking-wide max-w-md mx-auto px-4">
            Available for bookings in Vancouver & Fraser Valley
            </p>
            
            <Link 
            to="/contact"
            className="group relative inline-flex items-center justify-center min-h-[48px] min-w-[160px] px-12 py-6 overflow-hidden font-bold text-black transition-all duration-200 ease-out border-2 border-[#bf953f] rounded-full shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            aria-label="Book Wes - Go to contact form"
            >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#bf953f] group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#bf953f] transition-all duration-300 transform group-hover:translate-x-full ease">Book Wes Now</span>
            <span className="relative invisible">Book Wes Now</span>
            </Link>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;