
import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Estoy agotado trabajando 60+ horas y no puedo tomarme ni vacaciones... ¿realmente vale la pena cambiar todo?",
      answer: "Lo que describes NO es una empresa exitosa, es una prisión dorada que tú mismo construiste. Cada día que mantienes esta situación, pierdes más: tu salud se deteriora (¿cuándo fue la última vez que dormiste 8 horas seguidas?), tu familia te ve como un extraño, y las oportunidades de crecimiento se esfuman porque estás demasiado ocupado 'apagando incendios'. El costo real de no actuar AHORA son años de tu vida que nunca recuperarás, relaciones familiares destruidas, y un negocio que morirá contigo. ¿Cuánto más puedes aguantar así antes de que tu cuerpo o tu mente colapsen?"
    },
    {
      question: "Ya intenté implementar sistemas antes y fracasé... ¿por qué esta vez sería diferente?",
      answer: "Perfecto, esa experiencia previa es exactamente por qué necesitas esto. Fallar intentándolo solo es normal - el 87% de empresarios fracasan implementando sistemas porque no tienen la metodología correcta ni el acompañamiento adecuado. Tus intentos anteriores fallaron porque no tenías una guía experta que te mostrara el camino exacto, paso a paso. Es como intentar realizar una cirugía leyendo un manual - técnicamente 'puedes' hacerlo, pero el resultado será desastroso. Yo he perfeccionado este proceso durante 17 años y 500+ empresas transformadas. La diferencia es que ahora tienes el mapa exacto y un guía experto que ya caminó este sendero cientos de veces."
    },
    {
      question: "¿Tengo los recursos para costear esta inversión? Mi flujo de caja está muy ajustado...",
      answer: "Si tienes un negocio que genera ingresos, YA TIENES los recursos - solo que están mal distribuidos. Mis clientes exitosos han usado tarjetas de crédito empresariales, líneas de crédito, préstamos familiares, o incluso vendido activos improductivos para financiar su transformación. ¿Por qué? Porque saben que es la inversión más rentable que pueden hacer. Un solo proceso optimizado puede generar el ROI completo en 30-60 días. Si tu negocio no puede generar $10,000-15,000 extras en 3-4 meses con los sistemas correctos, entonces tienes un problema mucho más grande que necesita resolverse URGENTEMENTE. La pregunta real es: ¿estás dispuesto a encontrar el dinero para cambiar tu vida?"
    },
    {
      question: "Mi familia piensa que gasto mucho en 'capacitaciones'... ¿cómo los convenzo?",
      answer: "Tu familia tiene razón en proteger el dinero familiar, pero están viendo esto como un gasto cuando es una INVERSIÓN en su futuro. Aquí está lo que debes decirles: 'Este no es otro curso, es la solución para recuperar a esposo/padre que han perdido por culpa del negocio'. Cuando implementes estos sistemas, tendrás 30+ horas semanales extras para estar con ellos, vacaciones reales sin interrupciones, y ingresos más estables y predecibles. Incluyo sesiones específicas para explicar el proceso a tu pareja y mostrar cómo esto beneficia a TODA la familia. La resistencia familiar desaparece cuando ven que se trata de recuperarte a TI, no de gastarse más dinero en 'experimentos'."
    },
    {
      question: "Suena demasiado bueno para ser cierto... ¿realmente puedo tener un negocio que funcione sin mí?",
      answer: "Es completamente posible y tengo cientos de casos que lo demuestran. Carlos redujo su jornada de 70 a 25 horas semanales mientras duplicó sus ingresos. María se tomó 4 semanas de vacaciones en Europa mientras su empresa creció 30%. No es magia, es metodología probada. El Método P.U.D.E.R. crea sistemas que son MÁS eficientes que tu presencia constante. Imagínate esto: despiertas un lunes, revisas tu teléfono, y ves que tu empresa generó ventas durante el fin de semana, tu equipo resolvió problemas sin consultarte, y los clientes están satisfechos... TODO funcionando como un reloj suizo. Esto es posible cuando tienes los sistemas correctos. ¿No vale la pena intentarlo?"
    },
    {
      question: "¿Qué pasa si no veo resultados? ¿Y si esto no funciona para mi industria específica?",
      answer: "Mi método está probado por más de 17 años y ha funcionado en más de 22 países diferentes, con empresas de todos los tamaños y complejidades. Los principios de sistemas, procesos y equipos son universales - desde restaurantes hasta tecnología, desde servicios profesionales hasta manufactura. No hacemos reembolsos porque queremos clientes verdaderamente comprometidos. Nuestro trabajo es 50% del resultado, pero el 50% restante depende totalmente de tu compromiso y acciones. Si no estás dispuesto a mejorar y ejecutar, nadie te podrá ayudar. Puedes verificar mis resultados AHORA MISMO: revisa mis testimonios en Google, habla con mis clientes anteriores (te doy contactos reales), ve los casos de éxito en mi LinkedIn."
    },
    {
      question: "¿Realmente tendré el apoyo necesario o me dejarán solo después de pagar?",
      answer: "Trabajamos JUNTOS durante todo el proceso - esto no es un curso donde te dan acceso y te abandonan. Tienes acceso directo a mí via WhatsApp para dudas urgentes, sesiones semanales de implementación, y revisiones personalizadas de tu progreso. Además, te enseño exactamente cómo manejar la resistencia de tu equipo y convertirlos en aliados del cambio. Muchas veces incluyo sesiones con tu equipo clave para asegurar alineación total. Mi reputación de 17 años se basa en el éxito de mis clientes - tu éxito ES mi éxito. No estás comprando un producto, estás adquiriendo un partner estratégico comprometido con tu transformación."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Add FAQ schema to the page
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema';
    
    // Remove existing schema if present
    const existingSchema = document.getElementById('faq-schema');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const schemaElement = document.getElementById('faq-schema');
      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, [faqs]);

  return (
    <section id="faq" className="section bg-consulting-gray-light">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Las 7 Preguntas Que Todo Empresario Se Hace
          </h1>
          <p className="text-xl text-consulting-gray">
            Respuestas directas basadas en 17 años transformando empresas
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
            <h2 className="text-3xl font-bold mb-4">
              Hablemos Directamente
            </h2>
            <p className="text-xl mb-6">
              Sesión estratégica <span className="font-bold">GRATUITA</span> (Valor: $250 USD)
            </p>
            <ul className="text-left max-w-md mx-auto mb-8 space-y-3 text-lg">
              <li>✓ Diagnóstico personalizado</li>
              <li>✓ Plan de acción inmediato</li>
              <li>✓ Resultados garantizados del primer día</li>
            </ul>
            <a 
              href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
              className="btn-primary bg-white text-brand-red hover:bg-gray-100 mb-4 inline-flex items-center text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar Mi Sesión GRATIS Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="text-sm opacity-90">
              Disponible hoy • Sin compromiso
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-consulting-gray mb-4">
              ¿Prefieres una conversación más directa?
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+tengo+algunas+dudas+específicas+sobre+el+método+y+la+consultoría&type=phone_number&app_absent=0"
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
