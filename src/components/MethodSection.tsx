
import React from 'react';
import { Clock, Target, BarChart4, MessageSquare, Linkedin, Shield, AlertTriangle } from 'lucide-react';
import SafeImage from './SafeImage';

const MethodSection: React.FC = () => {
  console.log('MethodSection component rendering');

  return (
    <section id="metodo" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
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
          
          <p className="text-lg text-consulting-gray">
            El Método P.U.D.E.R. es el resultado de más de 17 años de experiencia trabajando con empresarios de 22 países diferentes, 
            transformando negocios desde pequeñas empresas familiares hasta corporaciones medianas. Este sistema ha sido refinado 
            y perfeccionado para garantizar resultados consistentes y duraderos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Claridad y Enfoque Estratégico Empresarial</h3>
            <p className="text-consulting-gray mb-4">
              Despejamos completamente la confusión operativa y trazamos un plan estratégico claro y detallado 
              para alcanzar tus metas empresariales más ambiciosas. Identificamos con precisión lo verdaderamente 
              importante para tu negocio y establecemos prioridades estratégicas que generan un impacto inmediato y sostenible.
            </p>
            <p className="text-consulting-gray">
              Este primer pilar del método incluye análisis profundo de mercado, definición de objetivos SMART, 
              identificación de oportunidades de crecimiento y creación de un roadmap estratégico personalizado 
              que se adapta perfectamente a tu industria y situación específica.
            </p>
          </div>

          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <BarChart4 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Sistemas y Procesos Sostenibles</h3>
            <p className="text-consulting-gray mb-4">
              Implementamos sistemas operativos robustos y procesos automatizados que permiten a tu empresa 
              funcionar de forma eficiente y rentable sin depender únicamente de tu presencia física. 
              Creamos estructuras organizacionales sólidas que liberan completamente tu tiempo y aseguran 
              consistencia total en los resultados operativos y financieros.
            </p>
            <p className="text-consulting-gray">
              Incluye documentación completa de procesos, implementación de software de gestión, 
              creación de manuales operativos, establecimiento de KPIs, sistemas de monitoreo 
              automatizado y protocolos de calidad que garantizan la excelencia operativa.
            </p>
          </div>

          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Cultura Organizacional y Liderazgo Transformador</h3>
            <p className="text-consulting-gray mb-4">
              Fortalecemos profundamente la cultura organizacional de tu empresa y potenciamos exponencialmente 
              tu capacidad de liderazgo estratégico. Desarrollamos equipos altamente comprometidos y competentes 
              que comparten completamente tu visión empresarial y trabajan de forma autónoma e innovadora 
              hacia el logro de todos los objetivos organizacionales.
            </p>
            <p className="text-consulting-gray">
              Este componente incluye programas de capacitación en liderazgo, desarrollo de competencias 
              del equipo, implementación de sistemas de comunicación efectiva, creación de programas 
              de incentivos alineados y establecimiento de una cultura de alto rendimiento.
            </p>
          </div>
        </div>

        <div className="mb-12 bg-consulting-gray-light p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">¿Por Qué Funciona el Método P.U.D.E.R.?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-3 text-consulting-blue">Enfoque Holístico e Integral</h4>
              <p className="text-consulting-gray mb-4">
                A diferencia de otros métodos que se enfocan solo en aspectos específicos, el Método P.U.D.E.R. 
                aborda todos los elementos críticos de tu empresa: estrategia, operaciones, personas, tecnología 
                y cultura organizacional. Esta aproximación integral garantiza transformaciones duraderas y sostenibles.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-consulting-blue">Resultados Medibles y Comprobables</h4>
              <p className="text-consulting-gray mb-4">
                Cada implementación del método incluye métricas específicas y KPIs claramente definidos que permiten 
                medir el progreso de manera objetiva. Mis clientes experimentan mejoras promedio del 50% en 
                eficiencia operativa y entre 25-40% de incremento en rentabilidad.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex items-center bg-consulting-navy text-white rounded-lg overflow-hidden">
          <div className="md:w-1/2">
            <SafeImage 
              src="/lovable-uploads/0b84250d-4c53-48c5-9471-1227bf9ff0fb.png"
              alt="Claudio Flores - Consultor Estratégico Empresarial" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Sobre Claudio Flores - Tu Mentor en Transformación Empresarial</h3>
            <p className="mb-6">
              Soy Claudio Flores, consultor estratégico empresarial, coach ejecutivo certificado y mentor especializado 
              para empresarios y líderes empresariales. Con más de 17 años de experiencia internacional y colaboraciones 
              exitosas en 22 países diferentes, he ayudado a más de 500 empresarios a liberar completamente su tiempo, 
              reducir significativamente el estrés operativo y transformar radicalmente sus negocios.
            </p>
            <p className="mb-6">
              Mi propia historia empresarial incluye haber estado personalmente atrapado en una empresa que consumía 
              absolutamente todo mi tiempo y energía vital. A través de un proceso intensivo de aprendizaje, 
              investigación y transformación personal, desarrollé el "Método P.U.D.E.R." que no solo cambió 
              completamente mi vida personal y profesional, sino que ha transformado las vidas de cientos de 
              empresarios alrededor del mundo.
            </p>
            <p className="text-consulting-gold font-semibold mb-6">
              Mi misión de vida es absolutamente clara: ayudarte a recuperar completamente tu vida personal 
              mientras simultáneamente haces que tu empresa crezca, prospere y genere los resultados financieros 
              que siempre has soñado alcanzar.
            </p>
            
            <a 
              href="https://www.linkedin.com/in/claudioflores-coach/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Ver mi perfil profesional completo en LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://api.whatsapp.com/send/?phone=19786629364&text=Hola%2C+quiero+conocer+más+sobre+el+Método+P.U.D.E.R.+y+cómo+puede+transformar+mi+empresa&type=phone_number&app_absent=0"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:green-700 text-white font-medium rounded-lg transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Consulta sobre el Método P.U.D.E.R.
          </a>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
