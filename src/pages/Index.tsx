
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MethodSection from '../components/MethodSection';
import Services from '../components/Services';
import Results from '../components/Results';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    console.log('Index page loading...');
    
    // Update page title
    document.title = "Claudio Flores - Consultoría Estratégica Empresarial";
    
    // Smooth scroll for anchor links
    try {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href') as string);
          if (target) {
            window.scrollTo({
              top: (target as HTMLElement).offsetTop - 80, // Adjust for header height
              behavior: 'smooth'
            });
          }
        });
      });
    } catch (error) {
      console.error('Error setting up smooth scroll:', error);
    }

    console.log('Index page loaded successfully');
  }, []);

  console.log('Index component rendering');

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MethodSection />
      <Services />
      <Results />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
