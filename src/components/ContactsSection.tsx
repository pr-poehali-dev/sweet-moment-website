
import { useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь был бы код для отправки формы
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <section id="contacts" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 
            className="section-heading animate-on-scroll" 
            ref={(el) => (elementsRef.current[0] = el)}
          >
            Контакты
          </h2>
          <p 
            className="section-subheading animate-on-scroll" 
            ref={(el) => (elementsRef.current[1] = el)}
          >
            Мы всегда рады видеть вас в нашей кофейне или ответить на ваши вопросы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div 
            className="animate-on-scroll" 
            ref={(el) => (elementsRef.current[2] = el)}
          >
            <div className="bg-coffee-cream/20 p-8 rounded-lg">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-coffee-dark">
                Наши контакты
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coffee-beige flex items-center justify-center shrink-0 text-coffee-dark">
                    <Icon name="MapPin" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-coffee-dark">Адрес</h4>
                    <p className="text-coffee-dark/70">ул. Кофейная, 42, Москва</p>
                    <p className="text-coffee-dark/70">ст. метро "Арбатская"</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coffee-beige flex items-center justify-center shrink-0 text-coffee-dark">
                    <Icon name="Clock" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-coffee-dark">Время работы</h4>
                    <p className="text-coffee-dark/70">Пн-Пт: 8:00-22:00</p>
                    <p className="text-coffee-dark/70">Сб-Вс: 9:00-23:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coffee-beige flex items-center justify-center shrink-0 text-coffee-dark">
                    <Icon name="Phone" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-coffee-dark">Телефон</h4>
                    <p className="text-coffee-dark/70">+7 (999) 123-45-67</p>
                    <p className="text-coffee-dark/70">Для бронирования столиков и заказов</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-coffee-beige flex items-center justify-center shrink-0 text-coffee-dark">
                    <Icon name="Mail" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-coffee-dark">Email</h4>
                    <p className="text-coffee-dark/70">info@sladkiy-moment.ru</p>
                    <p className="text-coffee-dark/70">Для вопросов и предложений</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-coffee-dark mb-3">Мы в социальных сетях</h4>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-coffee-beige flex items-center justify-center text-coffee-dark hover:bg-coffee-peach transition-colors"
                    aria-label="Instagram"
                  >
                    <Icon name="Instagram" size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-coffee-beige flex items-center justify-center text-coffee-dark hover:bg-coffee-peach transition-colors"
                    aria-label="Facebook"
                  >
                    <Icon name="Facebook" size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-coffee-beige flex items-center justify-center text-coffee-dark hover:bg-coffee-peach transition-colors"
                    aria-label="Telegram"
                  >
                    <Icon name="Send" size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="animate-on-scroll" 
            ref={(el) => (elementsRef.current[3] = el)}
          >
            <div className="bg-white p-8 rounded-lg shadow-md border border-coffee-beige/20">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-coffee-dark">
                Напишите нам
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-1">
                    Ваше имя
                  </label>
                  <Input 
                    id="name"
                    type="text" 
                    placeholder="Иван Иванов"
                    className="border-coffee-beige/50 focus-visible:ring-coffee-beige"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-1">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="example@mail.ru"
                    className="border-coffee-beige/50 focus-visible:ring-coffee-beige"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-1">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Ваш вопрос или пожелание..."
                    className="border-coffee-beige/50 focus-visible:ring-coffee-beige min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="cafe-btn-primary w-full"
                >
                  Отправить сообщение
                </Button>
                
                <p className="text-sm text-coffee-dark/60 text-center mt-4">
                  Нажимая кнопку "Отправить", вы соглашаетесь с нашей{" "}
                  <a href="#" className="underline hover:text-coffee-dark">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        
        <div 
          className="mt-12 h-[400px] rounded-lg overflow-hidden animate-on-scroll"
          ref={(el) => (elementsRef.current[4] = el)}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.347938666669!2d37.59893857725522!3d55.75198287346215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JDRgNCx0LDRgtGB0LrQsNGPINC_0LsuLCDQnNC-0YHQutCy0LA!5e0!3m2!1sru!2sru!4v1715715609010!5m2!1sru!2sru"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта расположения кофейни Сладкий Момент"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
