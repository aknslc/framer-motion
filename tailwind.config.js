/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AD1B65',
        header: "#21243D",
        paragraph: "#646464",
        blue: "#EDF7FA",
        darkBlue: "#00A8CC"
      },

      backgroundImage: {
        'custom-image': "url('../src/assets/images/background.jpg')",
      },
      fontFamily: {
        lumanosimo: ['Lumanosimo', 'cursive'],
      },
      screens: {
        // Burada kendi ekran boyutlarınızı tanımlayabilirsiniz
        // Örneğin:
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '992px',
          xl: '1024px',
        },
      },
    },
  },
  plugins: [],
}

