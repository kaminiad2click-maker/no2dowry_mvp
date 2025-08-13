/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fff1f5",
          100: "#ffe4e9",
          200: "#fecdd6",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",   // rose-500
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337"
        },
        accent: {
          500: "#a21caf",   // fuchsia-ish
          600: "#86198f"
        }
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px rgba(16,24,40,0.08)"
      }
    },
  },
  plugins: [],
};
