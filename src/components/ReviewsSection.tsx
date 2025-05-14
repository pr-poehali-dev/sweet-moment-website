
import { useEffect, useRef, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Анна Петрова",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Лучшие круассаны в городе! Каждый раз, когда я захожу сюда, меня встречает аромат свежей выпечки и кофе. Персонал всегда приветливый, а интерьер создает уютную атмосферу.",
    date: "15 марта 2024"
  },
  {
    id: 2,
    name: "Сергей Иванов",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "Отличное место для встреч и работы. Wi-Fi быстрый, кофе вкусный, а десерты просто потрясающие. Немного шумно в час пик, но это единственный минус.",
    date: "2 апреля 2024"
  },
  {
    id: 3,
    name: "Екатерина Смирнова",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    rating: 5,
    text: "Я большой фанат их сезонных десертов! Каждый раз пробую что-то новое и ни разу не разочаровалась. Особенно рекомендую грушевый пирог с корицей — это что-то невероятное!",
    date: "19 апреля 2024"
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "Регулярно захожу сюда на завтрак перед работой. Авокадо-тост с яйцом пашот — идеальное начало дня. Плюс их фирменный кофе бодрит лучше любого другого!",
    date: "5 мая 2024"
  },
];

const ReviewsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));

    return () => {
      elementsRef.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section id="reviews" className="py-20 bg-coffee-cream/10" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 
            className="section-heading animate-on-scroll" 
            ref={(el) => (elementsRef.current[0] = el)}
          >
            Отзывы посетителей
          </h2>
          <p 
            className="section-subheading animate-on-scroll" 
            ref={(el) => (elementsRef.current[1] = el)}
          >
            Нам важно ваше мнение — оно помогает нам становиться лучше каждый день
          </p>
        </div>

        <div 
          className="animate-on-scroll mt-12" 
          ref={(el) => (elementsRef.current[2] = el)}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-coffee-beige/20 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-coffee-dark">{review.name}</h3>
                        <div className="flex items-center gap-1 text-coffee-beige">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              name={i < review.rating ? "Star" : "StarOff"} 
                              size={16} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-coffee-dark/80 mb-4 flex-grow">{review.text}</p>
                    <div className="text-sm text-coffee-dark/60 mt-auto">
                      {review.date}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static translate-y-0 bg-white border-coffee-beige/40 hover:bg-coffee-beige/20" />
              <CarouselNext className="static translate-y-0 bg-white border-coffee-beige/40 hover:bg-coffee-beige/20" />
            </div>
          </Carousel>
        </div>

        <div 
          className="bg-coffee-peach/30 rounded-xl p-8 mt-16 text-center animate-on-scroll"
          ref={(el) => (elementsRef.current[3] = el)}
        >
          <h3 className="text-2xl font-playfair font-semibold mb-3 text-coffee-dark">
            Сладкие достижения
          </h3>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-coffee-dark mb-2">10,547+</div>
              <div className="text-coffee-dark/70">Десертов приготовлено</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-coffee-dark mb-2">23</div>
              <div className="text-coffee-dark/70">Вида авторских десертов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-coffee-dark mb-2">4.9</div>
              <div className="text-coffee-dark/70">Средняя оценка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-playfair font-bold text-coffee-dark mb-2">7,200+</div>
              <div className="text-coffee-dark/70">Счастливых клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
