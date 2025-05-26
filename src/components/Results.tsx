
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
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all text-center transform hover:scale-105 duration-300">
      <div className="text-brand-red mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-3xl font-bold text-brand-black mb-3">{value}</p>
      <p className="text-sm text-consulting-gray">{description}</p>
    </div>
  );
};

const Results: React.FC = () => {
  return (
    <section id="resultados" className="section gradient-bg text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 bg-brand-red text-white text-sm font-semibold rounded-full mb-4">
            RESULTADOS COMPROBADOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            De la Supervivencia al <span className="text-brand-red">Crecimiento Sostenible</span>
          </h2>
          <p className="text-lg">
            Nuestros clientes han experimentado transformaciones significativas
            tanto en sus negocios como en sus vidas personales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ResultCard
            icon={<CheckCircle className="h-12 w-12 mx-auto" />}
            title="Recuperación del Control"
            value="97%"
            description="De nuestros clientes logran independizarse de la operativa diaria"
          />
          
          <ResultCard
            icon={<Clock className="h-12 w-12 mx-auto" />}
            title="Tiempo Liberado"
            value="50%"
            description="De reducción en horas de trabajo, permitiendo disfrutar de la vida personal"
          />
          
          <ResultCard
            icon={<TrendingUp className="h-12 w-12 mx-auto" />}
            title="Incremento en Rentabilidad"
            value="25-40%"
            description="De aumento en los ingresos en tan solo 6 meses de implementación"
          />
          
          <ResultCard
            icon={<Heart className="h-12 w-12 mx-auto" />}
            title="Mejora en Calidad de Vida"
            value="Integral"
            description="Mayor bienestar, mejores relaciones familiares y renovada pasión"
          />
        </div>

        <div className="bg-white text-brand-black rounded-lg p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">La Transformación que <span className="text-brand-red">Buscas</span></h3>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 bg-red-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-red">TU SITUACIÓN ACTUAL:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center mr-3 mt-0.5">×</div>
                    <p>Jornadas laborales extendidas, trabajando noches y fines de semana</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center mr-3 mt-0.5">×</div>
                    <p>Operación caótica con falta de sistemas y procesos definidos</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center mr-3 mt-0.5">×</div>
                    <p>Alta dependencia del dueño para la toma de decisiones operativas</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center mr-3 mt-0.5">×</div>
                    <p>Incumplimiento de metas financieras o de crecimiento</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 text-brand-red flex items-center justify-center mr-3 mt-0.5">×</div>
                    <p>Problemas de salud relacionados con el estrés</p>
                  </li>
                </ul>
              </div>

              <div className="md:w-1/2 bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-brand-green">TU FUTURO CON EL MÉTODO P.U.D.E.R.:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-brand-green flex items-center justify-center mr-3 mt-0.5">✓</div>
                    <p>Horarios de trabajo equilibrados que respetan la vida personal</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-brand-green flex items-center justify-center mr-3 mt-0.5">✓</div>
                    <p>Sistemas y procesos claros que funcionan independientemente del dueño</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-brand-green flex items-center justify-center mr-3 mt-0.5">✓</div>
                    <p>Equipos empoderados que toman decisiones alineadas con la visión</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-brand-green flex items-center justify-center mr-3 mt-0.5">✓</div>
                    <p>Incremento en rentabilidad del 25-40% en seis meses</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-brand-green flex items-center justify-center mr-3 mt-0.5">✓</div>
                    <p>Mayor bienestar físico y mental, con renovada pasión por el emprendimiento</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
              className="btn-primary inline-flex items-center animate-pulse"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡QUIERO ESTOS RESULTADOS! - Agendar Sesión Estratégica Gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            
            <div className="mt-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=19786629364&text=Hola%2C+quiero+hacer+una+pregunta+&type=phone_number&app_absent=0"
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
      </div>
    </section>
  );
};

export default Results;
