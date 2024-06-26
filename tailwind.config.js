/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['sans-serif','Arial']
      },
      colors:{
        'text1': "#B0B0B0",
        'red': '#DC4A2D',
        'gray': '#888888',
        'light-red':'#FEF4F2',
        'pale': '#FED3CA',
        'lightgray':'#4F4F4F',
        'darkgray': '#3D3D3D',
        'darkergray':'#5D5D5D',
        'textgray': '#6E6D6D',
        'linegray': '#E7E7E7',
        'circlegray': '#D1D1D1',
        'lightergreen': '#ECFDF3',
        'lightgreen':'#ABEFC6',
        'darkgreen':'#17B26A',
        'darkergreen':'#067647',
        'textblack': '#344054'
      }
    },
  },
  plugins: [],
}