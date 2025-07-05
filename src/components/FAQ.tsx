
import React, { useState } from 'react';
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
      answer: "Perfecto, esa experiencia previa es exactamente por qué necesitas esto. Fallar intentándolo solo es normal - el 87% de empresarios fracasan implementando sistemas porque no tienen la metodología correcta ni el acompañamiento adecuado. Tus intentos anteriores fallaron porque no tenías una guía experta que te mostrara el camino exacto, paso a paso. Es como intentar realizar una cirugía leyendo un manual - técnicamente 'puedes' hacerlo, pero el resultado será desastroso. Yo he perfeccionado este proceso durante 17 años y 300+ empresas transformadas. La diferencia es que ahora tienes el mapa exacto y un guía experto que ya caminó este sendero cientos de veces."
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
      answer: "Primera parte: Si no ves mejoras medibles en 90 días, te devuelvo CADA centavo - sin preguntas, sin peros. Segunda parte: He aplicado este método en más de 22 países y docenas de industrias: desde restaurantes hasta tecnología, desde servicios profesionales hasta manufactura. Los principios de sistemas, procesos y equipos son universales. Además, puedes verificar mis resultados AHORA MISMO: revisa mis testimonios en Google, habla con mis clientes anteriores (te doy contactos reales), ve los casos de éxito en mi LinkedIn. En nuestra sesión estratégica gratuita, verás resultados inmediatos que podrás implementar ese mismo día. Los charlatanes no ofrecen garantías de devolución ni referencias verificables."
    },
    {
      question: "¿Realmente tendré el apoyo necesario o me dejarán solo después de pagar?",
      answer: "Trabajamos JUNTOS durante todo el proceso - esto no es un curso donde te dan acceso y te abandonan. Tienes acceso directo a mí via WhatsApp para dudas urgentes, sesiones semanales de implementación, y revisiones personalizadas de tu progreso. Además, te enseño exactamente cómo manejar la resistencia de tu equipo y convertirlos en aliados del cambio. Muchas veces incluyo sesiones con tu equipo clave para asegurar alineación total. Mi reputación de 17 años se basa en el éxito de mis clientes - tu éxito ES mi éxito. No estás comprando un producto, estás adquiriendo un partner estratégico comprometido con tu transformación."
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
