import React, { useEffect } from 'react';

export const WebMCPInitializer: React.FC = () => {
  useEffect(() => {
    const controller = new AbortController();
    const docWithMcP = document as unknown as {
      modelContext?: {
        registerTool: (
          tool: {
            name: string;
            description: string;
            inputSchema?: object;
            execute: (args: Record<string, unknown>) => Promise<unknown> | unknown;
          },
          options?: { signal?: AbortSignal }
        ) => Promise<unknown>;
      };
    };

    const modelContext = docWithMcP.modelContext || (window as unknown as { modelContext?: typeof docWithMcP.modelContext }).modelContext;

    if (modelContext && typeof modelContext.registerTool === 'function') {
      try {
        modelContext.registerTool(
          {
            name: 'get_puder_method_info',
            description: 'Obtiene información detallada sobre el Método P.U.D.E.R. de Claudio Flores para transformar y automatizar empresas.',
            inputSchema: {
              type: 'object',
              properties: {
                pillar: {
                  type: 'string',
                  description: 'Pilar opcional a consultar: Plan, Unico, Desarrollo, Estandar, Repetir'
                }
              }
            },
            execute: async (args: Record<string, unknown>) => {
              const pillar = args.pillar as string | undefined;
              const puderData = {
                method: 'Método P.U.D.E.R.®',
                author: 'Claudio Flores',
                experience: '17 años de experiencia y más de 270 empresarios ayudados en 17 países.',
                pillars: {
                  Plan: 'Claridad y enfoque estratégico, despejando la confusión operativa.',
                  Único: 'Posicionamiento diferenciado y propuesta de valor única en el mercado.',
                  Desarrollo: 'Sistemas y procesos operativos robustos para funcionar sin dependencia del dueño.',
                  Estándar: 'Estandarización, KPIs y automatización de procesos clave.',
                  Repetir: 'Liderazgo, cultura de alto rendimiento y escalabilidad predecible.'
                },
                expectedResults: 'Reducción de hasta un 50% en horas trabajadas y aumento del 25% al 40% en rentabilidad en 90 días.'
              };
              if (pillar && pillar in puderData.pillars) {
                return {
                  pillar,
                  description: puderData.pillars[pillar as keyof typeof puderData.pillars]
                };
              }
              return puderData;
            }
          },
          { signal: controller.signal }
        );

        modelContext.registerTool(
          {
            name: 'request_strategic_session',
            description: 'Obtiene el enlace directo para agendar la Sesión Estratégica 1a1 GRATUITA de 45 minutos con Claudio Flores.',
            inputSchema: {
              type: 'object',
              properties: {
                name: { type: 'string', description: 'Nombre del usuario' },
                email: { type: 'string', description: 'Email del usuario' }
              }
            },
            execute: async (args: Record<string, unknown>) => {
              const name = args.name as string | undefined;
              const email = args.email as string | undefined;
              return {
                status: 'success',
                bookingUrl: 'https://estrategiaempresaria.systeme.io/sesionestrategica1a1',
                message: `Hola ${name || 'empresario'}, puedes agendar tu sesión estratégica gratuita de 45 minutos (valorada en $250 USD) directamente en el enlace.`,
                emailReceived: email || null
              };
            }
          },
          { signal: controller.signal }
        );

        modelContext.registerTool(
          {
            name: 'get_faqs',
            description: 'Consulta las preguntas frecuentes sobre los servicios de consultoría estratégica y el Método P.U.D.E.R.',
            inputSchema: {
              type: 'object',
              properties: {}
            },
            execute: async () => {
              return [
                {
                  question: '¿En cuánto tiempo voy a ver resultados?',
                  answer: 'Los primeros resultados aparecen en 90 días. A los 6 meses, el promedio de reducción de horas es del 50% con incremento del 40% en rentabilidad.'
                },
                {
                  question: '¿Qué incluye la Sesión Estratégica GRATUITA?',
                  answer: 'Una reunión 1 a 1 de 45 minutos (valor $250 USD) con diagnóstico personalizado de tu empresa y plan de acción inmediato.'
                }
              ];
            }
          },
          { signal: controller.signal }
        );
      } catch (e) {
        console.warn('WebMCP registration error:', e);
      }
    }

    return () => {
      controller.abort();
    };
  }, []);

  return null;
};

export default WebMCPInitializer;
