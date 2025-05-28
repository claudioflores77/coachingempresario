
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-consulting-navy text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="mr-3">
                <img 
                  src="/lovable-uploads/135f3f99-d5f9-4f4d-8213-675e650f3f18.png" 
                  alt="Claudio Flores Logo" 
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Claudio Flores</h3>
              <span className="ml-2 text-sm text-consulting-gold">Consultora Estratégica Empresarial</span>
            </div>
            <p className="text-sm mt-2">Transformando empresas y vidas desde hace más de 17 años</p>
          </div>
          
          <div>
            <p className="text-sm text-consulting-gray-light">
              © {currentYear} Claudio Flores. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
