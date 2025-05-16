import React from 'react';
import { Clock, Target, BarChart4, MessageSquare } from 'lucide-react';

const MethodSection: React.FC = () => {
  return (
    <section id="metodo" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-consulting-gold">EL Método P.U.D.E.R.</span>
          </h2>
          <p className="text-lg text-consulting-gray">
            Un sistema estructurado y probado que transforma tu empresa para que trabaje para ti, no al revés.
            Con este método, recuperarás el control, optimizarás procesos y alcanzarás resultados tangibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Claridad y Enfoque Estratégico</h3>
            <p className="text-consulting-gray">
              Despejamos la confusión y trazamos un plan claro para alcanzar tus metas. 
              Identificamos lo verdaderamente importante y establecemos prioridades que 
              generan un impacto inmediato.
            </p>
          </div>

          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <BarChart4 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Sistemas Sostenibles</h3>
            <p className="text-consulting-gray">
              Implementamos procesos que permiten a tu empresa funcionar de forma eficiente 
              sin depender únicamente de ti. Creamos estructuras que liberan tu tiempo y 
              aseguran consistencia en los resultados.
            </p>
          </div>

          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Cultura y Liderazgo Transformador</h3>
            <p className="text-consulting-gray">
              Fortalecemos la cultura organizacional y potenciamos tu capacidad de liderazgo. 
              Desarrollamos equipos comprometidos que comparten tu visión y trabajan de forma 
              autónoma hacia los objetivos.
            </p>
          </div>
        </div>

        <div className="md:flex items-center bg-consulting-navy text-white rounded-lg overflow-hidden">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071" 
              alt="Claudio Flores" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Quién Soy</h3>
            <p className="mb-6">
              Soy Claudio Flores, consultor estratégico empresarial, coach y mentor para empresarios y líderes. 
              Con más de 17 años de experiencia y colaboraciones en 22 países, he ayudado a empresarios a liberar su tiempo, 
              reducir el estrés y transformar sus negocios.
            </p>
            <p className="mb-6">
              Yo mismo estuve atrapado en una empresa que consumía todo mi tiempo y energía. 
              A través de un proceso de aprendizaje y transformación, desarrollé "El Método P.U.D.E.R." 
              que no solo cambió mi vida, sino la de cientos de empresarios alrededor del mundo.
            </p>
            <p className="text-consulting-gold font-semibold">
              Mi misión es clara: ayudarte a recuperar tu vida mientras haces que tu empresa crezca y prospere.
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
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
    </section>
  );
};

export default MethodSection;
