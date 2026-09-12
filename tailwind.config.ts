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
      keyframes: {
        reveal: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;