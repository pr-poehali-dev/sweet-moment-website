
import Icon from '@/components/ui/icon';

const socialLinks = [
  {
    name: 'Instagram',
    icon: 'Instagram',
    url: 'https://instagram.com',
    color: 'hover:text-pink-600'
  },
  {
    name: 'Facebook',
    icon: 'Facebook',
    url: 'https://facebook.com',
    color: 'hover:text-blue-600'
  },
  {
    name: 'Mail',
    icon: 'Mail',
    url: 'mailto:info@sweetmoment.ru',
    color: 'hover:text-red-500'
  },
  {
    name: 'Phone',
    icon: 'Phone',
    url: 'tel:+74951234567',
    color: 'hover:text-green-600'
  }
];

const contactDetails = [
  {
    icon: 'MapPin',
    title: 'Адрес',
    details: [
      'ул. Кофейная, 42',
      'Москва, 123456',
      'Россия'
    ]
  },
  {
    icon: 'Clock',
    title: 'Часы работы',
    details: [
      'Понедельник - Пятница: 8:00 - 22:00',
      'Суббота - Воскресенье: 9:00 - 23:00'
    ]
  },
  {
    icon: 'Phone',
    title: 'Контакты',
    details: [
      'Телефон: +7 (495) 123-45-67',
      'Email: info@sweetmoment.ru'
    ]
  }
];

/**
 * Компонент с контактной информацией
 */
const ContactInfo = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-playfair font-semibold mb-6 text-coffee-dark">
        Контактная информация
      </h3>
      
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-coffee-beige flex items-center justify-center text-coffee-dark">
              <Icon name={item.icon} size={20} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-coffee-dark">{item.title}</h4>
              <div className="mt-1 space-y-1">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-coffee-dark/80">{detail}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-medium text-coffee-dark mb-3">Следите за нами</h4>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`h-10 w-10 rounded-full bg-coffee-beige flex items-center justify-center text-coffee-dark transition-colors ${social.color}`}
              aria-label={social.name}
            >
              <Icon name={social.icon} size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
