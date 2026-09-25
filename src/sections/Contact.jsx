import React, { useState, useRef, useEffect } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Contact = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse follow effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springConfig = { damping: 25, stiffness: 700 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="contact" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="pt-16 pb-12 bg-background border-t border-white/5 relative overflow-hidden"
    >

      {/* Starfield / Particle Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            animate={{
              y: [0, -window?.innerHeight || -800],
              opacity: [0, 0.4, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Background Gradient Orbs - Grayscale */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.03] blur-[150px] rounded-full animate-float" />
      </div>

      {/* Mouse Follow Radial Glow */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.03), transparent 80%)`
          )
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-12 flex items-center gap-4 w-full justify-center">
            <div className="h-[1px] flex-grow max-w-[100px] bg-gradient-to-r from-transparent to-outline" />
            <span className="text-sm md:text-base font-medium tracking-wide text-dim italic whitespace-nowrap">
              Reach out anytime
            </span>
            <div className="h-[1px] flex-grow max-w-[100px] bg-gradient-to-l from-transparent to-outline" />
          </motion.div>
          
          {/* Headline */}
          <motion.h2 
            variants={itemVariants}
            className="flex flex-col items-center text-center mb-10 tracking-tight"
          >
            <span className="text-3xl md:text-5xl lg:text-6xl font-semibold text-dim mb-4">
              Ready to Build, Scale & Innovate?
            </span>
            <span className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Let’s Build Together
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-dim mb-14 max-w-2xl mx-auto font-medium tracking-wide leading-relaxed"
          >
            Schedule a Call and Begin Automating
          </motion.p>
          
          {/* CTA Button */}
          <motion.div variants={itemVariants} className="relative group mb-12">
            <Link 
              to="/contact" 
              className="group relative px-10 py-4 rounded-xl border border-borderGray bg-card text-white font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-[1.05] hover:-translate-y-0.5 hover:bg-borderGray active:scale-[0.97] overflow-hidden"
            >
              <span className="text-[15px] relative z-10">Book your Free Consultancy</span>
              <ArrowUpRight size={18} className="text-white/60 group-hover:text-white transition-colors relative z-10" />
              
              {/* Shimmer / Shine Sweep Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-[25deg] -translate-x-[150%] group-hover:animate-shine z-0" />

              {/* Bottom Glow Effect */}
              <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_15px_white]"></div>
            </Link>
          </motion.div>
          
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}} />
    </section>
  );
};

export default Contact;

