import React from 'react';
import StructuredData from './StructuredData';

const PersonSchema: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Claudio Flores",
    "jobTitle": "Consultor Estratégico Empresarial",
    "description": "Especialista en transformación empresarial con 17 años de experiencia y más de 500 empresas transformadas utilizando el Método P.U.D.E.R.",
    "url": "https://claudioflores.lovable.app",
    "image": "https://claudioflores.lovable.app/lovable-uploads/135f3f99-d5f9-4f4d-8213-675e650f3f18.png",
    "worksFor": {
      "@type": "Organization",
      "name": "Claudio Flores Consultoría Empresarial"
    },
    "hasCredential": [
      "17 años de experiencia en consultoría empresarial",
      "Más de 500 empresas transformadas exitosamente",
      "Especialista en Método P.U.D.E.R.",
      "Consultor en más de 22 países"
    ],
    "knowsAbout": [
      "Consultoría Empresarial",
      "Transformación Organizacional", 
      "Sistemas y Procesos",
      "Liderazgo Ejecutivo",
      "Automatización Empresarial",
      "Estrategia Empresarial",
      "Desarrollo de Equipos",
      "Optimización de Procesos"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+5493624236611",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://api.whatsapp.com/send/?phone=5493624236611"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Experiencia práctica empresarial"
    },
    "award": [
      "500+ empresas transformadas exitosamente",
      "17 años de experiencia comprobada",
      "Método P.U.D.E.R. desarrollado y perfeccionado"
    ]
  };

  return <StructuredData data={personSchema} id="person-schema" />;
};

export default PersonSchema;