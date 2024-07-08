/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors: {
      'grey': '#B6B5B3',
      'yellow': '#E6DB35',
      'withe': '#fff',
      'black': '#000',
      'red': '#910019'
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'bebas': ['Bebas Neue', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif']
    },
    extend: {
      dropShadow: {
        '2xl': '6px 6px 2px rgba(230, 219, 53, 1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.template-areas-form': {
          'grid-template-areas': `
            "nom prenom"
            "name lastname"
            "adresse adresse"
            "email email"
            "error error"
            "title title"
            "subject subject"
            "mg mg"
            "msg msg"
            "btn btn"
          `,
        },
        '.area-nom': {
          'grid-area': 'nom',
        },
        '.area-prenom': {
          'grid-area': 'prenom',
        },
        '.area-name': {
          'grid-area': 'name',
        },
        '.area-lastname': {
          'grid-area': 'lastname',
        },
        '.area-adresse': {
          'grid-area': 'adresse', 
        },
        '.area-email': {
          'grid-area': 'email',
        },
        '.area-title': {
          'grid-area': 'title',
        },
        '.area-subject': {
          'grid-area': 'subject',
        },
        '.area-msg': {
          'grid-area': 'msg',
        },
        '.area-error' : {
          'grid-area' : 'error'
        }, 
        '.area-btn' : {
          'grid-area' : 'btn'
        }, 

      };

      addUtilities(newUtilities);
    },
  ],
}
