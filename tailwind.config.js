/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      lg: { max: '1440px' },
      md: { max: '960px' },
      tablet: { max: '900px' },
      fablet: { max: '480px' },
      small: { max: '375px' },
    },
  },

  plugins: [],
};
