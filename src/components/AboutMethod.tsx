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
            El Sistema Que YA Liberó a 270+ Empresarios
          </h2>
          <p className="text-xl text-consulting-gray mb-6">
            Transforma tu empresa para que trabaje para ti. Hasta 40% más rentabilidad, 50% menos horas.
          </p>
        </div>

        {/* ✅ OPTIMIZACIÓN FASE 3.1: Eliminada sección de "5 causas de muerte empresarial" */}
        {/* Razón: Repetición del dolor (ya está en ProblemSection) */}
        {/* Ahorro: ~80 líneas, ~300 palabras, 15-20 segundos de lectura */}

        <div className="bg-consulting-gray-light p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4 text-consulting-navy">
            P.U.D.E.R.: <span className="text-consulting-blue">Plan, Único, Desarrollo, Estándar, Repetir</span>
          </h3>
          <p className="text-lg text-consulting-gray">
            Un sistema probado con 270+ empresarios en 17 países que convierte tu negocio caótico
            en una máquina predecible y rentable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue-light rounded-full inline-block mb-6">
              <Target className="h-8 w-8 text-consulting-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fase 1: Claridad y Enfoque Estratégico</h3>
            <p className="text-consulting-gray mb-4">
              Despejamos completamente la confusión operativa y trazamos un plan estratégico
              claro para alcanzar tus metas. Identificamos lo verdaderamente importante.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Análisis profundo de tu situación actual</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Definición de objetivos SMART</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Identificación de oportunidades</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Roadmap estratégico personalizado</span>
              </li>
            </ul>
          </div>

          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue-light rounded-full inline-block mb-6">
              <BarChart4 className="h-8 w-8 text-consulting-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fase 2: Sistemas y Procesos</h3>
            <p className="text-consulting-gray mb-4">
              Implementamos sistemas operativos robustos que permiten a tu empresa
              funcionar eficientemente sin depender de tu presencia física.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Documentación completa de procesos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Implementación de software de gestión</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Establecimiento de KPIs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Sistemas de monitoreo automático</span>
              </li>
            </ul>
          </div>

          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue-light rounded-full inline-block mb-6">
              <Clock className="h-8 w-8 text-consulting-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fase 3: Liderazgo y Equipos</h3>
            <p className="text-consulting-gray mb-4">
              Fortalecemos la cultura organizacional y desarrollamos equipos comprometidos
              que trabajan autónomamente hacia los objetivos.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Programas de capacitación en liderazgo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Desarrollo de competencias del equipo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Sistemas de comunicación efectiva</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0" />
                <span className="text-sm">Cultura de alto rendimiento</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ✅ OPTIMIZACIÓN FASE 3.1: Eliminada card de resultados "50%, 40%, 90 días" */}
        {/* Razón: Números ya aparecen en Hero y ProblemSection (redundante) */}
        {/* ✅ OPTIMIZACIÓN FASE 3.1: Eliminado CTA de AboutMethod */}
        {/* Razón: Ya hay CTA en ProblemSection (antes) y en CallToAction (después) */}

      </div>
    </section>
  );
};

export default AboutMethod;
