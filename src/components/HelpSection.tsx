import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

const HelpSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué es el Método P.U.D.E.R. y cómo funciona?",
      answer: "El Método P.U.D.E.R. es un sistema de dirección estratégica en 5 fases: Plan (visión de largo plazo), Único (diferenciación competitiva), Desarrollo (estructura interna para la siguiente etapa), Estándar (fijar lo que funciona) y Repetir (ciclo continuo de planificación, implementación y evaluación). Es el resultado de aplicar los principios del mejoramiento continuo industrial a la dirección de empresas PyME."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados con la consultoría?",
      answer: "Los primeros resultados son visibles en las primeras 4-6 semanas con la implementación de sistemas básicos. Los programas son de 3 meses por etapa, abordando un tema estratégico a la vez. La transformación completa típicamente toma entre 6 meses y 2 años, dependiendo del tamaño y punto de partida de tu empresa."
    },
    {
      question: "¿Qué tipo de empresas se benefician más de este método?",
      answer: "Empresas de servicios, retail, manufactura, distribución e industria con 5 a 60 empleados que dependen excesivamente del fundador o dueño. Especialmente efectivo para el empresario que trabaja más de 10 horas diarias, no puede delegar, no tiene vacaciones reales, y siente que por más que empuja, el techo siempre está ahí."
    },
    {
      question: "¿Cómo se realiza el proceso de consultoría?",
      answer: "Iniciamos con una sesión estratégica gratuita de 45 minutos para diagnosticar tu situación. Luego desarrollamos programas de 3 meses con sesión virtual semanal, implementación de sistemas, capacitación de equipos y seguimiento de métricas. Cada programa tiene objetivos concretos y resultados medibles desde el inicio."
    },
    {
      question: "¿Qué garantías ofrecen en el proceso?",
      answer: "En 18 años de trabajo, solo devolví dinero una vez. No porque el método fallara, sino porque el cliente no estaba dispuesto a hacer su parte del proceso. Mi compromiso es simple: si yo hago mi trabajo y vos hacés el tuyo, los resultados llegan. Si en algún momento siento que el proceso no está funcionando, hablo con vos antes de que tengas que pedirme nada. Así trabajé siempre. Así voy a seguir trabajando."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="ayuda" className="section bg-white">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-2 px-4 bg-brand-red text-white text-sm font-semibold rounded-full mb-6">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-3xl font-bold mb-4">Centro de Ayuda</h2>
          <p className="text-consulting-gray text-xl">
            Respuestas sobre consultoría empresarial y el Método P.U.D.E.R.
          </p>
        </div>

        <div className="space-y-2 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                {openFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-brand-red flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-consulting-gray flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 text-consulting-gray leading-relaxed bg-gray-50"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center bg-consulting-navy rounded-2xl p-10 text-white">
          <h2 className="text-2xl font-bold mb-4">¿Tenés Otras Preguntas?</h2>
          <p className="text-gray-300 mb-6">
            Hablemos directamente sobre tu situación específica
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+tengo+una+pregunta+sobre+consultor%C3%ADa+empresarial+que+no+encontr%C3%A9+en+las+FAQ&type=phone_number&app_absent=0"
            className="inline-flex items-center gap-2 bg-brand-red text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
