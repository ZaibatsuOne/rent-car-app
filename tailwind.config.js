/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary900: "#0A196F",
        primary800: "#102587",
        primary700: "#1A37A7",
        primary600: "#264BC8",
        primary500: "#3563E9",
        primary400: "#658DF1",
        primary300: "#85A8F8",
        primary200: "#AEC8FC",
        primary100: "#D6E4FD",
        success900: "#3B6506",
        success800: "#4C7A0B",
        success700: "#659711",
        success600: "#7FB519",
        success500: "#9CD323",
        success400: "#BCE455",
        success300: "#D3F178",
        success200: "#E8FAA6",
        success100: "#F5FCD2",
        error900: "#7A0619",
        error800: "#930B16",
        error700: "#B71112",
        error600: "#DB2719",
        error500: "#FF4423",
        error400: "#FF7F59",
        error300: "#FFA37A",
        error200: "#FFC8A6",
        error100: "#FFE7D3",
        warning900: "#7A4D0B",
        warning800: "#936312",
        warning700: "#B7821D",
        warning600: "#DBA32A",
        warning500: "#FFC73A",
        warning400: "#FFD96B",
        warning300: "#FFE488",
        warning200: "#FFEFB0",
        warning100: "#FFF8D7",
        information900: "#102E7A",
        information800: "#1A4393",
        information700: "#2A60B7",
        information600: "#3D81DB",
        information500: "#54A6FF",
        information400: "#7EC2FF",
        information300: "#98D3FF",
        information200: "#BAE5FF",
        information100: "#DCF3FF",
        secondary900: "#040815",
        secondary800: "#080C19",
        secondary700: "#0D121F",
        secondary600: "#131825",
        secondary500: "#1A202C",
        secondary400: "#596780",
        secondary300: "#90A3BF",
        secondary200: "#C3D4E9",
        secondary100: "#E0E9F4",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
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
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
