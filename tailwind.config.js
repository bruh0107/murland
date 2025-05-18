/** @type {import('tailwindcss').Config} */

/** Как конфигурировать `Tailwind CSS` #{https://tailwindcss.ru/docs/configuration/} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      main: 'var(--nunito)',
      second: 'var(--sa-long-beach)',
    },
    colors: {
      white: 'var(--white-color)',
      black: 'var(--black-color)',
    },
    extend: {
      colors: {
        secondary: 'var(--secondary-color)',
        'primary-700': 'var(--primary-color-700)',
        'primary-600': 'var(--primary-color-600)',
        'primary-550': 'var(--primary-color-550)',
        primary: 'var(--primary-color-500)',
        'primary-400': 'var(--primary-color-400)',
        'primary-300': 'var(--primary-color-300)',
        'accent-600': 'var(--primary-color-600)',
        accent: 'var(--accent-color-500)',
        'accent-400': 'var(--accent-color-400)',
        background: 'var(--background-color)',
        dark: 'var(--dark-color)',
        delete: 'var(--delete-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
