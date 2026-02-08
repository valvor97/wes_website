import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Music, Layers, User } from 'lucide-react';

const stats = [
  { label: "Years Active", value: "13+" },
  { label: "Projects", value: "100+" },
  { label: "Generation", value: "3rd" },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 sm:py-32 bg-[#050505] relative" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
            <div className="max-w-2xl">
                <h2 id="benefits-heading" className="text-3xl sm:text-4xl md:text-7xl font-bold text-white leading-[0.9] mb-8">
                    NOT YOUR <br/> 
                    <span className="text-neutral-700 italic">ORDINARY</span> DRUMMER.
                </h2>
                <p className="text-neutral-400 text-base sm:text-lg font-light max-w-lg leading-relaxed">
                    Rooted in tradition, shaped by the moment. A drummer who listens first, plays second.
                </p>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12" role="list" aria-label="Statistics">
                {stats.map((stat, i) => (
                    <div key={i} role="listitem">
                        <div className="text-3xl md:text-4xl font-bold text-gradient-gold font-mono">{stat.value}</div>
                        <div className="text-neutral-600 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Glass Grid - equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 [&>*]:min-h-[240px]">
          {[
            { title: "Pocket", icon: <Zap/>, desc: "When Wes locks in, every heart finds the beat." },
            { title: "Groove", icon: <Music/>, desc: "Steady, deep and makes the whole floor feel it." },
            { title: "Range", icon: <Layers/>, desc: "Jazz, rock, country, pop, fusion, folk." },
            { title: "Style", icon: <User/>, desc: "From sharp chops to fine shoes, Wes brings his best to every gig." }
          ].map((item, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glow-card h-full"
            >
                <div className="glow-card-inner p-8 h-full flex flex-col group">
                    <div className="text-[#bf953f] mb-6">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">{item.desc}</p>
                </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;