import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Briefcase, Activity, Code, Bot, Box, RefreshCw, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Startup Launch",
      desc: "Automate complex business processes to boost speed, clarity, and efficiency."
    },
    {
      icon: Code,
      title: "Business Optimization",
      desc: "Build tailored AI systems that align with your business goals and challenges."
    },
    {
      icon: Bot,
      title: "Market Acceleration",
      desc: "Deploy intelligent virtual agents to streamline tasks."
    },
    {
      icon: Box,
      title: "Innovation & IP",
      desc: "Leverage AI to optimize campaigns, track leads, and personalize outreach."
    },
    {
      icon: Activity,
      title: "Scaling Support",
      desc: "Track automation results in real time to improve and scale your workflows."
    },
    {
      icon: RefreshCw,
      title: "Continuous Improvement",
      desc: "Connect your tools and apps for smooth, unified AI-powered workflows."
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 bg-background border-t border-outline relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <SectionHeader text="SERVICES" icon={Briefcase} />
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mt-6 max-w-3xl mx-auto">Service Portfolio</h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">Premium AI solutions tailored for enterprise growth</p>
        </div>

        <div className="relative max-w-7xl mx-auto px-4" data-aos="fade-up">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: { 
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="services-swiper w-full !pb-8"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="py-4">
                <div className="group relative glass-card p-8 md:p-10 rounded-[2.5rem] h-[380px] md:h-[420px] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 hover:border-white/20 hover:translate-y-[-10px] border-white/5 shadow-2xl">
                  
                  {/* Giant Icon Container - Premium Circle */}
                  <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center mb-6 md:mb-8 select-none pointer-events-none">
                    {/* Outer Animated Ring */}
                    <div className="absolute inset-0 rounded-full border border-outline/30 group-hover:border-white/30 transition-colors duration-700 animate-spin-slow"></div>
                    
                    {/* Inner Glowing Core */}
                    <div className="absolute inset-3 rounded-full bg-background/50 border border-outline shadow-2xl backdrop-blur-xl transition-all duration-700 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:border-white/30 flex items-center justify-center overflow-hidden">
                      <service.icon size={36} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Particle Dot */}
                    <div className="absolute top-1/2 left-[-4px] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] animate-pulse"></div>
                  </div>

                  {/* Info */}
                  <div className="w-full flex flex-col items-center text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-[13px] md:text-sm leading-relaxed line-clamp-3">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation & Pagination Navigation UI */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-2 md:mt-2 w-full">
            <div className="flex items-center gap-6">
              <button className="swiper-button-prev-custom w-14 h-14 rounded-full border border-outline flex items-center justify-center group hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                <ArrowLeft size={20} className="text-dim group-hover:text-white transition-colors" />
              </button>
              
              {/* Custom Pagination Container */}
              <div className="swiper-pagination-custom flex items-center gap-3 !static !w-auto"></div>

              <button className="swiper-button-next-custom w-14 h-14 rounded-full border border-outline flex items-center justify-center group hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                <ArrowRight size={20} className="text-dim group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #374151 !important;
          opacity: 1;
          transition: all 0.3s;
          margin: 0 !important;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #FFFFFF !important;
          width: 32px;
          border-radius: 4px;
        }
        .swiper-slide {
          transition: transform 0.3s ease;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Services;
