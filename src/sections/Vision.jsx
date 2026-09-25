import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Eye } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Vision = () => {
  const visionText = "We translate vision into executable architecture — defining roadmaps, engineering scalable AI-driven platforms, embedding IP safeguards, and deploying market-ready solutions with end-to-end accountability.";

  return (
    <section id="vision" className="py-16 md:py-20 bg-background relative z-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-full max-h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-[900px] text-center" data-aos="fade-up">
        <div className="inline-block mb-8 md:mb-12">
          <SectionHeader text="VISION TO EXECUTION" icon={Eye} />
        </div>
        
        <div className="relative glass-card p-4 md:p-8 rounded-[2rem] border-none shadow-[0_0_50px_rgba(255,255,255,0.02)]">
          <div className="text-[#E5E7EB] font-medium leading-[1.6] md:leading-[1.8] tracking-tight text-center">
            <TypeAnimation
              sequence={[
                visionText,
                1000,
              ]}
              wrapper="p"
              speed={60}
              style={{ 
                display: 'inline-block',
                fontSize: 'clamp(18px, 4vw, 32px)',
                width: '100%'
              }}
              repeat={0}
              cursor={true}
              className="vision-typing-text"
            />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .vision-typing-text::after {
          content: '|';
          animation: blink 0.8s infinite;
          margin-left: 2px;
          color: #3b82f6;
          font-weight: bold;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}} />
    </section>
  );
};

export default Vision;


