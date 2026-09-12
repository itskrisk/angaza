export const motion = {
  ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
  duration: 600,
  revealDistance: 20,
  pageDistance: 8,
} as const;

export const counterEase = (progress: number) => {
  const clamped = Math.min(Math.max(progress, 0), 1);
  return 1 - Math.pow(1 - clamped, 4);
};
