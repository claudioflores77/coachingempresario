
import React from 'react';
import { ArrowRight, MessageSquare, Clock, TrendingUp, Users } from 'lucide-react';
import SafeImage from './SafeImage';
import SafeIframe from './SafeIframe';

const Hero: React.FC = () => {
  console.log('Hero component rendering');

  return (
    <>
      {/* Skip link for accessibility */}
      <a 
        href="#hero-content" 
        className="skip-link focus:translate-y-0"
        tabIndex={0}
      >
        Saltar al contenido principal
      </a>
      
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-black via-gray-900 to-brand-green text-white pt-32 md:pt-28"
        role="banner"
      >
        {/* Background with better overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/95 via-brand-black/90 to-brand-green/95"></div>
        
        <div className="container relative z-10">
          <div id="hero-content" className="max-w-4xl mx-auto text-center">
            
            {/* Main Headline - Separated from header */}
            <div className="mb-8 animate-slide-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Deja de Trabajar
                <span className="block text-brand-red text-5xl md:text-7xl lg:text-8xl font-black mt-2">
                  60+ HORAS
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl mt-2">
                  Sin Ver a Tu Familia
                </span>
              </h1>
              
              <div className="bg-brand-red/20 backdrop-blur-sm border-2 border-brand-red rounded-xl p-6 md:p-8 mb-8 mt-8">
                <p className="text-xl md:text-3xl font-bold text-brand-yellow mb-4">
                  ¡TRANSFORMA TU EMPRESA EN 90 DÍAS!
                </p>
                <p className="text-lg md:text-xl text-white">
                  Reduce <span className="text-brand-yellow font-bold">50% tus horas</span> • 
                  Aumenta <span className="text-brand-yellow font-bold">40% tu rentabilidad</span> • 
                  Recupera <span className="text-brand-yellow font-bold">tu vida personal</span>
                </p>
              </div>
            </div>

            {/* Key Stats - Visual Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 text-brand-yellow mr-2" />
                  <span className="text-2xl md:text-3xl font-bold text-brand-yellow">17</span>
                </div>
                <p className="text-sm md:text-base font-medium">Años de Experiencia</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-brand-yellow mr-2" />
                  <span className="text-2xl md:text-3xl font-bold text-brand-yellow">22</span>
                </div>
                <p className="text-sm md:text-base font-medium">Países Transformados</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-brand-yellow mr-2" />
                  <span className="text-2xl md:text-3xl font-bold text-brand-yellow">500+</span>
                </div>
                <p className="text-sm md:text-base font-medium">Empresarios Exitosos</p>
              </div>
            </div>
            
            {/* Main CTAs - More prominent and separated */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <a 
                href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
                className="block w-full max-w-lg mx-auto bg-gradient-to-r from-brand-red to-red-600 text-white font-bold text-xl md:text-2xl py-4 md:py-6 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 animate-pulse border-4 border-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar sesión estratégica gratuita"
              >
                🚀 SESIÓN ESTRATÉGICA GRATUITA
                <div className="text-base md:text-lg font-normal mt-1">
                  ¡Recupera tu vida en 90 días!
                </div>
              </a>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <a 
                  href="#sobre-metodo" 
                  className="flex-1 w-full sm:w-auto bg-transparent border-2 border-brand-yellow text-brand-yellow font-semibold text-lg py-3 px-6 rounded-lg hover:bg-brand-yellow hover:text-black transition-all duration-300 text-center"
                  onClick={(e) => {
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
                </a>
                
                <a 
                  href="https://api.whatsapp.com/send/?phone=19786629364&text=Hola%2C+quiero+hacer+una+pregunta+sobre+consultoría+empresarial&type=phone_number&app_absent=0"
                  className="flex-1 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
            
            {/* Credibility line - Better positioned */}
            <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-brand-yellow/20 backdrop-blur-sm rounded-lg p-4 border border-brand-yellow/30">
                <p className="text-lg md:text-xl font-bold text-brand-yellow">Claudio Flores</p>
                <p className="text-base md:text-lg text-white">Consultor Estratégico Empresarial | Método P.U.D.E.R.</p>
              </div>
            </div>

            {/* Video Section - Moved to second fold to avoid cluttering first screen */}
            <div className="mt-20 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8 border border-brand-red/30">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-red mb-4">
                  ¿Te Sientes Atrapado en Tu Negocio?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-brand-red text-xl mr-3 mt-1">✗</span>
                      <span className="text-base md:text-lg">Trabajas más de 60 horas sin descanso</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-red text-xl mr-3 mt-1">✗</span>
                      <span className="text-base md:text-lg">Tu negocio no puede funcionar sin ti</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-red text-xl mr-3 mt-1">✗</span>
                      <span className="text-base md:text-lg">El estrés está afectando tu salud</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-brand-red text-xl mr-3 mt-1">✗</span>
                      <span className="text-base md:text-lg">No tienes tiempo para tu familia</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-red text-xl mr-3 mt-1">✗</span>
                      <span className="text-base md:text-lg">La rentabilidad no justifica el esfuerzo</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-brand-red text-xl mr-3 mt-1">✗</span>
                      <span className="text-base md:text-lg">No puedes tomar vacaciones</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-brand-yellow">
                  👇 Descubre las 5 Señales de que Tu Empresa Te Está Consumiendo
                </h3>
                <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-brand-red/50">
                  <SafeIframe 
                    src="https://www.youtube.com/embed/HE4E1z77eOg"
                    title="¡5 Señales de que TU EMPRESA TE ESTÁ CONSUMIENDO!🥴"
                    className="w-full aspect-video"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
