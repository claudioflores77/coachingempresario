
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageSquare, ArrowRight } from 'lucide-react';

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

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 bg-brand-red text-white text-sm font-semibold rounded-full mb-4">
            HISTORIAS DE ÉXITO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empresarios Que Han <span className="text-brand-red">Recuperado Sus Vidas</span>
          </h2>
          <p className="text-lg text-consulting-gray">
            Estos son emprendedores que, como tú, estaban atrapados en sus negocios
            y ahora disfrutan de libertad y prosperidad.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-consulting-gray-light p-8 md:p-12 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-brand-red">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-yellow fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-lg italic mb-3">{testimonials[activeIndex].content}</p>
                <p className="text-lg font-bold text-brand-red mb-6">"{testimonials[activeIndex].results}"</p>
                <div>
                  <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-consulting-gray">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a 
                href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
                className="btn-primary inline-flex items-center mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                ¡QUIERO RESULTADOS SIMILARES! - Agendar Sesión
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-5 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-brand-red hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-5 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-brand-red hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?q=Claudio+Flores+%7C+Coaching+y+Estrategia+Empresarial+%7C+Mentor+de+Empresarios+%7C+L%C3%ADderazgo&stick=H4sIAAAAAAAA_-NgU1I1qLA0MTE1SDEwtkg2SjJOM0yyMqgwNUgzMDa0TDY3Mk5JTUq1XMQa7pyTWJqSma_glpNflFqsUKPgnJ-YnJGZl65QqeBaXFKUWJKanpmo4JpbAJROLMpMzAGq8U3NK8kvUkhJRYjng_T6HF6bklqUWJWeDwBAeyO3gwAAAA&hl=en-GB&mat=CV1k0EzVfvQRElYBYJahab2Xi7KGBYlz7DUFsSUns4j4MH9RAtRlS5coiWv6IkF-qjDNx3s-9uyJwgrnopT2PPTvbZR5IckEa1vGwtEhb-FXyCyv1ghBdmPFZeQtFS8t0g&authuser=0#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-green hover:text-brand-red underline"
          >
            Ver más testimonios en Google Business Profile
          </a>
          
          <div className="mt-8">
            <a 
              href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+hacer+una+pregunta+&type=phone_number&app_absent=0"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Pregúntanos ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
