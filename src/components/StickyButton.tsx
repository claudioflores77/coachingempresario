import React, { useState, useEffect, memo } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { trackCTA } from '../utils/analytics';

interface StickyButtonProps {
  ctaUrl?: string;
  ctaText?: string;
  showAfterScroll?: number;
}

const StickyButton: React.FC<StickyButtonProps> = memo(({ 
  ctaUrl = "https://coachingempresario.lovable.app/",
  ctaText = "Agendar Diagnóstico Gratis",
  showAfterScroll = 400
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar botón después de hacer scroll
      if (window.pageYOffset > showAfterScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Agregar listener con throttle para mejor performance
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check inicial
    toggleVisibility();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showAfterScroll]);

  const handleClick = () => {
    trackCTA('Sticky Button Mobile', 'Sticky Bottom Bar');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Sticky Button - Solo visible en Mobile/Tablet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden animate-slide-up">
        {/* Sombra superior para separar del contenido */}
        <div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
        
        {/* Barra principal */}
        <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-800 shadow-2xl">
          <div className="container mx-auto px-4 py-3">
            
            {/* Contenido de la barra */}
            <div className="flex items-center gap-3">
              
              {/* Info compacta (opcional, se puede ocultar en pantallas muy pequeñas) */}
              <div className="hidden xs:flex flex-col justify-center min-w-0 flex-shrink">
                <p className="text-xs text-white/90 font-semibold truncate">
                  Primera Sesión GRATIS
                </p>
                <p className="text-[10px] text-white/60 truncate">
                  Valor $250 USD
                </p>
              </div>

              {/* Botón CTA - Full width en pantallas pequeñas */}
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="flex-1 flex items-center justify-center gap-2 bg-brand-yellow hover:bg-yellow-500 text-brand-black font-bold py-3.5 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm md:text-base truncate">{ctaText}</span>
              </a>

            </div>

            {/* Mini garantías debajo (muy compactas) */}
            <div className="flex items-center justify-center gap-3 mt-2 text-[10px] text-white/60">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-2.5 w-2.5 text-brand-yellow" />
                3 min
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-2.5 w-2.5 text-brand-yellow" />
                Sin compromiso
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-2.5 w-2.5 text-brand-yellow" />
                Gratis
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Spacer para evitar que el contenido quede debajo del sticky */}
      <div className="h-24 lg:hidden"></div>
    </>
  );
});

StickyButton.displayName = 'StickyButton';

export default StickyButton;
