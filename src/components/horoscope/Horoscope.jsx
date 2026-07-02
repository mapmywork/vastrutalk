import { motion } from 'framer-motion';
import { 
  TbZodiacAries, TbZodiacTaurus, TbZodiacGemini, TbZodiacCancer, 
  TbZodiacLeo, TbZodiacVirgo, TbZodiacLibra, TbZodiacScorpio, 
  TbZodiacSagittarius, TbZodiacCapricorn, TbZodiacAquarius, TbZodiacPisces 
} from 'react-icons/tb';

const Horoscope = () => {
  const zodiacs = [
    { name: 'Aries', date: 'Mar 21 - Apr 19', icon: TbZodiacAries },
    { name: 'Taurus', date: 'Apr 20 - May 20', icon: TbZodiacTaurus },
    { name: 'Gemini', date: 'May 21 - Jun 20', icon: TbZodiacGemini },
    { name: 'Cancer', date: 'Jun 21 - Jul 22', icon: TbZodiacCancer },
    { name: 'Leo', date: 'Jul 23 - Aug 22', icon: TbZodiacLeo },
    { name: 'Virgo', date: 'Aug 23 - Sep 22', icon: TbZodiacVirgo },
    { name: 'Libra', date: 'Sep 23 - Oct 22', icon: TbZodiacLibra },
    { name: 'Scorpio', date: 'Oct 23 - Nov 21', icon: TbZodiacScorpio },
    { name: 'Sagittarius', date: 'Nov 22 - Dec 21', icon: TbZodiacSagittarius },
    { name: 'Capricorn', date: 'Dec 22 - Jan 19', icon: TbZodiacCapricorn },
    { name: 'Aquarius', date: 'Jan 20 - Feb 18', icon: TbZodiacAquarius },
    { name: 'Pisces', date: 'Feb 19 - Mar 20', icon: TbZodiacPisces }
  ];

  return (
    <section id="horoscope" className="py-24 bg-[#0A0F1C] relative border-t border-luxury-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Daily <span className="text-luxury-gold italic">Horoscope</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-soft-cream/70 text-lg"
          >
            Discover what the stars have in store for you today.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {zodiacs.map((zodiac, index) => {
            const Icon = zodiac.icon;
            return (
              <motion.div
                key={zodiac.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="glass-card p-6 flex flex-col items-center justify-center text-center h-full hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-luxury-gold/50 cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-deep-navy border border-white/10 flex items-center justify-center mb-4 group-hover:border-luxury-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500 relative overflow-hidden">
                    <Icon className="text-luxury-gold relative z-10" size={32} strokeWidth={1} />
                    <div className="absolute inset-0 bg-luxury-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </div>
                  
                  <h3 className="font-serif text-lg mb-1 group-hover:text-luxury-gold transition-colors">{zodiac.name}</h3>
                  <p className="text-xs text-soft-cream/50 mb-4">{zodiac.date}</p>
                  
                  <span className="text-xs font-medium text-luxury-gold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Read Today's Horoscope
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Horoscope;
