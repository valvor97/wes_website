import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const gigs = [
  { date: "OCT 12", venue: "FRANKIE'S JAZZ CLUB", location: "Vancouver, BC", time: "10:30 PM" },
  { date: "OCT 19", venue: "TYRANT STUDIOS", location: "Vancouver, BC", time: "9:00 PM" },
  { date: "OCT 27", venue: "2ND FLOOR GASTOWN", location: "Vancouver, BC", time: "11:00 AM" },
  { date: "NOV 03", venue: "DISTRICT", location: "North Vancouver, BC", time: "Private" },
  { date: "NOV 15", venue: "GUILT & CO", location: "Vancouver, BC", time: "9:30 PM" }
];

const Gigs: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-6xl md:text-8xl font-bold text-white leading-[0.85] tracking-tighter">
            LIVE <br/>
            <span className="text-gradient-gold">DATES</span>
          </h2>
          <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest mt-8 md:mt-0">
            See Wes Live in Concert
          </p>
        </div>

        <div className="flex flex-col">
          {gigs.map((gig, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-t border-neutral-900 py-10 hover:bg-neutral-900/30 transition-colors duration-500 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
                
                {/* Date & Time */}
                <div className="flex items-center gap-8 md:w-1/4">
                  <span className="font-mono text-[#bf953f] text-sm tracking-widest border border-[#bf953f]/30 px-3 py-1 rounded-full">
                    {gig.date}
                  </span>
                  <span className="text-neutral-500 font-mono text-xs">
                    {gig.time}
                  </span>
                </div>

                {/* Venue */}
                <div className="md:w-1/2">
                  <h3 className="text-3xl md:text-5xl font-bold text-neutral-300 group-hover:text-white group-hover:tracking-wide transition-all duration-500 uppercase">
                    {gig.venue}
                  </h3>
                  <p className="md:hidden text-neutral-500 text-sm mt-2">{gig.location}</p>
                </div>

                {/* Location & Action */}
                <div className="hidden md:flex md:w-1/4 justify-end items-center gap-4">
                  <span className="text-neutral-500 text-sm font-light group-hover:text-neutral-300 transition-colors">
                    {gig.location}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-[#bf953f] group-hover:bg-[#bf953f] transition-all duration-500">
                    <ArrowUpRight className="text-neutral-500 group-hover:text-black w-5 h-5 transition-colors" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
          <div className="border-t border-neutral-900" />
        </div>
        
      </div>
    </section>
  );
};

export default Gigs;