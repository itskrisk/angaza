'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { counterEase } from '@/lib/motion';
import { cn } from '@/lib/cn';

type CounterProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  label?: string;
};

export function Counter({ value, decimals = 0, suffix = '', className, label }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const reducedMotion = useReducedMotion();
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (reducedMotion) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    const duration = 1100;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(value * counterEase(progress));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(tick);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationRef.current = requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [reducedMotion, value]);

  const formattedValue = new Intl.NumberFormat('en-KE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(displayValue);

  return (
    <span aria-label={label ? `${label}: ${formattedValue}${suffix}` : undefined} className={cn('number-display', className)} ref={elementRef}>
      {formattedValue}
      {suffix}
    </span>
  );
}
