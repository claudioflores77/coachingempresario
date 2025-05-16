import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Ramírez",
      role: "CEO",
      company: "Innovatech Solutions",
      content: "El método de Claudio transformó completamente mi empresa. Pasé de trabajar 70 horas semanales a menos de 40, y aún así nuestros ingresos aumentaron un 35%. Ahora tengo tiempo para mi familia y para mí mismo.",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076"
    },
    {
      id: 2,
      name: "Laura Méndez",
      role: "Fundadora",
      company: "CreaSoft",
      content: "Estaba al borde del burnout cuando encontré a Claudio. Su enfoque sistemático me ayudó a recuperar el control, implementar procesos claros y construir un equipo autosuficiente. Mi calidad de vida ha mejorado enormemente.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076"
    },
    {
      id: 3,
      name: "Miguel Ángel Torres",
      role: "Director",
      company: "Construye SA",
      content: "Implementar los sistemas que Claudio recomendó nos permitió escalar nuestro negocio en un 40% en solo 8 meses. Lo más importante es que ya no dependo de estar presente para que todo funcione correctamente.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo Que Dicen <span className="text-brand-red">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-consulting-gray">
            Empresarios como tú que han transformado sus negocios y sus vidas
            gracias al Método P.U.D.E.R.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-consulting-gray-light p-8 md:p-12 rounded-lg">
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
                <p className="text-lg italic mb-6">{testimonials[activeIndex].content}</p>
                <div>
                  <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-consulting-gray">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
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
            href="https://www.google.com/search?sca_esv=4271166684a7579e&hl=en-GB&authuser=0&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzUd-Dw0QauE20Tk8kT9_3BvGhnyaT-guKDcWi5Xf0Q02Tsi3UQ2A_23q4MEfNyi9Hyhb-Q_6H-8t1tgNukKBOMfyvvRcg6pBjZuPcUGvpDuVQpCxDw%3D%3D&q=Business+Strategy+Consulting+Reviews&sa=X&ved=2ahUKEwjol5botbKLAxWEILkGHf7TAEcQ0bkNegQINBAD&biw=1366&bih=607" 
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
