import type { ReactNode } from 'react';

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <main className="w-full min-h-[60vh]">
      {children}
    </main>
  );
}

