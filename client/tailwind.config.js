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
    'light-blue': 'rgba(108, 181, 249, 0.56)',
    'blue':'rgba(13, 7, 81, 1)',
    'red': '#ff0000',
    'yellow':'rgba(217, 119, 6)',
    'slate-900':"rgb(15 23 42)",
    'slate-400': "rgb(148 163 184)",
    'slate-500': "rgb(100 116 139)",
     'slate-600': "rgb(71 85 105)",   
     'slate-700': "rgb(51 65 85)" ,  
     'slate-800': "rgb(30 41 59)",
      'cayn': "rgb(8 145 178)"
    
    },
    fontFamily:{
     Chewy:['Chewy', 'cursive']
    },
    extend: {
      backgroundImage: {
        'mount':"url('./images/mount.png')",
        'mounti2':"url('./images/mounti4.jpg')"
       
      },
      width: {
        "960" : "1100px",
      },
    },
  },
  plugins: [],
}
