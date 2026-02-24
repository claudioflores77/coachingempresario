import React from 'react';
import { Award, CheckCircle, Globe, TrendingUp, Users, Wrench } from 'lucide-react';
import SafeImage from './SafeImage';

const WhyChooseMe: React.FC = () => {
  return (
    <section id="por-que-conmigo" className="section bg-consulting-gray-light">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-2 px-4 bg-brand-red text-white text-sm font-semibold rounded-full mb-6">
            MI DIFERENCIA COMPETITIVA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Por Qué Elegir Trabajar{' '}
            <span className="text-brand-red">Conmigo</span>?
          </h2>
          <p className="text-xl text-consulting-gray leading-relaxed">
            No soy un coach que aprendió a dar consejos en un curso de fin de semana.
          </p>
        </div>

        {/* Main Content Grid */}
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
                <div className="text-2xl font-bold">18+</div>
                <div className="text-sm">Años</div>
              </div>
            </div>
          </div>

          {/* Key narrative */}
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-red">
              <div className="flex items-start gap-4">
                <Wrench className="h-7 w-7 text-brand-red mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Ingeniero de formación, estratega por vocación</h3>
                  <p className="text-consulting-gray">
                    Cuando entro a tu empresa, no traigo intuición. Traigo método, métricas y sistema.
                    El Método P.U.D.E.R. aplica los principios del mejoramiento continuo industrial
                    al problema más común del empresario PyME: crecer sin perder el control.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-red">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-7 w-7 text-brand-red mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Casos reales, números reales</h3>
                  <p className="text-consulting-gray">
                    Una empresa distribuidora: de USD 10.000 a USD 120.000 mensuales.
                    Una empresaria metalurgia que hoy vive donde siempre quiso y hace lo que ama.
                    Esos no son promedios. Son transformaciones reales, documentadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-red">
              <div className="flex items-start gap-4">
                <Globe className="h-7 w-7 text-brand-red mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">18 años, 270+ empresarios, 17 países</h3>
                  <p className="text-consulting-gray">
                    Lo probé en rubros tan distintos como manufactura, distribución,
                    construcción, educación, bienes raíces y tecnología.
                    El resultado es siempre el mismo patrón: cuando el dueño aprende a dirigir
                    en lugar de operar, la empresa crece y él recupera su vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unique value props */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Lo Que Me Hace{' '}
            <span className="text-brand-red">Diferente</span>{' '}en el Mercado
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-consulting-gray-light">
              <CheckCircle className="h-10 w-10 text-brand-red mx-auto mb-4" />
              <h4 className="font-bold mb-2">Método con base técnica</h4>
              <p className="text-consulting-gray text-sm">
                Planificar → Implementar → Evaluar → Mejorar. Ingeniería industrial aplicada
                a la dirección de empresas. No coaching motivacional.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-consulting-gray-light">
              <Users className="h-10 w-10 text-brand-red mx-auto mb-4" />
              <h4 className="font-bold mb-2">Sé cómo hacer que lo implementes</h4>
              <p className="text-consulting-gray text-sm">
                No alcanza con saber qué hay que cambiar. Lo diferente es que acompaño la
                implementación real, aunque hoy estés hasta el cuello en el día a día.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-consulting-gray-light">
              <Award className="h-10 w-10 text-brand-red mx-auto mb-4" />
              <h4 className="font-bold mb-2">Integridad comprobada</h4>
              <p className="text-consulting-gray text-sm">
                En 18 años, una sola devolución. Porque el método funciona
                cuando el empresario decide trabajar en serio. 47 reseñas de 5 estrellas lo confirman.
              </p>
            </div>
          </div>
        </div>

        {/* Credenciales */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <p className="text-3xl font-bold text-brand-red">18</p>
            <p className="text-sm text-consulting-gray">Años de experiencia</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <p className="text-3xl font-bold text-brand-red">270+</p>
            <p className="text-sm text-consulting-gray">Empresarios acompañados</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <p className="text-3xl font-bold text-brand-red">17</p>
            <p className="text-sm text-consulting-gray">Países en 5 continentes</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <p className="text-3xl font-bold text-brand-red">47</p>
            <p className="text-sm text-consulting-gray">Reseñas 5 estrellas en Google</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <p className="text-3xl font-bold text-brand-red">1</p>
            <p className="text-sm text-consulting-gray">Sola devolución en 18 años</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md text-center">
            <p className="text-3xl font-bold text-brand-red">5</p>
            <p className="text-sm text-consulting-gray">Continentes con clientes</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-consulting-navy rounded-2xl p-10 text-white">
          <h3 className="text-2xl font-bold mb-4">¿Cuántos Años Más Vas a Sacrificar?</h3>
          <p className="text-gray-300 mb-8">
            La diferencia entre nosotros es que yo ya pasé por donde tú estás ahora.
            Pero tú aún puedés cambiar tu historia. Hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
              className="bg-brand-red text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors"
            >
              Sesión Estratégica Gratuita
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+saber+m%C3%A1s+sobre+tu+experiencia+y+m%C3%A9todo&type=phone_number&app_absent=0"
              className="bg-white text-consulting-navy font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
