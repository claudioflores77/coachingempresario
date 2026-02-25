import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="section bg-consulting-gray-light">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen quienes ya trabajaron conmigo
          </h2>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-xl font-semibold text-consulting-navy">
              <span>47 reseñas verificadas en Google</span>
              <span className="mx-2">·</span>
              <span>Promedio 5/5</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Block */}
        <div className="bg-consulting-navy text-white p-8 rounded-xl text-center max-w-3xl mx-auto mb-8 shadow-lg">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Más de 270 empresarios en 17 países ya transformaron sus empresas con el Método P.U.D.E.R.
            Sus experiencias están documentadas en Google Business Profile.
          </p>
        </div>

        {/* Button */}
        <div className="text-center mb-16">
          <a
            href="https://g.co/kgs/GKnvus3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg shadow-md hover:shadow-lg"
          >
            <ExternalLink className="h-5 w-5" />
            Ver las 47 reseñas en Google
          </a>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brand-red">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-consulting-gray italic mb-6">
              "Claudio tiene una capacidad única para ver el problema real detrás del problema que uno cree tener. En pocas sesiones reorganizamos toda la operación."
            </p>
            <div className="text-sm font-semibold text-consulting-navy flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500"></span>
               Reseña verificada en Google
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brand-red">
            <div className="flex mb-4">
               {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-consulting-gray italic mb-6">
              "Lo que más me sorprendió fue la claridad con la que Claudio identifica exactamente dónde está el cuello de botella. Sin vueltas, directo al punto."
            </p>
            <div className="text-sm font-semibold text-consulting-navy flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500"></span>
               Reseña verificada en Google
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brand-red">
            <div className="flex mb-4">
               {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-consulting-gray italic mb-6">
              "18 años de experiencia real se notan en cada conversación. No es teoría, es método aplicado a mi negocio específico."
            </p>
            <div className="text-sm font-semibold text-consulting-navy flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500"></span>
               Reseña verificada en Google
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Tu Transformación Empieza Aquí</h3>
          <p className="text-consulting-gray mb-6">
            Los resultados son reales y verificables. El proceso ya está probado.
          </p>
          <a
            href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
            className="inline-block bg-brand-red text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg"
          >
            Agenda Tu Sesión Estratégica GRATUITA
          </a>
          <p className="mt-3 text-sm text-consulting-gray">
            45 minutos &nbsp;•&nbsp; Sin compromiso &nbsp;•&nbsp; Valor $250 USD
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
