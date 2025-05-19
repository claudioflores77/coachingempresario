
import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 text-white pt-20">
      <div className="absolute inset-0 bg-consulting-navy opacity-70"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up drop-shadow-lg">
            Transforma Tu Empresa Para Que <span className="text-brand-red">Trabaje Para Ti</span>
          </h1>
          
          <div className="space-y-4 animate-slide-up bg-black/30 p-5 rounded-lg backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl md:text-2xl font-bold text-brand-red mb-2">
              ¿Te identificas con alguno de estos problemas?
            </h2>
            <ul className="space-y-2 text-lg mb-6">
              <li className="flex items-center">
                <span className="text-brand-red mr-2">✗</span> Trabajas +60 horas semanales sin ver a tu familia
              </li>
              <li className="flex items-center">
                <span className="text-brand-red mr-2">✗</span> Tu negocio depende totalmente de ti para funcionar
              </li>
              <li className="flex items-center">
                <span className="text-brand-red mr-2">✗</span> El estrés está afectando tu salud y relaciones
              </li>
              <li className="flex items-center">
                <span className="text-brand-red mr-2">✗</span> Tu rentabilidad no justifica todo tu esfuerzo
              </li>
            </ul>
            
            <p className="text-xl font-semibold">
              Recupera tu tiempo, disfruta de tu familia y haz crecer tu negocio de manera sostenible.
            </p>
            
            <div className="responsive-iframe-container mb-8">
              <iframe 
                width="853" 
                height="480" 
                src="https://www.youtube.com/embed/HE4E1z77eOg" 
                title="¡5 Señales de que TU EMPRESA TE ESTÁ CONSUMIENDO!🥴" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="mx-auto shadow-lg rounded"
              ></iframe>
            </div>
            
            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
              <a 
                href="https://bit.ly/1SESIONLN" 
                className="btn-primary flex items-center justify-center md:justify-start animate-pulse"
                target="_blank"
                rel="noopener noreferrer"
              >
                ¡QUIERO RECUPERAR MI VIDA! - Sesión Estratégica Gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#metodo" 
                className="btn-secondary flex items-center justify-center md:justify-start"
              >
                Conocer El Método P.U.D.E.R.
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg font-semibold text-consulting-gold-light">Claudio Flores</p>
          <p className="text-lg">17 años de experiencia | 22 países | Cientos de empresarios transformados</p>
        </div>
        
        <div className="mt-8 text-center">
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
