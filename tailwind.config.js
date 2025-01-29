/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'myviolet':'#5a55cd',
        'myturquoise':'#01c3cb',
        'mypourpre':'#ff7073',
        'myviolet2':'#eae9fb',
        'myturquoise2':'#e8fdfe',
        'mypourpre2':'#fcd3d2',
        'mybleu1':'#4f52ff',
        'mybleu2':'#91b3fa',
        'mybleu3':'#4042e2',
        'mybleu4':'#e9effd',
        'myrose1':'#e9605a',
        'myrose2':'#ff928f',
        'myrose3':'#fadcda',
        'mygreen':'#469f78',
        'mygreen2':'#e6f1ec',
        'myyellow':'#f3cb5c',
        'myyellow2':'#ffeebf',
        'mypink':'#ea8383',
        'myblue':'#87ccdb',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'serif'],
        'coda': ['Coda', 'serif'],
        'lexend': ['Lexend', 'serif'],
        'quantico': ['Quantico', 'serif'],
        'open': ['Open Sans', 'serif'],
        'fira': ['Fira Sans', 'sans serif'],
        'noto': ['Noto Sans', 'sans serif'],
      },
    },
  },
  plugins: [],
  plugins: [],
};

