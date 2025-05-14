import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ContactInfo } from "@/components/contacts/ContactInfo";
import { ContactForm } from "@/components/contacts/ContactForm";
import { GoogleMap } from "@/components/contacts/GoogleMap";

const ContactsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { elementsRef } = useIntersectionObserver();

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
            Мы всегда рады видеть вас в нашей кофейне или ответить на ваши
            вопросы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <ContactInfo ref={(el) => (elementsRef.current[2] = el)} />

          <ContactForm ref={(el) => (elementsRef.current[3] = el)} />
        </div>

        <div className="mt-12 animate-on-scroll">
          <GoogleMap
            ref={(el) => (elementsRef.current[4] = el)}
            height="400px"
            address="Арбатская площадь, Москва"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
