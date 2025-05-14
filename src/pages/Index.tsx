
import { useEffect } from 'react';
import CoffeeHeader from '@/components/CoffeeHeader';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Функция для анимации элементов при скролле
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-active');
        }
      });
    };

    // Вызвать функцию при загрузке страницы
    animateOnScroll();
    
    // Добавить слушатель события скролла
    window.addEventListener('scroll', animateOnScroll);
    
    // Очистка слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <CoffeeHeader />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
      
      {/* Кнопка "Наверх" */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-coffee-beige text-coffee-dark w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-coffee-peach transition-colors z-10"
        aria-label="Наверх"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Index;
