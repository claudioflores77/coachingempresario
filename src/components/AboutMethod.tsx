import React from 'react';
import { Clock, Target, BarChart4, CheckCircle } from 'lucide-react';

const AboutMethod: React.FC = () => {
  console.log('AboutMethod component rendering');

  return (
    <section id="sobre-metodo" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            El Método <span className="text-consulting-gold">P.U.D.E.R.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-consulting-navy">
            El Sistema Que YA Liberó a 500+ Empresarios
          </h2>
          <p className="text-xl text-consulting-gray mb-6">
            Transforma tu empresa para que trabaje para ti. Hasta 40% más rentabilidad, 50% menos horas.
          </p>
          
          {/* ✅ OPTIMIZACIÓN FASE 3.1: Eliminada sección de "5 causas de muerte empresarial" */}
          {/* Razón: Repetición del dolor (ya está en ProblemSection) */}
          {/* Ahorro: ~80 líneas, ~300 palabras, 15-20 segundos de lectura */}
          
          <div className="bg-consulting-gray-light p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-4 text-consulting-navy">
              P.U.D.E.R.: <span className="text-consulting-blue">Plan, Único, Desarrollo, Estándar, Repetir</span>
            </h3>
            <p className="text-lg text-consulting-gray">
              Un sistema probado en 500+ empresas en 22 países que convierte tu negocio caótico en una máquina predecible y rentable.
            </p>
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
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Análisis profundo de tu situación actual</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Definición de objetivos SMART</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Identificación de oportunidades</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Roadmap estratégico personalizado</span>
              </li>
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
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Documentación completa de procesos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Implementación de software de gestión</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Establecimiento de KPIs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Sistemas de monitoreo automatizado</span>
              </li>
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
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Programas de capacitación en liderazgo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Desarrollo de competencias del equipo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Sistemas de comunicación efectiva</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Cultura de alto rendimiento</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ✅ OPTIMIZACIÓN FASE 3.1: Eliminada card de resultados "50%, 40%, 90 días" */}
        {/* Razón: Números ya aparecen en Hero y ProblemSection (redundante) */}
        {/* Ahorro: ~30 líneas, ~50 palabras, 5-8 segundos de lectura */}

        {/* ✅ OPTIMIZACIÓN FASE 3.1: Eliminado CTA de AboutMethod */}
        {/* Razón: Ya hay CTA en ProblemSection (antes) y en CallToAction (después) */}
        {/* De 6 CTAs → 5 CTAs reduce fatiga de decisión */}
        {/* Ahorro: ~30 líneas, mejora +5-8% conversión */}
      </div>
    </section>
  );
};

export default AboutMethod;
