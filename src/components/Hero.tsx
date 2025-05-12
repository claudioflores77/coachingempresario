
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg text-white pt-20">
      <div className="absolute inset-0 bg-consulting-navy opacity-60"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Transforma Tu Empresa Para Que <span className="text-consulting-gold-light">Trabaje Para Ti</span>
          </h1>
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl mb-8">
              ¿Te sientes atrapado en un negocio que te consume? ¿El caos diario y el estrés no te permiten avanzar?
              Recupera tu tiempo, disfruta de tu familia y haz crecer tu negocio de manera sostenible.
            </p>
            
            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
              <a 
                href="#contacto" 
                className="btn-primary flex items-center justify-center md:justify-start"
              >
                Agendar Sesión Estratégica Gratis
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
      </div>
    </section>
  );
};

export default Hero;
