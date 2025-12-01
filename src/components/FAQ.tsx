import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle, MessageSquare } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'method' | 'investment' | 'results';
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primer FAQ abierto por defecto

  const faqData: FAQItem[] = [
    {
      question: "¿Cómo sé si el Método P.U.D.E.R. es para mí?",
      answer: "El Método P.U.D.E.R. es ideal para ti si: (1) Trabajas más de 50 horas semanales pero sientes que tu negocio no crece proporcionalmente, (2) Tu empresa depende completamente de ti y no puede funcionar sin tu presencia constante, (3) Estás sacrificando tu vida personal y familiar por el negocio, (4) Quieres aumentar la rentabilidad sin aumentar tus horas de trabajo. Si te identificas con al menos 2 de estos puntos, este método es para ti. En 17 años hemos ayudado a más de 500 empresarios en 22 países que estaban exactamente en tu situación.",
      category: 'general'
    },
    {
      question: "¿Qué incluye la Sesión Estratégica GRATUITA?",
      answer: "La Sesión Estratégica es una reunión 1 a 1 de 45 minutos (valor $250 USD) donde analizaremos en profundidad tu situación actual. Incluye: (1) Diagnóstico personalizado de tu empresa identificando los 3 obstáculos principales que te mantienen atrapado, (2) Plan de acción inmediato con pasos concretos que puedes implementar HOY mismo, (3) Evaluación de viabilidad para aplicar el Método P.U.D.E.R. en tu caso específico, (4) Respuesta a todas tus preguntas sin compromiso alguno. No hay letra chica, no hay trampas. Si al final decides que no es para ti, no hay problema.",
      category: 'general'
    },
    {
      question: "¿En cuánto tiempo voy a ver resultados concretos?",
      answer: "Los primeros resultados tangibles aparecen en 90 días, aunque muchos clientes reportan cambios significativos en las primeras 4-6 semanas. En el primer mes implementamos sistemas básicos que te liberan 5-10 horas semanales. Al segundo mes, comenzamos el desarrollo de tu equipo y procesos automatizados. Al tercer mes, ya tienes un negocio que funciona con menos dependencia de ti. A los 6 meses, el promedio de reducción de horas es del 50% con un incremento del 40% en rentabilidad. Esto no es magia, es metodología probada en 500+ empresas.",
      category: 'results'
    },
    {
      question: "¿Cuál es la inversión y cómo funciona el proceso?",
      answer: "La inversión varía según el tamaño y complejidad de tu empresa, típicamente entre $15,000 y $50,000 USD. Esto incluye: (1) Programa completo de 12 semanas de implementación intensiva, (2) Sesiones semanales 1 a 1 conmigo, (3) Acceso a todas las herramientas, plantillas y sistemas, (4) Soporte directo vía WhatsApp durante todo el proceso, (5) Seguimiento de 3 meses adicionales para asegurar resultados. Ofrecemos planes de pago flexibles. La mayoría de nuestros clientes recuperan la inversión completa en los primeros 6 meses solo con el aumento de rentabilidad. Algunos en 90 días.",
      category: 'investment'
    },
    {
      question: "¿Qué hace diferente al Método P.U.D.E.R. de otros programas?",
      answer: "El Método P.U.D.E.R. no es teoría genérica, es un sistema específico diseñado para empresarios atrapados en su negocio. Las 5 diferencias clave son: (1) PERSONALIZACIÓN TOTAL: No hay dos empresas iguales, adaptamos TODO a tu realidad, (2) IMPLEMENTACIÓN PRÁCTICA: No solo consultamos, implementamos contigo paso a paso, (3) RESULTADOS MEDIBLES: Reducción de horas y aumento de rentabilidad verificables, (4) ACOMPAÑAMIENTO DIRECTO: Trabajas directamente conmigo, no con un equipo de juniors, (5) GARANTÍA DE RESULTADOS: Si sigues el método y no ves resultados en 90 días, trabajamos gratis hasta que los veas. 17 años de experiencia y 500+ casos de éxito nos respaldan.",
      category: 'method'
    },
    {
      question: "¿Funciona el Método P.U.D.E.R. en mi industria?",
      answer: "Sí. El Método P.U.D.E.R. ha funcionado exitosamente en más de 40 industrias diferentes en 22 países. Desde empresas de servicios profesionales (consultoría, contabilidad, legal) hasta manufactura, comercio, tecnología, salud, educación, construcción, y más. Los principios del método son universales: planificación estratégica, diferenciación, sistemas automatizados, desarrollo de equipos y escalamiento. Lo que cambia es la APLICACIÓN específica a tu industria, y eso es exactamente lo que personalizamos en tu caso. Cada cliente recibe una adaptación del método diseñada para su sector y sus desafíos particulares.",
      category: 'method'
    },
    {
      question: "¿Qué pasa si mi empresa es muy pequeña o muy grande?",
      answer: "El Método P.U.D.E.R. se adapta a empresas desde 1 empleado hasta 100+ empleados. Para empresas pequeñas (1-5 personas), nos enfocamos en sistemas fundamentales y automatización básica. Para empresas medianas (6-30 personas), trabajamos en estructura organizacional y liderazgo de equipo. Para empresas grandes (31-100+ personas), implementamos sistemas complejos y cultura organizacional. El principio es el mismo: liberarte del día a día operativo. La aplicación varía según tu tamaño. En la Sesión Estratégica GRATUITA evaluamos si tu empresa está en el rango óptimo para el método.",
      category: 'general'
    },
    {
      question: "¿Necesito tener conocimientos técnicos o experiencia previa?",
      answer: "No necesitas ningún conocimiento técnico previo. El Método P.U.D.E.R. está diseñado para empresarios ocupados, no para expertos en sistemas. Yo y mi equipo nos encargamos de toda la parte técnica. Tu rol es: (1) Estar disponible para las sesiones semanales, (2) Implementar las acciones específicas que acordamos, (3) Comunicar a tu equipo los cambios necesarios, (4) Confiar en el proceso. Todo lo complejo (diseño de sistemas, automatizaciones, estructuras) lo manejamos nosotros. Tu trabajo es liderar el cambio, no ejecutarlo tú solo.",
      category: 'method'
    },
    {
      question: "¿Qué garantías tengo de que esto va a funcionar en mi caso?",
      answer: "Ofrecemos una garantía clara y directa: Si implementas el Método P.U.D.E.R. siguiendo nuestras recomendaciones y no ves una reducción mínima del 30% en tus horas de trabajo o un aumento del 20% en rentabilidad en los primeros 90 días, continuamos trabajando contigo SIN COSTO ADICIONAL hasta lograr esos resultados. Además, si en los primeros 30 días decides que el método no es para ti, te devolvemos el 100% de tu inversión sin preguntas. Llevamos 17 años en el mercado y hemos transformado 500+ empresas. Nuestra reputación está en juego. No podemos garantizar resultados mágicos de la noche a la mañana, pero SÍ garantizamos que si haces tu parte, verás resultados medibles y significativos.",
      category: 'results'
    },
    {
      question: "¿Cómo es el proceso de trabajo semana a semana?",
      answer: "El proceso de 12 semanas está estructurado en 3 fases de 4 semanas cada una: FASE 1 (Semanas 1-4): Claridad y Enfoque Estratégico - Diagnóstico profundo, definición de objetivos SMART, identificación de actividades de alto valor, diseño del roadmap estratégico. FASE 2 (Semanas 5-8): Sistemas y Procesos - Documentación de procesos críticos, implementación de automatizaciones, establecimiento de KPIs, creación de tableros de control. FASE 3 (Semanas 9-12): Liderazgo y Equipo - Desarrollo de tu equipo, delegación efectiva, cultura de alto rendimiento, preparación para escalamiento. Cada semana incluye: 1 sesión 1 a 1 de 60-90 minutos, tareas específicas para implementar, soporte vía WhatsApp ilimitado, revisión de avances y ajustes.",
      category: 'method'
    },
    {
      question: "¿Puedo implementar el método mientras sigo operando mi empresa?",
      answer: "Sí, absolutamente. El Método P.U.D.E.R. está diseñado específicamente para empresarios que NO pueden detener su operación. No te pedimos que cierres tu negocio o tomes un sabático. La implementación es progresiva e inteligente: empezamos con cambios pequeños que te liberan tiempo, y usamos ese tiempo liberado para implementar cambios más grandes. Es como cambiar las ruedas del auto mientras está en movimiento. Necesitarás dedicar 3-5 horas semanales al proceso (sesión conmigo + implementación de tareas), pero esas horas se recuperan multiplicadas en las primeras 2-3 semanas. Clientes típicos reportan tener MÁS tiempo libre en la semana 4 que antes de empezar el programa.",
      category: 'general'
    },
    {
      question: "¿Qué pasa después de las 12 semanas? ¿Me quedaré solo?",
      answer: "No, incluimos 3 meses de seguimiento post-programa (12 semanas de implementación + 12 semanas de seguimiento = 6 meses totales). Durante el seguimiento tienes: (1) 1 sesión mensual de revisión y ajustes, (2) Acceso a soporte vía WhatsApp para consultas específicas, (3) Materiales y actualizaciones del método, (4) Invitación a webinars exclusivos para alumni. Además, muchos clientes optan por una membresía de acompañamiento continuo ($500-1,500/mes) para seguir optimizando y escalando. Pero no es obligatorio. Al terminar las 12 semanas + seguimiento, tendrás todo lo necesario para continuar por tu cuenta: sistemas implementados, equipo capacitado, procesos documentados, y el conocimiento completo del método.",
      category: 'method'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getCategoryBadge = (category: FAQItem['category']) => {
    const badges = {
      general: { text: 'General', color: 'bg-blue-100 text-blue-800' },
      method: { text: 'Método', color: 'bg-purple-100 text-purple-800' },
      investment: { text: 'Inversión', color: 'bg-green-100 text-green-800' },
      results: { text: 'Resultados', color: 'bg-orange-100 text-orange-800' }
    };
    return badges[category];
  };

  return (
    <section id="preguntas-frecuentes" className="section bg-gray-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-consulting-blue text-white px-4 py-2 rounded-full mb-4">
            <HelpCircle className="h-5 w-5" />
            <span className="font-semibold">PREGUNTAS FRECUENTES</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            ¿Tienes Dudas? <span className="text-consulting-gold">Aquí Están las Respuestas</span>
          </h2>
          <p className="text-xl text-consulting-gray">
            Las 12 preguntas que más recibo de empresarios como tú
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqData.map((faq, index) => {
            const badge = getCategoryBadge(faq.category);
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${badge.color}`}>
                        {badge.text}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-consulting-navy pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <ChevronUp className="h-6 w-6 text-consulting-blue" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {/* CRÍTICO: Respuestas SIEMPRE visibles para SEO y conversión */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <div className="pl-4 border-l-4 border-consulting-gold">
                      <p className="text-consulting-gray leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota importante sobre respuestas visibles */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded">
          <div className="flex items-start gap-3">
            <HelpCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-1">Nota sobre las FAQ</h4>
              <p className="text-sm text-yellow-700">
                Todas las respuestas están disponibles en el HTML para SEO. Usa los acordeones para facilitar la lectura, 
                pero el contenido completo está indexable por Google.
              </p>
            </div>
          </div>
        </div>

        {/* ACCIÓN 4: CTA UNIFICADO */}
        <div className="bg-gradient-to-br from-consulting-navy via-consulting-blue to-consulting-blue-light text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            ¿Sigues con dudas?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Agenda tu Sesión Estratégica GRATUITA y resolvemos todas tus preguntas personalmente
          </p>
          
          <a 
            href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
            className="inline-flex items-center px-8 py-4 bg-consulting-gold hover:bg-consulting-gold-light text-consulting-navy font-bold rounded-lg transition-all text-lg mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CheckCircle className="mr-2 h-5 w-5" />
            Agenda Tu Sesión Estratégica GRATUITA
          </a>

          <div className="flex items-center justify-center gap-4 text-sm opacity-75 mb-6 flex-wrap">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              45 minutos
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Sin compromiso
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Valor $250 USD
            </span>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-sm mb-3 opacity-75">O si prefieres hacer una pregunta rápida:</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+tengo+una+pregunta+sobre+el+M%C3%A9todo+P.U.D.E.R.&type=phone_number&app_absent=0"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Más de <span className="font-bold text-consulting-blue">500 empresarios</span> en{' '}
            <span className="font-bold text-consulting-blue">22 países</span> ya transformaron sus empresas con P.U.D.E.R.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
