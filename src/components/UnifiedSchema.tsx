import React from 'react';
import StructuredData from './StructuredData';

const UnifiedSchema: React.FC = () => {
  const unifiedGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://coachingempresario.lovable.app/#organization",
        "name": "Claudio Flores Consultoría Empresarial",
        "description": "Consultoría estratégica empresarial especializada en el Método P.U.D.E.R. para transformación y optimización de empresas.",
        "url": "https://coachingempresario.lovable.app",
        "logo": "https://coachingempresario.lovable.app/lovable-uploads/135f3f99-d5f9-4f4d-8213-675e650f3f18.png",
        "image": "https://coachingempresario.lovable.app/lovable-uploads/135f3f99-d5f9-4f4d-8213-675e650f3f18.png",
        "telephone": "+5493624236611",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AR"
        },
        "areaServed": [
          {
            "@type": "Place",
            "name": "Internacional (17+ países)"
          }
        ],
        "founder": {
          "@id": "https://coachingempresario.lovable.app/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://coachingempresario.lovable.app/#person",
        "name": "Claudio Flores",
        "jobTitle": "Consultor Estratégico Empresarial",
        "description": "Especialista en transformación empresarial con 18 años de experiencia y más de 270 empresas transformadas utilizando el Método P.U.D.E.R.",
        "url": "https://coachingempresario.lovable.app",
        "image": "https://coachingempresario.lovable.app/lovable-uploads/135f3f99-d5f9-4f4d-8213-675e650f3f18.png",
        "worksFor": {
          "@id": "https://coachingempresario.lovable.app/#organization"
        },
        "knowsAbout": [
          "Método P.U.D.E.R.",
          "Consultoría Empresarial",
          "Transformación Organizacional",
          "Sistemas y Procesos",
          "Liderazgo Ejecutivo",
          "Automatización Empresarial"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://coachingempresario.lovable.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cómo sé si esto es para mí?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El Método P.U.D.E.R. es ideal para ti si: (1) Trabajas más de 50 horas semanales pero sientes que tu negocio no crece proporcionalmente, (2) Tu empresa depende completamente de ti y no puede funcionar sin tu presencia constante, (3) Estás sacrificando tu vida personal y familiar por el negocio, (4) Quieres aumentar la rentabilidad sin aumentar tus horas de trabajo."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué incluye la Sesión Estratégica GRATUITA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La Sesión Estratégica es una reunión 1 a 1 de 45 minutos (valor $250 USD) donde analizaremos en profundidad tu situación actual. Incluye diagnóstico personalizado, plan de acción inmediato y evaluación de viabilidad."
            }
          },
          {
            "@type": "Question",
            "name": "¿En cuánto tiempo voy a ver resultados concretos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Los primeros resultados tangibles aparecen en 90 días, aunque muchos clientes reportan cambios significativos en las primeras 4-6 semanas. A los 6 meses, el promedio de reducción de horas es del 50% con un incremento del 40% en rentabilidad."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué hace diferente a su Sistema de trabajo respecto de otros programas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El Método P.U.D.E.R. ofrece personalización total, implementación práctica paso a paso, resultados medibles, acompañamiento directo con Claudio Flores y garantía de resultados en 90 días."
            }
          }
        ]
      }
    ]
  };

  return <StructuredData data={unifiedGraph} id="unified-schema" />;
};

export default UnifiedSchema;
