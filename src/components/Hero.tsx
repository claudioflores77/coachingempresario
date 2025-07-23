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
            
            {/* Main Headline - Enhanced with dramatic consequences */}
            <div className="mb-12 animate-slide-up">
              <div className="bg-brand-red/10 backdrop-blur-sm border border-brand-red/30 rounded-xl p-6 mb-8">
                <p className="text-lg md:text-xl text-brand-yellow font-semibold mb-2">
                  ⚠️ CADA DÍA QUE PASA SIN ACTUAR...
                </p>
                <p className="text-white/90 text-base">¿Tu salud se deteriora? •
¿Tu familia se aleja más? •
¿Tus competidores avanzan?</p>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                ¿Cuándo Fue la Última Vez que
                <span className="block text-brand-red text-4xl md:text-5xl lg:text-6xl font-black mt-3 mb-3">
                  CENASTE CON TU FAMILIA
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl">
                  Sin Pensar en el Trabajo?
                </span>
              </h1>
              
              <div className="bg-gradient-to-r from-brand-red/90 to-red-600/90 backdrop-blur-sm border-2 border-brand-red rounded-xl p-6 md:p-8 mb-8">
                <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ¿Qué pasaría en 5 años, si todo sigue evolucionando igual, y no actúas AHORA?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-white/95">
                  <div className="space-y-2">
                    <div>--> ¿Podrías haber perdido los primeros pasos de tus hijos? ¿o sus primeras palabras?</div>
                    <div>--> ¿Tu matrimonio estaría en crisis?</div>
                    <div>--> ¿Tu salud estaría quebrada por años de estrés?</div>
                  </div>
                  <div className="space-y-2">
                    <div>--> ¿Seguirías siendo prisionero de tu propio negocio?</div>
                    <div>--> ¿La competencia te habría dejado atrás?</div>
                    <div>--> ¿Te estarías arrepintiendo de no haber actuado cuando tuviste la oportunidad?</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-yellow/20 backdrop-blur-sm border-2 border-brand-yellow rounded-xl p-6 md:p-8 mb-8">
                <p className="text-2xl md:text-3xl font-bold text-brand-yellow mb-3">
                  ✅ PERO SI ACTÚAS HOY, EN 90 DÍAS:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg text-white">
                  <div className="flex items-center justify-center">
                    <span className="text-brand-yellow font-bold mr-2">50%</span>
                    <span>menos horas trabajando</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-brand-yellow font-bold mr-2">25-40%</span>
                    <span>más rentabilidad</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-brand-yellow font-bold mr-2">100%</span>
                    <span>tu vida personal recuperada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Section - Enhanced with storytelling and urgency */}
            <div className="mb-12 animate-slide-up" style={{
            animationDelay: '0.1s'
          }}>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-brand-red/30">
                <h2 className="text-xl md:text-2xl font-bold text-brand-red mb-6">
                  💔 ¿Es Esta Tu Realidad Cada Día?
                </h2>
                
                {/* Story Section */}
                <div className="bg-brand-red/20 rounded-lg p-6 mb-8 border-l-4 border-brand-red">
                  <p className="text-lg italic text-white/95 mb-4">
                    "Son las 11 PM y sigues contestando emails. Tu familia ya se acostó... otra vez. 
                    Mañana será igual: tu empresa te necesita para TODO. Te prometiste que este año sería diferente, 
                    pero ya estamos en julio y trabajas MÁS horas que el año pasado."
                  </p>
                  <p className="text-brand-yellow font-semibold">
                    ¿Te resulta familiar esta situación?
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-brand-yellow mb-3">💼 En Tu Negocio:</h3>
                    <div className="flex items-start text-left">
                      <span className="text-brand-red text-xl mr-3 flex-shrink-0 mt-1">💀</span>
                      <span className="text-base">Trabajas 60+ horas y los resultados no mejoran</span>
                    </div>
                    <div className="flex items-start text-left">
                      <span className="text-brand-red text-xl mr-3 flex-shrink-0 mt-1">⛓️</span>
                      <span className="text-base">Tu negocio NO puede funcionar ni 1 día sin ti</span>
                    </div>
                    <div className="flex items-start text-left">
                      <span className="text-brand-red text-xl mr-3 flex-shrink-0 mt-1">📉</span>
                      <span className="text-base">La rentabilidad es ridícula vs. el tiempo invertido</span>
                    </div>
                    <div className="flex items-start text-left">
                      <span className="text-brand-red text-xl mr-3 flex-shrink-0 mt-1">🔥</span>
                      <span className="text-base">Vives apagando incendios, no construyendo</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-brand-yellow mb-3">💔 En Tu Vida Personal:</h3>
                    <div className="flex items-start text-left">
                      <span className="text-brand-red text-xl mr-3 flex-shrink-0 mt-1">👨‍👩‍👧‍👦</span>
                      <span className="text-base">Tus hijos crecen y tú te lo estás perdiendo</span>
                    </div>
                    <div className="flex items-start text-left">
                      <span className="text-brand-red text-xl mr-3 flex-shrink-0 mt-1">💊</span>
                      <span className="text-base">Tu salud se deteriora: estrés, insomnio, ansiedad</span>
                    </div>
                    <div className="flex items-start text-left">
                      <span className="text-brand-red text-xl mr-3 flex-shrink-0 mt-1">✈️</span>
                      <span className="text-base">No puedes tomar vacaciones reales NUNCA</span>
                    </div>
                    <div className="flex items-start text-left">
                      <span className="text-brand-red text-xl mr-3 flex-shrink-0 mt-1">😔</span>
                      <span className="text-base">Te sientes culpable cuando NO estás trabajando</span>
                    </div>
                  </div>
                </div>
                
                {/* Urgency Section */}
                <div className="bg-gradient-to-r from-brand-red/30 to-orange-600/30 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-brand-yellow mb-4">
                    ¿Sabes qué está pasando mientras sigues posponiendo el cambio?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl mb-2">😰</div>
                      <p>Tu competencia avanza mientras tú sigues "ocupado"</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">👶</div>
                      <p>Tus hijos crecen sin que estés presente</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <p>Tu energía se agota más y rindes menos</p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
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
            
            {/* CTAs - Enhanced with urgency */}
            <div className="space-y-6 animate-slide-up" style={{
            animationDelay: '0.3s'
          }}>
              <div className="bg-brand-red/10 backdrop-blur-sm border border-brand-red/50 rounded-xl p-4 mb-4">
                <p className="text-brand-yellow font-bold text-lg mb-2">
                  🔥 ÚLTIMAS 48 HORAS DE JULIO - NO ESPERES MÁS
                </p>
                <p className="text-white/90">
                  Cada día que pospones esto, es un día más que tu familia espera por ti...
                </p>
              </div>
              
              <a href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" className="block w-full max-w-2xl mx-auto bg-gradient-to-r from-brand-red to-red-600 text-white font-bold text-xl md:text-2xl py-6 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-brand-yellow" target="_blank" rel="noopener noreferrer" aria-label="Agendar sesión estratégica gratuita">
                <div className="text-2xl md:text-3xl mb-2">🚀 SESIÓN ESTRATÉGICA GRATUITA</div>
                <div className="text-lg font-normal opacity-90 mb-2">
                  Recupera tu vida en 90 días
                </div>
                <div className="text-sm bg-white/20 rounded-lg py-2 px-4 inline-block">
                  ⏰ Agenda HOY - Cambia tu vida MAÑANA
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
            <div className="mt-12 animate-slide-up" style={{
            animationDelay: '0.4s'
          }}>
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