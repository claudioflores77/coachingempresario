
import React, { memo, useEffect } from 'react';
import SafeImage from './SafeImage';

// Extend global window interface for Metricool
declare global {
  interface Window {
    beTracker?: {
      t: (config: { hash: string }) => void;
    };
  }
}

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  // Load Metricool script asynchronously after component mount
  useEffect(() => {
    const loadMetricool = () => {
      try {
        if (window.beTracker) return; // Already loaded
        
        const script = document.createElement('script');
        script.src = 'https://tracker.metricool.com/resources/be.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          try {
            if (window.beTracker) {
              window.beTracker.t({hash: '7e2b91ef6ba3fdf4953784cfc66502e2'});
            }
          } catch (error) {
            console.log('Error initializing Metricool tracker:', error);
          }
        };
        script.onerror = () => {
          console.log('Metricool script failed to load');
        };
        
        document.head.appendChild(script);
      } catch (error) {
        console.log('Error loading Metricool script:', error);
      }
    };

    // Load after a short delay to not block initial rendering
    const timeoutId = setTimeout(loadMetricool, 1000);
    return () => clearTimeout(timeoutId);
  }, []);
  
  return (
    <footer className="bg-consulting-navy text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="mr-3">
                <SafeImage 
                  src="/lovable-uploads/135f3f99-d5f9-4f4d-8213-675e650f3f18.png"
                  alt="Claudio Flores Logo" 
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Claudio Flores</h3>
              <span className="ml-2 text-sm text-consulting-gold">Consultor Empresarial • Método P.U.D.E.R.</span>
            </div>
            <p className="text-sm mt-2">500+ empresarios libres en 22 países • 17 años transformando vidas</p>
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
});

export default Footer;
