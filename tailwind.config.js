/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadowMain': '0px 2px 6px 0px rgba(0, 0, 0, 0.15), 0px 1px 1px 0px rgba(255, 255, 255, 0.10) inset;',
      },
      colors: {
        'primary': '#1E1E1E',
        'lightGrey': '#5E5E5E',
        'disable': '#353535',
        'whiteGrey': '#868686',
        'successful': '#246BFD',
        'trobule': '#FF4848',
        'arrowColor': 'rgb(0,0,0,0) #FF4848 rgb(0,0,0,0) rgb(0,0,0,0)'
      },
      
    },
  },
  plugins: [],
}

