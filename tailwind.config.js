/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors : {
      'grey' : '#B6B5B3',
      'yellow' : '#E6DB35',
      'withe' : '#fff',
      'black' : '#000'
    },
    fontFamily : {
      'sans' : ['Roboto', 'sans-serif'],
      'bebas' : ['Bebas Neue', 'sans-serif'],
      'raleway' : ['Raleway', 'sans-serif']
    },
    extend: {
      dropShadow: {
        '2xl': '6px 6px 2px rgba(230, 219, 53, 1)',
      },
    },
  },
  plugins: [],
}

