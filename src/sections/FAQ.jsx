import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is your engagement approach?",
      a: "We run structured Vision-to-Execution programs: strategy workshops, technical blueprints, agile builds, and market rollouts — with McBotics AI owning outcomes at every stage."
    },
    {
      q: "Who do you work with?",
      a: "We partner with startups building from zero, and mid-size firms optimizing for scale. Our track record spans SaaS, fintech, telecom, retail, and healthcare."
    },
    {
      q: "How do you ensure accountability?",
      a: "One partner. One contract. One accountable team. We take full ownership — from architecture to go-to-market — removing vendor silos and finger-pointing."
    },
    {
      q: "How do you leverage AI and emerging tech?",
      a: "AI/ML, cloud-native stacks, and automation are embedded into every solution. We engineer platforms that are scalable, data-driven, and future-ready by design."
    },
    {
      q: "Do you help with IP and innovation?",
      a: "Yes. We validate ideas, design R&D pipelines, and provide patent advisory. Our IP-first approach ensures your innovation is protected and monetized globally."
    },
    {
      q: "What delivery model do you follow?",
      a: "Global remote delivery anchored in India. This combines top-tier talent, 24/7 execution, and cost efficiency — enabling Silicon Valley speed at optimized costs."
    },
    {
      q: "How do you measure success?",
      a: "We define KPIs upfront: time-to-market, adoption rates, operational savings, revenue lift, and innovation ROI. Every engagement is tied to measurable outcomes."
    },
    {
      q: "What makes McBotics AI different?",
      a: "We are not just consultants or developers. We are builders and operators - blending strategy, engineering, and growth into one single-window partner."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  return (
    <section id="faq" className="py-20 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Background Orbs */}


      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <SectionHeader text="FAQ'S" icon={HelpCircle} />
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mt-6 mb-4">Answers for Founders & Teams</h2>
          <p className="text-dim text-lg max-w-2xl mx-auto">Find quick answers to the most common support questions.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column (CTA/Text) */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="glass-card p-10 rounded-[2.5rem] flex flex-col items-center text-center group transition-all duration-300 relative overflow-hidden border border-white/5 shadow-2xl hover:border-white/20">
              {/* Inner Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-all duration-500"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={28} />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Still Have Questions?</h3>
              <p className="text-dim text-base mb-10 leading-relaxed font-medium">
                Can't find the answer you're looking for? Please chat to our friendly team.
              </p>

              <Link 
                to="/contact" 
                className="group relative px-12 py-4 rounded-2xl bg-white/5 border border-outline text-white font-bold text-center overflow-hidden transition-all duration-300 hover:scale-[1.05] hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] active:scale-[0.97]"
              >
                <span className="relative z-20">Get in Touch</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shine z-10" />
              </Link>
            </div>
          </div>

          {/* Right Column (FAQ Accordion) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                onMouseEnter={() => handleToggle(index)}
                onClick={() => handleToggle(index)}
                className={`group rounded-[1.25rem] border transition-all duration-300 relative overflow-hidden ${
                  openIndex === index ? 'border-outline bg-card shadow-[0_0_30px_rgba(255,255,255,0.05)]' : 'border-outline bg-white/[0.01] hover:border-white/20'
                }`}
              >
                {/* Active Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>

                <div className="w-full px-8 py-7 flex items-center justify-between text-left relative z-10 cursor-pointer">
                  <span className={`text-[17px] md:text-lg font-semibold transition-all duration-300 pr-10 ${
                    openIndex === index ? 'text-white' : 'text-dim group-hover:text-white'
                  }`}>
                    {faq.q}
                  </span>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === index ? 'bg-white/10 text-white rotate-180' : 'bg-white/5 text-dim group-hover:bg-white/10'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </div>

                {openIndex === index && (
                  <div className="relative z-10 px-8 pb-8 pt-2">
                    <p className="text-dim text-base leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
