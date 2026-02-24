import React from 'react';
import { Clock, Target, BarChart4, MessageSquare, Linkedin, RefreshCw, Settings, TrendingUp, Award, Layers } from 'lucide-react';

const MethodSection: React.FC = () => {
  return (
    <section id="metodo" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-consulting-gold">El Método P.U.D.E.R.</span><br />
            Tu Camino Hacia la Libertad Empresarial
          </h2>
          <p className="text-xl text-consulting-gray mb-4">
            Un sistema de dirección estratégica en 5 fases que transforma tu empresa
            paso a paso, sin que tengas que parar de operar.
          </p>
          <p className="text-lg text-consulting-gray mb-6">
            • Recupera el control total de tu negocio<br />
            • Construye estructura para crecer sin explotar<br />
            • Logra resultados medibles en 90 días
          </p>
          <div className="bg-consulting-gray-light p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-2 text-consulting-navy">
              P.U.D.E.R.: <span className="text-consulting-blue">Plan, Único, Desarrollo, Estándar, Repetir</span>
            </h3>
            <p className="text-lg text-consulting-gray">
              Un ciclo continuo de transformación que lleva al dueño
              de estar atrapado en el hoy, a construir una empresa que funciona sola hacia el futuro que él eligió.
            </p>
          </div>
        </div>

        {/* Las 5 fases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

          {/* P */}
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <Target className="h-6 w-6 text-brand-red" />
            </div>
            <h4 className="text-xl font-bold mb-2">Plan Estratégico a Largo Plazo</h4>
            <p className="text-consulting-gray mb-4">
              Definimos juntos el futuro que querés para tu empresa y tu vida.
              No el que te tocó: el que elegís. Sin visión clara, todo esfuerzo es ruido.
            </p>
            <p className="text-sm text-consulting-blue font-medium">
              Incluye: análisis de situación, objetivos SMART, roadmap personalizado
            </p>
          </div>

          {/* U */}
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <Award className="h-6 w-6 text-brand-red" />
            </div>
            <h4 className="text-xl font-bold mb-2">Posicionamiento Único</h4>
            <p className="text-consulting-gray mb-4">
              Identificamos las fortalezas reales de tu empresa y construimos una diferenciación
              que tus competidores no pueden copiar fácilmente.
              Tu empresa deja de competir por precio.
            </p>
            <p className="text-sm text-consulting-blue font-medium">
              Incluye: análisis competitivo, propuesta de valor, ventajas diferenciales
            </p>
          </div>

          {/* D */}
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <Layers className="h-6 w-6 text-brand-red" />
            </div>
            <h4 className="text-xl font-bold mb-2">Desarrollo de Estructura Interna</h4>
            <p className="text-consulting-gray mb-4">
              Preparamos a tu empresa para la siguiente etapa antes de llegar a ella:
              procesos, métricas, estructura funcional, mentalidad del equipo.
              Crecer sin estructura es crecer para explotar.
            </p>
            <p className="text-sm text-consulting-blue font-medium">
              Incluye: documentación de procesos, organigrama funcional, capacitación de equipos
            </p>
          </div>

          {/* E */}
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <Settings className="h-6 w-6 text-brand-red" />
            </div>
            <h4 className="text-xl font-bold mb-2">Estándares de lo que Funciona</h4>
            <p className="text-consulting-gray mb-4">
              Documentamos y fijamos los procesos que dan resultados.
              Lo que funciona se convierte en sistema.
              Lo que es sistema, no depende de que vos estés.
            </p>
            <p className="text-sm text-consulting-blue font-medium">
              Incluye: KPIs, manuales operativos, indicadores de gestión, dashboards
            </p>
          </div>

          {/* R */}
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <RefreshCw className="h-6 w-6 text-brand-red" />
            </div>
            <h4 className="text-xl font-bold mb-2">Revisión y Ciclo Continuo</h4>
            <p className="text-consulting-gray mb-4">
              Evaluamos resultados, ajustamos, y repetimos el ciclo.
              Una empresa que no se revisa periódicamente vuelve al caos.
              Una que sí lo hace, crece de forma predecible y sostenida.
            </p>
            <p className="text-sm text-consulting-blue font-medium">
              Incluye: ciclo Planificar → Implementar → Evaluar → Mejorar, seguimiento continuo
            </p>
          </div>

          {/* Por qué funciona */}
          <div className="bg-consulting-navy p-8 rounded-lg text-white">
            <TrendingUp className="h-8 w-8 text-brand-red mb-4" />
            <h4 className="text-xl font-bold mb-4">¿Por Qué Funciona el Método?</h4>
            <p className="text-gray-300 mb-4">
              El ciclo Planificar → Implementar → Evaluar → Mejorar es la base del
              mejoramiento continuo industrial. Aplicado a la dirección de empresas,
              produce transformaciones duraderas y sostenibles.
            </p>
            <p className="text-gray-300">
              Esto no es coaching motivacional. Es metodología con base técnica
              aplicada al management real.
            </p>
          </div>
        </div>

        {/* Sobre Claudio */}
        <div className="bg-consulting-gray-light rounded-2xl p-10 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Sobre Claudio Flores</h3>
          <p className="text-consulting-gray text-lg leading-relaxed mb-6 max-w-3xl mx-auto text-center">
            Soy ingeniero de formación y estratega empresarial por vocación.
            Durante 18 años acompañé a más de 270 empresarios en 17 países de 5 continentes.
            El Método P.U.D.E.R. no lo construyé en una oficina: lo construyé
            en el campo, trabajando con empresas reales que enfrentaban los problemas que vos tenés hoy.
          </p>
          <p className="text-consulting-gray text-lg leading-relaxed max-w-3xl mx-auto text-center">
            Mi misión es clara: ayudarte a recuperar completamente tu vida personal
            mientras simultáneamente hacés que tu empresa crezca, prospere y genere
            los resultados que siempre quisiste.
          </p>
        </div>

        {/* CTAs */}
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/claudioflores-coach/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-consulting-navy text-consulting-navy font-semibold px-8 py-4 rounded-xl hover:bg-consulting-navy hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            Ver perfil en LinkedIn
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+conocer+m%C3%A1s+sobre+el+M%C3%A9todo+P.U.D.E.R.+y+c%C3%B3mo+puede+transformar+mi+empresa&type=phone_number&app_absent=0"
            className="inline-flex items-center gap-2 bg-brand-red text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            Consulta sobre el Método P.U.D.E.R.
          </a>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
