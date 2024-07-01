/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "lg": "1056px",
        "xl": "1210px",
        "2xl": "1210px",
      },
    },
    extend: {
      colors: {
        "inno-darker": "#004456",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        primary_text: {
          DEFAULT: "hsl(var(--primary-text))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        secondary_text: {
          DEFAULT: "hsl(var(--secondary-text))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        rapidink: {
          DEFAULT: "hsl(var(--rapidink))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        promo_digital: {
          DEFAULT: "hsl(var(--promo-digital))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        premium_digital: {
          DEFAULT: "hsl(var(--premium-digital))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-red": {
          "0%": { transform: "scale(0.8)",boxShadow: "0 0 0 0 #FF5670" },
          "70%": { transform: "scale(1)",boxShadow: "0 0 0 8px rgba(255, 86, 111, 0.2)" },
          "100%": { transform: "scale(0.8)" }
        },
        "pulse-blue": {
          "0%": { transform: "scale(0.8)",boxShadow: "0 0 0 0 #3ED0A1" },
          "70%": { transform: "scale(1)",boxShadow: "0 0 0 8px rgba(62, 208, 162, 0.2)" },
          "100%": { transform: "scale(0.8)" }
        },
        "pulse-sky": {
          "0%": { transform: "scale(0.8)",boxShadow: "0 0 0 0 #46C9EE" },
          "70%": { transform: "scale(1)",boxShadow: "0 0 0 8px rgba(70, 202, 238, 0.2)" },
          "100%": { transform: "scale(0.8)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-red": "pulse-red 2s infinite",
        "pulse-blue": "pulse-blue 3s infinite",
        "pulse-sky": "pulse-sky 4s infinite",
      },
      boxShadow: {
        'card-shadow': '0 4px 60px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}