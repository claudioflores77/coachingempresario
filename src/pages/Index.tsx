
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
import PersonSchema from '../components/PersonSchema';
import ContactSchema from '../components/ContactSchema';
import SEOMonitoring from '../components/SEOMonitoring';

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
  const [currentSection, setCurrentSection] = useState('hero');

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

    // Section tracking for breadcrumbs
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id || 'hero');
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
      label: currentSection === 'hero' ? 'Inicio' : 
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
      <PersonSchema />
      <ContactSchema />
      <SEOMonitoring />
      <Header />
      {currentSection !== 'hero' && <BreadcrumbNav items={breadcrumbItems} />}
      
      <main role="main">
        {/* 1. Título atractivo enfocado en el resultado + CTA */}
        <Hero />
        
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
