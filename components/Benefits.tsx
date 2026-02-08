import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Music, Layers, User } from 'lucide-react';

const stats = [
  { label: "Years Active", value: "15+" },
  { label: "Venues Played", value: "100+" },
  { label: "Generations", value: "3rd" },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] relative">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-7xl font-bold text-white leading-[0.9] mb-8">
                    NOT YOUR <br/> 
                    <span className="text-neutral-700 italic">ORDINARY</span> DRUMMER.
                </h2>
                <p className="text-neutral-400 text-lg font-light max-w-lg">
                    Rooted in tradition, shaped by the moment. A drummer who listens first, plays second.
                </p>
            </div>
            
            {/* Quick Stats */}
            <div className="flex gap-12">
                {stats.map((stat, i) => (
                    <div key={i}>
                        <div className="text-3xl md:text-4xl font-bold text-gradient-gold font-mono">{stat.value}</div>
                        <div className="text-neutral-600 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>

        {/* Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Pocket", icon: <Zap/>, desc: "When Wes locks in, every heart finds the beat." },
            { title: "Groove", icon: <Music/>, desc: "Steady, deep and makes the whole floor feel it." },
            { title: "Range", icon: <Layers/>, desc: "Jazz, rock, country, pop, fusion, folk." },
            { title: "Style", icon: <User/>, desc: "From sharp chops to fine shoes, always professional." }
          ].map((item, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-200 group"
            >
                <div className="text-[#bf953f] mb-6 group-hover:scale-105 transition-transform duration-200">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;