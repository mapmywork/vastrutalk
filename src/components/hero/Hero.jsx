import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock, MapPin, User, ChevronRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-deep-navy via-royal-purple/20 to-deep-navy">
      {/* Background Particles/Stars (CSS approach) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-purple/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-luxury-gold/10 rounded-full mix-blend-screen filter blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* We can add a few SVG stars here for the constellation effect */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-gold/30 bg-luxury-gold/5 backdrop-blur-sm">
              <Sparkles className="text-luxury-gold" size={16} />
              <span className="text-sm font-medium tracking-wide text-luxury-gold uppercase">Ancient Vedic Astrology • Trusted Guidance</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl leading-tight">
              Discover Your Destiny Through <br className="hidden md:block"/>
              <span className="gold-gradient-text">Ancient Wisdom</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-soft-cream/80 max-w-xl font-light leading-relaxed">
              Experience authentic Vedic astrology consultations, accurate kundali analysis, daily panchang, and personalized spiritual guidance to illuminate your life's journey.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="px-8 py-4 bg-luxury-gold text-deep-navy font-medium rounded-full hover:bg-white transition-colors duration-300 flex items-center gap-2">
                Book Consultation <ChevronRight size={18} />
              </a>
              <a href="#services" className="px-8 py-4 border border-white/20 text-soft-cream font-medium rounded-full hover:bg-white/5 transition-colors duration-300">
                Explore Services
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Consultation Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 50 }}
            className="lg:ml-auto w-full max-w-md"
            style={{ perspective: 1000 }}
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-50"></div>
              
              <h3 className="font-serif text-2xl mb-6 text-center text-luxury-gold">Quick Consultation</h3>
              
              <form className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-cream/40" size={18} />
                  <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-soft-cream placeholder:text-soft-cream/40 focus:outline-none focus:border-luxury-gold/50 transition-colors" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-cream/40" size={18} />
                    <input type="text" placeholder="DD/MM/YYYY" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-soft-cream placeholder:text-soft-cream/40 focus:outline-none focus:border-luxury-gold/50 transition-colors" />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-cream/40" size={18} />
                    <input type="text" placeholder="HH:MM AM" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-soft-cream placeholder:text-soft-cream/40 focus:outline-none focus:border-luxury-gold/50 transition-colors" />
                  </div>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-cream/40" size={18} />
                  <input type="text" placeholder="Place of Birth" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-soft-cream placeholder:text-soft-cream/40 focus:outline-none focus:border-luxury-gold/50 transition-colors" />
                </div>

                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-soft-cream focus:outline-none focus:border-luxury-gold/50 transition-colors appearance-none">
                    <option value="" disabled selected className="text-deep-navy">Select Consultation Type</option>
                    <option value="kundali" className="text-deep-navy">Kundali Checking</option>
                    <option value="career" className="text-deep-navy">Career Guidance</option>
                    <option value="marriage" className="text-deep-navy">Marriage Compatibility</option>
                    <option value="general" className="text-deep-navy">General Astrology</option>
                  </select>
                </div>

                <button type="button" className="w-full bg-luxury-gold text-deep-navy font-semibold py-4 rounded-xl hover:bg-white transition-colors duration-300 mt-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  Get Astrology Guidance
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
