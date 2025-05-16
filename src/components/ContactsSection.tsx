import { useRef } from "react";
import ContactForm from "@/components/contacts/ContactForm";
import ContactInfo from "@/components/contacts/ContactInfo";
import GoogleMap from "@/components/contacts/GoogleMap";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

/**
 * Секция с контактной информацией, формой и картой
 */
const ContactsSection = () => {
  // Refs для анимации при скролле
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Применяем хук для анимации элементов при скролле
  useIntersectionObserver({
    target: [sectionRef, headingRef, subheadingRef, formRef, infoRef, mapRef],
    threshold: 0.1,
  });

  return (
    <section
      id="contacts"
      className="py-20 bg-coffee-cream/10"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="section-heading animate-on-scroll" ref={headingRef}>
            Контакты
          </h2>
          <p
            className="section-subheading animate-on-scroll"
            ref={subheadingRef}
          >
            Мы всегда рады видеть вас в нашей кофейне или ответить на ваши
            вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-1 animate-on-scroll" ref={infoRef}>
            <ContactInfo />
          </div>

          <div className="lg:col-span-1 animate-on-scroll" ref={formRef}>
            <ContactForm />
          </div>

          <div
            className="lg:col-span-1 h-full min-h-[300px] animate-on-scroll"
            ref={mapRef}
          >
            <GoogleMap height="100%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
