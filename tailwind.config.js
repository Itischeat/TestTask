/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'myShd': '0px 2px 6px 0px rgba(0, 0, 0, 0.15), 0px 1px 1px 0px rgba(255, 255, 255, 0.10) inset;',
        'new': '0px 4px 6px 0px rgba(0, 0, 0, 0.15), inset 0px 1px 1px 0px rgba(255, 255, 255, 0.10) ;'
      },
      colors: {
        'primary': '#1E1E1E',
        'Wh': '#5E5E5E',
        'disable': '#353535',
        'myGrey': '#868686',
        'brhv': '#246BFD',
        'trobule': '#FF4848',
        'arrowCol': 'rgb(0,0,0,0) #FF4848 rgb(0,0,0,0) rgb(0,0,0,0)'
      },
      
    },
  },
  plugins: [],
}

