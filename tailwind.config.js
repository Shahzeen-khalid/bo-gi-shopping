/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors : {
        primary : "#E8ADF8",
        secondary : "#6930c3",
        outline : "#8848A4",
        outline2 : "#570530",
        set1 : "#D052B0",
        set2 : "#AD67CB",
   
       
      },
      container : {
        center : true, 
        padding : {
          DEFAULT : "1rem",
          sm : "3rem",
        }
      }
    },
  },
  plugins: [],
}