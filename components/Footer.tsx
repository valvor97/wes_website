import React from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-20 sm:pt-32 pb-12 border-t border-neutral-900" role="contentinfo">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
            <div className="w-full lg:max-w-xl">
                <h3 className="text-white font-bold text-lg sm:text-xl mb-6">Navigation</h3>
                <div className="grid grid-cols-2 gap-x-16 gap-y-2 sm:gap-x-24 font-mono text-sm text-neutral-500">
                    <a href="#" className="hover:text-[#bf953f] transition-colors duration-200 cursor-pointer py-2 inline-block min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">HOME</a>
                    <a href="#benefits" className="hover:text-[#bf953f] transition-colors duration-200 cursor-pointer py-2 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">EXPERTISE</a>
                    <a href="#services" className="hover:text-[#bf953f] transition-colors duration-200 cursor-pointer py-2 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">SERVICES</a>
                    <a href="#gigs" className="hover:text-[#bf953f] transition-colors duration-200 cursor-pointer py-2 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">LIVE DATES</a>
                    <a href="#about" className="hover:text-[#bf953f] transition-colors duration-200 cursor-pointer py-2 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">BIOGRAPHY</a>
                    <a href="#videos" className="hover:text-[#bf953f] transition-colors duration-200 cursor-pointer py-2 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">PORTFOLIO</a>
                    <a href="#process" className="hover:text-[#bf953f] transition-colors duration-200 cursor-pointer py-2 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">PROCESS</a>
                    <a href="#testimonials" className="hover:text-[#bf953f] transition-colors duration-200 cursor-pointer py-2 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">TESTIMONIALS</a>
                    <a href="#contact" className="hover:text-[#bf953f] transition-colors duration-200 cursor-pointer py-2 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]">CONTACT</a>
                </div>
            </div>

            <div className="shrink-0">
                 <h3 className="text-white font-bold text-lg sm:text-xl mb-6">Connect</h3>
                 <div className="flex gap-6">
                    <a href="#" className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#bf953f] hover:border-[#bf953f] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]" aria-label="Instagram">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#bf953f] hover:border-[#bf953f] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]" aria-label="YouTube">
                        <Youtube className="w-5 h-5" />
                    </a>
                    <a href="mailto:booking@wesleyanderson.com" className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#bf953f] hover:border-[#bf953f] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]" aria-label="Email">
                        <Mail className="w-5 h-5" />
                    </a>
                 </div>
            </div>
        </div>

        {/* Massive Name - decorative, not h1 to avoid duplicate */}
        <div className="border-t border-neutral-900 pt-12">
            <p className="text-[10vw] sm:text-[12vw] leading-[0.8] font-bold text-neutral-900 text-center select-none font-syne" aria-hidden="true">
                WESLEY<span className="text-neutral-800">ANDERSON</span>
            </p>
            <div className="flex justify-between mt-8 text-neutral-600 font-mono text-xs uppercase tracking-widest">
                <span>© {new Date().getFullYear()}</span>
                <span>Vancouver, BC</span>
                <span>All Rights Reserved</span>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;