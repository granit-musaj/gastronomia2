const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf7f3",
          100: "#f7e5d6",
          200: "#f0c9aa",
          300: "#e8a77a",
          400: "#e18954",
          500: "#d46a2a",
          600: "#b75220",
          700: "#913c1c",
          800: "#6a2c18",
          900: "#4f2114"
        }
      }
    }
  },
  plugins: []
};

export default config;
