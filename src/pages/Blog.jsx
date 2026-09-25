import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { FileText, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogs } from '../data/blogs';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Blog = () => {
  return (
    <div className="pt-32 md:pt-48 pb-24 bg-background min-h-screen overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <SectionHeader text="BLOG POSTS" icon={FileText} />
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mt-6 mb-4">Latest News Articles</h1>
          <p className="text-white/50 text-[15px] max-w-xl mx-auto">
            Stay up to date with the latest improvements and new features
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-4 md:px-12" data-aos="fade-up">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={1}
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
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.blog-next',
              prevEl: '.blog-prev',
            }}
            pagination={{
              clickable: true,
              el: '.blog-pagination',
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="blog-swiper w-full !pb-20"
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={blog.id}>
                <div className="group relative h-[500px] md:h-[550px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl bg-card/20">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Multi-layered Gradient Overlay for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  </div>

                  {/* Content Area */}
                  <div className="absolute inset-x-0 bottom-0 z-20 p-8 md:p-10 flex flex-col items-start text-left">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                        {blog.category}
                      </span>
                      <span className="text-white/40 text-[12px] font-bold tracking-wider">
                        {blog.date}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-4 leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
                      {blog.desc}
                    </p>

                    <Link 
                      to={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-3 bg-[#111111] text-white/90 border border-white/10 px-6 py-3 rounded-full font-bold text-[13px] hover:bg-neutral-800 transition-all hover:gap-4 shadow-xl"
                    >
                      READ ARTICLE <ArrowRight size={18} />
                    </Link>
                  </div>

                  {/* Top Corner Index */}
                  <div className="absolute top-8 left-8 z-20">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white font-black text-xs">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-30 flex justify-between pointer-events-none px-2 md:-px-4">
             <button className="blog-prev w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-xl border border-outline flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all pointer-events-auto transform hover:scale-110 active:scale-90 shadow-2xl">
                <ChevronLeft size={24} />
             </button>
             <button className="blog-next w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-xl border border-outline flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all pointer-events-auto transform hover:scale-110 active:scale-90 shadow-2xl">
                <ChevronRight size={24} />
             </button>
          </div>

          {/* Custom Pagination Container */}
          <div className="blog-pagination flex justify-center mt-4"></div>
        </div>
      </div>

      {/* Styles for Pagination */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .blog-pagination .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: white;
        }
      `}} />
    </div>
  );
};

export default Blog;
