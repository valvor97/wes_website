import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Gigs from '../components/Gigs';
import About from '../components/About';
import Videos from '../components/Videos';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      
      {/* 
        Main Content Wrapper
        Slides over the fixed Hero. Z-index 20 puts it above the fixed hero background.
      */}
      <div className="relative z-20 bg-[#050505] shadow-[0_-50px_100px_rgba(0,0,0,1)]">
        <Logos />
        <Services />
        <Benefits />
        <Gigs />
        <About />
        <Videos />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
