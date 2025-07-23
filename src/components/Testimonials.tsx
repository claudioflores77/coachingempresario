
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageSquare, ArrowRight } from 'lucide-react';
import StructuredData from './StructuredData';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  results: string;
  image: string;
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
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076"
    },
    {
      id: 2,
      name: "Laura Méndez",
      role: "Fundadora",
      company: "CreaSoft",
      content: "El burnout me estaba consumiendo. No podía dejar el negocio ni un día sin que todo se descontrolara. Claudio me ayudó a implementar sistemas que funcionan sin mí.",
      results: "Hoy puedo tomarme vacaciones de 2 semanas y el negocio sigue creciendo",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076"
    },
    {
      id: 3,
      name: "Miguel Ángel Torres",
      role: "Director",
      company: "ConstrucArte S.A.C.I.F.i.A.",
      content: "Mi empresa crecía pero mis beneficios no. Estaba atrapado resolviendo problemas diarios sin poder dedicarme a la estrategia. El Método P.U.D.E.R. reorganizó todo.",
      results: "Escalamos un 40% en 8 meses y aumentamos el margen de beneficio un 15%",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
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

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <StructuredData data={testimonialsSchema} id="testimonials-schema" />
      <section id="testimonios" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-2 px-4 bg-brand-red text-white text-sm font-semibold rounded-full mb-6">
            HISTORIAS DE ÉXITO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empresarios Que Han <span className="text-brand-red">Recuperado Sus Vidas</span>
          </h2>
          <p className="text-xl text-consulting-gray leading-relaxed">
            Estos son emprendedores que, como tú, estaban atrapados en sus negocios
            y ahora disfrutan de libertad y prosperidad.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="bg-consulting-gray-light p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Image */}
              <div className="lg:w-1/3">
                <div className="relative">
                  <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden border-4 border-brand-red shadow-lg">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-brand-red text-white p-2 rounded-full">
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:w-2/3">
                <div className="flex mb-4 justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-brand-yellow fill-brand-yellow" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-6 text-consulting-gray leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </blockquote>
                
                <div className="bg-brand-red/10 p-4 rounded-xl mb-6">
                  <p className="text-lg font-bold text-brand-red">
                    📈 {testimonials[activeIndex].results}
                  </p>
                </div>
                
                <div className="text-center lg:text-left">
                  <p className="font-bold text-xl text-brand-black">{testimonials[activeIndex].name}</p>
                  <p className="text-consulting-gray text-lg">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 lg:-left-6 top-1/2 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all border-2 border-gray-100 hover:border-brand-red"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 lg:-right-6 top-1/2 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all border-2 border-gray-100 hover:border-brand-red"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-brand-red' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section - Cleaner design */}
        <div className="text-center bg-gradient-to-r from-brand-red to-red-600 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6">¿Quieres Resultados Similares?</h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-8">
            <a 
              href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
              className="flex-1 w-full sm:w-auto bg-white text-brand-red hover:bg-gray-100 font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Sesión Estratégica
            </a>
            
            <a 
              href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+hacer+una+pregunta+&type=phone_number&app_absent=0"
              className="flex-1 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all flex items-center justify-center shadow-lg hover:shadow-xl"
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
            className="inline-block text-white/80 hover:text-white underline text-lg"
          >
            Ver más testimonios en Google Business Profile
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
