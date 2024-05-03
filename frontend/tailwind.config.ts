import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      black: '#232323',
      green: '#55B481',
      'side-gray': '#444444',
      gray: '#BBBBBB',
      white: '#FFFFFF',
    },
    extend: {
      textShadow: {
        green: '20px 20px 20px 20px #55B481',
      },
      spacing: {
        '100': '25rem',
        '110': '30rem',
        '120': '35rem',
        '130': '40rem',
        '140': '45rem',
        '150': '50rem',
        '160': '55rem',
        '170': '60rem',
        '180': '65rem',
        '190': '70rem',
        '200': '75rem',
        '210': '80rem',
        '220': '85rem',
        '230': '90rem',
        '240': '95rem',
        '242': '96rem',
      },
    },
  },
  variants: {
    extend: {
      textShadow: ['responsive'],
      scrollbar: ['rounded', 'dark', 'thin', 'hidden'],
    },
  },
  plugins: [],
};
export default config;
