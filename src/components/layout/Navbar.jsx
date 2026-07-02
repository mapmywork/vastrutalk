import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Panchang', path: '#panchang' },
    { name: 'Horoscope', path: '#horoscope' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-deep-navy/80 backdrop-blur-lg border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.5 }}
              className="text-luxury-gold"
            >
              <Sun size={32} />
            </motion.div>
            <span className="font-serif text-2xl font-semibold tracking-wide text-soft-cream group-hover:text-luxury-gold transition-colors">
              Vedant <span className="font-light">Jyotish</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                className="text-sm tracking-widest uppercase text-soft-cream/80 hover:text-luxury-gold transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="px-6 py-2 border border-luxury-gold text-luxury-gold rounded-full hover:bg-luxury-gold hover:text-deep-navy transition-all duration-300 font-medium tracking-wide uppercase text-sm"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-soft-cream hover:text-luxury-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-deep-navy/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-soft-cream/80 hover:text-luxury-gold transition-colors font-medium border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
