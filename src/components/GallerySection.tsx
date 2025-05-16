
import { useEffect, useRef } from 'react';

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1570654624428-b95756943cd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    alt: "Интерьер кофейни",
    span: "col-span-2 row-span-1"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1662047102608-a6f6e8491d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Приготовление кофе",
    span: "col-span-1 row-span-1"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1565600229844-7c8c98ea3fb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Десерты на витрине",
    span: "col-span-1 row-span-2"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1586195831800-24f14c992cea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
    alt: "Чашка кофе с рисунком",
    span: "col-span-1 row-span-1"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    alt: "Процесс выпечки",
    span: "col-span-1 row-span-1"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1517686668014-1740ede3bd76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    alt: "Уютный уголок кофейни",
    span: "col-span-2 row-span-1"
  },
  // Новые изображения
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1572286258217-215cf8e667b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Латте с корицей",
    span: "col-span-1 row-span-1"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Капучино с узором",
    span: "col-span-1 row-span-1"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Кофейная карта",
    span: "col-span-1 row-span-1"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Завтрак в кафе",
    span: "col-span-2 row-span-1"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Бариста за работой",
    span: "col-span-1 row-span-1"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    alt: "Десерты и выпечка",
    span: "col-span-1 row-span-1"
  },
];

const GallerySection = () => {
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

  const openLightbox = (src: string) => {
    // В реальном проекте здесь была бы логика для открытия лайтбокса
    window.open(src, '_blank');
  };

  // Функция для создания мозаики изображений с равномерным распределением
  const createMosaicLayout = () => {
    // Создаем копию массива изображений для работы
    const workingImages = [...images];
    
    // Группируем изображения для отображения в мозаичном режиме
    // с поддержкой различных размеров ячеек
    const rows = [];
    const itemsPerFullRow = 3; // для desktops
    
    for (let i = 0; i < workingImages.length; i += itemsPerFullRow) {
      const rowImages = workingImages.slice(i, i + itemsPerFullRow);
      rows.push(rowImages);
    }
    
    return rows;
  };

  const mosaicRows = createMosaicLayout();

  return (
    <section id="gallery" className="py-20 bg-coffee-cream/20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 
            className="section-heading animate-on-scroll" 
            ref={(el) => (elementsRef.current[0] = el)}
          >
            Галерея
          </h2>
          <p 
            className="section-subheading animate-on-scroll" 
            ref={(el) => (elementsRef.current[1] = el)}
          >
            Погрузитесь в атмосферу нашей кофейни
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 animate-on-scroll" 
          ref={(el) => (elementsRef.current[2] = el)}
        >
          {images.map((image) => (
            <div 
              key={image.id} 
              className={`overflow-hidden rounded-lg cursor-pointer ${image.span} transition-transform hover:scale-[1.02] duration-300`}
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-700"
                loading="lazy" // Добавляем ленивую загрузку для оптимизации
              />
            </div>
          ))}
        </div>

        <div 
          className="text-center mt-12 animate-on-scroll" 
          ref={(el) => (elementsRef.current[3] = el)}
        >
          <p className="text-coffee-dark/80">
            Следите за нами в <a href="#" className="text-coffee-dark underline hover:text-coffee-beige">Instagram</a>,
            чтобы видеть больше фотографий нашей кофейни и десертов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
