/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#036B52',
        secondary: '#2FC18C',
        tertiary: '#421981',
        quaternary: '#056CF9',
        success: '#3CB371',
        info: '#1E90FF',
        warning: '#FFD700',
        danger: '#DC143C',
        light: '#F0F8FF',
        dark: '#000000',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
