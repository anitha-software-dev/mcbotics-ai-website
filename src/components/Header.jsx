import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Process', href: '/#process' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-outline shadow-2xl py-0' 
          : 'bg-transparent border-white/[0.05] py-0'
      }`}
    >
      <div className="container mx-auto px-6 max-w-[1240px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group transition-all duration-300">
          <img 
            src="/images/logo.svg" 
            alt="McBotics AI Logo" 
            className="h-[50px] md:h-[85px] w-auto brightness-0 invert transition-transform duration-500 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 rounded-full border border-outline bg-card/50 backdrop-blur-md px-6 py-2 shadow-2xl">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name} 
                href={link.href}
                className="px-4 py-1 text-dim hover:text-white transition-all text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                className="px-4 py-1 text-dim hover:text-white transition-all text-sm font-medium tracking-wide"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 rounded-xl bg-card border border-outline text-white backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-background/95 backdrop-blur-xl border-b border-outline py-8 px-6 shadow-2xl">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-dim hover:text-white transition-colors text-lg font-medium tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-dim hover:text-white transition-colors text-lg font-medium tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Header;
