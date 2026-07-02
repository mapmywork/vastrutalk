import { motion } from 'framer-motion';
import { BookOpen, Star, Shield, Target } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: BookOpen,
      title: 'Authentic Vedic Knowledge',
      desc: 'Rooted in ancient scriptures, providing deeply profound insights.'
    },
    {
      icon: Target,
      title: 'Personalized Guidance',
      desc: 'Tailored astrological advice for your unique life path.'
    },
    {
      icon: Shield,
      title: 'Trusted Consultations',
      desc: 'Confidential and highly reliable astrological support.'
    },
    {
      icon: Star,
      title: 'Accurate Analysis',
      desc: 'Precise planetary calculations for accurate predictions.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-royal-purple/10 rounded-full mix-blend-screen filter blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Ancient Wisdom.<br/>
              <span className="text-luxury-gold italic font-light">Modern Guidance.</span>
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mb-8"></div>
            <p className="text-soft-cream/70 text-lg leading-relaxed mb-8">
              Vedant Jyotish is a trusted destination for authentic Vedic astrology. We blend the profound wisdom of ancient sages with a modern, practical approach, helping individuals make informed decisions in their career, relationships, health, and spiritual growth.
            </p>
            <p className="text-soft-cream/70 text-lg leading-relaxed mb-10">
              Our personalized consultations dive deep into your cosmic blueprint, empowering you to navigate life's challenges with clarity, confidence, and serenity.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-luxury-gold/50 flex items-center justify-center">
                <span className="font-serif text-2xl text-luxury-gold">15+</span>
              </div>
              <div>
                <p className="text-lg font-medium">Years of Experience</p>
                <p className="text-soft-cream/50 text-sm">In Vedic Astrology</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, borderColor: 'rgba(212,175,55,0.5)' }}
                  className="glass-card p-8 group transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/20 transition-colors">
                    <Icon className="text-luxury-gold" size={24} />
                  </div>
                  <h3 className="text-xl font-serif mb-3 group-hover:text-luxury-gold transition-colors">{card.title}</h3>
                  <p className="text-soft-cream/60 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
