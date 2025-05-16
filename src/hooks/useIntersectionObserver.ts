
import { useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}) {
  const observerRef = useRef<HTMLElement | null>(null);
  const frozen = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('animate-active');
            
            if (freezeOnceVisible) {
              frozen.current = true;
              observer.unobserve(target);
            }
          } else if (!freezeOnceVisible && !frozen.current) {
            const target = entry.target as HTMLElement;
            target.classList.remove('animate-active');
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, freezeOnceVisible]);

  return observerRef;
}

export default useIntersectionObserver;
