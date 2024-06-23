/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1210px',
    },
    extend: {
      colors:{
        "primary": "#00A3CA",
        "rapidink": "#AA5C8F",
        "promo-digital": "#4B8A93",
        "premium-digital": "#244555",
        "inno-darker": "#004456",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "footer-bg": "url('../assets/images/footer-bg-victor.png')",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
       }
    },
  },
  plugins: [],
};
