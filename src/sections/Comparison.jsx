import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { LayoutTemplate, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Comparison = () => {
  const mcboticsFeatures = [
    "Fast setup with ready AI workflows",
    "Built to grow and adapt with you",
    "Real-time, AI-powered analytics",
    "Automates tasks, reducing overhead",
    "Expert support + AI guidance"
  ];

  const othersFeatures = [
    "Slower execution and manual setup",
    "Requires manual updates as you scale",
    "Limited or delayed reporting",
    "Higher labor costs, less automation",
    "Generic support or none at all"
  ];

  return (
    <section id="comparison" className="py-20 bg-background border-t border-white/10 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <SectionHeader text="COMPARISON" icon={LayoutTemplate} />
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mt-6 mb-4">Why McBotics AI Beats the Rest</h2>
          <p className="text-dim text-lg max-w-2xl mx-auto">See how we compare against others in performance and growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full">
          
          {/* McBotics AI Premium Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] shadow-2xl h-full"
          >
            <div className="flex-grow p-6 md:p-8 bg-[#050505] rounded-[2.4rem] border border-white/5 relative overflow-hidden flex flex-col h-full">
              {/* Logo Area */}
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="h-32 flex items-center justify-center">
                  <img src="/images/logo.svg" alt="McBotics AI" className="h-[95px] md:h-[120px] w-auto brightness-0 invert opacity-90 transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 flex-grow">
                {mcboticsFeatures.map((feature, i) => (
                  <div key={i} className="h-[72px] flex items-center gap-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 transition-all hover:bg-white/[0.05] hover:border-white/10 group/item">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform group-hover/item:scale-110">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-white font-medium group-hover/item:text-white transition-colors text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/[0.02] blur-3xl rounded-full pointer-events-none" />
            </div>
          </motion.div>

          {/* Competitors Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col p-1 bg-transparent rounded-[2.5rem] h-full"
          >
            <div className="flex-grow p-6 md:p-8 bg-transparent rounded-[2.4rem] border border-white/5 relative overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-500 flex flex-col h-full">
              {/* Logo Area */}
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="h-28 flex items-center justify-center">
                  <div className="flex items-center gap-4 text-white/30 uppercase font-semibold tracking-[0.2em] text-[18px] md:text-[24px]">
                    <LayoutTemplate size={36} />
                    <span>Others</span>
                  </div>
                </div>
              </div>

              {/* Features List - Same row spacing and alignment */}
              <div className="space-y-4 flex-grow">
                {othersFeatures.map((feature, i) => (
                  <div key={i} className="h-[72px] flex items-center gap-6 p-4 text-left">
                    <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
                      <X size={14} className="text-white/20" />
                    </div>
                    <span className="text-dim/60 font-medium italic text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
