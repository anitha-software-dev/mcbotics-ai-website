import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: '/images/hero-dark-v2.png' },
    { image: '/images/hero-dark-2.png' },
    { image: '/images/hero-dark-3.png' }
  ];

  const content = {
    badge: "NEW GEN AI AUTOMATION PARTNER",
    title: "Launch Limitless. Scale Smart. Rule the Future With McBotics AI. Your ideas, our execution - powered by AI and innovation.",
    subtitle: "Your Smart Partner for Technology & Business Growth",
    buttonText: "Book your Free Consultancy"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-auto md:min-h-[130vh] md:h-[150vh] w-full flex items-start md:items-center justify-center overflow-hidden pt-32 md:pt-[400px] pb-24 md:pb-64">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Multi-layered dark overlay for better readability */}
            <div className="absolute inset-0 bg-black/80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10" />
            
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-[10s] ease-linear ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div 
          className="max-w-[900px] transition-all duration-700 transform animate-fadeInUp flex flex-col items-center"
          key={currentSlide}
        >
          {/* Logo Brand area - Refined with blue shadow as requested */}
          <div className="mb-6 md:mb-10 flex flex-col items-center">
             <div className="w-20 h-20 p-1.5 rounded-2xl flex items-center justify-center bg-card shadow-[0_0_50px_rgba(59,130,246,0.4)] relative group overflow-hidden">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-x-2 bottom-0 h-4 bg-white/5 blur-xl opacity-50"></div>
                
                <div className="w-full h-full border border-outline rounded-xl flex items-center justify-center bg-background/50 relative z-10 transition-all duration-500 group-hover:border-white/20">
                   <img src="/images/logo-icon.svg" alt="McBotics AI Icon" className="w-12 h-12 brightness-0 invert opacity-90 transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                {/* Gray Bottom Highlight */}
                <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
             </div>
          </div>

          {/* Badge Pillar - Border removed and blinking radius increased */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-card/30 text-[10px] md:text-[11px] font-medium tracking-[0.2em] text-dim uppercase mb-8">
            <div className="relative flex items-center justify-center h-3 w-3">
              <div className="absolute inset-0 rounded-full bg-white/40 animate-ping scale-150"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-white/60"></div>
            </div>
            {content.badge}
          </div>
          
          <h1 className="text-[24px] md:text-[38px] lg:text-[48px] font-semibold tracking-tight text-main max-w-7xl flex flex-col items-center mb-8">
            <span className="mb-2 md:mb-3">Launch Limitless. Scale Smart.</span>
            <span className="mb-2 md:mb-3">Rule the Future With McBotics AI.</span>
            <span className="mb-2 md:mb-3 whitespace-normal md:whitespace-nowrap">Your ideas, our execution — powered by AI and</span>
            <span>innovation.</span>
          </h1>
          
          <p className="text-base md:text-lg text-dim mb-12 font-medium tracking-wide">
            {content.subtitle}
          </p>
          
          <Link 
            to="/contact" 
            className="group relative px-10 py-4 rounded-xl border border-outline bg-card text-white font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-[1.05] hover:-translate-y-0.5 hover:bg-outline hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-[0.97] overflow-hidden"
          >
            <span className="text-[15px] relative z-10">{content.buttonText}</span>
            <ArrowUpRight size={18} className="text-white/60 group-hover:text-white transition-colors relative z-10" />
            
            {/* Shimmer / Shine Sweep Effect */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-[25deg] -translate-x-[150%] group-hover:animate-shine z-0" />

            {/* Bottom Glow Effect */}
            <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_15px_white]"></div>
          </Link>

          {/* Slide Indicators moved under the button with proper spacing */}
          <div className="flex items-center gap-4 mt-12 md:mt-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group py-4 px-1"
              >
                <div className={`h-1 transition-all duration-500 rounded-full ${
                  index === currentSlide ? 'w-12 bg-white/60' : 'w-6 bg-white/10 group-hover:bg-white/20'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles for Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}} />
    </section>
  );
};

export default Hero;

