import { motion } from 'framer-motion';
import { Compass, Briefcase, Heart, Coins, Activity, Sparkles } from 'lucide-react';

const KundaliAnalysis = () => {
  const benefits = [
    { icon: Compass, title: 'Personality' },
    { icon: Briefcase, title: 'Career Path' },
    { icon: Heart, title: 'Marriage' },
    { icon: Coins, title: 'Finances' },
    { icon: Activity, title: 'Health' },
    { icon: Sparkles, title: 'Spiritual Journey' }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-deep-navy">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-luxury-gold/5 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-[2rem] p-10 md:p-16 border border-luxury-gold/20 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-royal-purple/20 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-gold/30 bg-luxury-gold/10 mb-6"
              >
                <Sparkles className="text-luxury-gold" size={16} />
                <span className="text-sm font-medium tracking-wide text-luxury-gold uppercase">Cosmic Blueprint</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif mb-6 leading-tight"
              >
                Deep <span className="text-luxury-gold italic">Kundali</span> Analysis
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-soft-cream/70 text-lg leading-relaxed mb-8"
              >
                Your birth chart is the map of your soul's journey. A detailed Kundali analysis reveals the planetary influences that shape your destiny, helping you understand your innate potential and navigate life with clarity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <button className="px-8 py-4 bg-luxury-gold text-deep-navy font-semibold rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  Check Your Kundali
                </button>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-luxury-gold/10 hover:border-luxury-gold/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 mx-auto rounded-full bg-deep-navy flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="text-luxury-gold" size={20} />
                    </div>
                    <span className="font-medium text-soft-cream/80 group-hover:text-luxury-gold transition-colors text-sm">
                      {benefit.title}
                    </span>
                  </motion.div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default KundaliAnalysis;
