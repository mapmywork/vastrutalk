import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is Kundali?',
      a: 'A Kundali, or birth chart, is an astrological chart created based on the exact date, time, and place of your birth. It maps the positions of planets and constellations at that specific moment, serving as a cosmic blueprint for your life.'
    },
    {
      q: 'What details are required for a consultation?',
      a: 'To generate an accurate astrological reading, we require three main details: your exact Date of Birth, Time of Birth (as precise as possible), and Place of Birth (city and country).'
    },
    {
      q: 'How accurate is Vedic astrology?',
      a: 'Vedic astrology is a highly precise ancient science based on astronomical calculations. When provided with exact birth details, our expert analysis yields highly accurate and reliable predictions.'
    },
    {
      q: 'Can consultations be done online?',
      a: 'Yes, we offer seamless online consultations via phone calls, WhatsApp, or video calls, allowing you to seek guidance from the comfort of your home, anywhere in the world.'
    },
    {
      q: 'What is a Panchang?',
      a: 'Panchang is a traditional Hindu calendar that calculates the five elements of time (Tithi, Nakshatra, Yoga, Karana, and Vaar) to help determine auspicious timings for important activities and rituals.'
    },
    {
      q: 'How do I book a consultation?',
      a: 'You can easily book a consultation by filling out the contact form on this website, calling us directly at 8655315530, or sending a message via WhatsApp.'
    }
  ];

  return (
    <section className="py-24 bg-[#0A0F1C] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Frequently Asked <span className="text-luxury-gold italic">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full text-left px-6 py-6 flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
              >
                <span className={`font-serif text-lg md:text-xl transition-colors ${openIndex === index ? 'text-luxury-gold' : 'text-soft-cream'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-luxury-gold text-deep-navy' : 'bg-white/10 text-luxury-gold'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-soft-cream/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
