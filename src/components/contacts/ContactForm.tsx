
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export interface ContactFormProps {
  ref?: React.Ref<HTMLDivElement>;
}

export const ContactForm: React.FC<ContactFormProps> = React.forwardRef<HTMLDivElement, ContactFormProps>(
  (props, ref) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // В реальном проекте здесь был бы код для отправки формы
      alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    };

    return (
      <div ref={ref} className="bg-white p-8 rounded-lg shadow-md border border-coffee-beige/20">
        <h3 className="text-2xl font-playfair font-semibold mb-6 text-coffee-dark">
          Напишите нам
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            id="name"
            label="Ваше имя"
            type="text"
            placeholder="Иван Иванов"
            required
          />
          
          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="example@mail.ru"
            required
          />
          
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
    );
  }
);

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type, placeholder, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-coffee-dark mb-1">
      {label}
    </label>
    <Input 
      id={id}
      type={type} 
      placeholder={placeholder}
      className="border-coffee-beige/50 focus-visible:ring-coffee-beige"
      required={required}
    />
  </div>
);

ContactForm.displayName = 'ContactForm';
