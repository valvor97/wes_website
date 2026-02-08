import React from 'react';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="max-w-md">
                <h5 className="text-white font-bold text-xl mb-6">Navigation</h5>
                <ul className="space-y-4 font-mono text-sm text-neutral-500">
                    <li><a href="#" className="hover:text-[#bf953f] transition-colors">HOME</a></li>
                    <li><a href="#" className="hover:text-[#bf953f] transition-colors">ABOUT</a></li>
                    <li><a href="#" className="hover:text-[#bf953f] transition-colors">GIGS</a></li>
                    <li><a href="#" className="hover:text-[#bf953f] transition-colors">CONTACT</a></li>
                </ul>
            </div>

            <div>
                 <h5 className="text-white font-bold text-xl mb-6">Connect</h5>
                 <div className="flex gap-6">
                    <a href="#" className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#bf953f] hover:border-[#bf953f] transition-all duration-300">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#bf953f] hover:border-[#bf953f] transition-all duration-300">
                        <Youtube className="w-5 h-5" />
                    </a>
                    <a href="mailto:booking@wesleyanderson.com" className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#bf953f] hover:border-[#bf953f] transition-all duration-300">
                        <Mail className="w-5 h-5" />
                    </a>
                 </div>
            </div>
        </div>

        {/* Massive Name */}
        <div className="border-t border-neutral-900 pt-12">
            <h1 className="text-[12vw] leading-[0.8] font-bold text-neutral-900 text-center select-none font-syne">
                WESLEY<span className="text-neutral-800">ANDERSON</span>
            </h1>
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