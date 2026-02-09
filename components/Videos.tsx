import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Videos: React.FC = () => {
  return (
    <section id="videos" className="py-20 sm:py-32 bg-black border-y border-neutral-900 relative" aria-labelledby="videos-heading">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16"
        >
            <h2 id="videos-heading" className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
                VISUAL <span className="text-neutral-700">DIARIES</span>
            </h2>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block text-xs font-mono text-[#bf953f] uppercase tracking-widest hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[44px] inline-flex items-center group" aria-label="View full portfolio on YouTube">
                <span className="border-b border-[#bf953f] pb-px group-hover:border-white">View Full Portfolio</span>
            </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900"
        >
            {/* Main Video - Strange Fellow Reaper */}
            <a
                href="https://www.youtube.com/watch?v=xiRJeT_YU9M"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 md:col-span-2 relative aspect-video bg-[#0a0a0a] group cursor-pointer overflow-hidden block"
                aria-label="Watch Strange Fellow - Reaper on YouTube"
            >
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="w-full h-full"
                >
                    <img 
                        src="https://img.youtube.com/vi/xiRJeT_YU9M/maxresdefault.jpg" 
                        alt="Strange Fellow - Reaper, live drumming performance by Wesley Anderson"
                        loading="lazy"
                        width={1280}
                        height={720}
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#bf953f] group-hover:border-[#bf953f] transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1 group-hover:fill-black group-hover:text-black transition-colors" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full bg-gradient-to-t from-black to-transparent pointer-events-none">
                    <h3 className="text-xl sm:text-3xl font-bold text-white mb-2 font-syne">Strange Fellow - Reaper</h3>
                    <p className="font-mono text-[#bf953f] text-xs">MUSIC VIDEO</p>
                </div>
            </a>

            {/* Secondary 1 */}
            <a
                href="https://www.youtube.com/watch?v=fiL0RGR6MUs"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-video bg-[#0a0a0a] group cursor-pointer overflow-hidden block"
                aria-label="Watch Adam Cebula - Many Nights on YouTube"
            >
                <img 
                    src="/images/adam-cebula-many-nights-thumb.png" 
                    alt="Adam Cebula - Many Nights, studio work by Wesley Anderson"
                    loading="lazy"
                    width={640}
                    height={360}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#bf953f] group-hover:border-[#bf953f] transition-all duration-300">
                        <Play className="w-6 h-6 text-white ml-1 group-hover:fill-black group-hover:text-black transition-colors" />
                    </div>
                 </div>
                 <div className="absolute bottom-6 left-6">
                    <h3 className="text-base sm:text-xl font-bold text-white">Adam Cebula - Many Nights</h3>
                    <p className="font-mono text-[#bf953f] text-xs mt-1">STUDIO WORK</p>
                 </div>
            </a>

            {/* Secondary 2 */}
            <div className="relative aspect-video bg-[#0a0a0a] group cursor-pointer overflow-hidden min-h-[44px]" role="button" tabIndex={0} aria-label="Transcription Breakdown - upcoming video">
                <img 
                    src="https://images.unsplash.com/photo-1544785316-6e58aed68a50?q=80&w=2070&auto=format&fit=crop" 
                    alt="Drum transcription breakdown, Wesley Anderson"
                    loading="lazy"
                    width={640}
                    height={360}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#bf953f] group-hover:border-[#bf953f] transition-all duration-300">
                        <Play className="w-6 h-6 text-white ml-1 group-hover:fill-black group-hover:text-black transition-colors" />
                    </div>
                 </div>
                 <div className="absolute bottom-6 left-6">
                    <h3 className="text-base sm:text-xl font-bold text-white">Transcription Breakdown</h3>
                 </div>
            </div>
        </motion.div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[#bf953f] pt-3 uppercase tracking-widest cursor-pointer inline-flex items-center min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-black group" aria-label="View full portfolio on YouTube">
                <span className="border-b border-[#bf953f] pb-px group-hover:border-white">View Full Portfolio</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
