import React, { memo, useEffect, useState } from 'react';
import { ArrowRight, MessageSquare, Clock, TrendingUp, Users, Globe, Star, Award, CheckCircle } from 'lucide-react';
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
          <div id="hero-content" className="max-w-5xl mx-auto text-center">
            
            {/* A/B Test indicator (only in dev) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-4 text-xs text-brand-yellow opacity-50">
                A/B Test: Variant {variant}
              </div>
            )}
            
            {/* 1. TÍTULO con A/B Testing */}
            <div className="mb-8 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
                {headline.main}
                <span className="block text-brand-yellow text-4xl md:text-5xl lg:text-6xl font-black mt-3 mb-3 animate-pulse-subtle">
                  {headline.highlight}
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-white/90">
                  {headline.subline}
                </span>
              </h1>
              
              {/* 2. SUBTÍTULO con mejor legibilidad */}
              <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
                  El Método P.U.D.E.R. crea <span className="text-brand-yellow font-semibold bg-brand-yellow/10 px-2 py-1 rounded">sistemas automatizados</span> y 
                  <span className="text-brand-yellow font-semibold bg-brand-yellow/10 px-2 py-1 rounded ml-1">equipos autónomos</span> que permiten a tu empresa 
                  funcionar sin tu presencia constante.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-lg md:text-xl text-brand-yellow font-semibold">
                    ⏱️ En 90 días reduces 50% tus horas de trabajo y aumentas 25-40% tu rentabilidad
                  </p>
                </div>
              </div>
            </div>

            {/* 3. FOTO DE CLAUDIO - Optimizada con badge de experiencia */}
            <div className="flex justify-center mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow via-brand-red to-brand-yellow rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500 animate-pulse-slow"></div>
                
                <div className="relative">
                  <SafeImage 
                    src="/lovable-uploads/0b84250d-4c53-48c5-9471-1227bf9ff0fb.png"
                    alt="Claudio Flores - Consultor Estratégico Empresarial con 17 años de experiencia transformando empresas" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl relative z-10 bg-gray-800"
                  />
                  
                  {/* Badge de experiencia mejorado */}
                  <div className="absolute -bottom-2 -right-2 z-20">
                    <div className="bg-gradient-to-br from-brand-red to-red-700 text-white px-4 py-2 rounded-full shadow-xl border-2 border-white flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      <span className="text-sm font-bold">17+ años</span>
                    </div>
                  </div>
                  
                  {/* Badge verificado */}
                  <div className="absolute -top-2 -left-2 z-20">
                    <div className="bg-green-500 text-white p-2 rounded-full shadow-xl border-2 border-white">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 4. PRUEBA SOCIAL - Badges mejorados con iconos más prominentes */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 animate-slide-up" style={{animationDelay: '0.15s'}}>
              <div className="flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 hover:border-brand-yellow/50 hover:bg-white/15 transition-all shadow-lg group">
                <div className="bg-brand-yellow/20 p-2 rounded-full group-hover:bg-brand-yellow/30 transition-all">
                  <Clock className="h-5 w-5 text-brand-yellow" />
                </div>
                <span className="font-bold text-lg">17 años</span>
              </div>
              
              <div className="flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 hover:border-brand-yellow/50 hover:bg-white/15 transition-all shadow-lg group">
                <div className="bg-brand-yellow/20 p-2 rounded-full group-hover:bg-brand-yellow/30 transition-all">
                  <Users className="h-5 w-5 text-brand-yellow" />
                </div>
                <span className="font-bold text-lg">500+ empresas</span>
              </div>
              
              <div className="flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 hover:border-brand-yellow/50 hover:bg-white/15 transition-all shadow-lg group">
                <div className="bg-brand-yellow/20 p-2 rounded-full group-hover:bg-brand-yellow/30 transition-all">
                  <Globe className="h-5 w-5 text-brand-yellow" />
                </div>
                <span className="font-bold text-lg">22 países</span>
              </div>
              
              <div className="flex items-center gap-2 bg-gradient-to-r from-brand-yellow/20 to-brand-yellow/10 backdrop-blur-md px-5 py-3 rounded-full border-2 border-brand-yellow/50 hover:border-brand-yellow transition-all shadow-lg">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-brand-yellow fill-brand-yellow drop-shadow-lg" />
                  ))}
                </div>
                <span className="font-bold text-lg">5.0</span>
              </div>
            </div>

            {/* 5. VIDEO - Con marco visual mejorado y tracking */}
            <div className="mb-10 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-brand-yellow/10 to-brand-red/10 backdrop-blur-sm rounded-2xl p-6 border border-brand-yellow/30 mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-brand-yellow text-center flex items-center justify-center gap-2">
                    <span className="text-2xl">👇</span>
                    Ve Cómo el Método P.U.D.E.R. Transforma Empresas
                  </h2>
                  <p className="text-white/80 text-sm mt-2">5 señales de que tu empresa te está consumiendo</p>
                </div>
                
                {/* Video con efecto de glow */}
                <div className="relative group" onClick={handleVideoClick}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow via-brand-red to-brand-yellow rounded-2xl opacity-50 group-hover:opacity-75 blur-lg transition duration-500"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-brand-yellow/50 group-hover:border-brand-yellow transition-all">
                    <SafeIframe 
                      src="https://www.youtube.com/embed/HE4E1z77eOg" 
                      title="¡5 Señales de que TU EMPRESA TE ESTÁ CONSUMIENDO!🥴" 
                      className="w-full aspect-video" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* 6. CTA PRINCIPAL - Diseño premium mejorado con tracking */}
            <div className="space-y-5 animate-slide-up mb-8" style={{animationDelay: '0.25s'}}>
              {/* Efecto de urgencia sutil */}
              <div className="inline-block bg-brand-red/20 backdrop-blur-sm border border-brand-red/50 rounded-full px-4 py-2">
                <p className="text-sm font-semibold text-brand-yellow flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red"></span>
                  </span>
                  Sesiones disponibles esta semana
                </p>
              </div>
              
              {/* CTA principal con efecto 3D */}
              <div className="relative group max-w-2xl mx-auto">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-red via-red-600 to-brand-red rounded-2xl opacity-75 group-hover:opacity-100 blur-lg transition duration-500 animate-pulse-slow"></div>
                
                <a 
                  href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
                  className="relative block w-full bg-gradient-to-r from-brand-red to-red-600 text-white font-bold text-xl md:text-2xl py-7 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 border-4 border-brand-yellow" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Agendar sesión estratégica gratuita"
                  onClick={() => handleCTAClick('Sesión Estratégica Principal')}
                >
                  <div className="text-2xl md:text-3xl mb-2 flex items-center justify-center gap-3">
                    <span>🚀</span>
                    Descubre Cómo Reducir 30 Horas en 90 Días
                  </div>
                  <div className="text-lg font-normal opacity-90 mb-2">
                    Sesión Estratégica GRATIS (Valor: $250 USD)
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm bg-white/20 rounded-lg py-2 px-4 inline-block">
                    <Clock className="h-4 w-4" />
                    <span>45 minutos que pueden cambiar tu vida</span>
                  </div>
                </a>
              </div>
              
              {/* 7. ELIMINADOR DE OBJECIONES - Diseño visual mejorado */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-white/90 max-w-2xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg py-3 px-4 border border-white/10 hover:border-brand-yellow/50 transition-all">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-yellow flex-shrink-0" />
                    <span className="text-xs md:text-sm">Sin tarjeta</span>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg py-3 px-4 border border-white/10 hover:border-brand-yellow/50 transition-all">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-yellow flex-shrink-0" />
                    <span className="text-xs md:text-sm">Resultados día 1</span>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg py-3 px-4 border border-white/10 hover:border-brand-yellow/50 transition-all">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-yellow flex-shrink-0" />
                    <span className="text-xs md:text-sm">100% personalizado</span>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg py-3 px-4 border border-white/10 hover:border-brand-yellow/50 transition-all">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-brand-yellow flex-shrink-0" />
                    <span className="text-xs md:text-sm">Sin compromiso</span>
                  </div>
                </div>
              </div>
              
              {/* CTAs secundarios con mejores iconos y tracking */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto mt-6 pt-6 border-t border-white/10">
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
            
            {/* Credibility line final mejorada */}
            <div className="mt-10 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-to-r from-brand-yellow/20 via-brand-yellow/10 to-brand-yellow/20 backdrop-blur-md rounded-xl p-5 border border-brand-yellow/30 shadow-xl max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                    <Award className="h-5 w-5 text-brand-yellow" />
                  </div>
                  <p className="text-xl font-bold text-brand-yellow">Claudio Flores</p>
                </div>
                <p className="text-base text-white/90 font-medium">Consultor Estratégico Empresarial | Creador del Método P.U.D.E.R.</p>
                <div className="flex items-center justify-center gap-2 mt-3 text-xs text-white/70">
                  <span>🏆 17 años transformando empresas</span>
                  <span>•</span>
                  <span>🌍 22 países</span>
                  <span>•</span>
                  <span>⭐ 500+ clientes exitosos</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>;
});

export default Hero;