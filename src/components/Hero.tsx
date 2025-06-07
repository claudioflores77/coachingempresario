
import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import SafeImage from './SafeImage';
import SafeIframe from './SafeIframe';

const Hero: React.FC = () => {
  console.log('Hero component rendering');

  return (
    <>
      {/* Skip link for accessibility */}
      <a 
        href="#metodo" 
        className="skip-link focus:translate-y-0"
        tabIndex={0}
      >
        Saltar al contenido principal
      </a>
      
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center bg-gray-900 text-white pt-20"
        role="banner"
      >
        <div className="absolute inset-0 bg-consulting-navy opacity-70"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up drop-shadow-lg">
              Transforma Tu Empresa Para Que <span className="text-brand-red">Trabaje Para Ti</span>
            </h1>

            <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-xl md:text-2xl mb-4 text-consulting-gold-light">
                ¿Estás trabajando más de 60 horas semanales sin tiempo para tu familia? 
                ¿Tu negocio depende totalmente de ti para funcionar? Es momento de cambiar esto.
              </p>
              
              <p className="text-lg mb-6">
                Soy Claudio Flores, consultor estratégico empresarial con más de 17 años de experiencia 
                ayudando a empresarios en 22 países a transformar sus negocios. He desarrollado el 
                Método P.U.D.E.R., un sistema probado que permite a empresarios como tú recuperar 
                el control de su tiempo, reducir el estrés y hacer crecer su negocio de manera sostenible.
              </p>

              <p className="text-lg mb-6">
                Mi método no solo transforma empresas, transforma vidas. Ayudo a empresarios que están 
                atrapados en la operación diaria de sus negocios a crear sistemas y procesos que les 
                permiten delegar, automatizar y escalar sin comprometer la calidad ni los resultados.
              </p>
            </div>
            
            <div className="space-y-4 animate-slide-up bg-black/30 p-5 rounded-lg backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl md:text-2xl font-bold text-brand-red mb-2">
                ¿Te identificas con alguno de estos problemas empresariales?
              </h2>
              <ul className="space-y-2 text-lg mb-6" role="list">
                <li className="flex items-center">
                  <span className="text-brand-red mr-2" aria-hidden="true">✗</span> 
                  <span>Trabajas más de 60 horas semanales sin ver a tu familia ni disfrutar de tu vida personal</span>
                </li>
                <li className="flex items-center">
                  <span className="text-brand-red mr-2" aria-hidden="true">✗</span> 
                  <span>Tu negocio depende totalmente de ti para funcionar y no puedes tomarte vacaciones</span>
                </li>
                <li className="flex items-center">
                  <span className="text-brand-red mr-2" aria-hidden="true">✗</span> 
                  <span>El estrés constante está afectando tu salud física y mental, así como tus relaciones familiares</span>
                </li>
                <li className="flex items-center">
                  <span className="text-brand-red mr-2" aria-hidden="true">✗</span> 
                  <span>Tu rentabilidad no justifica todo el esfuerzo que inviertes en el negocio</span>
                </li>
                <li className="flex items-center">
                  <span className="text-brand-red mr-2" aria-hidden="true">✗</span> 
                  <span>No tienes sistemas claros ni procesos definidos que funcionen sin tu supervisión constante</span>
                </li>
                <li className="flex items-center">
                  <span className="text-brand-red mr-2" aria-hidden="true">✗</span> 
                  <span>Tu equipo no puede tomar decisiones importantes sin consultarte todo</span>
                </li>
              </ul>
              
              <p className="text-xl font-semibold mb-4">
                Si respondiste "sí" a alguna de estas situaciones, tengo la solución que necesitas.
              </p>

              <p className="text-lg mb-6">
                A través de mi Método P.U.D.E.R., he ayudado a cientos de empresarios a transformar 
                completamente sus negocios y sus vidas. Mis clientes han logrado reducir sus horas 
                de trabajo en un 50%, aumentar su rentabilidad entre 25-40%, y lo más importante: 
                recuperar el control de sus vidas y el tiempo con sus familias.
              </p>
              
              <div className="responsive-iframe-container mb-8">
                <SafeIframe 
                  src="https://www.youtube.com/embed/HE4E1z77eOg"
                  title="¡5 Señales de que TU EMPRESA TE ESTÁ CONSUMIENDO!🥴"
                  className="mx-auto shadow-lg rounded"
                />
              </div>
              
              <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                <a 
                  href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
                  className="btn-primary flex items-center justify-center md:justify-start animate-pulse"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Agendar sesión estratégica gratuita"
                >
                  ¡QUIERO RECUPERAR MI VIDA! - Sesión Estratégica Gratis
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <a 
                  href="#metodo" 
                  className="btn-secondary flex items-center justify-center md:justify-start"
                  aria-label="Conocer más sobre el Método P.U.D.E.R."
                >
                  Conocer El Método P.U.D.E.R.
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg font-semibold text-consulting-gold-light">Claudio Flores - Consultor Estratégico Empresarial</p>
            <p className="text-lg">17 años de experiencia transformando empresas | 22 países | Cientos de empresarios exitosos</p>
            <p className="text-md mt-2">Especializado en consultoría estratégica, coaching ejecutivo y desarrollo organizacional</p>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://api.whatsapp.com/send/?phone=19786629364&text=Hola%2C+quiero+hacer+una+pregunta+sobre+consultoría+empresarial&type=phone_number&app_absent=0"
              className="inline-flex items-center px-6 py-3 bg-brand-black hover:bg-gray-800 text-white font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-brand-black focus:ring-offset-2 shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Iniciar consulta gratuita por WhatsApp"
            >
              <MessageSquare className="mr-2 h-5 w-5" aria-hidden="true" />
              Consulta gratuita por WhatsApp
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
    </>
  );
};

export default Hero;
