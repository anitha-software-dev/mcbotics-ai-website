import React, { useState } from 'react';
import { Mail, PhoneCall, Send, HelpCircle, MessageSquare, Headset } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQ from '../sections/FAQ';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Valid email is required";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(errs);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <div className="pt-32 md:pt-40 pb-4 bg-background min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-white/[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-bold text-white uppercase tracking-wider mb-8">
            <PhoneCall size={14} className="text-white/60" /> CONTACT
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
            Reach Us Anytime
          </h1>
          <p className="text-white/50 text-[15px] md:text-lg max-w-xl mx-auto">
            Have questions or need help? We're here for you
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            {/* Email card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#0A0A0A] p-10 rounded-[2rem] border border-white/5 group hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  <Mail size={20} className="text-white/80" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Email Us</h3>
              </div>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8">
                Facing technical challenges or product concerns? We’re here to assist
              </p>
              <a 
                href="mailto:support@mcbotics.com" 
                className="text-white font-medium border-b border-white/30 hover:border-white transition-all pb-1"
              >
                support@mcbotics.com
              </a>
            </motion.div>

            {/* Sales Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#0A0A0A] p-10 rounded-[2rem] border border-white/5 group hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  <MessageSquare size={20} className="text-white/80" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Contact Sales</h3>
              </div>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8">
                Let’s collaborate on custom solutions or discuss product insights
              </p>
              <a 
                href="#" 
                className="text-white font-medium border-b border-white/30 hover:border-white transition-all pb-1"
              >
                Book a call
              </a>
            </motion.div>
          </div>

          {/* Right: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0A0A0A] p-8 md:p-14 rounded-[2.5rem] border border-white/5 relative overflow-hidden flex flex-col items-center">
              
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <Headset size={30} className="text-white/60" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12 text-center tracking-tight">
                We’d love to help! Let us know how
              </h2>

              <form onSubmit={handleSubmit} className="w-full space-y-8">
                <div className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white/60 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/5 rounded-xl px-6 py-4 text-white outline-none focus:border-white/10 transition-all placeholder:text-white/10"
                      placeholder="Ikta Sollork"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-white/60 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/5 rounded-xl px-6 py-4 text-white outline-none focus:border-white/10 transition-all placeholder:text-white/20"
                      placeholder="support@mcbotics.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-white/60 ml-1">Subject Of Interest</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-white/5 rounded-xl px-6 py-4 text-white outline-none focus:border-white/10 transition-all placeholder:text-white/10"
                    placeholder="Regarding Product"
                  />
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-white/60 ml-1">How may we assist you?</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-[#111] border border-white/5 rounded-xl px-6 py-5 text-white outline-none focus:border-white/10 transition-all resize-none placeholder:text-white/10"
                    placeholder="Give us more info.."
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="relative pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-black border border-white/5 text-white font-semibold text-[15px] py-5 rounded-xl hover:bg-[#111] transition-all relative z-10 overflow-hidden shadow-2xl active:scale-[0.98]"
                  >
                    Send Your Message
                  </button>
                  {/* Subtle Glow Under Button */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-white/[0.05] blur-[30px] rounded-full pointer-events-none" />
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Global FAQs Integrated */}
        <div className="pt-0 pb-0">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
