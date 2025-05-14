
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isSeasonal?: boolean;
}

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("coffee");
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const menuItems: Record<string, MenuItem[]> = {
    coffee: [
      {
        id: 1,
        name: "Капучино",
        description: "Эспрессо с пышной молочной пенкой",
        price: 180,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        id: 2,
        name: "Латте с корицей",
        description: "Нежный кофейный напиток с корицей и ванилью",
        price: 220,
        image: "https://images.unsplash.com/photo-1588485256313-db5ea79cced7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        isSeasonal: true,
      },
      {
        id: 3,
        name: "Флэт Уайт",
        description: "Двойной эспрессо с минимальным количеством молока",
        price: 200,
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      },
    ],
    desserts: [
      {
        id: 4,
        name: "Тирамису",
        description: "Классический итальянский десерт с кофейной пропиткой",
        price: 320,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      },
      {
        id: 5,
        name: "Чизкейк",
        description: "Нежный чизкейк с ягодным соусом",
        price: 350,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
        isGlutenFree: true,
      },
      {
        id: 6,
        name: "Морковный торт",
        description: "Ароматный морковный торт с кремом из маскарпоне",
        price: 280,
        image: "https://images.unsplash.com/photo-1594054127768-da494548148d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        isVegan: true,
      },
    ],
    bakery: [
      {
        id: 7,
        name: "Круассан",
        description: "Хрустящий масляный круассан из слоеного теста",
        price: 150,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      },
      {
        id: 8,
        name: "Синнабон",
        description: "Булочка с корицей и сливочной глазурью",
        price: 220,
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
        isSeasonal: true,
      },
      {
        id: 9,
        name: "Киш лорен",
        description: "Открытый пирог с начинкой из яиц, сливок и грибов",
        price: 270,
        image: "https://images.unsplash.com/photo-1623246123320-0d6636755796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  };

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
    <section id="menu" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 
            className="section-heading animate-on-scroll" 
            ref={(el) => (elementsRef.current[0] = el)}
          >
            Наше меню
          </h2>
          <p 
            className="section-subheading animate-on-scroll" 
            ref={(el) => (elementsRef.current[1] = el)}
          >
            Попробуйте наши фирменные блюда, приготовленные с любовью и вниманием к деталям
          </p>
        </div>

        <Tabs 
          defaultValue="coffee" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="animate-on-scroll" 
          ref={(el) => (elementsRef.current[2] = el)}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-coffee-cream/30">
              <TabsTrigger value="coffee" className="data-[state=active]:bg-coffee-beige">Кофе</TabsTrigger>
              <TabsTrigger value="desserts" className="data-[state=active]:bg-coffee-beige">Десерты</TabsTrigger>
              <TabsTrigger value="bakery" className="data-[state=active]:bg-coffee-beige">Выпечка</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(menuItems).map((category) => (
            <TabsContent key={category} value={category} className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems[category].map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-coffee-beige/20 hover:shadow-xl transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-playfair font-semibold text-coffee-dark">{item.name}</h3>
                        <span className="text-lg font-medium text-coffee-dark">{item.price} ₽</span>
                      </div>
                      <p className="text-coffee-dark/70 mt-2 text-sm">{item.description}</p>
                      <div className="mt-4 flex gap-2">
                        {item.isVegan && (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Веган</Badge>
                        )}
                        {item.isGlutenFree && (
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Без глютена</Badge>
                        )}
                        {item.isSeasonal && (
                          <Badge className="bg-coffee-peach text-coffee-dark hover:bg-coffee-peach/80">Сезонное</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <Button className="cafe-btn-primary">
            Смотреть полное меню
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
