
import React from 'react';
import Icon from '@/components/ui/icon';

interface ContactItemProps {
  icon: string;
  title: string;
  lines: string[];
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, lines }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-full bg-coffee-beige flex items-center justify-center shrink-0 text-coffee-dark">
      <Icon name={icon} size={18} />
    </div>
    <div>
      <h4 className="font-medium text-coffee-dark">{title}</h4>
      {lines.map((line, index) => (
        <p key={index} className="text-coffee-dark/70">{line}</p>
      ))}
    </div>
  </div>
);

interface SocialLinkProps {
  href: string;
  icon: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-coffee-beige flex items-center justify-center text-coffee-dark hover:bg-coffee-peach transition-colors"
    aria-label={label}
  >
    <Icon name={icon} size={18} />
  </a>
);

export interface ContactInfoProps {
  ref?: React.Ref<HTMLDivElement>;
}

export const ContactInfo: React.FC<ContactInfoProps> = React.forwardRef<HTMLDivElement, ContactInfoProps>(
  (props, ref) => {
    return (
      <div ref={ref} className="bg-coffee-cream/20 p-8 rounded-lg">
        <h3 className="text-2xl font-playfair font-semibold mb-6 text-coffee-dark">
          Наши контакты
        </h3>
        
        <div className="space-y-6">
          <ContactItem 
            icon="MapPin" 
            title="Адрес" 
            lines={[
              "ул. Кофейная, 42, Москва",
              "ст. метро \"Арбатская\""
            ]}
          />
          
          <ContactItem 
            icon="Clock" 
            title="Время работы" 
            lines={[
              "Пн-Пт: 8:00-22:00",
              "Сб-Вс: 9:00-23:00"
            ]}
          />
          
          <ContactItem 
            icon="Phone" 
            title="Телефон" 
            lines={[
              "+7 (999) 123-45-67",
              "Для бронирования столиков и заказов"
            ]}
          />
          
          <ContactItem 
            icon="Mail" 
            title="Email" 
            lines={[
              "info@sladkiy-moment.ru",
              "Для вопросов и предложений"
            ]}
          />
        </div>
        
        <div className="mt-8">
          <h4 className="font-medium text-coffee-dark mb-3">Мы в социальных сетях</h4>
          <div className="flex gap-4">
            <SocialLink href="#" icon="Instagram" label="Instagram" />
            <SocialLink href="#" icon="Facebook" label="Facebook" />
            <SocialLink href="#" icon="Send" label="Telegram" />
          </div>
        </div>
      </div>
    );
  }
);

ContactInfo.displayName = 'ContactInfo';
