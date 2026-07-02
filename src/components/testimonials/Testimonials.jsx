import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'Business Owner',
      text: 'Highly accurate predictions and compassionate guidance. Vedant Jyotish helped me navigate a very tough phase in my business. Truly grateful.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Software Engineer',
      text: 'Professional consultation with deep Vedic knowledge. The Kundali analysis was eye-opening and provided so much clarity for my career path.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'Doctor',
      text: 'The kundali analysis helped me make confident life decisions. The remedies suggested were simple yet highly effective.',
      rating: 5
    },
    {
      name: 'Sneha Gupta',
      role: 'Teacher',
      text: 'A profound experience. The daily panchang guidance and spiritual consultation have brought immense peace to my family life.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-deep-navy border-t border-luxury-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-luxury-gold/30 bg-luxury-gold/5 mb-6"
          >
            <Star className="text-luxury-gold" size={16} fill="currentColor" />
            <span className="text-sm font-medium tracking-wide text-luxury-gold uppercase">Testimonials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Words of <span className="text-luxury-gold italic">Trust</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 text-luxury-gold/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Quote size={120} />
          </div>
          
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet custom-bullet' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="testimonial-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="glass-card p-10 md:p-14 text-center rounded-[2rem] border-luxury-gold/20">
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-luxury-gold" size={20} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl font-serif text-soft-cream/90 leading-relaxed mb-10 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-luxury-gold to-yellow-600 p-[2px] mb-4">
                      <div className="w-full h-full rounded-full bg-deep-navy flex items-center justify-center">
                        <span className="font-serif text-xl text-luxury-gold">{testimonial.name.charAt(0)}</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-soft-cream text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-soft-cream/50 uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Styles for Swiper Pagination are handled in index.css */}
          <style>{`
            .testimonial-swiper .swiper-pagination-bullet {
              background: rgba(212, 175, 55, 0.3);
              width: 10px;
              height: 10px;
              opacity: 1;
              transition: all 0.3s ease;
            }
            .testimonial-swiper .swiper-pagination-bullet-active {
              background: #D4AF37;
              width: 30px;
              border-radius: 5px;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
