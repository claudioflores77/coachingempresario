
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhyChooseMe from '../components/WhyChooseMe';
import AboutMethod from '../components/AboutMethod';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
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
    const sections = ['hero', 'por-que-conmigo', 'sobre-metodo', 'testimonios', 'faq'];
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
             currentSection === 'por-que-conmigo' ? '¿Por qué conmigo?' :
             currentSection === 'sobre-metodo' ? 'Sobre el Método' :
             currentSection === 'testimonios' ? 'Testimonios' :
             currentSection === 'faq' ? 'Preguntas Frecuentes' : 'Inicio',
      current: true 
    }
  ];

  console.log('Index component rendering');

  return (
    <div className="min-h-screen">
      <Header />
      {currentSection !== 'inicio' && <BreadcrumbNav items={breadcrumbItems} />}
      
      <main role="main">
        {/* 1. Título atractivo enfocado en el resultado + CTA */}
        <section id="hero">
          <Hero />
        </section>
        
        {/* 2. ¿Por qué estudiar/trabajar conmigo? */}
        <section id="por-que-conmigo">
          <WhyChooseMe />
        </section>
        
        {/* 3. Sobre el Método (descripción del vehículo) */}
        <section id="sobre-metodo">
          <AboutMethod />
        </section>
        
        {/* 4. CTA reforzada */}
        <CallToAction />
        
        {/* 5. Reseñas/Testimonios/Validación Social */}
        <section id="testimonios">
          <Testimonials />
        </section>
        
        {/* 6. Preguntas Frecuentes (7 objeciones) */}
        <section id="faq">
          <FAQ />
        </section>
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
