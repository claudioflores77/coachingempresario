import React, { useEffect } from 'react';

interface StructuredDataProps {
  data: object;
  id: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({ data, id }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = id;
    
    // Remove existing schema if present
    const existingSchema = document.getElementById(id);
    if (existingSchema) {
      existingSchema.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const schemaElement = document.getElementById(id);
      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, [data, id]);

  return null; // This component doesn't render anything visible
};

export default StructuredData;