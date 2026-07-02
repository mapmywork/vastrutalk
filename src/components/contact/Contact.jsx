import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, MapPin, Calendar, Clock, User, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0A0F1C] to-deep-navy">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-purple/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif mb-6"
              >
                Connect With <span className="text-luxury-gold italic">Us</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-soft-cream/70 text-lg leading-relaxed"
              >
                Reach out for personalized astrological guidance, kundali checking, or spiritual consultations.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-soft-cream/50 uppercase tracking-wider">Call Us</p>
                  <a href="tel:8655315530" className="text-xl font-medium text-soft-cream hover:text-luxury-gold transition-colors">8655315530</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-luxury-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-soft-cream/50 uppercase tracking-wider">Email Us</p>
                  <a href="mailto:anandprakash.dubey1@gmail.com" className="text-lg font-medium text-soft-cream hover:text-luxury-gold transition-colors">anandprakash.dubey1@gmail.com</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 pt-4"
            >
              <a 
                href="tel:8655315530"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-luxury-gold hover:text-deep-navy hover:border-luxury-gold transition-all duration-300 font-medium"
              >
                <Phone size={18} /> Call Now
              </a>
              <a 
                href="https://wa.me/918655315530"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300 font-medium"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </a>
            </motion.div>

          </div>

          {/* Right - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 md:p-10 border border-luxury-gold/20">
              <h3 className="font-serif text-2xl mb-8 text-luxury-gold">Book a Consultation</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-cream/40" size={18} />
                    <input {...register("name", { required: true })} type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-soft-cream placeholder:text-soft-cream/40 focus:outline-none focus:border-luxury-gold/50 transition-colors" />
                    {errors.name && <span className="text-red-400 text-xs absolute -bottom-4 left-2">Required</span>}
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-cream/40" size={18} />
                    <input {...register("phone", { required: true })} type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-soft-cream placeholder:text-soft-cream/40 focus:outline-none focus:border-luxury-gold/50 transition-colors" />
                    {errors.phone && <span className="text-red-400 text-xs absolute -bottom-4 left-2">Required</span>}
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-cream/40" size={18} />
                  <input {...register("email", { required: true })} type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-soft-cream placeholder:text-soft-cream/40 focus:outline-none focus:border-luxury-gold/50 transition-colors" />
                  {errors.email && <span className="text-red-400 text-xs absolute -bottom-4 left-2">Required</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-cream/40" size={18} />
                    <input {...register("dob")} type="text" placeholder="Date of Birth" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-soft-cream placeholder:text-soft-cream/40 focus:outline-none focus:border-luxury-gold/50 transition-colors text-sm" />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-cream/40" size={18} />
                    <input {...register("tob")} type="text" placeholder="Time of Birth" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-soft-cream placeholder:text-soft-cream/40 focus:outline-none focus:border-luxury-gold/50 transition-colors text-sm" />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-cream/40" size={18} />
                    <input {...register("pob")} type="text" placeholder="Place of Birth" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-soft-cream placeholder:text-soft-cream/40 focus:outline-none focus:border-luxury-gold/50 transition-colors text-sm" />
                  </div>
                </div>

                <div className="relative">
                  <select {...register("consultationType")} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-soft-cream focus:outline-none focus:border-luxury-gold/50 transition-colors appearance-none">
                    <option value="" disabled selected className="text-deep-navy">Consultation Type</option>
                    <option value="astrology" className="text-deep-navy">Astrology Consultation</option>
                    <option value="kundali" className="text-deep-navy">Kundali Checking</option>
                    <option value="career" className="text-deep-navy">Career Guidance</option>
                    <option value="marriage" className="text-deep-navy">Marriage Compatibility</option>
                    <option value="spiritual" className="text-deep-navy">Spiritual Consultation</option>
                  </select>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-soft-cream/40" size={18} />
                  <textarea {...register("message")} rows="4" placeholder="Your Message or Query" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-soft-cream placeholder:text-soft-cream/40 focus:outline-none focus:border-luxury-gold/50 transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-luxury-gold text-deep-navy font-semibold py-4 rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2">
                  <Send size={18} /> Submit Request
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
