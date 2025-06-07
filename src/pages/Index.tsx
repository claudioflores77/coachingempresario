
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MethodSection from '../components/MethodSection';
import Services from '../components/Services';
import Results from '../components/Results';
import Testimonials from '../components/Testimonials';
import HelpSection from '../components/HelpSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import BreadcrumbNav from '../components/BreadcrumbNav';
import NotificationSystem from '../components/NotificationSystem';

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'error';
  title: string;
  message: string;
  autoClose?: boolean;
  duration?: number;
}

const Index = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentSection, setCurrentSection] = useState('inicio');

  useEffect(() => {
    console.log('Index page loading...');
    
    // Update page title and meta description for better SEO
    document.title = "Claudio Flores - Consultoría Estratégica Empresarial | Método P.U.D.E.R.";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Transforma tu empresa con el Método P.U.D.E.R. Consultoría estratégica empresarial. Reduce 50% tus horas de trabajo y aumenta 25-40% tu rentabilidad.'
      );
    }
    
    // Smooth scroll for anchor links with improved accessibility
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          const headerHeight = 80;
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update focus for accessibility
          targetElement.focus({ preventScroll: true });
        }
      }
    };

    // Add event listeners for anchor links
    document.addEventListener('click', handleAnchorClick);

    // Keyboard shortcuts for accessibility
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Close any open modals or focus traps
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Section tracking for breadcrumbs
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-80px 0px -50% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id || 'inicio');
        }
      });
    }, observerOptions);

    // Observe all main sections
    const sections = ['hero', 'metodo', 'servicios', 'resultados', 'testimonios', 'ayuda'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    console.log('Index page loaded successfully');

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, []);

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { ...notification, id }]);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const breadcrumbItems = [
    { 
      label: currentSection === 'inicio' ? 'Inicio' : 
             currentSection === 'metodo' ? 'Método P.U.D.E.R.' :
             currentSection === 'servicios' ? 'Servicios' :
             currentSection === 'resultados' ? 'Resultados' :
             currentSection === 'testimonios' ? 'Testimonios' :
             currentSection === 'ayuda' ? 'Ayuda' : 'Inicio',
      current: true 
    }
  ];

  console.log('Index component rendering');

  return (
    <div className="min-h-screen">
      <Header />
      {currentSection !== 'inicio' && <BreadcrumbNav items={breadcrumbItems} />}
      
      <main role="main">
        <section id="hero">
          <Hero />
        </section>
        <MethodSection />
        <Services />
        <Results />
        <Testimonials />
        <HelpSection />
        <CallToAction />
      </main>
      
      <Footer />
      <BackToTop />
      <NotificationSystem 
        notifications={notifications} 
        onRemove={removeNotification} 
      />
    </div>
  );
};

export default Index;
