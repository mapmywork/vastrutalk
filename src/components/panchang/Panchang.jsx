import { motion } from 'framer-motion';
import { Sun, Moon, Sunrise, Sunset, CalendarDays, Clock, MapPin } from 'lucide-react';

const Panchang = () => {
  const panchangData = [
    { label: 'Sunrise', value: '06:14 AM', icon: Sunrise },
    { label: 'Sunset', value: '06:42 PM', icon: Sunset },
    { label: 'Tithi', value: 'Shukla Paksha Dashami', icon: Moon },
    { label: 'Nakshatra', value: 'Rohini', icon: Sun },
    { label: 'Yoga', value: 'Ayushman', icon: CalendarDays },
    { label: 'Karana', value: 'Taitila', icon: Clock },
    { label: 'Auspicious Time', value: '11:45 AM - 12:35 PM', icon: Sun },
    { label: 'Rahu Kaal', value: '04:30 PM - 06:00 PM', icon: MapPin },
  ];

  return (
    <section id="panchang" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full mix-blend-screen filter blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Today's <span className="text-luxury-gold italic">Panchang</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-soft-cream/70 text-lg"
          >
            Daily astrological calendar outlining the five elements of time.
          </motion.p>
        </div>

        <div className="glass-card p-1">
          <div className="bg-deep-navy/80 rounded-[15px] p-8 md:p-12 border border-white/5 relative overflow-hidden">
            
            {/* Celestial Decorative Element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none">
              <div className="w-96 h-96 border-[1px] border-luxury-gold rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                <div className="w-80 h-80 border-[1px] border-luxury-gold/50 rounded-full border-dashed"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              
              <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-white/10 pb-6">
                  <div>
                    <h3 className="text-3xl font-serif text-luxury-gold mb-2">
                      {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </h3>
                    <p className="text-soft-cream/60 flex items-center gap-2">
                      <MapPin size={16} /> New Delhi, India
                    </p>
                  </div>
                </div>
                
                <p className="text-soft-cream/80 leading-relaxed font-light">
                  The Panchang is a vital tool in Vedic astrology, offering a snapshot of cosmic energies for the day. Use this guidance to align your activities with the most favorable times, ensuring harmony and success in your endeavors.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {panchangData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                    >
                      <div className="text-luxury-gold mt-1">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs text-soft-cream/50 uppercase tracking-wider font-medium mb-1">{item.label}</p>
                        <p className="text-soft-cream font-medium">{item.value}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panchang;
