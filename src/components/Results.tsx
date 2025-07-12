
import React from 'react';
import { Clock, TrendingUp, Heart, CheckCircle, MessageSquare, ArrowRight } from 'lucide-react';

interface ResultCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ icon, title, value, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center transform hover:scale-105 duration-300 border-t-4 border-brand-red">
      <div className="text-brand-red mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-brand-black">{title}</h3>
      <p className="text-4xl font-bold text-brand-red mb-4">{value}</p>
      <p className="text-consulting-gray leading-relaxed">{description}</p>
    </div>
  );
};

const Results: React.FC = () => {
  return (
    <section id="resultados" className="section gradient-bg text-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-2 px-4 bg-brand-red text-white text-sm font-semibold rounded-full mb-6">
            RESULTADOS COMPROBADOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            De la Supervivencia al <span className="text-brand-red">Crecimiento Sostenible</span>
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Mis clientes han experimentado transformaciones significativas
            tanto en sus negocios como en sus vidas personales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ResultCard
            icon={<CheckCircle className="h-16 w-16 mx-auto" />}
            title="Recuperación del Control"
            value="97%"
            description="El cliente típico logra independizarse de la operativa diaria"
          />
          
          <ResultCard
            icon={<Clock className="h-16 w-16 mx-auto" />}
            title="Tiempo Liberado"
            value="50%"
            description="De reducción en horas de trabajo, permitiendo disfrutar de la vida personal"
          />
          
          <ResultCard
            icon={<TrendingUp className="h-16 w-16 mx-auto" />}
            title="Incremento en Rentabilidad"
            value="40%"
            description="De aumento en los ingresos en tan solo 6 meses de implementación"
          />
          
          <ResultCard
            icon={<Heart className="h-16 w-16 mx-auto" />}
            title="Mejora en Calidad de Vida"
            value="100%"
            description="Mayor bienestar, mejores relaciones familiares y renovada pasión"
          />
        </div>

        <div className="bg-white text-brand-black rounded-2xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">La Transformación que <span className="text-brand-red">Buscas</span></h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Current Situation */}
            <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
              <h4 className="text-xl font-bold mb-6 text-brand-red flex items-center">
                <span className="mr-3">❌</span>
                TU SITUACIÓN ACTUAL:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</span>
                  <p className="text-lg">Jornadas laborales extendidas, trabajando noches y fines de semana</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</span>
                  <p className="text-lg">Operación caótica con falta de sistemas y procesos definidos</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</span>
                  <p className="text-lg">Alta dependencia del dueño para la toma de decisiones operativas</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center mr-4 mt-1 text-sm font-bold">4</span>
                  <p className="text-lg">Problemas de salud relacionados con el estrés</p>
                </li>
              </ul>
            </div>

            {/* Future with Method */}
            <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
              <h4 className="text-xl font-bold mb-6 text-brand-green flex items-center">
                <span className="mr-3">✅</span>
                TU FUTURO CON P.U.D.E.R.:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-brand-green flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</span>
                  <p className="text-lg">Horarios de trabajo equilibrados que respetan la vida personal</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-brand-green flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</span>
                  <p className="text-lg">Sistemas y procesos claros que funcionan independientemente del dueño</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-brand-green flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</span>
                  <p className="text-lg">Equipos empoderados que toman decisiones alineadas con la visión</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-brand-green flex items-center justify-center mr-4 mt-1 text-sm font-bold">4</span>
                  <p className="text-lg">Mayor bienestar físico y mental, con renovada pasión por el emprendimiento</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-brand-red to-red-600 text-white p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-6">¡Empieza Tu Transformación Ahora!</h4>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <a 
                href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
                className="flex-1 w-full sm:w-auto bg-white text-brand-red hover:bg-gray-100 font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sesión Estratégica Gratuita
              </a>
              
              <a 
                href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+hacer+una+pregunta+&type=phone_number&app_absent=0"
                className="flex-1 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all flex items-center justify-center shadow-lg hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
