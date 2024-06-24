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
    container: {
      center: true,
      padding: "1rem",
      screens: {
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        // 'footer-card-top': "url('https://images.pexels.com/photos/16848795/pexels-photo-16848795/free-photo-of-relaxation-in-luxembourg-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
        'footer-card-top': "url('/src/assets/images/footer-card-shape.svg')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}