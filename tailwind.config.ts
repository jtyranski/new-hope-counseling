import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF7EF',
          100: '#F5ECDA',
          200: '#EBDAB6',
          300: '#DFC48C',
          400: '#C4A265',
          500: '#B08D4A',
          600: '#96753C',
          700: '#7A5D32',
          800: '#5E472A',
          900: '#453523',
        },
        slate_blue: {
          50: '#F0F4F7',
          100: '#D9E2EA',
          200: '#B3C5D5',
          300: '#8DA8C0',
          400: '#678BAB',
          500: '#4A6E8F',
          600: '#3A5770',
          700: '#2C4254',
          800: '#1E2D3A',
          900: '#161F28',
        },
        sage: {
          50: '#F2F5F2',
          100: '#E0E8E0',
          200: '#C1D1C1',
          300: '#A2BAA2',
          400: '#7D9E7D',
          500: '#5F8260',
          600: '#4B674C',
          700: '#394E3A',
          800: '#283528',
          900: '#1A231A',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
