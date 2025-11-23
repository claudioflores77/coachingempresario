import React, { memo } from 'react';
import { ArrowRight, MessageSquare, Clock, TrendingUp, Users, Globe, Star } from 'lucide-react';
import SafeImage from './SafeImage';
import SafeIframe from './SafeIframe';

const Hero: React.FC = memo(() => {
  return <>
      {/* Skip link for accessibility */}
      <a href="#hero-content" className="skip-link focus:translate-y-0" tabIndex={0}>
        Saltar al contenido principal
      </a>
      
      <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-black via-gray-900 to-brand-green text-white pt-32 md:pt-28" role="banner">
        {/* Background with better overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/95 via-brand-black/90 to-brand-green/95"></div>
        
        <div className="container relative z-10 my-8">
          <div id="hero-content" className="max-w-5xl mx-auto text-center">
            
            {/* ========================================
                FASE 1 - QUICK WINS IMPLEMENTADOS
                ======================================== */}
            
            {/* 1.1. NUEVO TÍTULO - Fórmula 1: Valor + Método único */}
            <div className="mb-12 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Recupera 30 Horas Semanales y Duplica Tu Rentabilidad
                <span className="block text-brand-yellow text-4xl md:text-5xl lg:text-6xl font-black mt-3 mb-3">
                  Con el Método P.U.D.E.R.
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-white/90">
                  Sin Trabajar Más Duro, Sin Contratar Más Personal
                </span>
              </h1>
              
              {/* 1.2. SUBTÍTULO EXPLICATIVO CLARO */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                El Método P.U.D.E.R. crea <span className="text-brand-yellow font-semibold">sistemas automatizados</span> y 
                <span className="text-brand-yellow font-semibold"> equipos autónomos</span> que permiten a tu empresa 
                funcionar sin tu presencia constante.
                <span className="block mt-3 text-lg">
                  En 90 días reduces 50% tus horas de trabajo y aumentas 25-40% tu rentabilidad.
                </span>
              </p>
              
              {/* 1.3. PRUEBA SOCIAL - MOVIDA ARRIBA (Posición 3) */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Clock className="h-5 w-5 text-brand-yellow" />
                  <span className="font-semibold">17 años</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Users className="h-5 w-5 text-brand-yellow" />
                  <span className="font-semibold">500+ empresas</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Globe className="h-5 w-5 text-brand-yellow" />
                  <span className="font-semibold">22 países</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-brand-yellow fill-brand-yellow" />
                  ))}
                  <span className="text-sm ml-1">5.0</span>
                </div>
              </div>
            </div>

            {/* Video Section - Mantenido en posición original por ahora (se moverá en Fase 2) */}
            <div className="mb-12 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-yellow text-center">
                  👇 Ve Cómo el Método P.U.D.E.R. Transforma Empresas
                </h3>
                <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-brand-yellow/50">
                  <SafeIframe 
                    src="https://www.youtube.com/embed/HE4E1z77eOg" 
                    title="¡5 Señales de que TU EMPRESA TE ESTÁ CONSUMIENDO!🥴" 
                    className="w-full aspect-video" 
                  />
                </div>
              </div>
            </div>
            
            {/* 1.4. CTA PRINCIPAL - UN SOLO CTA CLARO */}
            <div className="space-y-4 animate-slide-up mb-8" style={{animationDelay: '0.2s'}}>
              <a 
                href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
                className="block w-full max-w-2xl mx-auto bg-gradient-to-r from-brand-red to-red-600 text-white font-bold text-xl md:text-2xl py-6 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-brand-yellow" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Agendar sesión estratégica gratuita"
              >
                <div className="text-2xl md:text-3xl mb-2">
                  Descubre Cómo Reducir 30 Horas en 90 Días
                </div>
                <div className="text-lg font-normal opacity-90">
                  Sesión Estratégica GRATIS (Valor: $250 USD)
                </div>
              </a>
              
              {/* 1.5. ELIMINADOR DE OBJECIONES - Debajo del CTA */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/90 bg-white/5 backdrop-blur-sm rounded-lg py-3 px-4 max-w-2xl mx-auto border border-white/10">
                <span className="flex items-center gap-1">
                  <span className="text-brand-yellow">✓</span> Sin tarjeta de crédito
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-brand-yellow">✓</span> Resultados desde el día 1
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-brand-yellow">✓</span> 100% personalizado
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-brand-yellow">✓</span> Sin compromiso
                </span>
              </div>
              
              {/* CTAs secundarios - MÁS PEQUEÑOS Y DISCRETOS */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-xl mx-auto mt-6">
                <a 
                  href="#sobre-metodo" 
                  className="text-brand-yellow hover:text-white underline text-base transition-colors flex items-center gap-1"
                  onClick={e => {
                    e.preventDefault();
                    const element = document.getElementById('sobre-metodo');
                    if (element) {
                      const headerHeight = 80;
                      const targetPosition = element.offsetTop - headerHeight;
                      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    }
                  }}
                >
                  Ver el Método P.U.D.E.R.
                  <ArrowRight className="h-4 w-4" />
                </a>
                
                <span className="text-white/40 hidden sm:inline">|</span>
                
                <a 
                  href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+hacer+una+pregunta+sobre+consultoría+empresarial&type=phone_number&app_absent=0" 
                  className="flex items-center text-green-400 hover:text-green-300 text-base transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
            
            {/* Credibility line - Mejorada */}
            <div className="mt-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-brand-yellow/20 backdrop-blur-sm rounded-lg p-6 border border-brand-yellow/30">
                <p className="text-xl font-bold text-brand-yellow mb-1">Claudio Flores</p>
                <p className="text-lg text-white">Consultor Estratégico Empresarial | Creador del Método P.U.D.E.R.</p>
                <p className="text-sm text-white/70 mt-2">17 años transformando empresas • 500+ clientes exitosos • 22 países</p>
              </div>
            </div>

            {/* ========================================
                NOTA: CONTENIDO DE "DOLOR" SE MOVERÁ 
                ABAJO DEL SCROLL EN FASE 2
                ======================================== */}

          </div>
        </div>
      </section>
    </>;
});

export default Hero;
