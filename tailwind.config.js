/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'error-red': 'hsl(0, 100%, 66%)',
        'light-grayish-violet': 'hsl(270, 3%, 87%)',
        'dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)',
      },
    },
  },
  plugins: [],
};
