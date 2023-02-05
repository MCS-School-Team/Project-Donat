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
    "light-brown-2": "rgba(177, 155, 142, 1)",
    "md-brown": "rgba(163, 99, 40, 1)",
    'brown': "rgba(88, 27, 27, 1)",
    'white': '#fafafa',
    'white-r': '#ffffff',
    'gray-300':'rgb(209 213 219)',
    'light-blue': 'rgba(37, 101, 160, 0.56)',
    'blue':'rgba(13, 7, 81, 1)',
    'red': '#ff0000'
    
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
