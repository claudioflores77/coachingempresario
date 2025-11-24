
import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';

const ProblemSection: React.FC = memo(() => {
  return (
    <section id="problema" className="section bg-gradient-to-br from-gray-900 via-brand-black to-gray-900 text-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          
          {/* Header con impacto emocional */}
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-red/20 backdrop-blur-sm border border-brand-red/50 rounded-full px-6 py-2 mb-6">
              <p className="text-brand-yellow font-semibold text-lg">
                ⚠️ REALIDAD BRUTAL
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              💔 ¿Es Esta Tu <span className="text-brand-red">Realidad</span> Cada Día?
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
          
          {/* Grid de problemas: Negocio vs. Vida Personal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-brand-red/30 hover:border-brand-red/50 transition-all">
              <h3 className="text-xl font-bold text-brand-yellow mb-6 flex items-center gap-2">
                💼 En Tu Negocio:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start text-left">
                  <span className="text-brand-red text-2xl mr-3 flex-shrink-0 mt-1">💀</span>
                  <span className="text-base md:text-lg">Trabajas 60+ horas y los resultados no mejoran</span>
                </div>
                <div className="flex items-start text-left">
                  <span className="text-brand-red text-2xl mr-3 flex-shrink-0 mt-1">⛓️</span>
                  <span className="text-base md:text-lg">Tu negocio NO puede funcionar ni 1 día sin ti</span>
                </div>
                <div className="flex items-start text-left">
                  <span className="text-brand-red text-2xl mr-3 flex-shrink-0 mt-1">📉</span>
                  <span className="text-base md:text-lg">La rentabilidad es ridícula vs. el tiempo invertido</span>
                </div>
                <div className="flex items-start text-left">
                  <span className="text-brand-red text-2xl mr-3 flex-shrink-0 mt-1">🔥</span>
                  <span className="text-base md:text-lg">Vives apagando incendios, no construyendo</span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-brand-red/30 hover:border-brand-red/50 transition-all">
              <h3 className="text-xl font-bold text-brand-yellow mb-6 flex items-center gap-2">
                💔 En Tu Vida Personal:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start text-left">
                  <span className="text-brand-red text-2xl mr-3 flex-shrink-0 mt-1">👨‍👩‍👧‍👦</span>
                  <span className="text-base md:text-lg">Tus hijos crecen y tú te lo estás perdiendo</span>
                </div>
                <div className="flex items-start text-left">
                  <span className="text-brand-red text-2xl mr-3 flex-shrink-0 mt-1">💊</span>
                  <span className="text-base md:text-lg">Tu salud se deteriora: estrés, insomnio, ansiedad</span>
                </div>
                <div className="flex items-start text-left">
                  <span className="text-brand-red text-2xl mr-3 flex-shrink-0 mt-1">✈️</span>
                  <span className="text-base md:text-lg">No puedes tomar vacaciones reales NUNCA</span>
                </div>
                <div className="flex items-start text-left">
                  <span className="text-brand-red text-2xl mr-3 flex-shrink-0 mt-1">😔</span>
                  <span className="text-base md:text-lg">Te sientes culpable cuando NO estás trabajando</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Consecuencias futuras - Dramatización de 5 años */}
          <div className="bg-gradient-to-r from-brand-red/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-8 mb-10 border border-brand-red/50">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              ⏰ ¿Qué Pasará en 5 Años Si No Actúas AHORA?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg text-white/95">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-brand-red mr-2 text-xl">→</span>
                  <span>¿Podrías haber perdido los primeros pasos de tus hijos? ¿o sus primeras palabras?</span>
                </div>
                <div className="flex items-start">
                  <span className="text-brand-red mr-2 text-xl">→</span>
                  <span>¿Tu matrimonio estaría en crisis?</span>
                </div>
                <div className="flex items-start">
                  <span className="text-brand-red mr-2 text-xl">→</span>
                  <span>¿Tu salud estaría quebrada por años de estrés?</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-brand-red mr-2 text-xl">→</span>
                  <span>¿Seguirías siendo prisionero de tu propio negocio?</span>
                </div>
                <div className="flex items-start">
                  <span className="text-brand-red mr-2 text-xl">→</span>
                  <span>¿La competencia te habría dejado atrás?</span>
                </div>
                <div className="flex items-start">
                  <span className="text-brand-red mr-2 text-xl">→</span>
                  <span>¿Te estarías arrepintiendo de no haber actuado cuando tuviste la oportunidad?</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contraste: ¿Y si actúas AHORA? */}
          <div className="bg-gradient-to-r from-brand-yellow/20 to-green-600/20 backdrop-blur-sm rounded-xl p-8 mb-12 border-2 border-brand-yellow/50">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-yellow mb-6 text-center">
              ✅ ¿Y SI ACTÚAS AHORA? En 90 Días Tendrías:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-black text-brand-yellow mb-2">50%</div>
                <p className="text-base md:text-lg">Menos horas trabajando</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-black text-brand-yellow mb-2">25-40%</div>
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
            <h3 className="text-xl md:text-2xl font-bold text-brand-yellow mb-6 text-center">
              ⚡ ¿Sabes Qué Está Pasando Mientras Sigues Posponiendo el Cambio?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-black/30 rounded-lg p-4">
                <div className="text-3xl mb-3">😰</div>
                <p className="text-base">Tu competencia avanza mientras tú sigues "ocupado"</p>
              </div>
              <div className="text-center bg-black/30 rounded-lg p-4">
                <div className="text-3xl mb-3">👶</div>
                <p className="text-base">Tus hijos crecen sin que estés presente</p>
              </div>
              <div className="text-center bg-black/30 rounded-lg p-4">
                <div className="text-3xl mb-3">⚡</div>
                <p className="text-base">Tu energía se agota más y rindes menos cada día</p>
              </div>
            </div>
          </div>

          {/* CTA final de la sección */}
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
              Agenda Tu Sesión Estratégica GRATIS Ahora
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm text-white/60 mt-4">
              Sin tarjeta de crédito • Resultados garantizados • 100% personalizado
            </p>
          </div>

        </div>
      </div>
    </section>
  );
});

export default ProblemSection;