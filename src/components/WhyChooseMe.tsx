import React from 'react';
import { Award, Globe, TrendingUp, Users, Clock, Target, MessageSquare } from 'lucide-react';
import SafeImage from './SafeImage';

const WhyChooseMe: React.FC = () => {
  console.log('WhyChooseMe component rendering');

  return (
    <section id="por-que-conmigo" className="section bg-consulting-gray-light">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-2 px-4 bg-brand-red text-white text-sm font-semibold rounded-full mb-6">
            MI DIFERENCIA COMPETITIVA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Por Qué Elegir Trabajar <span className="text-brand-red">Conmigo</span>?
          </h2>
          <p className="text-xl text-consulting-gray leading-relaxed">
            No soy solo otro consultor. Soy el mentor que ha transformado cientos de vidas empresariales 
            con un método probado y resultados comprobados.
          </p>
        </div>

        {/* Main Content Grid - Better organized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <SafeImage 
                src="/lovable-uploads/0b84250d-4c53-48c5-9471-1227bf9ff0fb.png"
                alt="Claudio Flores - Consultor Estratégico Empresarial" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-red text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">17+</div>
                <div className="text-sm">Años</div>
              </div>
            </div>
          </div>
          
          {/* Key Points */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-red text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">17 Años de Experiencia Comprobada</h3>
                <p className="text-consulting-gray text-lg leading-relaxed">
                  No experimento contigo. He perfeccionado mi método durante 17 años trabajando 
                  con empresarios reales que enfrentaban los mismos problemas que tú tienes hoy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-red text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Impacto Internacional en 22 Países</h3>
                <p className="text-consulting-gray text-lg leading-relaxed">
                  Mi método funciona independientemente de la cultura, idioma o mercado. 
                  He ayudado a empresarios desde Estados Unidos hasta Australia.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-red text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Resultados Probados Durante 17 Años</h3>
                <p className="text-consulting-gray text-lg leading-relaxed">
                  Mis clientes reducen <span className="font-bold text-brand-red">50% sus horas de trabajo</span> 
                  y aumentan <span className="font-bold text-brand-red">25-40% su rentabilidad</span> en el primer año.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Value Props - Better visual hierarchy */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Lo Que Me Hace <span className="text-brand-red">Único</span> en el Mercado</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-consulting-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Enfoque 100% Personalizado</h4>
              <p className="text-consulting-gray text-lg leading-relaxed">
                No uso plantillas genéricas. Cada estrategia está diseñada específicamente 
                para tu empresa, tu industria y tu situación particular.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-consulting-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Implementación Inmediata</h4>
              <p className="text-consulting-gray text-lg leading-relaxed">
                Desde la primera sesión empiezas a ver cambios. No perdemos tiempo en teoría, 
                vamos directo a la acción con pasos concretos y medibles.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-consulting-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Método P.U.D.E.R. Exclusivo</h4>
              <p className="text-consulting-gray text-lg leading-relaxed">
                Mi metodología propia que combina planificación estratégica, sistemas operativos 
                y desarrollo de liderazgo en un solo proceso integrado.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Enhanced emotional appeal */}
        <div className="text-center bg-gradient-to-r from-brand-red to-red-600 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">
            ¿Cuántos Años Más Vas a Sacrificar?
          </h3>
          <p className="text-xl mb-4 opacity-90">
            💔 Tu familia te espera. Tus hijos no van a ser pequeños para siempre.
          </p>
          <p className="text-lg mb-6 opacity-90">
            La diferencia entre nosotros es que yo ya pasé por donde tú estás ahora.
            <span className="block font-semibold mt-2">Perdí momentos preciosos que NO puedo recuperar.</span>
          </p>
          <p className="text-xl font-semibold mb-8">
            🎯 Pero TÚ aún puedes cambiar tu historia. HOY.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a 
              href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
              className="flex-1 w-full sm:w-auto bg-white text-brand-red hover:bg-gray-100 font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sesión Estratégica Gratuita
            </a>
            
            <a 
              href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+saber+más+sobre+tu+experiencia+y+método&type=phone_number&app_absent=0"
              className="flex-1 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all flex items-center justify-center shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
