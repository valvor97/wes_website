import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-[#050505] relative overflow-hidden border-t border-neutral-900">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-[10vw] font-bold text-white leading-none mb-4 mix-blend-exclusion">
          LET'S WORK
        </h2>
        <h2 className="text-[10vw] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#fcf6ba] leading-none mb-16">
          TOGETHER
        </h2>
        
        <div className="flex flex-col items-center">
            <p className="text-xl text-neutral-400 mb-12 font-light tracking-wide">
            Available for bookings in Vancouver & Fraser Valley
            </p>
            
            <a 
            href="mailto:booking@wesleyanderson.com"
            className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold text-black transition-transform duration-300 ease-out border-2 border-[#bf953f] rounded-full shadow-md group"
            >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#bf953f] group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#bf953f] transition-all duration-300 transform group-hover:translate-x-full ease">Book Wes Now</span>
            <span className="relative invisible">Book Wes Now</span>
            </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;