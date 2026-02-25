import React from 'react';

const AboutMethod: React.FC = () => {
  return (
    <section id="sobre-metodo" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            El Método <span className="text-consulting-gold">P.U.D.E.R.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-consulting-navy">
            El Sistema Que YA Liberó a 270+ Empresarios
          </h2>
          <p className="text-xl text-consulting-gray mb-6">
            Transforma tu empresa para que trabaje para ti. Hasta 40% más rentabilidad, 50% menos horas.
          </p>
        </div>

        <div className="bg-consulting-gray-light p-6 rounded-lg mb-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-consulting-gray font-medium">
            Un sistema de dirección estratégica en 5 fases que transforma tu empresa paso a paso, sin que tengas que parar de operar.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">

          {/* P */}
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all border border-transparent hover:border-consulting-blue/20 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-consulting-blue text-white flex items-center justify-center text-2xl font-bold shadow-md shrink-0">
                P
              </div>
              <h3 className="text-xl font-bold text-consulting-navy">Plan Estratégico</h3>
            </div>
            <p className="text-consulting-gray leading-relaxed">
              Definimos juntos a dónde querés llegar. Sin visión clara de largo plazo, todo esfuerzo es ruido. Construimos el mapa antes de empezar a caminar.
            </p>
          </div>

          {/* U */}
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all border border-transparent hover:border-consulting-blue/20 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
             <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-consulting-blue text-white flex items-center justify-center text-2xl font-bold shadow-md shrink-0">
                U
              </div>
              <h3 className="text-xl font-bold text-consulting-navy">Único Posicionamiento</h3>
            </div>
            <p className="text-consulting-gray leading-relaxed">
              Identificamos tus fortalezas reales y lo que te diferencia de la competencia. Tu empresa deja de competir por precio y empieza a ganar por valor.
            </p>
          </div>

          {/* D */}
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all border border-transparent hover:border-consulting-blue/20 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
             <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-consulting-blue text-white flex items-center justify-center text-2xl font-bold shadow-md shrink-0">
                D
              </div>
              <h3 className="text-xl font-bold text-consulting-navy">Desarrollo de Estructura</h3>
            </div>
            <p className="text-consulting-gray leading-relaxed">
              Diseñamos los procesos, métricas, roles y la mentalidad necesaria para la próxima etapa de crecimiento. Tu equipo empieza a funcionar sin que estés en todo.
            </p>
          </div>

          {/* E */}
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all border border-transparent hover:border-consulting-blue/20 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
             <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-consulting-blue text-white flex items-center justify-center text-2xl font-bold shadow-md shrink-0">
                E
              </div>
              <h3 className="text-xl font-bold text-consulting-navy">Estándares de lo que Funciona</h3>
            </div>
            <p className="text-consulting-gray leading-relaxed">
              Lo que funciona se convierte en sistema. Lo que es sistema no depende de que vos estés presente. Tu empresa gana consistencia y previsibilidad.
            </p>
          </div>

          {/* R */}
          <div className="bg-consulting-gray-light p-8 rounded-lg hover:shadow-xl transition-all border border-transparent hover:border-consulting-blue/20 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
             <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-consulting-blue text-white flex items-center justify-center text-2xl font-bold shadow-md shrink-0">
                R
              </div>
              <h3 className="text-xl font-bold text-consulting-navy">Repetir el Ciclo</h3>
            </div>
            <p className="text-consulting-gray leading-relaxed">
              Evaluamos resultados, ajustamos y volvemos a ejecutar. Una empresa que revisa crece de forma predecible. Este ciclo es el que garantiza resultados sostenidos en el tiempo.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMethod;
