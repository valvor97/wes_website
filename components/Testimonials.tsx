import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-center text-4xl md:text-6xl font-bold text-white mb-24">
            THE <span className="text-neutral-700">WORD</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative group hover:border-[#bf953f]/30 transition-colors duration-200">
                <Quote className="w-8 h-8 text-[#bf953f] mb-6 opacity-50" />
                <p className="text-lg md:text-2xl font-light text-neutral-300 leading-relaxed mb-8 max-w-prose">
                    "Wes just gets it. Solid feel, no ego, easy to play with. A true professional."
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-neutral-800" />
                    <div>
                        <p className="text-white font-bold font-syne">Marcus T.</p>
                        <p className="text-[#bf953f] text-xs font-mono uppercase">Jazz Musician</p>
                    </div>
                </div>
            </div>

            <div className="p-10 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative group hover:border-[#bf953f]/30 transition-colors duration-200 mt-0 md:mt-12">
                <Quote className="w-8 h-8 text-[#bf953f] mb-6 opacity-50" />
                <p className="text-lg md:text-2xl font-light text-neutral-300 leading-relaxed mb-8 max-w-prose">
                    "We hired Wes for a corporate event and he read the room perfectly. Our guests were raving."
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-neutral-800" />
                    <div>
                        <p className="text-white font-bold font-syne">Sarah M.</p>
                        <p className="text-[#bf953f] text-xs font-mono uppercase">Event Planner</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;