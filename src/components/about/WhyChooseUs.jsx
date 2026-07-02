import { motion } from 'framer-motion';
import { BookOpen, Target, Star, Shield, Flame, Compass } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: BookOpen, title: 'Authentic Vedic Knowledge', desc: 'Rooted deeply in ancient scriptures and traditions.' },
    { icon: Target, title: 'Personalized Guidance', desc: 'Tailored solutions for your specific life challenges.' },
    { icon: Star, title: 'Accurate Predictions', desc: 'Precise calculations for highly reliable forecasts.' },
    { icon: Shield, title: 'Confidential Consultations', desc: '100% privacy guaranteed for all your astrology sessions.' },
    { icon: Flame, title: 'Spiritual Wisdom', desc: 'Holistic approach combining astrology and spirituality.' },
    { icon: Compass, title: 'Trusted Services', desc: 'Years of experience guiding individuals to success.' }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050811]">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-royal-purple/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-luxury-gold/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Why Choose <span className="text-luxury-gold italic">Vedant Jyotish</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-soft-cream/70 text-lg"
          >
            A beacon of trust and profound wisdom in the world of Vedic Astrology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-6 group-hover:bg-luxury-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                  <Icon className="text-luxury-gold group-hover:text-deep-navy transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-serif mb-3 text-soft-cream group-hover:text-luxury-gold transition-colors">{reason.title}</h3>
                <p className="text-soft-cream/60 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
