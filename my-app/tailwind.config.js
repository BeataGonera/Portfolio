
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

  colors: {
    'black': '#0C0C0C',
    'silver': '#282828', 
    'yellow-orange': '#FFD540', 
    'white': '#FFFFFF'
  },

  fontFamily:{
    'sans': ['Josefin Sans', 'sans-serif']
  }, 

    extend: {
      gridTemplateColumns: {
        '3': '3fr 12fr 1fr',

        // Complex site-specific column configuration
        // 'footer': '200px minmax(900px, 1fr) 100px',
    },
  },
  plugins: [],
}
}
