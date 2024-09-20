/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily : {
        'nerko' : ['"Nerko One", cursive'],
        'wais' : ['"Roboto Condensed", system-ui'],
        'ubuntu' : ['"Ubuntu", sans-serif'],
        'dm' : ['DM Serif Text", serif']
      }
    },
  },
  plugins: [],
}
