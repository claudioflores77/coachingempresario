import React, { memo, useEffect, useState } from 'react';
import { ArrowRight, MessageSquare, Clock, Users, Globe, Star, Award, CheckCircle, Zap, Target, Timer } from 'lucide-react';
import SafeImage from './SafeImage';
import SafeIframe from './SafeIframe';
import { analytics, trackCTA, trackVideo } from '../utils/analytics';

// A/B Test variants for headline - OPTIMIZADO MOBILE-FIRST
const HEADLINE_VARIANTS = {
  A: {
    // Desktop: Título completo y específico
    mainDesktop: "Recupera 30 Horas Semanales y Duplica Tu Rentabilidad",
    // Mobile: Título corto y directo
    mainMobile: "Recupera Tu Vida Personal en 90 Días",
    highlight: "Con el Método P.U.D.E.R.",
    sublineDesktop: "Sin Trabajar Más Duro, Sin Contratar Más Personal",
    sublineMobile: "Y Duplica Tu Rentabilidad"
  },
  B: {
    mainDesktop: "Deja de Sacrificar Tu Vida Personal Por Tu Empresa",
    mainMobile: "Deja de Sacrificar Tu Vida Por Tu Empresa",
    highlight: "El Sistema Que Liberó a 500+ Empresarios",
    sublineDesktop: "De Trabajar 60+ Horas (Sin Sacrificar Ingresos)",
    sublineMobile: "Sin Sacrificar Tus Ingresos"
  }
};

const Hero: React.FC = memo(() => {
  const [variant, setVariant] = useState<'A' | 'B'>('A');
  const [videoPlayed, setVideoPlayed] = useState(false);

  useEffect(() => {
    // Get A/B test variant
    const testVariant = analytics.getVariant('hero_headline');
    setVariant(testVariant);

    // Track exit intent
    analytics.trackExitIntent();
  }, []);

  const headline = HEADLINE_VARIANTS[variant];

  const handleCTAClick = (ctaName: string) => {
    trackCTA(ctaName, 'Hero Section');
  };

  const handleVideoClick = () => {
    if (!videoPlayed) {
      trackVideo('5 Señales de que tu empresa te está consumiendo');
      setVideoPlayed(true);
    }
  };

  return <>
      {/* Skip link for accessibility */}
      <a href="#hero-content" className="skip-link focus:translate-y-0" tabIndex={0}>
        Saltar al contenido principal
      </a>
      
      <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-black via-gray-900 to-brand-green text-white pt-24 md:pt-32 pb-20 md:pb-28" role="banner">
        {/* Background - Optimized with overlay pattern */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center"></div>
        {/* Gradient overlay with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/95 via-brand-black/92 to-brand-green/95"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,.03) 10px,
            rgba(255,255,255,.03) 20px
          )`
        }}></div>
        
        <div className="container relative z-10 my-4 md:my-8">
          <div id="hero-content" className="max-w-7xl mx-auto">
            
            {/* A/B Test indicator (only in dev) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-4 text-xs text-brand-yellow opacity-50 text-center">
                A/B Test: Variant {variant} | V2.0 Mobile-First
              </div>
            )}
            
            {/* ========================================
                V2.0: LAYOUT MOBILE-FIRST OPTIMIZADO
                - Foto pequeña primero en mobile
                - Grid 2 columnas en desktop
                ======================================== */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-12 items-start lg:items-center">
              
              {/* ========================================
                  COLUMNA PRINCIPAL: Contenido
                  ======================================== */}
              <div className="text-center lg:text-left space-y-4 md:space-y-6 animate-slide-up">
                
                {/* MOBILE ONLY: Foto pequeña + Badge compacto ARRIBA */}
                <div className="lg:hidden flex flex-col items-center gap-3 mb-4">
                  <div className="relative inline-block">
                    <img 
                      src="/assets/claudio-flores-profile.jpeg"
                      alt="Claudio Flores - Consultor Estratégico"
                      className="w-24 h-24 object-cover rounded-full border-3 border-brand-yellow/50 shadow-xl"
                      loading="eager"
                    />
                    {/* Badge compacto para mobile */}
                    <div className="absolute -bottom-2 -right-2 bg-brand-yellow text-brand-black px-2 py-1 rounded-lg shadow-lg text-xs font-bold">
                      17 años
                    </div>
                  </div>
                  {/* Rating rápido mobile */}
                  <div className="flex items-center gap-2 bg-gray-800/50 rounded-full px-3 py-1.5 border border-gray-700">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-brand-yellow fill-brand-yellow" />
                      ))}
                    </div>
                    <span className="text-xs text-white/90 font-medium">4.9/5 (500+)</span>
                  </div>
                </div>

                {/* 1. TÍTULO RESPONSIVE - Diferente para mobile/desktop */}
                <div>
                  {/* MOBILE: Título corto */}
                  <h1 className="lg:hidden text-3xl sm:text-4xl font-bold leading-tight text-white drop-shadow-2xl mb-3">
                    {headline.mainMobile}
                    <span className="block text-brand-yellow text-3xl sm:text-4xl font-black mt-2 animate-pulse-subtle">
                      {headline.highlight}
                    </span>
                    <span className="block text-2xl sm:text-3xl text-white/90 mt-2">
                      {headline.sublineMobile}
                    </span>
                  </h1>
                  
                  {/* DESKTOP: Título completo */}
                  <h1 className="hidden lg:block text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight text-white drop-shadow-2xl mb-4">
                    {headline.mainDesktop}
                    <span className="block text-brand-yellow text-4xl xl:text-5xl 2xl:text-6xl font-black mt-3 mb-3 animate-pulse-subtle">
                      {headline.highlight}
                    </span>
                    <span className="block text-3xl xl:text-4xl 2xl:text-5xl text-white/90">
                      {headline.sublineDesktop}
                    </span>
                  </h1>
                </div>
                
                {/* 2. SUBTÍTULO COMPACTO - Reducido para mobile */}
                <div className="bg-black/30 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 border border-white/10 shadow-2xl">
                  <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed">
                    El Método P.U.D.E.R. crea <span className="text-brand-yellow font-semibold bg-brand-yellow/10 px-1.5 py-0.5 rounded">sistemas automatizados</span> y 
                    <span className="text-brand-yellow font-semibold bg-brand-yellow/10 px-1.5 py-0.5 rounded ml-1">equipos autónomos</span> que liberan tu tiempo.
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="text-sm md:text-base lg:text-lg text-brand-yellow font-semibold">
                      ⏱️ En 90 días: 50% menos horas + 25-40% más rentabilidad
                    </p>
                  </div>
                </div>

                {/* 4. PRUEBA SOCIAL - GRID 3 COLUMNAS (crítica implementada) */}
                <div className="grid grid-cols-3 gap-2 md:gap-3 animate-slide-up" style={{animationDelay: '0.15s'}}>
                  
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/20 text-center hover:border-brand-yellow/50 transition-all">
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">17+</div>
                    <div className="text-xs text-white/70 uppercase font-medium">Años Exp.</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/20 text-center hover:border-brand-yellow/50 transition-all">
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">22</div>
                    <div className="text-xs text-white/70 uppercase font-medium">Países</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/20 text-center hover:border-brand-yellow/50 transition-all">
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">500+</div>
                    <div className="text-xs text-white/70 uppercase font-medium">Clientes</div>
                  </div>
                  
                </div>

                {/* 5. CTA PRIMARIO - Full width en mobile */}
                <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <a 
                    href="https://coachingempresario.lovable.app/"
                    className="flex items-center justify-center gap-2 md:gap-3 bg-brand-yellow hover:bg-yellow-500 text-brand-black px-6 md:px-8 py-4 md:py-5 rounded-xl text-base md:text-xl font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCTAClick('Diagnóstico Automático - Hero')}
                  >
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                    <span className="text-center">Descubre Si Tu Empresa Te Está Consumiendo</span>
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                  </a>

                  {/* 6. ELIMINADORES DE FRICCIÓN - Compactos en mobile */}
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-white/80">
                    <span className="flex items-center gap-1 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-brand-yellow flex-shrink-0" />
                      <span className="whitespace-nowrap">3 minutos</span>
                    </span>
                    <span className="flex items-center gap-1 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-brand-yellow flex-shrink-0" />
                      <span className="whitespace-nowrap">Sin compromiso</span>
                    </span>
                    <span className="flex items-center gap-1 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-brand-yellow flex-shrink-0" />
                      <span className="whitespace-nowrap">Gratis</span>
                    </span>
                  </div>
                </div>

                {/* CTAs Secundarios - Compactos */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center pt-3 border-t border-white/10 animate-slide-up text-sm md:text-base" style={{animationDelay: '0.25s'}}>
                  <a 
                    href="#sobre-metodo" 
                    className="text-brand-yellow hover:text-white underline transition-colors flex items-center gap-1.5 group"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCTAClick('Ver Método P.U.D.E.R.');
                      const element = document.getElementById('sobre-metodo');
                      if (element) {
                        const headerHeight = 80;
                        const targetPosition = element.offsetTop - headerHeight;
                        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                      }
                    }}
                  >
                    <span>Ver el Método</span>
                    <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <span className="text-white/40 hidden sm:inline">•</span>
                  
                  <a 
                    href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+hacer+una+pregunta+sobre+consultoría+empresarial&type=phone_number&app_absent=0" 
                    className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors group"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => handleCTAClick('WhatsApp Hero')}
                  >
                    <MessageSquare className="h-3.5 w-3.5 md:h-4 md:w-4 group-hover:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

              {/* ========================================
                  COLUMNA DERECHA: Foto Grande (Desktop Only)
                  ======================================== */}
              <div className="hidden lg:block animate-slide-up" style={{animationDelay: '0.3s'}}>
                <div className="relative">
                  <div className="relative w-full max-w-md mx-auto">
                    <img 
                      src="/assets/claudio-flores-profile.jpeg"
                      alt="Claudio Flores - Consultor Estratégico Empresarial con 17 años de experiencia transformando empresas"
                      className="w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-brand-yellow/50 hover:border-brand-yellow/70 transition-all"
                      loading="eager"
                    />
                    {/* Badge flotante desktop */}
                    <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-brand-black px-8 py-4 rounded-xl shadow-2xl font-bold text-center hover:scale-105 transition-transform">
                      <div className="text-3xl font-black">17 años</div>
                      <div className="text-sm">transformando empresas</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ========================================
                SECCIÓN INFERIOR: Garantías + FOMO
                COMPACTA PARA MOBILE
                ======================================== */}
            <div className="text-center mt-8 md:mt-12 space-y-4 md:space-y-6 animate-slide-up" style={{animationDelay: '0.35s'}}>
              
              {/* Garantías - 3 Cards COMPACTAS en mobile */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-white/10 hover:border-brand-yellow/50 transition-all group">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3">⚡</div>
                  <p className="text-base md:text-lg font-semibold text-brand-yellow mb-1 md:mb-2">Sin Compromiso</p>
                  <p className="text-xs md:text-sm text-white/70">1ª sesión GRATIS ($250 USD)</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-white/10 hover:border-brand-yellow/50 transition-all group">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3">🎯</div>
                  <p className="text-base md:text-lg font-semibold text-brand-yellow mb-1 md:mb-2">Garantía 100%</p>
                  <p className="text-xs md:text-sm text-white/70">O devolución total</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 border border-white/10 hover:border-brand-yellow/50 transition-all group">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-3">⏱️</div>
                  <p className="text-base md:text-lg font-semibold text-brand-yellow mb-1 md:mb-2">En 3 Minutos</p>
                  <p className="text-xs md:text-sm text-white/70">Resultados instantáneos</p>
                </div>
                
              </div>

              {/* Badge de Urgencia - COMPACTO */}
              <div className="bg-orange-500/20 border border-orange-500/50 rounded-lg md:rounded-xl p-3 md:p-4 max-w-2xl mx-auto">
                <p className="text-sm md:text-base lg:text-lg text-center">
                  <span className="text-brand-yellow font-bold">⚡ Spoiler:</span> 
                  <span className="text-white/90"> Tu competencia ya está haciendo esto</span>
                </p>
              </div>

              {/* Contador Social - COMPACTO */}
              <div className="bg-brand-green/20 rounded-lg md:rounded-xl p-4 md:p-6 max-w-md mx-auto border border-brand-green/50">
                <p className="text-center text-base md:text-xl mb-2 md:mb-3">
                  <span className="text-brand-yellow font-bold text-xl md:text-2xl">500+</span> 
                  <span className="text-white/90"> empresarios liberados</span>
                </p>
                <div className="flex justify-center items-center gap-2 text-xs md:text-sm text-white/70">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Último cliente hace 3 días</span>
                </div>
              </div>

              {/* Credibility Line Final - COMPACTO */}
              <div className="bg-gradient-to-r from-brand-yellow/20 via-brand-yellow/10 to-brand-yellow/20 backdrop-blur-md rounded-lg md:rounded-xl p-4 md:p-6 border border-brand-yellow/30 shadow-xl max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                    <Award className="h-5 w-5 md:h-6 md:w-6 text-brand-yellow" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-brand-yellow">Claudio Flores</p>
                </div>
                <p className="text-sm md:text-base text-white/90 font-medium mb-2 md:mb-3">Consultor Estratégico | Creador del Método P.U.D.E.R.</p>
                <div className="flex items-center justify-center gap-2 flex-wrap text-xs md:text-sm text-white/70">
                  <span>🏆 17 años</span>
                  <span className="hidden sm:inline">•</span>
                  <span>🌍 22 países</span>
                  <span className="hidden sm:inline">•</span>
                  <span>⭐ 500+ clientes</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>
    </>;
});

export default Hero;
