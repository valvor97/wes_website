import React from 'react';

const steps = [
  {
    num: "01",
    title: "Inquire",
    desc: "Send over your event details. We'll check availability and align on the vibe."
  },
  {
    num: "02",
    title: "Lock In",
    desc: "Logistics confirmed. Deposit secured. The date is yours."
  },
  {
    num: "03",
    title: "Experience",
    desc: "Wes arrives prepared. You get a world-class performance."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h3 className="text-[#bf953f] font-mono text-xs tracking-[0.4em] uppercase mb-20 text-center md:text-left">The Process</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[88px] left-0 w-full h-[1px] bg-neutral-800 -z-0" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
                <div className="text-9xl font-bold text-neutral-800 font-syne leading-none mb-6 group-hover:text-gradient-gold transition-all duration-500">
                    {step.num}
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">{step.title}</h4>
                <div className="w-12 h-[1px] bg-[#bf953f] mb-6" />
                <p className="text-neutral-500 font-light leading-relaxed max-w-xs">
                    {step.desc}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;