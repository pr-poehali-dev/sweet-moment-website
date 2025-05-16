
import { useState, FormEvent, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

/**
 * Компонент формы обратной связи
 */
const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Обработка изменений в полях формы
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очищаем ошибку при изменении поля
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  // Валидация формы
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, введите ваш email';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }
    
    if (formData.phone && !/^\+?[0-9\s\-()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Пожалуйста, введите корректный номер телефона';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, введите ваше сообщение';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Обработка отправки формы
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Имитация отправки данных на сервер
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitSuccess(true);
      
      // Скрываем сообщение об успешной отправке через 3 секунды
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-playfair font-semibold mb-4 text-coffee-dark">
        Связаться с нами
      </h3>
      
      {submitSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
          Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-1">
            Имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.name ? 'border-red-500' : 'border-coffee-beige'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-peach`}
            placeholder="Ваше имя"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.email ? 'border-red-500' : 'border-coffee-beige'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-peach`}
            placeholder="example@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-coffee-dark mb-1">
            Телефон
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.phone ? 'border-red-500' : 'border-coffee-beige'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-peach`}
            placeholder="+7 (___) ___-__-__"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-1">
            Сообщение *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full p-2 border ${
              errors.message ? 'border-red-500' : 'border-coffee-beige'
            } rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-peach`}
            placeholder="Ваше сообщение..."
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full cafe-btn-primary bg-coffee-beige text-coffee-dark hover:bg-coffee-peach"
        >
          {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
