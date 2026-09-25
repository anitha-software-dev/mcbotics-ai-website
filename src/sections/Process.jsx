import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Settings, Search, Code2, Rocket, FileSearch, Code, TrendingUp } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      num: "01",
      icon: (active) => <FileSearch size={22} className={active ? "text-white" : "text-dim"} />,
      title: "Consult & Prepare Blueprint",
      desc: "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
      image: "/images/step1.webp" 
    },
    { 
      num: "02",
      icon: (active) => <Code size={22} className={active ? "text-white" : "text-dim"} />,
      title: "Sprints based delivery",
      desc: "We create tailored AI workflows that align with your goals. Our team builds, tests, and deploys smart systems that integrate into your operations seamlessly.",
      image: "/images/step2.webp" 
    },
    { 
      num: "03",
      icon: (active) => <TrendingUp size={22} className={active ? "text-white" : "text-dim"} />,
      title: "Vision-to-Scale",
      desc: "We track key metrics and continuously refine performance using real-time insights. As your business evolves, your automation grows with it.",
      image: "/images/step3.webp" 
    }
  ];

  return (
    <section id="process" className="py-20 bg-background border-t border-outline relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <SectionHeader text="PROCESS" icon={Settings} />
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mt-6 mb-4">Our Proven Vision-to-Scale Process</h2>
          <p className="text-white text-lg max-w-2xl mx-auto">Everything you need to collaborate, create, and scale, all in one place.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column - Steps List */}
          <div className="lg:col-span-5 space-y-4" data-aos="fade-right">
            {steps.map((step, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
                className={`relative p-8 rounded-[2rem] transition-all duration-500 cursor-pointer group flex items-start gap-6 border ${
                  activeStep === index 
                    ? 'bg-card border-outline shadow-2xl' 
                    : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                }`}
              >
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 border ${
                  activeStep === index 
                    ? 'bg-white/10 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                    : 'bg-white/5 text-white/40 border-white/5'
                }`}>
                  {step.icon(activeStep === index)}
                </div>

                <div className="flex-grow pt-1">
                  <div className={`text-[12px] font-bold tracking-[0.2em] mb-2 transition-colors duration-300 ${
                    activeStep === index ? 'text-white' : 'text-white/20'
                  }`}>
                    {step.num}
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 tracking-tight transition-colors duration-300 ${
                    activeStep === index ? 'text-white' : 'text-white/40'
                  }`}>
                    {step.title}
                  </h3>
                  
                  {/* Expandable Description */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeStep === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-white/40 text-[15px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Dynamic Image Display */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="relative h-[400px] lg:h-full w-full glass-card rounded-[3rem] p-6 md:p-10 shadow-2xl overflow-hidden group">
              
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-6 md:p-10 transition-all duration-700 ease-in-out transform ${
                    activeStep === index 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-contain rounded-[1.5rem] opacity-100"
                  />
                  
                </div>
              ))}
              
              {/* Background Glow behind image */}
              <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
