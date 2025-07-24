import React from 'react';
import StructuredData from './StructuredData';

const ContactSchema: React.FC = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contactar a Claudio Flores",
    "description": "Contacta con Claudio Flores para consultoría empresarial y aplicación del Método P.U.D.E.R.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Claudio Flores Consultoría Empresarial",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+5493624236611",
          "contactType": "customer service",
          "availableLanguage": ["Spanish", "English"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00",
            "validFrom": "2024-01-01",
            "validThrough": "2025-12-31"
          }
        }
      ],
      "sameAs": [
        "https://api.whatsapp.com/send/?phone=5493624236611"
      ]
    }
  };

  return <StructuredData data={contactSchema} id="contact-schema" />;
};

export default ContactSchema;