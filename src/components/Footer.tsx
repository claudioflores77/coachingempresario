
import React from 'react';
import SafeImage from './SafeImage';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  console.log('Footer component rendering');
  
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
      
      {/* Metricool tracking script */}
      <div dangerouslySetInnerHTML={{
        __html: `
          <script>
            function loadScript(a){
              try {
                var b=document.getElementsByTagName("head")[0],c=document.createElement("script");
                c.type="text/javascript";
                c.src="https://tracker.metricool.com/resources/be.js";
                c.onreadystatechange=a;
                c.onload=a;
                c.onerror=function(){console.log("Metricool script failed to load")};
                b.appendChild(c)
              } catch(error) {
                console.log("Error loading Metricool script:", error);
              }
            }
            loadScript(function(){
              try {
                beTracker.t({hash:"7e2b91ef6ba3fdf4953784cfc66502e2"})
              } catch(error) {
                console.log("Error initializing Metricool tracker:", error);
              }
            });
          </script>
        `
      }} />
    </footer>
  );
};

export default Footer;
