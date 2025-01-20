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
        'myrose1':'#e9605a',
        'myrose2':'#ff928f'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'serif'],
        'coda': ['Coda', 'serif'],
        'lexend': ['Lexend', 'serif'],
        'quantico': ['Quantico', 'serif'],
      },
    },
  },
  plugins: [],
};
