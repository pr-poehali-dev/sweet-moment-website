
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">Сладкий Момент</h3>
            <p className="text-white/70 mb-4">
              Место, где каждый десерт — это маленькое произведение искусства, а каждая чашка кофе — момент наслаждения.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-coffee-beige hover:text-coffee-dark transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-coffee-beige hover:text-coffee-dark transition-colors"
                aria-label="Facebook"
              >
                <Icon name="Facebook" size={18} />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-coffee-beige hover:text-coffee-dark transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-coffee-beige" />
                <span>ул. Кофейная, 42, Москва</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-coffee-beige" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-coffee-beige" />
                <span>info@sladkiy-moment.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-coffee-beige" />
                <span>Пн-Пт: 8:00-22:00, Сб-Вс: 9:00-23:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-4">Меню</h4>
            <div className="grid grid-cols-2">
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-coffee-beige transition-colors">Кофе</a>
                </li>
                <li>
                  <a href="#" className="hover:text-coffee-beige transition-colors">Чай</a>
                </li>
                <li>
                  <a href="#" className="hover:text-coffee-beige transition-colors">Десерты</a>
                </li>
                <li>
                  <a href="#" className="hover:text-coffee-beige transition-colors">Выпечка</a>
                </li>
              </ul>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-coffee-beige transition-colors">Завтраки</a>
                </li>
                <li>
                  <a href="#" className="hover:text-coffee-beige transition-colors">Сезонное меню</a>
                </li>
                <li>
                  <a href="#" className="hover:text-coffee-beige transition-colors">Веганские опции</a>
                </li>
                <li>
                  <a href="#" className="hover:text-coffee-beige transition-colors">Без глютена</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} "Сладкий Момент". Все права защищены.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0 text-white/70 text-sm">
            <a href="#" className="hover:text-coffee-beige transition-colors">Политика конфиденциальности</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-coffee-beige transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
