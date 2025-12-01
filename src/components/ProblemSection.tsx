import React, { memo } from 'react';
import { ArrowRight, Clock, Briefcase, Heart, ActivitySquare, AlertTriangle } from 'lucide-react';

const ProblemSection: React.FC = memo(() => {
  return (
    <section id="problema" className="section bg-gradient-to-br from-gray-900 via-brand-black to-gray-900 text-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          
          {/* Header con impacto emocional */}
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-red/20 backdrop-blur-sm border border-brand-red/50 rounded-full px-6 py-2 mb-6">
              <p className="text-brand-yellow font-semibold text-lg flex items-center gap-2 justify-center">
                <AlertTriangle className="h-5 w-5" />
                REALIDAD BRUTAL
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <Heart className="inline h-8 w-8 text-brand-red mb-2" /> ¿Es Esta Tu <span className="text-brand-red">Realidad</span> Cada Día?
            </h2>
          </div>

          {/* Story Section - Conexión emocional */}
          <div className="bg-brand-red/20 rounded-xl p-6 md:p-8 mb-10 border-l-4 border-brand-red shadow-xl">
            <p className="text-lg md:text-xl italic text-white/95 mb-4 leading-relaxed">
              "Son las 11 PM y sigues contestando emails. Tu familia ya se acostó... otra vez. 
              Mañana será igual: tu empresa te necesita para TODO. Te prometiste que este año sería diferente, 
              pero ya estamos en julio y trabajas MÁS horas que el año pasado."
            </p>
            <p className="text-brand-yellow font-semibold text-lg">
              ¿Te resulta familiar esta situación?
            </p>
          </div>
          
          {/* ACCIÓN 5: CONDENSADO A 4 PUNTOS ESPECÍFICOS */}
          {/* ACCIÓN 3: SIN emojis, usando componentes Lucide React */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Card 1: Trabajas 60+ Horas Sin Resultados */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-brand-red/50 transition-all hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-brand-red/30 to-red-900/30 rounded-xl p-4 mb-4 inline-block">
                <Briefcase className="h-10 w-10 text-brand-red" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-yellow mb-3">
                Trabajas 60+ Horas Sin Resultados
              </h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                La rentabilidad es ridícula comparada con el tiempo que inviertes. Cada hora extra parece evaporarse sin impacto real en los números.
              </p>
            </div>
            
            {/* Card 2: Tu Negocio No Funciona Sin Ti */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-brand-red/50 transition-all hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-brand-red/30 to-red-900/30 rounded-xl p-4 mb-4 inline-block">
                <Clock className="h-10 w-10 text-brand-red" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-yellow mb-3">
                Tu Negocio No Funciona Sin Ti
              </h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                No puedes tomarte ni un día libre. Todo se detiene cuando no estás. Eres el cuello de botella de tu propia empresa.
              </p>
            </div>
            
            {/* Card 3: Tus Hijos Crecen Sin Ti */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-brand-red/50 transition-all hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-brand-red/30 to-red-900/30 rounded-xl p-4 mb-4 inline-block">
                <Heart className="h-10 w-10 text-brand-red" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-yellow mb-3">
                Tus Hijos Crecen Sin Ti
              </h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Te estás perdiendo los primeros pasos, las primeras palabras, los recitales. Momentos que nunca volverán. ¿Cuándo fue la última vez que cenaste con tu familia?
              </p>
            </div>
            
            {/* Card 4: Tu Salud Se Deteriora */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-brand-red/50 transition-all hover:transform hover:scale-105">
              <div className="bg-gradient-to-br from-brand-red/30 to-red-900/30 rounded-xl p-4 mb-4 inline-block">
                <ActivitySquare className="h-10 w-10 text-brand-red" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-yellow mb-3">
                Tu Salud Se Deteriora
              </h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Estrés crónico, insomnio, ansiedad constante. Tu cuerpo te está pasando factura. El precio de "estar ocupado" es más alto de lo que crees.
              </p>
            </div>
            
          </div>
          
          {/* Consecuencias futuras - Dramatización de 5 años */}
          <div className="bg-gradient-to-r from-brand-red/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-8 mb-10 border border-brand-red/50">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
              <Clock className="h-8 w-8 text-brand-yellow" />
              ¿Qué Pasará en 5 Años Si No Actúas AHORA?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg text-white/95">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                  <span>¿Podrías haber perdido los primeros pasos de tus hijos? ¿o sus primeras palabras?</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                  <span>¿Tu matrimonio estaría en crisis?</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                  <span>¿Tu salud estaría quebrada por años de estrés?</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                  <span>¿Seguirías siendo prisionero de tu propio negocio?</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                  <span>¿La competencia te habría dejado atrás?</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                  <span>¿Te estarías arrepintiendo de no haber actuado cuando tuviste la oportunidad?</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contraste: ¿Y si actúas AHORA? */}
          <div className="bg-gradient-to-r from-brand-yellow/20 to-green-600/20 backdrop-blur-sm rounded-xl p-8 mb-12 border-2 border-brand-yellow/50">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-yellow mb-6 text-center flex items-center justify-center gap-2">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              ¿Y SI ACTÚAS AHORA? En 90 Días Tendrías:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-black text-brand-yellow mb-2">hasta 50%</div>
                <p className="text-base md:text-lg">Menos horas trabajando</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-black text-brand-yellow mb-2">hasta 40%</div>
                <p className="text-base md:text-lg">Más rentabilidad</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-black text-brand-yellow mb-2">100%</div>
                <p className="text-base md:text-lg">Tu vida personal recuperada</p>
              </div>
            </div>
          </div>
          
          {/* Urgencia - Lo que pasa mientras pospones */}
          <div className="bg-gradient-to-r from-orange-600/30 to-brand-red/30 rounded-xl p-6 md:p-8 mb-12 border border-orange-500/30">
            <h3 className="text-xl md:text-2xl font-bold text-brand-yellow mb-6 text-center flex items-center justify-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              ¿Sabes Qué Está Pasando Mientras Sigues Posponiendo el Cambio?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-black/30 rounded-lg p-4">
                <AlertTriangle className="h-10 w-10 text-brand-yellow mx-auto mb-3" />
                <p className="text-base">Tu competencia avanza mientras tú sigues "ocupado"</p>
              </div>
              <div className="text-center bg-black/30 rounded-lg p-4">
                <Heart className="h-10 w-10 text-brand-yellow mx-auto mb-3" />
                <p className="text-base">Tus hijos crecen sin que estés presente</p>
              </div>
              <div className="text-center bg-black/30 rounded-lg p-4">
                <ActivitySquare className="h-10 w-10 text-brand-yellow mx-auto mb-3" />
                <p className="text-base">Tu energía se agota más y rindes menos cada día</p>
              </div>
            </div>
          </div>

          {/* ACCIÓN 4: CTA UNIFICADO - Mismo texto en toda la landing */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              La pregunta NO es si puedes cambiar...
            </p>
            <p className="text-2xl md:text-3xl font-bold text-brand-yellow mb-8">
              La pregunta es: ¿CUÁNDO vas a decidirte?
            </p>
            <a 
              href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-red to-red-600 text-white font-bold text-lg md:text-xl py-5 px-8 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-brand-yellow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agenda Tu Sesión Estratégica GRATUITA
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm text-white/60 mt-4 flex items-center justify-center gap-2 flex-wrap">
              <span>Sin tarjeta de crédito</span>
              <span>•</span>
              <span>Resultados garantizados</span>
              <span>•</span>
              <span>100% personalizado</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
});

export default ProblemSection;
