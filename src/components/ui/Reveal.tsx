'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';

export function Reveal({
  as: Tag = 'div',
  children,
  className,
  delay = 0,
}: {
  as?: 'div' | 'section' | 'figure' | 'article';
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If reduced motion is preferred, show immediately
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('is-visible');
      return;
    }

    const timer = window.setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Tag ref={ref as never} className={cn('reveal', className)}>
      {children}
    </Tag>
  );
}
