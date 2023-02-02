/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  "./src/components/**/*.{js,jsx,ts,tsx}",
   "./src/images/**/*.{js,jsx,ts,tsx}",
   "./public/index.html"
 ] ,
 
  theme: {
    container: {
      center: true,
    },
    colors: {
    'light-brown':'rgba(250, 244, 238, 1)',
    'white': '#fafafa',
    'brown': 'rgba(88, 27, 27, 1)',
    'blue':'rgba(13, 7, 81, 1)',
    
    },
    fontFamily:{
     Chewy:['Chewy', 'cursive']
    },
    extend: {
      width: {
        "960" : "1100px",
      },
    },
  },
  plugins: [],
}
