
import React from 'react';
import { Award, Globe, TrendingUp, Users, Clock, Target, MessageSquare } from 'lucide-react';
import SafeImage from './SafeImage';

const WhyChooseMe: React.FC = () => {
  console.log('WhyChooseMe component rendering');

  return (
    <section id="por-que-conmigo" className="section bg-consulting-gray-light">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 bg-brand-red text-white text-sm font-semibold rounded-full mb-4">
            MI DIFERENCIA COMPETITIVA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Por Qué Elegir Trabajar <span className="text-brand-red">Conmigo</span>?
          </h2>
          <p className="text-lg text-consulting-gray">
            No soy solo otro consultor. Soy el mentor que ha transformado cientos de vidas empresariales 
            con un método probado y resultados garantizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="md:order-2">
            <SafeImage 
              src="/lovable-uploads/0b84250d-4c53-48c5-9471-1227bf9ff0fb.png"
              alt="Claudio Flores - Consultor Estratégico Empresarial" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:order-1">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">17 Años de Experiencia Comprobada</h3>
                  <p className="text-consulting-gray">
                    No experimento contigo. He perfeccionado mi método durante 17 años trabajando 
                    con empresarios reales que enfrentaban los mismos problemas que tú tienes hoy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Impacto Internacional en 22 Países</h3>
                  <p className="text-consulting-gray">
                    Mi método funciona independientemente de la cultura, idioma o mercado. 
                    He ayudado a empresarios desde Estados Unidos hasta Australia, adaptando 
                    siempre la estrategia al contexto local.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Resultados Probados Durante 17 Años</h3>
                  <p className="text-consulting-gray">
                    Mis clientes reducen <span className="font-bold text-brand-red">50% sus horas de trabajo</span> 
                    y aumentan <span className="font-bold text-brand-red">25-40% su rentabilidad</span> en el primer año. 
                    Mi método está probado en más de 22 países con empresas de todos los tamaños y complejidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Lo Que Me Hace Único en el Mercado</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-consulting-blue rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-3">Enfoque 100% Personalizado</h4>
              <p className="text-consulting-gray">
                No uso plantillas genéricas. Cada estrategia está diseñada específicamente 
                para tu empresa, tu industria y tu situación particular.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-consulting-blue rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-3">Implementación Inmediata</h4>
              <p className="text-consulting-gray">
                Desde la primera sesión empiezas a ver cambios. No perdemos tiempo en teoría, 
                vamos directo a la acción con pasos concretos y medibles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-consulting-blue rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-3">Método P.U.D.E.R. Exclusivo</h4>
              <p className="text-consulting-gray">
                Mi metodología propia que combina planificación estratégica, sistemas operativos 
                y desarrollo de liderazgo en un solo proceso integrado.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-brand-red text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">
            ¿Sigues Trabajando Más de 60 Horas Semanales Sin Ver a Tu Familia?
          </h3>
          <p className="text-lg mb-6">
            La diferencia entre nosotros es que yo ya pasé por donde tú estás ahora. 
            Conozco la frustración, el agotamiento y la sensación de estar atrapado en tu propio negocio.
          </p>
          <p className="text-lg font-semibold mb-6">
            Pero también conozco el camino hacia la libertad empresarial.
          </p>
          <a 
            href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
            className="btn-primary bg-white text-brand-red hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero Conocer Tu Historia y Tu Método
          </a>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+saber+más+sobre+tu+experiencia+y+método&type=phone_number&app_absent=0"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Pregúntame directamente por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
