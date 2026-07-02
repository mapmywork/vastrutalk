import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Panchang from '../components/panchang/Panchang';
import Horoscope from '../components/horoscope/Horoscope';
import KundaliAnalysis from '../components/services/KundaliAnalysis';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Testimonials from '../components/testimonials/Testimonials';
import FAQ from '../components/faq/FAQ';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Panchang />
      <Horoscope />
      <KundaliAnalysis />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
