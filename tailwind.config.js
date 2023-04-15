import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
  extend: {
    colors: {
      'moderate-blue': 'hsl(238, 40%, 52%)',
      'soft-red': 'hsl(358, 79%, 66%)',
      'light-grayish-blue': 'hsl(239, 57%, 85%)',
      'pale-red': 'hsl(357, 100%, 86%)',
      'dark-blue': 'hsl(212, 24%, 26%)',
      'grayish-blue': 'hsl(211, 10%, 45%)',
      'light-gray': 'hsl(223, 19%, 93%)',
      'very-light-gray': 'hsl(228, 33%, 97%)',
      white: 'hsl(0, 0%, 100%)',
    },

    fontFamily: {
      sans: ['Rubik', ...fontFamily.sans],
    },
  },
};
export const plugins = [];
