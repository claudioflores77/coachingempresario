import React from 'react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="section bg-consulting-gray-light">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-2 px-4 bg-brand-red text-white text-sm font-semibold rounded-full mb-6">
            CASOS REALES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empresarios Que Ya{' '}
            <span className="text-brand-red">Recuperaron Su Vida</span>
          </h2>
          <p className="text-xl text-consulting-gray leading-relaxed">
            Resultados reales, documentados y verificables
          </p>
        </div>

        {/* Estadísticas generales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <p className="text-4xl font-bold text-brand-red mb-2">270+</p>
            <p className="text-consulting-gray text-sm">Empresarios acompañados</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <p className="text-4xl font-bold text-brand-red mb-2">17</p>
            <p className="text-consulting-gray text-sm">Países en 5 continentes</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <p className="text-4xl font-bold text-brand-red mb-2">18</p>
            <p className="text-consulting-gray text-sm">Años de experiencia</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-consulting-gray text-sm">47 reseñas verificadas en Google</p>
          </div>
        </div>

        {/* Bloque provisional de testimonios */}
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-consulting-navy">
            Casos de Transformación en Video
          </h3>
          <p className="text-lg text-consulting-gray leading-relaxed mb-8">
            Estamos documentando los resultados de nuestros clientes en video.
            <br />
            Mientras tanto, te invitamos a leer las{' '}
            <span className="font-bold text-brand-red">47 reseñas verificadas de Google</span>
            {' '}de empresarios que ya trabajaron con Claudio.
          </p>
          <a
            href="https://g.co/kgs/GKnvus3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg"
          >
            <ExternalLink className="h-5 w-5" />
            Ver 47 reseñas en Google
          </a>
        </div>

        {/* Sección de confianza */}
        <div className="bg-consulting-navy rounded-2xl p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">¿Por Qué Confiar en Claudio?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-brand-red mb-4" />
              <h4 className="font-bold mb-2">Resultados Verificables</h4>
              <p className="text-gray-300 text-sm">
                Casos reales con métricas específicas: horas reducidas, rentabilidad aumentada, empresas que crecen
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-brand-red mb-4" />
              <h4 className="font-bold mb-2">47 Reseñas de 5 Estrellas</h4>
              <p className="text-gray-300 text-sm">
                Verificadas en Google. 270+ empresarios en 17 países que confiaron en el proceso
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-brand-red mb-4" />
              <h4 className="font-bold mb-2">18 Años de Trayectoria</h4>
              <p className="text-gray-300 text-sm">
                Metodología probada en manufactura, distribución, comercio, servicios y más
              </p>
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
