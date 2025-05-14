
import { useEffect, useRef } from 'react';

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-coffee-cream/20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 
            className="section-heading animate-on-scroll" 
            ref={(el) => (elementsRef.current[0] = el)}
          >
            О нас
          </h2>
          <p 
            className="section-subheading animate-on-scroll" 
            ref={(el) => (elementsRef.current[1] = el)}
          >
            Мы создаем не просто десерты и кофе — мы создаем моменты счастья
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          <div 
            className="animate-on-scroll" 
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80" 
              alt="Интерьер кофейни Сладкий Момент" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div 
              className="animate-on-scroll" 
              ref={(el) => (elementsRef.current[3] = el)}
            >
              <h3 className="text-2xl font-playfair font-semibold mb-3 text-coffee-dark">
                Наша история
              </h3>
              <p className="text-coffee-dark/80">
                "Сладкий Момент" начался с любви к качественному кофе и домашним десертам. В 2015 году
                мы открыли маленькую кофейню с небольшой витриной свежей выпечки. Сегодня мы выросли,
                но наши ценности остались прежними: натуральные ингредиенты, забота о каждой детали и
                атмосфера, в которой хочется задержаться.
              </p>
            </div>
            
            <div 
              className="animate-on-scroll" 
              ref={(el) => (elementsRef.current[4] = el)}
            >
              <h3 className="text-2xl font-playfair font-semibold mb-3 text-coffee-dark">
                Наши ценности
              </h3>
              <ul className="space-y-3 text-coffee-dark/80">
                <li className="flex items-start gap-2">
                  <span className="text-coffee-beige">✓</span>
                  <span><strong>Натуральные ингредиенты</strong> — никаких искусственных добавок и консервантов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coffee-beige">✓</span>
                  <span><strong>Авторские рецепты</strong> — уникальные вкусы, созданные нашими шеф-кондитерами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coffee-beige">✓</span>
                  <span><strong>Атмосфера уюта</strong> — место, где можно отдохнуть от городской суеты</span>
                </li>
              </ul>
            </div>

            <div 
              className="animate-on-scroll" 
              ref={(el) => (elementsRef.current[5] = el)}
            >
              <div className="p-5 bg-white rounded-lg shadow-md border border-coffee-beige/20">
                <div className="flex gap-4 items-center">
                  <div className="min-w-12 h-12 rounded-full bg-coffee-beige flex items-center justify-center text-coffee-dark">
                    <span className="text-xl font-playfair font-bold">10K+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Десертов приготовлено</h4>
                    <p className="text-sm text-coffee-dark/70">И каждый с любовью и вниманием к деталям</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
