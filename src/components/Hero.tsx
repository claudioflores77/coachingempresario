import React, { memo, useEffect, useState } from 'react';
import { ArrowRight, MessageSquare, Clock, Users, Globe, Star, Award, CheckCircle, Zap, Target, Timer } from 'lucide-react';
import SafeImage from './SafeImage';
import SafeIframe from './SafeIframe';
import { analytics, trackCTA, trackVideo } from '../utils/analytics';

// ACCIÓN 1: NUEVO TÍTULO - Fórmula 2 (Valor + Eliminar Objeción)
const HEADLINE_VARIANTS = {
  A: {
    // NUEVO TÍTULO OPTIMIZADO
    mainDesktop: "El Sistema Que Libera Tu Tiempo Sin Sacrificar Rentabilidad",
    mainMobile: "El Sistema Que Libera Tu Tiempo Sin Sacrificar Rentabilidad",
    highlight: "Con el Método P.U.D.E.R.",
    sublineDesktop: "Crea sistemas automatizados y equipos autónomos que trabajan sin ti",
    sublineMobile: "Sistemas automatizados + equipos autónomos"
  },
  B: {
    mainDesktop: "Empresas Autónomas y Rentables Para Emprendedores Atrapados",
    mainMobile: "Empresas Autónomas Para Emprendedores Atrapados",
    highlight: "Método P.U.D.E.R.",
    sublineDesktop: "Que Viven Apagando Incendios y Quieren Recuperar Su Vida",
    sublineMobile: "Recupera tu vida en 90 días"
  }
};

const Hero: React.FC = memo(() => {
  const [variant, setVariant] = useState<'A' | 'B'>('A');
  const [videoPlayed, setVideoPlayed] = useState(false);

  useEffect(() => {
    const testVariant = analytics.getVariant('hero_headline');
    setVariant(testVariant);
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

  return (
    <>
      <a href="#hero-content" className="sr-only focus:not-sr-only">Saltar al contenido principal</a>

      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-0 left-0 bg-black text-white text-xs p-1 z-50">
          A/B Test: Variant {variant} | OPTIMIZADO - 5 Acciones
        </div>
      )}

      <section id="hero-content" className="section bg-consulting-dark text-white pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* COLUMNA PRINCIPAL */}
            <div className="space-y-6 order-2 md:order-1">

              {/* MOBILE: Foto pequeña + Badge */}
              <div className="flex items-center gap-4 md:hidden">
                <SafeImage
                  src="/images/claudio-flores-coach.jpg"
                  alt="Claudio Flores - Consultor Estratégico"
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-red"
                />
                {/* ACCIÓN 3: Badge sin emoji, solo texto */}
                <div className="bg-brand-red/20 border border-brand-red/40 rounded-full px-3 py-1">
                  <span className="text-brand-red text-sm font-semibold">18 años</span>
                </div>
              </div>

              {/* Estrellas y Rating */}
              <div className="hidden md:flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-consulting-gray text-sm"> 5/5 (47 reseñas Google verificadas) </span>
              </div>

              {/* ACCIÓN 1: NUEVO TÍTULO - Responsive */}

              {/* MOBILE */}
              <div className="md:hidden">
                <h1 className="text-3xl font-bold leading-tight">
                  {headline.mainMobile}
                  <span className="text-brand-red block mt-1"> {headline.highlight} </span>
                </h1>
                <p className="text-consulting-gray mt-3 text-lg">{headline.sublineMobile}</p>
              </div>

              {/* DESKTOP */}
              <div className="hidden md:block">
                <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
                  {headline.mainDesktop}
                  <span className="text-brand-red block mt-2"> {headline.highlight} </span>
                </h1>
                <p className="text-consulting-gray mt-4 text-xl">{headline.sublineDesktop}</p>
              </div>

              {/* SUBTÍTULO */}
              <p className="text-consulting-gray text-base md:text-lg">
                Para emprendedores que viven apagando incendios y quieren recuperar su vida personal en 90 días
              </p>
              <p className="text-green-400 text-sm font-medium">
                En 90 días: hasta 50% menos horas + hasta 40% más rentabilidad
              </p>

              {/* PRUEBA SOCIAL - Grid 3 columnas */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-brand-red">18+</p>
                  <p className="text-consulting-gray text-xs">Años Exp.</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-brand-red">17</p>
                  <p className="text-consulting-gray text-xs">Países</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-brand-red">270+</p>
                  <p className="text-consulting-gray text-xs">Clientes</p>
                </div>
              </div>

              {/* ACCIÓN 4: CTA UNIFICADO - Mismo texto en toda la landing */}
              <a
                href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
                onClick={() => handleCTAClick('CTA Principal Hero')}
                className="btn-primary w-full md:w-auto text-center block md:inline-block"
              >
                Agenda Tu Sesión Estratégica GRATUITA
              </a>
              {/* ACCIÓN 4: Microcopy consistente */}
              <div className="flex items-center gap-4 text-xs text-consulting-gray">
                <span> 45 minutos </span>
                <span> Sin compromiso </span>
                <span> Valor $250 USD </span>
              </div>

              {/* CTAs Secundarios */}
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="#sobre-metodo"
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
                   Ver el Método
                </a>
                 • 
                <a
                  href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+hacer+una+pregunta+sobre+consultoría+empresarial&type=phone_number&app_absent=0"
                  onClick={() => handleCTAClick('WhatsApp Hero')}
                >
                   WhatsApp 
                </a>
              </div>
            </div>

            {/* COLUMNA DERECHA: Foto Grande (Desktop Only) */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end hidden md:flex">
              <div className="relative">
                <SafeImage
                  src="/images/claudio-flores-coach.jpg"
                  alt="Claudio Flores - Consultor Estratégico Empresarial con 18 años de experiencia transformando empresas"
                  className="w-80 xl:w-96 rounded-2xl object-cover shadow-2xl"
                />
                {/* ACCIÓN 3: Badge sin emoji */}
                <div className="absolute -bottom-4 -left-4 bg-brand-red text-white rounded-xl p-4 shadow-xl">
                  <p className="text-2xl font-bold">18 años</p>
                  <p className="text-sm">transformando empresas</p>
                </div>
              </div>
            </div>

          </div>

          {/* SECCIÓN INFERIOR: Garantías */}
          {/* ACCIÓN 3: Garantías SIN emojis, usando iconos */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Sin Compromiso</p>
                <p className="text-consulting-gray text-xs">1ª sesión GRATIS ($250 USD)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-brand-red flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Garantía 100%</p>
                <p className="text-consulting-gray text-xs">O devolución total</p>
              </div>
            </div>
          </div>

          {/* Badge de Urgencia */}
          <div className="mt-6 text-center">
            <span className="text-consulting-gray text-sm">
               <span className="font-semibold text-white">Spoiler:</span>   Tu competencia ya está haciendo esto 
            </span>
          </div>

          {/* Contador Social */}
          <div className="mt-4 text-center flex justify-center gap-6">
            <span className="text-consulting-gray text-sm"> <span className="text-white font-bold">270+</span>   empresarios liberados </span>
          </div>

          {/* Credibility Line Final */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-4">
            <SafeImage
              src="/images/claudio-flores-coach.jpg"
              alt="Claudio Flores"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm">Claudio Flores</p>
              <p className="text-consulting-gray text-xs">Consultor Estratégico | Creador del Método P.U.D.E.R.</p>
            </div>
            <div className="text-consulting-gray text-xs flex gap-3">
              <span> 18 años </span>
              <span>  •  </span>
              <span> 17 países </span>
              <span>  •  </span>
              <span> 270+ clientes </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
});

export default Hero;
