/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { lg: "1024px", xl: "1200px" } },
    extend: {
      colors: {
        // romantic + modern palette
        blush:   { 50:"#fff1f4",100:"#ffe4ea",200:"#fecdd8",300:"#fda4b0",400:"#fb7189",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337" },
        rose:    { 50:"#fff1f5",100:"#ffe4ef",200:"#fecddc",300:"#fba4c2",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843" },
        plum:    { 50:"#f6f0ff",100:"#eee5ff",200:"#dcc9ff",300:"#c7a7ff",400:"#a777ff",500:"#7c3aed",600:"#6d28d9",700:"#5b21b6",800:"#4c1d95",900:"#3b0764" },
        midnight:{ 50:"#f5f7fb",100:"#e9eef7",200:"#c9d6ed",300:"#a7b9de",400:"#7e93c9",500:"#5b72b2",600:"#445a97",700:"#384b7b",800:"#2f3f66",900:"#232d49" },
        ink:     "#0f172a",      // text
        paper:   "#ffffff"       // background
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 10px 30px -8px rgba(16,24,40,.15)",
      },
      borderRadius: { xl: "1.25rem", "2xl": "1.5rem" },
    },
  },
  plugins: [],
};
