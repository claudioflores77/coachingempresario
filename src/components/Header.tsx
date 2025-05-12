
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div>
          <a href="/" className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-consulting-navy' : 'text-white'}`}>
              Claudio Flores
            </h1>
            <span className={`ml-2 text-sm ${isScrolled ? 'text-consulting-gold' : 'text-consulting-gold-light'}`}>
              Consultoría Estratégica
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#metodo" 
                className={`font-medium hover:text-consulting-gold transition-all ${
                  isScrolled ? 'text-consulting-navy' : 'text-white'
                }`}
              >
                El Método
              </a>
            </li>
            <li>
              <a 
                href="#servicios" 
                className={`font-medium hover:text-consulting-gold transition-all ${
                  isScrolled ? 'text-consulting-navy' : 'text-white'
                }`}
              >
                Servicios
              </a>
            </li>
            <li>
              <a 
                href="#resultados" 
                className={`font-medium hover:text-consulting-gold transition-all ${
                  isScrolled ? 'text-consulting-navy' : 'text-white'
                }`}
              >
                Resultados
              </a>
            </li>
            <li>
              <a 
                href="#testimonios" 
                className={`font-medium hover:text-consulting-gold transition-all ${
                  isScrolled ? 'text-consulting-navy' : 'text-white'
                }`}
              >
                Testimonios
              </a>
            </li>
          </ul>
          <a 
            href="#contacto" 
            className={`btn-primary ${!isScrolled && 'bg-white text-consulting-navy hover:bg-consulting-gold hover:text-white'}`}
          >
            Agendar Sesión
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-consulting-navy' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-consulting-navy' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <ul className="container py-4 space-y-4">
            <li>
              <a 
                href="#metodo" 
                className="block font-medium text-consulting-navy hover:text-consulting-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                El Método
              </a>
            </li>
            <li>
              <a 
                href="#servicios" 
                className="block font-medium text-consulting-navy hover:text-consulting-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </a>
            </li>
            <li>
              <a 
                href="#resultados" 
                className="block font-medium text-consulting-navy hover:text-consulting-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resultados
              </a>
            </li>
            <li>
              <a 
                href="#testimonios" 
                className="block font-medium text-consulting-navy hover:text-consulting-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonios
              </a>
            </li>
            <li>
              <a 
                href="#contacto" 
                className="btn-primary block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar Sesión
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
