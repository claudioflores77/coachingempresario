import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageSquare, TrendingUp, Clock, Heart } from 'lucide-react';
import StructuredData from './StructuredData';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  results: string;
  image: string;
  beforeMetric: {
    label: string;
    value: string;
    icon: 'clock' | 'trending' | 'heart';
  };
  afterMetric: {
    label: string;
    value: string;
    icon: 'clock' | 'trending' | 'heart';
  };
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Ramírez",
      role: "CEO",
      company: "Innovatech Solutions",
      content: "Antes de conocer a Claudio trabajaba 70 horas semanales, dormía poco y mi familia me reclamaba tiempo. El método P.U.D.E.R. cambió mi vida empresarial por completo.",
      results: "En 4 meses reduje mi jornada a 35 horas semanales y aumentamos ingresos un 35%",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076",
      beforeMetric: {
        label: "Horas trabajadas",
        value: "70h/semana",
        icon: "clock"
      },
      afterMetric: {
        label: "Horas trabajadas",
        value: "35h/semana",
        icon: "clock"
      }
    },
    {
      id: 2,
      name: "Laura Méndez",
      role: "Fundadora",
      company: "CreaSoft",
      content: "El burnout me estaba consumiendo. No podía dejar el negocio ni un día sin que todo se descontrolara. Claudio me ayudó a implementar sistemas que funcionan sin mí.",
      results: "Hoy puedo tomarme vacaciones de 2 semanas y el negocio sigue creciendo",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076",
      beforeMetric: {
        label: "Estrés / Burnout",
        value: "Crítico",
        icon: "heart"
      },
      afterMetric: {
        label: "Balance vida-trabajo",
        value: "Equilibrado",
        icon: "heart"
      }
    },
    {
      id: 3,
      name: "Miguel Ángel Torres",
      role: "Director",
      company: "ConstrucArte S.A.C.I.F.i.A.",
      content: "Mi empresa crecía pero mis beneficios no. Estaba atrapado resolviendo problemas diarios sin poder dedicarme a la estrategia. El Método P.U.D.E.R. reorganizó todo.",
      results: "Escalamos un 40% en 8 meses y aumentamos el margen de beneficio un 15%",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074",
      beforeMetric: {
        label: "Crecimiento anual",
        value: "5%",
        icon: "trending"
      },
      afterMetric: {
        label: "Crecimiento anual",
        value: "40%",
        icon: "trending"
      }
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'clock':
        return <Clock className="h-6 w-6" />;
      case 'trending':
        return <TrendingUp className="h-6 w-6" />;
      case 'heart':
        return <Heart className="h-6 w-6" />;
      default:
        return <Star className="h-6 w-6" />;
    }
  };

  const testimonialsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Claudio Flores Consultoría Empresarial",
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name,
        "jobTitle": testimonial.role,
        "worksFor": {
          "@type": "Organization",
          "name": testimonial.company
        }
      },
      "reviewBody": testimonial.content + " " + testimonial.results,
      "datePublished": "2024-01-01"
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": testimonials.length,
      "bestRating": "5"
    }
  };

  return (
    <>
      <StructuredData data={testimonialsSchema} id="testimonials-schema" />
      <section id="testimonios" className="section bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block py-2 px-6 bg-gradient-to-r from-brand-red to-red-600 text-white text-sm font-bold rounded-full mb-6 shadow-lg">
              ⭐ HISTORIAS DE ÉXITO REALES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Empresarios Que Han <span className="text-brand-red">Recuperado Sus Vidas</span>
            </h2>
            <p className="text-xl text-consulting-gray leading-relaxed">
              Estos son emprendedores que, como tú, estaban atrapados en sus negocios
              y ahora disfrutan de libertad y prosperidad.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto mb-12">
            {/* Card principal del testimonio */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              
              {/* Header con foto y estrellas */}
              <div className="bg-gradient-to-r from-brand-red/10 via-brand-yellow/10 to-brand-red/10 p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Foto del cliente */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow via-brand-red to-brand-yellow rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    {/* Badge verificado */}
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white p-2 rounded-full border-2 border-white shadow-lg">
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>
                  
                  {/* Info y estrellas */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex mb-4 justify-center lg:justify-start gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-brand-yellow fill-brand-yellow drop-shadow-sm" />
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-2">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-lg text-consulting-gray">
                      {testimonials[activeIndex].role} en {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenido del testimonio */}
              <div className="p-8 md:p-10">
                <blockquote className="text-lg md:text-xl italic mb-8 text-consulting-gray leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                
                {/* Before/After Visual - NUEVO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* BEFORE */}
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      ANTES
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="bg-red-100 p-3 rounded-full text-red-600">
                        {getIcon(testimonials[activeIndex].beforeMetric.icon)}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{testimonials[activeIndex].beforeMetric.label}</p>
                        <p className="text-2xl font-bold text-red-600">{testimonials[activeIndex].beforeMetric.value}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* AFTER */}
                  <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      DESPUÉS
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="bg-green-100 p-3 rounded-full text-green-600">
                        {getIcon(testimonials[activeIndex].afterMetric.icon)}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{testimonials[activeIndex].afterMetric.label}</p>
                        <p className="text-2xl font-bold text-green-600">{testimonials[activeIndex].afterMetric.value}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resultado destacado */}
                <div className="bg-gradient-to-r from-brand-red/10 to-brand-yellow/10 border-l-4 border-brand-red rounded-lg p-6">
                  <p className="text-lg font-bold text-brand-red flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    {testimonials[activeIndex].results}
                  </p>
                </div>
              </div>
            </div>

            {/* Botones de navegación mejorados */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 lg:-left-6 top-1/2 transform -translate-y-1/2 bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all border-2 border-gray-200 hover:border-brand-red hover:scale-110 z-10"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 lg:-right-6 top-1/2 transform -translate-y-1/2 bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all border-2 border-gray-200 hover:border-brand-red hover:scale-110 z-10"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            {/* Indicadores de posición mejorados */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all rounded-full ${
                    index === activeIndex 
                      ? 'w-8 h-3 bg-brand-red' 
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section mejorada */}
          <div className="text-center bg-gradient-to-r from-brand-red via-red-600 to-brand-red text-white p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres Resultados Similares?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Únete a los 500+ empresarios que ya transformaron sus vidas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a 
                href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
                className="flex-1 w-full sm:w-auto bg-white text-brand-red hover:bg-gray-100 font-bold text-lg py-5 px-8 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                🚀 Agendar Sesión Estratégica GRATIS
              </a>
              
              <a 
                href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+hacer+una+pregunta+&type=phone_number&app_absent=0"
                className="flex-1 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-5 px-8 rounded-xl transition-all flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </div>

            <a 
              href="https://www.google.com/search?q=Claudio+Flores+%7C+Coaching+y+Estrategia+Empresarial+%7C+Mentor+de+Empresarios+%7C+L%C3%ADderazgo&stick=H4sIAAAAAAAA_-NgU1I1qLA0MTE1SDEwtkg2SjJOM0yyMqgwNUgzMDa0TDY3Mk5JTUq1XMQa7pyTWJqSma_glpNflFqsUKPgnJ-YnJGZl65QqeBaXFKUWJKanpmo4JpbAJROLMpMzAGq8U3NK8kvUkhJRYjng_T6HF6bklqUWJWeDwBAeyO3gwAAAA&hl=en-GB&mat=CV1k0EzVfvQRElYBYJahab2Xi7KGBYlz7DUFsSUns4j4MH9RAtRlS5coiWv6IkF-qjDNx3s-9uyJwgrnopT2PPTvbZR5IckEa1vGwtEhb-FXyCyv1ghBdmPFZeQtFS8t0g&authuser=0#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-white/90 hover:text-white underline text-base mt-4"
            >
              ⭐ Ver más testimonios en Google (5.0 estrellas)
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;