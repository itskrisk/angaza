'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function StickyDonate() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) / bounds.width;
    const y = (event.clientY - bounds.top - bounds.height / 2) / bounds.height;
    ref.current.style.transform = `translate3d(${x * 8}px, ${y * 6}px, 0)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <div
      ref={ref}
      className="transition-transform duration-500 ease-engineered will-change-transform"
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
    >
      <Button href="/donate" variant="accent">
        Complete donation <span aria-hidden="true">→</span>
      </Button>
    </div>
  );
}
