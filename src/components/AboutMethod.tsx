import React from 'react';
import { Clock, Target, BarChart4, MessageSquare, Linkedin, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import SafeImage from './SafeImage';
import StructuredData from './StructuredData';

const AboutMethod: React.FC = () => {
  console.log('AboutMethod component rendering');

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Método P.U.D.E.R. - Transformación Empresarial",
    "description": "Sistema integral para reducir hasta 50% las horas de trabajo y aumentar hasta 40% la rentabilidad empresarial",
    "totalTime": "PT12W",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "15000"
    },
    "supply": [
      "Diagnóstico empresarial",
      "Plan estratégico personalizado", 
      "Sistemas automatizados",
      "Equipo capacitado"
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Claridad y Enfoque Estratégico",
        "text": "Identifica exactamente qué actividades generan el 80% de tus resultados y elimina todo lo que te distrae del crecimiento real.",
        "image": "https://claudioflores.lovable.app/lovable-uploads/135f3f99-d5f9-4f4d-8213-675e650f3f18.png"
      },
      {
        "@type": "HowToStep",
        "name": "Sistemas y Procesos Automatizados", 
        "text": "Implementa sistemas que funcionen sin tu presencia constante, desde ventas hasta operaciones.",
        "image": "https://claudioflores.lovable.app/lovable-uploads/0b84250d-4c53-48c5-9471-1227bf9ff0fb.png"
      },
      {
        "@type": "HowToStep",
        "name": "Desarrollo de Liderazgo y Equipo",
        "text": "Construye un equipo que tome decisiones inteligentes sin depender de ti para cada detalle.",
        "image": "https://claudioflores.lovable.app/lovable-uploads/dfb8fb00-5dee-4b16-9bac-410b330236fb.png"
      }
    ],
    "result": {
      "@type": "Thing",
      "name": "Empresa automatizada y rentable",
      "description": "Reducción de hasta 50% en horas de trabajo con aumento de hasta 40% en rentabilidad"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Método P.U.D.E.R.",
    "description": "Consultoría estratégica empresarial para transformación y optimización de empresas",
    "provider": {
      "@type": "Organization",
      "name": "Claudio Flores Consultoría Empresarial"
    },
    "areaServed": {
      "@type": "Place", 
      "name": "Internacional"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Consultoría",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sesión Estratégica Gratuita",
            "description": "Diagnóstico personalizado y plan de acción inmediato"
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Implementación Método P.U.D.E.R.",
            "description": "Sistema completo de transformación empresarial"
          },
          "price": "15000",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <>
      <StructuredData data={howToSchema} id="method-schema" />
      <StructuredData data={serviceSchema} id="service-schema" />
    <section id="sobre-metodo" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            El Método <span className="text-consulting-gold">P.U.D.E.R.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-consulting-navy">
            El Sistema Que YA Liberó a 500+ Empresarios
          </h2>
          <p className="text-xl text-consulting-gray mb-6">
            Transforma tu empresa para que trabaje para ti. Hasta 40% más rentabilidad, 50% menos horas.
          </p>
    
          <p className="text-xl text-consulting-gray mb-6">
  El sistema probado que liberó a 500+ empresarios en 22 países.
</p> 
         
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fase 1: Claridad y Enfoque Estratégico</h3>
            <p className="text-consulting-gray mb-4">
              Despejamos completamente la confusión operativa y trazamos un plan estratégico claro y detallado 
              para alcanzar tus metas empresariales más ambiciosas. Identificamos con precisión lo verdaderamente 
              importante para tu negocio.
            </p>
            <ul className="text-sm text-consulting-gray space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Análisis profundo de tu situación actual</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Definición de objetivos SMART</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Identificación de oportunidades</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Roadmap estratégico personalizado</span>
              </li>
            </ul>
          </div>

          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <BarChart4 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fase 2: Sistemas y Procesos Automatizados</h3>
            <p className="text-consulting-gray mb-4">
              Implementamos sistemas operativos robustos y procesos automatizados que permiten a tu empresa 
              funcionar de forma eficiente sin depender únicamente de tu presencia física.
            </p>
            <ul className="text-sm text-consulting-gray space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Documentación completa de procesos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Implementación de software de gestión</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Establecimiento de KPIs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Sistemas de monitoreo automatizado</span>
              </li>
            </ul>
          </div>

          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all">
            <div className="p-4 bg-consulting-blue rounded-full inline-block mb-6">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fase 3: Desarrollo de Liderazgo y Equipos</h3>
            <p className="text-consulting-gray mb-4">
              Fortalecemos la cultura organizacional y potenciamos tu capacidad de liderazgo estratégico. 
              Desarrollamos equipos comprometidos que trabajan de forma autónoma hacia los objetivos.
            </p>
            <ul className="text-sm text-consulting-gray space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Programas de capacitación en liderazgo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Desarrollo de competencias del equipo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Sistemas de comunicación efectiva</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-consulting-blue mt-0.5 flex-shrink-0" />
                <span>Cultura de alto rendimiento</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-consulting-navy text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">¿Cómo Sabes Que El Método P.U.D.E.R. Funciona?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-consulting-gold mb-2">hasta 50%</div>
                <p>Reducción promedio en horas de trabajo semanales</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-consulting-gold mb-2">hasta 40%</div>
                <p>Incremento en rentabilidad en el primer año</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-consulting-gold mb-2">90 días</div>
                <p>Para ver los primeros resultados tangibles</p>
              </div>
            </div>
          </div>
        </div>

        {/* ACCIÓN 4: CTA UNIFICADO */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Aplica P.U.D.E.R. en Tu Empresa
          </h2>
          <p className="text-xl text-consulting-gray mb-8">
            El mismo sistema que transformó 500+ empresas está esperándote
          </p>
          <a 
            href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
            className="btn-primary mb-6 text-lg px-8 py-4 inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CheckCircle className="h-5 w-5" />
            Agenda Tu Sesión Estratégica GRATUITA
          </a>
          
          <div className="flex items-center justify-center gap-4 text-sm text-consulting-gray mb-6">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-consulting-blue" />
              45 minutos
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-consulting-blue" />
              Sin compromiso
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-consulting-blue" />
              Valor $250 USD
            </span>
          </div>
          
          <div className="mt-6">
            <a 
              href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+conocer+más+sobre+el+Método+P.U.D.E.R.+y+cómo+puede+transformar+mi+empresa&type=phone_number&app_absent=0"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Preguntar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutMethod;
