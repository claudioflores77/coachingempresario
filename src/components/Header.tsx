
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
            {/* Logo Image */}
            <img 
              src="/lovable-uploads/135f3f99-d5f9-4f4d-8213-675e650f3f18.png" 
              alt="Claudio Flores Logo"
              className="h-10 mr-3"
            />
            <div>
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-brand-black' : 'text-white'}`}>
                Claudio Flores
              </h1>
              <span className={`ml-2 text-sm ${isScrolled ? 'text-brand-red' : 'text-brand-red'}`}>
                Consultoría Estratégica Empresarial
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#metodo" 
                className={`font-medium hover:text-brand-red transition-all ${
                  isScrolled ? 'text-brand-black' : 'text-white'
                }`}
              >
                El Método
              </a>
            </li>
            <li>
              <a 
                href="#servicios" 
                className={`font-medium hover:text-brand-red transition-all ${
                  isScrolled ? 'text-brand-black' : 'text-white'
                }`}
              >
                Servicios
              </a>
            </li>
            <li>
              <a 
                href="#resultados" 
                className={`font-medium hover:text-brand-red transition-all ${
                  isScrolled ? 'text-brand-black' : 'text-white'
                }`}
              >
                Resultados
              </a>
            </li>
            <li>
              <a 
                href="#testimonios" 
                className={`font-medium hover:text-brand-red transition-all ${
                  isScrolled ? 'text-brand-black' : 'text-white'
                }`}
              >
                Testimonios
              </a>
            </li>
          </ul>
          <a 
            href="https://bit.ly/1SESIONLN" 
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary ${!isScrolled && 'bg-white text-brand-black hover:bg-brand-red hover:text-white'}`}
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
            <X className={`h-6 w-6 ${isScrolled ? 'text-brand-black' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-brand-black' : 'text-white'}`} />
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
                className="block font-medium text-brand-black hover:text-brand-red"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                El Método
              </a>
            </li>
            <li>
              <a 
                href="#servicios" 
                className="block font-medium text-brand-black hover:text-brand-red"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </a>
            </li>
            <li>
              <a 
                href="#resultados" 
                className="block font-medium text-brand-black hover:text-brand-red"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resultados
              </a>
            </li>
            <li>
              <a 
                href="#testimonios" 
                className="block font-medium text-brand-black hover:text-brand-red"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonios
              </a>
            </li>
            <li>
              <a 
                href="https://bit.ly/1SESIONLN" 
                className="btn-primary block text-center"
                target="_blank"
                rel="noopener noreferrer"
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
