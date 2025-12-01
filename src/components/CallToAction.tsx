import React from 'react';
import { Calendar, ArrowRight, Clock, Check, MessageSquare, CheckCircle, AlertTriangle } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="contacto" className="section gradient-bg">
      <div className="container">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <span className="inline-block py-1 px-3 bg-brand-red text-white text-sm font-semibold rounded-full mb-4">
                ¡ÚLTIMO PASO!
              </span>
              <h2 className="text-3xl font-bold mb-4">¿Listo para Recuperar Tu Vida Personal?</h2>
              <p className="text-lg text-consulting-gray mb-6">
                No elijas entre tu negocio y tu vida. Con el Método P.U.D.E.R. tienes ambos.<br />
                <span className="font-bold text-brand-red">Sesión Estratégica 100% GRATUITA</span> - Sin compromisos.
              </p>
              
              <div className="mb-8 bg-gray-50 p-6 rounded-lg border-l-4 border-brand-red">
                <h3 className="text-xl font-bold mb-4">Sesión Estratégica de 45 Minutos:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-3 mt-0.5">
                      <Clock className="h-3 w-3" />
                    </div>
                    <p><span className="font-semibold">Análisis de tu situación actual</span> e identificación de obstáculos críticos</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <p><span className="font-semibold">Plan inicial personalizado</span> para implementar inmediatamente</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-red text-white flex items-center justify-center mr-3 mt-0.5">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <p><span className="font-semibold">Pasos siguientes</span> para crear un negocio que funcione sin ti</p>
                  </li>
                </ul>

                <div className="mt-6 text-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-sm flex items-center justify-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    Disponibilidad limitada: Solo 5 sesiones gratuitas esta semana
                  </p>
                </div>
              </div>
              
              {/* ACCIÓN 4: CTA UNIFICADO */}
              <a 
                href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center animate-pulse w-full"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Agenda Tu Sesión Estratégica GRATUITA
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mt-3 flex-wrap">
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
            </div>
            
            <div className="md:w-1/2 bg-consulting-blue-light p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Conéctate con Claudio Flores</h3>
              
              <div className="space-y-6">
                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/dfb8fb00-5dee-4b16-9bac-410b330236fb.png" 
                    alt="Claudio Flores" 
                    className="w-24 h-24 mx-auto rounded-full border-4 border-white mb-4 object-cover"
                  />
                  <p className="text-center italic">
                    "Mi misión es ayudar a empresarios como tú a construir negocios que funcionen sin su presencia constante, permitiéndoles recuperar su tiempo y disfrutar de la vida que merecen."
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Perfiles Profesionales</h4>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="https://www.linkedin.com/in/claudioflores-coach/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-consulting-gold-light transition-all"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        Perfil personal en LinkedIn
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.linkedin.com/company/habilidadparaelexito" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-consulting-gold-light transition-all"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        Perfil de empresa en LinkedIn
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://g.co/kgs/GKnvus3" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-consulting-gold-light transition-all"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google Business Profile
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Redes Sociales</h4>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="https://www.instagram.com/coachdeempresariosvip/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-consulting-gold-light transition-all"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.facebook.com/habilidadparaelexito/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-consulting-gold-light transition-all"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.tiktok.com/@claudioflores_coach" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-consulting-gold-light transition-all"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                        TikTok
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.youtube.com/@claudioflorescoach" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-consulting-gold-light transition-all"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-white/20">
                  <a 
                    href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-consulting-gold-light hover:text-white transition-all font-bold flex items-center"
                  >
                    Agendar Sesión Estratégica 1a1 (¡Gratis!)
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="mt-6">
                  <a 
                    href="https://api.whatsapp.com/send/?phone=5493624236611&text=Hola%2C+quiero+hacer+una+pregunta+&type=phone_number&app_absent=0"
                    className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all w-full justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Pregúntanos ahora por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
