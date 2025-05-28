
import React from 'react';
import { ArrowRight, MessageSquare, AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 text-white pt-20">
      <div className="absolute inset-0 bg-consulting-navy opacity-80"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-up drop-shadow-lg">
              Transforma Tu Empresa Para Que <span className="text-brand-red">Trabaje Para Ti</span>
            </h1>
          </div>
          
          <div className="space-y-8 animate-slide-up bg-black/40 p-8 md:p-10 rounded-xl backdrop-blur-sm border border-white/10" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-consulting-gold mb-6">
                ¿Te identificas con alguno de estos problemas?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50/10 p-6 rounded-lg border border-red-200/20">
                  <ul className="space-y-4 text-left">
                    <li className="flex items-center">
                      <AlertTriangle className="text-consulting-gold mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="text-lg">Trabajas +60 horas semanales sin ver a tu familia</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="text-consulting-gold mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="text-lg">Tu negocio depende totalmente de ti para funcionar</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50/10 p-6 rounded-lg border border-red-200/20">
                  <ul className="space-y-4 text-left">
                    <li className="flex items-center">
                      <AlertTriangle className="text-consulting-gold mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="text-lg">El estrés está afectando tu salud y relaciones</span>
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="text-consulting-gold mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="text-lg">Tu rentabilidad no justifica todo tu esfuerzo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-xl md:text-2xl font-semibold text-consulting-gold-light mb-8">
                Recupera tu tiempo, disfruta de tu familia y haz crecer tu negocio de manera sostenible.
              </p>
            </div>
            
            <div className="responsive-iframe-container mb-10">
              <iframe 
                width="853" 
                height="480" 
                src="https://www.youtube.com/embed/HE4E1z77eOg" 
                title="¡5 Señales de que TU EMPRESA TE ESTÁ CONSUMIENDO!🥴" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="mx-auto shadow-2xl rounded-lg border-2 border-consulting-gold/30"
              ></iframe>
            </div>
            
            <div className="space-y-6 text-center">
              <a 
                href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
                className="inline-flex items-center justify-center px-10 py-5 bg-brand-red hover:bg-red-700 text-white text-xl font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 animate-pulse border-2 border-red-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                ¡QUIERO RECUPERAR MI VIDA! - Sesión Estratégica Gratis
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
              
              <div className="mt-6">
                <a 
                  href="#metodo" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-consulting-gold text-consulting-gold hover:bg-consulting-gold hover:text-consulting-navy font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Conocer El Método P.U.D.E.R.
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl font-semibold text-consulting-gold-light mb-2">Claudio Flores</p>
          <p className="text-lg text-gray-300">17 años de experiencia | 22 países | Cientos de empresarios transformados</p>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://api.whatsapp.com/send/?phone=19786629364&text=Hola%2C+quiero+hacer+una+pregunta+&type=phone_number&app_absent=0"
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium text-lg rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="mr-3 h-6 w-6" />
            Pregúntanos ahora
          </a>
        </div>
      </div>

      <style>
        {`
        .responsive-iframe-container {
          width: 100%;
          max-width: 853px;
          margin: 0 auto;
        }
        
        @media (max-width: 853px) {
          .responsive-iframe-container iframe {
            width: 100%;
            height: auto;
            aspect-ratio: 16 / 9;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
