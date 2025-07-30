
import React, { useState, useEffect, memo, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const toggleVisibility = () => {
      // Throttle scroll events for better performance
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, 100);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  }, [scrollToTop]);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      className="fixed bottom-6 right-6 z-50 bg-brand-red hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
      aria-label="Volver al inicio de la página"
      title="Volver arriba"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
});

export default BackToTop;
