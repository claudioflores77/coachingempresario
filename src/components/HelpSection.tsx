
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

const HelpSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué es el Método P.U.D.E.R. y cómo funciona?",
      answer: "El Método P.U.D.E.R. es un sistema estructurado de 5 fases que transforma tu empresa para que trabaje para ti. Incluye Planificación estratégica, Unificación de procesos, Desarrollo de equipos, Ejecución sistemática y Resultados medibles. Cada fase tiene objetivos específicos y métricas claras de progreso."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados con la consultoría?",
      answer: "Los primeros resultados son visibles en las primeras 4-6 semanas con la implementación de sistemas básicos. La transformación completa típicamente toma entre 3-6 meses, dependiendo del tamaño y complejidad de tu empresa."
    },
    {
      question: "¿Qué tipo de empresas se benefician más de este método?",
      answer: "Empresas de servicios, retail, manufactura y tecnología con 5-100 empleados que dependen excesivamente del fundador. Especialmente efectivo para empresarios que trabajan más de 60 horas semanales y quieren recuperar su vida personal."
    },
    {
      question: "¿Cómo se realiza el proceso de consultoría?",
      answer: "Iniciamos con una sesión estratégica gratuita para diagnosticar tu situación. Luego desarrollamos un plan personalizado que incluye sesiones virtuales semanales, implementación de sistemas, capacitación de equipos y seguimiento de métricas."
    },
    {
      question: "¿Qué garantías ofrecen en el proceso?",
      answer: "Garantizamos resultados medibles en los primeros 90 días o devolvemos tu inversión. Nuestros clientes típicamente reducen 50% sus horas de trabajo y aumentan 25-40% su rentabilidad en el primer año."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="ayuda" className="section bg-consulting-gray-light">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-consulting-blue mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Centro de Ayuda y Preguntas Frecuentes
            </h2>
          </div>
          <p className="text-lg text-consulting-gray">
            Encuentra respuestas a las preguntas más comunes sobre nuestro proceso de consultoría 
            empresarial y el Método P.U.D.E.R.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-consulting-navy pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-consulting-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-consulting-blue flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 pb-4 pt-2 animate-slide-down"
                  >
                    <p className="text-consulting-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-consulting-navy">
              ¿No encontraste la respuesta que buscabas?
            </h3>
            <p className="text-consulting-gray mb-6">
              Nuestro equipo está disponible para resolver todas tus dudas sobre consultoría empresarial.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=19786629364&text=Hola%2C+tengo+una+pregunta+sobre+consultoría+empresarial+que+no+encontré+en+las+FAQ&type=phone_number&app_absent=0"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Hacer una pregunta por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
