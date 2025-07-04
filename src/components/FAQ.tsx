
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Realmente necesito cambiar mi forma de trabajar? Mi empresa funciona...",
      answer: "Entiendo que pienses que tu empresa 'funciona', pero trabajar más de 60 horas semanales, no poder tomarte vacaciones y que todo dependa de ti NO es funcionamiento, es supervivencia. El problema real es que estás pagando un precio altísimo: tu salud, tu familia, tu vida personal. Cada día que pasa sin sistemas adecuados, pierdes oportunidades de crecimiento y te acercas más al agotamiento total. El costo de no hacer nada es exponencialmente mayor que el costo de transformar tu empresa ahora.",
      objection: "Dolor - Reconocimiento del problema"
    },
    {
      question: "¿No podré implementar estos cambios yo mismo? ¿Realmente necesito ayuda externa?",
      answer: "Claro que eres inteligente y capaz, pero hay una diferencia entre PODER hacerlo solo y hacerlo de manera eficiente y correcta. Podrías aprender cirugía leyendo libros, pero ¿te operarías a ti mismo? He invertido 17 años perfeccionando este método, trabajando con cientos de empresarios. Puedo ahorrarte años de prueba y error, costosos errores y frustraciones. La pregunta real es: ¿cuánto vale tu tiempo y cuánto te está costando mantener la situación actual?",
      objection: "Duda - Capacidad personal"
    },
    {
      question: "¿Vale la pena la inversión vs. seguir como estoy ahora?",
      answer: "Excelente pregunta. Hagamos números: Si trabajas 60+ horas semanales a $50/hora de valor de tu tiempo, son $156,000 anuales solo en tiempo. Suma el estrés en tu salud (miles en gastos médicos), las oportunidades perdidas de crecimiento (mínimo 25% más ingresos), y el costo emocional en tu familia. El costo de NO actuar supera fácilmente los $200,000 anuales. Mi método te devuelve 30 horas semanales (¡$78,000 anuales en tiempo!) y aumenta tu rentabilidad 25-40%. La inversión se paga sola en 2-3 meses.",
      objection: "Costo + Precio - Justificación financiera"
    },
    {
      question: "¿Es posible realmente tener un negocio que funcione sin mí presente?",
      answer: "¡Absolutamente SÍ! Y te lo puedo demostrar. Tengo clientes que se han tomado vacaciones de 3 semanas mientras sus empresas siguieron creciendo. Otros que redujeron su jornada a 25 horas semanales mientras duplicaron sus ingresos. El secreto está en crear sistemas, procesos y equipos que sean más eficientes que tu presencia constante. No es magia, es metodología. Imagínate levantarte un lunes y saber que tu empresa está generando dinero, sirviendo clientes y creciendo... sin que tengas que estar ahí supervisando cada detalle.",
      objection: "Deseo - Posibilidad de éxito"
    },
    {
      question: "¿Cómo puedo costear este tipo de consultoría? No tengo liquidez disponible...",
      answer: "Entiendo la preocupación financiera, pero aquí está la realidad: el dinero SIEMPRE está disponible para las inversiones que realmente importan. Mis clientes han financiado la consultoría con tarjetas de crédito, préstamos familiares, líneas de crédito empresariales, y hasta vendiendo activos innecesarios. ¿Por qué? Porque saben que es la inversión más rentable que pueden hacer. Una sola mejora en eficiencia puede generar el ROI completo. Además, ofrezco planes de pago flexibles. La pregunta no es si tienes el dinero, sino si estás comprometido con cambiar tu vida.",
      objection: "Dinero - Capacidad financiera"
    },
    {
      question: "¿Tendré el apoyo necesario durante la implementación? ¿Mi equipo/familia me apoyará?",
      answer: "Sí, tendrás TODO el apoyo necesario. Primero, trabajamos JUNTOS durante todo el proceso - no te dejo solo con una lista de tareas. Segundo, te enseño exactamente cómo comunicar estos cambios a tu equipo y familia para que se conviertan en tus aliados, no en obstáculos. Muchas veces incluyo sesiones específicas con tu equipo clave y hasta con tu pareja para asegurar alineación total. Además, tienes acceso directo a mí via WhatsApp para dudas urgentes. No estás solo en esto.",
      objection: "Ayuda - Apoyo disponible"
    },
    {
      question: "¿Cómo sé que tu método realmente funciona y no es solo marketing?",
      answer: "Excelente pregunta y te respeto por hacerla. Primero, mis resultados son verificables: puedes hablar directamente con mis clientes (te doy referencias reales). Segundo, ofrezco garantía de resultados: si no ves mejoras medibles en 90 días, te devuelvo tu inversión. Tercero, mi reputación de 17 años en 22 países habla por sí misma - revisa mis testimonios en Google Business Profile y LinkedIn. Cuarto, en nuestra sesión estratégica gratuita verás resultados inmediatos que podrás implementar ese mismo día. Los charlatanes no ofrecen garantías ni referencias verificables.",
      objection: "Confianza - Credibilidad del método"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-consulting-gray-light">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 bg-brand-red text-white text-sm font-semibold rounded-full mb-4">
            RESUELVE TUS DUDAS
          </span>
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-consulting-blue mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Preguntas Frecuentes Que Todo Empresario Se Hace
            </h2>
          </div>
          <p className="text-lg text-consulting-gray">
            He respondido estas mismas preguntas cientos de veces. Aquí tienes las respuestas 
            honestas y directas que necesitas escuchar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-start hover:bg-gray-50 transition-colors"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="pr-4">
                    <h3 className="text-lg font-semibold text-consulting-navy mb-2">
                      {faq.question}
                    </h3>
                  </div>
                  {openFaq === index ? (
                    <ChevronUp className="h-6 w-6 text-consulting-blue flex-shrink-0 mt-1" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-consulting-blue flex-shrink-0 mt-1" />
                  )}
                </button>
                {openFaq === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 pt-2 animate-slide-down border-t border-gray-100"
                  >
                    <p className="text-consulting-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-brand-red text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Sigues Teniendo Dudas?
            </h3>
            <p className="text-lg mb-6">
              Entiendo que tomar esta decisión no es fácil. Por eso ofrezco una sesión estratégica 
              <span className="font-bold"> COMPLETAMENTE GRATUITA</span> donde podrás:
            </p>
            <ul className="text-left max-w-2xl mx-auto mb-8 space-y-2">
              <li>✓ Hacer todas las preguntas que necesites</li>
              <li>✓ Ver resultados inmediatos que puedes implementar ese mismo día</li>
              <li>✓ Conocer exactamente cómo sería trabajar conmigo</li>
              <li>✓ Obtener un diagnóstico personalizado de tu situación</li>
            </ul>
            <a 
              href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
              className="btn-primary bg-white text-brand-red hover:bg-gray-100 mb-4 inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Mi Sesión Estratégica GRATIS
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <p className="text-sm opacity-90">
              Sin costo, sin compromiso - Valorada en U$D250
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-consulting-gray mb-4">
              ¿Prefieres una conversación más directa?
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=19786629364&text=Hola%2C+tengo+algunas+dudas+específicas+sobre+el+método+y+la+consultoría&type=phone_number&app_absent=0"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Escribeme directamente por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
