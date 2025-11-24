import React, { memo, useEffect, useState } from 'react';
import { ArrowRight, MessageSquare, Clock, Users, Globe, Star, Award, CheckCircle, Calendar, Zap, Target, Timer } from 'lucide-react';
import SafeImage from './SafeImage';
import SafeIframe from './SafeIframe';
import { analytics, trackCTA, trackVideo } from '../utils/analytics';

// A/B Test variants for headline
const HEADLINE_VARIANTS = {
  A: {
    main: "Recupera 30 Horas Semanales y Duplica Tu Rentabilidad",
    highlight: "Con el Método P.U.D.E.R.",
    subline: "Sin Trabajar Más Duro, Sin Contratar Más Personal"
  },
  B: {
    main: "Deja de Sacrificar Tu Vida Personal Por Tu Empresa",
    highlight: "El Sistema Que Liberó a 500+ Empresarios",
    subline: "De Trabajar 60+ Horas (Sin Sacrificar Ingresos)"
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
      
      <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-black via-gray-900 to-brand-green text-white pt-32 md:pt-28" role="banner">
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
        
        <div className="container relative z-10 my-8">
          <div id="hero-content" className="max-w-7xl mx-auto">
            
            {/* A/B Test indicator (only in dev) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-4 text-xs text-brand-yellow opacity-50 text-center">
                A/B Test: Variant {variant}
              </div>
            )}
            
            {/* ========================================
                NUEVO LAYOUT: Grid 2 Columnas (Texto + Foto)
                Según Javier Iranzo: El Arte apoya al título
                ======================================== */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center mb-8">
              
              {/* ========================================
                  COLUMNA IZQUIERDA: Contenido Principal
                  ======================================== */}
              <div className="text-center lg:text-left animate-slide-up">
                
                {/* 1. TÍTULO (La Gran Idea) - Elemento más importante */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
                  {headline.main}
                  <span className="block text-brand-yellow text-4xl md:text-5xl lg:text-6xl font-black mt-3 mb-3 animate-pulse-subtle">
                    {headline.highlight}
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl text-white/90">
                    {headline.subline}
                  </span>
                </h1>
                
                {/* 2. SUBTÍTULO (La Explicación) */}
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl mb-8">
                  <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                    El Método P.U.D.E.R. crea <span className="text-brand-yellow font-semibold bg-brand-yellow/10 px-2 py-1 rounded">sistemas automatizados</span> y 
                    <span className="text-brand-yellow font-semibold bg-brand-yellow/10 px-2 py-1 rounded ml-1">equipos autónomos</span> que permiten a tu empresa 
                    funcionar sin tu presencia constante.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-base md:text-lg text-brand-yellow font-semibold">
                      ⏱️ En 90 días reduces 50% tus horas de trabajo y aumentas 25-40% tu rentabilidad
                    </p>
                  </div>
                </div>

                {/* MOBILE ONLY: Foto visible en pantallas pequeñas */}
                <div className="lg:hidden mb-8 flex justify-center">
                  <div className="relative inline-block">
                    <div className="relative w-64 h-80 sm:w-72 sm:h-96">
                      <img 
                        src="/assets/claudio-flores-profile.jpeg"
                        alt="Claudio Flores - Consultor Estratégico Empresarial con 17 años de experiencia"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-brand-yellow/50"
                        loading="eager"
                      />
                      {/* Badge flotante de credibilidad */}
                      <div className="absolute -bottom-4 -right-4 bg-brand-yellow text-brand-black px-6 py-3 rounded-xl shadow-xl font-bold text-center">
                        <div className="text-2xl font-black">17 años</div>
                        <div className="text-xs">transformando empresas</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. PRUEBA SOCIAL (Legitimidad) - Badges mejorados */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-8 animate-slide-up" style={{animationDelay: '0.15s'}}>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 hover:border-brand-yellow/50 hover:bg-white/15 transition-all shadow-lg group">
                    <div className="bg-brand-yellow/20 p-1.5 rounded-full group-hover:bg-brand-yellow/30 transition-all">
                      <Clock className="h-4 w-4 text-brand-yellow" />
                    </div>
                    <span className="font-bold text-base">17 años</span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 hover:border-brand-yellow/50 hover:bg-white/15 transition-all shadow-lg group">
                    <div className="bg-brand-yellow/20 p-1.5 rounded-full group-hover:bg-brand-yellow/30 transition-all">
                      <Users className="h-4 w-4 text-brand-yellow" />
                    </div>
                    <span className="font-bold text-base">500+ empresas</span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 hover:border-brand-yellow/50 hover:bg-white/15 transition-all shadow-lg group">
                    <div className="bg-brand-yellow/20 p-1.5 rounded-full group-hover:bg-brand-yellow/30 transition-all">
                      <Globe className="h-4 w-4 text-brand-yellow" />
                    </div>
                    <span className="font-bold text-base">22 países</span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-gradient-to-r from-brand-yellow/20 to-brand-yellow/10 backdrop-blur-md px-4 py-2.5 rounded-full border-2 border-brand-yellow/50 hover:border-brand-yellow transition-all shadow-lg">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 text-brand-yellow fill-brand-yellow drop-shadow-lg" />
                      ))}
                    </div>
                    <span className="font-bold text-base">4.9/5</span>
                  </div>
                </div>

                {/* 5. CTA PRIMARIO - Diagnóstico Automático (Paso 1 del embudo) */}
                <div className="mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <a 
                    href="https://coachingempresario.lovable.app/"
                    className="inline-flex items-center gap-3 bg-brand-yellow hover:bg-yellow-500 text-brand-black px-8 py-5 rounded-xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group w-full lg:w-auto justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCTAClick('Diagnóstico Automático - Hero')}
                  >
                    <CheckCircle className="h-6 w-6" />
                    <span>Descubre Si Tu Empresa Te Está Consumiendo</span>
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </a>

                  {/* 6. BONO: Eliminación de Objeciones (según Javier Iranzo) */}
                  <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-white/80">
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-brand-yellow" />
                      Diagnóstico gratuito en 3 minutos
                    </span>
                    <span className="hidden sm:inline text-white/40">•</span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-brand-yellow" />
                      Sin compromiso
                    </span>
                    <span className="hidden sm:inline text-white/40">•</span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                      <CheckCircle className="h-4 w-4 text-brand-yellow" />
                      Resultados instantáneos
                    </span>
                  </div>
                </div>

                {/* CTAs Secundarios */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4 border-t border-white/10 animate-slide-up" style={{animationDelay: '0.25s'}}>
                  <a 
                    href="#sobre-metodo" 
                    className="text-brand-yellow hover:text-white underline text-base transition-colors flex items-center gap-2 group"
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
                    <span>Ver el Método P.U.D.E.R.</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <span className="text-white/40 hidden sm:inline">•</span>
                  
                  <a 
                    href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+hacer+una+pregunta+sobre+consultoría+empresarial&type=phone_number&app_absent=0" 
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 text-base transition-colors group"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => handleCTAClick('WhatsApp Hero')}
                  >
                    <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span>Pregunta por WhatsApp</span>
                  </a>
                </div>

              </div>

              {/* ========================================
                  COLUMNA DERECHA: Foto + Badge (Desktop Only)
                  3. EL ARTE (Visuales) según Javier Iranzo
                  ======================================== */}
              <div className="hidden lg:block animate-slide-up" style={{animationDelay: '0.3s'}}>
                <div className="relative">
                  <div className="relative w-full max-w-md mx-auto">
                    <img 
                      src="/assets/claudio-flores-profile.jpeg"
                      alt="Claudio Flores - Consultor Estratégico Empresarial con 17 años de experiencia transformando empresas en 22 países"
                      className="w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-brand-yellow/50 hover:border-brand-yellow/70 transition-all"
                      loading="eager"
                    />
                    {/* Badge flotante de credibilidad */}
                    <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-brand-black px-8 py-4 rounded-xl shadow-2xl font-bold text-center hover:scale-105 transition-transform">
                      <div className="text-3xl font-black">17 años</div>
                      <div className="text-sm">transformando empresas</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ========================================
                SECCIÓN INFERIOR: Elementos de confianza adicionales
                ======================================== */}
            <div className="text-center mt-12 space-y-6 animate-slide-up" style={{animationDelay: '0.35s'}}>
              
              {/* Eliminadores de Objeciones Visuales - Grid de 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-yellow/50 transition-all group">
                  <div className="text-4xl mb-3">⚡</div>
                  <p className="text-lg font-semibold text-brand-yellow mb-2">Sin Compromiso</p>
                  <p className="text-sm text-white/70">Primera sesión 100% GRATIS (valor $250 USD)</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-yellow/50 transition-all group">
                  <div className="text-4xl mb-3">🎯</div>
                  <p className="text-lg font-semibold text-brand-yellow mb-2">Resultados Garantizados</p>
                  <p className="text-sm text-white/70">O te devolvemos el 100% de tu inversión</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-brand-yellow/50 transition-all group">
                  <div className="text-4xl mb-3">⏱️</div>
                  <p className="text-lg font-semibold text-brand-yellow mb-2">Diagnóstico en 3 Min</p>
                  <p className="text-sm text-white/70">Descubre tu situación actual ahora mismo</p>
                </div>
                
              </div>

              {/* Badge de Urgencia Ética */}
              <div className="bg-orange-500/20 border border-orange-500/50 rounded-xl p-4 max-w-2xl mx-auto">
                <p className="text-base md:text-lg text-center">
                  <span className="text-brand-yellow font-bold">⚡ Spoiler Alert:</span> 
                  <span className="text-white/90"> Mientras lees esto, tu competencia ya está implementando sistemas como este</span>
                </p>
              </div>

              {/* Contador de Transformaciones */}
              <div className="bg-brand-green/20 rounded-xl p-6 max-w-md mx-auto border border-brand-green/50">
                <p className="text-center text-xl mb-3">
                  <span className="text-brand-yellow font-bold text-2xl">500+</span> 
                  <span className="text-white/90"> empresarios ya recuperaron su vida</span>
                </p>
                <div className="flex justify-center items-center gap-2 text-sm text-white/70">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Último cliente transformado hace 3 días</span>
                </div>
              </div>

              {/* Credibility Line Final - Claudio Flores */}
              <div className="bg-gradient-to-r from-brand-yellow/20 via-brand-yellow/10 to-brand-yellow/20 backdrop-blur-md rounded-xl p-6 border border-brand-yellow/30 shadow-xl max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-brand-yellow" />
                  </div>
                  <p className="text-2xl font-bold text-brand-yellow">Claudio Flores</p>
                </div>
                <p className="text-base text-white/90 font-medium mb-3">Consultor Estratégico Empresarial | Creador del Método P.U.D.E.R.</p>
                <div className="flex items-center justify-center gap-2 flex-wrap text-sm text-white/70">
                  <span>🏆 17 años transformando empresas</span>
                  <span className="hidden sm:inline">•</span>
                  <span>🌍 22 países</span>
                  <span className="hidden sm:inline">•</span>
                  <span>⭐ 500+ clientes exitosos</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Video Explicativo - Mantener debajo si existe */}
        {/* ... resto del código del video si lo tienes ... */}

      </section>
    </>;
});

export default Hero;
