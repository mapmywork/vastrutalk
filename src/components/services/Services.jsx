import { motion } from 'framer-motion';
import { Sparkles, Moon, Sun, Scroll, Briefcase, Heart, Flame, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Astrology Consultation',
      desc: 'In-depth birth chart readings to guide you through life’s major decisions.',
      comingSoon: false
    },
    {
      icon: Moon,
      title: 'Daily Panchang',
      desc: 'Accurate daily astrological calendar for auspicious timings and rituals.',
      comingSoon: false
    },
    {
      icon: Sun,
      title: 'Daily Rashifal',
      desc: 'Your personalized daily horoscope based on Vedic moon signs.',
      comingSoon: false
    },
    {
      icon: Scroll,
      title: 'Kundali Checking',
      desc: 'Detailed analysis of planetary positions at your exact time of birth.',
      comingSoon: false
    },
    {
      icon: Briefcase,
      title: 'Career Astrology',
      desc: 'Discover the right career path and optimal timings for professional growth.',
      comingSoon: false
    },
    {
      icon: Heart,
      title: 'Marriage Compatibility',
      desc: 'Gun Milan and relationship analysis for a harmonious married life.',
      comingSoon: false
    },
    {
      icon: Flame,
      title: 'Spiritual Guidance',
      desc: 'Remedies, mantras, and guidance for inner peace and spiritual evolution.',
      comingSoon: false
    },
    {
      icon: Home,
      title: 'Vastu Consultation',
      desc: 'Align your living or workspace with cosmic energies for prosperity.',
      comingSoon: true
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0A0F1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-gold/30 bg-luxury-gold/5 mb-6"
          >
            <Sparkles className="text-luxury-gold" size={16} />
            <span className="text-sm font-medium tracking-wide text-luxury-gold uppercase">Our Offerings</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Cosmic <span className="text-luxury-gold italic">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-soft-cream/70 text-lg"
          >
            Explore our comprehensive range of Vedic astrology services designed to bring clarity and purpose to every aspect of your life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 group relative overflow-hidden flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-luxury-gold/20 to-transparent flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Icon className="text-luxury-gold" size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-serif mb-4 group-hover:text-luxury-gold transition-colors">{service.title}</h3>
                <p className="text-soft-cream/60 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
                
                {service.comingSoon ? (
                  <div className="mt-auto">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium tracking-wide text-soft-cream/50 bg-white/5">
                      Coming Soon
                    </span>
                  </div>
                ) : (
                  <a href="#contact" className="mt-auto flex items-center gap-2 text-sm font-medium text-luxury-gold uppercase tracking-wider group/btn">
                    Book Now
                    <span className="w-6 h-[1px] bg-luxury-gold group-hover/btn:w-10 transition-all duration-300"></span>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
