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
        'mypourpre2':'#fcd3d2'
      },
    },
  },
  plugins: [],
};
