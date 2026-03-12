import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        momo: {
          primary: '#A50064',
          'primary-dark': '#8B0055',
          'primary-light': '#C7007A',
          secondary: '#D81B60',
          accent: '#FF4081',
          surface: '#FFF5F9',
          'surface-alt': '#FDE8F0',
          dark: '#1A1A2E',
          'dark-alt': '#16213E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
