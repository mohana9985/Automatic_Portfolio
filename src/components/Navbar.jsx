import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Prompts', href: '#prompts' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,243,255,0.1)] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-white/10 group-hover:border-neon-cyan/50 transition-all duration-500 overflow-visible group-hover:shadow-[0_0_20px_rgba(0,243,255,0.3)]">
            <div className="absolute inset-0 bg-neon-cyan/20 blur-xl group-hover:bg-neon-cyan/40 transition-colors duration-500 rounded-xl"></div>
            
            <Cpu className="text-neon-cyan w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-500" />
            
            <Sparkles className="absolute -top-2 -right-2 text-neon-purple w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 animate-pulse" />
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-neon-cyan group-hover:to-neon-purple transition-all duration-500 leading-tight">
              KMSS
            </span>
            <span className="text-[0.6rem] font-mono text-neon-cyan tracking-[0.2em] uppercase opacity-80 leading-none mt-[2px]">
              AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-neon-cyan hover:text-glow transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/drive/folders/1c_xxWGewT173wVlh2dQ9nxsNon_RCGNr?usp=share_link"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 text-sm font-semibold shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_25px_rgba(0,243,255,0.5)]"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-neon-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://drive.google.com/drive/folders/1c_xxWGewT173wVlh2dQ9nxsNon_RCGNr?usp=share_link"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 text-lg font-semibold shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_25px_rgba(0,243,255,0.5)] mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
