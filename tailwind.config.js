const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
    colors: {
      purple: '#633CFF',
      'purple-hover': '#BEADFF',
      'purple-light': '#EFEBFF',
      black: '#333333',
      gray: '#737373',
      'light-gray': '#D9D9D9',
      'off-white': '#FAFAFA',
      white: '#FFFFFF',
      red: '#FF3939',
    },
    dropShadow: {
      DEFAULT: '0 0 10px rgba(99, 60, 255, 0.25)',
    },
  },
  plugins: [addDynamicIconSelectors()],
};
