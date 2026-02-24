import React from 'react';
import { Calendar, ArrowRight, Clock, Check, MessageSquare, CheckCircle, AlertTriangle } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="contacto" className="section gradient-bg">
      <div className="container">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <span className="inline-block py-1 px-3 bg-brand-red text-white text-sm font-semibold rounded-f mb-4">
                ¡ÚLTIMO PASO!
              </span>
              <h2 className="text-3xl font-bold mb-4">¿Listo para Recuperar Tu Vida Personal?</h2>
              <p className="text-lg text-consulting-gray mb-6">
                No elijas entre tu negocio y tu vida. Con el Método P.U.D.E.R. tienes ambos.<br />
                <span className="font-bold text-brand-red">Sesión Estratégica 100% GRATUITA</span> - Sin compromisos.
              </p>

              <div className="mb-8 bg-gray-50 p-6 rounded-lg border-l-4 border-brand-red">
                <h3 className="text-xl font-bold mb-4">Sesión Estratégica de 45 Minutos:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-3 mt-0.5">
                      <Clock className="h-3 w-3" />
                    </div>
                    <p><span className="font-semibold">Análisis de tu situación actual</span> e identificación de obstáculos críticos</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <p><span className="font-semibold">Plan inicial personalizado</span> para implementar inmediatamente</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-3 mt-0.5">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <p><span className="font-semibold">Pasos siguientes</span> para crear un negocio que funcione sin ti</p>
                  </li>
                </ul>
              </div>

              {/* ACCIÓN 4: CTA UNIFICADO */}
              <a
                href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
                className="block w-full text-center bg-brand-red text-white font-bold py-4 px-6 rounded-xl hover:bg-red-700 transition-colors text-lg mb-3"
              >
                Agenda Tu Sesión Estratégica GRATUITA
              </a>
              <p className="text-center text-sm text-consulting-gray">
                45 minutos &nbsp;•&nbsp; Sin compromiso &nbsp;•&nbsp; Valor $250 USD
              </p>
            </div>

            <div className="md:w-1/2 bg-consulting-navy p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Conéctate con Claudio Flores</h3>

              <div className="mb-8">
                <p className="text-gray-300 italic mb-6">
                  "Mi misión es ayudar a empresarios como vos a construir negocios que funcionen
                  sin su presencia constante, permitiéndoles recuperar su tiempo
                  y disfrutar de la vida que merecen."
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-200">Perfiles Profesionales</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/claudioflores-coach/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition-colors"
                    >
                      Perfil personal en LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/habilidadparaelexito"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition-colors"
                    >
                      Perfil de empresa en LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://g.co/kgs/GKnvus3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition-colors"
                    >
                      Google Business Profile (47 reseñas ★★★★★)
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-3 text-gray-200">Redes Sociales</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.instagram.com/claudio.flores.negocios/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/habilidadparaelexito/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@claudioflores_coach"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition-colors"
                    >
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@claudioflorescoach"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-100 transition-colors"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
                  className="block text-center bg-brand-red text-white font-semibold py-3 px-6 rounded-xl hover:bg-red-700 transition-colors"
                >
                  Agendar Sesión Estratégica 1a1 (¡Gratis!)
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+hacer+una+pregunta+&type=phone_number&app_absent=0"
                  className="block text-center border border-white text-white font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-consulting-navy transition-colors"
                >
                  Pregúntanos ahora por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
