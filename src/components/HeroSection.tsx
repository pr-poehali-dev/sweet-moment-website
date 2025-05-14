
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507914997-0cd4e2a0c6b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-coffee-dark/30"></div>
      </div>

      {/* Content */}
      <div className="container px-6 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-6 drop-shadow-md">
          Сладкий Момент
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md">
          Свежая выпечка и ароматный кофе каждый день
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            className="cafe-btn-primary bg-coffee-beige text-coffee-dark"
            onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})}
          >
            Наше меню
          </Button>
          <Button 
            className="cafe-btn-secondary border-white text-white hover:bg-white/20 hover:border-white"
            onClick={() => document.getElementById('contacts')?.scrollIntoView({behavior: 'smooth'})}
          >
            Забронировать столик
          </Button>
        </div>
      </div>

      {/* Hours and Address */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col md:flex-row items-center justify-center gap-6 text-white text-sm md:text-base">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-coffee-beige/60 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </span>
          <span>Пн-Пт: 8:00-22:00, Сб-Вс: 9:00-23:00</span>
        </div>
        <div className="h-4 border-r border-white/40 hidden md:block"></div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-coffee-beige/60 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </span>
          <span>ул. Кофейная, 42, Москва</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
