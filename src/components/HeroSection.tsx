import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

// Массив изображений для слайдера
const slideImages = [
  "https://images.unsplash.com/photo-1507914997-0cd4e2a0c6b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  // Добавляем фото "латте с корицей"
  "https://images.unsplash.com/photo-1572286258217-215cf8e667b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
];

const HeroSection = () => {
  // Состояние для отслеживания текущего слайда
  const [currentSlide, setCurrentSlide] = useState(0);
  // Состояние для отслеживания предыдущего слайда (для анимации)
  const [prevSlide, setPrevSlide] = useState(0);
  // Состояние для отслеживания активности перехода
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Функция смены слайда
  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);

    // Сбросить состояние перехода после анимации
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Подстроено под длительность transition в CSS
  }, [currentSlide, isTransitioning]);

  // Автоматическая смена слайдов каждые 5 секунд
  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000);
    return () => clearInterval(timer);
  }, [goToNextSlide]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Слайдер изображений */}
      {slideImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out
            ${currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"}
            ${prevSlide === index && isTransitioning ? "opacity-0 z-5" : ""}
          `}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        >
          <div className="absolute inset-0 bg-coffee-dark/30"></div>
        </div>
      ))}

      {/* Индикаторы слайдов */}
      <div className="absolute bottom-32 left-0 right-0 z-20 flex justify-center gap-2">
        {slideImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${currentSlide === index ? "bg-coffee-beige w-4" : "bg-white/40"}
            `}
            onClick={() => {
              if (isTransitioning) return;
              setPrevSlide(currentSlide);
              setCurrentSlide(index);
              setIsTransitioning(true);
              setTimeout(() => setIsTransitioning(false), 1000);
            }}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>

      {/* Контент */}
      <div className="container px-6 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-6 drop-shadow-md">
          Сладкий Момент
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md">
          Свежая выпечка и ароматный кофе каждый день
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="cafe-btn-primary bg-coffee-beige text-coffee-dark hover:bg-coffee-peach"
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Наше меню
          </Button>
          <Button
            className="cafe-btn-secondary border-2 border-white text-white hover:bg-white/20 hover:border-white"
            onClick={() =>
              document
                .getElementById("contacts")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Забронировать столик
          </Button>
        </div>
      </div>

      {/* Hours and Address */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col md:flex-row items-center justify-center gap-6 text-white text-sm md:text-base z-20">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-coffee-beige/60 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </span>
          <span>Пн-Пт: 8:00-22:00, Сб-Вс: 9:00-23:00</span>
        </div>
        <div className="h-4 border-r border-white/40 hidden md:block"></div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-coffee-beige/60 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
