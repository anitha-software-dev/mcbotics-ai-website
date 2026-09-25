import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Target, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Target size={24} className="text-white group-hover:scale-110 transition-transform duration-500" />,
      title: "e2e growth coverage",
      desc: "Design, develop, launch, scale using our proven frameworks.",
      marker: "bg-neutral-800"
    },
    {
      icon: <Cpu size={24} className="text-white group-hover:scale-110 transition-transform duration-500" />,
      title: "AI automation & insights",
      desc: "Drive scale and smarter decisions with embedded intelligence.",
      marker: "bg-neutral-800"
    },
    {
      icon: <ShieldCheck size={24} className="text-white group-hover:scale-110 transition-transform duration-500" />,
      title: "Protect your product",
      desc: "Secure your innovation with world-class patents and IP strategy.",
      marker: "bg-neutral-800"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <SectionHeader text="BENEFITS" icon={Sparkles} />
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mt-6">Why McBotics AI?</h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-10 top-2 bottom-2 w-[1px] bg-white/10"></div>
          
          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="relative flex items-center gap-8 md:gap-12 pl-0"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Timeline Marker Row */}
                <div className="relative flex-shrink-0 z-20">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-xl group hover:border-white/30 transition-all duration-500">
                    <div className="text-white/70 group-hover:text-white transition-colors">
                      {benefit.icon}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow">
                  <div className="bg-[#050505] p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden group">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-dim text-sm md:text-base leading-relaxed">
                      {benefit.desc}
                    </p>
                    
                    {/* Subtle Internal Glow */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/[0.02] blur-3xl rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
