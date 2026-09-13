import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        coal: '#1c1c1e',
        paper: '#ffffff',
        mist: '#f5f5f2',
        line: '#e5e5e5',
        signal: '#c2410c',
      },
      maxWidth: {
        site: '1280px',
      },
      transitionTimingFunction: {
        engineered: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        marquee: 'marquee var(--duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration, 30s) linear infinite',
        reveal: 'reveal 0.6s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        reveal: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;