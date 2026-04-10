import { useEffect, useRef, useState } from 'react';

type UseInViewOptions = {
  freezeOnceVisible?: boolean;
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number;
};

export function useInView<T extends HTMLElement>({
  freezeOnceVisible = false,
  root = null,
  rootMargin = '0px',
  threshold = 0.2,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return undefined;
    }

    if (freezeOnceVisible && isInView) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root,
        rootMargin,
        threshold,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [freezeOnceVisible, isInView, root, rootMargin, threshold]);

  return [ref, isInView] as const;
}