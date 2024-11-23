/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Path to the HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Path to JavaScript, TypeScript, JSX, and TSX files
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-top': '0 -5px 10px -3px rgba(0, 0, 0, 0.2)', // Custom shadow on top
      },
    },
  },
  plugins: [], // No plugins being used in this configuration
}
