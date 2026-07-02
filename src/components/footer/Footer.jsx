import { Sun, Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram as Instagram, FaFacebook as Facebook, FaTwitter as Twitter, FaYoutube as Youtube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0A0F1C] pt-20 pb-10 border-t border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sun className="text-luxury-gold" size={32} />
              <span className="font-serif text-2xl font-semibold text-soft-cream">
                Vedant <span className="font-light">Jyotish</span>
              </span>
            </div>
            <p className="text-soft-cream/70 leading-relaxed text-sm">
              Experience authentic Vedic astrology consultations, accurate kundali analysis, and personalized spiritual guidance to illuminate your life's journey.
            </p>
            <div className="flex gap-4 pt-2">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-soft-cream/70 hover:text-luxury-gold hover:border-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-luxury-gold mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Daily Panchang', 'Today\'s Horoscope', 'Book Consultation', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-soft-cream/70 hover:text-luxury-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold/50"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg text-luxury-gold mb-6 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-4">
              {['Astrology Consultation', 'Kundali Checking', 'Career Guidance', 'Marriage Compatibility', 'Spiritual Consultation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-soft-cream/70 hover:text-luxury-gold transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold/50"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-luxury-gold mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-soft-cream/70 text-sm group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-luxury-gold/10 group-hover:text-luxury-gold transition-colors shrink-0">
                  <Phone size={18} />
                </div>
                <div className="pt-2">
                  <p className="hover:text-luxury-gold transition-colors cursor-pointer">8655315530</p>
                </div>
              </li>
              <li className="flex items-start gap-4 text-soft-cream/70 text-sm group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-luxury-gold/10 group-hover:text-luxury-gold transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div className="pt-2">
                  <a href="mailto:anandprakash.dubey1@gmail.com" className="hover:text-luxury-gold transition-colors">anandprakash.dubey1@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-soft-cream/50 text-sm">
            &copy; {new Date().getFullYear()} Vedant Jyotish. All rights reserved.
          </p>
          <p className="text-soft-cream/50 text-sm">
            Guidance Through Ancient Wisdom
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
