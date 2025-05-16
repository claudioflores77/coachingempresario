
import React from 'react';
import { Users, TrendingUp, Brain, Presentation, Layers, GraduationCap } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-brand-red">
      <div className="mb-6 text-brand-red">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-consulting-gray">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="section bg-brand-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="text-brand-red">Servicios</span>
          </h2>
          <p className="text-lg text-consulting-gray">
            Diseñados específicamente para ayudarte a recuperar el control de tu negocio
            y transformar tu calidad de vida como empresario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Consultoría Estratégica Empresarial"
            description="Asesoría personalizada para dueños de PYMEs. Identificamos las áreas críticas y establecemos sistemas y rutinas para liberar tu tiempo y energía."
            icon={<TrendingUp className="h-10 w-10" />}
          />

          <ServiceCard
            title="Coaching de Líderes"
            description="Sesiones enfocadas en transformar tu liderazgo, clarificar tu visión y desarrollar estrategias que te permitan delegar y dirigir con eficacia."
            icon={<Users className="h-10 w-10" />}
          />

          <ServiceCard
            title="Mentoring para Empresarios"
            description="Acompañamiento personalizado para implementar cambios efectivos en tu negocio, basados en experiencias probadas y resultados comprobables."
            icon={<Brain className="h-10 w-10" />}
          />
          
          <ServiceCard
            title="Desarrollo de Equipos de Trabajo"
            description="Creación e integración de equipos coherentes, implementación de reglas claras y capacitación para desarrollar habilidades y potenciar resultados."
            icon={<Layers className="h-10 w-10" />}
          />
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-8 text-center">Desarrollo de Equipos de Trabajo</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-brand-red/20 rounded-lg hover:shadow-md transition-all">
              <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-bold mb-2">Armado de Equipos Coherentes</h4>
              <p className="text-sm text-consulting-gray">Formamos equipos equilibrados considerando los perfiles, habilidades y personalidades de cada miembro.</p>
            </div>

            <div className="text-center p-6 border border-brand-red/20 rounded-lg hover:shadow-md transition-all">
              <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center mx-auto mb-4">
                <Presentation className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-bold mb-2">Implementación de Reglas Claras</h4>
              <p className="text-sm text-consulting-gray">Establecemos condiciones y dinámicas que promueven la colaboración efectiva y la comunicación abierta.</p>
            </div>

            <div className="text-center p-6 border border-brand-red/20 rounded-lg hover:shadow-md transition-all">
              <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-bold mb-2">Capacitaciones Necesarias</h4>
              <p className="text-sm text-consulting-gray">Desarrollamos programas de capacitación personalizados para potenciar las habilidades y capacidades del equipo.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Nuestro Proceso en Cuatro Etapas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-black text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="text-lg font-bold mb-2">Evaluación y Diagnóstico</h4>
              <p className="text-sm text-consulting-gray">Analizamos profundamente tu situación actual y tus principales desafíos.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-black text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="text-lg font-bold mb-2">Diseño del Plan Personalizado</h4>
              <p className="text-sm text-consulting-gray">Creamos un plan estratégico a medida, priorizando acciones urgentes e importantes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-black text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="text-lg font-bold mb-2">Implementación y Acompañamiento</h4>
              <p className="text-sm text-consulting-gray">Ejecutamos el plan con asesoría constante y ajustes en tiempo real.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-black text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h4 className="text-lg font-bold mb-2">Medición de Resultados</h4>
              <p className="text-sm text-consulting-gray">Usamos herramientas y métricas específicas para ver el impacto tangible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
