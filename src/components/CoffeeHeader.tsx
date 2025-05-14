
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const CoffeeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-playfair font-bold text-coffee-dark">
          Сладкий Момент
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-coffee-dark hover:text-coffee-beige transition-colors">
            О нас
          </a>
          <a href="#menu" className="text-coffee-dark hover:text-coffee-beige transition-colors">
            Меню
          </a>
          <a href="#gallery" className="text-coffee-dark hover:text-coffee-beige transition-colors">
            Галерея
          </a>
          <a href="#reviews" className="text-coffee-dark hover:text-coffee-beige transition-colors">
            Отзывы
          </a>
          <a href="#contacts" className="text-coffee-dark hover:text-coffee-beige transition-colors">
            Контакты
          </a>
          <Button className="cafe-btn-primary">
            Забронировать
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-coffee-dark"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 shadow-md animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-coffee-dark py-2 border-b border-coffee-cream"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#menu" 
              className="text-coffee-dark py-2 border-b border-coffee-cream"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Меню
            </a>
            <a 
              href="#gallery" 
              className="text-coffee-dark py-2 border-b border-coffee-cream"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Галерея
            </a>
            <a 
              href="#reviews" 
              className="text-coffee-dark py-2 border-b border-coffee-cream"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#contacts" 
              className="text-coffee-dark py-2 border-b border-coffee-cream"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button 
              className="cafe-btn-primary mt-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Забронировать
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default CoffeeHeader;
