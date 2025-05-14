
import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

/**
 * Хук для отслеживания пересечения элементов с областью видимости
 * и автоматического добавления класса анимации
 */
export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  enabled = true
}: UseIntersectionObserverProps = {}) {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
          }
        });
      },
      { threshold, rootMargin }
    );

    const elements = elementsRef.current.filter(Boolean) as HTMLElement[];
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin, enabled]);

  return { elementsRef };
}
