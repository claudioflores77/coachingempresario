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
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <div>
          <a href="#hero" className="flex items-center" onClick={e => handleSmoothScroll(e, 'hero')}>
            {/* Logo Image */}
            <img src="/lovable-uploads/135f3f99-d5f9-4f4d-8213-675e650f3f18.png" alt="Claudio Flores Logo" className="h-10 mr-3" />
            <div>
              <h1 className="text-center text-base font-bold text-slate-100">
                Claudio Flores
              </h1>
              <div className={`text-sm ${isScrolled ? 'text-brand-red' : 'text-brand-red'} flex flex-col text-center`}>
                <span className="font-medium text-center">Consultora Estratégica</span>
                <span>Empresarial</span>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a href="#por-que-conmigo" className={`font-medium hover:text-brand-red transition-all ${isScrolled ? 'text-brand-black' : 'text-white'}`} onClick={e => handleSmoothScroll(e, 'por-que-conmigo')}>
                ¿Por Qué Conmigo?
              </a>
            </li>
            <li>
              <a href="#sobre-metodo" className={`font-medium hover:text-brand-red transition-all ${isScrolled ? 'text-brand-black' : 'text-white'}`} onClick={e => handleSmoothScroll(e, 'sobre-metodo')}>
                El Método
              </a>
            </li>
            <li>
              <a href="#testimonios" className={`font-medium hover:text-brand-red transition-all ${isScrolled ? 'text-brand-black' : 'text-white'}`} onClick={e => handleSmoothScroll(e, 'testimonios')}>
                Testimonios
              </a>
            </li>
            <li>
              <a href="#faq" className={`font-medium hover:text-brand-red transition-all ${isScrolled ? 'text-brand-black' : 'text-white'}`} onClick={e => handleSmoothScroll(e, 'faq')}>
                FAQ
              </a>
            </li>
          </ul>
          <a href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" target="_blank" rel="noopener noreferrer" className={`btn-primary ${!isScrolled && 'bg-white text-brand-black hover:bg-brand-red hover:text-white'}`}>
            Sesión Gratis
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden" aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className={`h-6 w-6 ${isScrolled ? 'text-brand-black' : 'text-white'}`} /> : <Menu className={`h-6 w-6 ${isScrolled ? 'text-brand-black' : 'text-white'}`} />}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <ul className="container py-4 space-y-4">
            <li>
              <a href="#por-que-conmigo" className="block font-medium text-brand-black hover:text-brand-red" onClick={e => handleSmoothScroll(e, 'por-que-conmigo')}>
                ¿Por Qué Conmigo?
              </a>
            </li>
            <li>
              <a href="#sobre-metodo" className="block font-medium text-brand-black hover:text-brand-red" onClick={e => handleSmoothScroll(e, 'sobre-metodo')}>
                El Método
              </a>
            </li>
            <li>
              <a href="#testimonios" className="block font-medium text-brand-black hover:text-brand-red" onClick={e => handleSmoothScroll(e, 'testimonios')}>
                Testimonios
              </a>
            </li>
            <li>
              <a href="#faq" className="block font-medium text-brand-black hover:text-brand-red" onClick={e => handleSmoothScroll(e, 'faq')}>
                FAQ
              </a>
            </li>
            <li>
              <a href="https://estrategiaempresaria.systeme.io/sesionestrategica1a1" className="btn-primary block text-center" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                Sesión Gratis
              </a>
            </li>
          </ul>
        </div>}
    </header>;
};
export default Header;