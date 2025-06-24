
import React from 'react';
import { Clock, Target, BarChart4, MessageSquare, Linkedin, Shield, AlertTriangle } from 'lucide-react';
import SafeImage from './SafeImage';

const AboutMethod: React.FC = () => {
  console.log('AboutMethod component rendering');

  return (
    <section id="sobre-metodo" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 bg-consulting-blue text-white text-sm font-semibold rounded-full mb-4">
            EL VEHÍCULO DE TU TRANSFORMACIÓN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-consulting-gold">El Método P.U.D.E.R.</span> - Tu Camino Hacia la Libertad Empresarial
          </h2>
          <p className="text-lg text-consulting-gray mb-6">
            Un sistema estructurado y probado que transforma tu empresa para que trabaje para ti, no al revés.
            Con este método revolucionario, recuperarás el control total de tu negocio, optimizarás todos tus procesos 
            y alcanzarás resultados tangibles y medibles que te permitirán disfrutar de una vida equilibrada.
          </p>
          
          <div className="bg-consulting-gray-light p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-consulting-navy">
              P.U.D.E.R.: <span className="text-consulting-blue">Plan, Único, Desarrollo Económico-Financiero-Organizacional, Estándar, Repetir</span>
            </h3>
            <p className="text-lg text-consulting-gray mb-4">
              El objetivo es vacunar a tu empresa, a ti como líder y a tu equipo contra las 5 principales causas de muerte empresarial:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-brand-red font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-red">El problema de la Coyuntura</h4>
                  <p className="text-sm text-consulting-gray">La Falta de Planificación a Largo Plazo</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-brand-red font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-red">El problema de los mercados tradicionales</h4>
                  <p className="text-sm text-consulting-gray">La Falta de diferenciación</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-brand-red font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-red">El problema del Emprendedor/Empresario</h4>
                  <p className="text-sm text-consulting-gray">La lentitud para la adaptación al cambio de roles que demanda la organización</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-brand-red font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-red">El problema de la falta de financiamiento</h4>
                  <p className="text-sm text-consulting-gray">La falta de preparación para buscar y obtener financiamientos</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:col-span-2 justify-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-brand-red font-bold text-sm">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-red">El problema de la Innovación</h4>
                  <p className="text-sm text-consulting-gray">La lentitud para actuar frente al contexto VICA (Volátil, Incierto, Cambiante y Ambiguo)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fase 1: Claridad y Enfoque Estratégico</h3>
            <p className="text-consulting-gray mb-4">
              Despejamos completamente la confusión operativa y trazamos un plan estratégico claro y detallado 
              para alcanzar tus metas empresariales más ambiciosas. Identificamos con precisión lo verdaderamente 
              importante para tu negocio.
            </p>
            <ul className="text-sm text-consulting-gray space-y-2">
              <li>• Análisis profundo de tu situación actual</li>
              <li>• Definición de objetivos SMART</li>
              <li>• Identificación de oportunidades</li>
              <li>• Roadmap estratégico personalizado</li>
            </ul>
          </div>

          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <BarChart4 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fase 2: Sistemas y Procesos Automatizados</h3>
            <p className="text-consulting-gray mb-4">
              Implementamos sistemas operativos robustos y procesos automatizados que permiten a tu empresa 
              funcionar de forma eficiente sin depender únicamente de tu presencia física.
            </p>
            <ul className="text-sm text-consulting-gray space-y-2">
              <li>• Documentación completa de procesos</li>
              <li>• Implementación de software de gestión</li>
              <li>• Establecimiento de KPIs</li>
              <li>• Sistemas de monitoreo automatizado</li>
            </ul>
          </div>

          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fase 3: Desarrollo de Liderazgo y Equipos</h3>
            <p className="text-consulting-gray mb-4">
              Fortalecemos la cultura organizacional y potenciamos tu capacidad de liderazgo estratégico. 
              Desarrollamos equipos comprometidos que trabajan de forma autónoma hacia los objetivos.
            </p>
            <ul className="text-sm text-consulting-gray space-y-2">
              <li>• Programas de capacitación en liderazgo</li>
              <li>• Desarrollo de competencias del equipo</li>
              <li>• Sistemas de comunicación efectiva</li>
              <li>• Cultura de alto rendimiento</li>
            </ul>
          </div>
        </div>

        <div className="bg-consulting-navy text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">¿Cómo Sabes Que El Método P.U.D.E.R. Funciona?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-consulting-gold mb-2">50%</div>
                <p>Reducción promedio en horas de trabajo semanales</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-consulting-gold mb-2">25-40%</div>
                <p>Incremento en rentabilidad en el primer año</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-consulting-gold mb-2">90 días</div>
                <p>Para ver los primeros resultados tangibles</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">¿Estás Listo Para Implementar El Método P.U.D.E.R.?</h3>
          <p className="text-lg text-consulting-gray mb-6">
            La diferencia entre donde estás ahora y donde quieres estar es el sistema correcto 
            implementado de la manera correcta.
          </p>
          <a 
            href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
            className="btn-primary mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero Aplicar El Método P.U.D.E.R. En Mi Empresa
          </a>
          
          <div className="mt-6">
            <a 
              href="https://api.whatsapp.com/send/?phone=19786629364&text=Hola%2C+quiero+conocer+más+sobre+el+Método+P.U.D.E.R.+y+cómo+puede+transformar+mi+empresa&type=phone_number&app_absent=0"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Consulta sobre el Método P.U.D.E.R.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMethod;
