import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Videos: React.FC = () => {
  return (
    <section className="py-32 bg-black border-y border-neutral-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                VISUAL <span className="text-neutral-700">DIARIES</span>
            </h2>
            <a href="#" className="hidden md:inline-block text-xs font-mono text-[#bf953f] border-b border-[#bf953f] pb-1 uppercase tracking-widest hover:text-white hover:border-white transition-all">
                View Youtube Channel
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900">
            {/* Main Video */}
            <motion.div 
                whileHover={{ opacity: 0.8 }}
                className="col-span-1 md:col-span-2 relative aspect-video bg-[#0a0a0a] group cursor-pointer overflow-hidden"
            >
                 <img 
                    src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2070&auto=format&fit=crop" 
                    alt="Main Performance"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                 </div>
                 <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-3xl font-bold text-white mb-2 font-syne">Live at Frankie's</h3>
                    <p className="font-mono text-[#bf953f] text-xs">JAZZ QUARTET • 2024</p>
                 </div>
            </motion.div>

            {/* Secondary 1 */}
            <div className="relative aspect-video bg-[#0a0a0a] group cursor-pointer overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1558&auto=format&fit=crop" 
                    alt="Studio"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#bf953f] group-hover:border-[#bf953f] transition-all duration-300">
                        <Play className="w-6 h-6 text-white ml-1 group-hover:fill-black group-hover:text-black transition-colors" />
                    </div>
                 </div>
                 <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-bold text-white">Studio Session</h3>
                 </div>
            </div>

            {/* Secondary 2 */}
            <div className="relative aspect-video bg-[#0a0a0a] group cursor-pointer overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1544785316-6e58aed68a50?q=80&w=2070&auto=format&fit=crop" 
                    alt="Solo"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#bf953f] group-hover:border-[#bf953f] transition-all duration-300">
                        <Play className="w-6 h-6 text-white ml-1 group-hover:fill-black group-hover:text-black transition-colors" />
                    </div>
                 </div>
                 <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-bold text-white">Transcription Breakdown</h3>
                 </div>
            </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-xs font-mono text-[#bf953f] border-b border-[#bf953f] pb-1 uppercase tracking-widest">
                View Youtube Channel
            </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;