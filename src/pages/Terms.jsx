import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Gavel, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="pt-32 md:pt-48 pb-24 bg-background min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-white/[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <SectionHeader text="AGREEMENT" icon={Gavel} />
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
            Terms of service
          </h1>
          <p className="text-white/40 font-bold tracking-widest text-xs">
            Last updated on 23 Jan {new Date().getFullYear()}
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden"
        >
           {/* Inner Decorative Glow */}
           <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 blur-[80px] rounded-full"></div>

          <div className="space-y-12 text-white/70 leading-relaxed text-base md:text-lg font-medium">
            <p className="text-white/90 text-xl font-medium border-l-2 border-white/20 pl-6 italic">
              Welcome to McBotics AI ("we" or "us"). These terms of service govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms in their entirety.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
              {[
                "1. Information We Collect",
                "2. How We Use Your Information",
                "3. Sharing Your Information",
                "4. Cookies and Similar Technologies",
                "5. Your Choices",
                "6. Security",
                "7. Children's Privacy",
                "8. Changes to This Privacy Policy",
                "9. Contact Us"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm md:text-base font-semibold text-white/70 tracking-tight">
                  <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  {item}
                </div>
              ))}
            </div>

            {/* Section 1 */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-4 text-left">
                <span className="text-white/20 font-mono text-xl">01</span>
                Information We Collect
              </h2>
              <div className="space-y-8 pl-0 md:pl-10 text-left">
                <div className="bg-white/[0.01] p-6 rounded-2xl border border-white/5">
                  <h3 className="text-white font-bold mb-3 uppercase text-sm tracking-widest text-left">Personal information</h3>
                  <p className="text-left">We may collect personal information, such as your name, email address, and other contact details when you voluntarily provide it to us, such as when you register for an account, subscribe to newsletters, or contact us through the website.</p>
                </div>
                <div className="bg-white/[0.01] p-6 rounded-2xl border border-white/5">
                  <h3 className="text-white font-bold mb-3 uppercase text-sm tracking-widest text-left">Usage information</h3>
                  <p className="text-left">We may collect information about your use of the website, including your IP address, browser type, device information, and pages visited. This information helps us analyze trends, administer the site, and improve user experience.</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-6 pt-8 border-t border-white/5">
              <h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-4 text-left">
                <span className="text-white/20 font-mono text-xl">02</span>
                How We Use Your Information
              </h2>
              <div className="pl-0 md:pl-10 text-left">
                <p className="mb-6">We use the collected information for various purposes, including:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Providing and maintaining the website",
                    "Communicating about our services",
                    "Analyzing website usage and optimization",
                    "Sending requested educational materials"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                      </div>
                      <span className="text-sm font-semibold">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-6 pt-8 border-t border-white/5">
              <h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-4 text-left">
                <span className="text-white/20 font-mono text-xl">03</span>
                Sharing Your Information
              </h2>
              <p className="pl-0 md:pl-10 text-left">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business.</p>
            </section>

             {/* Section 4 */}
             <section className="space-y-6 pt-8 border-t border-white/5">
              <h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-4 text-left">
                <span className="text-white/20 font-mono text-xl">04</span>
                Cookies and Similar Technologies
              </h2>
              <p className="pl-0 md:pl-10 text-left">We use cookies and similar technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling them may affect your ability to use certain features of the site.</p>
            </section>

            {/* Section 5 */}
            <section className="space-y-6 pt-8 border-t border-white/5">
              <h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-4 text-left">
                <span className="text-white/20 font-mono text-xl">05</span>
                Your Choices
              </h2>
              <p className="pl-0 md:pl-10 text-left">You can manage your communication preferences by unsubscribing from newsletters or adjusting your account settings. You may also contact us to update or delete your personal information.</p>
            </section>

             {/* Section 6 */}
             <section className="space-y-6 pt-8 border-t border-white/5">
              <h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-4 text-left">
                <span className="text-white/20 font-mono text-xl">06</span>
                Security
              </h2>
              <p className="pl-0 md:pl-10 text-left">We take reasonable measures to protect the security of your personal information. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.</p>
            </section>

            {/* Section 7 */}
            <section className="space-y-6 pt-8 border-t border-white/5">
              <h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-4 text-left">
                <span className="text-white/20 font-mono text-xl">07</span>
                Children's Privacy
              </h2>
              <p className="pl-0 md:pl-10 text-left">Our website is not directed to individuals under the age of 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to remove such information.</p>
            </section>

            {/* Section 8 */}
            <section className="space-y-6 pt-8 border-t border-white/5">
              <h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-4 text-left">
                <span className="text-white/20 font-mono text-xl">08</span>
                Changes to This Privacy Policy
              </h2>
              <p className="pl-0 md:pl-10 text-left">We may update this privacy policy periodically. We will notify you of any changes by posting the new privacy policy on this page. Your continued use of the website after such modifications will constitute your acknowledgment of the modified privacy policy.</p>
            </section>

            {/* Section 9 */}
            <section className="space-y-8 pt-8 border-t border-white/5">
              <h2 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-4 text-left">
                <span className="text-white/20 font-mono text-xl">09</span>
                Contact Us
              </h2>
              <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 flex flex-col items-center text-center max-w-lg mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                   <FileText className="text-white/60" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Legal Support</h3>
                <p className="text-white/40 mb-6 text-sm text-center">Our legal team is available for any regulatory or privacy inquiries.</p>
                <a href="mailto:support@mcbotics.com" className="text-white font-bold border-b border-white pb-1 hover:text-white/60 transition-all">
                  support@mcbotics.com
                </a>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
