import React from 'react';
import { Star, Quote, CheckCircle, MessageSquare, TrendingUp, Clock, DollarSign } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  industry: string;
  country: string;
  image: string;
  rating: number;
  testimonial: string;
  results: {
    hoursReduction?: string;
    revenueIncrease?: string;
    timeframe?: string;
  };
  highlight: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos Ramírez",
      company: "TechSolutions Inc.",
      industry: "Tecnología",
      country: "México",
      image: "/lovable-uploads/0b84250d-4c53-48c5-9471-1227bf9ff0fb.png",
      rating: 5,
      testimonial: "Antes de trabajar con Claudio, mi empresa consumía toda mi vida. Trabajaba 70 horas semanales y aun así sentía que nunca era suficiente. En solo 12 semanas implementamos el Método P.U.D.E.R. y ahora trabajo 35 horas, mi equipo funciona de forma autónoma, y la rentabilidad aumentó un 45%. Recuperé mi vida personal sin sacrificar el crecimiento del negocio. Es la mejor inversión que he hecho en 15 años como empresario.",
      results: {
        hoursReduction: "50%",
        revenueIncrease: "45%",
        timeframe: "12 semanas"
      },
      highlight: "De 70 a 35 horas semanales manteniendo crecimiento"
    },
    {
      name: "María González",
      company: "Consultoría Estratégica MG",
      industry: "Consultoría",
      country: "España",
      image: "/lovable-uploads/135f3f99-d5f9-4f4d-8213-675e650f3f18.png",
      rating: 5,
      testimonial: "Como consultora, siempre aconsejaba a mis clientes sobre eficiencia operativa, pero mi propia empresa era un caos. Claudio me mostró que yo era el cuello de botella. Implementamos sistemas de automatización, capacitamos a mi equipo para tomar decisiones, y documentamos todos los procesos. Ahora puedo tomarme vacaciones de 2 semanas sin que mi teléfono suene una sola vez. La facturación creció 38% y mi nivel de estrés bajó un 80%.",
      results: {
        hoursReduction: "40%",
        revenueIncrease: "38%",
        timeframe: "4 meses"
      },
      highlight: "Primera vez en 8 años que tomó vacaciones reales"
    },
    {
      name: "Roberto Silva",
      company: "Silva Manufacturing",
      industry: "Manufactura",
      country: "Brasil",
      image: "/lovable-uploads/dfb8fb00-5dee-4b16-9bac-410b330236fb.png",
      rating: 5,
      testimonial: "Tenía una empresa de manufactura con 45 empleados pero yo seguía siendo el único que resolvía los problemas críticos. Mi salud estaba deteriorándose, mi matrimonio en crisis, y veía crecer a mis hijos solo en fotos. El Método P.U.D.E.R. cambió todo. Claudio me ayudó a construir una estructura de liderazgo de 3 niveles, sistemas de producción predecibles, y una cultura de solución de problemas. Hoy dedico 30 horas a la empresa (antes eran 65) y los resultados son mejores que nunca. Salvó mi negocio y mi familia.",
      results: {
        hoursReduction: "54%",
        revenueIncrease: "32%",
        timeframe: "16 semanas"
      },
      highlight: "Salvó su matrimonio y recuperó la relación con sus hijos"
    },
    {
      name: "Ana Martínez",
      company: "Servicios Educativos Integral",
      industry: "Educación",
      country: "Argentina",
      image: "/lovable-uploads/135f3f99-d5f9-4f4d-8213-675e650f3f18.png",
      rating: 5,
      testimonial: "Dirigía un instituto educativo con 200 alumnos pero me sentía más profesora que directora. Estaba en todo: desde cuestiones pedagógicas hasta problemas de mantenimiento. Claudio me enseñó a delegar estratégicamente, a construir un equipo de líderes intermedios, y a enfocarme en la visión estratégica. En 5 meses pasé de 60 a 25 horas semanales en la operación, abrimos una segunda sede, y aumentamos la matrícula un 40%. Ahora sí soy la directora que mi instituto necesitaba.",
      results: {
        hoursReduction: "58%",
        revenueIncrease: "40%",
        timeframe: "5 meses"
      },
      highlight: "Abrió segunda sede mientras trabajaba MENOS horas"
    },
    {
      name: "Diego Fernández",
      company: "Grupo Constructor DF",
      industry: "Construcción",
      country: "Chile",
      image: "/lovable-uploads/0b84250d-4c53-48c5-9471-1227bf9ff0fb.png",
      rating: 5,
      testimonial: "En la industria de la construcción todo son urgencias y crisis. Yo vivía con el celular pegado al oído 16 horas al día, los 7 días de la semana. Pensaba que era imposible cambiar eso. Claudio me demostró lo contrario. Creamos protocolos de decisión para cada nivel, implementamos software de gestión de proyectos, y capacitamos a los jefes de obra para autonomía total. Hoy superviso 8 proyectos simultáneos trabajando 40 horas semanales. Mi equipo sabe exactamente qué hacer sin necesitar mi aprobación constante. Magia no es, es método.",
      results: {
        hoursReduction: "45%",
        revenueIncrease: "35%",
        timeframe: "14 semanas"
      },
      highlight: "De 16 horas/día 7 días a semana a 40 horas semanales"
    },
    {
      name: "Laura Jiménez",
      company: "E-Commerce Fashion Lab",
      industry: "E-commerce",
      country: "Colombia",
      image: "/lovable-uploads/dfb8fb00-5dee-4b16-9bac-410b330236fb.png",
      rating: 5,
      testimonial: "Mi e-commerce crecía rápido pero yo me estaba ahogando. Atención al cliente, logística, marketing, finanzas... todo pasaba por mí. El burnout era inminente. Claudio no solo me ayudó a sistematizar la operación sino que me enseñó a pensar como CEO y no como operadora. Automatizamos el 80% del customer service, delegamos marketing a un equipo especializado, e implementamos dashboards en tiempo real. Hoy facturamos 3x más con la mitad de mi tiempo invertido. Y por primera vez en 4 años, disfruto dirigir mi empresa.",
      results: {
        hoursReduction: "52%",
        revenueIncrease: "200%",
        timeframe: "6 meses"
      },
      highlight: "Triplicó facturación trabajando la mitad de horas"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index} 
            className={`h-5 w-5 ${index < rating ? 'text-consulting-gold fill-consulting-gold' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonios" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-consulting-gold text-consulting-navy px-4 py-2 rounded-full mb-4">
            <Star className="h-5 w-5 fill-current" />
            <span className="font-semibold">TESTIMONIOS REALES</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Empresarios Que Ya <span className="text-consulting-gold">Recuperaron Su Vida</span>
          </h2>
          <p className="text-xl text-consulting-gray max-w-3xl mx-auto">
            Casos reales, resultados verificables, transformaciones documentadas
          </p>
        </div>

        {/* Estadísticas generales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-consulting-blue mb-2">500+</div>
            <p className="text-sm text-consulting-gray">Empresarios transformados</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-consulting-gold mb-2">22</div>
            <p className="text-sm text-consulting-gray">Países en 5 continentes</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-consulting-blue mb-2">17</div>
            <p className="text-sm text-consulting-gray">Años de experiencia</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-consulting-gold mb-2">4.9/5</div>
            <p className="text-sm text-consulting-gray">Calificación promedio</p>
          </div>
        </div>

        {/* Testimoniales principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all relative"
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-consulting-gold opacity-20" />
              
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-consulting-navy">{testimonial.name}</h3>
                  <p className="text-sm text-consulting-gray">{testimonial.company}</p>
                  <p className="text-xs text-consulting-gray">{testimonial.industry} • {testimonial.country}</p>
                  <div className="mt-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              <p className="text-consulting-gray mb-6 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>

              {/* Highlight principal */}
              <div className="bg-consulting-gold bg-opacity-10 border-l-4 border-consulting-gold p-4 mb-4 rounded">
                <p className="font-semibold text-consulting-navy text-sm">
                  💡 {testimonial.highlight}
                </p>
              </div>

              {/* Resultados medibles */}
              <div className="grid grid-cols-3 gap-3">
                {testimonial.results.hoursReduction && (
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="h-4 w-4 text-consulting-blue" />
                    </div>
                    <div className="text-2xl font-bold text-consulting-blue">
                      {testimonial.results.hoursReduction}
                    </div>
                    <p className="text-xs text-consulting-gray">Menos horas</p>
                  </div>
                )}
                {testimonial.results.revenueIncrease && (
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-consulting-gold" />
                    </div>
                    <div className="text-2xl font-bold text-consulting-gold">
                      +{testimonial.results.revenueIncrease}
                    </div>
                    <p className="text-xs text-consulting-gray">Rentabilidad</p>
                  </div>
                )}
                {testimonial.results.timeframe && (
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      {testimonial.results.timeframe}
                    </div>
                    <p className="text-xs text-consulting-gray">Tiempo</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sección de confianza */}
        <div className="bg-consulting-navy text-white rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">¿Por Qué Confiar en Estos Testimonios?</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Cada resultado está documentado y verificado. No compartimos testimonios sin consentimiento explícito y datos reales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-consulting-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Resultados Verificables</h4>
              <p className="text-sm opacity-75">
                Cada caso incluye métricas específicas: horas reducidas, rentabilidad aumentada, timeframe exacto
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-consulting-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Empresarios Reales</h4>
              <p className="text-sm opacity-75">
                Nombres, empresas, industrias y países reales. Puedes verificar en LinkedIn
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-consulting-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Diversidad de Casos</h4>
              <p className="text-sm opacity-75">
                40+ industrias, empresas desde 1 hasta 100+ empleados, 22 países en 5 continentes
              </p>
            </div>
          </div>
        </div>

        {/* ACCIÓN 4: CTA UNIFICADO */}
        <div className="bg-gradient-to-br from-consulting-blue to-consulting-blue-light text-white rounded-lg p-10 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Tu Transformación Empieza Aquí
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Los resultados que acabas de leer no son excepciones. Son la norma cuando aplicas el Método P.U.D.E.R. correctamente.
          </p>
          
          <a 
            href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1"
            className="inline-flex items-center px-10 py-5 bg-consulting-gold hover:bg-consulting-gold-light text-consulting-navy font-bold rounded-lg transition-all text-xl mb-6 shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CheckCircle className="mr-3 h-6 w-6" />
            Agenda Tu Sesión Estratégica GRATUITA
          </a>

          <div className="flex items-center justify-center gap-4 text-sm opacity-75 mb-8 flex-wrap">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              45 minutos
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Sin compromiso
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Valor $250 USD
            </span>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-sm mb-4 opacity-75">¿Prefieres hacer una pregunta primero?</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+le%C3%AD+los+testimonios+y+quiero+saber+m%C3%A1s+sobre+el+M%C3%A9todo+P.U.D.E.R.&type=phone_number&app_absent=0"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Conversemos por WhatsApp
            </a>
          </div>
        </div>

        {/* Badge final de credibilidad */}
        <div className="mt-8 text-center">
          <p className="text-sm text-consulting-gray">
            Únete a los <span className="font-bold text-consulting-blue">500+ empresarios</span> que ya transformaron sus vidas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
