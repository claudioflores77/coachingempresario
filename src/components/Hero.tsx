
import React from 'react';
import { ArrowRight, MessageSquare, Clock, TrendingUp, Users } from 'lucide-react';
import SafeImage from './SafeImage';
import SafeIframe from './SafeIframe';

const Hero: React.FC = () => {
  console.log('Hero component rendering');
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
            
            {/* Main Headline - Moved to top with better hierarchy */}
            <div className="mb-12 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Deja de Trabajar
                <span className="block text-brand-red text-5xl md:text-6xl lg:text-7xl font-black mt-3 mb-3">
                  60+ HORAS
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl">
                  Sin Ver a Tu Familia
                </span>
              </h1>
              
              <div className="bg-brand-red/20 backdrop-blur-sm border-2 border-brand-red rounded-xl p-6 md:p-8 mb-8">
                <p className="text-2xl md:text-3xl font-bold text-brand-yellow mb-3">
                  ¡TRANSFORMA TU EMPRESA EN 90 DÍAS!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                  <div className="flex items-center justify-center">
                    <span className="text-brand-yellow font-bold mr-2">50%</span>
                    <span>menos horas</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-brand-yellow font-bold mr-2">40%</span>
                    <span>más rentabilidad</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-brand-yellow font-bold mr-2">100%</span>
                    <span>tu vida personal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Section - Better organized */}
            <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-brand-red/30">
                <h2 className="text-xl md:text-2xl font-bold text-brand-red mb-6">
                  ¿Te Sientes Atrapado en Tu Negocio?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center text-left">
                      <span className="text-brand-red text-2xl mr-3 flex-shrink-0">✗</span>
                      <span className="text-base">Trabajas más de 60 horas sin descanso</span>
                    </div>
                    <div className="flex items-center text-left">
                      <span className="text-brand-red text-2xl mr-3 flex-shrink-0">✗</span>
                      <span className="text-base">Tu negocio no puede funcionar sin ti</span>
                    </div>
                    <div className="flex items-center text-left">
                      <span className="text-brand-red text-2xl mr-3 flex-shrink-0">✗</span>
                      <span className="text-base">El estrés está afectando tu salud</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-left">
                      <span className="text-brand-red text-2xl mr-3 flex-shrink-0">✗</span>
                      <span className="text-base">No tienes tiempo para tu familia</span>
                    </div>
                    <div className="flex items-center text-left">
                      <span className="text-brand-red text-2xl mr-3 flex-shrink-0">✗</span>
                      <span className="text-base">La rentabilidad no justifica el esfuerzo</span>
                    </div>
                    <div className="flex items-center text-left">
                      <span className="text-brand-red text-2xl mr-3 flex-shrink-0">✗</span>
                      <span className="text-base">No puedes tomar vacaciones</span>
                    </div>
                  </div>
                </div>
                
                {/* Video Section - Better positioned */}
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-brand-yellow">
                    👇 Las 5 Señales de que Tu Empresa Te Está Consumiendo
                  </h3>
                  <div className="relative max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl border-2 border-brand-red/50">
                    <SafeIframe src="https://www.youtube.com/embed/HE4E1z77eOg" title="¡5 Señales de que TU EMPRESA TE ESTÁ CONSUMIENDO!🥴" className="w-full aspect-video" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats - Simplified and more visual */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <Clock className="h-12 w-12 text-brand-yellow mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-yellow mb-1">17</div>
                <p className="text-sm font-medium">Años de Experiencia</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <Users className="h-12 w-12 text-brand-yellow mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-yellow mb-1">22</div>
                <p className="text-sm font-medium">Países Transformados</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                <TrendingUp className="h-12 w-12 text-brand-yellow mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-yellow mb-1">500+</div>
                <p className="text-sm font-medium">Empresarios Exitosos</p>
              </div>
            </div>
            
            {/* CTAs - Simplified and more prominent */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <a href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" className="block w-full max-w-2xl mx-auto bg-gradient-to-r from-brand-red to-red-600 text-white font-bold text-xl md:text-2xl py-6 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-white" target="_blank" rel="noopener noreferrer" aria-label="Agendar sesión estratégica gratuita">
                <div className="text-2xl md:text-3xl mb-2">🚀 SESIÓN ESTRATÉGICA GRATUITA</div>
                <div className="text-lg font-normal opacity-90">
                  Recupera tu vida en 90 días
                </div>
              </a>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                <a href="#sobre-metodo" className="flex-1 w-full sm:w-auto bg-transparent border-2 border-brand-yellow text-brand-yellow font-semibold text-lg py-4 px-8 rounded-xl hover:bg-brand-yellow hover:text-black transition-all duration-300 text-center" onClick={e => {
                e.preventDefault();
                const element = document.getElementById('sobre-metodo');
                if (element) {
                  const headerHeight = 80;
                  const targetPosition = element.offsetTop - headerHeight;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  });
                }
              }}>
                  Ver el Método P.U.D.E.R.
                </a>
                
                <a href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+hacer+una+pregunta+sobre+consultoría+empresarial&type=phone_number&app_absent=0" className="flex-1 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
            
            {/* Credibility line - Simplified */}
            <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-brand-yellow/20 backdrop-blur-sm rounded-lg p-6 border border-brand-yellow/30">
                <p className="text-xl font-bold text-brand-yellow mb-1">Claudio Flores</p>
                <p className="text-lg text-white">Consultor Estratégico Empresarial | Método P.U.D.E.R.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>;
};

export default Hero;
