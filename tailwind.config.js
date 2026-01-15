/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
    theme: {
        extend:{
            fontFamily:{
                fancy: ['"Monsieur La Doulaise"', 'cursive'],
            }
        },
    container: {
      padding: '2rem',
    },
  },
  plugins: [],
}
