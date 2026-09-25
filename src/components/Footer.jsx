import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Process', href: '/#process' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ];

  return (
    <footer className="bg-background pt-2 pb-6 border-t border-outline relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-2">
          {/* Logo */}
          <Link to="/" className="flex items-center group transition-all duration-300">
            <img 
              src="/images/logo.svg" 
              alt="McBotics AI Logo" 
              className="h-[100px] md:h-[130px] w-auto brightness-0 invert transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a 
                      href={link.href} 
                      className="text-dim hover:text-white transition-all text-sm font-semibold tracking-tight"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="text-dim hover:text-white transition-all text-sm font-semibold tracking-tight"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Bottom copyright section */}
        <div className="pt-4 border-t border-outline flex flex-col items-center justify-center w-full">
          <p className="text-dim text-[12px] font-medium tracking-wide text-center">
            © {new Date().getFullYear()} McBotics AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
